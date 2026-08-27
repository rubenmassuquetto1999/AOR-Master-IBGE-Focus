import { Question } from "./types";

export const questionsKatiaData: Question[] = [
  {
    "id": "info_excel_katia_q01",
    "text": "Em editores de planilhas como o Microsoft Excel, assinale a alternativa que apresenta o correto significado de referência absoluta de célula e como ela é indicada no sistema.",
    "options": [
      "A) Uma célula que não muda ao copiar ou arrastar a fórmula; indicada pelo símbolo de cifrão ($) antes da coluna e antes da linha, como $A$1.",
      "B) Uma célula que muda apenas a coluna; indicada pelo símbolo de cifrão ($) antes apenas da coluna, como $A1.",
      "C) Uma célula que muda apenas a linha; indicada pelo símbolo de cifrão ($) antes apenas da linha, como A$1.",
      "D) Uma célula que muda dinamicamente coluna e linha; indicada sem qualquer caractere especial, como A1."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A referência absoluta congela totalmente as coordenadas da célula. Quando uma fórmula que a contém é copiada ou arrastada para outras linhas ou colunas, a célula referenciada permanece exatamente a mesma. O Excel indica a referência absoluta colocando o caractere cifrão ($) antes de ambas as coordenadas: coluna e linha ($A$1).",
      "Incorreta. Isso descreve uma referência mista, onde apenas a coluna é congelada e a linha permanece livre ($A1).",
      "Incorreta. Isso descreve outra referência mista, onde apenas a linha é congelada e a coluna permanece livre (A$1).",
      "Incorreta. Isso descreve a referência relativa comum (A1), que altera as coordenadas proporcionalmente quando movida."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Microsoft Office 365 - Excel",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_excel_katia_q02",
    "text": "No Microsoft Excel, se um usuário precisar somar todos os valores contidos em um intervalo vertical contínuo da coluna A, da linha 1 até a linha 50, qual fórmula atende corretamente a essa necessidade?",
    "options": [
      "A) =MÁXIMO(A1:A50)",
      "B) =MÍNIMO(A1:A50)",
      "C) =SOMA(A1:A50)",
      "D) =PROCV(A1:A50)"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. A função MÁXIMO retorna o maior valor numérico no intervalo especificado.",
      "Incorreta. A função MÍNIMO retorna o menor valor numérico no intervalo especificado.",
      "Correta. A função SOMA adiciona todos os números contidos no intervalo fornecido. No Excel, o intervalo contínuo é delimitado por dois-pontos (:), logo '=SOMA(A1:A50)' somará todos os valores de A1 até A50 de forma eficiente.",
      "Incorreta. A função PROCV realiza pesquisa vertical em uma tabela para retornar dados correlatos, não realizando operações matemáticas de soma direta."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Microsoft Office 365 - Excel",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_excel_katia_q03",
    "text": "Dada uma tabela no Microsoft Excel contendo valores nas colunas B, C e D da linha 4, onde B4 = R$ 189,00, C4 = R$ 189,00 e D4 = R$ 275,00. Caso o usuário insira a fórmula '=MAIOR(B4:D4;2)' na célula A5, qual valor numérico ela irá apresentar?",
    "options": [
      "A) R$ 275,00",
      "B) R$ 189,00",
      "C) R$ 85,00",
      "D) R$ 480,00",
      "E) R$ 510,00"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. R$ 275,00 é o primeiro maior valor do intervalo B4:D4.",
      "Correta. A função MAIOR(intervalo; k) retorna o k-ésimo maior valor de um conjunto de dados. Ordenando os valores de B4:D4 de forma decrescente, temos: 1º maior: R$ 275,00 (D4); 2º maior: R$ 189,00 (B4 ou C4). Portanto, o segundo maior valor do intervalo é R$ 189,00.",
      "Incorreta. Esse valor não faz parte do intervalo em análise.",
      "Incorreta. R$ 480,00 seria o valor correspondente a outro intervalo de energia listado na planilha teórica.",
      "Incorreta. R$ 510,00 é o valor correspondente ao topo de outra linha da tabela do Focus Concursos."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Microsoft Office 365 - Excel",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_excel_katia_q04",
    "text": "Em uma planilha de contabilidade do Excel, os salários dos funcionários estão listados na coluna A, da célula A1 até A100. O gestor deseja aplicar um reajuste de 8% (aumento) apenas para aqueles que recebem salário igual ou inferior a R$ 3.000,00, mantendo o salário inalterado para os demais. Qual fórmula deve ser digitada na célula B1 e estendida até B100?",
    "options": [
      "A) =SE(A1 <= 10000; A1 = ou - 1,08; + A1)",
      "B) =SE+(A2 <= 30000; A1 = 1,08; - A1)",
      "C) =SE(A1 <= 3000; A1 * 1,08; A1)",
      "D) =SE+(A1 <= 300; A1 * 1,08; - A1)"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Sintaxe matemática inválida e lógica de teste incorreta.",
      "Incorreta. A função 'SE+' não existe no padrão do Excel, e a sintaxe está completamente incorreta.",
      "Correta. A função '=SE(teste_lógico; valor_se_verdadeiro; valor_se_falso)' faz o teste 'A1 <= 3000'. Se o salário for menor ou igual a 3000 (Verdadeiro), ele aplica o reajuste multiplicando o salário por 1,08 (que equivale a um acréscimo de 8%). Caso contrário (Falso), ele mantém o valor original de A1.",
      "Incorreta. Testa o valor incorreto de 300 e contém função inexistente 'SE+'."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Microsoft Office 365 - Excel",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_excel_katia_q05",
    "text": "O Excel oferece uma função específica de pesquisa e referência cujo enunciado teórico diz: 'Use esta função para selecionar um valor entre 254 valores, com base no número de índice.' Qual função desempenha essa ação?",
    "options": [
      "A) CORRESP",
      "B) PROCV",
      "C) PROCURAR",
      "D) ESCOLHER"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. CORRESP localiza a posição relativa de um item em um intervalo, e não o valor em si baseando-se em um índice ordenado de argumentos.",
      "Incorreta. PROCV realiza pesquisa vertical na primeira coluna de uma matriz-tabela para retornar valores correspondentes de outras colunas.",
      "Incorreta. PROCURAR é usada para encontrar uma cadeia de texto dentro de outra cadeia de texto, retornando a posição do primeiro caractere.",
      "Correta. A função ESCOLHER utiliza o primeiro argumento ('núm_índice') para selecionar e retornar um dos valores da lista de argumentos fornecidos subsequentes (valor1; valor2; ... valor254)."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Microsoft Office 365 - Excel",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_excel_katia_q06",
    "text": "No Excel, a função SE permite realizar análises condicionais e tomar decisões lógicas. Um funcionário precisa classificar cada vendedor como 'Atingiu a meta' ou 'Não atingiu a meta', considerando que a meta mínima de vendas estabelecida é de R$ 10.000,00. Qual fórmula inserida em C2 exibirá a classificação correta com base no valor de vendas presente em B2?",
    "options": [
      "A) =SE(B2<=10000;\"Não atingiu a meta\";+\"Atingiu a meta\")",
      "B) =SE(B2>=10000;\"Atingiu a meta\";\"Não atingiu a meta\")",
      "C) =SE(B2<10000=;\"Não atingiu a meta\";=\"Atingiu a meta\")",
      "D) =SE(B2>10000;=\"Atingiu a meta\";\"Não atingiu a meta\")"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Essa sintaxe com '+Atingiu a meta' possui erros de escrita e lógica invertida.",
      "Correta. A função `=SE(teste_lógico; valor_se_verdadeiro; valor_se_falso)` avalia se B2 é maior ou igual a 10000. Sendo verdadeiro (vendas iguais ou superiores à meta), retorna 'Atingiu a meta'. Sendo falso, retorna 'Não atingiu a meta'.",
      "Incorreta. A sintaxe de comparação está incorreta e causará erro de digitação no Excel.",
      "Incorreta. O sinal de '=' antes das aspas é desnecessário e gera erro de sintaxe."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Microsoft Office 365 - Excel",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_excel_katia_q07",
    "text": "Para calcular a média aritmética simples das notas de um aluno contidas nas células de F2 até F5, qual conjunto de funções e operadores representa fórmulas válidas equivalentes no Microsoft Excel?\n\nI. =MÉDIA(F2:F5)\nII. =MÉDIA(F2;F3;F4;F5)\nIII. =SOMA(F2:F5)/4",
    "options": [
      "A) Apenas I está correta.",
      "B) Apenas I e II estão corretas.",
      "C) Apenas I e III estão corretas.",
      "D) I, II e III estão corretas e produzem o mesmo resultado."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Todas as três fórmulas são válidas e representam formas equivalentes de calcular a média.",
      "Incorreta. A terceira fórmula também está correta.",
      "Incorreta. A segunda fórmula também está correta e calcula a média de parâmetros isolados.",
      "Correta. I utiliza o operador de intervalo contínuo (dois-pontos). II utiliza o operador de ponto e vírgula para listar argumentos individuais. III realiza a soma total do intervalo e divide pela contagem das quatro células (4). Todas produzem exatamente o mesmo resultado numérico."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Microsoft Office 365 - Excel",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_excel_katia_q08",
    "text": "Qual recurso do Microsoft Excel é especificamente projetado para fixar colunas ou linhas selecionadas no topo ou nas laterais da tela, garantindo que os rótulos de dados permaneçam totalmente visíveis enquanto o usuário rola a planilha para baixo ou para o lado?",
    "options": [
      "A) Classificar e Filtrar",
      "B) Tabela Dinâmica",
      "C) Dividir Tela",
      "D) Congelar Painéis",
      "E) Validação de Dados"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Classificar e Filtrar reorganiza a ordem das linhas ou oculta dados indesejados temporariamente.",
      "Incorreta. Tabela Dinâmica serve para consolidar, resumir e analisar dados complexos de forma interativa.",
      "Incorreta. Dividir Tela separa a janela ativa em seções móveis independentes, mas não fixa os rótulos durante a rolagem comum da mesma seção.",
      "Correta. O recurso 'Congelar Painéis' (disponível na guia Exibir) permite que colunas ou linhas específicas (como o cabeçalho) fiquem imóveis e fiquem travadas na tela enquanto o restante da planilha é navegado por rolagem.",
      "Incorreta. Validação de Dados serve para restringir os valores ou formatos que o usuário pode digitar nas células."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Microsoft Office 365 - Excel",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_excel_katia_q09",
    "text": "Dado o intervalo B2 a E3 de uma planilha do Excel contendo dados em todas as suas células, qual será o resultado retornado pela inserção da fórmula '=CONT.VALORES(B2:E3)'?",
    "options": [
      "A) 12",
      "B) 8",
      "C) 43",
      "D) 64"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O intervalo B2:E3 possui apenas 8 células, de modo que a contagem de elementos preenchidos nunca poderia ser 12.",
      "Correta. A função CONT.VALORES conta o número de células que não estão vazias em um intervalo. O intervalo B2:E3 representa uma matriz de 2 linhas (linha 2 e linha 3) por 4 colunas (B, C, D e E). Multiplicando 2 * 4, temos 8 células. Como todas contêm valores de reclamações, o resultado é 8.",
      "Incorreta. Valor aleatório incompatível com a dimensão do intervalo.",
      "Incorreta. Valor incompatível com a quantidade total de células do intervalo."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Microsoft Office 365 - Excel",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_excel_katia_q10",
    "text": "No Microsoft Excel do Microsoft 365 na versão 'Desktop', qual é o caminho de menus correto que o usuário deve seguir para inserir um novo Gráfico a partir de um conjunto de dados selecionados?",
    "options": [
      "A) Selecionar os dados — Menu 'Arquivo' — Opção 'Criar gráfico'.",
      "B) Selecionar os dados — Menu 'Fórmulas' — Grupo 'Inserir Gráfico'.",
      "C) Selecionar os dados — Menu 'Revisão' — Opção 'Gráfico de Análise'.",
      "D) Selecionar os dados — Menu 'Inserir' — Grupo 'Gráficos' — Escolher o tipo de gráfico."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. O menu Arquivo trata de configurações gerais, salvar e exportar arquivos, não possuindo opções de criação gráfica.",
      "Incorreta. O menu Fórmulas é dedicado à auditoria, definição de nomes e inserção de funções de cálculo.",
      "Incorreta. O menu Revisão é focado em correção ortográfica, acessibilidade, comentários e proteção da planilha.",
      "Correta. Para inserir elementos visuais, o usuário deve ir à guia 'Inserir'. Lá está localizado o grupo 'Gráficos', onde pode-se escolher e formatar gráficos recomendados, de colunas, pizza, linhas, etc."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Microsoft Office 365 - Excel",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_excel_katia_q11",
    "text": "Qual é a finalidade principal e o comportamento padrão da função de pesquisa vertical PROCV no Microsoft Excel?",
    "options": [
      "A) Somar condicionalmente todos os números de uma coluna que atendem a um critério de texto.",
      "B) Criar mini-gráficos dinâmicos diretamente dentro de células individuais para representar estatísticas.",
      "C) Buscar um valor específico na primeira coluna de uma tabela e retornar um valor correspondente na mesma linha a partir de outra coluna especificada.",
      "D) Calcular a média ponderada de vários intervalos de valores financeiros distribuídos horizontalmente."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Essa é a função do SOMASE.",
      "Incorreta. Gráficos em células são criados pelo recurso Sparklines (Minigráficos).",
      "Correta. O PROCV (Pesquisa Vertical) busca o 'valor_procurado' na primeira coluna de uma 'matriz_tabela' e, ao encontrá-lo, move-se horizontalmente para a direita para retornar o valor localizado na coluna indicada pelo 'núm_índice_coluna' na mesma linha.",
      "Incorreta. A média ponderada é calculada combinando SOMARPRODUTO e SOMA."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Microsoft Office 365 - Excel",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_excel_katia_q12",
    "text": "As células de uma planilha preenchidas no Excel 2016 contêm os seguintes valores: B1=2, C1=6, D1=1, E1=2, B2=4, C2=5, D2=1, E2=1, B3=4, C3=6, D3=2, E3=2, B4=3, C4=2, D4=1, E4=3, B5=1, C5=4, D5=1, E5=4. Caso a fórmula '=SOMASE(B1:E5; \">=4\")' seja inserida na célula E6, qual será o valor retornado?",
    "options": [
      "A) 11",
      "B) 16",
      "C) 28",
      "D) 33",
      "E) 42"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. 11 não corresponde à soma correta das células maiores ou iguais a 4.",
      "Incorreta. Contagem incorreta de valores.",
      "Incorreta. Erro ao somar ou excluir elementos do intervalo.",
      "Correta. A função '=SOMASE(B1:E5; \">=4\")' avalia todas as células no intervalo B1 até E5 e soma apenas aquelas que contêm valores maiores ou iguais a 4. As células desse intervalo que atendem à condição são: C1 (6), B2 (4), C2 (5), B3 (4), C3 (6), E4 (3-não), B4 (3-não), E5 (4), C5 (4). Somando-as: 6 + 4 + 5 + 4 + 6 + 4 + 4 = 33.",
      "Incorreta. Soma de elementos que estão fora do intervalo ou que não atendem ao critério."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Microsoft Office 365 - Excel",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_w11_katia_q01",
    "text": "No sistema operacional Microsoft Windows 11, o Gerenciador de Tarefas é uma ferramenta administrativa essencial. Qual das seguintes funções NÃO faz parte das atribuições do Gerenciador de Tarefas?",
    "options": [
      "A) Visualizar em tempo real as taxas de utilização de hardware como CPU, memória RAM, disco e adaptadores de rede.",
      "B) Habilitar, desabilitar ou monitorar o impacto de inicialização dos aplicativos de inicialização junto com o sistema.",
      "C) Alterar permissões de segurança de gravação, leitura e execução de usuários sobre pastas específicas do sistema NTFS.",
      "D) Forçar o encerramento ('Finalizar tarefa') de processos e softwares em segundo plano que pararam de responder."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Essa é uma função clássica da guia 'Desempenho' do Gerenciador de Tarefas.",
      "Incorreta. Essa é uma função padrão da guia 'Aplicativos de inicialização' no Windows 11 (antiga guia Inicializar).",
      "Correta. O Gerenciador de Tarefas não gerencia permissões de arquivos ou pastas. O controle de segurança NTFS e a atribuição de permissões a usuários e grupos são feitos diretamente nas 'Propriedades' de cada pasta/arquivo (guia Segurança) no Explorador de Arquivos.",
      "Incorreta. Essa é a principal função de suporte rápido da guia 'Processos'."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Sistema Operacional Windows 11",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_w11_katia_q02",
    "text": "Qual é a sequência de procedimentos correta para organizar de forma automática os ícones da Área de Trabalho do Windows 11, agrupando-os de acordo com sua categoria (documentos, pastas, atalhos, etc.)?",
    "options": [
      "A) Clicar no menu Iniciar, selecionar a opção 'Exibir' e clicar em 'Ajustar ícones à grade'.",
      "B) Clicar com o botão direito do mouse em uma área limpa da Área de Trabalho, selecionar 'Classificar por' e, em seguida, clicar em 'Tipo de item'.",
      "C) Pressionar Ctrl + A na Área de Trabalho e, logo em seguida, pressionar a tecla Enter.",
      "D) Clicar com o botão direito do mouse na Barra de Tarefas e selecionar a opção 'Agrupar ícones da Área de Trabalho'."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Esse atalho ajusta o alinhamento em grade de pixel, mas não os classifica por tipo de arquivo.",
      "Correta. No menu de contexto acionado ao clicar com o botão direito na Área de Trabalho, a opção 'Classificar por' oferece as opções de ordenar por Nome, Tamanho, Tipo de item (que agrupa por tipo de arquivo) ou Data de modificação.",
      "Incorreta. Isso selecionaria todos os ícones e tentaria abrir todos os aplicativos simultaneamente.",
      "Incorreta. Clicar na Barra de Tarefas não abre as configurações de ordenação de ícones da Área de Trabalho."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Sistema Operacional Windows 11",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_w11_katia_q03",
    "text": "O Windows 11 apresenta uma interface modernizada que reorganizou as ferramentas de administração do sistema. A respeito do gerenciamento do sistema operacional, é correto afirmar que:",
    "options": [
      "A) O Painel de Controle foi completamente deletado e todos os seus recursos clássicos foram excluídos.",
      "B) A barra de tarefas do Windows 11 permite acesso rápido a atalhos e widgets, porém impede que o computador execute multitarefa.",
      "C) Os aplicativos fixados na central do menu Iniciar são permanentes e não há meios para que sejam desinstalados pelo usuário.",
      "D) O aplicativo 'Configurações' (Win + I) tornou-se a central de controle e personalização principal para gerir a ampla maioria das definições do sistema."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. O Painel de Controle clássico ainda existe no Windows 11 como legado para compatibilidade, embora o sistema continue migrando configurações para o app moderno.",
      "Incorreta. O Windows 11 é um sistema operacional multitarefa preemptivo de alto desempenho.",
      "Incorreta. Aplicativos fixados podem ser facilmente removidos clicando com o botão direito e escolhendo 'Desafixar de Iniciar' ou 'Desinstalar'.",
      "Correta. O aplicativo moderno 'Configurações' é o hub unificado principal de gerenciamento, permitindo ao usuário controlar o hardware, contas de usuário, redes, personalização, atualizações de sistema e periféricos."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Sistema Operacional Windows 11",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_w11_katia_q04",
    "text": "Um funcionário administrativo trabalhando no Windows 11 precisa gerenciar várias janelas abertas simultaneamente, organizando-as perfeitamente lado a lado para comparação de relatórios sem ter que arrastar manualmente cada janela até as bordas da tela. Qual recurso nativo do Windows 11 atende diretamente a essa necessidade?",
    "options": [
      "A) Snap Layouts (Leiautes de Ajuste)",
      "B) Modo Tablet",
      "C) Central de Facilidade de Acesso",
      "D) Área de Trabalho Remota"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. O recurso 'Snap Layouts' é uma inovação visual do Windows 11 que exibe modelos predefinidos de posicionamento de janelas ao passar o ponteiro do mouse sobre o botão 'Maximizar' de qualquer janela ativa, permitindo ao usuário posicionar até 4 janelas de forma ágil em layouts limpos.",
      "Incorreta. O Modo Tablet clássico foi removido no Windows 11, sendo substituído por comportamentos táteis automáticos.",
      "Incorreta. A central de facilidade de acesso gerencia ferramentas de acessibilidade como lupas e leitores de tela.",
      "Incorreta. A Área de Trabalho Remota serve para acessar computadores distantes por meio de conexão de rede."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Sistema Operacional Windows 11",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_w11_katia_q05",
    "text": "No Windows 11, o usuário dispõe de diferentes estados de energia para seu computador. A respeito do recurso de 'Hibernação', assinale a alternativa correta.",
    "options": [
      "A) A hibernação desliga apenas o monitor e consome exatamente o mesmo volume de energia da bateria.",
      "B) A hibernação fecha todos os aplicativos abertos sem salvar o trabalho, reiniciando o sistema de forma limpa.",
      "C) A hibernação copia o estado atual dos programas abertos e da memória RAM e o grava de forma temporária no disco rígido antes de desligar completamente o computador.",
      "D) O tempo necessário para retornar ao sistema a partir da hibernação é muito menor do que o tempo de retorno do modo suspensão comum."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. A hibernação consome energia quase nula, pois desliga o computador por completo.",
      "Incorreta. A principal utilidade da hibernação é justamente salvar o estado atual do trabalho.",
      "Correta. Ao acionar a hibernação, o sistema operacional grava o conteúdo da memória volátil (RAM) em um arquivo de sistema no disco rígido (geralmente hiberfil.sys) e desliga a máquina por completo. Ao religar, esses dados retornam para a RAM, permitindo retomar as atividades no exato ponto anterior.",
      "Incorreta. O modo suspensão (Sleep) é muito mais rápido no retorno, pois mantém a RAM energizada e não requer gravação e leitura do disco rígido."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Sistema Operacional Windows 11",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_w11_katia_q06",
    "text": "O Windows possui uma série de teclas de atalho nativas. Assinale a alternativa que descreve corretamente a função realizada pelo atalho 'Windows + L'.",
    "options": [
      "A) Bloqueia a tela do computador imediatamente, exigindo que o usuário digite suas credenciais para reingressar na sessão, o que reforça a segurança física da informação.",
      "B) Minimiza todas as janelas ativas para exibir a Área de Trabalho, e pressioná-la novamente não restaura as janelas minimizadas.",
      "C) Abre diretamente o Gerenciador de Tarefas do Windows.",
      "D) Abre o navegador padrão da internet configurado no sistema operacional."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. O atalho 'Win + L' (Lock) serve para bloquear a tela do usuário de forma instantânea sem fechar nenhum programa em execução, ideal para quando o usuário se ausenta de sua estação de trabalho.",
      "Incorreta. Essa é a função do atalho 'Win + D' (Desktop).",
      "Incorreta. O atalho clássico do Gerenciador de Tarefas é 'Ctrl + Shift + Esc'.",
      "Incorreta. Para abrir o navegador não há atalho universal imediato, enquanto 'Win + E' abre o Explorador de Arquivos."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Sistema Operacional Windows 11",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_w11_katia_q07",
    "text": "No sistema de arquivos NTFS, amplamente utilizado no Windows 11, um recurso tecnológico essencial para garantir a segurança dos metadados chama-se 'journaling'. Assinale a alternativa que define corretamente esse recurso.",
    "options": [
      "A) Um recurso que compacta os arquivos de forma automática para recuperar espaço físico em discos rígidos.",
      "B) Uma técnica de criptografia avançada que impede o acesso de cibercriminosos aos arquivos de sistema.",
      "C) Um mecanismo de diário que registra e armazena as alterações dos metadados antes de serem gravadas fisicamente no disco, garantindo a rápida integridade em caso de quedas de energia repentinas.",
      "D) Um sistema de indexação de arquivos que acelera a velocidade da barra de busca do Explorador de Arquivos."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Compactação de disco é um recurso de compressão (NTFS Compression), e não journaling.",
      "Incorreta. Criptografia no NTFS é gerida pelo EFS (Encrypting File System).",
      "Correta. O journaling (diário) do NTFS é um recurso de tolerância a falhas que registra as transações no disco rígido em um arquivo de diário de log antes de escrevê-las. Se o computador sofrer uma pane ou corte de eletricidade no meio de uma operação de escrita, o NTFS usa esse registro de journaling para restabelecer a consistência do sistema de arquivos instantaneamente.",
      "Incorreta. A aceleração de busca é feita pelo serviço Windows Search (Indexação)."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Sistema Operacional Windows 11",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_w11_katia_q08",
    "text": "A respeito das características visuais do Explorador de Arquivos do Windows 11, quando o usuário acessa uma biblioteca e se depara com um ícone de pasta amarela contendo uma pequena seta curvada azul sobreposta no canto inferior esquerdo, trata-se de um(a):",
    "options": [
      "A) Pasta de sistema oculta que está protegida contra exclusão.",
      "B) Atalho para uma pasta localizada em outro diretório ou unidade.",
      "C) Pasta compactada em formato ZIP que contém arquivos comprimidos.",
      "D) Pasta compartilhada na rede que possui acesso de somente leitura."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Pastas de sistema ocultas não exibem setas curvas em seus ícones.",
      "Correta. A seta curvada sobreposta a qualquer ícone no ecossistema Windows indica categoricamente um 'Atalho' (.lnk). O atalho é apenas um pequeno arquivo de ponteiro que redireciona o usuário para o arquivo, pasta ou aplicativo original correspondente.",
      "Incorreta. Pastas ZIP exibem um ícone de pasta com um zíper metálico desenhado.",
      "Incorreta. Pastas de rede compartilhadas clássicas exibiam um ícone de mãos dadas ou um sinal azul de compartilhamento, mas não uma seta curvada de atalho."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Sistema Operacional Windows 11",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_hw_katia_q01",
    "text": "A tecnologia de armazenamento de estado sólido (SSD - Solid-State Drive) tem se tornado padrão nos computadores modernos. Sobre o SSD, julgue as seguintes afirmativas:\n\nI - É uma tecnologia de armazenamento rápido de dados.\nII - Representa uma tecnologia de armazenamento não volátil de dados digitais.\nIII - Utiliza chips de memória flash (circuitos integrados) em vez de partes magnéticas móveis.\nIV - Representa um armazenamento volátil que perde os dados ao desligar o computador.\n\nEstão corretas as afirmativas:",
    "options": [
      "A) Somente I e II.",
      "B) Somente I, II e IV.",
      "C) Somente I e IV.",
      "D) Somente I, II e III.",
      "E) I, II, III e IV."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. A afirmativa III também está correta.",
      "Incorreta. O SSD é não volátil (afirmativa IV incorreta).",
      "Incorreta. O SSD armazena dados permanentemente (não volátil).",
      "Correta. O SSD é um dispositivo de armazenamento secundário não volátil (mantém os dados salvos mesmo sem energia elétrica) que armazena informações digitais em chips de memória flash do tipo NAND. Por não possuir agulhas, cabeçotes de leitura ou pratos giratórios magnéticos como o HDD, é imensamente mais veloz e resistente a impactos mecânicos.",
      "Incorreta. A afirmativa IV está flagrantemente incorreta, pois o SSD armazena dados permanentemente."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Hardware",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_hw_katia_q02",
    "text": "Durante a organização física de um departamento de informática, um técnico em suporte foi solicitado a categorizar os componentes de hardware instalados conforme sua função lógica (dispositivos de entrada, de saída ou de armazenamento). Assinale a alternativa em que a classificação apresentada está totalmente correta.",
    "options": [
      "A) Teclado (entrada), monitor (saída) e HD externo (armazenamento).",
      "B) Monitor (entrada), mouse (saída) e pen drive (processamento).",
      "C) Impressora laser comum (entrada), teclado (saída) e CD-ROM (memória principal).",
      "D) Mouse óptico (armazenamento), scanner de mesa (saída) e disco rígido (entrada)."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. O teclado envia comandos para a CPU (entrada); o monitor exibe informações geradas pelo sistema para o usuário (saída); e o HD externo é um disco magnético utilizado para salvar dados digitais permanentemente (armazenamento).",
      "Incorreta. O monitor é saída de dados, o mouse é entrada de dados e o pen drive é armazenamento de dados.",
      "Incorreta. A impressora é saída, o teclado é entrada e o CD-ROM é armazenamento secundário.",
      "Incorreta. O mouse é entrada, o scanner é entrada e o disco rígido é armazenamento secundário."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Hardware",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_hw_katia_q03",
    "text": "Um computador corporativo que executa simultaneamente diversos sistemas operacionais e ferramentas de escritório pesadas começou a apresentar extrema lentidão. O relatório de hardware indicou que o problema está associado ao esgotamento da área de armazenamento temporário de instruções em uso imediato pelo processador. Qual categoria de memória deve ser reavaliada ou expandida pelo técnico?",
    "options": [
      "A) Disco Rígido (HDD), que realiza o armazenamento permanente e lento dos arquivos de sistema.",
      "B) Memória RAM (Random Access Memory), que funciona como a memória de trabalho principal, rápida e volátil do sistema.",
      "C) Memória ROM, que armazena os sistemas básicos de boot programados de fábrica de forma permanente.",
      "D) Memória do CD-RW ou mídias ópticas externas."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O HD armazena dados secundários que não estão sendo processados de forma imediata.",
      "Correta. A Memória RAM é uma memória primária, volátil (perde os dados sem energia) e rápida que funciona como a área de trabalho imediata do processador. É nela que ficam carregados o sistema operacional e todos os programas e arquivos abertos e ativos. Se a quantidade de RAM não for suficiente, o computador sofrerá travamentos.",
      "Incorreta. A memória ROM (Read-Only Memory) é somente de leitura e armazena instruções fixas como o BIOS.",
      "Incorreta. Mídias ópticas são dispositivos de armazenamento de backup de acesso extremamente lento."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Hardware",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_hw_katia_q04",
    "text": "Qual dos itens de hardware listados abaixo representa exclusivamente um periférico de saída de dados no computador?",
    "options": [
      "A) Teclado numérico USB",
      "B) Mouse óptico sem fio",
      "C) Scanner de mesa colorido",
      "D) Impressora térmica de cupons fiscais",
      "E) Microfone de lapela analógico"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Teclados numéricos capturam toques e enviam à CPU, sendo de entrada.",
      "Incorreta. Mouses ópticos detectam coordenadas espaciais, sendo periféricos de entrada.",
      "Incorreta. Scanners digitalizam imagens físicas em arquivos digitais, sendo de entrada.",
      "Correta. A impressora térmica recebe dados digitais de texto e comandos de formatação e os converte em marcas físicas queimadas no papel térmico, enviando informações do computador para o meio externo (saída).",
      "Incorreta. Microfones capturam ondas sonoras analógicas e as enviam para a placa de som, sendo de entrada."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Hardware",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_hw_katia_q05",
    "text": "O processador moderno (CPU) conta com uma memória auxiliar interna de altíssima velocidade chamada memória CACHE. Qual é a função lógica e física da memória CACHE na arquitetura de computadores?",
    "options": [
      "A) Armazenar todos os arquivos e banco de dados instalados no computador para que sobrevivam sem energia.",
      "B) Processar os cálculos matemáticos complexos de vídeo e renderização 3D.",
      "C) Servir de ponte ultrarrápida de dados temporários de instruções repetitivas entre o núcleo da CPU e a memória RAM, reduzindo o tempo de espera no processamento.",
      "D) Executar a leitura e gravação dos discos ópticos de Blu-ray."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Essa é a função do armazenamento em massa (SSD/HDD).",
      "Incorreta. Processamento gráfico 3D é função da GPU (Placa de Vídeo).",
      "Correta. A memória CACHE é uma memória estática (SRAM) muito menor e imensamente mais rápida do que a memória RAM dinâmica (DRAM). Ela fica embutida fisicamente no próprio chip do processador (níveis L1, L2, L3) e guarda cópias das instruções mais utilizadas pela CPU, evitando que o processador precise ler dados da RAM constantemente, o que atrasaria as tarefas.",
      "Incorreta. Não possui relação lógica ou mecânica com mídias ópticas."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Hardware",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_sw_katia_q01",
    "text": "Os computadores funcionam por meio da integração harmônica entre hardware e software. A respeito das classificações de softwares (software de base/sistema, software aplicativo e software utilitário), assinale a afirmativa correta.",
    "options": [
      "A) O sistema operacional (como o Windows 11) é classificado como um software aplicativo, pois atende a tarefas específicas desenhadas para o usuário final.",
      "B) Editores de texto profissionais são classificados como softwares utilitários, pois sua principal função é a manutenção da integridade do sistema.",
      "C) O sistema operacional é um software de base (ou de sistema), encarregado de gerenciar todos os recursos físicos do hardware e servir de plataforma estável para a execução de outros programas.",
      "D) Um programa antivírus é um software aplicativo, visto que realiza tarefas comuns diárias como a redação de documentos."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O sistema operacional é software de sistema/base, não aplicativo.",
      "Incorreta. Editores de texto são softwares de aplicação (aplicativos) voltados ao trabalho do usuário final.",
      "Correta. O Software de Base (ou de Sistema) gerencia e coordena o hardware de forma direta. Sem ele (como o Windows ou Linux), o hardware é inutilizável e outros programas aplicativos não têm como interagir com o processador ou a memória física.",
      "Incorreta. O antivírus é um software utilitário (destinado a apoiar, proteger e otimizar as operações do sistema), e não aplicativo de escritório."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Hardware",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_sw_katia_q02",
    "text": "Julgue os seguintes itens em relação às licenças de uso e tipos de software:\n\n(__) Softwares do tipo freeware são distribuídos de forma gratuita para uso, mas não necessariamente possuem seu código-fonte aberto.\n(__) Softwares do tipo shareware são disponibilizados gratuitamente por tempo limitado (versão trial) ou com recursos restritos, para incentivar a compra da licença cheia.\n(__) Softwares comerciais são sempre gratuitos para uso doméstico, sendo faturados apenas quando instalados em ambientes corporativos.\n(__) Softwares freeware dão ao usuário o direito legal e a liberdade de alterar e redistribuir seu código de forma obrigatória.\n\nA sequência correta de Verdadeiro (V) ou Falso (F), de cima para baixo, é:",
    "options": [
      "A) F – V – V – F",
      "B) V – V – F – F",
      "C) F – V – F – F",
      "D) V – F – V – F"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O primeiro item é verdadeiro.",
      "Correta. O freeware é grátis para uso, mas o código-fonte permanece fechado e pertence ao proprietário (V). O shareware convida o usuário a testar o programa gratuitamente por um tempo (trial) antes de exigir pagamento para uso contínuo (V). Softwares comerciais não são necessariamente de uso pessoal gratuito (F). O freeware comum não fornece seu código-fonte para modificações (F). Logo, a sequência é V, V, F, F.",
      "Incorreta. Sequência com erros de lógica conceitual sobre o freeware.",
      "Incorreta. Inverte a validade de freeware e comerciais."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Software",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_sw_katia_q03",
    "text": "A respeito dos conceitos e liberdades associadas ao software de código aberto (Open Source) e Software Livre (GPL), assinale a opção correta.",
    "options": [
      "A) Software open source é aquele distribuído obrigatoriamente sem custos, cujo código-fonte é inacessível para os usuários comuns.",
      "B) O sistema operacional Linux é um clássico exemplo de software open source e livre, o que permite aos usuários estudá-lo, modificar suas funções e distribuir seu código original ou alterado.",
      "C) As licenças GPL proíbem de forma rígida a utilização de softwares livres para fins comerciais ou governamentais, limitando-os ao uso puramente educacional.",
      "D) O LibreOffice é um software de licença proprietária e fechada, cujas ferramentas não podem receber qualquer alteração da comunidade."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Software open source fornece o código-fonte justamente para que as pessoas possam ver, analisar e modificar.",
      "Correta. O Linux é o maior exemplo de software livre e open source do mundo. Sob a licença GPL (General Public License), qualquer usuário tem as 4 liberdades básicas: de executar o programa, de estudar o funcionamento e adaptá-lo (acessando o código), de redistribuir cópias e de modificar e melhorar a aplicação, distribuindo as correções de forma livre.",
      "Incorreta. A licença GPL permite o uso comercial livre e gratuito, sem restrições de público.",
      "Incorreta. O LibreOffice é um software livre e de código aberto."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Software",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_and_katia_q01",
    "text": "O Android Runtime (ART) é a camada de ambiente de execução padrão dos aplicativos no sistema operacional Android. A respeito das características lógicas do ART em relação à sua antiga máquina virtual antecessora (Dalvik), assinale a alternativa correta.",
    "options": [
      "A) O ART executa aplicativos de forma mais lenta devido ao uso de compilação puramente interpretada a cada execução.",
      "B) O ART utiliza principalmente compilação Ahead-Of-Time (AOT), traduzindo o bytecode do aplicativo em código nativo de máquina no momento da instalação, o que melhora o desempenho e a eficiência de bateria.",
      "C) O runtime ART é exclusivo de computadores desktop e não é adotado em dispositivos móveis como smartphones ou tablets.",
      "D) O ART foi descontinuado na versão Android 5.0 (Lollipop) para dar lugar à máquina virtual Dalvik."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A Dalvik realizava compilação baseada em JIT (Just-In-Time) durante a própria execução, o que era mais lento e consumia mais bateria do que o ART.",
      "Correta. Desde o Android 5.0 (Lollipop), o ART é o runtime oficial padrão do sistema. Utilizando a compilação AOT (Ahead-Of-Time), ele compila todo o aplicativo em código binário nativo no momento em que ele é instalado. Isso otimiza imensamente a velocidade do processador no dia a dia, visto que o código já está pronto para rodar, poupando CPU e prolongando a duração da bateria.",
      "Incorreta. O ART é a espinha dorsal de execução de aplicativos de smartphones e wearables Android.",
      "Incorreta. O oposto ocorreu: o ART substituiu definitivamente a Dalvik a partir da versão 5.0."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Sistemas operacionais: Android",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_and_katia_q02",
    "text": "O modelo de segurança do sistema operacional Android é baseado em multicamadas. Um dos seus pilares mais importantes é o chamado 'Sandbox' (caixa de areia). Qual alternativa explica corretamente o funcionamento desse pilar?",
    "options": [
      "A) Um antivírus nativo da nuvem que escaneia a memória RAM a cada 10 minutos.",
      "B) Um recurso que exige que o usuário pague taxas mensais para poder instalar aplicativos que não são do Google.",
      "C) Um mecanismo automático no qual cada aplicativo roda em um processo isolado no Linux Kernel, com seu próprio UID (User ID) exclusivo, impedindo que um aplicativo acesse dados ou recursos de outros sem autorização.",
      "D) Um protetor de tela animado que impede o superaquecimento físico do processador do celular."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O sandbox não é um antivírus ativo ou scanner de arquivos.",
      "Incorreta. Sandbox é um mecanismo técnico gratuito de arquitetura de segurança, sem fins comerciais.",
      "Correta. A Sandbox de aplicativos do Android aproveita o modelo de controle de usuários do Linux Kernel subjacente. Ao atribuir a cada aplicativo um UID único e rodar cada um em seu próprio processo isolado da máquina virtual, o sistema ergue uma barreira de segurança intransponível. Um app não consegue roubar dados de outro app (como fotos, tokens, senhas) porque o kernel bloqueia acessos a diretórios que não são da sua própria sandbox.",
      "Incorreta. Explicação fictícia sem base técnica."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Sistemas operacionais: Android",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_and_katia_q03",
    "text": "No Android, as permissões que os aplicativos precisam para funcionar são classificadas em categorias no modelo clássico. Assinale a alternativa que descreve corretamente a diferença entre permissões Normais (Normal) e Perigosas (Dangerous).",
    "options": [
      "A) Permissões Normais são cobradas financeiramente, enquanto as Perigosas são sempre gratuitas.",
      "B) Permissões Normais dizem respeito a dados altamente confidenciais como fotos e contatos, enquanto as Perigosas tratam apenas de acesso à internet.",
      "C) Permissões Normais tratam de recursos de baixo risco de segurança e privacidade (ex: fuso horário) e são concedidas de forma automática na instalação; permissões Perigosas tratam de dados sensíveis (ex: localização, câmera) e exigem o consentimento explícito e em tempo de execução por parte do usuário.",
      "D) O Android não diferencia as permissões, aceitando automaticamente todos os pedidos de qualquer arquivo APK."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Permissões lógicas de segurança do sistema operacional não envolvem cobranças financeiras.",
      "Incorreta. A definição de dados sensíveis e normais está totalmente invertida nesta opção.",
      "Correta. Essa é uma diferenciação essencial para concursos. As permissões Normais não ameaçam a privacidade do usuário e são autorizadas automaticamente pelo sistema. Já as permissões Perigosas (Dangerous Permissions) dão acesso a dados privados ou controle de hardware sensível (como câmera, microfone, GPS e contatos), necessitando de uma caixa de diálogo interativa para que o usuário aprove ou negue em tempo de execução.",
      "Incorreta. O Android restringe de forma severa as permissões de qualquer APK para garantir a segurança."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Sistemas operacionais: Android",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_and_katia_q04",
    "text": "Para otimizar o consumo de energia e estender a vida útil da bateria dos dispositivos móveis, o Android incorporou uma funcionalidade chamada 'Modo Doze' (Doze Mode). Sob quais condições físicas e lógicas o Modo Doze entra em ação no celular?",
    "options": [
      "A) Quando o usuário ativa manualmente a economia de energia a partir da central de notificações e liga a tela.",
      "B) Sempre que o dispositivo permanece imóvel, com a tela completamente desligada, sem interação do usuário por um tempo e fora do carregador elétrico.",
      "C) Apenas quando o telefone está em carregamento rápido conectado à tomada de energia elétrica.",
      "D) No momento em que o processador móvel atinge o limite máximo de calor e diminui sua frequência interna de clock."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O modo Doze é um comportamento de suspensão automática do sistema, e não uma ação manual ligada ao visor ativo.",
      "Correta. O Doze Mode (mecanismo que reduz o consumo de energia em segundo plano) é acionado de forma 100% autônoma pelo Android. Ao detectar que o usuário deixou o celular parado sobre a mesa (imóvel), com a tela desligada e fora da tomada, o sistema entra no estado Doze. Nesse estado, o Android impõe severas restrições aos aplicativos, suspendendo acessos à rede, adiando sincronizações de dados e acumulando alarmes em 'janelas de manutenção' periódicas rápidas.",
      "Incorreta. O Doze não é ativado quando o celular está carregando.",
      "Incorreta. O resfriamento por calor é controlado por mecanismos térmicos de hardware (thermal throttling)."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Sistemas operacionais: Android",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_and_katia_q05",
    "text": "O gerenciamento de memória do sistema operacional Android opera por meio de diferentes mecanismos nativos. Qual é a diferença funcional básica entre o mecanismo 'Garbage Collection (GC)' e o mecanismo 'Low Memory Killer (LMK)'?",
    "options": [
      "A) O GC é de hardware físico, e o LMK é um driver de rede virtual.",
      "B) O GC gerencia o consumo de internet móvel por aplicativo, enquanto o LMK controla a segurança da Sandbox.",
      "C) O Garbage Collection (GC) gerencia e libera blocos de memória RAM que contêm objetos inativos dentro de um mesmo processo de aplicativo de forma automática; o Low Memory Killer (LMK) atua quando a memória do sistema está criticamente cheia, matando e encerrando processos de aplicativos inteiros para manter a estabilidade do sistema.",
      "D) O LMK é ativado apenas por desenvolvedores em modo de testes, enquanto o GC roda apenas no momento do boot do celular."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Ambos os recursos são puramente de software de sistema lógico.",
      "Incorreta. Definições sem relação lógica com o gerenciamento de memória em massa.",
      "Correta. Essa é uma clássica distinção do gerenciamento de memória do Android. O Garbage Collection (gerido pelo ART) atua de forma cirúrgica, identificando e limpando dados que o próprio aplicativo já não utiliza, evitando vazamentos de memória interna. Já o Low Memory Killer (que atua em nível do Linux Kernel) é um recurso de segurança geral do sistema. Quando o dispositivo fica sem memória RAM disponível para processos essenciais, o LMK age finalizando aplicativos inteiros em segundo plano (seguindo uma hierarquia de prioridades) para evitar que o sistema operacional trave.",
      "Incorreta. Ambos os recursos rodam de forma automática o tempo todo enquanto o celular está ligado e em uso."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Sistemas operacionais: Android",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_and_katia_q06",
    "text": "Na estrutura do sistema de arquivos do Android, qual é o papel específico do diretório '/system' e qual é o seu modo padrão de montagem para os aplicativos comuns do usuário?",
    "options": [
      "A) Contém os dados pessoais do usuário e fotos, permitindo leitura e gravação livre por qualquer aplicativo instalado.",
      "B) Contém o próprio sistema operacional, frameworks, bibliotecas nativas e aplicativos padrão, sendo montado em modo estritamente de somente leitura (read-only) para evitar alterações e danos ao sistema.",
      "C) Serve para armazenar dados temporários de navegação da internet e é esvaziado automaticamente toda vez que o celular é reiniciado.",
      "D) Funciona como um atalho direto para cartões SD físicos inseridos no telefone, rodando em modo oculto."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Dados de usuário ficam no diretório '/data' (com acesso de leitura e escrita).",
      "Correta. O diretório '/system' é a partição vital que contém o núcleo do Android. Para blindar e garantir a estabilidade do aparelho, esse diretório é montado como 'somente leitura' (read-only) para os aplicativos comuns do usuário. Apenas processos do sistema ou usuários com privilégios de superusuário (Root) podem realizar alterações nessa partição.",
      "Incorreta. Dados temporários ficam na pasta '/cache'.",
      "Incorreta. Cartões de memória externos ou mídias emuladas são mapeados no diretório '/sdcard' ou '/storage'."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Sistemas operacionais: Android",
    "nivelSuperior": false,
    "image": null
  }
];
