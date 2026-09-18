import React from "react";

export type FormatType =
  | "bold"
  | "italic"
  | "underline"
  | "mark"
  | "mark-yellow"
  | "mark-green"
  | "mark-blue"
  | "mark-rose"
  | "strike"
  | "clear";

/**
 * Remove tags de formatação do texto para buscas ou exibição crua
 */
export function stripFormatting(text: string): string {
  if (!text) return "";
  return text
    .replace(/<mark(?:-(?:yellow|green|blue|rose))?>/gi, "")
    .replace(/<\/mark(?:-(?:yellow|green|blue|rose))?>/gi, "")
    .replace(/==([a-z]+:)?(.*?)==/gi, "$2")
    .replace(/<\/?(?:b|strong|u|i|em|s|del)>/gi, "")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/__(.*?)__/g, "$1")
    .replace(/~~(.*?)~~/g, "$1")
    .replace(/\*(.*?)\*/g, "$1");
}

interface FormatToken {
  type: "text" | "bold" | "italic" | "underline" | "mark" | "mark-yellow" | "mark-green" | "mark-blue" | "mark-rose" | "strike";
  content: string;
}

/**
 * Divide o texto em tokens de formatação conhecidos
 */
export function tokenizeFormattedText(rawText: string): FormatToken[] {
  if (!rawText) return [];

  // Regex para capturar tags HTML ou Markdown suportadas
  // Captura marca-texto, negrito, sublinhado, itálico, tachado
  const tagPattern = /(<mark-green>[\s\S]*?<\/mark-green>|<mark-blue>[\s\S]*?<\/mark-blue>|<mark-rose>[\s\S]*?<\/mark-rose>|<mark(?:-yellow)?>[\s\S]*?<\/mark(?:-yellow)?>|==green:[\s\S]*?==|==blue:[\s\S]*?==|==rose:[\s\S]*?==|==[\s\S]*?==|\*\*[\s\S]*?\*\*|<b>[\s\S]*?<\/b>|<strong>[\s\S]*?<\/strong>|<u>[\s\S]*?<\/u>|__[\s\S]*?__|~~[\s\S]*?~~|<s>[\s\S]*?<\/s>|<del>[\s\S]*?<\/del>|\*[\s\S]*?\*|<i>[\s\S]*?<\/i>|<em>[\s\S]*?<\/em>)/g;

  const parts = rawText.split(tagPattern);
  const tokens: FormatToken[] = [];

  for (const part of parts) {
    if (!part) continue;

    // Mark Verde
    if (/^<mark-green>([\s\S]*?)<\/mark-green>$/i.test(part)) {
      const match = part.match(/^<mark-green>([\s\S]*?)<\/mark-green>$/i);
      tokens.push({ type: "mark-green", content: match ? match[1] : part });
    } else if (/^==green:([\s\S]*?)==$/i.test(part)) {
      const match = part.match(/^==green:([\s\S]*?)==$/i);
      tokens.push({ type: "mark-green", content: match ? match[1] : part });
    }
    // Mark Azul
    else if (/^<mark-blue>([\s\S]*?)<\/mark-blue>$/i.test(part)) {
      const match = part.match(/^<mark-blue>([\s\S]*?)<\/mark-blue>$/i);
      tokens.push({ type: "mark-blue", content: match ? match[1] : part });
    } else if (/^==blue:([\s\S]*?)==$/i.test(part)) {
      const match = part.match(/^==blue:([\s\S]*?)==$/i);
      tokens.push({ type: "mark-blue", content: match ? match[1] : part });
    }
    // Mark Rosa
    else if (/^<mark-rose>([\s\S]*?)<\/mark-rose>$/i.test(part)) {
      const match = part.match(/^<mark-rose>([\s\S]*?)<\/mark-rose>$/i);
      tokens.push({ type: "mark-rose", content: match ? match[1] : part });
    } else if (/^==rose:([\s\S]*?)==$/i.test(part)) {
      const match = part.match(/^==rose:([\s\S]*?)==$/i);
      tokens.push({ type: "mark-rose", content: match ? match[1] : part });
    }
    // Mark Amarelo (default)
    else if (/^<mark(?:-yellow)?>([\s\S]*?)<\/mark(?:-yellow)?>$/i.test(part)) {
      const match = part.match(/^<mark(?:-yellow)?>([\s\S]*?)<\/mark(?:-yellow)?>$/i);
      tokens.push({ type: "mark", content: match ? match[1] : part });
    } else if (/^==([\s\S]*?)==$/i.test(part)) {
      const match = part.match(/^==([\s\S]*?)==$/i);
      tokens.push({ type: "mark", content: match ? match[1] : part });
    }
    // Negrito
    else if (/^\*\*([\s\S]*?)\*\*$/.test(part)) {
      const match = part.match(/^\*\*([\s\S]*?)\*\*$/);
      tokens.push({ type: "bold", content: match ? match[1] : part });
    } else if (/^<(?:b|strong)>([\s\S]*?)<\/(?:b|strong)>$/i.test(part)) {
      const match = part.match(/^<(?:b|strong)>([\s\S]*?)<\/(?:b|strong)>$/i);
      tokens.push({ type: "bold", content: match ? match[1] : part });
    }
    // Sublinhado
    else if (/^<u>([\s\S]*?)<\/u>$/i.test(part)) {
      const match = part.match(/^<u>([\s\S]*?)<\/u>$/i);
      tokens.push({ type: "underline", content: match ? match[1] : part });
    } else if (/^__([\s\S]*?)__$/.test(part)) {
      const match = part.match(/^__([\s\S]*?)__$/);
      tokens.push({ type: "underline", content: match ? match[1] : part });
    }
    // Tachado / Riscado
    else if (/^~~([\s\S]*?)~~$/.test(part)) {
      const match = part.match(/^~~([\s\S]*?)~~$/);
      tokens.push({ type: "strike", content: match ? match[1] : part });
    } else if (/^<(?:s|del)>([\s\S]*?)<\/(?:s|del)>$/i.test(part)) {
      const match = part.match(/^<(?:s|del)>([\s\S]*?)<\/(?:s|del)>$/i);
      tokens.push({ type: "strike", content: match ? match[1] : part });
    }
    // Itálico
    else if (/^\*([\s\S]*?)\*$/.test(part)) {
      const match = part.match(/^\*([\s\S]*?)\*$/);
      tokens.push({ type: "italic", content: match ? match[1] : part });
    } else if (/^<(?:i|em)>([\s\S]*?)<\/(?:i|em)>$/i.test(part)) {
      const match = part.match(/^<(?:i|em)>([\s\S]*?)<\/(?:i|em)>$/i);
      tokens.push({ type: "italic", content: match ? match[1] : part });
    }
    // Texto comum
    else {
      tokens.push({ type: "text", content: part });
    }
  }

  return tokens;
}

/**
 * Renderiza recursivamente ou em nós de formatação estilizados
 */
function renderToken(token: FormatToken, key: number | string): React.ReactNode {
  // Suporte a sub-formatação dentro de tokens (ex: negrito dentro de marcação)
  const renderInner = (text: string) => {
    // Se ainda contiver tags, subdivide
    if (/[<*_~=]/.test(text)) {
      const subTokens = tokenizeFormattedText(text);
      if (subTokens.length > 1 || (subTokens.length === 1 && subTokens[0].type !== "text")) {
        return subTokens.map((sub, idx) => renderToken(sub, `${key}-${idx}`));
      }
    }
    return text;
  };

  switch (token.type) {
    case "bold":
      return (
        <strong
          key={key}
          className="font-black text-slate-950 dark:text-white underline-offset-2 tracking-tight"
        >
          {renderInner(token.content)}
        </strong>
      );

    case "underline":
      return (
        <span
          key={key}
          className="underline decoration-indigo-500/90 dark:decoration-indigo-400 decoration-2 underline-offset-4 font-semibold"
        >
          {renderInner(token.content)}
        </span>
      );

    case "mark":
    case "mark-yellow":
      return (
        <mark
          key={key}
          className="bg-amber-200/95 text-slate-900 dark:bg-amber-400 dark:text-slate-950 px-1 py-0.5 rounded shadow-2xs font-semibold mx-0.5 ring-1 ring-amber-300/50 dark:ring-amber-500/40"
        >
          {renderInner(token.content)}
        </mark>
      );

    case "mark-green":
      return (
        <mark
          key={key}
          className="bg-emerald-200/95 text-emerald-950 dark:bg-emerald-400 dark:text-slate-950 px-1 py-0.5 rounded shadow-2xs font-semibold mx-0.5 ring-1 ring-emerald-300/50 dark:ring-emerald-500/40"
        >
          {renderInner(token.content)}
        </mark>
      );

    case "mark-blue":
      return (
        <mark
          key={key}
          className="bg-sky-200/95 text-sky-950 dark:bg-sky-300 dark:text-slate-950 px-1 py-0.5 rounded shadow-2xs font-semibold mx-0.5 ring-1 ring-sky-300/50 dark:ring-sky-400/40"
        >
          {renderInner(token.content)}
        </mark>
      );

    case "mark-rose":
      return (
        <mark
          key={key}
          className="bg-rose-200/95 text-rose-950 dark:bg-rose-300 dark:text-slate-950 px-1 py-0.5 rounded shadow-2xs font-semibold mx-0.5 ring-1 ring-rose-300/50 dark:ring-rose-400/40"
        >
          {renderInner(token.content)}
        </mark>
      );

    case "strike":
      return (
        <del
          key={key}
          className="line-through decoration-rose-500 decoration-2 opacity-70 dark:opacity-60 select-none text-slate-500 dark:text-slate-400"
        >
          {renderInner(token.content)}
        </del>
      );

    case "italic":
      return (
        <em key={key} className="italic text-slate-800 dark:text-slate-200">
          {renderInner(token.content)}
        </em>
      );

    case "text":
    default:
      return <React.Fragment key={key}>{token.content}</React.Fragment>;
  }
}

/**
 * Componente principal para exibição de texto formatado com suporte a negrito, sublinhado, marca-texto e riscado
 */
export const FormattedText: React.FC<{
  text: string | undefined | null;
  className?: string;
  id?: string;
}> = ({ text, className, id }) => {
  if (!text) return null;

  const tokens = tokenizeFormattedText(text);

  return (
    <span id={id} className={className}>
      {tokens.map((tok, idx) => renderToken(tok, idx))}
    </span>
  );
};

/**
 * Aplica formatação a um trecho de texto dentro de uma string original
 */
export function applyFormatToString(
  original: string,
  selectedSnippet: string,
  format: FormatType
): string {
  if (!original || !selectedSnippet) return original;

  const trimmedSnippet = selectedSnippet.trim();
  if (!trimmedSnippet) return original;

  // Encontra a ocorrência do texto selecionado
  const index = original.indexOf(trimmedSnippet);
  if (index === -1) return original;

  let formattedSnippet = trimmedSnippet;

  if (format === "clear") {
    // Remove qualquer formatação no snippet
    formattedSnippet = stripFormatting(trimmedSnippet);
  } else if (format === "bold") {
    formattedSnippet = `**${stripFormatting(trimmedSnippet)}**`;
  } else if (format === "underline") {
    formattedSnippet = `<u>${stripFormatting(trimmedSnippet)}</u>`;
  } else if (format === "mark" || format === "mark-yellow") {
    formattedSnippet = `<mark>${stripFormatting(trimmedSnippet)}</mark>`;
  } else if (format === "mark-green") {
    formattedSnippet = `<mark-green>${stripFormatting(trimmedSnippet)}</mark-green>`;
  } else if (format === "mark-blue") {
    formattedSnippet = `<mark-blue>${stripFormatting(trimmedSnippet)}</mark-blue>`;
  } else if (format === "mark-rose") {
    formattedSnippet = `<mark-rose>${stripFormatting(trimmedSnippet)}</mark-rose>`;
  } else if (format === "strike") {
    formattedSnippet = `~~${stripFormatting(trimmedSnippet)}~~`;
  } else if (format === "italic") {
    formattedSnippet = `*${stripFormatting(trimmedSnippet)}*`;
  }

  return original.slice(0, index) + formattedSnippet + original.slice(index + trimmedSnippet.length);
}

/**
 * Auxiliar para inserir formatação em um elemento HTMLInputElement ou HTMLTextAreaElement
 */
export function insertFormatInInput(
  inputEl: HTMLTextAreaElement | HTMLInputElement,
  format: FormatType,
  currentValue: string,
  onUpdate: (newValue: string) => void
) {
  const start = inputEl.selectionStart ?? 0;
  const end = inputEl.selectionEnd ?? 0;
  const selected = currentValue.slice(start, end);

  let prefix = "";
  let suffix = "";

  switch (format) {
    case "bold":
      prefix = "**";
      suffix = "**";
      break;
    case "underline":
      prefix = "<u>";
      suffix = "</u>";
      break;
    case "mark":
    case "mark-yellow":
      prefix = "<mark>";
      suffix = "</mark>";
      break;
    case "mark-green":
      prefix = "<mark-green>";
      suffix = "</mark-green>";
      break;
    case "mark-blue":
      prefix = "<mark-blue>";
      suffix = "</mark-blue>";
      break;
    case "mark-rose":
      prefix = "<mark-rose>";
      suffix = "</mark-rose>";
      break;
    case "strike":
      prefix = "~~";
      suffix = "~~";
      break;
    case "italic":
      prefix = "*";
      suffix = "*";
      break;
    case "clear":
      if (selected) {
        const cleaned = stripFormatting(selected);
        const nextVal = currentValue.slice(0, start) + cleaned + currentValue.slice(end);
        onUpdate(nextVal);
        setTimeout(() => {
          inputEl.focus();
          inputEl.setSelectionRange(start, start + cleaned.length);
        }, 0);
      }
      return;
  }

  const replacement = selected ? `${prefix}${selected}${suffix}` : `${prefix}texto${suffix}`;
  const nextVal = currentValue.slice(0, start) + replacement + currentValue.slice(end);
  onUpdate(nextVal);

  setTimeout(() => {
    inputEl.focus();
    if (selected) {
      inputEl.setSelectionRange(start, start + replacement.length);
    } else {
      inputEl.setSelectionRange(start + prefix.length, start + prefix.length + 5);
    }
  }, 0);
}
