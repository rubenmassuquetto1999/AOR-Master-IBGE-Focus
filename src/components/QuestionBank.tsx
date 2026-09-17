import React, { useState } from "react";
import { Search, PlusCircle, Edit3, Layers, Trash2, HelpCircle } from "lucide-react";
import { Question } from "../types";
import { TAXONOMY, getDisciplineForTopic, getTopicsForDiscipline, getQuestionDiscipline, ALL_TOPICS } from "../data/taxonomy";
import BatchEditModal from "./BatchEditModal";
import QuestionModal from "./QuestionModal";

interface QuestionBankProps {
  questions: Question[];
  onAddQuestion: (q: Question) => Promise<"added" | "updated" | "duplicate">;
  onUpdateQuestion: (q: Question) => Promise<boolean>;
  onBatchUpdateQuestions?: (updates: { id: string; changes: Partial<Question> }[]) => Promise<boolean>;
  onReceiveXp?: (amount: number) => void;
  onAlert?: (msg: string, title?: string) => void;
  onConfirm?: (msg: string, title?: string, isDanger?: boolean, confirmText?: string, cancelText?: string) => Promise<boolean>;
  onDeleteMultipleQuestions?: (questionIds: string[]) => Promise<boolean>;
}

export default function QuestionBank({
  questions,
  onAddQuestion,
  onUpdateQuestion,
  onBatchUpdateQuestions,
  onAlert,
  onConfirm,
  onDeleteMultipleQuestions,
}: QuestionBankProps) {
  // Search & Filter state
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBanca, setSelectedBanca] = useState("Todas");
  const [selectedDisciplina, setSelectedDisciplina] = useState("Todas");
  const [selectedAssunto, setSelectedAssunto] = useState("Todos");

  // Modal toggle state (Dedicated subabas)
  const [showBatchModal, setShowBatchModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [questionToEdit, setQuestionToEdit] = useState<Question | null>(null);

  // Available Filter Options (derived only from questions currently in database)
  const bancas = ["Todas", ...Array.from(new Set(questions.map((q) => q.banca).filter(Boolean))).sort()];
  const availableDisciplinasList = Array.from(
    new Set(questions.map((q) => getQuestionDiscipline(q)).filter(Boolean))
  ).sort();
  const disciplinas = ["Todas", ...availableDisciplinasList];

  const availableAssuntosList =
    selectedDisciplina === "Todas"
      ? Array.from(new Set(questions.map((q) => q.assunto).filter(Boolean))).sort()
      : Array.from(
          new Set(
            questions
              .filter((q) => getQuestionDiscipline(q) === selectedDisciplina)
              .map((q) => q.assunto)
              .filter(Boolean)
          )
        ).sort();
  const assuntos = ["Todos", ...availableAssuntosList];

  // Auto-reset filters if current selection no longer has any questions
  React.useEffect(() => {
    if (selectedDisciplina !== "Todas" && !availableDisciplinasList.includes(selectedDisciplina)) {
      setSelectedDisciplina("Todas");
    }
  }, [availableDisciplinasList, selectedDisciplina]);

  React.useEffect(() => {
    if (selectedAssunto !== "Todos" && !availableAssuntosList.includes(selectedAssunto)) {
      setSelectedAssunto("Todos");
    }
  }, [availableAssuntosList, selectedAssunto]);

  React.useEffect(() => {
    if (selectedBanca !== "Todas" && !bancas.includes(selectedBanca)) {
      setSelectedBanca("Todas");
    }
  }, [bancas, selectedBanca]);

  // Filtered questions list
  const filteredQuestions = questions.filter((q) => {
    const qDisc = getQuestionDiscipline(q);
    const matchesSearch =
      q.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.assunto.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.banca.toLowerCase().includes(searchTerm.toLowerCase()) ||
      qDisc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBanca = selectedBanca === "Todas" || q.banca === selectedBanca;
    const matchesDisciplina = selectedDisciplina === "Todas" || qDisc === selectedDisciplina;
    const matchesAssunto = selectedAssunto === "Todos" || q.assunto === selectedAssunto;

    return matchesSearch && matchesBanca && matchesDisciplina && matchesAssunto;
  });

  // Unified Handler for Save / Edit from QuestionModal
  const handleSaveFromModal = async (
    compiledQuestion: Question,
    replicateBanca?: boolean,
    replicateDisciplina?: boolean,
    replicateAssunto?: boolean,
    originalBanca?: string,
    originalDisciplina?: string,
    originalAssunto?: string
  ): Promise<boolean | "added" | "updated" | "duplicate"> => {
    const batchUpdatesMap = new Map<string, Partial<Question>>();

    // 1. Replicate banca across the entire database if selected
    if (replicateBanca && originalBanca && originalBanca !== compiledQuestion.banca) {
      questions
        .filter((q) => q.banca?.trim() === originalBanca && q.id !== compiledQuestion.id)
        .forEach((q) => {
          const current = batchUpdatesMap.get(q.id) || {};
          batchUpdatesMap.set(q.id, { ...current, banca: compiledQuestion.banca });
        });
    }

    // 2. Replicate topic/assunto across the entire database if selected
    if (replicateAssunto && originalAssunto && originalAssunto !== compiledQuestion.assunto) {
      questions
        .filter((q) => q.assunto?.trim() === originalAssunto && q.id !== compiledQuestion.id)
        .forEach((q) => {
          const current = batchUpdatesMap.get(q.id) || {};
          batchUpdatesMap.set(q.id, { ...current, assunto: compiledQuestion.assunto });
        });
    }

    // 3. Replicate discipline across matching questions if selected
    if (replicateDisciplina && compiledQuestion.disciplina) {
      questions
        .filter((q) => {
          if (q.id === compiledQuestion.id) return false;
          const matchAssunto = originalAssunto && q.assunto?.trim() === originalAssunto;
          const matchDisciplina =
            originalDisciplina &&
            (q.disciplina?.trim() || getDisciplineForTopic(q.assunto)?.name) === originalDisciplina;
          return matchAssunto || matchDisciplina;
        })
        .forEach((q) => {
          const current = batchUpdatesMap.get(q.id) || {};
          batchUpdatesMap.set(q.id, { ...current, disciplina: compiledQuestion.disciplina });
        });
    }

    // Execute batch propagation across the entire database
    if (batchUpdatesMap.size > 0 && onBatchUpdateQuestions) {
      const batchPayload = Array.from(batchUpdatesMap.entries()).map(([id, changes]) => ({
        id,
        changes,
      }));
      await onBatchUpdateQuestions(batchPayload);
    }

    // 4. Save the single question
    if (questionToEdit) {
      const success = await onUpdateQuestion(compiledQuestion);
      if (success) {
        onAlert?.(
          batchUpdatesMap.size > 0
            ? `Questão atualizada e alterações refletidas em ${batchUpdatesMap.size} outras questões do banco de dados!`
            : "Questão atualizada com sucesso no banco de dados!",
          "Sucesso ✨"
        );
        setQuestionToEdit(null);
        return true;
      } else {
        onAlert?.("Erro ao atualizar a questão. Verifique a conexão.", "Erro");
        return false;
      }
    } else {
      const status = await onAddQuestion(compiledQuestion);
      if (status === "added") {
        onAlert?.("Excelente! Questão personalizada cadastrada com sucesso no banco de dados.", "Questão Cadastrada! 📝");
        setShowAddModal(false);
      } else if (status === "updated") {
        onAlert?.("Questão já cadastrada, porém foi atualizada com sucesso.", "Questão Atualizada");
        setShowAddModal(false);
      } else {
        onAlert?.("Questão já existente no banco de dados!", "Aviso");
      }
      return status;
    }
  };

  // Delete single question
  const handleDeleteSingleQuestion = async (qId: string) => {
    const confirmed = onConfirm
      ? await onConfirm(
          "Tem certeza que deseja excluir esta questão permanentemente do banco de dados? Essa ação não poderá ser desfeita.",
          "Excluir Questão",
          true,
          "Excluir Permanentemente",
          "Cancelar"
        )
      : window.confirm("Tem certeza que deseja excluir esta questão permanentemente?");
    if (!confirmed) return;
    if (onDeleteMultipleQuestions) {
      await onDeleteMultipleQuestions([qId]);
      onAlert?.("Questão excluída com sucesso do banco de dados.", "Excluída");
    }
  };

  return (
    <section id="question-bank-container" aria-label="Banco de Questões de Concurso" className="space-y-6">
      {/* Subaba / Modal: Alterar em Lote */}
      <BatchEditModal
        isOpen={showBatchModal}
        onClose={() => setShowBatchModal(false)}
        questions={questions}
        onBatchUpdateQuestions={onBatchUpdateQuestions}
        onUpdateQuestion={onUpdateQuestion}
        onDeleteMultipleQuestions={onDeleteMultipleQuestions}
        onAlert={onAlert}
        onConfirm={onConfirm}
      />

      {/* Subaba / Modal: Cadastrar Nova Questão */}
      <QuestionModal
        isOpen={showAddModal}
        mode="create"
        questions={questions}
        onClose={() => setShowAddModal(false)}
        onSaveQuestion={handleSaveFromModal}
        onAlert={onAlert}
      />

      {/* Subaba / Modal: Editar Questão Existente */}
      <QuestionModal
        isOpen={!!questionToEdit}
        mode="edit"
        questionToEdit={questionToEdit}
        questions={questions}
        onClose={() => setQuestionToEdit(null)}
        onSaveQuestion={handleSaveFromModal}
        onAlert={onAlert}
      />

      {/* Top Header: Search and Action Buttons */}
      <header className="flex flex-col md:flex-row gap-3 sm:gap-4 items-stretch md:items-center justify-between">
        <div className="flex-grow max-w-lg relative" role="search">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <input
            type="search"
            placeholder="Pesquise por enunciado, banca, disciplina ou assunto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Pesquisar questões"
            className="w-full pl-10 pr-4 h-11 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white placeholder-gray-400 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:focus:ring-indigo-500/50 text-sm font-medium"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          {/* Button: Alterar em Lote */}
          <button
            type="button"
            onClick={() => setShowBatchModal(true)}
            className="flex items-center justify-center gap-2 px-4 h-11 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/40 dark:hover:bg-indigo-900/60 text-indigo-600 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 rounded-xl text-xs sm:text-sm font-bold shadow-xs transition duration-200 cursor-pointer"
          >
            <Layers className="w-4 h-4" /> Alterar em Lote (Banca, Disciplina, Assunto)
          </button>

          {/* Button: Cadastrar Questão (Abre Subaba Modal) */}
          <button
            type="button"
            onClick={() => setShowAddModal(true)}
            className="flex items-center justify-center gap-2 px-5 h-11 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-xs transition duration-200 cursor-pointer"
          >
            <PlusCircle className="w-4 h-4 sm:w-5 sm:h-5" /> Cadastrar Questão
          </button>
        </div>
      </header>

      {/* Filter Bar (Banca, Disciplina, Tópico) */}
      <nav aria-label="Filtros de questões" className="flex flex-wrap items-center gap-2.5">
        {/* Filter by Banca */}
        <div className="flex items-center gap-1.5 bg-white dark:bg-gray-800 p-1 pl-2.5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xs">
          <label htmlFor="filter-banca" className="text-xs font-semibold text-gray-500 shrink-0">Banca:</label>
          <select
            id="filter-banca"
            value={selectedBanca}
            onChange={(e) => setSelectedBanca(e.target.value)}
            className="text-xs sm:text-sm font-semibold h-8 px-2 bg-transparent focus:outline-none text-gray-800 dark:text-gray-100 dark:bg-gray-800 dark:[color-scheme:dark] cursor-pointer"
          >
            {bancas.map((b) => (
              <option key={b} value={b} className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100">
                {b}
              </option>
            ))}
          </select>
        </div>

        {/* Filter by Disciplina */}
        <div className="flex items-center gap-1.5 bg-white dark:bg-gray-800 p-1 pl-2.5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xs">
          <label htmlFor="filter-disciplina" className="text-xs font-semibold text-gray-500 shrink-0">Disciplina:</label>
          <select
            id="filter-disciplina"
            value={selectedDisciplina}
            onChange={(e) => {
              setSelectedDisciplina(e.target.value);
              setSelectedAssunto("Todos");
            }}
            className="text-xs sm:text-sm font-semibold h-8 px-2 bg-transparent focus:outline-none text-gray-800 dark:text-gray-100 dark:bg-gray-800 dark:[color-scheme:dark] cursor-pointer"
          >
            {disciplinas.map((d) => (
              <option key={d} value={d} className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100">
                {d}
              </option>
            ))}
          </select>
        </div>

        {/* Filter by Assunto / Tópico */}
        <div className="flex items-center gap-1.5 bg-white dark:bg-gray-800 p-1 pl-2.5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xs max-w-full">
          <label htmlFor="filter-assunto" className="text-xs font-semibold text-gray-500 shrink-0">Tópico:</label>
          <select
            id="filter-assunto"
            value={selectedAssunto}
            onChange={(e) => setSelectedAssunto(e.target.value)}
            className="text-xs sm:text-sm font-semibold h-8 px-2 bg-transparent focus:outline-none text-gray-800 dark:text-gray-100 dark:bg-gray-800 dark:[color-scheme:dark] max-w-[180px] sm:max-w-[260px] truncate cursor-pointer"
          >
            {assuntos.map((as) => (
              <option key={as} value={as} className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100">
                {as}
              </option>
            ))}
          </select>
        </div>

        <span className="text-xs font-medium text-gray-400 ml-auto">
          Mostrando {filteredQuestions.length} de {questions.length} questões
        </span>
      </nav>

      {/* Questions List */}
      <div id="questions-list-wrapper" className="space-y-4">
        {filteredQuestions.map((q) => {
          const qDiscipline = getQuestionDiscipline(q);

          return (
            <article
              key={q.id}
              id={`question-card-${q.id}`}
              aria-labelledby={`question-title-${q.id}`}
              className="p-5 rounded-2xl bg-white border border-gray-150/40 dark:bg-gray-800 dark:border-gray-700/60 shadow-sm"
            >
              {/* Meta Tags */}
              <header className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-[10px] font-bold font-mono tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200 dark:bg-purple-950/30 dark:text-purple-300 dark:border-purple-800/40">
                  {qDiscipline}
                </span>
                <span className="text-[10px] font-bold font-mono tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100 dark:bg-indigo-950/20 dark:text-indigo-400 dark:border-indigo-900/30">
                  {q.banca}
                </span>
                <span className="text-[10px] font-semibold font-mono px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-300">
                  Ano: {q.ano}
                </span>
                <span className="text-[10px] font-semibold font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/20 dark:text-emerald-400">
                  {q.assunto}
                </span>
                {q.nivelSuperior && (
                  <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 dark:bg-amber-950/20 dark:text-amber-400 border border-amber-100 dark:border-amber-900/30">
                    Nível Superior
                  </span>
                )}
              </header>

              {/* Question Text */}
              <p id={`question-title-${q.id}`} className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-4 whitespace-pre-line leading-relaxed">
                {q.text}
              </p>

              {/* Question Image (if any) */}
              {q.image && (
                <div className="flex justify-center p-2 mb-4 bg-gray-50 dark:bg-gray-750 rounded-xl">
                  <img
                    src={q.image}
                    alt="Imagem ilustrativa da questão"
                    className="max-h-72 w-auto object-contain rounded-lg border border-gray-200 dark:border-gray-600"
                  />
                </div>
              )}

              {/* General Explanation (if any) */}
              {q.generalExplanation && (
                <div className="p-3 mb-3 bg-indigo-50/50 dark:bg-indigo-950/20 rounded-xl border border-indigo-100 dark:border-indigo-900/40 text-xs text-indigo-900 dark:text-indigo-300 flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block mb-0.5">Comentário Geral / Resolução:</span>
                    <p className="whitespace-pre-line">{q.generalExplanation}</p>
                  </div>
                </div>
              )}

              {/* Options */}
              <div className="space-y-2 mt-2">
                {q.options.map((opt, oIdx) => {
                  const isCorrect = q.correctIndex === oIdx;
                  return (
                    <div
                      key={oIdx}
                      className={`p-3 rounded-xl border text-xs font-medium transition ${
                        isCorrect
                          ? "bg-emerald-50/60 border-emerald-200 text-emerald-900 dark:bg-emerald-950/20 dark:border-emerald-800 dark:text-emerald-200"
                          : "bg-gray-50/40 border-gray-100 text-gray-600 dark:bg-gray-750/30 dark:border-gray-700 dark:text-gray-300"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span>{opt}</span>
                        {isCorrect && (
                          <span className="shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">
                            Gabarito
                          </span>
                        )}
                      </div>
                      {q.explanations && q.explanations[oIdx] && (
                        <div className="mt-1.5 pt-1.5 border-t border-gray-150/60 dark:border-gray-700/60 text-[11px] text-gray-500 dark:text-gray-400">
                          <span className="font-semibold text-gray-600 dark:text-gray-300 mr-1">
                            {isCorrect ? "Gabarito Comentado:" : "Comentário:"}
                          </span>
                          {q.explanations[oIdx]}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <footer className="flex justify-between items-center bg-gray-50 dark:bg-gray-750/30 -mx-5 -mb-5 p-3 rounded-b-2xl border-t border-gray-100 dark:border-gray-700/50 mt-4">
                <span className="text-[11px] text-gray-400 dark:text-gray-500 font-mono">ID: {q.id}</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setQuestionToEdit(q)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-xs font-bold shadow-xs transition duration-200 cursor-pointer"
                  >
                    <Edit3 className="w-3.5 h-3.5" /> Editar
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteSingleQuestion(q.id)}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-600 dark:bg-rose-950/30 dark:hover:bg-rose-900/50 dark:text-rose-400 rounded-lg text-xs font-bold transition duration-200 cursor-pointer"
                    title="Excluir questão"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </footer>
            </article>
          );
        })}

        {filteredQuestions.length === 0 && (
          <p className="text-center text-sm font-medium text-gray-400 py-8 dark:text-gray-500">
            Nenhuma questão encontrada para os filtros selecionados.
          </p>
        )}
      </div>
    </section>
  );
}
