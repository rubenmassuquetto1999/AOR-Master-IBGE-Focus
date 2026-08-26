export interface DisciplineInfo {
  id: string;
  name: string;
  emoji: string;
  description: string;
  topics: string[];
}

export const DISCIPLINE_TOPICS: Record<string, string[]> = {
  "Língua Portuguesa": [
    "Ortografia",
    "Questões de Ortografia",
    "Classes Gramaticais e suas funções sintáticas",
    "Questões de Classes de Palavras",
    "Verbos",
    "Questões de Verbos",
    "Termos da oração",
    "Concordância Nominal e Concordância Verbal - Parte I",
    "Concordância Nominal e Concordância Verbal - Parte II",
    "Questões de Termos da oração , Concordância Nominal e Concordância Verbal",
    "Colocação Pronominal",
    "Questões de Pronomes",
    "Regência e Crase",
    "Questões de Regência e Crase",
    "Vozes Verbais e SE",
    "Pronomes Relativos e QUE",
    "Questões de Funções do Que e do Se",
    "Período Composto/Orações Coordenadas e Subordinadas",
    "Questões de Orações Coordenadas e Subordinadas",
    "Pontuação",
    "Questões de Pontuação",
    "Interpretação de texto",
    "Contexto, coesão, denotação, conotação e intertextualidade",
    "Domínio da temática dos parágrafos",
    "Tipos e gêneros textuais",
    "Gêneros textuais e os tipos de coesão",
    "Figuras de linguagem | Parte I",
    "Figuras de linguagem | Parte II",
    "Funções da linguagem, tipos de discurso e variações linguísticas",
    "Questões de Interpretação de texto e tipologia textual"
  ],
  "Noções de Administração": [
    "Administração| Papeis e Habilidades do Administrador - Parte I",
    "Administração| Papeis e Habilidades do Administrador - Parte II",
    "Administração| Processo Organizacional - Parte III",
    "Administração| Processo Organizacional - Parte IV",
    "Administração| Liderança - Parte V",
    "Administração| Liderança - Parte VI",
    "Administração| Liderança - Parte VII",
    "Administração| Motivação - Parte VIII",
    "Administração| Motivação - Parte IX",
    "Administração| Grupos e Equipes - Parte X",
    "Administração| Comunicação Organizacional - Parte XI",
    "Administração| Gestão de Qualidade - Parte XII",
    "Administração| Gestão de Qualidade - Parte XIII",
    "Questões de Administração - Parte I",
    "Questões de Administração - Parte II",
    "Questões de Administração - Parte III"
  ],
  "Noções Básicas de Informática": [
    "Hardware | Parte I",
    "Hardware | Parte II",
    "Hardware | Parte III",
    "Hardware | Parte IV",
    "Questões sobre Hardware",
    "Software",
    "Questões sobre Software",
    "Sistema Operacional Windows 11 | Parte I",
    "Sistema Operacional Windows 11 | Parte II",
    "Sistema Operacional Windows 11 | Parte III",
    "Questões de Sistema Operacional Windows 11",
    "Gerenciamento, arquivos e pastas | Parte I",
    "Gerenciamento, arquivos e pastas | Parte II",
    "Gerenciamento, arquivos e pastas | Parte III",
    "Gerenciamento, arquivos e pastas | Revisão",
    "Gerenciamento, arquivos e pastas - Questões | Parte I",
    "Gerenciamento, arquivos e pastas - Questões | Parte II",
    "Sistemas operacionais: Android | Parte I",
    "Sistemas operacionais: Android | Parte II",
    "Microsoft Office 365 - Excel - Parte I",
    "Microsoft Office 365 - Excel - Parte II",
    "Microsoft Office 365 - Excel - Parte III",
    "Microsoft Office 365 - Excel - Parte IV",
    "Questões de Excel Microsoft 365"
  ],
  "Raciocínio Lógico Quantitativo": [
    "Análise de Conteúdo - Raciocínio Lógico Quantitativo",
    "Conjuntos Numéricos | Parte I",
    "Conjuntos Numéricos | Parte II",
    "Números Naturais | Parte I",
    "Números Naturais | Parte II",
    "Números Inteiros | Parte I",
    "Números Inteiros | Parte II",
    "Números Racionais | Parte I",
    "Números Racionais | Parte II",
    "Números Reais | Parte I",
    "Números Reais | Parte II",
    "Números Reais | Parte III",
    "Divisibilidade | Parte I",
    "Divisibilidade | Parte II",
    "Divisibilidade | Parte III",
    "Números Primos",
    "Fatoração numérica",
    "Quantidade de Divisores",
    "MDC - Máximo Divisor Comum",
    "MMC - Mínimo Múltiplo Comum",
    "Frações | Parte I",
    "Frações | Parte II",
    "Frações | Parte III",
    "Números Decimais",
    "Expressões Algébricas | Parte I",
    "Expressões Algébricas | Parte II",
    "Produtos Notáveis | Parte I",
    "Produtos Notáveis | Parte II",
    "Sistemas de Equações | Parte I",
    "Sistemas de Equações | Parte II",
    "Sistemas de Equações | Parte III",
    "Equação de Primeiro Grau | Parte I",
    "Equação de Primeiro Grau | Parte II",
    "Equação de Segundo Grau | Parte I",
    "Equação de Segundo Grau | Parte II",
    "Razão e Proporção | Parte I",
    "Razão e Proporção | Parte II",
    "Razão e Proporção | Parte III",
    "Razão e Proporção | Parte IV",
    "Razão e Proporção | Parte V",
    "Regra de Três Simples | Parte I",
    "Regra de Três Simples | Parte II",
    "Regra de Três Composta | Parte I",
    "Regra de Três Composta | Parte II",
    "Porcentagem | Parte I",
    "Porcentagem | Parte II",
    "Porcentagem | Parte III",
    "Juros Simples | Parte I",
    "Juros Simples | Parte II",
    "Potenciação | Parte I",
    "Potenciação | Parte II",
    "Potenciação | Parte III",
    "Radiciação | Parte I",
    "Radiciação | Parte II",
    "Unidades de Medidas | Parte I",
    "Unidades de Medidas | Parte II",
    "Unidades de Medidas | Parte IV",
    "Unidades de Medidas | Parte III",
    "Unidades de Medidas | Parte V",
    "Unidades de Medidas | Parte VI",
    "Conjuntos | Parte I",
    "Conjuntos | Parte II",
    "Função de Primeiro Grau | Parte I",
    "Função de Primeiro Grau | Parte II",
    "Função de Segundo Grau | Parte I",
    "Função de Segundo Grau | Parte III",
    "Função de Segundo Grau | Parte II",
    "Geometria Plana | Parte I",
    "Geometria Plana | Parte II",
    "Geometria Plana | Parte III",
    "Geometria Plana | Parte IV",
    "Geometria Plana | Parte V",
    "Geometria Plana | Parte VI",
    "Geometria Plana | Parte VII",
    "Geometria Plana | Parte VIII",
    "Geometria Plana | Parte IX",
    "Geometria Espacial - Cones",
    "Geometria Espacial - Cilindro",
    "Geometria Espacial - Esfera",
    "Geometria Espacial - Cubo e Paralelepípedo",
    "Geometria Espacial - Pirâmides",
    "Progressão Aritmética | Parte I",
    "Progressão Aritmética | Parte II",
    "Progressão Aritmética | Parte III",
    "Progressão Geométrica | Parte I",
    "Progressão Geométrica | Parte II",
    "Progressão Geométrica | Parte III",
    "Média, Moda e Mediana",
    "Média Ponderada",
    "Amplitude, Variância e Desvio Padrão",
    "Proposição Lógica | Parte I",
    "Proposição Lógica | Parte II",
    "Proposição Lógica | Parte III",
    "Conectivos Lógicos | Parte I",
    "Conectivos Lógicos | Parte II",
    "Conectivos Lógicos | Parte III",
    "Conectivos Lógicos | Parte IV",
    "Conectivos Lógicos | Parte V",
    "Conectivos Lógicos | Parte VI",
    "Conectivos Lógicos | Parte VII",
    "Conectivos Lógicos | Parte VIII",
    "Conectivos Lógicos | Parte IX",
    "Conectivos Lógicos | Parte X",
    "Conectivos Lógicos | Parte XI",
    "Conectivos Lógicos | Parte XII",
    "Conectivos Lógicos | Parte XIII",
    "Tabela Verdade | Parte I",
    "Tabela Verdade | Parte II",
    "Tabela Verdade | Parte III",
    "Tabela Verdade | Parte IV",
    "Tabela Verdade | Parte V",
    "Tautologia, contradição e contingencia | Parte I",
    "Tautologia, contradição e contingencia | Parte II",
    "Tautologia, contradição e contingencia | Parte III",
    "Equivalência e Negação | Parte I",
    "Equivalência e Negação | Parte II",
    "Equivalência e Negação | Parte III",
    "Equivalência e Negação | Parte IV",
    "Equivalência e Negação | Parte V",
    "Equivalência e Negação | Parte VI",
    "Equivalência e Negação | Parte VII",
    "Equivalência e Negação | Parte VIII",
    "Equivalência e Negação | Parte IX",
    "Diagrama Lógico e Quantificadores | Parte I",
    "Diagrama Lógico e Quantificadores | Parte II",
    "Diagrama Lógico e Quantificadores | Parte III",
    "Diagrama Lógico e Quantificadores | Parte IV",
    "Diagrama Lógico e Quantificadores | Parte V",
    "Diagrama Lógico e Quantificadores | Parte VI",
    "Diagrama Lógico e Quantificadores | Parte VII",
    "Diagrama Lógico e Quantificadores | Parte VIII",
    "Implicação e Argumentação | Parte I",
    "Implicação e Argumentação | Parte II",
    "Implicação e Argumentação | Parte III",
    "Implicação e Argumentação | Parte IV",
    "Implicação e Argumentação | Parte V",
    "Implicação e Argumentação | Parte VI",
    "Implicação e Argumentação | Parte VII",
    "Implicação e Argumentação | Parte VIII",
    "Implicação e Argumentação | Parte IX",
    "Implicação e Argumentação | Parte X",
    "Implicação e Argumentação | Parte XI",
    "Implicação e Argumentação | Parte XII",
    "Implicação e Argumentação | Parte XIII",
    "Implicação e Argumentação | Parte XIV",
    "Implicação e Argumentação | Parte XV",
    "Implicação e Argumentação | Parte XVI",
    "Implicação e Argumentação | Parte XVII",
    "Implicação e Argumentação | Parte XVIII",
    "Implicação e Argumentação | Parte IXX",
    "Implicação e Argumentação | Parte XX",
    "Implicação e Argumentação | Parte XXI",
    "Questões sobre Argumentação | Parte I",
    "Questões sobre Argumentação | Parte II",
    "Questões sobre Argumentação | Parte III",
    "Questões sobre Argumentação | Parte IV",
    "Questões sobre Argumentação | Parte V",
    "Questões sobre Argumentação | Parte VI",
    "Questões sobre Argumentação | Parte VII",
    "Questões sobre Argumentação | Parte VIII",
    "Estrutura lógica de relações arbitrárias entre pessoas, lugares, objetos ou eventos fictícios; deduzir novas informações das relações fornecidas e avaliar as condições usadas para estabelecer a estrutura daquelas relações",
    "Associação Lógica | Parte I",
    "Associação Lógica | Parte II",
    "Associação Lógica | Parte III",
    "Associação Lógica | Parte IV",
    "Questões de Associação Lógica | Parte I",
    "Questões de Associação Lógica | Parte II"
  ]
};

export const DISCIPLINES_LIST = Object.keys(DISCIPLINE_TOPICS);

// Reverse map: Topic -> Discipline
const topicToDisciplineMap: Record<string, string> = {};
Object.entries(DISCIPLINE_TOPICS).forEach(([discipline, topics]) => {
  topics.forEach((t) => {
    topicToDisciplineMap[t] = discipline;
  });
});

export function getDisciplineForTopic(topic: string): string {
  if (topicToDisciplineMap[topic]) {
    return topicToDisciplineMap[topic];
  }
  // Try case-insensitive or partial match
  const lower = (topic || "").toLowerCase();
  for (const [discipline, topics] of Object.entries(DISCIPLINE_TOPICS)) {
    for (const t of topics) {
      if (t.toLowerCase() === lower) {
        return discipline;
      }
    }
  }

  // Fallback detection
  if (lower.includes("portug") || lower.includes("ortografia") || lower.includes("verbo") || lower.includes("crase") || lower.includes("sintaxe") || lower.includes("texto")) {
    return "Língua Portuguesa";
  }
  if (lower.includes("administra") || lower.includes("qualidade") || lower.includes("liderança") || lower.includes("motivação") || lower.includes("organiza")) {
    return "Noções de Administração";
  }
  if (lower.includes("informát") || lower.includes("hardware") || lower.includes("software") || lower.includes("windows") || lower.includes("excel") || lower.includes("pasta") || lower.includes("android")) {
    return "Noções Básicas de Informática";
  }
  if (lower.includes("lógic") || lower.includes("matemát") || lower.includes("número") || lower.includes("equação") || lower.includes("tabela verdade") || lower.includes("conectiv") || lower.includes("conjunto")) {
    return "Raciocínio Lógico Quantitativo";
  }

  return "Língua Portuguesa";
}

export function getTopicsForDiscipline(discipline: string): string[] {
  return DISCIPLINE_TOPICS[discipline] || [];
}

/**
 * Intelligent topic classifier: Matches any question to the most accurate official topic.
 */
export function mapQuestionToOfficialTopic(assunto: string, text: string = ""): string {
  if (topicToDisciplineMap[assunto]) {
    return assunto;
  }

  const combined = (assunto + " " + text).toLowerCase();

  // 1. Língua Portuguesa
  if (combined.includes("ortografia") || combined.includes("acentua") || combined.includes("hífen") || combined.includes("grafia")) {
    return "Questões de Ortografia";
  }
  if (combined.includes("concordância") || combined.includes("concordancia")) {
    return "Questões de Termos da oração , Concordância Nominal e Concordância Verbal";
  }
  if (combined.includes("regência") || combined.includes("regencia") || combined.includes("crase")) {
    return "Questões de Regência e Crase";
  }
  if (combined.includes("funções do que") || combined.includes("funcoes do que") || combined.includes("funções do se") || combined.includes("partícula se") || combined.includes("funcao do se")) {
    return "Questões de Funções do Que e do Se";
  }
  if (combined.includes("pronom") || combined.includes("colocação pronominal")) {
    return "Questões de Pronomes";
  }
  if (combined.includes("verbo") || combined.includes("vozes verbais")) {
    return "Questões de Verbos";
  }
  if (combined.includes("pontuação") || combined.includes("pontuacao") || combined.includes("vírgula")) {
    return "Questões de Pontuação";
  }
  if (combined.includes("oração") || combined.includes("oracao") || combined.includes("período composto") || combined.includes("coordenada") || combined.includes("subordinada")) {
    return "Questões de Orações Coordenadas e Subordinadas";
  }
  if (combined.includes("classe") || combined.includes("substantivo") || combined.includes("adjetivo") || combined.includes("advérbio")) {
    return "Questões de Classes de Palavras";
  }
  if (combined.includes("texto") || combined.includes("interpretação") || combined.includes("compreensão") || combined.includes("gênero") || combined.includes("tipologia")) {
    return "Questões de Interpretação de texto e tipologia textual";
  }
  if (combined.includes("figura de linguagem") || combined.includes("metáfora")) {
    return "Figuras de linguagem | Parte I";
  }

  // 2. Noções de Administração
  if (combined.includes("administra") || combined.includes("qualidade") || combined.includes("5s") || combined.includes("pdca") || combined.includes("brainstorming") || combined.includes("ishikawa") || combined.includes("gut")) {
    if (combined.includes("qualidade") || combined.includes("5s") || combined.includes("pdca") || combined.includes("ishikawa") || combined.includes("gut")) {
      return "Administração| Gestão de Qualidade - Parte XII";
    }
    if (combined.includes("lideran")) {
      return "Administração| Liderança - Parte V";
    }
    if (combined.includes("motiva")) {
      return "Administração| Motivação - Parte VIII";
    }
    if (combined.includes("comunica")) {
      return "Administração| Comunicação Organizacional - Parte XI";
    }
    if (combined.includes("equipe") || combined.includes("grupo")) {
      return "Administração| Grupos e Equipes - Parte X";
    }
    if (combined.includes("processo organizacional") || combined.includes("planejamento") || combined.includes("organização") || combined.includes("direção") || combined.includes("controle") || combined.includes("podc")) {
      return "Administração| Processo Organizacional - Parte III";
    }
    if (combined.includes("papel") || combined.includes("habilidade") || combined.includes("mintzberg") || combined.includes("katz")) {
      return "Administração| Papeis e Habilidades do Administrador - Parte I";
    }
    return "Questões de Administração - Parte I";
  }

  // 3. Noções Básicas de Informática
  if (combined.includes("excel") || combined.includes("planilha") || combined.includes("fórmula") || combined.includes("soma") || combined.includes("procv") || combined.includes("se(")) {
    return "Questões de Excel Microsoft 365";
  }
  if (combined.includes("windows") || combined.includes("desktop") || combined.includes("menu iniciar") || combined.includes("atalho")) {
    return "Questões de Sistema Operacional Windows 11";
  }
  if (combined.includes("pasta") || combined.includes("arquivo") || combined.includes("gerenciamento") || combined.includes("extensão") || combined.includes(".pdf") || combined.includes(".docx")) {
    return "Gerenciamento, arquivos e pastas - Questões | Parte I";
  }
  if (combined.includes("hardware") || combined.includes("cpu") || combined.includes("ram") || combined.includes("ssd") || combined.includes("memória") || combined.includes("periférico")) {
    return "Questões sobre Hardware";
  }
  if (combined.includes("software") || combined.includes("navegador") || combined.includes("antivírus") || combined.includes("firewall") || combined.includes("wi-fi") || combined.includes("4g") || combined.includes("nuvem")) {
    return "Questões sobre Software";
  }
  if (combined.includes("android") || combined.includes("smartphone")) {
    return "Sistemas operacionais: Android | Parte I";
  }

  // 4. Raciocínio Lógico Quantitativo
  if (combined.includes("associação") || combined.includes("associacao") || combined.includes("relacionar")) {
    return "Questões de Associação Lógica | Parte I";
  }
  if (combined.includes("argumentação") || combined.includes("argumento") || combined.includes("silogismo") || combined.includes("validade")) {
    return "Questões sobre Argumentação | Parte I";
  }
  if (combined.includes("tabela verdade")) {
    return "Tabela Verdade | Parte I";
  }
  if (combined.includes("tautologia") || combined.includes("contradição") || combined.includes("contingência")) {
    return "Tautologia, contradição e contingencia | Parte I";
  }
  if (combined.includes("equivalência") || combined.includes("equivalencia") || combined.includes("negação") || combined.includes("negacao") || combined.includes("de morgan")) {
    return "Equivalência e Negação | Parte I";
  }
  if (combined.includes("quantificador") || combined.includes("todo") || combined.includes("algum") || combined.includes("nenhum") || combined.includes("diagrama")) {
    return "Diagrama Lógico e Quantificadores | Parte I";
  }
  if (combined.includes("conectiv") || combined.includes("conjunção") || combined.includes("disjunção") || combined.includes("condicional") || combined.includes("bicondicional")) {
    return "Conectivos Lógicos | Parte I";
  }
  if (combined.includes("proposição") || combined.includes("proposicao")) {
    return "Proposição Lógica | Parte I";
  }
  if (combined.includes("porcentagem") || combined.includes("porcento") || combined.includes("%")) {
    return "Porcentagem | Parte I";
  }
  if (combined.includes("juros")) {
    return "Juros Simples | Parte I";
  }
  if (combined.includes("regra de três") || combined.includes("regra de tres")) {
    return combined.includes("composta") ? "Regra de Três Composta | Parte I" : "Regra de Três Simples | Parte I";
  }
  if (combined.includes("razão e proporção") || combined.includes("razao e proporcao")) {
    return "Razão e Proporção | Parte I";
  }
  if (combined.includes("conjunto") || combined.includes("união") || combined.includes("interseção") || combined.includes("venn")) {
    return "Conjuntos | Parte I";
  }
  if (combined.includes("geometria") || combined.includes("área") || combined.includes("perímetro") || combined.includes("volume") || combined.includes("triângulo") || combined.includes("retângulo")) {
    return "Geometria Plana | Parte I";
  }
  if (combined.includes("progressão") || combined.includes("pa") || combined.includes("pg")) {
    return combined.includes("geométrica") || combined.includes("pg") ? "Progressão Geométrica | Parte I" : "Progressão Aritmética | Parte I";
  }
  if (combined.includes("fração") || combined.includes("fracoes")) {
    return "Frações | Parte I";
  }
  if (combined.includes("mmc") || combined.includes("mdc")) {
    return combined.includes("mmc") ? "MMC - Mínimo Múltiplo Comum" : "MDC - Máximo Divisor Comum";
  }
  if (combined.includes("divisibilidade") || combined.includes("primo") || combined.includes("divisor")) {
    return "Divisibilidade | Parte I";
  }
  if (combined.includes("equação") || combined.includes("equacao") || combined.includes("sistema")) {
    return "Equação de Primeiro Grau | Parte I";
  }
  if (combined.includes("unidade") || combined.includes("medida") || combined.includes("metro") || combined.includes("litro") || combined.includes("kg")) {
    return "Unidades de Medidas | Parte I";
  }
  if (combined.includes("média") || combined.includes("mediana") || combined.includes("moda") || combined.includes("desvio")) {
    return "Média, Moda e Mediana";
  }

  return "Análise de Conteúdo - Raciocínio Lógico Quantitativo";
}
