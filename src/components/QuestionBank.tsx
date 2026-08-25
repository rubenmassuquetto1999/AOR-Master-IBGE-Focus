import React, { useState } from "react";
import { Plus, Search, Filter, PlusCircle, CheckCircle, HelpCircle, Briefcase, Award, Edit3, Save, X, Image, CheckSquare, Square, Trash2, Layers, CheckCheck, RefreshCw, Sparkles } from "lucide-react";
import { Question } from "../types";

interface QuestionBankProps {
  questions: Question[];
  onAddQuestion: (q: Question) => Promise<"added" | "updated" | "duplicate">;
  onUpdateQuestion: (q: Question) => Promise<boolean>;
  onReceiveXp: (amount: number) => void;
  onAlert?: (msg: string, title?: string) => void;
  onDeleteMultipleQuestions?: (questionIds: string[]) => Promise<boolean>;
}

export default function QuestionBank({
  questions,
  onAddQuestion,
  onUpdateQuestion,
  onReceiveXp,
  onAlert,
  onDeleteMultipleQuestions,
}: QuestionBankProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBanca, setSelectedBanca] = useState("Todas");
  const [selectedAssunto, setSelectedAssunto] = useState("Todos");
  const [showAddForm, setShowAddForm] = useState(false);

  // Editing state
  const [editingQuestionId, setEditingQuestionId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<{
    text: string;
    banca: string;
    ano: number;
    assunto: string;
    nivelSuperior: boolean;
    image: string;
    options: string[];
    explanations: string[];
    correctIndex: number;
    generalExplanation: string;
  } | null>(null);

  // New Question Form state
  const [newText, setNewText] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newBanca, setNewBanca] = useState("CESPE");
  const [newAno, setNewAno] = useState(new Date().getFullYear());
  const [newAssunto, setNewAssunto] = useState("Língua Portuguesa");
  const [isCustomBanca, setIsCustomBanca] = useState(false);
  const [isCustomAssunto, setIsCustomAssunto] = useState(false);
  const [newIsNivelSuperior, setNewIsNivelSuperior] = useState(true);
  const [newGeneralExplanation, setNewGeneralExplanation] = useState("");
  const [numOptions, setNewNumOptions] = useState(5); // Default 5 options

  // States for Cadastrar ou Alterar Banca/Assunto
  const [bancaActionType, setBancaActionType] = useState<"cadastrar" | "alterar">("cadastrar");
  const [selectedBancasToRename, setSelectedBancasToRename] = useState<string[]>([]);
  const [bancaSearchFilter, setBancaSearchFilter] = useState("");
  const [bancaNewName, setBancaNewName] = useState("");
  const [isProcessingBancaBatch, setIsProcessingBancaBatch] = useState(false);

  const [assuntoActionType, setAssuntoActionType] = useState<"cadastrar" | "alterar">("cadastrar");
  const [selectedAssuntosToRename, setSelectedAssuntosToRename] = useState<string[]>([]);
  const [assuntoSearchFilter, setAssuntoSearchFilter] = useState("");
  const [assuntoNewName, setAssuntoNewName] = useState("");
  const [isProcessingAssuntoBatch, setIsProcessingAssuntoBatch] = useState(false);

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
  const [correctIndex, setCorrectIndex] = useState(0);

  // Filter and search logic
  const bancas = ["Todas", ...Array.from(new Set(questions.map((q) => q.banca).filter(Boolean))).sort()];
  const assuntos = ["Todos", ...Array.from(new Set(questions.map((q) => q.assunto).filter(Boolean))).sort()];

  const filteredQuestions = questions.filter((q) => {
    const matchesSearch =
      q.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.assunto.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.banca.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBanca = selectedBanca === "Todas" || q.banca === selectedBanca;
    const matchesAssunto = selectedAssunto === "Todos" || q.assunto === selectedAssunto;
    return matchesSearch && matchesBanca && matchesAssunto;
  });

  const handleNumOptionsChange = (num: number) => {
    setNewNumOptions(num);
    const updatedOptions = Array.from({ length: num }, (_, i) => options[i] || `${String.fromCharCode(65 + i)}) `);
    const updatedExps = Array.from({ length: num }, (_, i) => explanations[i] || `Explicação detalhada para a alternativa ${String.fromCharCode(65 + i)}...`);
    setOptions(updatedOptions);
    setExplanations(updatedExps);
    if (correctIndex >= num) setCorrectIndex(0);
  };

  const handleOptionChange = (idx: number, val: string) => {
    const updated = [...options];
    updated[idx] = val;
    setOptions(updated);
  };

  const handleExplanationChange = (idx: number, val: string) => {
    const updated = [...explanations];
    updated[idx] = val;
    setExplanations(updated);
  };

  const handleToggleAssuntoSelection = (assuntoName: string) => {
    setSelectedAssuntosToRename((prev) =>
      prev.includes(assuntoName) ? prev.filter((a) => a !== assuntoName) : [...prev, assuntoName]
    );
  };

  const handleSelectAllAssuntos = (filteredList: string[]) => {
    const allSelected = filteredList.every((a) => selectedAssuntosToRename.includes(a));
    if (allSelected) {
      setSelectedAssuntosToRename((prev) => prev.filter((a) => !filteredList.includes(a)));
    } else {
      setSelectedAssuntosToRename((prev) => Array.from(new Set([...prev, ...filteredList])));
    }
  };

  const handleToggleBancaSelection = (bancaName: string) => {
    setSelectedBancasToRename((prev) =>
      prev.includes(bancaName) ? prev.filter((b) => b !== bancaName) : [...prev, bancaName]
    );
  };

  const handleSelectAllBancas = (filteredList: string[]) => {
    const allSelected = filteredList.every((b) => selectedBancasToRename.includes(b));
    if (allSelected) {
      setSelectedBancasToRename((prev) => prev.filter((b) => !filteredList.includes(b)));
    } else {
      setSelectedBancasToRename((prev) => Array.from(new Set([...prev, ...filteredList])));
    }
  };

  const handleBatchRenameBancaGlobally = async () => {
    if (selectedBancasToRename.length === 0) {
      if (onAlert) onAlert("Selecione pelo menos uma banca examinadora nas caixas de seleção!", "Aviso");
      else alert("Selecione pelo menos uma banca examinadora nas caixas de seleção!");
      return;
    }
    if (!bancaNewName.trim()) {
      if (onAlert) onAlert("Digite ou selecione o novo nome para unificar/alterar as bancas selecionadas!", "Aviso");
      else alert("Digite ou selecione o novo nome para unificar/alterar as bancas selecionadas!");
      return;
    }

    const targetName = bancaNewName.trim();
    const questionsToUpdate = questions.filter((q) => selectedBancasToRename.includes(q.banca));
    if (questionsToUpdate.length === 0) {
      if (onAlert) onAlert("Nenhuma questão encontrada com as bancas selecionadas.", "Aviso");
      else alert("Nenhuma questão encontrada com as bancas selecionadas.");
      return;
    }

    setIsProcessingBancaBatch(true);
    let updatedCount = 0;
    try {
      for (const q of questionsToUpdate) {
        const success = await onUpdateQuestion({
          ...q,
          banca: targetName,
        });
        if (success) {
          updatedCount++;
        }
      }

      if (onAlert) {
        onAlert(
          `Sucesso! ${selectedBancasToRename.length} banca(s) foram alteradas para "${targetName}" em ${updatedCount} questões de uma só vez! ✨`,
          "Bancas Atualizadas em Lote 🏛️"
        );
      } else {
        alert(`Sucesso! ${selectedBancasToRename.length} banca(s) foram alteradas para "${targetName}" em ${updatedCount} questões!`);
      }

      // Reset
      setSelectedBancasToRename([]);
      setBancaNewName("");
      setBancaSearchFilter("");
      setIsCustomBanca(false);
      setNewBanca(targetName);
      setBancaActionType("cadastrar");
    } finally {
      setIsProcessingBancaBatch(false);
    }
  };

  const handleBatchRenameAssuntoGlobally = async () => {
    if (selectedAssuntosToRename.length === 0) {
      if (onAlert) onAlert("Selecione pelo menos um assunto/tópico nas caixas de seleção!", "Aviso");
      else alert("Selecione pelo menos um assunto/tópico nas caixas de seleção!");
      return;
    }
    if (!assuntoNewName.trim()) {
      if (onAlert) onAlert("Digite ou selecione o novo nome para unificar/alterar os assuntos selecionados!", "Aviso");
      else alert("Digite ou selecione o novo nome para unificar/alterar os assuntos selecionados!");
      return;
    }

    const targetName = assuntoNewName.trim();
    const questionsToUpdate = questions.filter((q) => selectedAssuntosToRename.includes(q.assunto));
    if (questionsToUpdate.length === 0) {
      if (onAlert) onAlert("Nenhuma questão encontrada com os assuntos selecionados.", "Aviso");
      else alert("Nenhuma questão encontrada com os assuntos selecionados.");
      return;
    }

    setIsProcessingAssuntoBatch(true);
    let updatedCount = 0;
    try {
      for (const q of questionsToUpdate) {
        const success = await onUpdateQuestion({
          ...q,
          assunto: targetName,
        });
        if (success) {
          updatedCount++;
        }
      }

      if (onAlert) {
        onAlert(
          `Sucesso! ${selectedAssuntosToRename.length} assunto(s)/tópico(s) foram alterados para "${targetName}" em ${updatedCount} questões numa pancada só! ✨`,
          "Assuntos Atualizados em Lote 📚"
        );
      } else {
        alert(`Sucesso! ${selectedAssuntosToRename.length} assunto(s) foram alterados para "${targetName}" em ${updatedCount} questões!`);
      }

      // Reset
      setSelectedAssuntosToRename([]);
      setAssuntoNewName("");
      setAssuntoSearchFilter("");
      setIsCustomAssunto(false);
      setNewAssunto(targetName);
      setAssuntoActionType("cadastrar");
    } finally {
      setIsProcessingAssuntoBatch(false);
    }
  };

  const handleBatchDeleteBancaGlobally = async () => {
    if (selectedBancasToRename.length === 0) {
      if (onAlert) onAlert("Selecione pelo menos uma banca examinadora nas caixas de seleção!", "Aviso");
      else alert("Selecione pelo menos uma banca examinadora nas caixas de seleção!");
      return;
    }
    const questionsToDelete = questions.filter((q) => selectedBancasToRename.includes(q.banca));
    if (questionsToDelete.length === 0) {
      if (onAlert) onAlert("Nenhuma questão encontrada com as bancas selecionadas.", "Aviso");
      else alert("Nenhuma questão encontrada com as bancas selecionadas.");
      return;
    }

    const confirmMessage = `Tem certeza que deseja excluir ${selectedBancasToRename.length} banca(s) selecionada(s) e todas as suas ${questionsToDelete.length} questões? Esta ação é irreversível!`;
    const confirmed = window.confirm ? window.confirm(confirmMessage) : true;
    if (!confirmed) return;

    if (onDeleteMultipleQuestions) {
      const ids = questionsToDelete.map((q) => q.id);
      const success = await onDeleteMultipleQuestions(ids);
      if (success) {
        if (onAlert) onAlert(`Sucesso! ${selectedBancasToRename.length} banca(s) e ${questionsToDelete.length} questões foram excluídas.`, "Bancas Excluídas 🗑️");
        else alert(`Sucesso! ${selectedBancasToRename.length} banca(s) e ${questionsToDelete.length} questões foram excluídas.`);
      } else {
        if (onAlert) onAlert("Ocorreu um erro ao excluir as questões.", "Erro");
        else alert("Ocorreu um erro ao excluir as questões.");
      }
    } else {
      if (onAlert) onAlert("Funcionalidade de exclusão não está configurada.", "Erro");
      else alert("Funcionalidade de exclusão não está configurada.");
    }

    // Reset
    setSelectedBancasToRename([]);
    setBancaNewName("");
    setBancaSearchFilter("");
    setIsCustomBanca(false);
    setBancaActionType("cadastrar");
  };

  const handleBatchDeleteAssuntoGlobally = async () => {
    if (selectedAssuntosToRename.length === 0) {
      if (onAlert) onAlert("Selecione pelo menos um assunto/tópico nas caixas de seleção!", "Aviso");
      else alert("Selecione pelo menos um assunto/tópico nas caixas de seleção!");
      return;
    }
    const questionsToDelete = questions.filter((q) => selectedAssuntosToRename.includes(q.assunto));
    if (questionsToDelete.length === 0) {
      if (onAlert) onAlert("Nenhuma questão encontrada com os assuntos selecionados.", "Aviso");
      else alert("Nenhuma questão encontrada com os assuntos selecionados.");
      return;
    }

    const confirmMessage = `Tem certeza que deseja excluir ${selectedAssuntosToRename.length} assunto(s) selecionado(s) e todas as suas ${questionsToDelete.length} questões? Esta ação é irreversível!`;
    const confirmed = window.confirm ? window.confirm(confirmMessage) : true;
    if (!confirmed) return;

    if (onDeleteMultipleQuestions) {
      const ids = questionsToDelete.map((q) => q.id);
      const success = await onDeleteMultipleQuestions(ids);
      if (success) {
        if (onAlert) onAlert(`Sucesso! ${selectedAssuntosToRename.length} assunto(s) e ${questionsToDelete.length} questões foram excluídos.`, "Assuntos Excluídos 🗑️");
        else alert(`Sucesso! ${selectedAssuntosToRename.length} assunto(s) e ${questionsToDelete.length} questões foram excluídos.`);
      } else {
        if (onAlert) onAlert("Ocorreu um erro ao excluir as questões.", "Erro");
        else alert("Ocorreu um erro ao excluir as questões.");
      }
    } else {
      if (onAlert) onAlert("Funcionalidade de exclusão não está configurada.", "Erro");
      else alert("Funcionalidade de exclusão não está configurada.");
    }

    // Reset
    setSelectedAssuntosToRename([]);
    setAssuntoNewName("");
    setAssuntoSearchFilter("");
    setIsCustomAssunto(false);
    setAssuntoActionType("cadastrar");
  };

  const handleSaveQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newText.trim()) {
      if (onAlert) {
        onAlert("Por favor, preencha o enunciado da questão!", "Campo Vazio");
      } else {
        alert("Por favor, preencha o enunciado da questão!");
      }
      return;
    }

    if (isCustomBanca && !newBanca.trim()) {
      if (onAlert) {
        onAlert("Por favor, digite o nome da nova banca examinadora!", "Campo Vazio");
      } else {
        alert("Por favor, digite o nome da nova banca examinadora!");
      }
      return;
    }

    if (isCustomAssunto && !newAssunto.trim()) {
      if (onAlert) {
        onAlert("Por favor, digite o nome do novo assunto!", "Campo Vazio");
      } else {
        alert("Por favor, digite o nome do novo assunto!");
      }
      return;
    }

    const compiledQuestion: Question = {
      id: `q_${Date.now()}`,
      text: newText,
      options: options.map((opt, i) => opt.trim() || `${String.fromCharCode(65 + i)}) [Vazio]`),
      correctIndex,
      explanations: explanations.map((exp, i) => exp.trim() || `Explicação padrão para alternativa ${String.fromCharCode(65 + i)}.`),
      banca: newBanca.trim() || "Custom",
      ano: Number(newAno) || new Date().getFullYear(),
      assunto: newAssunto.trim() || "Geral",
      nivelSuperior: newIsNivelSuperior,
      image: newImage.trim() || null,
      generalExplanation: newGeneralExplanation.trim() || undefined,
    };

    const status = await onAddQuestion(compiledQuestion);

    if (status === "added") {
      onReceiveXp(70); // Add custom question rewards 70 XP!
      if (onAlert) {
        onAlert("Excelente! Questão de nível superior adicionada com sucesso e cadastrada no banco de dados. Recebeu 70 de XP!", "Questão Cadastrada! 📝");
      } else {
        alert("Excelente! Questão de nível superior adicionada com sucesso e cadastrada no banco de dados. Recebeu 70 de XP!");
      }
    } else if (status === "updated") {
      if (onAlert) {
        onAlert("questão já cadastrada porem foi atualizada.", "Questão Atualizada");
      } else {
        alert("questão já cadastrada porem foi atualizada.");
      }
    } else {
      if (onAlert) {
        onAlert("questão já cadastrada!", "Aviso");
      } else {
        alert("questão já cadastrada!");
      }
    }

    // Reset Form
    setNewText("");
    setNewImage("");
    setNewBanca("CESPE");
    setNewAssunto("Língua Portuguesa");
    setIsCustomBanca(false);
    setIsCustomAssunto(false);
    setCorrectIndex(0);
    setNewNumOptions(5);
    setNewGeneralExplanation("");
    setOptions(["A) ", "B) ", "C) ", "D) ", "E) "]);
    setExplanations([
      "Explicação para a alternativa A...",
      "Explicação para a alternativa B...",
      "Explicação para a alternativa C...",
      "Explicação para a alternativa D...",
      "Explicação para a alternativa E...",
    ]);
    setShowAddForm(false);
  };

  const handleStartEdit = (q: Question) => {
    setEditingQuestionId(q.id);
    setEditForm({
      text: q.text,
      banca: q.banca,
      ano: q.ano,
      assunto: q.assunto,
      nivelSuperior: !!q.nivelSuperior,
      image: q.image || "",
      options: [...q.options],
      explanations: q.explanations ? [...q.explanations] : Array.from({ length: q.options.length }, (_, i) => `Explicação para a alternativa ${String.fromCharCode(65 + i)}...`),
      correctIndex: q.correctIndex,
      generalExplanation: q.generalExplanation || "",
    });
  };

  const handleEditOptionChange = (idx: number, val: string) => {
    if (!editForm) return;
    const updatedOptions = [...editForm.options];
    updatedOptions[idx] = val;
    setEditForm({ ...editForm, options: updatedOptions });
  };

  const handleEditExplanationChange = (idx: number, val: string) => {
    if (!editForm) return;
    const updatedExps = [...editForm.explanations];
    updatedExps[idx] = val;
    setEditForm({ ...editForm, explanations: updatedExps });
  };

  const handleSaveEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingQuestionId || !editForm) return;

    if (!editForm.text.trim()) {
      if (onAlert) {
        onAlert("O enunciado da questão não pode ser vazio!", "Erro de Validação");
      } else {
        alert("O enunciado da questão não pode ser vazio!");
      }
      return;
    }

    const updatedQuestion: Question = {
      id: editingQuestionId,
      text: editForm.text,
      options: editForm.options.map((opt, i) => opt.trim() || `${String.fromCharCode(65 + i)}) [Vazio]`),
      correctIndex: editForm.correctIndex,
      explanations: editForm.explanations.map((exp, i) => exp.trim() || `Explicação para alternativa ${String.fromCharCode(65 + i)}.`),
      banca: editForm.banca.trim() || "Custom",
      ano: Number(editForm.ano) || new Date().getFullYear(),
      assunto: editForm.assunto.trim() || "Geral",
      nivelSuperior: editForm.nivelSuperior,
      image: editForm.image.trim() || null,
      generalExplanation: editForm.generalExplanation.trim() || undefined,
    };

    const success = await onUpdateQuestion(updatedQuestion);
    if (success) {
      if (onAlert) {
        onAlert("Questão atualizada com sucesso no banco de dados!", "Sucesso ✨");
      } else {
        alert("Questão atualizada com sucesso no banco de dados!");
      }
      setEditingQuestionId(null);
      setEditForm(null);
    } else {
      if (onAlert) {
        onAlert("Erro ao atualizar a questão. Verifique a conexão.", "Erro");
      } else {
        alert("Erro ao atualizar a questão.");
      }
    }
  };

  return (
    <div id="question-bank-container" className="space-y-6">
      {/* Header with Search and New Question Button */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
        <div className="flex-grow max-w-lg relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Pesquise por enunciado, banca ou assunto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white placeholder-gray-400 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:focus:ring-indigo-500/50 text-sm font-medium"
          />
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setShowAddForm(true);
              setIsCustomAssunto(true);
              setAssuntoActionType("alterar");
            }}
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/40 dark:hover:bg-indigo-900/60 text-indigo-600 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 rounded-xl text-sm font-bold shadow-sm transition duration-200"
          >
            <Layers className="w-4 h-4" /> Alterar Tópicos em Lote
          </button>

          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center justify-center gap-2 px-5 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl text-sm font-bold shadow-sm md:self-auto transition duration-200"
          >
            <PlusCircle className="w-5 h-5" /> Cadastrar Questão
          </button>
        </div>
      </div>

      {/* Insert New Question Modal or Section */}
      {showAddForm && (
        <form
          onSubmit={handleSaveQuestion}
          id="add-question-form"
          className="p-6 rounded-2xl bg-white border border-indigo-100 shadow-lg shadow-indigo-100/30 dark:bg-gray-800 dark:border-indigo-950 dark:shadow-none animate-fade-in space-y-6"
        >
          <div className="flex justify-between items-center border-b border-gray-100 pb-3 dark:border-gray-700">
            <h3 className="text-base font-bold text-gray-800 dark:text-indigo-300 flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-500" /> Adicionar Questão de Concurso (Nível Superior)
            </h3>
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="text-xs font-semibold text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              Cancelar
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-1 space-y-2">
              <div>
                <label className="block text-xs font-bold text-gray-400 mb-1.5 uppercase tracking-wider">Banca Examinadora</label>
                <select
                  value={isCustomBanca ? "__NEW__" : newBanca}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === "__NEW__") {
                      setIsCustomBanca(true);
                      setNewBanca("");
                    } else {
                      setIsCustomBanca(false);
                      setNewBanca(val);
                    }
                  }}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-200 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 text-sm focus:outline-indigo-500 font-medium"
                >
                  <option value="">Selecione a Banca...</option>
                  {Array.from(new Set(questions.map((q) => q.banca).filter(Boolean))).sort().map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                  <option value="__NEW__" className="text-indigo-600 font-bold dark:text-indigo-400">
                    ➕ Cadastrar ou alterar Banca...
                  </option>
                </select>
              </div>
              {isCustomBanca && (
                <div className="p-3.5 bg-gray-50 dark:bg-gray-750 border border-indigo-100 dark:border-gray-700 rounded-xl space-y-3 animate-fade-in shadow-sm">
                  <div className="flex bg-gray-200 dark:bg-gray-800 rounded-lg p-0.5 text-xs font-bold">
                    <button
                      type="button"
                      onClick={() => {
                        setBancaActionType("cadastrar");
                        setSelectedBancasToRename([]);
                      }}
                      className={`flex-1 py-1.5 rounded-md transition ${bancaActionType === "cadastrar" ? "bg-white dark:bg-gray-700 shadow-sm text-indigo-600 dark:text-indigo-400" : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-200"}`}
                    >
                      ➕ Cadastrar Nova
                    </button>
                    <button
                      type="button"
                      onClick={() => setBancaActionType("alterar")}
                      className={`flex-1 py-1.5 rounded-md transition flex items-center justify-center gap-1.5 ${bancaActionType === "alterar" ? "bg-white dark:bg-gray-700 shadow-sm text-indigo-600 dark:text-indigo-400" : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-200"}`}
                    >
                      <Layers className="w-3.5 h-3.5" />
                      Alterar em Lote
                      {selectedBancasToRename.length > 0 && (
                        <span className="ml-1 px-1.5 py-0.2 bg-indigo-500 text-white rounded-full text-[10px]">
                          {selectedBancasToRename.length}
                        </span>
                      )}
                    </button>
                  </div>

                  {bancaActionType === "cadastrar" ? (
                    <div className="space-y-1">
                      <label className="block text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Nome da nova banca:</label>
                      <input
                        type="text"
                        placeholder="Ex: CEBRASPE, FGV, VUNESP..."
                        value={newBanca}
                        onChange={(e) => setNewBanca(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-indigo-200 bg-white dark:bg-gray-850 dark:border-indigo-900 dark:text-gray-100 text-xs focus:outline-indigo-500 font-medium placeholder-gray-400"
                      />
                    </div>
                  ) : (
                    <div className="space-y-2.5">
                      <div className="text-[11px] text-gray-600 dark:text-gray-300 font-medium">
                        Selecione as bancas para alterar de uma só vez:
                      </div>

                      {/* Search and Select All Header */}
                      <div className="space-y-1.5">
                        <div className="relative">
                          <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-2.5" />
                          <input
                            type="text"
                            placeholder="Filtrar bancas..."
                            value={bancaSearchFilter}
                            onChange={(e) => setBancaSearchFilter(e.target.value)}
                            className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-gray-200 bg-white dark:bg-gray-850 dark:border-gray-600 dark:text-gray-100 text-xs focus:outline-indigo-500 font-medium placeholder-gray-400"
                          />
                        </div>

                        {(() => {
                          const availableBancas = Array.from(new Set(questions.map((q) => q.banca).filter(Boolean))).sort();
                          const filteredBancasList = availableBancas.filter((b) =>
                            b.toLowerCase().includes(bancaSearchFilter.toLowerCase())
                          );
                          const isAllSelected = filteredBancasList.length > 0 && filteredBancasList.every((b) => selectedBancasToRename.includes(b));
                          const totalQsAffected = questions.filter((q) => selectedBancasToRename.includes(q.banca)).length;

                          return (
                            <>
                              <div className="flex items-center justify-between text-[11px] px-1 text-gray-500 dark:text-gray-400 font-medium">
                                <button
                                  type="button"
                                  onClick={() => handleSelectAllBancas(filteredBancasList)}
                                  className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 font-bold"
                                >
                                  <CheckSquare className="w-3.5 h-3.5" />
                                  {isAllSelected ? "Desmarcar Todos" : "Marcar Todos"}
                                </button>
                                <span>
                                  {selectedBancasToRename.length} selecionada(s)
                                </span>
                              </div>

                              {/* Checklist Box */}
                              <div className="max-h-48 overflow-y-auto space-y-1 p-1 bg-white dark:bg-gray-850 rounded-lg border border-gray-200 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-800">
                                {filteredBancasList.length === 0 ? (
                                  <div className="p-3 text-center text-xs text-gray-400">
                                    Nenhuma banca encontrada.
                                  </div>
                                ) : (
                                  filteredBancasList.map((b) => {
                                    const isSelected = selectedBancasToRename.includes(b);
                                    const count = questions.filter((q) => q.banca === b).length;
                                    return (
                                      <label
                                        key={b}
                                        onClick={(e) => {
                                          e.stopPropagation();
                                        }}
                                        className={`flex items-center justify-between p-2 rounded-md cursor-pointer transition text-xs select-none ${isSelected ? "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200 font-bold" : "hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"}`}
                                      >
                                        <div className="flex items-center gap-2 min-w-0 pr-2">
                                          <input
                                            type="checkbox"
                                            checked={isSelected}
                                            onChange={() => handleToggleBancaSelection(b)}
                                            className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-gray-300 dark:border-gray-600 cursor-pointer"
                                          />
                                          <span className="truncate">{b}</span>
                                        </div>
                                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300 whitespace-nowrap font-medium">
                                          {count} q.
                                        </span>
                                      </label>
                                    );
                                  })
                                )}
                              </div>

                              {/* Action controls when items are selected */}
                              {selectedBancasToRename.length > 0 && (
                                <div className="p-2.5 bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 rounded-lg space-y-2 text-left animate-fade-in">
                                  <div className="flex items-center justify-between text-xs text-indigo-800 dark:text-indigo-200 font-bold">
                                    <span>🎯 {selectedBancasToRename.length} banca(s) selecionada(s)</span>
                                    <span className="text-[11px] font-normal">({totalQsAffected} questões afetadas)</span>
                                  </div>

                                  <div className="space-y-1">
                                    <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                                      Novo nome unificado:
                                    </label>
                                    <input
                                      type="text"
                                      placeholder="Ex: CEBRASPE / CESPE"
                                      value={bancaNewName}
                                      onChange={(e) => setBancaNewName(e.target.value)}
                                      className="w-full px-3 py-1.5 rounded-md border border-indigo-300 bg-white dark:bg-gray-800 dark:border-indigo-700 dark:text-gray-100 text-xs focus:outline-indigo-500 font-medium placeholder-gray-400"
                                    />
                                  </div>

                                  <div className="space-y-1">
                                    <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                                      Ou migrar para banca existente:
                                    </label>
                                    <select
                                      value={bancaNewName}
                                      onChange={(e) => setBancaNewName(e.target.value)}
                                      className="w-full px-3 py-1.5 rounded-md border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 text-xs focus:outline-indigo-500 font-medium"
                                    >
                                      <option value="">-- Selecione uma existente --</option>
                                      {availableBancas
                                        .filter((b) => !selectedBancasToRename.includes(b))
                                        .map((b) => (
                                          <option key={b} value={b}>
                                            {b}
                                          </option>
                                        ))}
                                    </select>
                                  </div>

                                  <div className="flex gap-2 pt-1">
                                    <button
                                      type="button"
                                      disabled={isProcessingBancaBatch}
                                      onClick={handleBatchRenameBancaGlobally}
                                      className="flex-1 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold transition duration-150 flex items-center justify-center gap-1.5 shadow-sm disabled:opacity-50"
                                    >
                                      <Sparkles className="w-3.5 h-3.5" />
                                      {isProcessingBancaBatch ? "Alterando..." : `Alterar Selecionadas (${totalQsAffected})`}
                                    </button>
                                    <button
                                      type="button"
                                      onClick={handleBatchDeleteBancaGlobally}
                                      className="px-2.5 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded-lg text-xs font-bold transition duration-150 flex items-center gap-1"
                                      title="Excluir bancas e questões associadas"
                                    >
                                      <Trash2 className="w-3.5 h-3.5" />
                                      Excluir
                                    </button>
                                  </div>
                                </div>
                              )}
                            </>
                          );
                        })()}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="col-span-1">
              <label className="block text-xs font-bold text-gray-400 mb-1.5 uppercase tracking-wider">Ano</label>
              <input
                type="number"
                value={newAno}
                onChange={(e) => setNewAno(Number(e.target.value))}
                className="w-full px-3.5 py-2 rounded-xl border border-gray-200 bg-white placeholder-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 text-sm focus:outline-indigo-500"
              />
            </div>

            <div className="col-span-1 space-y-2">
              <div>
                <label className="block text-xs font-bold text-gray-400 mb-1.5 uppercase tracking-wider">Tópico / Assunto</label>
                <select
                  value={isCustomAssunto ? "__NEW__" : newAssunto}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === "__NEW__") {
                      setIsCustomAssunto(true);
                      setNewAssunto("");
                    } else {
                      setIsCustomAssunto(false);
                      setNewAssunto(val);
                    }
                  }}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-200 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 text-sm focus:outline-indigo-500 font-medium"
                >
                  <option value="">Selecione o Assunto...</option>
                  {Array.from(new Set(questions.map((q) => q.assunto).filter(Boolean))).sort().map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                  <option value="__NEW__" className="text-indigo-600 font-bold dark:text-indigo-400">
                    ➕ Cadastrar ou alterar Assunto...
                  </option>
                </select>
              </div>
              {isCustomAssunto && (
                <div className="p-3.5 bg-gray-50 dark:bg-gray-750 border border-indigo-100 dark:border-gray-700 rounded-xl space-y-3 animate-fade-in shadow-sm">
                  <div className="flex bg-gray-200 dark:bg-gray-800 rounded-lg p-0.5 text-xs font-bold">
                    <button
                      type="button"
                      onClick={() => {
                        setAssuntoActionType("cadastrar");
                        setSelectedAssuntosToRename([]);
                      }}
                      className={`flex-1 py-1.5 rounded-md transition ${assuntoActionType === "cadastrar" ? "bg-white dark:bg-gray-700 shadow-sm text-indigo-600 dark:text-indigo-400" : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-200"}`}
                    >
                      ➕ Cadastrar Novo
                    </button>
                    <button
                      type="button"
                      onClick={() => setAssuntoActionType("alterar")}
                      className={`flex-1 py-1.5 rounded-md transition flex items-center justify-center gap-1.5 ${assuntoActionType === "alterar" ? "bg-white dark:bg-gray-700 shadow-sm text-indigo-600 dark:text-indigo-400" : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-200"}`}
                    >
                      <Layers className="w-3.5 h-3.5" />
                      Alterar em Lote
                      {selectedAssuntosToRename.length > 0 && (
                        <span className="ml-1 px-1.5 py-0.2 bg-indigo-500 text-white rounded-full text-[10px]">
                          {selectedAssuntosToRename.length}
                        </span>
                      )}
                    </button>
                  </div>

                  {assuntoActionType === "cadastrar" ? (
                    <div className="space-y-1">
                      <label className="block text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Nome do novo assunto/tópico:</label>
                      <input
                        type="text"
                        placeholder="Ex: Noções de Administração, Direito Constitucional..."
                        value={newAssunto}
                        onChange={(e) => setNewAssunto(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-indigo-200 bg-white dark:bg-gray-850 dark:border-indigo-900 dark:text-gray-100 text-xs focus:outline-indigo-500 font-medium placeholder-gray-400"
                      />
                    </div>
                  ) : (
                    <div className="space-y-2.5">
                      <div className="text-[11px] text-gray-600 dark:text-gray-300 font-medium">
                        Marque as caixas de seleção dos assuntos/tópicos que deseja alterar de uma só vez:
                      </div>

                      {/* Search and Select All Header */}
                      <div className="space-y-1.5">
                        <div className="relative">
                          <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-2.5" />
                          <input
                            type="text"
                            placeholder="Filtrar assuntos/tópicos..."
                            value={assuntoSearchFilter}
                            onChange={(e) => setAssuntoSearchFilter(e.target.value)}
                            className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-gray-200 bg-white dark:bg-gray-850 dark:border-gray-600 dark:text-gray-100 text-xs focus:outline-indigo-500 font-medium placeholder-gray-400"
                          />
                        </div>

                        {(() => {
                          const availableAssuntos = Array.from(new Set(questions.map((q) => q.assunto).filter(Boolean))).sort();
                          const filteredAssuntosList = availableAssuntos.filter((a) =>
                            a.toLowerCase().includes(assuntoSearchFilter.toLowerCase())
                          );
                          const isAllSelected = filteredAssuntosList.length > 0 && filteredAssuntosList.every((a) => selectedAssuntosToRename.includes(a));
                          const totalQsAffected = questions.filter((q) => selectedAssuntosToRename.includes(q.assunto)).length;

                          return (
                            <>
                              <div className="flex items-center justify-between text-[11px] px-1 text-gray-500 dark:text-gray-400 font-medium">
                                <button
                                  type="button"
                                  onClick={() => handleSelectAllAssuntos(filteredAssuntosList)}
                                  className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 font-bold"
                                >
                                  <CheckSquare className="w-3.5 h-3.5" />
                                  {isAllSelected ? "Desmarcar Todos" : "Marcar Todos"}
                                </button>
                                <span>
                                  {selectedAssuntosToRename.length} selecionado(s)
                                </span>
                              </div>

                              {/* Checklist Box */}
                              <div className="max-h-48 overflow-y-auto space-y-1 p-1 bg-white dark:bg-gray-850 rounded-lg border border-gray-200 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-800">
                                {filteredAssuntosList.length === 0 ? (
                                  <div className="p-3 text-center text-xs text-gray-400">
                                    Nenhum assunto encontrado.
                                  </div>
                                ) : (
                                  filteredAssuntosList.map((a) => {
                                    const isSelected = selectedAssuntosToRename.includes(a);
                                    const count = questions.filter((q) => q.assunto === a).length;
                                    return (
                                      <label
                                        key={a}
                                        onClick={(e) => {
                                          e.stopPropagation();
                                        }}
                                        className={`flex items-center justify-between p-2 rounded-md cursor-pointer transition text-xs select-none ${isSelected ? "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200 font-bold" : "hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"}`}
                                      >
                                        <div className="flex items-center gap-2 min-w-0 pr-2">
                                          <input
                                            type="checkbox"
                                            checked={isSelected}
                                            onChange={() => handleToggleAssuntoSelection(a)}
                                            className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-gray-300 dark:border-gray-600 cursor-pointer"
                                          />
                                          <span className="truncate">{a}</span>
                                        </div>
                                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300 whitespace-nowrap font-medium">
                                          {count} q.
                                        </span>
                                      </label>
                                    );
                                  })
                                )}
                              </div>

                              {/* Action controls when items are selected */}
                              {selectedAssuntosToRename.length > 0 && (
                                <div className="p-2.5 bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 rounded-lg space-y-2 text-left animate-fade-in">
                                  <div className="flex items-center justify-between text-xs text-indigo-800 dark:text-indigo-200 font-bold">
                                    <span>🎯 {selectedAssuntosToRename.length} assunto(s) selecionado(s)</span>
                                    <span className="text-[11px] font-normal">({totalQsAffected} questões afetadas)</span>
                                  </div>

                                  <div className="space-y-1">
                                    <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                                      Novo nome unificado para os selecionados:
                                    </label>
                                    <input
                                      type="text"
                                      placeholder="Digite o novo nome para unificar..."
                                      value={assuntoNewName}
                                      onChange={(e) => setAssuntoNewName(e.target.value)}
                                      className="w-full px-3 py-1.5 rounded-md border border-indigo-300 bg-white dark:bg-gray-800 dark:border-indigo-700 dark:text-gray-100 text-xs focus:outline-indigo-500 font-medium placeholder-gray-400"
                                    />
                                  </div>

                                  <div className="space-y-1">
                                    <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                                      Ou migrar todos para assunto existente:
                                    </label>
                                    <select
                                      value={assuntoNewName}
                                      onChange={(e) => setAssuntoNewName(e.target.value)}
                                      className="w-full px-3 py-1.5 rounded-md border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 text-xs focus:outline-indigo-500 font-medium"
                                    >
                                      <option value="">-- Selecione um existente --</option>
                                      {availableAssuntos
                                        .filter((a) => !selectedAssuntosToRename.includes(a))
                                        .map((a) => (
                                          <option key={a} value={a}>
                                            {a}
                                          </option>
                                        ))}
                                    </select>
                                  </div>

                                  <div className="flex gap-2 pt-1">
                                    <button
                                      type="button"
                                      disabled={isProcessingAssuntoBatch}
                                      onClick={handleBatchRenameAssuntoGlobally}
                                      className="flex-1 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold transition duration-150 flex items-center justify-center gap-1.5 shadow-sm disabled:opacity-50"
                                    >
                                      <Sparkles className="w-3.5 h-3.5" />
                                      {isProcessingAssuntoBatch ? "Alterando..." : `Alterar Selecionados (${totalQsAffected})`}
                                    </button>
                                    <button
                                      type="button"
                                      onClick={handleBatchDeleteAssuntoGlobally}
                                      className="px-2.5 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded-lg text-xs font-bold transition duration-150 flex items-center gap-1"
                                      title="Excluir assuntos e questões associadas"
                                    >
                                      <Trash2 className="w-3.5 h-3.5" />
                                      Excluir
                                    </button>
                                  </div>
                                </div>
                              )}
                            </>
                          );
                        })()}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="col-span-1 flex flex-col justify-end">
              <div className="flex items-center gap-2 mb-3.5">
                <input
                  type="checkbox"
                  id="level-sup"
                  checked={newIsNivelSuperior}
                  onChange={(e) => setNewIsNivelSuperior(e.target.checked)}
                  className="w-4 h-4 rounded text-indigo-500 border-gray-200 dark:border-gray-600"
                />
                <label id="lbl-level-sup" htmlFor="level-sup" className="text-xs font-bold text-gray-400 cursor-pointer uppercase tracking-wider">
                  Nível Superior
                </label>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-400 mb-1.5 uppercase tracking-wider">Enunciado da Questão</label>
            <textarea
              required
              rows={3}
              placeholder="Digite o enunciado completo da questão de concurso..."
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white placeholder-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 text-sm focus:outline-indigo-500"
            />
          </div>

          {/* Campo de Imagem (URL ou upload local) */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Imagem Opcional Ilustrativa</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Cole a URL da imagem aqui..."
                  value={newImage}
                  onChange={(e) => setNewImage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white placeholder-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 text-sm focus:outline-indigo-500"
                />
                <p className="text-[10px] text-gray-400 mt-1">Ou cole o link direto de uma imagem online hospedada.</p>
              </div>

              {/* Drag and Drop / Manual selection */}
              <div 
                className="border-2 border-dashed border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center bg-gray-50/50 dark:border-gray-700 dark:bg-gray-800 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-750 transition"
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                    const file = e.dataTransfer.files[0];
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      if (typeof reader.result === "string") {
                        setNewImage(reader.result);
                      }
                    };
                    reader.readAsDataURL(file);
                  }
                }}
                onClick={() => document.getElementById("image-file-input")?.click()}
              >
                <input
                  id="image-file-input"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      const file = e.target.files[0];
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        if (typeof reader.result === "string") {
                          setNewImage(reader.result);
                        }
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                  className="hidden"
                />
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Arraste ou clique para enviar foto</p>
                <p className="text-[10px] text-gray-400 font-mono">Tipos aceitos: PNG, JPG, GIF</p>
              </div>
            </div>

            {newImage && (
              <div className="mt-3 flex items-center gap-4 bg-indigo-50/40 p-2.5 rounded-xl dark:bg-indigo-950/20 max-w-md border border-indigo-100 dark:border-indigo-950">
                <img src={newImage} alt="Preview" className="h-14 w-auto object-contain rounded border border-gray-200" />
                <div className="flex-grow">
                  <p className="text-[10px] font-bold text-indigo-500 font-mono overflow-hidden text-ellipsis max-w-xs">{newImage.startsWith("data:") ? "Imagem Local (Carregada como Base64)" : newImage}</p>
                  <button 
                    type="button" 
                    onClick={() => setNewImage("")}
                    className="text-[10px] text-rose-500 font-bold hover:underline"
                  >
                    Excluir Imagem
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Comentário Geral / Resolução da Questão */}
          <div>
            <label className="block text-xs font-bold text-gray-400 mb-1.5 uppercase tracking-wider">
              Comentário Geral / Resolução da Questão (Opcional)
            </label>
            <textarea
              rows={3}
              placeholder="Digite um comentário geral ou resolução completa para a questão..."
              value={newGeneralExplanation}
              onChange={(e) => setNewGeneralExplanation(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white placeholder-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 text-sm focus:outline-indigo-500"
            />
            <p className="text-[10px] text-gray-400 mt-1">
              Este comentário será exibido em destaque no Gabarito Comentado quando o usuário responder à questão.
            </p>
          </div>

          {/* Type structure selections */}
          <div>
            <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">Estrutura de Alternativas</label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => handleNumOptionsChange(2)}
                className={`text-xs px-3.5 py-2 font-semibold rounded-lg border ${
                  numOptions === 2
                    ? "bg-indigo-50 border-indigo-200 text-indigo-700 dark:bg-indigo-950/20 dark:border-indigo-900"
                    : "bg-white border-gray-200 text-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                }`}
              >
                Certo/Errado (2 opções)
              </button>
              <button
                type="button"
                onClick={() => handleNumOptionsChange(5)}
                className={`text-xs px-3.5 py-2 font-semibold rounded-lg border ${
                  numOptions === 5
                    ? "bg-indigo-50 border-indigo-200 text-indigo-700 dark:bg-indigo-950/20 dark:border-indigo-900"
                    : "bg-white border-gray-200 text-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                }`}
              >
                Múltipla Escolha (5 opções)
              </button>
            </div>
          </div>

          {/* Form Options Inputs */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Alternativas e Correções Detalhadas</h4>
            {options.map((opt, i) => (
              <div key={i} className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 dark:border-gray-700/60 dark:bg-gray-850/30 space-y-2">
                <div className="flex gap-3 items-center">
                  <input
                    type="radio"
                    name="correct-option-radio"
                    checked={correctIndex === i}
                    onChange={() => setCorrectIndex(i)}
                    className="w-4.5 h-4.5 text-indigo-500 border-gray-200 dark:border-gray-600"
                  />
                  <span className="text-xs font-bold text-indigo-500 dark:text-indigo-400 font-mono">Alternativa {String.fromCharCode(65 + i)}</span>
                  {correctIndex === i && <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded font-bold dark:bg-emerald-950/40 dark:text-emerald-400">Gabarito Correto</span>}
                </div>
                <input
                  type="text"
                  required
                  placeholder={`Digite a alternativa ${String.fromCharCode(65 + i)}`}
                  value={opt}
                  onChange={(e) => handleOptionChange(i, e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-200 bg-white placeholder-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 text-sm focus:outline-indigo-500"
                />
                <textarea
                  rows={2}
                  required
                  placeholder={`Justificativa detalhada de correção para a alternativa ${String.fromCharCode(65 + i)}`}
                  value={explanations[i] || ""}
                  onChange={(e) => handleExplanationChange(i, e.target.value)}
                  className="w-full px-3.5 py-1.5 rounded-xl border border-amber-100 bg-amber-50/20 placeholder-amber-400 dark:bg-gray-750 dark:border-amber-950/40 dark:text-amber-200 text-xs focus:outline-amber-400"
                />
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl font-bold text-sm shadow-md transition duration-200"
          >
            Confirmar e Cadastrar no Banco de Dados (+70 XP)
          </button>
        </form>
      )}

      {/* Filter Options */}
      <div id="filter-block" className="flex flex-wrap gap-3 pb-2">
        {/* Filter by Banca */}
        <div className="flex items-center gap-2">
          <Filter className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-xs font-semibold text-gray-500">Banca:</span>
          <select
            value={selectedBanca}
            onChange={(e) => setSelectedBanca(e.target.value)}
            className="text-xs font-semibold px-2 py-1 bg-white border border-gray-200 rounded-lg focus:outline-none dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
          >
            {bancas.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        {/* Filter by Assunto */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-gray-500">Assunto:</span>
          <select
            value={selectedAssunto}
            onChange={(e) => setSelectedAssunto(e.target.value)}
            className="text-xs font-semibold px-2 py-1 bg-white border border-gray-200 rounded-lg focus:outline-none dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
          >
            {assuntos.map((as) => (
              <option key={as} value={as}>
                {as}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Questions list */}
      <div id="questions-list-wrapper" className="space-y-4">
        {filteredQuestions.map((q) => {
          const isEditing = editingQuestionId === q.id && editForm;

          if (isEditing) {
            return (
              <form
                key={q.id}
                onSubmit={handleSaveEdit}
                className="p-5 rounded-2xl bg-white border-2 border-amber-300 dark:bg-gray-800 dark:border-amber-900/60 shadow-md animate-fade-in space-y-4"
              >
                <div className="flex justify-between items-center border-b border-gray-100 pb-2 dark:border-gray-700">
                  <h4 className="text-xs font-bold text-amber-650 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Edit3 className="w-4 h-4 text-amber-500" /> Editando Questão ({q.id})
                  </h4>
                  <button
                    type="button"
                    onClick={() => {
                      setEditingQuestionId(null);
                      setEditForm(null);
                    }}
                    className="p-1 rounded-full text-gray-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/20 transition"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 mb-1 uppercase tracking-wider">Banca</label>
                    <input
                      type="text"
                      value={editForm.banca}
                      onChange={(e) => setEditForm({ ...editForm, banca: e.target.value })}
                      className="w-full px-3 py-1.5 rounded-lg border border-gray-200 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 text-xs focus:outline-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 mb-1 uppercase tracking-wider">Ano</label>
                    <input
                      type="number"
                      value={editForm.ano}
                      onChange={(e) => setEditForm({ ...editForm, ano: Number(e.target.value) })}
                      className="w-full px-3 py-1.5 rounded-lg border border-gray-200 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 text-xs focus:outline-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 mb-1 uppercase tracking-wider">Assunto</label>
                    <input
                      type="text"
                      value={editForm.assunto}
                      onChange={(e) => setEditForm({ ...editForm, assunto: e.target.value })}
                      className="w-full px-3 py-1.5 rounded-lg border border-gray-200 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 text-xs focus:outline-indigo-500"
                    />
                  </div>
                  <div className="flex items-center gap-2 pt-5">
                    <input
                      type="checkbox"
                      id={`edit-level-sup-${q.id}`}
                      checked={editForm.nivelSuperior}
                      onChange={(e) => setEditForm({ ...editForm, nivelSuperior: e.target.checked })}
                      className="w-4 h-4 rounded text-indigo-500 border-gray-200 dark:border-gray-600"
                    />
                    <label htmlFor={`edit-level-sup-${q.id}`} className="text-[10px] font-bold text-gray-400 uppercase tracking-wider cursor-pointer">
                      Nível Superior
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-400 mb-1 uppercase tracking-wider">Enunciado da Questão</label>
                  <textarea
                    rows={4}
                    value={editForm.text}
                    onChange={(e) => setEditForm({ ...editForm, text: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 text-xs focus:outline-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-400 mb-1 uppercase tracking-wider">URL da Imagem (Opcional)</label>
                  <input
                    type="text"
                    value={editForm.image}
                    onChange={(e) => setEditForm({ ...editForm, image: e.target.value })}
                    placeholder="Cole a URL da imagem..."
                    className="w-full px-3 py-1.5 rounded-lg border border-gray-200 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 text-xs focus:outline-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-400 mb-1 uppercase tracking-wider">Comentário Geral / Resolução (Opcional)</label>
                  <textarea
                    rows={3}
                    value={editForm.generalExplanation}
                    onChange={(e) => setEditForm({ ...editForm, generalExplanation: e.target.value })}
                    placeholder="Escreva um comentário geral de resolução para esta questão..."
                    className="w-full px-3 py-1.5 rounded-lg border border-gray-200 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 text-xs focus:outline-indigo-500"
                  />
                </div>

                <div className="space-y-3 pt-2">
                  <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Alternativas e Justificativas de Correção</h5>
                  {editForm.options.map((opt, i) => (
                    <div key={i} className="p-3 rounded-xl border border-gray-100 bg-gray-50/50 dark:border-gray-700 dark:bg-gray-900 space-y-1.5">
                      <div className="flex gap-2 items-center">
                        <input
                          type="radio"
                          name={`edit-correct-option-${q.id}`}
                          checked={editForm.correctIndex === i}
                          onChange={() => setEditForm({ ...editForm, correctIndex: i })}
                          className="w-4 h-4 text-indigo-500 border-gray-200 dark:border-gray-600"
                        />
                        <span className="text-[10px] font-bold text-indigo-500 dark:text-indigo-400 font-mono">Alternativa {String.fromCharCode(65 + i)}</span>
                        {editForm.correctIndex === i && (
                          <span className="text-[9px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded font-bold dark:bg-emerald-950/40 dark:text-emerald-400">Gabarito Correto</span>
                        )}
                      </div>
                      <input
                        type="text"
                        value={opt}
                        onChange={(e) => handleEditOptionChange(i, e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg border border-gray-200 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 text-xs focus:outline-indigo-500"
                      />
                      <textarea
                        rows={2}
                        placeholder="Escreva a explicação para essa alternativa..."
                        value={editForm.explanations[i] || ""}
                        onChange={(e) => handleEditExplanationChange(i, e.target.value)}
                        className="w-full px-3 py-1 rounded-lg border border-amber-100 bg-amber-50/20 dark:bg-gray-750 dark:border-amber-950/40 dark:text-amber-200 text-xs focus:outline-amber-400"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="submit"
                    className="flex-grow py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition duration-200 shadow"
                  >
                    <Save className="w-3.5 h-3.5" /> Salvar Alterações
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setEditingQuestionId(null);
                      setEditForm(null);
                    }}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 rounded-lg text-xs font-bold transition"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            );
          }

          return (
            <div
              key={q.id}
              id={`question-card-${q.id}`}
              className="p-5 rounded-2xl bg-white border border-gray-150/40 dark:bg-gray-800 dark:border-gray-700/60 shadow-sm"
            >
              {/* Meta Tags */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-[10px] font-bold font-mono tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100 dark:bg-indigo-950/20 dark:text-indigo-400 dark:border-indigo-900/30">
                  {q.banca}
                </span>
                <span className="text-[10px] font-semibold font-mono px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-300">
                  A: {q.ano}
                </span>
                <span className="text-[10px] font-semibold font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/20 dark:text-emerald-400">
                  {q.assunto}
                </span>
                {q.nivelSuperior && (
                  <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 dark:bg-amber-950/20 dark:text-amber-400 border border-amber-100 dark:border-amber-900/30">
                    Nível Superior
                  </span>
                )}
              </div>

              {/* Question Text */}
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-4 whitespace-pre-line leading-relaxed">
                {q.text}
              </p>

              {/* Question Image (if any) */}
              {q.image && (
                <div className="flex justify-center p-2 mb-4 bg-gray-50 dark:bg-gray-750 rounded-xl" id={`q-bank-img-container-${q.id}`}>
                  <img
                    src={q.image}
                    alt="Ilustração da Questão"
                    className="max-h-56 w-auto object-contain rounded-lg shadow-sm border border-gray-100 dark:border-gray-751"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}

              {/* Comentário Geral (se houver) */}
              {q.generalExplanation && (
                <div className="mb-4 p-3.5 bg-amber-50/40 border border-amber-200/40 rounded-xl dark:bg-amber-955/10 dark:border-amber-900/20">
                  <span className="text-[10px] font-black uppercase text-amber-800 dark:text-amber-400 tracking-wider">
                    Comentário Geral / Resolução:
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-300 mt-1 leading-relaxed font-semibold whitespace-pre-line">
                    {q.generalExplanation}
                  </p>
                </div>
              )}

              {/* Options List Preview with highlighted correct and commentary */}
              <div className="mt-4 space-y-2.5">
                {q.options.map((opt, oIdx) => {
                  const isCorrect = oIdx === q.correctIndex;
                  return (
                    <div
                      key={oIdx}
                      className={`p-3 rounded-xl text-xs border transition ${
                        isCorrect
                          ? "bg-emerald-50/40 border-emerald-200 text-emerald-800 dark:bg-emerald-950/15 dark:border-emerald-900/50 dark:text-emerald-300 font-medium"
                          : "bg-gray-50/20 border-gray-100 text-gray-600 dark:bg-gray-800/40 dark:border-gray-700/50 dark:text-gray-300"
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        {isCorrect ? (
                          <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border border-gray-300 dark:border-gray-600 shrink-0 mt-0.5" />
                        )}
                        <span className="leading-relaxed">{opt}</span>
                      </div>
                      {/* Commentary/Explanation rendering */}
                      {q.explanations && q.explanations[oIdx] && q.explanations[oIdx].trim() !== "" && (
                        <div className={`mt-2 pl-6 border-l text-[11px] leading-relaxed font-sans italic ${
                          isCorrect 
                            ? "border-emerald-200 dark:border-emerald-900 text-emerald-600/90 dark:text-emerald-400/90" 
                            : "border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500"
                        }`}>
                          <span className={`font-bold uppercase tracking-wider text-[9px] not-italic mr-1.5 ${
                            isCorrect ? "text-emerald-700 dark:text-emerald-400" : "text-gray-400 dark:text-gray-500"
                          }`}>
                            {isCorrect ? "Gabarito Comentado:" : "Comentário:"}
                          </span>
                          {q.explanations[oIdx]}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Action buttons or show details */}
              <div className="flex justify-between items-center bg-gray-50 dark:bg-gray-750/30 -mx-5 -mb-5 p-3 rounded-b-2xl border-t border-gray-100 dark:border-gray-700/50 mt-4">
                <span className="text-[11px] text-gray-400 dark:text-gray-500 font-mono">ID: {q.id}</span>
                <button
                  type="button"
                  onClick={() => handleStartEdit(q)}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-xs font-bold shadow-sm hover:shadow transition duration-200"
                >
                  <Edit3 className="w-3.5 h-3.5" /> Editar Resposta / Explicação
                </button>
              </div>
            </div>
          );
        })}

        {filteredQuestions.length === 0 && (
          <p className="text-center text-sm font-medium text-gray-400 py-8 dark:text-gray-500">
            Nenhuma questão encontrada para os filtros selecionados.
          </p>
        )}
      </div>
    </div>
  );
}
