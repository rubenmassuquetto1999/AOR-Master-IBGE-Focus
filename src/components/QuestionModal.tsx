import React, { useState, useEffect } from "react";
import {
  X,
  PlusCircle,
  Edit3,
  Award,
  CheckCircle2,
  Image as ImageIcon,
  BookOpen,
  Sparkles,
  Building2,
  GraduationCap,
  Layers,
  HelpCircle,
  Trash2,
  RefreshCw,
} from "lucide-react";
import { Question } from "../types";
import { TAXONOMY, getTopicsForDiscipline, getDisciplineForTopic } from "../data/taxonomy";

interface QuestionModalProps {
  isOpen: boolean;
  mode: "create" | "edit";
  questionToEdit?: Question | null;
  questions: Question[];
  onClose: () => void;
  onSaveQuestion: (
    q: Question,
    replicateBanca?: boolean,
    replicateDisciplina?: boolean,
    replicateAssunto?: boolean,
    originalBanca?: string,
    originalDisciplina?: string,
    originalAssunto?: string
  ) => Promise<boolean | "added" | "updated" | "duplicate">;
  onAlert?: (msg: string, title?: string) => void;
}

export default function QuestionModal({
  isOpen,
  mode,
  questionToEdit,
  questions,
  onClose,
  onSaveQuestion,
  onAlert,
}: QuestionModalProps) {
  // --- Form State ---
  const [text, setText] = useState("");
  const [banca, setBanca] = useState("IBFC");
  const [isCustomBanca, setIsCustomBanca] = useState(false);
  const [disciplina, setDisciplina] = useState("Língua Portuguesa");
  const [isCustomDisciplina, setIsCustomDisciplina] = useState(false);
  const [assunto, setAssunto] = useState("Concordância Nominal e Concordância Verbal");
  const [isCustomAssunto, setIsCustomAssunto] = useState(false);
  const [ano, setAno] = useState<number>(new Date().getFullYear());
  const [nivelSuperior, setNivelSuperior] = useState(false);
  const [image, setImage] = useState("");
  const [generalExplanation, setGeneralExplanation] = useState("");

  const [numOptions, setNumOptions] = useState<number>(5);
  const [correctIndex, setCorrectIndex] = useState<number>(0);
  const [options, setOptions] = useState<string[]>([
    "A) ",
    "B) ",
    "C) ",
    "D) ",
    "E) ",
  ]);
  const [explanations, setExplanations] = useState<string[]>([
    "Explicação para a alternativa A...",
    "Explicação para a alternativa B...",
    "Explicação para a alternativa C...",
    "Explicação para a alternativa D...",
    "Explicação para a alternativa E...",
  ]);

  // Replication checkboxes for batch propagation when editing
  const [replicateBancaAcrossDatabase, setReplicateBancaAcrossDatabase] = useState(false);
  const [replicateDisciplinaAcrossDatabase, setReplicateDisciplinaAcrossDatabase] = useState(false);
  const [replicateAssuntoAcrossDatabase, setReplicateAssuntoAcrossDatabase] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize or populate form when opening
  useEffect(() => {
    if (!isOpen) return;

    if (mode === "edit" && questionToEdit) {
      setText(questionToEdit.text || "");
      const disc =
        questionToEdit.disciplina ||
        getDisciplineForTopic(questionToEdit.assunto)?.name ||
        "Língua Portuguesa";
      setDisciplina(disc);
      setIsCustomDisciplina(false);

      setBanca(questionToEdit.banca || "IBFC");
      setIsCustomBanca(false);

      setAssunto(questionToEdit.assunto || "Geral");
      setIsCustomAssunto(false);

      setAno(questionToEdit.ano || new Date().getFullYear());
      setNivelSuperior(!!questionToEdit.nivelSuperior);
      setImage(questionToEdit.image || "");
      setGeneralExplanation(questionToEdit.generalExplanation || "");

      const qOpts =
        questionToEdit.options && questionToEdit.options.length > 0
          ? [...questionToEdit.options]
          : ["A) ", "B) ", "C) ", "D) ", "E) "];
      setOptions(qOpts);
      setNumOptions(qOpts.length);
      setCorrectIndex(
        questionToEdit.correctIndex >= 0 && questionToEdit.correctIndex < qOpts.length
          ? questionToEdit.correctIndex
          : 0
      );

      if (questionToEdit.explanations && questionToEdit.explanations.length > 0) {
        setExplanations([...questionToEdit.explanations]);
      } else {
        setExplanations(
          Array.from(
            { length: qOpts.length },
            (_, i) => `Explicação para alternativa ${String.fromCharCode(65 + i)}.`
          )
        );
      }

      setReplicateBancaAcrossDatabase(false);
      setReplicateDisciplinaAcrossDatabase(false);
      setReplicateAssuntoAcrossDatabase(false);
    } else {
      // Create mode: clean default form
      setText("");
      setBanca("IBFC");
      setIsCustomBanca(false);
      setDisciplina("Língua Portuguesa");
      setIsCustomDisciplina(false);
      setAssunto("Concordância Nominal e Concordância Verbal");
      setIsCustomAssunto(false);
      setAno(new Date().getFullYear());
      setNivelSuperior(false);
      setImage("");
      setGeneralExplanation("");
      setNumOptions(5);
      setCorrectIndex(0);
      setOptions(["A) ", "B) ", "C) ", "D) ", "E) "]);
      setExplanations([
        "Explicação para a alternativa A...",
        "Explicação para a alternativa B...",
        "Explicação para a alternativa C...",
        "Explicação para a alternativa D...",
        "Explicação para a alternativa E...",
      ]);
      setReplicateBancaAcrossDatabase(false);
      setReplicateDisciplinaAcrossDatabase(false);
      setReplicateAssuntoAcrossDatabase(false);
    }
  }, [isOpen, mode, questionToEdit]);

  if (!isOpen) return null;

  // --- Dynamic Taxonomy and Database Aggregates ---
  const allBancas = Array.from(
    new Set(questions.map((q) => q.banca?.trim()).filter(Boolean) as string[])
  ).sort();
  if (!allBancas.includes("IBFC")) allBancas.unshift("IBFC");
  if (!allBancas.includes("CESPE / Cebraspe")) allBancas.push("CESPE / Cebraspe");
  if (!allBancas.includes("FGV")) allBancas.push("FGV");

  const allDisciplinas = Array.from(
    new Set([
      ...TAXONOMY.map((d) => d.name),
      ...(questions.map((q) => q.disciplina?.trim()).filter(Boolean) as string[]),
    ])
  ).sort();

  // Topics for the selected discipline
  const registeredTopicsForSelectedDisc = getTopicsForDiscipline(disciplina);
  const questionsTopicsForSelectedDisc = Array.from(
    new Set(
      questions
        .filter(
          (q) =>
            q.disciplina === disciplina ||
            getDisciplineForTopic(q.assunto)?.name === disciplina
        )
        .map((q) => q.assunto?.trim())
        .filter(Boolean) as string[]
    )
  );

  const availableTopics = Array.from(
    new Set([...registeredTopicsForSelectedDisc, ...questionsTopicsForSelectedDisc])
  ).sort();

  // Handle number of options change (2 for Certo/Errado, 4 or 5 for Múltipla Escolha)
  const handleNumOptionsChange = (num: number) => {
    setNumOptions(num);
    if (num === 2) {
      setOptions(["Certo", "Errado"]);
      setExplanations([
        "Justificativa para o item Certo...",
        "Justificativa para o item Errado...",
      ]);
      if (correctIndex >= 2) setCorrectIndex(0);
    } else {
      const currentOpts = [...options];
      const currentExps = [...explanations];
      while (currentOpts.length < num) {
        const letter = String.fromCharCode(65 + currentOpts.length);
        currentOpts.push(`${letter}) `);
        currentExps.push(`Explicação para a alternativa ${letter}...`);
      }
      setOptions(currentOpts.slice(0, num));
      setExplanations(currentExps.slice(0, num));
      if (correctIndex >= num) setCorrectIndex(0);
    }
  };

  // Original baseline values for comparison when editing
  const originalBanca = questionToEdit?.banca?.trim();
  const originalDisciplina = (
    questionToEdit?.disciplina ||
    getDisciplineForTopic(questionToEdit?.assunto)?.name ||
    ""
  ).trim();
  const originalAssunto = questionToEdit?.assunto?.trim();

  // Counts of other questions sharing these baseline attributes
  const sameBancaCount = originalBanca
    ? questions.filter((q) => q.banca?.trim() === originalBanca && q.id !== questionToEdit?.id).length
    : 0;
  const sameDisciplinaCount = originalDisciplina
    ? questions.filter(
        (q) =>
          ((q.disciplina?.trim() || getDisciplineForTopic(q.assunto)?.name) === originalDisciplina) &&
          q.id !== questionToEdit?.id
      ).length
    : 0;
  const sameAssuntoCount = originalAssunto
    ? questions.filter((q) => q.assunto?.trim() === originalAssunto && q.id !== questionToEdit?.id).length
    : 0;

  const isBancaChanged = mode === "edit" && !!originalBanca && originalBanca !== banca.trim();
  const isDisciplinaChanged =
    mode === "edit" && !!originalDisciplina && originalDisciplina !== disciplina.trim();
  const isAssuntoChanged =
    mode === "edit" && !!originalAssunto && originalAssunto !== assunto.trim();

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!text.trim()) {
      onAlert?.("Por favor, preencha o enunciado da questão!", "Campo Vazio");
      return;
    }

    if (isCustomBanca && !banca.trim()) {
      onAlert?.("Por favor, digite o nome da nova banca examinadora!", "Campo Vazio");
      return;
    }

    if (isCustomDisciplina && !disciplina.trim()) {
      onAlert?.("Por favor, digite o nome da nova disciplina!", "Campo Vazio");
      return;
    }

    if (isCustomAssunto && !assunto.trim()) {
      onAlert?.("Por favor, digite o nome do novo assunto / tópico!", "Campo Vazio");
      return;
    }

    const finalBanca = banca.trim() || "IBFC";
    const finalDisciplina = disciplina.trim() || "Língua Portuguesa";
    const finalAssunto = assunto.trim() || "Geral";

    const targetId =
      mode === "edit" && questionToEdit
        ? questionToEdit.id
        : `q_custom_${Date.now()}`;

    const compiledQuestion: Question = {
      id: targetId,
      text: text.trim(),
      options: options.map(
        (opt, i) => opt.trim() || `${String.fromCharCode(65 + i)}) [Vazio]`
      ),
      correctIndex,
      explanations: explanations.map(
        (exp, i) =>
          exp.trim() ||
          `Explicação para a alternativa ${String.fromCharCode(65 + i)}.`
      ),
      banca: finalBanca,
      disciplina: finalDisciplina,
      assunto: finalAssunto,
      ano: Number(ano) || new Date().getFullYear(),
      nivelSuperior,
      image: image.trim() || null,
      generalExplanation: generalExplanation.trim() || undefined,
    };

    setIsSubmitting(true);
    try {
      const res = await onSaveQuestion(
        compiledQuestion,
        replicateBancaAcrossDatabase,
        replicateDisciplinaAcrossDatabase,
        replicateAssuntoAcrossDatabase,
        originalBanca,
        originalDisciplina,
        originalAssunto
      );

      if (res === true || res === "added" || res === "updated") {
        onClose();
      }
    } catch (err) {
      console.error("Erro ao salvar questão:", err);
      onAlert?.("Ocorreu um erro ao salvar a questão.", "Erro");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="question-modal-overlay"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-fade-in"
    >
      <div
        id="question-modal-card"
        className="max-w-4xl w-full max-h-[92vh] flex flex-col bg-white dark:bg-gray-850 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center border border-indigo-100 dark:border-indigo-900 shadow-2xs">
              {mode === "create" ? (
                <PlusCircle className="w-6 h-6" />
              ) : (
                <Edit3 className="w-6 h-6" />
              )}
            </div>
            <div>
              <h3 className="text-lg font-black text-gray-900 dark:text-white flex items-center gap-2">
                {mode === "create"
                  ? "Cadastrar Nova Questão"
                  : "Editar Questão de Concurso"}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                {mode === "create"
                  ? "Puxe as bancas, disciplinas e tópicos cadastrados ou registre novos para expandir seu banco."
                  : "Altere banca, disciplina, tópico, alternativas e propague as atualizações para o banco."}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin"
        >
          {/* Top Classification Fields: Banca, Disciplina, Assunto, Ano */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* 1. Banca Examinadora */}
            <div className="space-y-1.5">
              <label className="flex items-center gap-1.5 text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5 text-indigo-500" />
                Banca
              </label>
              <select
                value={isCustomBanca ? "__NEW__" : banca}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === "__NEW__") {
                    setIsCustomBanca(true);
                    setBanca("");
                  } else {
                    setIsCustomBanca(false);
                    setBanca(val);
                  }
                }}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer shadow-2xs"
              >
                {allBancas.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
                <option
                  value="__NEW__"
                  className="text-indigo-600 dark:text-indigo-400 font-bold"
                >
                  ➕ Cadastrar nova Banca...
                </option>
              </select>

              {isCustomBanca && (
                <input
                  type="text"
                  placeholder="Digite o nome da nova banca..."
                  value={banca}
                  onChange={(e) => setBanca(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-indigo-300 bg-indigo-50/40 dark:bg-gray-750 dark:border-indigo-600 dark:text-gray-100 text-xs font-semibold focus:outline-indigo-500 mt-1"
                  autoFocus
                />
              )}
            </div>

            {/* 2. Disciplina */}
            <div className="space-y-1.5">
              <label className="flex items-center gap-1.5 text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-500" />
                Disciplina
              </label>
              <select
                value={isCustomDisciplina ? "__NEW__" : disciplina}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === "__NEW__") {
                    setIsCustomDisciplina(true);
                    setDisciplina("");
                  } else {
                    setIsCustomDisciplina(false);
                    setDisciplina(val);
                    // auto pick first topic if available
                    const tList = getTopicsForDiscipline(val);
                    if (tList.length > 0) {
                      setAssunto(tList[0]);
                      setIsCustomAssunto(false);
                    }
                  }
                }}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer shadow-2xs"
              >
                {allDisciplinas.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
                <option
                  value="__NEW__"
                  className="text-indigo-600 dark:text-indigo-400 font-bold"
                >
                  ➕ Cadastrar nova Disciplina...
                </option>
              </select>

              {isCustomDisciplina && (
                <input
                  type="text"
                  placeholder="Digite a nova disciplina..."
                  value={disciplina}
                  onChange={(e) => setDisciplina(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-indigo-300 bg-indigo-50/40 dark:bg-gray-750 dark:border-indigo-600 dark:text-gray-100 text-xs font-semibold focus:outline-indigo-500 mt-1"
                  autoFocus
                />
              )}
            </div>

            {/* 3. Assunto / Tópico */}
            <div className="space-y-1.5">
              <label className="flex items-center gap-1.5 text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
                Assunto / Tópico
              </label>
              <select
                value={isCustomAssunto ? "__NEW__" : assunto}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === "__NEW__") {
                    setIsCustomAssunto(true);
                    setAssunto("");
                  } else {
                    setIsCustomAssunto(false);
                    setAssunto(val);
                  }
                }}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer shadow-2xs truncate"
              >
                {availableTopics.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
                <option
                  value="__NEW__"
                  className="text-indigo-600 dark:text-indigo-400 font-bold"
                >
                  ➕ Cadastrar novo Tópico...
                </option>
              </select>

              {isCustomAssunto && (
                <input
                  type="text"
                  placeholder="Digite o novo tópico / assunto..."
                  value={assunto}
                  onChange={(e) => setAssunto(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-indigo-300 bg-indigo-50/40 dark:bg-gray-750 dark:border-indigo-600 dark:text-gray-100 text-xs font-semibold focus:outline-indigo-500 mt-1"
                  autoFocus
                />
              )}
            </div>

            {/* 4. Ano & Nível Superior */}
            <div className="flex gap-3 items-end">
              <div className="flex-1 space-y-1.5">
                <label className="block text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                  Ano
                </label>
                <input
                  type="number"
                  min="1990"
                  max="2035"
                  value={ano}
                  onChange={(e) => setAno(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-2xs"
                />
              </div>
              <div className="flex items-center gap-2 pb-2.5">
                <input
                  type="checkbox"
                  id="modal-nivel-sup"
                  checked={nivelSuperior}
                  onChange={(e) => setNivelSuperior(e.target.checked)}
                  className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-gray-300 dark:border-gray-600 cursor-pointer"
                />
                <label
                  htmlFor="modal-nivel-sup"
                  className="text-xs font-bold text-gray-600 dark:text-gray-300 cursor-pointer whitespace-nowrap"
                >
                  Nível Superior
                </label>
              </div>
            </div>
          </div>

          {/* Edit Mode Global Replication Helper (Banca, Disciplina, Assunto) */}
          {mode === "edit" && (isBancaChanged || isDisciplinaChanged || isAssuntoChanged) && (
            <div className="p-4 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/70 space-y-3 animate-fade-in shadow-2xs">
              <div className="flex items-center justify-between border-b border-indigo-100 dark:border-indigo-900/60 pb-2">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-900 dark:text-indigo-200">
                    Refletir Alterações em Todo o Banco de Dados
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const allSelected =
                      (!isBancaChanged || replicateBancaAcrossDatabase) &&
                      (!isDisciplinaChanged || replicateDisciplinaAcrossDatabase) &&
                      (!isAssuntoChanged || replicateAssuntoAcrossDatabase);
                    setReplicateBancaAcrossDatabase(!allSelected);
                    setReplicateDisciplinaAcrossDatabase(!allSelected);
                    setReplicateAssuntoAcrossDatabase(!allSelected);
                  }}
                  className="text-[11px] font-bold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 underline cursor-pointer"
                >
                  {(!isBancaChanged || replicateBancaAcrossDatabase) &&
                  (!isDisciplinaChanged || replicateDisciplinaAcrossDatabase) &&
                  (!isAssuntoChanged || replicateAssuntoAcrossDatabase)
                    ? "Desmarcar todas"
                    : "Selecionar todas para refletir"}
                </button>
              </div>

              {/* 1. Replicate Banca */}
              {isBancaChanged && (
                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white/80 dark:bg-gray-800/80 border border-indigo-100/70 dark:border-indigo-900/50">
                  <input
                    type="checkbox"
                    id="replicate-banca-checkbox"
                    checked={replicateBancaAcrossDatabase}
                    onChange={(e) => setReplicateBancaAcrossDatabase(e.target.checked)}
                    className="w-4.5 h-4.5 mt-0.5 rounded text-indigo-600 focus:ring-indigo-500 border-indigo-300 cursor-pointer"
                  />
                  <label
                    htmlFor="replicate-banca-checkbox"
                    className="text-xs text-gray-700 dark:text-gray-200 cursor-pointer leading-relaxed"
                  >
                    <span className="font-bold block text-indigo-900 dark:text-indigo-300">
                      Unificar Banca: "{originalBanca}" ➔ "{banca.trim()}"
                    </span>
                    Atualizar automaticamente as outras{" "}
                    <strong>{sameBancaCount} questões</strong> com a banca "{originalBanca}",
                    deixando tudo em uma coisa só em todo o banco de dados.
                  </label>
                </div>
              )}

              {/* 2. Replicate Disciplina */}
              {isDisciplinaChanged && (
                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white/80 dark:bg-gray-800/80 border border-indigo-100/70 dark:border-indigo-900/50">
                  <input
                    type="checkbox"
                    id="replicate-disciplina-checkbox"
                    checked={replicateDisciplinaAcrossDatabase}
                    onChange={(e) => setReplicateDisciplinaAcrossDatabase(e.target.checked)}
                    className="w-4.5 h-4.5 mt-0.5 rounded text-indigo-600 focus:ring-indigo-500 border-indigo-300 cursor-pointer"
                  />
                  <label
                    htmlFor="replicate-disciplina-checkbox"
                    className="text-xs text-gray-700 dark:text-gray-200 cursor-pointer leading-relaxed"
                  >
                    <span className="font-bold block text-indigo-900 dark:text-indigo-300">
                      Vincular Disciplina: "{originalDisciplina}" ➔ "{disciplina.trim()}"
                    </span>
                    Vincular a nova disciplina "{disciplina.trim()}" a todas as questões
                    com o assunto "{originalAssunto}" ({sameAssuntoCount} questões) em todo o banco.
                  </label>
                </div>
              )}

              {/* 3. Replicate Assunto / Tópico */}
              {isAssuntoChanged && (
                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white/80 dark:bg-gray-800/80 border border-indigo-100/70 dark:border-indigo-900/50">
                  <input
                    type="checkbox"
                    id="replicate-assunto-checkbox"
                    checked={replicateAssuntoAcrossDatabase}
                    onChange={(e) => setReplicateAssuntoAcrossDatabase(e.target.checked)}
                    className="w-4.5 h-4.5 mt-0.5 rounded text-indigo-600 focus:ring-indigo-500 border-indigo-300 cursor-pointer"
                  />
                  <label
                    htmlFor="replicate-assunto-checkbox"
                    className="text-xs text-gray-700 dark:text-gray-200 cursor-pointer leading-relaxed"
                  >
                    <span className="font-bold block text-indigo-900 dark:text-indigo-300">
                      Unificar Tópico/Assunto: "{originalAssunto}" ➔ "{assunto.trim()}"
                    </span>
                    Renomear e unificar o tópico nas outras{" "}
                    <strong>{sameAssuntoCount} questões</strong> com o assunto "{originalAssunto}".
                  </label>
                </div>
              )}
            </div>
          )}

          {/* Enunciado da Questão */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
              Enunciado da Questão <span className="text-rose-500">*</span>
            </label>
            <textarea
              required
              rows={4}
              placeholder="Digite ou cole aqui o texto completo do enunciado da questão de concurso..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 leading-relaxed placeholder-gray-400 shadow-2xs"
            />
          </div>

          {/* Imagem Ilustrativa Opcional */}
          <div className="space-y-2">
            <label className="flex items-center gap-1.5 text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
              <ImageIcon className="w-3.5 h-3.5 text-indigo-500" />
              Imagem Ilustrativa (Opcional)
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <input
                  type="text"
                  placeholder="Cole o link / URL da imagem..."
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
                />
                <p className="text-[10px] text-gray-400 mt-1">
                  Ex: link de foto ou print de gráfico da questão.
                </p>
              </div>

              {/* Drag and drop / local file selector */}
              <div
                className="border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl p-3 flex flex-col items-center justify-center bg-gray-50/50 dark:bg-gray-800/40 hover:bg-gray-100 dark:hover:bg-gray-750 transition cursor-pointer"
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                    const file = e.dataTransfer.files[0];
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      if (typeof reader.result === "string") {
                        setImage(reader.result);
                      }
                    };
                    reader.readAsDataURL(file);
                  }
                }}
                onClick={() => document.getElementById("modal-image-file")?.click()}
              >
                <input
                  id="modal-image-file"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      const file = e.target.files[0];
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        if (typeof reader.result === "string") {
                          setImage(reader.result);
                        }
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                  className="hidden"
                />
                <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                  📁 Clique ou arraste arquivo de foto
                </p>
                <p className="text-[10px] text-gray-400 font-mono">PNG, JPG, WebP</p>
              </div>
            </div>

            {image && (
              <div className="mt-2 flex items-center gap-3 bg-indigo-50/40 dark:bg-indigo-950/20 p-2.5 rounded-xl border border-indigo-100 dark:border-indigo-900 max-w-md">
                <img
                  src={image}
                  alt="Preview"
                  className="h-12 w-16 object-contain rounded border border-gray-200 dark:border-gray-700 bg-white"
                />
                <div className="flex-1 overflow-hidden">
                  <p className="text-[11px] font-bold text-gray-700 dark:text-gray-200 truncate">
                    {image.startsWith("data:") ? "Imagem Carregada (Local)" : image}
                  </p>
                  <button
                    type="button"
                    onClick={() => setImage("")}
                    className="text-[10px] text-rose-500 font-bold hover:underline cursor-pointer"
                  >
                    Remover imagem
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Comentário Geral / Resolução Completa */}
          <div className="space-y-1.5">
            <label className="flex items-center gap-1.5 text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              Comentário Geral / Resolução do Professor (Opcional)
            </label>
            <textarea
              rows={2}
              placeholder="Digite a resolução completa, fundamentação teórica ou macetes de resolução..."
              value={generalExplanation}
              onChange={(e) => setGeneralExplanation(e.target.value)}
              className="w-full px-4 py-2.5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400 shadow-2xs"
            />
          </div>

          {/* Alternativas de Resposta */}
          <div className="space-y-3 pt-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 dark:border-gray-800 pb-2">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-500" />
                Alternativas e Justificativas de Correção
              </label>

              {/* Toggle Certo/Errado vs Múltipla Escolha */}
              <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => handleNumOptionsChange(2)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                    numOptions === 2
                      ? "bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-300 shadow-2xs"
                      : "text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  }`}
                >
                  Certo/Errado (2)
                </button>
                <button
                  type="button"
                  onClick={() => handleNumOptionsChange(4)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                    numOptions === 4
                      ? "bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-300 shadow-2xs"
                      : "text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  }`}
                >
                  A - D (4)
                </button>
                <button
                  type="button"
                  onClick={() => handleNumOptionsChange(5)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                    numOptions === 5
                      ? "bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-300 shadow-2xs"
                      : "text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  }`}
                >
                  A - E (5)
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {options.map((opt, i) => {
                const isCorrect = correctIndex === i;
                const letter = String.fromCharCode(65 + i);
                return (
                  <div
                    key={i}
                    className={`p-4 rounded-2xl border transition-all duration-200 space-y-2.5 ${
                      isCorrect
                        ? "border-emerald-300 dark:border-emerald-800/80 bg-emerald-50/30 dark:bg-emerald-950/20"
                        : "border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/40"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <input
                          type="radio"
                          name="correct-option-group"
                          id={`modal-opt-${i}`}
                          checked={isCorrect}
                          onChange={() => setCorrectIndex(i)}
                          className="w-4 h-4 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                        />
                        <label
                          htmlFor={`modal-opt-${i}`}
                          className="text-xs font-bold text-gray-800 dark:text-gray-200 cursor-pointer flex items-center gap-1.5"
                        >
                          <span
                            className={`w-6 h-6 rounded-lg flex items-center justify-center font-black text-xs ${
                              isCorrect
                                ? "bg-emerald-500 text-white shadow-2xs"
                                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                            }`}
                          >
                            {numOptions === 2 ? (i === 0 ? "C" : "E") : letter}
                          </span>
                          Alternativa {numOptions === 2 ? (i === 0 ? "Certo" : "Errado") : letter}
                        </label>
                      </div>

                      {isCorrect && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Gabarito Oficial
                        </span>
                      )}
                    </div>

                    <input
                      type="text"
                      value={opt}
                      onChange={(e) => {
                        const newO = [...options];
                        newO[i] = e.target.value;
                        setOptions(newO);
                      }}
                      placeholder={`Texto da alternativa ${numOptions === 2 ? (i === 0 ? "Certo" : "Errado") : letter}...`}
                      className="w-full px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-850 text-gray-900 dark:text-gray-100 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                    <textarea
                      rows={2}
                      value={explanations[i] || ""}
                      onChange={(e) => {
                        const newE = [...explanations];
                        newE[i] = e.target.value;
                        setExplanations(newE);
                      }}
                      placeholder={`Justificativa para esta alternativa (${isCorrect ? "Por que está certa" : "Por que está errada"})...`}
                      className="w-full px-3 py-2 rounded-xl border border-amber-100 dark:border-amber-900/40 bg-amber-50/20 dark:bg-gray-850 text-gray-800 dark:text-amber-200/90 text-xs focus:outline-none focus:ring-2 focus:ring-amber-400/50 placeholder-gray-400"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Modal Footer Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:flex-1 h-12 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" /> Salvando...
                </>
              ) : mode === "create" ? (
                <>
                  <Award className="w-4 h-4" /> Confirmar e Cadastrar no Banco (+70 XP)
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4" /> Salvar Alterações no Banco
                </>
              )}
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-6 h-12 rounded-2xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-750 text-gray-700 dark:text-gray-300 font-bold text-sm transition cursor-pointer"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
