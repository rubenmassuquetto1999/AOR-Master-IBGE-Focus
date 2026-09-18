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

const KNOWN_TAG_PAIRS: { format: FormatType; open: string; close: string }[] = [
  { format: "bold", open: "**", close: "**" },
  { format: "bold", open: "<b>", close: "</b>" },
  { format: "bold", open: "<strong>", close: "</strong>" },
  { format: "underline", open: "<u>", close: "</u>" },
  { format: "mark-yellow", open: "<mark>", close: "</mark>" },
  { format: "mark", open: "<mark>", close: "</mark>" },
  { format: "mark-green", open: "<mark-green>", close: "</mark-green>" },
  { format: "mark-blue", open: "<mark-blue>", close: "</mark-blue>" },
  { format: "mark-rose", open: "<mark-rose>", close: "</mark-rose>" },
  { format: "strike", open: "~~", close: "~~" },
  { format: "strike", open: "<s>", close: "</s>" },
  { format: "strike", open: "<del>", close: "</del>" },
  { format: "italic", open: "*", close: "*" },
  { format: "italic", open: "<i>", close: "</i>" },
  { format: "italic", open: "<em>", close: "</em>" },
];

/**
 * Aplica ou desmarca (toggle) a formatação de um trecho de texto dentro de uma string original
 */
export function applyFormatToString(
  original: string,
  selectedSnippet: string,
  format: FormatType
): string {
  if (!original || !selectedSnippet) return original;

  const trimmedSnippet = selectedSnippet.trim();
  if (!trimmedSnippet) return original;

  const plain = stripFormatting(trimmedSnippet);
  if (!plain) return original;

  // 1. Verifica se no texto original já existe o trecho formatado com alguma tag
  for (const pair of KNOWN_TAG_PAIRS) {
    const taggedVariant = `${pair.open}${plain}${pair.close}`;
    const tagIndex = original.indexOf(taggedVariant);

    if (tagIndex !== -1) {
      // O trecho já possui essa formatação no texto original!
      const isSameFormat =
        pair.format === format ||
        (format === "mark-yellow" && pair.format === "mark") ||
        (format === "mark" && pair.format === "mark-yellow");

      // Se o usuário clicou no mesmo botão OU em "clear": DESMARCA e volta ao texto normal
      if (isSameFormat || format === "clear") {
        return (
          original.slice(0, tagIndex) +
          plain +
          original.slice(tagIndex + taggedVariant.length)
        );
      }

      // Se o usuário clicou em outro botão de formatação: troca pela nova formatação
      let newOpen = "";
      let newClose = "";
      if (format === "bold") {
        newOpen = "**";
        newClose = "**";
      } else if (format === "underline") {
        newOpen = "<u>";
        newClose = "</u>";
      } else if (format === "mark" || format === "mark-yellow") {
        newOpen = "<mark>";
        newClose = "</mark>";
      } else if (format === "mark-green") {
        newOpen = "<mark-green>";
        newClose = "</mark-green>";
      } else if (format === "strike") {
        newOpen = "~~";
        newClose = "~~";
      } else if (format === "italic") {
        newOpen = "*";
        newClose = "*";
      }

      if (newOpen && newClose) {
        const replacement = `${newOpen}${plain}${newClose}`;
        return (
          original.slice(0, tagIndex) +
          replacement +
          original.slice(tagIndex + taggedVariant.length)
        );
      }
    }
  }

  // 2. Se o trecho não está envolvido por tags no original, busca o texto plano
  const plainIndex = original.indexOf(plain);
  if (plainIndex === -1) {
    // Tenta pelo snippet direto
    const rawIndex = original.indexOf(trimmedSnippet);
    if (rawIndex === -1) return original;

    if (format === "clear") {
      return (
        original.slice(0, rawIndex) +
        plain +
        original.slice(rawIndex + trimmedSnippet.length)
      );
    }
    const formatted = formatWrapper(plain, format);
    return (
      original.slice(0, rawIndex) +
      formatted +
      original.slice(rawIndex + trimmedSnippet.length)
    );
  }

  if (format === "clear") {
    return original;
  }

  const formattedSnippet = formatWrapper(plain, format);
  return (
    original.slice(0, plainIndex) +
    formattedSnippet +
    original.slice(plainIndex + plain.length)
  );
}

function formatWrapper(content: string, format: FormatType): string {
  switch (format) {
    case "bold":
      return `**${content}**`;
    case "underline":
      return `<u>${content}</u>`;
    case "mark":
    case "mark-yellow":
      return `<mark>${content}</mark>`;
    case "mark-green":
      return `<mark-green>${content}</mark-green>`;
    case "mark-blue":
      return `<mark-blue>${content}</mark-blue>`;
    case "mark-rose":
      return `<mark-rose>${content}</mark-rose>`;
    case "strike":
      return `~~${content}~~`;
    case "italic":
      return `*${content}*`;
    case "clear":
    default:
      return content;
  }
}

/**
 * Auxiliar para inserir ou desmarcar (toggle) formatação em um HTMLInputElement ou HTMLTextAreaElement
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

  // Se nada estiver selecionado, usa "texto" como placeholder
  if (!selected) {
    if (format === "clear") return;
    const sample = formatWrapper("texto", format);
    const nextVal = currentValue.slice(0, start) + sample + currentValue.slice(end);
    onUpdate(nextVal);
    setTimeout(() => {
      inputEl.focus();
      inputEl.setSelectionRange(start + 2, start + 7);
    }, 0);
    return;
  }

  // 1. Verifica se a própria seleção contém tags nos extremos
  for (const pair of KNOWN_TAG_PAIRS) {
    if (
      selected.startsWith(pair.open) &&
      selected.endsWith(pair.close) &&
      selected.length >= pair.open.length + pair.close.length
    ) {
      const isSame =
        pair.format === format ||
        (format === "mark-yellow" && pair.format === "mark") ||
        (format === "mark" && pair.format === "mark-yellow");

      // Clicou no mesmo botão ou em clear -> DESMARCA (remove as tags)
      if (isSame || format === "clear") {
        const unwrapped = selected.slice(
          pair.open.length,
          selected.length - pair.close.length
        );
        const nextVal = currentValue.slice(0, start) + unwrapped + currentValue.slice(end);
        onUpdate(nextVal);
        setTimeout(() => {
          inputEl.focus();
          inputEl.setSelectionRange(start, start + unwrapped.length);
        }, 0);
        return;
      }
    }
  }

  // 2. Verifica se antes e depois do cursor de seleção já existem as tags do formato
  for (const pair of KNOWN_TAG_PAIRS) {
    const oLen = pair.open.length;
    const cLen = pair.close.length;
    if (start >= oLen && end + cLen <= currentValue.length) {
      const before = currentValue.slice(start - oLen, start);
      const after = currentValue.slice(end, end + cLen);
      if (before === pair.open && after === pair.close) {
        const isSame =
          pair.format === format ||
          (format === "mark-yellow" && pair.format === "mark") ||
          (format === "mark" && pair.format === "mark-yellow");

        if (isSame || format === "clear") {
          // Desmarca removendo os delimitadores externos
          const nextVal =
            currentValue.slice(0, start - oLen) +
            selected +
            currentValue.slice(end + cLen);
          onUpdate(nextVal);
          setTimeout(() => {
            inputEl.focus();
            inputEl.setSelectionRange(start - oLen, start - oLen + selected.length);
          }, 0);
          return;
        }
      }
    }
  }

  // 3. Se selecionou e clicou em "clear", limpa qualquer tag interna
  if (format === "clear") {
    const cleaned = stripFormatting(selected);
    const nextVal = currentValue.slice(0, start) + cleaned + currentValue.slice(end);
    onUpdate(nextVal);
    setTimeout(() => {
      inputEl.focus();
      inputEl.setSelectionRange(start, start + cleaned.length);
    }, 0);
    return;
  }

  // 4. Aplica a nova formatação
  const cleanSelected = stripFormatting(selected);
  const replacement = formatWrapper(cleanSelected, format);
  const nextVal = currentValue.slice(0, start) + replacement + currentValue.slice(end);
  onUpdate(nextVal);

  setTimeout(() => {
    inputEl.focus();
    inputEl.setSelectionRange(start, start + replacement.length);
  }, 0);
}
