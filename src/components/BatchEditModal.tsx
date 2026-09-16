import React, { useState } from "react";
import { X, Search, CheckSquare, Trash2, Sparkles, Building2, GraduationCap, BookOpen, Layers } from "lucide-react";
import { Question } from "../types";
import { TAXONOMY, getDisciplineForTopic } from "../data/taxonomy";

interface BatchEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
  onBatchUpdateQuestions?: (updates: { id: string; changes: Partial<Question> }[]) => Promise<boolean>;
  onUpdateQuestion: (q: Question) => Promise<boolean>;
  onDeleteMultipleQuestions?: (questionIds: string[]) => Promise<boolean>;
  onAlert?: (msg: string, title?: string) => void;
}

export default function BatchEditModal({
  isOpen,
  onClose,
  questions,
  onBatchUpdateQuestions,
  onUpdateQuestion,
  onDeleteMultipleQuestions,
  onAlert,
}: BatchEditModalProps) {
  const [activeTab, setActiveTab] = useState<"banca" | "disciplina" | "assunto">("banca");

  // Helper to determine question discipline
  const getQuestionDiscipline = (q: Question): string => {
    return q.disciplina || getDisciplineForTopic(q.assunto)?.name || "Língua Portuguesa";
  };

  // --- 1. BANCA STATE ---
  const [selectedBancas, setSelectedBancas] = useState<string[]>([]);
  const [bancaSearch, setBancaSearch] = useState("");
  const [bancaNewName, setBancaNewName] = useState("");
  const [isProcessingBanca, setIsProcessingBanca] = useState(false);

  // --- 2. DISCIPLINA STATE ---
  const [selectedDisciplinas, setSelectedDisciplinas] = useState<string[]>([]);
  const [disciplinaSearch, setDisciplinaSearch] = useState("");
  const [disciplinaNewName, setDisciplinaNewName] = useState("");
  const [isProcessingDisciplina, setIsProcessingDisciplina] = useState(false);

  // --- 3. ASSUNTO STATE ---
  const [selectedAssuntos, setSelectedAssuntos] = useState<string[]>([]);
  const [assuntoSearch, setAssuntoSearch] = useState("");
  const [assuntoNewName, setAssuntoNewName] = useState("");
  const [assuntoTargetDisciplina, setAssuntoTargetDisciplina] = useState("");
  const [isProcessingAssunto, setIsProcessingAssunto] = useState(false);
  const [unifyAllQuestionsBanca, setUnifyAllQuestionsBanca] = useState(false);

  if (!isOpen) return null;

  // --- DERIVED DATA ---
  const availableBancas = Array.from(new Set(questions.map((q) => q.banca).filter(Boolean))).sort();
  const availableDisciplinas = Array.from(
    new Set([
      ...TAXONOMY.map((d) => d.name),
      ...(questions.map((q) => q.disciplina).filter(Boolean) as string[]),
      ...questions.map((q) => getQuestionDiscipline(q)).filter(Boolean),
    ])
  ).sort();
  const availableAssuntos = Array.from(new Set(questions.map((q) => q.assunto).filter(Boolean))).sort();

  // Filtered lists by search
  const filteredBancas = availableBancas.filter((b) => b.toLowerCase().includes(bancaSearch.toLowerCase()));
  const filteredDisciplinas = availableDisciplinas.filter((d) => d.toLowerCase().includes(disciplinaSearch.toLowerCase()));
  const filteredAssuntos = availableAssuntos.filter((a) => a.toLowerCase().includes(assuntoSearch.toLowerCase()));

  // Count affected questions
  const totalBancaQsAffected = unifyAllQuestionsBanca
    ? questions.length
    : questions.filter((q) => selectedBancas.includes(q.banca)).length;
  const totalDisciplinaQsAffected = questions.filter((q) => selectedDisciplinas.includes(getQuestionDiscipline(q))).length;
  const totalAssuntoQsAffected = questions.filter((q) => selectedAssuntos.includes(q.assunto)).length;

  // --- BANCA ACTIONS ---
  const handleToggleBanca = (banca: string) => {
    setUnifyAllQuestionsBanca(false);
    setSelectedBancas((prev) => (prev.includes(banca) ? prev.filter((b) => b !== banca) : [...prev, banca]));
  };

  const handleSelectAllBancas = () => {
    const allSelected = filteredBancas.length > 0 && filteredBancas.every((b) => selectedBancas.includes(b));
    if (allSelected) {
      setSelectedBancas((prev) => prev.filter((b) => !filteredBancas.includes(b)));
      setUnifyAllQuestionsBanca(false);
    } else {
      setSelectedBancas((prev) => Array.from(new Set([...prev, ...filteredBancas])));
    }
  };

  const handleSelectEntireDatabaseBancas = () => {
    if (unifyAllQuestionsBanca) {
      setUnifyAllQuestionsBanca(false);
      setSelectedBancas([]);
    } else {
      setUnifyAllQuestionsBanca(true);
      setSelectedBancas([...availableBancas]);
    }
  };

  const handleApplyBancaBatch = async () => {
    const target = bancaNewName.trim();
    if (!unifyAllQuestionsBanca && selectedBancas.length === 0) {
      onAlert?.("Selecione pelo menos uma banca para alterar ou marque a opção de unificar todo o banco!", "Atenção");
      return;
    }
    if (!target) {
      onAlert?.("Digite ou selecione o novo nome para a banca examinadora!", "Campo Obrigatório");
      return;
    }

    setIsProcessingBanca(true);
    try {
      const matching = unifyAllQuestionsBanca
        ? questions
        : questions.filter((q) => selectedBancas.includes(q.banca) || (selectedBancas.includes("") && !q.banca));
      if (matching.length === 0) {
        onAlert?.("Nenhuma questão encontrada com as bancas selecionadas.", "Aviso");
        return;
      }

      if (onBatchUpdateQuestions) {
        const updates = matching.map((q) => ({ id: q.id, changes: { banca: target } }));
        await onBatchUpdateQuestions(updates);
      } else {
        for (const q of matching) {
          await onUpdateQuestion({ ...q, banca: target });
        }
      }

      onAlert?.(
        `Banca examinadora unificada com sucesso para "${target}" em todas as ${matching.length} questões! As alterações foram gravadas permanentemente em todo o banco de dados.`,
        "Bancas Atualizadas com Sucesso! 🏛️"
      );
      setSelectedBancas([]);
      setBancaNewName("");
      setUnifyAllQuestionsBanca(false);
    } catch (err) {
      console.error("Erro ao alterar bancas em lote:", err);
      onAlert?.("Ocorreu um erro ao atualizar as bancas.", "Erro");
    } finally {
      setIsProcessingBanca(false);
    }
  };

  const handleDeleteBancasBatch = async () => {
    if (selectedBancas.length === 0) return;
    const matching = questions.filter((q) => selectedBancas.includes(q.banca));
    if (!confirm(`Atenção: Deseja realmente excluir ${matching.length} questões das bancas selecionadas (${selectedBancas.join(", ")})?`)) {
      return;
    }
    if (onDeleteMultipleQuestions) {
      await onDeleteMultipleQuestions(matching.map((q) => q.id));
      setSelectedBancas([]);
      onAlert?.(`${matching.length} questões foram excluídas com sucesso!`, "Excluído");
    }
  };

  // --- DISCIPLINA ACTIONS ---
  const handleToggleDisciplina = (disciplina: string) => {
    setSelectedDisciplinas((prev) => (prev.includes(disciplina) ? prev.filter((d) => d !== disciplina) : [...prev, disciplina]));
  };

  const handleSelectAllDisciplinas = () => {
    const allSelected = filteredDisciplinas.length > 0 && filteredDisciplinas.every((d) => selectedDisciplinas.includes(d));
    if (allSelected) {
      setSelectedDisciplinas((prev) => prev.filter((d) => !filteredDisciplinas.includes(d)));
    } else {
      setSelectedDisciplinas((prev) => Array.from(new Set([...prev, ...filteredDisciplinas])));
    }
  };

  const handleApplyDisciplinaBatch = async () => {
    const target = disciplinaNewName.trim();
    if (selectedDisciplinas.length === 0) {
      onAlert?.("Selecione pelo menos uma disciplina para alterar!", "Atenção");
      return;
    }
    if (!target) {
      onAlert?.("Digite ou selecione o novo nome para a disciplina!", "Campo Obrigatório");
      return;
    }

    setIsProcessingDisciplina(true);
    try {
      const matching = questions.filter((q) => selectedDisciplinas.includes(getQuestionDiscipline(q)));
      if (matching.length === 0) {
        onAlert?.("Nenhuma questão encontrada com as disciplinas selecionadas.", "Aviso");
        return;
      }

      if (onBatchUpdateQuestions) {
        const updates = matching.map((q) => ({ id: q.id, changes: { disciplina: target } }));
        await onBatchUpdateQuestions(updates);
      } else {
        for (const q of matching) {
          await onUpdateQuestion({ ...q, disciplina: target });
        }
      }

      onAlert?.(
        `Disciplina unificada com sucesso para "${target}" em ${matching.length} questões! As alterações foram gravadas permanentemente.`,
        "Disciplinas Atualizadas com Sucesso! 🎓"
      );
      setSelectedDisciplinas([]);
      setDisciplinaNewName("");
    } catch (err) {
      console.error("Erro ao alterar disciplinas em lote:", err);
      onAlert?.("Ocorreu um erro ao atualizar as disciplinas.", "Erro");
    } finally {
      setIsProcessingDisciplina(false);
    }
  };

  const handleDeleteDisciplinasBatch = async () => {
    if (selectedDisciplinas.length === 0) return;
    const matching = questions.filter((q) => selectedDisciplinas.includes(getQuestionDiscipline(q)));
    if (!confirm(`Atenção: Deseja realmente excluir ${matching.length} questões das disciplinas selecionadas (${selectedDisciplinas.join(", ")})?`)) {
      return;
    }
    if (onDeleteMultipleQuestions) {
      await onDeleteMultipleQuestions(matching.map((q) => q.id));
      setSelectedDisciplinas([]);
      onAlert?.(`${matching.length} questões foram excluídas com sucesso!`, "Excluído");
    }
  };

  // --- ASSUNTO ACTIONS ---
  const handleToggleAssunto = (assunto: string) => {
    setSelectedAssuntos((prev) => (prev.includes(assunto) ? prev.filter((a) => a !== assunto) : [...prev, assunto]));
  };

  const handleSelectAllAssuntos = () => {
    const allSelected = filteredAssuntos.length > 0 && filteredAssuntos.every((a) => selectedAssuntos.includes(a));
    if (allSelected) {
      setSelectedAssuntos((prev) => prev.filter((a) => !filteredAssuntos.includes(a)));
    } else {
      setSelectedAssuntos((prev) => Array.from(new Set([...prev, ...filteredAssuntos])));
    }
  };

  const handleApplyAssuntoBatch = async () => {
    const target = assuntoNewName.trim();
    if (selectedAssuntos.length === 0) {
      onAlert?.("Selecione pelo menos um tópico/assunto para alterar!", "Atenção");
      return;
    }
    if (!target) {
      onAlert?.("Digite ou selecione o novo nome para o tópico/assunto!", "Campo Obrigatório");
      return;
    }

    setIsProcessingAssunto(true);
    try {
      const matching = questions.filter((q) => selectedAssuntos.includes(q.assunto));
      if (matching.length === 0) {
        onAlert?.("Nenhuma questão encontrada com os assuntos selecionados.", "Aviso");
        return;
      }

      const changes: Partial<Question> = { assunto: target };
      if (assuntoTargetDisciplina.trim()) {
        changes.disciplina = assuntoTargetDisciplina.trim();
      }

      if (onBatchUpdateQuestions) {
        const updates = matching.map((q) => ({ id: q.id, changes }));
        await onBatchUpdateQuestions(updates);
      } else {
        for (const q of matching) {
          await onUpdateQuestion({ ...q, ...changes });
        }
      }

      onAlert?.(
        `Tópico/Assunto unificado com sucesso para "${target}" em ${matching.length} questões! As alterações foram gravadas permanentemente.`,
        "Tópicos Atualizados com Sucesso! 📚"
      );
      setSelectedAssuntos([]);
      setAssuntoNewName("");
      setAssuntoTargetDisciplina("");
    } catch (err) {
      console.error("Erro ao alterar assuntos em lote:", err);
      onAlert?.("Ocorreu um erro ao atualizar os assuntos.", "Erro");
    } finally {
      setIsProcessingAssunto(false);
    }
  };

  const handleDeleteAssuntosBatch = async () => {
    if (selectedAssuntos.length === 0) return;
    const matching = questions.filter((q) => selectedAssuntos.includes(q.assunto));
    if (!confirm(`Atenção: Deseja realmente excluir ${matching.length} questões dos tópicos selecionados (${selectedAssuntos.join(", ")})?`)) {
      return;
    }
    if (onDeleteMultipleQuestions) {
      await onDeleteMultipleQuestions(matching.map((q) => q.id));
      setSelectedAssuntos([]);
      onAlert?.(`${matching.length} questões foram excluídas com sucesso!`, "Excluído");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden my-6">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-850/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-800 dark:text-gray-100">
                Alteração em Lote de Questões
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Padronize Banca Examinadora, Disciplina ou Tópico/Assunto sem formulário de cadastro.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-200 transition"
            title="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Tabs Navigation */}
        <div className="px-6 pt-4 border-b border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800">
          <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-900 p-1 rounded-xl">
            <button
              type="button"
              onClick={() => setActiveTab("banca")}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-bold transition duration-150 ${
                activeTab === "banca"
                  ? "bg-white dark:bg-gray-750 text-indigo-600 dark:text-indigo-400 shadow-xs"
                  : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Banca Examinadora</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-gray-200/70 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                {availableBancas.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("disciplina")}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-bold transition duration-150 ${
                activeTab === "disciplina"
                  ? "bg-white dark:bg-gray-750 text-indigo-600 dark:text-indigo-400 shadow-xs"
                  : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Disciplina</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-gray-200/70 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                {availableDisciplinas.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("assunto")}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-bold transition duration-150 ${
                activeTab === "assunto"
                  ? "bg-white dark:bg-gray-750 text-indigo-600 dark:text-indigo-400 shadow-xs"
                  : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Tópico / Assunto</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-gray-200/70 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                {availableAssuntos.length}
              </span>
            </button>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
          {/* ===================== TAB 1: BANCA EXAMINADORA ===================== */}
          {activeTab === "banca" && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-2 justify-between items-start sm:items-center">
                <div className="relative flex-1 w-full">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Filtrar bancas..."
                    value={bancaSearch}
                    onChange={(e) => setBancaSearch(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-gray-200 bg-white dark:bg-gray-750 dark:border-gray-600 dark:text-gray-100 text-xs font-medium focus:outline-indigo-500"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleSelectAllBancas}
                    className="text-xs text-indigo-600 dark:text-indigo-400 font-bold hover:underline flex items-center gap-1 shrink-0 cursor-pointer"
                  >
                    <CheckSquare className="w-4 h-4" />
                    {filteredBancas.length > 0 && filteredBancas.every((b) => selectedBancas.includes(b))
                      ? "Desmarcar"
                      : "Marcar Filtradas"}
                  </button>
                  <button
                    type="button"
                    onClick={handleSelectEntireDatabaseBancas}
                    className={`text-xs px-2.5 py-1 rounded-lg font-bold flex items-center gap-1 transition cursor-pointer ${
                      unifyAllQuestionsBanca
                        ? "bg-indigo-600 text-white shadow-2xs"
                        : "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/50"
                    }`}
                  >
                    ⚡ Unificar 100% do Banco ({questions.length} Qs)
                  </button>
                </div>
              </div>

              {/* Checklist Box */}
              <div className="max-h-52 overflow-y-auto rounded-xl border border-gray-200 dark:border-gray-700 p-2 bg-gray-50/50 dark:bg-gray-850/50 space-y-1">
                {filteredBancas.length === 0 ? (
                  <p className="text-center py-6 text-xs text-gray-400">Nenhuma banca encontrada.</p>
                ) : (
                  filteredBancas.map((b) => {
                    const isSelected = selectedBancas.includes(b);
                    const count = questions.filter((q) => q.banca === b).length;
                    return (
                      <label
                        key={b}
                        className={`flex items-center justify-between p-2.5 rounded-lg cursor-pointer transition text-xs select-none ${
                          isSelected
                            ? "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200 font-bold border border-indigo-200 dark:border-indigo-800/60"
                            : "hover:bg-white dark:hover:bg-gray-750 text-gray-700 dark:text-gray-300 border border-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0 pr-2">
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => handleToggleBanca(b)}
                            className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-gray-300 dark:border-gray-600 cursor-pointer"
                          />
                          <span className="truncate font-semibold">{b}</span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white dark:bg-gray-700 text-gray-500 dark:text-gray-300 shadow-2xs font-mono font-medium shrink-0">
                          {count} {count === 1 ? "questão" : "questões"}
                        </span>
                      </label>
                    );
                  })
                )}
              </div>

              {/* Action Box when 1 or more are selected */}
              {selectedBancas.length > 0 ? (
                <div className="p-4 bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/60 rounded-xl space-y-3 animate-fade-in">
                  <div className="flex items-center justify-between text-xs font-bold text-indigo-900 dark:text-indigo-300">
                    <span>🎯 {selectedBancas.length} banca(s) selecionada(s)</span>
                    <span className="font-semibold text-indigo-700 dark:text-indigo-400">
                      Total: {totalBancaQsAffected} questões afetadas
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider mb-1">
                        Novo nome unificado para as bancas:
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: IBFC, CESPE, FGV..."
                        value={bancaNewName}
                        onChange={(e) => setBancaNewName(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-indigo-200 bg-white dark:bg-gray-750 dark:border-indigo-700 dark:text-gray-100 text-xs font-semibold focus:outline-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider mb-1">
                        Ou unificar em banca existente:
                      </label>
                      <select
                        value={bancaNewName}
                        onChange={(e) => setBancaNewName(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-white dark:bg-gray-750 dark:border-gray-600 dark:text-gray-100 text-xs font-semibold focus:outline-indigo-500"
                      >
                        <option value="">-- Escolha uma banca existente --</option>
                        {availableBancas
                          .filter((b) => !selectedBancas.includes(b))
                          .map((b) => (
                            <option key={b} value={b}>
                              {b}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    <button
                      type="button"
                      disabled={isProcessingBanca}
                      onClick={handleApplyBancaBatch}
                      className="flex-1 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-xs transition flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4" />
                      {isProcessingBanca ? "Gravando alterações..." : `Aplicar Nova Banca às ${totalBancaQsAffected} Questões`}
                    </button>
                    <button
                      type="button"
                      onClick={handleDeleteBancasBatch}
                      className="py-2 px-3 bg-red-500 hover:bg-red-600 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                      title="Excluir bancas selecionadas e suas questões"
                    >
                      <Trash2 className="w-4 h-4" />
                      Excluir
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-3 bg-gray-50 dark:bg-gray-850/40 border border-gray-200 dark:border-gray-700 rounded-xl text-xs text-gray-500 dark:text-gray-400 text-center">
                  💡 Selecione uma ou mais bancas acima para alterar o nome delas em lote.
                </div>
              )}
            </div>
          )}

          {/* ===================== TAB 2: DISCIPLINA ===================== */}
          {activeTab === "disciplina" && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-2 justify-between items-start sm:items-center">
                <div className="relative flex-1 w-full">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Filtrar disciplinas..."
                    value={disciplinaSearch}
                    onChange={(e) => setDisciplinaSearch(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-gray-200 bg-white dark:bg-gray-750 dark:border-gray-600 dark:text-gray-100 text-xs font-medium focus:outline-indigo-500"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleSelectAllDisciplinas}
                  className="text-xs text-indigo-600 dark:text-indigo-400 font-bold hover:underline flex items-center gap-1 shrink-0"
                >
                  <CheckSquare className="w-4 h-4" />
                  {filteredDisciplinas.length > 0 && filteredDisciplinas.every((d) => selectedDisciplinas.includes(d))
                    ? "Desmarcar Todas"
                    : "Marcar Todas"}
                </button>
              </div>

              {/* Checklist Box */}
              <div className="max-h-52 overflow-y-auto rounded-xl border border-gray-200 dark:border-gray-700 p-2 bg-gray-50/50 dark:bg-gray-850/50 space-y-1">
                {filteredDisciplinas.length === 0 ? (
                  <p className="text-center py-6 text-xs text-gray-400">Nenhuma disciplina encontrada.</p>
                ) : (
                  filteredDisciplinas.map((d) => {
                    const isSelected = selectedDisciplinas.includes(d);
                    const count = questions.filter((q) => getQuestionDiscipline(q) === d).length;
                    return (
                      <label
                        key={d}
                        className={`flex items-center justify-between p-2.5 rounded-lg cursor-pointer transition text-xs select-none ${
                          isSelected
                            ? "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200 font-bold border border-indigo-200 dark:border-indigo-800/60"
                            : "hover:bg-white dark:hover:bg-gray-750 text-gray-700 dark:text-gray-300 border border-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0 pr-2">
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => handleToggleDisciplina(d)}
                            className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-gray-300 dark:border-gray-600 cursor-pointer"
                          />
                          <span className="truncate font-semibold">{d}</span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white dark:bg-gray-700 text-gray-500 dark:text-gray-300 shadow-2xs font-mono font-medium shrink-0">
                          {count} {count === 1 ? "questão" : "questões"}
                        </span>
                      </label>
                    );
                  })
                )}
              </div>

              {/* Action Box when 1 or more are selected */}
              {selectedDisciplinas.length > 0 ? (
                <div className="p-4 bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/60 rounded-xl space-y-3 animate-fade-in">
                  <div className="flex items-center justify-between text-xs font-bold text-indigo-900 dark:text-indigo-300">
                    <span>🎯 {selectedDisciplinas.length} disciplina(s) selecionada(s)</span>
                    <span className="font-semibold text-indigo-700 dark:text-indigo-400">
                      Total: {totalDisciplinaQsAffected} questões afetadas
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider mb-1">
                        Novo nome unificado para a disciplina:
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: Língua Portuguesa, Noções de Informática..."
                        value={disciplinaNewName}
                        onChange={(e) => setDisciplinaNewName(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-indigo-200 bg-white dark:bg-gray-750 dark:border-indigo-700 dark:text-gray-100 text-xs font-semibold focus:outline-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider mb-1">
                        Ou unificar em disciplina existente:
                      </label>
                      <select
                        value={disciplinaNewName}
                        onChange={(e) => setDisciplinaNewName(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-white dark:bg-gray-750 dark:border-gray-600 dark:text-gray-100 text-xs font-semibold focus:outline-indigo-500"
                      >
                        <option value="">-- Escolha uma disciplina existente --</option>
                        {availableDisciplinas
                          .filter((d) => !selectedDisciplinas.includes(d))
                          .map((d) => (
                            <option key={d} value={d}>
                              {d}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    <button
                      type="button"
                      disabled={isProcessingDisciplina}
                      onClick={handleApplyDisciplinaBatch}
                      className="flex-1 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-xs transition flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4" />
                      {isProcessingDisciplina ? "Gravando alterações..." : `Aplicar Nova Disciplina às ${totalDisciplinaQsAffected} Questões`}
                    </button>
                    <button
                      type="button"
                      onClick={handleDeleteDisciplinasBatch}
                      className="py-2 px-3 bg-red-500 hover:bg-red-600 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                      title="Excluir disciplinas selecionadas e suas questões"
                    >
                      <Trash2 className="w-4 h-4" />
                      Excluir
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-3 bg-gray-50 dark:bg-gray-850/40 border border-gray-200 dark:border-gray-700 rounded-xl text-xs text-gray-500 dark:text-gray-400 text-center">
                  💡 Selecione uma ou mais disciplinas acima para alterar o nome delas em lote.
                </div>
              )}
            </div>
          )}

          {/* ===================== TAB 3: TÓPICO / ASSUNTO ===================== */}
          {activeTab === "assunto" && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-2 justify-between items-start sm:items-center">
                <div className="relative flex-1 w-full">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Filtrar tópicos/assuntos..."
                    value={assuntoSearch}
                    onChange={(e) => setAssuntoSearch(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-gray-200 bg-white dark:bg-gray-750 dark:border-gray-600 dark:text-gray-100 text-xs font-medium focus:outline-indigo-500"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleSelectAllAssuntos}
                  className="text-xs text-indigo-600 dark:text-indigo-400 font-bold hover:underline flex items-center gap-1 shrink-0"
                >
                  <CheckSquare className="w-4 h-4" />
                  {filteredAssuntos.length > 0 && filteredAssuntos.every((a) => selectedAssuntos.includes(a))
                    ? "Desmarcar Todos"
                    : "Marcar Todos"}
                </button>
              </div>

              {/* Checklist Box */}
              <div className="max-h-52 overflow-y-auto rounded-xl border border-gray-200 dark:border-gray-700 p-2 bg-gray-50/50 dark:bg-gray-850/50 space-y-1">
                {filteredAssuntos.length === 0 ? (
                  <p className="text-center py-6 text-xs text-gray-400">Nenhum assunto encontrado.</p>
                ) : (
                  filteredAssuntos.map((a) => {
                    const isSelected = selectedAssuntos.includes(a);
                    const count = questions.filter((q) => q.assunto === a).length;
                    return (
                      <label
                        key={a}
                        className={`flex items-center justify-between p-2.5 rounded-lg cursor-pointer transition text-xs select-none ${
                          isSelected
                            ? "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200 font-bold border border-indigo-200 dark:border-indigo-800/60"
                            : "hover:bg-white dark:hover:bg-gray-750 text-gray-700 dark:text-gray-300 border border-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0 pr-2">
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => handleToggleAssunto(a)}
                            className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-gray-300 dark:border-gray-600 cursor-pointer"
                          />
                          <span className="truncate font-semibold">{a}</span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white dark:bg-gray-700 text-gray-500 dark:text-gray-300 shadow-2xs font-mono font-medium shrink-0">
                          {count} {count === 1 ? "questão" : "questões"}
                        </span>
                      </label>
                    );
                  })
                )}
              </div>

              {/* Action Box when 1 or more are selected */}
              {selectedAssuntos.length > 0 ? (
                <div className="p-4 bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/60 rounded-xl space-y-3 animate-fade-in">
                  <div className="flex items-center justify-between text-xs font-bold text-indigo-900 dark:text-indigo-300">
                    <span>🎯 {selectedAssuntos.length} assunto(s) selecionado(s)</span>
                    <span className="font-semibold text-indigo-700 dark:text-indigo-400">
                      Total: {totalAssuntoQsAffected} questões afetadas
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider mb-1">
                        Novo nome unificado para os assuntos:
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: Ortografia e Acentuação, Sintaxe..."
                        value={assuntoNewName}
                        onChange={(e) => setAssuntoNewName(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-indigo-200 bg-white dark:bg-gray-750 dark:border-indigo-700 dark:text-gray-100 text-xs font-semibold focus:outline-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider mb-1">
                        Ou unificar em assunto existente:
                      </label>
                      <select
                        value={assuntoNewName}
                        onChange={(e) => setAssuntoNewName(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-white dark:bg-gray-750 dark:border-gray-600 dark:text-gray-100 text-xs font-semibold focus:outline-indigo-500"
                      >
                        <option value="">-- Escolha um assunto existente --</option>
                        {availableAssuntos
                          .filter((a) => !selectedAssuntos.includes(a))
                          .map((a) => (
                            <option key={a} value={a}>
                              {a}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>

                  {/* Optional Target Disciplina */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider mb-1">
                      Vincular também a uma Disciplina específica (opcional):
                    </label>
                    <select
                      value={assuntoTargetDisciplina}
                      onChange={(e) => setAssuntoTargetDisciplina(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-white dark:bg-gray-750 dark:border-gray-600 dark:text-gray-100 text-xs font-semibold focus:outline-indigo-500"
                    >
                      <option value="">-- Manter disciplina atual de cada questão --</option>
                      {availableDisciplinas.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    <button
                      type="button"
                      disabled={isProcessingAssunto}
                      onClick={handleApplyAssuntoBatch}
                      className="flex-1 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-xs transition flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4" />
                      {isProcessingAssunto ? "Gravando alterações..." : `Aplicar Novo Assunto às ${totalAssuntoQsAffected} Questões`}
                    </button>
                    <button
                      type="button"
                      onClick={handleDeleteAssuntosBatch}
                      className="py-2 px-3 bg-red-500 hover:bg-red-600 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                      title="Excluir assuntos selecionados e suas questões"
                    >
                      <Trash2 className="w-4 h-4" />
                      Excluir
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-3 bg-gray-50 dark:bg-gray-850/40 border border-gray-200 dark:border-gray-700 rounded-xl text-xs text-gray-500 dark:text-gray-400 text-center">
                  💡 Selecione um ou mais tópicos/assuntos acima para alterar o nome deles em lote.
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-850/50 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 text-xs font-bold transition cursor-pointer"
          >
            Concluir / Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
