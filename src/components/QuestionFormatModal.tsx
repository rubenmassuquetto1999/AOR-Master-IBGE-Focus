import React, { useState, useRef, useEffect } from "react";
import {
  X,
  Bold,
  Underline,
  Highlighter,
  Strikethrough,
  RotateCcw,
  Check,
  Eye,
  Type,
  Sparkles,
  Palette,
} from "lucide-react";
import { Question } from "../types";
import {
  FormattedText,
  FormatType,
  insertFormatInInput,
  stripFormatting,
} from "../utils/textFormatter";

interface QuestionFormatModalProps {
  isOpen: boolean;
  onClose: () => void;
  question: Question;
  onSave: (updatedQuestion: Question) => void;
}

export default function QuestionFormatModal({
  isOpen,
  onClose,
  question,
  onSave,
}: QuestionFormatModalProps) {
  const [statementText, setStatementText] = useState(question.text);
  const [optionsText, setOptionsText] = useState<string[]>([...question.options]);
  const [activeTab, setActiveTab] = useState<"statement" | "options">("statement");
  const [selectedOptionIdx, setSelectedOptionIdx] = useState<number>(0);
  const [showPreview, setShowPreview] = useState(true);

  const statementTextareaRef = useRef<HTMLTextAreaElement>(null);
  const optionInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setStatementText(question.text);
      setOptionsText([...question.options]);
      setActiveTab("statement");
      setSelectedOptionIdx(0);
    }
  }, [isOpen, question]);

  if (!isOpen) return null;

  const handleApplyFormatToStatement = (format: FormatType) => {
    if (!statementTextareaRef.current) return;
    insertFormatInInput(
      statementTextareaRef.current,
      format,
      statementText,
      (newVal) => setStatementText(newVal)
    );
  };

  const handleApplyFormatToOption = (format: FormatType) => {
    if (!optionInputRef.current) return;
    const currentOptVal = optionsText[selectedOptionIdx] || "";
    insertFormatInInput(
      optionInputRef.current,
      format,
      currentOptVal,
      (newVal) => {
        const nextOptions = [...optionsText];
        nextOptions[selectedOptionIdx] = newVal;
        setOptionsText(nextOptions);
      }
    );
  };

  const handleClearAllStatementFormatting = () => {
    setStatementText(stripFormatting(statementText));
  };

  const handleSave = () => {
    onSave({
      ...question,
      text: statementText,
      options: optionsText,
    });
    onClose();
  };

  return (
    <div
      id="question-format-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-3 sm:p-4 overflow-y-auto animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="format-modal-title"
    >
      <div
        id="question-format-modal-content"
        className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Modal Header */}
        <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/70 dark:bg-slate-850/70 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Highlighter className="w-4 h-4" />
            </div>
            <div>
              <h3
                id="format-modal-title"
                className="text-base font-bold text-slate-800 dark:text-slate-100 flex items-center gap-1.5"
              >
                Destaques & Interpretação da Questão
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Adicione negrito, sublinhado ou cores de marca-texto para facilitar sua leitura.
              </p>
            </div>
          </div>
          <button
            id="close-format-modal-btn"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </header>

        {/* Tab Selection */}
        <div className="flex border-b border-slate-100 dark:border-slate-800 px-5 pt-2 bg-white dark:bg-slate-900 shrink-0 gap-2">
          <button
            id="tab-format-statement"
            onClick={() => setActiveTab("statement")}
            className={`pb-2.5 px-3 text-xs font-bold border-b-2 transition flex items-center gap-1.5 ${
              activeTab === "statement"
                ? "border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400"
                : "border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700"
            }`}
          >
            <Type className="w-3.5 h-3.5" />
            Enunciado Principal
          </button>
          <button
            id="tab-format-options"
            onClick={() => setActiveTab("options")}
            className={`pb-2.5 px-3 text-xs font-bold border-b-2 transition flex items-center gap-1.5 ${
              activeTab === "options"
                ? "border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400"
                : "border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700"
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            Alternativas ({optionsText.length})
          </button>
        </div>

        {/* Body Content */}
        <div className="p-5 space-y-4 overflow-y-auto flex-1 font-sans">
          {activeTab === "statement" ? (
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Formatação do Enunciado
                </span>

                {/* Toolbar Buttons */}
                <div className="flex flex-wrap items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
                  <button
                    type="button"
                    onClick={() => handleApplyFormatToStatement("bold")}
                    title="Negrito (**texto**)"
                    className="p-1.5 rounded-lg hover:bg-white dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition font-bold"
                  >
                    <Bold className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleApplyFormatToStatement("underline")}
                    title="Sublinhado (<u>texto</u>)"
                    className="p-1.5 rounded-lg hover:bg-white dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition"
                  >
                    <Underline className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleApplyFormatToStatement("mark-yellow")}
                    title="Marca-texto Amarelo"
                    className="p-1.5 rounded-lg hover:bg-white dark:hover:bg-slate-700 text-amber-600 dark:text-amber-400 transition flex items-center gap-0.5 text-xs font-bold"
                  >
                    <Highlighter className="w-4 h-4" />
                    <span className="text-[10px]">Amarelo</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleApplyFormatToStatement("mark-green")}
                    title="Marca-texto Verde"
                    className="p-1.5 rounded-lg hover:bg-white dark:hover:bg-slate-700 text-emerald-600 dark:text-emerald-400 transition flex items-center gap-0.5 text-xs font-bold"
                  >
                    <Highlighter className="w-4 h-4" />
                    <span className="text-[10px]">Verde</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleApplyFormatToStatement("strike")}
                    title="Tachado / Riscar (~~texto~~)"
                    className="p-1.5 rounded-lg hover:bg-white dark:hover:bg-slate-700 text-rose-500 transition"
                  >
                    <Strikethrough className="w-4 h-4" />
                  </button>
                  <div className="w-[1px] h-4 bg-slate-200 dark:bg-slate-700 mx-0.5" />
                  <button
                    type="button"
                    onClick={handleClearAllStatementFormatting}
                    title="Limpar formatação"
                    className="p-1.5 rounded-lg hover:bg-white dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 hover:text-rose-500 transition text-xs flex items-center gap-1 font-medium"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span className="text-[10px]">Limpar</span>
                  </button>
                </div>
              </div>

              {/* Textarea */}
              <div className="relative">
                <textarea
                  id="format-modal-statement-textarea"
                  ref={statementTextareaRef}
                  rows={5}
                  value={statementText}
                  onChange={(e) => setStatementText(e.target.value)}
                  placeholder="Selecione palavras e use a barra de ferramentas para formatar..."
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 leading-relaxed font-sans"
                />
                <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-indigo-400" />
                  Dica: Selecione a palavra ou termo-chave (ex: "INCORRETO", "NÃO", "EXCETO") e clique em Negrito ou Marca-texto.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                Escolha a alternativa para formatar
              </span>

              {/* Alternative Selectors */}
              <div className="grid grid-cols-5 gap-2">
                {optionsText.map((opt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedOptionIdx(idx)}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                      selectedOptionIdx === idx
                        ? "bg-indigo-50 border-indigo-500 text-indigo-700 dark:bg-indigo-950/40 dark:border-indigo-400 dark:text-indigo-300"
                        : "bg-slate-50 border-slate-200 text-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300"
                    }`}
                  >
                    Opção {String.fromCharCode(65 + idx)}
                  </button>
                ))}
              </div>

              {/* Option Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                <span className="text-xs font-medium text-slate-500">
                  Editando Opção {String.fromCharCode(65 + selectedOptionIdx)}:
                </span>
                <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
                  <button
                    type="button"
                    onClick={() => handleApplyFormatToOption("bold")}
                    className="p-1.5 rounded-lg hover:bg-white dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition font-bold"
                    title="Negrito"
                  >
                    <Bold className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleApplyFormatToOption("underline")}
                    className="p-1.5 rounded-lg hover:bg-white dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition"
                    title="Sublinhado"
                  >
                    <Underline className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleApplyFormatToOption("mark-yellow")}
                    className="p-1.5 rounded-lg hover:bg-white dark:hover:bg-slate-700 text-amber-600 dark:text-amber-400 transition"
                    title="Marca-texto"
                  >
                    <Highlighter className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleApplyFormatToOption("strike")}
                    className="p-1.5 rounded-lg hover:bg-white dark:hover:bg-slate-700 text-rose-500 transition"
                    title="Tachado"
                  >
                    <Strikethrough className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <input
                ref={optionInputRef}
                type="text"
                value={optionsText[selectedOptionIdx] || ""}
                onChange={(e) => {
                  const nextOptions = [...optionsText];
                  nextOptions[selectedOptionIdx] = e.target.value;
                  setOptionsText(nextOptions);
                }}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          )}

          {/* Live Preview Box */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                <Eye className="w-3.5 h-3.5" />
                Prévia Visual da Questão
              </span>
              <button
                type="button"
                onClick={() => setShowPreview(!showPreview)}
                className="text-[11px] text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition"
              >
                {showPreview ? "Ocultar Prévia" : "Mostrar Prévia"}
              </button>
            </div>

            {showPreview && (
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-3">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                    Enunciado Formatado:
                  </span>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 leading-relaxed whitespace-pre-line">
                    <FormattedText text={statementText} />
                  </p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-slate-200/60 dark:border-slate-800">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                    Alternativas:
                  </span>
                  {optionsText.map((opt, oIdx) => (
                    <div
                      key={oIdx}
                      className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-200"
                    >
                      <FormattedText text={opt} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <footer className="px-5 py-3.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-2 bg-slate-50/70 dark:bg-slate-850/70 shrink-0">
          <button
            type="button"
            id="cancel-format-btn"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition"
          >
            Cancelar
          </button>
          <button
            type="button"
            id="save-format-btn"
            onClick={handleSave}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition flex items-center gap-1.5"
          >
            <Check className="w-4 h-4" />
            Salvar Destaques
          </button>
        </footer>
      </div>
    </div>
  );
}
