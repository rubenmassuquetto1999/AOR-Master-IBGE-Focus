import React from "react";
import {
  Bold,
  Underline,
  Highlighter,
  Strikethrough,
  RotateCcw,
} from "lucide-react";
import { FormatType } from "../utils/textFormatter";

interface QuestionInterpretationBarProps {
  onApplyFormatToSelection: (format: FormatType) => void;
  onClearHighlights: () => void;
  hasFormatting: boolean;
}

export default function QuestionInterpretationBar({
  onApplyFormatToSelection,
  onClearHighlights,
  hasFormatting,
}: QuestionInterpretationBarProps) {
  return (
    <div
      id="question-interpretation-toolbar"
      className="flex flex-wrap items-center justify-between gap-2 p-2 px-3 rounded-2xl bg-slate-50 dark:bg-slate-850/80 border border-slate-200/80 dark:border-slate-800 text-xs select-none"
    >
      {/* Label and Hint */}
      <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-semibold">
        <Highlighter className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
        <span>Interpretação & Destaques:</span>
        <span className="hidden sm:inline-block text-[11px] font-normal text-slate-400 dark:text-slate-500">
          (clique para marcar ou desmarcar)
        </span>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => onApplyFormatToSelection("bold")}
          title="Negrito (clique novamente para desmarcar)"
          className="p-1.5 px-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:border-indigo-500 hover:text-indigo-600 transition flex items-center gap-1 font-bold shadow-2xs cursor-pointer"
        >
          <Bold className="w-3.5 h-3.5" />
          <span className="hidden md:inline text-[10px]">Negrito</span>
        </button>

        <button
          type="button"
          onClick={() => onApplyFormatToSelection("underline")}
          title="Sublinhar (clique novamente para desmarcar)"
          className="p-1.5 px-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:border-indigo-500 hover:text-indigo-600 transition flex items-center gap-1 shadow-2xs cursor-pointer"
        >
          <Underline className="w-3.5 h-3.5" />
          <span className="hidden md:inline text-[10px]">Sublinhar</span>
        </button>

        <button
          type="button"
          onClick={() => onApplyFormatToSelection("mark-yellow")}
          title="Marca-texto Amarelo (clique novamente para desmarcar)"
          className="p-1.5 px-2 rounded-xl border border-amber-200 dark:border-amber-900/50 bg-amber-50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300 hover:bg-amber-100 transition flex items-center gap-1 shadow-2xs font-semibold cursor-pointer"
        >
          <Highlighter className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
          <span className="hidden md:inline text-[10px]">Amarelo</span>
        </button>

        <button
          type="button"
          onClick={() => onApplyFormatToSelection("mark-green")}
          title="Marca-texto Verde (clique novamente para desmarcar)"
          className="p-1.5 px-2 rounded-xl border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100 transition flex items-center gap-1 shadow-2xs font-semibold cursor-pointer"
        >
          <Highlighter className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span className="hidden md:inline text-[10px]">Verde</span>
        </button>

        <button
          type="button"
          onClick={() => onApplyFormatToSelection("strike")}
          title="Tachar / Riscar (clique novamente para desmarcar)"
          className="p-1.5 px-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-rose-500 hover:border-rose-300 transition flex items-center gap-1 shadow-2xs cursor-pointer"
        >
          <Strikethrough className="w-3.5 h-3.5" />
          <span className="hidden md:inline text-[10px]">Riscar</span>
        </button>

        {hasFormatting && (
          <>
            <div className="w-[1px] h-4 bg-slate-200 dark:bg-slate-700 mx-0.5" />
            <button
              type="button"
              onClick={onClearHighlights}
              title="Limpar todas as formatações desta questão"
              className="p-1.5 px-2.5 rounded-xl border border-rose-200 dark:border-rose-900/40 bg-rose-50/70 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 hover:bg-rose-100 transition flex items-center gap-1 font-semibold cursor-pointer shadow-2xs"
            >
              <RotateCcw className="w-3 h-3" />
              <span className="text-[10px]">Limpar Tudo</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
