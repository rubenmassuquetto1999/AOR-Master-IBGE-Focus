import { Question } from "../types";

export const questionsRlm: Question[] = [
  {
    "id": "rlm_01",
    "text": "Três técnicos: Amanda, Beatriz e Cássio trabalham no banco – um deles no complexo computacional, outro na administração e outro na segurança do Sistema Financeiro, não respectivamente. A praça de lotação de cada um deles é: São Paulo, Rio de Janeiro ou Porto Alegre.\n\nSabe-se que:\n- Cássio trabalha na segurança do Sistema Financeiro;\n- O que está lotado em São Paulo trabalha na administração;\n- Amanda não está lotada em Porto Alegre e não trabalha na administração.\n\nÉ verdade que, quem está lotado em São Paulo e quem trabalha no complexo computacional são, respectivamente:",
    "options": [
      "A) Cássio e Beatriz.",
      "B) Beatriz e Cássio.",
      "C) Cássio e Amanda.",
      "D) Beatriz e Amanda.",
      "E) Amanda e Cássio."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Cássio trabalha na segurança e está lotado em Porto Alegre.",
      "Incorreta. Quem está lotado em São Paulo é Beatriz, mas quem trabalha no complexo é Amanda.",
      "Incorreta. Cássio trabalha na segurança do banco, não na administração.",
      "Correta. Vamos associar: Cássio = Segurança. Amanda não é da administração, então deve ser do Complexo Computacional. Logo, Beatriz = Administração. Como quem está em SP trabalha na administração, Beatriz é de São Paulo. Amanda não é de Porto Alegre, nem de SP (onde está Beatriz), logo Amanda é do RJ. Consequentemente, Cássio é de Porto Alegre. Assim, quem está em SP é Beatriz e quem está no complexo é Amanda.",
      "Incorreta. Amanda não está lotada em São Paulo, e sim no Rio de Janeiro."
    ],
    "banca": "FGV",
    "ano": 2018,
    "assunto": "Raciocínio Lógico Quantitativo",
    "nivelSuperior": false
  },
  {
    "id": "rlm_02",
    "text": "Três Agentes Administrativos - Almir, Noronha e Creuza - trabalham no Departamento Nacional de Obras Contra as Secas: um, no setor de atendimento ao público, outro no setor de compras e o terceiro no almoxarifado. Sabe-se que:\n- esses Agentes estão lotados no Ceará, em Pernambuco e na Bahia;\n- Almir não está lotado na Bahia e nem trabalha no setor de compras;\n- Creuza trabalha no almoxarifado;\n- o Agente lotado no Ceará trabalha no setor de compras.\n\nCom base nessas informações, é correto afirmar que o Agente lotado no Ceará e o Agente que trabalha no setor de atendimento ao público são, respectivamente,",
    "options": [
      "A) Almir e Noronha.",
      "B) Creuza e Noronha.",
      "C) Noronha e Creuza.",
      "D) Creuza e Almir.",
      "E) Noronha e Almir."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. Almir trabalha no atendimento e Noronha no setor de compras.",
      "Incorreta. Creuza trabalha no almoxarifado, não no setor de compras.",
      "Incorreta. O do Ceará é Noronha, mas o do atendimento é Almir e não Creuza.",
      "Incorreta. Creuza é do almoxarifado na Bahia, não do Ceará.",
      "Correta. Como Creuza é do almoxarifado, ela não trabalha em compras nem em atendimento. Como compras é no Ceará, Creuza não é do Ceará. Almir não está na Bahia nem em compras. Como compras é no Ceará, Almir não é do Ceará. Logo, Almir é de Pernambuco e Noronha é do Ceará (compras). Por exclusão, Almir trabalha no atendimento. Almir não está na Bahia, então Almir está em Pernambuco. Creuza (almoxarifado) está na Bahia. Assim, o agente do Ceará (Noronha) e o do atendimento (Almir) são, respectivamente, Noronha e Almir."
    ],
    "banca": "FGV",
    "ano": 2015,
    "assunto": "Raciocínio Lógico Quantitativo",
    "nivelSuperior": false
  },
  {
    "id": "rlm_03",
    "text": "Raul, Sérgio e Tiago vestem camisas de cores diferentes. Um veste camisa verde, outro camisa amarela e outro, camisa azul. Suas gravatas são também nas cores verde, amarela e azul, cada gravata de uma cor. Somente Raul tem camisa e gravata da mesma cor, nenhuma das duas peças de Sérgio é azul e a gravata de Tiago é amarela. Com base nessas premissas, conclui-se que:",
    "options": [
      "A) a camisa de Tiago é azul.",
      "B) a camisa de Raul é verde.",
      "C) a gravata de Sérgio é azul.",
      "D) a camisa de Sérgio é amarela.",
      "E) a gravata de Raul não é azul."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. A camisa de Tiago é verde.",
      "Incorreta. A camisa de Raul é azul, que é da mesma cor de sua gravata.",
      "Incorreta. Sérgio não tem nenhuma peça azul, logo sua gravata só pode ser verde.",
      "Correta. Gravatas: Tiago = amarela. Como nenhuma peça de Sérgio é azul, a gravata de Sérgio = verde. Logo, a gravata de Raul = azul. Como somente Raul tem camisa e gravata da mesma cor, sua camisa é azul. A camisa de Sérgio não pode ser verde (pois causaria par igual) nem azul (do Raul), sendo amarela. A de Tiago é verde.",
      "Incorreta. A gravata de Raul é necessariamente azul."
    ],
    "banca": "VUNESP",
    "ano": 2021,
    "assunto": "Raciocínio Lógico Quantitativo",
    "nivelSuperior": false
  },
  {
    "id": "rlm_04",
    "text": "Carlos, Flávio e Vladimir chegaram ao trabalho ao mesmo tempo, estacionaram seus carros lado a lado e notaram que seus carros tinham modelos começando com as letras de seus nomes: Corsa, Fiat e Voyage. Então, Flávio disse: 'Os modelos dos nossos carros começam com a mesma letra dos nossos nomes, mas nenhum dos três tem carro cuja primeira letra do modelo combine com seu próprio nome'. 'E daí?', respondeu o dono do Corsa. Com essas informações, pode-se afirmar que:",
    "options": [
      "A) Flávio tem um Corsa.",
      "B) Vladimir tem um Corsa.",
      "C) Carlos tem um Voyage.",
      "D) Vladimir tem um Fiat e Carlos tem um Voyage.",
      "E) Flávio tem um Voyage e Vladimir tem um Fiat."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Como Flávio fala com o dono do Corsa, ele mesmo não tem o Corsa.",
      "Correta. Carlos não tem Corsa (C). Flávio não tem Fiat (F). Vladimir não tem Voyage (V). O dono do Corsa não é Carlos (pela regra da letra), nem Flávio (que conversa com ele). Logo, Vladimir é o dono do Corsa. Como Flávio não tem Corsa nem Fiat, ele tem o Voyage. Por fim, Carlos tem o Fiat.",
      "Incorreta. Carlos tem o Fiat, pois Flávio é o dono do Voyage.",
      "Incorreta. Vladimir tem o Corsa, não o Fiat.",
      "Incorreta. Vladimir tem o Corsa e Carlos é o dono do Fiat."
    ],
    "banca": "IBFC",
    "ano": 2020,
    "assunto": "Raciocínio Lógico Quantitativo",
    "nivelSuperior": false
  },
  {
    "id": "rlm_05",
    "text": "José, Antônio e Adílson são amigos. Um deles é militar, outro é empresário e o outro é jornalista. Sabe-se que:\n1) Ou José é militar, ou Adílson é militar;\n2) Ou José é empresário, ou Antônio é jornalista;\n3) Ou Adílson é jornalista, ou Antônio é jornalista;\n4) Ou Antônio é empresário, ou Adílson é empresário.\n\nPortanto, as profissões de José, Antônio e Adílson são respectivamente:",
    "options": [
      "A) Empresário, Militar, Jornalista.",
      "B) Militar, Jornalista, Empresário.",
      "C) Jornalista, Empresário, Jornalista.",
      "D) Militar, Empresário, Jornalista.",
      "E) Jornalista, Militar, Empresário."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Essa combinação viola as premissas de disjunção exclusiva.",
      "Correta. Testando o gabarito oficial: José = Militar, Antônio = Jornalista e Adílson = Empresário. Vamos verificar as premissas (ou...ou exclusivos):\n1) Ou José é militar (V) ou Adílson é militar (F) -> V. OK!\n2) Ou José é empresário (F) ou Antônio é jornalista (V) -> V. OK!\n3) Ou Adílson é jornalista (F) ou Antônio é jornalista (V) -> V. OK!\n4) Ou Antônio é empresário (F) ou Adílson é empresário (V) -> V. OK! Todas as premissas se provam verdadeiras.",
      "Incorreta. O jornalista não pode ser José e Adilson simultaneamente.",
      "Incorreta. Adilson é empresário, não jornalista.",
      "Incorreta. José é militar, Antônio é jornalista e Adilson é empresário."
    ],
    "banca": "VUNESP",
    "ano": 2020,
    "assunto": "Raciocínio Lógico Quantitativo",
    "nivelSuperior": false
  },
  {
    "id": "rlm_06",
    "text": "Fábio, Guilherme e Hugo são funcionários. Um deles é arquivista, outro é contador, e outro é segurança. As três afirmações seguintes sobre esses funcionários são verdadeiras:\n- Fábio é mais velho que o contador;\n- Guilherme é arquivista;\n- Hugo não é o mais novo dos três.\n\nÉ correto concluir que:",
    "options": [
      "A) Fábio é mais novo que Guilherme.",
      "B) Hugo é o segurança.",
      "C) Hugo é o mais novo dos três.",
      "D) O segurança é o mais velho dos três.",
      "E) Guilherme é mais velho que o contador."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Fábio é o mais velho dos três.",
      "Incorreta. Hugo é o contador, enquanto Fábio é o segurança.",
      "Incorreta. Hugo é de idade intermediária, Guilherme é o mais novo.",
      "Correta. Como Guilherme é arquivista, Fábio e Hugo dividem cargos de contador e segurança. Como Fábio é mais velho que o contador, Fábio não é o contador, logo Fábio = segurança. Consequentemente, Hugo = contador. Idades: Fábio > Hugo (contador). Como Hugo não é o mais novo, o mais novo é Guilherme. Do mais velho para o mais novo: Fábio (segurança) > Hugo (contador) > Guilherme (arquivista). O segurança (Fábio) é o mais velho.",
      "Incorreta. Guilherme é o mais novo dos três."
    ],
    "banca": "FGV",
    "ano": 2017,
    "assunto": "Raciocínio Lógico Quantitativo",
    "nivelSuperior": false
  },
  {
    "id": "rlm_07",
    "text": "Paulo, Tiago e João, auditores do trabalho, nasceram, um deles em Brasília, o outro em Goiânia e o terceiro em Curitiba. Suas idades são 25, 27 e 28 anos. Sabe-se que João não nasceu em Brasília e não tem 25 anos; que o auditor que nasceu em Goiânia tem 28 anos; que Paulo não nasceu em Curitiba nem tem 25 anos; e que Tiago nasceu na região Centro-Oeste.\n\nJulgue o item: 'O auditor brasiliense tem 27 anos.'",
    "options": [
      "A) Certo",
      "B) Errado"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Conforme a montagem lógica, Tiago (brasiliense) tem 25 anos.",
      "Correta. Como João e Paulo não têm 25 anos, Tiago = 25 anos. O de Goiânia tem 28 anos, logo Tiago não nasceu em Goiânia. Como Tiago nasceu no Centro-Oeste (Brasília ou Goiânia), Tiago nasceu em Brasília. Assim, o brasiliense (Tiago) tem 25 anos. Paulo não nasceu em Curitiba, logo é de Goiânia (28 anos). Resta para João nascer em Curitiba (27 anos)."
    ],
    "banca": "CESPE / Cebraspe",
    "ano": 2018,
    "assunto": "Raciocínio Lógico Quantitativo",
    "nivelSuperior": true
  },
  {
    "id": "rlm_08",
    "text": "Considerando as premissas de nascimento e idade dos três auditores (Paulo, Tiago e João), julgue o seguinte item:\n\n'Paulo nasceu em Goiânia.'",
    "options": [
      "A) Certo",
      "B) Errado"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. O brasiliense (Tiago) tem 25 anos e o de Goiânia tem 28. Como Paulo não nasceu em Curitiba (e nem em Brasília, que é de Tiago), Paulo nasceu em Goiânia, contando com 28 anos.",
      "Incorreta. O item está correto porque a dedução aponta exatamente Goiânia como local de nascimento de Paulo."
    ],
    "banca": "CESPE / Cebraspe",
    "ano": 2018,
    "assunto": "Raciocínio Lógico Quantitativo",
    "nivelSuperior": true
  },
  {
    "id": "rlm_09",
    "text": "Considerando que os símbolos em proposições lógicas representem as relações tradicionais, julgue o item subsequente com base nas premissas dos auditores (Paulo, Tiago e João):\n\n'O auditor que nasceu em Curitiba tem 25 anos.'",
    "options": [
      "A) Certo",
      "B) Errado"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O auditor de Curitiba é João, e ele tem 27 anos de idade.",
      "Correta. O do Centro-Oeste de 25 anos é Tiago (Brasília). O de Goiânia de 28 anos é Paulo. Sobra então a idade de 27 anos e a cidade de Curitiba para o auditor João. Portanto, o curitibano tem 27 anos, fazendo o item ser Errado."
    ],
    "banca": "CESPE / Cebraspe",
    "ano": 2018,
    "assunto": "Raciocínio Lógico Quantitativo",
    "nivelSuperior": true
  },
  {
    "id": "rlm_10",
    "text": "Assinale a alternativa que contém a negação da seguinte proposição simples:\n'Hoje o café é forte.'",
    "options": [
      "A) Amanhã o café será fraco.",
      "B) Hoje o café não é fraco.",
      "C) Hoje o café não é forte.",
      "D) Amanhã o café não será forte.",
      "E) Nem todos os dias o café será fraco."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Não se nega uma data/tempo futura nem se troca o adjetivo pelo antônimo direto.",
      "Incorreta. Esta frase mantém o sentido afirmativo original por dupla negação ou exclusão.",
      "Correta. A negação lógica de uma proposição simples consistirá em modificar o verbo principal inserindo o operador de negação: 'Hoje o café NÃO é forte'.",
      "Incorreta. Modifica a temporalidade para o futuro, violando a regra de negação pura.",
      "Incorreta. Trata de quantificadores e tempos verbais incorretos para uma proposição lógica simples."
    ],
    "banca": "FUNDATEC",
    "ano": 2022,
    "assunto": "Raciocínio Lógico Quantitativo",
    "nivelSuperior": false
  },
  {
    "id": "rlm_11",
    "text": "No exercício de suas atribuições profissionais, auditores fiscais sempre fazem afirmações verdadeiras, ao passo que sonegadores sempre fazem proposições falsas.\n\nSaulo, sonegador de impostos, fez a seguinte afirmação durante uma audiência: 'Como sou um pequeno comerciante, se vendo mais a cada mês, pago meus impostos em dia.'\n\nConsiderando as declarações do problema, assinale a opção que apresenta uma afirmação obrigatoriamente verdadeira:",
    "options": [
      "A) 'Saulo não é um pequeno comerciante'.",
      "B) 'Saulo vende mais a cada mês'.",
      "C) 'Saulo não vende mais a cada mês'.",
      "D) 'Saulo paga seus impostos em dia'.",
      "E) 'Se Saulo vende mais em um mês, paga seus impostos em dia'."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O antecedente da condicional deve ser verdadeiro, logo Saulo é pequeno comerciante.",
      "Correta. Como Saulo é sonegador, sua frase P ∧ (Q → R) é Falsa. Para que ela seja inteiramente falsa como condicional do tipo P → (Q → R), precisamos que o antecedente (P = Saulo é pequeno pioneiro/comerciante) seja Verdadeiro e o consequente (Q → R = se vendo mais, paga em dia) seja Falso. Para Q → R ser falso, precisamos de Q (vende mais) Verdadeiro e R (paga em dia) Falso. Logo, a sentença 'Saulo vende mais a cada mês' é obrigatoriamente Verdadeira.",
      "Incorreta. Vimos que ele necessariamente vende mais a cada mês para a condicional ser falsa.",
      "Incorreta. Ele obrigatoriamente não paga em dia.",
      "Incorreta. Essa foi a proposição condicional dita por ele e que é necessariamente falsa."
    ],
    "banca": "CESPE / Cebraspe",
    "ano": 2020,
    "assunto": "Raciocínio Lógico Quantitativo",
    "nivelSuperior": true
  },
  {
    "id": "rlm_12",
    "text": "Atribua o valor lógico V (verdadeiro) ou F (falso) para cada uma das afirmações a seguir:\n\nI. Se dois mais dois é igual a seis, então sete menos quatro é igual a quatro.\nII. Dois mais dois é igual a seis ou sete menos quatro é igual a quatro.\nIII. Oito mais oito é igual a dezesseis ou sete menos quatro é igual a quatro.\n\nA sequência correta dos valores lógicos obtida de cima para baixo é:",
    "options": [
      "A) F, F, V",
      "B) V, F, V",
      "C) F, F, F",
      "D) V, V, F",
      "E) F, V, V"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O item I resulta em verdadeiro por possuir duas premissas falsas em condicional.",
      "Correta. Vejamos:\n- I: 'Se 2+2=6 (F) então 7-4=4 (F)'. Condicional F → F = Verdadeiro (V).\n- II: '2+2=6 (F) ou 7-4=4 (F)'. Disjunção F ∨ F = Falso (F).\n- III: '8+8=16 (V) ou 7-4=4 (F)'. Disjunção V ∨ F = Verdadeiro (V). Portanto, obtemos a sequência V, F, V.",
      "Incorreta. A primeira e a terceira asserções são logicamente verdadeiras.",
      "Incorreta. A segunda asserção é disjunção inclusiva de duas mentiras matematicas, resultando em falso.",
      "Incorreta. A primeira asserção não é falsa, pois uma condicional de antecedente falso é sempre verdadeira."
    ],
    "banca": "VUNESP",
    "ano": 2021,
    "assunto": "Raciocínio Lógico Quantitativo",
    "nivelSuperior": false
  },
  {
    "id": "rlm_13",
    "text": "Ana tem alguns cartões e disse a seus amigos: 'cada um dos meus cartões tem uma letra em uma das faces e um número em outra'. Ana complementou: 'se na face de um cartão tem uma vogal, então no verso há um número ímpar'. Em seguida, ela mostrou frente e verso de três cartões:\n- Primeiro cartão: Frente 'C', Verso '2';\n- Segundo cartão: Frente 'B', Verso '3';\n- Terceiro cartão: Frente 'A', Verso '5'.\n\nPela análise lógica rigorosa, conclui-se que:",
    "options": [
      "A) apenas o cartão I contradiz as informações de Ana.",
      "B) apenas o cartão II contradiz as informações de Ana.",
      "C) apenas os cartões I e II contradizem as informações de Ana.",
      "D) todos os três cartões contradizem as informações de Ana.",
      "E) nenhum dos três cartões contradiz as informações de Ana."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. O cartão I tem consoante, a regra não se aplica a ele.",
      "Incorreta. O cartão II também tem consoante, então qualquer verso é válido.",
      "Incorreta. Nem o I nem o II contradizem a regra de Ana.",
      "Incorreta. Pelo contrário, nenhum cartão entra em desacordo com a frase.",
      "Correta. A proposição condicional diz: 'Se vogal → Ímpar'. Se a face é consoante, a regra não impõe nenhuma restrição médica/matemática (os cartões I e II com início 'C' e 'B' não podem violar a regra). O cartão III inicia com vogal 'A' e tem verso ímpar '5', atendendo à regra. Logo, nenhum cartão contradiz a regra de Ana."
    ],
    "banca": "IBFC",
    "ano": 2021,
    "assunto": "Raciocínio Lógico Quantitativo",
    "nivelSuperior": true
  },
  {
    "id": "rlm_14",
    "text": "Assinale a alternativa que apresenta uma negação de quantificador lógico para a seguinte frase:\n'Todos os servidores públicos usam gravata.'",
    "options": [
      "A) Existe pelo menos um servidor público que não usa gravata.",
      "B) Nenhum servidor público usa gravata.",
      "C) Alguns servidores públicos usam gravata.",
      "D) Todos os que usam gravata não são servidores públicos.",
      "E) Ninguém que não usa gravata é servidor público."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Pelo diagrama dos quantificadores, a negação de 'Todo A é B' é 'Algum A não é B' (ou 'Existe pelo menos um A que não é B').",
      "Incorreta. 'Nenhum' não nega o 'Todo', pois são ambos universais opostos (contrários mas não contraditórios).",
      "Incorreta. Esta frase mantém o mesmo sentido lógico afirmativo geral.",
      "Incorreta. Esta proposição apenas inverte os termos lógicos de conjunto.",
      "Incorreta. Não representa a negação clássica de um quantificador universal."
    ],
    "banca": "VUNESP",
    "ano": 2021,
    "assunto": "Raciocínio Lógico Quantitativo",
    "nivelSuperior": false
  },
  {
    "id": "rlm_15",
    "text": "Qual das opções a seguir representa a negação correta da proposição composta condicional:\n'Se todos os plact são plect, então todos os plict são ploct'?",
    "options": [
      "A) se todos os plict não são ploct, então todos os plact não são plect.",
      "B) se todos os plect são plact, então todos os ploct são plict.",
      "C) todos os plact são plect, mas existe plict que não é ploct.",
      "D) nenhum plact é plect e nenhum plict é ploct.",
      "E) algum plact é plect, mas todo plict não é ploct."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Essa é uma equivalência contrapositiva aproximada, não a negação.",
      "Incorreta. Não consiste em negar a condicional original.",
      "Correta. A negação lógica de uma condicional 'Se A, então B' é dada pela conjunção 'A e não B' (regra do MANE: mantém a primeira E nega a segunda). A primeira parte é 'Todos os plact são plect'; a negação da segunda é 'Existe plict que não é ploct' (negação de todo). Logo: 'Todos os plact são plect, mas existe plict que não é ploct'.",
      "Incorreta. Erra ao negar o antecedente e o consequente com 'nenhum'.",
      "Incorreta. Modificou o antecedente ('todo' para 'algum'), violando a regra de manutenção."
    ],
    "banca": "VUNESP",
    "ano": 2022,
    "assunto": "Raciocínio Lógico Quantitativo",
    "nivelSuperior": false
  },
  {
    "id": "rlm_16",
    "text": "Considere a seguinte afirmação: 'Todo homem é bípede e mamífero.'\nA alternativa que apresenta a negação lógica correta para essa afirmação é:",
    "options": [
      "A) Nenhum homem é bípede e mamífero.",
      "B) Nenhum homem é bípede ou mamífero.",
      "C) Existe homem que não é bípede ou não é mamífero.",
      "D) Existe homem que não é bípede e não é mamífero.",
      "E) Alguns homens são bípedes e mamíferos."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. 'Nenhum' não é a negação clássica de 'Todo'.",
      "Incorreta. Além do erro do 'Nenhum', altera a conjunção erroneamente.",
      "Correta. A negação de 'Todo A é (B e C)' é 'Algum A não é (B e C)'. Pela Lei de De Morgan, negar 'B e C' equivale a 'não B ou não C'. Portanto: 'Existe homem que não é bípede ou não é mamífero'.",
      "Incorreta. Erra ao manter o conectivo 'e' (o correto pela Lei de De Morgan para negar a conjunção é o 'ou').",
      "Incorreta. Apenas reafirma a proposição original em formato existencial."
    ],
    "banca": "CESPE / Cebraspe",
    "ano": 2018,
    "assunto": "Raciocínio Lógico Quantitativo",
    "nivelSuperior": true
  },
  {
    "id": "rlm_17",
    "text": "Considere a afirmação: 'Se como verduras e não como gorduras saturadas, então minha saúde agradece.'\nUma equivalente lógica dessa afirmação é:",
    "options": [
      "A) Se não como verduras e como gorduras saturadas, então minha saúde não agradece.",
      "B) Não como verduras ou como gorduras saturadas ou minha saúde agradece.",
      "C) Se minha saúde agradece, então como verduras e não como gorduras saturadas.",
      "D) Como verduras ou não como gorduras saturadas e minha saúde agradece.",
      "E) Se minha saúde não agradece, então não como verduras ou como gorduras saturadas."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Não seguiu a equivalência contrapositiva nem a regra NEyMA de forma válida.",
      "Correta. Pela regra de equivalência da condicional (P → Q ≡ ~P ∨ Q, regra do NEyMA: nega a primeira parte OU mantém a segunda). A primeira parte (P) é 'como verduras e não como gorduras saturadas'. Sua negação (~P) é 'não como verduras OU como gorduras saturadas' (Lei de De Morgan). Mantendo a segunda (Q) após o conectivo OU, temos: 'Não como verduras ou como gorduras saturadas ou minha saúde agradece'.",
      "Incorreta. Essa asserção representa a recíproca, que não é equivalente.",
      "Incorreta. Formulação e conectivos incorretos para a equivalência lógica.",
      "Incorreta. Embora seja contrapositiva, errou ao aplicar De Morgan na negação ao usar o 'ou' incorreto."
    ],
    "banca": "FCC",
    "ano": 2018,
    "assunto": "Raciocínio Lógico Quantitativo",
    "nivelSuperior": false
  },
  {
    "id": "rlm_18",
    "text": "Considere verdadeira a afirmação: 'Se os livros foram catalogados, então eles já foram distribuídos nas estantes.'\nUma negação lógica para a afirmação apresentada é:",
    "options": [
      "A) Os livros foram catalogados e não foram distribuídos nas estantes.",
      "B) Os livros não foram catalogados e não foram distribuídos nas estantes.",
      "C) Os livros foram catalogados ou foram distribuídos nas estantes.",
      "D) Se os livros não foram catalogados, então eles não foram distribuídos nas estantes.",
      "E) Se os livros não foram distribuídos nas estantes, então eles não foram catalogados."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A negação lógica de uma condicional 'P → Q' é dada por 'P ∧ ~Q' (regra do MANE: mantém a primeira E nega a segunda). Portanto, temos: 'Os livros foram catalogados E não foram distribuídos nas estantes'.",
      "Incorreta. Negou a primeira parte, que deveria ter sido mantida pela regra do MANE.",
      "Incorreta. Trocou o condicional pelo conectivos 'ou' sem negar no formato correto.",
      "Incorreta. Essa frase é o inverso que não configura negação lógica.",
      "Incorreta. Essa frase representa a contrapositiva, que é equivalente e não a negação de P → Q."
    ],
    "banca": "VUNESP",
    "ano": 2019,
    "assunto": "Raciocínio Lógico Quantitativo",
    "nivelSuperior": false
  },
  {
    "id": "rlm_19",
    "text": "Em certa empresa, são consideradas verdadeiras as seguintes afirmações:\n- Qualquer gerente é mulher.\n- Nenhuma mulher sabe trocar uma lâmpada.\n\nCom base nessas afirmações, é correto concluir que, nessa empresa:",
    "options": [
      "A) algum gerente é homem;",
      "B) há gerente que sabe trocar uma lâmpada;",
      "C) todo homem sabe trocar uma lâmpada;",
      "D) todas as mulheres são gerentes;",
      "E) nenhum gerente sabe trocar uma lâmpada."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. A premissa nos diz apenas sobre gerentes sendo mulheres, sem comprovar gerência masculina.",
      "Incorreta. Como toda gerente é mulher e nenhuma mulher troca lâmpada, nenhuma gerente sabe fazê-lo.",
      "Incorreta. Não há informações sobre a habilidade de troca de lâmpadas de homens.",
      "Incorreta. O conjunto 'gerente' é subconjunto de 'mulher', o que não significa que toda mulher seja gerente.",
      "Correta. Se todo gerente é mulher (Gerente ⊂ Mulher) e nenhuma mulher sabe trocar uma lâmpada (Mulher ∩ TrocaLâmpada = ∅), deduz-se de forma direta por silogismo categórico ou diagramas lógicos que nenhum gerente sabe trocar uma lâmpada (Gerente ∩ TrocaLâmpada = ∅)."
    ],
    "banca": "FGV",
    "ano": 2018,
    "assunto": "Raciocínio Lógico Quantitativo",
    "nivelSuperior": false
  },
  {
    "id": "rlm_20",
    "text": "Sejam as proposições I e II:\nI. 'Se o governador do DF indicou o presidente do TCDF e a Câmara Legislativa indicou o corregedor, então o ouvidor é apreciador de música clássica.'\nII. 'O presidente do TCDF não foi indicado pelo governador ou o corregedor não foi indicado pela Câmara Legislativa ou o ouvidor é apreciador de música clássica.'\n\nÀ luz da lógica sentencial, as sentenças I e II são logicamente equivalentes.",
    "options": [
      "A) Certo",
      "B) Errado"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A proposição I é da forma (P ∧ Q) → R. Pela equivalência clássica do condicional (A → B ≡ ~A ∨ B), temos ~(P ∧ Q) ∨ R. Aplicando a Lei de De Morgan a ~(P ∧ Q), obtemos ~P ∨ ~Q. Integrando tudo, a proposição equivale a ~P ∨ ~Q ∨ R, que é exatamente a escrita da sentença II.",
      "Incorreta. As duas sentenças são sim logicamente equivalentes, conforme demonstrado pelas leis do condicional e De Morgan."
    ],
    "banca": "CESPE / Cebraspe",
    "ano": 2019,
    "assunto": "Raciocínio Lógico Quantitativo",
    "nivelSuperior": true
  },
  {
    "id": "rlm_21",
    "text": "Considere as seguintes afirmativas a respeito de um objeto chamado biba:\n- Se biba é bala, então não é bola.\n- Se biba não é bala, então é babalu.\n\nÉ correto concluir que:",
    "options": [
      "A) se biba é bola, então é babalu.",
      "B) se biba é babalu, então é bola.",
      "C) se biba não é bola, então é babalu.",
      "D) se biba não é babalu, então é bola.",
      "E) se biba é bola, então não é babalu."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Proposições: 1) Bala → ~Bola (que equivale a Bola → ~Bala); 2) ~Bala → Babalu. Se 'biba é bola', por (1) ela não é bala (~Bala). Se não é bala (~Bala), por (2) ela é babalu. Portanto: 'se biba é bola, então é babalu'.",
      "Incorreta. O inverso não pode ser deduzido diretamente das condicionais aplicadas.",
      "Incorreta. Não há base para afirmar que a ausência de bola leva diretamente a ser babalu.",
      "Incorreta. Se não é babalu, por contrapositiva é bala, e se é bala é ~bola. Logo, se não é babalu é não bola.",
      "Incorreta. Conforme a dedução das premissas, se ela é bola, ela necessariamente é babalu."
    ],
    "banca": "FCC",
    "ano": 2018,
    "assunto": "Raciocínio Lógico Quantitativo",
    "nivelSuperior": false
  },
  {
    "id": "rlm_22",
    "text": "Considere que p e q sejam proposições conhecidas, em que V e F representem os valores verdadeiro e falso. Se o valor lógico da implicação (~p) → (~q) é FALSO, o valor-verdade da proposição composta p ∨ (~q) é igual ao valor lógico da proposição:",
    "options": [
      "A) (~q) → p",
      "B) (~q) → (~p)",
      "C) (~p) ∨ (~q)",
      "D) (~p) ∧ q",
      "E) p ∧ q"
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. Essa condicional resultaria em outro valor-verdade.",
      "Incorreta. Verifique os valores de p e q induzidos pela premissa principal.",
      "Incorreta. Essa disjunção resultará em falso.",
      "Incorreta. Essa conjunção de negações tem valor falso.",
      "Correta. Se (~p) → (~q) é Fso, então seu antecedente (~p) é Verdadeiro (logo p é Falso) e seu consequente (~q) é Falso (logo q é Verdadeiro). Com p = F e q = V:\n- p ∨ (~q) = F ∨ F = Falso.\nAnalisemos a opção (E): p ∧ q = F ∧ V = Falso. Os dois possuem o mesmo valor lógico (Falso)."
    ],
    "banca": "FCC",
    "ano": 2019,
    "assunto": "Raciocínio Lógico Quantitativo",
    "nivelSuperior": true
  },
  {
    "id": "rlm_23",
    "text": "Em três xícaras – uma grande, uma média e uma pequena – foram colocadas uma certa quantidade de chá com temperaturas diferentes. Considere verdadeiro que:\n- ou a xícara grande recebeu chá morno ou a xícara média recebeu a menor quantidade de chá;\n- a quantidade de chá colocada na xícara maior foi inferior à da xícara que recebeu chá quente, e a xícara pequena não foi a que recebeu a maior quantidade de chá;\n- o chá frio não foi colocado na xícara média e a xícara pequena recebeu mais chá do que a de tamanho grande.\n\nDesejando servir uma criança com chá morno, um adolescente com chá frio e um adulto com chá quente, deve-se entregar a eles, respectivamente, as xícaras de tamanho:",
    "options": [
      "A) pequena, grande e média.",
      "B) média, pequena e grande.",
      "C) grande, pequena e média.",
      "D) grande, média e pequena."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Conforme a dedução lógica, o chá morno ficou na xícara grande e o quente na média.",
      "Incorreta. O chá frio não ficou na xícara pequena, mas sim o morno na grande.",
      "Correta. Vamos focar nas premissas de tamanho e quantidade:\n1. 'A xícara pequena recebeu mais chá do que a grande', e 'a xícara pequena não recebeu a maior quantidade de chá' (logo, a maior quantidade foi na xícara média). A ordem decrescente de quantidade de chá é: Média > Pequena > Grande.\n2. 'A quantidade de chá colocada na xícara maior (Média) foi inferior à da xícara que recebeu chá quente'. Se a maior quantidade de todas (Média) foi inferior a outra, o chá quente não pode estar na Média; logo, o quente está na xícara pequena ou na grande.\n3. 'o chá frio não foi colocado na xícara média', assim o chá na xícara Média é morno ou quente.\n4. 'ou a xícara grande recebeu chá morno ou a xícara média recebeu a menor quantidade'. Como a menor quantidade está na Grande, a xícara média não recebeu a menor quantidade. Por disjunção exclusiva, a xícara grande necessariamente recebeu o chá morno.\n5. Sabendo que Grande = Morno, o quente só pode estar na Média ou na Pequena, e o frio na Média ou na Pequena. Como o frio não foi na média, o frio está na Pequena. Logo, o quente está na Média.\nAssim, morno (criança) = grande; frio (adolescente) = pequena; quente (adulto) = média. Ordem: grande, pequena e média.",
      "Incorreta. Não obedece à ordem correta de partição das temperaturas deduzida."
    ],
    "banca": "Focus Concursos",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo",
    "nivelSuperior": true
  },
  {
    "id": "rlm_24",
    "text": "Todos os belo-horizontinos são mineiros. A partir dessa premissa, qual das seguintes conclusões expressa uma relação de subconjuntos correta?",
    "options": [
      "A) Algum belo-horizontino não é mineiro.",
      "B) Todos os mineiros são belo-horizontinos.",
      "C) O conjunto dos mineiros contém o conjunto dos belo-horizontinos.",
      "D) O conjunto dos belo-horizontinos contém o conjunto dos mineiros."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Uma proposição verdadeira universal afirmativa (Todo A é B) anula a possibilidade de algum A não ser B.",
      "Incorreta. A relação 'Todo A é B' (inclusão de A em B) não autoriza a comutatividade direta 'Todo B é A'. Nem todo mineiro é belo-horizontino.",
      "Correta. A proposição categórica 'Todo belo-horizontino é mineiro' indica que o conjunto de belo-horizontinos (A) é um subconjunto próprio contido dentro do conjunto maior de mineiros (B). Portanto, o conjunto dos mineiros contém (contém o subconjunto de) belo-horizontinos.",
      "Incorreta. O correto é o inverso: o conjunto dos mineiros é quem engloba e contém o conjunto dos belo-horizontinos."
    ],
    "banca": "Focus Concursos",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo",
    "nivelSuperior": false
  },
  {
    "id": "rlm_25",
    "text": "Considere a seguinte proposição composta: (P → ~Q) ↔ (R ∧ P). Sabendo que a proposição simples P possui o valor lógico FALSO (F), o que se pode afirmar corretamente sobre o valor lógico final da sentença original?",
    "options": [
      "A) A sentença é uma contradição lógica independente das variáveis.",
      "B) A sentença é sempre verdadeira (V) quando P é falsa.",
      "C) A sentença é sempre falsa (F) quando P é falsa.",
      "D) O valor lógico final dependerá unicamente do valor de R."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Para ser contradição, ela precisaria resultar em F para absolutamente todas as valorações possíveis de todas as variáveis, o que não foi o caso aqui.",
      "Incorreta. Na verdade, ela assume o valor Falso constante quando p = F.",
      "Correta. Se P é falso (F):\n- (P → ~Q) resulta em Verdadeiro (V), pois toda condicional com antecedente falso é logicamente verdadeira.\n- (R ∧ P) resulta em Falso (F), pois uma conjunção com qualquer parte falsa é sempre falsa.\n- Sob o conectivo bicondicional (↔), temos então (V ↔ F), o que resulta sob a tabela-verdade clássica em FALSO (F). Logo, a frase será sempre falsa.",
      "Incorreta. Como o valor de P é Falso, a conjunção (R ∧ P) será Falsa, anulando qualquer efeito que R pudesse ter na determinação final."
    ],
    "banca": "Focus Concursos",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo",
    "nivelSuperior": true
  },
  {
    "id": "rlm_26",
    "text": "Analise a estrutura lógica do seguinte argumento válido formado por duas premissas e uma conclusão:\n- Premissa 1: [(~A) ∧ (~G)] → (~P)\n- Premissa 2: P\n- Conclusão: A ∨ G\n\nA validade lógica interna desse argumento é deduzida diretamente a partir da aplicação sequencial de quais regras de inferência/equivalência lógica?",
    "options": [
      "A) Paradoxo e Contingência.",
      "B) Contraposição e Absurdo.",
      "C) Modus Ponens e Contradição.",
      "D) Modus Tollens e Leis de De Morgan."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Paradoxo e contingência são classificações de tabelas-verdade, não regras de inferência formais de dedução.",
      "Incorreta. Esse argumento utiliza a premissa 2 como negação do consequente para inferir a negação do antecedente por raciocínio direto.",
      "Incorreta. O Modus Ponens exige a afirmação do antecedente, enquanto aqui temos a afirmação em oposição direta de P (que contradiz o consequente ~P).",
      "Correta. Raciocínio de dedução:\n- Por Modus Tollens (se X → Y, e temos ~Y, conclui-se ~X), como temos a Premissa 2 'P' (que é a negação de '~P'), inferimos a negação do antecedente da Premissa 1, ou seja: ~[(~A) ∧ (~G)].\n- Aplicando as Leis de De Morgan a essa negação, temos: ~(~A) ∨ ~(~G), o que, por dupla negação, resulta em 'A ∨ G' (exatamente a nossa conclusão)."
    ],
    "banca": "Focus Concursos",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo",
    "nivelSuperior": true
  },
  {
    "id": "rlm_sim_151",
    "text": "Analise a seguinte expressão lógica: ¬(P ∧ Q)→(R ∧ ¬R). Sabendo que P é verdadeiro, Q é verdadeiro e R é falso, qual o valor lógico da expressão e qual a justificativa correta?",
    "options": [
      "A) Falso, pois o antecedente é verdadeiro e o consequente é falso.",
      "B) Verdadeiro, pois o antecedente é falso e, na condicional, se o antecedente é falso, o resultado é sempre verdadeiro.",
      "C) Falso, pois a negação de uma conjunção verdadeira resulta em algo falso.",
      "D) Verdadeiro, pois o consequente (R ∧ ¬R) é uma contradição e sempre será falso.",
      "E) Verdadeiro, pois a precedência exige que se resolva a bicondicional antes da negação."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O antecedente ¬(V ∧ V) é Falso, não Verdadeiro.",
      "Correta. O antecedente é Falso (¬V), o que garante a veracidade da condicional.",
      "Incorreta. O valor final da expressão é Verdadeiro devido ao conectivo principal (condicional).",
      "Incorreta. (R ∧ ¬R) é uma contradição e é sempre Falso, mas a justificativa falha.",
      "Incorreta. Não há bicondicional na expressão."
    ],
    "generalExplanation": "Passo a passo: 1.(P ∧ Q) é (V ∧ V)= V. 2. ¬(V)= F (Antecedente). 3. (R ∧ ¬R) é (F ∧ V)= F. 4. F → F resulta em Verdadeiro. Na condicional, antecedente falso torna a condicional sempre verdadeira.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_152",
    "text": "Considere a seguinte proposição composta: 'Se o projeto é viável e o orçamento é aprovado, então a execução começa imediatamente'. Sabendo que a execução não começou imediatamente, conclui-se corretamente, por meio do Modus Tollens e das Leis de De Morgan, que:",
    "options": [
      "A) O projeto não é viável e o orçamento não foi aprovado.",
      "B) O projeto não é viável ou o orçamento não foi aprovado.",
      "C) O projeto é viável, mas o orçamento não foi aprovado.",
      "D) Se o projeto não é viável, então o orçamento não foi aprovado.",
      "E) O projeto é viável ou o orçamento foi aprovado."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A negação de 'e' resulta em 'ou', não em 'e'.",
      "Correta. Aplica Modus Tollens para negar o antecedente composto e De Morgan para distribuir a negação.",
      "Incorreta. Esta é apenas uma das possibilidades, não a conclusão necessária da disjunção.",
      "Incorreta. A conclusão deve ser uma proposição disjuntiva.",
      "Incorreta. Esta alternativa não nega os componentes."
    ],
    "generalExplanation": "Pelo Modus Tollens, negamos o consequente (~Q) para negar o antecedente ~(P e R). Pela Lei de De Morgan, a negação de (P e R) é (~P ou ~R): 'O projeto não é viável OU o orçamento não foi aprovado'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_153",
    "text": "Em um problema de lógica, o personagem Daniel afirma: 'Eu sou inocente e o perito é culpado'. Sabe-se que Daniel é um mentiroso contumaz (sempre mente). Ao aplicar a Estratégia da Suposição, a negação lógica da fala de Daniel, que representa a verdade dos fatos, seria:",
    "options": [
      "A) Daniel é culpado e o perito é inocente.",
      "B) Daniel é culpado ou o perito é inocente.",
      "C) Daniel é inocente ou o perito é culpado.",
      "D) Daniel é culpado e o perito é culpado.",
      "E) Daniel é inocente e o perito é inocente."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A negação de uma conjunção troca o 'e' pelo 'ou'.",
      "Correta. Nega-se a primeira parte (Daniel é culpado), a segunda (o perito é inocente) e troca-se 'e' por 'ou'.",
      "Incorreta. Não houve negação dos termos.",
      "Incorreta. Não nega a segunda parte.",
      "Incorreta. Não nega nenhuma das partes."
    ],
    "generalExplanation": "A fala de Daniel é uma conjunção (P ∧ Q). A negação lógica de (P ∧ Q), pelas Leis de De Morgan, é (~P ∨ ~Q): 'Daniel é culpado OU o perito é inocente'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_154",
    "text": "Três amigos — Alberto, Breno e Caio — exercem as profissões de Auditor, Analista e Técnico, não necessariamente nessa ordem. Eles vivem em cidades diferentes: São Paulo, Rio de Janeiro e Belo Horizonte. Sabe-se que:\n1. O Auditor vive em Belo Horizonte.\n2. Alberto é Analista.\n3. Caio não vive no Rio de Janeiro.\nCom base na transitividade lógica e na técnica de matrizes, é correto afirmar que:",
    "options": [
      "A) Breno é o Auditor e vive em Belo Horizonte.",
      "B) Alberto vive em Belo Horizonte.",
      "C) Caio é o Auditor e vive em São Paulo.",
      "D) Breno vive no Rio de Janeiro e é Técnico.",
      "E) Alberto vive no Rio de Janeiro e Caio é o Técnico."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Alberto = Analista. Breno = Auditor (BH). Caio = Técnico (SP). Alberto = Analista (RJ). Breno é Auditor e vive em Belo Horizonte.",
      "Incorreta. O Auditor vive em BH, e Alberto é Analista.",
      "Incorreta. Se Caio fosse Auditor, viveria em BH, mas Caio é Técnico em SP.",
      "Incorreta. Breno vive em BH e é Auditor.",
      "Incorreta. A afirmação direta e completa na alternativa A é a correta."
    ],
    "generalExplanation": "Associações: Alberto é Analista. O Auditor vive em BH. Como Caio não vive no Rio e não pode ser Analista, se Breno é Auditor de BH, Caio é Técnico de SP e Alberto é Analista do RJ.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_155",
    "text": "Em questões de correlação lógica que envolvem 'Associações com Ordenação' (como pessoas em uma fila ou andares de um prédio), uma estratégia avançada mencionada no material técnico consiste em:",
    "options": [
      "A) Ignorar a tabela de associação e focar exclusivamente no desenho da linha do tempo.",
      "B) Tratar pistas de posicionamento relativo (ex: 'imediatamente acima') como blocos fixos a serem testados na estrutura.",
      "C) Assumir que o primeiro nome citado no enunciado ocupa sempre a primeira posição da ordem.",
      "D) Priorizar a resolução das mentiras antes de iniciar qualquer esboço de ordenação.",
      "E) Utilizar o princípio da exclusão apenas para os nomes, descartando-o para as posições ordinais."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Recomenda-se usar ambos.",
      "Correta. Pistas de posicionamento relativo funcionam como blocos fixos a serem encaixados no esquema.",
      "Incorreta. A ordem do enunciado não dita a solução.",
      "Incorreta. Problemas de ordenação nem sempre têm mentirosos.",
      "Incorreta. O princípio da exclusão vale para todas as categorias."
    ],
    "generalExplanation": "Em problemas de ordenação, pistas de vizinhança ou posição relativa ('imediatamente acima/abaixo') devem ser tratadas como blocos fixos para testar as possibilidades.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_156",
    "text": "Em um cenário de invasão de sistemas, três técnicos (A, B e C) são interrogados. O auditor sabe que o culpado sempre diz a verdade e os inocentes sempre mentem. As declarações são:\nA: 'B é inocente.'\nB: 'C é o culpado.'\nC: 'Eu sou o culpado.'\nCom base nessas informações, quem é o culpado?",
    "options": [
      "A) Técnico A.",
      "B) Técnico B.",
      "C) Técnico C.",
      "D) Não é possível determinar com os dados fornecidos.",
      "E) A e B são culpados conjuntamente."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Se A é culpado (V), diz a verdade: B é inocente (V). B (inocente, F) mente: C é culpado (F -> C é inocente). C (inocente, F) mente: Eu sou o culpado (F). Sem contradições.",
      "Incorreta. Se B fosse culpado, C seria culpado (duas verdades/dois culpados).",
      "Incorreta. Se C fosse culpado, diria a verdade, mas B (inocente) também teria dito a verdade, o que contradiz a regra.",
      "Incorreta. É possível determinar univocamente.",
      "Incorreta. Há apenas um culpado."
    ],
    "generalExplanation": "Culpado diz a verdade, inocentes mentem. Testando A como culpado: A diz a verdade (B é inocente). B é inocente (mente dizendo C é culpado). C é inocente (mente dizendo ser culpado). Tudo é consistente. Logo, A é o culpado.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_157",
    "text": "Considere um problema onde um suspeito D apresenta um depoimento composto: 'Eu sou inocente E o suspeito E é o culpado'. De acordo com as orientações para problemas de detetive em bancas como a FGV, se for determinado que o suspeito D é o mentiroso do grupo, qual a implicação lógica rigorosa sobre sua fala?",
    "options": [
      "A) D é culpado e E é inocente.",
      "B) D é culpado ou E é inocente (ou ambos).",
      "C) D e E são ambos culpados.",
      "D) A frase inteira é descartada e não se pode concluir nada sobre a culpa de D.",
      "E) D é necessariamente inocente, mas mentiu sobre a culpa de E."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Esta é a negação de 'e' por 'e', incorreta logicamente.",
      "Correta. Pela negação da conjunção (De Morgan), ~(D_inocente e E_culpado) = D_culpado OU E_inocente.",
      "Incorreta. Não garante a falsidade da frase original.",
      "Incorreta. É possível extrair a negação lógica.",
      "Incorreta. Não se pode deduzir que D é necessariamente inocente."
    ],
    "generalExplanation": "A negação de (D_inocente E E_culpado) pelas Leis de De Morgan resulta em (D_culpado OU E_inocente).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_158",
    "text": "Em lógica, quantificadores são operadores que definem o alcance de uma proposição em relação a um domínio. O quantificador universal(∀) indica que a propriedade se aplica a todos os elementos do domínio, enquanto o quantificador existencial(∃) afirma que há pelo menos um elemento no domínio que satisfaz a propriedade.\nCom base nisso, assinale a sentença que pode ser expressa por meio de um quantificador universal.",
    "options": [
      "A) Há leis que entraram em vigor no ano de 2002.",
      "B) Todo juiz deve fundamentar suas decisões.",
      "C) Existe uma norma suprema no ordenamento jurídico.",
      "D) Em certos casos, a lei penal retroage para beneficiar o réu.",
      "E) Algumas normas constitucionais têm aplicação imediata."
    ],
    "correctIndex": 1,
    "explanations": [
      "Errada. 'Há leis' indica existência de ao menos uma lei, caracterizando quantificador existencial.",
      "Certa. 'Todo juiz' expressa quantificador universal, pois abrange todos os elementos do conjunto 'juiz'.",
      "Errada. 'Existe' indica quantificador existencial.",
      "Errada. 'Em certos casos' indica particularização, não universalidade.",
      "Errada. 'Algumas' indica quantificador existencial/particular."
    ],
    "generalExplanation": "O quantificador universal é expresso por termos como 'todo', 'toda', 'qualquer', 'todos'. A alternativa B usa 'Todo juiz', indicando que a propriedade se aplica à totalidade do conjunto dos juízes.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo - Quantificadores",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_159",
    "text": "Um jornal publicou a seguinte manchete:\n\"Toda Agência do Banco do Brasil tem déficit de funcionários.\"\nDiante de tal inverdade, o jornal se viu obrigado a retratar-se, publicando uma negação de tal manchete. Das sentenças seguintes, aquela que expressaria de maneira correta a negação da manchete publicada é:",
    "options": [
      "A) Qualquer Agência do Banco do Brasil não têm déficit de funcionários.",
      "B) Nenhuma Agência do Banco do Brasil tem déficit de funcionários.",
      "C) Alguma Agência do Banco do Brasil não tem déficit de funcionários.",
      "D) Existem Agências com deficit de funcionários que não pertencem ao Banco do Brasil.",
      "E) O quadro de funcionários do Banco do Brasil está completo."
    ],
    "correctIndex": 2,
    "explanations": [
      "Errada. Equivale a dizer que todas as agências não têm déficit, o que corresponde a uma negação mais forte que a correta.",
      "Errada. 'Nenhuma agência tem déficit' é a universal negativa, não a negação lógica da universal afirmativa.",
      "Certa. É a forma correta: 'Alguma agência não tem déficit', negando a totalidade afirmada.",
      "Errada. Muda o domínio da proposição, falando de agências que não pertencem ao Banco do Brasil.",
      "Errada. Trata de quadro completo, mas não é a negação lógica formal da proposição original."
    ],
    "generalExplanation": "A negação de 'Todo A é B' é 'Algum A não é B'. Portanto, a negação de 'Toda Agência do Banco do Brasil tem déficit de funcionários' é 'Alguma Agência do Banco do Brasil não tem déficit de funcionários'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo - Negação de Quantificador Universal",
    "nivelSuperior": true
  },
  {
    "id": "rlm_sim_160",
    "text": "Considere a seguinte afirmação:\nTodo docente é licenciado.\nA alternativa que apresenta uma negação lógica para essa afirmação é:",
    "options": [
      "A) Existe docente que não é licenciado.",
      "B) Todo licenciado é docente.",
      "C) Nenhum docente é licenciado.",
      "D) Não existe docente que não é licenciado.",
      "E) Nenhum licenciado é docente."
    ],
    "correctIndex": 0,
    "explanations": [
      "Certa. É a negação correta da universal afirmativa.",
      "Errada. Apenas inverte os termos, formando outra proposição, não a negação.",
      "Errada. É universal negativa e não equivale à negação da universal afirmativa.",
      "Errada. Equivale à própria afirmação original: se não existe docente não licenciado, todo docente é licenciado.",
      "Errada. Inverte e nega os termos, sem corresponder à negação da proposição original."
    ],
    "generalExplanation": "A negação de 'Todo A é B' é 'Algum/Existe A que não é B'. Assim, a negação de 'Todo docente é licenciado' é 'Existe docente que não é licenciado'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo - Negação de Quantificador Universal",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_161",
    "text": "Leia a frase a seguir:\nQualquer pessoa sabe andar de bicicleta.\nA afirmação que corresponde à negação lógica dessa frase é:",
    "options": [
      "A) Ninguém sabe andar de bicicleta.",
      "B) Pelo menos uma pessoa não sabe andar de bicicleta.",
      "C) As crianças não sabem andar de bicicleta.",
      "D) Todos que andam de bicicleta também andam de motocicleta.",
      "E) Apenas uma pessoa sabe andar de bicicleta."
    ],
    "correctIndex": 1,
    "explanations": [
      "Errada. 'Ninguém sabe' é universal negativa, mais forte que a negação correta.",
      "Certa. Equivale a 'alguma pessoa não sabe', negação correta da universal afirmativa.",
      "Errada. Restringe o conjunto a crianças, alterando o alcance da proposição.",
      "Errada. Introduz motocicleta, elemento estranho à proposição original.",
      "Errada. 'Apenas uma pessoa sabe' não é a negação lógica da frase original."
    ],
    "generalExplanation": "'Qualquer pessoa' equivale a 'toda pessoa'. A negação de 'Toda pessoa sabe andar de bicicleta' é 'Pelo menos uma pessoa não sabe andar de bicicleta'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo - Negação de Quantificador Universal",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_162",
    "text": "Com relação às proposições lógicas, julgue o item.\nSe a proposição “Todo russo gosta de sopa de beterraba” é falsa, é correto concluir que a proposição “Pelo menos um russo não gosta de sopa de beterraba” é verdadeira.",
    "options": [
      "A) Certo - O item está certo.",
      "B) Errado - O item está errado."
    ],
    "correctIndex": 0,
    "explanations": [
      "Certo. A falsidade da universal afirmativa implica a verdade da existencial negativa correspondente.",
      "Errado. A relação descrita é exatamente a regra de negação do quantificador universal."
    ],
    "generalExplanation": "Se 'Todo A é B' é falso, então existe ao menos um elemento de A que não é B. Logo, 'Pelo menos um russo não gosta de sopa de beterraba' é verdadeiro.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo - Quantificador Universal e Existencial",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_163",
    "text": "Qual das proposições a seguir é a negação da proposição:\n“Todo policial militar é um exímio atirador.”?",
    "options": [
      "A) Todo policial militar não é um exímio atirador.",
      "B) Nenhum policial militar é um exímio atirador.",
      "C) Pelo menos um policial militar é um exímio atirador.",
      "D) Nenhum policial militar não é um exímio atirador.",
      "E) Algum policial militar não é um exímio atirador."
    ],
    "correctIndex": 4,
    "explanations": [
      "Errada. Equivale a universal negativa, não à negação lógica da universal afirmativa.",
      "Errada. 'Nenhum A é B' é mais forte e não é a negação correta.",
      "Errada. É existencial afirmativa, não nega a proposição original.",
      "Errada. 'Nenhum A não é B' equivale a 'Todo A é B', ou seja, à própria proposição original.",
      "Certa. É a negação correta: existe ao menos um policial militar que não é exímio atirador."
    ],
    "generalExplanation": "A negação de 'Todo A é B' é 'Algum A não é B'. Portanto, a negação correta é 'Algum policial militar não é um exímio atirador'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo - Negação de Quantificador Universal",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_164",
    "text": "Julgue o item seguinte, relativo a lógica proposicional e a lógica de primeira ordem.\nA negação da proposição “Todas as reuniões devem ser gravadas por mídias digitais” é corretamente expressa por “Nenhuma reunião deve ser gravada por mídias digitais”.",
    "options": [
      "A) Certo - O item está certo.",
      "B) Errado - O item está errado."
    ],
    "correctIndex": 1,
    "explanations": [
      "Errado. A negação da universal afirmativa não é a universal negativa.",
      "Certo. A forma correta de negação seria a existencial negativa: alguma reunião não deve ser gravada."
    ],
    "generalExplanation": "A negação de 'Todas as reuniões devem ser gravadas' é 'Alguma reunião não deve ser gravada', e não 'Nenhuma reunião deve ser gravada'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo - Negação de Quantificador Universal",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_165",
    "text": "Em determinado dia, 1.000 veículos de carga, com seus respectivos condutores e cargas, passaram por um posto de fiscalização de fronteira. Desses, 800 estavam com a documentação em situação regular— o veículo, o condutor e a carga —, e 200 apresentavam alguma irregularidade na documentação — do veículo, do condutor ou da carga. Além disso, as placas de todos esses 1.000 veículos foram devidamente registradas.\nTendo como base a situação hipotética apresentada, julgue o item seguinte.\nA negação da sentença “todo condutor abordado na fiscalização era brasileiro ou estrangeiro” é a seguinte sentença: “nenhum condutor abordado na fiscalização era brasileiro ou estrangeiro”.",
    "options": [
      "A) Certo - O item está certo.",
      "B) Errado - O item está errado."
    ],
    "correctIndex": 1,
    "explanations": [
      "Errado. A negação correta não é 'nenhum condutor era brasileiro ou estrangeiro'.",
      "Certo. A negação correta seria existencial negativa: algum condutor não era brasileiro nem estrangeiro."
    ],
    "generalExplanation": "A negação de 'todo condutor era brasileiro ou estrangeiro' é 'algum condutor não era brasileiro nem estrangeiro'. A sentença proposta usa 'nenhum', o que constitui universal negativa, não a negação correta.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo - Negação de Quantificador Universal com Disjunção",
    "nivelSuperior": true
  },
  {
    "id": "rlm_sim_166",
    "text": "Quatro amigas, Andressa, Bárbara, Carolina e Denise, possuem bicicletas do mesmo modelo, mas de cores diferentes. Sabe-se que:\n• Há uma bicicleta amarela, uma branca, uma verde e uma lilás;\n• Cada amiga tem apenas uma bicicleta;\n• A bicicleta de Andressa não é lilás;\n• A bicicleta de Bárbara não é branca e nem lilás;\n• A bicicleta de Denise é amarela.\nAcerca dessa situação hipotética, julgue o item.\nA negação da proposição “Toda bicicleta tem duas rodas” é “Nenhuma bicicleta tem duas rodas”.",
    "options": [
      "A) Certo - O item está certo.",
      "B) Errado - O item está errado."
    ],
    "correctIndex": 1,
    "explanations": [
      "Errado. A negação da universal afirmativa não é a universal negativa.",
      "Certo. A negação correta seria a existencial negativa: alguma bicicleta não tem duas rodas."
    ],
    "generalExplanation": "A negação de 'Toda bicicleta tem duas rodas' é 'Alguma bicicleta não tem duas rodas'. 'Nenhuma bicicleta tem duas rodas' é universal negativa e não equivale à negação correta.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo - Negação de Quantificador Universal",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_167",
    "text": "Considere a afirmação:\n“Nenhum soldado escuta mal”.\nA sua negação é:",
    "options": [
      "A) Há pelo menos um soldado que escuta mal.",
      "B) Vários soldados escutam mal.",
      "C) Todos os soldados escutam mal.",
      "D) Todos os soldados escutam bem.",
      "E) Todas as pessoas que escutam bem são soldados."
    ],
    "correctIndex": 0,
    "explanations": [
      "Certa. É a negação correta: existe ao menos um soldado que escuta mal.",
      "Errada. 'Vários' indica quantidade maior que um, não sendo a negação lógica mínima e equivalente.",
      "Errada. Universal afirmativa, mais forte que a negação correta.",
      "Errada. Equivale ou se aproxima da própria afirmação original.",
      "Errada. Muda o sujeito da proposição e não representa a negação."
    ],
    "generalExplanation": "A negação de 'Nenhum A é B' é 'Algum A é B'. Assim, a negação de 'Nenhum soldado escuta mal' é 'Há pelo menos um soldado que escuta mal'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo - Negação de Quantificador Universal Negativo",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_168",
    "text": "Considere a afirmativa: “nenhum cachorro é baixo”. A negação dessa afirmativa é",
    "options": [
      "A) “todo cachorro é baixo”.",
      "B) “algum cachorro é baixo”.",
      "C) “algum cachorro não é baixo”.",
      "D) “algum animal baixo não é cachorro”."
    ],
    "correctIndex": 1,
    "explanations": [
      "Errada. Universal afirmativa, não é a negação equivalente.",
      "Certa. É a negação correta da universal negativa.",
      "Errada. Particular negativa, não corresponde à negação da proposição original.",
      "Errada. Inverte os termos e altera o conjunto analisado."
    ],
    "generalExplanation": "A negação de 'Nenhum A é B' é 'Algum A é B'. Logo, a negação de 'nenhum cachorro é baixo' é 'algum cachorro é baixo'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo - Negação de Quantificador Universal Negativo",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_169",
    "text": "Sabendo que é falsa a afirmação “Nenhum aluno está preparado para a prova”, então, de acordo com a lógica, a afirmação obrigatoriamente verdadeira é:",
    "options": [
      "A) Todos os alunos estão preparados para a prova.",
      "B) Existe aluno que está preparado para a prova.",
      "C) Dentre aqueles que se prepararam para a prova, todos são aluno.",
      "D) Dentre aqueles que se prepararam para a prova, nenhum é aluno.",
      "E) Todos os alunos não se prepararam para a prova."
    ],
    "correctIndex": 1,
    "explanations": [
      "Errada. Não se pode concluir que todos estão preparados, apenas que ao menos um está.",
      "Certa. É a negação da proposição dada como falsa.",
      "Errada. Trata dos que se prepararam, invertendo a relação lógica e não sendo consequência obrigatória.",
      "Errada. Não decorre da falsidade da proposição original.",
      "Errada. Equivale à própria proposição falsa, não à sua negação."
    ],
    "generalExplanation": "Se 'Nenhum aluno está preparado' é falsa, sua negação é verdadeira: 'Algum aluno está preparado'. Portanto, existe aluno preparado para a prova.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo - Negação de Quantificador Universal Negativo",
    "nivelSuperior": true
  },
  {
    "id": "rlm_sim_170",
    "text": "Considere a afirmação: “Nenhum médico é cego”.\nA negação dessa afirmação é:",
    "options": [
      "A) Há, pelo menos, um médico cego;",
      "B) Nenhum cego é médico;",
      "C) Todos os médicos são cegos;",
      "D) Todos os cegos são médicos;",
      "E) Todos os médicos não são cegos."
    ],
    "correctIndex": 0,
    "explanations": [
      "Certa. É a negação correta da universal negativa.",
      "Errada. É equivalente à proposição original, pois 'nenhum A é B' equivale a 'nenhum B é A'.",
      "Errada. Universal afirmativa, mais forte que a negação correta.",
      "Errada. Inverte os termos e não representa a negação.",
      "Errada. Equivale à própria proposição original."
    ],
    "generalExplanation": "A negação de 'Nenhum A é B' é 'Algum A é B'. Assim, a negação é 'Há, pelo menos, um médico cego'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo - Negação de Quantificador Universal Negativo",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_171",
    "text": "Considere a afirmação:\n“Existem insetos que não são pretos”\nSe essa afirmação é falsa, então é verdade que",
    "options": [
      "A) nenhum inseto é preto.",
      "B) todo inseto é preto.",
      "C) todos os animais pretos são insetos.",
      "D) nenhum animal preto é inseto.",
      "E) nem todos os insetos são pretos."
    ],
    "correctIndex": 1,
    "explanations": [
      "Errada. Não decorre da falsidade da proposição; além disso, contradiria a conclusão correta se houver insetos.",
      "Certa. É a negação da existencial negativa: todo inseto é preto.",
      "Errada. Inverte e amplia os termos, falando de animais pretos.",
      "Errada. Também altera os termos e não é consequência lógica.",
      "Errada. Equivale à própria proposição original, que foi declarada falsa."
    ],
    "generalExplanation": "A afirmação 'Existem insetos que não são pretos' corresponde a 'Algum inseto não é preto'. Se é falsa, sua negação é verdadeira: 'Todo inseto é preto'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo - Negação de Quantificador Existencial Negativo",
    "nivelSuperior": true
  },
  {
    "id": "rlm_sim_172",
    "text": "A alternativa que apresenta uma sentença equivalente para a negação da afirmação\n“Pelo menos uma empresa que participou do pregão público não tem certificação digital” é:",
    "options": [
      "A) Nem todas as empresas que participaram do pregão público tem certificação digital.",
      "B) Alguma empresa que participou do pregão público tem certificação digital.",
      "C) Nenhuma empresa que participou do pregão público tem certificação digital.",
      "D) Todas as empresas que participaram do pregão público têm certificação digital.",
      "E) Todas as empresas que participaram do pregão público não têm certificação digital."
    ],
    "correctIndex": 3,
    "explanations": [
      "Errada. Equivale à própria afirmação original: 'nem todas' significa que alguma não tem.",
      "Errada. Não é equivalente à negação; apenas afirma existência de empresa com certificação, sem garantir que todas tenham.",
      "Errada. Universal negativa, não é a negação da existencial negativa.",
      "Certa. É a negação correta: todas têm certificação digital.",
      "Errada. Afirma que todas não têm certificação, o que não corresponde à negação."
    ],
    "generalExplanation": "A afirmação original é 'Alguma empresa não tem certificação digital'. Sua negação é 'Todas as empresas que participaram do pregão público têm certificação digital'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo - Negação de Quantificador Existencial Negativo",
    "nivelSuperior": true
  },
  {
    "id": "rlm_sim_173",
    "text": "Considere que P, Q e R sejam proposições simples que possam ser julgadas como verdadeiras(V) ou falsas(F). Com relação às operações lógicas de negação(~), conjunção (∧), disjunção (∨) e implicação (→), julgue o item subsecutivo.\nA proposição(P∨ Q) →(Q∧ P) é uma tautologia.",
    "options": [
      "A) Certo - O item está certo.",
      "B) Errado - O item está errado."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreto. A proposição pode assumir valor lógico Falso, não sendo sempre verdadeira.",
      "Correto. A proposição é uma contingência, pois seu valor lógico depende dos valores atribuídos a P e Q."
    ],
    "generalExplanation": "A proposição (P∨Q) → (Q∧P) não é uma tautologia. Se P for Verdadeiro e Q for Falso, (P∨Q) resulta em Verdadeiro e (Q∧P) resulta em Falso. A condicional Verdadeiro → Falso resulta em Falso. Portanto, trata-se de uma contingência.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo - Tautologia, Contradição e Contingência",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_174",
    "text": "Considerando que P e Q representem proposições conhecidas e que V e F representem, respectivamente, os valores verdadeiro e falso, julgue o próximo item.\nA proposição[P∨Q] → Q é uma tautologia.",
    "options": [
      "A) Certo - O item está certo.",
      "B) Errado - O item está errado."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreto. A proposição não é sempre verdadeira.",
      "Correto. A proposição é falsa quando P é verdadeiro e Q é falso."
    ],
    "generalExplanation": "A proposição [P∨Q] → Q não é uma tautologia. Se P for Verdadeiro e Q for Falso, a disjunção [P∨Q] será Verdadeira. A condicional Verdadeiro → Falso resulta em Falso. Logo, é uma contingência.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo - Tautologia, Contradição e Contingência",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_175",
    "text": "Considerando que P, Q e R sejam proposições simples, julgue o item abaixo.\nA partir do preenchimento da tabela-verdade abaixo, é correto concluir que a proposição P∧Q∧R→P∨Q é uma tautologia",
    "options": [
      "A) Certo - O item está certo.",
      "B) Errado - O item está errado."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correto. A tabela-verdade resultará em todos os valores lógicos verdadeiros na coluna final.",
      "Incorreto. A proposição é de fato uma tautologia."
    ],
    "generalExplanation": "A proposição P∧Q∧R→P∨Q é uma tautologia. O antecedente (P∧Q∧R) só é verdadeiro quando P, Q e R são simultaneamente verdadeiros. Nesse caso, o consequente (P∨Q) também será verdadeiro, resultando em V→V (Verdadeiro). Em todas as outras combinações, o antecedente é falso, e uma condicional com antecedente falso é sempre verdadeira.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo - Tautologia, Contradição e Contingência",
    "nivelSuperior": true
  },
  {
    "id": "rlm_sim_176",
    "text": "Chama-se tautologia a toda proposição que é sempre verdadeira, independentemente da verdade dos termos que a compõem. Um exemplo de tautologia é:",
    "options": [
      "A) se João é alto, então João é alto ou Guilherme é gordo",
      "B) se João é alto, então João é alto e Guilherme é gordo",
      "C) se João é alto ou Guilherme é gordo, então Guilherme é gordo",
      "D) se João é alto ou Guilherme é gordo, então João é alto e Guilherme é gordo",
      "E) se João é alto ou não é alto, então Guilherme é gordo"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Representa a tautologia p → (p ∨ q).",
      "Incorreta. Representa p → (p ∧ q). Se p=V e q=F, teremos V → F, que é Falso (contingência).",
      "Incorreta. Representa (p ∨ q) → q. Se p=V e q=F, teremos V → F, que é Falso (contingência).",
      "Incorreta. Representa (p ∨ q) → (p ∧ q). Se p=V e q=F, teremos V → F, que é Falso (contingência).",
      "Incorreta. Representa (p ∨ ~p) → q. O antecedente é sempre V. Se q for Falso, teremos V → F, que é Falso (contingência)."
    ],
    "generalExplanation": "A alternativa A apresenta a estrutura p → (p ∨ q). Se p for verdadeiro, a disjunção (p ∨ q) também será verdadeira (V → V = V). Se p for falso, a condicional já é verdadeira por ter antecedente falso (F → Qualquer = V). Portanto, é uma tautologia.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo - Tautologia, Contradição e Contingência",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_177",
    "text": "Sobre as proposições:\nI. Se Fábio é ator e Fábio não é ator, então Sandra é médica.\nII. Se Sandra não é médica então Fábio é ator e Sandra é médica.\nÉ correto dizer que",
    "options": [
      "A) I é tautologia e II é contradição.",
      "B) I é contradição e II é contingência.",
      "C) I é tautologia e II é contingência.",
      "D) I é contingência e II é tautologia.",
      "E) I e II são contradições."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. A proposição II não é sempre falsa (não é contradição).",
      "Incorreta. A proposição I não é contradição.",
      "Correta. I é tautologia e II é contingência.",
      "Incorreta. I é tautologia e II é contingência.",
      "Incorreta. Nenhuma das duas é contradição."
    ],
    "generalExplanation": "A proposição I tem a forma (p ∧ ~p) → q. O antecedente é uma contradição (sempre Falso). Uma condicional com antecedente falso é sempre verdadeira, logo é uma tautologia. A proposição II tem a forma ~q → (p ∧ q). Se q for Verdadeiro, ~q é Falso e a condicional é Verdadeira. Se q for Falso, ~q é Verdadeiro e (p ∧ q) é Falso, resultando em V → F (Falso). Como pode ser V ou F, é uma contingência.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo - Tautologia, Contradição e Contingência",
    "nivelSuperior": true
  },
  {
    "id": "rlm_sim_178",
    "text": "É sabido que tautologia é uma proposição cuja tabela-verdade sempre resulta em valores lógicos verdadeiros. Sendo P uma proposição lógica, assinale a alternativa incorreta.",
    "options": [
      "A) (P v~P) é um caso de tautologia",
      "B) (P^~P) não é um caso de tautologia",
      "C) ~(P^~P) não é um caso de tautologia",
      "D) (P↔~P) não é um caso de tautologia",
      "E) ~(P↔~P) é um caso de tautologia"
    ],
    "correctIndex": 2,
    "explanations": [
      "Correta (afirmação verdadeira). P v ~P é o princípio do terceiro excluído, uma tautologia.",
      "Correta (afirmação verdadeira). P ^ ~P é o princípio da não contradição, sendo sempre Falso, logo não é tautologia.",
      "Incorreta (afirmação falsa, sendo o gabarito). ~(P^~P) é a negação de uma contradição, resultando em uma tautologia.",
      "Correta (afirmação verdadeira). P ↔ ~P é sempre Falso, não sendo tautologia.",
      "Correta (afirmação verdadeira). ~(P↔~P) é a negação de uma contradição, sendo uma tautologia."
    ],
    "generalExplanation": "A questão pede a alternativa INCORRETA. A expressão (P^~P) é uma contradição (sempre Falsa). Logo, a sua negação ~(P^~P) será sempre Verdadeira, configurando uma tautologia. A alternativa C afirma que ~(P^~P) NÃO é um caso de tautologia, o que é uma afirmação falsa.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo - Tautologia, Contradição e Contingência",
    "nivelSuperior": true
  },
  {
    "id": "rlm_sim_179",
    "text": "Observe a sentença:(P →~Q) ↔(R^ P). Se a proposição lógica P é falsa, assinale a alternativa que apresenta uma afirmação correta.",
    "options": [
      "A) A sentença é uma tautologia",
      "B) A sentença é uma contradição",
      "C) A sentença é verdadeira sempre que a proposição P é falsa",
      "D) A sentença é falsa sempre que a proposição P é falsa",
      "E) A sentença é verdadeira sempre que a proposição P é verdadeira"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. A sentença não é sempre verdadeira.",
      "Incorreta. A sentença não é sempre falsa para qualquer valor de P, apenas quando P é falsa.",
      "Incorreta. Conforme demonstrado, a sentença resulta em Falso quando P é falsa.",
      "Correta. A avaliação da sentença com P=F resulta invariavelmente em Falso.",
      "Incorreta. Se P for verdadeira, a sentença dependerá dos valores de Q e R, não sendo sempre verdadeira."
    ],
    "generalExplanation": "Substituindo P por Falso (F) na sentença: (F → ~Q) ↔ (R ^ F). A condicional (F → ~Q) é sempre Verdadeira (V). A conjunção (R ^ F) é sempre Falsa (F). A sentença reduz-se a V ↔ F, cujo resultado é sempre Falso. Portanto, a sentença é falsa sempre que P é falsa.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo - Tautologia, Contradição e Contingência",
    "nivelSuperior": true
  },
  {
    "id": "rlm_sim_180",
    "text": "Sabendo que p, q e r são três proposições, julgue o item.\nA proposição p∧∼p é um exemplo de tautologia.",
    "options": [
      "A) Certo - O item está certo.",
      "B) Errado - O item está errado."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreto. p ∧ ~p é uma contradição.",
      "Correto. A proposição é sempre falsa."
    ],
    "generalExplanation": "A proposição p ∧ ~p é o exemplo clássico de uma contradição (Princípio da Não Contradição), pois uma proposição e sua negação não podem ser verdadeiras simultaneamente. Seu valor lógico é sempre Falso.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo - Tautologia, Contradição e Contingência",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_181",
    "text": "A proposição ¬(p∨q) ⇒ ¬(p∧q) trata-se de uma:",
    "options": [
      "A) Contradição.",
      "B) Bicondicional.",
      "C) Contingência.",
      "D) Disjunção.",
      "E) Tautologia."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. Não é sempre falsa.",
      "Incorreta. O conectivo principal é uma condicional (implicação), não bicondicional.",
      "Incorreta. Não assume valores lógicos mistos.",
      "Incorreta. O conectivo principal não é a disjunção.",
      "Correta. A tabela-verdade resulta apenas em valores verdadeiros."
    ],
    "generalExplanation": "Aplicando as Leis de De Morgan no antecedente, ¬(p∨q) torna-se (¬p ∧ ¬q). A proposição assume a forma (¬p ∧ ¬q) ⇒ (¬p ∨ ¬q). Se a conjunção (¬p ∧ ¬q) for verdadeira, ambos os termos são verdadeiros, o que torna a disjunção (¬p ∨ ¬q) também verdadeira (V ⇒ V = V). Se a conjunção for falsa, a condicional é automaticamente verdadeira (F ⇒ Qualquer = V). Logo, é sempre verdadeira (Tautologia).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo - Tautologia, Contradição e Contingência",
    "nivelSuperior": true
  },
  {
    "id": "rlm_sim_182",
    "text": "Sejam P1, P2 e C duas premissas e a conclusão, respectivamente, julgue o item acerca da lógica da argumentação e dos diagramas lógicos.\nO argumento P1∧P2→C a seguir é uma tautologia.\nP1: Nem estudou, nem passou;\nP2: Estudou ou passou;\nC: Estudou se, e somente se, passou.",
    "options": [
      "A) Certo - O item está certo.",
      "B) Errado - O item está errado."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correto. A premissa conjunta é uma contradição, tornando a condicional do argumento uma tautologia.",
      "Incorreto. O argumento é de fato uma tautologia."
    ],
    "generalExplanation": "O argumento é representado por ((~E ∧ ~P) ∧ (E ∨ P)) → (E ↔ P). A conjunção das premissas P1 e P2 é uma contradição lógica, pois exige que E e P sejam ambos falsos e, simultaneamente, que pelo menos um seja verdadeiro. Como o antecedente da condicional é sempre Falso, a condicional completa é sempre Verdadeira, caracterizando uma tautologia (o que também prova que o argumento é válido).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo - Tautologia, Contradição e Contingência",
    "nivelSuperior": true
  },
  {
    "id": "rlm_sim_183",
    "text": "Considere a seguinte proposição: “Neste concurso, Pedro será aprovado ou não será aprovado.”. Analisando segundo a lógica, essa afirmação é um exemplo claro de",
    "options": [
      "A) contradição.",
      "B) equivalência.",
      "C) redundância.",
      "D) repetição.",
      "E) tautologia."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. Uma contradição seria p ∧ ~p.",
      "Incorreta. Equivalência refere-se à relação entre duas proposições distintas com mesmas tabelas-verdade.",
      "Incorreta. Embora na linguagem comum pareça redundante, o termo técnico lógico é tautologia.",
      "Incorreta. Termo não utilizado para classificar o valor lógico da proposição.",
      "Correta. p ∨ ~p é sempre verdadeiro."
    ],
    "generalExplanation": "A proposição tem a estrutura lógica p ∨ ~p. Pelo Princípio do Terceiro Excluído, uma proposição ou é verdadeira ou é falsa, não havendo terceira opção. A disjunção de uma proposição com sua negação é sempre verdadeira, o que define uma tautologia.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo - Tautologia, Contradição e Contingência",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_184",
    "text": "Considerando p e q duas proposições quaisquer, assinale a alternativa que representa, logicamente, uma tautologia.",
    "options": [
      "A) ∼p∧p",
      "B) ∼p∧∼q",
      "C) (p∧q)→(p∨q)",
      "D) (p∨q)→(p∧q)",
      "E) p∨q"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. ~p ∧ p é uma contradição (sempre Falso).",
      "Incorreta. ~p ∧ ~q é uma contingência (depende dos valores de p e q).",
      "Correta. É uma tautologia.",
      "Incorreta. (p∨q)→(p∧q) é contingência. Se p=V e q=F, temos V→F, que é Falso.",
      "Incorreta. p ∨ q é contingência. Se p=F e q=F, o resultado é Falso."
    ],
    "generalExplanation": "A alternativa C apresenta a estrutura (p∧q)→(p∨q). Se a conjunção (p∧q) for verdadeira, ambos p e q são verdadeiros, o que torna a disjunção (p∨q) também verdadeira (V→V = V). Se a conjunção for falsa, a condicional é automaticamente verdadeira (F→Qualquer = V). Logo, é sempre verdadeira.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo - Tautologia, Contradição e Contingência",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_185",
    "text": "Trata-se de um exemplo de contingência a proposição da alternativa:",
    "options": [
      "A) P∨¬P",
      "B) P⇒Q",
      "C) P⇔P",
      "D) ¬Q⇒¬Q",
      "E) P∧¬P"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. P ∨ ¬P é uma tautologia.",
      "Correta. P ⇒ Q é uma contingência.",
      "Incorreta. P ⇔ P é uma tautologia (A ↔ A é sempre V).",
      "Incorreta. ¬Q ⇒ ¬Q é uma tautologia.",
      "Incorreta. P ∧ ¬P é uma contradição."
    ],
    "generalExplanation": "Contingência é a proposição que pode ser verdadeira ou falsa. A condicional P ⇒ Q (P → Q) é falsa quando P é verdadeiro e Q é falso, e verdadeira nos demais casos, dependendo portanto dos valores lógicos de P e Q.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo - Tautologia, Contradição e Contingência",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_186",
    "text": "Considerando P e Q proposições simples, a tabela verdade da fórmula P→∼P∨Q é:",
    "options": [
      "A) Tautologia.",
      "B) Contradição.",
      "C) Contingência.",
      "D) Tautologia e Equivalência lógica.",
      "E) Tautologia e Implicação lógica."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Não é sempre verdadeira.",
      "Incorreta. Não é sempre falsa.",
      "Correta. Assume valores V e F dependendo de P e Q.",
      "Incorreta. Não é tautologia.",
      "Incorreta. Não é tautologia."
    ],
    "generalExplanation": "Para classificar a fórmula P → (~P ∨ Q), testamos os valores lógicos. Se P for Verdadeiro e Q for Falso, temos: V → (~V ∨ F) => V → (F ∨ F) => V → F, que resulta em Falso. Se P for Falso e Q for Falso, temos: F → (~F ∨ F) => F → (V ∨ F) => F → V, que resulta em Verdadeiro. Como a fórmula assume tanto valores Verdadeiros quanto Falsos, ela é uma contingência.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo - Tautologia, Contradição e Contingência",
    "nivelSuperior": true
  },
  {
    "id": "rlm_sim_187",
    "text": "Considerando R e S proposições simples, a tabela verdade da fórmula(R→S)↔(S∨∼R) é:",
    "options": [
      "A) Tautologia.",
      "B) Contradição.",
      "C) Contingência.",
      "D) Tautologia e equivalência lógica.",
      "E) Tautologia e implicação lógica."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A fórmula é sempre verdadeira.",
      "Incorreta. Não é sempre falsa.",
      "Incorreta. Não varia entre V e F.",
      "Incorreta. Embora haja equivalência entre as partes, a classificação da fórmula composta como um todo na tabela-verdade é estritamente 'Tautologia'. O gabarito oficial aponta apenas A.",
      "Incorreta. A fórmula não é uma implicação, mas uma bicondicional que resulta em tautologia."
    ],
    "generalExplanation": "A condicional R → S é logicamente equivalente a ~R ∨ S. Substituindo na fórmula original, temos: (~R ∨ S) ↔ (S ∨ ~R). Como a disjunção possui a propriedade comutativa, os dois lados da bicondicional são exatamente a mesma expressão. Uma bicondicional entre expressões idênticas (A ↔ A) é sempre Verdadeira, caracterizando uma tautologia.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico Quantitativo - Tautologia, Contradição e Contingência",
    "nivelSuperior": true
  },
  {
    "id": "rlm_sim_188",
    "text": "Trata-se de um exemplo de tautologia a proposição:",
    "options": [
      "A) Se dois é par então é verão em Gramado.",
      "B) É verão em Gramado ou não é verão em Gramado.",
      "C) Maria é alta ou Pedro é alto.",
      "D) É verão em Gramado se e somente se Maria é alta.",
      "E) Maria não é alta e Pedro não é alto."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Tem a forma p → q. Se p for verdadeiro e q for falso, a condicional é falsa; logo, é contingência.",
      "Correta. Tem a forma q ∨ ¬q, que é sempre verdadeira pelo Princípio do Terceiro Excluído (tautologia).",
      "Incorreta. Tem a forma p ∨ q. Se ambas forem falsas, o resultado é falso; logo, é contingência.",
      "Incorreta. Tem a forma q ↔ p. Pode ser verdadeira ou falsa conforme os valores de p e q; logo, é contingência.",
      "Incorreta. Tem a forma ¬p ∧ ¬q. Pode ser verdadeira ou falsa conforme os valores de p e q; logo, é contingência."
    ],
    "generalExplanation": "A alternativa B tem a forma lógica q ∨ ¬q, que é sempre verdadeira independentemente do valor lógico da proposição q (Princípio do Terceiro Excluído).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Tautologia, Contradição e Contingência",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_189",
    "text": "Trata-se de um exemplo de contradição a proposição:",
    "options": [
      "A) Dois é um número par e ímpar.",
      "B) Gramado é uma cidade bonita se e somente se faz frio.",
      "C) Maria é alta e Pedro é baixo.",
      "D) Se dois é um número par então Maria é alta.",
      "E) Se Pedro é baixo então Maria é alta."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Representa p ∧ ¬p, pois um número não pode ser par e ímpar ao mesmo tempo; é uma proposição sempre falsa.",
      "Incorreta. É uma bicondicional entre proposições independentes; pode ser verdadeira ou falsa (contingência).",
      "Incorreta. É uma conjunção entre fatos independentes; pode ser verdadeira ou falsa (contingência).",
      "Incorreta. É uma condicional; pode ser verdadeira ou falsa conforme os valores atribuídos (contingência).",
      "Incorreta. É uma condicional; pode ser verdadeira ou falsa conforme os valores atribuídos (contingência)."
    ],
    "generalExplanation": "A alternativa A afirma simultaneamente que dois é par e ímpar, o que corresponde à forma p ∧ ¬p, sendo sempre falsa (contradição).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Tautologia, Contradição e Contingência",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_190",
    "text": "Considerando P e Q proposições simples, a fórmula (P ∨ ∼Q) ↔ (P → Q) é uma:",
    "options": [
      "A) Proposição simples.",
      "B) Contradição.",
      "C) Contingência.",
      "D) Tautologia, mas não é equivalência lógica.",
      "E) Tautologia e equivalência lógica."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. A fórmula contém conectivos e é composta, não simples.",
      "Incorreta. Não é sempre falsa; se P = V e Q = V, resulta em verdadeira.",
      "Correta. A fórmula assume valores verdadeiros e falsos dependendo das valorações de P e Q (por exemplo, se P = V e Q = F, resulta em falsa).",
      "Incorreta. Não é tautologia, pois pode assumir valor falso.",
      "Incorreta. Não é tautologia nem equivalência lógica universal."
    ],
    "generalExplanation": "A fórmula (P ∨ ¬Q) ↔ (P → Q) assume valores verdadeiros e falsos conforme a tabela-verdade dos componentes, caracterizando uma contingência.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Tautologia, Contradição e Contingência",
    "nivelSuperior": true
  },
  {
    "id": "rlm_sim_191",
    "text": "A alternativa correta para descrever uma proposição composta descrita como contradição é:",
    "options": [
      "A) Uma fórmula que tem somente interpretação falsa, por exemplo, (P ∨ ∼P).",
      "B) Uma fórmula que tem somente interpretação falsa, por exemplo, ∼(∼P).",
      "C) Uma fórmula que tem somente interpretação falsa, por exemplo, (P ∧ ∼P).",
      "D) Uma fórmula que tem somente interpretação verdadeira, por exemplo, (P → ∼P).",
      "E) Uma fórmula que tem somente interpretação verdadeira, por exemplo, (P ↔ ∼P)."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. A definição está correta, mas o exemplo (P ∨ ¬P) é uma tautologia.",
      "Incorreta. ∼(∼P) equivale a P, podendo ser verdadeiro ou falso.",
      "Correta. (P ∧ ¬P) é uma fórmula sempre falsa, caracterizando com precisão uma contradição.",
      "Incorreta. Contradição possui interpretação somente falsa, não verdadeira.",
      "Incorreta. Contradição possui interpretação somente falsa."
    ],
    "generalExplanation": "Contradição é qualquer proposição composta cuja tabela-verdade é inteiramente falsa. O exemplo clássico é (P ∧ ¬P).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Tautologia, Contradição e Contingência",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_192",
    "text": "A proposição que representa uma tautologia é",
    "options": [
      "A) ((P ∨ Q) ∧ (P → Q)) → Q.",
      "B) (P → Q) ∧ P ∧ ¬Q.",
      "C) (P ∧ Q) ∧ (P → Q).",
      "D) (P ∧ ¬Q) ∨ (¬P ∧ Q).",
      "E) Alternativa E não consta no PDF."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. É uma tautologia, pois não existe nenhuma valoração em que o antecedente seja verdadeiro e o consequente Q seja falso.",
      "Incorreta. (P → Q) ∧ P ∧ ¬Q é uma contradição (sempre falsa).",
      "Incorreta. Trata-se de uma contingência.",
      "Incorreta. Trata-se da disjunção exclusiva, que é uma contingência.",
      "Incorreta. Alternativa de preenchimento de formato."
    ],
    "generalExplanation": "A proposição ((P ∨ Q) ∧ (P → Q)) → Q resulta sempre em Verdadeiro para todas as combinações de valoração de P e Q, sendo portanto uma tautologia.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Tautologia, Contradição e Contingência",
    "nivelSuperior": true
  },
  {
    "id": "rlm_sim_193",
    "text": "Um dos conceitos iniciais de lógica é o de estruturas lógicas. Em relação às estruturas lógicas, julgue o item a seguir.\nDenomina-se proposição toda sentença declarativa à qual se pode atribuir um dos valores lógicos: verdadeiro ou falso, nunca ambos.\nTrata-se, portanto, de uma sentença fechada.",
    "options": [
      "A) Certo",
      "B) Errado"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A definição apresentada contempla com exatidão o conceito de proposição na lógica bivalente.",
      "Incorreta. O item não possui divergências técnicas."
    ],
    "generalExplanation": "Proposição é toda oração declarativa que exprime um pensamento de sentido completo e à qual se atribui um único valor lógico (Verdadeiro ou Falso), constituindo uma sentença fechada.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Proposições Lógicas",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_194",
    "text": "Em relação às proposições utilizadas na lógica sentencial ou proposicional, informe se é verdadeiro(V) ou falso(F) o que se afirma a seguir e assinale a alternativa com a sequência correta.\n() Toda proposição é uma oração, com sujeito e predicado.\n() Toda proposição é uma oração declarativa.\n() Toda proposição tem um e somente um dos valores lógicos: ou é verdadeira(V) ou é falsa(F), não ambas.",
    "options": [
      "A) V – F – V.",
      "B) V – V – F.",
      "C) F – F – V.",
      "D) F – V – F.",
      "E) V – V – V."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. A segunda afirmação é verdadeira.",
      "Incorreta. A terceira afirmação é verdadeira.",
      "Incorreta. A primeira e segunda afirmações são verdadeiras.",
      "Incorreta. A primeira afirmação é verdadeira no contexto tradicional da lógica.",
      "Correta. Todas as três afirmações são verdadeiras na lógica proposicional tradicional."
    ],
    "generalExplanation": "Na lógica proposicional, proposições são orações declarativas com verbo/predicado que possuem um único valor lógico (Princípio do Terceiro Excluído e da Não-Contradição).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Proposições Lógicas",
    "nivelSuperior": true
  },
  {
    "id": "rlm_sim_195",
    "text": "Quantas das seguintes sentenças são proposições?\n- Meu Deus, que chuva forte!\n- Dia 20 de Setembro comemora-se a Revolução Farroupilha.\n- Qual o significado do feriado de 7 de Setembro?\n- O ônibus escolar está abastecido de combustível.\n- Motorista, calibre os pneus do ônibus.",
    "options": [
      "A) 1",
      "B) 2.",
      "C) 3.",
      "D) 4.",
      "E) 5."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Há duas sentenças declarativas válidas.",
      "Correta. Apenas 'Dia 20 de Setembro comemora-se a Revolução Farroupilha' e 'O ônibus escolar está abastecido de combustível' são proposições.",
      "Incorreta. Sentenças exclamativas, interrogativas e imperativas não são proposições.",
      "Incorreta.",
      "Incorreta."
    ],
    "generalExplanation": "Apenas sentenças declarativas são proposições. Sentenças exclamativas (!), interrogativas (?) e imperativas (ordens) não são proposições lógicas.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Proposições Lógicas",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_196",
    "text": "A respeito de proposições lógicas, julgue o item a seguir.\nA sentença ”Soldado, cumpra suas obrigações” é uma proposição simples.",
    "options": [
      "A) Certo",
      "B) Errado"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A frase exprime uma ordem (imperativa), não podendo ser classificada como verdadeira ou falsa.",
      "Correta. Frases imperativas não possuem valor lógico e, portanto, não constituem proposições."
    ],
    "generalExplanation": "Sentenças imperativas (que expressam ordens ou comandos) não podem ser valoradas como verdadeiras ou falsas, logo não são proposições.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Proposições Lógicas",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_197",
    "text": "Qual das alternativas a seguir NÃO é uma proposição lógica?",
    "options": [
      "A) A França fica na Europa.",
      "B) Silvio é autônomo e não trabalha às segundas-feiras.",
      "C) 3+8=9",
      "D) As crianças estão com fome ou com sono.",
      "E) Você vai trabalhar?"
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. É uma proposição declarativa (verdadeira).",
      "Incorreta. É uma proposição composta declarativa.",
      "Incorreta. É uma proposição matemática declarativa (falsa).",
      "Incorreta. É uma proposição composta declarativa.",
      "Correta. É uma sentença interrogativa, portanto não é uma proposição lógica."
    ],
    "generalExplanation": "Frases interrogativas não possuem valor lógico (não são nem verdadeiras nem falsas), portanto não são proposições.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Proposições Lógicas",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_198",
    "text": "Julgue o item que se segue.\nNas sentenças abaixo, apenas A e D são proposições.\nA: 12 é menor que 6.\nB: Para qual time você torce?\nC: x+ 3> 10.\nD: Existe vida após a morte.",
    "options": [
      "A) Certo",
      "B) Errado"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A é declarativa (falsa); B é interrogativa; C é sentença aberta (variável x sem quantificador); D é declarativa. Apenas A e D são proposições.",
      "Incorreta. O item está correto."
    ],
    "generalExplanation": "Sentenças interrogativas (B) e sentenças abertas sem quantificador (C) não são proposições. Apenas A (declarativa matemática) e D (declarativa) são proposições.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Proposições Lógicas",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_199",
    "text": "Dentre as alternativas, a única que não representa uma proposição lógica é:",
    "options": [
      "A) Amanhã o clima estará quente",
      "B) A lua é o satélite natural do planeta Terra",
      "C) 3+ 4= 6",
      "D) Ontem a temperatura em Nova Iorque ficou abaixo de 10 graus",
      "E) Alternativa E não consta no PDF."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Na abordagem conceitual adotada pela banca, declarações sobre fatos futuros incertos não constituem proposições lógicas.",
      "Incorreta. É uma proposição declarativa clássica.",
      "Incorreta. É uma proposição declarativa matemática falsa.",
      "Incorreta. É uma proposição declarativa sobre evento passado.",
      "Incorreta. Alternativa de formatação."
    ],
    "generalExplanation": "Sentenças no futuro indeterminado/incerto não podem ter seu valor lógico determinado no momento da afirmação, não sendo consideradas proposições na abordagem do examinador.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Proposições Lógicas",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_200",
    "text": "Segundo os princípios da não contradição e do terceiro excluído, a uma proposição pode ser atribuído um e somente um valor lógico.",
    "options": [
      "A) Certo",
      "B) Errado"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Pelo Princípio da Não-Contradição uma proposição não pode ser V e F ao mesmo tempo, e pelo Princípio do Terceiro Excluído ela deve assumir V ou F (sem terceira via).",
      "Incorreta. A afirmação descreve com exatidão a bivalência lógica."
    ],
    "generalExplanation": "O Princípio da Não-Contradição e o Princípio do Terceiro Excluído asseguram que toda proposição é ou Verdadeira ou Falsa, recebendo um único valor lógico.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Proposições Lógicas",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_201",
    "text": "A lógica clássica possui princípios fundamentais que servem de base para a produção de raciocínios válidos. Esses princípios foram inicialmente postulados por Aristóteles(384 a 322 a.C.) e até hoje dão suporte a sistemas lógicos. Tais princípios são os",
    "options": [
      "A) da inferência, da não contradição e do terceiro incluído.",
      "B) da diversidade, da dedução e do terceiro incluído.",
      "C) da identidade, da inferência e da não contradição.",
      "D) da identidade, da não contradição e do terceiro excluído.",
      "E) da diversidade, da indução e da não contradição."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta.",
      "Incorreta.",
      "Incorreta.",
      "Correta. Os três princípios fundamentais da lógica aristotélica são: Princípio da Identidade, Princípio da Não-Contradição e Princípio do Terceiro Excluído.",
      "Incorreta."
    ],
    "generalExplanation": "Os princípios fundamentais da lógica clássica são: 1. Identidade (toda proposição é igual a si mesma); 2. Não-Contradição (uma proposição não pode ser V e F ao mesmo tempo); 3. Terceiro Excluído (uma proposição é V ou F, não havendo terceira opção).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Proposições Lógicas",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_202",
    "text": "Numa discussão entre dois indivíduos, quando um deles se contradiz, o discurso torna-se ininteligível. Por exemplo, se alguém afirma que banana é uma fruta doce, e depois afirma que essa fruta tem gosto amargo, quem assim procede entra em contradição, pois desdiz o que disse anteriormente. Neste caso nega o princípio lógico que rege todo e qualquer discurso. Tal princípio é conhecido como:",
    "options": [
      "A) Princípio da não contradição",
      "B) Princípio do terceiro excluído",
      "C) Princípio da identidade",
      "D) Princípio da não identidade",
      "E) Nenhuma opção acima."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Afirmar uma propriedade e em seguida negá-la fere o Princípio da Não-Contradição.",
      "Incorreta. O terceiro excluído garante que uma proposição assume V ou F.",
      "Incorreta. O princípio da identidade declara que algo é idêntico a si mesmo.",
      "Incorreta.",
      "Incorreta."
    ],
    "generalExplanation": "O Princípio da Não-Contradição estabelece que nenhuma proposição pode ser simultaneamente verdadeira e falsa sob o mesmo aspecto.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Proposições Lógicas",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_203",
    "text": "Uma proposição é uma frase afirmativa que pode ser avaliada como verdadeira(V) ou falsa(F), mas não se admitem, para a proposição, ambas as interpretações. A negação da proposição “para cada x, P(x)” é “existe x, ¬P(x)”. A negação da proposição “existe x, P(x)” é “para cada x, ¬P(x)”.\n\nConsiderando tais conceitos, julgue o item subsequente:\nA negação da proposição “algum promotor de justiça do MPE/TO tem 30 anos ou mais” é “nem todo promotor de justiça do MPE/TO tem 30 anos ou mais”.",
    "options": [
      "A) Certo",
      "B) Errado"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. 'Nem todo' equivale a 'algum não', o que não nega a existência de ao menos um promotor com 30 anos ou mais.",
      "Correta. A negação da proposição existencial afirmativa ('algum é') é a universal negativa ('nenhum é'). 'Nem todo' não nega a proposição original; portanto, o item está Errado."
    ],
    "generalExplanation": "A proposição original é 'algum promotor tem 30 anos ou mais' (existencial afirmativa). Sua negação lógica é 'nenhum promotor tem 30 anos ou mais' (universal negativa). Afirmar que 'nem todo promotor...' equivale a dizer que 'algum promotor não tem...', o que não constitui a negação correta.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação de Quantificadores",
    "nivelSuperior": true
  },
  {
    "id": "rlm_sim_204",
    "text": "Julgue o item que se segue.\nA negação da proposição “Todo ator sabe cantar e dançar” é equivalente a “Existe ator que não sabe cantar ou que não sabe dançar”.",
    "options": [
      "A) Certo",
      "B) Errado"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Pela negação do quantificador universal e pela Lei de De Morgan, a negação de 'Todo x, P(x) e Q(x)' é 'Existe x, ~P(x) ou ~Q(x)'.",
      "Incorreta. O item está correto pois aplica perfeitamente as leis de negação."
    ],
    "generalExplanation": "A negação de 'Todo ator sabe cantar e dançar' substitui o 'Todo' por 'Existe' e aplica a negação de (Cantar E Dançar) via Lei de De Morgan, resultando em (Não cantar OU Não dançar). O item está Certo.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação de Quantificadores",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_205",
    "text": "Todos os cachorros latem e nem todos os gatos miam. Uma frase que corresponde à negação lógica dessa afirmação é:",
    "options": [
      "A) Nenhum cachorro late e todos os gatos miam.",
      "B) Alguns cachorros latem ou alguns gatos miam.",
      "C) Nem todos os cachorros latem ou todos os gatos miam.",
      "D) Qualquer cachorro late ou qualquer gato mia.",
      "E) Nenhum cachorro late e nenhum gato mia."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. 'Nenhum' é uma negação excessivamente forte para o quantificador universal em disjunção.",
      "Incorreta. Não nega corretamente cada uma das proposições componentes.",
      "Correta. Pela Lei de De Morgan ~(P ∧ Q) ≡ ~P ∨ ~Q: ~('Todos latem') é 'Nem todos latem', e ~('Nem todos miam') é 'Todos miam'.",
      "Incorreta. Mantém a estrutura afirmativa original.",
      "Incorreta. Nega com conjuntiva universal negativa."
    ],
    "generalExplanation": "A proposição é uma conjunção P ∧ Q. A negação é ~P ∨ ~Q. Negando 'Todos os cachorros latem' temos 'Nem todos os cachorros latem'. Negando 'Nem todos os gatos miam' (que é 'Existe gato que não mia') temos 'Todos os gatos miam'. Logo: 'Nem todos os cachorros latem ou todos os gatos miam'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação de Proposições e Quantificadores",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_206",
    "text": "Considere a sentença: “Não é verdade que todo parlamentar de Brasília falta às sessões plenárias das sextas‐feiras no Congresso e retorna ao seu estado de origem.” Uma sentença logicamente equivalente a essa é:",
    "options": [
      "A) Nenhum parlamentar de Brasília falta às sessões plenárias das sextas‐feiras no Congresso e retorna ao seu estado de origem.",
      "B) Todo parlamentar de Brasília comparece às sessões plenárias das sextas‐feiras no Congresso ou retorna ao seu estado de origem.",
      "C) Algum parlamentar de Brasília comparece às sessões plenárias das sextas‐feiras no Congresso e não retorna ao seu estado de origem.",
      "D) Algum parlamentar de Brasília comparece às sessões plenárias das sextas‐feiras no Congresso e retorna ao seu estado de origem.",
      "E) Algum parlamentar de Brasília comparece às sessões plenárias das sextas‐feiras no Congresso ou não retorna ao seu estado de origem."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta.",
      "Incorreta.",
      "Incorreta.",
      "Incorreta.",
      "Correta. Negar 'Todo x (P ∧ Q)' resulta em 'Existe x (~P ∨ ~Q)', ou seja, Algum parlamentar comparece (não falta) ou não retorna."
    ],
    "generalExplanation": "A expressão 'Não é verdade que Todo x faz A e B' é a negação de ∀x (A ∧ B), o que equivale a ∃x (¬A ∨ ¬B): 'Algum parlamentar comparece às sessões (não falta) ou não retorna ao seu estado de origem'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação de Quantificadores",
    "nivelSuperior": true
  },
  {
    "id": "rlm_sim_207",
    "text": "A declaração abaixo foi feita pelo gerente de recursos humanos da empresa X durante uma feira de recrutamento em uma faculdade: “Todo funcionário de nossa empresa possui plano de saúde e ganha mais de R$ 3.000,00 por mês.” Mais tarde, consultando seus arquivos, o diretor percebeu que havia se enganado em sua declaração. Dessa forma, conclui-se que, necessariamente,",
    "options": [
      "A) dentre todos os funcionários da empresa X, há um grupo que não possui plano de saúde.",
      "B) o funcionário com o maior salário da empresa X ganha, no máximo, R$ 3.000,00 por mês.",
      "C) um funcionário da empresa X não tem plano de saúde ou ganha até R$ 3.000,00 por mês.",
      "D) nenhum funcionário da empresa X tem plano de saúde ou todos ganham até R$ 3.000,00 por mês.",
      "E) alguns funcionários da empresa X não têm plano de saúde e ganham, no máximo, R$ 3.000,00 por mês."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Basta existir 1 funcionário que descumpra a regra para a declaração ser falsa.",
      "Incorreta. A falsidade da frase não limita o salário máximo da empresa.",
      "Correta. Sabendo que a afirmação era falsa, sua negação lógica é verdadeira: existe (pelo menos um) funcionário que não tem plano de saúde OU ganha até R$ 3.000,00.",
      "Incorreta.",
      "Incorreta. A negação utiliza o conectivo 'OU', não 'E'."
    ],
    "generalExplanation": "Descobrir que uma declaração universal conjuntiva é falsa significa que a sua negação lógica é verdadeira: 'Existe pelo menos um funcionário que não possui plano de saúde OU ganha até R$ 3.000,00 por mês'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação de Quantificadores",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_208",
    "text": "A respeito de lógica proposicional, julgue o item subsequente.\nA proposição “Todos os esquizofrênicos são fumantes; logo, a esquizofrenia eleva a probabilidade de dependência da nicotina” é equivalente à proposição “Se a esquizofrenia não eleva a probabilidade de dependência da nicotina, então existe esquizofrênico que não é fumante”.",
    "options": [
      "A) Certo",
      "B) Errado"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Aplicando a contrapositiva (P → Q ≡ ~Q → ~P), a negação do consequente leva à negação do antecedente (~('Todos são fumantes') = 'Existe algum que não é fumante').",
      "Incorreta. O item está correto pois descreve exatamente a contraposição lógica."
    ],
    "generalExplanation": "Trata-se da equivalência pela contrapositiva: (P → Q) é equivalente a (¬Q → ¬P). A negação de 'Todos os esquizofrênicos são fumantes' é 'Existe esquizofrênico que não é fumante'. O item está Certo.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Equivalência e Contraposição",
    "nivelSuperior": true
  },
  {
    "id": "rlm_sim_209",
    "text": "Considere a sentença a seguir.\n“Qualquer que seja o candidato a uma vaga de consultor legislativo na Assembleia Legislativa do Estado do Maranhão, se ele foi aprovado então estudou muito ou teve sorte”\nAssinale a alternativa que indica a negação lógica dessa sentença.",
    "options": [
      "A) Qualquer que seja o candidato a uma vaga de consultor legislativo na Assembleia Legislativa do Estado do Maranhão, se ele foi aprovado então não estudou muito nem teve sorte.",
      "B) Nenhum candidato a uma vaga de consultor legislativo na Assembleia Legislativa do Estado do Maranhão foi aprovado e não estudou muito nem teve sorte.",
      "C) Algum candidato a uma vaga de consultor legislativo na Assembleia Legislativa do Estado do Maranhão não foi aprovado ou estudou muito ou teve sorte.",
      "D) Algum candidato a uma vaga de consultor legislativo na Assembleia Legislativa do Estado do Maranhão foi aprovado e não estudou muito nem teve sorte.",
      "E) Nenhum candidato a uma vaga de consultor legislativo na Assembleia Legislativa do Estado do Maranhão não foi aprovado e estudou muito mas não teve sorte."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta.",
      "Incorreta.",
      "Incorreta.",
      "Correta. A negação de ∀x (Aprovado → (Estudou ∨ Sorte)) é ∃x (Aprovado ∧ ¬Estudou ∧ ¬Sorte): Algum candidato foi aprovado e não estudou muito nem teve sorte.",
      "Incorreta."
    ],
    "generalExplanation": "Negar ∀x (P → Q) resulta em ∃x (P ∧ ¬Q). Como Q é (Estudou ∨ Sorte), ¬Q é (não estudou E não teve sorte). Logo: 'Algum candidato foi aprovado e não estudou muito nem teve sorte'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação de Quantificadores e Condicional",
    "nivelSuperior": true
  },
  {
    "id": "rlm_sim_210",
    "text": "Todos os belo-horizontinos são mineiros. Assim sendo:",
    "options": [
      "A) Algum belo-horizontino não é mineiro.",
      "B) Todos os mineiros são belo-horizontinos.",
      "C) O conjunto dos mineiros contém os belo-horizontinos.",
      "D) O conjunto dos belo-horizontinos contém o conjunto dos mineiros."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Contradiz diretamente a premissa dada.",
      "Incorreta. A relação de inclusão não é necessariamente simétrica.",
      "Correta. Dizer que 'Todo A é B' significa que o conjunto A é subconjunto de B, ou seja, B contém A.",
      "Incorreta. Inverte o sentido de inclusão."
    ],
    "generalExplanation": "Se todo belo-horizontino é mineiro, o conjunto dos belo-horizontinos está contido dentro do conjunto dos mineiros. Portanto, o conjunto dos mineiros contém os belo-horizontinos.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Diagramas Lógicos",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_211",
    "text": "Considerando “todo livro é instrutivo” como uma proposição verdadeira, é correto inferir que:",
    "options": [
      "A) “Nenhum livro é instrutivo” é uma proposição necessariamente verdadeira.",
      "B) “Algum livro é instrutivo” é uma proposição necessariamente verdadeira.",
      "C) “Algum livro não é instrutivo” é uma proposição verdadeira ou falsa.",
      "D) “Algum livro é instrutivo” é uma proposição verdadeira ou falsa.",
      "E) “Algum livro não é instrutivo” é uma proposição necessariamente verdadeira."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta.",
      "Correta. Pelo princípio da subalternação do quadrado lógico de oposição, a verdade de 'Todo A é B' (universal afirmativa) garante a verdade de 'Algum A é B' (particular afirmativa).",
      "Incorreta.",
      "Incorreta.",
      "Incorreta."
    ],
    "generalExplanation": "Da verdade da proposição universal afirmativa ('Todo livro é instrutivo'), infere-se necessariamente a verdade da particular afirmativa correspondente ('Algum livro é instrutivo').",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Diagramas Lógicos",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_212",
    "text": "Supondo que a sentença aberta “qualquer deputado estadual é advogado” é verdadeira, deduzimos que também é verdadeira a sentença:",
    "options": [
      "A) Algum deputado estadual não é advogado.",
      "B) Nenhum deputado estadual é advogado.",
      "C) Algum deputado estadual é advogado.",
      "D) Todos os deputados estaduais não são advogados.",
      "E) Nem todos os deputados estaduais são advogados."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta.",
      "Incorreta.",
      "Correta. 'Qualquer' equivale a 'Todo'. Sabendo que 'Todo deputado é advogado' é verdadeira, conclui-se que 'Algum deputado estadual é advogado' também é verdadeira.",
      "Incorreta.",
      "Incorreta."
    ],
    "generalExplanation": "'Qualquer deputado estadual é advogado' é uma proposição universal afirmativa. Por subalternação, a proposição particular afirmativa 'Algum deputado estadual é advogado' é necessariamente verdadeira.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Diagramas Lógicos",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_213",
    "text": "Considere as seguintes frases:\nI- Todos os empregados do Banco Central são ricos.\nII- Os cariocas são alegres.\nIII- Marcos é empregado do Banco Central.\nIV- Nenhum indivíduo alegre é rico.\n\nAdmitindo que as quatro frases acima sejam verdadeiras, valore os itens a seguir:\n01. Nenhum indivíduo rico é alegre, mas os cariocas, apesar de não serem ricos, são alegres.\n02. Marcos não é carioca, mas é um indivíduo rico.\n03. Existe pelo menos um empregado do Banco Central que é carioca.\n04. Alguns cariocas são ricos, são empregados do Banco Central e são alegres.",
    "options": [
      "A) 1-V, 2-V, 3-V, 4-F",
      "B) 1-V, 2-F, 3-V, 4-F",
      "C) 1-F, 2-V, 3-V, 4-F",
      "D) 1-F, 2-F, 3-V, 4-F",
      "E) 1-V, 2-V, 3-F, 4-F"
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta.",
      "Incorreta.",
      "Incorreta.",
      "Incorreta.",
      "Correta. 01: V (Alegres e Ricos são disjuntos, Cariocas ⊂ Alegres); 02: V (Marcos ∈ BC ⊂ Ricos -> não é alegre -> não é carioca); 03: F (BC ⊂ Ricos, Ricos disjuntos de Cariocas); 04: F (Nenhum carioca é rico)."
    ],
    "generalExplanation": "Construindo os conjuntos: Empregados do BC ⊂ Ricos. Ricos ∩ Alegres = ∅. Cariocas ⊂ Alegres. Marcos ∈ BC. Conclusões: Ricos ∩ Cariocas = ∅. Marcos é rico e não-carioca. Item 01 é V, 02 é V, 03 é F, 04 é F. Sequência: 1-V, 2-V, 3-F, 4-F.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Diagramas Lógicos",
    "nivelSuperior": true
  },
  {
    "id": "rlm_sim_214",
    "text": "Se é verdade que “Alguns A são R” e que “Nenhum G é R”, então é necessariamente verdadeiro que:",
    "options": [
      "A) algum A não é G;",
      "B) algum A é G.",
      "C) nenhum A é G;",
      "D) algum G é A;",
      "E) nenhum G é A;"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Os elementos de A que estão na interseção com R garantidamente não pertencem a G, pois Nenhum G é R.",
      "Incorreta.",
      "Incorreta.",
      "Incorreta.",
      "Incorreta."
    ],
    "generalExplanation": "Existe uma porção de elementos de A que também são R. Como nenhum elemento de G pode ser R, essa porção de A não pode pertencer a G. Logo, 'algum A não é G'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Diagramas Lógicos",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_215",
    "text": "Se é verdade que alguns adultos são felizes e que nenhum aluno de matemática é feliz, então é necessariamente verdade que:",
    "options": [
      "A) algum adulto é aluno de matemática.",
      "B) nenhum adulto é aluno de matemática.",
      "C) algum adulto não é aluno de matemática.",
      "D) algum aluno de matemática é adulto.",
      "E) nenhum aluno de matemática é adulto."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta.",
      "Incorreta.",
      "Correta. Os adultos felizes não podem ser alunos de matemática, o que assegura a existência de adultos que não são alunos de matemática.",
      "Incorreta.",
      "Incorreta."
    ],
    "generalExplanation": "Os adultos que são felizes pertencem ao conjunto dos felizes, o qual é completamente disjunto do conjunto dos alunos de matemática. Logo, esses adultos felizes não são alunos de matemática, concluindo-se que 'algum adulto não é aluno de matemática'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Diagramas Lógicos",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_216",
    "text": "Todos os alunos de matemática são, também, alunos de inglês, mas nenhum aluno de inglês é aluno de história. Todos os alunos de português são também alunos de informática, e alguns alunos de informática são também alunos de história. Como nenhum aluno de informática é aluno de inglês, e como nenhum aluno de português é aluno de história, então:",
    "options": [
      "A) pelo menos um aluno de português é aluno de inglês.",
      "B) pelo menos um aluno de matemática é aluno de história.",
      "C) nenhum aluno de português é aluno de matemática.",
      "D) todos os alunos de informática são alunos de matemática.",
      "E) todos os alunos de informática são alunos de português."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta.",
      "Incorreta.",
      "Correta. Matemática ⊂ Inglês, Português ⊂ Informática, e Informática ∩ Inglês = ∅. Portanto, Português ∩ Matemática = ∅.",
      "Incorreta.",
      "Incorreta."
    ],
    "generalExplanation": "Como Matemática está contida em Inglês e Português está contido em Informática, e sabendo que Informática e Inglês não possuem elementos em comum (são disjuntos), conclui-se que Matemática e Português também são totalmente disjuntos. Ou seja, nenhum aluno de português é aluno de matemática.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Diagramas Lógicos",
    "nivelSuperior": true
  },
  {
    "id": "rlm_sim_217",
    "text": "Suponha que sejam verdadeiras as seguintes informações:\nI. Todos os empregados da empresa Alfa são competentes.\nII. Mário não trabalha na empresa Alfa.\nIII. André é competente.\nIV. Alguns empregados da empresa Alfa são estudantes.\n\nEntão, é correto afirmar que:",
    "options": [
      "A) existe pelo menos um estudante que é competente.",
      "B) André trabalha na empresa Alfa.",
      "C) Mário não é competente.",
      "D) existe pelo menos um estudante que não trabalha na empresa Alfa.",
      "E) todos os estudantes são competentes."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Como alguns empregados da empresa Alfa são estudantes e todos os empregados da Alfa são competentes, esses estudantes-empregados são competentes.",
      "Incorreta.",
      "Incorreta.",
      "Incorreta.",
      "Incorreta."
    ],
    "generalExplanation": "Os empregados de Alfa que são estudantes formam um grupo que obrigatoriamente também pertence ao conjunto dos competentes (pois todo empregado de Alfa é competente). Logo, existe pelo menos um estudante que é competente.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Diagramas Lógicos",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_218",
    "text": "Acerca dos princípios de raciocínio lógico, analise as seguintes afirmativas:\n\nI. O princípio da identidade indica que uma proposição verdadeira é verdadeira e que uma proposição falsa é falsa.\nII. O princípio da não contradição indica que nenhuma proposição poderá ser verdadeira e falsa ao mesmo tempo.\nIII. O princípio do terceiro excluído indica que uma proposição poderá assumir um terceiro valor lógico.\n\nAnalisando as afirmativas acima, marque a alternativa correta.",
    "options": [
      "A) Apenas as afirmativas I e II estão corretas.",
      "B) Apenas as afirmativas II e III estão corretas.",
      "C) Apenas as afirmativas I e III estão corretas.",
      "D) Apenas a afirmativa I está correta."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. I e II descrevem perfeitamente os princípios da identidade e da não contradição. A afirmativa III é falsa.",
      "Incorreta. A afirmativa III é falsa, pois o terceiro excluído dita que não há terceiro valor lógico.",
      "Incorreta. A afirmativa III é falsa.",
      "Incorreta. A afirmativa II também está correta."
    ],
    "generalExplanation": "O princípio da identidade estabelece que toda proposição é idêntica a si mesma (uma proposição verdadeira é verdadeira; uma proposição falsa é falsa). O princípio da não contradição postula que uma proposição não pode ser verdadeira e falsa simultaneamente. O princípio do terceiro excluído dita que uma proposição só pode ser verdadeira ou falsa, inexistindo um terceiro valor lógico (portanto o item III é falso).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Proposições Lógicas",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_219",
    "text": "A respeito de lógica proposicional, julgue o item subsequente.\n\nA proposição “No Brasil, 20% dos acidentes de trânsito ocorrem com indivíduos que consumiram bebida alcoólica” é uma proposição simples.",
    "options": [
      "A) Certo",
      "B) Errado"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Trata-se de uma proposição simples (atômica), pois encerra uma única declaração com sentido completo, sem conectivos lógicos dividindo proposições independentes.",
      "Incorreta. A proposição é simples, e não composta."
    ],
    "generalExplanation": "A proposição expressa um pensamento declarativo único e completo (sujeito e predicado), sem conectivos lógicos unindo proposições distintas, caracterizando com precisão uma proposição simples.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Proposições Lógicas",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_220",
    "text": "Julgue o item a seguir, relativos a raciocínio lógico e operações com conjuntos.\n\nA sentença “Bruna, acesse a Internet e verifique a data da aposentadoria do Sr. Carlos!” é uma proposição composta que pode ser escrita na forma p ∧ q.",
    "options": [
      "A) Certo",
      "B) Errado"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A sentença não é uma proposição lógica.",
      "Correta. A sentença é imperativa (expressa uma ordem/comando). Frases imperativas não podem ser valoradas como verdadeiras ou falsas e, portanto, não são proposições lógicas."
    ],
    "generalExplanation": "Frases imperativas (ordens), exclamativas, interrogativas e sentenças abertas não são proposições lógicas, pois não é possível atribuir a elas um valor lógico de Verdadeiro ou Falso.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Proposições Lógicas",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_221",
    "text": "Dadas as proposições simples p e q, tais que p é verdadeira e q é falsa, considere as seguintes proposições compostas:\n\n(1) p ∧ q\n(2) (~p) → q\n(3) ~[p ∨ (~q)]\n(4) ~(p ↔ q)\n\nQuantas dessas proposições compostas são verdadeiras?",
    "options": [
      "A) Nenhuma",
      "B) Apenas uma",
      "C) Apenas duas",
      "D) Apenas três",
      "E) Quatro"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Há proposições verdadeiras.",
      "Incorreta. Há exatamente duas verdadeiras.",
      "Correta. As proposições (2) e (4) resultam em Verdadeiro.",
      "Incorreta. Apenas duas são verdadeiras.",
      "Incorreta. As proposições (1) e (3) são falsas."
    ],
    "generalExplanation": "Substituindo p = V e q = F:\n(1) p ∧ q ⇒ V ∧ F = F\n(2) (~p) → q ⇒ (~V) → F ⇒ F → F = V\n(3) ~[p ∨ (~q)] ⇒ ~[V ∨ (~F)] ⇒ ~[V ∨ V] = ~V = F\n(4) ~(p ↔ q) ⇒ ~(V ↔ F) ⇒ ~(F) = V\nPortanto, exatamente 2 proposições são verdadeiras: (2) e (4).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Tabela-Verdade",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_222",
    "text": "A respeito de lógica proposicional, julgue o item que se segue.\n\nSe P, Q e R forem proposições simples e se ~R indicar a negação da proposição R, então, independentemente dos valores lógicos V= verdadeiro ou F= falso de P, Q e R, a proposição P → Q ∨ (~R) será sempre V.",
    "options": [
      "A) Certo",
      "B) Errado"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A proposição não é uma tautologia.",
      "Correta. Testando a valoração P = V, Q = F e R = V: P → Q ∨ (~R) ⇒ V → F ∨ (~V) ⇒ V → F ∨ F ⇒ V → F = F. Como pode ser Falsa, não é sempre verdadeira."
    ],
    "generalExplanation": "Para que uma proposição seja sempre verdadeira (tautologia), seu valor deve ser V em todas as linhas da tabela-verdade. Atribuindo P = V, Q = F e R = V, obtemos V → (F ∨ ~V) ⇒ V → F = F. Logo, a proposição é uma contingência.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Tabela-Verdade",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_223",
    "text": "Em uma reunião de colegiado, após a aprovação de uma matéria polêmica pelo placar de 6 votos a favor e 5 contra, um dos 11 presentes fez a seguinte afirmação: “Basta um de nós mudar de ideia e a decisão será totalmente modificada.”\n\nConsiderando a situação apresentada e a proposição correspondente à afirmação feita, julgue o item:\n\nA tabela-verdade da referida proposição, construída a partir dos valores lógicos das proposições simples que a compõem, tem mais de 8 linhas.",
    "options": [
      "A) Certo",
      "B) Errado"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A proposição condicional é composta por 2 proposições simples, gerando 2^2 = 4 linhas.",
      "Correta. A proposição possui a estrutura condicional P → Q, composta por 2 proposições simples: P ('Um de nós mudar de ideia') e Q ('A decisão será modificada'). O total de linhas da tabela-verdade é 2^2 = 4 linhas, o que não é superior a 8."
    ],
    "generalExplanation": "A proposição pode ser estruturada como a condicional P → Q, onde P é 'Um de nós mudar de ideia' e Q é 'A decisão será modificada'. Com 2 proposições simples distintas, o número de linhas da tabela-verdade é 2^2 = 4 linhas.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Tabela-Verdade",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_224",
    "text": "Considerando a proposição P: “Se estiver sob pressão dos corruptores ou diante de uma oportunidade com baixo risco de ser punido, aquele funcionário público será leniente com a fraude ou dela participará”, julgue o item seguinte relativo à lógica sentencial.\n\nA tabela-verdade da proposição P contém mais de 10 linhas.",
    "options": [
      "A) Certo",
      "B) Errado"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A proposição possui 4 proposições simples distintas: (p ∨ q) → (r ∨ s). O número de linhas da tabela-verdade é 2^4 = 16, que é superior a 10.",
      "Incorreta. O cálculo é 2^4 = 16 linhas, portanto mais de 10."
    ],
    "generalExplanation": "A proposição é formada por 4 proposições simples distintas: p ('estiver sob pressão dos corruptores'), q ('estiver diante de uma oportunidade...'), r ('será leniente com a fraude') e s ('dela participará'). A quantidade de linhas da tabela-verdade é dada por 2^n = 2^4 = 16 linhas. Como 16 > 10, o item está correto.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Tabela-Verdade",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_225",
    "text": "Considerando que os símbolos ∨, ~, →, ↔ e ∧ representem as operações lógicas 'ou', 'não', 'condicional', 'bicondicional' e 'e', respectivamente, julgue o item a seguir, acerca da proposição composta P: (p ∨ ~q) ↔ (~p ∧ r), em que p, q e r são proposições distintas.\n\nO número de linhas da tabela-verdade de P é igual a 16.",
    "options": [
      "A) Certo",
      "B) Errado"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O número de linhas é 2^3 = 8, e não 16.",
      "Correta. A proposição composta contém 3 proposições simples distintas (p, q e r). Logo, o número de linhas da tabela-verdade é 2^3 = 8 linhas."
    ],
    "generalExplanation": "O número de linhas de uma tabela-verdade é calculado pela fórmula 2^n, onde n representa o número de variáveis proposicionais distintas. Como a proposição contém n = 3 variáveis (p, q, r), temos 2^3 = 8 linhas.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Tabela-Verdade",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_226",
    "text": "Considerando os símbolos lógicos ¬ (negação), ∧ (conjunção), ∨ (disjunção), → (condicional) e as proposições:\n\nS: (p ∧ ¬q) ∨ (¬p ∧ r) → q ∨ r\ne\nT: ((p ∧ ¬q) ∨ (¬p ∧ r)) ∧ (¬q ∧ ¬r),\n\njulgue o item que se segue.\n\nAs tabelas-verdade de S e de T possuem, cada uma, 16 linhas.",
    "options": [
      "A) Certo",
      "B) Errado"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Ambas possuem 3 variáveis distintas, gerando 2^3 = 8 linhas cada.",
      "Correta. Tanto S quanto T são formadas por apenas 3 proposições simples distintas (p, q e r). Portanto, cada tabela-verdade possui 2^3 = 8 linhas, e não 16."
    ],
    "generalExplanation": "O número de linhas de uma tabela-verdade depende exclusivamente da quantidade de variáveis proposicionais distintas (2^n). Como tanto S quanto T contêm as variáveis p, q e r (n = 3), ambas possuem 2^3 = 8 linhas.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Tabela-Verdade",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_227",
    "text": "Proposição CG1A5AAA:\n“A qualidade da educação dos jovens sobe ou a sensação de segurança da sociedade diminui.”\n\nA quantidade de linhas da tabela-verdade correspondente à proposição CG1A5AAA é igual a:",
    "options": [
      "A) 2.",
      "B) 4.",
      "C) 8.",
      "D) 16.",
      "E) 32."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Seria 2^1 para 1 proposição simples.",
      "Correta. A proposição é composta por 2 proposições simples ligadas pelo conectivo 'ou'. Logo, o número de linhas é 2^2 = 4.",
      "Incorreta. 8 linhas corresponderia a 3 variáveis simples.",
      "Incorreta. 16 linhas corresponderia a 4 variáveis simples.",
      "Incorreta. 32 linhas corresponderia a 5 variáveis simples."
    ],
    "generalExplanation": "A proposição é uma disjunção (p ∨ q) formada por 2 proposições simples: (1) 'A qualidade da educação dos jovens sobe' e (2) 'a sensação de segurança da sociedade diminui'. O total de linhas da tabela-verdade é 2^2 = 4 linhas.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Tabela-Verdade",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_228",
    "text": "Analise as proposições a seguir em uma reunião familiar para o almoço:\n\n• A filha fala: “A salada está sem tempero”\n• O pai comenta: “Ou a salada está sem tempero ou o refrigerante está sem gás”\n• A mãe completa: “Não é verdade que a carne e a salada estão sem tempero”\n\nHá quantas variáveis proposicionais distintas no problema acima?",
    "options": [
      "A) 4 variáveis.",
      "B) 2 variáveis.",
      "C) 1 variável.",
      "D) 3 variáveis."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Não há 4 declarações simples distintas.",
      "Incorreta. A carne compõe uma terceira variável distinta.",
      "Incorreta. Há mais de 1 declaração simples.",
      "Correta. As 3 variáveis proposicionais distintas são: p ('A salada está sem tempero'), q ('O refrigerante está sem gás') e r ('A carne está sem tempero')."
    ],
    "generalExplanation": "As variáveis proposicionais são as orações declarativas simples básicas que formam as proposições compostas:\np: 'A salada está sem tempero'\nq: 'O refrigerante está sem gás'\nr: 'A carne está sem tempero'\nTotalizando exatamente 3 variáveis proposicionais distintas.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Tabela-Verdade",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_229",
    "text": "Considere a construção de uma tabela-verdade com as proposições simples P e Q. Julgue o item a seguir:\n\nCaso as colunas de uma tabela-verdade para P e Q sejam preenchidas de acordo com suas valorações lógicas, a última coluna dessa tabela corresponderá à expressão [P ∧ (¬Q)] ∨ [Q → P].",
    "options": [
      "A) Certo",
      "B) Errado"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A expressão [P ∧ (¬Q)] ∨ [Q → P] reflete a combinação e sequência dos valores lógicos avaliados.",
      "Incorreta. A asserção é julgada como Certa conforme a estrutura da tabela-verdade da prova original."
    ],
    "generalExplanation": "Avaliando a fórmula [P ∧ (¬Q)] ∨ [Q → P], a construção a partir das colunas iniciais de P e Q resulta exatamente na sequência de valores lógicos da expressão apresentada.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Tabela-Verdade",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_230",
    "text": "Considere a construção da tabela-verdade da proposição composta S = (P → Q) ∧ R, onde P, Q e R são proposições simples.\n\nJulgue o item a respeito da tabela-verdade de S:\n\nNa última coluna da tabela-verdade de S, considerando a ordem padrão das linhas (VVV, VVF, VFV, VFF, FVV, FVF, FFV, FFF), aparecerão, de cima para baixo, os seguintes elementos: V, F, V, V, F, V, F e V.",
    "options": [
      "A) Certo",
      "B) Errado"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A sequência correta é V, F, F, F, V, F, V, F.",
      "Correta. Avaliando S = (P → Q) ∧ R para cada linha:\n1. V→V=V; V∧V = V\n2. V→V=V; V∧F = F\n3. V→F=F; F∧V = F\n4. V→F=F; F∧F = F\n5. F→V=V; V∧V = V\n6. F→V=V; V∧F = F\n7. F→F=V; V∧V = V\n8. F→F=V; V∧F = F\nA sequência real é V, F, F, F, V, F, V, F. O item apresentou uma sequência diferente."
    ],
    "generalExplanation": "Avaliando S = (P → Q) ∧ R nas 8 linhas padrão:\n1. (V,V,V) → V ∧ V = V\n2. (V,V,F) → V ∧ F = F\n3. (V,F,V) → F ∧ V = F\n4. (V,F,F) → F ∧ F = F\n5. (F,V,V) → V ∧ V = V\n6. (F,V,F) → V ∧ F = F\n7. (F,F,V) → V ∧ V = V\n8. (F,F,F) → V ∧ F = F\nSequência real: V, F, F, F, V, F, V, F. Portanto, a assertiva está ERRADA.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Tabela-Verdade",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_231",
    "text": "Considerando que P, Q e R sejam proposições simples e a construção da tabela-verdade da proposição composta P ↔ (Q ∧ R), julgue o próximo item:\n\nA coluna correspondente à proposição P ↔ (Q ∧ R) conterá, na ordem em que aparecem de cima para baixo (VVV, VVF, VFV, VFF, FVV, FVF, FFV, FFF), os seguintes elementos: V, F, F, F, V, V, V, V.",
    "options": [
      "A) Certo",
      "B) Errado"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Na 5ª linha (P=F, Q=V, R=V), temos F ↔ (V∧V) ⇒ F ↔ V = F, e não V.",
      "Correta. A sequência real de valores lógicos é V, F, F, F, F, V, V, V. O item afirma que a 5ª linha seria V, estando portanto incorreto."
    ],
    "generalExplanation": "Avaliando P ↔ (Q ∧ R) nas 8 linhas padrão:\n1. (V,V,V) → V ↔ V = V\n2. (V,V,F) → V ↔ F = F\n3. (V,F,V) → V ↔ F = F\n4. (V,F,F) → V ↔ F = F\n5. (F,V,V) → F ↔ V = F (o item afirma V)\n6. (F,V,F) → F ↔ F = V\n7. (F,F,V) → F ↔ F = V\n8. (F,F,F) → F ↔ F = V\nSequência correta: V, F, F, F, F, V, V, V. O item contém erro na 5ª linha, estando ERRADO.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Tabela-Verdade",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_232",
    "text": "Considere a proposição lógica composta dada pela fórmula P ∧ (¬Q) → ¬P, onde P e Q são proposições simples.\n\nAo construir a tabela-verdade dessa fórmula, a coluna de resultados finais caracteriza-se como uma:",
    "options": [
      "A) Tautologia (todos os valores são verdadeiros).",
      "B) Contingência (com valores lógicos V, F, V, V).",
      "C) Contradição (todos os valores são falsos).",
      "D) Proposição equivalente a P ∧ Q.",
      "E) Proposição com 8 linhas de valoração."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Na segunda linha (P=V, Q=F), o resultado é Falso, portanto não é tautologia.",
      "Correta. A avaliação nas 4 linhas produz:\n• P=V, Q=V: (V ∧ F) → F ⇒ F → F = V\n• P=V, Q=F: (V ∧ V) → F ⇒ V → F = F\n• P=F, Q=V: (F ∧ F) → V ⇒ F → V = V\n• P=F, Q=F: (F ∧ V) → V ⇒ F → V = V\nA sequência é V, F, V, V, tratando-se de uma Contingência.",
      "Incorreta. Não é contradição, pois possui valores verdadeiros.",
      "Incorreta. P ∧ Q possui tabela com valores V, F, F, F.",
      "Incorreta. Com 2 variáveis simples (P e Q), a tabela-verdade possui 2^2 = 4 linhas."
    ],
    "generalExplanation": "A fórmula P ∧ (¬Q) → ¬P possui duas variáveis proposicionais (P e Q), gerando 2^2 = 4 linhas:\n1. P=V, Q=V: (V ∧ F) → F ⇒ F → F = V\n2. P=V, Q=F: (V ∧ V) → F ⇒ V → F = F\n3. P=F, Q=V: (F ∧ F) → V ⇒ F → V = V\n4. P=F, Q=F: (F ∧ V) → V ⇒ F → V = V\nOs resultados são V, F, V, V, caracterizando uma Contingência (nem sempre verdadeira, nem sempre falsa).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Tabela-Verdade",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_233",
    "text": "Leia as sentenças abaixo:\n\n1. João é carpinteiro.\n2. Nenhum funcionário da firma X é corajoso.\n3. Todos os carpinteiros são corajosos.\n4. Alguns carpinteiros são altos.\n\nSupondo que estas quatro sentenças são verdadeiras, assinale qual das alternativas abaixo é certamente verdadeira:",
    "options": [
      "A) Algum funcionário da firma X é carpinteiro;",
      "B) João é alto;",
      "C) Alguns corajosos são carpinteiros;",
      "D) Nenhum funcionário da firma X é alto;",
      "E) João é funcionário da firma X."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Se algum funcionário da firma X fosse carpinteiro, ele seria corajoso (pois todos os carpinteiros são corajosos), o que contraria a premissa 2 (nenhum funcionário da firma X é corajoso).",
      "Incorreta. Sabemos que alguns carpinteiros são altos, mas não é possível garantir com certeza que João esteja nesse subconjunto.",
      "Correta. Como João é carpinteiro e todos os carpinteiros são corajosos, João é corajoso. Logo, é certamente verdadeiro que existem corajosos que são carpinteiros.",
      "Incorreta. As premissas não estabelecem relação entre os funcionários da firma X e a característica de ser alto.",
      "Incorreta. Como João é carpinteiro, ele é corajoso. Como nenhum funcionário da firma X é corajoso, João certamente NÃO é funcionário da firma X."
    ],
    "generalExplanation": "Por meio do diagrama de conjuntos: o conjunto dos Carpinteiros está contido no conjunto dos Corajosos (Carpinteiros ⊂ Corajosos). João pertence a Carpinteiros, logo pertence a Corajosos. O conjunto dos Funcionários da Firma X é disjunto de Corajosos. Portanto, é garantido que a interseção entre Corajosos e Carpinteiros não é vazia (alguns corajosos são carpinteiros).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Diagramas Lógicos",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_234",
    "text": "Partindo das premissas:\n\n(1) Todo advogado é sagaz\n(2) Todo advogado é formado em direito\n(3) Roberval é sagaz\n(4) Sulamita é juíza\n\nPode-se concluir que:",
    "options": [
      "A) há pessoas formadas em direito que são sagazes",
      "B) Roberval é advogado",
      "C) Sulamita é sagaz",
      "D) Roberval é promotor",
      "E) Sulamita e Roberval são casados"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Como todo advogado é formado em direito e todo advogado é sagaz, qualquer pessoa que seja advogada é simultaneamente formada em direito e sagaz. Portanto, há pessoas formadas em direito que são sagazes.",
      "Incorreta. Ser sagaz não implica ser advogado (o conjunto dos advogados está contido nos sagazes, mas não o contrário).",
      "Incorreta. As premissas não fornecem informações sobre Sulamita ser sagaz.",
      "Incorreta. Não há qualquer menção ou inferência sobre a profissão de promotor para Roberval.",
      "Incorreta. Não há premissas que relacionem o estado civil ou relacionamento entre Sulamita e Roberval."
    ],
    "generalExplanation": "Como todo advogado é formado em direito e todo advogado é sagaz, os advogados pertencem à interseção entre os formados em direito e os sagazes. Logo, conclui-se validamente que há pessoas formadas em direito que são sagazes.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Diagramas Lógicos",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_235",
    "text": "Ana está realizando um teste e precisa resolver uma questão de raciocínio lógico. No enunciado da questão, é afirmado que: “todo X1 é Y. Todo X2, se não for X3, ou é X1 ou é X4.”\n\nApós, sem sucesso, tentar encontrar a alternativa correta, ela escuta alguém, acertadamente, afirmar que: “não há X3 e não há X4 que não seja Y.”\n\nA partir disso, Ana conclui, corretamente, que:",
    "options": [
      "A) todo Y é X2.",
      "B) todo Y é X3 ou X4.",
      "C) algum X3 é X4.",
      "D) algum X1 é X3.",
      "E) todo X2 é Y."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. Não há premissa que permita inverter a inclusão para afirmar que todo Y seja X2.",
      "Incorreta. O conjunto Y pode conter outros elementos além de X3 ou X4.",
      "Incorreta. Não há informação que garanta interseção entre X3 e X4.",
      "Incorreta. Não há garantia de interseção entre X1 e X3.",
      "Correta. Premissas: X1 ⊂ Y, X3 ⊂ Y e X4 ⊂ Y. Qualquer elemento de X2 ou é X3 (e portanto é Y), ou não é X3, sendo então X1 ou X4 (e portanto também é Y). Em todos os casos possíveis, todo X2 é necessariamente Y."
    ],
    "generalExplanation": "Análise lógica por casos:\n1. Premissas dadas: X1 ⊂ Y, X3 ⊂ Y e X4 ⊂ Y.\n2. Para qualquer elemento x pertencente a X2:\n   - Se x ∈ X3 ⇒ como X3 ⊂ Y, x ∈ Y.\n   - Se x ∉ X3 ⇒ pelo enunciado, x ∈ X1 ou x ∈ X4. Como X1 ⊂ Y e X4 ⊂ Y, em ambos os casos x ∈ Y.\nConclusão inevitável: todo elemento de X2 pertence a Y (todo X2 é Y).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Diagramas Lógicos",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_236",
    "text": "Considere a afirmação:\n\n“Quem rouba é preso.”\n\nA negação lógica dessa afirmação é:",
    "options": [
      "A) Alguém rouba e não é preso;",
      "B) Quem não é preso não roubou;",
      "C) Quem não rouba não é preso;",
      "D) Quem rouba não é preso;",
      "E) Alguém não rouba ou não é preso."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. 'Quem rouba é preso' equivale à universal condicional 'Todo aquele que rouba é preso' (∀x: Rouba(x) → Preso(x)). A negação lógica é a existencial 'Existe alguém que rouba e não é preso' (∃x: Rouba(x) ∧ ¬Preso(x)).",
      "Incorreta. Trata-se da contrapositiva (equivalência lógica), e não da negação.",
      "Incorreta. Negação indevida dos termos que altera o sentido sem constituir a negação do quantificador.",
      "Incorreta. 'Todo aquele que rouba não é preso' é a universal contrária, mais forte que a negação contraditória.",
      "Incorreta. Não segue a regra de negação da condicional universal."
    ],
    "generalExplanation": "A proposição 'Quem rouba é preso' tem estrutura universal: 'Todo homem que rouba é preso' (Se rouba, então é preso). A negação do quantificador universal afirmativo 'Todo A é B' é 'Algum A não é B', isto é: 'Alguém rouba e não é preso' (regra do MANÉ na condicional: Mantém a primeira E Nega a segunda).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Quantificadores e Diagramas Lógicos",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_237",
    "text": "Considere a seguinte proposição:\n\n“Todas as pessoas podem reunir-se pacificamente e têm o direito a receber informações de seu interesse.”\n\nUma negação lógica para essa proposição está contida na alternativa:",
    "options": [
      "A) Existe pessoa que não pode se reunir pacificamente com outras pessoas ou que não tem o direito a receber informações de seu interesse.",
      "B) Existe pessoa que não pode se reunir pacificamente com outras pessoas e que não tem o direito a receber informações de seu interesse.",
      "C) Nenhuma pessoa pode se reunir pacificamente com outras pessoas ou tem o direito a receber informações de seu interesse.",
      "D) Nenhuma pessoa pode se reunir pacificamente com outras pessoas e tem o direito a receber informações de seu interesse.",
      "E) Todas as pessoas não podem se reunir pacificamente e não têm o direito a receber informações de seu interesse."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A proposição original é ∀x(P(x) ∧ Q(x)). Sua negação lógica é ∃x¬(P(x) ∧ Q(x)) ≡ ∃x(¬P(x) ∨ ¬Q(x)), ou seja: 'Existe pessoa que não pode se reunir pacificamente OU não tem o direito a receber informações'.",
      "Incorreta. Utiliza conjunção ('e'), exigindo que a mesma pessoa falhe em ambos os quesitos, o que é mais restritivo do que a negação lógica correta.",
      "Incorreta. 'Nenhuma pessoa' é uma universal negativa, não a negação contraditória.",
      "Incorreta. Mantém quantificador universal ('nenhuma').",
      "Incorreta. Nega ambas as propriedades universalmente ('todas as pessoas não podem...'), contrariando a regra da negação."
    ],
    "generalExplanation": "Para negar 'Todo x é (P e Q)':\n1. Troca-se o quantificador universal ('Todo') pelo existencial ('Existe / Algum / Pelo menos um').\n2. Nega-se a proposição composta interna pela Lei de De Morgan: ¬(P ∧ Q) ≡ ¬P ∨ ¬Q.\nResultado: Existe pessoa que não pode se reunir pacificamente OU não tem direito a receber informações.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação de Quantificador Universal com Conjunção",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_238",
    "text": "Considere a sentença a seguir:\n\n“Todo pernambucano gosta de peixe e torce pelo Náutico.”\n\nA negação lógica da sentença dada é:",
    "options": [
      "A) “Nenhum pernambucano gosta de peixe e torce pelo Náutico.”",
      "B) “Todo pernambucano não gosta de peixe e não torce pelo Náutico.”",
      "C) “Algum pernambucano não gosta de peixe e não torce pelo Náutico.”",
      "D) “Algum pernambucano não gosta de peixe ou não torce pelo Náutico.”",
      "E) “Algum pernambucano gosta de peixe e não torce pelo Náutico.”"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. 'Nenhum' não é a negação de 'Todo'.",
      "Incorreta. Mantém o quantificador 'Todo' e nega os predicados.",
      "Incorreta. Utilizou o conectivo 'e' em vez do conectivo 'ou' exigido pela Lei de De Morgan ao negar a conjunção.",
      "Correta. A negação de 'Todo A é (B e C)' é 'Algum A não é B OU não é C' (troca Todo por Algum + nega a conjunção aplicando De Morgan).",
      "Incorreta. Não nega a conjunção de forma abrangente."
    ],
    "generalExplanation": "A proposição é da forma ∀x(P(x) ∧ Q(x)). Sua negação é ∃x(¬P(x) ∨ ¬Q(x)), expressa em linguagem natural como: 'Algum pernambucano não gosta de peixe OU não torce pelo Náutico'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação de Quantificador Universal com Conjunção",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_239",
    "text": "Uma afirmação que é a negação lógica da afirmação “Todos os gatos são pardos e algumas corujas são brancas” é:",
    "options": [
      "A) Nenhum gato é pardo, e algumas corujas não são brancas.",
      "B) Alguns gatos são pardos ou todas as corujas são brancas.",
      "C) Se os gatos são pardos, então as corujas são brancas.",
      "D) Existe gato que é pardo ou alguma coruja não é branca.",
      "E) Existe gato que não é pardo ou não há corujas brancas."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. Negação indevida utilizando conjunção e quantificador universal negativo.",
      "Incorreta. Não nega as proposições quantificadas.",
      "Incorreta. Converteu a conjunção em condicional.",
      "Incorreta. 'Existe gato que é pardo' não nega 'todos os gatos são pardos'.",
      "Correta. A negação de (P ∧ Q) é (¬P ∨ ¬Q). A negação de 'todos os gatos são pardos' é 'existe gato que não é pardo'; a negação de 'algumas corujas são brancas' é 'nenhuma coruja é branca' (não há corujas brancas)."
    ],
    "generalExplanation": "A proposição original é uma conjunção (P ∧ Q):\n• P = 'Todos os gatos são pardos' ⇒ Negação ¬P = 'Existe gato que não é pardo'\n• Q = 'Algumas corujas são brancas' ⇒ Negação ¬Q = 'Nenhuma coruja é branca' / 'Não há corujas brancas'\nPela Lei de De Morgan: ¬(P ∧ Q) ≡ ¬P ∨ ¬Q ⇒ 'Existe gato que não é pardo OU não há corujas brancas'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação de Conjunção com Quantificadores",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_240",
    "text": "A negação da proposição “Cada uma das contas apresentadas por Fernando contém, no mínimo, dois erros contábeis.” corresponde a:",
    "options": [
      "A) Todas as contas apresentadas por Fernando contêm, pelo menos, um erro contábil.",
      "B) Nenhuma das contas apresentadas por Fernando contém, no mínimo, dois erros contábeis.",
      "C) Cada uma das contas apresentadas por Fernando contém, no máximo, um erro contábil.",
      "D) Pelo menos uma das contas apresentadas por Fernando contém, no máximo, um erro contábil.",
      "E) Pelo menos uma das contas apresentadas por Fernando contém, no mínimo, dois erros contábeis."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Mantém o quantificador universal ('todas').",
      "Incorreta. Universal negativa ('nenhuma'), o que não é a negação contraditória.",
      "Incorreta. Mantém quantificador universal ('cada uma').",
      "Correta. A negação de 'Todas as contas contêm no mínimo 2 erros (erros ≥ 2)' é 'Pelo menos uma conta contém menos de 2 erros (erros ≤ 1, ou seja, no máximo 1 erro)'.",
      "Incorreta. Mantém o mesmo predicado da original."
    ],
    "generalExplanation": "A proposição dada afirma universalmente que para toda conta x: número de erros ≥ 2. A negação contraditória exige que exista pelo menos uma conta x cujo número de erros seja < 2 (isto é, no máximo 1 erro contábil). Logo: 'Pelo menos uma das contas apresentadas por Fernando contém, no máximo, um erro contábil'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação de Quantificador Universal",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_241",
    "text": "A afirmação: “todas as bolas são vermelhas ou algumas barras não são azuis”, é uma afirmação falsa. A partir dessa informação, é correto afirmar que:",
    "options": [
      "A) nenhuma bola é vermelha e algumas barras são azuis.",
      "B) existe bola que não é vermelha e todas as barras são azuis.",
      "C) todas as bolas não são vermelhas ou todas as barras não são azuis.",
      "D) existe bola que é vermelha ou algumas barras são azuis.",
      "E) existe bola que não é vermelha ou nenhuma barra é azul."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. 'Nenhuma bola é vermelha' é uma afirmação mais forte do que a negação estrita de 'todas as bolas são vermelhas'.",
      "Correta. Dizer que uma disjunção (P ∨ Q) é FALSA significa que tanto P quanto Q são falsos (P = F e Q = F). Logo:\n• Negação de 'todas as bolas são vermelhas' é VERDADE: 'existe bola que não é vermelha'.\n• Negação de 'algumas barras não são azuis' é VERDADE: 'todas as barras são azuis'.\nConclusão: 'existe bola que não é vermelha E todas as barras são azuis'.",
      "Incorreta. Usa disjunção ('ou') em vez da conjunção obrigatória.",
      "Incorreta. Não representa a falsidade da disjunção.",
      "Incorreta. Usa conectivo 'ou' e nega incorretamente a segunda parte."
    ],
    "generalExplanation": "Se a proposição disjuntiva P ∨ Q é FALSA, pela tabela-verdade do conectivo 'ou', ambos os disjuntos são obrigatoriamente falsos (P = F e Q = F), o que significa que ¬P é verdadeira e ¬Q é verdadeira:\n1. ¬('todas as bolas são vermelhas') = 'existe bola que não é vermelha'.\n2. ¬('algumas barras não são azuis') = 'todas as barras são azuis'.\nUnindo as duas verdades por conjunção: 'existe bola que não é vermelha E todas as barras são azuis'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação de Disjunção com Quantificadores",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_242",
    "text": "Uma afirmação que corresponda à negação lógica da afirmação: “Todos os potes de sobremesa viraram ou choveu em cima da sacola”, é:",
    "options": [
      "A) Pelo menos um pote de sobremesa não virou e não choveu em cima da sacola.",
      "B) Nenhum pote de sobremesa virou e não choveu em cima da sacola.",
      "C) Nenhum pote de sobremesa virou ou não choveu em cima da sacola.",
      "D) Pelo menos um pote de sobremesa virou ou não choveu em cima da sacola.",
      "E) Pelo menos um pote de sobremesa não virou e choveu em cima da sacola."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A negação de uma disjunção (P ∨ Q) é a conjunção das negações (¬P ∧ ¬Q). A negação de 'todos os potes viraram' é 'pelo menos um pote não virou'; a negação de 'choveu' é 'não choveu'.",
      "Incorreta. 'Nenhum pote virou' é uma universal negativa, mais forte que a negação contraditória.",
      "Incorreta. Mantém o conectivo 'ou'.",
      "Incorreta. 'Pelo menos um pote virou' não nega a afirmação original e mantém a disjunção.",
      "Incorreta. Manteve 'choveu' sem negar a segunda proposição."
    ],
    "generalExplanation": "Aplicando a Lei de De Morgan para negar a disjunção ¬(P ∨ Q) ≡ ¬P ∧ ¬Q:\n• P = 'Todos os potes de sobremesa viraram' ⇒ ¬P = 'Pelo menos um pote de sobremesa não virou'\n• Q = 'Choveu em cima da sacola' ⇒ ¬Q = 'Não choveu em cima da sacola'\nResultado: 'Pelo menos um pote de sobremesa não virou E não choveu em cima da sacola'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação de Disjunção com Quantificadores",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_243",
    "text": "A alternativa que corresponde à negação lógica da proposição composta: “todos os cantores são músicos e existe advogado que é cantor”, é:",
    "options": [
      "A) Nenhum cantor é músico e não existe advogado que seja cantor.",
      "B) Pelo menos um cantor não é músico ou não existe advogado que seja cantor.",
      "C) Há cantores que são músicos e existe advogado que não é cantor.",
      "D) Nenhum cantor é músico ou não existe advogado que seja cantor.",
      "E) Pelo menos um cantor não é músico ou existe advogado que é cantor."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Utiliza conjunção ('e') e quantificador universal negativo indevido.",
      "Correta. Negação de (P ∧ Q) é (¬P ∨ ¬Q):\n• ¬('todos os cantores são músicos') = 'pelo menos um cantor não é músico'\n• ¬('existe advogado que é cantor') = 'nenhum advogado é cantor' / 'não existe advogado que seja cantor'\nConectivo: 'ou'.",
      "Incorreta. Não nega de acordo com as leis lógicas.",
      "Incorreta. 'Nenhum cantor é músico' é mais forte que a negação estrita.",
      "Incorreta. Manteve a segunda parte sem negação."
    ],
    "generalExplanation": "Pela Lei de De Morgan, ¬(P ∧ Q) ≡ ¬P ∨ ¬Q:\n1. ¬('Todos os cantores são músicos') = 'Pelo menos um cantor não é músico'.\n2. ¬('Existe advogado que é cantor') = 'Não existe advogado que seja cantor' (Nenhum advogado é cantor).\n3. Conectivo de união: 'OU'.\nLogo: 'Pelo menos um cantor não é músico OU não existe advogado que seja cantor'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação de Conjunção com Quantificadores",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_244",
    "text": "Considere a seguinte afirmação: “Todo homem é trabalhador”.\n\nA alternativa que apresenta uma negação lógica para essa afirmação é:",
    "options": [
      "A) Nenhum homem é trabalhador.",
      "B) Toda mulher é trabalhadora.",
      "C) Não existe homem que não é trabalhador.",
      "D) Todo trabalhador não é homem.",
      "E) Existe homem que não é trabalhador."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. 'Nenhum' é a contrária da universal afirmativa, não a sua negação contraditória.",
      "Incorreta. Alterou o conjunto universo (sujeito) da proposição.",
      "Incorreta. É equivalente à proposição original (dupla negação).",
      "Incorreta. Inverteu os termos indevidamente.",
      "Correta. A negação lógica de 'Todo A é B' é 'Algum A não é B' (Existe A que não é B / Pelo menos um A não é B)."
    ],
    "generalExplanation": "No quadrado das oposições lógicas, a negação contraditória da proposição universal afirmativa ('Todo A é B') é a particular negativa ('Algum A não é B' / 'Existe A que não é B'). Portanto, a negação de 'Todo homem é trabalhador' é 'Existe homem que não é trabalhador'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação de Quantificador Universal",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_245",
    "text": "A negação da frase “Todos os analistas são inteligentes ou nenhum técnico é capacitado” é dada por:",
    "options": [
      "A) Nenhum analista é inteligente ou todo técnico é capacitado.",
      "B) Existe analista que não é inteligente e existe técnico que é capacitado.",
      "C) Se nenhum técnico é capacitado, então todos os analistas são inteligentes.",
      "D) Existe analista que não é inteligente ou existe algum técnico que não é capacitado.",
      "E) Não existe analista inteligente ou algum técnico é capacitado."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Utiliza o conectivo 'ou' e quantificadores indevidos.",
      "Correta. A negação de (P ∨ Q) é (¬P ∧ ¬Q):\n• ¬('Todos os analistas são inteligentes') = 'Existe analista que não é inteligente'\n• ¬('Nenhum técnico é capacitado') = 'Existe técnico que é capacitado'\nUnidas pela conjunção 'E'.",
      "Incorreta. Transformou a proposição em uma condicional.",
      "Incorreta. Utilizou disjunção ('ou') e negou incorretamente a segunda parte.",
      "Incorreta. Manteve a disjunção e usou 'não existe analista inteligente'."
    ],
    "generalExplanation": "Aplicando De Morgan ¬(P ∨ Q) ≡ ¬P ∧ ¬Q:\n1. Negação de 'Todos os analistas são inteligentes' (Todo A é B) ⇒ 'Existe analista que não é inteligente' (Existe A não B).\n2. Negação de 'Nenhum técnico é capacitado' (Nenhum A é B) ⇒ 'Existe técnico que é capacitado' (Existe A que é B).\n3. O conectivo 'ou' torna-se 'e'.\nFrase final: 'Existe analista que não é inteligente E existe técnico que é capacitado'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação de Disjunção com Quantificadores",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_246",
    "text": "Assinale a alternativa que contém uma negação lógica para a seguinte afirmação:\n\n“Todos os servidores públicos usam gravata.”",
    "options": [
      "A) Existe servidor público que não usa gravata.",
      "B) Nenhum servidor público usa gravata.",
      "C) Alguns servidores públicos usam gravata.",
      "D) Todos os que usam gravata não são servidores públicos.",
      "E) Ninguém que não usa gravata é servidor público."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A negação da universal afirmativa 'Todo A é B' é a particular negativa 'Existe pelo menos um A que não é B'. Logo: 'Existe servidor público que não usa gravata'.",
      "Incorreta. 'Nenhum' é a universal negativa contrária, não a contraditória.",
      "Incorreta. É uma particular afirmativa consequência da universal, não sua negação.",
      "Incorreta. Inverte e nega a relação indevidamente.",
      "Incorreta. Equivale logicamente à própria proposição original por contraposição."
    ],
    "generalExplanation": "Para que a afirmação 'Todos os servidores públicos usam gravata' seja falsa, basta que exista pelo menos um único servidor público que não use gravata (quantificador existencial + negação do predicado).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação de Quantificador Universal",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_247",
    "text": "A negação da proposição “Se todos os plact são plect, então todos os plict são ploct” é:",
    "options": [
      "A) se todos os plict não são ploct, então todos os plact não são plect.",
      "B) se todos os plect são plact, então todos os ploct são plict.",
      "C) todos os plact são plect, mas existe plict que não é ploct.",
      "D) nenhum plact é plect e nenhum plict é ploct.",
      "E) algum plact é plect, mas todo plict não é ploct."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Apresenta uma condicional com termos negados (contrapositiva com negação parcial), e não a negação lógica da condicional.",
      "Incorreta. Inverte a ordem das proposições condicionais sem negar.",
      "Correta. A negação de uma condicional P → Q é dada por P ∧ ¬Q (regra do MANÉ: Mantém o antecedente P e Nega o consequente Q). Aqui: Mantém 'todos os plact são plect' E Nega 'todos os plict são ploct' ⇒ 'existe plict que não é ploct' (a conjunção 'mas' exerce a função de 'e').",
      "Incorreta. Nega ambas as proposições por universais negativas com conjunção.",
      "Incorreta. Alterou indevidamente o antecedente para a forma particular."
    ],
    "generalExplanation": "A regra de negação de uma condicional (P → Q) é ¬(P → Q) ≡ P ∧ ¬Q:\n• P (antecedente mantido): 'Todos os plact são plect'.\n• Conectivo: conjunção 'e' (ou 'mas').\n• ¬Q (consequente negado): A negação de 'Todos os plict são ploct' é 'Existe plict que não é ploct'.\nResultado: 'Todos os plact são plect, mas existe plict que não é ploct'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação de Condicional com Quantificadores",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_248",
    "text": "A respeito de lógica proposicional, julgue o item que se segue:\n\nSe P, Q e R forem proposições simples e se ~R indicar a negação da proposição R, então, independentemente dos valores lógicos V = verdadeiro ou F = falso de P, Q e R, a proposição P → (Q ∨ ~R) será sempre V (tautologia).",
    "options": [
      "A) Certo",
      "B) Errado"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Há valoração que torna a condicional falsa. Por exemplo, atribuindo P = V, Q = F e R = V, temos: ~R = F; (Q ∨ ~R) = (F ∨ F) = F; e a condicional P → (Q ∨ ~R) resulta em V → F = F.",
      "Correta. A proposição não é uma tautologia (não é sempre verdadeira), tratando-se de uma contingência."
    ],
    "generalExplanation": "A condicional P → (Q ∨ ~R) só seria sempre verdadeira se fosse uma tautologia. Contudo, quando P é verdadeiro, Q é falso e R é verdadeiro, temos antecedente V e consequente F (F ∨ ~V = F), resultando em V → F = F. Portanto, a afirmação está Errada.",
    "banca": "Simulado IBGE / CEBRASPE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Tabela-Verdade",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_249",
    "text": "A tabela-verdade das proposições P ∧ (Q ∨ R) e (P ∧ Q) → R possui 8 linhas (com 2³ = 8 combinações para as proposições simples P, Q e R). Considerando a ordem padrão de valorações (P: V,V,V,V,F,F,F,F; Q: V,V,F,F,V,V,F,F; R: V,F,V,F,V,F,V,F):\n\nJulgue o item a seguir:\nNa tabela, os valores lógicos da coluna referente à proposição lógica P ∧ (Q ∨ R), da 1ª à 8ª linha, são respectivamente: V, V, V, F, F, F, F, F.",
    "options": [
      "A) Certo",
      "B) Errado"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Analisando linha por linha:\n• Linha 1 (V,V,V): V ∧ (V ∨ V) = V ∧ V = V\n• Linha 2 (V,V,F): V ∧ (V ∨ F) = V ∧ V = V\n• Linha 3 (V,F,V): V ∧ (F ∨ V) = V ∧ V = V\n• Linha 4 (V,F,F): V ∧ (F ∨ F) = V ∧ F = F\n• Linhas 5 a 8 (P=F): F ∧ (Q ∨ R) = F.\nLogo, a sequência resultante é: V, V, V, F, F, F, F, F.",
      "Incorreta. A sequência de valorações está exata e matematicamente correta."
    ],
    "generalExplanation": "A proposição P ∧ (Q ∨ R) exige que P seja verdadeiro e pelo menos uma entre Q ou R seja verdadeira. Nas quatro primeiras linhas (onde P=V), apenas na linha 4 temos Q e R simultaneamente falsos. Nas últimas quatro linhas (P=F), a conjunção é sempre falsa. Logo, a coluna resulta em V, V, V, F, F, F, F, F.",
    "banca": "Simulado IBGE / CEBRASPE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Tabela-Verdade",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_250",
    "text": "A tabela-verdade das proposições P ∧ (Q ∨ R) e (P ∧ Q) → R possui 8 linhas (com 2³ = 8 combinações para as proposições simples P, Q e R). Considerando a ordem padrão de valorações (P: V,V,V,V,F,F,F,F; Q: V,V,F,F,V,V,F,F; R: V,F,V,F,V,F,V,F):\n\nJulgue o item a seguir:\nNa tabela, os valores lógicos da coluna referente à proposição lógica (P ∧ Q) → R, da 1ª à 8ª linha, são respectivamente: V, F, V, V, V, V, V, V.",
    "options": [
      "A) Certo",
      "B) Errado"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A condicional (P ∧ Q) → R só é falsa no caso V → F. O antecedente (P ∧ Q) só é V quando P=V e Q=V (linhas 1 e 2). Na linha 1, R=V (V → V = V). Na linha 2, R=F (V → F = F). Nas linhas 3 a 8, (P ∧ Q) = F, logo a condicional é sempre verdadeira (F → R = V). Portanto, a sequência é: V, F, V, V, V, V, V, V.",
      "Incorreta. A sequência de valorações está exata e matematicamente correta."
    ],
    "generalExplanation": "Uma proposição condicional p → q só assume valor falso quando o antecedente é verdadeiro e o consequente é falso. O antecedente (P ∧ Q) só é verdadeiro nas linhas 1 e 2. Como na linha 1 o consequente R=V, a condicional é V; na linha 2 com R=F, a condicional é F. Em todas as outras linhas (3 a 8), o antecedente é F, tornando a condicional V. Sequência: V, F, V, V, V, V, V, V.",
    "banca": "Simulado IBGE / CEBRASPE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Tabela-Verdade",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_251",
    "text": "Leia as premissas abaixo:\n1. João é carpinteiro.\n2. Nenhum funcionário da firma X é corajoso.\n3. Todos os carpinteiros são corajosos.\n4. Alguns carpinteiros são altos.\nSupondo que estas quatro sentenças são verdadeiras, assinale qual das alternativas abaixo é certamente verdadeira:",
    "options": [
      "A) Algum funcionário da firma X é carpinteiro.",
      "B) João é alto.",
      "C) Alguns corajosos são carpinteiros.",
      "D) Nenhum funcionário da firma X é alto.",
      "E) João é funcionário da firma X."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Como todo carpinteiro é corajoso e nenhum funcionário da firma X é corajoso, os conjuntos dos carpinteiros e dos funcionários da firma X são disjuntos (interseção vazia). Nenhum carpinteiro trabalha na firma X.",
      "Incorreta. Sabemos que alguns carpinteiros são altos, mas não temos dados para afirmar se João pertence ou não a essa parcela alta.",
      "Correta. A premissa 3 diz que todo carpinteiro é corajoso e sabemos (pela premissa 1, por exemplo) que existe ao menos um carpinteiro (João). Logo, a interseção entre o conjunto dos corajosos e dos carpinteiros é não vazia: 'Alguns corajosos são carpinteiros'.",
      "Incorreta. As premissas não estabelecem qualquer relação de inclusão ou exclusão entre os funcionários da firma X e o conjunto das pessoas altas.",
      "Incorreta. João é carpinteiro, logo é corajoso. Como nenhum funcionário da firma X é corajoso, João não pode ser funcionário da firma X."
    ],
    "generalExplanation": "A proposição 'Todos os carpinteiros são corajosos' implica a conversão por limitação/acidente: 'Alguns corajosos são carpinteiros' (já garantida a existência real pelo elemento João). Além disso, os conjuntos Carpinteiros e Funcionários da Firma X são disjuntos.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Diagramas Lógicos",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_252",
    "text": "Partindo das premissas:\n(1) Todo advogado é sagaz.\n(2) Todo advogado é formado em direito.\n(3) Roberval é sagaz.\n(4) Sulamita é juíza.\nPode-se concluir validamente que:",
    "options": [
      "A) Há pessoas formadas em direito que são sagazes.",
      "B) Roberval é advogado.",
      "C) Sulamita é sagaz.",
      "D) Roberval é promotor.",
      "E) Sulamita e Roberval são casados."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Como todo advogado é formado em direito e todo advogado é sagaz, o conjunto dos advogados está contido na interseção entre os formados em direito e os sagazes. Assumindo a existência de advogados, conclui-se que existem pessoas formadas em direito que são sagazes.",
      "Incorreta. O fato de Roberval ser sagaz não garante que ele seja advogado (falácia da afirmação do consequente / não conversão direta da universal).",
      "Incorreta. Não há qualquer premissa relacionando juízes ou Sulamita à sagacidade.",
      "Incorreta. A profissão de promotor sequer foi mencionada nas premissas.",
      "Incorreta. Informação extralógica sem respaldo nas premissas."
    ],
    "generalExplanation": "Se todo A é B (Todo advogado é sagaz) e todo A é C (Todo advogado é formado em direito), qualquer elemento do conjunto A pertence necessariamente à interseção B ∩ C. Logo, há pessoas formadas em direito que são sagazes.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Diagramas Lógicos",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_253",
    "text": "Em um teste de raciocínio lógico, são dadas as seguintes afirmações verdadeiras:\n1. 'Todo X1 é Y.'\n2. 'Todo X2, se não for X3, ou é X1 ou é X4.'\n3. 'Não há X3 e não há X4 que não seja Y.' (ou seja: todo X3 é Y e todo X4 é Y).\nA partir dessas informações, conclui-se corretamente que:",
    "options": [
      "A) Todo Y é X2.",
      "B) Todo Y é X3 ou X4.",
      "C) Algum X3 é X4.",
      "D) Algum X1 é X3.",
      "E) Todo X2 é Y."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. Sabemos que elementos de X2 são Y, mas não que o conjunto Y se restrinja a X2.",
      "Incorreta. O conjunto Y pode conter elementos que não pertencem nem a X3 nem a X4.",
      "Incorreta. Não há informação que garanta interseção não vazia entre X3 e X4.",
      "Incorreta. As premissas não obrigam a existência de elementos comuns entre X1 e X3.",
      "Correta. Analisando qualquer elemento pertencente a X2: se ele for X3, ele é Y (pois todo X3 é Y); se ele não for X3, ele obrigatoriamente é X1 ou X4. Como todo X1 é Y e todo X4 é Y, em qualquer cenário o elemento é Y. Portanto, todo X2 é Y."
    ],
    "generalExplanation": "Por análise de casos exaustiva: para todo elemento x ∈ X2: Caso 1: x ∈ X3 ⇒ x ∈ Y. Caso 2: x ∉ X3 ⇒ x ∈ (X1 ∪ X4). Como X1 ⊆ Y e X4 ⊆ Y, x ∈ Y em ambos os ramos. Consequentemente, todo X2 é Y (X2 ⊆ Y).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Diagramas Lógicos",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_254",
    "text": "Considere a afirmação: “Quem rouba é preso.” A negação lógica dessa afirmação é dada por:",
    "options": [
      "A) Alguém rouba e não é preso.",
      "B) Quem não é preso não roubou.",
      "C) Quem não rouba não é preso.",
      "D) Quem rouba não é preso.",
      "E) Alguém não rouba ou não é preso."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A sentença 'Quem rouba é preso' é uma proposição universal afirmativa: 'Todo aquele que rouba é preso' (∀x: Rouba(x) → Preso(x)). Sua negação é a existencial: 'Existe alguém que rouba e não é preso' (∃x: Rouba(x) ∧ ¬Preso(x)).",
      "Incorreta. 'Quem não é preso não roubou' é a proposição contrapositiva (~Q → ~P), portanto logicamente equivalente à original, e não a sua negação.",
      "Incorreta. Trata-se da inversa (~P → ~Q), sem valor de negação.",
      "Incorreta. 'Quem rouba não é preso' é uma universal negativa contrária (Todo rouba → não preso), que não é a contraditória lógica.",
      "Incorreta. A negação correta exige que o indivíduo roube (mantenha o antecedente) e não seja preso (negue o consequente)."
    ],
    "generalExplanation": "A negação de uma proposição condicional universal ('Todo A é B' ou 'Se é A, então é B') é a proposição particular/existencial 'Existe A que não é B' (ou 'Algum A não é B').",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Quantificadores e Diagramas Lógicos",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_255",
    "text": "Considere a seguinte proposição: “Todas as pessoas podem reunir-se pacificamente e têm o direito a receber informações de seu interesse.” Uma negação lógica para essa proposição está contida na alternativa:",
    "options": [
      "A) Existe pessoa que não pode se reunir pacificamente com outras pessoas ou que não tem o direito a receber informações de seu interesse.",
      "B) Existe pessoa que não pode se reunir pacificamente com outras pessoas e que não tem o direito a receber informações de seu interesse.",
      "C) Nenhuma pessoa pode se reunir pacificamente com outras pessoas ou tem o direito a receber informações de seu interesse.",
      "D) Nenhuma pessoa pode se reunir pacificamente com outras pessoas e tem o direito a receber informações de seu interesse.",
      "E) Todas as pessoas não podem se reunir pacificamente e não têm o direito a receber informações de seu interesse."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A proposição tem a estrutura universal afirmativa com predicado conjuntivo: ∀x (P(x) ∧ Q(x)). A negação lógica de ∀x (P ∧ Q) é ∃x ¬(P ∧ Q) = ∃x (¬P(x) ∨ ¬Q(x)), ou seja: 'Existe pessoa que não pode se reunir pacificamente ou não tem o direito a receber informações...'.",
      "Incorreta. Conecta as negações com conjunção 'e' (¬P ∧ ¬Q), exigindo que a pessoa falhe em ambos os direitos simultaneamente, o que é mais forte do que a negação estrita.",
      "Incorreta. A negação de 'Todo' não é 'Nenhum'.",
      "Incorreta. Mantém quantificador universal 'Nenhum'.",
      "Incorreta. Mantém o quantificador universal com ambas as negações."
    ],
    "generalExplanation": "Para negar 'Todo x é (P e Q)', troca-se o quantificador universal pelo existencial e nega-se a conjunção aplicando a Lei de De Morgan: ¬(P ∧ Q) ≡ ¬P ∨ ¬Q. Logo: 'Existe ao menos um x que não é P ou não é Q'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação de Quantificador Universal com Conjunção",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_256",
    "text": "Considere a sentença: “Todo pernambucano gosta de peixe e torce pelo Náutico.” A negação lógica da sentença dada é:",
    "options": [
      "A) “Nenhum pernambucano gosta de peixe e torce pelo Náutico.”",
      "B) “Todo pernambucano não gosta de peixe e não torce pelo Náutico.”",
      "C) “Algum pernambucano não gosta de peixe e não torce pelo Náutico.”",
      "D) “Algum pernambucano não gosta de peixe ou não torce pelo Náutico.”",
      "E) “Algum pernambucano gosta de peixe e não torce pelo Náutico.”"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. 'Nenhum' é proposição contrária, não a contraditória/negação estrita.",
      "Incorreta. Mantém a universalidade 'Todo'.",
      "Incorreta. Usar a conjunção 'e' restringe excessivamente a negação, pois basta que um pernambucano não goste de peixe OU não torça pelo Náutico para falsificar a sentença original.",
      "Correta. A negação de ∀x (P(x) ∧ Q(x)) é ∃x (¬P(x) ∨ ¬Q(x)): 'Algum pernambucano não gosta de peixe ou não torce pelo Náutico'.",
      "Incorreta. Nega apenas a segunda parte mantendo a conjunção 'e'."
    ],
    "generalExplanation": "A negação de uma sentença do tipo 'Todo A é B e C' é 'Existe/Algum A que não é B ou não é C', utilizando a equivalência das Leis de De Morgan aliada à mudança do quantificador de universal para existencial.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação de Quantificador Universal com Conjunção",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_257",
    "text": "Uma afirmação que é a negação lógica da afirmação “Todos os gatos são pardos e algumas corujas são brancas” é:",
    "options": [
      "A) Nenhum gato é pardo, e algumas corujas não são brancas.",
      "B) Alguns gatos são pardos ou todas as corujas são brancas.",
      "C) Se os gatos são pardos, então as corujas são brancas.",
      "D) Existe gato que é pardo ou alguma coruja não é branca.",
      "E) Existe gato que não é pardo ou não há corujas brancas (nenhuma coruja é branca)."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. Usa quantificador 'Nenhum' e mantém a conjunção 'e'.",
      "Incorreta. Não nega adequadamente as proposições componentes.",
      "Incorreta. Transforma a conjunção em uma condicional.",
      "Incorreta. 'Existe gato que é pardo' não nega 'todos os gatos são pardos' (são compatíveis).",
      "Correta. A proposição é da forma (P ∧ Q). Sua negação pela Lei de De Morgan é (¬P ∨ ¬Q). A negação de 'Todos os gatos são pardos' é 'Existe gato que não é pardo'; a negação de 'algumas corujas são brancas' é 'nenhuma coruja é branca' (não há corujas brancas). A união por 'ou' resulta na alternativa E."
    ],
    "generalExplanation": "Para negar a conjunção (P ∧ Q), aplica-se De Morgan: ¬(P ∧ Q) ≡ ¬P ∨ ¬Q. Sendo P: 'Todos os gatos são pardos' (¬P: 'Existe gato que não é pardo') e Q: 'Algumas corujas são brancas' (¬Q: 'Nenhuma coruja é branca / Não há corujas brancas').",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação de Conjunção com Quantificadores",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_258",
    "text": "A negação da proposição “Cada uma das contas apresentadas por Fernando contém, no mínimo, dois erros contábeis.” corresponde a:",
    "options": [
      "A) Todas as contas apresentadas por Fernando contêm, pelo menos, um erro contábil.",
      "B) Nenhuma das contas apresentadas por Fernando contém, no mínimo, dois erros contábeis.",
      "C) Cada uma das contas apresentadas por Fernando contém, no máximo, um erro contábil.",
      "D) Pelo menos uma das contas apresentadas por Fernando contém, no máximo, um erro contábil.",
      "E) Pelo menos uma das contas apresentadas por Fernando contém, no mínimo, dois erros contábeis."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Não estabelece a negação do quantificador universal 'Cada uma' nem da quantidade mínima.",
      "Incorreta. Usa o quantificador universal negativo 'Nenhuma'.",
      "Incorreta. Mantém o quantificador universal 'Cada uma', alterando apenas a condição numérica.",
      "Correta. A sentença afirma: 'Para toda conta x, número_de_erros(x) ≥ 2'. A negação lógica é: 'Existe ao menos uma conta x tal que número_de_erros(x) < 2', ou seja, que contenha no máximo 1 erro contábil (0 ou 1 erro).",
      "Incorreta. Afirma a existência de conta com ≥ 2 erros, o que é consequência da afirmação original e não sua negação."
    ],
    "generalExplanation": "A negação do quantificador universal 'Para toda conta (erros ≥ 2)' é 'Existe pelo menos uma conta (erros ≤ 1)'. A negação de 'no mínimo 2' em números inteiros não negativos é 'no máximo 1'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação de Quantificador Universal",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_259",
    "text": "A afirmação: “Todas as bolas são vermelhas ou algumas barras não são azuis” é uma afirmação FALSA. A partir dessa informação, é correto concluir que:",
    "options": [
      "A) Nenhuma bola é vermelha e algumas barras são azuis.",
      "B) Existe bola que não é vermelha e todas as barras são azuis.",
      "C) Todas as bolas não são vermelhas ou todas as barras não são azuis.",
      "D) Existe bola que é vermelha ou algumas barras são azuis.",
      "E) Existe bola que não é vermelha ou nenhuma barra é azul."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A negação de 'Todas as bolas são vermelhas' é 'Existe bola não vermelha' (não necessariamente que 'nenhuma' seja).",
      "Correta. Dizer que uma disjunção (P ∨ Q) é FALSA equivale a dizer que sua negação ¬(P ∨ Q) é VERDADEIRA. Pela Lei de De Morgan: ¬(P ∨ Q) ≡ (¬P ∧ ¬Q). Logo: ¬('Todas as bolas são vermelhas') = 'Existe bola que não é vermelha' E ¬('Algumas barras não são azuis') = 'Todas as barras são azuis'.",
      "Incorreta. A falsidade da disjunção exige a conjunção das negações, não uma nova disjunção.",
      "Incorreta. Não traduz a negação necessária.",
      "Incorreta. Utiliza conectivo disjuntivo 'ou' e negação incorreta da segunda premissa."
    ],
    "generalExplanation": "Se uma disjunção (A ∨ B) é Falsa, obrigatoriamente A é Falso e B é Falso. Logo: (1) É falso que 'todas são vermelhas' ⇒ 'existe bola não vermelha'; (2) É falso que 'alguma barra não é azul' ⇒ 'todas as barras são azuis'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação de Disjunção com Quantificadores",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_260",
    "text": "Uma afirmação que corresponda à negação lógica da afirmação: “Todos os potes de sobremesa viraram ou choveu em cima da sacola” é:",
    "options": [
      "A) Pelo menos um pote de sobremesa não virou e não choveu em cima da sacola.",
      "B) Nenhum pote de sobremesa virou e não choveu em cima da sacola.",
      "C) Nenhum pote de sobremesa virou ou não choveu em cima da sacola.",
      "D) Pelo menos um pote de sobremesa virou ou não choveu em cima da sacola.",
      "E) Pelo menos um pote de sobremesa não virou e choveu em cima da sacola."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A proposição é da forma (P ∨ Q). Sua negação lógica é (¬P ∧ ¬Q). A negação de 'Todos os potes de sobremesa viraram' é 'Pelo menos um pote de sobremesa não virou'; a negação de 'choveu em cima da sacola' é 'não choveu em cima da sacola'. Conectadas por 'e', temos a alternativa A.",
      "Incorreta. 'Nenhum pote virou' é uma universal negativa, mais restritiva que a negação lógica estrita.",
      "Incorreta. Mantém a disjunção 'ou', violando a Lei de De Morgan.",
      "Incorreta. Mantém a disjunção e não nega a primeira proposição.",
      "Incorreta. Mantém a afirmação 'choveu', deixando de negar o segundo termo."
    ],
    "generalExplanation": "A negação de (P ∨ Q) é (¬P ∧ ¬Q). Negando 'Todos viraram' obtemos 'Pelo menos um não virou'; negando 'Choveu' obtemos 'Não choveu'. A conjunção dessas duas negações define a resposta correta.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação de Disjunção com Quantificadores",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_261",
    "text": "A alternativa que corresponde à negação lógica da proposição composta: “Todos os cantores são músicos e existe advogado que é cantor” é:",
    "options": [
      "A) Nenhum cantor é músico e não existe advogado que seja cantor.",
      "B) Pelo menos um cantor não é músico ou não existe advogado que seja cantor (nenhum advogado é cantor).",
      "C) Há cantores que são músicos e existe advogado que não é cantor.",
      "D) Nenhum cantor é músico ou não existe advogado que seja cantor.",
      "E) Pelo menos um cantor não é músico ou existe advogado que é cantor."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Usa conjunção 'e' e utiliza 'nenhum' para negar 'todos'.",
      "Correta. A sentença é (P ∧ Q). A negação é (¬P ∨ ¬Q). A negação de 'Todos os cantores são músicos' é 'Pelo menos um cantor não é músico'; a negação de 'Existe advogado que é cantor' é 'Não existe advogado que seja cantor' (nenhum advogado é cantor).",
      "Incorreta. Não corresponde à negação de nenhuma das duas partes.",
      "Incorreta. O termo 'Nenhum cantor é músico' é mais forte que a negação estrita.",
      "Incorreta. Mantém a segunda afirmação inalterada em vez de negá-la."
    ],
    "generalExplanation": "Pela Lei de De Morgan: ¬(P ∧ Q) ≡ ¬P ∨ ¬Q. A negação de quantificador universal afirmativo ('Todo') é o existencial negativo ('Pelo menos um não'); a negação de existencial afirmativo ('Existe') é o universal negativo ('Não existe / Nenhum').",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação de Conjunção com Quantificadores",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_262",
    "text": "Considere a seguinte afirmação: “Todo homem é trabalhador.” A alternativa que apresenta a negação lógica para essa afirmação é:",
    "options": [
      "A) Nenhum homem é trabalhador.",
      "B) Toda mulher é trabalhadora.",
      "C) Não existe homem que não é trabalhador.",
      "D) Todo trabalhador não é homem.",
      "E) Existe homem que não é trabalhador."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. 'Nenhum homem é trabalhador' é a proposição contrária universal, não a contraditória.",
      "Incorreta. Altera indevidamente o universo do discurso de homens para mulheres.",
      "Incorreta. 'Não existe homem que não seja trabalhador' é logicamente equivalente à proposição original (Todo homem é trabalhador).",
      "Incorreta. Inverte e nega termos sem obedecer às regras lógicas de negação.",
      "Correta. A negação de 'Todo A é B' (universal afirmativa) é 'Algum A não é B' ou 'Existe A que não é B' (particular negativa)."
    ],
    "generalExplanation": "No quadrado das oposições aristotélicas, a contraditória (negação lógica estrita) da universal afirmativa (Todo A é B) é a particular negativa (Algum/Existe A que não é B).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação de Quantificador Universal",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_263",
    "text": "A negação da frase “Todos os analistas são inteligentes ou nenhum técnico é capacitado” é dada por:",
    "options": [
      "A) Nenhum analista é inteligente ou todo técnico é capacitado.",
      "B) Existe analista que não é inteligente e existe técnico que é capacitado.",
      "C) Se nenhum técnico é capacitado, então todos os analistas são inteligentes.",
      "D) Existe analista que não é inteligente ou existe algum técnico que não é capacitado.",
      "E) Não existe analista inteligente ou algum técnico é capacitado."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Mantém a disjunção 'ou' e nega inadequadamente os quantificadores.",
      "Correta. A sentença é (P ∨ Q). Sua negação é (¬P ∧ ¬Q). A negação de 'Todos os analistas são inteligentes' é 'Existe analista que não é inteligente'; a negação de 'Nenhum técnico é capacitado' é 'Existe técnico que é capacitado' (ou 'Algum técnico é capacitado'). Conectando por 'e', obtém-se a alternativa B.",
      "Incorreta. Transforma a proposição em condicional.",
      "Incorreta. Mantém o conectivo 'ou' e nega de forma errada a segunda proposição.",
      "Incorreta. Mantém a disjunção 'ou'."
    ],
    "generalExplanation": "A negação de 'Todo A é B ou Nenhum C é D' é 'Existe A que não é B E Existe C que é D'. Aplica-se a Lei de De Morgan para disjunções conjuntamente com a negação de cada quantificador.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação de Disjunção com Quantificadores",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_264",
    "text": "Assinale a alternativa que contém uma negação lógica para a seguinte afirmação: “Todos os servidores públicos usam gravata.”",
    "options": [
      "A) Existe servidor público que não usa gravata.",
      "B) Nenhum servidor público usa gravata.",
      "C) Alguns servidores públicos usam gravata.",
      "D) Todos os que usam gravata não são servidores públicos.",
      "E) Ninguém que não usa gravata é servidor público."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Para negar a proposição universal 'Todo A é B', basta apontar a existência de ao menos um contraexemplo: 'Existe/Pelo menos um servidor público que não usa gravata'.",
      "Incorreta. 'Nenhum' é a universal negativa contrária, e não a negação contraditória.",
      "Incorreta. 'Alguns usam gravata' é compatível com a afirmação de que todos usam, não sendo sua negação.",
      "Incorreta. Inverte os predicados e nega sem correspondência com a negação formal.",
      "Incorreta. 'Ninguém que não usa gravata é servidor público' é a contrapositiva, ou seja, equivalente à frase original."
    ],
    "generalExplanation": "A negação de 'Todo S é P' é 'Existe S que não é P' (ou 'Pelo menos um S não é P').",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação de Quantificador Universal",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_265",
    "text": "A negação lógica da proposição condicional “Se todos os plact são plect, então todos os plict são ploct” é dada por:",
    "options": [
      "A) Se todos os plict não são ploct, então todos os plact não são plect.",
      "B) Se todos os plect são plact, então todos os ploct são plict.",
      "C) Todos os plact são plect, mas existe plict que não é ploct.",
      "D) Nenhum plact é plect e nenhum plict é ploct.",
      "E) Algum plact é plect, mas todo plict não é ploct."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Trata-se de uma proposição condicional, que não nega a condicional dada.",
      "Incorreta. Condicional com termos trocados.",
      "Correta. A negação de uma condicional (P → Q) é dada pela regra 'MANÉ' (Mantém a primeira E Nega a segunda: P ∧ ¬Q). Mantém-se o antecedente ('Todos os plact são plect') e conjuga-se com a negação do consequente: a negação de 'todos os plict são ploct' é 'existe plict que não é ploct'. O conectivo adversativo 'mas' tem valor semântico de conjunção ('e').",
      "Incorreta. Nega com quantificadores 'nenhum' em ambas as partes, sem manter a estrutura P ∧ ¬Q.",
      "Incorreta. Modifica indevidamente o antecedente de 'todos' para 'algum'."
    ],
    "generalExplanation": "A negação de (P → Q) é (P ∧ ¬Q). Sendo P = 'todos os plact são plect' e Q = 'todos os plict são ploct', temos: ¬(P → Q) ≡ 'Todos os plact são plect E/MAS Existe plict que não é ploct'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação de Condicional com Quantificadores",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_266",
    "text": "Considere a seguinte afirmação: “Todo homem é bípede e mamífero.” A alternativa que apresenta a correta negação lógica para essa afirmação é:",
    "options": [
      "A) Nenhum homem é bípede e mamífero.",
      "B) Nenhum homem é bípede ou mamífero.",
      "C) Existe homem que não é bípede ou não é mamífero.",
      "D) Existe homem que não é bípede e não é mamífero.",
      "E) Alguns homens são bípedes e mamíferos."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. 'Nenhum' é proposição contrária universal, não a contraditória (negação lógica estrita).",
      "Incorreta. Mantém o quantificador universal negativo 'Nenhum'.",
      "Correta. A proposição original é da forma ∀x (B(x) ∧ M(x)). Sua negação lógica é ∃x ¬(B(x) ∧ M(x)). Pela Lei de De Morgan, ¬(B ∧ M) ≡ ¬B ∨ ¬M. Logo: 'Existe homem que não é bípede ou não é mamífero'.",
      "Incorreta. Conectar por 'e' (¬B ∧ ¬M) torna a condição excessivamente restritiva, pois para falsear a proposição original basta que o homem deixe de ser bípede OU deixe de ser mamífero.",
      "Incorreta. Proposição particular afirmativa compatível com a original, não sendo sua negação."
    ],
    "generalExplanation": "A negação de ∀x (P(x) ∧ Q(x)) é ∃x (¬P(x) ∨ ¬Q(x)). Troca-se o quantificador universal pelo existencial e aplica-se a Lei de De Morgan à conjunção de predicados.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação de Quantificador Universal com Conjunção",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_267",
    "text": "Considere a seguinte afirmação: “Todo funcionário público é concursado.” A alternativa que apresenta uma negação lógica para essa afirmação é:",
    "options": [
      "A) Nenhum funcionário público é concursado.",
      "B) Nenhum concursado é funcionário público.",
      "C) Não existe funcionário público que não seja concursado.",
      "D) Existe funcionário público que não é concursado.",
      "E) Todo concursado é funcionário público."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. 'Nenhum' é a universal negativa contrária, e não a contraditória.",
      "Incorreta. Inverte e utiliza quantificador universal negativo.",
      "Incorreta. 'Não existe quem não seja' equivale logicamente à afirmação de que todos são (proposição equivalente, não negação).",
      "Correta. A negação de uma proposição universal afirmativa (Todo A é B) é a particular negativa (Algum/Existe A que não é B).",
      "Incorreta. É a proposição recíproca, sem relação de negação."
    ],
    "generalExplanation": "No quadrado lógico de oposição aristotélica, a contraditória da proposição do tipo A ('Todo S é P') é a proposição do tipo O ('Algum/Existe S que não é P').",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação de Quantificador Universal",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_268",
    "text": "Em certa empresa são comprovadamente verdadeiras as seguintes afirmações:\n• Qualquer gerente é mulher.\n• Nenhuma mulher sabe trocar uma lâmpada.\nÉ correto concluir logicamente que, nessa empresa:",
    "options": [
      "A) Algum gerente é homem.",
      "B) Há gerente que sabe trocar uma lâmpada.",
      "C) Todo homem sabe trocar uma lâmpada.",
      "D) Todas as mulheres são gerentes.",
      "E) Nenhum gerente sabe trocar uma lâmpada."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. A primeira premissa assegura que o conjunto dos gerentes está totalmente contido no conjunto das mulheres.",
      "Incorreta. Como nenhuma mulher sabe trocar lâmpada e todo gerente é mulher, é impossível haver gerente com essa habilidade.",
      "Incorreta. As premissas nada afirmam sobre as habilidades dos homens.",
      "Incorreta. A inclusão é de gerentes em mulheres, e não de mulheres em gerentes (falácia da conversão ilícita).",
      "Correta. Temos Gerentes ⊆ Mulheres e Mulheres ∩ Sabem_Trocar_Lâmpada = ∅. Logo, Gerentes ∩ Sabem_Trocar_Lâmpada = ∅, o que significa que 'Nenhum gerente sabe trocar uma lâmpada'."
    ],
    "generalExplanation": "Por silogismo categórico em diagramas lógicos: se o conjunto G está contido em M, e M é disjunto de L, então necessariamente G também é disjunto de L ('Nenhum G é L').",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Diagramas Lógicos e Silogismo",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_269",
    "text": "Considere verdadeiras as seguintes premissas:\nI - Existem empresários professores;\nII - Todos os ricos são empresários;\nIII - Todos os matemáticos são SOMENTE professores;\nIV - Existem engenheiros que são professores.\nCom base nessas premissas, é CORRETO afirmar com certeza absoluta que:",
    "options": [
      "A) Nenhum matemático é rico ou engenheiro.",
      "B) Existem matemáticos que são engenheiros ou empresários.",
      "C) Existem engenheiros matemáticos ou ricos.",
      "D) Existem engenheiros matemáticos e empresários.",
      "E) Nenhum engenheiro é empresário e professor."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A premissa III impõe que os matemáticos exercem unicamente a docência (pertencem exclusivamente à profissão de professor). Se um matemático fosse rico, seria empresário (premissa II), o que violaria a exclusividade de ser somente professor. Se fosse engenheiro, também violaria essa cláusula de exclusividade. Portanto, nenhum matemático pode ser rico nem engenheiro.",
      "Incorreta. Contradiz frontalmente a premissa de que matemáticos são SOMENTE professores.",
      "Incorreta. Não há qualquer garantia de que existam engenheiros matemáticos.",
      "Incorreta. Não é possível afirmar a existência de engenheiros matemáticos.",
      "Incorreta. As premissas não impedem que uma pessoa seja concomitantemente engenheira, empresária e professora."
    ],
    "generalExplanation": "A cláusula restritiva 'são SOMENTE professores' confina o conjunto dos Matemáticos estritamente ao atributo Professor, tornando-o disjunto de qualquer outra categoria profissional (como Engenheiro) ou de categorias que impliquem outras atividades (como Rico, que implica Empresário).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Diagramas Lógicos",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_270",
    "text": "Considere FALSA a afirmação (I) e VERDADEIRA a afirmação (II):\nI. Todos os alunos estudam.\nII. Alguns professores estudam.\nSendo assim, é logicamente correto concluir que:",
    "options": [
      "A) Os alunos que estudam são professores.",
      "B) Qualquer professor que estuda é aluno.",
      "C) Existe aluno que não estuda.",
      "D) Todos os professores estudam.",
      "E) Qualquer aluno estuda."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. As premissas não estabelecem vínculo de identidade entre alunos que estudam e professores.",
      "Incorreta. Não há dados para afirmar que professores estudantes sejam alunos.",
      "Correta. Se a proposição universal afirmativa 'Todos os alunos estudam' é FALSA, a sua negação contraditória é obrigatoriamente VERDADEIRA. A negação de 'Todos os alunos estudam' é 'Existe aluno que não estuda'.",
      "Incorreta. A premissa II afirma apenas que 'alguns' professores estudam, não permitindo generalizar para todos.",
      "Incorreta. 'Qualquer aluno estuda' equivale à proposição I, que foi dada como falsa."
    ],
    "generalExplanation": "Dizer que a sentença universal afirmativa ∀x (Aluno(x) → Estuda(x)) é Falsa implica que a sua negação lógica ∃x (Aluno(x) ∧ ¬Estuda(x)) é Verdadeira ('Existe aluno que não estuda').",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação de Quantificador Universal",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_271",
    "text": "Considere uma representação por diagramas lógicos dos conjuntos A, B, C e D em que todas as regiões e interseções contêm elementos. A partir das relações de inclusão e pertinência dos conjuntos, é correto afirmar que:",
    "options": [
      "A) Todos os elementos de A, que não são elementos de B, são elementos de C ou de D.",
      "B) Não há elemento de B que seja elemento de três conjuntos ao mesmo tempo.",
      "C) Todos os elementos de C, que não são elementos apenas de C, ou são também elementos de B ou são também elementos de D.",
      "D) Há elemento de B que seja elemento de outros três conjuntos além do próprio B.",
      "E) Qualquer elemento de D, que não é elemento de B, é também elemento de C ou elemento de A."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. A região exclusiva de A (fora de B, C e D) possui elementos conforme a hipótese de preenchimento.",
      "Incorreta. As interseções triplas contêm elementos pelo enunciado.",
      "Incorreta. Não reflete as relações de cobertura topológica das interseções.",
      "Incorreta. Não há elemento quádruplo comum a todos os conjuntos fora das restrições do modelo.",
      "Correta. Pela partição do conjunto D fora de B (D \\ B), todos os seus elementos residem nas interseções com C, com A ou em ambas, garantindo que qualquer elemento de D que não esteja em B pertence a C ou a A."
    ],
    "generalExplanation": "A análise de diagramas de Venn de múltiplos conjuntos exige a identificação precisa das regiões complementares e das uniões de interseções parciais (D ∩ Bᶜ ⊆ A ∪ C).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Diagramas Lógicos e Teoria dos Conjuntos",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_272",
    "text": "Considere as seguintes afirmações verdadeiras:\n1. Todos os administradores são analistas.\n2. Alguns programadores são administradores, mas não todos.\nA partir dessas afirmações, é correto concluir que:",
    "options": [
      "A) Os programadores que são analistas também são administradores.",
      "B) Os administradores que não são programadores também não são analistas.",
      "C) Os programadores que são administradores também são analistas.",
      "D) Os administradores que são analistas também são programadores.",
      "E) Os programadores que não são analistas também são administradores."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Podem existir programadores analistas que não sejam administradores.",
      "Incorreta. TODO administrador é analista por definição da primeira premissa.",
      "Correta. Como todo administrador é analista (Administradores ⊆ Analistas), qualquer indivíduo que pertença ao conjunto dos administradores — inclusive aqueles que também são programadores — pertence necessariamente ao conjunto dos analistas.",
      "Incorreta. Nem todo administrador precisa ser programador (apenas alguns programadores são administradores).",
      "Incorreta. Se um indivíduo não é analista, ele jamais poderá ser administrador (contrapositiva: não analista → não administrador)."
    ],
    "generalExplanation": "Sendo Adm ⊆ Analistas, temos (Prog ∩ Adm) ⊆ Adm ⊆ Analistas. Portanto, todo elemento que é simultaneamente Programador e Administrador é obrigatoriamente Analista.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Diagramas Lógicos e Silogismo",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_273",
    "text": "Considere as proposições verdadeiras:\n• Todos os MAGNÂNIMOS são FELIZES.\n• Alguns BENFEITORES são MAGNÂNIMOS, mas não todos.\n• Há FELIZ que é BENFEITOR.\nA partir dessas afirmações, é logicamente correto afirmar que:",
    "options": [
      "A) Qualquer BENFEITOR é FELIZ.",
      "B) Os MAGNÂNIMOS que não são FELIZES são BENFEITORES.",
      "C) Os BENFEITORES que são MAGNÂNIMOS não são FELIZES.",
      "D) Todos os BENFEITORES que são MAGNÂNIMOS são FELIZES.",
      "E) Os FELIZES que não são MAGNÂNIMOS são BENFEITORES."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Apenas a parcela dos benfeitores que são magnânimos tem garantia imediata de felicidade pelas premissas.",
      "Incorreta. Não existem magnânimos que não sejam felizes (premissa universal: Todos os magnânimos são felizes).",
      "Incorreta. Contradiz diretamente a premissa de que todo magnânimo é feliz.",
      "Correta. Se todo magnânimo é feliz (Magnânimos ⊆ Felizes), qualquer subgrupo dentro dos magnânimos (como os Benfeitores ∩ Magnânimos) estará obrigatoriamente contido no conjunto dos Felizes.",
      "Incorreta. Podem existir pessoas felizes fora dos conjuntos de magnânimos e benfeitores."
    ],
    "generalExplanation": "A regra de inclusão universal determina que qualquer subconjunto de Magnânimos (neste caso, a interseção Benfeitores ∩ Magnânimos) é automaticamente subconjunto de Felizes.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Diagramas Lógicos e Silogismo",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_274",
    "text": "Considere verdadeiras as afirmações a seguir:\nI. Todos os funcionários são economistas.\nII. Há economista que também é administrador.\nA partir dessas afirmações, assinale a alternativa correta:",
    "options": [
      "A) Os administradores que não são economistas são funcionários.",
      "B) Qualquer economista é funcionário.",
      "C) É possível que haja funcionário que não seja economista.",
      "D) Os administradores que são economistas são funcionários.",
      "E) Os funcionários que são administradores são economistas."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. Se alguém não é economista, jamais poderá ser funcionário (contrapositiva da premissa I: ~Economista → ~Funcionário).",
      "Incorreta. A premissa afirma que Funcionários ⊆ Economistas, e não a recíproca.",
      "Incorreta. A premissa I garante que TODO funcionário é economista.",
      "Incorreta. Podem existir administradores economistas que não trabalhem como funcionários.",
      "Correta. Como TODO funcionário é economista (Funcionários ⊆ Economistas), qualquer funcionário — mesmo aquele que exerça cumulativamente o papel de administrador — é obrigatoriamente economista."
    ],
    "generalExplanation": "Dado que Funcionários ⊆ Economistas, a interseção (Funcionários ∩ Administradores) está estritamente contida em Funcionários e, portanto, em Economistas.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Diagramas Lógicos e Silogismo",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_275",
    "text": "Considere as afirmações:\nI. Todos que possuem a habilidade C possuem também a habilidade A, mas nem todos os que possuem a habilidade C possuem a habilidade B.\nII. Não existe quem possua a habilidade B que não possua a habilidade A (ou seja: todo B possui A).\nA partir dessas afirmações, é correto concluir que, dentre as pessoas descritas:",
    "options": [
      "A) Se alguém possui a habilidade A, então esse alguém também possui a habilidade B.",
      "B) Se alguém possui a habilidade C, então esse alguém também possui a habilidade B.",
      "C) Se alguém possui as habilidades A e B, então esse alguém também possui a habilidade C.",
      "D) Se alguém não possui a habilidade B, então esse alguém possui a habilidade C.",
      "E) Se alguém possui as habilidades B e C, então esse alguém também possui a habilidade A."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. Ter A não implica ter B (B ⊆ A não significa A ⊆ B).",
      "Incorreta. A premissa I declara expressamente que nem todo C possui B.",
      "Incorreta. Possuir A e B não obriga a posse da habilidade C.",
      "Incorreta. Não possuir B não gera implicação quanto a possuir C.",
      "Correta. Como C ⊆ A (todo C tem A) e B ⊆ A (todo B tem A), qualquer indivíduo que possua C (ou que possua B, ou ambos B e C) terá necessariamente a habilidade A."
    ],
    "generalExplanation": "Como tanto o conjunto B quanto o conjunto C estão contidos no conjunto A (B ⊆ A e C ⊆ A), a interseção (B ∩ C) está duplamente contida em A. Logo, quem tem B e C possui obrigatoriamente a habilidade A.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Diagramas Lógicos e Silogismo",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_276",
    "text": "Considere as premissas:\n1. Todo candidato bem preparado faz uma boa prova.\n2. Alguns candidatos que fazem boa prova são aprovados no concurso.\nA partir dessas afirmações, é correto concluir que:",
    "options": [
      "A) Alguns candidatos não bem preparados fazem uma boa prova.",
      "B) Qualquer candidato bem preparado é aprovado no concurso.",
      "C) Há candidato aprovado no concurso que fez uma boa prova.",
      "D) Alguns candidatos não bem preparados são aprovados no concurso.",
      "E) Alguns candidatos bem preparados não fazem uma boa prova."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Não há informação dedutível sobre os candidatos não bem preparados.",
      "Incorreta. Estar bem preparado garante fazer boa prova, mas fazer boa prova não garante aprovação a todos (apenas a alguns).",
      "Correta. A proposição particular afirmativa 'Alguns candidatos que fazem boa prova são aprovados' goza da propriedade da comutatividade lógica e de conjuntos (A ∩ B = B ∩ A), equivalendo a 'Há candidato aprovado no concurso que fez uma boa prova'.",
      "Incorreta. As premissas não autorizam inferências sobre candidatos despreparados.",
      "Incorreta. Contradiz diretamente a premissa universal 1."
    ],
    "generalExplanation": "A proposição existencial 'Alguns A são B' (∃x: A(x) ∧ B(x)) é logicamente equivalente a 'Alguns B são A' (∃x: B(x) ∧ A(x)) devido à comutatividade da conjunção e da interseção de conjuntos.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Diagramas Lógicos e Silogismo",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_277",
    "text": "Um economista afirmou em pronunciamento que “se os impostos não sobem, então a receita fiscal não cresce”. Do ponto de vista da lógica proposicional, uma sentença logicamente equivalente a essa é:",
    "options": [
      "A) Se a receita fiscal cresce, então os impostos sobem.",
      "B) Se os impostos sobem, então a receita fiscal cresce.",
      "C) Se a receita fiscal não cresce, então os impostos não sobem.",
      "D) Ou o imposto não sobe, ou a receita fiscal cresce.",
      "E) O imposto não sobe e a receita fiscal cresce."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A equivalência pela regra da contrapositiva estabelece que (P → Q) ≡ (¬Q → ¬P). Sendo P = 'impostos não sobem' e Q = 'receita não cresce', temos ¬Q = 'receita fiscal cresce' e ¬P = 'impostos sobem'. Portanto: 'Se a receita fiscal cresce, então os impostos sobem'.",
      "Incorreta. Trata-se da inversa (¬P → ¬Q), que não preserva a equivalência lógica.",
      "Incorreta. Trata-se da recíproca (Q → P), sem as devidas negações.",
      "Incorreta. A disjunção exclusiva ou inclusiva incorreta não equivale à condicional.",
      "Incorreta. A conjunção P ∧ ¬Q é a negação da condicional, e não a sua equivalência."
    ],
    "generalExplanation": "A contrapositiva de uma condicional (P → Q) é (~Q → ~P). Invertem-se as posições do antecedente e do consequente e negam-se ambos os termos.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Equivalência e Contraposição",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_278",
    "text": "Considere a sentença: “Se cometi um crime, então serei condenado.” Uma sentença logicamente equivalente à sentença dada é:",
    "options": [
      "A) Não cometi um crime ou serei condenado.",
      "B) Se não cometi um crime, então não serei condenado.",
      "C) Se eu for condenado, então cometi um crime.",
      "D) Cometi um crime e serei condenado.",
      "E) Não cometi um crime e não serei condenado."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Aplica-se a equivalência da condicional pela disjunção (regra NEyMA): (P → Q) ≡ (¬P ∨ Q). Sendo P = 'cometi um crime' e Q = 'serei condenado', a negação de P é 'não cometi um crime', mantendo-se Q: 'Não cometi um crime ou serei condenado'.",
      "Incorreta. Trata-se da falácia da negação do antecedente (~P → ~Q).",
      "Incorreta. Trata-se da falácia da afirmação do consequente (Q → P).",
      "Incorreta. Conjunção não é logicamente equivalente à condicional.",
      "Incorreta. Conjunção de duas negações não equivale à condicional."
    ],
    "generalExplanation": "A condicional (P → Q) é logicamente equivalente à disjunção inclusiva (¬P ∨ Q) ('Nega a primeira OU Mantém a segunda'). Ambas possuem idêntica tabela-verdade (V, F, V, V).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Equivalência da Condicional",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_279",
    "text": "Uma sentença equivalente da afirmação “Se eu estudei, então tirei uma boa nota no concurso” está expressa na alternativa:",
    "options": [
      "A) Não estudei e não tirei uma boa nota no concurso.",
      "B) Se eu não tirei uma boa nota no concurso, então não estudei.",
      "C) Se eu não estudei, então não tirei uma boa nota no concurso.",
      "D) Se eu tirei uma boa nota no concurso, então estudei.",
      "E) Estudei e tirei uma boa nota no concurso."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Conjunção não equivale a condicional.",
      "Correta. Pela regra da contrapositiva (P → Q ≡ ¬Q → ¬P): P = 'eu estudei', Q = 'tirei uma boa nota'. Invertendo e negando ambos os termos, obtém-se: 'Se eu não tirei uma boa nota no concurso, então não estudei'.",
      "Incorreta. Inversa (~P → ~Q) sem inversão da ordem.",
      "Incorreta. Recíproca (Q → P) sem negação dos termos.",
      "Incorreta. Conjunção aditiva."
    ],
    "generalExplanation": "A contrapositiva (¬Q → ¬P) é a forma padrão mais cobrada em concursos para a equivalência lógica de proposições condicionais simples.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Equivalência e Contraposição",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_280",
    "text": "Dizer que “Pedro não é pedreiro ou Paulo é paulista” é, do ponto de vista da equivalência lógica, o mesmo que afirmar que:",
    "options": [
      "A) Se Pedro é pedreiro, então Paulo é paulista.",
      "B) Se Paulo é paulista, então Pedro é pedreiro.",
      "C) Se Pedro não é pedreiro, então Paulo é paulista.",
      "D) Se Pedro é pedreiro, então Paulo não é paulista.",
      "E) Se Pedro não é pedreiro, então Paulo não é paulista."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A equivalência da disjunção inclusiva para a condicional é dada por (¬P ∨ Q) ≡ (P → Q). Sendo ¬P = 'Pedro não é pedreiro' (logo P = 'Pedro é pedreiro') e Q = 'Paulo é paulista', a transformação resulta na condicional 'Se Pedro é pedreiro, então Paulo é paulista'.",
      "Incorreta. Inverte os papéis de antecedente e consequente.",
      "Incorreta. Não negou o primeiro termo ao transformá-lo em antecedente da condicional.",
      "Incorreta. Negou indevidamente o consequente da condicional.",
      "Incorreta. Manteve a negação no antecedente e inseriu negação no consequente."
    ],
    "generalExplanation": "A relação (¬P ∨ Q) ≡ (P → Q) decorre diretamente da comutatividade e da tabela-verdade da implicação lógica. Para converter uma disjunção (A ∨ B) em condicional, nega-se a primeira parte e mantém-se a segunda (~A → B).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Equivalência da Condicional",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_281",
    "text": "Considere o seguinte trecho argumentativo: “A estabilidade econômica é fundamental para o investimento estrangeiro. O Brasil terá um aumento de investimentos no próximo semestre, visto que o país alcançou a estabilidade econômica desejada.” Assinale a alternativa que identifica corretamente a conclusão (tese) desse argumento:",
    "options": [
      "A) A estabilidade econômica é fundamental para o investimento estrangeiro.",
      "B) O país alcançou a estabilidade econômica desejada.",
      "C) O Brasil terá um aumento de investimentos no próximo semestre.",
      "D) O investimento estrangeiro depende exclusivamente da estabilidade cambial.",
      "E) A estabilidade econômica e o aumento de investimentos são fatos completamente isolados."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Esta sentença atua como a premissa maior (regra geral que fundamenta o raciocínio).",
      "Incorreta. Trata-se de uma premissa factual (fato observado), introduzida pela locução explicativa/causal 'visto que'.",
      "Correta. A conclusão (tese a ser demonstrada) é que o Brasil terá aumento de investimentos. As outras duas orações funcionam como premissas que sustentam essa afirmação (Premissa 1: Estabilidade gera investimentos; Premissa 2: O Brasil atingiu a estabilidade; Conclusão: Portanto, o Brasil terá aumento de investimentos).",
      "Incorreta. Extrapola o texto e não representa a estrutura lógica da conclusão.",
      "Incorreta. O argumento afirma exatamente uma relação de causa e efeito/dependência entre os dois fatores."
    ],
    "generalExplanation": "Na estrutura de um argumento lógico, as premissas fornecem as razões ou evidências (muitas vezes introduzidas por conectivos causais como 'visto que', 'já que', 'porque'), enquanto a conclusão é a proposição sustentada por essas premissas (que aceita o conectivo 'portanto').",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Estrutura Lógica e Argumentação",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_282",
    "text": "Analise a seguinte proposição composta: “O candidato estuda, mas não passa no concurso.” Do ponto de vista da lógica proposicional, essa sentença representa formalmente uma:",
    "options": [
      "A) Disjunção inclusiva, que será falsa apenas se ambas as proposições simples forem falsas.",
      "B) Condicional, que será falsa se o candidato estudar e passar no concurso.",
      "C) Conjunção, que será verdadeira apenas se o candidato estudar e simultaneamente não passar no concurso.",
      "D) Bicondicional, que exige a equivalência de verdade entre ambas as partes para ser válida.",
      "E) Disjunção exclusiva, indicando que o candidato não pode estudar e não passar ao mesmo tempo."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. A conjunção adversativa 'mas' não possui o operador lógico de disjunção ('ou').",
      "Incorreta. O 'mas' não estabelece relação de implicação condicional ('se... então').",
      "Correta. Na lógica proposicional, a conjunção adversativa 'mas' (assim como 'porém', 'contudo', 'todavia') tem valor lógico de Conjunção (operador ∧ / 'e'). A proposição composta (P ∧ Q) só é logicamente verdadeira quando ambas as proposições simples que a compõem são verdadeiras ao mesmo tempo.",
      "Incorreta. Não há estrutura de bi-implicação mútua ('se e somente se').",
      "Incorreta. Não se trata de alternância exclusiva ('ou... ou')."
    ],
    "generalExplanation": "No cálculo proposicional, conjunções adversativas da língua portuguesa (como 'mas', 'embora', 'porém') são formalizadas pelo conectivo lógico de conjunção (∧), exigindo a verdade cumulativa de ambas as proposições para que a sentença composta seja verdadeira.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Proposições Compostas e Conectivos",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_283",
    "text": "Em um problema de lógica forense, o suspeito Daniel afirma: “Eu sou inocente e o perito é culpado.” Sabendo que Daniel é um mentiroso contumaz (sempre mente em seus depoimentos), a negação lógica de sua declaração, que representa a verdade dos fatos, é:",
    "options": [
      "A) Daniel é culpado e o perito é inocente.",
      "B) Daniel é culpado ou o perito é inocente.",
      "C) Daniel é inocente ou o perito é culpado.",
      "D) Daniel é culpado e o perito é culpado.",
      "E) Daniel é inocente e o perito é inocente."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Dizer que ambos mudaram de status com o conectivo 'e' é apenas um dos casos particulares em que a negação é verdadeira, mas não a sua negação lógica rigorosa.",
      "Correta. Pela 1ª Lei de De Morgan, a negação de uma conjunção ¬(P ∧ Q) equivale à disjunção das negações (¬P ∨ ¬Q). Sendo P = 'Daniel é inocente' e Q = 'perito é culpado', a negação resulta em: 'Daniel é culpado OU o perito é inocente'.",
      "Incorreta. Apenas trocou o conectivo sem negar as proposições simples.",
      "Incorreta. Não realizou a negação da segunda proposição simples nem a troca do conectivo.",
      "Incorreta. Manteve a estrutura de conjunção aditiva."
    ],
    "generalExplanation": "Pela Lei de De Morgan: ¬(P ∧ Q) ≡ (¬P ∨ ¬Q). Para negar uma conjunção ('e'), nega-se a primeira proposição, troca-se o conectivo 'e' pelo 'ou', e nega-se a segunda proposição.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação de Proposições Compostas (Leis de De Morgan)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_284",
    "text": "Três amigos — Alberto, Breno e Caio — exercem as profissões de Auditor, Analista e Técnico, não necessariamente nessa ordem. Eles residem em cidades diferentes: São Paulo, Rio de Janeiro e Belo Horizonte. Sabe-se que:\n1. O Auditor vive em Belo Horizonte.\n2. Alberto é Analista.\n3. Caio não vive no Rio de Janeiro.\nCom base nessas informações e na técnica de associação lógica, é correto afirmar que:",
    "options": [
      "A) Breno é o Auditor e vive em Belo Horizonte.",
      "B) Alberto vive em Belo Horizonte e é Técnico.",
      "C) Caio é o Auditor e vive em São Paulo.",
      "D) Breno vive no Rio de Janeiro e é Técnico.",
      "E) Alberto vive em Belo Horizonte e Caio é o Auditor."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Pistas: (2) Alberto é Analista; logo, Alberto não é Auditor e não vive em BH (pois o Auditor vive em BH pela pista 1). As opções para Auditor são Breno ou Caio. (3) Caio não vive no Rio. Se Caio fosse o Auditor, viveria em BH; então Breno (Técnico) viveria no Rio e Alberto (Analista) viveria em SP. Mas se Breno for o Auditor (BH), Caio (Técnico) não vive no Rio, logo vive em SP, e Alberto (Analista) vive no Rio. Analisando as alternativas, a única associação unívoca e consistente apresentada é 'Breno é o Auditor e vive em Belo Horizonte'.",
      "Incorreta. Alberto é Analista (pista 2) e quem vive em BH é o Auditor (pista 1).",
      "Incorreta. Se Caio fosse o Auditor, ele obrigatoriamente viveria em BH (pista 1), e não em SP.",
      "Incorreta. Se Breno for Auditor em BH, ele não vive no Rio.",
      "Incorreta. Alberto não pode viver em BH porque o morador de BH é o Auditor, e Alberto é Analista."
    ],
    "generalExplanation": "Em problemas de associação lógica com matrizes/tabelas de correspondência biunívoca, o cruzamento das informações elimina hipóteses contraditórias, confirmando Breno como Auditor em Belo Horizonte.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Associação Lógica",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_285",
    "text": "Em um problema de associação lógica, consta a seguinte pista: “A pessoa que nasceu em Recife convidou o Sr. Lima e o Sr. Ferreira para um jantar em sua casa.” Entre as quatro pessoas investigadas estão Ana, Beatriz, Carlos e Daniel, sendo que os Srs. Lima e Ferreira são dois desses investigados. A partir dessa pista e da lógica de exclusão mútua, é correto deduzir que:",
    "options": [
      "A) O Sr. Lima nasceu na cidade de Recife.",
      "B) A pessoa que nasceu em Recife é, necessariamente, Carlos ou Daniel.",
      "C) Ana e Beatriz são os convidados de sobrenome Lima e Ferreira.",
      "D) O Sr. Ferreira não nasceu em Recife, mas o Sr. Lima necessariamente nasceu em Recife.",
      "E) A pessoa que nasceu em Recife não é o Sr. Lima, não é o Sr. Ferreira e pode ser uma mulher (Ana ou Beatriz)."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. O Sr. Lima foi convidado pelo anfitrião de Recife; quem convida não é a mesma pessoa que é convidada.",
      "Incorreta. Os Srs. Lima e Ferreira são do gênero masculino ('Sr.'), correspondendo a Carlos e Daniel (os convidados). Logo, a pessoa de Recife não é nenhum deles.",
      "Incorreta. O pronome de tratamento 'Sr.' aplica-se a indivíduos do sexo masculino.",
      "Incorreta. Nenhum dos dois convidados (Lima ou Ferreira) pode ser a pessoa de Recife.",
      "Correta. Aplica-se o princípio da exclusão pelo convite (o anfitrião é distinto de seus convidados Lima e Ferreira) e a dedução nominal de gênero ('Sr.' indica homens, liberando a naturalidade de Recife para uma das mulheres, Ana ou Beatriz)."
    ],
    "generalExplanation": "Em enunciados lógicos, 'A convidou B e C' estabelece imediatamente que A ≠ B e A ≠ C (três indivíduos distintos). Os marcadores de tratamento ('Sr.') identificam o gênero e viabilizam o descarte imediato dos nomes masculinos para a posição do anfitrião.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Associação Lógica",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_286",
    "text": "Três amigos — Alberto, Bruno e Carlos — possuem automóveis de cores distintas: Azul, Branco e Cinza, não necessariamente nessa ordem. Eles residem em cidades diferentes: São Paulo, Rio de Janeiro e Belo Horizonte. Sabe-se que:\n1. O dono do carro cinza mora em Belo Horizonte.\n2. Alberto possui o carro azul.\n3. Bruno não mora em São Paulo.\nCom base nessas informações, é correto afirmar que:",
    "options": [
      "A) Bruno mora em Belo Horizonte e possui o carro cinza.",
      "B) Carlos mora em São Paulo e possui o carro branco.",
      "C) Alberto mora no Rio de Janeiro e Bruno possui o carro branco.",
      "D) O carro de Carlos é cinza e Alberto mora em São Paulo.",
      "E) Bruno possui o carro azul e mora no Rio de Janeiro."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Análise passo a passo: 1) Pela pista 2, Alberto tem o carro Azul. Logo, o carro Cinza pertence a Bruno ou Carlos. 2) Pela pista 1, quem tem o carro Cinza mora em BH. Logo, Alberto não mora em BH. 3) Pela pista 3, Bruno não mora em SP. Como Bruno não mora em SP e Alberto não mora em BH, se Bruno morar em BH (carro Cinza), sobra SP para Alberto (carro Azul) e RJ para Carlos (carro Branco). Essa configuração atende perfeitamente a todas as premissas: Alberto (Azul, SP), Bruno (Cinza, BH), Carlos (Branco, RJ).",
      "Incorreta. Carlos mora no Rio de Janeiro, pois São Paulo é ocupada por Alberto.",
      "Incorreta. Alberto mora em São Paulo e Bruno tem o carro cinza.",
      "Incorreta. O carro de Carlos é branco, e o de Bruno é cinza.",
      "Incorreta. O carro azul pertence a Alberto (pista 2)."
    ],
    "generalExplanation": "Montando a tabela de associação: Alberto = Azul (SP), Bruno = Cinza (BH), Carlos = Branco (RJ). Todas as pistas são plenamente satisfeitas sem contradições.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Associação Lógica",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_287",
    "text": "Em questões de raciocínio lógico que envolvem problemas de “Associação com Ordenação Linear ou Espacial” (como pessoas em uma fila, andares de um edifício ou classificação em provas), uma técnica de resolução consolidada consiste em:",
    "options": [
      "A) Desconsiderar a tabela de associação lógica e trabalhar exclusivamente com estimativas aleatórias.",
      "B) Tratar pistas de posicionamento relativo rígido (como “imediatamente acima” ou “vizinho à direita”) como blocos compactos fixos a serem testados nas posições possíveis.",
      "C) Assumir como premissa verdadeira que o primeiro nome citado no enunciado ocupa obrigatoriamente a primeira posição.",
      "D) Resolver apenas os problemas que possuam afirmações falsas, descartando premissas diretas.",
      "E) Aplicar o princípio de exclusão apenas aos nomes próprios, permitindo repetições nas posições ordinais."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O método analítico exige estruturação sistemática dos dados.",
      "Correta. Em problemas de ordenação, relações de adjacência direta ('imediatamente antes/depois', 'andar consecutivo') formam 'blocos unitários' (ex: [C, B] ou [A, X, B]) que reduzem drasticamente o espaço de busca na grade de posições.",
      "Incorreta. A ordem em que os nomes aparecem no texto é arbitrária e não indica sua posição ordinal.",
      "Incorreta. Problemas de ordenação frequentemente operam com premissas 100% verdadeiras sem envolver mentirosos.",
      "Incorreta. A correspondência entre elementos e posições é biunívoca (cada posição é ocupada por um único elemento)."
    ],
    "generalExplanation": "A técnica dos 'blocos fixos' é fundamental para ordenação linear/espacial: agrupa-se os elementos com posições relativas travadas (ex: A imediatamente acima de B -> bloco [A/B]) e desloca-se esse bloco pelas posições válidas do diagrama.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Ordenação Linear e Espacial",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_288",
    "text": "Em uma investigação sobre violação de segurança digital, três técnicos (A, B e C) são interrogados. O auditor sabe com certeza que o único culpado sempre diz a verdade e que os inocentes sempre mentem. Os depoimentos foram:\n• Técnico A: “B é inocente.”\n• Técnico B: “C é o culpado.”\n• Técnico C: “Eu sou o culpado.”\nCom base nessas regras lógicas, quem é o culpado?",
    "options": [
      "A) Técnico A.",
      "B) Técnico B.",
      "C) Técnico C.",
      "D) Não é possível determinar o culpado com os dados fornecidos.",
      "E) Os Técnicos A e B são culpados conjuntamente."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Teste de hipóteses: 1) Se C fosse o culpado: C diria a verdade ('Eu sou o culpado' = V), mas B (inocente) teria dito 'C é o culpado', o que seria verdade (contradição, pois inocente mente). 2) Se B fosse o culpado: B diria a verdade ('C é o culpado' = V), o que implicaria que C também é culpado (contradição com a existência de culpado único). 3) Se A for o culpado: A diz a verdade ('B é inocente' = V). B (inocente) mente ao dizer 'C é culpado' (logo C não é culpado). C (inocente) mente ao dizer 'Eu sou o culpado' (logo C não é culpado). Todos os relatos ficam perfeitamente coerentes. Portanto, o culpado é A.",
      "Incorreta. Se B fosse culpado, criaria contradição de termos dois culpados.",
      "Incorreta. Se C fosse culpado, o depoimento de B (inocente) seria verdadeiro, o que viola a regra.",
      "Incorreta. O teste sistemático de hipóteses determina unicamente o Técnico A como culpado.",
      "Incorreta. O enunciado define a existência de um único culpado."
    ],
    "generalExplanation": "No problema clássico de 'Verdades e Mentiras' com regra invertida (culpado diz a verdade e inocente mente), testa-se a suposição de culpa para cada indivíduo: apenas a hipótese de A ser culpado satisfaz todos os valores lógicos sem contradições.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Problemas de Verdades e Mentiras",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_289",
    "text": "Considere uma situação em que o investigado D apresenta o depoimento: “Eu sou inocente E o suspeito E é culpado.” Se o inquérito comprovar conclusivamente que a declaração feita por D é FALSA (ou seja, D mentiu em seu depoimento), a dedução lógica rigorosa sobre os fatos reais é:",
    "options": [
      "A) D é culpado e E é inocente.",
      "B) D é culpado ou E é inocente (podendo ocorrer ambas as situações).",
      "C) D e E são ambos culpados obrigatoriamente.",
      "D) O depoimento perde qualquer valor e não se pode extrair nenhuma informação lógica.",
      "E) D é necessariamente inocente, mas mentiu com certeza sobre a culpa de E."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A conjunção de negações (¬P ∧ ¬Q) é apenas um dos três casos em que a disjunção é verdadeira, não a sua equivalência lógica completa.",
      "Correta. A proposição declarada é uma conjunção (P ∧ Q), em que P = 'D é inocente' e Q = 'E é culpado'. Dizer que essa conjunção é falsa equivale logicamente a afirmar que sua negação é verdadeira: ¬(P ∧ Q) ≡ (¬P ∨ ¬Q), ou seja, 'D é culpado OU E é inocente' (disjunção inclusiva).",
      "Incorreta. Não há obrigatoriedade de que ambos sejam culpados.",
      "Incorreta. A falsidade de uma proposição composta fornece informação lógica precisa através da tabela-verdade.",
      "Incorreta. Não se pode deduzir que D é necessariamente inocente."
    ],
    "generalExplanation": "A negação da conjunção (P ∧ Q) = Falso resulta na disjunção (¬P ∨ ¬Q) = Verdadeiro pelas Leis de De Morgan: basta que ao menos uma das parcelas seja falsa para invalidar o depoimento conjunto.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Lógica Proposicional e Negação",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_290",
    "text": "Em um edifício residencial de 6 andares (numerados de 1º a 6º), moram um Médico, um Engenheiro, um Advogado, um Arquiteto, um Dentista e um Professor, residindo exatamente um profissional em cada andar. Sabe-se que:\n1. O Médico mora dois andares acima do Engenheiro (Médico = Engenheiro + 2).\n2. O Advogado mora no 2º andar.\n3. O Arquiteto mora imediatamente abaixo do Dentista.\n4. O Professor mora em um andar par.\n5. O Engenheiro não mora no 1º andar.\nEm qual andar mora o Médico?",
    "options": [
      "A) 3º andar",
      "B) 4º andar",
      "C) 5º andar",
      "D) 6º andar",
      "E) 2º andar"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Se o Médico morasse no 3º andar, o Engenheiro moraria no 1º andar (3 - 2 = 1), o que viola frontalmente a pista 5.",
      "Incorreta. Se o Médico morasse no 4º andar, o Engenheiro moraria no 2º andar (4 - 2 = 2), mas o 2º andar já está fixado para o Advogado (pista 2).",
      "Correta. Dedução: Advogado = 2º andar. O Engenheiro (E) não está no 1º (pista 5) nem no 2º (Advogado). Logo, E só pode estar no 3º ou no 4º andar. Se E estivesse no 4º andar, o Médico (M) estaria no 6º andar (4 + 2 = 6). Nesse cenário, os três andares pares (2º, 4º e 6º) estariam ocupados por Advogado, Engenheiro e Médico, não restando nenhum andar par livre para o Professor (pista 4). Portanto, o Engenheiro deve morar no 3º andar, o que posiciona o Médico no 5º andar (3 + 2 = 5).",
      "Incorreta. Conforme demonstrado, Médico no 6º andar ocuparia todos os andares pares, violando a condição do Professor.",
      "Incorreta. O 2º andar é ocupado pelo Advogado (pista 2)."
    ],
    "generalExplanation": "Analisando a paridade dos andares e as distâncias relativas: Advogado = 2º, Engenheiro = 3º, Médico = 5º. Isso deixa o 4º ou 6º andar livre para o Professor, e os andares 1º e 6º/4º para o bloco Arquiteto/Dentista.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Associação Lógica e Ordenação",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_291",
    "text": "Seis pessoas (P1, P2, P3, P4, P5 e P6) estão sentadas ao redor de uma mesa redonda com 6 cadeiras equidistantes, numeradas de 1 a 6 no sentido horário. Sabe-se que:\n• P1 está sentado diametralmente oposto a P4.\n• P2 está sentado imediatamente à direita de P1.\n• P3 está diametralmente oposto a P2.\n• P5 não está sentado ao lado de P4.\nConsiderando essas posições, quem está sentado imediatamente à esquerda de P4?",
    "options": [
      "A) P1",
      "B) P2",
      "C) P3",
      "D) P5",
      "E) P6"
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. P1 está em posição diametralmente oposta a P4, e não adjacente.",
      "Incorreta. P2 está à direita de P1 (oposto a P3).",
      "Incorreta. P3 está diametralmente oposto a P2, o que o posiciona imediatamente à direita de P4.",
      "Incorreta. A regra proíbe expressamente que P5 sente ao lado de P4.",
      "Correta. Mapeando a mesa circular: Seja P1 na posição 1. P4 (oposto) fica na posição 4. P2 (à direita de P1) fica na posição 2. P3 (oposto a P2) fica na posição 5. Como P5 não pode ficar ao lado de P4 (não pode ocupar a posição 3), P5 ocupa obrigatoriamente a posição 6 (entre P1 e P3). Sobra a posição 3 (imediatamente à esquerda de P4) para P6."
    ],
    "generalExplanation": "Na disposição circular de 6 lugares: P1(1), P2(2), P6(3), P4(4), P3(5), P5(6). O indivíduo situado imediatamente à esquerda de P4 (olhando para o centro da mesa) é P6.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Ordenação Circular e Orientação Espacial",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_292",
    "text": "Em uma corrida disputada por 5 atletas (A, B, C, D e E), sem empates, foram registradas as seguintes colocações parciais:\n• O atleta A não venceu a corrida (não foi o 1º colocado).\n• O atleta B cruzou a linha de chegada imediatamente após C (ordem consecutiva: C seguido de B).\n• O atleta D chegou antes de E, mas depois de A (ordem relativa: A ... D ... E).\nQual é a única posição final que o atleta B NÃO pode ter ocupado em nenhuma hipótese válida?",
    "options": [
      "A) 2ª posição",
      "B) 3ª posição",
      "C) 4ª posição",
      "D) 5ª posição",
      "E) 1ª posição"
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. A 2ª posição é plenamente possível para B (por exemplo, se C for o 1º colocado).",
      "Incorreta. A 3ª posição é possível para B (com C em 2º).",
      "Incorreta. A 4ª posição é possível para B (com C em 3º).",
      "Incorreta. A 5ª posição é possível para B (com C em 4º).",
      "Correta. O enunciado afirma categoricamente que 'B chegou imediatamente após C', o que exige que o atleta C tenha chegado antes de B (bloco ordenado [C, B]). Como existe pelo menos um concorrente (C) necessariamente à frente de B, é matematicamente e logicamente impossível que B tenha ocupado a 1ª colocação (vencedor)."
    ],
    "generalExplanation": "Se B chega imediatamente após C, B só pode ocupar posições do 2º ao 5º lugar. A 1ª colocação é terminantemente vedada a B pela existência compulsória de C imediatamente à sua frente.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Ordenação Linear e Classificação",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_293",
    "text": "Atualmente, a soma das idades de dois irmãos, Rodrigo e Marcelo, é de 34 anos. Sabendo que Rodrigo é 4 anos mais velho que Marcelo, qual será o valor da soma das idades de ambos daqui a exatamente 6 anos?",
    "options": [
      "A) 40 anos",
      "B) 44 anos",
      "C) 46 anos",
      "D) 50 anos",
      "E) 52 anos"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Soma de apenas 6 anos ao total, esquecendo que o tempo transcorre para ambos os irmãos.",
      "Incorreta. Erro no cômputo do transcurso temporal.",
      "Correta. A soma atual é 34 anos. Decorridos 6 anos no futuro, Rodrigo terá +6 anos e Marcelo também terá +6 anos. Logo, o acréscimo total na soma das idades será de 6 + 6 = 12 anos. Nova soma = 34 + 12 = 46 anos.",
      "Incorreta. Cálculo incorreto de intervalo.",
      "Incorreta. Não condiz com o acréscimo temporal de dois indivíduos."
    ],
    "generalExplanation": "Em problemas com idades, quando transcorrem N anos no tempo, a soma das idades de um grupo de K pessoas aumenta em exatamente (K × N) anos. Para 2 irmãos e 6 anos: Soma Futura = 34 + (2 × 6) = 46 anos.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Problemas Aritméticos e com Idades",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_294",
    "text": "Uma empresa decidiu distribuir uma bonificação de R$ 5.000,00 entre dois funcionários, de tal forma que um deles receba R$ 800,00 a mais do que o outro. Qual o valor exato que caberá ao funcionário que receberá a MENOR parte?",
    "options": [
      "A) R$ 2.100,00",
      "B) R$ 2.500,00",
      "C) R$ 2.900,00",
      "D) R$ 3.100,00",
      "E) R$ 4.200,00"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Seja x a menor parte. A maior parte será (x + 800). A soma das duas partes totaliza 5.000: x + (x + 800) = 5.000 ⇒ 2x + 800 = 5.000 ⇒ 2x = 4.200 ⇒ x = R$ 2.100,00 (menor parte). A maior parte fica com 2.100 + 800 = R$ 2.900,00.",
      "Incorreta. R$ 2.500,00 seria a divisão simples em metades iguais sem a diferença estabelecida.",
      "Incorreta. R$ 2.900,00 é o valor da MAIOR parte, mas o enunciado pede expressamente a menor.",
      "Incorreta. Valor resultante de erro operacional na equação.",
      "Incorreta. R$ 4.200,00 é a diferença inicial 5000 - 800 antes da divisão por 2."
    ],
    "generalExplanation": "Modelagem por equação do 1º grau: Menor = x, Maior = x + 800. Equação: 2x + 800 = 5000 → 2x = 4200 → x = R$ 2.100,00.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Problemas Aritméticos e Equações do 1º Grau",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_295",
    "text": "Um assistente administrativo comprou pastas e grampeadores para o setor, adquirindo um total de 15 itens e gastando exatamente R$ 110,00. Sabendo que cada pasta custou R$ 5,00 e cada grampeador custou R$ 10,00, a quantidade exata de GRAMPEADORES comprados foi:",
    "options": [
      "A) 5",
      "B) 7",
      "C) 8",
      "D) 10",
      "E) 12"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Se fossem 5 grampeadores (R$ 50,00) e 10 pastas (R$ 50,00), o total seria R$ 100,00.",
      "Correta. Montando o sistema linear: 1) P + G = 15 (total de itens); 2) 5P + 10G = 110 (total financeiro). Da 1ª equação: P = 15 - G. Substituindo na 2ª: 5(15 - G) + 10G = 110 ⇒ 75 - 5G + 10G = 110 ⇒ 5G = 35 ⇒ G = 7 grampeadores. Logo, foram compradas P = 15 - 7 = 8 pastas.",
      "Incorreta. 8 é o número de PASTAS compradas, não de grampeadores.",
      "Incorreta. Se fossem 10 grampeadores (R$ 100,00) e 5 pastas (R$ 25,00), o valor total seria R$ 125,00.",
      "Incorreta. 12 grampeadores custariam R$ 120,00, ultrapassando o orçamento total."
    ],
    "generalExplanation": "Resolução por Sistema de Equações Lineares: P + G = 15 e 5P + 10G = 110. Multiplicando a 1ª por -5: -5P - 5G = -75. Somando à 2ª: 5G = 35 → G = 7 grampeadores.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Sistemas de Equações Lineares do 1º Grau",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_296",
    "text": "A proposição composta “A menina tem olhos azuis ou o menino é loiro” tem como sentença logicamente equivalente:",
    "options": [
      "A) Se o menino é loiro, então a menina tem olhos azuis.",
      "B) Se a menina tem olhos azuis, então o menino é loiro.",
      "C) Se a menina não tem olhos azuis, então o menino é loiro.",
      "D) Não é verdade que se a menina tem olhos azuis, então o menino é loiro.",
      "E) Não é verdade que se o menino é loiro, então a menina tem olhos azuis."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. A sentença Q → P não é equivalente a P ∨ Q (corresponde a ~Q ∨ P, que alteraria os valores lógicos).",
      "Incorreta. A condicional P → Q equivale a ~P ∨ Q, e não a P ∨ Q.",
      "Correta. Pela equivalência fundamental entre condicional e disjunção inclusiva, temos que (A → B) ≡ (~A ∨ B). Invertendo a relação, (P ∨ Q) ≡ (~P → Q) e também (P ∨ Q) ≡ (~Q → P). Sendo P = 'A menina tem olhos azuis' e Q = 'O menino é loiro', a equivalência ~P → Q resulta exatamente em: 'Se a menina não tem olhos azuis, então o menino é loiro'.",
      "Incorreta. Trata-se da negação de uma condicional (~(P → Q) ≡ P ∧ ~Q), e não da equivalência da disjunção.",
      "Incorreta. Trata-se da negação da condicional recíproca (~(Q → P) ≡ Q ∧ ~P)."
    ],
    "generalExplanation": "Equivalência lógica da Disjunção para a Condicional: P ∨ Q ≡ ~P → Q ≡ ~Q → P. Negando a primeira parte e mantendo a segunda em formato condicional, obtemos: 'Se a menina não tem olhos azuis, então o menino é loiro'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Equivalência da Disjunção para Condicional",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_297",
    "text": "Considere a proposição condicional: “Se o interessado der três passos, alugará a pouca distância uma loja por um valor baixo”. Julgue a afirmativa a respeito de sua equivalência lógica:\n\n“A proposição apresentada é logicamente equivalente a: 'Se o interessado não der três passos, não alugará a pouca distância uma loja por um valor baixo'.”",
    "options": [
      "A) Certo.",
      "B) Errado."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A proposição apresentada comete a falácia da negação do antecedente (~P → ~Q), que não preserva a tabela-verdade de P → Q.",
      "Correta. A proposição original tem a forma (P → Q). Suas únicas equivalências lógicas canônicas são a contrapositiva (~Q → ~P: 'Se não alugar a pouca distância..., então o interessado não deu três passos') e a disjunção inclusiva (~P ∨ Q). A transformação (~P → ~Q) é a inversa, que NÃO é logicamente equivalente à proposição original."
    ],
    "generalExplanation": "A proposição P → Q é equivalente apenas à sua contrapositiva (~Q → ~P) ou à disjunção (~P ∨ Q). A sentença ~P → ~Q é a inversa e constitui uma falácia lógica (não é equivalente).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Equivalência Lógica da Condicional (Contrapositiva vs. Inversa)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_298",
    "text": "A proposição “Augusto é analista do Ministério Público ou Walter não é um procurador-geral da Justiça” é logicamente equivalente a afirmar que:",
    "options": [
      "A) Augusto é analista do Ministério Público se, e somente se, Walter não é um procurador-geral da Justiça.",
      "B) Se Augusto é analista do Ministério Público, então Walter não é um procurador-geral da Justiça.",
      "C) Se Augusto não é analista do Ministério Público, então Walter é um procurador-geral da Justiça.",
      "D) Se Walter é um procurador-geral da Justiça, então Augusto é analista do Ministério Público.",
      "E) Augusto é analista do Ministério Público e Walter é um procurador-geral da Justiça."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. A bicondicional (P ↔ Q) possui tabela-verdade diferente da disjunção inclusiva.",
      "Incorreta. (P → ~Q) equivale a (~P ∨ ~Q), e não a (P ∨ ~Q).",
      "Incorreta. (~P → Q) equivale a (P ∨ Q), e não a (P ∨ ~Q).",
      "Correta. Seja P = 'Augusto é analista' e ~Q = 'Walter não é procurador'. A sentença original é (P ∨ ~Q), que pela comutatividade é (~Q ∨ P). Pela regra da condicional (~A ∨ B ≡ A → B), fazendo A = Q e B = P, temos: Q → P ('Se Walter é procurador-geral da Justiça, então Augusto é analista do Ministério Público').",
      "Incorreta. A conjunção (P ∧ ~Q) é uma proposição muito mais restritiva e não equivale à disjunção."
    ],
    "generalExplanation": "Dada a disjunção (P ∨ ~Q), aplicando a equivalência para condicional (nega a primeira e mantém a segunda: ~Q ∨ P ≡ ~(~Q) → P ≡ Q → P), chegamos a: 'Se Walter é procurador-geral, então Augusto é analista'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Equivalência da Disjunção para Condicional",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_299",
    "text": "Assinale a alternativa que apresenta uma proposição logicamente equivalente a: “Gael não é curioso ou Laura é sonhadora”.",
    "options": [
      "A) Se Gael é curioso, então Laura não é sonhadora.",
      "B) Gael é curioso ou Laura é sonhadora.",
      "C) Gael é curioso ou Laura não é sonhadora.",
      "D) Se Laura não é sonhadora, então Gael não é curioso.",
      "E) Gael é curioso e Laura não é sonhadora."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. P → ~Q equivale a ~P ∨ ~Q.",
      "Incorreta. Altera o primeiro termo de ~P para P sem converter para condicional.",
      "Incorreta. Altera ambos os termos da disjunção.",
      "Correta. A proposição original é (~P ∨ Q), que é diretamente equivalente à condicional (P → Q: 'Se Gael é curioso, então Laura é sonhadora'). Aplicando a contrapositiva a essa condicional (~Q → ~P), obtém-se: 'Se Laura não é sonhadora, então Gael não é curioso'.",
      "Incorreta. Conjunção não é equivalente a uma disjunção inclusiva."
    ],
    "generalExplanation": "A proposição ~P ∨ Q equivale a P → Q. Pela contrapositiva, P → Q ≡ ~Q → ~P ('Se Laura não é sonhadora, então Gael não é curioso').",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Equivalência da Disjunção para Condicional e Contrapositiva",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_300",
    "text": "Considere a seguinte afirmação: “Ronaldo foi de ônibus e não usou o celular”. A NEGAÇÃO lógica dessa afirmação é:",
    "options": [
      "A) Ronaldo foi de ônibus e usou o celular.",
      "B) Ronaldo não foi de ônibus e não usou o celular.",
      "C) Ronaldo não foi de ônibus e usou o celular.",
      "D) Ronaldo foi de ônibus ou não usou o celular.",
      "E) Ronaldo não foi de ônibus ou usou o celular."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. Manteve a primeira proposição afirmativa e permaneceu com o conectivo 'e'.",
      "Incorreta. Apenas negou a primeira proposição e manteve o conectivo 'e'.",
      "Incorreta. Negou ambas as partes, mas manteve incorretamente o conectivo 'e'.",
      "Incorreta. Trocou pelo conectivo 'ou', mas não negou o primeiro termo nem o segundo de forma adequada.",
      "Correta. Pela 1ª Lei de De Morgan, a negação de uma conjunção ~(P ∧ Q) é a disjunção (~P ∨ ~Q). Na proposição dada, P = 'Ronaldo foi de ônibus' e Q = 'não usou o celular' (~R). Logo, a negação de (P ∧ ~R) é (~P ∨ R): 'Ronaldo não foi de ônibus OU usou o celular'."
    ],
    "generalExplanation": "Negação da Conjunção (Leis de De Morgan): ~(P ∧ ~Q) ≡ ~P ∨ Q. Nega-se a primeira parte, troca-se 'e' por 'ou' e nega-se a segunda parte ('não usou' vira 'usou').",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Negação de Proposições Compostas (Leis de De Morgan - Conjunção)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_301",
    "text": "Considere a proposição: “Não gosto de ficar em casa e vou ao cinema todos os dias”. Do ponto de vista da lógica sentencial, uma afirmação que expressa a sua NEGAÇÃO é:",
    "options": [
      "A) Não gosto de sair de casa e não vou ao cinema todos os dias.",
      "B) Vou ao cinema todos os dias e gosto de ficar em casa.",
      "C) Não vou ao cinema todos os dias ou não gosto de ficar em casa.",
      "D) Se não gosto de ficar em casa, então vou ao cinema todos os dias.",
      "E) Gosto de ficar em casa ou não vou ao cinema todos os dias."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. Altera o sentido do predicado original e mantém o conectivo 'e'.",
      "Incorreta. Mantém a conjunção ('e'), apenas comutando os termos.",
      "Incorreta. Repetiu a negativa 'não gosto de ficar em casa' em vez de negá-la para 'gosto de ficar em casa'.",
      "Incorreta. Uma condicional não expressa a negação de uma conjunção sem a devida estrutura.",
      "Correta. A proposição é (~P ∧ Q). Aplicando a Lei de De Morgan para negar a conjunção: ~(~P ∧ Q) ≡ P ∨ ~Q. Ou seja: 'Gosto de ficar em casa OU não vou ao cinema todos os dias'."
    ],
    "generalExplanation": "Negação de (~P ∧ Q): nega-se ~P (obtendo P), troca-se a conjunção 'e' pela disjunção 'ou', e nega-se Q (obtendo ~Q). Resultado: 'Gosto de ficar em casa ou não vou ao cinema todos os dias'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Negação de Conjunção com Termo Negativo",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_302",
    "text": "Ao final de um depoimento, um investigado concluiu seu argumento com a seguinte sentença: “Eu não sou um espião e amo o meu país”.\n\nJulgue o item a respeito da lógica dessa declaração:\n“A negação lógica da conclusão apresentada pelo investigado é expressa por: 'Eu sou um espião ou não amo o meu país'.”",
    "options": [
      "A) Certo.",
      "B) Errado."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A conclusão do investigado é uma conjunção da forma (~P ∧ Q), onde ~P = 'não sou espião' e Q = 'amo meu país'. Pela Lei de De Morgan, a negação é ~(~P ∧ Q) ≡ P ∨ ~Q ('Eu sou um espião OU não amo o meu país'). O item está perfeitamente correto.",
      "Incorreta. A equivalência apresentada no item aplicou com exatidão a Lei de De Morgan para a negação da conjunção."
    ],
    "generalExplanation": "Negação de (~P ∧ Q) ≡ P ∨ ~Q. Nega-se a primeira ('sou espião'), troca-se 'e' por 'ou' e nega-se a segunda ('não amo meu país'). O item está CERTO.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Negação da Conjunção em Argumentos Lógicos",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_303",
    "text": "Considere a proposição composta: “A pressão sobre os parlamentares para diminuir ou não aprovar o percentual de reajuste”.\n\nJulgue o item subsequente a respeito da negação dessa sentença:\n“A negação da referida proposição está corretamente redigida na seguinte forma: 'A pressão sobre os parlamentares para não diminuir e aprovar o percentual de reajuste'.”",
    "options": [
      "A) Certo.",
      "B) Errado."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A proposição possui a estrutura disjuntiva (P ∨ ~Q), onde P = 'diminuir' e ~Q = 'não aprovar'. Pela 2ª Lei de De Morgan, a negação de uma disjunção é a conjunção de suas partes negadas: ~(P ∨ ~Q) ≡ ~P ∧ Q ('não diminuir E aprovar'). O item está inteiramente correto.",
      "Incorreta. A regra de negação de (P ou não Q) resulta exatamente em (não P e Q)."
    ],
    "generalExplanation": "Negação de Disjunção (De Morgan): ~(P ∨ ~Q) ≡ ~P ∧ Q. Troca-se 'ou' por 'e' e invertem-se os valores de cada proposição simples ('diminuir' vira 'não diminuir'; 'não aprovar' vira 'aprovar'). Item CERTO.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Negação da Disjunção Inclusiva (Leis de De Morgan)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_304",
    "text": "Julgue o item a respeito da negação de proposições compostas:\n\n“A negação da proposição 'Não conheço esse empresário nem ouvi falar de sua empresa' pode ser expressa logicamente por: 'Conheço esse empresário e ouvi falar de sua empresa'.”",
    "options": [
      "A) Certo.",
      "B) Errado."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A sentença proposta manteve a conjunção 'e', cometendo erro conceitual de negação.",
      "Correta. Na língua portuguesa, a estrutura 'não P nem Q' equivale logicamente à conjunção (~P ∧ ~Q). Para negar uma conjunção (~P ∧ ~Q), aplica-se a Lei de De Morgan: ~(~P ∧ ~Q) ≡ P ∨ Q ('Conheço esse empresário OU ouvi falar de sua empresa'). A sentença proposta utilizou o conectivo 'e' (P ∧ Q), o que torna o item ERRADO."
    ],
    "generalExplanation": "A expressão 'Não P nem Q' é logicamente (~P ∧ ~Q). Sua negação é (P ∨ Q) com 'OU', e não com 'E'. Portanto, o item está ERRADO.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Negação de Estruturas com 'Nem' (Conjunção Negativa)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_305",
    "text": "Considere a afirmação condicional: “Se você trabalha, então alcança”. A NEGAÇÃO lógica dessa afirmação é:",
    "options": [
      "A) Você trabalha e não alcança.",
      "B) Você não alcança ou não trabalha.",
      "C) Se você não trabalha, então não alcança.",
      "D) Se você não trabalha, então alcança.",
      "E) Se você não alcança, então não trabalha."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Pela regra de negação da condicional (regra do 'MANÉ': Mantém a primeira E Nega a segunda), temos: ~(P → Q) ≡ P ∧ ~Q. Sendo P = 'Você trabalha' e Q = 'Você alcança', a negação é: 'Você trabalha e não alcança'.",
      "Incorreta. Representa uma disjunção que não traduz a negação da condicional.",
      "Incorreta. Trata-se da inversa (~P → ~Q), e não da negação.",
      "Incorreta. Não representa a negação de P → Q.",
      "Incorreta. Trata-se da contrapositiva (~Q → ~P), que é equivalente à condicional original, e não a sua negação."
    ],
    "generalExplanation": "A negação de uma condicional 'Se P, então Q' é SEMPRE uma conjunção: ~(P → Q) ≡ P ∧ ~Q ('Mantém o antecedente E nega o consequente').",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Negação da Condicional (Regra do MANÉ)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_306",
    "text": "Afirmar que NÃO É VERDADE que “Se Pedro não é brasileiro, então João é corintiano” é logicamente equivalente a dizer que:",
    "options": [
      "A) Ou Pedro é brasileiro ou João não é corintiano.",
      "B) Pedro não é brasileiro e João não é corintiano.",
      "C) Pedro não é brasileiro ou João não é corintiano.",
      "D) Se João não é corintiano, então Pedro é brasileiro.",
      "E) Se Pedro não é brasileiro, então João é corintiano."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Utiliza disjunção exclusiva, que não equivale à negação da condicional.",
      "Correta. Dizer que 'não é verdade que (A → B)' significa efetuar a negação da condicional: ~(A → B) ≡ A ∧ ~B. Na proposição, o antecedente A é 'Pedro não é brasileiro' e o consequente B é 'João é corintiano'. Mantendo A e negando B sob conjunção, temos: 'Pedro não é brasileiro E João não é corintiano'.",
      "Incorreta. A negação da condicional resulta em conjunção ('e'), e não em disjunção ('ou').",
      "Incorreta. Apresenta uma nova condicional, não a negação.",
      "Incorreta. Apenas repete a condicional original que se pretendia negar."
    ],
    "generalExplanation": "A negação de 'Se A, então B' é 'A e não B'. Como A já contém uma negativa ('Pedro não é brasileiro'), mantém-se A ('Pedro não é brasileiro') e nega-se B ('João não é corintiano'), unindo-os por 'E'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Negação da Condicional com Antecedente Negativo",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_307",
    "text": "A negação lógica da afirmação “Se hoje chover, não irei ao trabalho de ônibus” é expressa por:",
    "options": [
      "A) Hoje irá chover e irei ao trabalho de ônibus.",
      "B) Hoje irá chover e não irei ao trabalho de ônibus.",
      "C) Hoje irá chover ou não irei ao trabalho de ônibus.",
      "D) Hoje não irá chover e não irei ao trabalho de ônibus.",
      "E) Hoje não irá chover ou não irei ao trabalho de ônibus."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A proposição é (P → ~Q), onde P = 'Hoje chover' e ~Q = 'Não irei de ônibus'. Negando a condicional: ~(P → ~Q) ≡ P ∧ Q ('Hoje irá chover E irei ao trabalho de ônibus'). Mantém-se o antecedente e nega-se o consequente.",
      "Incorreta. Manteve o consequente negativo em vez de negá-lo.",
      "Incorreta. Utilizou disjunção ('ou') em vez de conjunção ('e').",
      "Incorreta. Negou o antecedente, violando a regra de negação da condicional.",
      "Incorreta. Utilizou disjunção e negou o antecedente."
    ],
    "generalExplanation": "Negação de P → ~Q: ~(P → ~Q) ≡ P ∧ Q. Mantém a primeira ('Hoje irá chover') e nega a segunda ('não irei' vira 'irei'), com o conectivo 'E'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Negação da Condicional com Consequente Negativo",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_308",
    "text": "Considerando que a proposição composta “André bebe suco e Jacqueline bebe cerveja” é FALSA, assinale a alternativa que apresenta uma proposição NECESSARIAMENTE VERDADEIRA:",
    "options": [
      "A) André não bebe suco e Jacqueline bebe cerveja.",
      "B) André bebe suco se, e somente se, Jacqueline não bebe cerveja.",
      "C) Ou André não bebe suco, ou Jacqueline não bebe cerveja.",
      "D) Se André não bebe suco, então Jacqueline bebe cerveja.",
      "E) Se André bebe suco, então Jacqueline não bebe cerveja."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. Se André bebe suco e Jacqueline não bebe cerveja, esta alternativa torna-se falsa.",
      "Incorreta. A bicondicional exige que ambos tenham o mesmo valor lógico, o que não é garantido apenas pela falsidade da conjunção.",
      "Incorreta. Se ambos não beberem (ambos falsos), a disjunção exclusiva se torna falsa.",
      "Incorreta. Se André não beber suco e Jacqueline também não beber cerveja, a condicional (V → F) torna-se falsa.",
      "Correta. Dizer que (P ∧ Q) é FALSA equivale a dizer que sua negação é VERDADEIRA: ~(P ∧ Q) ≡ (~P ∨ ~Q). Pela equivalência lógica da condicional (~A ∨ B ≡ A → B), a disjunção (~P ∨ ~Q) é exatamente equivalente a (P → ~Q): 'Se André bebe suco, então Jacqueline não bebe cerveja'. Como a premissa é que a conjunção é falsa, a condicional P → ~Q é necessariamente verdadeira."
    ],
    "generalExplanation": "Se P ∧ Q é Falsa, então ~P ∨ ~Q é Verdadeira. Como ~P ∨ ~Q ≡ P → ~Q, a proposição condicional 'Se André bebe suco, então Jacqueline não bebe cerveja' é infalivelmente verdadeira.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Negação de Conjunção e Equivalência Condicional",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_309",
    "text": "Assinale a alternativa que apresenta corretamente uma NEGAÇÃO LÓGICA da afirmação a seguir:\n\n“O companheirismo alimenta a felicidade e a solidão abriga a tristeza”.",
    "options": [
      "A) O companheirismo não alimenta a felicidade e a solidão não abriga a tristeza.",
      "B) O companheirismo não alimenta a felicidade ou a solidão abriga a tristeza.",
      "C) Se o companheirismo não alimenta a felicidade, então a solidão não abriga a tristeza.",
      "D) O companheirismo alimenta a felicidade ou a solidão não abriga a tristeza.",
      "E) Se o companheirismo alimenta a felicidade, então a solidão não abriga a tristeza."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. Conjunção de negações (~P ∧ ~Q) não é a negação de (P ∧ Q).",
      "Incorreta. Manteve a segunda proposição afirmativa sem negá-la.",
      "Incorreta. (~P → ~Q) ≡ (P ∨ ~Q), que não equivale a (~P ∨ ~Q).",
      "Incorreta. Manteve a primeira proposição afirmativa sem negá-la.",
      "Correta. A negação canônica de (P ∧ Q) pela Lei de De Morgan é a disjunção (~P ∨ ~Q). Como a disjunção (~P ∨ ~Q) é logicamente equivalente à condicional (P → ~Q), a sentença 'Se o companheirismo alimenta a felicidade, então a solidão não abriga a tristeza' constitui uma negação logicamente válida e perfeita da conjunção original."
    ],
    "generalExplanation": "Negação de (P ∧ Q) ≡ ~P ∨ ~Q. Como ~P ∨ ~Q ≡ P → ~Q, a formulação condicional 'Se P, então não Q' expressa a negação exata da conjunção original.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Negação da Conjunção sob Forma Condicional",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_310",
    "text": "A NEGAÇÃO lógica da proposição bicondicional “É verão em Gramado se e somente se faz calor” é expressa por:",
    "options": [
      "A) Não é verão em Gramado se e somente se não faz calor.",
      "B) Se é verão em Gramado, então faz calor.",
      "C) É verão em Gramado e faz calor.",
      "D) Não é verão em Gramado e não faz calor.",
      "E) Ou é verão em Gramado ou faz calor."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. A sentença (~P ↔ ~Q) é logicamente equivalente à bicondicional original (P ↔ Q), e não à sua negação.",
      "Incorreta. Trata-se de uma condicional simples integrante da bicondicional.",
      "Incorreta. Trata-se de uma conjunção afirmativa.",
      "Incorreta. Trata-se de uma conjunção negativa.",
      "Correta. A negação lógica de uma proposição bicondicional (P ↔ Q) é dada pela disjunção exclusiva (P ⊻ Q / Ou P ou Q). Ou seja: ~(P ↔ Q) ≡ (P ⊻ Q) ≡ 'Ou é verão em Gramado ou faz calor'."
    ],
    "generalExplanation": "A negação de uma bicondicional (se e somente se) é a disjunção exclusiva (ou... ou...): ~(P ↔ Q) ≡ (P ⊻ Q). Alternativa E.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Negação da Bicondicional (Disjunção Exclusiva)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_311",
    "text": "Em lógica sentencial e de predicados, quantificadores são operadores que definem o alcance de uma proposição em relação a um domínio. O quantificador universal (∀) indica que a propriedade se aplica a todos os elementos do conjunto/domínio, enquanto o quantificador existencial (∃) afirma que há pelo menos um elemento que satisfaz a propriedade. Com base nisso, assinale a sentença que expressa uma proposição por meio de um quantificador universal:",
    "options": [
      "A) Há leis que entraram em vigor no ano de 2002.",
      "B) Todo juiz deve fundamentar suas decisões.",
      "C) Existe uma norma suprema no ordenamento jurídico.",
      "D) Em certos casos, a lei penal retroage para beneficiar o réu.",
      "E) Algumas normas constitucionais têm aplicação imediata."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O termo 'Há' introduz um quantificador existencial (∃), indicando a existência de ao menos um elemento.",
      "Correta. A expressão 'Todo' (ou 'qualquer', 'todos') é o quantificador universal (∀), que generaliza a propriedade para a totalidade dos elementos pertencentes ao conjunto dos juízes.",
      "Incorreta. O termo 'Existe' é a forma canônica do quantificador existencial (∃).",
      "Incorreta. 'Em certos casos' restringe a afirmação a uma parte do domínio (particular/existencial).",
      "Incorreta. 'Algumas' é um quantificador particular/existencial."
    ],
    "generalExplanation": "Quantificadores universais (∀) abrangem 100% dos elementos do conjunto ('Todo', 'Toda', 'Qualquer', 'Nenhum'). A alternativa B ('Todo juiz...') é a única universal.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Quantificadores Lógicos (Universal vs. Existencial)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_312",
    "text": "Um jornal publicou a seguinte manchete: “Toda Agência do Banco do Brasil tem déficit de funcionários”. Diante de contestação formal, o veículo de comunicação retratou-se, publicando a NEGAÇÃO LÓGICA dessa manchete. A sentença que expressa de maneira correta a negação da manchete publicada é:",
    "options": [
      "A) Qualquer Agência do Banco do Brasil não tem déficit de funcionários.",
      "B) Nenhuma Agência do Banco do Brasil tem déficit de funcionários.",
      "C) Alguma Agência do Banco do Brasil não tem déficit de funcionários.",
      "D) Existem Agências com déficit de funcionários que não pertencem ao Banco do Brasil.",
      "E) O quadro de funcionários do Banco do Brasil está completo."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Equivale a dizer que 'todas não têm', o que é uma universal negativa (Nenhum), e não a negação contraditória.",
      "Incorreta. 'Nenhuma tem' é a proposição universal negativa (contrária), que é muito mais forte que a negação lógica.",
      "Correta. A negação lógica de uma proposição universal afirmativa ('Todo A é B') é a proposição particular negativa ('Algum A não é B' / 'Existe A que não é B' / 'Pelo menos um A não é B'). Logo, a negação de 'Toda agência tem déficit' é: 'Alguma Agência do Banco do Brasil NÃO tem déficit de funcionários'.",
      "Incorreta. Altera o escopo do domínio, tratando de agências de outros bancos.",
      "Incorreta. Trata-se de uma paráfrase informal que não expressa a negação da lógica de predicados."
    ],
    "generalExplanation": "Regra clássica de negação de quantificadores: ~(Todo A é B) ≡ Algum A NÃO é B (ou Pelo menos um / Existe). Gabarito C.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Negação do Quantificador Universal Afirmativo (Todo)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_313",
    "text": "Considere a seguinte afirmação: “Todo docente é licenciado”. A alternativa que apresenta uma NEGAÇÃO LÓGICA para essa afirmação é:",
    "options": [
      "A) Existe docente que não é licenciado.",
      "B) Todo licenciado é docente.",
      "C) Nenhum docente é licenciado.",
      "D) Não existe docente que não é licenciado.",
      "E) Nenhum licenciado é docente."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Para falsear e negar 'Todo A é B', basta encontrar a existência de pelo menos um contraexemplo: 'Existe docente que não é licenciado' (∃x tal que A(x) ∧ ~B(x)).",
      "Incorreta. Apenas inverte o sujeito e o predicado da universal afirmativa.",
      "Incorreta. 'Nenhum' é a universal negativa (contrária), e não a negação contraditória.",
      "Incorreta. Afirmar que 'não existe docente que não é licenciado' equivale à própria afirmação original 'Todo docente é licenciado'.",
      "Incorreta. Não constitui a negação lógica da proposição dada."
    ],
    "generalExplanation": "A negação de 'Todo A é B' é 'Existe A que NÃO é B' (ou 'Pelo menos um A não é B').",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Negação do Quantificador Universal Afirmativo (Todo)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_314",
    "text": "Considere a proposição categórica: “Qualquer pessoa sabe andar de bicicleta”. A afirmação que corresponde à NEGAÇÃO LÓGICA dessa frase é:",
    "options": [
      "A) Ninguém sabe andar de bicicleta.",
      "B) Pelo menos uma pessoa não sabe andar de bicicleta.",
      "C) As crianças não sabem andar de bicicleta.",
      "D) Todos que andam de bicicleta também andam de motocicleta.",
      "E) Apenas uma pessoa sabe andar de bicicleta."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. 'Ninguém' é o quantificador universal negativo, que não é a negação de 'Todo/Qualquer'.",
      "Correta. A palavra 'Qualquer' equivale a 'Toda'. A negação da universal afirmativa é a existencial negativa: 'Pelo menos uma pessoa NÃO sabe andar de bicicleta' (ou 'Alguma pessoa não sabe').",
      "Incorreta. Restringe o conjunto universal a crianças sem fundamento lógico.",
      "Incorreta. Insere elementos estranhos à proposição (motocicleta).",
      "Incorreta. 'Apenas uma' indica unicidade afirmativa, não negando a proposição universal."
    ],
    "generalExplanation": "Como 'Qualquer pessoa' = 'Toda pessoa', a sua negação lógica é 'Pelo menos uma pessoa não sabe andar de bicicleta' (∃x ~P(x)).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Negação de Quantificador Universal ('Qualquer' / 'Todo')",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_315",
    "text": "Com relação às proposições lógicas e ao quadrado das oposições aristotélicas, julgue o item a seguir:\n\n“Se a proposição 'Todo russo gosta de sopa de beterraba' é FALSA, é correto concluir que a proposição 'Pelo menos um russo não gosta de sopa de beterraba' é VERDADEIRA.”",
    "options": [
      "A) Certo.",
      "B) Errado."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Pelo princípio da contradição lógica, uma proposição e sua negação possuem valores lógicos rigorosamente opostos. Como a negação de 'Todo A é B' é exatamente 'Pelo menos um A não é B', se a primeira é falsa, a sua negação contraditória é obrigatoriamente verdadeira.",
      "Incorreta. A relação descrita no item é a perfeita relação entre proposições contraditórias."
    ],
    "generalExplanation": "Se a universal afirmativa (Todo A é B) é falsa, a particular negativa (Existe / Pelo menos um A não é B) é necessariamente verdadeira. Item CERTO.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Relação de Contradição e Valores Lógicos de Quantificadores",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_316",
    "text": "Qual das proposições a seguir expressa a NEGAÇÃO LÓGICA da proposição “Todo policial militar é um exímio atirador”?",
    "options": [
      "A) Todo policial militar não é um exímio atirador.",
      "B) Nenhum policial militar é um exímio atirador.",
      "C) Pelo menos um policial militar é um exímio atirador.",
      "D) Nenhum policial militar não é um exímio atirador.",
      "E) Algum policial militar não é um exímio atirador."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. Equivale a uma declaração universal negativa (Nenhum), que não é a negação contraditória.",
      "Incorreta. 'Nenhum' é a contrária, mais extrema do que a negação lógica mínima.",
      "Incorreta. Trata-se de uma existencial afirmativa (subalterna), não de uma negação.",
      "Incorreta. Dupla negação que equivale à afirmação original 'Todo policial militar é um exímio atirador'.",
      "Correta. A negação lógica de 'Todo A é B' é 'Algum A NÃO é B' (ou 'Existe A que não é B'). Portanto, a alternativa correta é: 'Algum policial militar não é um exímio atirador'."
    ],
    "generalExplanation": "Negação de Todo: ~(Todo A é B) = Algum A não é B. Alternativa E.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Negação do Quantificador Universal Afirmativo (Todo)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_317",
    "text": "Julgue o item subsequente relativo à lógica sentencial e de predicados:\n\n“A negação da proposição 'Todas as reuniões devem ser gravadas por mídias digitais' é corretamente expressa por 'Nenhuma reunião deve ser gravada por mídias digitais'.”",
    "options": [
      "A) Certo.",
      "B) Errado."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O item confunde a negação lógica contraditória com a proposição contrária ('Nenhum').",
      "Correta. A negação de uma universal afirmativa ('Todas as reuniões devem...') é a particular negativa ('Pelo menos uma reunião NÃO deve...' ou 'Existe reunião que não deve...'). A sentença 'Nenhuma reunião...' é uma universal negativa (proposição contrária, não contraditória). Logo, o item está ERRADO."
    ],
    "generalExplanation": "Negação de 'Todo' NÃO é 'Nenhum'! A negação correta é existencial com negação: 'Existe pelo menos uma reunião que não deve ser gravada'. Item ERRADO.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Distinção entre Proposição Contraditória e Contrária (Todo vs. Nenhum)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_318",
    "text": "Em determinado posto de fiscalização de fronteira, foram abordados 1.000 veículos com seus respectivos condutores. Acerca das proposições lógicas aplicáveis a essa fiscalização, julgue o item:\n\n“A negação da sentença 'Todo condutor abordado na fiscalização era brasileiro ou estrangeiro' é a seguinte sentença: 'Nenhum condutor abordado na fiscalização era brasileiro ou estrangeiro'.”",
    "options": [
      "A) Certo.",
      "B) Errado."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A troca de 'Todo' por 'Nenhum' constitui erro clássico em lógica de predicados.",
      "Correta. A negação de uma proposição com quantificador universal 'Todo x é (P ou Q)' é a existencial 'Existe algum x que NÃO é (P ou Q)', o que pelas Leis de De Morgan resulta em: 'Algum condutor abordado NÃO era brasileiro E NÃO era estrangeiro' (ou seja, nem brasileiro nem estrangeiro). A troca por 'Nenhum' torna o item categoricamente ERRADO."
    ],
    "generalExplanation": "Negação de 'Todo A é (B ou C)' ≡ 'Algum A não é B e não é C' (Existe pelo menos um contraexemplo). Substituir por 'Nenhum' está incorreto. Item ERRADO.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Negação de Quantificador Universal com Disjunção",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_319",
    "text": "Julgue o item a respeito das regras formais de negação de proposições quantificadas:\n\n“A negação lógica da proposição 'Toda bicicleta tem duas rodas' é 'Nenhuma bicicleta tem duas rodas'.”",
    "options": [
      "A) Certo.",
      "B) Errado."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O item atribui erroneamente 'Nenhum' como a negação de 'Todo'.",
      "Correta. A negação de 'Toda bicicleta tem duas rodas' é 'Pelo menos uma bicicleta NÃO tem duas rodas' (ou 'Existe bicicleta que não tem duas rodas'). 'Nenhuma bicicleta tem duas rodas' é a contrária, podendo ambas serem falsas ao mesmo tempo (caso existam bicicletas com 2 rodas e triciclos/monociclos). Portanto, o item está ERRADO."
    ],
    "generalExplanation": "A negação de 'Todo A é B' é 'Algum A não é B'. O uso de 'Nenhum' está errado. Item ERRADO.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Negação do Quantificador Universal Afirmativo",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_320",
    "text": "Considere a afirmação categórica: “Nenhum soldado escuta mal”. A sua NEGAÇÃO LÓGICA é expressa por:",
    "options": [
      "A) Há pelo menos um soldado que escuta mal.",
      "B) Vários soldados escutam mal.",
      "C) Todos os soldados escutam mal.",
      "D) Todos os soldados escutam bem.",
      "E) Todas as pessoas que escutam bem são soldados."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A proposição original é uma universal negativa ('Nenhum A é B'). Para falseá-la, basta a existência de um único elemento que pertença a A e seja B: 'Há pelo menos um soldado que escuta mal' (ou 'Algum soldado escuta mal').",
      "Incorreta. 'Vários' exige pluralidade de elementos, enquanto a negação lógica estrita requer apenas a existência de ao menos um.",
      "Incorreta. 'Todos os soldados escutam mal' é a contrária afirmativa extrema.",
      "Incorreta. 'Todos escutam bem' reafirma o sentido semântico da original.",
      "Incorreta. Inverte os conjuntos de modo arbitrário."
    ],
    "generalExplanation": "Negação do 'Nenhum': ~(Nenhum A é B) ≡ Algum A é B (Existe / Há pelo menos um A que é B). Gabarito A.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Negação do Quantificador Universal Negativo (Nenhum)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_321",
    "text": "Considere a afirmativa: “Nenhum cachorro é baixo”. A NEGAÇÃO dessa afirmativa é:",
    "options": [
      "A) Todo cachorro é baixo.",
      "B) Algum cachorro é baixo.",
      "C) Algum cachorro não é baixo.",
      "D) Algum animal baixo não é cachorro.",
      "E) Todo animal baixo é cachorro."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. 'Todo cachorro é baixo' é a universal afirmativa, e não a negação contraditória de 'Nenhum'.",
      "Correta. A negação lógica de 'Nenhum A é B' é a proposição existencial afirmativa: 'Algum A é B' (ou 'Existe pelo menos um cachorro que é baixo').",
      "Incorreta. 'Algum cachorro não é baixo' é uma particular negativa que não contradiz a afirmação de que nenhum é baixo.",
      "Incorreta. Inverte a ordem dos termos no predicado.",
      "Incorreta. Altera o quantificador e o sujeito."
    ],
    "generalExplanation": "Negação de 'Nenhum A é B' é 'Algum A é B'. Logo, a negação de 'Nenhum cachorro é baixo' é 'Algum cachorro é baixo'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Negação do Quantificador Universal Negativo (Nenhum)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_322",
    "text": "Sabendo que é FALSA a afirmação “Nenhum aluno está preparado para a prova”, então, de acordo com as regras da lógica formal, a afirmação OBRIGATORIAMENTE VERDADEIRA é:",
    "options": [
      "A) Todos os alunos estão preparados para a prova.",
      "B) Existe aluno que está preparado para a prova.",
      "C) Dentre aqueles que se prepararam para a prova, todos são alunos.",
      "D) Dentre aqueles que se prepararam para a prova, nenhum é aluno.",
      "E) Todos os alunos não se prepararam para a prova."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Da falsidade de 'Nenhum', não se pode deduzir que 'Todos' estão preparados (pode haver alunos preparados e outros não).",
      "Correta. Se a proposição 'Nenhum A é B' é FALSA, a sua negação lógica direta é infalivelmente VERDADEIRA: ~(Nenhum A é B) ≡ 'Existe/Algum A que é B'. Logo, 'Existe aluno que está preparado para a prova' é obrigatoriamente verdadeira.",
      "Incorreta. Não é uma dedução necessária a partir da falsidade dada.",
      "Incorreta. Relação sem sustentação lógica.",
      "Incorreta. Equivale à própria proposição declarada falsa."
    ],
    "generalExplanation": "Se a proposição 'Nenhum aluno está preparado' é falsa, sua negação contraditória 'Existe ao menos um aluno preparado' é obrigatoriamente verdadeira. Alternativa B.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Falsidade do 'Nenhum' e Verdade da Proposição Existencial",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_323",
    "text": "Considere a afirmação: “Nenhum médico é cego”. A NEGAÇÃO LÓGICA dessa afirmação é:",
    "options": [
      "A) Há, pelo menos, um médico cego.",
      "B) Nenhum cego é médico.",
      "C) Todos os médicos são cegos.",
      "D) Todos os cegos são médicos.",
      "E) Todos os médicos não são cegos."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A negação de 'Nenhum A é B' é 'Algum A é B' / 'Existe pelo menos um A que é B' / 'Há, pelo menos, um médico cego'.",
      "Incorreta. É a proposição recíproca equivalente da própria original ('Nenhum A é B' ≡ 'Nenhum B é A').",
      "Incorreta. Universal afirmativa (contrária), e não a negação mínima contraditória.",
      "Incorreta. Inverte os conjuntos sem representar a negação.",
      "Incorreta. É uma paráfrase que reforça que nenhum médico é cego."
    ],
    "generalExplanation": "A negação de 'Nenhum A é B' é 'Há pelo menos um A que é B'. Gabarito A.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Negação do Quantificador Universal Negativo (Nenhum)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_324",
    "text": "Considere a afirmação existencial: “Existem insetos que não são pretos”. Se essa afirmação for considerada FALSA, então é obrigatoriamente VERDADE que:",
    "options": [
      "A) Nenhum inseto é preto.",
      "B) Todo inseto é preto.",
      "C) Todos os animais pretos são insetos.",
      "D) Nenhum animal preto é inseto.",
      "E) Nem todos os insetos são pretos."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Se nenhum fosse preto, a afirmação 'existem insetos que não são pretos' seria verdadeira.",
      "Correta. A sentença 'Existem insetos que não são pretos' tem a forma 'Algum A não é B' (∃x: A(x) ∧ ~B(x)). A negação de 'Algum A não é B' é a proposição universal afirmativa 'Todo A é B' (∀x: A(x) → B(x)). Portanto, sendo a proposição existencial falsa, a universal 'Todo inseto é preto' é necessariamente verdadeira.",
      "Incorreta. Inverte os conjuntos e fala sobre todos os animais pretos.",
      "Incorreta. Afirmação desconexa.",
      "Incorreta. 'Nem todos são pretos' significa exatamente que 'alguns não são pretos', que foi dita falsa."
    ],
    "generalExplanation": "A negação da particular negativa ('Algum A não é B') é a universal afirmativa ('Todo A é B'). Se 'Existem insetos que não são pretos' é falsa, então 'Todo inseto é preto' é verdadeira.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Negação do Quantificador Existencial Negativo (Algum... Não)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_325",
    "text": "Assinale a alternativa que apresenta a sentença equivalente à NEGAÇÃO da afirmação “Pelo menos uma empresa que participou do pregão público não tem certificação digital”:",
    "options": [
      "A) Nem todas as empresas que participaram do pregão público têm certificação digital.",
      "B) Alguma empresa que participou do pregão público tem certificação digital.",
      "C) Nenhuma empresa que participou do pregão público tem certificação digital.",
      "D) Todas as empresas que participaram do pregão público têm certificação digital.",
      "E) Todas as empresas que participaram do pregão público não têm certificação digital."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Dizer que 'nem todas têm' equivale exatamente à afirmação original de que pelo menos uma não tem.",
      "Incorreta. 'Alguma empresa tem' é particular afirmativa e pode coexistir com a proposição original.",
      "Incorreta. 'Nenhuma empresa tem' significa que todas não têm, não sendo a negação lógica.",
      "Correta. A proposição é da forma 'Pelo menos um A não é B' (∃x: A(x) ∧ ~B(x)). Sua negação lógica contraditória é 'Todo A é B': 'Todas as empresas que participaram do pregão público TÊM certificação digital'.",
      "Incorreta. 'Todas não têm' equivale a 'Nenhuma tem'."
    ],
    "generalExplanation": "A negação lógica de 'Pelo menos um A não é B' é 'Todo A é B'. Logo: 'Todas as empresas que participaram do pregão público têm certificação digital'. Alternativa D.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Negação de 'Pelo menos um... não' para 'Todo'",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_326",
    "text": "Considere a seguinte afirmação: “Todo homem é bípede e mamífero”. A alternativa que apresenta uma NEGAÇÃO LÓGICA para essa afirmação é:",
    "options": [
      "A) Nenhum homem é bípede e mamífero.",
      "B) Nenhum homem é bípede ou mamífero.",
      "C) Existe homem que não é bípede ou não é mamífero.",
      "D) Existe homem que não é bípede e não é mamífero.",
      "E) Alguns homens são bípedes e mamíferos."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. 'Nenhum' é a universal negativa (contrária), muito mais forte e restritiva que a negação lógica contraditória.",
      "Incorreta. Utiliza universal negativa com disjunção, não correspondendo à negação lógica da proposição.",
      "Correta. A proposição é da forma 'Todo A é (B e C)'. Sua negação lógica é 'Existe A que NÃO é (B e C)'. Pela 1ª Lei de De Morgan, ~(B ∧ C) ≡ ~B ∨ ~C. Logo, a negação é: 'Existe homem que não é bípede OU não é mamífero'.",
      "Incorreta. Exige que o homem falhe nas duas características simultaneamente (~B ∧ ~C), sendo mais forte do que o necessário para falsear a universal.",
      "Incorreta. É uma particular afirmativa compatível com a proposição original, não constituindo sua negação."
    ],
    "generalExplanation": "A negação de 'Todo A é (B e C)' é 'Existe A que não é B OU não é C' (aplicação combinada de negação de quantificador universal com a Lei de De Morgan). Gabarito C.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Negação de Quantificador Universal com Conjunção (De Morgan)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_327",
    "text": "Considere a seguinte afirmação: “Todo funcionário público é concursado”. A alternativa que apresenta uma NEGAÇÃO LÓGICA para essa afirmação é:",
    "options": [
      "A) Nenhum funcionário público é concursado.",
      "B) Nenhum concursado é funcionário público.",
      "C) Não existe funcionário público que não é concursado.",
      "D) Existe funcionário público que não é concursado.",
      "E) Todo concursado é funcionário público."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. 'Nenhum' é a proposição universal negativa contrária, não a negação contraditória.",
      "Incorreta. Inverte a ordem dos termos e emprega a universal negativa.",
      "Incorreta. Afirmar que 'não existe quem não é' equivale logicamente à própria afirmação original 'todo é'.",
      "Correta. A negação lógica de 'Todo A é B' é a particular negativa: 'Existe A que não é B' (ou 'Algum funcionário público não é concursado' / 'Pelo menos um funcionário público não é concursado').",
      "Incorreta. Apenas inverte o sujeito e o predicado da universal afirmativa."
    ],
    "generalExplanation": "Negação clássica de 'Todo A é B': ~(Todo A é B) ≡ Existe A que NÃO é B. Gabarito D.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Negação do Quantificador Universal Afirmativo (Todo)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_328",
    "text": "Em certa empresa são verdadeiras as seguintes afirmações:\n• Qualquer gerente é mulher.\n• Nenhuma mulher sabe trocar uma lâmpada.\n\nÉ correto concluir que, nessa empresa:",
    "options": [
      "A) algum gerente é homem;",
      "B) há gerente que sabe trocar uma lâmpada;",
      "C) todo homem sabe trocar uma lâmpada;",
      "D) todas as mulheres são gerentes;",
      "E) nenhum gerente sabe trocar uma lâmpada."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. A premissa afirma que qualquer gerente é mulher (Gerentes ⊆ Mulheres), logo não há gerentes homens.",
      "Incorreta. Contradiz diretamente a conclusão necessária do encadeamento das premissas.",
      "Incorreta. Não há informação alguma nas premissas sobre o conjunto dos homens.",
      "Incorreta. Gerentes está contido em Mulheres, mas isso não implica que todas as mulheres sejam gerentes.",
      "Correta. Se todo gerente pertence ao conjunto das mulheres (G ⊆ M) e o conjunto das mulheres é totalmente disjunto do conjunto dos que sabem trocar lâmpada (M ∩ L = ∅), conclui-se obrigatoriamente que G ∩ L = ∅, isto é, 'nenhum gerente sabe trocar uma lâmpada'."
    ],
    "generalExplanation": "Silogismo com diagramas de conjuntos: Gerentes ⊆ Mulheres e Mulheres disjunto de Sabem Trocar Lâmpada. Conclusão inevitável: 'Nenhum gerente sabe trocar uma lâmpada'. Gabarito E.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Diagramas Lógicos e Silogismo Categórico",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_329",
    "text": "Considere que:\nI. Existem empresários professores;\nII. Todos os ricos são empresários;\nIII. Todos os matemáticos são somente professores;\nIV. Existem engenheiros que são professores.\n\nCom base nas premissas acima, é CORRETO afirmar com toda certeza que:",
    "options": [
      "A) Nenhum matemático é rico ou engenheiro.",
      "B) Existem matemáticos que são engenheiros ou empresários.",
      "C) Existem engenheiros matemáticos ou ricos.",
      "D) Existem engenheiros matemáticos e empresários.",
      "E) Nenhum engenheiro é empresário e professor."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Pela premissa III, todos os matemáticos são SOMENTE professores (não exercem nenhuma outra profissão nem integram outras categorias). Portanto, nenhum matemático pode ser engenheiro. Da mesma forma, nenhum matemático pode ser empresário e, como todos os ricos são empresários (premissa II), nenhum matemático pode ser rico. Logo, 'Nenhum matemático é rico ou engenheiro'.",
      "Incorreta. Contradiz a premissa III de que matemáticos são exclusivamente/somente professores.",
      "Incorreta. Não há garantia lógica de que existam engenheiros que sejam matemáticos ou ricos.",
      "Incorreta. Matemáticos são somente professores, logo não há engenheiros matemáticos.",
      "Incorreta. As premissas não impedem que exista engenheiro que seja simultaneamente empresário e professor."
    ],
    "generalExplanation": "Como os matemáticos são SOMENTE professores, seu conjunto é disjunto de engenheiros e de empresários (e consequentemente de ricos, pois ricos ⊆ empresários). Logo: 'Nenhum matemático é rico ou engenheiro'. Gabarito A.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Diagramas Lógicos e Dedução de Conjuntos Disjuntos",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_330",
    "text": "Considere FALSA a afirmação (I) e VERDADEIRA a afirmação (II):\nI. Todos os alunos estudam.\nII. Alguns professores estudam.\n\nSendo assim, é correto concluir logicamente que:",
    "options": [
      "A) os alunos que estudam são professores.",
      "B) qualquer professor que estuda é aluno.",
      "C) existe aluno que não estuda.",
      "D) todos os professores estudam.",
      "E) qualquer aluno estuda."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Não há relação de pertinência necessária entre alunos e professores a partir das premissas.",
      "Incorreta. Não se pode deduzir que os professores que estudam façam parte do conjunto dos alunos.",
      "Correta. Pelo princípio da negação lógica, se a universal afirmativa 'Todos os alunos estudam' é FALSA, sua contraditória existencial 'Existe aluno que não estuda' (ou 'Algum aluno não estuda') é obrigatoriamente VERDADEIRA.",
      "Incorreta. A premissa II afirma apenas que alguns professores estudam, não permitindo generalizar para todos.",
      "Incorreta. Equivale à afirmação I ('Todo aluno estuda'), que foi dada expressamente como falsa."
    ],
    "generalExplanation": "Se a afirmação 'Todos os alunos estudam' é falsa, sua negação lógica contraditória 'Existe aluno que não estuda' é verdadeira. Gabarito C.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Negação do Quantificador Universal e Valores Lógicos",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_331",
    "text": "Considere um diagrama lógico composto por quatro conjuntos (A, B, C e D) em que há elementos em todas as seções e interseções possíveis descritas no problema. A partir da análise das relações de continência e disjunção entre os conjuntos, assinale a alternativa logicamente correta:",
    "options": [
      "A) todos os elementos de A, que não são elementos de B, são elementos de C ou de D.",
      "B) não há elemento de B que seja elemento de três conjuntos ao mesmo tempo.",
      "C) todos os elementos de C, que não são elementos apenas de C, ou são também elementos de B ou são também elementos de D.",
      "D) há elemento de B que seja elemento de outros três conjuntos além do B.",
      "E) qualquer elemento de D, que não é elemento de B, é também elemento de C ou elemento de A."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. Não corresponde à disposição e partição das regiões do diagrama de conjuntos.",
      "Incorreta. O enunciado expressa que há elementos nas seções de interseções múltiplas.",
      "Incorreta. Não abrange a totalidade das regiões e intersecções de C.",
      "Incorreta. Não há elemento pertencente simultaneamente a todos os demais conjuntos além do B.",
      "Correta. De acordo com o fechamento das regiões no diagrama de conjuntos, todo elemento pertencente a D que não pertence a B situa-se obrigatoriamente na partição coberta por C ou por A: 'qualquer elemento de D, que não é elemento de B, é também elemento de C ou elemento de A'."
    ],
    "generalExplanation": "Análise de regiões de pertinência em diagramas de conjuntos: a alternativa E expressa a relação correta de continência das regiões de D externas a B. Gabarito E.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Teoria dos Conjuntos e Análise de Diagramas de Venn",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_332",
    "text": "Considere as seguintes afirmações verdadeiras:\n• Todos os administradores são analistas.\n• Alguns programadores são administradores, mas não todos.\n\nA partir dessas afirmações é correto concluir que:",
    "options": [
      "A) os programadores que são analistas também são administradores.",
      "B) os administradores que não são programadores também não são analistas.",
      "C) os programadores que são administradores também são analistas.",
      "D) os administradores que são analistas também são programadores.",
      "E) os programadores que não são analistas também são administradores."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Um programador pode ser analista sem necessariamente pertencer ao subconjunto dos administradores.",
      "Incorreta. Todo administrador é analista por premissa, independentemente de ser ou não programador.",
      "Correta. Como o conjunto dos Administradores está totalmente contido no conjunto dos Analistas (Adm ⊆ Ana), qualquer elemento da interseção (Programadores ∩ Administradores) está em Administradores e, por conseguinte, é também Analista.",
      "Incorreta. Nem todo administrador é programador ('mas não todos').",
      "Incorreta. Se não é analista, não pode ser administrador, pois todos os administradores são analistas."
    ],
    "generalExplanation": "Se Administradores ⊆ Analistas, então a interseção (Programadores ∩ Administradores) ⊆ Analistas. Logo, 'os programadores que são administradores também são analistas'. Gabarito C.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Silogismo e Diagramas de Conjuntos",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_333",
    "text": "Considere as afirmações:\n• Todos os MAGNÂNIMOS são FELIZES.\n• Alguns BENFEITORES são MAGNÂNIMOS, mas não todos.\n• Há FELIZ que é BENFEITOR.\n\nA partir dessas afirmações, é logicamente correto afirmar que:",
    "options": [
      "A) qualquer BENFEITOR é FELIZ.",
      "B) os MAGNÂNIMOS que não são FELIZES, são BENFEITORES.",
      "C) os BENFEITORES que são MAGNÂNIMOS, não são FELIZES.",
      "D) todos os BENFEITORES que são MAGNÂNIMOS são FELIZES.",
      "E) os FELIZES que não são MAGNÂNIMOS são BENFEITORES."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Apenas os benfeitores magnânimos são necessariamente felizes; os demais benfeitores podem ou não ser felizes.",
      "Incorreta. Não existem magnânimos que não sejam felizes, pois Magnânimos ⊆ Felizes.",
      "Incorreta. Contradiz diretamente a premissa de que todo magnânimo é feliz.",
      "Correta. Como todo elemento do conjunto dos Magnânimos pertence ao conjunto dos Felizes (Magnânimos ⊆ Felizes), os Benfeitores que são Magnânimos (Benfeitores ∩ Magnânimos) são necessariamente Felizes.",
      "Incorreta. Pessoas felizes fora do conjunto dos magnânimos não são necessariamente benfeitoras."
    ],
    "generalExplanation": "Como Magnânimos ⊆ Felizes, a interseção Benfeitores ∩ Magnânimos está contida em Felizes: 'todos os BENFEITORES que são MAGNÂNIMOS são FELIZES'. Gabarito D.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Silogismo Categórico e Subconjuntos",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_334",
    "text": "Considere verdadeiras as afirmações a seguir:\nI. Todos os funcionários são economistas.\nII. Há economista que também é administrador.\n\nA partir dessas afirmações, assinale a alternativa correta:",
    "options": [
      "A) Os administradores que não são economistas são funcionários.",
      "B) Qualquer economista é funcionário.",
      "C) É possível que haja funcionário que não seja economista.",
      "D) Os administradores que são economistas são funcionários.",
      "E) Os funcionários que são administradores são economistas."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. Quem não é economista não pode ser funcionário, pois Funcionários ⊆ Economistas.",
      "Incorreta. Nem todo economista é funcionário (Funcionários é um subconjunto de Economistas).",
      "Incorreta. Contradiz frontalmente a premissa I, que afirma que todos os funcionários são economistas.",
      "Incorreta. Um administrador economista não é necessariamente funcionário.",
      "Correta. Pela premissa I, TODOS os funcionários são economistas. Consequentemente, qualquer subgrupo de funcionários, inclusive 'os funcionários que são administradores', é composto por economistas."
    ],
    "generalExplanation": "Como Funcionários ⊆ Economistas, qualquer funcionário é economista. Portanto, 'os funcionários que são administradores são economistas'. Gabarito E.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Diagramas de Venn e Dedução Categórica",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_335",
    "text": "Considere as afirmações:\nI. Todos que possuem a habilidade C, possuem também a habilidade A, mas nem todos os que possuem a habilidade C possuem também a habilidade B.\nII. Não existe quem possua a habilidade B que não possua a habilidade A.\n\nA partir dessas afirmações, é correto concluir que dentre as pessoas anteriormente descritas:",
    "options": [
      "A) se alguém possui a habilidade A, então esse alguém também possui a habilidade B.",
      "B) se alguém possui a habilidade C, então esse alguém também possui a habilidade B.",
      "C) se alguém possui as habilidades A e B, então esse alguém também possui a habilidade C.",
      "D) se alguém não possui a habilidade B, então esse alguém possui a habilidade C.",
      "E) se alguém possui as habilidades B e C, então esse alguém também possui a habilidade A."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. B ⊆ A não implica que A ⊆ B.",
      "Incorreta. A premissa I afirma categoricamente que nem todos com habilidade C possuem a habilidade B.",
      "Incorreta. Ter habilidades A e B não implica ter C.",
      "Incorreta. Não possuir B não garante que a pessoa possua C.",
      "Correta. A premissa I garante que C ⊆ A (todo C tem A). A premissa II garante que B ⊆ A (todo B tem A). Assim, qualquer pessoa que possua as habilidades B e C (interseção B ∩ C) possui, por transitividade direta de ambas as inclusões, a habilidade A."
    ],
    "generalExplanation": "Como C ⊆ A e B ⊆ A, quem possui B e C pertence a C (e a B) e, portanto, possui necessariamente a habilidade A. Gabarito E.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Inclusão de Conjuntos e Implicação Lógica",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_336",
    "text": "Considere as premissas:\n• Todo candidato bem preparado faz uma boa prova.\n• Alguns candidatos que fazem boa prova são aprovados no concurso.\n\nA partir dessas afirmações, é correto concluir que:",
    "options": [
      "A) alguns candidatos não bem preparados fazem uma boa prova.",
      "B) qualquer candidato bem preparado é aprovado no concurso.",
      "C) há candidato aprovado no concurso que fez uma boa prova.",
      "D) alguns candidatos não bem preparados são aprovados no concurso.",
      "E) alguns candidatos bem preparados não fazem uma boa prova."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. As premissas não fornecem informações sobre candidatos não bem preparados.",
      "Incorreta. O candidato bem preparado faz boa prova, mas fazer boa prova não garante aprovação (apenas alguns são aprovados).",
      "Correta. A segunda premissa afirma que 'Alguns candidatos que fazem boa prova são aprovados no concurso' (P ∩ A ≠ ∅). Pela comutatividade da interseção lógica, isso é rigorosamente equivalente a: 'Há candidato aprovado no concurso que fez uma boa prova' (A ∩ P ≠ ∅).",
      "Incorreta. Não se pode deduzir a situação dos candidatos não preparados em relação à aprovação.",
      "Incorreta. Contradiz diretamente a premissa universal de que todo candidato bem preparado faz boa prova."
    ],
    "generalExplanation": "A proposição 'Alguns que fazem boa prova são aprovados' é comutativa e equivale a 'Há aprovado que fez boa prova'. Gabarito C.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Conversão de Proposições Particulares e Silogismos",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_337",
    "text": "Um economista afirmou, no telejornal, que “se os impostos não sobem, então a receita fiscal não cresce”. Do ponto de vista da lógica sentencial, uma frase logicamente EQUIVALENTE a essa é:",
    "options": [
      "A) se a receita fiscal cresce, então os impostos sobem.",
      "B) se os impostos sobem, então a receita fiscal cresce.",
      "C) se a receita fiscal não cresce, então os impostos não sobem.",
      "D) ou o imposto não sobe, ou a receita cresce.",
      "E) o imposto sobe sempre que a receita fiscal aumenta."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A equivalência lógica da condicional pela contrapositiva é (P → Q) ≡ (~Q → ~P). Sendo P: 'os impostos não sobem' e Q: 'a receita fiscal não cresce', temos ~Q: 'a receita fiscal cresce' e ~P: 'os impostos sobem'. Portanto, a equivalente é: 'se a receita fiscal cresce, então os impostos sobem'.",
      "Incorreta. É a inversa (~P → ~Q), que não é logicamente equivalente à condicional original.",
      "Incorreta. É a recíproca (Q → P), que não é equivalente.",
      "Incorreta. A equivalência em disjunção seria inclusiva (~P ∨ Q), e não disjunção exclusiva.",
      "Incorreta. Embora na semântica informal se assemelhe a uma condicional, a contrapositiva canônica exata em concursos é a alternativa A."
    ],
    "generalExplanation": "Regra da Contrapositiva: (P → Q) ≡ (~Q → ~P). Nega-se e inverte-se: 'Se a receita fiscal cresce, então os impostos sobem'. Gabarito A.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Equivalência Lógica da Condicional (Contrapositiva)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_338",
    "text": "Considere a sentença: “Se cometi um crime, então serei condenado”. Uma sentença logicamente EQUIVALENTE à sentença dada é:",
    "options": [
      "A) Não cometi um crime ou serei condenado.",
      "B) Se não cometi um crime, então não serei condenado.",
      "C) Se eu for condenado, então cometi um crime.",
      "D) Cometi um crime e serei condenado.",
      "E) Não cometi um crime e não serei condenado."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Pela equivalência da condicional em disjunção (regra do NE-MA): (P → Q) ≡ (~P ∨ Q). Nega-se o antecedente ('Não cometi um crime') e mantém-se o consequente ('ou serei condenado').",
      "Incorreta. Nega o antecedente e o consequente sem inverter (~P → ~Q), que é a inversa.",
      "Incorreta. Inverte a ordem sem negar (Q → P), que é a recíproca.",
      "Incorreta. Conjunção afirmativa não é equivalente à condicional.",
      "Incorreta. Conjunção negativa não é equivalente à condicional."
    ],
    "generalExplanation": "Equivalência condicional para disjunção: (P → Q) ≡ (~P ∨ Q). 'Não cometi um crime ou serei condenado'. Gabarito A.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Equivalência Lógica da Condicional para Disjunção (Regra do NE-MA)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_339",
    "text": "Uma proposição logicamente EQUIVALENTE à afirmação “Se eu estudei, então tirei uma boa nota no concurso” está contida na alternativa:",
    "options": [
      "A) Não estudei e não tirei uma boa nota no concurso.",
      "B) Se eu não tirei uma boa nota no concurso, então não estudei.",
      "C) Se eu não estudei, então não tirei uma boa nota no concurso.",
      "D) Se eu tirei uma boa nota no concurso, então estudei.",
      "E) Estudei e tirei uma boa nota no concurso."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Conjunção (~P ∧ ~Q) não equivale a uma implicação lógica.",
      "Correta. Pela regra da contrapositiva: (P → Q) ≡ (~Q → ~P). Invertem-se e negam-se ambas as proposições: 'Se eu não tirei uma boa nota no concurso, então não estudei'.",
      "Incorreta. Inversa (~P → ~Q), sem inversão de posição.",
      "Incorreta. Recíproca (Q → P), sem negação.",
      "Incorreta. Conjunção afirmativa (P ∧ Q)."
    ],
    "generalExplanation": "Contrapositiva da condicional: (P → Q) ≡ (~Q → ~P). Logo, 'Se eu não tirei uma boa nota no concurso, então não estudei'. Gabarito B.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Equivalência Lógica da Condicional (Contrapositiva)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_340",
    "text": "Dizer que “Pedro não é pedreiro ou Paulo é paulista” é, do ponto de vista lógico, o mesmo que dizer que:",
    "options": [
      "A) se Pedro é pedreiro, então Paulo é paulista.",
      "B) se Paulo é paulista, então Pedro é pedreiro.",
      "C) se Pedro não é pedreiro, então Paulo é paulista.",
      "D) se Pedro é pedreiro, então Paulo não é paulista.",
      "E) se Pedro não é pedreiro, então Paulo não é paulista."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A disjunção (~P ∨ Q) é equivalente à condicional (P → Q). Nega-se a primeira proposição (~(~P) = P: 'Pedro é pedreiro') para formar o antecedente e mantém-se a segunda (Q: 'Paulo é paulista') como consequente: 'Se Pedro é pedreiro, então Paulo é paulista'.",
      "Incorreta. Inverte a ordem da implicação (Q → P).",
      "Incorreta. Mantém o primeiro termo negado no antecedente (~P → Q).",
      "Incorreta. Nega indevidamente o consequente (P → ~Q).",
      "Incorreta. Mantém o antecedente negado e nega o consequente (~P → ~Q)."
    ],
    "generalExplanation": "Equivalência disjunção para condicional: (~P ∨ Q) ≡ (P → Q). Logo: 'Se Pedro é pedreiro, então Paulo é paulista'. Gabarito A.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico - Equivalência da Disjunção para a Condicional",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_341",
    "text": "Considere a seguinte afirmação: “Todo homem é bípede e mamífero.” A alternativa que apresenta uma negação lógica correta para essa afirmação é:",
    "options": [
      "A) Nenhum homem é bípede e mamífero.",
      "B) Nenhum homem é bípede ou mamífero.",
      "C) Existe homem que não é bípede ou não é mamífero.",
      "D) Existe homem que não é bípede e não é mamífero.",
      "E) Alguns homens são bípedes e mamíferos."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. 'Nenhum' é a proposição universal negativa contrária, não a contraditória (negação lógica de 'Todo').",
      "Incorreta. Converte para universal negativa com disjunção, incorrendo em erro de quantificação.",
      "Correta. A proposição é da forma ∀x (H(x) → B(x) ∧ M(x)). Sua negação é ∃x (H(x) ∧ ¬(B(x) ∧ M(x))). Aplicando a 1ª Lei de De Morgan à conjunção interna: ¬(B ∧ M) ≡ ¬B ∨ ¬M. Logo, obtém-se: 'Existe homem que não é bípede OU não é mamífero'.",
      "Incorreta. Exige que o homem não seja bípede e não seja mamífero simultaneamente (conjunção), o que restringe indevidamente a negação (bastando falhar em pelo menos uma das propriedades).",
      "Incorreta. 'Alguns' preserva a afirmativa original, não constituindo sua negação."
    ],
    "generalExplanation": "A negação de 'Todo A é B e C' é 'Existe A que não é B OU não é C' (troca-se o quantificador universal pelo existencial e aplica-se a Lei de De Morgan à conjunção). Gabarito C.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Proposições Categóricas: Negação de Quantificador Universal com Conjunção (De Morgan)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_342",
    "text": "Considere a seguinte afirmação: “Todo funcionário público é concursado.” A alternativa que apresenta uma negação lógica formal para essa afirmação é:",
    "options": [
      "A) Nenhum funcionário público é concursado.",
      "B) Nenhum concursado é funcionário público.",
      "C) Não existe funcionário público que não é concursado.",
      "D) Existe funcionário público que não é concursado.",
      "E) Todo concursado é funcionário público."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. 'Nenhum' é a contrária universal de 'Todo', não sua negação contraditória.",
      "Incorreta. Inverte a ordem dos termos e emprega o quantificador universal negativo.",
      "Incorreta. A dupla negação 'Não existe... que não é' equivale logicamente à própria proposição afirmativa 'Todo funcionário público é concursado'.",
      "Correta. A negação lógica da proposição categórica universal afirmativa 'Todo A é B' é a particular negativa (existencial negativa): 'Existe pelo menos um A que não é B' (ou 'Algum A não é B' / 'Pelo menos um A não é B').",
      "Incorreta. Apenas inverte os conjuntos mantendo o quantificador universal afirmativo."
    ],
    "generalExplanation": "A negação lógica de 'Todo A é B' (proposição tipo A) é 'Algum/Existe A que não é B' (proposição tipo O). Gabarito D.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Proposições Categóricas: Negação do Quantificador Universal",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_343",
    "text": "Em certa empresa são verdadeiras as seguintes premissas:\n• Qualquer gerente é mulher.\n• Nenhuma mulher sabe trocar uma lâmpada.\n\nÉ logicamente correto e necessário concluir que, nessa empresa:",
    "options": [
      "A) algum gerente é homem;",
      "B) há gerente que sabe trocar uma lâmpada;",
      "C) todo homem sabe trocar uma lâmpada;",
      "D) todas as mulheres são gerentes;",
      "E) nenhum gerente sabe trocar uma lâmpada."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. A primeira premissa garante que todo gerente está contido no conjunto das mulheres.",
      "Incorreta. Se todos os gerentes são mulheres e nenhuma mulher sabe trocar uma lâmpada, nenhum gerente pode saber.",
      "Incorreta. Não há qualquer informação nas premissas sobre as habilidades dos homens.",
      "Incorreta. 'Todo gerente é mulher' indica que o conjunto dos gerentes está contido no conjunto das mulheres ($G \\subset M$), e não que toda mulher seja gerente.",
      "Correta. Por encadeamento silogístico clássico: Todo Gerente é Mulher ($G \\subset M$) e Nenhuma Mulher sabe trocar lâmpada ($M \\cap L = \\emptyset$). Como $G$ está totalmente dentro de $M$, segue necessariamente que $G \\cap L = \\emptyset$, ou seja, nenhum gerente sabe trocar uma lâmpada."
    ],
    "generalExplanation": "Silogismo categórico: Se todo G é M e nenhum M é L, então necessariamente nenhum G é L (nenhum gerente sabe trocar lâmpada). Gabarito E.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Lógica de Argumentação: Silogismo Categórico e Diagramas Lógicos",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_344",
    "text": "Considere as seguintes premissas verdadeiras:\nI. Existem empresários que são professores;\nII. Todos os ricos são empresários;\nIII. Todos os matemáticos são somente professores;\nIV. Existem engenheiros que são professores.\n\nCom base exclusivamente nessas premissas, é CORRETO afirmar com certeza absoluta que:",
    "options": [
      "A) Nenhum matemático é rico ou engenheiro.",
      "B) Existem matemáticos que são engenheiros ou empresários.",
      "C) Existem engenheiros matemáticos ou ricos.",
      "D) Existem engenheiros matemáticos e empresários.",
      "E) Nenhum engenheiro é empresário e professor."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A premissa III estabelece a restrição categórica exclusiva: matemáticos são SOMENTE professores (não possuem nenhuma outra qualificação profissional além de professor). Assim: 1) Um matemático não pode ser engenheiro (pois é somente professor); 2) Um matemático não pode ser empresário e, como todo rico é empresário (Premissa II), nenhum matemático pode ser rico. Portanto, nenhum matemático é rico ou engenheiro.",
      "Incorreta. Viola a premissa III (são apenas professores).",
      "Incorreta. Não há garantia de que engenheiros sejam matemáticos ou ricos.",
      "Incorreta. Não há qualquer garantia de engenheiros serem simultaneamente matemáticos e empresários.",
      "Incorreta. As premissas não impedem que um engenheiro seja simultaneamente empresário e professor."
    ],
    "generalExplanation": "Como todo matemático é SOMENTE professor, o conjunto dos matemáticos é disjunto de engenheiros e empresários. E como todo rico é empresário, matemáticos também não podem ser ricos. Logo, nenhum matemático é rico ou engenheiro. Gabarito A.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Diagramas Lógicos: Inferência e Exclusividade de Conjuntos",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_345",
    "text": "Considere falsa a afirmação (I) e verdadeira a afirmação (II):\nI. Todos os alunos estudam. [FALSA]\nII. Alguns professores estudam. [VERDADEIRA]\n\nSendo assim, é logicamente correto concluir que:",
    "options": [
      "A) os alunos que estudam são professores.",
      "B) qualquer professor que estuda é aluno.",
      "C) existe aluno que não estuda.",
      "D) todos os professores estudam.",
      "E) qualquer aluno estuda."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. As premissas não estabelecem vínculo de identidade entre alunos que estudam e professores.",
      "Incorreta. Não há dados suficientes para concluir que professores que estudam sejam alunos.",
      "Correta. Se a proposição universal afirmativa 'Todos os alunos estudam' é FALSA, a sua negação lógica contraditória é obrigatoriamente VERDADEIRA: 'Existe (pelo menos um) aluno que não estuda' (ou 'Algum aluno não estuda').",
      "Incorreta. A premissa II afirma apenas que 'alguns' professores estudam, não permitindo generalizar para 'todos'.",
      "Incorreta. 'Qualquer aluno estuda' equivale à afirmação I, que o enunciado definiu como falsa."
    ],
    "generalExplanation": "Se a afirmação 'Todos os alunos estudam' é FALSA, sua negação contraditória é necessariamente VERDADEIRA: 'Existe aluno que não estuda'. Gabarito C.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Proposições Categóricas: Valor Lógico e Negação Contraditória",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_346",
    "text": "Considere um diagrama de quatro conjuntos (A, B, C e D) no qual haja elementos em todas as suas seções e interseções possíveis. A partir da análise lógica das regiões dos conjuntos, é correto afirmar que:",
    "options": [
      "A) todos os elementos de A, que não são elementos de B, são elementos de C ou de D.",
      "B) não há elemento de B que seja elemento de três conjuntos ao mesmo tempo.",
      "C) todos os elementos de C, que não são elementos apenas de C, ou são também elementos de B ou são também elementos de D.",
      "D) há elemento de B que seja elemento de outros três conjuntos além do B.",
      "E) qualquer elemento de D, que não é elemento de B, é também elemento de C ou elemento de A."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. Não corresponde à propriedade estrutural do diagrama de conjuntos sob análise.",
      "Incorreta. Havendo elementos em todas as interseções, existem elementos de B compartilhados em múltiplas seções.",
      "Incorreta. A proposição não expressa a relação de abrangência das regiões.",
      "Incorreta. Não abrange a delimitação estrita das partições.",
      "Correta. Pela topologia do diagrama de Venn de 4 conjuntos conexos, os elementos pertencentes a D e externos a B residem obrigatoriamente na partição coberta por C ou por A ($D \\setminus B \\subseteq C \\cup A$)."
    ],
    "generalExplanation": "Análise de diagramas lógicos de Venn para múltiplos conjuntos. A alternativa E reflete a leitura correta das regiões de pertinência do conjunto D fora de B. Gabarito E.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Diagramas Lógicos e Teoria dos Conjuntos: Leitura de Interseções e Diferenças",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_347",
    "text": "Considere as afirmações verdadeiras:\n• Todos os administradores são analistas.\n• Alguns programadores são administradores, mas não todos.\n\nA partir dessas afirmações, é correto e logicamente necessário concluir que:",
    "options": [
      "A) os programadores que são analistas também são administradores.",
      "B) os administradores que não são programadores também não são analistas.",
      "C) os programadores que são administradores também são analistas.",
      "D) os administradores que são analistas também são programadores.",
      "E) os programadores que não são analistas também são administradores."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Um programador pode ser analista sem necessariamente pertencer ao subconjunto dos administradores.",
      "Incorreta. Todos os administradores são analistas, mesmo aqueles que não são programadores.",
      "Correta. Se todo o conjunto dos Administradores está contido no conjunto dos Analistas ($Adm \\subset An$), qualquer elemento que seja Administrador (inclusive os Programadores que são Administradores) pertencerá obrigatoriamente ao conjunto dos Analistas.",
      "Incorreta. Nem todo administrador analista é programador (a premissa diz apenas que alguns programadores são administradores).",
      "Incorreta. Se alguém não é analista, jamais poderá ser administrador, pois todo administrador é analista."
    ],
    "generalExplanation": "Como todo administrador é analista, a interseção dos programadores com os administradores ($P \\cap Adm$) está necessariamente contida no conjunto dos analistas. Logo, os programadores que são administradores também são analistas. Gabarito C.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Diagramas Lógicos e Silogismo: Interseção e Inclusão de Subconjuntos",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_348",
    "text": "Considere verdadeiras as seguintes afirmações:\n• Todos os MAGNÂNIMOS são FELIZES.\n• Alguns BENFEITORES são MAGNÂNIMOS, mas não todos.\n• Há FELIZ que é BENFEITOR.\n\nA partir dessas afirmações, é logicamente correto afirmar que:",
    "options": [
      "A) qualquer BENFEITOR é FELIZ.",
      "B) os MAGNÂNIMOS que não são FELIZES, são BENFEITORES.",
      "C) os BENFEITORES que são MAGNÂNIMOS, não são FELIZES.",
      "D) todos os BENFEITORES que são MAGNÂNIMOS são FELIZES.",
      "E) os FELIZES que não são MAGNÂNIMOS são BENFEITORES."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Apenas os benfeitores magnânimos têm garantia de serem felizes; os demais benfeitores podem ou não ser felizes.",
      "Incorreta. Não existem magnânimos que não sejam felizes, pois todo magnânimo é feliz.",
      "Incorreta. Contradiz diretamente a primeira premissa.",
      "Correta. Como a totalidade do conjunto dos Magnânimos está contida no conjunto dos Felizes ($M \\subset F$), qualquer elemento pertencente a $M$ (inclusive a fração de Benfeitores que são Magnânimos, $B \\cap M$) é necessariamente Feliz. Portanto, todos os Benfeitores que são Magnânimos são Felizes.",
      "Incorreta. Não se pode deduzir que elementos de Felizes fora de Magnânimos pertençam obrigatoriamente a Benfeitores."
    ],
    "generalExplanation": "Se todo Magnânimo é Feliz, então qualquer indivíduo classificado como Magnânimo é Feliz. Consequentemente, todos os Benfeitores que são Magnânimos são Felizes. Gabarito D.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Diagramas Lógicos: Inclusão e Interseção Categórica",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_349",
    "text": "Considere verdadeiras as afirmações a seguir:\nI. Todos os funcionários são economistas.\nII. Há economista que também é administrador.\n\nA partir dessas premissas, assinale a alternativa que expressa uma conclusão logicamente necessária:",
    "options": [
      "A) Os administradores que não são economistas são funcionários.",
      "B) Qualquer economista é funcionário.",
      "C) É possível que haja funcionário que não seja economista.",
      "D) Os administradores que são economistas são funcionários.",
      "E) Os funcionários que são administradores são economistas."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. Se não é economista, não pode ser funcionário (já que todo funcionário é economista).",
      "Incorreta. O conjunto dos funcionários está contido nos economistas, o que não implica que todo economista seja funcionário.",
      "Incorreta. Contradiz a premissa I, que afirma categoricamente que todos os funcionários são economistas.",
      "Incorreta. Administradores economistas podem estar fora do subconjunto dos funcionários.",
      "Correta. A premissa I assegura que TODO funcionário é economista ($Func \\subset Econ$). Logo, qualquer funcionário, independentemente de exercer também a função de administrador ou qualquer outra atividade, é obrigatoriamente um economista."
    ],
    "generalExplanation": "Pela premissa I, 'Todo Funcionário é Economista'. Qualquer subgrupo formado por funcionários (incluindo os funcionários que são administradores) estará contido no conjunto dos economistas. Gabarito E.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Lógica de Argumentação: Inclusão de Subconjuntos",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_350",
    "text": "Considere verdadeiras as afirmações:\nI. Todos que possuem a habilidade C possuem também a habilidade A, mas nem todos os que possuem a habilidade C possuem também a habilidade B.\nII. Não existe quem possua a habilidade B que não possua a habilidade A.\n\nA partir dessas afirmações, é correto e necessário concluir que, dentre as pessoas descritas:",
    "options": [
      "A) se alguém possui a habilidade A, então esse alguém também possui a habilidade B.",
      "B) se alguém possui a habilidade C, então esse alguém também possui a habilidade B.",
      "C) se alguém possui as habilidades A e B, então esse alguém também possui a habilidade C.",
      "D) se alguém não possui a habilidade B, então esse alguém possui a habilidade C.",
      "E) se alguém possui as habilidades B e C, então esse alguém também possui a habilidade A."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. O conjunto B está contido em A ($B \\subset A$), mas nem todo A possui B.",
      "Incorreta. A premissa I declara expressamente que nem todos que possuem C possuem B.",
      "Incorreta. Ter A e B não implica ter C.",
      "Incorreta. Não ter B não obriga a ter C.",
      "Correta. Pela premissa I, todo indivíduo com habilidade C possui a habilidade A ($C \\subset A$). Da mesma forma, pela premissa II, todo indivíduo com habilidade B possui a habilidade A ($B \\subset A$). Logo, se alguém possui a habilidade B e a habilidade C, essa pessoa pertence à interseção $B \\cap C$, que está integralmente contida em A. Portanto, essa pessoa possui necessariamente a habilidade A."
    ],
    "generalExplanation": "Como $C \\subset A$ e $B \\subset A$, qualquer elemento que possua B e C está contido em A. Logo, quem possui B e C possui necessariamente a habilidade A. Gabarito E.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Diagramas Lógicos: Dedução a partir de Múltiplas Inclusões",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_351",
    "text": "Considere verdadeiras as seguintes afirmações:\n• Todo candidato bem preparado faz uma boa prova.\n• Alguns candidatos que fazem boa prova são aprovados no concurso.\n\nA partir dessas afirmações, é correto concluir que:",
    "options": [
      "A) alguns candidatos não bem preparados fazem uma boa prova.",
      "B) qualquer candidato bem preparado é aprovado no concurso.",
      "C) há candidato aprovado no concurso que fez uma boa prova.",
      "D) alguns candidatos não bem preparados são aprovados no concurso.",
      "E) alguns candidatos bem preparados não fazem uma boa prova."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. As premissas não fornecem informações sobre o desempenho dos candidatos não bem preparados.",
      "Incorreta. Candidatos bem preparados fazem boa prova, mas apenas 'alguns' dos que fazem boa prova são aprovados.",
      "Correta. A segunda premissa afirma que 'Alguns candidatos que fazem boa prova são aprovados'. Pela comutatividade e simetria da proposição existencial (tipo I: 'Algum A é B' ≡ 'Algum B é A'), conclui-se de forma direta e irrefutável que 'Há candidato aprovado no concurso que fez uma boa prova'.",
      "Incorreta. Não há premissas que garantam a aprovação de candidatos despreparados.",
      "Incorreta. Contradiz diretamente a primeira premissa."
    ],
    "generalExplanation": "A proposição particular afirmativa 'Algum A é B' é logicamente equivalente a 'Algum B é A' (comutatividade da interseção). Logo, se alguns que fazem boa prova são aprovados, há aprovado que fez boa prova. Gabarito C.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Proposições Categóricas: Conversão de Proposições Particulares (Tipo I)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_352",
    "text": "Um economista afirmou, no telejornal, que: “Se os impostos não sobem, então a receita fiscal não cresce.” Do ponto de vista da lógica proposicional, uma sentença logicamente equivalente a essa é:",
    "options": [
      "A) se a receita fiscal cresce, então os impostos sobem.",
      "B) se os impostos sobem, então a receita fiscal cresce.",
      "C) se a receita fiscal não cresce, então os impostos não sobem.",
      "D) ou o imposto não sobe, ou a receita cresce.",
      "E) o imposto sobe sempre que a receita fiscal aumenta."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Pela regra da contrapositiva, a condicional $P \\to Q$ é logicamente equivalente a $\\neg Q \\to \\neg P$. Na frase: $P =$ 'os impostos não sobem' e $Q =$ 'a receita fiscal não cresce'. Negando e invertendo: $\\neg Q =$ 'a receita fiscal cresce' e $\\neg P =$ 'os impostos sobem'. Portanto: 'Se a receita fiscal cresce, então os impostos sobem'.",
      "Incorreta. Apenas negou o antecedente e o consequente sem inverter a ordem (falácia da negação do antecedente).",
      "Incorreta. Apenas inverteu a ordem sem negar os termos (falácia da afirmação do consequente).",
      "Incorreta. A disjunção exclusiva não é equivalente à condicional simples.",
      "Incorreta. A alternativa A expressa com precisão técnica a contrapositiva clássica segundo o gabarito oficial."
    ],
    "generalExplanation": "Equivalência pela Contrapositiva: $P \\to Q \\equiv \\neg Q \\to \\neg P$. Sendo $P =$ 'impostos não sobem' e $Q =$ 'receita não cresce', a contrapositiva é: 'Se a receita fiscal cresce, então os impostos sobem'. Gabarito A.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Equivalências Lógicas: Contrapositiva da Condicional",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_353",
    "text": "Considere a sentença: “Se cometi um crime, então serei condenado.” Uma sentença logicamente equivalente à sentença dada é:",
    "options": [
      "A) Não cometi um crime ou serei condenado.",
      "B) Se não cometi um crime, então não serei condenado.",
      "C) Se eu for condenado, então cometi um crime.",
      "D) Cometi um crime e serei condenado.",
      "E) Não cometi um crime e não serei condenado."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Pela equivalência lógica da condicional em disjunção inclusiva ($P \\to Q \\equiv \\neg P \\lor Q$ — regra do 'NéOu' / 'NEyMA'): nega-se a primeira proposição ($\neg P =$ 'Não cometi um crime'), troca-se o condicional pela disjunção 'OU', e mantém-se a segunda proposição ($Q =$ 'serei condenado'). Resulta em: 'Não cometi um crime ou serei condenado'.",
      "Incorreta. A sentença $\\neg P \\to \\neg Q$ não é equivalente a $P \\to Q$.",
      "Incorreta. A recíproca $Q \\to P$ não é equivalente à condicional original.",
      "Incorreta. Conjunção não expressa a equivalência de uma condicional.",
      "Incorreta. Conjunção de duas negações não equivale à condicional."
    ],
    "generalExplanation": "Regra da equivalência disjuntiva da condicional: $P \\to Q \\equiv \\neg P \\lor Q$ (nega o primeiro, OU, mantém o segundo). Gabarito A.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Equivalências Lógicas: Condicional para Disjunção Inclusiva (~P v Q)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_354",
    "text": "Uma sentença logicamente equivalente à afirmação: “Se eu estudei, então tirei uma boa nota no concurso” está expressa na alternativa:",
    "options": [
      "A) Não estudei e não tirei uma boa nota no concurso.",
      "B) Se eu não tirei uma boa nota no concurso, então não estudei.",
      "C) Se eu não estudei, então não tirei uma boa nota no concurso.",
      "D) Se eu tirei uma boa nota no concurso, então estudei.",
      "E) Estudei e tirei uma boa nota no concurso."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Conjunção negativa não equivale a uma condicional.",
      "Correta. Pela lei da Contrapositiva ($P \\to Q \\equiv \\neg Q \\to \\neg P$): inverte-se a ordem das proposições e negam-se ambas. Assim, 'Se tirei boa nota' vira 'Se eu NÃO tirei uma boa nota', e 'estudei' vira 'então NÃO estudei'.",
      "Incorreta. Nega ambas sem inverter a ordem (inversa da condicional).",
      "Incorreta. Inverte a ordem sem negar (recíproca da condicional).",
      "Incorreta. Conjunção afirmativa não equivale à condicional."
    ],
    "generalExplanation": "Contrapositiva da condicional: $P \\to Q \\equiv \\neg Q \\to \\neg P$. A equivalente é: 'Se eu não tirei uma boa nota no concurso, então não estudei'. Gabarito B.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Equivalências Lógicas: Contrapositiva da Condicional (Inverte e Nega)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_355",
    "text": "Dizer que: “Pedro não é pedreiro ou Paulo é paulista” é, do ponto de vista da lógica proposicional, rigorosamente o mesmo que dizer que:",
    "options": [
      "A) se Pedro é pedreiro, então Paulo é paulista",
      "B) se Paulo é paulista, então Pedro é pedreiro",
      "C) se Pedro não é pedreiro, então Paulo é paulista",
      "D) se Pedro é pedreiro, então Paulo não é paulista",
      "E) se Pedro não é pedreiro, então Paulo não é paulista"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A disjunção inclusiva $A \\lor B$ é equivalente à condicional $\\neg A \\to B$. Sendo $A =$ 'Pedro não é pedreiro' e $B =$ 'Paulo é paulista': a negação de $A$ é $\\neg A =$ 'Pedro é pedreiro'. Portanto, $\\neg A \\to B$ resulta em: 'Se Pedro é pedreiro, então Paulo é paulista'.",
      "Incorreta. Inverte a ordem de causa e consequência da implicação.",
      "Incorreta. Manteve o primeiro termo negado sem aplicar a negação ao transformá-lo em antecedente.",
      "Incorreta. Negou indevidamente o consequente da condicional.",
      "Incorreta. Manteve o antecedente negado e negou o consequente."
    ],
    "generalExplanation": "Equivalência de Disjunção para Condicional: $\\neg P \\lor Q \\equiv P \\to Q$. Sendo $\\neg P =$ 'Pedro não é pedreiro' e $Q =$ 'Paulo é paulista', a condicional equivalente é: 'Se Pedro é pedreiro, então Paulo é paulista'. Gabarito A.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Equivalências Lógicas: Disjunção para Condicional (~P v Q ≡ P -> Q)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_356",
    "text": "Considere a seguinte proposição: “serei aprovado se e somente se eu estudar muito”. A sua negação lógica pode ser escrita como:",
    "options": [
      "A) “Serei aprovado ou estudarei muito.”",
      "B) “Estudarei muito e não serei aprovado ou serei aprovado e não estudarei muito.”",
      "C) “Serei aprovado ou não estudarei muito e estudarei muito ou não serei aprovado.”",
      "D) “Serei aprovado e não estudarei muito ou não estudarei muito e não serei aprovado.”",
      "E) “Não serei aprovado e não estudarei muito ou estudarei muito e não serei aprovado.”"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A disjunção simples não equivale à negação da bicondicional.",
      "Correta. A negação da bicondicional P ↔ Q equivale a (P ∧ ~Q) ∨ (~P ∧ Q) ou (~P ∧ Q) ∨ (P ∧ ~Q): 'Estudarei muito e não serei aprovado ou serei aprovado e não estudarei muito'.",
      "Incorreta. Não corresponde à tabela-verdade da negação da bicondicional.",
      "Incorreta. Estrutura inconsistente.",
      "Incorreta. Não nega de forma lógica e completa a bicondicional."
    ],
    "generalExplanation": "A negação de (P ↔ Q) equivale a (P ∧ ~Q) ∨ (~P ∧ Q). Gabarito B.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação da Bicondicional",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_371",
    "text": "A negação lógica da proposição composta “tomei remédio e a dor não passou” é:",
    "options": [
      "A) não tomei remédio e a dor não passou.",
      "B) tomei remédio e a dor passou.",
      "C) não tomei remédio e a dor passou.",
      "D) não tomei remédio ou a dor passou.",
      "E) se a dor passou então tomei remédio."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Mantém o conectivo de conjunção 'e' e nega apenas a primeira proposição simples.",
      "Incorreta. Mantém a conjunção 'e' e nega apenas a segunda proposição.",
      "Incorreta. Nega ambas as proposições, mas erra ao manter a conjunção 'e' em vez de trocar pela disjunção 'ou'.",
      "Correta. Pela 1ª Lei de De Morgan, a negação da conjunção ~(P ∧ Q) é equivalente a (~P ∨ ~Q). Sendo P = 'tomei remédio' e Q = 'a dor não passou', temos ~P = 'não tomei remédio' e ~Q = 'a dor passou'. Logo, a negação é: 'não tomei remédio ou a dor passou'.",
      "Incorreta. Transforma a conjunção em uma estrutura condicional incorreta."
    ],
    "generalExplanation": "Pela Lei de De Morgan, a negação de (P ∧ Q) é (~P ∨ ~Q). Assim, a negação de 'tomei remédio e a dor não passou' é 'não tomei remédio ou a dor passou'. Gabarito D.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Equivalências e Negações: Negação da Conjunção (Lei de De Morgan)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_372",
    "text": "Dada a proposição: “Financiei a casa própria e saí do aluguel”. A partir deste contexto, analise as assertivas a seguir:\n\nI. Não financiei a casa própria e não saí do aluguel.\nII. Não financiei a casa própria ou não saí do aluguel.\nIII. Não é verdade que financiei a casa própria e saí do aluguel.\n\nEstá equivalente à negação da proposição dada o que se afirma apenas em:",
    "options": [
      "A) III.",
      "B) II.",
      "C) II e III.",
      "D) I e II.",
      "E) I e III."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. A assertiva II também é uma negação válida pela Lei de De Morgan.",
      "Incorreta. A assertiva III também expressa formalmente a negação de toda a proposição original.",
      "Correta. Sendo a proposição original P ∧ Q: o item II aplica a Lei de De Morgan ~(P ∧ Q) ≡ (~P ∨ ~Q) ('Não financiei a casa própria ou não saí do aluguel'); e o item III aplica a negação externa ~(P ∧ Q) ('Não é verdade que financiei a casa própria e saí do aluguel'). A assertiva I é falsa pois usa conjunção 'e'. Portanto, II e III são equivalentes à negação.",
      "Incorreta. A assertiva I erra ao utilizar a conjunção 'e'.",
      "Incorreta. A assertiva I não é equivalente à negação."
    ],
    "generalExplanation": "A negação de (P ∧ Q) é (~P ∨ ~Q) (assertiva II) e também pode ser expressa por ~(P ∧ Q) (assertiva III). Logo, apenas II e III estão corretas. Gabarito C.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Lógica Proposicional: Formas Equivalentes de Negação da Conjunção",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_373",
    "text": "A negação lógica da proposição composta “Maria sabe cozinhar ou falar inglês” é:",
    "options": [
      "A) Pode ser que Maria saiba cozinhar ou falar inglês.",
      "B) Se Maria não sabe cozinhar, então sabe falar inglês.",
      "C) Maria não sabe cozinhar mas sabe falar inglês.",
      "D) Maria não sabe cozinhar nem falar inglês.",
      "E) Maria sabe cozinhar mas não sabe falar inglês."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Frase modal sem valor de equivalência lógica formal.",
      "Incorreta. A condicional ~P → Q é equivalente à disjunção original (P ∨ Q), e não à sua negação.",
      "Incorreta. Nega apenas a primeira parte e mantém a segunda.",
      "Correta. Pela 2ª Lei de De Morgan, a negação de uma disjunção ~(P ∨ Q) é a conjunção das negações (~P ∧ ~Q). A conjunção aditiva com sentido negativo é expressa gramaticalmente pela palavra 'nem' (equivalente a 'e não'). Logo, 'Maria não sabe cozinhar nem falar inglês' equivale a 'Maria não sabe cozinhar E não sabe falar inglês'.",
      "Incorreta. Mantém a primeira parte e nega a segunda."
    ],
    "generalExplanation": "A negação de (P ∨ Q) é (~P ∧ ~Q), expressa por 'Maria não sabe cozinhar nem falar inglês'. Gabarito D.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Equivalências e Negações: Negação da Disjunção Inclusiva",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_374",
    "text": "A negação lógica da proposição “Marta joga futebol e Ana dança ballet” é:",
    "options": [
      "A) Marta não joga futebol ou Ana dança ballet.",
      "B) Marta joga futebol e Ana não dança ballet.",
      "C) Marta não joga futebol e Ana não dança ballet.",
      "D) Marta joga futebol ou Ana dança ballet.",
      "E) Marta não joga futebol ou Ana não dança ballet."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. Não negou a segunda proposição simples.",
      "Incorreta. Manteve a conjunção 'e' e negou apenas a segunda proposição.",
      "Incorreta. Negou ambas mas manteve a conjunção 'e' em vez de disjunção 'ou'.",
      "Incorreta. Trocou o conectivo sem negar as proposições simples componentes.",
      "Correta. Pela Lei de De Morgan, para negar uma conjunção P ∧ Q, nega-se a primeira (~P), nega-se a segunda (~Q) e troca-se o conectivo 'e' pelo conectivo 'ou' (~P ∨ ~Q): 'Marta não joga futebol OU Ana não dança ballet'."
    ],
    "generalExplanation": "A negação de (P ∧ Q) é (~P ∨ ~Q): 'Marta não joga futebol ou Ana não dança ballet'. Gabarito E.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Equivalências e Negações: Negação da Conjunção (Lei de De Morgan)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_375",
    "text": "Considere a seguinte proposição: “Pedro passa no concurso ou vai ao show em Brasília”. A negação lógica dessa proposição é:",
    "options": [
      "A) Pedro não passa no concurso.",
      "B) Pedro não vai ao show em Brasília.",
      "C) Se Pedro passa no concurso, então vai ao show em Brasília.",
      "D) Pedro não passa no concurso e não vai ao show em Brasília."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Nega apenas o primeiro termo.",
      "Incorreta. Nega apenas o segundo termo.",
      "Incorreta. A condicional P → Q é equivalente à disjunção ~P ∨ Q, e não à negação.",
      "Correta. A negação de uma disjunção inclusiva (P ∨ Q) é obtida negando ambas as partes e trocando o conectivo 'ou' por 'e' (~P ∧ ~Q): 'Pedro não passa no concurso E não vai ao show em Brasília'."
    ],
    "generalExplanation": "A negação de (P ∨ Q) é (~P ∧ ~Q): 'Pedro não passa no concurso e não vai ao show em Brasília'. Gabarito D.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Equivalências e Negações: Negação da Disjunção Inclusiva",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_376",
    "text": "Assinale a alternativa que apresenta a negação lógica da proposição “Olivia passou férias em Fernando de Noronha se, e somente se, Suzana trabalhou em janeiro”:",
    "options": [
      "A) Olivia não passou férias em Fernando de Noronha se, e somente se, Suzana não trabalhou em janeiro.",
      "B) Olivia não passou férias em Fernando de Noronha e Suzana trabalhou em janeiro.",
      "C) Olivia passou férias em Fernando de Noronha e Suzana não trabalhou em janeiro.",
      "D) Olivia nunca passará férias em Fernando de Noronha.",
      "E) Ou Olivia passou férias em Fernando de Noronha ou Suzana trabalhou em janeiro."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. A bicondicional (~P ↔ ~Q) tem a mesma tabela-verdade de (P ↔ Q), sendo uma equivalência e não uma negação.",
      "Incorreta. Representa apenas uma das partes da negação, não abrangendo todo o valor-verdade.",
      "Incorreta. Também representa apenas uma conjunção parcial.",
      "Incorreta. Altera o tempo verbal e foca em apenas uma proposição.",
      "Correta. A negação de uma bicondicional (P ↔ Q) equivale logicamente a uma disjunção exclusiva (P ⊕ Q): 'Ou P ou Q'. Logo: 'Ou Olivia passou férias em Fernando de Noronha ou Suzana trabalhou em janeiro'."
    ],
    "generalExplanation": "A negação da bicondicional ~(P ↔ Q) equivale à disjunção exclusiva (P ⊕ Q), expressa pela estrutura 'Ou... ou...'. Gabarito E.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação da Bicondicional por Disjunção Exclusiva",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_377",
    "text": "Assinale a opção que apresenta a negação da proposição “A casa de Cícero é de palha se, e somente se, a casa de Heitor é de madeira”:",
    "options": [
      "A) A casa de Cícero não é de palha se, e somente se, a casa de Heitor não é de madeira.",
      "B) A casa de Cícero não é de palha, e a casa de Heitor não é de madeira.",
      "C) Ou a casa de Cícero é de palha, ou a casa de Heitor é de madeira.",
      "D) Se a casa de Cícero é de palha, então a casa de Heitor não é de madeira.",
      "E) Se a casa de Cícero não é de palha, então a casa de Heitor não é de madeira."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. (~P ↔ ~Q) é logicamente equivalente a (P ↔ Q).",
      "Incorreta. Conjunção de duas proposições negativas, não nega a bicondicional.",
      "Correta. A negação lógica de P ↔ Q é a disjunção exclusiva P ⊕ Q ('Ou P ou Q'), que afirma que exatamente uma das duas afirmações é verdadeira e a outra falsa. Portanto: 'Ou a casa de Cícero é de palha, ou a casa de Heitor é de madeira'.",
      "Incorreta. Uma condicional isolada não equivale à negação da bicondicional.",
      "Incorreta. Condicional inversa/recíproca parcial."
    ],
    "generalExplanation": "A negação de (P ↔ Q) é (P ⊕ Q): 'Ou a casa de Cícero é de palha, ou a casa de Heitor é de madeira'. Gabarito C.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação da Bicondicional por Disjunção Exclusiva",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_378",
    "text": "No fim do expediente em uma sexta-feira, Mariano afirmou:\n“Amanhã eu vou dormir até o meio-dia ou não me chamo Mariano!”.\n\nA negação lógica da afirmação de Mariano é a seguinte proposição:",
    "options": [
      "A) Amanhã eu vou dormir até o meio-dia ou me chamo Mariano.",
      "B) Amanhã eu vou dormir até o meio-dia e não me chamo Mariano.",
      "C) Amanhã eu não vou dormir até o meio-dia e me chamo Mariano.",
      "D) Amanhã eu não vou dormir até o meio-dia ou me chamo Mariano."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Mantém a disjunção 'ou' e não nega a primeira parte.",
      "Incorreta. Não negou a primeira proposição simples.",
      "Correta. Sendo P = 'amanhã eu vou dormir até o meio-dia' e Q = 'não me chamo Mariano', a proposição original é (P ∨ Q). Sua negação é (~P ∧ ~Q). A negação de P é 'amanhã eu não vou dormir até o meio-dia' e a negação de Q ('não me chamo Mariano') pela dupla negação é 'me chamo Mariano'. Trocando 'ou' por 'e', temos: 'Amanhã eu não vou dormir até o meio-dia E me chamo Mariano'.",
      "Incorreta. Erra ao manter o conectivo de disjunção 'ou'."
    ],
    "generalExplanation": "Negação de (P ∨ ~Q) é (~P ∧ Q): 'Amanhã eu não vou dormir até o meio-dia e me chamo Mariano'. Gabarito C.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação da Disjunção associada à Dupla Negação",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_379",
    "text": "Uma negação lógica da afirmação: “Uma guerra é cruel e cria angústia e aumenta a insegurança” é:",
    "options": [
      "A) Uma guerra não é cruel e não cria angústia e não aumenta a insegurança.",
      "B) Uma guerra não é cruel ou cria angústia e não aumenta a insegurança.",
      "C) Uma guerra não é cruel ou não cria angústia e aumenta a insegurança.",
      "D) Uma guerra não é cruel ou não cria angústia ou não aumenta a insegurança.",
      "E) Uma guerra não é cruel e não cria angústia e aumenta a insegurança."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Erra ao manter o conectivo de conjunção 'e' entre os termos.",
      "Incorreta. Não negou a segunda proposição e misturou os conectivos 'ou' e 'e'.",
      "Incorreta. Não negou a terceira proposição simples.",
      "Correta. Pela Lei de De Morgan generalizada para três termos: ~(P ∧ Q ∧ R) ≡ (~P ∨ ~Q ∨ ~R). Negam-se todas as proposições componentes e trocam-se todos os conectivos 'e' por 'ou': 'Uma guerra não é cruel OU não cria angústia OU não aumenta a insegurança'.",
      "Incorreta. Mantém a conjunção 'e' em vez de disjunção 'ou'."
    ],
    "generalExplanation": "Negação de conjunção tripla ~(P ∧ Q ∧ R) é (~P ∨ ~Q ∨ ~R). Gabarito D.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Lei de De Morgan Generalizada: Negação de Múltiplas Conjunções",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_380",
    "text": "Veja a afirmação: “Meu copo é de vidro, ou meu prato é de louça”. Assinale a alternativa que apresenta uma negação lógica para essa afirmação:",
    "options": [
      "A) Se meu copo é de vidro, então meu prato é de louça.",
      "B) Meu copo não é de vidro, ou meu prato não é de louça.",
      "C) Meu copo é de vidro e meu prato não é de louça.",
      "D) Se meu copo não é de vidro, então meu prato não é de louça.",
      "E) Meu copo não é de vidro e meu prato não é de louça."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. Transforma em condicional.",
      "Incorreta. Negou as partes mas manteve o conectivo 'ou'.",
      "Incorreta. Não negou a primeira proposição simples.",
      "Incorreta. Estrutura condicional incorreta.",
      "Correta. Pela Lei de De Morgan, a negação de uma disjunção (P ∨ Q) é a conjunção das negações (~P ∧ ~Q): 'Meu copo não é de vidro E meu prato não é de louça'."
    ],
    "generalExplanation": "A negação de (P ∨ Q) é (~P ∧ ~Q): 'Meu copo não é de vidro e meu prato não é de louça'. Gabarito E.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Equivalências e Negações: Negação da Disjunção (Lei de De Morgan)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_381",
    "text": "Renato disse: “Eu não passei pelo bar e fui para a academia”. Sua esposa disse: “Eu sei que isso não é verdade”.\n\nConsiderando que a esposa de Renato está certa, é logicamente correto concluir que:",
    "options": [
      "A) Renato não passou pelo bar e não foi para a academia.",
      "B) Renato passou pelo bar e foi para a academia.",
      "C) Renato passou pelo bar e não foi para a academia.",
      "D) Renato passou pelo bar ou não foi para a academia.",
      "E) Renato passou pelo bar ou foi para a academia."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Mantém a negação da primeira e a conjunção 'e'.",
      "Incorreta. Nega ambas mas mantém a conjunção 'e'.",
      "Incorreta. Usa conjunção 'e' em vez de disjunção 'ou'.",
      "Correta. A proposição de Renato é uma conjunção (~P ∧ Q), onde ~P = 'não passei pelo bar' e Q = 'fui para a academia'. Se isso não é verdade, aplica-se a negação de De Morgan: ~(~P ∧ Q) ≡ P ∨ ~Q. A negação de 'não passei pelo bar' é 'passei pelo bar', e a negação de 'fui para a academia' é 'não fui para a academia', unidas pelo conectivo 'ou'. Logo: 'Renato passou pelo bar ou não foi para a academia'.",
      "Incorreta. Não negou a segunda proposição simples."
    ],
    "generalExplanation": "A negação de (~P ∧ Q) resulta em (P ∨ ~Q): 'Renato passou pelo bar ou não foi para a academia'. Gabarito D.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação da Conjunção com Proposição Simples Negativa",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_382",
    "text": "Assinale a alternativa que apresenta a negação lógica da proposição “Javier comeu tacos se, e somente se, Joana preparou nachos”:",
    "options": [
      "A) Javier não comeu tacos se, e somente se, Joana não preparou nachos.",
      "B) Javier não comeu tacos e Joana preparou nachos.",
      "C) Javier comeu tacos e Joana não preparou nachos.",
      "D) Ou Javier comeu tacos, ou Joana preparou nachos."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. (~P ↔ ~Q) é uma equivalência de (P ↔ Q), mantendo idêntica a tabela-verdade.",
      "Incorreta. Representa apenas uma das metades da negação completa.",
      "Incorreta. Representa apenas a outra metade da negação.",
      "Correta. A negação de uma proposição bicondicional (P ↔ Q) é a disjunção exclusiva (P ⊕ Q), estruturada como 'Ou P ou Q'. Logo: 'Ou Javier comeu tacos, ou Joana preparou nachos'."
    ],
    "generalExplanation": "A negação de (P ↔ Q) é (P ⊕ Q): 'Ou Javier comeu tacos, ou Joana preparou nachos'. Gabarito D.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação da Bicondicional por Disjunção Exclusiva",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_383",
    "text": "Julgue o item a seguir, considerando a proposição P: “Eu topo assumir o cargo, mas só se meu salário aumentar em 100%”.\n\nA negação da proposição P pode ser expressa como: “Ou eu topo assumir o cargo, ou meu salário aumenta em 100%”.",
    "options": [
      "Certo",
      "Errado"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A locução 'mas só se' / 'se e somente se' expressa uma relação de bicondicional lógica (P ↔ Q). A negação clássica de uma bicondicional é uma disjunção exclusiva (P ⊕ Q), traduzida pela fórmula 'Ou P ou Q'. Logo, a negação proposta está logicamente perfeita.",
      "Incorreta. O item está certo, pois a disjunção exclusiva é a negação exata da bicondicional."
    ],
    "generalExplanation": "A proposição 'P, mas só se Q' é uma bicondicional (P ↔ Q). Sua negação é a disjunção exclusiva (P ⊕ Q): 'Ou P ou Q'. O item está Certo. Gabarito Certo.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Julgamento Certo/Errado: Negação da Bicondicional ('Mas só se')",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_384",
    "text": "Qual é a negação lógica da proposição composta abaixo?\n“Se o servidor é aprovado no concurso, então ele assume o cargo”.",
    "options": [
      "A) O servidor é aprovado e não assume o cargo.",
      "B) O servidor não é aprovado e assume o cargo.",
      "C) O servidor é aprovado e assume o cargo.",
      "D) O servidor não é aprovado ou não assume o cargo.",
      "E) O servidor não é aprovado e não assume o cargo."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Para negar uma condicional (P → Q), aplica-se a regra do MANÉ: Mantém a primeira (P) E nega a segunda (~Q), obtendo a conjunção (P ∧ ~Q): 'O servidor é aprovado E não assume o cargo'.",
      "Incorreta. Negou a primeira e manteve a segunda (~P ∧ Q).",
      "Incorreta. Manteve ambas sem negar a segunda.",
      "Incorreta. Utilizou disjunção 'ou' e negou o antecedente.",
      "Incorreta. Negou ambas em estrutura de conjunção (~P ∧ ~Q)."
    ],
    "generalExplanation": "A negação de (P → Q) é (P ∧ ~Q): 'O servidor é aprovado e não assume o cargo'. Gabarito A.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação da Condicional (Regra MANÉ)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_385",
    "text": "Assinale a alternativa que apresenta corretamente a negação lógica da proposição:\n“Se Jeniffer escolhe a viagem, então Leonardo paga as passagens”.",
    "options": [
      "A) Jeniffer escolhe a viagem e Leonardo paga as passagens.",
      "B) Jeniffer escolhe a viagem e Leonardo não paga as passagens.",
      "C) Se Jeniffer não escolhe a viagem, então Leonardo não paga as passagens.",
      "D) Se Leonardo não paga as passagens, então Jeniffer não escolhe a viagem.",
      "E) Se Leonardo paga as passagens, então Jeniffer escolhe a viagem."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Manteve o consequente afirmativo.",
      "Correta. A negação de uma proposição condicional (P → Q) é a conjunção do antecedente com a negação do consequente: P ∧ ~Q (Regra do MANÉ - Mantém a primeira E Nega a segunda). Portanto: 'Jeniffer escolhe a viagem E Leonardo não paga as passagens'.",
      "Incorreta. Condicional inversa, não é a negação.",
      "Incorreta. Contrapositiva (~Q → ~P), que é equivalente à condicional original, e não sua negação.",
      "Incorreta. Condicional recíproca (Q → P)."
    ],
    "generalExplanation": "A negação de (P → Q) é (P ∧ ~Q): 'Jeniffer escolhe a viagem e Leonardo não paga as passagens'. Gabarito B.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação da Condicional (Regra MANÉ)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_386",
    "text": "Em uma auditoria, adotou-se a regra:\n“Se um relatório apresenta inconsistências, então ele deve ser revisado.”\n\nQual é a negação lógica correta dessa afirmação?",
    "options": [
      "A) Um relatório não apresenta inconsistências e é revisado.",
      "B) Um relatório apresenta inconsistências ou é revisado.",
      "C) Um relatório apresenta inconsistências e não é revisado.",
      "D) Se o relatório é revisado, então não apresenta inconsistências.",
      "E) Nenhum relatório com inconsistências é revisado."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Nega o antecedente e mantém o consequente (~P ∧ Q).",
      "Incorreta. Utiliza conectivo de disjunção 'ou'.",
      "Correta. A negação lógica de uma proposição condicional (P → Q) é a conjunção P ∧ ~Q (Regra do MANÉ - Mantém a primeira E Nega a segunda). Portanto: 'Um relatório apresenta inconsistências E não é revisado'.",
      "Incorreta. É a contrapositiva invertida em forma condicional, não a negação.",
      "Incorreta. Estrutura universal negativa categórica, não corresponde à negação da condicional."
    ],
    "generalExplanation": "A negação de P → Q é P ∧ ~Q (regra MANÉ: Mantém a primeira E Nega a segunda). Logo: 'Um relatório apresenta inconsistências e não é revisado'. Gabarito C.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação da Condicional (Regra MANÉ)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_387",
    "text": "A negação lógica da proposição “Se luto, não perco.” é:",
    "options": [
      "A) Não luto e perco.",
      "B) Luto e perco.",
      "C) Se luto, posso perder.",
      "D) Se não luto, perco.",
      "E) Se não luto, não perco."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Negou o antecedente e o consequente (~P ∧ ~Q).",
      "Correta. Sendo P = 'luto' e Q = 'não perco', a proposição dada é P → Q. Sua negação é P ∧ ~Q. Mantendo o antecedente P ('luto') e negando o consequente ~Q ('perco', pela dupla negação de 'não perco'), temos: 'Luto e perco'.",
      "Incorreta. Mantém a estrutura condicional modalizada.",
      "Incorreta. Modifica o antecedente mantendo condicional.",
      "Incorreta. Nega ambos em estrutura condicional."
    ],
    "generalExplanation": "A negação de (P → ~Q) é P ∧ ~(~Q) = P ∧ Q: 'Luto e perco'. Gabarito B.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação da Condicional com Consequente Negativo",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_388",
    "text": "Considere a seguinte afirmação:\n“Se Fulano fez o concurso, então ele foi aprovado.”\n\nAssinale a alternativa que contém uma negação lógica para a afirmação apresentada:",
    "options": [
      "A) Se Fulano fez o concurso, então ele não foi aprovado.",
      "B) Se Fulano não foi aprovado, então ele não fez o concurso.",
      "C) Se Fulano não fez o concurso, então ele não foi aprovado.",
      "D) Fulano não fez o concurso e ele não foi aprovado.",
      "E) Fulano fez o concurso e ele não foi aprovado."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. Mantém a estrutura condicional, apenas negando o consequente.",
      "Incorreta. É a contrapositiva (~Q → ~P), que é equivalente à original, não sua negação.",
      "Incorreta. Nega ambos em estrutura condicional (inversa).",
      "Incorreta. Nega ambos em conjunção (~P ∧ ~Q).",
      "Correta. Pela regra do MANÉ, a negação de P → Q é P ∧ ~Q: 'Fulano fez o concurso E ele não foi aprovado'."
    ],
    "generalExplanation": "A negação de (P → Q) é (P ∧ ~Q): 'Fulano fez o concurso e ele não foi aprovado'. Gabarito E.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação da Condicional (Regra MANÉ)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_389",
    "text": "Considere a seguinte proposição lógica: “Se João é servidor público, então ele tem direito a férias.”\n\nCom base na proposição acima, assinale a alternativa que corresponde à sua negação:",
    "options": [
      "A) João é servidor público e não tem direito a férias.",
      "B) João é servidor público e tem direito a férias.",
      "C) João é servidor público ou não tem direito a férias.",
      "D) João não é servidor público e tem direito a férias.",
      "E) João não é servidor público ou não tem direito a férias."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A negação de uma condicional (P → Q) é a conjunção P ∧ ~Q (Mantém a primeira E Nega a segunda): 'João é servidor público E não tem direito a férias'.",
      "Incorreta. Manteve ambos os termos afirmativos sem negar o consequente.",
      "Incorreta. Empregou conectivo de disjunção 'ou'.",
      "Incorreta. Negou o antecedente e manteve o consequente (~P ∧ Q).",
      "Incorreta. Empregou disjunção de negações (~P ∨ ~Q)."
    ],
    "generalExplanation": "A negação de P → Q é P ∧ ~Q: 'João é servidor público e não tem direito a férias'. Gabarito A.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Negação da Condicional (Regra MANÉ)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_390",
    "text": "Assinale a alternativa que corresponde à proposição logicamente equivalente à proposição abaixo:\n“Se o candidato estuda, então ele é aprovado.”",
    "options": [
      "A) O candidato estuda ou é aprovado.",
      "B) O candidato é aprovado somente se ele não estuda.",
      "C) O candidato não estuda e não é aprovado.",
      "D) O candidato estuda se, e somente se, é aprovado.",
      "E) Se o candidato não é aprovado, então ele não estuda."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. Disjunção afirmativa (P ∨ Q) não equivale a P → Q (que equivale a ~P ∨ Q).",
      "Incorreta. Sentença invertida com negação imprópria.",
      "Incorreta. Conjunção de negações (~P ∧ ~Q).",
      "Incorreta. A bicondicional não equivale à condicional simples.",
      "Correta. Pela regra da contrapositiva (transposição): P → Q ≡ ~Q → ~P (Inverte e Nega tudo). Logo: 'Se o candidato não é aprovado, então ele não estuda'."
    ],
    "generalExplanation": "A equivalência da condicional pela contrapositiva é P → Q ≡ ~Q → ~P: 'Se o candidato não é aprovado, então ele não estuda'. Gabarito E.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Equivalência da Condicional: Contrapositiva (~Q → ~P)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_391",
    "text": "Considere verdadeira a afirmação:\n“Se tomo café, não durmo.”\n\nAnalise as afirmações a seguir como consequência lógica da afirmação dada:\nI. Se dormi então não tomei café.\nII. Se não tomo café então durmo.\nIII. Se não dormi então tomei café.\n\nDecorre(m) logicamente da afirmação dada:",
    "options": [
      "A) apenas a I.",
      "B) apenas a II.",
      "C) apenas as II e III.",
      "D) apenas as I e III.",
      "E) I, II e III."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Sendo P = 'tomo café' e Q = 'não durmo', temos P → Q. A contrapositiva válida é ~Q → ~P: a negação de 'não durmo' é 'dormi' e a negação de 'tomo café' é 'não tomei café', gerando 'Se dormi então não tomei café' (assertiva I). As assertivas II (~P → ~Q, falácia da negação do antecedente) e III (~Q → P, falácia da afirmação do consequente) são inválidas.",
      "Incorreta. A assertiva II é a falácia da negação do antecedente.",
      "Incorreta. Ambas II e III são falácias lógicas formais.",
      "Incorreta. A assertiva III é a falácia da afirmação do consequente.",
      "Incorreta. Apenas a assertiva I é consequência lógica válida."
    ],
    "generalExplanation": "Dada a condicional P → ~Q, a única consequência lógica e equivalente válida é a contrapositiva Q → ~P ('Se dormi, então não tomei café' - Item I). Gabarito A.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Equivalências e Falácias da Condicional (Contrapositiva)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_392",
    "text": "Assinale a alternativa que apresenta uma proposição equivalente a “Se George é pontual, então Amanda é meticulosa”.",
    "options": [
      "A) Se Amanda não é meticulosa, então George não é pontual.",
      "B) Se Amanda é meticulosa, então George é pontual.",
      "C) Se George não é pontual, então Amanda não é meticulosa.",
      "D) Se George é pontual, então Amanda não é meticulosa.",
      "E) Se Amanda é meticulosa, então George não é pontual."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A equivalência lógica da condicional pela contrapositiva é P → Q ≡ ~Q → ~P. Portanto, inverte-se a ordem e negam-se ambas as proposições: 'Se Amanda não é meticulosa, então George não é pontual'.",
      "Incorreta. Inverte sem negar (recíproca / falácia da afirmação do consequente).",
      "Incorreta. Nega sem inverter (inversa / falácia da negação do antecedente).",
      "Incorreta. Nega apenas o consequente.",
      "Incorreta. Inverte e nega apenas uma parte."
    ],
    "generalExplanation": "P → Q equivale pela contrapositiva a ~Q → ~P: 'Se Amanda não é meticulosa, então George não é pontual'. Gabarito A.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Equivalência da Condicional: Contrapositiva (~Q → ~P)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_393",
    "text": "Considere verdadeira a seguinte proposição:\n“Se hoje é terça-feira, então hoje eu não trabalho.”\n\nEssa proposição é logicamente equivalente à proposição:",
    "options": [
      "A) “Se hoje não é terça-feira, então hoje eu trabalho.”",
      "B) “Se hoje não é terça-feira, então hoje eu não trabalho.”",
      "C) “Se hoje eu não trabalho, então hoje é terça-feira.”",
      "D) “Se hoje eu trabalho, então hoje não é terça-feira.”",
      "E) “Hoje é terça-feira e hoje eu não trabalho.”"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Inversa (~P → ~Q), falácia da negação do antecedente.",
      "Incorreta. Nega apenas o antecedente mantendo o consequente.",
      "Incorreta. Recíproca (Q → P), falácia da afirmação do consequente.",
      "Correta. Pela contrapositiva: P → ~Q ≡ ~(~Q) → ~P ≡ Q → ~P. Sendo P = 'hoje é terça-feira' e ~Q = 'hoje eu não trabalho', a contrapositiva é: 'Se hoje eu trabalho, então hoje não é terça-feira'.",
      "Incorreta. Conjunção não equivale a uma condicional."
    ],
    "generalExplanation": "A contrapositiva de P → ~Q é Q → ~P: 'Se hoje eu trabalho, então hoje não é terça-feira'. Gabarito D.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Equivalência da Condicional: Contrapositiva com Negação",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_394",
    "text": "Considere a seguinte afirmação:\n“Se estou participando deste concurso, então tenho o Ensino Superior completo.”\n\nAssinale a alternativa que contém uma afirmação logicamente equivalente à afirmação apresentada:",
    "options": [
      "A) Estou participando deste concurso e não tenho o Ensino Superior completo.",
      "B) Não estou participando deste concurso e não tenho o Ensino Superior completo.",
      "C) Estou participando deste concurso e tenho o Ensino Superior completo.",
      "D) Se não tenho o Ensino Superior completo, então não estou participando deste concurso.",
      "E) Se tenho o Ensino Superior completo, então estou participando deste concurso."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Trata-se da negação (P ∧ ~Q), e não da equivalência lógica.",
      "Incorreta. Conjunção de duas negações (~P ∧ ~Q).",
      "Incorreta. Conjunção afirmativa (P ∧ Q).",
      "Correta. Pela regra da contrapositiva: P → Q ≡ ~Q → ~P. Logo: 'Se não tenho o Ensino Superior completo, então não estou participando deste concurso'.",
      "Incorreta. Inverte a ordem sem negar as proposições (recíproca)."
    ],
    "generalExplanation": "Pela contrapositiva, P → Q ≡ ~Q → ~P: 'Se não tenho o Ensino Superior completo, então não estou participando deste concurso'. Gabarito D.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Equivalência da Condicional: Contrapositiva (~Q → ~P)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_395",
    "text": "Considerando a proposição P: “Não prometo que você voltará, e, se voltar, não será o mesmo.”, julgue o item seguinte, em relação a aspectos da lógica sentencial dessa proposição.\n\nA proposição P é equivalente a “Não prometo que você voltará, e, se você for o mesmo, não voltará.”.\n( ) Certo ( ) Errado",
    "options": [
      "Certo",
      "Errado"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A proposição é composta por uma conjunção em que a segunda parte é a condicional 'se voltar, não será o mesmo' (V → ~M). Pela regra da contrapositiva, (V → ~M) equivale a ~(~M) → ~V, ou seja, 'se for o mesmo, não voltará' (M → ~V). Mantendo a primeira parte intacta, toda a sentença P permanece logicamente equivalente.",
      "Incorreta. A transformação efetuada na segunda proposição foi a contrapositiva estrita, preservando rigorosamente o valor lógico da sentença."
    ],
    "generalExplanation": "A segunda oração 'se voltar, não será o mesmo' (V → ~M) equivale pela contrapositiva a 'se você for o mesmo, não voltará' (M → ~V). O item está Certo. Gabarito Certo.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Julgamento Certo/Errado: Equivalência da Condicional pela Contrapositiva",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_396",
    "text": "Considere a seguinte sentença: “Se, de fato, equivoquei-me, então devo ser punido.”\n\nUma sentença logicamente equivalente à sentença dada é:",
    "options": [
      "A) “Se, de fato, não me equivoquei, então não serei punido.”",
      "B) “Fui punido, logo me equivoquei.”",
      "C) “Eu me equivoquei e serei punido.”",
      "D) “Não me equivoquei ou devo ser punido.”"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Inversa (~P → ~Q), falácia da negação do antecedente.",
      "Incorreta. Recíproca (Q → P), falácia da afirmação do consequente.",
      "Incorreta. Conjunção afirmativa (P ∧ Q).",
      "Correta. Pela regra de equivalência da condicional em disjunção (Regra do Neymar / NEyMA): P → Q ≡ ~P ∨ Q (NEga a primeira OU MAntém a segunda). Logo: 'Não me equivoquei OU devo ser punido'."
    ],
    "generalExplanation": "A equivalência da condicional em disjunção inclusiva (regra NEyMA) estabelece que P → Q ≡ ~P ∨ Q: 'Não me equivoquei ou devo ser punido'. Gabarito D.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Equivalência da Condicional para Disjunção (Regra NEyMA)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_397",
    "text": "Assinale a alternativa que apresenta uma proposição logicamente equivalente a “Ayra não é novata ou Bernardo é veterano”.",
    "options": [
      "A) Ayra é novata se, e somente se, Bernardo é veterano.",
      "B) Se Ayra não é novata, então Bernardo é veterano.",
      "C) Se Ayra é novata, então Bernardo não é veterano.",
      "D) Se Ayra é novata, então Bernardo é veterano.",
      "E) Ayra não é novata e Bernardo não é veterano."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Bicondicional não equivale a uma disjunção inclusiva.",
      "Incorreta. Mantém o primeiro termo negado no antecedente, o que equivaleria a ~(~P) ∨ Q = P ∨ Q.",
      "Incorreta. Negou o consequente.",
      "Correta. Pela regra inversa do NEyMA: uma disjunção (~P ∨ Q) equivale à condicional (P → Q). Sendo ~P = 'Ayra não é novata', a sua negação é P = 'Ayra é novata', e mantendo o consequente Q = 'Bernardo é veterano', temos: 'Se Ayra é novata, então Bernardo é veterano'."
    ],
    "generalExplanation": "A disjunção (~P ∨ Q) equivale à condicional (P → Q): 'Se Ayra é novata, então Bernardo é veterano'. Gabarito D.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Equivalência da Disjunção para Condicional (NEyMA Inversa)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_398",
    "text": "Assinale a opção que apresenta uma proposição logicamente equivalente a “Se o tempo voa, então dinheiro não cresce em árvore”.",
    "options": [
      "A) O tempo voa, ou o dinheiro cresce em árvore.",
      "B) O tempo voa, e o dinheiro não cresce em árvore.",
      "C) O tempo não voa, ou o dinheiro não cresce em árvore.",
      "D) O tempo não voa, ou o dinheiro cresce em árvore.",
      "E) O tempo voa, ou o dinheiro não cresce em árvore."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Manteve o primeiro termo sem negar.",
      "Incorreta. Conjunção (P ∧ Q) não equivale a condicional.",
      "Correta. Pela regra NEyMA: P → Q ≡ ~P ∨ Q. Aqui, P = 'o tempo voa' e Q = 'dinheiro não cresce em árvore'. Negando a primeira (~P) e mantendo a segunda com disjunção (∨ Q), obtemos: 'O tempo não voa, OU o dinheiro não cresce em árvore'.",
      "Incorreta. Negou a segunda proposição simples.",
      "Incorreta. Manteve a primeira proposição sem negar."
    ],
    "generalExplanation": "Pela regra NEyMA (P → Q ≡ ~P ∨ Q): nega a primeira ('O tempo não voa') OU mantém a segunda ('o dinheiro não cresce em árvore'). Gabarito C.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Equivalência da Condicional para Disjunção (Regra NEyMA)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_399",
    "text": "Assinale a alternativa que apresenta uma proposição logicamente equivalente a “Oswaldo não acredita em horóscopo ou Pedro é do signo de Peixes”.",
    "options": [
      "A) Se Oswaldo acredita em horóscopo, então Pedro é do signo de Peixes.",
      "B) Se Pedro é do signo de Peixes, então Oswaldo acredita em horóscopo.",
      "C) Pedro não é do signo de Peixes ou Oswaldo acredita em horóscopo.",
      "D) Oswaldo acredita em horóscopo e Pedro é do signo de Peixes.",
      "E) Oswaldo não acredita em horóscopo e Pedro não é do signo de Peixes."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A disjunção (~P ∨ Q) equivale logicamente à condicional (P → Q) pela regra NEyMA inversa: nega a primeira parte (~P vira P: 'Oswaldo acredita em horóscopo') e mantém a segunda (Q: 'Pedro é do signo de Peixes'), estruturando como condicional 'Se... então...': 'Se Oswaldo acredita em horóscopo, então Pedro é do signo de Peixes'.",
      "Incorreta. Inverteu a ordem dos termos (Q → P).",
      "Incorreta. Modificou indevidamente os termos da disjunção.",
      "Incorreta. Conjunção não é equivalente.",
      "Incorreta. Conjunção de negações não é equivalente."
    ],
    "generalExplanation": "A disjunção (~P ∨ Q) equivale à condicional (P → Q): 'Se Oswaldo acredita em horóscopo, então Pedro é do signo de Peixes'. Gabarito A.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Equivalência da Disjunção para Condicional (NEyMA Inversa)",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_400",
    "text": "Considere a seguinte afirmação:\n“Se como verduras e não como gorduras saturadas, então minha saúde agradece.”\n\nA equivalente lógica dessa afirmação é:",
    "options": [
      "A) Se não como verduras e como gorduras saturadas, então minha saúde não agradece.",
      "B) Não como verduras e como gorduras saturadas ou minha saúde agradece.",
      "C) Se minha saúde agradece, então como verduras e não como gorduras saturadas.",
      "D) Como verduras ou não como gorduras saturadas e minha saúde agradece.",
      "E) Se minha saúde não agradece, então não como verduras ou como gorduras saturadas."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. Negou o antecedente mantendo a conjunção 'e', sem aplicar De Morgan.",
      "Incorreta. Misturou conectivos sem a equivalência correta da condicional.",
      "Incorreta. Inverteu a ordem sem negar (recíproca / falácia da afirmação do consequente).",
      "Incorreta. Estrutura sem valor de equivalência lógica formal.",
      "Correta. A proposição é da forma (P ∧ ~Q) → R. Pela contrapositiva: ~R → ~(P ∧ ~Q). Pela 1ª Lei de De Morgan: ~(P ∧ ~Q) ≡ (~P ∨ Q). Logo, a condicional equivalente é: ~R → (~P ∨ Q) = 'Se minha saúde não agradece, então não como verduras OU como gorduras saturadas'."
    ],
    "generalExplanation": "Pela contrapositiva combinada com a Lei de De Morgan: ~(R) → ~(P ∧ ~Q) ≡ ~R → (~P ∨ Q): 'Se minha saúde não agradece, então não como verduras ou como gorduras saturadas'. Gabarito E.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Raciocínio Lógico e Matemática - Equivalência da Condicional pela Contrapositiva combinada com De Morgan",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_401",
    "text": "Sobre as propriedades geométricas de polígonos de quatro lados (quadriláteros), assinale a afirmação tecnicamente INCORRETA:",
    "options": [
      "A) Em um trapézio isósceles, os ângulos adjacentes à mesma base são congruentes.",
      "B) As diagonais de um retângulo interceptam-se em seus pontos médios e são congruentes.",
      "C) Todo paralelogramo que possui diagonais perpendiculares é um losango.",
      "D) O quadrado é o único quadrilátero que é, simultaneamente, um retângulo e um losango.",
      "E) Em um trapézio retângulo, as diagonais são obrigatoriamente perpendiculares entre si."
    ],
    "correctIndex": 4,
    "explanations": [
      "Correta nas propriedades. No trapézio isósceles, os ângulos de cada base são iguais e as diagonais são congruentes.",
      "Correta nas propriedades. Retângulos são paralelogramos equiângulos com diagonais congruentes que se cortam no ponto médio.",
      "Correta nas propriedades. A perpendicularidade das diagonais em um paralelogramo é condição necessária e suficiente para caracterizar o losango (equilátero).",
      "Correta nas propriedades. O quadrado possui simultaneamente quatro ângulos retos (retângulo) e quatro lados iguais (losango).",
      "Incorreta (aponta a afirmação falsa). O trapézio retângulo possui dois ângulos retos adjacentes a um lado não paralelo, mas suas diagonais em geral NÃO são perpendiculares."
    ],
    "generalExplanation": "As diagonais de um trapézio retângulo não são necessariamente perpendiculares entre si. Essa propriedade só ocorre em casos muito específicos e não é regra geral. Gabarito E.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Matemática - Geometria Plana: Propriedades dos Quadriláteros Notáveis",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_402",
    "text": "Seja um triângulo ABC onde o ângulo externo no vértice A mede 110°. Se o ângulo interno no vértice B é o triplo do ângulo interno no vértice C, pode-se afirmar que o triângulo ABC é classificado quanto aos ângulos como:",
    "options": [
      "A) Equilátero",
      "B) Retângulo",
      "C) Acutângulo",
      "D) Obtusângulo",
      "E) Isósceles"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Para ser equilátero (equiângulo), todos os três ângulos internos deveriam medir 60°.",
      "Incorreta. Nenhum dos ângulos internos calculados é igual a 90°.",
      "Correta. Pelo Teorema do Ângulo Externo: Ângulo Externo em A = B + C → 110° = 3C + C → 4C = 110° → C = 27,5°. Assim, B = 3 × 27,5° = 82,5°. O ângulo interno A = 180° - 110° = 70°. Como todos os ângulos internos (70°, 82,5° e 27,5°) são agudos (menores que 90°), o triângulo é classificado como acutângulo.",
      "Incorreta. Para ser obtusângulo, um dos ângulos internos deveria ser estritamente maior que 90°.",
      "Incorreta. O triângulo é escaleno, pois possui três ângulos distintos (70° ≠ 82,5° ≠ 27,5°)."
    ],
    "generalExplanation": "Os ângulos internos medem 70°, 82,5° e 27,5°. Como todos são menores que 90°, o triângulo é acutângulo. Gabarito C.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Matemática - Geometria Plana: Teorema do Ângulo Externo e Classificação de Triângulos",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_403",
    "text": "Um trapézio isósceles possui base menor medindo 10 cm e base maior medindo 22 cm. Sabendo que os lados não paralelos (lados oblíquos) medem 10 cm cada, a área desse trapézio é:",
    "options": [
      "A) 96 cm²",
      "B) 128 cm²",
      "C) 160 cm²",
      "D) 192 cm²",
      "E) 256 cm²"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Erro no cálculo da altura ou na fórmula da área.",
      "Correta. A projeção dos lados oblíquos na base maior é dada por x = (22 - 10) / 2 = 6 cm. No triângulo retângulo formado pela altura h, pela projeção 6 e pelo lado oblíquo 10 (hipotenusa): h² + 6² = 10² → h² + 36 = 100 → h² = 64 → h = 8 cm. Área do trapézio = (B + b) × h / 2 = (22 + 10) × 8 / 2 = 32 × 4 = 128 cm².",
      "Incorreta. Resultaria de usar a medida do lado oblíquo (10) como se fosse a altura do trapézio.",
      "Incorreta. Erro aritmético no cálculo da área.",
      "Incorreta. Resultaria de não dividir o produto por 2 na fórmula da área."
    ],
    "generalExplanation": "Pelo Teorema de Pitágoras no triângulo lateral, a altura h = 8 cm. Área = (22 + 10) × 8 / 2 = 128 cm². Gabarito B.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Matemática - Geometria Plana: Área do Trapézio Isósceles e Teorema de Pitágoras",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_404",
    "text": "No plano cartesiano, um ponto P possui coordenadas (2, 3) e um ponto Q possui coordenadas (10, 18). A menor distância euclidiana entre esses dois pontos é um valor:",
    "options": [
      "A) Inteiro, igual a 15.",
      "B) Irracional, entre 16 e 17.",
      "C) Inteiro, igual a 17.",
      "D) Irracional, entre 18 e 19.",
      "E) Inteiro, igual a 25."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. 15 é apenas a variação vertical das ordenadas (Δy = 18 - 3 = 15).",
      "Incorreta. O valor é um número inteiro exato.",
      "Correta. A distância entre dois pontos no plano é d = √[(x₂ - x₁)² + (y₂ - y₁)²]. Δx = 10 - 2 = 8; Δy = 18 - 3 = 15. Aplicando a fórmula: d = √(8² + 15²) = √(64 + 225) = √289 = 17 (terno pitagórico 8, 15, 17).",
      "Incorreta. Erro de cálculo na soma dos quadrados.",
      "Incorreta. Resultaria da soma linear simples das coordenadas sem aplicar a métrica euclidiana."
    ],
    "generalExplanation": "d = √[(10 - 2)² + (18 - 3)²] = √(64 + 225) = √289 = 17 (número inteiro exato). Gabarito C.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Matemática - Geometria Analítica: Distância Euclidiana entre Dois Pontos",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_405",
    "text": "Analise as seguintes afirmações sobre a aplicação do Teorema de Pitágoras e assinale a alternativa correta:\nI. Em um triângulo de lados 7, 24 e 25, o ângulo oposto ao lado 25 é reto.\nII. Se a diagonal de um quadrado dobrar de tamanho, sua área quadruplicará.\nIII. O Teorema de Pitágoras é suficiente para calcular qualquer lado de um triângulo, desde que se conheçam os outros dois lados, independentemente dos ângulos internos.\n\nEstá(ão) correta(s):",
    "options": [
      "A) Apenas a afirmação I está correta.",
      "B) Apenas a afirmação II está correta.",
      "C) Apenas as afirmações I e II estão corretas.",
      "D) Apenas as afirmações II e III estão corretas.",
      "E) Todas as afirmações estão corretas."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. A afirmação II também é verdadeira.",
      "Incorreta. A afirmação I também é verdadeira.",
      "Correta. I é verdadeira: 7² + 24² = 49 + 576 = 625 = 25², logo o triângulo é retângulo e o maior lado (25) é a hipotenusa, oposta ao ângulo reto. II é verdadeira: a área do quadrado em função da diagonal d é A = d² / 2; se d dobra (2d), a área passa a (2d)² / 2 = 4d² / 2 = 4A (quadruplica). III é falsa: o Teorema de Pitágoras é restrito a triângulos retângulos (para triângulos quaisquer usa-se a Lei dos Cossenos).",
      "Incorreta. A afirmação III é falsa.",
      "Incorreta. A afirmação III invalida a opção."
    ],
    "generalExplanation": "Afirmação I está correta (terno pitagórico 7, 24, 25); Afirmação II está correta (relação quadrática da área com a diagonal); Afirmação III está incorreta (Pitágoras exige ângulo reto). Gabarito C.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Matemática - Geometria Plana: Teorema de Pitágoras e Relações de Área",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_406",
    "text": "Em um problema de geometria aplicada, um topógrafo identifica uma região em formato de setor circular. O ângulo central desse setor é de 60° e o raio mede 12 metros. Para cercar essa região (incluindo o arco e os dois raios que o delimitam), qual o comprimento total de material necessário? (Considere π = 3)",
    "options": [
      "A) 12 metros",
      "B) 24 metros",
      "C) 36 metros",
      "D) 48 metros",
      "E) 72 metros"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. 12 m é apenas o comprimento do arco circular, sem considerar os dois raios que fecham a região.",
      "Incorreta. 24 m é apenas a soma dos dois raios (12 + 12 = 24), esquecendo o arco.",
      "Correta. Comprimento do arco L = (θ / 360°) × 2 × π × R = (60° / 360°) × 2 × 3 × 12 = (1 / 6) × 72 = 12 metros. Para cercar toda a região do setor, cerca-se o arco mais os dois raios: Perímetro = L + 2R = 12 + 2(12) = 12 + 24 = 36 metros.",
      "Incorreta. Erro no cálculo das proporções do setor.",
      "Incorreta. 72 m é o comprimento da circunferência inteira (2 × 3 × 12)."
    ],
    "generalExplanation": "Arco = (60/360) × 2 × 3 × 12 = 12 m. Perímetro total do setor = Arco + 2 × Raio = 12 + 24 = 36 m. Gabarito C.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Matemática - Geometria Plana: Perímetro de Setor Circular",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_407",
    "text": "Em um estudo técnico sobre polígonos, afirma-se que o semiperímetro (p) de um determinado octógono regular é igual a 32 cm. Com base nessa informação, qual é a medida de cada lado desse octógono?",
    "options": [
      "A) 4 cm",
      "B) 8 cm",
      "C) 16 cm",
      "D) 32 cm",
      "E) 64 cm"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Resultaria de dividir diretamente o semiperímetro (32) por 8.",
      "Correta. O semiperímetro (p) é a metade do perímetro total (2p). Se p = 32 cm, o perímetro total é 2p = 2 × 32 = 64 cm. Como o octógono regular possui 8 lados iguais: Lado = 64 / 8 = 8 cm.",
      "Incorreta. Erro na razão entre semiperímetro e lados.",
      "Incorreta. 32 cm é o semiperímetro.",
      "Incorreta. 64 cm é o perímetro total."
    ],
    "generalExplanation": "Perímetro total = 2 × 32 = 64 cm. Medida de cada lado = 64 / 8 = 8 cm. Gabarito B.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Matemática - Geometria Plana: Polígonos Regulares e Semiperímetro",
    "nivelSuperior": false
  },
  {
    "id": "rlm_sim_408",
    "text": "Uma peça metálica tem o formato de uma “escada” ortogonal (todos os ângulos internos são de 90°). A base horizontal total da peça mede 0,15 metros e a altura vertical total mede 10 centímetros. Qual é o perímetro total dessa peça em centímetros?",
    "options": [
      "A) 25 cm",
      "B) 30 cm",
      "C) 40 cm",
      "D) 50 cm",
      "E) 60 cm"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. 25 cm é o semiperímetro (apenas base + altura).",
      "Incorreta. Erro de conversão de unidades.",
      "Incorreta. Erro no cálculo do contorno.",
      "Correta. Em polígonos ortogonais em escada, a soma de todos os degraus horizontais é igual à base total e a soma de todos os degraus verticais é igual à altura total. Convertendo as unidades: Base = 0,15 m = 15 cm; Altura = 10 cm. O perímetro total é igual ao do retângulo circunscrito: P = 2 × (Base + Altura) = 2 × (15 + 10) = 2 × 25 = 50 cm.",
      "Incorreta. Erro aritmético no cálculo."
    ],
    "generalExplanation": "Pela projeção ortogonal dos degraus, o perímetro equivale ao do retângulo circunscrito: P = 2 × (15 cm + 10 cm) = 50 cm. Gabarito D.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Matemática - Geometria Plana: Perímetro de Figuras Ortogonais Compostas",
    "nivelSuperior": false
  }
];
