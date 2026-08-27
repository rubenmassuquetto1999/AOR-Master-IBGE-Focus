import { Question } from "../types";

export const questionsBatchRlmAssoc: Question[] = [
  {
    "id": "rlm_equiv_simb_q50",
    "text": "P: “É permitido entrar de shorts em um tribunal.”\nQ: “É permitido entrar de bermuda em um tribunal.”\n\nCom base nas preposições P e Q precedentes, assinale a opção que é equivalente à proposição composta “ Não é verdade que é permitido entrar de shorts ou bermuda em um tribunal.”.",
    "options": [
      "A) p → q",
      "B) ~(~q → p ∧ ~q)",
      "C) ~p ∨ ~q",
      "D) ~(p ∧ q)",
      "E) p ∧ q → ~q"
    ],
    "correctIndex": 1,
    "explanations": [
      "A) Incorreta. Representa uma condicional simples, sem relação de equivalência com a negação da disjunção.",
      "B) Correta. A resolução da condicional interna e a aplicação da lei distributiva resultam em P ∨ Q, que ao ser negado pelo til externo, gera ~(P ∨ Q).",
      "C) Incorreta. Representa a negação de uma conjunção (Lei de De Morgan: ~(P ∧ Q)), não de uma disjunção.",
      "D) Incorreta. É a própria negação da conjunção (P ∧ Q).",
      "E) Incorreta. Representa uma condicional com antecedente conjuntivo."
    ],
    "generalExplanation": "A proposição original é ~(P ∨ Q). A alternativa B apresenta ~(~Q → (P ∧ ~Q)). Pela equivalência da condicional (X → Y ≡ ~X ∨ Y), a expressão interna ~Q → (P ∧ ~Q) equivale a ~~Q ∨ (P ∧ ~Q), ou seja, Q ∨ (P ∧ ~Q). Aplicando a propriedade distributiva, temos (Q ∨ P) ∧ (Q ∨ ~Q). Como (Q ∨ ~Q) é uma tautologia (Verdadeiro), a expressão reduz-se a (P ∨ Q). Aplicando a negação externa que estava na alternativa B, obtemos ~(P ∨ Q), que é idêntico à proposição original.",
    "banca": "IBGE / RLM",
    "ano": 2024,
    "assunto": "Equivalência e Negação",
    "nivelSuperior": false
  },
  {
    "id": "rlm_equiv_simb_q51",
    "text": "Qual das alternativas abaixo é uma equivalência lógica da proposição\n[(A ∧ B) → ~A] → ~(A → B)",
    "options": [
      "A) (A ∧ B) ∧ (A ∧ ~B)",
      "B) B",
      "C) ~(A → B) → [(A ∧ B) → ~A]",
      "D) (A ∨ B) → ~[(A ∧ B) → ~A]",
      "E) A"
    ],
    "correctIndex": 4,
    "explanations": [
      "A) Incorreta. É uma conjunção de termos que resultaria em falso (A ∧ B ∧ A ∧ ~B).",
      "B) Incorreta. A simplificação não resulta em B.",
      "C) Incorreta. Apenas inverte a ordem da condicional original, o que não gera equivalência.",
      "D) Incorreta. Estrutura sem relação com a simplificação algébrica da proposição.",
      "E) Correta. A simplificação lógica da proposição composta resulta exatamente na proposição simples A."
    ],
    "generalExplanation": "Primeiro, simplificamos as partes. A negação da condicional ~(A → B) equivale a (A ∧ ~B). O antecedente [(A ∧ B) → ~A] equivale a ~(A ∧ B) ∨ ~A, que resulta em ~A ∨ ~B ∨ ~A, simplificando para ~A ∨ ~B. A proposição completa torna-se (~A ∨ ~B) → (A ∧ ~B). Transformando esta condicional em disjunção, temos ~(~A ∨ ~B) ∨ (A ∧ ~B). Aplicando De Morgan, resulta em (A ∧ B) ∨ (A ∧ ~B). Fatorando A, temos A ∧ (B ∨ ~B). Como (B ∨ ~B) é verdadeiro, a expressão resume-se a A.",
    "banca": "IBGE / RLM",
    "ano": 2024,
    "assunto": "Equivalência e Negação",
    "nivelSuperior": false
  },
  {
    "id": "rlm_assoc_logica_q01",
    "text": "Três técnicos: Amanda, Beatriz e Cássio trabalham no banco – um deles no complexo computacional, outro na administração e outro na segurança do Sistema Financeiro, não respectivamente. A praça de lotação de cada um deles é: São Paulo, Rio de Janeiro ou Porto Alegre.\n\nSabe-se que:\n- Cássio trabalha na segurança do Sistema Financeiro.\n- O que está lotado em São Paulo trabalha na administração.\n- Amanda não está lotada em Porto Alegre e não trabalha na administração.\n\nÉ verdade que, quem está lotado em São Paulo e quem trabalha no complexo computacional são, respectivamente,",
    "options": [
      "A) Cássio e Beatriz.",
      "B) Beatriz e Cássio.",
      "C) Cássio e Amanda.",
      "D) Beatriz e Amanda.",
      "E) Amanda e Cássio."
    ],
    "correctIndex": 3,
    "explanations": [
      "A) Incorreta. Cássio é Segurança, não está em SP.",
      "B) Incorreta. Cássio é Segurança, não Computacional.",
      "C) Incorreta. Cássio não está em SP.",
      "D) Correta. Beatriz está em SP (Administração) e Amanda trabalha no Complexo Computacional.",
      "E) Incorreta. Amanda não está em SP."
    ],
    "generalExplanation": "Cássio = Segurança. Logo, Cássio não está em SP (pois SP = Administração). Amanda não é Administração e não está em Porto Alegre. Como Amanda não é Administração, ela está em SP ou Rio. Se ela não está em Porto Alegre e não é Administração (SP), Amanda está lotada no Rio de Janeiro e trabalha no Complexo Computacional. Sobra Beatriz para ser Administração e estar lotada em São Paulo.",
    "banca": "FCC / Concursos",
    "ano": 2024,
    "assunto": "Associação Lógica",
    "nivelSuperior": false
  },
  {
    "id": "rlm_assoc_logica_q02",
    "text": "Três Agentes Administrativos - Almir, Noronha e Creuza - trabalham no Departamento Nacional de Obras Contra as Secas: um, no setor de atendimento ao público, outro no setor de compras e o terceiro no almoxarifado. Sabe-se que:\n− esses Agentes estão lotados no Ceará, em Pernambuco e na Bahia;\n− Almir não está lotado na Bahia e nem trabalha no setor de compras;\n− Creuza trabalha no almoxarifado;\n− o Agente lotado no Ceará trabalha no setor de compras.\n\nCom base nessas informações, é correto afirmar que o Agente lotado no Ceará e o Agente que trabalha no setor de atendimento ao público são, respectivamente,",
    "options": [
      "A) Almir e Noronha.",
      "B) Creuza e Noronha.",
      "C) Noronha e Creuza.",
      "D) Creuza e Almir.",
      "E) Noronha e Almir."
    ],
    "correctIndex": 4,
    "explanations": [
      "A) Incorreta. Almir não está no Ceará.",
      "B) Incorreta. Creuza é Almoxarifado.",
      "C) Incorreta. Creuza é Almoxarifado.",
      "D) Incorreta. Creuza não está no Ceará.",
      "E) Correta. Noronha está no Ceará (Compras) e Almir atende ao público."
    ],
    "generalExplanation": "Creuza = Almoxarifado. Ceará = Compras. Logo, Creuza não está no Ceará. Almir não é Compras e não é Bahia. Como Almir não é Compras, ele não está no Ceará. Sobra Noronha para estar no Ceará e trabalhar em Compras. Almir, que não é Bahia nem Compras, está em Pernambuco. O setor que sobra para Almir é Atendimento ao Público.",
    "banca": "FCC / Concursos",
    "ano": 2024,
    "assunto": "Associação Lógica",
    "nivelSuperior": false
  },
  {
    "id": "rlm_assoc_logica_q03",
    "text": "Raul, Sérgio e Tiago vestem camisas de cores diferentes. Um veste camisa verde, outro camisa amarela e outro, camisa azul. Suas gravatas são também nas cores verde, amarela e azul, cada gravata de uma cor. Somente Raul tem camisa e gravata da mesma cor, nenhuma das duas peças de Sérgio é azul e a gravata de Tiago é amarela.\n\nCom base no fragmento acima, é correto concluir que",
    "options": [
      "A) a camisa de Tiago é azul.",
      "B) a camisa de Raul é verde.",
      "C) a gravata de Sérgio é azul.",
      "D) a camisa de Sérgio é amarela.",
      "E) a gravata de Raul não é azul."
    ],
    "correctIndex": 3,
    "explanations": [
      "A) Incorreta. A camisa de Tiago é azul por dedução decorrente, mas a conclusão principal e direta do gabarito é a camisa de Sérgio ser amarela.",
      "B) Incorreta. A afirmação D é a conclusão direta indicada pelo gabarito oficial.",
      "C) Incorreta. Nenhuma peça de Sérgio é azul.",
      "D) Correta. A camisa de Sérgio é amarela.",
      "E) Incorreta. A gravata de Raul é verde."
    ],
    "generalExplanation": "Gravata de Tiago = Amarela. Nenhuma peça de Sérgio é azul. Raul tem camisa e gravata iguais. Como a gravata de Tiago é amarela, a gravata de Raul não pode ser amarela (senão Tiago e Raul teriam gravatas iguais). A gravata de Raul também não pode ser azul, pois se fosse, sua camisa seria azul, mas as peças de Sérgio não podem ser azuis, sobrando apenas o amarelo para Sérgio, o que geraria conflito com a gravata de Tiago. Logo, Raul usa Verde (camisa e gravata). Sérgio usa Amarelo (camisa) e Tiago usa Azul (camisa).",
    "banca": "Concursos",
    "ano": 2024,
    "assunto": "Associação Lógica",
    "nivelSuperior": false
  },
  {
    "id": "rlm_assoc_logica_q04",
    "text": "Carlos, Flávio e Vladimir chegaram ao trabalho ao mesmo tempo, estacionaram seus carros lado a lado e notaram que seus carros tinham modelos começando com as letras de seus nomes: Corsa, Fiat e Voyage. Então, Flávio disse: \"Os modelos dos nossos carros começam com a mesma letra dos nossos nomes, mas nenhum dos três tem carro cuja primeira letra do modelo combine com seu próprio nome\". \"E daí?\", respondeu o dono do Corsa.\n\nCom essas informações, pode-se afirmar que:",
    "options": [
      "A) Flávio tem um Corsa.",
      "B) Vladimir tem um Corsa.",
      "C) Carlos tem um Voyage.",
      "D) Vladimir tem um Fiat e Carlos tem um Voyage.",
      "E) Flávio tem um Voyage e Vladimir tem um Fiat."
    ],
    "correctIndex": 1,
    "explanations": [
      "A) Incorreta. Flávio dialogou com o dono do Corsa, logo não é dono do Corsa.",
      "B) Correta. Como Flávio não tem Fiat nem Corsa, tem o Voyage; Carlos tem o Fiat e Vladimir tem o Corsa.",
      "C) Incorreta. Carlos tem um Fiat.",
      "D) Incorreta. Vladimir tem um Corsa.",
      "E) Incorreta. Flávio tem um Voyage, mas Vladimir tem um Corsa."
    ],
    "generalExplanation": "Nenhum carro tem a mesma inicial do dono: Carlos não tem Corsa, Flávio não tem Fiat, Vladimir não tem Voyage. O dono do Corsa respondeu a Flávio, logo Flávio não é o dono do Corsa. Como Flávio não tem Fiat nem Corsa, Flávio tem o Voyage. Resta o Corsa para Vladimir e o Fiat para Carlos.",
    "banca": "Concursos",
    "ano": 2024,
    "assunto": "Associação Lógica",
    "nivelSuperior": false
  },
  {
    "id": "rlm_assoc_logica_q05",
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
      "A) Incorreta. Não satisfaz a premissa 1 de forma exclusiva.",
      "B) Correta. José (Militar), Antônio (Jornalista) e Adílson (Empresário) satisfazem todas as disjunções exclusivas.",
      "C) Incorreta. Repete a profissão de jornalista.",
      "D) Incorreta. Gera contradição com a premissa 4.",
      "E) Incorreta. Invalida a premissa 2."
    ],
    "generalExplanation": "Pela premissa 3, se Antônio não for jornalista, Adílson o será. Se Antônio for jornalista, a premissa 2 exige que José não seja empresário. O arranjo que satisfaz todas as condições sem sobreposições é: José = Militar, Antônio = Jornalista, Adílson = Empresário.",
    "banca": "Concursos",
    "ano": 2024,
    "assunto": "Associação Lógica",
    "nivelSuperior": false
  },
  {
    "id": "rlm_assoc_logica_q06",
    "text": "Fabio, Guilherme e Hugo são funcionários da AL‐MT. Um deles é arquivista, outro é contador, e outro é segurança. As três afirmações seguintes sobre esses funcionários são verdadeiras:\n• Fabio é mais velho que o contador.\n• Guilherme é arquivista.\n• Hugo não é o mais novo dos três.\n\nÉ correto concluir que",
    "options": [
      "A) Fabio é mais novo que Guilherme.",
      "B) Hugo é o segurança.",
      "C) Hugo é o mais novo dos três.",
      "D) O segurança é o mais velho dos três.",
      "E) Guilherme é mais velho que o contador."
    ],
    "correctIndex": 3,
    "explanations": [
      "A) Incorreta. Fabio é o mais velho dos três.",
      "B) Incorreta. Hugo é o contador.",
      "C) Incorreta. Guilherme é o mais novo.",
      "D) Correta. Fabio é o segurança e é o mais velho dos três.",
      "E) Incorreta. Guilherme é o mais novo, logo é mais novo que o contador."
    ],
    "generalExplanation": "Guilherme = Arquivista. Sobram Contador e Segurança para Fabio e Hugo. Fabio é mais velho que o contador, logo Fabio não é o contador. Portanto, Fabio é o Segurança e Hugo é o Contador. Na ordem de idade: Fabio (mais velho que o contador) > Hugo (Contador). Como Hugo não é o mais novo, o mais novo é Guilherme. Ordem de idade: Fabio (Segurança) > Hugo (Contador) > Guilherme (Arquivista). Logo, o segurança é o mais velho dos três.",
    "banca": "FGV / AL-MT",
    "ano": 2024,
    "assunto": "Associação Lógica",
    "nivelSuperior": false
  },
  {
    "id": "rlm_assoc_logica_q07",
    "text": "Paulo, Tiago e João, auditores do trabalho, nasceram, um deles em Brasília, o outro, em Goiânia e o terceiro, em Curitiba. Suas idades são 25, 27 e 28 anos.\nSabe-se que João não nasceu em Brasília e não tem 25 anos; que o auditor que nasceu em Goiânia tem 28 anos; que Paulo não nasceu em Curitiba nem tem 25 anos; e que Tiago nasceu na região Centro-Oeste.\n\nCom base nessas informações, julgue o seguinte item:\nO auditor brasiliense tem 27 anos.",
    "options": [
      "Certo: O item está certo.",
      "Errado: O item está errado."
    ],
    "correctIndex": 1,
    "explanations": [
      "Certo: Incorreta. O auditor brasiliense é Tiago e tem 25 anos.",
      "Errado: Correta. O auditor brasiliense tem 25 anos, portanto a afirmação de que tem 27 anos é incorreta."
    ],
    "generalExplanation": "Tiago nasceu no Centro-Oeste (Brasília ou Goiânia). Goiânia = 28 anos. Paulo não é Curitiba e não tem 25 anos. João não é Brasília e não tem 25 anos. Como nem Paulo nem João têm 25 anos, Tiago tem 25 anos. Logo, Tiago não nasceu em Goiânia (que tem 28 anos). Portanto, Tiago nasceu em Brasília e tem 25 anos. O item que diz que o auditor brasiliense tem 27 anos está ERRADO.",
    "banca": "Cebraspe / CESPE",
    "ano": 2024,
    "assunto": "Associação Lógica",
    "nivelSuperior": false
  },
  {
    "id": "rlm_assoc_logica_q08",
    "text": "Paulo, Tiago e João, auditores do trabalho, nasceram, um deles em Brasília, o outro, em Goiânia e o terceiro, em Curitiba. Suas idades são 25, 27 e 28 anos.\nSabe-se que João não nasceu em Brasília e não tem 25 anos; que o auditor que nasceu em Goiânia tem 28 anos; que Paulo não nasceu em Curitiba nem tem 25 anos; e que Tiago nasceu na região Centro-Oeste.\n\nCom base nessas informações, julgue o seguinte item:\nPaulo nasceu em Goiânia.",
    "options": [
      "Certo: O item está certo.",
      "Errado: O item está errado."
    ],
    "correctIndex": 0,
    "explanations": [
      "Certo: Correta. Por eliminação cruzada, Paulo nasceu em Goiânia e tem 28 anos.",
      "Errado: Incorreta. A dedução confirma que Paulo é o auditor de Goiânia."
    ],
    "generalExplanation": "Tiago = Brasília (25 anos). João não é Brasília nem tem 25 anos. Sobram Goiânia (28 anos) e Curitiba (27 anos) para Paulo e João. Como Paulo não nasceu em Curitiba, Paulo nasceu em Goiânia (e tem 28 anos). João nasceu em Curitiba (e tem 27 anos). O item está CERTO.",
    "banca": "Cebraspe / CESPE",
    "ano": 2024,
    "assunto": "Associação Lógica",
    "nivelSuperior": false
  },
  {
    "id": "rlm_assoc_logica_q09",
    "text": "Paulo, Tiago e João, auditores do trabalho, nasceram, um deles em Brasília, o outro, em Goiânia e o terceiro, em Curitiba. Suas idades são 25, 27 e 28 anos.\nSabe-se que João não nasceu em Brasília e não tem 25 anos; que o auditor que nasceu em Goiânia tem 28 anos; que Paulo não nasceu em Curitiba nem tem 25 anos; e que Tiago nasceu na região Centro-Oeste.\n\nCom base nessas informações, julgue o seguinte item:\nO auditor que nasceu em Curitiba tem 25 anos.",
    "options": [
      "Certo: O item está certo.",
      "Errado: O item está errado."
    ],
    "correctIndex": 1,
    "explanations": [
      "Certo: Incorreta. O auditor de Curitiba é João, que tem 27 anos.",
      "Errado: Correta. Quem tem 25 anos é o auditor de Brasília (Tiago)."
    ],
    "generalExplanation": "O auditor de Curitiba é João, que tem 27 anos. Tiago é o de Brasília com 25 anos. Logo, a afirmativa de que o auditor de Curitiba tem 25 anos está ERRADA.",
    "banca": "Cebraspe / CESPE",
    "ano": 2024,
    "assunto": "Associação Lógica",
    "nivelSuperior": false
  },
  {
    "id": "rlm_assoc_logica_q10",
    "text": "Roberto, em seu trabalho, tem à sua disposição três carros diferentes: um golf, um fusca e uma pajero. Um dos carros é branco, o outro é preto e o outro é prata. Sobre esses carros sabe-se que:\n1. ou o golf é preto ou o fusca é preto.\n2. ou o golf é branco ou a pajero é prata.\n3. ou a pajero é branca ou o fusca é branco.\n\nAssinale a alternativa que apresenta, correta e respectivamente, as cores do golf, do fusca e da pajero.",
    "options": [
      "A) Preto, branco e prata.",
      "B) Preto, prata e branca.",
      "C) Branco, prata e preta.",
      "D) Branco, preto e prata.",
      "E) Prata, branco e preta."
    ],
    "correctIndex": 0,
    "explanations": [
      "A) Correta. Satisfaz todas as condições de disjunção exclusiva (Golf = Preto, Fusca = Branco, Pajero = Prata).",
      "B) Incorreta. Se Pajero é branca, a premissa 3 exigiria que Fusca não fosse branco, mas a 1 exigiria Golf preto e a 2 Golf branco, gerando contradição.",
      "C) Incorreta. Gera contradição na premissa 1.",
      "D) Incorreta. Gera contradição na premissa 2.",
      "E) Incorreta. Gera contradição na premissa 1."
    ],
    "generalExplanation": "Testando as hipóteses das disjunções exclusivas: Se Golf = Preto, então Fusca não é preto. Pela 3, se Pajero não é branca, Fusca é branco. Pela 2, se Golf não é branco, Pajero é prata. Isso fecha o conjunto: Golf = Preto, Fusca = Branco, Pajero = Prata.",
    "banca": "Concursos",
    "ano": 2024,
    "assunto": "Associação Lógica",
    "nivelSuperior": false
  },
  {
    "id": "rlm_assoc_logica_q11",
    "text": "Três irmãs – Célia, Fernanda e Márcia – têm alturas diferentes e possuem cores favoritas diferentes: uma prefere o verde, outra prefere o azul e outra prefere o rosa.\n\nSabe-se que:\n- Quem prefere o azul é mais alta que Fernanda.\n- Márcia não gosta de verde e não é a mais alta.\n- Quem prefere o rosa é mais baixa que quem prefere o verde.\n- Fernanda não gosta de rosa.\n\nEntão:",
    "options": [
      "A) Célia é mais baixa que Fernanda.",
      "B) Márcia é mais alta que Fernanda.",
      "C) Fernanda prefere o azul.",
      "D) Márcia prefere o rosa.",
      "E) Célia prefere o verde."
    ],
    "correctIndex": 3,
    "explanations": [
      "A) Incorreta. Célia é a mais alta.",
      "B) Incorreta. Márcia é a mais baixa.",
      "C) Incorreta. Fernanda prefere verde.",
      "D) Correta. Márcia prefere o rosa.",
      "E) Incorreta. Célia prefere azul."
    ],
    "generalExplanation": "Azul > Fernanda. Márcia não é a mais alta. Rosa < Verde. Como Azul > Fernanda, Fernanda não prefere azul e não é a mais alta. Márcia também não é a mais alta. Logo, Célia é a mais alta e prefere Azul. Márcia não gosta de verde, logo Márcia prefere Rosa. Fernanda prefere Verde. Na altura: Célia (Azul) > Fernanda (Verde) > Márcia (Rosa). Portanto, Márcia prefere o rosa.",
    "banca": "Concursos",
    "ano": 2024,
    "assunto": "Associação Lógica",
    "nivelSuperior": false
  },
  {
    "id": "rlm_assoc_logica_q12",
    "text": "Amália, Berenice, Carmela, Doroti e Paulete vivem nas cidades de Amambaí, Bonito, Campo Grande, Dourados e Ponta Porã, onde exercem as profissões de advogada, bailarina, cabeleireira, dentista e professora. Considere como verdadeiras as seguintes afirmações:\n- a letra inicial do nome de cada uma delas, bem como as iniciais de suas respectivas profissão e cidade onde vivem, são duas a duas distintas entre si;\n- a bailarina não vive em Campo Grande;\n- Berenice não é cabeleireira e nem professora; também não vive em Campo Grande e nem em Dourados;\n- Doroti vive em Ponta Porã, não é bailarina e tampouco advogada;\n- Amália e Paulete não vivem em Bonito;\n- Paulete não é bailarina e nem dentista.\n\nCom base nas informações dadas, é correto concluir que Carmela",
    "options": [
      "A) vive em Bonito.",
      "B) é advogada.",
      "C) vive em Dourados.",
      "D) é bailarina.",
      "E) vive em Ponta Porã."
    ],
    "correctIndex": 0,
    "explanations": [
      "A) Correta segundo o gabarito oficial da banca examinadora.",
      "B) Incorreta.",
      "C) Incorreta.",
      "D) Incorreta.",
      "E) Incorreta."
    ],
    "generalExplanation": "A questão envolve cruzamento de dados e restrições com enunciados complexos de concurso público. Pela análise cruzada das restrições e confirmações das cidades e profissões segundo o gabarito oficial da banca examinadora, a conclusão direta válida para a questão é que Carmela vive em Bonito (Alternativa A).",
    "banca": "Concursos",
    "ano": 2024,
    "assunto": "Associação Lógica",
    "nivelSuperior": false
  },
  {
    "id": "rlm_assoc_logica_q13",
    "text": "Em três xícaras – uma grande, uma média e uma pequena – foram colocadas uma certa quantidade de chá com temperaturas diferentes.\nConsidere que: ou a xícara grande recebeu chá morno ou a xícara média recebeu a menor quantidade de chá; a quantidade de chá colocada na xícara maior foi inferior à da xícara que recebeu chá quente, e a xícara pequena não foi a que recebeu a maior quantidade de chá; o chá frio não foi colocado na xícara média e a xícara pequena recebeu mais chá do que a de tamanho grande.\n\nDesejando servir uma criança com chá morno, um adolescente com chá frio e um adulto com chá quente, deve-se entregar a eles, respectivamente, as xícaras",
    "options": [
      "A) pequena, grande e média.",
      "B) média, pequena e grande.",
      "C) grande, pequena e média.",
      "D) grande, média e pequena.",
      "E) média, grande e pequena."
    ],
    "correctIndex": 2,
    "explanations": [
      "A) Incorreta.",
      "B) Incorreta.",
      "C) Correta. Grande (morno / criança), Pequena (frio / adolescente) e Média (quente / adulto).",
      "D) Incorreta.",
      "E) Incorreta."
    ],
    "generalExplanation": "A xícara pequena tem mais chá que a grande. A grande tem menos chá que a quente. A pequena não tem a maior quantidade. Logo, a Média tem a maior quantidade de chá, a Pequena a intermediária, e a Grande a menor. A grande não é quente. O chá frio não é o médio. A grande é morna (por eliminação e premissa 1). A pequena é fria e a média é quente. Portanto, criança (morno) = grande, adolescente (frio) = pequena, adulto (quente) = média.",
    "banca": "Concursos",
    "ano": 2024,
    "assunto": "Associação Lógica",
    "nivelSuperior": false
  }
];
