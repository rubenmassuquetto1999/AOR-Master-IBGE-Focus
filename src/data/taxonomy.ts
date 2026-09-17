export interface DisciplineInfo {
  id: string;
  name: string;
  shortName: string;
  emoji: string;
  colorBorder: string;
  badgeBg: string;
  textColor: string;
  desc: string;
  topics: string[];
}

export const TAXONOMY: DisciplineInfo[] = [
  {
    id: "portugues",
    name: "Língua Portuguesa",
    shortName: "Português",
    emoji: "📚",
    colorBorder: "hover:border-blue-500 hover:shadow-blue-500/10",
    badgeBg: "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300",
    textColor: "text-blue-600 dark:text-blue-400",
    desc: "Ortografia, morfologia, sintaxe, concordância, regência, crase, pontuação e interpretação de textos.",
    topics: [
      "Ortografia",
      "Questões de Ortografia",
      "Classes Gramaticais e suas funções sintáticas",
      "Questões de Classes de Palavras",
      "Verbos",
      "Questões de Verbos",
      "Termos da oração",
      "Concordância Nominal e Concordância Verbal",
      "Questões de Termos da oração, Concordância Nominal e Concordância Verbal",
      "Colocação Pronominal",
      "Questões de Pronomes",
      "Regência e Crase",
      "Questões de Regência e Crase",
      "Vozes Verbais e SE",
      "Pronomes Relativos e QUE",
      "Questões de Funções do Que e do Se",
      "Período Composto / Orações Coordenadas e Subordinadas",
      "Questões de Orações Coordenadas e Subordinadas",
      "Pontuação",
      "Questões de Pontuação",
      "Interpretação de texto",
      "Contexto, coesão, denotação, conotação e intertextualidade",
      "Domínio da temática dos parágrafos",
      "Tipos e gêneros textuais",
      "Gêneros textuais e os tipos de coesão",
      "Figuras de linguagem",
      "Funções da linguagem, tipos de discurso e variações linguísticas",
      "Questões de Interpretação de texto e tipologia textual"
    ]
  },
  {
    id: "adm",
    name: "Noções de Administração",
    shortName: "Administração",
    emoji: "💼",
    colorBorder: "hover:border-amber-500 hover:shadow-amber-500/10",
    badgeBg: "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300",
    textColor: "text-amber-600 dark:text-amber-400",
    desc: "Papéis do administrador, processo organizacional (PODC), liderança, motivação, equipes, comunicação e gestão da qualidade.",
    topics: [
      "Papeis e Habilidades do Administrador",
      "Processo Organizacional",
      "Liderança",
      "Motivação",
      "Grupos e Equipes",
      "Comunicação Organizacional",
      "Gestão de Qualidade",
      "Questões de Administração"
    ]
  },
  {
    id: "info",
    name: "Noções Básicas de Informática",
    shortName: "Informática",
    emoji: "⚡",
    colorBorder: "hover:border-emerald-500 hover:shadow-emerald-500/10",
    badgeBg: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300",
    textColor: "text-emerald-600 dark:text-emerald-400",
    desc: "Hardware, software, Windows 11, gestão de pastas e arquivos, Android, MS Excel e pacotes de escritório.",
    topics: [
      "Hardware",
      "Questões sobre Hardware",
      "Software",
      "Questões sobre Software",
      "Sistema Operacional Windows 11",
      "Questões de Sistema Operacional Windows 11",
      "Gerenciamento, arquivos e pastas",
      "Gerenciamento, arquivos e pastas - Questões",
      "Sistemas operacionais: Android",
      "Microsoft Office 365 - Excel",
      "Questões de Excel Microsoft 365"
    ]
  },
  {
    id: "rlm",
    name: "Raciocínio Lógico Quantitativo",
    shortName: "Raciocínio Lógico",
    emoji: "🧠",
    colorBorder: "hover:border-purple-500 hover:shadow-purple-500/10",
    badgeBg: "bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300",
    textColor: "text-purple-600 dark:text-purple-400",
    desc: "Conjuntos, números, álgebra, geometria, porcentagem, lógica proposicional, tabelas-verdade, equivalências e associações.",
    topics: [
      "Análise de Conteúdo - Raciocínio Lógico Quantitativo",
      "Conjuntos Numéricos",
      "Números Naturais",
      "Números Inteiros",
      "Números Racionais",
      "Números Reais",
      "Divisibilidade",
      "Números Primos",
      "Fatoração numérica",
      "Quantidade de Divisores",
      "MDC - Máximo Divisor Comum",
      "MMC - Mínimo Múltiplo Comum",
      "Frações",
      "Números Decimais",
      "Expressões Algébricas",
      "Produtos Notáveis",
      "Sistemas de Equações",
      "Equação de Primeiro Grau",
      "Equação de Segundo Grau",
      "Razão e Proporção",
      "Regra de Três Simples",
      "Regra de Três Composta",
      "Porcentagem",
      "Juros Simples",
      "Potenciação",
      "Radiciação",
      "Unidades de Medidas",
      "Conjuntos",
      "Função de Primeiro Grau",
      "Função de Segundo Grau",
      "Geometria Plana",
      "Geometria Espacial - Cones",
      "Geometria Espacial - Cilindro",
      "Geometria Espacial - Esfera",
      "Geometria Espacial - Cubo e Paralelepípedo",
      "Geometria Espacial - Pirâmides",
      "Progressão Aritmética",
      "Progressão Geométrica",
      "Média, Moda e Mediana",
      "Média Ponderada",
      "Amplitude, Variância e Desvio Padrão",
      "Proposição Lógica",
      "Conectivos Lógicos",
      "Tabela Verdade",
      "Tautologia, contradição e contingência",
      "Equivalência e Negação",
      "Diagrama Lógico e Quantificadores",
      "Implicação e Argumentação",
      "Questões sobre Argumentação",
      "Estrutura lógica de relações arbitrárias (Deduzir novas informações e condições)",
      "Associação Lógica",
      "Questões de Associação Lógica"
    ]
  },
  {
    id: "etica",
    name: "Ética no Serviço Público e IBGE",
    shortName: "Ética e IBGE",
    emoji: "⚖️",
    colorBorder: "hover:border-indigo-500 hover:shadow-indigo-500/10",
    badgeBg: "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300",
    textColor: "text-indigo-600 dark:text-indigo-400",
    desc: "Código de Ética do IBGE, Regime Disciplinar, Lei 8.112/1990 e Decreto nº 1.171/1994.",
    topics: [
      "Código de Ética Profissional do Servidor do IBGE",
      "Regime Disciplinar e Lei 8.112/1990",
      "Decreto nº 1.171/1994",
      "Questões de Ética no Serviço Público"
    ]
  }
];

export const DISCIPLINES_NAMES = TAXONOMY.map((d) => d.name);

export const TOPICS_BY_DISCIPLINE: Record<string, string[]> = TAXONOMY.reduce((acc, d) => {
  acc[d.name] = d.topics;
  return acc;
}, {} as Record<string, string[]>);

export const ALL_TOPICS: string[] = TAXONOMY.flatMap((d) => d.topics);

export function getTopicsForDiscipline(disciplineName: string): string[] {
  if (!disciplineName || disciplineName === "Todas" || disciplineName === "Todos") {
    return ALL_TOPICS;
  }
  const found = TAXONOMY.find(
    (d) => d.name.toLowerCase() === disciplineName.toLowerCase() || d.id === disciplineName.toLowerCase() || d.shortName.toLowerCase() === disciplineName.toLowerCase()
  );
  return found ? found.topics : [];
}

export function getDisciplineForTopic(topicName: string): DisciplineInfo | undefined {
  if (!topicName) return undefined;
  const cleanTopic = topicName.trim().toLowerCase();
  return TAXONOMY.find((d) =>
    d.topics.some((t) => {
      const lowerT = t.toLowerCase();
      return lowerT === cleanTopic || cleanTopic.includes(lowerT);
    })
  );
}

/**
 * Returns the exact discipline for any question based on registered field, topic, or classification
 */
export function getQuestionDiscipline(question: { disciplina?: string; assunto?: string; text?: string; id?: string }): string {
  if (question.disciplina && question.disciplina.trim()) {
    const trimmed = question.disciplina.trim();
    const matchedTax = TAXONOMY.find(
      (t) =>
        t.name.toLowerCase() === trimmed.toLowerCase() ||
        t.id.toLowerCase() === trimmed.toLowerCase() ||
        t.shortName.toLowerCase() === trimmed.toLowerCase()
    );
    return matchedTax ? matchedTax.name : trimmed;
  }
  const matched = getDisciplineForTopic(question.assunto || "");
  if (matched) return matched.name;
  const classified = classifyQuestion(question);
  if (classified?.discipline) return classified.discipline;
  return "Outras";
}

/**
 * Maps any question's raw assunto or text into canonical Discipline and Topic
 */
export function classifyQuestion(question: { assunto?: string; text?: string; id?: string }): {
  discipline: string;
  assunto: string;
} {
  const rawAssunto = (question.assunto || "").trim();
  const rawText = (question.text || "").toLowerCase();
  const rawId = (question.id || "").toLowerCase();

  // 1. Direct exact match in canonical topics
  for (const disc of TAXONOMY) {
    if (disc.topics.includes(rawAssunto)) {
      return { discipline: disc.name, assunto: rawAssunto };
    }
  }

  // 2. Prefix / Contains match in rawAssunto
  const lowerAssunto = rawAssunto.toLowerCase();

  // Ética / IBGE
  if (
    rawId.startsWith("etica_") ||
    rawId.startsWith("ibge_") ||
    lowerAssunto.includes("ética") ||
    lowerAssunto.includes("etica") ||
    lowerAssunto.includes("8.112") ||
    lowerAssunto.includes("decreto nº 1.171")
  ) {
    if (lowerAssunto.includes("8.112") || lowerAssunto.includes("regime")) {
      return { discipline: "Ética no Serviço Público e IBGE", assunto: "Regime Disciplinar e Lei 8.112/1990" };
    }
    if (lowerAssunto.includes("decreto") || lowerAssunto.includes("1.171")) {
      return { discipline: "Ética no Serviço Público e IBGE", assunto: "Decreto nº 1.171/1994" };
    }
    if (lowerAssunto.includes("código") || lowerAssunto.includes("codigo") || lowerAssunto.includes("ibge")) {
      return { discipline: "Ética no Serviço Público e IBGE", assunto: "Código de Ética Profissional do Servidor do IBGE" };
    }
    return { discipline: "Ética no Serviço Público e IBGE", assunto: "Questões de Ética no Serviço Público" };
  }

  // Noções de Administração
  if (
    rawId.startsWith("adm_") ||
    lowerAssunto.includes("administra") ||
    lowerAssunto.includes("gestão") ||
    lowerAssunto.includes("gestao") ||
    lowerAssunto.includes("liderança") ||
    lowerAssunto.includes("motivação") ||
    lowerAssunto.includes("equipe") ||
    lowerAssunto.includes("comunicação") ||
    lowerAssunto.includes("qualidade") ||
    lowerAssunto.includes("processo organizacional") ||
    lowerAssunto.includes("podc") ||
    lowerAssunto.includes("pdca")
  ) {
    const dName = "Noções de Administração";
    if (lowerAssunto.includes("papel") || lowerAssunto.includes("habilidade") || lowerAssunto.includes("administrador") || lowerAssunto.includes("competência")) {
      return { discipline: dName, assunto: "Papeis e Habilidades do Administrador" };
    }
    if (lowerAssunto.includes("processo organizacional") || lowerAssunto.includes("podc") || lowerAssunto.includes("planejamento") || lowerAssunto.includes("organização") || lowerAssunto.includes("direção") || lowerAssunto.includes("controle") || lowerAssunto.includes("tomada de decisão")) {
      return { discipline: dName, assunto: "Processo Organizacional" };
    }
    if (lowerAssunto.includes("liderança") || lowerAssunto.includes("lideranca") || lowerAssunto.includes("líder") || lowerAssunto.includes("lider")) {
      return { discipline: dName, assunto: "Liderança" };
    }
    if (lowerAssunto.includes("motivação") || lowerAssunto.includes("motivacao") || lowerAssunto.includes("maslow") || lowerAssunto.includes("herzberg") || lowerAssunto.includes("mcgregor")) {
      return { discipline: dName, assunto: "Motivação" };
    }
    if (lowerAssunto.includes("grupo") || lowerAssunto.includes("equipe") || lowerAssunto.includes("conflito") || lowerAssunto.includes("relacionamento")) {
      return { discipline: dName, assunto: "Grupos e Equipes" };
    }
    if (lowerAssunto.includes("comunicação") || lowerAssunto.includes("comunicacao") || lowerAssunto.includes("feedback") || lowerAssunto.includes("barreiras")) {
      return { discipline: dName, assunto: "Comunicação Organizacional" };
    }
    if (lowerAssunto.includes("qualidade") || lowerAssunto.includes("pdca") || lowerAssunto.includes("ishikawa") || lowerAssunto.includes("5s") || lowerAssunto.includes("pareto") || lowerAssunto.includes("brainstorming")) {
      return { discipline: dName, assunto: "Gestão de Qualidade" };
    }
    return { discipline: dName, assunto: "Questões de Administração" };
  }

  // Noções Básicas de Informática
  if (
    rawId.startsWith("info_") ||
    lowerAssunto.includes("informática") ||
    lowerAssunto.includes("informatica") ||
    lowerAssunto.includes("hardware") ||
    lowerAssunto.includes("software") ||
    lowerAssunto.includes("windows") ||
    lowerAssunto.includes("excel") ||
    lowerAssunto.includes("pasta") ||
    lowerAssunto.includes("arquivo") ||
    lowerAssunto.includes("android") ||
    rawText.includes("excel") ||
    rawText.includes("windows") ||
    rawText.includes("hardware") ||
    rawText.includes("android")
  ) {
    const dName = "Noções Básicas de Informática";
    const combined = (lowerAssunto + " " + rawText + " " + rawId).toLowerCase();

    if (combined.includes("excel") || combined.includes("planilha") || combined.includes("fórmula") || combined.includes("calc") || combined.includes("célula")) {
      return { discipline: dName, assunto: combined.includes("quest") ? "Questões de Excel Microsoft 365" : "Microsoft Office 365 - Excel" };
    }
    if (combined.includes("android") || combined.includes("smartphone") || combined.includes("art (android") || rawId.includes("and_")) {
      return { discipline: dName, assunto: "Sistemas operacionais: Android" };
    }
    if (combined.includes("windows 11") || combined.includes("windows") || combined.includes("win 11") || rawId.includes("w11_")) {
      return { discipline: dName, assunto: combined.includes("quest") ? "Questões de Sistema Operacional Windows 11" : "Sistema Operacional Windows 11" };
    }
    if (combined.includes("arquivo") || combined.includes("pasta") || combined.includes("gerenciamento") || combined.includes("extensão") || combined.includes("backup")) {
      return { discipline: dName, assunto: combined.includes("quest") ? "Gerenciamento, arquivos e pastas - Questões" : "Gerenciamento, arquivos e pastas" };
    }
    if (combined.includes("hardware") || combined.includes("cpu") || combined.includes("ram") || combined.includes("ssd") || combined.includes("memória") || combined.includes("periférico") || rawId.includes("hw_")) {
      return { discipline: dName, assunto: combined.includes("quest") ? "Questões sobre Hardware" : "Hardware" };
    }
    if (combined.includes("software") || combined.includes("aplicativo") || combined.includes("programa") || combined.includes("open source") || combined.includes("código aberto") || rawId.includes("sw_")) {
      return { discipline: dName, assunto: combined.includes("quest") ? "Questões sobre Software" : "Software" };
    }
    return { discipline: dName, assunto: "Hardware" };
  }

  // Raciocínio Lógico Quantitativo
  if (
    rawId.startsWith("rlm_") ||
    rawId.startsWith("assoc_") ||
    lowerAssunto.includes("lógica") ||
    lowerAssunto.includes("logica") ||
    lowerAssunto.includes("raciocínio") ||
    lowerAssunto.includes("raciocinio") ||
    lowerAssunto.includes("matemát") ||
    lowerAssunto.includes("matemat") ||
    lowerAssunto.includes("geometria") ||
    lowerAssunto.includes("proposição") ||
    lowerAssunto.includes("tabela verdade") ||
    lowerAssunto.includes("equivalência") ||
    lowerAssunto.includes("conjuntos") ||
    lowerAssunto.includes("porcentagem") ||
    lowerAssunto.includes("regra de três") ||
    lowerAssunto.includes("probabilidade") ||
    lowerAssunto.includes("associação")
  ) {
    const dName = "Raciocínio Lógico Quantitativo";
    if (lowerAssunto.includes("associação") || lowerAssunto.includes("associacao") || rawId.startsWith("assoc_")) {
      return { discipline: dName, assunto: lowerAssunto.includes("quest") ? "Questões de Associação Lógica" : "Associação Lógica" };
    }
    if (lowerAssunto.includes("tabela verdade") || lowerAssunto.includes("tabela-verdade")) {
      return { discipline: dName, assunto: "Tabela Verdade" };
    }
    if (lowerAssunto.includes("tautologia") || lowerAssunto.includes("contradição") || lowerAssunto.includes("contingência") || lowerAssunto.includes("contingencia")) {
      return { discipline: dName, assunto: "Tautologia, contradição e contingência" };
    }
    if (lowerAssunto.includes("equivalência") || lowerAssunto.includes("negação") || lowerAssunto.includes("equivalencia") || lowerAssunto.includes("negacao") || lowerAssunto.includes("morgan")) {
      return { discipline: dName, assunto: "Equivalência e Negação" };
    }
    if (lowerAssunto.includes("diagrama") || lowerAssunto.includes("quantificador") || lowerAssunto.includes("silogismo") || lowerAssunto.includes("todo") || lowerAssunto.includes("nenhum") || lowerAssunto.includes("algum")) {
      return { discipline: dName, assunto: "Diagrama Lógico e Quantificadores" };
    }
    if (lowerAssunto.includes("argumento") || lowerAssunto.includes("argumentação") || lowerAssunto.includes("implicação") || lowerAssunto.includes("validação")) {
      return { discipline: dName, assunto: lowerAssunto.includes("quest") ? "Questões sobre Argumentação" : "Implicação e Argumentação" };
    }
    if (lowerAssunto.includes("conectivo") || lowerAssunto.includes("conjunção") || lowerAssunto.includes("disjunção") || lowerAssunto.includes("condicional") || lowerAssunto.includes("bicondicional")) {
      return { discipline: dName, assunto: "Conectivos Lógicos" };
    }
    if (lowerAssunto.includes("proposição") || lowerAssunto.includes("proposicao")) {
      return { discipline: dName, assunto: "Proposição Lógica" };
    }
    if (lowerAssunto.includes("geometria espacial") || lowerAssunto.includes("cone") || lowerAssunto.includes("cilindro") || lowerAssunto.includes("esfera") || lowerAssunto.includes("cubo") || lowerAssunto.includes("pirâmide")) {
      if (lowerAssunto.includes("cone")) return { discipline: dName, assunto: "Geometria Espacial - Cones" };
      if (lowerAssunto.includes("cilindro")) return { discipline: dName, assunto: "Geometria Espacial - Cilindro" };
      if (lowerAssunto.includes("esfera")) return { discipline: dName, assunto: "Geometria Espacial - Esfera" };
      if (lowerAssunto.includes("cubo") || lowerAssunto.includes("paralelepípedo")) return { discipline: dName, assunto: "Geometria Espacial - Cubo e Paralelepípedo" };
      if (lowerAssunto.includes("pirâmide") || lowerAssunto.includes("piramide")) return { discipline: dName, assunto: "Geometria Espacial - Pirâmides" };
      return { discipline: dName, assunto: "Geometria Plana" };
    }
    if (lowerAssunto.includes("geometria")) {
      return { discipline: dName, assunto: "Geometria Plana" };
    }
    if (lowerAssunto.includes("progressão aritmética") || lowerAssunto.includes("pa")) {
      return { discipline: dName, assunto: "Progressão Aritmética" };
    }
    if (lowerAssunto.includes("progressão geométrica") || lowerAssunto.includes("pg")) {
      return { discipline: dName, assunto: "Progressão Geométrica" };
    }
    if (lowerAssunto.includes("média") || lowerAssunto.includes("moda") || lowerAssunto.includes("mediana")) {
      return { discipline: dName, assunto: lowerAssunto.includes("ponderada") ? "Média Ponderada" : "Média, Moda e Mediana" };
    }
    if (lowerAssunto.includes("variância") || lowerAssunto.includes("desvio padrão") || lowerAssunto.includes("amplitude")) {
      return { discipline: dName, assunto: "Amplitude, Variância e Desvio Padrão" };
    }
    if (lowerAssunto.includes("juro")) {
      return { discipline: dName, assunto: "Juros Simples" };
    }
    if (lowerAssunto.includes("porcentagem") || lowerAssunto.includes("percentual")) {
      return { discipline: dName, assunto: "Porcentagem" };
    }
    if (lowerAssunto.includes("regra de três composta") || lowerAssunto.includes("regra de tres composta")) {
      return { discipline: dName, assunto: "Regra de Três Composta" };
    }
    if (lowerAssunto.includes("regra de três") || lowerAssunto.includes("regra de tres")) {
      return { discipline: dName, assunto: "Regra de Três Simples" };
    }
    if (lowerAssunto.includes("razão") || lowerAssunto.includes("proporção") || lowerAssunto.includes("razao") || lowerAssunto.includes("proporcao")) {
      return { discipline: dName, assunto: "Razão e Proporção" };
    }
    if (lowerAssunto.includes("equação de segundo grau") || lowerAssunto.includes("equacao de segundo grau")) {
      return { discipline: dName, assunto: "Equação de Segundo Grau" };
    }
    if (lowerAssunto.includes("equação de primeiro grau") || lowerAssunto.includes("equacao de primeiro grau")) {
      return { discipline: dName, assunto: "Equação de Primeiro Grau" };
    }
    if (lowerAssunto.includes("sistema de equações") || lowerAssunto.includes("sistemas de equacoes")) {
      return { discipline: dName, assunto: "Sistemas de Equações" };
    }
    if (lowerAssunto.includes("fração") || lowerAssunto.includes("fracao") || lowerAssunto.includes("frações")) {
      return { discipline: dName, assunto: "Frações" };
    }
    if (lowerAssunto.includes("decimal") || lowerAssunto.includes("decimais")) {
      return { discipline: dName, assunto: "Números Decimais" };
    }
    if (lowerAssunto.includes("conjuntos")) {
      return { discipline: dName, assunto: "Conjuntos" };
    }
    if (lowerAssunto.includes("unidade") || lowerAssunto.includes("medida") || lowerAssunto.includes("conversão")) {
      return { discipline: dName, assunto: "Unidades de Medidas" };
    }
    if (lowerAssunto.includes("potência") || lowerAssunto.includes("potenciacao")) {
      return { discipline: dName, assunto: "Potenciação" };
    }
    if (lowerAssunto.includes("raiz") || lowerAssunto.includes("radiciação") || lowerAssunto.includes("radiciacao")) {
      return { discipline: dName, assunto: "Radiciação" };
    }
    if (lowerAssunto.includes("divisibilidade") || lowerAssunto.includes("primo") || lowerAssunto.includes("fatoração") || lowerAssunto.includes("mdc") || lowerAssunto.includes("mmc")) {
      if (lowerAssunto.includes("primo")) return { discipline: dName, assunto: "Números Primos" };
      if (lowerAssunto.includes("fatoração")) return { discipline: dName, assunto: "Fatoração numérica" };
      if (lowerAssunto.includes("mdc")) return { discipline: dName, assunto: "MDC - Máximo Divisor Comum" };
      if (lowerAssunto.includes("mmc")) return { discipline: dName, assunto: "MMC - Mínimo Múltiplo Comum" };
      return { discipline: dName, assunto: "Divisibilidade" };
    }
    return { discipline: dName, assunto: "Proposição Lógica" };
  }

  // Língua Portuguesa (Default fallback for Portuguese items)
  const dPort = "Língua Portuguesa";
  if (lowerAssunto.includes("crase") || lowerAssunto.includes("regência") || lowerAssunto.includes("regencia")) {
    return { discipline: dPort, assunto: lowerAssunto.includes("quest") ? "Questões de Regência e Crase" : "Regência e Crase" };
  }
  if (lowerAssunto.includes("concordância") || lowerAssunto.includes("concordancia")) {
    return { discipline: dPort, assunto: "Concordância Nominal e Concordância Verbal" };
  }
  if (lowerAssunto.includes("ortografia") || lowerAssunto.includes("hífen") || lowerAssunto.includes("acentuação") || lowerAssunto.includes("acentuacao") || lowerAssunto.includes("grafia")) {
    return { discipline: dPort, assunto: lowerAssunto.includes("quest") ? "Questões de Ortografia" : "Ortografia" };
  }
  if (lowerAssunto.includes("pontuação") || lowerAssunto.includes("pontuacao") || lowerAssunto.includes("vírgula") || lowerAssunto.includes("virgula")) {
    return { discipline: dPort, assunto: lowerAssunto.includes("quest") ? "Questões de Pontuação" : "Pontuação" };
  }
  if (lowerAssunto.includes("colocação pronominal") || lowerAssunto.includes("próclise") || lowerAssunto.includes("ênclise") || lowerAssunto.includes("mesóclise")) {
    return { discipline: dPort, assunto: "Colocação Pronominal" };
  }
  if (lowerAssunto.includes("pronome relativo") || lowerAssunto.includes("função do que") || lowerAssunto.includes("função do se") || lowerAssunto.includes("funcoes do que")) {
    return { discipline: dPort, assunto: lowerAssunto.includes("quest") ? "Questões de Funções do Que e do Se" : "Pronomes Relativos e QUE" };
  }
  if (lowerAssunto.includes("pronome")) {
    return { discipline: dPort, assunto: lowerAssunto.includes("quest") ? "Questões de Pronomes" : "Classes Gramaticais e suas funções sintáticas" };
  }
  if (lowerAssunto.includes("verbo") || lowerAssunto.includes("conjugação") || lowerAssunto.includes("tempo verbal")) {
    if (lowerAssunto.includes("voz")) return { discipline: dPort, assunto: "Vozes Verbais e SE" };
    return { discipline: dPort, assunto: lowerAssunto.includes("quest") ? "Questões de Verbos" : "Verbos" };
  }
  if (lowerAssunto.includes("termo") || lowerAssunto.includes("oração") || lowerAssunto.includes("sujeito") || lowerAssunto.includes("predicado") || lowerAssunto.includes("objeto")) {
    return { discipline: dPort, assunto: "Termos da oração" };
  }
  if (lowerAssunto.includes("período composto") || lowerAssunto.includes("periodo composto") || lowerAssunto.includes("coordenada") || lowerAssunto.includes("subordinada")) {
    return { discipline: dPort, assunto: lowerAssunto.includes("quest") ? "Questões de Orações Coordenadas e Subordinadas" : "Período Composto / Orações Coordenadas e Subordinadas" };
  }
  if (lowerAssunto.includes("figura")) {
    return { discipline: dPort, assunto: "Figuras de linguagem" };
  }
  if (lowerAssunto.includes("função da linguagem") || lowerAssunto.includes("discurso") || lowerAssunto.includes("variação")) {
    return { discipline: dPort, assunto: "Funções da linguagem, tipos de discurso e variações linguísticas" };
  }
  if (lowerAssunto.includes("gênero") || lowerAssunto.includes("genero") || lowerAssunto.includes("tipologia") || lowerAssunto.includes("tipo textual")) {
    return { discipline: dPort, assunto: "Tipos e gêneros textuais" };
  }
  if (lowerAssunto.includes("interpretação") || lowerAssunto.includes("interpretacao") || lowerAssunto.includes("compreensão") || lowerAssunto.includes("compreensao") || lowerAssunto.includes("texto")) {
    return { discipline: dPort, assunto: lowerAssunto.includes("quest") ? "Questões de Interpretação de texto e tipologia textual" : "Interpretação de texto" };
  }
  if (lowerAssunto.includes("coesão") || lowerAssunto.includes("coerência") || lowerAssunto.includes("denotação") || lowerAssunto.includes("conotação") || lowerAssunto.includes("intertextualidade")) {
    return { discipline: dPort, assunto: "Contexto, coesão, denotação, conotação e intertextualidade" };
  }
  if (lowerAssunto.includes("morfologia") || lowerAssunto.includes("classe")) {
    return { discipline: dPort, assunto: lowerAssunto.includes("quest") ? "Questões de Classes de Palavras" : "Classes Gramaticais e suas funções sintáticas" };
  }

  return { discipline: dPort, assunto: "Ortografia" };
}
