import { Question } from "../types";

export const questionsNewBatch: Question[] = [
  // =========================================================================
  // BLOCO 1: RACIOCÍNIO LÓGICO E MATEMÁTICA (Questões 20 a 34)
  // =========================================================================
  {
    id: "rlm_batch2_q20",
    text: "Em uma auditoria, adotou-se a regra:\n\"Se um relatório apresenta inconsistências, então ele deve ser revisado.\"\nQual é a negação lógica correta dessa afirmação?",
    options: [
      "A) Um relatório não apresenta inconsistências e é revisado.",
      "B) Um relatório apresenta inconsistências ou é revisado.",
      "C) Um relatório apresenta inconsistências e não é revisado.",
      "D) Se o relatório é revisado, então não apresenta inconsistências.",
      "E) Nenhum relatório com inconsistências é revisado."
    ],
    correctIndex: 2,
    explanations: [
      "Incorreta. Nega o antecedente e mantém o consequente.",
      "Incorreta. Usa disjunção (ou), não correspondendo à negação da condicional.",
      "Correta. A negação de uma condicional (P → Q) é dada pela conjunção do antecedente com a negação do consequente: P ∧ ~Q (regra do MANE: Mantém a primeira E Nega a segunda). Logo: 'Um relatório apresenta inconsistências E não é revisado'.",
      "Incorreta. É a contrapositiva invertida, mantendo a estrutura condicional.",
      "Incorreta. É uma proposição categórica universal negativa, não a negação de uma condicional."
    ],
    generalExplanation: "Para negar uma proposição condicional do tipo 'Se P, então Q', aplica-se a regra P ∧ ~Q (MANE: Mantém o antecedente P e Nega o consequente Q através do conectivo 'E'). Portanto: 'Um relatório apresenta inconsistências E não é revisado'.",
    banca: "IBGE / RLM Concursos",
    ano: 2024,
    assunto: "Raciocínio Lógico: Negação da Condicional",
    nivelSuperior: false
  },
  {
    id: "rlm_batch2_q21",
    text: "A negação de \"Se luto, não perco.\" é:",
    options: [
      "A) Não luto e perco.",
      "B) Luto e perco.",
      "C) Se luto, posso perder.",
      "D) Se não luto, perco.",
      "E) Se não luto, não perco."
    ],
    correctIndex: 1,
    explanations: [
      "Incorreta. Nega o antecedente e o consequente simultaneamente.",
      "Correta. A proposição é P → Q, onde P = 'luto' e Q = 'não perco'. A negação é P ∧ ~Q: Mantém P ('Luto'), troca por 'E', e nega Q (a negação de 'não perco' é 'perco'). Portanto: 'Luto E perco'.",
      "Incorreta. Mantém a estrutura condicional com verbo modal.",
      "Incorreta. Nega o antecedente mantendo a condicional.",
      "Incorreta. Nega ambos os termos mantendo a estrutura condicional."
    ],
    generalExplanation: "A negação da condicional 'Se P, então Q' é 'P e não Q'. Como Q é 'não perco', sua negação (~Q) é 'perco'. Logo, obtém-se: 'Luto e perco'.",
    banca: "IBGE / RLM Concursos",
    ano: 2024,
    assunto: "Raciocínio Lógico: Negação da Condicional",
    nivelSuperior: false
  },
  {
    id: "rlm_batch2_q22",
    text: "Considere a seguinte afirmação:\n\"Se Fulano fez o concurso, então ele foi aprovado.\"\nAssinale a alternativa que contém uma negação lógica para a afirmação apresentada.",
    options: [
      "A) Se Fulano fez o concurso, então ele não foi aprovado.",
      "B) Se Fulano não foi aprovado, então ele não fez o concurso.",
      "C) Se Fulano não fez o concurso, então ele não foi aprovado.",
      "D) Fulano não fez o concurso e ele não foi aprovado.",
      "E) Fulano fez o concurso e ele não foi aprovado."
    ],
    correctIndex: 4,
    explanations: [
      "Incorreta. Mantém a condicional, apenas negando o consequente.",
      "Incorreta. É a contrapositiva (~Q → ~P), que é uma equivalência lógica, não uma negação.",
      "Incorreta. Nega ambos os termos em formato condicional.",
      "Incorreta. Nega o antecedente e o consequente com conjunção.",
      "Correta. Regra do MANE: Mantém o antecedente ('Fulano fez o concurso'), coloca o conectivo 'E', e Nega o consequente ('não foi aprovado'). Logo: 'Fulano fez o concurso e ele não foi aprovado'."
    ],
    generalExplanation: "A negação de P → Q é P ∧ ~Q. Mantém o primeiro termo exatamente como está e junta com a negação do segundo: 'Fulano fez o concurso E ele não foi aprovado'.",
    banca: "IBGE / RLM Concursos",
    ano: 2024,
    assunto: "Raciocínio Lógico: Negação da Condicional",
    nivelSuperior: false
  },
  {
    id: "rlm_batch2_q23",
    text: "Considere a seguinte proposição lógica: \"Se João é servidor público, então ele tem direito a férias.\"\nCom base na proposição acima, assinale a alternativa que corresponde à sua negação:",
    options: [
      "A) João é servidor público e não tem direito a férias.",
      "B) João é servidor público e tem direito a férias.",
      "C) João é servidor público ou não tem direito a férias.",
      "D) João não é servidor público e tem direito a férias.",
      "E) João não é servidor público ou não tem direito a férias."
    ],
    correctIndex: 0,
    explanations: [
      "Correta. Mantém o antecedente ('João é servidor público') e nega o consequente ('não tem direito a férias') ligados por conjunção ('E').",
      "Incorreta. Mantém ambos os termos afirmados com conjunção.",
      "Incorreta. Utiliza disjunção ('ou') em vez da conjunção ('e').",
      "Incorreta. Nega o antecedente e mantém o consequente.",
      "Incorreta. Nega ambos com disjunção (equivalência de negação errônea)."
    ],
    generalExplanation: "A negação da proposição condicional (P → Q) é formulada como P ∧ ~Q. Logo: 'João é servidor público E não tem direito a férias'.",
    banca: "IBGE / RLM Concursos",
    ano: 2024,
    assunto: "Raciocínio Lógico: Negação da Condicional",
    nivelSuperior: false
  },
  {
    id: "rlm_batch2_q24",
    text: "Assinale a alternativa que corresponde à proposição logicamente equivalente à proposição abaixo:\n\"Se o candidato estuda, então ele é aprovado\".",
    options: [
      "A) O candidato estuda ou é aprovado.",
      "B) O candidato é aprovado somente se ele não estuda.",
      "C) O candidato não estuda e não é aprovado.",
      "D) O candidato estuda se, e somente se, é aprovado.",
      "E) Se o candidato não é aprovado, então ele não estuda."
    ],
    correctIndex: 4,
    explanations: [
      "Incorreta. Pela regra NEyMA, a equivalência por disjunção seria '~P ou Q' (O candidato não estuda ou é aprovado).",
      "Incorreta. Inverte e altera o sentido lógico da condicional.",
      "Incorreta. A conjunção de negações não é equivalente à condicional.",
      "Incorreta. A bicondicional (se e somente se) impõe dupla implicação, o que não ocorre na condicional simples.",
      "Correta. A principal equivalência da condicional é a contrapositiva: P → Q ≡ ~Q → ~P. Inverte-se a ordem dos termos e nega-se ambos: 'Se o candidato não é aprovado, então ele não estuda'."
    ],
    generalExplanation: "A equivalência lógica pela regra da contrapositiva inverte e nega ambas as proposições: (P → Q) ≡ (~Q → ~P). Logo, 'Se o candidato não é aprovado, então ele não estuda'.",
    banca: "IBGE / RLM Concursos",
    ano: 2024,
    assunto: "Raciocínio Lógico: Equivalência da Condicional",
    nivelSuperior: false
  },
  {
    id: "rlm_batch2_q25",
    text: "Considere verdadeira a afirmação:\n\"Se tomo café, não durmo.\"\nAnalise as afirmações a seguir como consequência lógica da afirmação dada:\nI. Se dormi então não tomei café.\nII. Se não tomo café então durmo.\nIII. Se não dormi então tomei café.\n\nDecorre(m) logicamente da afirmação dada:",
    options: [
      "A) apenas a I.",
      "B) apenas a II.",
      "C) apenas as II e III.",
      "D) apenas as I e III.",
      "E) I, II e III."
    ],
    correctIndex: 0,
    explanations: [
      "Correta. A proposição dada é P → Q ('Se tomo café [P], então não durmo [Q]'). A contrapositiva válida é ~Q → ~P. Como Q = 'não durmo', ~Q = 'dormi' (ou durmo); e ~P = 'não tomei café'. Logo: 'Se dormi, então não tomei café' (I) é a única equivalência logicamente válida.",
      "Incorreta. A afirmativa II comete a falácia da negação do antecedente (~P → ~Q).",
      "Incorreta. Ambas II e III são falácias formais da lógica sentencial.",
      "Incorreta. A afirmativa III comete a falácia da afirmação do consequente (Q → P).",
      "Incorreta. Apenas a proposição I é decorrência lógica estrita."
    ],
    generalExplanation: "Dada a condicional P → Q ('Se tomo café, não durmo'), sua única equivalência imediata na forma condicional é a contrapositiva ~Q → ~P ('Se durmo, então não tomei café'). As demais alternativas incorrem em falácias de inversão ou negação sem inversão.",
    banca: "IBGE / RLM Concursos",
    ano: 2024,
    assunto: "Raciocínio Lógico: Equivalência da Condicional",
    nivelSuperior: false
  },
  {
    id: "rlm_batch2_q26",
    text: "Assinale a alternativa que apresenta uma proposição equivalente a \"Se George é pontual, então Amanda é meticulosa\".",
    options: [
      "A) Se Amanda não é meticulosa, então George não é pontual.",
      "B) Se Amanda é meticulosa, então George é pontual.",
      "C) Se George não é pontual, então Amanda não é meticulosa.",
      "D) Se George é pontual, então Amanda não é meticulosa.",
      "E) Se Amanda é meticulosa, então George não é pontual."
    ],
    correctIndex: 0,
    explanations: [
      "Correta. Pela contrapositiva (P → Q ≡ ~Q → ~P), nega-se o consequente e coloca-o como antecedente, e nega-se o antecedente colocando-o como consequente: 'Se Amanda não é meticulosa, então George não é pontual'.",
      "Incorreta. Apenas inverte os termos sem negar (falácia da afirmação do consequente).",
      "Incorreta. Apenas nega os termos sem inverter a ordem (falácia da negação do antecedente).",
      "Incorreta. Mantém o antecedente e nega o consequente (negação parcial incorreta).",
      "Incorreta. Inverte os termos negando apenas um deles."
    ],
    generalExplanation: "A contrapositiva de uma condicional P → Q é sempre equivalente a ~Q → ~P. Portanto, 'Se Amanda não é meticulosa, então George não é pontual'.",
    banca: "IBGE / RLM Concursos",
    ano: 2024,
    assunto: "Raciocínio Lógico: Equivalência da Condicional",
    nivelSuperior: false
  },
  {
    id: "rlm_batch2_q27",
    text: "Considere verdadeira a seguinte proposição:\n\"Se hoje é terça-feira, então hoje eu não trabalho.\"\nEssa proposição é equivalente à proposição:",
    options: [
      "A) \"Se hoje não é terça-feira, então hoje eu trabalho.\"",
      "B) \"Se hoje não é terça-feira, então hoje eu não trabalho.\"",
      "C) \"Se hoje eu não trabalho, então hoje é terça-feira.\"",
      "D) \"Se hoje eu trabalho, então hoje não é terça-feira.\"",
      "E) \"Hoje é terça-feira e hoje eu não trabalho.\""
    ],
    correctIndex: 3,
    explanations: [
      "Incorreta. Nega ambos sem inverter (falácia da negação do antecedente).",
      "Incorreta. Nega apenas o antecedente mantendo a consequência.",
      "Incorreta. Apenas inverte a ordem sem negar os termos.",
      "Correta. Pela contrapositiva: P = 'hoje é terça-feira', Q = 'hoje eu não trabalho'. A contrapositiva ~Q → ~P resulta em: 'Se hoje eu trabalho (~Q), então hoje não é terça-feira (~P)'.",
      "Incorreta. Conjunção não é logicamente equivalente a uma condicional."
    ],
    generalExplanation: "Aplicando a regra da contrapositiva (P → Q ≡ ~Q → ~P): a negação de 'não trabalho' é 'trabalho' e a negação de 'hoje é terça-feira' é 'hoje não é terça-feira'. Invertendo a ordem: 'Se hoje eu trabalho, então hoje não é terça-feira'.",
    banca: "IBGE / RLM Concursos",
    ano: 2024,
    assunto: "Raciocínio Lógico: Equivalência da Condicional",
    nivelSuperior: false
  },
  {
    id: "rlm_batch2_q28",
    text: "Considere a seguinte afirmação:\n\"Se estou participando deste concurso, então tenho o Ensino Superior completo.\"\nAssinale a alternativa que contém uma afirmação logicamente equivalente à afirmação apresentada.",
    options: [
      "A) Estou participando deste concurso e não tenho o Ensino Superior completo.",
      "B) Não estou participando deste concurso e não tenho o Ensino Superior completo.",
      "C) Estou participando deste concurso e tenho o Ensino Superior completo.",
      "D) Se não tenho o Ensino Superior completo, então não estou participando deste concurso.",
      "E) Se tenho o Ensino Superior completo, então estou participando deste concurso."
    ],
    correctIndex: 3,
    explanations: [
      "Incorreta. Esta é a negação lógica da afirmação (P ∧ ~Q), e não uma equivalência.",
      "Incorreta. Conjunção de duas negações não equivale à implicação.",
      "Incorreta. Conjunção afirmativa não equivale à condicional.",
      "Correta. Aplicação direta da contrapositiva (P → Q ≡ ~Q → ~P): 'Se não tenho o Ensino Superior completo, então não estou participando deste concurso'.",
      "Incorreta. Inverte a ordem sem negar (recíproca, que não é equivalente)."
    ],
    generalExplanation: "A contrapositiva inverte e nega ambas as sentenças: 'Se não tenho o Ensino Superior completo, então não estou participando deste concurso'.",
    banca: "IBGE / RLM Concursos",
    ano: 2024,
    assunto: "Raciocínio Lógico: Equivalência da Condicional",
    nivelSuperior: false
  },
  {
    id: "rlm_batch2_q29",
    text: "Considerando a proposição P: \"Não prometo que você voltará, e, se voltar, não será o mesmo.\", julgue o item seguinte, em relação a aspectos da lógica sentencial dessa proposição:\n\nA proposição P é equivalente a \"Não prometo que você voltará, e, se você for o mesmo, não voltará.\"",
    options: [
      "A) Certo",
      "B) Errado"
    ],
    correctIndex: 0,
    explanations: [
      "Correta. A primeira parte da conjunção ('Não prometo que você voltará') foi mantida idêntica. A segunda parte é a condicional 'se voltar (V), não será o mesmo (~M)'. A contrapositiva de V → ~M é M → ~V, isto é: 'se você for o mesmo (M), não voltará (~V)'. Como a equivalência é perfeita, o item está Certo.",
      "Incorreta. A transformação efetuada na segunda oração segue rigorosamente a regra da contrapositiva (~Q → ~P), mantendo a equivalência lógica total."
    ],
    generalExplanation: "A proposição composta possui a estrutura A ∧ (B → C). Mantendo A e transformando a condicional (B → C) em sua contrapositiva (~C → ~B), obtém-se exatamente 'se você for o mesmo, não voltará'. Item CERTO.",
    banca: "Cebraspe / IBGE",
    ano: 2024,
    assunto: "Raciocínio Lógico: Equivalência da Condicional",
    nivelSuperior: true
  },
  {
    id: "rlm_batch2_q30",
    text: "Considere a seguinte sentença: \"Se, de fato, equivoquei-me, então devo ser punido.\"\nUma sentença equivalente à sentença dada é:",
    options: [
      "A) \"Se, de fato, não me equivoquei, então não serei punido.\"",
      "B) \"Fui punido, logo me equivoquei.\"",
      "C) \"Eu me equivoquei e serei punido.\"",
      "D) \"Não me equivoquei ou devo ser punido.\""
    ],
    correctIndex: 3,
    explanations: [
      "Incorreta. Nega ambos os termos sem inverter (falácia da negação do antecedente).",
      "Incorreta. Inverte a ordem das premissas de forma causal incorreta.",
      "Incorreta. Conjunção não é equivalente à condicional.",
      "Correta. Aplica-se a regra de equivalência da disjunção (NEyMA): P → Q ≡ ~P ∨ Q (Nega a primeira OU Mantém a segunda). Assim: 'Não me equivoquei OU devo ser punido'."
    ],
    generalExplanation: "A equivalência NEyMA (Nega ou Mantém) estabelece que (P → Q) ≡ (~P ∨ Q). Negando o antecedente 'equivoquei-me' temos 'não me equivoquei', conectivo 'OU', e mantendo o consequente 'devo ser punido'.",
    banca: "IBGE / RLM Concursos",
    ano: 2024,
    assunto: "Raciocínio Lógico: Equivalência da Condicional (NEyMA)",
    nivelSuperior: false
  },
  {
    id: "rlm_batch2_q31",
    text: "Assinale a alternativa que apresenta uma proposição logicamente equivalente a \"Ayra não é novata ou Bernardo é veterano\".",
    options: [
      "A) Ayra é novata se, e somente se, Bernardo é veterano.",
      "B) Se Ayra não é novata, então Bernardo é veterano.",
      "C) Se Ayra é novata, então Bernardo não é veterano.",
      "D) Se Ayra é novata, então Bernardo é veterano.",
      "E) Ayra não é novata e Bernardo não é veterano."
    ],
    correctIndex: 3,
    explanations: [
      "Incorreta. A bicondicional não equivale à disjunção simples.",
      "Incorreta. Não negou o primeiro termo ao transformá-lo no antecedente da condicional.",
      "Incorreta. Negou indevidamente o consequente.",
      "Correta. A equivalência da disjunção para condicional segue ~P ∨ Q ≡ P → Q. Aqui, o primeiro termo é ~P = 'Ayra não é novata', logo P = 'Ayra é novata'. O segundo termo mantido é Q = 'Bernardo é veterano'. Portanto: 'Se Ayra é novata, então Bernardo é veterano'.",
      "Incorreta. Conjunção de negações não equivale à disjunção."
    ],
    generalExplanation: "Pela equivalência entre disjunção e condicional (~A ∨ B ≡ A → B): Nega-se a primeira parte da disjunção para formar o 'Se' e mantém-se a segunda parte no 'então'. Logo: 'Se Ayra é novata, então Bernardo é veterano'.",
    banca: "IBGE / RLM Concursos",
    ano: 2024,
    assunto: "Raciocínio Lógico: Equivalência da Disjunção para Condicional",
    nivelSuperior: false
  },
  {
    id: "rlm_batch2_q32",
    text: "Assinale a opção que apresenta uma proposição logicamente equivalente a \"Se o tempo voa, então dinheiro não cresce em árvore\".",
    options: [
      "A) O tempo voa, ou o dinheiro cresce em árvore.",
      "B) O tempo voa, e o dinheiro não cresce em árvore.",
      "C) O tempo não voa, ou o dinheiro não cresce em árvore.",
      "D) O tempo não voa, ou o dinheiro cresce em árvore.",
      "E) O tempo voa, ou o dinheiro não cresce em árvore."
    ],
    correctIndex: 2,
    explanations: [
      "Incorreta. Manteve o primeiro termo e negou o segundo.",
      "Incorreta. Conjunção (E) com negação é a regra de negação, não de equivalência.",
      "Correta. Pela regra NEyMA (P → Q ≡ ~P ∨ Q): Nega a primeira (~P = 'O tempo não voa'), usa a disjunção 'OU', e Mantém a segunda (Q = 'o dinheiro não cresce em árvore'). Logo: 'O tempo não voa, ou o dinheiro não cresce em árvore'.",
      "Incorreta. Negou a primeira e negou a segunda.",
      "Incorreta. Manteve a primeira sem negar."
    ],
    generalExplanation: "Pela regra NEyMA: P → Q ≡ ~P ∨ Q. Nega-se 'o tempo voa' (vira 'o tempo não voa') e mantém-se 'dinheiro não cresce em árvore' unidas pelo conectivo 'OU'.",
    banca: "IBGE / RLM Concursos",
    ano: 2024,
    assunto: "Raciocínio Lógico: Equivalência da Condicional (NEyMA)",
    nivelSuperior: false
  },
  {
    id: "rlm_batch2_q33",
    text: "Assinale a alternativa que apresenta uma proposição logicamente equivalente a \"Oswaldo não acredita em horóscopo ou Pedro é do signo de Peixes\".",
    options: [
      "A) Se Oswaldo acredita em horóscopo, então Pedro é do signo de Peixes.",
      "B) Se Pedro é do signo de Peixes, então Oswaldo acredita em horóscopo.",
      "C) Pedro não é do signo de Peixes ou Oswaldo acredita em horóscopo.",
      "D) Oswaldo acredita em horóscopo e Pedro é do signo de Peixes.",
      "E) Oswaldo não acredita em horóscopo e Pedro não é do signo de Peixes."
    ],
    correctIndex: 0,
    explanations: [
      "Correta. A disjunção ~P ∨ Q equivale à condicional P → Q. Negando o primeiro termo (~P = 'não acredita' vira P = 'acredita') e mantendo o segundo ('Pedro é do signo de Peixes'), obtemos: 'Se Oswaldo acredita em horóscopo, então Pedro é do signo de Peixes'.",
      "Incorreta. Inverteu os papéis de antecedente e consequente sem aplicar a negação correta.",
      "Incorreta. Inverteu e alterou a disjunção sem equivalência lógica.",
      "Incorreta. Conjunção não é equivalente a disjunção.",
      "Incorreta. Conjunção negativa não é equivalente."
    ],
    generalExplanation: "A regra de equivalência da disjunção para condicional determina: (~A ∨ B) ≡ (A → B). Assim: 'Se Oswaldo acredita em horóscopo, então Pedro é do signo de Peixes'.",
    banca: "IBGE / RLM Concursos",
    ano: 2024,
    assunto: "Raciocínio Lógico: Equivalência da Disjunção para Condicional",
    nivelSuperior: false
  },
  {
    id: "rlm_batch2_q34",
    text: "Considere a seguinte afirmação:\n\"Se como verduras e não como gorduras saturadas, então minha saúde agradece.\"\nA equivalente lógica dessa afirmação é:",
    options: [
      "A) Se não como verduras e como gorduras saturadas, então minha saúde não agradece.",
      "B) Não como verduras e como gorduras saturadas ou minha saúde agradece.",
      "C) Se minha saúde agradece, então como verduras e não como gorduras saturadas.",
      "D) Como verduras ou não como gorduras saturadas e minha saúde agradece.",
      "E) Se minha saúde não agradece, então não como verduras ou como gorduras saturadas."
    ],
    correctIndex: 4,
    explanations: [
      "Incorreta. Nega o antecedente e o consequente sem inverter a ordem e sem aplicar De Morgan.",
      "Incorreta. Tentativa truncada de aplicar NEyMA na conjunção interna.",
      "Incorreta. Apenas inverteu a condicional sem negar os termos (falácia da afirmação do consequente).",
      "Incorreta. Estrutura gramatical e lógica inconsistente com a condicional.",
      "Correta. A afirmação tem a estrutura (P ∧ Q) → R, onde P = 'como verduras', Q = 'não como gorduras saturadas' e R = 'minha saúde agradece'. Pela contrapositiva: ~R → ~(P ∧ Q). Aplicando a Lei de De Morgan na negação da conjunção: ~(P ∧ Q) = ~P ∨ ~Q ('não como verduras OU como gorduras saturadas'). Assim: 'Se minha saúde não agradece, então não como verduras ou como gorduras saturadas'."
    ],
    generalExplanation: "A contrapositiva de (P ∧ Q) → R é ~R → ~(P ∧ Q). Pela Lei de De Morgan, a negação de 'como verduras E não como gorduras' é 'não como verduras OU como gorduras'. Resultando em: 'Se minha saúde não agradece, então não como verduras ou como gorduras saturadas'.",
    banca: "IBGE / RLM Concursos",
    ano: 2024,
    assunto: "Raciocínio Lógico: Equivalência da Condicional (Contrapositiva e De Morgan)",
    nivelSuperior: true
  },

  // =========================================================================
  // BLOCO 2: LÍNGUA PORTUGUESA (Questões 31 a 35)
  // =========================================================================
  {
    id: "port_batch2_q31",
    text: "No que tange à sintaxe dos verbos impessoais em locuções verbais, assinale a alternativa que apresenta a redação em conformidade com a norma culta:",
    options: [
      "A) Devem haver, segundo os especialistas, mudanças drásticas no clima.",
      "B) Poderão haver novos recursos contra a decisão do magistrado.",
      "C) Vai fazer cinco anos que a instituição não realiza novos concursos.",
      "D) Costumam haver muitos interessados em palestras sobre motivação.",
      "E) Hão de haver soluções mais simples para este problema jurídico."
    ],
    correctIndex: 2,
    explanations: [
      "Incorreta. O verbo 'haver' com sentido de 'existir' é impessoal e transmite sua impessoalidade ao verbo auxiliar 'dever'. O correto é: 'Deve haver mudanças...'",
      "Incorreta. O auxiliar deve ficar no singular: 'Poderá haver novos recursos...'",
      "Correta. Na locução verbal 'Vai fazer', o verbo principal 'fazer' indicando tempo decorrido é impessoal, transmitindo a impessoalidade ao auxiliar 'vai', que permanece obrigatoriamente no singular na 3ª pessoa.",
      "Incorreta. O correto é: 'Costuma haver muitos interessados...'",
      "Incorreta. O verbo auxiliar 'haver' quando acompanha outro 'haver' impessoal também permanece no singular: 'Há de haver soluções...'"
    ],
    generalExplanation: "Em locuções verbais cujo verbo principal é impessoal (como 'haver' no sentido de existir ou 'fazer' indicando tempo transcorrido), o verbo auxiliar é contaminado pela impessoalidade e deve permanecer na 3ª pessoa do singular. Portanto, 'Vai fazer cinco anos...' é a única opção correta.",
    banca: "IBGE / FGV / FCC",
    ano: 2024,
    assunto: "Língua Portuguesa: Sintaxe - Concordância Verbal",
    nivelSuperior: true
  },
  {
    id: "port_batch2_q32",
    text: "A análise sintática exige atenção a regras de proibição e exceções. Com base no conteúdo sobre termos essenciais, assinale a alternativa que apresenta um erro de análise ou de construção sintática:",
    options: [
      "A) Em 'Chegaram os livros e as revistas', o sujeito é composto e está posposto.",
      "B) Na frase 'É tempo de os alunos estudarem', o termo 'os alunos' é o sujeito do verbo 'estudarem'.",
      "C) Em 'Houve-se com discrição o advogado', o verbo 'haver' é pessoal e significa 'comportar-se'.",
      "D) Na oração 'Precisa-se de voluntários', o termo 'voluntários' é o sujeito paciente.",
      "E) Em 'Faz invernos rigorosos no sul', o verbo é impessoal por indicar fenômeno da natureza."
    ],
    correctIndex: 3,
    explanations: [
      "Correta como análise. Sujeito composto posposto ao verbo ('os livros e as revistas').",
      "Correta como análise. Não se deve contrair a preposição com o artigo quando este antecede o sujeito de um verbo no infinitivo ('de os alunos estudarem').",
      "Correta como análise. O verbo 'haver' pronominal no sentido de portar-se ou comportar-se é pessoal e possui sujeito ('o advogado').",
      "Incorreta na análise sintática (Gabarito da questão). Na oração 'Precisa-se de voluntários', o verbo é Transitivo Indireto (VTI) acompanhado da partícula 'se' como Índice de Indeterminação do Sujeito (IIS). Logo, o sujeito é indeterminado e 'de voluntários' é Objeto Indireto, e NÃO sujeito paciente.",
      "Correta como análise. O verbo 'fazer' indicando fenômeno climático ou tempo meteorológico é impessoal."
    ],
    generalExplanation: "Em 'Precisa-se de voluntários', a presença da preposição 'de' exigida pelo verbo 'precisar' (VTI) impede a voz passiva. A partícula 'se' funciona como Índice de Indeterminação do Sujeito (IIS), tornando 'de voluntários' objeto indireto e não sujeito paciente.",
    banca: "IBGE / FGV / FCC",
    ano: 2024,
    assunto: "Língua Portuguesa: Sintaxe - Termos Essenciais da Oração",
    nivelSuperior: true
  },
  {
    id: "port_batch2_q33",
    text: "Assinale a alternativa em que a classificação do sujeito ou do predicado está INCORRETA, considerando as sutilezas da norma gramatical:",
    options: [
      "A) Em 'Bateram duas horas no relógio da matriz', o sujeito é 'duas horas'.",
      "B) Na frase 'Consideraram a prova extremamente complexa', o predicado é verbo-nominal.",
      "C) Em 'Alugam-se apartamentos mobiliados', o sujeito é simples e paciente.",
      "D) Na oração 'Nevou intensamente durante a madrugada', o predicado é verbal e a oração é sem sujeito.",
      "E) Em 'Tratam-se de questões fundamentais', o sujeito é 'questões fundamentais'."
    ],
    correctIndex: 4,
    explanations: [
      "Correta na análise. Verbos que indicam horas (bater, soar, dar) concordam com o numeral que exerce o papel de sujeito.",
      "Correta na análise. O verbo 'consideraram' expressa ação (núcleo verbal) e 'extremamente complexa' é predicativo do objeto (núcleo nominal), formando predicado verbo-nominal.",
      "Correta na análise. Com verbo transitivo direto e partícula apassivadora 'se', 'apartamentos mobiliados' é o sujeito simples na voz passiva sintética.",
      "Correta na análise. Verbos que exprimem fenômenos meteorológicos em sentido denotativo formam oração sem sujeito e predicado verbal.",
      "Incorreta na análise (Gabarito da questão). O verbo 'tratar-se' rege a preposição 'de' (VTI). A partícula 'se' é IIS e o verbo deve ficar obrigatoriamente no singular: 'Trata-se de'. O sujeito é indeterminado e 'questões fundamentais' é objeto indireto."
    ],
    generalExplanation: "A frase 'Tratam-se de questões fundamentais' apresenta erro gramatical de concordância e classificação. O correto é 'Trata-se de questões fundamentais', pois o verbo é transitivo indireto com 'se' índice de indeterminação do sujeito. 'Questões fundamentais' é objeto indireto e não sujeito.",
    banca: "IBGE / FGV / FCC",
    ano: 2024,
    assunto: "Língua Portuguesa: Sintaxe - Classificação do Sujeito e Predicado",
    nivelSuperior: true
  },
  {
    id: "port_batch2_q34",
    text: "Analise as sentenças abaixo:\nI. \"A confiança no guia era total.\"\nII. \"A confiança do guia era total.\"\n\nSobre os termos destacados (\"no guia\" e \"do guia\"), é correto afirmar que:",
    options: [
      "A) Ambos são complementos nominais, pois completam o substantivo abstrato 'confiança'.",
      "B) Ambos são adjuntos adnominais, pois possuem natureza possessiva em relação ao nome.",
      "C) Em I, temos um complemento nominal (valor paciente); em II, um adjunto adnominal (valor agente).",
      "D) Em I, temos um adjunto adnominal (valor agente); em II, um complemento nominal (valor paciente).",
      "E) A classificação de ambos depende do contexto oracional, podendo ser objetos indiretos."
    ],
    correctIndex: 2,
    explanations: [
      "Incorreta. Apenas o termo com valor passivo/paciente é complemento nominal.",
      "Incorreta. Apenas o termo com valor ativo/posse é adjunto adnominal.",
      "Correta. Em I, 'no guia' representa o alvo ou paciente da confiança (alguém confia no guia = valor paciente = Complemento Nominal). Em II, 'do guia' indica a autoria ou agente da confiança (o guia confia em algo = valor agente = Adjunto Adnominal).",
      "Incorreta. Inverteu as classificações de I e II.",
      "Incorreta. Termos preposicionados ligados a substantivos nunca são objetos (que completam verbos)."
    ],
    generalExplanation: "Diante de substantivos abstratos derivados de verbos, o termo preposicionado com sentido paciente (alvo da ação) é Complemento Nominal ('confiança no guia'). Já o termo preposicionado com sentido agente (autor do sentimento/ação) é Adjunto Adnominal ('confiança do guia').",
    banca: "IBGE / FGV / FCC",
    ano: 2024,
    assunto: "Língua Portuguesa: Sintaxe - Complemento Nominal e Adjunto Adnominal",
    nivelSuperior: true
  },
  {
    id: "port_batch2_q35",
    text: "Assinale a alternativa que apresenta, respectivamente, um Objeto Direto Preposicionado e um Objeto Pleonástico.",
    options: [
      "A) Aos amigos, não os vejo faz tempo. / Bebeu do vinho com prazer.",
      "B) Amou a Deus sobre todas as coisas. / Aos culpados, a lei os punirá.",
      "C) Cumpriu com o dever. / O dinheiro, ele o gastou rapidamente.",
      "D) Necessito de ajuda. / Aos mestres, devemos-lhes respeito.",
      "E) Venceu ao inimigo com bravura. / Entregou-me o livro ontem."
    ],
    correctIndex: 1,
    explanations: [
      "Incorreta. Apresenta primeiro um objeto direto pleonástico e depois um objeto direto partitivo/preposicionado (ordem invertida).",
      "Correta. 'Amou a Deus': o verbo amar é VTD, mas recebe a preposição 'a' por motivo de reverência (Objeto Direto Preposicionado). Em 'Aos culpados, a lei os punirá': o objeto direto antecipado 'aos culpados' é repetido pelo pronome oblíquo 'os' para conferir ênfase (Objeto Pleonástico).",
      "Incorreta. A alternativa B é a formulação clássica e exata da regra gramatical.",
      "Incorreta. 'Necessito de ajuda' é objeto indireto regido pelo verbo.",
      "Incorreta. 'Entregou-me o livro' contém apenas objeto indireto e direto normais, sem pleonasmo."
    ],
    generalExplanation: "O Objeto Direto Preposicionado ocorre quando o complemento de um VTD vem antecedido de preposição (por reverência, clareza ou estilo: 'Amou a Deus'). O Objeto Pleonástico ocorre quando o complemento é antecipado e depois retomado por pronome oblíquo para dar ênfase ('Aos culpados, a lei os punirá').",
    banca: "IBGE / FGV / FCC",
    ano: 2024,
    assunto: "Língua Portuguesa: Sintaxe - Objeto Direto Preposicionado e Pleonástico",
    nivelSuperior: true
  },

  // =========================================================================
  // BLOCO 3: MATEMÁTICA / RACIOCÍNIO LÓGICO (Questões 36 a 43)
  // =========================================================================
  {
    id: "mat_batch2_q36",
    text: "Sobre as propriedades geométricas de polígonos de quatro lados, assinale a afirmação tecnicamente INCORRETA:",
    options: [
      "A) Em um trapézio isósceles, os ângulos adjacentes à mesma base são congruentes.",
      "B) As diagonais de um retângulo interceptam-se em seus pontos médios e são congruentes.",
      "C) Todo paralelogramo que possui diagonais perpendiculares é um losango.",
      "D) O quadrado é o único quadrilátero que é, simultaneamente, um retângulo e um losango.",
      "E) Em um trapézio retângulo, as diagonais são obrigatoriamente perpendiculares entre si."
    ],
    correctIndex: 4,
    explanations: [
      "Correta como conceito. No trapézio isósceles, os ângulos da base maior são iguais entre si, assim como os da base menor.",
      "Correta como conceito. O retângulo é paralelogramo com diagonais congruentes que se cruzam no ponto médio.",
      "Correta como conceito. A perpendicularidade das diagonais em um paralelogramo é a propriedade definidora do losango.",
      "Correta como conceito. O quadrado reúne equiangularidade (retângulo) e equilateridade (losango).",
      "Incorreta conceitualmente (Gabarito da questão). O trapézio retângulo possui dois ângulos retos internos em um lado não paralelo. Suas diagonais NÃO são obrigatoriamente perpendiculares entre si."
    ],
    generalExplanation: "A definição de trapézio retângulo exige apenas que um dos lados oblíquos seja perpendicular às bases (formando dois ângulos retos). Isso não implica qualquer obrigatoriedade de perpendicularidade entre as suas diagonais.",
    banca: "IBGE / FGV / Cesgranrio",
    ano: 2024,
    assunto: "Raciocínio Lógico e Matemática: Geometria Plana - Quadriláteros",
    nivelSuperior: true
  },
  {
    id: "mat_batch2_q37",
    text: "Seja um triângulo ABC onde o ângulo externo no vértice A mede 110°. Se o ângulo interno no vértice B é o triplo do ângulo interno no vértice C, pode-se afirmar que o triângulo ABC é classificado como:",
    options: [
      "A) Equilátero",
      "B) Retângulo",
      "C) Acutângulo",
      "D) Obtusângulo",
      "E) Isósceles"
    ],
    correctIndex: 2,
    explanations: [
      "Incorreta. Para ser equilátero, todos os ângulos internos deveriam medir 60°.",
      "Incorreta. Nenhum dos ângulos internos calculados (70°, 82,5° e 27,5°) é igual a 90°.",
      "Correta. Pelo Teorema do Ângulo Externo: Ângulo Externo(A) = B + C = 110°. Como B = 3C, temos 3C + C = 110° ⇒ 4C = 110° ⇒ C = 27,5°. Logo, B = 3 × 27,5° = 82,5°. O ângulo interno A = 180° - 110° = 70°. Como os três ângulos (70°, 82,5° e 27,5°) são agudos (menores que 90°), o triângulo é acutângulo.",
      "Incorreta. Nenhum ângulo interno é maior que 90°.",
      "Incorreta. Não há dois ângulos iguais (70° ≠ 82,5° ≠ 27,5°)."
    ],
    generalExplanation: "Teorema do Ângulo Externo: Ext(A) = B + C. 110° = 3C + C ⇒ C = 27,5°, B = 82,5° e A = 70°. Todos os ângulos internos são menores que 90°, classificando o triângulo ABC como Acutângulo.",
    banca: "IBGE / FGV / Cesgranrio",
    ano: 2024,
    assunto: "Raciocínio Lógico e Matemática: Geometria Plana - Triângulos",
    nivelSuperior: true
  },
  {
    id: "mat_batch2_q38",
    text: "Um trapézio isósceles possui base menor medindo 10 cm e base maior medindo 22 cm. Sabendo que os lados não paralelos (lados oblíquos) medem 10 cm cada, a área desse trapézio é:",
    options: [
      "A) 96 cm²",
      "B) 128 cm²",
      "C) 160 cm²",
      "D) 192 cm²",
      "E) 256 cm²"
    ],
    correctIndex: 1,
    explanations: [
      "Incorreta. Cálculo com altura ou fórmula errônea.",
      "Correta. A projeção da base nos triângulos retângulos laterais é: x = (Base Maior - Base Menor) / 2 = (22 - 10) / 2 = 6 cm. Pelo Teorema de Pitágoras no triângulo retângulo de hipotenusa 10 e cateto 6: h² + 6² = 10² ⇒ h² + 36 = 100 ⇒ h² = 64 ⇒ h = 8 cm. Área = ((B + b) × h) / 2 = ((22 + 10) × 8) / 2 = (32 × 8) / 2 = 128 cm².",
      "Incorreta. Valor se a altura fosse confundida com o lado oblíquo (10 cm).",
      "Incorreta. Erro no cálculo da área.",
      "Incorreta. Valor obtido caso não se dividisse por 2 na fórmula da área do trapézio."
    ],
    generalExplanation: "Projeção do cateto: (22 - 10)/2 = 6 cm. Altura pelo triângulo pitagórico (6, 8, 10): h = 8 cm. Área do trapézio = (22 + 10) × 8 / 2 = 32 × 4 = 128 cm².",
    banca: "IBGE / FGV / Cesgranrio",
    ano: 2024,
    assunto: "Raciocínio Lógico e Matemática: Geometria Plana - Áreas",
    nivelSuperior: true
  },
  {
    id: "mat_batch2_q39",
    text: "No plano cartesiano, um ponto P possui coordenadas (2, 3) e um ponto Q possui coordenadas (10, 18). A menor distância entre esses dois pontos é um valor:",
    options: [
      "A) Inteiro, igual a 15.",
      "B) Irracional, entre 16 e 17.",
      "C) Inteiro, igual a 17.",
      "D) Irracional, entre 18 e 19.",
      "E) Inteiro, igual a 25."
    ],
    correctIndex: 2,
    explanations: [
      "Incorreta. 15 é apenas a variação na coordenada y (18 - 3).",
      "Incorreta. A raiz de 289 é exata (número inteiro).",
      "Correta. A distância euclidiana é dada por d = √((x₂ - x₁)² + (y₂ - y₁)²). Variação em x = 10 - 2 = 8. Variação em y = 18 - 3 = 15. Aplicando Pitágoras: d² = 8² + 15² = 64 + 225 = 289 ⇒ d = √289 = 17 (terno pitagórico 8, 15, 17).",
      "Incorreta. Cálculo equivocado da distância.",
      "Incorreta. Soma direta dos catetos (8 + 17)."
    ],
    generalExplanation: "Distância entre dois pontos no plano cartesiano: d = √((10 - 2)² + (18 - 3)²) = √(8² + 15²) = √(64 + 225) = √289 = 17.",
    banca: "IBGE / FGV / Cesgranrio",
    ano: 2024,
    assunto: "Raciocínio Lógico e Matemática: Geometria Analítica - Distância entre Pontos",
    nivelSuperior: true
  },
  {
    id: "mat_batch2_q40",
    text: "Analise as seguintes afirmações sobre a aplicação do Teorema de Pitágoras e assinale a alternativa que apresenta uma conclusão tecnicamente correta para um elaborador de provas:\n\nI. Em um triângulo de lados 7, 24 e 25, o ângulo oposto ao lado 25 é reto.\nII. Se a diagonal de um quadrado dobrar de tamanho, sua área quadruplicará.\nIII. O Teorema de Pitágoras é suficiente para calcular qualquer lado de um triângulo, desde que se conheçam os outros dois lados, independentemente dos ângulos internos.",
    options: [
      "A) Apenas a afirmação I está correta.",
      "B) Apenas a afirmação II está correta.",
      "C) Apenas as afirmações I e II estão corretas.",
      "D) Apenas as afirmações II e III estão corretas.",
      "E) Todas as afirmações estão corretas."
    ],
    correctIndex: 2,
    explanations: [
      "Incorreta. A afirmação II também é verdadeira.",
      "Incorreta. A afirmação I também é verdadeira.",
      "Correta. I é verdadeira: 7² + 24² = 49 + 576 = 625 = 25² (recíproca de Pitágoras). II é verdadeira: Área do quadrado = d²/2; se d dobra (2d), a área passa para (2d)²/2 = 4d²/2 (quadruplica). III é falsa: o Teorema de Pitágoras é restrito a triângulos retângulos (para outros triângulos aplica-se a Lei dos Cossenos).",
      "Incorreta. A afirmação III é falsa.",
      "Incorreta. A afirmação III invalida a opção."
    ],
    generalExplanation: "A afirmação I confirma o terno pitagórico (7, 24, 25). A afirmação II decorre da relação quadrática da área em função da diagonal. A afirmação III é falsa pois o Teorema de Pitágoras exige ângulo reto de 90°.",
    banca: "IBGE / FGV / Cesgranrio",
    ano: 2024,
    assunto: "Raciocínio Lógico e Matemática: Geometria Plana - Teorema de Pitágoras",
    nivelSuperior: true
  },
  {
    id: "mat_batch2_q41",
    text: "Em um problema de topografia aplicada, identifica-se uma região em formato de setor circular. O ângulo central desse setor é de 60° e o raio mede 12 metros. Para cercar essa região (incluindo o arco e os dois raios que o delimitam), qual o comprimento total de material necessário? (Considere π = 3)",
    options: [
      "A) 12 metros",
      "B) 24 metros",
      "C) 36 metros",
      "D) 48 metros",
      "E) 72 metros"
    ],
    correctIndex: 2,
    explanations: [
      "Incorreta. Representa apenas o comprimento do arco (12 m), sem somar os dois raios de contorno.",
      "Incorreta. Representa apenas a soma dos dois raios (24 m), sem o arco.",
      "Correta. Comprimento do arco L = (θ / 360°) × 2πR = (60° / 360°) × 2 × 3 × 12 = (1/6) × 72 = 12 metros. Perímetro total para cercar o setor = Arco + 2 × Raio = 12 + 12 + 12 = 36 metros.",
      "Incorreta. Erro no cálculo proporcional da circunferência.",
      "Incorreta. Perímetro da circunferência inteira sem considerar o ângulo de 60°."
    ],
    generalExplanation: "Arco = (60/360) × 2 × 3 × 12 = 12 m. Perímetro total da região cercada = Arco + 2 × Raio = 12 + 24 = 36 metros.",
    banca: "IBGE / FGV / Cesgranrio",
    ano: 2024,
    assunto: "Raciocínio Lógico e Matemática: Geometria Plana - Setor Circular",
    nivelSuperior: true
  },
  {
    id: "mat_batch2_q42",
    text: "Em um estudo técnico sobre polígonos, afirma-se que o semiperímetro (p) de um determinado octógono regular é igual a 32 cm. Com base nessa informação, qual é a medida de cada lado desse octógono?",
    options: [
      "A) 4 cm",
      "B) 8 cm",
      "C) 16 cm",
      "D) 32 cm",
      "E) 64 cm"
    ],
    correctIndex: 1,
    explanations: [
      "Incorreta. Resultado obtido ao dividir o semiperímetro diretamente por 8, esquecendo que o perímetro é o dobro.",
      "Correta. O semiperímetro p é a metade do perímetro total (2p). Se p = 32 cm, o perímetro total é 2p = 64 cm. Como o octógono regular possui 8 lados congruentes: Lado = 64 cm / 8 = 8 cm.",
      "Incorreta. Erro na razão do número de lados.",
      "Incorreta. 32 cm é a medida do semiperímetro.",
      "Incorreta. 64 cm é o perímetro total do polígono."
    ],
    generalExplanation: "Semiperímetro p = 32 cm ⇒ Perímetro total 2p = 64 cm. Lado do octógono regular = 64 / 8 = 8 cm.",
    banca: "IBGE / FGV / Cesgranrio",
    ano: 2024,
    assunto: "Raciocínio Lógico e Matemática: Geometria Plana - Polígonos Regulares",
    nivelSuperior: true
  },
  {
    id: "mat_batch2_q43",
    text: "Uma peça metálica tem o formato de uma 'escada' ortogonal (todos os ângulos internos são de 90°). A base horizontal total da peça mede 0,15 metros e a altura vertical total mede 10 centímetros. Qual é o perímetro total dessa peça em centímetros?",
    options: [
      "A) 25 cm",
      "B) 30 cm",
      "C) 40 cm",
      "D) 50 cm",
      "E) 60 cm"
    ],
    correctIndex: 3,
    explanations: [
      "Incorreta. Representa apenas o semiperímetro (15 + 10).",
      "Incorreta. Erro de conversão de unidades.",
      "Incorreta. Cálculo considerando base de 10 cm.",
      "Correta. Em polígonos ortogonais em formato de escada, a soma de todos os degraus horizontais é igual à base total, e a soma dos verticais é igual à altura total. Base = 0,15 m = 15 cm; Altura = 10 cm. Perímetro total = 2 × (Base + Altura) = 2 × (15 + 10) = 2 × 25 = 50 cm.",
      "Incorreta. Erro na aplicação da soma dos lados."
    ],
    generalExplanation: "Convertendo as medidas para cm: Base = 0,15 m = 15 cm e Altura = 10 cm. Pelo princípio da projeção ortogonal, o perímetro da escada equivale ao do retângulo envolvente: P = 2 × (15 + 10) = 50 cm.",
    banca: "IBGE / FGV / Cesgranrio",
    ano: 2024,
    assunto: "Raciocínio Lógico e Matemática: Geometria Plana - Perímetro de Figuras Compostas",
    nivelSuperior: true
  },

  // =========================================================================
  // BLOCO 4: NOÇÕES BÁSICAS DE INFORMÁTICA (Questões 44 e 45)
  // =========================================================================
  {
    id: "info_batch2_q44",
    text: "Um técnico de informática precisa organizar arquivos dentro da mesma partição (Unidade C:). Ele deseja que, ao arrastar um arquivo de uma pasta para outra dentro dessa mesma unidade, o arquivo seja COPIADO, e não movido (que é o comportamento padrão). Para forçar a CÓPIA na mesma unidade, ele deve arrastar o arquivo mantendo pressionada a tecla:",
    options: [
      "A) Shift",
      "B) Alt",
      "C) Ctrl",
      "D) Tab",
      "E) Windows"
    ],
    correctIndex: 2,
    explanations: [
      "Incorreta. Pressionar Shift força a operação de MOVER o arquivo (mesmo entre unidades diferentes).",
      "Incorreta. Pressionar Alt (ou Ctrl+Shift) força a criação de um ATALHO.",
      "Correta. No Windows Explorer, arrastar arquivos dentro da mesma unidade move o arquivo por padrão. Para forçar a operação de CÓPIA (duplicação) mantendo o original intacto, deve-se segurar a tecla Ctrl durante o arrasto.",
      "Incorreta. A tecla Tab alterna o foco entre os painéis e elementos.",
      "Incorreta. A tecla Windows (WinKey) abre o menu iniciar e combina atalhos de sistema."
    ],
    generalExplanation: "No Explorador de Arquivos do Windows: arrastar com Ctrl pressionado força sempre a CÓPIA; com Shift força o MOVIMENTO; com Alt cria um ATALHO.",
    banca: "IBGE / Informática Concursos",
    ano: 2024,
    assunto: "Noções Básicas de Informática: Gerenciamento de Arquivos e Pastas",
    nivelSuperior: false
  },
  {
    id: "info_batch2_q45",
    text: "No que diz respeito aos atributos e propriedades de arquivos no Explorador de Arquivos do Windows, analise as afirmações abaixo:\n\nI. Um arquivo com o atributo 'Somente Leitura' ativado pode ser aberto e editado, mas suas alterações não podem ser salvas no arquivo original.\nII. Arquivos com o atributo 'Oculto' são automaticamente excluídos pelo sistema após 30 dias se não forem acessados.\nIII. A extensão de um arquivo (como .docx ou .pdf) define o programa padrão que o abrirá, mas o Windows pode ser configurado para ocultar essas extensões de tipos conhecidos.\n\nEstá(ão) correta(s):",
    options: [
      "A) Apenas I.",
      "B) Apenas II.",
      "C) Apenas I e III.",
      "D) Apenas II e III.",
      "E) I, II e III."
    ],
    correctIndex: 2,
    explanations: [
      "Incorreta. A afirmação III também está correta.",
      "Incorreta. A afirmação II é totalmente falsa; atributos não realizam exclusão programada.",
      "Correta. I é verdadeira: 'Somente Leitura' permite leitura e edição em memória, mas para salvar exige criar um novo arquivo ('Salvar Como'). III é verdadeira: o Windows associa extensões aos aplicativos padrão e possui a opção 'Ocultar as extensões dos tipos de arquivo conhecidos'. II é falsa: arquivos ocultos apenas não são exibidos na listagem padrão.",
      "Incorreta. A afirmação II está errada.",
      "Incorreta. A afirmação II invalida a opção."
    ],
    generalExplanation: "I está correta (o atributo 'Somente Leitura' impede a sobrescrita do arquivo original). III está correta (as extensões definem os programas associados e podem ser ocultadas nas opções de exibição). A afirmativa II é falsa, pois arquivos ocultos permanecem gravados no disco por tempo indeterminado.",
    banca: "IBGE / Informática Concursos",
    ano: 2024,
    assunto: "Noções Básicas de Informática: Gerenciamento de Arquivos e Pastas",
    nivelSuperior: false
  },

  // =========================================================================
  // BLOCO 5: NOÇÕES DE ADMINISTRAÇÃO E SITUAÇÕES GERENCIAIS (Questões 196 a 210)
  // =========================================================================
  {
    id: "adm_batch2_q196",
    text: "Uma determinada Secretaria de Saúde estabeleceu como meta a vacinação de 95% das crianças de uma região para erradicar uma doença local. Ao final do período, verificou-se que 98% das crianças foram vacinadas, mas a incidência da doença não diminuiu conforme o esperado devido a problemas na qualidade do armazenamento das doses. Sob a ótica dos indicadores de desempenho, é correto afirmar que:",
    options: [
      "A) A secretaria foi efetiva, mas não foi eficaz.",
      "B) A secretaria foi eficaz, mas não foi efetiva.",
      "C) O indicador de impacto (outcome) foi plenamente atingido.",
      "D) Houve alta produtividade, o que garante a efetividade social.",
      "E) A secretaria falhou na eficiência, mas obteve sucesso na eficácia e na efetividade."
    ],
    correctIndex: 1,
    explanations: [
      "Incorreta. A relação está invertida. A meta de entrega foi superada (eficácia), mas o resultado social pretendido não foi obtido (efetividade).",
      "Correta. Eficácia refere-se ao atingimento das metas quantitativas planejadas (98% atingido contra 95% da meta). Efetividade refere-se ao impacto real ou transformação social pretendida (redução/erradicação da doença), que não se concretizou devido ao lote danificado.",
      "Incorreta. O outcome (impacto) seria a erradicação da doença, que não ocorreu.",
      "Incorreta. Produtividade é uma razão técnica entre produto e insumo e não garante impacto social.",
      "Incorreta. A secretaria falhou na efetividade."
    ],
    generalExplanation: "Eficácia = cumprimento de metas e entregas (atingiu 98%). Efetividade = geração de impacto e resolução do problema público (não reduziu a doença). Portanto, a secretaria foi eficaz, mas não foi efetiva.",
    banca: "IBGE / Administração Pública",
    ano: 2024,
    assunto: "Noções de Administração: Gestão de Desempenho - Eficácia e Efetividade",
    nivelSuperior: true
  },
  {
    id: "adm_batch2_q197",
    text: "Ao analisar o desempenho de um setor de protocolo, um Técnico de Administração observa que a equipe processou 1.200 documentos no mês de agosto utilizando 5 servidores, enquanto no mês de julho processou 1.000 documentos com os mesmos 5 servidores. Com base nos conceitos de produção e produtividade, assinale a afirmativa correta.",
    options: [
      "A) A produção de julho e agosto foi idêntica, alterando-se apenas a eficiência.",
      "B) A produtividade de agosto foi de 240 documentos por servidor.",
      "C) A produtividade é um dado absoluto, representado pelo total de 1.200 documentos.",
      "D) O aumento da produção em agosto implica necessariamente no aumento da efetividade.",
      "E) A produtividade de julho foi superior à de agosto, visto que o esforço foi menor."
    ],
    correctIndex: 1,
    explanations: [
      "Incorreta. A produção (quantidade total) variou de 1.000 para 1.200 documentos.",
      "Correta. A produtividade é um índice relativo dado pela razão Output / Input: 1.200 documentos / 5 servidores = 240 documentos por servidor no mês de agosto.",
      "Incorreta. 1.200 documentos é a produção total (dado absoluto). Produtividade é a relação de rendimento por insumo/recurso.",
      "Incorreta. O aumento do volume produzido não garante automaticamente impacto social benéfico.",
      "Incorreta. A produtividade de julho foi de 200 doc/servidor (1000/5), sendo inferior à de agosto (240 doc/servidor)."
    ],
    generalExplanation: "Produtividade = Produção / Recursos Utilizados. Em agosto: 1.200 / 5 = 240 documentos por servidor (um ganho de produtividade em relação aos 200 doc/servidor de julho).",
    banca: "IBGE / Administração Pública",
    ano: 2024,
    assunto: "Noções de Administração: Gestão de Desempenho - Produção e Produtividade",
    nivelSuperior: false
  },
  {
    id: "adm_batch2_q198",
    text: "O Balanced Scorecard (BSC) é uma metodologia de gestão estratégica que utiliza indicadores sob diferentes perspectivas. Ao adaptar o BSC para o setor público, qual alteração estrutural é comumente realizada em relação ao modelo original do setor privado?",
    options: [
      "A) A exclusão da perspectiva financeira, visto que órgãos públicos não visam lucro.",
      "B) A substituição da perspectiva de processos internos pela perspectiva de controle externo.",
      "C) O posicionamento da perspectiva do Cidadão e Sociedade no topo da hierarquia estratégica.",
      "D) A unificação das perspectivas de aprendizado e crescimento com a financeira.",
      "E) A priorização da perspectiva financeira sobre a do cidadão para garantir o equilíbrio fiscal."
    ],
    correctIndex: 2,
    explanations: [
      "Incorreta. A perspectiva financeira continua existindo, voltada à responsabilidade orçamentária e alocação eficiente de recursos públicos.",
      "Incorreta. A perspectiva dos processos internos é essencial para garantir a eficiência das rotinas administrativas.",
      "Correta. No setor privado, a perspectiva financeira ocupa o topo da pirâmide (lucro aos acionistas). No setor público, a finalidade precípua é a geração de valor público e atendimento das demandas sociais, posicionando a perspectiva do Cidadão/Sociedade no topo hierárquico do mapa estratégico.",
      "Incorreta. As perspectivas permanecem separadas para monitorar pessoas e infraestrutura.",
      "Incorreta. No setor público, o equilíbrio fiscal é um meio (suporte), enquanto a satisfação do cidadão é o fim."
    ],
    generalExplanation: "No setor público, a missão principal é atender o interesse coletivo. Por isso, a perspectiva do 'Cidadão e Sociedade' é colocada no topo do Balanced Scorecard, enquanto a financeira atua como sustentação de recursos.",
    banca: "IBGE / Administração Pública",
    ano: 2024,
    assunto: "Noções de Administração: Gestão de Desempenho - Balanced Scorecard (BSC)",
    nivelSuperior: true
  },
  {
    id: "adm_batch2_q199",
    text: "Ao construir um sistema de medição, o gestor deve garantir que o indicador possua 'Estabilidade'. Esse atributo técnico é definido como a capacidade do indicador de:",
    options: [
      "A) Captar pequenas variações no desempenho do processo.",
      "B) Ser calculado com baixo custo operacional.",
      "C) Medir exatamente aquilo que se pretende medir.",
      "D) Permitir a comparação do desempenho ao longo do tempo através de séries históricas.",
      "E) Ser facilmente compreendido por cidadãos leigos."
    ],
    correctIndex: 3,
    explanations: [
      "Incorreta. Esta é a definição de Sensibilidade.",
      "Incorreta. Esta é a definição de Economicidade.",
      "Incorreta. Esta é a definição de Validade.",
      "Correta. A Estabilidade é a propriedade metodológica que garante a manutenção dos critérios e rotinas de apuração ao longo dos períodos, permitindo a construção de séries históricas e comparações temporais confiáveis.",
      "Incorreta. Esta é a definição de Simplicidade ou Clareza."
    ],
    generalExplanation: "Estabilidade é o atributo que assegura que o indicador mantenha sua métrica consistente ao longo do tempo, viabilizando a análise de tendências e séries históricas.",
    banca: "IBGE / Administração Pública",
    ano: 2024,
    assunto: "Noções de Administração: Gestão de Desempenho - Atributos dos Indicadores",
    nivelSuperior: true
  },
  {
    id: "adm_batch2_q200",
    text: "Sobre a subjetividade no processo de Avaliação de Desempenho Funcional, assinale a afirmativa tecnicamente correta:",
    options: [
      "A) A utilização de métodos científicos e indicadores quantitativos elimina totalmente a subjetividade do avaliador.",
      "B) A subjetividade é um elemento desejável na avaliação, pois permite que o avaliador utilize critérios pessoais e amizades para promover servidores.",
      "C) Embora se busque a objetividade através de critérios claros, a avaliação sempre terá um componente de julgamento humano, devendo-se buscar a sua minimização.",
      "D) A Administração Pública, pelo Princípio da Impessoalidade, proíbe qualquer tipo de avaliação que não seja 100% automatizada por sistemas computacionais.",
      "E) A subjetividade na avaliação de desempenho é um mito, visto que o desempenho humano é perfeitamente mensurável de forma exata e matemática."
    ],
    correctIndex: 2,
    explanations: [
      "Incorreta. Métodos científicos reduzem distorções, mas não extinguem completamente a subjetividade do julgamento interpessoal.",
      "Incorreta. O favoritismo pessoal fere diretamente o princípio da impessoalidade e a ética pública.",
      "Correta. Como a avaliação de desempenho é conduzida por pessoas avaliando o comportamento e a entrega de outras pessoas, a subjetividade é inerente ao processo. O papel da gestão é mitigá-la por meio de critérios claros, treinamentos de avaliadores e métodos estruturados.",
      "Incorreta. O julgamento humano das chefias é amplamente aceito e previsto nas avaliações funcionais do serviço público.",
      "Incorreta. O trabalho humano envolve competências comportamentais e atitudinais que não são redutíveis a fórmulas matemáticas puras."
    ],
    generalExplanation: "A avaliação de desempenho é um ato de julgamento humano. Embora não seja possível eliminar 100% da subjetividade, a boa prática de gestão exige sua minimização por meio de critérios objetivos e métodos consistentes.",
    banca: "IBGE / Administração Pública",
    ano: 2024,
    assunto: "Noções de Administração: Gestão de Desempenho - Avaliação Funcional",
    nivelSuperior: false
  },
  {
    id: "adm_batch2_q201",
    text: "Um avaliador, ao preencher os formulários de desempenho de sua equipe, decide atribuir a nota '7' (em uma escala de 0 a 10) para todos os seus subordinados, independentemente da entrega individual de cada um, visando evitar conflitos internos ou a necessidade de justificar notas muito altas ou muito baixas. Essa conduta compromete o seguinte objetivo da Avaliação de Desempenho:",
    options: [
      "A) O objetivo de retroalimentação (feedback), pois impede que o servidor identifique seus pontos fortes e fracos reais.",
      "B) O objetivo de estabilidade, pois garante que todos os servidores em estágio probatório sejam aprovados automaticamente.",
      "C) O objetivo de economicidade, pois reduz o tempo gasto pelo gestor no preenchimento dos formulários.",
      "D) O objetivo de hierarquia, pois nivela os subordinados e retira o poder de comando da chefia imediata.",
      "E) O objetivo de legalidade, uma vez que a atribuição de notas médias é vedada pelo regime jurídico único."
    ],
    correctIndex: 0,
    explanations: [
      "Correta. A conduta do avaliador caracteriza o vício de 'Tendência Central' (centralidade). Ao igualar todos em uma nota média confortável, o processo deixa de diagnosticar carências individuais, neutralizando o objetivo do feedback construtivo e o planejamento de capacitações.",
      "Incorreta. A conduta pode aprovar inaptos ou desmotivar talentos, mas o comprometimento direto é do feedback.",
      "Incorreta. A comodidade do gestor é uma falha gerencial, não um objetivo de economicidade da AD.",
      "Incorreta. A hierarquia funcional não é o objetivo central que é prejudicado.",
      "Incorreta. O vício é uma distorção técnica e comportamental do avaliador."
    ],
    generalExplanation: "O erro de avaliação por 'Tendência Central' (dar nota média a todos) anula a função diagnóstica da avaliação de desempenho, impedindo um feedback honesto sobre competências a aprimorar.",
    banca: "IBGE / Administração Pública",
    ano: 2024,
    assunto: "Noções de Administração: Gestão de Desempenho - Vícios de Avaliação e Feedback",
    nivelSuperior: true
  },
  {
    id: "adm_batch2_q202",
    text: "Ao optar pelo método de Avaliação 360 Graus para o cargo de Agente Administrativo, a organização busca uma visão sistêmica do servidor. No entanto, a literatura e a prática administrativa apontam desafios significativos para este método. Assinale a alternativa que apresenta uma desvantagem técnica da Avaliação 360 Graus:",
    options: [
      "A) A excessiva rigidez do formulário, que impede a análise de nuances comportamentais.",
      "B) A possibilidade de conluio ou 'troca de favores' entre colegas para inflar as avaliações mútuas.",
      "C) O foco exclusivo em resultados quantitativos, desprezando as competências qualitativas.",
      "D) A facilidade de interpretação dos resultados, que torna o processo superficial para o RH.",
      "E) A dependência de um único avaliador, o que aumenta o risco de perseguição pessoal."
    ],
    correctIndex: 1,
    explanations: [
      "Incorreta. A rigidez é uma limitação típica das Escalas Gráficas tradicionais.",
      "Correta. Como a Avaliação 360 Graus (ou circular) inclui a avaliação por pares (colegas de equipe), clientes, subordinados e chefia, existe o risco comportamental de conluio ('acordo tácito') entre pares para atribuírem notas máximas mútuas ou vinganças pessoais.",
      "Incorreta. A 360 graus avalia fortemente competências comportamentais e atitudinais.",
      "Incorreta. A tabulação e consolidação das múltiplas fontes na 360 graus é complexa e exige alto esforço de análise.",
      "Incorreta. A dependência de um único avaliador é a falha dos métodos lineares/hierárquicos simples (180 ou 90 graus)."
    ],
    generalExplanation: "O risco de complô ou conluio entre colegas de mesmo nível hierárquico (avaliação por pares) é uma das principais desvantagens documentadas na Avaliação 360 Graus.",
    banca: "IBGE / Administração Pública",
    ano: 2024,
    assunto: "Noções de Administração: Gestão de Desempenho - Métodos de Avaliação (360 Graus)",
    nivelSuperior: true
  },
  {
    id: "adm_batch2_q203",
    text: "Considere que uma instituição pública deseja um método de avaliação que seja capaz de identificar talentos para promoção e, ao mesmo tempo, detectar falhas graves de comportamento que exigem treinamento imediato, sem se preocupar com o desempenho mediano ou rotineiro. O método mais adequado para este objetivo específico é:",
    options: [
      "A) Escalas Gráficas.",
      "B) Escolha Forçada.",
      "C) Incidentes Críticos.",
      "D) Pesquisa de Campo.",
      "E) Autoavaliação."
    ],
    correctIndex: 2,
    explanations: [
      "Incorreta. As Escalas Gráficas mensuram o desempenho rotineiro por meio de notas graduais.",
      "Incorreta. A Escolha Forçada avalia por blocos de frases para eliminar tendenciosidades.",
      "Correta. O método dos Incidentes Críticos baseia-se no registro sistemático dos comportamentos extremos do servidor: desempenhos altamente positivos (sucessos excepcionais) e desempenhos altamente negativos (falhas graves), desconsiderando a faixa de desempenho rotineiro.",
      "Incorreta. A Pesquisa de Campo realiza entrevistas detalhadas conduzidas por especialistas.",
      "Incorreta. A autoavaliação é a autoanálise do próprio servidor."
    ],
    generalExplanation: "O método dos Incidentes Críticos foca exclusivamente nas exceções: fatos notáveis positivos (para reconhecimento/promoção) e negativos (para correção imediata).",
    banca: "IBGE / Administração Pública",
    ano: 2024,
    assunto: "Noções de Administração: Gestão de Desempenho - Métodos de Avaliação (Incidentes Críticos)",
    nivelSuperior: true
  },
  {
    id: "adm_batch2_q204",
    text: "Sobre o método de Escolha Forçada, é correto afirmar que uma de suas principais limitações para o desenvolvimento do servidor é:",
    options: [
      "A) A subjetividade inerente ao uso de adjetivos como 'bom' ou 'regular'.",
      "B) A falta de informações para o fornecimento de um feedback construtivo pelo avaliador.",
      "C) O alto custo financeiro de implementação em comparação à Avaliação 360 Graus.",
      "D) A tendência do avaliador em marcar sempre as opções centrais do formulário.",
      "E) A necessidade de um especialista externo para entrevistar cada servidor individualmente."
    ],
    correctIndex: 1,
    explanations: [
      "Incorreta. O uso de adjetivos graduais é característico do método de Escalas Gráficas.",
      "Correta. Na Escolha Forçada, o avaliador escolhe frases pré-ponderadas sem saber exatamente qual pontuação estatística cada uma gera. Como o resultado é calculado estatisticamente a posteriori, o avaliador tem enorme dificuldade em explicar ao subordinado os motivos da sua nota final, prejudicando o feedback.",
      "Incorreta. O custo administrativo da Escolha Forçada não supera o da 360 graus.",
      "Incorreta. O método foi concebido justamente para erradicar o vício da tendência central.",
      "Incorreta. A entrevista por especialista é a característica definidora da Pesquisa de Campo."
    ],
    generalExplanation: "No método de Escolha Forçada, a falta de transparência sobre o peso matemático das frases faz com que o avaliador não consiga dar um feedback detalhado ao colaborador sobre seu resultado.",
    banca: "IBGE / Administração Pública",
    ano: 2024,
    assunto: "Noções de Administração: Gestão de Desempenho - Métodos de Avaliação (Escolha Forçada)",
    nivelSuperior: true
  },
  {
    id: "adm_batch2_q205",
    text: "Considere que um gestor público, ao fornecer feedback a um subordinado, utilize as seguintes frases: 'Você é desatento com os prazos' e 'Sua postura é pouco profissional'. À luz das boas práticas de feedback na Administração Pública, essas afirmações são consideradas inadequadas porque:",
    options: [
      "A) São excessivamente específicas, o que pode intimidar o servidor e gerar barreiras hierárquicas.",
      "B) Focam na pessoa e em julgamentos de valor, em vez de focarem em comportamentos observáveis e fatos concretos.",
      "C) Deveriam ser proferidas em público para servir de exemplo aos demais membros da equipe administrativa.",
      "D) O feedback corretivo só deve ser aplicado se houver previsão expressa no estatuto dos servidores daquela entidade.",
      "E) A linguagem técnica utilizada é incompreensível para servidores de nível médio ou operacional."
    ],
    correctIndex: 1,
    explanations: [
      "Incorreta. As frases são genéricas e rotuladoras, não específicas.",
      "Correta. O feedback eficaz deve ser estritamente descritivo e fundamentado em dados/fatos observáveis (ex.: 'o processo X foi entregue com 2 dias de atraso'), e nunca avaliativo ou focado na personalidade da pessoa ('você é desatento'), o que gera postura defensiva e desmotivação.",
      "Incorreta. Feedback corretivo deve ser fornecido sempre em ambiente reservado/individual.",
      "Incorreta. O feedback é instrumento permanente de gestão de pessoas.",
      "Incorreta. As expressões não continham termos técnicos complexos, mas sim rótulos subjetivos."
    ],
    generalExplanation: "Um bom feedback foca em fatos, comportamentos e prazos observáveis (o que aconteceu), e nunca em rótulos pessoais ou julgamentos de caráter (quem a pessoa é).",
    banca: "IBGE / Administração Pública",
    ano: 2024,
    assunto: "Noções de Administração: Gestão de Desempenho - Práticas de Feedback",
    nivelSuperior: true
  },
  {
    id: "adm_batch2_q206",
    text: "A bidirecionalidade é um elemento vital do feedback no modelo de Administração Pública Gerencial. Esse conceito implica que:",
    options: [
      "A) O feedback deve ser dado simultaneamente por dois avaliadores distintos para garantir a imparcialidade.",
      "B) O servidor avaliado tem o direito de fornecer feedback ao seu gestor e sobre os processos de trabalho da organização.",
      "C) A avaliação de desempenho deve obrigatoriamente resultar em duas notas: uma técnica e uma comportamental.",
      "D) O processo de feedback deve ocorrer em duas etapas obrigatórias: uma verbal e outra necessariamente judicial.",
      "E) O feedback positivo deve sempre ser acompanhado de um feedback corretivo para manter o equilíbrio emocional."
    ],
    correctIndex: 1,
    explanations: [
      "Incorreta. Bidirecionalidade refere-se ao canal de comunicação em mão dupla, não ao número de avaliadores.",
      "Correta. A bidirecionalidade transforma o feedback em uma via de mão dupla (diálogo), onde o subordinado pode apontar gargalos nos processos, falta de insumos ou oportunidades de melhoria na própria liderança.",
      "Incorreta. Trata-se da estrutura do formulário de notas, não de bidirecionalidade.",
      "Incorreta. O feedback é processo administrativo gerencial, sem necessidade de esfera judicial.",
      "Incorreta. Não há regra de obrigatoriedade de paridade mecânica."
    ],
    generalExplanation: "Bidirecionalidade no feedback significa que a comunicação flui nos dois sentidos: o líder avalia o desempenho do liderado e o liderado tem espaço para expor suas percepções sobre a gestão e os processos organizacionais.",
    banca: "IBGE / Administração Pública",
    ano: 2024,
    assunto: "Noções de Administração: Gestão de Desempenho - Práticas de Feedback",
    nivelSuperior: true
  },
  {
    id: "adm_batch2_q207",
    text: "A literatura sobre gestão do desempenho alerta para a existência de 'indicadores perversos'. Assinale a alternativa que descreve corretamente esse fenômeno e suas implicações na Administração Pública.",
    options: [
      "A) Ocorre quando o custo de obtenção do dado é superior ao benefício da informação gerada.",
      "B) Refere-se a indicadores que utilizam fórmulas matemáticas excessivamente complexas, impedindo a transparência.",
      "C) Ocorre quando a métrica induz os agentes a comportamentos que priorizam o indicador em detrimento do objetivo finalístico.",
      "D) Refere-se à falta de sensibilidade do indicador em captar pequenas variações no desempenho institucional.",
      "E) Ocorre quando um indicador de insumo (input) é confundido com um indicador de processo (throughput)."
    ],
    correctIndex: 2,
    explanations: [
      "Incorreta. Trata-se de inobservância do atributo da economicidade.",
      "Incorreta. Trata-se de falta de simplicidade/clareza.",
      "Correta. 'Indicadores perversos' são aqueles que criam incentivos distorcidos (Lei de Goodhart: 'quando uma medida se torna uma meta, ela deixa de ser uma boa medida'), fazendo com que as equipes manipulem rotinas apenas para bater o número do indicador, prejudicando a qualidade do serviço ou a missão pública.",
      "Incorreta. Trata-se de deficiência na sensibilidade.",
      "Incorreta. Trata-se de erro de enquadramento na cadeia de valor."
    ],
    generalExplanation: "Indicadores perversos provocam comportamentos disfuncionais: os colaboradores priorizam alcançar a meta numérica formal em detrimento do verdadeiro propósito e da qualidade do serviço público.",
    banca: "IBGE / Administração Pública",
    ano: 2024,
    assunto: "Noções de Administração: Gestão de Desempenho - Indicadores Perversos",
    nivelSuperior: true
  },
  {
    id: "adm_batch2_q208",
    text: "Um indicador de desempenho que mede o 'Tempo médio de tramitação de processos de licitação' e um que mede o 'Percentual de redução do analfabetismo funcional' classificam-se, respectivamente, na cadeia de valor, como indicadores de:",
    options: [
      "A) Insumo e Produto.",
      "B) Processo e Resultado (Impacto).",
      "C) Produto e Processo.",
      "D) Eficiência e Insumo.",
      "E) Resultado e Produto."
    ],
    correctIndex: 1,
    explanations: [
      "Incorreta. Insumo (input) refere-se a recursos financeiros ou humanos alocados.",
      "Correta. O 'tempo médio de tramitação' mede o fluxo interno das atividades (indicador de Processo / Throughput). Já o 'percentual de redução do analfabetismo' mede a transformação na sociedade (indicador de Resultado / Impacto / Outcome).",
      "Incorreta. Produto (output) seria 'número de editais publicados'.",
      "Incorreta. A segunda métrica não é um insumo.",
      "Incorreta. A ordem está invertida."
    ],
    generalExplanation: "Na cadeia de valor de políticas públicas: Processo (Throughput) = tempo de tramitação de expedientes; Impacto/Resultado (Outcome) = melhoria real na vida dos cidadãos (redução do analfabetismo).",
    banca: "IBGE / Administração Pública",
    ano: 2024,
    assunto: "Noções de Administração: Gestão de Desempenho - Cadeia de Valor e Indicadores",
    nivelSuperior: true
  },
  {
    id: "adm_batch2_q209",
    text: "No âmbito da Gestão de Pessoas, o recrutamento é frequentemente definido como um processo de comunicação entre a organização e o mercado de trabalho. Assinale a alternativa que descreve corretamente o objetivo principal desse processo.",
    options: [
      "A) Selecionar o candidato mais apto para o exercício imediato das atribuições do cargo.",
      "B) Atrair candidatos potencialmente qualificados para ocupar vagas dentro da organização.",
      "C) Avaliar o desempenho dos servidores atuais para fins de promoção e progressão funcional.",
      "D) Treinar novos colaboradores para que se adaptem rapidamente à cultura organizacional.",
      "E) Desligar colaboradores que não atingiram as metas institucionais estabelecidas no período."
    ],
    correctIndex: 1,
    explanations: [
      "Incorreta. Escolher o melhor candidato entre os inscritos é a função da 'Seleção'.",
      "Correta. O Recrutamento é a etapa inicial de atração e captação de talentos (comunicação externa/interna para gerar um banco de candidatos qualificados).",
      "Incorreta. Trata-se do processo de Avaliação de Desempenho.",
      "Incorreta. Trata-se dos processos de Treinamento e Integração/Socialização.",
      "Incorreta. Trata-se do processo de Desligamento."
    ],
    generalExplanation: "Recrutamento = atração e divulgação de oportunidades para atrair candidatos qualificados. Seleção = triagem, testes e escolha do candidato ideal.",
    banca: "IBGE / Administração Geral",
    ano: 2024,
    assunto: "Noções de Administração: Gestão de Pessoas - Recrutamento e Seleção",
    nivelSuperior: false
  },
  {
    id: "adm_batch2_q210",
    text: "O recrutamento interno é uma estratégia utilizada pela Administração Pública para preencher funções de confiança ou realizar movimentações de pessoal. Entre as vantagens dessa modalidade, destaca-se:",
    options: [
      "A) A renovação da cultura organizacional por meio da entrada de novas ideias.",
      "B) O aumento do capital intelectual com talentos vindos do mercado externo.",
      "C) A redução de custos e a valorização dos servidores que já integram a instituição.",
      "D) A garantia de que o 'Princípio de Peter' será evitado em todas as promoções.",
      "E) A eliminação da necessidade de qualquer processo seletivo para cargos de carreira."
    ],
    correctIndex: 2,
    explanations: [
      "Incorreta. Trazer 'oxigenação' e novas ideias são vantagens clássicas do recrutamento externo.",
      "Incorreta. Captação de novos talentos externos é característica do recrutamento externo.",
      "Correta. O recrutamento interno é significativamente mais econômico e rápido (menor custo de divulgação/processo) e atua como poderoso incentivo motivacional aos servidores da casa (plano de carreira e valorização).",
      "Incorreta. O Princípio de Peter (promover alguém até seu nível de incompetência) é um risco potencial do recrutamento interno, não uma vantagem.",
      "Incorreta. No setor público, cargos de carreira exigem concurso público (recrutamento externo amplo)."
    ],
    generalExplanation: "Principais vantagens do recrutamento interno: maior rapidez, menor custo financeiro, melhor aproveitamento do potencial interno e motivação/valorização dos colaboradores já existentes.",
    banca: "IBGE / Administração Geral",
    ano: 2024,
    assunto: "Noções de Administração: Gestão de Pessoas - Recrutamento Interno",
    nivelSuperior: false
  },
  {
    id: "adm_batch2_q211",
    text: "No âmbito da Gestão de Pessoas, os conceitos de Treinamento e Desenvolvimento, embora correlacionados, apresentam distinções fundamentais quanto ao foco e aos objetivos temporais. Sobre o Treinamento, é correto afirmar que:",
    options: [
      "A) Trata-se de um processo de longo prazo voltado para o crescimento na carreira.",
      "B) Visa preparar o servidor para desafios futuros e cargos de maior complexidade.",
      "C) É um processo de curto prazo, focado nas tarefas e exigências do cargo atual.",
      "D) Possui como objetivo principal a educação geral e o desenvolvimento da personalidade.",
      "E) Foca exclusivamente na mudança de cultura organizacional em nível estratégico."
    ],
    correctIndex: 2,
    explanations: [
      "Incorreta. O foco em longo prazo e na carreira define o Desenvolvimento, não o Treinamento.",
      "Incorreta. A preparação para desafios futuros e crescimento profissional é característica do Desenvolvimento.",
      "Correta. O Treinamento é um processo educacional de curto prazo, aplicado de maneira sistemática e organizada, por meio do qual as pessoas aprendem conhecimentos, atitudes e habilidades em função de objetivos definidos para o cargo atual.",
      "Incorreta. O treinamento é operacional e técnico, voltado para tarefas imediatas, enquanto a educação geral é mais ampla.",
      "Incorreta. O treinamento atua primordialmente nos níveis operacional e tático para suprir carências imediatas de desempenho."
    ],
    generalExplanation: "Treinamento foca no curto prazo e nas exigências do cargo atual. Desenvolvimento foca no longo prazo, na carreira e no potencial para posições futuras.",
    banca: "IBGE / Administração Geral",
    ano: 2024,
    assunto: "Noções de Administração: Gestão de Pessoas - Treinamento e Desenvolvimento",
    nivelSuperior: false
  },
  {
    id: "adm_batch2_q212",
    text: "O processo de Treinamento e Desenvolvimento (T&D) é sistêmico e composto por etapas sequenciais. Assinale a alternativa que apresenta a sequência correta das quatro etapas do ciclo de treinamento.",
    options: [
      "A) Planejamento, Execução, Controle e Feedback.",
      "B) Diagnóstico, Programação, Implementação e Avaliação.",
      "C) Recrutamento, Seleção, Treinamento e Desligamento.",
      "D) Análise, Desenho, Verificação e Manutenção.",
      "E) Levantamento, Organização, Aplicação e Reação."
    ],
    correctIndex: 1,
    explanations: [
      "Incorreta. Reflete o ciclo de gestão geral (PDCA), mas não a nomenclatura clássica do ciclo de T&D.",
      "Correta. O ciclo clássico de T&D (Chiavenato) é composto por: 1) Diagnóstico (Levantamento de Necessidades de Treinamento - LNT); 2) Programação/Desenho (quem, como, quando treinar); 3) Implementação/Execução (condução do treinamento); e 4) Avaliação dos resultados.",
      "Incorreta. Estes representam macroprocessos de Gestão de Pessoas (subsistemas de RH).",
      "Incorreta. Nomenclatura não compatível com a teoria clássica de T&D.",
      "Incorreta. 'Reação' é um dos níveis do modelo Kirkpatrick de avaliação, não o nome da quarta etapa macro."
    ],
    generalExplanation: "As quatro etapas do ciclo de T&D são: Diagnóstico (LNT) → Programação (Desenho do projeto) → Implementação (Execução) → Avaliação (Resultados obtidos).",
    banca: "IBGE / Administração Geral",
    ano: 2024,
    assunto: "Noções de Administração: Gestão de Pessoas - Ciclo de Treinamento (T&D)",
    nivelSuperior: false
  },
  {
    id: "adm_batch2_q213",
    text: "No âmbito da Gestão de Pessoas, a competência é tradicionalmente compreendida por meio do acrônimo CHA. Assinale a alternativa que apresenta corretamente os três elementos que compõem essa tríade.",
    options: [
      "A) Comprometimento, Hierarquia e Aptidão.",
      "B) Conhecimento, Habilidade e Atitude.",
      "C) Comunicação, Humanização e Agilidade.",
      "D) Capacidade, Honestidade e Altruísmo.",
      "E) Conformidade, Histórico e Atribuição."
    ],
    correctIndex: 1,
    explanations: [
      "Incorreta. Embora comprometimento e aptidão sejam importantes, não formam a tríade CHA.",
      "Correta. A sigla CHA corresponde a: Conhecimento (Saber - dimensão cognitiva), Habilidade (Saber Fazer - dimensão técnica/prática) e Atitude (Querer Fazer - dimensão comportamental/afetiva).",
      "Incorreta. São atributos e competências específicas, não os pilares da tríade conceitual.",
      "Incorreta. Honestidade e altruísmo são valores éticos.",
      "Incorreta. Termos não condizentes com a estrutura de competências individuais."
    ],
    generalExplanation: "A tríade do CHA é formada por Conhecimento (Saber teórico), Habilidade (Saber fazer prático) e Atitude (Querer fazer / postura proativa).",
    banca: "IBGE / Administração Geral",
    ano: 2024,
    assunto: "Noções de Administração: Gestão por Competências (CHA)",
    nivelSuperior: false
  },
  {
    id: "adm_batch2_q214",
    text: "Um Agente Administrativo que domina integralmente o conteúdo da Lei nº 8.112/1990 e as normas de Redação Oficial demonstra possuir, primordialmente, qual dimensão da competência?",
    options: [
      "A) Habilidade.",
      "B) Atitude.",
      "C) Conhecimento.",
      "D) Entrega.",
      "E) Resiliência."
    ],
    correctIndex: 2,
    explanations: [
      "Incorreta. A habilidade seria a aplicação prática desse saber (ex.: redigir com excelência o ofício).",
      "Incorreta. A atitude diz respeito à disposição, iniciativa e vontade de trabalhar.",
      "Correta. O Conhecimento é o 'Saber': envolve a bagagem teórica, o domínio conceitual das leis, normas, regras e informações formais.",
      "Incorreta. A entrega é o resultado gerado pela agregação das competências em ação.",
      "Incorreta. Resiliência é um traço comportamental de enfrentamento a adversidades."
    ],
    generalExplanation: "O domínio teórico e cognitivo de legislações, manuais e normas de redação oficial corresponde à dimensão do Conhecimento (Saber).",
    banca: "IBGE / Administração Geral",
    ano: 2024,
    assunto: "Noções de Administração: Gestão por Competências (CHA)",
    nivelSuperior: false
  },
  {
    id: "adm_batch2_q215",
    text: "No âmbito da Gestão por Competências, o modelo amplamente adotado pela literatura administrativa e pelas bancas examinadoras é o tripé conhecido como CHA. Sobre esse conceito, a 'Habilidade' refere-se ao:",
    options: [
      "A) Conjunto de informações e saberes teóricos acumulados pelo servidor.",
      "B) Desejo intrínseco de realizar uma tarefa e a proatividade do indivíduo.",
      "C) Saber fazer, ou seja, a aplicação prática do conhecimento para a execução de tarefas.",
      "D) Diploma de graduação ou certificação técnica obtida em instituições de ensino.",
      "E) Comportamento ético e moral esperado do servidor no exercício da função pública."
    ],
    correctIndex: 2,
    explanations: [
      "Incorreta. Esta é a definição de Conhecimento (Saber).",
      "Incorreta. Esta é a definição de Atitude (Querer Fazer).",
      "Correta. A Habilidade é o 'Saber Fazer': a capacidade de aplicar o conhecimento cognitivo na prática operacional para resolver problemas e executar tarefas.",
      "Incorreta. Diplomas comprovam conhecimento formal, não necessariamente a habilidade prática.",
      "Incorreta. Aspectos éticos e comportamentais integram a dimensão da Atitude."
    ],
    generalExplanation: "Habilidade = 'Saber Fazer'. É a transposição do conhecimento teórico em ação prática e operacional produtiva.",
    banca: "IBGE / Administração Geral",
    ano: 2024,
    assunto: "Noções de Administração: Gestão por Competências (CHA)",
    nivelSuperior: false
  },
  {
    id: "adm_batch2_q216",
    text: "A Gestão por Resultados na administração pública contemporânea marca uma transição do modelo burocrático para o gerencial. Uma característica central desse modelo é:",
    options: [
      "A) O controle rígido dos processos e meios, independentemente do produto final.",
      "B) A priorização do alcance de metas mensuráveis e a entrega de valor público.",
      "C) A centralização das decisões no topo da hierarquia para garantir a padronização.",
      "D) A eliminação total de indicadores de desempenho para reduzir a burocracia.",
      "E) O foco exclusivo no cumprimento estrito de normas e regulamentos internos."
    ],
    correctIndex: 1,
    explanations: [
      "Incorreta. O controle a priori sobre processos e meios é a marca do modelo Burocrático tradicional.",
      "Correta. A Gestão por Resultados (Administração Gerencial) enfatiza os fins (outputs e outcomes), o cumprimento de metas contratuais e a geração de impacto positivo (valor público) para o cidadão-usuário.",
      "Incorreta. O modelo gerencial preconiza a descentralização decisória e autonomia operacional.",
      "Incorreta. Indicadores de desempenho são essenciais e indispensáveis na Gestão por Resultados.",
      "Incorreta. O apego estrito a regras em detrimento dos resultados finais é a disfunção burocrática por excelência."
    ],
    generalExplanation: "A Gestão por Resultados substitui a ênfase burocrática nos processos e meios pelo foco nos resultados, metas mensuráveis e na criação de valor público para a sociedade.",
    banca: "IBGE / Administração Geral",
    ano: 2024,
    assunto: "Noções de Administração: Gestão por Resultados e Administração Gerencial",
    nivelSuperior: false
  },
  {
    id: "adm_batch2_q217",
    text: "Na Administração Pública brasileira, o recrutamento externo é regido por princípios constitucionais rígidos. Sobre essa modalidade de recrutamento no setor público, assinale a alternativa correta.",
    options: [
      "A) O edital de concurso público é o principal instrumento de recrutamento externo.",
      "B) O recrutamento externo é mais rápido que o interno por dispensar regulamentos próprios.",
      "C) A principal desvantagem do recrutamento externo é a manutenção do status quo organizacional.",
      "D) O recrutamento externo no setor público é facultativo para o provimento de cargos efetivos.",
      "E) O custo do recrutamento externo é reduzido, pois a banca examinadora assume todos os riscos."
    ],
    correctIndex: 0,
    explanations: [
      "Correta. O edital de concurso público (ou de processo seletivo simplificado) é o instrumento formal e oficial de chamamento e atração do mercado de trabalho para o provimento de cargos públicos.",
      "Incorreta. O recrutamento externo é mais moroso devido a prazos de inscrição, recursos e homologação.",
      "Incorreta. A manutenção do status quo (conservadorismo) é desvantagem do recrutamento interno; o externo renova a cultura e traz novas ideias.",
      "Incorreta. O concurso público é obrigatório (Art. 37, II da CF/88) para cargos efetivos.",
      "Incorreta. O recrutamento externo envolve custos financeiros elevados com bancas, logística e publicações."
    ],
    generalExplanation: "O edital de concurso público é o principal instrumento de recrutamento externo na Administração Pública, garantindo ampla publicidade, isonomia e impessoalidade.",
    banca: "IBGE / Administração Geral",
    ano: 2024,
    assunto: "Noções de Administração: Gestão de Pessoas - Recrutamento no Setor Público",
    nivelSuperior: false
  },
  {
    id: "adm_batch2_q218",
    text: "Considere que uma determinada autarquia federal decida preencher vagas de chefia utilizando servidores de seu próprio quadro e, simultaneamente, publique um edital para a contratação de novos técnicos administrativos. Essa estratégia é classificada como:",
    options: [
      "A) Recrutamento Horizontal.",
      "B) Recrutamento Misto.",
      "C) Recrutamento Direto.",
      "D) Recrutamento de Carreira.",
      "E) Recrutamento por Competência."
    ],
    correctIndex: 1,
    explanations: [
      "Incorreta. Recrutamento horizontal não é denominação técnica usual para a combinação de origens.",
      "Correta. O recrutamento misto ocorre quando a instituição utiliza simultaneamente ou sucessivamente fontes internas (servidores da casa para chefias) e fontes externas (candidatos de fora via concurso para técnicos).",
      "Incorreta. Recrutamento direto refere-se ao canal de comunicação sem intermediários.",
      "Incorreta. Termo não técnico para a modalidade mista.",
      "Incorreta. Refere-se aos critérios de avaliação do perfil, e não à fonte dos candidatos."
    ],
    generalExplanation: "O recrutamento misto conjuga o recrutamento interno (valorização e aproveitamento dos quadros existentes) com o recrutamento externo (oxigenação e entrada de novos servidores).",
    banca: "IBGE / Administração Geral",
    ano: 2024,
    assunto: "Noções de Administração: Gestão de Pessoas - Recrutamento Misto",
    nivelSuperior: false
  },
  {
    id: "adm_batch2_q219",
    text: "Embora o recrutamento interno apresente diversas vantagens, o gestor público deve estar atento aos seus riscos. Um dos principais pontos negativos dessa modalidade é:",
    options: [
      "A) A elevação excessiva dos custos operacionais com a publicação de editais.",
      "B) A dificuldade de adaptação do servidor ao novo ambiente de trabalho.",
      "C) A possibilidade de gerar conflitos de interesse e ciúmes entre os colaboradores.",
      "D) A entrada massiva de novas ideias que podem desestabilizar a cultura atual.",
      "E) A obrigatoriedade de realizar um novo concurso público para cada movimentação."
    ],
    correctIndex: 2,
    explanations: [
      "Incorreta. Custos com publicação de editais ocorrem no recrutamento externo.",
      "Incorreta. A adaptação no recrutamento interno é rápida, pois o servidor já conhece a cultura do órgão.",
      "Correta. A disputa interna por posições de chefia ou melhores lotações pode suscitar rivalidades, ciúmes, conflitos interpessoais e frustração naqueles que não forem promovidos.",
      "Incorreta. A entrada de novas ideias ocorre no recrutamento externo; o recrutamento interno tende ao conservadorismo.",
      "Incorreta. Movimentações internas não demandam concurso público."
    ],
    generalExplanation: "Desvantagens do recrutamento interno: risco de gerar conflitos de interesse e ciúmes entre colegas de equipe, além de potencial conservadorismo organizacional.",
    banca: "IBGE / Administração Geral",
    ano: 2024,
    assunto: "Noções de Administração: Gestão de Pessoas - Desvantagens do Recrutamento Interno",
    nivelSuperior: false
  },
  {
    id: "adm_batch2_q220",
    text: "Sobre o fluxo do recrutamento externo no setor público, assinale a alternativa que apresenta a sequência lógica correta das etapas iniciais desse processo.",
    options: [
      "A) Publicação do edital -> Escolha da banca -> Identificação da vacância -> Inscrições.",
      "B) Identificação da vacância -> Autorização orçamentária -> Escolha da banca -> Publicação do edital.",
      "C) Inscrições -> Escolha da banca -> Autorização orçamentária -> Publicação do edital.",
      "D) Autorização orçamentária -> Inscrições -> Publicação do edital -> Escolha da banca.",
      "E) Escolha da banca -> Publicação do edital -> Identificação da vacância -> Autorização orçamentária."
    ],
    correctIndex: 1,
    explanations: [
      "Incorreta. Não se pode publicar edital antes de escolher a banca e constatar a vaga.",
      "Correta. A sequência administrativa lógica e legal é: 1) Identificação da necessidade/vagas abertas (vacância); 2) Comprovação e autorização de disponibilidade orçamentária (LRF); 3) Contratação/Escolha da instituição organizadora (banca); e 4) Lançamento e publicação do edital de abertura.",
      "Incorreta. As inscrições só abrem após a publicação do edital.",
      "Incorreta. A ordem está invertida em relação à banca e edital.",
      "Incorreta. A identificação da vacância e orçamento são requisitos prévios à contratação da banca."
    ],
    generalExplanation: "Fluxo lógico do concurso público: Identificação da vacância → Autorização orçamentária → Escolha da banca organizadora → Publicação do edital de abertura.",
    banca: "IBGE / Administração Geral",
    ano: 2024,
    assunto: "Noções de Administração: Gestão de Pessoas - Processo de Concurso Público",
    nivelSuperior: false
  },
  {
    id: "adm_batch2_q221",
    text: "O Levantamento de Necessidades de Treinamento (LNT) é a etapa de diagnóstico que fundamenta todo o processo. Segundo a literatura de Gestão de Pessoas, esse diagnóstico pode ocorrer em diferentes níveis. Quando o foco da análise recai sobre os requisitos exigidos pelo cargo de Agente Administrativo, estamos realizando uma:",
    options: [
      "A) Análise Organizacional.",
      "B) Análise de Recursos Humanos.",
      "C) Análise de Clima Organizacional.",
      "D) Análise das Tarefas e Operações.",
      "E) Análise de Retorno sobre Investimento (ROI)."
    ],
    correctIndex: 3,
    explanations: [
      "Incorreta. A análise organizacional examina a estratégia global, missão e objetivos macro do órgão.",
      "Incorreta. A análise de recursos humanos foca no perfil, atitudes e competências das pessoas/equipes.",
      "Incorreta. O clima organizacional avalia a satisfação e percepção do ambiente pelos servidores.",
      "Correta. A análise das tarefas e operações (ou análise do trabalho) examina os requisitos técnicos, competências e atribuições exigidas pelo cargo específico para determinar o que deve ser ensinado.",
      "Incorreta. O ROI é um indicador de avaliação de impacto financeiro pós-treinamento."
    ],
    generalExplanation: "Os três níveis clássicos de LNT são: Análise Organizacional (nível macro/institucional), Análise dos Recursos Humanos (nível das pessoas) e Análise das Tarefas/Operações (nível dos cargos e rotinas de trabalho).",
    banca: "IBGE / Administração Geral",
    ano: 2024,
    assunto: "Noções de Administração: Gestão de Pessoas - Levantamento de Necessidades de Treinamento (LNT)",
    nivelSuperior: false
  },
  {
    id: "adm_batch2_q222",
    text: "A visão moderna de Treinamento e Desenvolvimento na Administração Pública rompe com paradigmas tradicionais. Sobre a eficácia de um programa de treinamento, assinale a afirmativa correta.",
    options: [
      "A) A eficácia é garantida quando há um alto índice de satisfação dos servidores com a infraestrutura do curso.",
      "B) O treinamento deve ser visto como uma despesa necessária para manter o servidor ocupado fora do horário de pico.",
      "C) A eficácia do treinamento é comprovada pela mudança de comportamento no trabalho e melhoria dos indicadores institucionais.",
      "D) O sucesso de um treinamento é medido exclusivamente pela quantidade de certificados emitidos ao final do processo.",
      "E) A presença massiva de servidores em uma palestra é o indicador definitivo de que o gap de competências foi extinto."
    ],
    correctIndex: 2,
    explanations: [
      "Incorreta. A satisfação com infraestrutura mede apenas a Reação (1º nível de Kirkpatrick), não garantindo aplicação prática.",
      "Incorreta. Na administração moderna, T&D é investimento estratégico em capital humano.",
      "Correta. A verdadeira eficácia do treinamento reside na transferência do aprendizado para a prática laboral (Comportamento) e na melhoria mensurável dos processos e metas do órgão (Resultados).",
      "Incorreta. Certificados atestam frequência/conclusão, mas não a aplicação das competências no trabalho.",
      "Incorreta. Presença numérica é dado de participação, não de absorção ou eliminação de lacunas."
    ],
    generalExplanation: "A eficácia real de um treinamento é demonstrada quando o conhecimento adquirido é transferido para a rotina de trabalho gerando mudanças comportamentais e melhoria nos resultados da organização.",
    banca: "IBGE / Administração Geral",
    ano: 2024,
    assunto: "Noções de Administração: Gestão de Pessoas - Eficácia do Treinamento",
    nivelSuperior: false
  },
  {
    id: "adm_batch2_q223",
    text: "Considere a seguinte situação hipotética: João é servidor público, possui pós-graduação na sua área de atuação (Conhecimento) e opera com maestria os sistemas informatizados do órgão (Habilidade). No entanto, João frequentemente se recusa a colaborar com seus colegas e demonstra desinteresse em atender às demandas urgentes da repartição. Com base no modelo CHA, é correto afirmar que:",
    options: [
      "A) João é um servidor plenamente competente, pois o conhecimento e a habilidade suprem a falta de atitude.",
      "B) A deficiência de João reside na dimensão da Atitude, o que compromete a sua competência efetiva no cargo.",
      "C) João possui apenas competências comportamentais (soft skills), carecendo de competências técnicas.",
      "D) A situação de João deve ser resolvida exclusivamente com treinamentos técnicos de curta duração.",
      "E) O comportamento de João caracteriza falta de Habilidade, pois ele não sabe trabalhar em equipe."
    ],
    correctIndex: 1,
    explanations: [
      "Incorreta. A competência é integrativa; sem a atitude (querer fazer), o conhecimento e a habilidade não se traduzem em desempenho satisfatório.",
      "Correta. João apresenta lacuna clara na Atitude (dimensão volitiva/comportamental, que engloba iniciativa, colaboração, engajamento e compromisso com o serviço público).",
      "Incorreta. É o inverso: ele possui competências técnicas (Hard Skills) comprovadas, mas tem deficiência comportamental (Soft Skills).",
      "Incorreta. Treinamentos técnicos ensinam novas regras ou sistemas; atitude demanda ações motivacionais, de liderança ou gestão de clima.",
      "Incorreta. A recusa deliberada e o desinteresse são problemas de postura/atitude e não de capacidade operacional."
    ],
    generalExplanation: "A competência requer a sinergia entre Conhecimento (Saber), Habilidade (Saber fazer) e Atitude (Querer fazer). O desinteresse e a recusa em cooperar caracterizam um gap na dimensão da Atitude.",
    banca: "IBGE / Administração Geral",
    ano: 2024,
    assunto: "Noções de Administração: Gestão por Competências (CHA)",
    nivelSuperior: false
  },
  {
    id: "adm_batch2_q224",
    text: "No processo de Gestão por Competências, a administração pública realiza o mapeamento das competências necessárias para cada cargo. Quando se identifica uma discrepância entre as competências que o servidor possui e aquelas exigidas para o desempenho excelente da função, dá-se o nome de:",
    options: [
      "A) Turnover de competências.",
      "B) Enriquecimento de cargo.",
      "C) Gap ou Lacuna de competência.",
      "D) Avaliação de desempenho 360 graus.",
      "E) Visão de estoque de talentos."
    ],
    correctIndex: 2,
    explanations: [
      "Incorreta. Turnover é o índice de rotatividade e substituição de servidores.",
      "Incorreta. Enriquecimento de cargo é o redesenho da função com maior complexidade ou responsabilidade.",
      "Correta. O Gap (ou Lacuna) de competência é a diferença matemática/qualitativa entre a competência necessária/desejada pelo órgão e a competência atualmente demonstrada pelo servidor. É essa lacuna que orienta o plano de T&D.",
      "Incorreta. Avaliação 360 graus é um método avaliativo com múltiplas fontes.",
      "Incorreta. Estoque de talentos refere-se ao inventário de competências disponíveis na organização."
    ],
    generalExplanation: "Gap ou Lacuna de competência é a discrepância entre as competências requeridas pelo cargo e as competências reais que o colaborador demonstra.",
    banca: "IBGE / Administração Geral",
    ano: 2024,
    assunto: "Noções de Administração: Gestão por Competências - Gap de Competências",
    nivelSuperior: false
  },
  {
    id: "adm_batch2_q225",
    text: "As competências podem ser classificadas em Técnicas (Hard Skills) e Comportamentais (Soft Skills). Assinale a alternativa que apresenta, respectivamente, um exemplo de competência técnica e um de competência comportamental para um Agente Administrativo.",
    options: [
      "A) Ética profissional e Proatividade.",
      "B) Domínio de planilhas eletrônicas e Elaboração de pareceres.",
      "C) Liderança de equipes e Empatia no atendimento.",
      "D) Operação de sistemas de protocolo e Comunicação assertiva.",
      "E) Resiliência sob pressão e Conhecimento de Direito Administrativo."
    ],
    correctIndex: 3,
    explanations: [
      "Incorreta. Ambas são competências comportamentais (Soft Skills).",
      "Incorreta. Ambas são competências técnicas e procedimentais (Hard Skills).",
      "Incorreta. Ambas são competências comportamentais e relacionais.",
      "Correta. 'Operação de sistemas de protocolo' é uma Hard Skill (técnica, prática, mensurável diretamente). 'Comunicação assertiva' é uma Soft Skill (comportamental, interpessoal e relacional).",
      "Incorreta. A ordem está invertida (Resiliência = Soft; Direito Administrativo = Hard)."
    ],
    generalExplanation: "Hard Skills (Técnicas) envolvem ferramentas, métodos, programas e legislações (ex.: operação de sistemas). Soft Skills (Comportamentais) envolvem inteligência emocional, relacionamento interpessoal e comunicação assertiva.",
    banca: "IBGE / Administração Geral",
    ano: 2024,
    assunto: "Noções de Administração: Gestão por Competências - Hard Skills e Soft Skills",
    nivelSuperior: false
  },
  {
    id: "adm_batch2_q226",
    text: "No ciclo de implementação da Gestão por Competências, após a identificação das competências necessárias para o órgão e das competências atualmente disponíveis no quadro de servidores, a administração deve realizar a:",
    options: [
      "A) Contratualização de resultados para fins de bonificação salarial imediata.",
      "B) Análise de Gap (lacuna), identificando a discrepância entre a necessidade e a realidade.",
      "C) Demissão imediata dos servidores que não possuam as competências mapeadas.",
      "D) Extinção dos cargos que apresentem competências puramente técnicas (hard skills).",
      "E) Terceirização de todas as atividades que exijam competências comportamentais."
    ],
    correctIndex: 1,
    explanations: [
      "Incorreta. A contratualização de resultados é um instrumento da Gestão por Resultados, não uma etapa imediata do mapeamento de competências.",
      "Correta. A análise de Gap (lacuna) compara as competências necessárias (requeridas pela estratégia/cargo) com as existentes (disponíveis no quadro), apontando os desvios que orientarão as ações de capacitação e movimentação.",
      "Incorreta. O objetivo da gestão por competências é o desenvolvimento do capital humano, e não a demissão ou punição de servidores.",
      "Incorreta. As competências técnicas (hard skills) continuam sendo fundamentais e complementam as comportamentais.",
      "Incorreta. Competências comportamentais são essenciais e intrínsecas ao quadro funcional da instituição."
    ],
    generalExplanation: "A análise de Gap (lacuna de competências) é a etapa diagnóstica que mensura a distância entre o perfil de competências desejado pela organização e o perfil real apresentado pelos servidores, direcionando os programas de T&D.",
    banca: "IBGE / Administração Geral",
    ano: 2024,
    assunto: "Noções de Administração: Gestão por Competências - Análise de Gap",
    nivelSuperior: false
  },
  {
    id: "adm_batch2_q227",
    text: "Determinada Secretaria de Saúde conseguiu realizar o mutirão de cirurgias planejado dentro do prazo estabelecido, atingindo a meta de 500 procedimentos. No entanto, observou-se que o custo por cirurgia foi 30% superior ao previsto no orçamento. Com base nos conceitos de desempenho, a referida ação foi:",
    options: [
      "A) Eficaz, mas não foi eficiente.",
      "B) Eficiente, mas não foi eficaz.",
      "C) Efetiva, mas não foi eficaz.",
      "D) Eficiente e eficaz, simultaneamente.",
      "E) Efetiva, mas não foi eficiente."
    ],
    correctIndex: 0,
    explanations: [
      "Correta. A ação foi eficaz porque atingiu integralmente a meta e o objetivo planejado (500 cirurgias dentro do prazo), mas não foi eficiente porque extrapolou os custos previstos em 30%, demonstrando uso subótimo dos recursos.",
      "Incorreta. Não houve eficiência, visto que o custo por procedimento superou o planejado em 30%.",
      "Incorreta. A ação foi comprovadamente eficaz (meta atingida). A efetividade trataria do impacto social a longo prazo na saúde da população.",
      "Incorreta. Falhou na eficiência devido ao estouro orçamentário.",
      "Incorreta. O enunciado trata especificamente da relação entre meta quantitativa (eficácia) e uso de recursos orçamentários (eficiência)."
    ],
    generalExplanation: "Eficácia refere-se ao atingimento de metas e objetivos (fazer o que deve ser feito). Eficiência refere-se ao uso racional e econômico dos recursos (fazer com menor custo/desperdício). Como atingiu a meta com custo 30% maior, foi eficaz, mas não eficiente.",
    banca: "IBGE / Administração Geral",
    ano: 2024,
    assunto: "Noções de Administração: Gestão de Desempenho - Eficácia vs. Eficiência",
    nivelSuperior: false
  },
  {
    id: "adm_batch2_q228",
    text: "A Política Nacional de Desenvolvimento de Pessoas (PNDP), instituída pelo Decreto nº 9.991/2019, estabelece diretrizes para a profissionalização do serviço público federal. Segundo o normativo, o desenvolvimento de pessoas deve ser orientado pela:",
    options: [
      "A) Antiguidade do servidor na carreira, priorizando os mais experientes.",
      "B) Gestão por Competências, visando o alinhamento com a estratégia do órgão.",
      "C) Livre escolha do servidor, independentemente das necessidades da instituição.",
      "D) Disponibilidade orçamentária exclusiva para cursos de pós-graduação stricto sensu.",
      "E) Necessidade de redução do quadro de pessoal através de programas de demissão voluntária."
    ],
    correctIndex: 1,
    explanations: [
      "Incorreta. A PNDP fundamenta-se no desenvolvimento de competências alinhadas às necessidades institucionais, e não no mero critério de tempo de serviço.",
      "Correta. O Decreto nº 9.991/2019 estabelece explicitamente que as ações de desenvolvimento devem ser planejadas com base na Gestão por Competências e consolidadas no Plano de Desenvolvimento de Pessoas (PDP), alinhando o crescimento funcional aos objetivos estratégicos do órgão.",
      "Incorreta. As ações de capacitação devem atender prioritariamente às necessidades e lacunas identificadas pela instituição.",
      "Incorreta. A capacitação engloba diversas modalidades (cursos de curta duração, treinamentos em serviço, etc.), não se restringindo à pós-graduação.",
      "Incorreta. A PNDP tem como foco a qualificação contínua e a valorização do servidor, não a redução de pessoal."
    ],
    generalExplanation: "A PNDP (Decreto nº 9.991/2019) vincula o planejamento do desenvolvimento de servidores públicos federais à Gestão por Competências, garantindo que as ações de capacitação atendam às necessidades estratégicas da Administração Pública.",
    banca: "IBGE / Administração Pública",
    ano: 2024,
    assunto: "Noções de Administração: Gestão de Pessoas - Legislação e PNDP (Decreto nº 9.991/2019)",
    nivelSuperior: false
  },
  {
    id: "adm_batch2_q229",
    text: "À luz da jurisprudência do Supremo Tribunal Federal (Súmula Vinculante nº 43) e das normas constitucionais, o recrutamento interno no serviço público possui limites estritos. É correto afirmar que:",
    options: [
      "A) O recrutamento interno pode ser utilizado para promover um servidor de uma carreira de nível médio para uma de nível superior sem concurso.",
      "B) A ascensão funcional é a forma legítima de recrutamento interno para cargos de carreiras distintas após a CF/88.",
      "C) O recrutamento interno limita-se à movimentação dentro da mesma carreira ou para o preenchimento de funções gratificadas.",
      "D) Qualquer forma de recrutamento interno foi banida do serviço público pela Constituição de 1988, restando apenas o concurso público.",
      "E) O recrutamento interno permite que o servidor mude de cargo, desde que o novo cargo tenha atribuições similares, independentemente da carreira."
    ],
    correctIndex: 2,
    explanations: [
      "Incorreta. A mudança de uma carreira para outra sem concurso configura ascensão funcional, expressamente vedada pela Constituição e pela SV 43.",
      "Incorreta. A ascensão e a transposição foram declaradas inconstitucionais pelo STF após a CF/88 por violarem a exigência de concurso público prévio.",
      "Correta. No serviço público, o recrutamento interno é constitucionalmente restrito à progressão/promoção dentro da mesma carreira, movimentações horizontais (remoção/redistribuição) e provimento de cargos em comissão e funções de confiança.",
      "Incorreta. O recrutamento interno continua existindo e é amplamente utilizado de forma legal para funções de chefia e lotação interna dentro da mesma carreira.",
      "Incorreta. Mesmo havendo similaridade de atribuições, a investidura em cargo de carreira distinta exige aprovação em concurso público."
    ],
    generalExplanation: "Nos termos da Súmula Vinculante nº 43 do STF e do art. 37, II, da CF/88, é inconstitucional o provimento derivado em carreira distinta daquela para a qual o servidor foi concursado. O recrutamento interno é admitido apenas para movimentação na mesma carreira e preenchimento de funções de confiança/cargos comissionados.",
    banca: "IBGE / Administração Pública",
    ano: 2024,
    assunto: "Noções de Administração: Gestão de Pessoas - Recrutamento Interno e Súmula Vinculante 43",
    nivelSuperior: true
  },
  {
    id: "adm_batch2_q230",
    text: "Ao analisar a eficácia de um processo de recrutamento, o gestor de pessoas deve considerar o impacto organizacional de suas escolhas. Sobre a relação entre o tipo de recrutamento e seus efeitos, assinale a alternativa correta.",
    options: [
      "A) O recrutamento externo é considerado um sistema fechado, pois foca na manutenção da cultura organizacional existente.",
      "B) O recrutamento interno, embora motive o servidor, pode levar ao 'Princípio de Peter', que ocorre quando um profissional é promovido até atingir seu nível de incompetência.",
      "C) O índice de recrutamento é inversamente proporcional à eficácia da seleção: quanto mais candidatos atraídos, menor será o rigor necessário na etapa seguinte.",
      "D) O recrutamento misto é desencorajado na Administração Pública por ferir o Princípio da Impessoalidade ao privilegiar servidores da casa.",
      "E) O recrutamento externo é a estratégia ideal para situações em que a organização possui baixo orçamento e necessidade de preenchimento imediato."
    ],
    correctIndex: 1,
    explanations: [
      "Incorreta. O recrutamento externo é um sistema aberto, pois atrai novos talentos, renova a cultura e traz novas ideias ('oxigenação').",
      "Correta. O 'Princípio de Peter' (Laurence J. Peter) descreve o risco no recrutamento interno de promover um colaborador com base em seu excelente desempenho no cargo atual para uma nova função (ex.: chefia) na qual ele não possui as competências necessárias, atingindo seu nível de incompetência.",
      "Incorreta. Um maior índice de candidatos exige maior esforço e rigor dos métodos de seleção para triar os mais qualificados.",
      "Incorreta. O recrutamento misto é comum e legal, combinando fontes internas e externas conforme a necessidade do cargo e as regras normativas.",
      "Incorreta. O recrutamento externo é geralmente mais custoso e demorado que o recrutamento interno."
    ],
    generalExplanation: "O Princípio de Peter é uma das desvantagens/riscos clássicos do recrutamento interno: promover indivíduos competentes sucessivamente até que cheguem a um cargo para o qual não têm aptidão, estagnando em seu nível de incompetência.",
    banca: "IBGE / Administração Geral",
    ano: 2024,
    assunto: "Noções de Administração: Gestão de Pessoas - Recrutamento Interno e Princípio de Peter",
    nivelSuperior: true
  },
  {
    id: "adm_batch2_q231",
    text: "Donald Kirkpatrick propôs um modelo de avaliação de treinamento amplamente utilizado em concursos de alto nível. Se um gestor público aplica uma prova técnica aos servidores antes e depois de um curso de 'Redação Oficial' para verificar a aquisição de novos conhecimentos, ele está atuando no nível de:",
    options: [
      "A) Reação.",
      "B) Aprendizado.",
      "C) Comportamento.",
      "D) Resultados.",
      "E) ROI (Retorno sobre Investimento)."
    ],
    correctIndex: 1,
    explanations: [
      "Incorreta. O nível de Reação (Nível 1) mede a satisfação e a impressão dos treinandos sobre instrutor, didática e instalações.",
      "Correta. O nível de Aprendizado (Nível 2) afere a quantidade de conhecimentos, habilidades e atitudes absorvidos pelos participantes, tipicamente por meio de testes e provas pré e pós-treinamento.",
      "Incorreta. O nível de Comportamento (Nível 3) avalia a transferência e aplicação prática do aprendizado no dia a dia do trabalho.",
      "Incorreta. O nível de Resultados (Nível 4) avalia os impactos organizacionais macro (ex.: aumento da produtividade, redução de retrabalho).",
      "Incorreta. O ROI (Nível 5 de Jack Phillips) calcula o retorno financeiro líquido frente ao investimento realizado."
    ],
    generalExplanation: "No modelo dos 4 níveis de Kirkpatrick: 1) Reação (satisfação); 2) Aprendizado (aquisição de conhecimento via testes); 3) Comportamento (aplicação na prática); 4) Resultados (impacto organizacional). A prova pré e pós-teste afere o nível de Aprendizado.",
    banca: "IBGE / Administração Geral",
    ano: 2024,
    assunto: "Noções de Administração: Gestão de Pessoas - Avaliação de Treinamento (Modelo de Kirkpatrick)",
    nivelSuperior: true
  },
  {
    id: "adm_batch2_q232",
    text: "Considere que a Administração Pública identifique uma lacuna (gap) de competências em sua equipe de Agentes Administrativos. Para solucionar o problema de forma estratégica, o setor de Gestão de Pessoas deve compreender que:",
    options: [
      "A) O treinamento é um fim em si mesmo, devendo ser realizado independentemente do diagnóstico organizacional.",
      "B) O desenvolvimento de pessoas foca exclusivamente na correção de erros imediatos cometidos na execução de tarefas rotineiras.",
      "C) O treinamento atua na redução do gap entre o que o servidor sabe e o que o cargo exige, visando a eficiência administrativa.",
      "D) A avaliação de resultados deve ser a primeira etapa do ciclo de T&D para garantir que o investimento não seja desperdiçado.",
      "E) O levantamento de necessidades deve focar apenas no nível individual, ignorando os objetivos estratégicos do órgão público."
    ],
    correctIndex: 2,
    explanations: [
      "Incorreta. O treinamento é um meio (ferramenta estratégica), e não um fim em si mesmo; depende de prévio diagnóstico.",
      "Incorreta. A correção de erros pontuais e imediatos de curto prazo é papel do Treinamento; o Desenvolvimento possui escopo de longo prazo e crescimento profissional.",
      "Correta. O treinamento é um processo sistemático de curto prazo planejado para reduzir ou eliminar lacunas (gaps) de conhecimento e habilidades, capacitando o servidor para atender aos requisitos do cargo com eficiência.",
      "Incorreta. A avaliação é a quarta e última etapa do ciclo de T&D (Diagnóstico -> Programação -> Execução -> Avaliação).",
      "Incorreta. O LNT deve integrar três níveis de análise: Organizacional (estratégia), Recursos Humanos (pessoas) e Operacional/Tarefas (cargos)."
    ],
    generalExplanation: "O treinamento atua diretamente na eliminação das lacunas de competência (gap entre competências atuais e requeridas), viabilizando o alcance da eficiência e excelência nos processos administrativos.",
    banca: "IBGE / Administração Geral",
    ano: 2024,
    assunto: "Noções de Administração: Gestão de Pessoas - Ciclo de T&D e Gap de Desempenho",
    nivelSuperior: true
  },
  {
    id: "adm_batch2_q233",
    text: "Autores modernos, como Maria Tereza Fleury, propõem uma evolução do conceito de competência, superando a visão estática do CHA. Nessa perspectiva contemporânea, a competência é definida como:",
    options: [
      "A) O conjunto de diplomas e certificados acumulados pelo servidor ao longo da carreira.",
      "B) A capacidade de cumprir rigorosamente a carga horária e as ordens superiores.",
      "C) A entrega de valor para a organização e para o cidadão, por meio da mobilização de recursos.",
      "D) O estoque de conhecimentos teóricos que o indivíduo detém, independentemente de sua aplicação.",
      "E) A aptidão inata do indivíduo, que não pode ser desenvolvida por meio de treinamento."
    ],
    correctIndex: 2,
    explanations: [
      "Incorreta. Diplomas e títulos representam apenas o Conhecimento formal (visão de estoque), e não a competência em ação.",
      "Incorreta. O cumprimento de horário é obrigação disciplinar básica, distante do conceito moderno de entrega de valor.",
      "Correta. Na corrente contemporânea (Fleury & Fleury, Dutra, Zarifian), a competência é conceituada como a mobilização responsável de conhecimentos e recursos em ação, traduzindo-se na 'entrega' efetiva de valor econômico e social para a organização e para a sociedade.",
      "Incorreta. A visão de mero estoque é a perspectiva tradicional superada pela abordagem orientada a resultados/entrega.",
      "Incorreta. Competências são dinâmicas e perfeitamente passíveis de desenvolvimento e aprimoramento contínuo."
    ],
    generalExplanation: "Na abordagem moderna, competência não é apenas um estoque de CHA (o que a pessoa possui), mas sim a capacidade de agir responsavelmente mobilizando esses recursos para gerar uma 'entrega de valor' à organização e aos cidadãos.",
    banca: "IBGE / Administração Geral",
    ano: 2024,
    assunto: "Noções de Administração: Gestão por Competências - Visão Moderna e Conceito de Entrega (Fleury e Dutra)",
    nivelSuperior: true
  },
  {
    id: "adm_batch2_q234",
    text: "Sobre a interdependência dos elementos do CHA na Gestão de Pessoas, analise as assertivas abaixo:\nI. O Conhecimento e a Habilidade são necessários, mas insuficientes para caracterizar a competência se não houver a Atitude.\nII. A Atitude é a dimensão mais fácil de ser modificada por meio de treinamentos técnicos tradicionais.\nIII. Na visão de 'fluxo', a competência manifesta-se apenas quando o servidor coloca seu CHA em ação, gerando um resultado (entrega).\nEstá(ão) correta(s):",
    options: [
      "A) Apenas I.",
      "B) Apenas II.",
      "C) Apenas I e III.",
      "D) Apenas II e III.",
      "E) I, II e III."
    ],
    correctIndex: 2,
    explanations: [
      "Incorreta. A assertiva III também é verdadeira.",
      "Incorreta. A assertiva II é falsa. A Atitude (querer fazer) envolve valores e comportamentos, sendo a dimensão mais complexa e difícil de transformar.",
      "Correta. As assertivas I e III estão plenamente corretas: Conhecimento e Habilidade sem Atitude geram inércia; e na visão de fluxo, a competência se concretiza na prática através da entrega.",
      "Incorreta. A assertiva II está incorreta.",
      "Incorreta. A presença da assertiva II invalida a opção."
    ],
    generalExplanation: "O CHA compõe-se de Conhecimento (Saber), Habilidade (Saber fazer) e Atitude (Querer fazer). A Atitude é a dimensão mais difícil de mudar (invalida II). A competência plena exige os três elementos simultaneamente e se manifesta na entrega concreta (I e III corretas).",
    banca: "IBGE / Administração Geral",
    ano: 2024,
    assunto: "Noções de Administração: Gestão por Competências - Elementos do CHA e Interdependência",
    nivelSuperior: true
  },
  {
    id: "adm_batch2_q235",
    text: "No contexto da Gestão por Resultados, a 'Contratualização de Resultados' é um instrumento que visa equilibrar autonomia e controle. Sobre esse instrumento, assinale a alternativa correta:",
    options: [
      "A) Trata-se de um contrato de direito privado que retira o órgão da estrutura da Administração Pública.",
      "B) É um mecanismo que aumenta o controle burocrático sobre os meios para garantir que o resultado seja atingido.",
      "C) Consiste na concessão de maior autonomia gerencial, orçamentária ou financeira em troca do compromisso com metas de desempenho.",
      "D) Sua aplicação é restrita a empresas estatais, sendo vedada em órgãos da administração direta e autarquias.",
      "E) O descumprimento das metas pactuadas não gera consequências, possuindo caráter meramente simbólico."
    ],
    correctIndex: 2,
    explanations: [
      "Incorreta. O contrato de gestão/desempenho é um instrumento de direito público que mantém o órgão ou entidade integrado à Administração Pública.",
      "Incorreta. A contratualização substitui o controle burocrático e prévio de meios pelo controle a posteriori focado em resultados.",
      "Correta. A contratualização de resultados (como previsto no art. 37, § 8º da CF/88) concede maior flexibilidade e autonomia gerencial, financeira e orçamentária ao gestor público em contrapartida à fixação de metas de desempenho claras e mensuráveis.",
      "Incorreta. É aplicável a órgãos da administração direta, autarquias, fundações públicas (Agências Executivas) e estatais.",
      "Incorreta. O descumprimento pode acarretar perda da qualificação especial, revisão da autonomia concedida e penalidades administrativas aos gestores."
    ],
    generalExplanation: "A Contratualização de Resultados troca o controle burocrático sobre processos pela ampliação da autonomia de gestão, condicionada ao alcance de metas de desempenho pactuadas e avaliadas a posteriori.",
    banca: "IBGE / Administração Pública",
    ano: 2024,
    assunto: "Noções de Administração: Gestão por Resultados - Contratualização de Resultados e Contrato de Gestão",
    nivelSuperior: true
  },
  {
    id: "adm_batch2_q236",
    text: "Ao comparar a Gestão por Competências com a Gestão por Resultados, é correto afirmar que:",
    options: [
      "A) Ambas possuem a mesma unidade de análise, focando exclusivamente no desempenho individual do servidor.",
      "B) A Gestão por Competências foca no capital humano (indivíduo/equipe), enquanto a Gestão por Resultados foca na entrega de valor organizacional.",
      "C) A Gestão por Resultados precede logicamente a Gestão por Competências, pois não é possível mapear competências sem metas definidas.",
      "D) A Gestão por Competências é uma abordagem puramente técnica (hard skills), ao passo que a Gestão por Resultados é puramente comportamental.",
      "E) A utilização de indicadores de desempenho (KPIs) é exclusiva da Gestão por Resultados, sendo vedada na Gestão por Competências."
    ],
    correctIndex: 1,
    explanations: [
      "Incorreta. As unidades de análise são distintas: Competências analisa indivíduos e equipes; Resultados analisa a organização e seus projetos.",
      "Correta. A Gestão por Competências tem como foco o desenvolvimento do capital humano (CHA e entrega individual), enquanto a Gestão por Resultados concentra-se no alinhamento de metas, indicadores e geração de valor no nível institucional/organizacional.",
      "Incorreta. Ambos os modelos são complementares e interdependentes, alinhados conjuntamente ao planejamento estratégico.",
      "Incorreta. A Gestão por Competências abrange tanto hard skills (técnicas) quanto soft skills (comportamentais).",
      "Incorreta. Indicadores de desempenho são utilizados em ambos os modelos (ex.: mensuração de gaps, eficácia de treinamentos e desempenho de entregas)."
    ],
    generalExplanation: "A Gestão por Competências atua no 'como' e nas capacidades das pessoas (foco no capital humano), ao passo que a Gestão por Resultados atua no 'o quê' a instituição alcança e entrega para a sociedade (foco organizacional).",
    banca: "IBGE / Administração Geral",
    ano: 2024,
    assunto: "Noções de Administração: Modelos de Gestão - Gestão por Competências vs. Gestão por Resultados",
    nivelSuperior: true
  },
  {
    id: "adm_batch2_q237",
    text: "A implementação da Gestão por Competências enfrenta desafios conceituais e práticos. Sobre as 'armadilhas' desse modelo, assinale a afirmação que apresenta um entendimento INCORRETO:",
    options: [
      "A) A competência não deve ser confundida apenas com a posse de títulos acadêmicos, mas sim com a capacidade de entrega.",
      "B) O mapeamento de competências deve considerar tanto as competências técnicas quanto as comportamentais.",
      "C) A Gestão por Competências é um modelo estático que, uma vez mapeado, não necessita de revisões periódicas.",
      "D) A atitude (querer fazer) é frequentemente o elemento que diferencia o desempenho superior em situações complexas.",
      "E) O alinhamento entre as competências individuais e os objetivos estratégicos é essencial para a geração de valor público."
    ],
    correctIndex: 2,
    explanations: [
      "Correta como assertiva (não é o gabarito). Competência não é apenas estoque de títulos, mas ação orientada à entrega.",
      "Correta como assertiva (não é o gabarito). Ambas as dimensões (hard e soft skills) são cruciais no mapeamento.",
      "Incorreta como assertiva (GABARITO). A Gestão por Competências é um processo dinâmico e cíclico; mudanças institucionais, tecnológicas e de demandas sociais exigem atualizações constantes do inventário e das matrizes de competência.",
      "Correta como assertiva (não é o gabarito). A dimensão atitudinal é fundamental para diferenciar o desempenho superior.",
      "Correta como assertiva (não é o gabarito). O alinhamento com a estratégia do órgão é o que dá sentido à gestão por competências."
    ],
    generalExplanation: "A Gestão por Competências é um modelo contínuo, dinâmico e flexível. Afirmar que se trata de um modelo estático que dispensa revisões periódicas é uma incorreção conceitual grave.",
    banca: "IBGE / Administração Geral",
    ano: 2024,
    assunto: "Noções de Administração: Gestão por Competências - Desafios e Dinamismo do Mapeamento",
    nivelSuperior: true
  },
  {
    id: "adm_batch2_q238",
    text: "No âmbito da teoria das organizações e do processo decisório, as decisões que são repetitivas, rotineiras e baseadas em procedimentos ou regras preestabelecidas são classificadas como:",
    options: [
      "A) Decisões estratégicas de longo prazo.",
      "B) Decisões não programadas.",
      "C) Decisões programadas.",
      "D) Decisões de racionalidade absoluta.",
      "E) Decisões intuitivas."
    ],
    correctIndex: 2,
    explanations: [
      "Incorreta. Decisões estratégicas são tipicamente não programadas, não estruturadas e lidam com incerteza no longo prazo.",
      "Incorreta. Decisões não programadas são inéditas, únicas e não contam com procedimentos padronizados.",
      "Correta. Segundo Herbert Simon, decisões programadas são estruturadas, repetitivas e rotineiras, podendo ser resolvidas mediante a aplicação de normas, manuais de procedimento ou algoritmos já estabelecidos.",
      "Incorreta. Racionalidade absoluta refere-se ao modelo econômico clássico de decisão, e não a um tipo funcional de decisão.",
      "Incorreta. Decisões intuitivas baseiam-se em julgamento tácito, experiência e sensibilidade, sem seguir regras procedimentais formais."
    ],
    generalExplanation: "Decisões programadas (Herbert Simon) resolvem problemas rotineiros, recorrentes e previsíveis, seguindo regras, regulamentos e procedimentos operacionais padronizados.",
    banca: "IBGE / Administração Geral",
    ano: 2024,
    assunto: "Noções de Administração: Processo Decisório - Decisões Programadas vs. Não Programadas",
    nivelSuperior: false
  },
  {
    id: "adm_batch2_q239",
    text: "O processo decisório é composto por uma sequência lógica de etapas. Assinale a alternativa que apresenta a ordem correta das fases iniciais desse processo, conforme a literatura administrativa clássica:",
    options: [
      "A) Seleção da alternativa -> Implementação -> Diagnóstico.",
      "B) Identificação do problema -> Diagnóstico -> Geração de alternativas.",
      "C) Avaliação de alternativas -> Seleção -> Identificação do problema.",
      "D) Monitoramento -> Implementação -> Diagnóstico.",
      "E) Geração de alternativas -> Identificação do problema -> Seleção."
    ],
    correctIndex: 1,
    explanations: [
      "Incorreta. Seleção e implementação ocorrem na fase intermediária e final do processo, após o diagnóstico.",
      "Correta. O fluxo lógico racional de tomada de decisão inicia-se pela Identificação da situação/problema, seguida pelo Diagnóstico (análise de causas) e pela Geração/Busca de cursos alternativos de ação.",
      "Incorreta. A identificação do problema é o ponto de partida, não a fase final.",
      "Incorreta. Monitoramento é a última etapa de controle e feedback.",
      "Incorreta. A geração de alternativas não pode ocorrer antes de se definir e diagnosticar o problema a ser resolvido."
    ],
    generalExplanation: "As etapas sequenciais clássicas da tomada de decisão são: 1. Identificação do problema; 2. Diagnóstico da situação; 3. Geração de alternativas; 4. Avaliação das alternativas; 5. Seleção/Escolha; 6. Implementação; 7. Monitoramento e controle.",
    banca: "IBGE / Administração Geral",
    ano: 2024,
    assunto: "Noções de Administração: Processo Decisório - Etapas do Processo de Tomada de Decisão",
    nivelSuperior: false
  },
  {
    id: "adm_batch2_q240",
    text: "No contexto das teorias das organizações e da tomada de decisão, o modelo de Racionalidade Limitada, proposto por Herbert Simon, contrapõe-se ao modelo clássico racional. Segundo Simon, o decisor não busca a solução ótima, mas sim uma solução que seja:",
    options: [
      "A) Ideal, considerando todas as variáveis possíveis do ambiente externo.",
      "B) Satisfatória, atendendo a critérios mínimos aceitáveis para o decisor.",
      "C) Incremental, baseada exclusivamente em ajustes graduais de decisões passadas.",
      "D) Política, visando o consenso entre as coalizões dominantes da organização.",
      "E) Aleatória, dependendo do encontro casual entre problemas e soluções."
    ],
    correctIndex: 1,
    explanations: [
      "Incorreta. A busca pela solução ideal/ótima é a premissa do modelo clássico da Racionalidade Absoluta (Homem Econômico), rejeitada por Simon para situações reais.",
      "Correta. No modelo da Racionalidade Limitada, o 'Homem Administrativo' possui limitações cognitivas, de tempo e de acesso a dados completos, optando por uma decisão 'satisfatória' (satisficing) que atenda aos seus padrões mínimos aceitáveis.",
      "Incorreta. A tomada de decisão incremental em pequenos passos caracteriza o modelo de Charles Lindblom.",
      "Incorreta. A formação de coalizões e barganhas políticas define o Modelo Político de decisão.",
      "Incorreta. O encontro casual e anárquico entre fluxos de soluções e problemas define o modelo da 'Lata de Lixo' (Garbage Can)."
    ],
    generalExplanation: "Herbert Simon introduziu a teoria da Racionalidade Limitada, destacando que o tomador de decisão não atua como maximizador (solução ótima), mas como 'satisfatibilizador' (satisficing), escolhendo uma alternativa satisfatória que atenda aos requisitos mínimos estabelecidos.",
    banca: "IBGE / Administração Geral",
    ano: 2024,
    assunto: "Noções de Administração: Processo Decisório - Racionalidade Limitada de Herbert Simon (Satisficing)",
    nivelSuperior: false
  },
  // =========================================================================
  // BLOCO 5: NOÇÕES DE ADMINISTRAÇÃO - PROCESSO DECISÓRIO E RESOLUÇÃO DE PROBLEMAS (Questões 241 a 255)
  // =========================================================================
  {
    id: "adm_batch2_q241",
    text: "O Modelo Racional de tomada de decisão, também conhecido como prescritivo, baseia-se em premissas ideais sobre o comportamento do decisor. Assinale a alternativa que apresenta uma característica fundamental desse modelo.",
    options: [
      "A) O decisor possui informações incompletas e ambíguas sobre o cenário.",
      "B) A escolha é influenciada por emoções e pressões de grupos de interesse.",
      "C) O objetivo principal é a maximização dos resultados por meio da escolha ótima.",
      "D) As decisões são tomadas por meio de pequenos passos e ajustes marginais.",
      "E) A racionalidade é considerada um recurso escasso e limitado pelo cérebro humano."
    ],
    correctIndex: 2,
    explanations: [
      "Incorreta. No Modelo Racional, pressupõe-se informação perfeita e completa sobre todas as alternativas e cenários.",
      "Incorreta. Pressões de grupos de interesse e fatores emocionais são características do Modelo Político ou comportamental.",
      "Correta. A maximização (ou otimização) dos resultados mediante a seleção da melhor alternativa possível é o critério definidor do Modelo Racional Clássico.",
      "Incorreta. Ajustes marginais e pequenos passos graduais definem o Modelo Incremental de Lindblom.",
      "Incorreta. A limitação da capacidade cognitiva de processamento é premissa do Modelo de Racionalidade Limitada de Simon."
    ],
    generalExplanation: "O Modelo Racional (clássico ou prescritivo) assume que o decisor dispõe de todas as informações necessárias, possui objetivos claros e busca sempre a maximização dos resultados através da escolha da alternativa ótima.",
    banca: "IBGE / Noções de Administração",
    ano: 2026,
    assunto: "Noções de Administração: Processo Decisório - Modelo Racional Clássico (Maximização e Escolha Ótima)",
    nivelSuperior: false
  },
  {
    id: "adm_batch2_q242",
    text: "No contexto da gestão de processos e melhoria da qualidade, a Matriz GUT é uma ferramenta consagrada para a priorização de problemas. As variáveis que compõem essa matriz e que devem ser multiplicadas para se obter o índice de prioridade são:",
    options: [
      "A) Gestão, Utilização e Tempo.",
      "B) Gravidade, Urgência e Tendência.",
      "C) Grau de dificuldade, Utilidade e Temporalidade.",
      "D) Garantia, Unidade e Totalidade.",
      "E) Genericidade, Universalidade e Transversalidade."
    ],
    correctIndex: 1,
    explanations: [
      "Incorreta. Gestão, Utilização e Tempo não compõem a matriz de priorização GUT.",
      "Correta. A sigla GUT corresponde a Gravidade (G), Urgência (U) e Tendência (T). A pontuação final é obtida pelo produto G × U × T para ranquear as prioridades.",
      "Incorreta. Embora façam alusão a conceitos administrativos, não são as dimensões formais da Matriz GUT.",
      "Incorreta. Não guardam relação com a ferramenta de priorização.",
      "Incorreta. Conceitos estranhos à metodologia de análise de problemas e tomada de decisão."
    ],
    generalExplanation: "A Matriz GUT (Kepner e Tregoe) prioriza problemas por meio de três critérios fundamentais: Gravidade (impacto/prejuízo), Urgência (tempo/prazo) e Tendência (potencial de agravamento se nada for feito). O cálculo do índice de prioridade se dá pela multiplicação: G × U × T.",
    banca: "IBGE / Noções de Administração",
    ano: 2026,
    assunto: "Noções de Administração: Ferramentas de Tomada de Decisão - Matriz GUT (Priorização de Problemas)",
    nivelSuperior: false
  },
  {
    id: "adm_batch2_q243",
    text: "A análise SWOT (ou FOFA) é uma ferramenta de diagnóstico estratégico que permite avaliar os ambientes interno e externo de uma organização. Sobre essa ferramenta, assinale a alternativa que apresenta apenas componentes do ambiente interno, considerados controláveis pela gestão:",
    options: [
      "A) Oportunidades e Ameaças.",
      "B) Forças e Oportunidades.",
      "C) Fraquezas e Ameaças.",
      "D) Forças e Fraquezas.",
      "E) Oportunidades e Fraquezas."
    ],
    correctIndex: 3,
    explanations: [
      "Incorreta. Oportunidades e Ameaças compõem a análise do ambiente externo (incontrolável).",
      "Incorreta. Forças são do ambiente interno, mas Oportunidades pertencem ao ambiente externo.",
      "Incorreta. Fraquezas são do ambiente interno, mas Ameaças pertencem ao ambiente externo.",
      "Correta. Forças (Strengths) e Fraquezas (Weaknesses) representam as variáveis do ambiente interno da organização sobre as quais a administração possui governança e controle direto.",
      "Incorreta. Oportunidades são fatores externos e Fraquezas são fatores internos."
    ],
    generalExplanation: "Na Matriz SWOT/FOFA, o ambiente interno (controlável) é formado pelas Forças e Fraquezas da organização, enquanto o ambiente externo (incontrolável) é formado pelas Oportunidades e Ameaças de mercado/contexto.",
    banca: "IBGE / Noções de Administração",
    ano: 2026,
    assunto: "Noções de Administração: Diagnóstico Estratégico - Análise SWOT/FOFA (Ambiente Interno vs. Externo)",
    nivelSuperior: false
  },
  {
    id: "adm_batch2_q244",
    text: "No contexto da gestão pública contemporânea, a distinção entre risco e incerteza é fundamental para o processo decisório. De acordo com a literatura técnica e o conteúdo estudado, assinale a alternativa que define corretamente o conceito de 'Risco'.",
    options: [
      "A) Situação em que o decisor não conhece os resultados possíveis e é incapaz de atribuir qualquer probabilidade de ocorrência.",
      "B) Estado de conhecimento em que o problema ou o objetivo institucional não estão claros, gerando confusão máxima.",
      "C) Efeito da incerteza nos objetivos, caracterizado por situações onde os resultados possíveis são conhecidos e as probabilidades podem ser estimadas.",
      "D) Cenário de previsibilidade total onde o gestor conhece o resultado exato de cada alternativa escolhida.",
      "E) Evento futuro e incerto que, caso ocorra, impede obrigatoriamente a continuidade de qualquer política pública."
    ],
    correctIndex: 2,
    explanations: [
      "Incorreta. Desconhecer resultados e ser incapaz de mensurar probabilidades define o estado de 'Incerteza'.",
      "Incorreta. Objetivos e problemas confusos ou mal formulados definem o estado de 'Ambiguidade'.",
      "Correta. Conforme a norma ISO 31000 e a teoria da decisão (Frank Knight), o Risco é o efeito da incerteza sobre os objetivos, no qual os desfechos possíveis são conhecidos e as probabilidades de ocorrência podem ser mensuradas ou estimadas.",
      "Incorreta. Conhecer com exatidão o resultado de cada escolha é a definição de 'Certeza'.",
      "Incorreta. O risco pode ter impactos variados (positivos ou negativos) e não impede obrigatoriamente a continuidade das atividades públicas."
    ],
    generalExplanation: "Na teoria decisória clássica, a Certeza ocorre quando o resultado é 100% conhecido; o Risco ocorre quando os cenários são conhecidos e suas probabilidades podem ser estimadas estatisticamente; e a Incerteza ocorre quando não é possível atribuir probabilidades aos desfechos futuros.",
    banca: "IBGE / Noções de Administração",
    ano: 2026,
    assunto: "Noções de Administração: Processo Decisório - Condições de Tomada de Decisão (Certeza, Risco e Incerteza)",
    nivelSuperior: false
  },
  {
    id: "adm_batch2_q245",
    text: "Ao implementar um plano de gestão de riscos em uma autarquia federal, o administrador depara-se com os conceitos de risco inerente e risco residual. Sobre o risco residual, é correto afirmar que:",
    options: [
      "A) É o risco que existe antes de qualquer ação de controle ou resposta da administração.",
      "B) Representa o risco que permanece após a implementação das respostas e controles internos.",
      "C) Trata-se do risco que foi totalmente eliminado através de estratégias de mitigação agressivas.",
      "D) É o nível de risco que a organização está disposta a aceitar para atingir seus objetivos.",
      "E) Refere-se exclusivamente aos riscos financeiros que não podem ser transferidos para seguradoras."
    ],
    correctIndex: 1,
    explanations: [
      "Incorreta. O risco existente antes de qualquer controle ou ação preventiva é o Risco Inerente.",
      "Correta. Risco Residual é o nível de risco remanescente (que 'sobra') após a aplicação das respostas, salvaguardas e controles internos implementados pela gestão.",
      "Incorreta. Dificilmente o risco atinge zero absoluto; o residual é exatamente a parcela não eliminada.",
      "Incorreta. O montante de risco que a organização aceita assumir na busca de seus objetivos é o 'Apetite a Risco'.",
      "Incorreta. O conceito de risco residual aplica-se a qualquer categoria de risco (operacional, legal, reputacional, etc.)."
    ],
    generalExplanation: "O Risco Inerente é aquele intrínseco à atividade antes de qualquer intervenção gerencial. Já o Risco Residual é o risco que persiste após a implementação dos controles e planos de mitigação.",
    banca: "IBGE / Noções de Administração",
    ano: 2026,
    assunto: "Noções de Administração: Gestão de Riscos - Risco Inerente vs. Risco Residual",
    nivelSuperior: false
  },
  {
    id: "adm_batch2_q246",
    text: "Herbert Simon introduziu o conceito de 'Racionalidade Limitada' para descrever como as decisões são tomadas na prática. Sobre esse conceito, é correto afirmar que:",
    options: [
      "A) O tomador de decisão possui acesso a todas as informações possíveis para otimizar o resultado.",
      "B) O 'Homem Administrativo' busca sempre a solução ótima e perfeita para os problemas da organização.",
      "C) A racionalidade é limitada pela escassez de tempo, limitações cognitivas e informações incompletas.",
      "D) Na Administração Pública, o princípio da legalidade anula as limitações da racionalidade humana.",
      "E) A racionalidade limitada aplica-se exclusivamente ao nível operacional das organizações."
    ],
    correctIndex: 2,
    explanations: [
      "Incorreta. A posse de informação completa é pressuposto do modelo clássico racional, que Simon contesta.",
      "Incorreta. O 'Homem Administrativo' contenta-se com soluções satisfatórias, enquanto o 'Homem Econômico' busca a ótima.",
      "Correta. A Racionalidade Limitada reconhece que a mente humana possui limites cognitivos, tempo escasso e acesso restrito a dados, inviabilizando a avaliação de todas as alternativas possíveis.",
      "Incorreta. O princípio da legalidade orienta a conduta jurídica, mas não elimina as limitações cognitivas e informacionais do gestor público.",
      "Incorreta. A racionalidade limitada é uma condição humana presente em todos os níveis hierárquicos (operacional, tático e estratégico)."
    ],
    generalExplanation: "Segundo Herbert Simon, a tomada de decisão no mundo real é balizada pela Racionalidade Limitada: os indivíduos não têm tempo, informação nem capacidade cognitiva para processar todas as variáveis, escolhendo alternativas satisfatórias (satisficing).",
    banca: "IBGE / Noções de Administração",
    ano: 2026,
    assunto: "Noções de Administração: Processo Decisório - Racionalidade Limitada e o Homem Administrativo (Herbert Simon)",
    nivelSuperior: false
  },
  {
    id: "adm_batch2_q247",
    text: "Considere a seguinte situação: Um Secretário de Saúde precisa definir estratégias emergenciais para conter uma nova variante de um vírus desconhecido. Simultaneamente, o setor de RH da Secretaria processa a folha de pagamento mensal dos servidores. De acordo com a taxonomia de Herbert Simon, essas decisões são, respectivamente:",
    options: [
      "A) Programada e Não Programada.",
      "B) Não Programada e Programada.",
      "C) Ambas são Programadas.",
      "D) Ambas são Não Programadas.",
      "E) Estratégica e Tática, independentemente do grau de estruturação."
    ],
    correctIndex: 1,
    explanations: [
      "Incorreta. A ordem está invertida: a emergência inédita é não programada e a folha é programada.",
      "Correta. A contenção de uma variante inédita/desconhecida é uma decisão nova, não estruturada e sem rotina pré-estabelecida (Decisão Não Programada). O fechamento de folha de pagamento é uma atividade rotineira, padronizada e com regras claras (Decisão Programada).",
      "Incorreta. Uma crise epidemiológica inédita não possui procedimento padrão rotineiro preexistente.",
      "Incorreta. A folha de pagamento é o exemplo paradigmático de decisão rotineira/programada.",
      "Incorreta. A questão solicita explicitamente a taxonomia de Herbert Simon quanto à estruturação das decisões (programadas vs. não programadas)."
    ],
    generalExplanation: "Decisões Programadas são rotineiras, repetitivas e regidas por procedimentos padronizados (ex.: folha de pagamento). Decisões Não Programadas lidam com situações novas, desestruturadas ou excepcionais, exigindo julgamento e criatividade (ex.: crise sanitária inédita).",
    banca: "IBGE / Noções de Administração",
    ano: 2026,
    assunto: "Noções de Administração: Processo Decisório - Decisões Programadas vs. Decisões Não Programadas (Simon)",
    nivelSuperior: false
  },
  {
    id: "adm_batch2_q248",
    text: "No que diz respeito à relação entre os níveis organizacionais e o tipo de problema enfrentado, assinale a alternativa que descreve corretamente a atuação da Alta Cúpula (Nível Estratégico):",
    options: [
      "A) Lida majoritariamente com problemas estruturados e decisões programadas.",
      "B) Foca na eficiência operacional através de algoritmos de decisão.",
      "C) Enfrenta problemas não estruturados que exigem decisões majoritariamente não programadas.",
      "D) Suas decisões são puramente técnicas e baseadas em manuais de procedimentos.",
      "E) Não participa do processo decisório, delegando-o integralmente ao nível tático."
    ],
    correctIndex: 2,
    explanations: [
      "Incorreta. Problemas estruturados e decisões programadas são predominantes no nível operacional.",
      "Incorreta. A eficiência de tarefas operacionais é foco do nível operacional.",
      "Correta. A Alta Cúpula (nível estratégico) atua na interface com o ambiente externo em constante mutação e incerteza, lidando tipicamente com problemas não estruturados e demandando decisões não programadas.",
      "Incorreta. Decisões técnicas e manuais de procedimentos são o núcleo da execução no nível operacional.",
      "Incorreta. A alta administração é o centro decisório principal para as diretrizes de longo prazo da organização."
    ],
    generalExplanation: "No Nível Estratégico predominam problemas não estruturados e decisões não programadas (visão holística e longo prazo). No Nível Operacional predominam problemas estruturados e decisões programadas (rotina e curto prazo).",
    banca: "IBGE / Noções de Administração",
    ano: 2026,
    assunto: "Noções de Administração: Níveis Organizacionais e Tipologia de Decisões (Estratégico, Tático e Operacional)",
    nivelSuperior: false
  },
  {
    id: "adm_batch2_q249",
    text: "Ao analisar o processo decisório sob a ótica do Modelo Político, o gestor público deve compreender que as decisões não resultam apenas de análises técnicas, mas de um processo complexo de interação social. Nesse modelo, é correto afirmar que:",
    options: [
      "A) A decisão é fruto da aplicação de algoritmos matemáticos de otimização.",
      "B) O conflito é visto como uma disfunção que deve ser eliminada para a eficiência.",
      "C) As decisões são tomadas por coalizões que negociam objetivos e recursos.",
      "D) A informação é compartilhada de forma transparente e equânime entre todos.",
      "E) O decisor atua de forma isolada, buscando o interesse geral da organização."
    ],
    correctIndex: 2,
    explanations: [
      "Incorreta. A otimização puramente técnica e quantitativa caracteriza o Modelo Racional/Normativo.",
      "Incorreta. No Modelo Político, o conflito de interesses é considerado um elemento natural e inevitável da vida organizacional.",
      "Correta. O Modelo Político entende a organização como uma arena política composta por coalizões de grupos heterogêneos, que negociam recursos, alianças e compromissos para viabilizar as decisões.",
      "Incorreta. No Modelo Político, a informação é frequentemente retida e manipulada estrategicamente como fonte de poder.",
      "Incorreta. A decisão política é essencialmente coletiva e plural, decorrente da correlação de forças entre múltiplos atores."
    ],
    generalExplanation: "O Modelo Político de tomada de decisão destaca o papel do poder, da negociação, das divergências de valores e da formação de coalizões na definição dos rumos e na alocação de recursos da organização.",
    banca: "IBGE / Noções de Administração",
    ano: 2026,
    assunto: "Noções de Administração: Modelos de Tomada de Decisão - Modelo Político e Formação de Coalizões",
    nivelSuperior: false
  },
  {
    id: "adm_batch2_q250",
    text: "Charles Lindblom propôs o Modelo Incremental como uma alternativa à visão racionalista, especialmente útil para entender o orçamento público. Sobre o Modelo Incremental, assinale a alternativa correta.",
    options: [
      "A) Propõe uma ruptura radical com as políticas anteriores para garantir a inovação.",
      "B) Baseia-se na premissa de que o decisor tem capacidade de processar todas as alternativas.",
      "C) Define a decisão como o resultado do encontro casual de quatro fluxos independentes.",
      "D) Foca em mudanças graduais, utilizando a situação atual como base para ajustes marginais.",
      "E) É aplicado exclusivamente em situações de certeza absoluta e estabilidade ambiental."
    ],
    correctIndex: 3,
    explanations: [
      "Incorreta. O modelo incremental evita rupturas radicais, optando pela continuidade e correções graduais.",
      "Incorreta. O modelo incremental surge justamente como crítica à incapacidade humana de analisar todas as alternativas (crítica ao modelo racional).",
      "Incorreta. O encontro de fluxos de problemas, soluções, participantes e oportunidades define o Modelo da Lata de Lixo (Cohen, March e Olsen).",
      "Correta. No Modelo Incremental ('The Science of Muddling Through'), as decisões tomam como ponto de partida a situação preexistente e operam por meio de pequenos ajustes marginais e sucessivos comparados ao status quo.",
      "Incorreta. É amplamente empregado em ambientes complexos, pluralistas e de consenso limitado, como no orçamento público."
    ],
    generalExplanation: "O Modelo Incremental de Charles Lindblom descreve a decisão como uma série de pequenos passos (ajustes marginais) em relação ao estado atual, evitando grandes rupturas e reduzindo o risco de erros catastróficos.",
    banca: "IBGE / Noções de Administração",
    ano: 2026,
    assunto: "Noções de Administração: Modelos de Tomada de Decisão - Modelo Incremental de Charles Lindblom",
    nivelSuperior: false
  },
  {
    id: "adm_batch2_q251",
    text: "A teoria das organizações distingue o 'Homem Econômico' do 'Homem Administrativo'. Essa distinção é fundamental para diferenciar, respectivamente, os seguintes modelos decisórios:",
    options: [
      "A) Modelo Político e Modelo Incremental.",
      "B) Modelo Racional e Modelo de Racionalidade Limitada.",
      "C) Modelo da Lata de Lixo e Modelo Racional.",
      "D) Modelo de Racionalidade Limitada e Modelo Político.",
      "E) Modelo Incremental e Modelo da Lata de Lixo."
    ],
    correctIndex: 1,
    explanations: [
      "Incorreta. Modelo Político foca em barganhas de poder e o Incremental em passos graduais; não guardam relação direta com esses arquétipos clássicos.",
      "Correta. O 'Homem Econômico' fundamenta o Modelo Racional Clássico (busca a maximização/solução ótima), enquanto o 'Homem Administrativo' fundamenta o Modelo de Racionalidade Limitada de Simon (busca a satisfação/solução satisfatória).",
      "Incorreta. O modelo da Lata de Lixo foca na ambiguidade e anarquia organizada, sem conexão com esses conceitos.",
      "Incorreta. A ordem está invertida e o modelo político não é representado pelo Homem Administrativo.",
      "Incorreta. Não correspondem aos modelos baseados nos conceitos de Homem Econômico e Homem Administrativo."
    ],
    generalExplanation: "Herbert Simon contrastou o 'Homem Econômico' (que busca a solução perfeita/ótima, com capacidade de cálculo ilimitada no Modelo Racional) com o 'Homem Administrativo' (que busca soluções satisfatórias dentro de suas limitações no Modelo de Racionalidade Limitada).",
    banca: "IBGE / Noções de Administração",
    ano: 2026,
    assunto: "Noções de Administração: Processo Decisório - Homem Econômico (Modelo Racional) vs. Homem Administrativo (Racionalidade Limitada)",
    nivelSuperior: false
  },
  {
    id: "adm_batch2_q252",
    text: "Um gestor público percebe que o setor de atendimento ao cidadão apresenta diversas reclamações. Ao aplicar o Diagrama de Pareto, ele busca identificar as causas principais para agir de forma eficiente. De acordo com o princípio fundamental desta ferramenta, o gestor deve focar seus esforços em:",
    options: [
      "A) Resolver a totalidade das causas (100%) para garantir que nenhum erro persista.",
      "B) Identificar os 'muitos triviais', que representam a maior quantidade de causas de problemas.",
      "C) Atuar sobre os 'poucos vitais', que representam cerca de 20% das causas responsáveis por 80% dos efeitos.",
      "D) Priorizar as causas que demandam menor investimento financeiro, independentemente do impacto.",
      "E) Distribuir os recursos de forma equânime entre todas as falhas detectadas no diagnóstico."
    ],
    correctIndex: 2,
    explanations: [
      "Incorreta. Tentar resolver 100% das causas simultaneamente dilui recursos e contraria o propósito da priorização.",
      "Incorreta. Os 'muitos triviais' (ou muitos úteis) são causas que geram pequeno impacto isolado.",
      "Correta. O Princípio de Pareto (regra 80/20) estabelece que aproximadamente 80% dos efeitos e reclamações decorrem de 20% das causas fundamentais ('poucos vitais'). Focar neles gera o maior ganho de eficiência.",
      "Incorreta. A ferramenta prioriza pela frequência e impacto cumulativo dos problemas, não por critérios puramente orçamentários isolados.",
      "Incorreta. A distribuição igualitária de recursos ignora a disparidade de impacto das causas."
    ],
    generalExplanation: "O Diagrama de Pareto apoia a tomada de decisão ao separar os 'poucos vitais' (20% das causas que geram 80% dos problemas) dos 'muitos triviais', permitindo que a liderança concentre esforços onde o retorno será mais expressivo.",
    banca: "IBGE / Noções de Administração",
    ano: 2026,
    assunto: "Noções de Administração: Ferramentas da Qualidade e Decisão - Diagrama e Princípio de Pareto (Regra 80/20)",
    nivelSuperior: false
  },
  {
    id: "adm_batch2_q253",
    text: "Na elaboração de um planejamento estratégico, a Matriz SWOT Cruzada (ou TOWS) é utilizada para gerar estratégias a partir do confronto entre fatores internos e externos. Quando uma organização identifica uma 'Fraqueza' interna e uma 'Ameaça' externa simultaneamente, a estratégia recomendada é de:",
    options: [
      "A) Desenvolvimento.",
      "B) Crescimento.",
      "C) Manutenção.",
      "D) Sobrevivência.",
      "E) Alavancagem."
    ],
    correctIndex: 3,
    explanations: [
      "Incorreta. Estratégia de desenvolvimento/alavancagem é adotada no quadrante Forças + Oportunidades.",
      "Incorreta. Estratégia de crescimento foca em superar Fraquezas para aproveitar Oportunidades.",
      "Incorreta. Estratégia de manutenção foca em utilizar Forças para combater ou neutralizar Ameaças.",
      "Correta. O quadrante que conjuga Fraqueza interna e Ameaça externa é o mais crítico e desfavorável, exigindo estratégias defensivas de Sobrevivência (redução de custos, desinvestimento, contenção de danos ou liquidação).",
      "Incorreta. Alavancagem relaciona-se ao uso de pontos fortes para explorar oportunidades de mercado."
    ],
    generalExplanation: "Na Matriz SWOT Cruzada (TOWS): Força + Oportunidade = Alavancagem/Desenvolvimento; Fraqueza + Oportunidade = Crescimento/Reforço; Força + Ameaça = Manutenção/Confronto; Fraqueza + Ameaça = Sobrevivência/Defesa.",
    banca: "IBGE / Noções de Administração",
    ano: 2026,
    assunto: "Noções de Administração: Planejamento Estratégico - Matriz SWOT Cruzada (TOWS) e Tipos de Estratégia",
    nivelSuperior: false
  },
  {
    id: "adm_batch2_q254",
    text: "Ao utilizar a Matriz GUT para priorizar a manutenção de equipamentos em um hospital, um técnico administrativo deve atribuir notas para a variável 'Tendência'. Segundo a definição técnica desta ferramenta, a Tendência avalia:",
    options: [
      "A) O impacto imediato que a falta do equipamento causa no atendimento aos pacientes.",
      "B) O prazo limite para que a manutenção seja realizada antes que o equipamento quebre.",
      "C) O potencial de crescimento ou agravamento do problema caso nenhuma ação seja tomada no presente.",
      "D) A quantidade de pessoas que serão afetadas pela indisponibilidade do recurso.",
      "E) O custo financeiro estimado para a reparação do dano em comparação ao valor de um novo ativo."
    ],
    correctIndex: 2,
    explanations: [
      "Incorreta. O impacto, dano ou prejuízo imediato é avaliado pela dimensão 'Gravidade'.",
      "Incorreta. A restrição de tempo, prazo ou rapidez necessária na resposta é avaliada pela dimensão 'Urgência'.",
      "Correta. A 'Tendência' avalia a propensão de evolução ou agravamento futuro do problema no tempo caso a administração permaneça inerte (se piora rápida, gradual ou estabiliza).",
      "Incorreta. O número de pessoas afetadas e amplitude dos danos integram a análise de 'Gravidade'.",
      "Incorreta. Custos de reparo e prejuízos financeiros compõem a métrica de 'Gravidade'."
    ],
    generalExplanation: "Na Matriz GUT: Gravidade mede a intensidade do dano/impacto; Urgência mede a premência do tempo/prazo; e Tendência mede a velocidade e o potencial de piora/agravamento da situação se nada for feito.",
    banca: "IBGE / Noções de Administração",
    ano: 2026,
    assunto: "Noções de Administração: Tomada de Decisão e Qualidade - Matriz GUT e o Conceito de Tendência",
    nivelSuperior: false
  },
  {
    id: "adm_batch2_q255",
    text: "Uma prefeitura municipal enfrenta problemas com a coleta de lixo, iluminação pública e buracos nas vias. O prefeito dispõe de recursos limitados e precisa decidir qual desses problemas será atacado primeiro, considerando o impacto na população, a urgência do prazo e se a situação tende a piorar no período de chuvas. A ferramenta de apoio à decisão mais indicada para este caso específico é:",
    options: [
      "A) Matriz SWOT.",
      "B) Diagrama de Pareto.",
      "C) Matriz GUT.",
      "D) Ciclo PDCA.",
      "E) Gráfico de Ishikawa."
    ],
    correctIndex: 2,
    explanations: [
      "Incorreta. A SWOT avalia o posicionamento estratégico global (forças, fraquezas, oportunidades e ameaças), não a priorização de uma lista de ocorrências operacionais distintas.",
      "Incorreta. O Pareto estratifica causas de um problema específico pela frequência (80/20), mas a GUT é a ferramenta ideal para ranquear múltiplos problemas concorrentes a partir de critérios de impacto e urgência.",
      "Correta. A Matriz GUT é a ferramenta clássica de apoio à tomada de decisão para priorização de problemas concorrentes a partir de três critérios explícitos no enunciado: Gravidade (impacto na população), Urgência (prazo) e Tendência (risco de piora no período de chuvas).",
      "Incorreta. O PDCA é um método iterativo de gestão e melhoria contínua de processos, não uma ferramenta específica de pontuação para priorização.",
      "Incorreta. O Diagrama de Causa e Efeito (Ishikawa/Espinha de Peixe) serve para identificar as causas-raiz de um problema, e não para eleger a ordem de atendimento entre múltiplos problemas."
    ],
    generalExplanation: "A Matriz GUT é a ferramenta recomendada quando um gestor possui vários problemas concorrentes e necessita ranquear a ordem de intervenção considerando a Gravidade (G), a Urgência (U) e a Tendência de agravamento (T).",
    banca: "IBGE / Noções de Administração",
    ano: 2026,
    assunto: "Noções de Administração: Tomada de Decisão - Aplicação Prática da Matriz GUT na Gestão Pública",
    nivelSuperior: false
  }
];
