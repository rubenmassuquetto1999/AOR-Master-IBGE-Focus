import React, { useEffect, useState, useCallback, useRef } from "react";
import { Bold, Underline, Highlighter, Strikethrough, RotateCcw } from "lucide-react";
import { FormatType } from "../utils/textFormatter";

interface FloatingSelectionToolbarProps {
  containerRef: React.RefObject<HTMLElement | null>;
  onApplyFormat: (format: FormatType, selectedText: string) => void;
}

interface Position {
  top: number;
  left: number;
  visible: boolean;
  selectedText: string;
}

export default function FloatingSelectionToolbar({
  containerRef,
  onApplyFormat,
}: FloatingSelectionToolbarProps) {
  const [pos, setPos] = useState<Position>({
    top: 0,
    left: 0,
    visible: false,
    selectedText: "",
  });

  const toolbarRef = useRef<HTMLDivElement>(null);

  const checkSelection = useCallback(() => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed || !containerRef.current) {
      setPos((prev) => (prev.visible ? { ...prev, visible: false } : prev));
      return;
    }

    const text = selection.toString().trim();
    if (text.length === 0) {
      setPos((prev) => (prev.visible ? { ...prev, visible: false } : prev));
      return;
    }

    // Verifica se a seleção está contida no container da questão
    const anchorNode = selection.anchorNode;
    const focusNode = selection.focusNode;

    const isInside =
      anchorNode &&
      focusNode &&
      containerRef.current.contains(anchorNode) &&
      containerRef.current.contains(focusNode);

    if (!isInside) {
      setPos((prev) => (prev.visible ? { ...prev, visible: false } : prev));
      return;
    }

    try {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();

      if (rect.width === 0 && rect.height === 0) {
        setPos((prev) => (prev.visible ? { ...prev, visible: false } : prev));
        return;
      }

      // Calcula posição centralizada acima da seleção
      const top = Math.max(10, rect.top + window.scrollY - 46);
      const left = Math.max(
        10,
        Math.min(
          window.innerWidth - 240,
          rect.left + window.scrollX + rect.width / 2 - 110
        )
      );

      setPos({
        top,
        left,
        visible: true,
        selectedText: text,
      });
    } catch {
      setPos((prev) => (prev.visible ? { ...prev, visible: false } : prev));
    }
  }, [containerRef]);

  useEffect(() => {
    const handleMouseUp = () => {
      setTimeout(checkSelection, 20);
    };

    const handleKeyUp = () => {
      setTimeout(checkSelection, 20);
    };

    const handleTouchEnd = () => {
      setTimeout(checkSelection, 60);
    };

    const handleScrollOrResize = () => {
      setPos((prev) => (prev.visible ? { ...prev, visible: false } : prev));
    };

    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("keyup", handleKeyUp);
    document.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("scroll", handleScrollOrResize, { passive: true });
    window.addEventListener("resize", handleScrollOrResize, { passive: true });

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("scroll", handleScrollOrResize);
      window.removeEventListener("resize", handleScrollOrResize);
    };
  }, [checkSelection]);

  if (!pos.visible) return null;

  const handleClick = (e: React.MouseEvent, format: FormatType) => {
    e.preventDefault();
    e.stopPropagation();
    onApplyFormat(format, pos.selectedText);
    window.getSelection()?.removeAllRanges();
    setPos((prev) => ({ ...prev, visible: false }));
  };

  return (
    <div
      ref={toolbarRef}
      id="floating-text-selection-toolbar"
      style={{ top: `${pos.top}px`, left: `${pos.left}px` }}
      className="fixed z-50 flex items-center gap-0.5 p-1 bg-slate-900/95 dark:bg-slate-800/95 text-white rounded-2xl shadow-xl border border-slate-700/60 backdrop-blur-md animate-fade-in select-none"
    >
      <button
        type="button"
        onMouseDown={(e) => handleClick(e, "bold")}
        title="Deixar em Negrito"
        className="p-1.5 rounded-xl hover:bg-slate-700 text-white transition active:scale-95"
      >
        <Bold className="w-3.5 h-3.5" />
      </button>

      <button
        type="button"
        onMouseDown={(e) => handleClick(e, "underline")}
        title="Sublinhar termo"
        className="p-1.5 rounded-xl hover:bg-slate-700 text-white transition active:scale-95"
      >
        <Underline className="w-3.5 h-3.5" />
      </button>

      <button
        type="button"
        onMouseDown={(e) => handleClick(e, "mark-yellow")}
        title="Grifar com Marca-Texto Amarelo"
        className="p-1.5 rounded-xl hover:bg-slate-700 text-amber-300 transition active:scale-95 flex items-center"
      >
        <Highlighter className="w-3.5 h-3.5" />
      </button>

      <button
        type="button"
        onMouseDown={(e) => handleClick(e, "mark-green")}
        title="Grifar com Marca-Texto Verde"
        className="p-1.5 rounded-xl hover:bg-slate-700 text-emerald-400 transition active:scale-95 flex items-center"
      >
        <Highlighter className="w-3.5 h-3.5" />
      </button>

      <button
        type="button"
        onMouseDown={(e) => handleClick(e, "strike")}
        title="Tachar / Riscar termo"
        className="p-1.5 rounded-xl hover:bg-slate-700 text-rose-400 transition active:scale-95"
      >
        <Strikethrough className="w-3.5 h-3.5" />
      </button>

      <div className="w-[1px] h-3.5 bg-slate-700 mx-0.5" />

      <button
        type="button"
        onMouseDown={(e) => handleClick(e, "clear")}
        title="Remover formatação"
        className="p-1.5 rounded-xl hover:bg-slate-700 text-slate-400 hover:text-white transition active:scale-95"
      >
        <RotateCcw className="w-3 h-3" />
      </button>
    </div>
  );
}
