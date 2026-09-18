import React, { useState, useEffect } from "react";
import {
  CheckCircle,
  XCircle,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Clock,
  Award,
  AlertCircle,
  ArrowRight,
  Lightbulb,
  LogOut,
  Target,
  Sparkles,
  TrendingUp,
  RefreshCw,
  BarChart2,
  Check,
  HelpCircle,
  FileSpreadsheet,
  Brain,
  Compass,
  Scissors,
} from "lucide-react";
import { Question, UserHistory } from "../types";
import { TAXONOMY, getDisciplineForTopic, getTopicsForDiscipline, getQuestionDiscipline, ALL_TOPICS } from "../data/taxonomy";
import {
  FormattedText,
  applyFormatToString,
  stripFormatting,
  FormatType,
} from "../utils/textFormatter";
import QuestionFormatModal from "./QuestionFormatModal";
import QuestionInterpretationBar from "./QuestionInterpretationBar";
import FloatingSelectionToolbar from "./FloatingSelectionToolbar";

interface QuizProps {
  questions: Question[];
  history: UserHistory[];
  onAddHistory: (qId: string, selectedIdx: number, isCorrect: boolean) => void;
  onReceiveXp: (amount: number) => void;
  onUnlockBadge: (badgeId: string) => void;
  onAlert?: (msg: string, title?: string) => void;
  onConfirm?: (
    message: string,
    title?: string,
    isDanger?: boolean,
    confirmText?: string,
    cancelText?: string
  ) => Promise<boolean>;
  initialBanca?: string;
  initialAssunto?: string;
  initialDisciplina?: string;
  onUpdateQuestion?: (updatedQ: Question) => Promise<boolean> | void;
}

export default function Quiz({
  questions,
  history,
  onAddHistory,
  onReceiveXp,
  onUnlockBadge,
  onAlert,
  onConfirm,
  initialBanca = "Todos",
  initialAssunto = "Todos",
  initialDisciplina = "Todas",
  onUpdateQuestion,
}: QuizProps) {
  // Mode: "practice" (Treino livre 5, 15, 30 ou 60 Qs com filtros) | "official_ibge" (Simulado 60 Qs Edital IBGE AOR)
  const [quizMode, setQuizMode] = useState<"practice" | "official_ibge">("practice");
  const [selectedBanca, setSelectedBanca] = useState<string>(initialBanca);
  const [selectedDisciplina, setSelectedDisciplina] = useState<string>(initialDisciplina);
  const [selectedAssunto, setSelectedAssunto] = useState<string>(initialAssunto);
  const [numQuestions, setNumQuestions] = useState<number>(5);

  const [activeSession, setActiveSession] = useState<boolean>(false);
  const [sessionQuestions, setSessionQuestions] = useState<Question[]>([]);
  const [sessionCompletedMode, setSessionCompletedMode] = useState<"practice" | "official_ibge">("practice");
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showExplanation, setShowExplanation] = useState<{ [key: number]: boolean }>({});
  const [quizStartTime, setQuizStartTime] = useState<number>(0);
  const [quizElapsedTime, setQuizEndTime] = useState<number>(0);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);

  // Interpretation, formatting and elimination states
  const questionCardRef = React.useRef<HTMLElement>(null);
  const [isFormatModalOpen, setIsFormatModalOpen] = useState(false);
  const [eliminatedOptions, setEliminatedOptions] = useState<{ [qIdx: number]: Set<number> }>({});

  const handleSaveFormattedQuestion = (updatedQ: Question) => {
    setSessionQuestions((prev) =>
      prev.map((q, idx) => (idx === currentIdx ? updatedQ : q))
    );
    if (onUpdateQuestion) {
      onUpdateQuestion(updatedQ);
    }
  };

  const handleApplyFormatToCurrentQuestion = (format: FormatType, selectedSnippet?: string) => {
    if (!sessionQuestions[currentIdx]) return;
    const currentQ = sessionQuestions[currentIdx];

    let targetSnippet = selectedSnippet;
    if (!targetSnippet) {
      const sel = window.getSelection();
      if (sel && !sel.isCollapsed) {
        targetSnippet = sel.toString().trim();
      }
    }

    if (!targetSnippet) {
      setIsFormatModalOpen(true);
      return;
    }

    // Se estiver no enunciado
    if (currentQ.text.includes(targetSnippet)) {
      const updatedText = applyFormatToString(currentQ.text, targetSnippet, format);
      const updatedQ = { ...currentQ, text: updatedText };
      handleSaveFormattedQuestion(updatedQ);
      return;
    }

    // Se estiver em alguma alternativa
    const optIdx = currentQ.options.findIndex((opt) => opt.includes(targetSnippet));
    if (optIdx !== -1) {
      const updatedOpt = applyFormatToString(currentQ.options[optIdx], targetSnippet, format);
      const nextOptions = [...currentQ.options];
      nextOptions[optIdx] = updatedOpt;
      const updatedQ = { ...currentQ, options: nextOptions };
      handleSaveFormattedQuestion(updatedQ);
      return;
    }

    // Fallback: abre modal
    setIsFormatModalOpen(true);
  };

  const handleClearCurrentHighlights = () => {
    if (!sessionQuestions[currentIdx]) return;
    const currentQ = sessionQuestions[currentIdx];
    const cleanedText = stripFormatting(currentQ.text);
    const cleanedOptions = currentQ.options.map((opt) => stripFormatting(opt));
    const updatedQ = {
      ...currentQ,
      text: cleanedText,
      options: cleanedOptions,
    };
    handleSaveFormattedQuestion(updatedQ);
  };

  const toggleEliminateOption = (e: React.MouseEvent, optIdx: number) => {
    e.stopPropagation();
    setEliminatedOptions((prev) => {
      const currentSet = new Set(prev[currentIdx] || []);
      if (currentSet.has(optIdx)) {
        currentSet.delete(optIdx);
      } else {
        currentSet.add(optIdx);
      }
      return { ...prev, [currentIdx]: currentSet };
    });
  };

  useEffect(() => {
    if (initialBanca) {
      setSelectedBanca(initialBanca);
    }
  }, [initialBanca]);

  useEffect(() => {
    if (initialDisciplina) {
      setSelectedDisciplina(initialDisciplina);
    }
  }, [initialDisciplina]);

  useEffect(() => {
    if (initialAssunto) {
      setSelectedAssunto(initialAssunto);
      if (initialAssunto !== "Todos") {
        const disc = getDisciplineForTopic(initialAssunto);
        if (disc) {
          setSelectedDisciplina(disc.name);
        }
      }
    }
  }, [initialAssunto]);

  // Handle discipline filter change
  const handleDisciplinaChange = (newDisc: string) => {
    setSelectedDisciplina(newDisc);
    if (newDisc !== "Todas") {
      const topicsForDisc = getTopicsForDiscipline(newDisc);
      if (!topicsForDisc.includes(selectedAssunto)) {
        setSelectedAssunto("Todos");
      }
    }
  };

  // Set up available filters strictly from questions present in database
  const availableBancas = ["Todos", ...Array.from(new Set(questions.map((q) => q.banca).filter(Boolean))).sort()];
  
  const availableDisciplinasList = Array.from(
    new Set(questions.map((q) => getQuestionDiscipline(q)).filter(Boolean))
  ).sort();
  const availableDisciplinas = ["Todas", ...availableDisciplinasList];

  const availableAssuntos =
    selectedDisciplina === "Todas"
      ? ["Todos", ...Array.from(new Set(questions.map((q) => q.assunto).filter(Boolean))).sort()]
      : [
          "Todos",
          ...Array.from(
            new Set(
              questions
                .filter((q) => getQuestionDiscipline(q) === selectedDisciplina)
                .map((q) => q.assunto)
                .filter(Boolean)
            )
          ).sort(),
        ];

  // Exclude successfully answered questions (No Repeated Questions priority)
  const answeredSuccessfulIds = history.filter((h) => h.isCorrect).map((h) => h.questionId);

  const startQuizSession = (overrideMode?: "practice" | "official_ibge", overrideAssunto?: string) => {
    const activeMode = overrideMode || quizMode;
    const activeAssunto = overrideAssunto !== undefined ? overrideAssunto : selectedAssunto;

    let sessionItems: Question[] = [];

    if (activeMode === "official_ibge") {
      // IBGE AOR Official 60 Question Simulation Distribution
      let basePool = questions;
      if (selectedBanca !== "Todos") {
        basePool = basePool.filter((q) => q.banca === selectedBanca);
      }

      const isAdm = (q: Question) => {
        const ass = (q.assunto || "").toLowerCase();
        return (
          ass.includes("administra") ||
          ass.includes("gerencia") ||
          ass.includes("gestão") ||
          ass.includes("gestao") ||
          ass.includes("desempenho") ||
          ass.includes("recursos humanos") ||
          ass.includes("pessoas") ||
          ass.includes("organiza") ||
          ass.includes("planejamento") ||
          ass.includes("ética") ||
          ass.includes("etica") ||
          ass.includes("ibge")
        );
      };

      const isPort = (q: Question) => {
        const ass = (q.assunto || "").toLowerCase();
        return (
          ass.includes("portug") ||
          ass.includes("sintaxe") ||
          ass.includes("concordância") ||
          ass.includes("concordancia") ||
          ass.includes("regência") ||
          ass.includes("regencia") ||
          ass.includes("crase") ||
          ass.includes("pontuação") ||
          ass.includes("pontuacao") ||
          ass.includes("ortografia") ||
          ass.includes("acentuação") ||
          ass.includes("acentuacao") ||
          ass.includes("morfologia") ||
          ass.includes("compreensão") ||
          ass.includes("texto") ||
          ass.includes("hífen") ||
          ass.includes("hifen")
        );
      };

      const isRlq = (q: Question) => {
        const ass = (q.assunto || "").toLowerCase();
        return (
          ass.includes("raciocínio") ||
          ass.includes("raciocinio") ||
          ass.includes("lógico") ||
          ass.includes("logico") ||
          ass.includes("lógica") ||
          ass.includes("logica") ||
          ass.includes("matemática") ||
          ass.includes("matematica") ||
          ass.includes("geometria") ||
          ass.includes("pitágoras") ||
          ass.includes("pitagoras") ||
          ass.includes("condicional") ||
          ass.includes("equivalência") ||
          ass.includes("equivalencia") ||
          ass.includes("negação") ||
          ass.includes("negacao") ||
          ass.includes("proposição") ||
          ass.includes("proposicao") ||
          ass.includes("porcentagem") ||
          ass.includes("probabilidade") ||
          ass.includes("combinatória") ||
          ass.includes("combinatoria") ||
          ass.includes("conjuntos") ||
          ass.includes("tabela verdade") ||
          ass.includes("sequência") ||
          ass.includes("sequencia")
        );
      };

      const isInfo = (q: Question) => {
        const ass = (q.assunto || "").toLowerCase();
        return (
          ass.includes("informática") ||
          ass.includes("informatica") ||
          ass.includes("computador") ||
          ass.includes("excel") ||
          ass.includes("word") ||
          ass.includes("windows") ||
          ass.includes("hardware") ||
          ass.includes("software") ||
          ass.includes("internet") ||
          ass.includes("navegador") ||
          ass.includes("arquivos") ||
          ass.includes("pastas") ||
          ass.includes("segurança") ||
          ass.includes("seguranca")
        );
      };

      const isProcessoOrg = (q: Question) => {
        const text = ((q.assunto || "") + " " + (q.text || "") + " " + (q.generalExplanation || "")).toLowerCase();
        return (
          text.includes("processo organizacional") ||
          text.includes("planejamento") ||
          text.includes("organização") ||
          text.includes("organizacao") ||
          text.includes("direção") ||
          text.includes("direcao") ||
          text.includes("controle") ||
          text.includes("podc") ||
          text.includes("funções administrativas") ||
          text.includes("funcoes administrativas") ||
          text.includes("função administrativa") ||
          text.includes("tomada de decisão") ||
          text.includes("tomada de decisao")
        );
      };

      const getSampleFromSubPool = (subPool: Question[], targetCount: number) => {
        const uncompleted = subPool.filter((q) => !answeredSuccessfulIds.includes(q.id));
        const uncompletedShuffled = [...uncompleted].sort(() => 0.5 - Math.random());

        if (uncompletedShuffled.length >= targetCount) {
          return uncompletedShuffled.slice(0, targetCount);
        } else {
          // Fill remainder from completed if needed
          const completedShuffled = subPool
            .filter((q) => answeredSuccessfulIds.includes(q.id))
            .sort(() => 0.5 - Math.random());
          const combined = [...uncompletedShuffled, ...completedShuffled];
          return combined.slice(0, Math.min(targetCount, combined.length));
        }
      };

      const getAdmQuestions = (targetCount = 30) => {
        const admPool = basePool.filter(isAdm);
        const processoPool = admPool.filter(isProcessoOrg);
        const outrosPool = admPool.filter((q) => !isProcessoOrg(q));

        // Regra de peso: Maioria (~20 Qs) sobre Processo Organizacional/PODC e ~10 Qs sobre outros assuntos
        const targetProcesso = Math.round(targetCount * (20 / 30)); // 20
        const targetOutros = targetCount - targetProcesso; // 10

        const processoSample = getSampleFromSubPool(processoPool, targetProcesso);
        const outrosSample = getSampleFromSubPool(outrosPool, targetOutros);

        let combined = [...processoSample, ...outrosSample];

        if (combined.length < targetCount) {
          const selectedIds = new Set(combined.map((q) => q.id));
          const remainingAdm = admPool.filter((q) => !selectedIds.has(q.id)).sort(() => 0.5 - Math.random());
          const needed = targetCount - combined.length;
          combined = [...combined, ...remainingAdm.slice(0, needed)];
        }

        return combined.sort(() => 0.5 - Math.random());
      };

      const admQuestions = getAdmQuestions(30);
      const portQuestions = getSampleFromSubPool(basePool.filter(isPort), 15);
      const rlqQuestions = getSampleFromSubPool(basePool.filter(isRlq), 10);
      const infoQuestions = getSampleFromSubPool(basePool.filter(isInfo), 5);

      sessionItems = [...admQuestions, ...portQuestions, ...rlqQuestions, ...infoQuestions];

      if (sessionItems.length < 60) {
        const existingIds = new Set(sessionItems.map((q) => q.id));
        const remainingPool = basePool.filter((q) => !existingIds.has(q.id)).sort(() => 0.5 - Math.random());
        const backfillNeeded = 60 - sessionItems.length;
        sessionItems = [...sessionItems, ...remainingPool.slice(0, backfillNeeded)];
      }
    } else {
      // Practice mode (5, 15, 30, or 60 questions with user filters)
      let pool = questions;

      if (selectedBanca !== "Todos") {
        pool = pool.filter((q) => q.banca === selectedBanca);
      }
      if (selectedDisciplina !== "Todas") {
        pool = pool.filter((q) => getQuestionDiscipline(q) === selectedDisciplina);
      }
      if (activeAssunto !== "Todos") {
        pool = pool.filter((q) => q.assunto === activeAssunto);
      }

      // Filter out successfully answered questions, unless pool is too small
      const uncompleted = pool.filter((q) => !answeredSuccessfulIds.includes(q.id));
      if (uncompleted.length >= 2) {
        pool = uncompleted;
      }

      // Shuffle pool randomly
      const shuffled = [...pool].sort(() => 0.5 - Math.random());

      // Target count
      sessionItems = shuffled.slice(0, Math.min(numQuestions, shuffled.length));
    }

    if (sessionItems.length === 0) {
      if (onAlert) {
        onAlert(
          "Ops! Banco de dados sem perguntas para esses filtros ou você já acertou todas as questões! Tente zerar seu histórico ou mudar os filtros.",
          "Sem Perguntas Disponíveis"
        );
      } else {
        alert(
          "Ops! Banco de dados sem perguntas para esses filtros ou você já acertou todas as questões! Tente zerar seu histórico ou mudar os filtros."
        );
      }
      return;
    }

    setSessionCompletedMode(activeMode);
    setSessionQuestions(sessionItems);
    setCurrentIdx(0);
    setSelectedAnswers({});
    setShowExplanation({});
    setQuizStartTime(Date.now());
    setQuizCompleted(false);
    setActiveSession(true);
  };

  const handleExitQuiz = async () => {
    const confirmFn = onConfirm || (async (msg) => window.confirm(msg));
    const confirmed = await confirmFn(
      "Deseja realmente sair da sessão? Todo o progresso atual desta sessão será perdido.",
      "Sair da Sessão",
      true, // isDanger
      "Sair",
      "Continuar"
    );
    if (confirmed) {
      setActiveSession(false);
      setQuizCompleted(false);
    }
  };

  const handleSelectOption = (optIdx: number) => {
    if (selectedAnswers[currentIdx] !== undefined) return; // Answer locked once selected

    const currentQuestion = sessionQuestions[currentIdx];
    const isCorrect = optIdx === currentQuestion.correctIndex;

    const newAnswers = { ...selectedAnswers, [currentIdx]: optIdx };
    setSelectedAnswers(newAnswers);

    const newExps = { ...showExplanation, [currentIdx]: true };
    setShowExplanation(newExps);

    // Save to user history
    onAddHistory(currentQuestion.id, optIdx, isCorrect);
  };

  const nextQuestion = () => {
    if (currentIdx < sessionQuestions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      finishQuiz();
    }
  };

  const prevQuestion = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    }
  };

  const finishQuiz = () => {
    // Calculations of results
    setQuizEndTime(Math.round((Date.now() - quizStartTime) / 1000));
    setQuizCompleted(true);
    setActiveSession(false);

    // Give base rewards
    let correctCount = 0;
    sessionQuestions.forEach((q, i) => {
      if (selectedAnswers[i] === q.correctIndex) correctCount++;
    });

    const accuracy = correctCount / sessionQuestions.length;
    const gainedXp = correctCount * 15 + (accuracy === 1 ? 50 : 0);
    onReceiveXp(gainedXp);

    // Trigger Achievements check
    onUnlockBadge("ach_welcome"); // First steps
    if (accuracy === 1 && sessionQuestions.length >= 1) {
      onUnlockBadge("ach_perfect"); // Gabarito Perfeito 100%
    }
    if (
      sessionQuestions.some(
        (q) =>
          q.banca?.toLowerCase().includes("ibge") ||
          q.disciplina?.toLowerCase().includes("ibge") ||
          q.assunto?.toLowerCase().includes("ibge")
      )
    ) {
      onUnlockBadge("ach_ibge"); // Foco no IBGE
    }
  };

  // Result Metrics
  let sessionCorrectCount = 0;

  const subjectBreakdown = {
    adm: { name: "Noções de Administração e Situações Gerenciais", correct: 0, total: 0, target: 30 },
    port: { name: "Língua Portuguesa", correct: 0, total: 0, target: 15 },
    rlq: { name: "Raciocínio Lógico Quantitativo", correct: 0, total: 0, target: 10 },
    info: { name: "Noções Básicas de Informática", correct: 0, total: 0, target: 5 },
  };

  // Detailed Topic Map for Diagnostic Recommendations
  const topicMap: Record<string, { total: number; correct: number; wrong: number }> = {};

  sessionQuestions.forEach((q, i) => {
    const isCorrect = selectedAnswers[i] === q.correctIndex;
    if (isCorrect) sessionCorrectCount++;

    // IBGE 4 Subject classification
    const ass = (q.assunto || "").toLowerCase();
    if (
      ass.includes("administra") ||
      ass.includes("gerencia") ||
      ass.includes("gestão") ||
      ass.includes("gestao") ||
      ass.includes("desempenho") ||
      ass.includes("pessoas") ||
      ass.includes("organiza") ||
      ass.includes("planejamento") ||
      ass.includes("ética") ||
      ass.includes("etica") ||
      ass.includes("ibge")
    ) {
      subjectBreakdown.adm.total++;
      if (isCorrect) subjectBreakdown.adm.correct++;
    } else if (
      ass.includes("portug") ||
      ass.includes("sintaxe") ||
      ass.includes("concordância") ||
      ass.includes("concordancia") ||
      ass.includes("regência") ||
      ass.includes("regencia") ||
      ass.includes("crase") ||
      ass.includes("pontuação") ||
      ass.includes("pontuacao") ||
      ass.includes("ortografia") ||
      ass.includes("acentuação") ||
      ass.includes("morfologia") ||
      ass.includes("compreensão") ||
      ass.includes("hífen")
    ) {
      subjectBreakdown.port.total++;
      if (isCorrect) subjectBreakdown.port.correct++;
    } else if (
      ass.includes("raciocínio") ||
      ass.includes("raciocinio") ||
      ass.includes("lógico") ||
      ass.includes("logico") ||
      ass.includes("lógica") ||
      ass.includes("matemática") ||
      ass.includes("matematica") ||
      ass.includes("geometria") ||
      ass.includes("pitágoras") ||
      ass.includes("condicional") ||
      ass.includes("equivalência") ||
      ass.includes("negação") ||
      ass.includes("proposição")
    ) {
      subjectBreakdown.rlq.total++;
      if (isCorrect) subjectBreakdown.rlq.correct++;
    } else if (
      ass.includes("informática") ||
      ass.includes("informatica") ||
      ass.includes("excel") ||
      ass.includes("word") ||
      ass.includes("windows") ||
      ass.includes("hardware") ||
      ass.includes("arquivos") ||
      ass.includes("pastas") ||
      ass.includes("segurança")
    ) {
      subjectBreakdown.info.total++;
      if (isCorrect) subjectBreakdown.info.correct++;
    }

    // Specific topic mapping
    const topicKey = q.assunto || "Geral";
    if (!topicMap[topicKey]) {
      topicMap[topicKey] = { total: 0, correct: 0, wrong: 0 };
    }
    topicMap[topicKey].total++;
    if (isCorrect) {
      topicMap[topicKey].correct++;
    } else {
      topicMap[topicKey].wrong++;
    }
  });

  const finalPercent =
    sessionQuestions.length > 0 ? Math.round((sessionCorrectCount / sessionQuestions.length) * 100) : 0;

  // Topics analyzed
  const topicList = Object.entries(topicMap).map(([topic, data]) => ({
    topic,
    total: data.total,
    correct: data.correct,
    wrong: data.wrong,
    percent: Math.round((data.correct / data.total) * 100),
  }));

  // Identify weak topics (where errors occurred or percent < 70)
  const weakTopics = topicList
    .filter((t) => t.wrong > 0 || t.percent < 70)
    .sort((a, b) => a.percent - b.percent || b.wrong - a.wrong);

  // Identify strong topics (100% accuracy)
  const strongTopics = topicList
    .filter((t) => t.percent === 100)
    .sort((a, b) => b.total - a.total);

  // Official IBGE AOR Criteria (Only for sessionCompletedMode === "official_ibge")
  const zeroedSubjects: string[] = [];
  if (subjectBreakdown.adm.total > 0 && subjectBreakdown.adm.correct === 0) zeroedSubjects.push(subjectBreakdown.adm.name);
  if (subjectBreakdown.port.total > 0 && subjectBreakdown.port.correct === 0) zeroedSubjects.push(subjectBreakdown.port.name);
  if (subjectBreakdown.rlq.total > 0 && subjectBreakdown.rlq.correct === 0) zeroedSubjects.push(subjectBreakdown.rlq.name);
  if (subjectBreakdown.info.total > 0 && subjectBreakdown.info.correct === 0) zeroedSubjects.push(subjectBreakdown.info.name);

  const passedMinTotalPoints = sessionCorrectCount >= 18;
  const passedAllSubjects = zeroedSubjects.length === 0;
  const isIbgeApproved = passedMinTotalPoints && passedAllSubjects;

  if (quizCompleted) {
    // ----------------------------------------------------
    // CASE 1: TREINO LIVRE / CADERNO DE QUESTÕES (5, 15, 30, 60 Qs)
    // ----------------------------------------------------
    if (sessionCompletedMode === "practice") {
      return (
        <div
          id="quiz-completed-result-dashboard"
          className="max-w-3xl mx-auto p-6 md:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm dark:bg-slate-900 dark:border-slate-800 animate-slide-in text-center my-6 space-y-6"
        >
          {/* Header Icon */}
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto text-blue-600 dark:bg-blue-955/30 dark:text-blue-400">
            <Target className="w-8 h-8" />
          </div>

          <div>
            <h2 className="text-2xl font-black text-slate-800 dark:text-slate-100 tracking-tight">
              Resultado da Sessão de Treino
            </h2>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
              Desempenho da sessão e diagnóstico pedagógico de aprendizado
            </p>
          </div>

          {/* Motivational Status Highlight */}
          <div className="text-left">
            {finalPercent >= 80 ? (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 dark:bg-emerald-950/30 dark:border-emerald-800 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-xs text-emerald-800 dark:text-emerald-300">
                    Excelente Rendimento! 🌟 ({finalPercent}% de acerto)
                  </h4>
                  <p className="text-xs text-emerald-700 dark:text-emerald-400 mt-0.5 leading-relaxed">
                    Você demonstrou ótimo domínio do conteúdo praticado nesta sessão de {sessionQuestions.length} questões!
                  </p>
                </div>
              </div>
            ) : finalPercent >= 60 ? (
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 dark:bg-blue-950/30 dark:border-blue-800 flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-xs text-blue-800 dark:text-blue-300">
                    Bom Aproveitamento! 👍 ({finalPercent}% de acerto)
                  </h4>
                  <p className="text-xs text-blue-700 dark:text-blue-400 mt-0.5 leading-relaxed">
                    Você está no caminho certo. Revise os pontos recomendados abaixo para consolidar seus 100%.
                  </p>
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 dark:bg-amber-955/30 dark:border-amber-800 flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-xs text-amber-800 dark:text-amber-300">
                    Treino em Desenvolvimento ({finalPercent}% de acerto)
                  </h4>
                  <p className="text-xs text-amber-700 dark:text-amber-400 mt-0.5 leading-relaxed">
                    O erro é parte fundamental da fixação! Veja o diagnóstico dos assuntos que precisam de mais atenção logo abaixo.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Metrics summary Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50/70 p-4 rounded-2xl border border-slate-150 dark:bg-slate-850 dark:border-slate-800">
            <div>
              <span className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">
                Respondidas
              </span>
              <span className="text-lg font-black text-slate-800 dark:text-slate-100 font-mono">
                {sessionQuestions.length} Qs
              </span>
            </div>
            <div>
              <span className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">
                Acertos
              </span>
              <span className="text-lg font-black text-emerald-600 dark:text-emerald-400 font-mono">
                {sessionCorrectCount} de {sessionQuestions.length}
              </span>
            </div>
            <div>
              <span className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">
                Aproveitamento
              </span>
              <span
                className={`text-lg font-black font-mono ${
                  finalPercent >= 70 ? "text-emerald-600" : finalPercent >= 40 ? "text-amber-500" : "text-rose-500"
                }`}
              >
                {finalPercent}%
              </span>
            </div>
            <div>
              <span className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">
                Tempo / XP
              </span>
              <span className="text-sm font-black text-blue-600 dark:text-blue-400 font-mono block mt-1">
                {Math.floor(quizElapsedTime / 60)}m {quizElapsedTime % 60}s <span className="text-xs text-slate-400">|</span> +
                {sessionCorrectCount * 15 + (finalPercent === 100 ? 50 : 0)} XP
              </span>
            </div>
          </div>

          {/* 🎯 DIAGNÓSTICO PEDAGÓGICO: ASSUNTOS PARA DEDICAR MAIS ATENÇÃO */}
          <div className="text-left space-y-3">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <h4 className="text-xs font-extrabold text-slate-700 dark:text-slate-200 uppercase tracking-wider">
                Diagnóstico Pedagógico da Sessão
              </h4>
            </div>

            {weakTopics.length > 0 ? (
              <div className="p-4 bg-amber-50/60 dark:bg-amber-955/15 border border-amber-200/70 dark:border-amber-900/30 rounded-2xl space-y-3">
                <div className="flex items-center gap-2 text-amber-900 dark:text-amber-300 font-bold text-xs">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Assuntos que você precisa dedicar mais atenção:</span>
                </div>

                <div className="space-y-2">
                  {weakTopics.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-white/90 dark:bg-slate-900/90 rounded-xl border border-amber-200/50 dark:border-amber-900/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                    >
                      <div>
                        <span className="font-bold text-slate-800 dark:text-slate-100 block">{item.topic}</span>
                        <span className="text-[11px] text-rose-600 dark:text-rose-400 font-semibold">
                          {item.wrong} {item.wrong === 1 ? "erro" : "erros"} ({item.correct} acerto(s) de {item.total} Qs)
                        </span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="px-2 py-0.5 bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400 font-bold rounded-lg text-[10px]">
                          {item.percent}% de acerto
                        </span>
                        <button
                          onClick={() => {
                            setSelectedAssunto(item.topic);
                            startQuizSession("practice", item.topic);
                          }}
                          className="px-2.5 py-1 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-extrabold text-[11px] shadow-xs cursor-pointer transition"
                        >
                          Treinar Este Assunto ➜
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-[11px] text-amber-800 dark:text-amber-300/80 leading-relaxed font-medium">
                  💡 <strong>Dica de Estudo:</strong> Revise os gabaritos comentados das questões erradas e faça uma rodada focada exclusivamente nestes assuntos para fixar a teoria.
                </p>
              </div>
            ) : (
              <div className="p-4 bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/70 dark:border-emerald-900/30 rounded-2xl flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <p className="text-xs text-emerald-800 dark:text-emerald-300 font-semibold leading-relaxed">
                  Excelente! Você não errou nenhuma questão nesta sessão. Todos os assuntos foram dominados com 100% de aproveitamento!
                </p>
              </div>
            )}
          </div>

          {/* Desempenho Detalhado por Assunto da Sessão */}
          {topicList.length > 0 && (
            <div className="text-left space-y-3">
              <h4 className="text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Desempenho Detalhado da Sessão
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {topicList.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-slate-50/80 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-800 space-y-1.5"
                  >
                    <div className="flex justify-between items-start text-xs gap-2">
                      <span className="font-bold text-slate-700 dark:text-slate-200 truncate">{item.topic}</span>
                      <span className="font-bold font-mono text-[11px] shrink-0 text-slate-500">
                        {item.correct}/{item.total} ({item.percent}%)
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${
                          item.percent >= 70 ? "bg-emerald-500" : item.percent >= 40 ? "bg-amber-500" : "bg-rose-500"
                        }`}
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => {
                setQuizCompleted(false);
                setActiveSession(false);
              }}
              className="flex-1 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-xl text-sm shadow-md transition duration-200 cursor-pointer"
            >
              Configurar Novo Treino
            </button>
            <button
              onClick={() => {
                startQuizSession("practice");
              }}
              className="flex-1 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-750 dark:text-slate-200 font-extrabold rounded-xl text-sm border border-slate-200 dark:border-slate-700 transition duration-200 cursor-pointer flex items-center justify-center gap-1.5"
            >
              <RefreshCw className="w-4 h-4" /> Repetir Treino
            </button>
          </div>
        </div>
      );
    }

    // ----------------------------------------------------
    // CASE 2: SIMULADO COMPLETO OFICIAL IBGE (AOR - 60 QUESTÕES)
    // ----------------------------------------------------
    return (
      <div
        id="quiz-completed-result-dashboard"
        className="max-w-3xl mx-auto p-6 md:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm dark:bg-slate-900 dark:border-slate-800 animate-slide-in text-center my-6 space-y-6"
      >
        <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-2 text-amber-500 dark:bg-amber-955/20">
          <Award className="w-8 h-8" />
        </div>

        <div>
          <h2 className="text-2xl font-black text-slate-800 dark:text-slate-100 tracking-tight">
            Resultado do Simulado IBGE (AOR)
          </h2>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            Pontuação oficial e critérios do edital para o cargo de Agente Operacional Regional
          </p>
        </div>

        {/* Official Approval Status Banner */}
        <div className="text-left">
          {isIbgeApproved ? (
            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 dark:bg-emerald-950/30 dark:border-emerald-800">
              <div className="flex items-center gap-3 text-emerald-800 dark:text-emerald-300 font-black text-base">
                <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>APROVADO NA PROVA OBJETIVA IBGE (AOR)! 🎉</span>
              </div>
              <p className="text-xs text-emerald-700 dark:text-emerald-400 mt-2 leading-relaxed font-semibold">
                Parabéns! Você atendeu a todos os critérios exigidos pelo edital do IBGE para o cargo de Agente Operacional Regional:
                alcançou <strong>{sessionCorrectCount}/60 pontos</strong> (mínimo de 18 / 30%) e obteve pelo menos 1 acerto em cada uma das 4 disciplinas!
              </p>
            </div>
          ) : (
            <div className="p-5 rounded-2xl bg-rose-50 border border-rose-200 dark:bg-rose-950/30 dark:border-rose-800">
              <div className="flex items-center gap-3 text-rose-800 dark:text-rose-300 font-black text-base">
                <AlertCircle className="w-6 h-6 text-rose-600 dark:text-rose-400 shrink-0" />
                <span>REPROVADO NO SIMULADO (CRITÉRIOS DO EDITAL IBGE AOR)</span>
              </div>
              <p className="text-xs text-rose-700 dark:text-rose-400 mt-2 font-medium">
                Motivos de não aprovação segundo as regras do edital:
              </p>
              <ul className="text-xs text-rose-700 dark:text-rose-400 mt-1.5 space-y-1 font-bold list-disc list-inside">
                {!passedMinTotalPoints && (
                  <li>Pontuação total ({sessionCorrectCount}/60) ficou abaixo do mínimo exigido de 18 pontos (30%).</li>
                )}
                {!passedAllSubjects && (
                  <li>
                    Você zerou a(s) seguinte(s) disciplina(s): {zeroedSubjects.join(", ")}. É obrigatório acertar pelo menos 1 ponto em cada matéria.
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>

        {/* Circular Percentage visual */}
        <div className="relative inline-flex items-center justify-center">
          <div className="w-36 h-36 rounded-full border-8 border-slate-100 flex flex-col justify-center items-center dark:border-slate-800">
            <span
              className={`text-4xl font-extrabold font-mono ${
                finalPercent >= 70 ? "text-emerald-600" : finalPercent >= 30 ? "text-amber-500" : "text-rose-500"
              }`}
            >
              {finalPercent}%
            </span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider dark:text-gray-500">Nota Total</span>
          </div>
        </div>

        {/* Key details list */}
        <div className="grid grid-cols-3 gap-4 bg-slate-50/50 p-4 rounded-2xl border border-slate-150 dark:bg-slate-850 dark:border-slate-800">
          <div>
            <span className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">Pontuação</span>
            <span className="text-lg font-black text-emerald-600 dark:text-emerald-400 font-mono">
              {sessionCorrectCount} / 60
            </span>
          </div>
          <div>
            <span className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">Tempo</span>
            <span className="text-lg font-black text-slate-700 dark:text-slate-300 font-mono">
              {Math.floor(quizElapsedTime / 60)}m {quizElapsedTime % 60}s
            </span>
          </div>
          <div>
            <span className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">XP Ganho</span>
            <span className="text-lg font-black text-blue-600 dark:text-blue-400 font-mono">
              +{sessionCorrectCount * 15 + (finalPercent === 100 ? 50 : 0)} XP
            </span>
          </div>
        </div>

        {/* Subject Breakdown Card Grid */}
        <div className="text-left space-y-3">
          <h4 className="text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Desempenho por Disciplina (Edital IBGE - AOR)
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { ...subjectBreakdown.adm, pct: "50% da Prova" },
              { ...subjectBreakdown.port, pct: "25% da Prova" },
              { ...subjectBreakdown.rlq, pct: "16.67% da Prova" },
              { ...subjectBreakdown.info, pct: "8.33% da Prova" },
            ].map((sub, idx) => {
              const pass = sub.correct >= 1;
              const subPct = sub.total > 0 ? Math.round((sub.correct / sub.total) * 100) : 0;
              return (
                <div
                  key={idx}
                  className="p-3.5 bg-slate-50/80 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-800 space-y-2"
                >
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h5 className="font-bold text-xs text-slate-800 dark:text-slate-200 leading-tight">{sub.name}</h5>
                      <span className="text-[10px] font-semibold text-slate-400">{sub.pct} ({sub.target} Qs)</span>
                    </div>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold shrink-0 ${
                        pass
                          ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-400"
                          : "bg-rose-100 text-rose-800 dark:bg-rose-950/50 dark:text-rose-400"
                      }`}
                    >
                      {pass ? "Aprovado na Matéria" : "Zerou Matéria"}
                    </span>
                  </div>

                  <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${pass ? "bg-emerald-500" : "bg-rose-500"}`}
                      style={{ width: `${subPct}%` }}
                    />
                  </div>

                  <div className="flex justify-between text-[11px] text-slate-600 dark:text-slate-400 font-bold">
                    <span>
                      Acertos: {sub.correct} de {sub.total}
                    </span>
                    <span>{subPct}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 🎯 DIAGNÓSTICO PEDAGÓGICO DE TÓPICOS NO SIMULADO COMPLETO */}
        {weakTopics.length > 0 && (
          <div className="text-left space-y-2.5 p-4 bg-amber-50/50 dark:bg-amber-955/15 border border-amber-200/60 dark:border-amber-900/30 rounded-2xl">
            <div className="flex items-center gap-2 text-amber-900 dark:text-amber-300 font-bold text-xs">
              <Compass className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Assuntos específicos que você precisa reforçar no Simulado:</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {weakTopics.slice(0, 6).map((item, idx) => (
                <div
                  key={idx}
                  className="p-2.5 bg-white/90 dark:bg-slate-900/90 rounded-xl border border-amber-200/40 text-xs flex justify-between items-center"
                >
                  <span className="font-semibold text-slate-700 dark:text-slate-200 truncate pr-2">{item.topic}</span>
                  <span className="text-[11px] font-bold text-rose-600 shrink-0">{item.wrong} erro(s)</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={() => {
            setQuizCompleted(false);
            setActiveSession(false);
          }}
          className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-xl text-sm shadow-md transition duration-200 cursor-pointer"
        >
          Voltar para Configurar Simulado
        </button>
      </div>
    );
  }

  return (
    <section id="quiz-main-screen" aria-label="Caderno e Simulado" className="max-w-3xl mx-auto">
      {!activeSession ? (
        <div
          id="quiz-setup-panel"
          className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm dark:bg-slate-900 dark:border-slate-800 space-y-6 animate-fade-in"
        >
          {/* Header Title */}
          <header className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 flex items-center justify-center font-bold shadow-xs">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-800 dark:text-slate-100 font-sans">
                Caderno de Questões & Simulado Oficial
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-500">
                Escolha o modo de estudo: Treino personalizado ou Simulado Completo IBGE (AOR)
              </p>
            </div>
          </header>

          {/* Mode Switcher Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-1.5 bg-slate-100/80 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-750">
            <button
              type="button"
              onClick={() => setQuizMode("practice")}
              className={`p-3.5 rounded-xl font-sans text-left transition-all cursor-pointer flex items-start gap-3 ${
                quizMode === "practice"
                  ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm border border-slate-200/80 dark:border-slate-700"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              <div
                className={`p-2 rounded-lg shrink-0 ${
                  quizMode === "practice"
                    ? "bg-blue-50 text-blue-600 dark:bg-blue-950/40"
                    : "bg-slate-200/60 dark:bg-slate-700 text-slate-500"
                }`}
              >
                <Target className="w-4 h-4" />
              </div>
              <div>
                <span className="block font-bold text-xs">🎯 Treino por Questões</span>
                <span className="block text-[11px] text-slate-400 dark:text-slate-500 mt-0.5 leading-tight">
                  Escolha 5, 15, 30 ou 60 questões por assunto específico ou geral.
                </span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => {
                setQuizMode("official_ibge");
                setNumQuestions(60);
              }}
              className={`p-3.5 rounded-xl font-sans text-left transition-all cursor-pointer flex items-start gap-3 ${
                quizMode === "official_ibge"
                  ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm border border-slate-200/80 dark:border-slate-700"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              <div
                className={`p-2 rounded-lg shrink-0 ${
                  quizMode === "official_ibge"
                    ? "bg-amber-50 text-amber-600 dark:bg-amber-955/40"
                    : "bg-slate-200/60 dark:bg-slate-700 text-slate-500"
                }`}
              >
                <Award className="w-4 h-4" />
              </div>
              <div>
                <span className="block font-bold text-xs">🏆 Simulado Completo IBGE (AOR)</span>
                <span className="block text-[11px] text-slate-400 dark:text-slate-500 mt-0.5 leading-tight">
                  60 questões com a distribuição e pesos oficiais do edital (30 ADM, 15 Port, 10 RLQ, 5 Info).
                </span>
              </div>
            </button>
          </div>

          {/* Configuration for Practice Mode */}
          {quizMode === "practice" && (
            <div className="space-y-4 animate-fade-in">
              {/* Question count selector buttons */}
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 font-sans">
                  Quantidade de Questões na Sessão
                </label>
                <div className="grid grid-cols-4 gap-2.5">
                  {[5, 15, 30, 60].map((count) => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setNumQuestions(count)}
                      className={`py-2.5 px-2 rounded-xl text-xs font-extrabold transition cursor-pointer text-center ${
                        numQuestions === count
                          ? "bg-blue-600 text-white shadow-xs"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-750"
                      }`}
                    >
                      {count} Questões
                    </button>
                  ))}
                </div>
              </div>

              {/* Filter Row: Banca, Disciplina, and Assunto/Tópico */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 font-sans">
                    Banca
                  </label>
                  <select
                    value={selectedBanca}
                    onChange={(e) => setSelectedBanca(e.target.value)}
                    className="w-full px-3 py-2.5 border border-slate-200 rounded-xl bg-white focus:outline-blue-500 dark:bg-slate-800 dark:border-slate-755 dark:text-slate-100 text-xs font-bold"
                  >
                    {availableBancas.map((b) => (
                      <option key={b} value={b}>
                        {b === "Todos" ? "Todas as Bancas" : b}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 font-sans">
                    Disciplina
                  </label>
                  <select
                    value={selectedDisciplina}
                    onChange={(e) => handleDisciplinaChange(e.target.value)}
                    className="w-full px-3 py-2.5 border border-slate-200 rounded-xl bg-white focus:outline-blue-500 dark:bg-slate-800 dark:border-slate-755 dark:text-slate-100 text-xs font-bold"
                  >
                    {availableDisciplinas.map((disc) => (
                      <option key={disc} value={disc}>
                        {disc === "Todas" ? "Todas as Disciplinas" : disc}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 font-sans">
                    Tópico / Assunto
                  </label>
                  <select
                    value={selectedAssunto}
                    onChange={(e) => setSelectedAssunto(e.target.value)}
                    className="w-full px-3 py-2.5 border border-slate-200 rounded-xl bg-white focus:outline-blue-500 dark:bg-slate-800 dark:border-slate-755 dark:text-slate-100 text-xs font-bold"
                  >
                    {availableAssuntos.map((as) => (
                      <option key={as} value={as}>
                        {as === "Todos"
                          ? selectedDisciplina === "Todas"
                            ? "Todos os Tópicos"
                            : `Todos de ${selectedDisciplina}`
                          : as}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Infographic for Official IBGE Simulado */}
          {quizMode === "official_ibge" && (
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 via-indigo-50/50 to-slate-50 border border-blue-200/80 dark:from-blue-950/30 dark:via-indigo-950/20 dark:to-slate-900 dark:border-blue-900/40 space-y-3 animate-fade-in">
              <div className="flex items-center gap-2 font-black text-blue-900 dark:text-blue-300 text-xs uppercase tracking-wide">
                <Award className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>Edital IBGE - Agente Operacional Regional (AOR) | Grade Oficial de 60 Questões</span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                <div className="p-2.5 bg-white/90 dark:bg-slate-900/90 rounded-xl border border-blue-100 dark:border-blue-900/30">
                  <span className="block font-extrabold text-blue-700 dark:text-blue-400 text-sm">30 Qs (50%)</span>
                  <span className="text-[11px] text-slate-600 dark:text-slate-300 font-semibold leading-tight block mt-0.5">
                    Noções de Administração e Situações Gerenciais
                  </span>
                  <span className="mt-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-bold block leading-tight">
                    • 20 Qs sobre PODC / Processo Org. + 10 Qs de temas periódicos
                  </span>
                </div>
                <div className="p-2.5 bg-white/90 dark:bg-slate-900/90 rounded-xl border border-blue-100 dark:border-blue-900/30">
                  <span className="block font-extrabold text-blue-700 dark:text-blue-400 text-sm">15 Qs (25%)</span>
                  <span className="text-[11px] text-slate-600 dark:text-slate-300 font-semibold leading-tight block mt-0.5">
                    Língua Portuguesa
                  </span>
                </div>
                <div className="p-2.5 bg-white/90 dark:bg-slate-900/90 rounded-xl border border-blue-100 dark:border-blue-900/30">
                  <span className="block font-extrabold text-blue-700 dark:text-blue-400 text-sm">10 Qs (16.67%)</span>
                  <span className="text-[11px] text-slate-600 dark:text-slate-300 font-semibold leading-tight block mt-0.5">
                    Raciocínio Lógico Quantitativo
                  </span>
                </div>
                <div className="p-2.5 bg-white/90 dark:bg-slate-900/90 rounded-xl border border-blue-100 dark:border-blue-900/30">
                  <span className="block font-extrabold text-blue-700 dark:text-blue-400 text-sm">5 Qs (8.33%)</span>
                  <span className="text-[11px] text-slate-600 dark:text-slate-300 font-semibold leading-tight block mt-0.5">
                    Noções Básicas de Informática
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-blue-200/60 dark:border-blue-900/40 text-[11px] text-slate-700 dark:text-slate-300 flex flex-wrap gap-x-4 gap-y-1 font-semibold">
                <span>
                  🎯 <strong>Mínimo para aprovação:</strong> 18 pontos no total (30%)
                </span>
                <span>
                  ⚠️ <strong>Eliminação:</strong> Zerar qualquer uma das 4 disciplinas
                </span>
              </div>
            </div>
          )}

          <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed bg-slate-50 dark:bg-slate-850 p-3.5 rounded-xl border border-slate-150 dark:border-slate-800">
            ℹ️ <strong>Filtro Sem Repetições Ativo</strong>: Priorizamos questões inéditas ou que você ainda não acertou no seu histórico para maximizar seu aprendizado!
          </p>

          <button
            onClick={() => startQuizSession()}
            className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl text-sm font-extrabold shadow-sm hover:shadow-md transition duration-200 cursor-pointer flex items-center justify-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            {quizMode === "official_ibge"
              ? "Começar Simulado Oficial IBGE (60 Questões)"
              : `Começar Treino (${numQuestions} Questões)`}
          </button>
        </div>
      ) : (
        <div id="quiz-active-panel" className="space-y-6 animate-fade-in">
          {/* Progress header */}
          <div className="flex justify-between items-center bg-white p-4 rounded-2xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-2.5">
              <button
                onClick={handleExitQuiz}
                className="flex items-center gap-1 px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-600 dark:bg-rose-950/30 dark:text-rose-400 dark:hover:bg-rose-900/40 rounded-xl text-xs font-bold transition active:scale-95 cursor-pointer"
                title="Sair da Sessão"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sair</span>
              </button>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest font-mono">
                Questão {currentIdx + 1} de {sessionQuestions.length}
              </span>
            </div>
            <div className="w-32 h-2 bg-slate-100 rounded-full dark:bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-blue-600 rounded-full transition-all duration-300 shadow-[0_0_8px_rgba(37,99,235,0.3)]"
                style={{ width: `${((currentIdx + 1) / sessionQuestions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Current Question Display */}
          {(() => {
            const currentQ = sessionQuestions[currentIdx];
            const hasCurrentFormatting =
              Boolean(currentQ) &&
              (/[<*_~=]/.test(currentQ.text) ||
                currentQ.options.some((opt) => /[<*_~=]/.test(opt)));

            return (
              <>
                {/* Floating Selection Toolbar (appears on text selection) */}
                <FloatingSelectionToolbar
                  containerRef={questionCardRef}
                  onApplyFormat={(fmt, text) => handleApplyFormatToCurrentQuestion(fmt, text)}
                />

                {/* Interpretation Toolbar */}
                <QuestionInterpretationBar
                  onApplyFormatToSelection={(fmt) => handleApplyFormatToCurrentQuestion(fmt)}
                  onOpenFormatModal={() => setIsFormatModalOpen(true)}
                  onClearHighlights={handleClearCurrentHighlights}
                  hasFormatting={hasCurrentFormatting}
                />

                <article
                  ref={questionCardRef}
                  id="current-question-card"
                  aria-labelledby="current-question-text"
                  className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-sm space-y-4"
                >
                  {/* Meta Tags */}
                  <header className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-bold font-mono tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100 dark:bg-blue-955/20 dark:text-blue-400 dark:border-blue-900/30">
                      {currentQ.banca}
                    </span>
                    <span className="text-[10px] font-semibold font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-300">
                      ANO: {currentQ.ano}
                    </span>
                    <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/20 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/30">
                      {currentQ.assunto}
                    </span>
                  </header>

                  {/* Statement */}
                  <div
                    id="current-question-text"
                    className="text-sm md:text-base font-semibold text-slate-800 dark:text-slate-100 leading-relaxed whitespace-pre-line border-b border-slate-100 pb-4 dark:border-slate-800"
                  >
                    <FormattedText text={currentQ.text} />
                  </div>

                  {/* Question Image (if any) */}
                  {currentQ.image && (
                    <div
                      className="flex justify-center p-2 mb-2 bg-slate-50 dark:bg-gray-800 rounded-xl"
                      id={`quiz-q-img-container-${currentQ.id}`}
                    >
                      <img
                        src={currentQ.image}
                        alt="Ilustração da Questão"
                        className="max-h-72 w-auto object-contain rounded-xl shadow-sm border border-slate-205 dark:border-slate-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}

                  {/* Alternatives List */}
                  <fieldset className="space-y-3 pt-2">
                    <legend className="sr-only">Alternativas da questão</legend>
                    {currentQ.options.map((opt, optIdx) => {
                      const isSelected = selectedAnswers[currentIdx] === optIdx;
                      const isCorrectAns = optIdx === currentQ.correctIndex;
                      const anySelected = selectedAnswers[currentIdx] !== undefined;
                      const isEliminated = !anySelected && (eliminatedOptions[currentIdx]?.has(optIdx) ?? false);

                      let optClass =
                        "border-slate-200 dark:border-slate-800 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-850 cursor-pointer";
                      if (anySelected) {
                        if (isCorrectAns) {
                          optClass =
                            "border-emerald-500 bg-emerald-50/40 text-emerald-800 dark:bg-emerald-955/20 dark:text-emerald-400 shadow-sm shadow-emerald-50 dark:shadow-none";
                        } else if (isSelected) {
                          optClass = "border-rose-500 bg-rose-50/40 text-rose-800 dark:bg-rose-955/20 dark:text-rose-400";
                        } else {
                          optClass = "border-slate-150/40 bg-slate-50/30 dark:bg-slate-900/40 opacity-70 cursor-not-allowed";
                        }
                      } else if (isEliminated) {
                        optClass =
                          "border-dashed border-rose-200 dark:border-rose-900/40 bg-rose-50/20 dark:bg-rose-955/10 opacity-60 text-slate-400 dark:text-slate-500";
                      }

                      return (
                        <div
                          key={optIdx}
                          onClick={() => {
                            if (!anySelected) handleSelectOption(optIdx);
                          }}
                          className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border text-sm font-semibold transition active:scale-[0.99] flex items-center justify-between gap-3 ${optClass}`}
                        >
                          <div className={`flex-1 leading-snug ${isEliminated ? "line-through decoration-rose-500/70" : ""}`}>
                            <FormattedText text={opt} />
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            {!anySelected && (
                              <button
                                type="button"
                                onClick={(e) => toggleEliminateOption(e, optIdx)}
                                title={
                                  isEliminated
                                    ? "Restaurar alternativa"
                                    : "Riscar / Descartar alternativa para focar nas restantes"
                                }
                                className={`p-1.5 rounded-lg text-xs transition flex items-center gap-1 cursor-pointer ${
                                  isEliminated
                                    ? "bg-rose-100 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300 font-bold"
                                    : "text-slate-400 hover:text-rose-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                                }`}
                              >
                                <Scissors className="w-3.5 h-3.5" />
                                <span className="text-[10px] hidden sm:inline">
                                  {isEliminated ? "Restaurar" : "Descartar"}
                                </span>
                              </button>
                            )}
                            {anySelected && isCorrectAns && (
                              <span className="text-xs uppercase font-extrabold text-emerald-600 dark:text-emerald-400">
                                Correto
                              </span>
                            )}
                            {anySelected && isSelected && !isCorrectAns && (
                              <span className="text-xs uppercase font-extrabold text-rose-500">Incorreto</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </fieldset>
                </article>
              </>
            );
          })()}

          {/* Render Detailed Explanation alternative corrective comments */}
          {showExplanation[currentIdx] && (
            <div className="p-5 rounded-2xl bg-amber-50/40 border border-amber-200/50 dark:bg-amber-955/15 dark:border-amber-900/30 space-y-4 animate-fade-in shadow-sm">
              <h4 className="text-sm font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5 border-b border-amber-200/40 pb-2 dark:border-amber-900/30">
                <Lightbulb className="w-5 h-5 flex-shrink-0 text-amber-500" /> Gabarito Comentado
              </h4>

              <div className="space-y-4">
                {/* Gabarito card */}
                <div className="bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-150 dark:border-emerald-900/30 p-3.5 rounded-xl space-y-2">
                  <p className="text-xs font-black text-emerald-800 dark:text-emerald-400">
                    Gabarito: A alternativa correta é a {String.fromCharCode(65 + sessionQuestions[currentIdx].correctIndex)}
                  </p>
                  {sessionQuestions[currentIdx].generalExplanation ? (
                    <div className="mt-1.5 pt-1.5 border-t border-emerald-200/30">
                      <p className="text-[10px] uppercase font-bold text-emerald-700 dark:text-emerald-400 tracking-wider">
                        Explicação / Resolução da Questão:
                      </p>
                      <div className="text-xs text-slate-700 dark:text-slate-300 mt-1 leading-relaxed font-semibold whitespace-pre-line">
                        <FormattedText text={sessionQuestions[currentIdx].generalExplanation} />
                      </div>
                    </div>
                  ) : (
                    <div className="text-xs text-slate-700 dark:text-slate-300 mt-1.5 leading-relaxed font-semibold whitespace-pre-line">
                      <FormattedText text={sessionQuestions[currentIdx].explanations[sessionQuestions[currentIdx].correctIndex]} />
                    </div>
                  )}
                </div>

                {/* Análise Detalhada das Alternativas */}
                <div className="pt-1">
                  <h5 className="text-xs font-extrabold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-3 bg-amber-500 rounded-full"></span> Análise Detalhada das Alternativas
                  </h5>
                  <div className="space-y-2.5">
                    {sessionQuestions[currentIdx].explanations.map((exp, expIdx) => {
                      const isCorrectAlt = expIdx === sessionQuestions[currentIdx].correctIndex;
                      return (
                        <div key={expIdx} id={`alt-explanation-${expIdx}`} className="flex items-start gap-2 text-xs">
                          {isCorrectAlt ? (
                            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          ) : (
                            <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                          )}
                          <div className="leading-relaxed text-slate-700 dark:text-slate-300">
                            <strong
                              className={
                                isCorrectAlt
                                  ? "text-emerald-600 dark:text-emerald-400 font-bold"
                                  : "text-slate-600 dark:text-slate-400 font-bold"
                              }
                            >
                              ({String.fromCharCode(65 + expIdx)})
                            </strong>{" "}
                            <FormattedText text={exp} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation controls */}
          <div className="flex gap-4">
            <button
              onClick={prevQuestion}
              disabled={currentIdx === 0}
              className="flex items-center gap-1 px-4 py-2.5 bg-white border border-slate-205 hover:bg-slate-50 text-slate-705 disabled:opacity-40 rounded-xl text-sm font-bold dark:bg-slate-900 dark:border-slate-800 dark:text-slate-350 dark:hover:bg-slate-800 transition cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" /> Anterior
            </button>

            <button
              onClick={nextQuestion}
              disabled={selectedAnswers[currentIdx] === undefined}
              className="flex-grow flex items-center justify-center gap-1 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white rounded-xl text-sm font-extrabold shadow-sm hover:shadow-md transition cursor-pointer"
            >
              {currentIdx === sessionQuestions.length - 1 ? (
                <>Finalizar Sessão</>
              ) : (
                <>
                  Próxima Questão <ChevronRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Complete Interpretation / Formatting Modal */}
      {isFormatModalOpen && sessionQuestions[currentIdx] && (
        <QuestionFormatModal
          isOpen={isFormatModalOpen}
          question={sessionQuestions[currentIdx]}
          onClose={() => setIsFormatModalOpen(false)}
          onSave={handleSaveFormattedQuestion}
        />
      )}
    </section>
  );
}
