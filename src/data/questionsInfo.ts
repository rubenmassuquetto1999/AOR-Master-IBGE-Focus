import { Question } from "../types";

export const questionsInfo: Question[] = [
  {
    "id": "info_arq_pastas_01",
    "text": "No explorador de arquivos do Windows, se um usuário arrastar com o botão esquerdo do mouse um arquivo que está em uma pasta do disco local C: para outra pasta do disco local D:, qual será o resultado dessa operação?",
    "options": [
      "A) O arquivo será movido para o disco local D:.",
      "B) O arquivo será copiado para o disco local D:.",
      "C) Um atalho será criado no disco local D:.",
      "D) O Windows apresentará uma caixa de diálogo perguntando o que deseja fazer.",
      "E) O arquivo será deletado da pasta original em C:."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O arquivo não será movido, pois a operação de arrastar com o botão esquerdo entre unidades de disco diferentes resulta em cópia por padrão.",
      "Correta. Conforme a regra clássica de manipulação no Windows Explorer, arrastar e soltar arquivos entre unidades lógicas diferentes (como C: e D:) copia o arquivo (cria uma réplica exata no destino) por padrão.",
      "Incorreta. Um atalho só seria criado se o usuário arrastasse pressionando ALT ou Ctrl+Shift simultaneamente, o que não foi o caso.",
      "Incorreta. O Windows executa a cópia diretamente, sem abrir perguntas, a menos que o arraste fosse feito com o botão direito do mouse.",
      "Incorreta. O arquivo original permanece intocado no disco local C:."
    ],
    "banca": "Focus Concursos",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_excel_somase",
    "text": "Em uma planilha eletrônica do Microsoft Excel, preenchida com valores, considere a fórmula =SOMASE(B1:E5; \">=4\"). Qual é a finalidade dessa fórmula?",
    "options": [
      "A) Contar as células do intervalo B1:E5 que possuem valores maiores ou iguais a 4.",
      "B) Somar os valores do intervalo B1:E5 que são maiores ou iguais a 4.",
      "C) Calcular a média dos valores menores ou iguais a 4 no intervalo B1:E5.",
      "D) Multiplicar todos os valores do intervalo B1:E5 que são iguais a 4.",
      "E) Pesquisar de forma vertical o valor 4 no intervalo B1:E5."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A contagem com condição é feita com a função CONT.SE, não SOMASE.",
      "Correta. A função SOMASE realiza a soma de todos os valores no intervalo especificado ('B1:E5') que atendam de forma estrita à condição lógica fornecida como critério (ser maior ou igual a 4, ou '>=4').",
      "Incorreta. Para média condicional, o Excel possui a função MÉDIASE.",
      "Incorreta. SOMASE faz adição, não multiplicação.",
      "Incorreta. A pesquisa vertical é efetuada pela função PROCV."
    ],
    "banca": "Focus Concursos",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_excel_absoluto",
    "text": "No Microsoft Excel, como é indicada uma referência absoluta de célula, que impede as referências de linha e coluna de se alterarem quando a fórmula é copiada para outras células?",
    "options": [
      "A) Usando o símbolo de porcentagem (%) antes da coluna e linha, ex: %A%1",
      "B) Usando o símbolo de arroba (@) antes da coluna e linha, ex: @A@1",
      "C) Omitindo qualquer operador, ex: A1",
      "D) Usando o cifrão ($) antes da coluna e da linha, ex: $A$1",
      "E) Colocando o nome da célula entre colchetes, ex: [A1]"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. O símbolo de porcentagem (%) indica formatação ou operador de taxa percentual.",
      "Incorreta. O símbolo de arroba (@) é usado em referências estruturadas ou compatibilidade no Excel 365, não referências absolutas.",
      "Incorreta. Sem símbolos (A1), a referência é considerada totalmente relativa e se altera ao ser arrastada.",
      "Correta. As referências absolutas no Excel utilizam o caractere cifrão ($) para fixar (travar) as linhas e colunas. Sob o formato $A$1, ao copiar ou estender a célula por alça de preenchimento, nem a coluna A nem a linha 1 serão alteradas.",
      "Incorreta. Colchetes são usados para referenciar pastas de trabalho e arquivos externos, não referências absolutas comuns."
    ],
    "banca": "Focus Concursos",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_android_camadas",
    "text": "O sistema operacional Android possui uma arquitetura clássica em camadas organizada de forma hierárquica. De baixo para cima (da camada mais próxima ao hardware até a camada de aplicativo do usuário final), qual é a ordem correta dessas camadas?",
    "options": [
      "A) Linux Kernel -> Applications -> Android Runtime (ART) -> Hardware Abstraction Layer (HAL) -> Application Framework",
      "B) Hardware Abstraction Layer (HAL) -> Linux Kernel -> Application Framework -> ART -> Applications",
      "C) Linux Kernel -> Hardware Abstraction Layer (HAL) -> Bibliotecas Nativas & Android Runtime (ART) -> Application Framework -> Applications",
      "D) Application Framework -> Linux Kernel -> HAL -> Applications -> ART",
      "E) Applications -> Application Framework -> Hardware Abstraction Layer (HAL) -> Linux Kernel -> ART"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O Linux Kernel é a base, mas o ART não fica acima de Applications.",
      "Incorreta. O Linux Kernel é inferior a HAL na escala arquitetural.",
      "Correta. A estrutura em camadas oficial do Android é hierarquizada exatamente assim (de baixo para cima): 1. Linux Kernel (base direta com hardware), 2. Hardware Abstraction Layer / HAL (abstração de drivers), 3. Bibliotecas Nativas & Runtime (ART/execução .dex), 4. Application Framework (APIs públicas e System Services), 5. Applications (topo da arquitetura/interação).",
      "Incorreta. O topo da arquitetura é ocupado por Applications, não por ART.",
      "Incorreta. O topo não está na base."
    ],
    "banca": "Focus Concursos",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": true
  },
  {
    "id": "info_android_service",
    "text": "No desenvolvimento e arquitetura de aplicações Android, qual componente é responsável por executar operações e processos pesados ou de longa duração em segundo plano (background), sem possuir ou expor uma interface direta com o usuário?",
    "options": [
      "A) Activity",
      "B) Service",
      "C) Broadcast Receiver",
      "D) Content Provider",
      "E) Intent"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Uma Activity representa e gerencia exclusivamente a tela ativa do aplicativo com a qual o usuário interage diretamente.",
      "Correta. Um Service é o componente oficial do Android projetado especificamente para processar tarefas ou download de dados em segundo plano, sem possuir qualquer interface gráfica associada (UI).",
      "Incorreta. O Broadcast Receiver é responsável apenas por ouvir e reagir a mensagens de difusão (eventos do sistema como energia baixa).",
      "Incorreta. O Content Provider gerencia e disponibiliza o compartilhamento seguro de dados estruturados entre diferentes aplicações do dispositivo.",
      "Incorreta. Uma Intent é um sinal de mensagem usado para solicitar ações de inicialização, e não um componente estrutural de execução."
    ],
    "banca": "Focus Concursos",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": true
  },
  {
    "id": "info_win11_snap",
    "text": "Qual é a finalidade principal do recurso denominado 'Snap Layouts' implementado no sistema operacional Microsoft Windows 11?",
    "options": [
      "A) Efetuar a limpeza de disco removendo arquivos de internet temporários em segundo plano.",
      "B) Desativar em tempo real todos os processos de inicialização identificados como inseguros pelo antivírus Windows Defender.",
      "C) Sincronizar e criptografar pastas locais e arquivos diretamente na nuvem do Azure/OneDrive.",
      "D) Fornecer modelos predefinidos para organizar, agrupar e redimensionar múltiplas janelas abertas simultaneamente na tela para multitarefa.",
      "E) Permitir reverter de forma segura o sistema operacional para um ponto de restauração anterior."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. A limpeza de disco é papel da ferramenta 'Limpeza de disco', sem relação com posicionamento de janelas.",
      "Incorreta. Esse papel é desempenhado pelo firewall, monitor ou painel de tarefas de antivírus.",
      "Incorreta. A sincronização em nuvem é feita em segundo plano pelo serviço OneDrive ou Sharepoint.",
      "Correta. O 'Snap Layouts' é uma útil ferramenta de design e produtividade do Windows 11 para organizar janelas abertas de forma flexível e pré-configurada na tela (lado a lado, bento grids, etc) ao passar o cursor sobre o botão de Maximizar.",
      "Incorreta. Essa ação é operada pela ferramenta 'Restauração do Sistema'."
    ],
    "banca": "Focus Concursos",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_win11_caracteres",
    "text": "No sistema operacional Microsoft Windows, ao renomear arquivos ou pastas no Explorador de Arquivos, quais caracteres abaixo são estritamente proíbidos devido a conflitos de termos lógicos reservados ao sistema?",
    "options": [
      "A) @, #, $, e %",
      "B) \\, /, :, *, ?, \", <, >, e |",
      "C) (, ), [,, ], e {",
      "D) hífens (-), underlines (_) e espaços em branco",
      "E) apenas caracteres acentuados especiais (á, é, í, õ, ç)"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Símbolos como arroba ou porcentagem são válidos na nomeação comum de pastas ou textos no Windows.",
      "Correta. O Windows proíbe o uso dos seguintes caracteres especiais nos nomes de arquivos e pastas para fins de evitar falhas de interpretação de terminal, caminhos e sintaxes lógicas: barras (\\ /), dois pontos (:), asterisco (*), interrogação (?), aspas (\"), menor/maior (< >) e pipe/barra vertical (|).",
      "Incorreta. Parênteses, colchetes e chaves são perfeitamente utilizáveis em identificação comum de pastas.",
      "Incorreta. Hífens, sublinhados e espaços em branco são caracteres extremamente comuns e totalmente liberados.",
      "Incorreta. Letras acentuadas e cedilhas funcionam perfeitamente para nomear arquivos no Windows."
    ],
    "banca": "Focus Concursos",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_hard_ram",
    "text": "As memórias do computador desempenham diferentes papéis no processamento de dados. Qual é a principal diferença biunívoca entre a Memória RAM e os dispositivos de Armazenamento Secundário (como HD ou SSD)?",
    "options": [
      "A) A memória RAM é não volátil e lenta, enquanto o armazenamento secundário é volátil e ultrarrápido.",
      "B) A memória RAM armazena todos os arquivos do usuário de forma indefinida sem usar energia, enquanto o disco rígido perde os dados com o computador desligado.",
      "C) A memória de armazenamento secundário conecta-se diretamente à cache L1 do processador.",
      "D) A memória RAM é volátil (perde os dados temporariamente carregados ao desligar o computador) e serve como memória de trabalho rápida da CPU, enquanto o armazenamento secundário (HD/SSD) é não volátil (preserva os arquivos mesmo sem energia).",
      "E) Diferenciam-se única e simplesmente pela tecnologia de conexão física de barramento do drive óptico."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. O inverso é verdadeiro: a RAM é extremamente mais veloz e de natureza volátil.",
      "Incorreta. A RAM é volátil, ela perde qualquer conteúdo se faltar corrente elétrica. O HD armazena de forma permanente.",
      "Incorreta. A memória RAM (e não o armazenamento secundário) é a que se conecta sequencialmente de forma rápida ao sistema de cache e barramento da CPU.",
      "Correta. A Memória RAM armazena de forma ágil e temporária (volátil) os dados dos programas atualmente executados pela CPU. O HD/SSD armazena grandes volumes de dados de forma persistente (não volátil), retendo a informação sem energia.",
      "Incorreta. Há diferenças fundamentais de eletrônica, velocidade, durabilidade, finalidade lógica de uso e volatilidade."
    ],
    "banca": "Focus Concursos",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_soft_gpl",
    "text": "Organizações educacionais ou órgãos públicos utilizam com frequência sistemas computacionais licenciados de forma aberta. O software livre regulamentado pela licença GPL (General Public License) assegura a concessão de quais direitos fundamentais?",
    "options": [
      "A) Permissão exclusiva para empresas nacionais, gratuidade obrigatória vitalícia nas compras e desativação de suporte técnico de segurança.",
      "B) Usar o programa para qualquer finalidade; Estudar como ele funciona (acesso ao código-fonte); Modificar conforme a necessidade; e Distribuir cópias (originais ou modificadas).",
      "C) Uso exclusivo acadêmico, proibição absoluta de cópia física e restrição à compilação local.",
      "D) Instalação restrita a um computador por licença, bloqueio do código-fonte e proibição de melhorias por programadores terceiros.",
      "E) Isenção total de impostos de importação, uso obrigatório offline e proibição de redes locais."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A GPL não limita software a países ou desativa segurança.",
      "Correta. A licença GPL (criada por Richard Stallman na Free Software Foundation) estabelece as 4 liberdades de Software Livre do usuário: 0. Liberdade de executar o programa para qualquer fim; 1. Liberdade de estudar e adaptar o programa; 2. Liberdade de redistribuir cópias; 3. Liberdade de melhorar o programa e liberar modificações ao público.",
      "Incorreta. Softwares sob a GPL podem ser livremente usados para qualquer fim, comercial ou profissional, sem travas locais.",
      "Incorreta. Essas travas são as características clássicas de softwares proprietários ou comerciais tradicionais.",
      "Incorreta. Não existe restrição tributária ou de rede na licença GPL."
    ],
    "banca": "Focus Concursos",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_soft_drivers",
    "text": "No contexto da categorização de Programas de Computador (Softwares), de que forma são corretamente classificados os Drivers de Dispositivos e as ferramentas Antivírus/Compactadores de arquivos?",
    "options": [
      "A) Software de Sistema e Software Utilitário, respectively.",
      "B) Software Aplicativo e Software de Sistema, respectively.",
      "C) Ambos são classificados de forma idêntica como subclasses puras de Software de Programação.",
      "D) Software de Programação e Software Aplicativo, respectively.",
      "E) Ambas são categorias exclusivas de Firmware de placa de vídeo."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Os drivers agem como 'tradutores' de hardware indispensáveis para o SO, sendo classificados como Software de Sistema (ou básico). Proteções antivírus e compactadores como WinRAR agem na otimização e controle prático do sistema, sendo Softwares Utilitários.",
      "Incorreta. Drivers não são aplicações de dia a dia do usuário final (aplicativos).",
      "Incorreta. Software de programação é um conjunto de ferramentas para criar outros programas (IDE, compilador), o que não é o papel de drivers ou compactadores.",
      "Incorreta. Inverte totalmente as conceituações corretas.",
      "Incorreta. Firmware é o software gravado diretamente na memória ROM física de chips de hardware, inadequado para descrever softwares utilitários gerais como antivírus ou compactadores."
    ],
    "banca": "Focus Concursos",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_file_management_01",
    "text": "No sistema operacional Windows 10, a organização de arquivos e pastas segue uma estrutura hierárquica. Ao tentar renomear um arquivo no Explorador de Arquivos, o usuário deve observar certas restrições de caracteres. Assinale a alternativa que apresenta um nome de arquivo VÁLIDO, ou seja, que não contém caracteres proibidos pelo sistema.",
    "options": [
      "A) relatorio:final.docx",
      "B) projeto/versao1.pdf",
      "C) duvidas?frequentes.txt",
      "D) lista_de_compras(2023).xlsx",
      "E) vendas*mensais.csv"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. O caractere 'dois pontos' (:) é proibido em nomes de arquivos no Windows.",
      "Incorreta. A 'barra' (/) é um caractere reservado para a sintaxe de caminhos e não pode ser usada no nome do arquivo.",
      "Incorreta. O ponto de 'interrogação' (?) é um caractere proibido.",
      "Correta. O Windows 10 permite o uso de parênteses, sublinhados (underscore) e pontos em nomes de arquivos.",
      "Incorreta. O 'asterisco' (*) é um caractere proibido, comumente usado como caractere curinga em buscas."
    ],
    "banca": "IBGE Focus",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_02",
    "text": "Sobre a sensibilidade a maiúsculas e minúsculas (case sensitivity) na nomenclatura de arquivos e pastas no Windows 10, assinale a afirmativa correta.",
    "options": [
      "A) O Windows diferencia maiúsculas de minúsculas, permitindo que 'Documento.txt' e 'documento.txt' coexistam na mesma pasta.",
      "B) O Windows não diferencia maiúsculas de minúsculas, tratando 'PROVA.PDF' e 'prova.pdf' como o mesmo arquivo.",
      "C) A diferenciação entre maiúsculas e minúsculas depende apenas da extensão do arquivo (ex: .EXE diferencia, .TXT não).",
      "D) O Windows 10 passou a ser case sensitive por padrão para se equiparar aos sistemas baseados em Linux.",
      "E) Apenas a primeira letra do nome do arquivo é sensível ao caso, enquanto as demais são ignoradas pelo sistema."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O Windows não diferencia maiúsculas de minúsculas por padrão, impedindo que coexistam na mesma pasta.",
      "Correta. O Windows não diferencia maiúsculas de minúsculas na sua nomenclatura padrão de arquivos e pastas.",
      "Incorreta. A diferenciação não depende do tipo de extensão.",
      "Incorreta. O Windows 10 mantém a insensibilidade ao caso por padrão para compatibilidade de sistemas.",
      "Incorreta. Nenhuma parte do nome é sensível ao caso por padrão."
    ],
    "banca": "IBGE Focus",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_03",
    "text": "Ao organizar arquivos no Explorador de Arquivos do Windows 11, um usuário tenta renomear um documento técnico. De acordo com as regras de nomenclatura do sistema operacional, qual dos seguintes caracteres pode ser utilizado validamente no nome de um arquivo?",
    "options": [
      "A) Asterisco (*)",
      "B) Sinal de maior (>)",
      "C) Underline (_)",
      "D) Aspas duplas (\")",
      "E) Barra invertida (\\)"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O asterisco (*) é proibido em nomes de arquivos.",
      "Incorreta. O sinal de maior (>) é proibido.",
      "Correta. O underline (_) é um caractere válido e permitido para nomes de arquivos no Windows.",
      "Incorreta. As aspas duplas (\") são proibidas.",
      "Incorreta. A barra invertida (\\) é usada como separador de diretórios e é proibida no nome do arquivo."
    ],
    "banca": "IBGE Focus",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_04",
    "text": "No Windows 11, um usuário selects um arquivo e deseja alterar seu nome rapidamente utilizando apenas o teclado. Qual tecla de atalho deve ser pressionada para abrir a caixa de edição de nome do item selecionado?",
    "options": [
      "A) F1",
      "B) F2",
      "C) F5",
      "D) F10",
      "E) F12"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. F1 é o atalho padrão de ajuda.",
      "Correta. F2 é o atalho padrão universal para renomear o item selecionado.",
      "Incorreta. F5 é o atalho para atualizar a página ou pasta.",
      "Incorreta. F10 ativa a barra de menu.",
      "Incorreta. F12 geralmente é 'Salvar como' em vários aplicativos."
    ],
    "banca": "IBGE Focus",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_05",
    "text": "No sistema operacional Windows 10, em sua configuração padrão e idioma português, um usuário deseja renomear um arquivo selecionado no Explorador de Arquivos utilizando apenas o teclado. Para acionar o modo de edição do nome do arquivo, o atalho de teclado correto é:",
    "options": [
      "A) F1",
      "B) F2",
      "C) F5",
      "D) Ctrl + R",
      "E) Alt + Enter"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. F1 abre a ajuda.",
      "Correta. F2 abre o modo de edição para renomear o item.",
      "Incorreta. F5 atualiza a exibição.",
      "Incorreta. Ctrl + R atualiza ou recarrega em muitos programas, mas não renomeia.",
      "Incorreta. Alt + Enter abre as propriedades do item selecionado."
    ],
    "banca": "IBGE Focus",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_06",
    "text": "Ao gerenciar arquivos no Explorador de Arquivos do Windows 10, um técnico precisa selecionar cinco arquivos específicos que não estão dispostos de forma sequencial (estão alternados na lista). Para realizar essa seleção de itens intercalados, o técnico deve manter pressionada a tecla:",
    "options": [
      "A) Shift",
      "B) Alt",
      "C) Tab",
      "D) Ctrl",
      "E) Esc"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. O Shift é utilizado para seleções contínuas (em bloco), do primeiro ao último clique.",
      "Incorreta. A tecla Alt é usada para menus e atalhos de sistema, não para seleção múltipla de arquivos.",
      "Incorreta. O Tab é usado para navegar entre elementos da interface.",
      "Correta. O Ctrl permite a seleção de itens não adjacentes (intercalados).",
      "Incorreta. O Esc é usado para cancelar operações ou fechar caixas de diálogo."
    ],
    "banca": "IBGE Focus",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_07",
    "text": "No sistema operacional Windows, a Área de Transferência (Clipboard) desempenha um papel fundamental na manipulação de dados. Sobre esse recurso, assinale a alternativa que descreve corretamente sua natureza técnica.",
    "options": [
      "A) Trata-se de um espaço físico no disco rígido (HD) destinado ao backup automático de arquivos deletados.",
      "B) É um espaço temporário na memória RAM destinado a armazenar informações movidas ou copiadas.",
      "C) Consiste em uma pasta oculta no diretório do sistema que armazena permanentemente todos os textos digitados.",
      "D) É um serviço de nuvem obrigatório que exige conexão com a internet para funcionar em qualquer versão do Windows.",
      "E) Representa um hardware específico instalado na placa-mãe para gerenciar o comando de copiar e colar."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A Área de Transferência não utiliza o disco rígido para armazenamento padrão e não se confunde com a Lixeira ou sistemas de backup.",
      "Correta. Esta alternativa define precisamente a natureza técnica do Clipboard como armazenamento temporário na RAM.",
      "Incorreta. O armazenamento não é permanente e a finalidade não é o log de digitação, mas sim o suporte às funções de edição.",
      "Incorreta. Embora versões modernas permitam sincronização em nuvem, a Área de Transferência básica é local e não exige internet.",
      "Incorreta. O Clipboard é um recurso lógico do sistema operacional, não um componente físico de hardware."
    ],
    "banca": "IBGE Focus",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_08",
    "text": "Um usuário está editando um documento de texto e, acidentalmente, apaga um parágrafo inteiro. Para reverter essa ação de forma imediata utilizando um atalho de teclado padrão do Windows, ele deve pressionar:",
    "options": [
      "A) Ctrl + C",
      "B) Ctrl + V",
      "C) Ctrl + X",
      "D) Ctrl + Z",
      "E) Ctrl + A"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Ctrl + C é utilizado para copiar o conteúdo selecionado.",
      "Incorreta. Ctrl + V é utilizado para colar o conteúdo que está na área de transferência.",
      "Incorreta. Ctrl + X é utilizado para recortar o conteúdo.",
      "Correta. O atalho Ctrl + Z desfaz a última ação, sendo a solução para o erro acidental descrito.",
      "Incorreta. Ctrl + A é utilizado para selecionar todo o conteúdo da janela ou campo ativo."
    ],
    "banca": "IBGE Focus",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_09",
    "text": "No sistema operacional Windows 10, um usuário deseja excluir um arquivo de forma que ele não seja enviado para a Lixeira, sendo removido permanentemente do sistema de arquivos de forma imediata. Para realizar essa operação por meio de um atalho de teclado, o usuário deve selecionar o arquivo e pressionar simultaneamente as teclas:",
    "options": [
      "A) Ctrl + Delete",
      "B) Alt + Delete",
      "C) Shift + Delete",
      "D) Ctrl + Shift + Esc",
      "E) Alt + F4"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Ctrl + Delete não possui função nativa de exclusão permanente no Windows Explorer.",
      "Incorreta. Alt + Delete não é um comando padrão para exclusão de arquivos.",
      "Correta. Shift + Delete realiza a exclusão direta sem passar pela lixeira.",
      "Incorreta. Este atalho abre o Gerenciador de Tarefas.",
      "Incorreta. Este atalho é utilizado para fechar a janela activa ou o programa em execução."
    ],
    "banca": "IBGE Focus",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_10",
    "text": "Ao utilizar a funcionalidade de 'Restaurar' em um arquivo que se encontra na Lixeira do Windows 10, o sistema operacional executará a seguinte ação:",
    "options": [
      "A) Moverá o arquivo para a pasta 'Documentos' do usuário logado.",
      "B) Enviará o arquivo para a Área de Trabalho (Desktop) para fácil acesso.",
      "C) Criará uma cópia do arquivo na pasta de origem e manterá o original na lixeira.",
      "D) Devolverá o arquivo exatamente para o local original onde ele estava antes da exclusão.",
      "E) Solicitará ao usuário que escolha um novo diretório para salvar o arquivo recuperado."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. A restauração não é padronizada para a pasta Documentos, mas sim para o local de origem.",
      "Incorreta. A Área de Trabalho só será o destino se o arquivo tiver sido excluído de lá.",
      "Incorreta. O arquivo é movido da lixeira para a origem, não copiado.",
      "Correta. O Windows rastreia o metadado do local original para permitir a restauração precisa.",
      "Incorreta. O Windows não solicita o local; ele usa o caminho original automaticamente."
    ],
    "banca": "IBGE Focus",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_11",
    "text": "No contexto da manipulação de arquivos no Windows 10, um 'Caminho Absoluto' (Absolute Path) é definido como:",
    "options": [
      "A) O endereço de um arquivo que leva em conta apenas a pasta onde o usuário está posicionado no momento.",
      "B) Um atalho criado na Área de Trabalho que aponta para um arquivo armazenado em uma unidade de rede.",
      "C) A localização completa de um arquivo ou pasta, iniciando obrigatoriamente a partir da unidade raiz (ex: C:\\\\).",
      "D) O nome do arquivo seguido apenas pela sua extensão, sem menção às pastas superiores.",
      "E) Uma representação virtual de arquivos que pertencem a diferentes pastas, como ocorre nas Bibliotecas."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Esta é a definição de caminho relativo.",
      "Incorreta. Um atalho é um arquivo do tipo .lnk, não um conceito de caminho de diretório.",
      "Correta. O caminho absoluto fornece a rota completa desde o topo da hierarquia (a raiz) até o arquivo ou pasta final, independentemente do diretório de trabalho atual.",
      "Incorreta. Isso descreve apenas o nome do objeto, não o seu caminho.",
      "Incorreta. Isso descreve o conceito de 'Biblioteca', que é um contêiner virtual."
    ],
    "banca": "IBGE Focus",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_12",
    "text": "As 'Bibliotecas' do Windows 10 são recursos que auxiliam na organização de dados. Sobre o funcionamento técnico das Bibliotecas, assinale a alternativa correta.",
    "options": [
      "A) Uma Biblioteca é uma pasta física real que armazena cópias de segurança de todos os arquivos nela contidos.",
      "B) Ao excluir uma Biblioteca, todos os arquivos e pastas originais vinculados a ela são permanentemente apagados do disco rígido.",
      "C) As Bibliotecas não permitem a inclusão de pastas que estejam localizadas em unidades externas ou dispositivos removíveis.",
      "D) Uma Biblioteca atua como um contêiner virtual que agrega conteúdos de diferentes locais físicos em uma única exibição.",
      "E) Arquivos movidos para dentro de uma Biblioteca deixam de ocupar espaço no disco rígido original."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Bibliotecas não são pastas físicas e não realizam cópias (backup) automáticas.",
      "Incorreta. Excluir a Biblioteca (o contêiner) não afeta os arquivos nas pastas de origem.",
      "Incorreta. É possível incluir pastas de diversas origens, desde que indexáveis.",
      "Correta. Esta é a definição técnica precisa de Biblioteca no Windows: um agregador lógico virtual.",
      "Incorreta. O arquivo continua ocupando espaço em sua localização física original; a biblioteca é apenas uma 'lente' de visualização."
    ],
    "banca": "IBGE Focus",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_13",
    "text": "Um usuário possui dois discos rígidos instalados em seu computador, identificados como Unidade C: e Unidade D:. Ao utilizar o mouse para clicar em um arquivo localizado na Unidade C: e arrastá-lo diretamente para uma pasta na Unidade D:, sem pressionar nenhuma tecla adicional, a operação realizada pelo Windows será de:",
    "options": [
      "A) Mover o arquivo, removendo-o da Unidade C:.",
      "B) Criar um atalho do arquivo na Unidade D:.",
      "C) Copiar o arquivo, mantendo o original na Unidade C:.",
      "D) Excluir o arquivo da origem após a confirmação.",
      "E) Renomear o arquivo automaticamente no destino."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. A movimentação é o padrão apenas para arraste dentro da mesma unidade de disco.",
      "Incorreta. Para criar um atalho via arraste, seria necessário pressionar a tecla ALT ou usar o botão direito do mouse.",
      "Correta. Como as unidades são diferentes (C: e D:), o Windows interpreta que o usuário deseja duplicar o arquivo no novo destino, efetuando uma CÓPIA.",
      "Incorreta. O arraste simples entre unidades nunca resulta em exclusão do arquivo original.",
      "Incorreta. O Windows não renomeia o arquivo automaticamente no arraste, a menos que já exista um arquivo com o mesmo nome."
    ],
    "banca": "IBGE Focus",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_14",
    "text": "Considere que um usuário conectou um Pen Drive (Unidade E:) ao seu computador com Windows 11. Ele seleciona um arquivo importante armazenado nesse Pen Drive e pressiona a tecla 'Delete' do teclado. Sobre essa ação, assinale a alternativa correta:",
    "options": [
      "A) O arquivo será movido para a Lixeira do Windows e poderá ser restaurado posteriormente.",
      "B) O arquivo será excluído permanentemente, sem passar pela Lixeira do Windows.",
      "C) O Windows solicitará que o usuário pressione Shift+Delete para concluir a exclusão.",
      "D) O arquivo será movido para uma pasta oculta chamada 'Recycle' dentro do próprio Pen Drive.",
      "E) A operação será cancelada, pois arquivos em unidades removíveis só podem ser excluídos via menu de contexto."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A Lixeira é um recurso para unidades de disco locais fixas (HD/SSD internos).",
      "Correta. Por se tratar de um dispositivo removível, o Windows apaga o arquivo permanentemente sem o estágio intermediário da Lixeira.",
      "Incorreta. O uso do Shift+Delete também resultaria em exclusão permanente, mas a tecla Delete sozinha já produz esse efeito em pen drives.",
      "Incorreta. O arquivo não é enviado para lixeiras recuperáveis da mídia por padrão de forma simples.",
      "Incorreta. A tecla Delete é perfeitamente funcional para excluir arquivos em qualquer unidade."
    ],
    "banca": "IBGE Focus",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_15",
    "text": "No Windows 11, um usuário seleciona dez arquivos de fotos simultaneamente em uma pasta e pressiona a tecla F2. Ele digita o nome 'Ferias' e pressiona Enter. Qual será o resultado dessa ação?",
    "options": [
      "A) Apenas o primeiro arquivo selecionado será renomeado para 'Ferias'.",
      "B) O Windows exibirá uma mensagem de erro informando que não podem existir arquivos com nomes iguais.",
      "C) Todos os arquivos serão renomeados como 'Ferias', mas com extensões diferentes.",
      "D) Os arquivos serão renomeados sequencialmente como 'Ferias (1)', 'Ferias (2)', e assim por diante.",
      "E) A operação será bloqueada, pois a renomeação em lote só é permitida via Prompt de Comando."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Se múltiplos arquivos estão selecionados, a ação de renomear se aplica a todos eles.",
      "Incorreta. O Windows possui um mecanismo automático para evitar esse erro durante a renomeação em lote.",
      "Incorreta. Mesmo que as extensões fossem diferentes, o Windows aplicaria a numeração sequencial a todos os itens.",
      "Correta. O Windows utiliza o padrão Nome (n) para organizar a renomeação múltipla de forma automática.",
      "Incorreta. A renomeação em lote é um recurso nativo da interface gráfica (Explorador de Arquivos)."
    ],
    "banca": "IBGE Focus",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_16",
    "text": "Considere que um usuário do Windows 10 possui um arquivo chamado 'Relatorio.docx' localizado na pasta 'C:\\\\Documentos'. Ele utiliza o mouse para clicar e arrastar esse arquivo diretamente para a pasta 'D:\\\\Backup', localizada em uma partição de disco diferente, sem pressionar nenhuma tecla modificadora. Ao final da operação, o comportamento padrão do Windows será:",
    "options": [
      "A) Mover o arquivo para o destino, removendo-o da origem.",
      "B) Criar um atalho do arquivo no destino, mantendo o original intacto.",
      "C) Copiar o arquivo para o destino, mantendo o original na pasta de origem.",
      "D) Exibir uma mensagem de erro, pois não é permitido arrastar entre unidades diferentes.",
      "E) Abrir uma caixa de diálogo perguntando se o usuário deseja copiar ou mover."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O arquivo seria movido apenas se a origem e o destino fossem na mesma unidade (ex: C: para C:).",
      "Incorreta. Para criar um atalho arrastando, seria necessário pressionar a tecla ALT.",
      "Correta. Entre unidades distintas (C: para D:), o Windows duplica o arquivo (Copia).",
      "Incorreta. A operação é permitida e comum no sistema.",
      "Incorreta. O Windows executa a ação padrão de cópia sem perguntar, a menos que o usuário arraste com o botão direito do mouse."
    ],
    "banca": "IBGE Focus",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_17",
    "text": "Um usuário deseja criar uma nova pasta dentro do diretório atual no Explorador de Arquivos do Windows 10. Para realizar essa tarefa de forma rápida, utilizando um atalho de teclado, ele deve pressionar simultaneamente as teclas:",
    "options": [
      "A) Ctrl + N",
      "B) Ctrl + Shift + N",
      "C) Alt + N",
      "D) Shift + F10",
      "E) Ctrl + Alt + N"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Ctrl + N abre uma nova janela do Explorador de Arquivos.",
      "Correta. O atalho padrão para a criação de uma nova pasta no Windows é Ctrl + Shift + N.",
      "Incorreta. Alt + N não possui função de criação de pastas.",
      "Incorreta. Shift + F10 abre o menu de contexto (equivalente ao clique com botão direito).",
      "Incorreta. Combinação inexistente para esta finalidade."
    ],
    "banca": "IBGE Focus",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_18",
    "text": "Durante a organização de seus arquivos, um usuário decide renomear o arquivo 'projeto_final.txt' para 'projeto_final.pdf'. Ao confirmar a alteração no Windows 10, o sistema apresentará o seguinte comportamento:",
    "options": [
      "A) O Windows converterá automaticamente o conteúdo do arquivo de texto para o formato PDF.",
      "B) A operação será bloqueada, pois o Windows não permite a alteração manual de extensões de arquivos.",
      "C) O arquivo será renomeado normalmente, sem qualquer aviso, desde que o usuário tenha privilégios de administrador.",
      "D) O Windows exibirá um aviso informando que a alteração da extensão pode tornar o arquivo inutilizável, solicitando confirmação.",
      "E) O arquivo será duplicado, mantendo-se o original .txt e criando-se um novo .pdf vazio."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Renomear não converte o formato ou codificação interna do arquivo.",
      "Incorreta. O Windows permite a alteração, apenas exige confirmação.",
      "Incorreta. O aviso é exibido independentemente do nível de privilégio do usuário.",
      "Correta. É o comportamento padrão de segurança do sistema, pois a alteração manual de extensão pode inviabilizar a leitura pelo software correto.",
      "Incorreta. A operação de renomear altera o arquivo existente, não cria um novo de forma duplicada."
    ],
    "banca": "IBGE Focus",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_19",
    "text": "Sobre a operação de 'Desfazer' no Explorador de Arquivos do Windows 10, analise as afirmativas abaixo:\nI. O atalho Ctrl + Z pode ser utilizado para desfazer uma renomeação acidental de arquivo.\nII. Se um usuário mover um arquivo de uma pasta para outra, o Ctrl + Z pode retornar o arquivo à pasta de origem.\nIII. O comando Ctrl + Z não funciona para operações de cópia de arquivos, apenas para movimentação.\nEstá(ão) correta(s):",
    "options": [
      "A) Apenas I.",
      "B) Apenas II.",
      "C) Apenas I e II.",
      "D) Apenas II e III.",
      "E) I, II e III."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. A afirmativa II também está correta.",
      "Incorreta. A afirmativa I também está correta.",
      "Correta. O Ctrl + Z é capaz de desfazer tanto renomeações quanto movimentações e cópias de arquivos (removendo a cópia gerada). Portanto, I e II são verdadeiras.",
      "Incorreta. O Ctrl + Z também funciona para desfazer operações de cópia.",
      "Incorreta. A afirmativa III invalida esta opção."
    ],
    "banca": "IBGE Focus",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_20",
    "text": "No que tange ao Histórico da Área de Transferência, recurso introduzido nas versões mais recentes do Windows (10 e 11), assinale a afirmativa correta:",
    "options": [
      "A) O histórico é ativado automaticamente por padrão em todas as instalações, sem necessidade de intervenção do usuário.",
      "B) O atalho Win + V permite acessar o painel do histórico, mas ele suporta exclusivamente o armazenamento de textos simples.",
      "C) Ao utilizar o Win + V pela primeira vez, o sistema solicita que o usuário ative explicitamente o recurso de histórico.",
      "D) O histórico da área de transferência é limpo obrigatoriamente a cada 30 minutos para economizar memória RAM.",
      "E) Itens copiados através do comando Ctrl + C não aparecem no histórico acessado pelo Win + V, apenas itens recortados."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O recurso requer ativação manual na primeira utilização ou nas configurações de sistema.",
      "Incorreta. O histórico suporta tanto textos quanto imagens dentro de limites de tamanho específicos.",
      "Correta. Esta é a interface padrão do Windows para a primeira interação com o recurso de histórico: solicitar ativação do usuário.",
      "Incorreta. Não há uma limpeza automática por tempo fixo de 30 minutos; a limpeza ocorre por ação do usuário ou reinicialização (exceto itens fixados).",
      "Incorreta. Tanto itens copiados (Ctrl+C) quanto recortados (Ctrl+X) são registrados no histórico."
    ],
    "banca": "IBGE Focus",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_21",
    "text": "Ao manipular arquivos no Explorador de Arquivos do Windows, o comportamento do comando 'Recortar' (Ctrl + X) apresenta uma particularidade em relação à edição de textos. Sobre esse comportamento, é correto afirmar que:",
    "options": [
      "A) O arquivo é excluído imediatamente da pasta de origem e enviado para a Lixeira até que o comando 'Colar' seja executado.",
      "B) O ícone do arquivo fica com aspecto transparente (esmaecido), mas o arquivo permanece no local de origem até ser colado no destino.",
      "C) O Windows cria uma cópia temporária do arquivo e deleta o original instantaneamente para liberar espaço em disco.",
      "D) O comando Ctrl + X é desabilitado para arquivos, funcionando apenas para pastas e subpastas no ambiente Windows.",
      "E) Se o usuário realizar um novo comando de cópia antes de colar o arquivo recortado, o arquivo original será movido para uma pasta temporária do sistema."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O arquivo não vai para a Lixeira; ele permanece na origem até a conclusão da operação de mover.",
      "Correta. Esta alternativa descreve perfeitamente o feedback visual e a lógica do Windows: o ícone fica esmaecido e a movimentação real só ocorre ao colar.",
      "Incorreta. O original não é deletado instantaneamente; a operação de mover depende da colagem.",
      "Incorreta. O comando Ctrl + X é perfeitamente válido e amplamente utilizado para arquivos.",
      "Incorreta. Se outra cópia for feita antes da colagem, o recorte é cancelado e o arquivo original permanece intacto e volta ao brilho normal."
    ],
    "banca": "IBGE Focus",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_22",
    "text": "Considere que um usuário realizou a seguinte sequência de ações em um editor de texto:\n1. Digitou uma frase.\n2. Pressionou Ctrl + Z.\n3. Percebeu que não deveria ter desfeito a ação.\nQual atalho deve ser utilizado para 'refazer' a ação que foi desfeita?",
    "options": [
      "A) Ctrl + R",
      "B) Ctrl + Shift + Z",
      "C) Ctrl + Y",
      "D) Ctrl + W",
      "E) Ctrl + F"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Ctrl + R é comumente usado para 'Recarregar' (Refresh) em navegadores, não para refazer edições no Windows.",
      "Incorreta. Embora alguns softwares específicos usem Ctrl+Shift+Z, o padrão clássico e abrangente é Ctrl+Y.",
      "Correta. O comando Ctrl + Y é o padrão no Windows para a função 'Refazer' (Redo), que reverte a ação do comando 'Desfazer' (Ctrl + Z).",
      "Incorreta. Ctrl + W é utilizado para fechar janelas ou abas ativas.",
      "Incorreta. Ctrl + F é utilizado para localizar (Find) termos no documento ou página."
    ],
    "banca": "IBGE Focus",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_23",
    "text": "Assinale a alternativa que apresenta a correlação correta entre o atalho de teclado e sua respectiva função no ambiente Windows (idioma Português-Brasil):",
    "options": [
      "A) Ctrl + A: Abrir um novo arquivo de texto.",
      "B) Ctrl + X: Excluir definitivamente um item sem passar pela lixeira.",
      "C) Ctrl + V: Visualizar as propriedades de um arquivo selecionado.",
      "D) Ctrl + A: Selecionar todos os itens de uma pasta ou todo o texto de um documento.",
      "E) Ctrl + Z: Zoom na tela para facilitar a leitura de textos pequenos."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Para abrir um novo arquivo, geralmente usa-se Ctrl + O (Open) ou Ctrl + N (New), dependendo do aplicativo.",
      "Incorreta. Ctrl + X é recortar. Para excluir sem lixeira, usa-se Shift + Delete.",
      "Incorreta. Ctrl + V é colar. Propriedades são acessadas por Alt + Enter.",
      "Correta. No Windows em português, o atalho Ctrl + A é o comando padrão para selecionar a totalidade dos elementos ativos (todos os itens de uma pasta ou texto).",
      "Incorreta. Ctrl + Z serve para desfazer."
    ],
    "banca": "IBGE Focus",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_24",
    "text": "Considere uma situação em que um usuário do Windows 10 exclui um arquivo importante que estava armazenado em um Pen Drive (unidade removível de memória flash). Sobre a possibilidade de recuperação desse arquivo através da Lixeira, assinale a afirmativa correta:",
    "options": [
      "A) O arquivo poderá ser restaurado normalmente, pois o Windows cria uma lixeira oculta em todos os dispositivos removíveis.",
      "B) O arquivo não poderá ser recuperado via Lixeira, pois arquivos excluídos de unidades removíveis como Pen Drives são apagados permanentemente.",
      "C) O arquivo irá para a Lixeira apenas se o seu tamanho for inferior a 10% da capacidade total do Pen Drive.",
      "D) O arquivo será movido para a Lixeira do disco local (C:), independentemente de onde foi excluído.",
      "E) A recuperação só será possível se o usuário tiver habilitado a 'Lixeira de Rede' nas configurações do sistema."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Diferente de HDs externos, Pen Drives geralmente não possuem suporte à lixeira no Windows.",
      "Correta. Por padrão, o Windows trata Pen Drives e cartões de memória como unidades de armazenamento que não possuem suporte à Lixeira, resultando em exclusão direta permanente.",
      "Incorreta. Não existe essa regra de proporcionalidade de 10% para unidades removíveis.",
      "Incorreta. A lixeira do C: armazena apenas arquivos excluídos de unidades locais de disco fixo configuradas.",
      "Incorreta. Não existe a funcionalidade de 'Lixeira de Rede' para unidades flash locais."
    ],
    "banca": "IBGE Focus",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_25",
    "text": "No gerenciamento de espaço em disco do Windows 10, a Lixeira possui um comportamento específico quando atinge o limite máximo de armazenamento configurado pelo usuário. Esse comportamento é regido pela lógica:",
    "options": [
      "A) LIFO (Last In, First Out), onde os arquivos excluídos mais recentemente são os primeiros a serem apagados permanentemente.",
      "B) Aleatória, onde o sistema escolhe qualquer arquivo para apagar e liberar espaço.",
      "C) De bloqueio, impedindo que o usuário exclua novos arquivos até que a lixeira seja esvaziada manualmente.",
      "D) FIFO (First In, First Out), onde os arquivos que estão há mais tempo na lixeira são excluídos permanentemente para dar lugar aos novos.",
      "E) De compressão, onde o Windows compacta os arquivos antigos para evitar a exclusão permanente."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. LIFO seria o oposto; o Windows preserva os arquivos mais recentes.",
      "Incorreta. O processo é determinístico baseado na data de exclusão, não aleatório.",
      "Incorreta. O sistema não bloqueia novas exclusões; ele automatiza a limpeza.",
      "Correta. O Windows utiliza a lógica FIFO (First In, First Out) para garantir que o espaço da lixeira seja renovado, descartando os itens mais antigos primeiro.",
      "Incorreta. A lixeira não realiza compactação de arquivos para gerenciar seu limite de espaço."
    ],
    "banca": "IBGE Focus",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_26",
    "text": "Um usuário excluiu acidentalmente um arquivo chamado 'Relatorio.docx' que estava dentro de uma pasta denominada 'Projetos_2023'. Logo em seguida, ele também excluiu a pasta 'Projetos_2023'. Ao perceber o erro, ele abre a Lixeira e solicita a restauração apenas do arquivo 'Relatorio.docx'. De acordo com o funcionamento do Windows 10, o resultado será:",
    "options": [
      "A) O Windows apresentará um erro informando que o local original não está disponível.",
      "B) O arquivo será restaurado para a Área de Trabalho, pois sua pasta original não existe mais.",
      "C) O Windows recriará automaticamente a pasta 'Projetos_2023' para acomodar o arquivo restaurado no local original.",
      "D) O arquivo será restaurado para a raiz da unidade C:, aguardando que o usuário o mova manualmente.",
      "E) A recuperação só será possível se o usuário tiver habilitado a 'Lixeira de Rede' nas configurações do sistema."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O sistema não gera erro, ele resolve a ausência da pasta recriando-a.",
      "Incorreta. A Área de Trabalho não é o destino padrão para falhas de caminho original.",
      "Correta. O Windows 10 possui a inteligência de reconstruir a estrutura de diretórios necessária para restaurar um arquivo ao seu caminho original, mesmo que as pastas intermediárias tenham sido removidas.",
      "Incorreta. O arquivo nunca é movido para a raiz da unidade por padrão nesse cenário.",
      "Incorreta. A restauração não tem dependência com recursos de rede."
    ],
    "banca": "IBGE Focus",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_27",
    "text": "Determinados nomes de arquivos são reservados pelo sistema operacional Windows 10 para funções específicas de dispositivos e comunicações, não podendo ser utilizados pelos usuários para nomear arquivos comuns. Assinale a alternativa que contém apenas nomes RESERVADOS.",
    "options": [
      "A) SISTEMA, ARQUIVO, DADOS",
      "B) CON, PRN, NUL",
      "C) TEMP, TMP, CACHE",
      "D) USER, ADMIN, GUEST",
      "E) ROOT, HOME, BIN"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. SISTEMA, ARQUIVO e DADOS são nomes comuns e permitidos.",
      "Correta. O Windows reserva nomes herdados do MS-DOS para dispositivos de sistema, como CON (console), PRN (impressora), NUL (dispositivo nulo), AUX, COM1-COM9 e LPT1-LPT9.",
      "Incorreta. Embora sejam nomes usados pelo sistema para pastas temporárias, o usuário pode criar arquivos com esses nomes.",
      "Incorreta. São nomes comuns de usuários/perfis, mas não são nomes de arquivos reservados pelo sistema.",
      "Incorreta. Estes são nomes de diretórios padrão em sistemas Linux/Unix, mas não são reservados no Windows."
    ],
    "banca": "IBGE Focus",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": true,
    "image": null
  },
  {
    "id": "info_file_management_28",
    "text": "No que diz respeito aos limites técnicos de caminhos e nomes de arquivos no Windows 10, analise as proposições abaixo:\nI. O comprimento máximo para o nome de um arquivo individual é de 255 caracteres.\nII. O limite padrão para o caminho total (MAX_PATH), incluindo a unidade, pastas e o nome do arquivo, é de aproximadamente 260 caracteres.\nIII. O Windows utiliza a barra normal (/) como separador padrão de diretórios em seus caminhos de sistema internos.\nEstá(ão) correta(s):",
    "options": [
      "A) Apenas a I.",
      "B) Apenas a II.",
      "C) Apenas a I e a II.",
      "D) Apenas a II e a III.",
      "E) I, II e III."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. A proposição II também está correta.",
      "Incorreta. A proposição I também está correta.",
      "Correta. As proposições I (255 caracteres para o nome) e II (260 para o caminho total) refletem as limitações padrão do Windows. A proposição III está incorreta porque o Windows utiliza a barra invertida (\\\\) como separador padrão de diretórios.",
      "Incorreta. A proposição III está incorreta, pois o Windows usa a barra invertida.",
      "Incorreta. A proposição III invalida esta alternativa."
    ],
    "banca": "IBGE Focus",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": true,
    "image": null
  },
  {
    "id": "info_file_management_29",
    "text": "Durante a manipulação de arquivos no Windows 11, um técnico deseja transferir um arquivo da pasta 'Documentos' (Unidade C:) para a pasta 'Backup' (também na Unidade C:). No entanto, ele deseja garantir que a operação seja de CÓPIA, e não de movimentação, utilizando o método de arrastar e soltar. Para forçar esse comportamento, ele deve manter pressionada a tecla:",
    "options": [
      "A) SHIFT",
      "B) ALT",
      "C) CTRL",
      "D) TAB",
      "E) ESC"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. A tecla SHIFT força a operação de MOVER (movimentação).",
      "Incorreta. A tecla ALT (ou CTRL+SHIFT) força a criação de um ATALHO no destino.",
      "Correta. A tecla CTRL é a tecla modificadora que força a operação de CÓPIA, independentemente de os arquivos estarem na mesma unidade ou em unidades diferentes.",
      "Incorreta. A tecla TAB não possui função modificadora em operações de arraste.",
      "Incorreta. A tecla ESC é utilizada para cancelar a operação de arraste enquanto ela ainda está em curso."
    ],
    "banca": "IBGE Focus",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": true,
    "image": null
  },
  {
    "id": "info_file_management_30",
    "text": "Um usuário do Windows 11 realizou as seguintes ações em sequência:\n1. Excluiu uma pasta chamada 'Projetos' que continha um arquivo chamado 'Relatorio.docx' (opção de envio para a Lixeira).\n2. Abriu a Lixeira e solicitou a restauração apenas do arquivo 'Relatorio.docx'.\nConsiderando que a pasta original 'Projetos' não existe mais no local de origem, qual será o comportamento do Windows?",
    "options": [
      "A) O Windows impedirá a restauração e exibirá uma mensagem de erro informando que a pasta de origem inexiste.",
      "B) O arquivo será restaurado para a pasta Raiz da unidade (ex: C:\\\\).",
      "C) O Windows recriará automaticamente a pasta 'Projetos' para poder restaurar o arquivo em seu local original.",
      "D) O arquivo será restaurado para a pasta 'Documentos' do usuário logado.",
      "E) O Windows solicitará ao usuário que selecione um novo local para salvar o arquivo restaurado."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O Windows é capaz de lidar com essa situação de forma automatizada.",
      "Incorreta. A restauração não move o arquivo para a raiz, mas sim para o caminho original.",
      "Correta. O Windows mantém os metadados do caminho original. Se o contêiner (pasta) foi excluído, o sistema o recria automaticamente para garantir que o arquivo volte exatamente para onde estava.",
      "Incorreta. A restauração é específica para o local de origem, não havendo redirecionamento padrão para 'Documentos'.",
      "Incorreta. A função 'Restaurar' é automática e não exige seleção manual de nova pasta."
    ],
    "banca": "IBGE Focus",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": true,
    "image": null
  },
  {
    "id": "info_file_management_31",
    "text": "No que tange às operações de movimentação e cópia de arquivos em volumes formatados em NTFS no Windows 10, assinale a alternativa correta sobre o comportamento das permissões de acesso:",
    "options": [
      "A) Ao copiar um arquivo para uma pasta de destino, ele sempre mantém as permissões da pasta de origem.",
      "B) Ao mover um arquivo entre pastas da mesma partição (ex: de C:\\\\A para C:\\\\B), o arquivo mantém suas permissões originais.",
      "C) Ao mover um arquivo entre partições diferentes (ex: de C:\\\\ para D:\\\\), o arquivo mantém suas permissões originais da origem.",
      "D) A operação de cópia nunca altera as permissões, independentemente do destino ser a mesma partição ou não.",
      "E) O comando Ctrl + Z, ao desfazer uma movimentação, não é capaz de restaurar as permissões originais do arquivo."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Na cópia, o arquivo herda as permissões da pasta de destino.",
      "Correta. No NTFS, quando um arquivo é movido dentro da mesma partição, ele mantém seus metadados e permissões originais, pois apenas o ponteiro do diretório é alterado.",
      "Incorreta. Entre partições diferentes, a movimentação é tecnicamente uma cópia seguida de exclusão, logo, o arquivo herda as permissões do destino.",
      "Incorreta. A cópia sempre resulta na herança das permissões do destino.",
      "Incorreta. O Ctrl + Z desfaz o comando do sistema, restaurando também as permissões originais."
    ],
    "banca": "IBGE Focus",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": true,
    "image": null
  },
  {
    "id": "info_file_management_32",
    "text": "Um usuário está com o Explorador de Arquivos aberto e visualiza dois diretórios: 'C:\\\\Projetos' e 'C:\\\\Backup'. Ele seleciona um arquivo em 'C:\\\\Projetos' e, utilizando o botão esquerdo do mouse, arrasta-o para 'C:\\\\Backup' enquanto mantém a tecla ALT pressionada. O resultado desta ação será:",
    "options": [
      "A) A movimentação do arquivo para a pasta de destino.",
      "B) A cópia do arquivo para a pasta de destino.",
      "C) A criação de um atalho para o arquivo na pasta de destino.",
      "D) A exclusão do arquivo original e criação de uma cópia compactada no destino.",
      "E) A abertura da janela de propriedades do arquivo no destino."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Para mover na mesma unidade, bastaria arrastar sem teclas, ou usar SHIFT.",
      "Incorreta. Para copiar na mesma unidade, seria necessário usar CTRL.",
      "Correta. A tecla ALT é a tecla modificadora específica para forçar a criação de um atalho (.lnk) durante a operação de arrastar e soltar.",
      "Incorreta. Não existe essa funcionalidade combinada com a tecla ALT.",
      "Incorreta. Alt + Arrastar cria atalho, e não abre propriedades diretamente."
    ],
    "banca": "IBGE Focus",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": true,
    "image": null
  },
  {
    "id": "info_file_management_33",
    "text": "No Windows 10/11, o recurso de Histórico da Área de Transferência permite que itens sejam 'fixados'. Qual é a principal consequência prática de se fixar um item nesse painel?",
    "options": [
      "A) O item fixado será automaticamente colado em todos os novos documentos abertos pelo usuário.",
      "B) O item fixado passa a ser criptografado e exige senha para ser visualizado no histórico.",
      "C) O item fixado é preservado no histórico mesmo após a reinicialização do computador ou a limpeza manual do histórico.",
      "D) A fixação impede que o item seja editado em qualquer aplicativo até que seja desfixado.",
      "E) Itens fixados são enviados automaticamente para a Área de Transferência de todos os usuários da mesma rede local."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. A fixação não automatiza a colagem, apenas mantém o item disponível na lista para escolha manual.",
      "Incorreta. Não há recurso de criptografia por senha associado à fixação de itens no histórico.",
      "Correta. A principal consequência de se fixar um item é a sua persistência: ele é mantido mesmo após a limpeza do histórico ou reinicialização do sistema.",
      "Incorreta. A fixação no histórico não altera as propriedades de leitura/escrita do conteúdo original.",
      "Incorreta. A sincronização ocorre entre dispositivos do mesmo usuário (mesma conta Microsoft), não da rede local aberta."
    ],
    "banca": "IBGE Focus",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": true,
    "image": null
  },
  {
    "id": "info_file_management_34",
    "text": "Analise a seguinte situação: Um usuário seleciona um arquivo chamado 'Relatorio.docx' em sua pasta 'Documentos' e pressiona Ctrl + X. Em seguida, ele navega até a pasta 'Backup', mas antes de pressionar Ctrl + V, ele seleciona um arquivo de imagem e pressiona Ctrl + C.\nCom base no comportamento padrão do Windows (sem o uso do painel de histórico Win+V), o que ocorrerá com o arquivo 'Relatorio.docx'?",
    "options": [
      "A) O arquivo será movido para a pasta 'Backup' automaticamente, pois o comando Ctrl + X tem prioridade sobre o Ctrl + C.",
      "B) O arquivo 'Relatorio.docx' será excluído permanentemente, pois a nova operação de cópia interrompeu o processo de transferência.",
      "C) O arquivo 'Relatorio.docx' permanecerá intacto na pasta 'Documentos' e seu ícone deixará de estar esmaecido.",
      "D) O Windows apresentará uma mensagem de erro informando que não é possível realizar duas operações de transferência simultâneas.",
      "E) O arquivo 'Relatorio.docx' será movido para a Área de Trabalho como medida de segurança do sistema operacional."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O Windows não executa a colagem automaticamente sem o comando direto.",
      "Incorreta. O sistema protege o arquivo original; se a operação não é concluída, nada é excluído.",
      "Correta. Na Área de Transferência clássica, um novo item (Ctrl+C) sobrescreve o anterior. Como a colagem do recorte (Ctrl+X) não foi efetuada, o recorte é cancelado e o arquivo original permanece intacto na origem com seu ícone restaurado.",
      "Incorreta. O Windows permite a nova operação, substituindo silenciosamente o conteúdo do clipboard.",
      "Incorreta. Não existe esse comportamento de mover arquivos para a Área de Trabalho."
    ],
    "banca": "IBGE Focus",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": true,
    "image": null
  },
  {
    "id": "info_file_management_35",
    "text": "Sobre as propriedades e o funcionamento técnico da Lixeira no Windows 10, analise as afirmativas a seguir:\nI. É possível configurar tamanhos máximos distintos para a lixeira em cada partição do disco rígido.\nII. Arquivos excluídos através do Prompt de Comando (CMD) são enviados para a lixeira por segurança.\nIII. A Lixeira, embora apresente uma visão unificada na Área de Trabalho, utiliza pastas ocultas denominadas $Recycle.Bin em cada volume.\nEstá correto o que se afirma em:",
    "options": [
      "A) I, apenas.",
      "B) I e II, apenas.",
      "C) I e III, apenas.",
      "D) II e III, apenas.",
      "E) I, II e III."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O item III também está correto.",
      "Incorreta. O item II está incorreto (o CMD exclui arquivos de forma direta e permanente).",
      "Correta. I está correta (partições diferentes podem ter tamanhos de lixeira diferentes) e III está correta ($Recycle.Bin é a pasta física real nos volumes).",
      "Incorreta. O item II está incorreto.",
      "Incorreta. A proposição II está incorreta."
    ],
    "banca": "IBGE Focus",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": true,
    "image": null
  },
  {
    "id": "info_file_management_36",
    "text": "No que tange à gestão de arquivos e segurança de dados no Windows 10, assinale a alternativa que descreve uma situação em que um arquivo, ao ser deletado pelo usuário (sem o uso de Shift), NÃO será enviado para a Lixeira:",
    "options": [
      "A) O arquivo está armazenado em um HD Externo conectado via porta USB.",
      "B) O arquivo possui o atributo de 'Somente Leitura' habilitado em suas propriedades.",
      "C) O arquivo foi excluído de uma pasta compartilhada localizada em um servidor de arquivos na rede local.",
      "D) O arquivo é um atalho (.lnk) para um executável localizado no disco local C:.",
      "E) O arquivo foi movido para a Lixeira de uma partição diferente daquela onde o sistema operacional está instalado."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. HDs externos mantêm sua lixeira gerida normalmente pelo Windows.",
      "Incorreta. O atributo 'Somente Leitura' pode exigir confirmação extra de segurança, mas não impede o envio para a lixeira.",
      "Correta. Arquivos excluídos de pastas compartilhadas em rede são apagados permanentemente de forma direta e não passam por nenhuma lixeira de computador local.",
      "Incorreta. Atalhos são arquivos comuns do sistema e vão para a lixeira normalmente quando excluídos.",
      "Incorreta. O Windows gerencia lixeiras em múltiplas partições locais."
    ],
    "banca": "IBGE Focus",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": true,
    "image": null
  },
  {
    "id": "info_file_management_katia_01",
    "text": "Considere a imagem abaixo, que mostra um menu obtido por meio de um procedimento realizado no explorador de arquivos do Windows 7, em português.\n\nEste menu foi obtido por meio de um clique com o botão:",
    "options": [
      "A) direito do mouse sobre uma pasta em uma unidade de disco.",
      "B) esquerdo do mouse sobre uma unidade não expandida de armazenamento, como um HD ou pen drive.",
      "C) direito do mouse sobre uma unidade não expandida de pen drive.",
      "D) esquerdo do mouse sobre uma pasta ou arquivo de um pen drive.",
      "E) direito do mouse sobre um arquivo em uma unidade de disco."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Se fosse uma pasta em uma unidade de disco local, as opções de formatar ou de reprodução automática não estariam presentes no menu de contexto.",
      "Incorreta. Clicar com o botão esquerdo do mouse apenas selecionaria o item ou abriria o item, mas não abriria o menu de contexto.",
      "Correta. O menu exibe as opções 'Expandir', 'Abrir Reprodução Automática...' e 'Formatar...', características específicas de um menu de contexto aberto ao clicar com o botão direito do mouse sobre uma unidade de armazenamento removível, como um pen drive.",
      "Incorreta. O botão esquerdo não aciona o menu de contexto padrão.",
      "Incorreta. Um arquivo comum não possui as opções de formatar ou abrir reprodução automática."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='280' height='320' viewBox='0 0 280 320'><rect x='1' y='1' width='278' height='318' fill='%23f2f2f2' stroke='%23a0a0a0' stroke-width='1' rx='3' ry='3'/><text x='15' y='22' font-family='Segoe UI, Tahoma, sans-serif' font-size='11' font-weight='bold' fill='%23000000'>Expandir</text><line x1='5' y1='32' x2='275' y2='32' stroke='%23e0e0e0' stroke-width='1'/><text x='15' y='46' font-family='Segoe UI, Tahoma, sans-serif' font-size='11' fill='%23000000'>Abrir Reprodução Automática...</text><text x='15' y='66' font-family='Segoe UI, Tahoma, sans-serif' font-size='11' fill='%23000000'>Verificar com o System Center Endpoint Protection...</text><line x1='5' y1='78' x2='275' y2='78' stroke='%23e0e0e0' stroke-width='1'/><text x='15' y='92' font-family='Segoe UI, Tahoma, sans-serif' font-size='11' fill='%23000000'>Abrir em nova janela</text><text x='15' y='112' font-family='Segoe UI, Tahoma, sans-serif' font-size='11' fill='%23000000'>Compartilhar com</text><path d='M 260,108 L 265,111 L 260,114 Z' fill='%23666666'/><text x='15' y='132' font-family='Segoe UI, Tahoma, sans-serif' font-size='11' fill='%23000000'>Restaurar versões anteriores</text><text x='15' y='152' font-family='Segoe UI, Tahoma, sans-serif' font-size='11' fill='%23000000'>Incluir na biblioteca</text><path d='M 260,148 L 265,151 L 260,154 Z' fill='%23666666'/><text x='15' y='172' font-family='Segoe UI, Tahoma, sans-serif' font-size='11' fill='%23000000'>Formatar...</text><line x1='5' y1='182' x2='275' y2='182' stroke='%23e0e0e0' stroke-width='1'/><text x='15' y='196' font-family='Segoe UI, Tahoma, sans-serif' font-size='11' fill='%23000000'>Copiar</text><line x1='5' y1='206' x2='275' y2='206' stroke='%23e0e0e0' stroke-width='1'/><text x='15' y='220' font-family='Segoe UI, Tahoma, sans-serif' font-size='11' fill='%23000000'>Renomear</text><line x1='5' y1='230' x2='275' y2='230' stroke='%23e0e0e0' stroke-width='1'/><text x='15' y='244' font-family='Segoe UI, Tahoma, sans-serif' font-size='11' fill='%23000000'>Novo</text><path d='M 260,240 L 265,243 L 260,246 Z' fill='%23666666'/><line x1='5' y1='254' x2='275' y2='254' stroke='%23e0e0e0' stroke-width='1'/><text x='15' y='268' font-family='Segoe UI, Tahoma, sans-serif' font-size='11' fill='%23000000'>Propriedades</text></svg>"
  },
  {
    "id": "info_file_management_katia_02",
    "text": "No Windows, é permitido renomear um arquivo que esteja sendo usado por um programa.",
    "options": [
      "A) Certo",
      "B) Errado"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. No Windows, quando um arquivo está aberto ou sendo executado por um programa, o sistema operacional bloqueia o arquivo para edição ou renomeação para evitar conflitos de gravação e inconsistência de dados.",
      "Correta. O Windows impede a renomeação, movimentação ou exclusão de qualquer arquivo que esteja ativamente em uso por algum aplicativo, emitindo um aviso de que 'o arquivo está aberto em outro programa'."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_katia_03",
    "text": "No Windows, a criação de arquivos usando alguns caracteres especiais não é permitida. Um arquivo com o nome de cress*go.pdf, por exemplo, não pode ser criado.",
    "options": [
      "A) Certo",
      "B) Errado"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. O Windows possui nove caracteres proibidos para nomeação de arquivos e pastas: \\ / : * ? \" < > |. O asterisco (*) é um caractere proibido (usado como curinga), de modo que o arquivo 'cress*go.pdf' não pode ser criado.",
      "Incorreta. A afirmação está correta; o caractere asterisco (*) é de fato inválido."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_katia_04",
    "text": "No Explorador de Arquivos do Windows 8, o tamanho de um arquivo, em bytes, pode ser obtido por meio da opção Propriedades, disponível no menu exibido ao se clicar o botão direito do mouse sobre o arquivo.",
    "options": [
      "A) Certo",
      "B) Errado"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Ao clicar com o botão direito do mouse sobre qualquer arquivo e escolher a opção 'Propriedades' (na guia Geral), é possível visualizar as informações completas do arquivo, incluindo seu tamanho exato em bytes e o tamanho ocupado em disco.",
      "Incorreta. A afirmação está correta; as Propriedades mostram o tamanho detalhado do arquivo."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_katia_05",
    "text": "Os arquivos gravados em disco pelo Windows contêm alguns atributos, como, por exemplo, data de criação e tamanho.",
    "options": [
      "A) Certo",
      "B) Errado"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Todo arquivo gravado no Windows possui metadados e atributos associados, como data de criação, data de modificação, tamanho, permissões de segurança e atributos de sistema (somente leitura, oculto, etc.).",
      "Incorreta. A afirmação está correta; a data de criação e o tamanho do arquivo são de fato atributos salvos pelo sistema operacional."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_katia_06",
    "text": "Suponha que na pasta “Downloads” de um computador com sistema operacional Windows 10 há diversos arquivos, que ocupam 2 gigabytes no disco rígido, e que você não irá mais precisar deles. Assinale a alternativa que descreve uma forma correta de remover todos esses arquivos permanentemente, liberando espaço no disco rígido do computador.",
    "options": [
      "A) Abrir o “Explorador de arquivos”, clicar com o botão da direita do mouse na pasta “Downloads” e clicar na opção “Enviar para > Lixeira”.",
      "B) Abrir a pasta “Downloads” no “Explorador de arquivos”, pressionar as teclas Ctrl + A para selecionar todos os arquivos e pressionar as teclas Shift + Delete para removê-los.",
      "C) Abrir a pasta “Downloads” no “Explorador de arquivos”, clicar no botão “Selecionar tudo” e, em seguida, clicar no botão “Excluir”.",
      "D) Abrir a pasta “Downloads” no “Explorador de arquivos”, pressionar as teclas Shift + A para selecionar todos os arquivos e pressionar Ctrl + Delete para removê-los.",
      "E) Abrir o “Explorador de arquivos”, clicar com o botão da direita do mouse na pasta “Downloads” e clicar na opção “Esvaziar pasta”."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Não existe a opção 'Enviar para > Lixeira' no menu de contexto da pasta Downloads. Além disso, enviar para a Lixeira não apaga permanentemente o arquivo de imediato (ele continua ocupando espaço em disco).",
      "Correta. Ctrl + A é o atalho padrão do Windows Explorer para selecionar todos os arquivos da pasta aberta. O atalho Shift + Delete executa a exclusão permanente dos arquivos selecionados, ignorando a Lixeira e liberando espaço de armazenamento no disco rígido imediatamente.",
      "Incorreta. Clicar no botão 'Excluir' padrão envia os arquivos para a Lixeira, mantendo-os ocupando espaço em disco até que ela seja esvaziada.",
      "Incorreta. O atalho de seleção de todos os arquivos é Ctrl+A (e não Shift+A), e a exclusão definitiva é feita por Shift+Delete (e não Ctrl+Delete).",
      "Incorreta. Não existe a opção 'Esvaziar pasta' padrão ao clicar com o botão direito na pasta de Downloads."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_katia_07",
    "text": "Biblioteca de Documentos a seguir foi extraída do Windows Explorer do MS-Windows 7, em sua configuração padrão.\n\nConsiderando que os ícones não foram personalizados, ou seja, mantêm a sua imagem padrão, aquele que se refere a um atalho para um documento de texto é o:",
    "options": [
      "A) Arquivo 1.",
      "B) Arquivo 2.",
      "C) Arquivo 3.",
      "D) Arquivo 4.",
      "E) Arquivo 5."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. O 'Arquivo 1' exibe o ícone do Microsoft Word (editor de texto) com uma pequena seta azul curva sobreposta no canto inferior esquerdo, indicando que se trata de um atalho (.lnk).",
      "Incorreta. O 'Arquivo 2' é um arquivo do Excel (planilha), não um documento de texto, e não possui o símbolo de atalho.",
      "Incorreta. O 'Arquivo 3' é um arquivo comum do Word (documento de texto original), e não um atalho.",
      "Incorreta. O 'Arquivo 4' é um arquivo com o ícone do PowerPoint, que não se refere a um documento de texto tradicional nem é um atalho.",
      "Incorreta. O 'Arquivo 5' é um atalho (tem a seta), mas para um arquivo do Microsoft Excel (planilha), e não para um documento de texto."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='380' height='200' viewBox='0 0 380 200'><rect x='1' y='1' width='378' height='198' fill='%23fafafa' stroke='%23cccccc' stroke-width='1' rx='4' ry='4'/><text x='10' y='20' font-family='Segoe UI, Tahoma, sans-serif' font-size='12' font-weight='bold' fill='%23333333'>Biblioteca Documentos</text><text x='10' y='36' font-family='Segoe UI, Tahoma, sans-serif' font-size='10' fill='%23666666'>Inclui: 2 locais</text><text x='270' y='24' font-family='Segoe UI, Tahoma, sans-serif' font-size='10' fill='%23333333'>Organizar por: Pasta ▾</text><line x1='10' y1='45' x2='370' y2='45' stroke='%23dddddd' stroke-width='1'/><g transform='translate(15, 60)'><path d='M 5,10 L 20,10 L 25,15 L 50,15 L 50,45 L 5,45 Z' fill='%23e0c068' stroke='%23b09030' stroke-width='1'/><text x='27' y='55' text-anchor='middle' font-family='Segoe UI' font-size='8' fill='%23000000'>Outlook</text></g><g transform='translate(85, 60)'><path d='M 5,10 L 20,10 L 25,15 L 50,15 L 50,45 L 5,45 Z' fill='%23e0c068' stroke='%23b09030' stroke-width='1'/><text x='27' y='55' text-anchor='middle' font-family='Segoe UI' font-size='8' fill='%23000000'>Fotos</text></g><g transform='translate(155, 60)'><path d='M 5,10 L 20,10 L 25,15 L 50,15 L 50,45 L 5,45 Z' fill='%23e0c068' stroke='%23b09030' stroke-width='1'/><text x='27' y='55' text-anchor='middle' font-family='Segoe UI' font-size='8' fill='%23000000'>Geral</text></g><g transform='translate(225, 60)'><path d='M 5,10 L 20,10 L 25,15 L 50,15 L 50,45 L 5,45 Z' fill='%23e0c068' stroke='%23b09030' stroke-width='1'/><text x='27' y='55' text-anchor='middle' font-family='Segoe UI' font-size='8' fill='%23000000'>Outros</text></g><g transform='translate(295, 60)'><rect x='10' y='10' width='35' height='40' fill='%23fcfcfc' stroke='%23999999' stroke-width='1' rx='2' ry='2'/><rect x='15' y='15' width='25' height='20' fill='%231f7246' rx='1' ry='2'/><text x='27' y='28' font-family='Segoe UI' font-weight='bold' font-size='12' fill='%23ffffff' text-anchor='middle'>X</text><rect x='10' y='38' width='12' height='12' fill='%23ffffff' stroke='%23000000' stroke-width='1' rx='1' ry='1'/><path d='M 12,47 L 18,41 M 15,41 L 18,41 L 18,44' stroke='%230066cc' stroke-width='1.5' fill='none'/><text x='27' y='62' text-anchor='middle' font-family='Segoe UI' font-size='8' fill='%23000000'>Arquivo 5</text></g><g transform='translate(15, 125)'><rect x='10' y='10' width='35' height='40' fill='%23fcfcfc' stroke='%23999999' stroke-width='1' rx='2' ry='2'/><rect x='15' y='15' width='25' height='20' fill='%232b579a' rx='1' ry='2'/><text x='27' y='28' font-family='Segoe UI' font-weight='bold' font-size='12' fill='%23ffffff' text-anchor='middle'>W</text><rect x='10' y='38' width='12' height='12' fill='%23ffffff' stroke='%23000000' stroke-width='1' rx='1' ry='1'/><path d='M 12,47 L 18,41 M 15,41 L 18,41 L 18,44' stroke='%230066cc' stroke-width='1.5' fill='none'/><text x='27' y='62' text-anchor='middle' font-family='Segoe UI' font-size='8' fill='%23000000'>Arquivo 1</text></g><g transform='translate(85, 125)'><rect x='10' y='10' width='35' height='40' fill='%23fcfcfc' stroke='%23999999' stroke-width='1' rx='2' ry='2'/><rect x='15' y='15' width='25' height='20' fill='%231f7246' rx='1' ry='2'/><text x='27' y='28' font-family='Segoe UI' font-weight='bold' font-size='12' fill='%23ffffff' text-anchor='middle'>X</text><text x='27' y='62' text-anchor='middle' font-family='Segoe UI' font-size='8' fill='%23000000'>Arquivo 2</text></g><g transform='translate(155, 125)'><rect x='10' y='10' width='35' height='40' fill='%23fcfcfc' stroke='%23999999' stroke-width='1' rx='2' ry='2'/><rect x='15' y='15' width='25' height='20' fill='%232b579a' rx='1' ry='2'/><text x='27' y='28' font-family='Segoe UI' font-weight='bold' font-size='12' fill='%23ffffff' text-anchor='middle'>W</text><text x='27' y='62' text-anchor='middle' font-family='Segoe UI' font-size='8' fill='%23000000'>Arquivo 3</text></g><g transform='translate(225, 125)'><rect x='10' y='10' width='35' height='40' fill='%23fcfcfc' stroke='%23999999' stroke-width='1' rx='2' ry='2'/><rect x='15' y='15' width='25' height='20' fill='%23d24726' rx='1' ry='2'/><text x='27' y='28' font-family='Segoe UI' font-weight='bold' font-size='12' fill='%23ffffff' text-anchor='middle'>P</text><text x='27' y='62' text-anchor='middle' font-family='Segoe UI' font-size='8' fill='%23000000'>Arquivo 4</text></g></svg>"
  },
  {
    "id": "info_file_management_katia_08",
    "text": "No Explorador de arquivos do Windows 10, em português, Ana clicou com o botão direito do mouse sobre a identificação de unidade de pen drive conectada no computador e selecionou as opções Novo > Pasta, para criar uma nova pasta onde pretende guardar seus documentos. O nome desta pasta poderá ser:",
    "options": [
      "A) 08-12-2018",
      "B) 08/12/2018",
      "C) Dia8_12:20",
      "D) <08_12_2018>",
      "E) 08\\12\\2018"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. O nome '08-12-2018' é composto apenas por números e o caractere hífen (-), que não faz parte de nenhum dos caracteres proibidos no Windows, sendo perfeitamente válido.",
      "Incorreta. A barra (/) é um caractere proibido para nomeação de pastas e arquivos no Windows, pois é usada como separador de diretórios.",
      "Incorreta. O caractere dois-pontos (:) é proibido no Windows, pois é reservado para indicar unidades de disco (ex: C:).",
      "Incorreta. Os caracteres menor que (<) e maior que (>) são proibidos no Windows, pois são usados para operações de redirecionamento no console.",
      "Incorreta. A barra invertida (\\) é proibida, sendo reservada pelo sistema operacional para delimitar caminhos de diretórios."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_katia_09",
    "text": "Maria estava ensinando a Nina, a nova colega de trabalho, o procedimento adotado pelo departamento para tratar arquivos e pastas no Explorador de Arquivos do Windows 10, versão em português. Maria explicou a Nina que o ícone apresentado equivale à ação de:",
    "options": [
      "A) colar itens em uma pasta.",
      "B) recortar arquivos",
      "C) colar apenas arquivos.",
      "D) copiar os itens selecionados para a área de transferência.",
      "E) transferir itens para uma pasta diferente."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. O ícone de colar é representado por uma prancheta com um documento de texto.",
      "Incorreta. O ícone de recortar é representado por uma tesoura.",
      "Incorreta. Não existe ícone específico para colar apenas arquivos no menu padrão.",
      "Correta. O ícone com duas folhas de papel sobrepostas representa a ação de COPIAR os itens selecionados para a área de transferência (equivalente ao atalho de teclado Ctrl + C).",
      "Incorreta. Transferir itens de forma direta seria mover/recortar (Ctrl+X) ou arrastar."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect x='1' y='1' width='98' height='98' fill='%23fafafa' stroke='%23cccccc' stroke-width='1' rx='4' ry='4'/><g transform='translate(15, 15)'><rect x='20' y='10' width='45' height='55' fill='white' stroke='%23555555' stroke-width='2' rx='3' ry='3'/><line x1='28' y1='22' x2='57' y2='22' stroke='%23888888' stroke-width='2'/><line x1='28' y1='32' x2='57' y2='32' stroke='%23888888' stroke-width='2'/><line x1='28' y1='42' x2='47' y2='42' stroke='%23888888' stroke-width='2'/><rect x='10' y='22' width='45' height='55' fill='white' stroke='%23333333' stroke-width='2' rx='3' ry='3'/><line x1='18' y1='34' x2='47' y2='34' stroke='%23666666' stroke-width='2'/><line x1='18' y1='44' x2='47' y2='44' stroke='%23666666' stroke-width='2'/><line x1='18' y1='54' x2='37' y2='54' stroke='%23666666' stroke-width='2'/></g></svg>"
  },
  {
    "id": "info_file_management_katia_10",
    "text": "Em uma pasta do Windows há três arquivos, assim nomeados: notafiscal.doc, pedido.doc, venda.doc. Um usuário precisa renomear o arquivo notafiscal.doc. A forma de realizar essa tarefa é:",
    "options": [
      "A) pressionar F1 e atribuir o nome recibo.doc.",
      "B) pressionar F2 e atribuir o nome recibo.doc.",
      "C) pressionar F2 e atribuir o nome venda.doc.",
      "D) pressionar F1 e atribuir o nome venda.doc."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A tecla F1 é usada universalmente para abrir a Ajuda do sistema operacional ou do programa ativo.",
      "Correta. A tecla F2 é o atalho universal no Windows para renomear um arquivo ou pasta selecionado. Pressioná-la sobre 'notafiscal.doc' e digitar 'recibo.doc' altera o nome do arquivo com sucesso.",
      "Incorreta. Não se pode renomear para 'venda.doc' pois já existe um arquivo com esse mesmo nome e extensão na mesma pasta (conflito de nomenclatura).",
      "Incorreta. F1 abre a ajuda e 'venda.doc' causaria um conflito de nome na pasta."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_katia_11",
    "text": "Windows Explorer é uma ferramenta do Windows para:",
    "options": [
      "A) gerenciar arquivos.",
      "B) explorar sites na internet.",
      "C) explorar o sistema de ajuda e suporte.",
      "D) configurar os recursos de janela."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. O Windows Explorer (ou Explorador de Arquivos) é o gerenciador de arquivos e pastas padrão do sistema operacional Windows, permitindo visualizar, criar, excluir, copiar, mover e organizar documentos e diretórios.",
      "Incorreta. Para explorar sites na internet, utilizam-se navegadores (browsers) como Edge, Chrome ou Firefox.",
      "Incorreta. O suporte do Windows é acessado por canais ou aplicativos específicos de ajuda.",
      "Incorreta. A configuração de janelas e interface do sistema é feita em Configurações ou Painel de Controle."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_katia_12",
    "text": "É possível renomear uma pasta, mesmo que possua subpastas e diversos arquivos.",
    "options": [
      "A) Certo",
      "B) Errado"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. O Windows permite renomear pastas que contenham arquivos ou outras subpastas em seu interior, desde que nenhum arquivo de dentro dela esteja aberto ou sendo utilizado por algum programa no momento.",
      "Incorreta. A afirmação está correta; o conteúdo interno não impede a renomeação da pasta pai."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_katia_13",
    "text": "Em uma empresa, com rede interna ambiente Windows, os modelos de documentos oficiais estão centralizados na pasta Modelos compartilhada em modo Leitura aos usuários do domínio, no servidor de arquivos SERVDOC. Qual é o endereço para acessar o modelo oficio.dotx, no Windows Explorer, num computador com Windows 7?",
    "options": [
      "A) SERVDOC/modelos/oficio.dotx",
      "B) \\\\\\\\SERVDOC\\\\Modelos\\\\oficio.dotx",
      "C) SERVDOC.Modelos@oficio.dotx",
      "D) oficio.dotx@SERVDOC",
      "E) oficio.dotx@Modelos"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Barras normais (/) não são usadas para caminhos UNC locais de rede no Windows.",
      "Correta. O Windows utiliza o padrão UNC (Universal Naming Convention) para caminhos de rede local, que começam obrigatoriamente por duas barras invertidas (\\\\\\\\), seguidas do nome do servidor, uma barra invertida (\\\\) e a pasta compartilhada: \\\\\\\\SERVDOC\\\\Modelos\\\\oficio.dotx.",
      "Incorreta. O símbolo '@' não é usado para caminhos de compartilhamento de arquivos em rede local.",
      "Incorreta. Sintaxe inválida no Windows Explorer para acessar rede.",
      "Incorreta. Sintaxe inválida de acesso a arquivos de rede local."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_katia_14",
    "text": "Considere a estrutura de pastas e subpastas a seguir:\n\nC:\\\\Downloads\nC:\\\\Downloads\\\\Aulas\nC:\\\\Downloads\\\\Projetos\nC:\\\\Downloads\\\\Projetos\\\\Casa Nova\n\nCom relação à estrutura das pastas e subpastas apresentada, e considerando que todas as pastas estão configuradas para permitir a escrita e a leitura para todos os usuários, bem como guardar arquivos, assinale a alternativa correta.",
    "options": [
      "A) O arquivo de imagem Casa Nova está dentro da pasta Projetos.",
      "B) A pasta Downloads só poderá ser apagada se as respectivas subpastas forem anteriormente excluídas.",
      "C) A exclusão de Projetos excluirá Casa Nova.",
      "D) O arquivo Projetos pode ser recortado e colado na pasta Aulas.",
      "E) Aulas e Projetos são arquivos com a extensão oculta."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. 'Casa Nova' é descrita no caminho como uma pasta (subpasta de Projetos), e não um arquivo de imagem.",
      "Incorreta. A pasta 'Downloads' pode ser excluída diretamente. O Windows excluirá recursivamente toda a sua estrutura de subpastas e arquivos de uma vez só.",
      "Correta. Por ser uma estrutura de diretórios hierárquica (em árvore), as subpastas e arquivos contidos em um diretório estão vinculados a ele. A exclusão de uma pasta pai ('Projetos') exclui automaticamente tudo o que estiver dentro dela, incluindo a subpasta 'Casa Nova'.",
      "Incorreta. 'Projetos' é uma pasta, não um arquivo. Embora pastas também possam ser recortadas e coladas, a alternativa se refere incorretamente a ela como 'o arquivo Projetos'.",
      "Incorreta. 'Aulas' e 'Projetos' são pastas (diretórios) e não arquivos com extensões."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_katia_15",
    "text": "A opção Criar atalho, disponível ao se clicar o botão direito do mouse sobre um arquivo no Explorador de Arquivos do Windows 8.1, tem a função de criar um atalho para este arquivo e enviá-lo automaticamente para a Área de Trabalho.",
    "options": [
      "A) Certo",
      "B) Errado"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A opção 'Criar atalho' cria o atalho no mesmo diretório em que o arquivo original está localizado, e não na Área de Trabalho.",
      "Correta. A opção 'Criar atalho' cria o atalho exatamente na mesma pasta do arquivo original. Para enviar diretamente para a Área de Trabalho, o usuário deve selecionar a opção 'Enviar para > Área de trabalho (criar atalho)'."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_katia_16",
    "text": "Qual a estrutura usada para organizar arquivos e demais informações no meio digital, no ambiente dos sistemas operacionais?",
    "options": [
      "A) Diretórios.",
      "B) Assessórios.",
      "C) Painel de Controle.",
      "D) Propriedades do Sistema."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Diretórios (ou pastas) são as estruturas lógicas organizacionais fundamentais que os sistemas operacionais utilizam para agrupar e organizar arquivos em uma estrutura hierárquica ou em árvore.",
      "Incorreta. Acessórios são utilitários e softwares que vêm junto com o sistema operacional.",
      "Incorreta. O Painel de Controle é usado para definir configurações gerais do sistema.",
      "Incorreta. Propriedades do Sistema mostra dados de hardware, nome do computador e configurações de proteção."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_katia_17",
    "text": "Julgue o item seguinte quanto aos conceitos básicos de redes de computadores, aos conceitos de organização e de gerenciamento de arquivos e aos procedimentos de segurança da informação.\n\nOs arquivos ecoturismo.docx e ecoturismo.pdf não podem fazer parte de uma mesma pasta, pois apresentam nomes idênticos.",
    "options": [
      "A) Certo",
      "B) Errado"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Embora tenham o mesmo nome principal ('ecoturismo'), as extensões são diferentes (.docx e .pdf), tornando-os arquivos distintos para o sistema operacional.",
      "Correta. O Windows diferencia arquivos na mesma pasta combinando seu Nome e sua Extensão. Portanto, é perfeitamente permitido que arquivos com o mesmo nome existam na mesma pasta, contanto que tenham extensões diferentes."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_katia_18",
    "text": "No sistema Windows, a nomeação de arquivos e pastas obedece a algumas regras para tornar um nome válido. Nesse sentido, os nomes de:",
    "options": [
      "A) arquivos limitam extensões de até dois caracteres.",
      "B) pastas podem conter letras minúsculas e números.",
      "C) pastas podem ter extensões, mas seu tamanho é limitado em dois caracteres.",
      "D) arquivos podem conter qualquer caractere especial disponível a partir do teclado."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. As extensões de arquivos podem ter comprimentos variáveis e comumente possuem de três a quatro caracteres (ex: .docx, .html).",
      "Correta. O nome de uma pasta ou arquivo pode conter uma combinação livre de letras maiúsculas, minúsculas, números e diversos caracteres especiais permitidos (como hífens, sublinhados, etc.).",
      "Incorreta. Pastas podem até simular extensões se o usuário puser um ponto no nome, mas não há limite de dois caracteres.",
      "Incorreta. Conforme a regra de caracteres proibidos, o Windows restringe nove caracteres específicos (\\\\ / : * ? \\\" < > |) para nomeação."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_katia_19",
    "text": "Disponível na maioria dos programas do Windows, é uma área de armazenamento temporário de informações (arquivos ou pastas) que você copiou ou moveu de um lugar e planeja usar em algum outro lugar. Tal área recebe o nome de:",
    "options": [
      "A) Painel de Controle.",
      "B) Área de Transferência.",
      "C) Acesso Remoto.",
      "D) Facilidades de Acesso.",
      "E) Área de Restauração."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O Painel de Controle serve para configurar recursos do sistema operacional.",
      "Correta. A Área de Transferência (Clipboard) é o recurso do sistema operacional Windows que armazena temporariamente na memória RAM textos, imagens, arquivos ou pastas copiados (Ctrl+C) ou recortados (Ctrl+X) para posterior colagem (Ctrl+V).",
      "Incorreta. O Acesso Remoto permite conectar-se a computadores distantes.",
      "Incorreta. Facilidades de Acesso são ferramentas de acessibilidade para usuários com necessidades especiais.",
      "Incorreta. A Área de Restauração é usada para restaurar o sistema a um estado estável anterior."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_file_management_katia_20",
    "text": "Obs.: considere que o usuário possui todas as permissões necessárias para completar a tarefa.\n\nUtilizando o Windows Explorer, um usuário realiza a operação de arrastar, com o botão esquerdo do mouse, um arquivo que está dentro de uma pasta do disco local C: para outra pasta do disco local D:\\\n\nAssinale a opção que indica o resultado dessa operação.",
    "options": [
      "A) Nada irá acontecer.",
      "B) O arquivo será copiado.",
      "C) O arquivo será movido.",
      "D) O Windows irá perguntar ao usuário o que ele deseja que seja feito.",
      "E) Um atalho será criado no disco local D."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A operação de arrastar e soltar é válida e executará uma ação.",
      "Correta. No Windows, a regra padrão para arrastar e soltar arquivos usando o mouse com o botão esquerdo é: se o destino estiver em uma UNIDADE DIFERENTE (de C: para D:), o arquivo será COPIADO.",
      "Incorreta. Mover seria a ação padrão se a movimentação fosse na MESMA unidade (de C: para C:).",
      "Incorreta. O Windows só pergunta se arrastarmos com o botão direito do mouse.",
      "Incorreta. Um atalho só seria criado se o usuário arrastasse segurando a tecla ALT ou se arrastasse um executável específico."
    ],
    "banca": "Focus Concursos",
    "ano": 2024,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false,
    "image": null
  },
  {
    "id": "info_sim_01",
    "text": "No sistema operacional Windows 10, a organização de arquivos e pastas segue uma estrutura hierárquica. Ao tentar renomear um arquivo no Explorador de Arquivos, o usuário deve observar certas restrições de caracteres. Assinale a alternativa que apresenta um nome de arquivo VÁLIDO, ou seja, que não contém caracteres proibidos pelo sistema.",
    "options": [
      "A) relatorio:final.docx",
      "B) projeto/versao1.pdf",
      "C) duvidas?frequentes.txt",
      "D) lista_de_compras(2023).xlsx",
      "E) vendas*mensais.csv"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. O caractere 'dois pontos' (:) é proibido em nomes de arquivos no Windows, pois é reservado para identificação de unidades e fluxos de dados alternativos.",
      "Incorreta. A 'barra' (/) é um caractere reservado para a sintaxe de caminhos e não pode ser usada no nome do arquivo.",
      "Incorreta. O ponto de 'interrogação' (?) é um caractere proibido, utilizado como curinga em buscas.",
      "Correta. Não utiliza nenhum caractere restrito. Parênteses, sublinhados e pontos são permitidos.",
      "Incorreta. O 'asterisco' (*) é um caractere proibido, comumente usado como caractere curinga em buscas."
    ],
    "generalExplanation": "O Windows 10 permite o uso de parênteses, sublinhados (underscore) e pontos em nomes de arquivos. O nome 'lista_de_compras(2023).xlsx' não contém nenhum dos caracteres proibidos pelo mnemônico 'BASIADO' (Barra, Asterisco, Sinal de maior, Interrogação, Aspas, Dois pontos, sinal de menor).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_02",
    "text": "Sobre a sensibilidade a maiúsculas e minúsculas (case sensitivity) na nomenclatura de arquivos e pastas no Windows 10, assinale a afirmativa correta.",
    "options": [
      "A) O Windows diferencia maiúsculas de minúsculas, permitindo que 'Documento.txt' e 'documento.txt' coexistam na mesma pasta.",
      "B) O Windows não diferencia maiúsculas de minúsculas, tratando 'PROVA.PDF' e 'prova.pdf' como o mesmo arquivo.",
      "C) A diferenciação entre maiúsculas e minúsculas depende apenas da extensão do arquivo (ex: .EXE diferencia, .TXT não).",
      "D) O Windows 10 passou a ser case sensitive por padrão para se equiparar aos sistemas baseados em Linux.",
      "E) Apenas a primeira letra do nome do arquivo é sensível ao caso, enquanto as demais são ignoradas pelo sistema."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Esta é uma característica típica do Linux, não do Windows. No Windows, dois arquivos com nomes idênticos variando apenas o caso não podem coexistir na mesma pasta.",
      "Correta. O sistema interpreta ambos como o mesmo nome, impedindo a criação de duplicatas com apenas essa diferença.",
      "Incorreta. A regra de insensibilidade ao caso aplica-se a todo o nome e extensão, independentemente do tipo de arquivo.",
      "Incorreta. Embora existam subsistemas (como o WSL), o comportamento padrão do Windows permanece insensível ao caso.",
      "Incorreta. Nenhuma parte do nome é sensível ao caso para fins de distinção de arquivos no mesmo diretório."
    ],
    "generalExplanation": "Diferente de sistemas Unix/Linux, o Windows (em seus sistemas de arquivos padrão como NTFS e FAT32) é 'case-insensitive', o que significa que ele não distingue maiúsculas de minúsculas para fins de nomeação no mesmo diretório.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_03",
    "text": "Ao organizar arquivos no Explorador de Arquivos do Windows 11, um usuário tenta renomear um documento técnico. De acordo com as regras de nomenclatura do sistema operacional, qual dos seguintes caracteres pode ser utilizado validamente no nome de um arquivo?",
    "options": [
      "A) Asterisco (*)",
      "B) Sinal de maior (>)",
      "C) Underline (_)",
      "D) Aspas duplas (\")",
      "E) Barra invertida (\\)"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O asterisco (*) é um caractere reservado e proibido para nomes de arquivos no Windows, usado como curinga.",
      "Incorreta. O sinal de maior (>) é um caractere proibido, utilizado pelo sistema para redirecionamento de saída em linha de comando.",
      "Correta. O underline (_) é um caractere permitido e não consta na lista de restrições.",
      "Incorreta. As aspas duplas (\") são caracteres proibidos na nomenclatura de arquivos e pastas.",
      "Incorreta. A barra invertida (\\) é utilizada para indicar caminhos de diretórios e, por isso, é proibida em nomes de arquivos."
    ],
    "generalExplanation": "O caractere underline (ou sublinhado) não faz parte da lista de caracteres proibidos pelo Windows, sendo amplamente utilizado para separar palavras em nomes de arquivos. Os caracteres proibidos são: \\ / : * ? \" < > |",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_04",
    "text": "No Windows 11, um usuário seleciona um arquivo e deseja alterar seu nome rapidamente utilizando apenas o teclado. Qual tecla de atalho deve ser pressionada para abrir a caixa de edição de nome do item selecionado?",
    "options": [
      "A) F1",
      "B) F2",
      "C) F5",
      "D) F10",
      "E) F12"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A tecla F1 é geralmente utilizada para abrir a Ajuda do sistema ou do aplicativo ativo.",
      "Correta. A tecla F2 aciona a edição do nome do arquivo ou pasta selecionada.",
      "Incorreta. A tecla F5 é utilizada para atualizar (refresh) o conteúdo da janela ativa.",
      "Incorreta. A tecla F10 é frequentemente usada para ativar a barra de menus do programa em execução.",
      "Incorreta. A tecla F12 não possui uma função padrão de manipulação de arquivos no Explorador de Arquivos, sendo comum para 'Salvar Como' em pacotes Office."
    ],
    "generalExplanation": "A tecla F2 é o atalho padrão universal no Windows para a função de renomear o item selecionado.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_05",
    "text": "No sistema operacional Windows 10, em sua configuração padrão e idioma português, um usuário deseja renomear um arquivo selecionado no Explorador de Arquivos utilizando apenas o teclado. Para acionar o modo de edição do nome do arquivo, o atalho de teclado correto é:",
    "options": [
      "A) F1",
      "B) F2",
      "C) F5",
      "D) Ctrl + R",
      "E) Alt + Enter"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. F1 é geralmente utilizado para abrir a Ajuda do sistema ou do aplicativo.",
      "Correta. F2 permite renomear o item selecionado.",
      "Incorreta. F5 é utilizado para atualizar (refresh) a janela ativa.",
      "Incorreta. Ctrl+R é comum em navegadores para atualizar a página, mas não renomeia arquivos no Windows.",
      "Incorreta. Alt+Enter abre as Propriedades do item selecionado."
    ],
    "generalExplanation": "A tecla de função F2 é o atalho padrão universal no Windows para renomear o item (arquivo ou pasta) que está selecionado no momento.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_06",
    "text": "Ao gerenciar arquivos no Explorador de Arquivos do Windows 10, um técnico precisa selecionar cinco arquivos específicos que não estão dispostos de forma sequencial (estão alternados na lista). Para realizar essa seleção de itens intercalados, o técnico deve manter pressionada a tecla:",
    "options": [
      "A) Shift",
      "B) Alt",
      "C) Tab",
      "D) Ctrl",
      "E) Esc"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. O Shift é utilizado para seleções contínuas (em bloco), do primeiro ao último clique.",
      "Incorreta. A tecla Alt é usada para menus e atalhos de sistema, não para seleção múltipla de arquivos.",
      "Incorreta. O Tab é usado para navegar entre elementos da interface.",
      "Correta. O Ctrl permite a seleção de itens não adjacentes.",
      "Incorreta. O Esc é usado para cancelar operações ou fechar caixas de diálogo."
    ],
    "generalExplanation": "A tecla CTRL é utilizada para seleções alternadas ou pontuais, permitindo que o usuário escolha itens específicos sem selecionar os que estão entre eles.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_07",
    "text": "No sistema operacional Windows, a Área de Transferência (Clipboard) desempenha um papel fundamental na manipulação de dados. Sobre esse recurso, assinale a alternativa que descreve corretamente sua natureza técnica.",
    "options": [
      "A) Trata-se de um espaço físico no disco rígido (HD) destinado ao backup automático de arquivos deletados.",
      "B) É um espaço temporário na memória RAM destinado a armazenar informações movidas ou copiadas.",
      "C) Consiste em uma pasta oculta no diretório do sistema que armazena permanentemente todos os textos digitados.",
      "D) É um serviço de nuvem obrigatório que exige conexão com a internet para funcionar em qualquer versão do Windows.",
      "E) Representa um hardware específico instalado na placa-mãe para gerenciar o comando de copiar e colar."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A Área de Transferência não utiliza o disco rígido para armazenamento padrão e não se confunde com a Lixeira ou sistemas de backup.",
      "Correta. Esta alternativa define precisamente a natureza técnica do Clipboard como armazenamento temporário na RAM.",
      "Incorreta. O armazenamento não é permanente e a finalidade não é o log de digitação, mas sim o suporte às funções de edição.",
      "Incorreta. Embora versões modernas permitam sincronização em nuvem, a Área de Transferência básica é local e não exige internet.",
      "Incorreta. O Clipboard é um recurso lógico do sistema operacional, não um componente físico de hardware."
    ],
    "generalExplanation": "A Área de Transferência é, por definição, um recurso de software que utiliza a memória RAM (volátil e temporária) para manter dados que o usuário deseja mover ou duplicar entre diferentes locais ou aplicativos.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_08",
    "text": "Um usuário está editando um documento de texto e, acidentalmente, apaga um parágrafo inteiro. Para reverter essa ação de forma imediata utilizando um atalho de teclado padrão do Windows, ele deve pressionar:",
    "options": [
      "A) Ctrl + C",
      "B) Ctrl + V",
      "C) Ctrl + X",
      "D) Ctrl + Z",
      "E) Ctrl + A"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Ctrl+C é utilizado para copiar o conteúdo selecionado.",
      "Incorreta. Ctrl+V é utilizado para colar o conteúdo que está na área de transferência.",
      "Incorreta. Ctrl+X é utilizado para recortar (remover da origem para mover) o conteúdo.",
      "Correta. O atalho Ctrl+Z desfaz a última ação, sendo a solução para o erro acidental descrito.",
      "Incorreta. Ctrl+A é utilizado para selecionar todo o conteúdo da janela ou campo ativo."
    ],
    "generalExplanation": "O comando Ctrl+Z é o atalho universal no Windows e em diversos aplicativos para a função 'Desfazer' (Undo), permitindo reverter a última alteração realizada.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_09",
    "text": "No sistema operacional Windows 10, um usuário deseja excluir um arquivo de forma que ele não seja enviado para a Lixeira, sendo removido permanentemente do sistema de arquivos de forma imediata. Para realizar essa operação por meio de um atalho de teclado, o usuário deve selecionar o arquivo e pressionar simultaneamente as teclas:",
    "options": [
      "A) Ctrl + Delete",
      "B) Alt + Delete",
      "C) Shift + Delete",
      "D) Ctrl + Shift + Esc",
      "E) Alt + F4"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Ctrl+Delete não possui função nativa de exclusão permanente no Windows Explorer.",
      "Incorreta. Alt+Delete não é um comando padrão para exclusão de arquivos.",
      "Correta. Shift+Delete realiza a exclusão direta sem passar pela lixeira.",
      "Incorreta. Este atalho abre o Gerenciador de Tarefas.",
      "Incorreta. Este atalho é utilizado para fechar a janela ativa ou o programa em execução."
    ],
    "generalExplanation": "A combinação Shift+Delete é o atalho padrão no Windows para a exclusão permanente de itens, ignorando o armazenamento temporário na Lixeira.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_10",
    "text": "Ao utilizar a funcionalidade de 'Restaurar' em um arquivo que se encontra na Lixeira do Windows 10, o sistema operacional executará a seguinte ação:",
    "options": [
      "A) Moverá o arquivo para a pasta 'Documentos' do usuário logado.",
      "B) Enviará o arquivo para a Área de Trabalho (Desktop) para fácil acesso.",
      "C) Criará uma cópia do arquivo na pasta de origem e manterá o original na lixeira.",
      "D) Devolverá o arquivo exatamente para o local original onde ele estava antes da exclusão.",
      "E) Solicitará ao usuário que escolha um novo diretório para salvar o arquivo recuperado."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. A restauração não é padronizada para a pasta Documentos, mas sim para o local de origem.",
      "Incorreta. A Área de Trabalho só será o destino se o arquivo tiver sido excluído de lá.",
      "Incorreta. O arquivo é movido da lixeira para a origem, não copiado.",
      "Correta. O Windows rastreia o metadado do local original para permitir a restauração precisa.",
      "Incorreta. O Windows não solicita o local; ele usa o caminho original automaticamente."
    ],
    "generalExplanation": "A função 'Restaurar' tem como comportamento padrão devolver o item ao seu caminho de diretório original. O Windows rastreia o metadado do local original para permitir a restauração precisa.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_11",
    "text": "No contexto da manipulação de arquivos no Windows 10, um 'Caminho Absoluto' (Absolute Path) é definido como:",
    "options": [
      "A) O endereço de um arquivo que leva em conta apenas a pasta onde o usuário está posicionado no momento.",
      "B) Um atalho criado na Área de Trabalho que aponta para um arquivo armazenado em uma unidade de rede.",
      "C) A localização completa de um arquivo ou pasta, iniciando obrigatoriamente a partir da unidade raiz (ex: C:\\).",
      "D) O nome do arquivo seguido apenas pela sua extensão, sem menção às pastas superiores.",
      "E) Uma representação virtual de arquivos que pertencem a diferentes pastas, como ocorre nas Bibliotecas."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Esta é a definição de caminho relativo, que se baseia no diretório atual do usuário.",
      "Incorreta. Um atalho é um arquivo do tipo .lnk, não um conceito de caminho de diretório.",
      "Correta. O caminho absoluto é independente do diretório de trabalho atual do usuário e sempre inicia na raiz.",
      "Incorreta. Isso descreve apenas o nome do objeto, não o seu caminho completo.",
      "Incorreta. Isso descreve o conceito de 'Biblioteca', que é um contêiner virtual."
    ],
    "generalExplanation": "O caminho absoluto fornece a rota completa desde o topo da hierarquia (a raiz, representada pela letra da unidade) até o arquivo ou pasta final. Ele é independente do diretório de trabalho atual do usuário.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_12",
    "text": "As 'Bibliotecas' do Windows 10 são recursos que permitem ao usuário gerenciar arquivos de forma centralizada. Sobre o funcionamento e as características das Bibliotecas, é correto afirmar que:",
    "options": [
      "A) Uma Biblioteca é uma pasta física real que armazena cópias de segurança de todos os arquivos nela contidos.",
      "B) Ao excluir uma Biblioteca, todos os arquivos e pastas originais vinculados a ela são permanentemente apagados do disco rígido.",
      "C) As Bibliotecas não permitem a inclusão de pastas que estejam localizadas em unidades externas ou dispositivos removíveis.",
      "D) Uma Biblioteca atua como um contêiner virtual que agrega conteúdos de diferentes locais físicos em uma única exibição.",
      "E) Arquivos movidos para dentro de uma Biblioteca deixam de ocupar espaço no disco rígido original."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Bibliotecas não são pastas físicas e não criam cópias (backup) automáticas.",
      "Incorreta. Excluir a Biblioteca (o contêiner) não afeta os arquivos nas pastas de origem. No entanto, excluir um arquivo dentro da biblioteca exclui o original.",
      "Incorreta. É possível incluir pastas de diversas origens, desde que indexáveis.",
      "Correta. Esta é a definição técnica precisa de Biblioteca no Windows: uma camada de organização virtual.",
      "Incorreta. O arquivo continua ocupando espaço em sua localização física original; a biblioteca é apenas uma 'lente' de visualização."
    ],
    "generalExplanation": "Bibliotecas são contêineres lógicos (virtuais). Elas não armazenam os arquivos em si, mas sim referências a pastas físicas localizadas em diferentes partes do sistema ou rede. É a definição técnica precisa de Biblioteca no Windows.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_13",
    "text": "Um usuário possui dois discos rígidos instalados em seu computador, identificados como Unidade C: e Unidade D:. Ao utilizar o mouse para clicar em um arquivo localizado na Unidade C: e arrastá-lo diretamente para uma pasta na Unidade D:, sem pressionar nenhuma tecla adicional, a operação realizada pelo Windows será de:",
    "options": [
      "A) Mover o arquivo, removendo-o da Unidade C:.",
      "B) Criar um atalho do arquivo na Unidade D:.",
      "C) Copiar o arquivo, mantendo o original na Unidade C:.",
      "D) Excluir o arquivo da origem após a confirmação.",
      "E) Renomear o arquivo automaticamente no destino."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O arquivo seria movido apenas se a origem e o destino fossem na mesma unidade (ex: de C:\\Pasta1 para C:\\Pasta2).",
      "Incorreta. Para criar um atalho ao arrastar, seria necessário pressionar a tecla ALT ou usar o botão direito do mouse.",
      "Correta. Como as unidades são diferentes (C: e D:), o Windows interpreta que o usuário deseja duplicar o arquivo no novo destino.",
      "Incorreta. O arraste simples entre unidades nunca resulta em exclusão do arquivo original.",
      "Incorreta. O Windows não renomeia o arquivo automaticamente no arraste, a menos que já exista um arquivo com o mesmo nome no destino."
    ],
    "generalExplanation": "A regra de ouro do Windows define que, entre unidades de disco diferentes (C: para D:), a ação padrão do arrastar e soltar é a CÓPIA. A movimentação é o padrão apenas para arraste dentro da mesma unidade.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_14",
    "text": "Considere que um usuário conectou um Pen Drive (Unidade E:) ao seu computador com Windows 11. Ele seleciona um arquivo importante armazenado nesse Pen Drive e pressiona a tecla 'Delete' do teclado. Sobre essa ação, assinale a alternativa correta:",
    "options": [
      "A) O arquivo será movido para a Lixeira do Windows e poderá ser restaurado posteriormente.",
      "B) O arquivo será excluído permanentemente, sem passar pela Lixeira do Windows.",
      "C) O Windows solicitará que o usuário pressione Shift+Delete para concluir a exclusão.",
      "D) O arquivo será movido para uma pasta oculta chamada 'Recycle' dentro do próprio Pen Drive.",
      "E) A operação será cancelada, pois arquivos em unidades removíveis só podem ser excluídos via menu de contexto."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A Lixeira é um recurso para unidades de disco locais fixas (HD/SSD internos), não para mídias removíveis.",
      "Correta. Por se tratar de um dispositivo removível, o Windows apaga o arquivo imediatamente sem o estágio intermediário da Lixeira.",
      "Incorreta. O uso do Shift+Delete também resultaria em exclusão permanente, mas a tecla Delete sozinha já produz esse efeito em pen drives.",
      "Incorreta. Embora existam pastas de sistema, o comportamento padrão para o usuário é a exclusão definitiva sem opção de restauração simples via interface.",
      "Incorreta. A tecla Delete é perfeitamente funcional para excluir arquivos em qualquer unidade, mudando apenas o destino do arquivo excluído."
    ],
    "generalExplanation": "Arquivos excluídos de unidades removíveis (como pen drives e cartões de memória) não são enviados para a Lixeira; a exclusão é direta e permanente. A Lixeira é um recurso para unidades de disco locais fixas (HD/SSD internos).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_15",
    "text": "No Windows 11, um usuário seleciona dez arquivos de fotos simultaneamente em uma pasta e pressiona a tecla F2. Ele digita o nome 'Ferias' e pressiona Enter. Qual será o resultado dessa ação?",
    "options": [
      "A) Apenas o primeiro arquivo selecionado será renomeado para 'Ferias'.",
      "B) O Windows exibirá uma mensagem de erro informando que não podem existir arquivos com nomes iguais.",
      "C) Todos os arquivos serão renomeados como 'Ferias', mas com extensões diferentes.",
      "D) Os arquivos serão renomeados sequencialmente como 'Ferias(1)', 'Ferias(2)', e assim por diante.",
      "E) A operação será bloqueada, pois a renomeação em lote só é permitida via Prompt de Comando."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Se múltiplos arquivos estão selecionados, a ação de renomear se aplica a todos eles, não apenas ao primeiro.",
      "Incorreta. O Windows possui um mecanismo automático (numeração) para evitar esse erro durante a renomeação em lote.",
      "Incorreta. Mesmo que as extensões sejam diferentes, o Windows aplicará a numeração sequencial a todos os itens do lote selecionado.",
      "Correta. O Windows utiliza o padrão Nome(n) para organizar a renomeação múltipla de forma automática.",
      "Incorreta. A renomeação em lote é um recurso nativo da interface gráfica (Explorador de Arquivos) desde versões antigas do Windows."
    ],
    "generalExplanation": "Este é o comportamento de 'renomeação em lote' do Windows. Ao renomear múltiplos arquivos de uma vez, o sistema aplica o nome base e adiciona um sufixo numérico entre parênteses para evitar conflitos. É um recurso nativo da interface gráfica (Explorador de Arquivos).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_16",
    "text": "Considere que um usuário do Windows 10 possui um arquivo chamado 'Relatorio.docx' localizado na pasta 'C:\\Documentos'. Ele utiliza o mouse para clicar e arrastar esse arquivo diretamente para a pasta 'D:\\Backup', localizada em uma partição de disco diferente, sem pressionar nenhuma tecla modificadora. Ao final da operação, o comportamento padrão do Windows será:",
    "options": [
      "A) Mover o arquivo para o destino, removendo-o da origem.",
      "B) Criar um atalho do arquivo no destino, mantendo o original intacto.",
      "C) Copiar o arquivo para o destino, mantendo o original na pasta de origem.",
      "D) Exibir uma mensagem de erro, pois não é permitido arrastar entre unidades diferentes.",
      "E) Abrir uma caixa de diálogo perguntando se o usuário deseja copiar ou mover."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O arquivo seria movido apenas se a origem e o destino fossem na mesma unidade (ex: C: para C:).",
      "Incorreta. Para criar um atalho arrastando, seria necessário pressionar a tecla ALT.",
      "Correta. Entre unidades distintas, o Windows duplica o arquivo (Copia).",
      "Incorreta. A operação é permitida e comum no sistema.",
      "Incorreta. O Windows executa a ação padrão de cópia sem perguntar, a menos que o usuário arraste com o botão direito do mouse."
    ],
    "generalExplanation": "No Windows, a regra de 'arrastar e soltar' (drag and drop) define que, entre unidades de disco diferentes (C: para D:), a ação padrão é a CÓPIA.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_17",
    "text": "Um usuário deseja criar uma nova pasta dentro do diretório atual no Explorador de Arquivos do Windows 10. Para realizar essa tarefa de forma rápida, utilizando um atalho de teclado, ele deve pressionar simultaneamente as teclas:",
    "options": [
      "A) Ctrl + N",
      "B) Ctrl + Shift + N",
      "C) Alt + N",
      "D) Shift + F10",
      "E) Ctrl + Alt + N"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Ctrl + N geralmente abre uma nova janela do Explorador de Arquivos.",
      "Correta. Este é o atalho específico para criar pastas.",
      "Incorreta. Alt + N não possui função padrão de criação de pastas no Windows.",
      "Incorreta. Shift + F10 abre o menu de contexto (equivalente ao botão direito do mouse).",
      "Incorreta. Combinação inexistente para esta finalidade no Windows."
    ],
    "generalExplanation": "O atalho padrão para a criação de uma nova pasta (New folder) no Windows 10 é Ctrl + Shift + N.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_18",
    "text": "Durante a organização de seus arquivos, um usuário decide renomear o arquivo 'projeto_final.txt' para 'projeto_final.pdf'. Ao confirmar a alteração no Windows 10, o sistema apresentará o seguinte comportamento:",
    "options": [
      "A) O Windows converterá automaticamente o conteúdo do arquivo de texto para o formato PDF.",
      "B) A operação será bloqueada, pois o Windows não permite a alteração manual de extensões de arquivos.",
      "C) O arquivo será renomeado normalmente, sem qualquer aviso, desde que o usuário tenha privilégios de administrador.",
      "D) O Windows exibirá um aviso informando que a alteração da extensão pode tornar o arquivo inutilizável, solicitando confirmação.",
      "E) O arquivo será duplicado, mantendo-se o original .txt e criando-se um novo .pdf vazio."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Renomear não converte o formato interno do arquivo.",
      "Incorreta. O Windows permite a alteração, apenas exige confirmação.",
      "Incorreta. O aviso é exibido independentemente do nível de privilégio do usuário.",
      "Correta. É o comportamento padrão de segurança do sistema.",
      "Incorreta. A operação de renomear altera o arquivo existente, não cria um novo."
    ],
    "generalExplanation": "Alterar a extensão de um arquivo manualmente não altera seu conteúdo técnico, apenas como o sistema o identifica. Por segurança, o Windows emite um alerta de que o arquivo pode parar de funcionar corretamente.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_19",
    "text": "Sobre a operação de 'Desfazer' no Explorador de Arquivos do Windows 10, analise as afirmativas abaixo:\nI. O atalho Ctrl + Z pode ser utilizado para desfazer uma renomeação acidental de arquivo.\nII. Se um usuário mover um arquivo de uma pasta para outra, o Ctrl + Z pode retornar o arquivo à pasta de origem.\nIII. O comando Ctrl + Z não funciona para operações de cópia de arquivos, apenas para movimentação.\nEstá(ão) correta(s):",
    "options": [
      "A) Apenas I.",
      "B) Apenas II.",
      "C) Apenas I e II.",
      "D) Apenas II e III.",
      "E) I, II e III."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. A afirmativa II também está correta.",
      "Incorreta. A afirmativa I também está correta.",
      "Correta. I e II descrevem funcionalidades reais do comando Desfazer.",
      "Incorreta. A afirmativa III é falsa.",
      "Incorreta. A afirmativa III invalida esta opção."
    ],
    "generalExplanation": "As afirmativas I e II estão corretas. O Ctrl + Z é capaz de desfazer renomeações, movimentações e até exclusões (enviando da lixeira de volta para a pasta). A afirmativa III está incorreta porque o Ctrl + Z também desfaz operações de cópia (removendo a cópia criada).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_20",
    "text": "No que tange ao Histórico da Área de Transferência, recurso introduzido nas versões mais recentes do Windows (10 e 11), assinale a afirmativa correta:",
    "options": [
      "A) O histórico é ativado automaticamente por padrão em todas as instalações, sem necessidade de intervenção do usuário.",
      "B) O atalho Win + V permite acessar o painel do histórico, mas ele suporta exclusivamente o armazenamento de textos simples.",
      "C) Ao utilizar o Win + V pela primeira vez, o sistema solicita que o usuário ative explicitamente o recurso de histórico.",
      "D) O histórico da área de transferência é limpo obrigatoriamente a cada 30 minutos para economizar memória RAM.",
      "E) Itens copiados através do comando Ctrl + C não aparecem no histórico acessado pelo Win + V, apenas itens recortados."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O recurso requer ativação manual na primeira utilização ou nas configurações de sistema.",
      "Incorreta. O histórico suporta tanto textos quanto imagens (dentro de limites de tamanho específicos).",
      "Correta. Esta é a interface padrão do Windows para a primeira interação com o recurso de histórico.",
      "Incorreta. Não há uma limpeza automática por tempo fixo de 30 minutos; a limpeza ocorre por ação do usuário ou reinicialização (exceto itens fixados).",
      "Incorreta. Tanto itens copiados (Ctrl+C) quanto recortados (Ctrl+X) são registrados no histórico."
    ],
    "generalExplanation": "Por questões de privacidade e recursos de sistema, o Histórico da Área de Transferência não vem ativado de fábrica; o usuário deve habilitá-lo, o que geralmente ocorre no primeiro acionamento do atalho Win + V.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_21",
    "text": "Ao manipular arquivos no Explorador de Arquivos do Windows, o comportamento do comando 'Recortar' (Ctrl + X) apresenta uma particularidade em relação à edição de textos. Sobre esse comportamento, é correto afirmar que:",
    "options": [
      "A) O arquivo é excluído imediatamente da pasta de origem e enviado para a Lixeira até que o comando 'Colar' seja executado.",
      "B) O ícone do arquivo fica com aspecto transparente (esmaecido), mas o arquivo permanece no local de origem até ser colado no destino.",
      "C) O Windows cria uma cópia temporária do arquivo e deleta o original instantaneamente para liberar espaço em disco.",
      "D) O comando Ctrl + X é desabilitado para arquivos, funcionando apenas para pastas e subpastas no ambiente Windows.",
      "E) Se o usuário realizar um novo comando de cópia antes de colar o arquivo recortado, o arquivo original será movido para uma pasta temporária do sistema."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O arquivo não vai para a Lixeira; ele permanece na origem até a conclusão da operação de mover.",
      "Correta. Esta alternativa descreve perfeitamente o feedback visual e a lógica de funcionamento do sistema para arquivos.",
      "Incorreta. O original não é deletado instantaneamente; a operação de mover é atômica e depende da colagem.",
      "Incorreta. O comando Ctrl + X é perfeitamente válido e amplamente utilizado para arquivos.",
      "Incorreta. Se uma nova cópia for feita antes da colagem do recorte, a operação de recorte é cancelada e o arquivo original permanece intacto na origem."
    ],
    "generalExplanation": "Diferente de textos, onde o conteúdo some na hora, no Explorador de Arquivos o 'Recortar' apenas marca o arquivo (ícone esmaecido). A transferência física só ocorre no momento da colagem (Ctrl+V).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_22",
    "text": "Considere que um usuário realizou a seguinte sequência de ações em um editor de texto:\n1. Digitou uma frase.\n2. Pressionou Ctrl + Z.\n3. Percebeu que não deveria ter desfeito a ação.\nQual atalho deve ser utilizado para 'refazer' a ação que foi desfeita?",
    "options": [
      "A) Ctrl + R",
      "B) Ctrl + Shift + Z",
      "C) Ctrl + Y",
      "D) Ctrl + W",
      "E) Ctrl + F"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Ctrl + R é comumente usado para 'Recarregar' (Refresh) em navegadores, não para refazer edições no Windows.",
      "Incorreta. Embora alguns softwares específicos usem Ctrl+Shift+Z, o padrão universal do Windows e do pacote Office para 'Refazer' é o Ctrl+Y.",
      "Correta. Ctrl + Y é o par complementar do Ctrl + Z para controle de histórico de edições.",
      "Incorreta. Ctrl + W é utilizado para fechar janelas ou abas ativas.",
      "Incorreta. Ctrl + F é utilizado para localizar (Find) termos no documento ou página."
    ],
    "generalExplanation": "O comando Ctrl + Y é o padrão no Windows para a função 'Refazer' (Redo), que reverte a ação do comando 'Desfazer' (Ctrl + Z).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_23",
    "text": "Assinale a alternativa que apresenta a correlação correta entre o atalho de teclado e sua respectiva função no ambiente Windows (idioma Português-Brasil):",
    "options": [
      "A) Ctrl + A: Abrir um novo arquivo de texto.",
      "B) Ctrl + X: Excluir definitivamente um item sem passar pela lixeira.",
      "C) Ctrl + V: Visualizar as propriedades de um arquivo selecionado.",
      "D) Ctrl + A: Selecionar todos os itens de uma pasta ou todo o texto de um documento.",
      "E) Ctrl + Z: Zoom na tela para facilitar a leitura de textos pequenos."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Para abrir um novo arquivo, geralmente usa-se Ctrl + O (Open) ou Ctrl + N (New), dependendo do aplicativo.",
      "Incorreta. Ctrl + X é recortar. Para excluir sem lixeira, usa-se Shift + Delete.",
      "Incorreta. Ctrl + V é colar. Propriedades são acessadas geralmente por Alt + Enter.",
      "Correta. Esta é a função padrão do Ctrl + A no sistema operacional e na maioria dos aplicativos em português.",
      "Incorreta. Ctrl + Z é desfazer. O zoom geralmente é controlado por Ctrl + '+' ou Ctrl + Roda do Mouse."
    ],
    "generalExplanation": "No Windows em português, o atalho Ctrl + A (de 'All' ou 'A' de 'Tudo' em algumas interpretações de interface) é o comando padrão para selecionar a totalidade dos elementos ativos.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_24",
    "text": "Considere uma situação em que um usuário do Windows 10 exclui um arquivo importante que estava armazenado em um Pen Drive (unidade removível de memória flash). Sobre a possibilidade de recuperação desse arquivo através da Lixeira, assinale a afirmativa correta:",
    "options": [
      "A) O arquivo poderá ser restaurado normalmente, pois o Windows cria uma lixeira oculta em todos os dispositivos removíveis.",
      "B) O arquivo não poderá ser recuperado via Lixeira, pois arquivos excluídos de unidades removíveis como Pen Drives são apagados permanentemente.",
      "C) O arquivo irá para a Lixeira apenas se o seu tamanho for inferior a 10% da capacidade total do Pen Drive.",
      "D) O arquivo será movido para a Lixeira do disco local (C:), independentemente de onde foi excluído.",
      "E) A recuperação só será possível se o usuário tiver habilitado a 'Lixeira de Rede' nas configurações do sistema."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Diferente de HDs externos, Pen Drives geralmente não possuem suporte à lixeira no Windows.",
      "Correta. A exclusão em unidades removíveis (flash) é, via de regra, permanente.",
      "Incorreta. Não existe essa regra de proporcionalidade de 10% para unidades removíveis.",
      "Incorreta. A lixeira do C: armazena apenas arquivos excluídos das partições do disco rígido configuradas.",
      "Incorreta. Não existe o termo técnico 'Lixeira de Rede' que habilite essa função para Pen Drives."
    ],
    "generalExplanation": "Por padrão, o Windows trata Pen Drives e cartões de memória como unidades de armazenamento que não possuem suporte à Lixeira, resultando em exclusão direta.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_25",
    "text": "No gerenciamento de espaço em disco do Windows 10, a Lixeira possui um comportamento específico quando atinge o limite máximo de armazenamento configurado pelo usuário. Esse comportamento é regido pela lógica:",
    "options": [
      "A) LIFO (Last In, First Out), onde os arquivos excluídos mais recentemente são os primeiros a serem apagados permanentemente.",
      "B) Aleatória, onde o sistema escolhe qualquer arquivo para apagar e liberar espaço.",
      "C) De bloqueio, impedindo que o usuário exclua novos arquivos até que a lixeira seja esvaziada manualmente.",
      "D) FIFO (First In, First Out), onde os arquivos que estão há mais tempo na lixeira são excluídos permanentemente para dar lugar aos novos.",
      "E) De compressão, onde o Windows compacta os arquivos antigos para evitar a exclusão permanente."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. LIFO seria o oposto; o Windows preserva os arquivos mais recentes.",
      "Incorreta. O processo é determinístico baseado na data de exclusão, não aleatório.",
      "Incorreta. O sistema não bloqueia a exclusão; ele automatiza a limpeza dos itens antigos.",
      "Correta. First In (o primeiro a entrar na lixeira) é o First Out (o primeiro a sair/ser apagado definitivamente).",
      "Incorreta. A lixeira não realiza compactação de arquivos para gerenciar seu limite de espaço."
    ],
    "generalExplanation": "O Windows utiliza a lógica FIFO para garantir que o espaço da lixeira seja renovado, descartando os itens mais antigos primeiro.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_26",
    "text": "Um usuário excluiu acidentalmente um arquivo chamado 'Relatorio.docx' que estava dentro de uma pasta denominada 'Projetos_2023'. Logo em seguida, ele também excluiu a pasta 'Projetos_2023'. Ao perceber o erro, ele abre a Lixeira e solicita a restauração apenas do arquivo 'Relatorio.docx'. De acordo com o funcionamento do Windows 10, o resultado será:",
    "options": [
      "A) O Windows apresentará um erro informando que o local original não está disponível.",
      "B) O arquivo será restaurado para a Área de Trabalho, pois sua pasta original não existe mais.",
      "C) O Windows recriará automaticamente a pasta 'Projetos_2023' para acomodar o arquivo restaurado no local original.",
      "D) O arquivo será restaurado para a raiz da unidade C:, aguardando que o usuário o mova manualmente.",
      "E) A restauração será impossibilitada até que o usuário restaure primeiro a pasta 'Projetos_2023'."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O sistema não gera erro, ele resolve a ausência da pasta recriando-a.",
      "Incorreta. A Área de Trabalho não é o destino padrão para falhas de caminho original.",
      "Correta. A estrutura de pastas é recriada automaticamente pelo sistema.",
      "Incorreta. O arquivo nunca é movido para a raiz da unidade por padrão nesse cenário.",
      "Incorreta. Não há dependência de ordem de restauração manual para que o processo funcione."
    ],
    "generalExplanation": "O Windows 10 possui a inteligência de reconstruir a estrutura de diretórios necessária para restaurar um arquivo ao seu caminho original, mesmo que as pastas intermediárias tenham sido removidas.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_27",
    "text": "Determinados nomes de arquivos são reservados pelo sistema operacional Windows 10 para funções específicas de dispositivos e comunicações, não podendo ser utilizados pelos usuários para nomear arquivos comuns. Assinale a alternativa que contém apenas nomes RESERVADOS.",
    "options": [
      "A) SISTEMA, ARQUIVO, DADOS",
      "B) CON, PRN, NUL",
      "C) TEMP, TMP, CACHE",
      "D) USER, ADMIN, GUEST",
      "E) ROOT, HOME, BIN"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. SISTEMA, ARQUIVO e DADOS são nomes comuns e permitidos.",
      "Correta. Todos os três constam na lista de nomes proibidos/reservados pelo sistema.",
      "Incorreta. Embora sejam nomes usados pelo sistema para pastas temporárias, o usuário pode criar arquivos com esses nomes.",
      "Incorreta. São nomes comuns de usuários, mas não são nomes de arquivos reservados pelo sistema.",
      "Incorreta. Estes são nomes de diretórios padrão em sistemas Linux/Unix, mas não são reservados no Windows."
    ],
    "generalExplanation": "O Windows reserva nomes herdados do MS-DOS para dispositivos de sistema, como CON (console), PRN (impressora), NUL (dispositivo nulo), AUX, COM1-COM9 e LPT1-LPT9.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_28",
    "text": "No que diz respeito aos limites técnicos de caminhos e nomes de arquivos no Windows 10, analise as proposições abaixo:\nI. O comprimento máximo para o nome de um arquivo individual é de 255 caracteres.\nII. O limite padrão para o caminho total (MAX_PATH), incluindo a unidade, pastas e o nome do arquivo, é de aproximadamente 260 caracteres.\nIII. O Windows utiliza a barra normal (/) como separador padrão de diretórios em seus caminhos de sistema internos.\nEstá(ão) correta(s):",
    "options": [
      "A) Apenas a I.",
      "B) Apenas a II.",
      "C) Apenas a I e a II.",
      "D) Apenas a II e a III.",
      "E) I, II e III."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. A proposição II também está correta.",
      "Incorreta. A proposição I também está correta.",
      "Correta. I (255 caracteres para o nome) e II (260 para o caminho total) refletem as limitações padrão cobradas em concursos.",
      "Incorreta. A proposição III é falsa (o separador é a barra invertida).",
      "Incorreta. A proposição III invalida esta alternativa."
    ],
    "generalExplanation": "As proposições I e II estão corretas conforme a documentação técnica do Windows. A proposição III está incorreta porque o Windows utiliza a barra invertida (\\) como separador, enquanto a barra normal (/) é padrão em sistemas Unix/Linux.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_29",
    "text": "Durante a manipulação de arquivos no Windows 11, um técnico deseja transferir um arquivo da pasta 'Documentos' (Unidade C:) para a pasta 'Backup' (também na Unidade C:). No entanto, ele deseja garantir que a operação seja de CÓPIA, e não de movimentação, utilizando o método de arrastar e soltar. Para forçar esse comportamento, ele deve manter pressionada a tecla:",
    "options": [
      "A) SHIFT",
      "B) ALT",
      "C) CTRL",
      "D) TAB",
      "E) ESC"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. A tecla SHIFT força a operação de MOVER (movimentação).",
      "Incorreta. A tecla ALT (ou Ctrl+Shift) força a criação de um ATALHO no destino.",
      "Correta. Pressionar CTRL durante o arraste altera o ponteiro do mouse para exibir um sinal de '+' (mais), indicando que uma cópia será realizada.",
      "Incorreta. A tecla TAB não possui função modificadora para operações de arraste de arquivos.",
      "Incorreta. A tecla ESC é utilizada para cancelar a operação de arraste enquanto ela ainda está em curso."
    ],
    "generalExplanation": "A tecla CTRL é a tecla modificadora que força a operação de CÓPIA, independentemente de os arquivos estarem na mesma unidade ou em unidades diferentes.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_30",
    "text": "Um usuário do Windows 11 realizou as seguintes ações em sequência:\n1. Excluiu uma pasta chamada 'Projetos' que continha um arquivo chamado 'Relatorio.docx' (opção de envio para a Lixeira).\n2. Abriu a Lixeira e solicitou a restauração apenas do arquivo 'Relatorio.docx'.\nConsiderando que a pasta original 'Projetos' não existe mais no local de origem, qual será o comportamento do Windows?",
    "options": [
      "A) O Windows impedirá a restauração e exibirá uma mensagem de erro informando que a pasta de origem inexiste.",
      "B) O arquivo será restaurado para a pasta Raiz da unidade (ex: C:\\).",
      "C) O Windows recriará automaticamente a pasta 'Projetos' para poder restaurar o arquivo em seu local original.",
      "D) O arquivo será restaurado para a pasta 'Documentos' do usuário logado.",
      "E) O Windows solicitará ao usuário que selecione um novo local para salvar o arquivo restaurado."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O Windows é capaz de lidar com essa situação sem gerar erros de interrupção.",
      "Incorreta. A restauração não move o arquivo para a raiz, mas sim para o caminho absoluto original.",
      "Correta. Esta é uma característica avançada de gerenciamento de arquivos do Windows para manter a integridade da estrutura de diretórios.",
      "Incorreta. A restauração é específica para o local de origem, não havendo redirecionamento padrão para 'Documentos'.",
      "Incorreta. A função 'Restaurar' é automática para o local original. Para escolher um novo local, o usuário teria que 'Recortar' ou 'Arrastar' o arquivo de dentro da Lixeira."
    ],
    "generalExplanation": "O Windows mantém os metadados do caminho original. Se o contêiner (pasta) foi excluído, o sistema o recria automaticamente para garantir que o arquivo volte exatamente para onde estava.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_31",
    "text": "No que tange às operações de movimentação e cópia de arquivos em volumes formatados em NTFS no Windows 10, assinale a alternativa correta sobre o comportamento das permissões de acesso:",
    "options": [
      "A) Ao copiar um arquivo para uma pasta de destino, ele sempre mantém as permissões da pasta de origem.",
      "B) Ao mover um arquivo entre pastas da mesma partição (ex: de C:\\A para C:\\B), o arquivo mantém suas permissões originais.",
      "C) Ao mover um arquivo entre partições diferentes (ex: de C:\\ para D:\\), o arquivo mantém suas permissões originais da origem.",
      "D) A operação de cópia nunca altera as permissões, independentemente do destino ser a mesma partição ou não.",
      "E) O comando Ctrl + Z, ao desfazer uma movimentação, não é capaz de restaurar as permissões originais do arquivo."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Na cópia, o arquivo herda as permissões da pasta de destino.",
      "Correta. Na mesma partição, a movimentação preserva as permissões (o arquivo é apenas 'apontado' para um novo local no índice).",
      "Incorreta. Entre partições diferentes, a movimentação é tecnicamente uma cópia seguida de exclusão, logo, o arquivo herda as permissões do destino.",
      "Incorreta. A cópia sempre resulta na herança das permissões do destino.",
      "Incorreta. O Ctrl+Z reverte a operação de sistema, mas o foco da questão é a regra de permissões NTFS."
    ],
    "generalExplanation": "No NTFS, quando um arquivo é movido dentro da mesma partição, ele mantém seus metadados e permissões originais. Se for movido para uma partição diferente ou copiado, ele herda as permissões da pasta de destino.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_32",
    "text": "Um usuário está com o Explorador de Arquivos aberto e visualiza dois diretórios: 'C:\\Projetos' e 'C:\\Backup'. Ele seleciona um arquivo em 'C:\\Projetos' e, utilizando o botão esquerdo do mouse, arrasta-o para 'C:\\Backup' enquanto mantém a tecla ALT pressionada. O resultado desta ação será:",
    "options": [
      "A) A movimentação do arquivo para a pasta de destino.",
      "B) A cópia do arquivo para a pasta de destino.",
      "C) A criação de um atalho para o arquivo na pasta de destino.",
      "D) A exclusão do arquivo original e criação de uma cópia compactada no destino.",
      "E) A abertura da janela de propriedades do arquivo no destino."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Para mover na mesma unidade, bastaria arrastar sem teclas, ou usar SHIFT.",
      "Incorreta. Para copiar na mesma unidade, seria necessário usar CTRL.",
      "Correta. ALT + Arrastar = Criar Atalho.",
      "Incorreta. Não existe essa funcionalidade combinada com a tecla ALT.",
      "Incorreta. Alt+Enter abre propriedades, mas Alt+Arrastar cria atalho."
    ],
    "generalExplanation": "A tecla ALT é a tecla modificadora específica para forçar a criação de um atalho durante a operação de arrastar e soltar, independentemente de as unidades de origem e destino serem iguais ou diferentes.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_33",
    "text": "No Windows 10/11, o recurso de Histórico da Área de Transferência permite que itens sejam 'fixados'. Qual é a principal consequência prática de se fixar um item nesse painel?",
    "options": [
      "A) O item fixado será automaticamente colado em todos os novos documentos abertos pelo usuário.",
      "B) O item fixado passa a ser criptografado e exige senha para ser visualizado no histórico.",
      "C) O item fixado é preservado no histórico mesmo após a reinicialização do computador ou a limpeza manual do histórico.",
      "D) A fixação impede que o item seja editado em qualquer aplicativo até que seja desfixado.",
      "E) Itens fixados são enviados automaticamente para a Área de Transferência de todos os usuários da mesma rede local."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. A fixação não automatiza a colagem, apenas mantém o item disponível na lista para escolha manual.",
      "Incorreta. Não há recurso de criptografia por senha associado especificamente à fixação de itens no histórico.",
      "Correta. Esta é a funcionalidade técnica da fixação: persistência de dados em um ambiente normalmente temporário.",
      "Incorreta. A fixação no histórico não altera as propriedades de leitura/escrita do conteúdo original.",
      "Incorreta. A sincronização, quando ativa, ocorre entre dispositivos do mesmo usuário (mesma conta Microsoft), não entre usuários diferentes da rede."
    ],
    "generalExplanation": "A função de 'fixar' (pin) no histórico serve justamente para evitar que itens importantes sejam perdidos quando o histórico é limpo ou quando o sistema é desligado, já que a RAM é volátil.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_34",
    "text": "Analise a seguinte situação: Um usuário seleciona um arquivo chamado 'Relatorio.docx' em sua pasta 'Documentos' e pressiona Ctrl + X. Em seguida, ele navega até a pasta 'Backup', mas antes de pressionar Ctrl + V, ele seleciona um arquivo de imagem e pressiona Ctrl + C. Com base no comportamento padrão do Windows (sem o uso do painel de histórico Win+V), o que ocorrerá com o arquivo 'Relatorio.docx'?",
    "options": [
      "A) O arquivo será movido para a pasta 'Backup' automaticamente, pois o comando Ctrl + X tem prioridade sobre o Ctrl + C.",
      "B) O arquivo 'Relatorio.docx' será excluído permanentemente, pois a nova operação de cópia interrompeu o processo de transferência.",
      "C) O arquivo 'Relatorio.docx' permanecerá intacto na pasta 'Documentos' e seu ícone deixará de estar esmaecido.",
      "D) O Windows apresentará uma mensagem de erro informando que não é possível realizar duas operações de transferência simultâneas.",
      "E) O arquivo 'Relatorio.docx' será movido para a Área de Trabalho como medida de segurança do sistema operacional."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O Windows não executa a colagem automaticamente; ela depende da ação do usuário.",
      "Incorreta. O sistema protege o arquivo; se a operação não é concluída, o original é preservado.",
      "Correta. O novo comando (Ctrl+C) assume o controle da Área de Transferência, invalidando o recorte anterior. O arquivo original permanece onde estava.",
      "Incorreta. O Windows permite a nova operação, simplesmente descartando a informação anterior da Área de Transferência.",
      "Incorreta. Não existe esse comportamento de mover arquivos para a Área de Trabalho por esse motivo."
    ],
    "generalExplanation": "Na Área de Transferência clássica, um novo item sobrescreve o anterior. Como o 'Recortar' de arquivos só se concretiza na colagem, se o usuário copiar outra coisa antes de colar, a operação de recorte é cancelada e o arquivo original não sofre alteração.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_35",
    "text": "Sobre as propriedades e o funcionamento técnico da Lixeira no Windows 10, analise as afirmativas a seguir:\nI. É possível configurar tamanhos máximos distintos para a lixeira em cada partição do disco rígido.\nII. Arquivos excluídos através do Prompt de Comando (CMD) são enviados para a lixeira por segurança.\nIII. A Lixeira, embora apresente uma visão unificada na Área de Trabalho, utiliza pastas ocultas denominadas $Recycle.Bin em cada volume.\nEstá correto o que se afirma em:",
    "options": [
      "A) I, apenas.",
      "B) I e II, apenas.",
      "C) I e III, apenas.",
      "D) II e III, apenas.",
      "E) I, II e III."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incompleta, pois a III também está correta.",
      "Incorreta. O Prompt de Comando (CMD) não utiliza a lixeira; a exclusão é permanente.",
      "Correta. Cada partição tem sua configuração e sua pasta oculta de sistema.",
      "Incorreta devido à afirmação II.",
      "Incorreta devido à afirmação II."
    ],
    "generalExplanation": "As afirmativas I e III estão corretas. A II está incorreta pois o CMD realiza exclusão direta.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_36",
    "text": "No que tange à gestão de arquivos e segurança de dados no Windows 10, assinale a alternativa que descreve uma situação em que um arquivo, ao ser deletado pelo usuário (sem o uso de Shift), NÃO será enviado para a Lixeira:",
    "options": [
      "A) O arquivo está armazenado em um HD Externo conectado via porta USB.",
      "B) O arquivo possui o atributo de 'Somente Leitura' habilitado em suas propriedades.",
      "C) O arquivo foi excluído de uma pasta compartilhada localizada em um servidor de arquivos na rede local.",
      "D) O arquivo é um atalho (.lnk) para um executável localizado no disco local C:.",
      "E) O arquivo foi movido para a Lixeira de uma partição diferente daquela onde o sistema operacional está instalado."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. HDs externos geralmente possuem sua própria lixeira gerenciada pelo Windows.",
      "Incorreta. O atributo 'Somente Leitura' pode exigir confirmação extra, mas não impede o envio para a lixeira.",
      "Correta. Unidades de rede são uma das exceções clássicas onde a lixeira não atua.",
      "Incorreta. Atalhos são arquivos comuns e vão para a lixeira normalmente quando excluídos.",
      "Incorreta. O Windows gerencia lixeiras em múltiplas partições; o arquivo iria para a lixeira daquela partição específica."
    ],
    "generalExplanation": "Arquivos excluídos de unidades de rede (pastas compartilhadas) são removidos permanentemente e não passam pela lixeira do computador local nem do servidor.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_37",
    "text": "No que se refere às tecnologias de acesso à internet de banda larga, a tecnologia ADSL (Asymmetric Digital Subscriber Line) é amplamente conhecida por uma característica específica em relação ao tráfego de dados. Assinale a alternativa que descreve corretamente essa característica.",
    "options": [
      "A) A velocidade de download é obrigatoriamente igual à velocidade de upload, garantindo simetria total.",
      "B) A transmissão de dados ocorre por meio de pulsos de luz em filamentos de vidro, eliminando interferências.",
      "C) A velocidade de recebimento de dados (download) é superior à velocidade de envio de dados (upload).",
      "D) O acesso à internet impede o uso simultâneo da linha telefônica para chamadas de voz.",
      "E) A tecnologia utiliza cabos coaxiais compartilhados entre diversos usuários de uma mesma região."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O ADSL é assimétrico; tecnologias simétricas (SDSL) são menos comuns em acessos residenciais.",
      "Incorreta. Esta é uma característica da Fibra Óptica, não do ADSL, que utiliza cabos de cobre.",
      "Correta. O termo 'Asymmetric' (Assimétrico) refere-se justamente à diferença de taxas entre download e upload.",
      "Incorreta. Diferente da conexão discada (dial-up), o ADSL permite o uso simultâneo de voz e dados.",
      "Incorreta. O uso de cabos coaxiais e meio compartilhado é característica da tecnologia de Cabo (HFC)."
    ],
    "generalExplanation": "A tecnologia ADSL é, por definição, assimétrica, priorizando a largura de banda para o download, que é a atividade mais comum do usuário doméstico.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_38",
    "text": "Ao configurar uma rede sem fio (Wi-Fi) doméstica ou corporativa, o administrador deve escolher um protocolo de segurança para proteger os dados contra acessos não autorizados. Considerando os padrões atuais, qual é o protocolo que oferece o maior nível de segurança contra ataques de força bruta?",
    "options": [
      "A) WEP (Wired Equivalent Privacy)",
      "B) WPA (Wi-Fi Protected Access)",
      "C) WPA2 (utilizando criptografia AES)",
      "D) WPA3",
      "E) WPS (Wi-Fi Protected Setup)"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. O WEP é um protocolo antigo e extremamente vulnerável, considerado inseguro há anos.",
      "Incorreta. O WPA foi uma solução temporária para as falhas do WEP, sendo superado pelo WPA2.",
      "Incorreta. Embora o WPA2 seja seguro e amplamente utilizado, o WPA3 é tecnicamente superior em termos de proteção.",
      "Correta. O WPA3 é o padrão mais moderno e seguro disponível atualmente para redes Wi-Fi.",
      "Incorreta. O WPS não é um protocolo de criptografia, mas um recurso de facilitação de conexão que possui vulnerabilidades conhecidas."
    ],
    "generalExplanation": "O WPA3 é a evolução mais recente dos protocolos de segurança Wi-Fi, trazendo proteções robustas contra ataques de dicionário e força bruta.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_39",
    "text": "No âmbito das redes locais sem fio (WLAN), o padrão IEEE 802.11 utiliza um método específico para o controle de acesso ao meio compartilhado, visando minimizar problemas de transmissão. Esse método é conhecido como:",
    "options": [
      "A) CSMA/CD (Carrier Sense Multiple Access with Collision Detection).",
      "B) CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance).",
      "C) Token Passing (Passagem de Testemunho).",
      "D) ALOHA Puro.",
      "E) TDMA (Time Division Multiple Access)."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O CSMA/CD é utilizado em redes cabeadas (Ethernet - IEEE 802.3).",
      "Correta. O Wi-Fi utiliza a Prevenção de Colisão (Collision Avoidance) devido à natureza do meio compartilhado via rádio.",
      "Incorreta. O Token Passing é utilizado em redes do tipo Token Ring ou FDDI, não no Wi-Fi.",
      "Incorreta. O ALOHA é um protocolo mais antigo e menos eficiente que o CSMA/CA para redes locais modernas.",
      "Incorreta. O TDMA é uma técnica de multiplexação por divisão de tempo, comum em redes celulares, mas não é o protocolo base de acesso do 802.11."
    ],
    "generalExplanation": "O padrão Wi-Fi utiliza o CSMA/CA para evitar colisões, já que a detecção de colisões (CD) é tecnicamente inviável em transmissões de rádio simultâneas no mesmo canal.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_40",
    "text": "A Wi-Fi Alliance introduziu uma nomenclatura simplificada para identificar as gerações de tecnologias sem fio. Assinale a alternativa que apresenta a correlação correta entre o padrão técnico e seu nome comercial:",
    "options": [
      "A) 802.11n é o Wi-Fi 5.",
      "B) 802.11ac é o Wi-Fi 4.",
      "C) 802.11ax é o Wi-Fi 6.",
      "D) 802.11b é o Wi-Fi 3.",
      "E) 802.11g é o Wi-Fi 2."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O 802.11n corresponde ao Wi-Fi 4.",
      "Incorreta. O 802.11ac corresponde ao Wi-Fi 5.",
      "Correta. O padrão 802.11ax é comercialmente conhecido como Wi-Fi 6.",
      "Incorreta. A nomenclatura numérica começou a ser aplicada retroativamente a partir do Wi-Fi 4.",
      "Incorreta. A nomenclatura numérica começou a ser aplicada retroativamente a partir do Wi-Fi 4."
    ],
    "generalExplanation": "A sequência correta estabelecida pela Wi-Fi Alliance é: 802.11n (Wi-Fi 4), 802.11ac (Wi-Fi 5) e 802.11ax (Wi-Fi 6).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_41",
    "text": "Ao utilizar a funcionalidade de 'Mapas Offline' no Google Maps, o usuário consegue realizar determinadas ações mesmo sem uma conexão ativa com a internet. De acordo com as características técnicas dessa ferramenta, qual modal de transporte é plenamente suportado para navegação curva a curva no modo offline?",
    "options": [
      "A) Transporte Público (ônibus e metrô).",
      "B) Bicicleta.",
      "C) Carro.",
      "D) Caminhada (pedestre) com rotas detalhadas.",
      "E) Transporte por aplicativos de carona integrada."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Rotas de transporte público exigem conexão em tempo real para consultar horários, linhas e integrações de bancos de dados externos.",
      "Incorreta. O modal de bicicleta geralmente não está disponível para navegação offline, pois depende de dados de ciclovias e altimetria que muitas vezes não são incluídos no pacote básico offline.",
      "Correta. O modal 'Carro' é o padrão suportado para navegação curva a curva (GPS) quando o mapa foi previamente baixado.",
      "Incorreta. Embora versões recentes possam mostrar rotas limitadas, a regra geral para concursos é que o modal pedestre não é plenamente funcional offline como o de carro.",
      "Incorreta. Serviços de carona exigem conexão constante para pareamento de motoristas e cálculo de tarifas dinâmicas."
    ],
    "generalExplanation": "A funcionalidade offline do Google Maps é projetada primariamente para fornecer rotas de condução (carro), baixando a malha viária necessária para esse fim.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_42",
    "text": "Sobre o armazenamento de mapas offline no dispositivo móvel, assinale a alternativa que descreve corretamente uma característica técnica desse recurso.",
    "options": [
      "A) O Google Maps baixa automaticamente o mapa de todo o país do usuário para garantir a segurança.",
      "B) Os mapas baixados ocupam espaço apenas na memória RAM, sendo apagados ao fechar o aplicativo.",
      "C) O usuário pode optar por salvar os mapas tanto no armazenamento interno quanto em um cartão SD.",
      "D) Uma vez baixado, o mapa offline tem validade vitalícia e nunca precisa de atualização.",
      "E) O download de mapas offline só pode ser realizado através de conexões de dados móveis (4G/5G)."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O download é feito por áreas geográficas delimitadas pelo usuário, e não por países inteiros de forma automática.",
      "Incorreta. Os mapas são salvos no armazenamento persistente (memória interna ou SD), não na memória RAM.",
      "Correta. O Google Maps oferece a opção de configurar o local de armazenamento nas definições do aplicativo.",
      "Incorreta. Os mapas offline possuem data de validade (geralmente 1 ano) e precisam ser atualizados para permanecerem utilizáveis.",
      "Incorreta. O download pode ser feito por Wi-Fi, sendo inclusive a forma recomendada para economizar dados."
    ],
    "generalExplanation": "O aplicativo permite a gestão do armazenamento, possibilitando que o usuário escolha entre a memória interna do smartphone ou o armazenamento externo (cartão SD).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_43",
    "text": "No contexto da evolução das redes de telefonia móvel, a tecnologia que se tornou o padrão global para a quarta geração (4G), permitindo altas taxas de transferência de dados e baseando-se inteiramente no Protocolo IP, é conhecida como:",
    "options": [
      "A) UMTS (Universal Mobile Telecommunications System).",
      "B) HSPA+ (High Speed Packet Access Plus).",
      "C) LTE (Long Term Evolution).",
      "D) 5G NR (New Radio).",
      "E) GSM (Global System for Mobile Communications)."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O UMTS é a tecnologia base da terceira geração (3G), não da quarta.",
      "Incorreta. O HSPA+ é uma evolução do 3G, frequentemente chamado de 3.5G ou 3G Plus.",
      "Correta. O LTE é a tecnologia que permitiu ao 4G atingir altas velocidades através de uma rede totalmente baseada em IP.",
      "Incorreta. O 5G NR é o padrão tecnológico da quinta geração (5G), sucessora do LTE.",
      "Incorreta. O GSM é uma tecnologia de segunda geração (2G), focada primordialmente em voz e SMS."
    ],
    "generalExplanation": "O LTE é o padrão tecnológico que define o 4G, focado em redes de pacotes com arquitetura baseada em IP.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_44",
    "text": "Qual geração de telefonia móvel é historicamente reconhecida por ter viabilizado a transição definitiva do foco em voz para o foco em dados, popularizando o uso de smartphones e redes sociais?",
    "options": [
      "A) 1G.",
      "B) 2G.",
      "C) 3G.",
      "D) 4G.",
      "E) 5G."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O 1G era analógico e focado exclusivamente em voz.",
      "Incorreta. O 2G introduziu o digital e o SMS, mas a navegação na web ainda era muito limitada.",
      "Correta. O 3G permitiu o acesso real à web, videochamadas e o crescimento das redes sociais no celular.",
      "Incorreta. O 4G aprimorou a experiência com alta velocidade, mas a transição inicial ocorreu no 3G.",
      "Incorreta. O 5G foca em conectividade massiva e latência, sendo uma evolução muito posterior à popularização inicial dos smartphones."
    ],
    "generalExplanation": "O 3G (UMTS/HSPA) foi o marco inicial da internet móvel funcional para o grande público e o surgimento da era dos smartphones.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_45",
    "text": "As redes Wi-Fi operam principalmente em duas frequências: 2.4 GHz e 5 GHz. Sobre as diferenças técnicas entre essas frequências, assinale a alternativa correta.",
    "options": [
      "A) A frequência de 5 GHz possui maior alcance físico e atravessa paredes com mais facilidade que a de 2.4 GHz.",
      "B) A frequência de 2.4 GHz é menos suscetível a interferências de dispositivos como micro-ondas e Bluetooth.",
      "C) A frequência de 5 GHz oferece maiores taxas de transmissão de dados, porém possui menor alcance de sinal.",
      "D) O padrão IEEE 802.11ac opera exclusivamente na frequência de 2.4 GHz para garantir compatibilidade.",
      "E) A frequência de 2.4 GHz é recomendada para ambientes com alta densidade de redes vizinhas por possuir mais canais disponíveis."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. É o contrário: a frequência de 2.4 GHz tem maior alcance e penetração em obstáculos.",
      "Incorreta. A frequência de 2.4 GHz é a mais congestionada e sofre muita interferência de outros eletrônicos.",
      "Correta. A faixa de 5 GHz permite maior largura de banda (velocidade), mas o sinal degrada-se mais rapidamente com a distância.",
      "Incorreta. O padrão 802.11ac (Wi-Fi 5) opera especificamente na faixa de 5 GHz.",
      "Incorreta. A faixa de 2.4 GHz possui poucos canais que não se sobrepõem, sendo mais propensa a interferências em locais densos."
    ],
    "generalExplanation": "Existe uma relação inversa entre frequência e alcance: frequências maiores (5 GHz) transportam mais dados (velocidade), mas sofrem mais atenuação com obstáculos (alcance).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_46",
    "text": "A tecnologia de quinta geração de redes móveis (5G) não se limita apenas ao aumento da velocidade de download. Ela foi projetada sobre três pilares fundamentais para atender a diferentes demandas. O pilar que foca na baixíssima latência, essencial para aplicações críticas como cirurgias remotas e carros autônomos, é conhecido como:",
    "options": [
      "A) eMBB (Enhanced Mobile Broadband)",
      "B) URLLC (Ultra-Reliable Low Latency Communications)",
      "C) mMTC (Massive Machine Type Communications)",
      "D) HSPA+ (High Speed Packet Access)",
      "E) LTE-A (Long Term Evolution Advanced)"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O eMBB foca em altas velocidades de transmissão e maior capacidade de dados.",
      "Correta. URLLC refere-se a comunicações ultra confiáveis e de baixa latência.",
      "Incorreta. O mMTC foca na conexão massiva de dispositivos, sendo o pilar para a Internet das Coisas (IoT).",
      "Incorreta. HSPA+ é uma tecnologia relacionada à evolução do 3G.",
      "Incorreta. LTE-A é uma evolução do 4G, não um pilar específico do 5G."
    ],
    "generalExplanation": "O URLLC é o pilar do 5G voltado para missões críticas que exigem resposta quase instantânea da rede (baixa latência).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_47",
    "text": "No contexto de redes de computadores e tecnologias de acesso, o termo 'Latência' (frequentemente medido pelo comando 'ping') refere-se a:",
    "options": [
      "A) A quantidade total de dados que podem ser transferidos por segundo em um canal de comunicação.",
      "B) A diferença entre a velocidade contratada junto ao provedor e a velocidade real entregue ao usuário.",
      "C) O tempo de atraso decorrido entre o envio de uma requisição e o recebimento da resposta correspondente.",
      "D) A capacidade de um roteador de gerenciar múltiplos dispositivos conectados simultaneamente via Wi-Fi.",
      "E) O processo de conversão de sinais analógicos em digitais realizado pelo modem."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Esta é a definição de largura de banda ou throughput.",
      "Incorreta. Isso seria uma métrica de conformidade de serviço, não latência.",
      "Correta. A latência mede o atraso na comunicação, sendo expressa geralmente em milissegundos (ms).",
      "Incorreta. Isso refere-se à capacidade de processamento ou tecnologias como MIMO, não à latência em si.",
      "Incorreta. Este é o conceito de modulação/demodulação realizado pelo modem."
    ],
    "generalExplanation": "Latência é o tempo de resposta da rede. Em jogos online ou chamadas de vídeo, uma latência baixa é fundamental para evitar 'lags'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_48",
    "text": "Ao configurar um roteador dual-band, um técnico deve escolher entre as frequências de 2.4 GHz e 5 GHz. Sobre as características dessas bandas, é correto afirmar que:",
    "options": [
      "A) A banda de 5 GHz possui maior alcance e atravessa melhor obstáculos físicos que a de 2.4 GHz.",
      "B) A banda de 2.4 GHz é menos suscetível a interferências de dispositivos como micro-ondas e Bluetooth.",
      "C) A banda de 5 GHz oferece velocidades de transmissão superiores, porém possui menor alcance efetivo.",
      "D) A banda de 2.4 GHz disponibiliza mais canais que não se sobrepõem em comparação à banda de 5 GHz.",
      "E) Ambas as bandas possuem o mesmo desempenho em ambientes com muitas paredes e barreiras físicas."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. É o oposto: a banda de 2.4 GHz tem maior alcance e melhor penetração em obstáculos.",
      "Incorreta. A banda de 2.4 GHz é altamente congestionada por diversos dispositivos eletrônicos.",
      "Correta. A banda de 5 GHz prioriza velocidade e largura de banda em detrimento do alcance.",
      "Incorreta. A banda de 2.4 GHz possui apenas 3 canais que não se sobrepõem (1, 6 e 11), enquanto a de 5 GHz possui dezenas.",
      "Incorreta. O desempenho é distinto; a 2.4 GHz se comporta melhor em ambientes com muitos obstáculos."
    ],
    "generalExplanation": "Frequências mais altas (5 GHz) permitem maiores taxas de dados, mas sofrem maior atenuação ao encontrar obstáculos, resultando em menor alcance.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_49",
    "text": "O padrão IEEE 802.11ac, conhecido como Wi-Fi 5, trouxe avanços significativos em relação ao seu antecessor. Uma característica exclusiva deste padrão é que ele opera:",
    "options": [
      "A) Apenas na banda de 2.4 GHz.",
      "B) Apenas na banda de 5 GHz.",
      "C) Simultaneamente nas bandas de 2.4 GHz e 5 GHz.",
      "D) Na banda de 6 GHz exclusivamente.",
      "E) Em frequências de rádio amador abaixo de 1 GHz."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O 802.11ac não opera em 2.4 GHz.",
      "Correta. O padrão 802.11ac (Wi-Fi 5) utiliza apenas a frequência de 5 GHz.",
      "Incorreta. Embora existam roteadores 'dual-band', a parte do padrão 802.11ac funciona apenas em 5 GHz; a banda de 2.4 GHz nesses aparelhos geralmente usa o padrão 802.11n.",
      "Incorreta. A banda de 6 GHz é introduzida no Wi-Fi 6E.",
      "Incorreta. O padrão opera em micro-ondas (frequências altas), não em frequências abaixo de 1 GHz."
    ],
    "generalExplanation": "Diferente do Wi-Fi 4 e do Wi-Fi 6, o padrão 802.11ac foi projetado para operar exclusivamente na banda de 5 GHz para maximizar a performance.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_50",
    "text": "As tecnologias MIMO (Multiple Input Multiple Output) e MU-MIMO (Multi-User MIMO) são fundamentais para o aumento da eficiência nas redes sem fio modernas. A principal diferença entre elas é que o MU-MIMO permite:",
    "options": [
      "A) O uso de apenas uma antena para transmitir e receber dados.",
      "B) A transmissão de dados para múltiplos dispositivos simultaneamente.",
      "C) A redução da frequência de operação para aumentar o alcance.",
      "D) A eliminação completa da necessidade do protocolo CSMA/CA.",
      "E) O aumento da potência do sinal para atravessar paredes de concreto."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. MIMO pressupõe o uso de múltiplas antenas.",
      "Correta. O 'Multi-User' refere-se à capacidade de atender diversos dispositivos no mesmo intervalo de tempo.",
      "Incorreta. O MU-MIMO não altera a frequência de operação da rede.",
      "Incorreta. O CSMA/CA continua sendo necessário para a coordenação do meio.",
      "Incorreta. O MU-MIMO trata de eficiência de transmissão de dados, não de potência bruta de sinal."
    ],
    "generalExplanation": "O MU-MIMO permite que o ponto de acesso se comunique com vários clientes ao mesmo tempo, em vez de atender um por vez em uma fila rápida.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_51",
    "text": "Considere uma situação em que uma empresa deseja implementar uma rede Wi-Fi em um escritório com muitas divisórias de drywall e interferência de redes vizinhas. Para garantir a melhor estabilidade de conexão em pontos mais distantes do roteador, o técnico deve priorizar:",
    "options": [
      "A) A banda de 5 GHz, devido à sua maior velocidade teórica.",
      "B) O padrão 802.11ac, por ser focado exclusivamente em 5 GHz.",
      "C) A banda de 2.4 GHz, devido à sua melhor capacidade de propagação e contorno de obstáculos.",
      "D) A desativação do protocolo CSMA/CA para acelerar a rede.",
      "E) O uso de canais sobrepostos para aumentar a largura de banda disponível."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. A velocidade de 5 GHz cai drasticamente com a distância e obstáculos.",
      "Incorreta. O 802.11ac (5 GHz) teria dificuldades de alcance nesse cenário específico.",
      "Correta. A frequência menor (2.4 GHz) tem maior comprimento de onda, facilitando a ultrapassagem de obstáculos físicos.",
      "Incorreta. O CSMA/CA é essencial; desativá-lo (se fosse possível) causaria o colapso da rede por colisões.",
      "Incorreta. Canais sobrepostos causam interferência e degradam o desempenho da rede."
    ],
    "generalExplanation": "Em cenários com obstáculos e necessidade de alcance, a banda de 2.4 GHz é superior à de 5 GHz, apesar de ser mais lenta.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_52",
    "text": "Um usuário viaja para uma região rural sem cobertura de sinal de celular (sem dados móveis). Ele havia baixado previamente o mapa offline daquela região. Durante o trajeto, ele percebe que sua localização exata ainda é exibida no mapa. Isso ocorre porque:",
    "options": [
      "A) O Google Maps utiliza ondas de rádio FM para triangular a posição do usuário.",
      "B) O chip GPS do dispositivo recebe sinais diretamente de satélites, operando independentemente da internet.",
      "C) O mapa offline contém um algoritmo que prevê a posição do carro com base na última velocidade registrada.",
      "D) O dispositivo utiliza o Bluetooth de outros veículos próximos para determinar a localização.",
      "E) A localização só é possível porque o mapa offline simula um sinal de rede virtual."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O sistema de posicionamento global não utiliza frequências de rádio FM para localização civil comum em smartphones.",
      "Correta. O funcionamento do GPS é independente da conexão de dados; o mapa offline apenas fornece o 'fundo' visual e a base de dados para que as coordenadas do GPS façam sentido ao usuário.",
      "Incorreta. O GPS fornece a localização real em tempo real, não uma previsão baseada em velocidade anterior.",
      "Incorreta. Embora exista o 'Bluetooth Scanning' para auxiliar a localização em ambientes fechados, a localização principal em áreas abertas é via satélite GPS.",
      "Incorreta. Não existe o conceito de 'sinal de rede virtual' para fins de localização geográfica no contexto de mapas offline."
    ],
    "generalExplanation": "O GPS (Global Positioning System) é um hardware independente da rede de dados celular. Ele se comunica diretamente com satélites para obter coordenadas geográficas.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_53",
    "text": "No que diz respeito às limitações de dados dinâmicos na navegação offline do Google Maps, assinale a alternativa que apresenta uma funcionalidade que fica INDISPONÍVEL quando não há conexão com a internet.",
    "options": [
      "A) Visualização de nomes de ruas e avenidas.",
      "B) Busca por estabelecimentos comerciais pelo nome (ex: 'Farmácia X').",
      "C) Informações de trânsito em tempo real e congestionamentos.",
      "D) Instruções de voz para conversões à esquerda ou direita.",
      "E) Cálculo de rota para um endereço específico dentro da área baixada."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Esta informação é estática e faz parte do pacote baixado, portanto está disponível (não é o gabarito).",
      "Incorreta. Informações básicas de POIs (Pontos de Interesse) são baixadas no pacote offline, permitindo a busca (não é o gabarito).",
      "Correta. O trânsito em tempo real é uma funcionalidade dinâmica e é desativada no modo offline, sendo este o gabarito da questão.",
      "Incorreta. A navegação curva a curva com voz funciona offline para o modal carro (não é o gabarito).",
      "Incorreta. O cálculo de rotas é feito localmente com base na malha viária baixada (não é o gabarito)."
    ],
    "generalExplanation": "Dados de trânsito são dinâmicos e exigem comunicação constante com os servidores do Google para serem atualizados, o que é impossível sem internet.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_54",
    "text": "Considere a seguinte afirmação: 'O Google Maps offline é uma ferramenta estática que, após o download, não sofre alterações até que uma nova conexão seja estabelecida'. Com base nos conceitos de manutenção de mapas offline, como o aplicativo garante que as informações não fiquem obsoletas?",
    "options": [
      "A) Através de atualizações automáticas realizadas preferencialmente quando o dispositivo está conectado ao Wi-Fi.",
      "B) Através do download de micro-pacotes de dados via SMS silencioso enviado pelo Google.",
      "C) O mapa offline nunca fica obsoleto, pois as ruas de uma cidade não mudam após o mapeamento inicial.",
      "D) O usuário é obrigado a excluir o mapa antigo e baixar um novo manualmente a cada 30 dias.",
      "E) O aplicativo utiliza inteligência artificial local para prever mudanças em nomes de ruas sem precisar de internet."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Esta é a mecânica padrão de manutenção do cache de mapas offline para evitar a expiração dos dados.",
      "Incorreta. Não existe atualização de mapas via SMS; o volume de dados seria incompatível com essa tecnologia.",
      "Incorreta. Cidades sofrem alterações constantes (novas ruas, mudanças de sentido, fechamento de estabelecimentos), tornando a atualização necessária.",
      "Incorreta. Embora o usuário possa fazer manualmente, o aplicativo possui mecanismos de atualização automática.",
      "Incorreta. Mudanças cadastrais (nomes de ruas, novos prédios) exigem sincronização com a base de dados oficial do Google, não sendo previsíveis por IA local."
    ],
    "generalExplanation": "O Google Maps tenta manter os mapas offline atualizados automaticamente em segundo plano quando detecta uma conexão Wi-Fi estável.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_55",
    "text": "A quinta geração de redes móveis (5G) introduz melhorias significativas em relação às anteriores. Entre os principais diferenciais técnicos que possibilitam aplicações como cirurgias remotas e controle de veículos autônomos, destaca-se:",
    "options": [
      "A) A substituição completa do Protocolo IP por protocolos analógicos de baixa interferência.",
      "B) A redução drástica da latência para níveis inferiores a 1 milissegundo.",
      "C) O aumento da cobertura geográfica em áreas rurais utilizando exclusivamente ondas curtas.",
      "D) A limitação do número de dispositivos conectados para garantir a estabilidade da voz.",
      "E) O uso exclusivo de frequências abaixo de 1GHz para evitar o fatiamento da rede."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O 5G continua utilizando redes de pacotes digitais; não há retorno ao analógico.",
      "Correta. A latência ultra-baixa (inferior a 1ms) é o que permite aplicações de tempo real crítico, como carros autônomos.",
      "Incorreta. O 5G utiliza diversas frequências, incluindo ondas milimétricas (altas frequências), que possuem menor alcance geográfico que as ondas curtas.",
      "Incorreta. Pelo contrário, o 5G aumenta a densidade para até 1 milhão de dispositivos por km².",
      "Incorreta. O 5G utiliza frequências variadas, inclusive acima de 6GHz (ondas milimétricas), e o fatiamento de rede (Network Slicing) é uma característica desejada, não evitada."
    ],
    "generalExplanation": "A baixíssima latência (tempo de resposta) é o requisito fundamental para missões críticas onde o atraso na comunicação deve ser imperceptível.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_56",
    "text": "Sobre a tecnologia de 'Network Slicing' (Fatiamento de Rede), presente nas especificações do 5G, assinale a alternativa correta:",
    "options": [
      "A) Trata-se de uma técnica física de corte de cabos de fibra óptica para aumentar a largura de banda.",
      "B) É a capacidade de dividir a rede física em múltiplas redes virtuais otimizadas para diferentes tipos de uso.",
      "C) Refere-se à fragmentação de pacotes de dados para que possam trafegar em redes 3G legadas.",
      "D) É um método de segurança que impede que dispositivos IoT se conectem à rede principal.",
      "E) Define a separação obrigatória entre o tráfego de voz e o tráfego de mensagens SMS."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O fatiamento é lógico/virtual, não físico nos cabos.",
      "Correta. Esta tecnologia permite criar 'fatias' específicas para IoT, streaming ou missões críticas na mesma infraestrutura.",
      "Incorreta. O conceito não se refere à fragmentação de pacotes para compatibilidade com gerações anteriores.",
      "Incorreta. O Network Slicing facilita a conexão de dispositivos IoT ao criar fatias otimizadas para eles, em vez de bloqueá-los.",
      "Incorreta. O conceito é muito mais amplo que a simples separação de voz e SMS, envolvendo parâmetros de banda, latência e disponibilidade."
    ],
    "generalExplanation": "O Network Slicing permite que uma única infraestrutura física suporte diversas redes lógicas com características de desempenho distintas.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_57",
    "text": "Ao comparar as tecnologias 4G e 5G, um administrador de rede deve considerar que:",
    "options": [
      "A) O 4G LTE não é baseado em Protocolo IP, enquanto o 5G é a primeira geração a utilizá-lo.",
      "B) A latência típica do 4G é de aproximadamente 50 milissegundos, enquanto a do 5G pode ser inferior a 1 milissegundo.",
      "C) O 4G é voltado para a Internet das Coisas (IoT) massiva, enquanto o 5G foca apenas em smartphones de usuários finais.",
      "D) A velocidade máxima teórica do 4G é superior à do 5G em ambientes urbanos densos.",
      "E) O 5G utiliza a tecnologia HSPA+ como seu principal padrão de interface de rádio."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O 4G LTE já é uma rede 'All-IP' (totalmente baseada em IP).",
      "Correta. A latência é significativamente menor no 5G, permitindo comunicações em tempo real.",
      "Incorreta. É o contrário: o 5G é que possui foco em conectividade total (IoT), enquanto o 4G foca em banda larga para pessoas.",
      "Incorreta. O 5G pode ser até 100 vezes mais rápido que o 4G.",
      "Incorreta. O padrão do 5G é o 5G NR; o HSPA+ pertence à evolução do 3G."
    ],
    "generalExplanation": "A redução da latência de ~50ms (4G) para <1ms (5G) é uma das mudanças mais significativas entre as gerações.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_58",
    "text": "Em relação à densidade de dispositivos conectados, qual é a meta de suporte da tecnologia 5G por quilômetro quadrado, visando atender à Internet das Coisas (IoT)?",
    "options": [
      "A) Até 1.000 dispositivos.",
      "B) Até 10.000 dispositivos.",
      "C) Até 100.000 dispositivos.",
      "D) Até 1.000.000 de dispositivos.",
      "E) Até 10.000.000 de dispositivos."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Este valor é muito baixo e já era superado por tecnologias anteriores.",
      "Incorreta. Valor abaixo da especificação do 5G para IoT massiva.",
      "Incorreta. Embora alto, o objetivo do 5G é dez vezes superior a este valor.",
      "Correta. A especificação técnica do 5G prevê o suporte de 1 milhão de conexões por quilômetro quadrado.",
      "Incorreta. Valor acima das especificações atuais de mercado para a tecnologia 5G."
    ],
    "generalExplanation": "O 5G foi projetado para suportar a conectividade massiva, com capacidade para até 1 milhão de dispositivos por km².",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_59",
    "text": "Sobre os padrões de redes locais sem fio (WLAN) definidos pelo IEEE 802.11, analise as afirmações abaixo:\nI. O padrão 802.11n introduziu a tecnologia MIMO, permitindo o uso de múltiplas antenas para aumentar a velocidade.\nII. O padrão 802.11ac opera tanto na frequência de 2.4 GHz quanto na de 5 GHz de forma nativa.\nIII. O padrão 802.11ax, também conhecido como Wi-Fi 6, foca na eficiência em ambientes com alta densidade de dispositivos.\nEstá(ão) correta(s):",
    "options": [
      "A) Apenas I.",
      "B) Apenas II.",
      "C) Apenas I e III.",
      "D) Apenas II e III.",
      "E) I, II e III."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. A afirmação III também está correta.",
      "Incorreta. A afirmação II é o erro da questão, pois o 802.11ac é exclusivo de 5 GHz.",
      "Correta. I (MIMO no 802.11n) e III (Wi-Fi 6 e eficiência/IoT) são verdadeiras.",
      "Incorreta. A afirmação II está errada.",
      "Incorreta. A afirmação II invalida esta alternativa."
    ],
    "generalExplanation": "As afirmações I e III estão tecnicamente precisas. A afirmação II está incorreta pois o 802.11ac opera apenas em 5 GHz.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_60",
    "text": "Um usuário contratou um plano de internet de banda larga com velocidade de 400 Mbps (Megabits por segundo). Ao realizar o download de um arquivo de 500 MB (MegaBytes), considerando que a conexão esteja operando em sua capacidade máxima e sem perdas, o tempo teórico aproximado para a conclusão do download será de:",
    "options": [
      "A) 1,25 segundo",
      "B) 8 segundos",
      "C) 10 segundos",
      "D) 40 segundos",
      "E) 80 segundos"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Este valor seria obtido se a velocidade fosse 400 MB/s, confundindo bits com Bytes.",
      "Incorreta. Valor incorreto decorrente de erro de cálculo na conversão.",
      "Correta. 500 MegaBytes * 8 = 4000 Megabits. 4000 Megabits / 400 Megabits por segundo = 10 segundos.",
      "Incorreta. Valor incorreto decorrente de erro de cálculo.",
      "Incorreta. Valor incorreto decorrente de erro de cálculo."
    ],
    "generalExplanation": "Para resolver, deve-se converter Bytes para bits ou vice-versa. 500 MB = 4000 Mbits (500 * 8). Dividindo 4000 Mbits pela velocidade de 400 Mbps, obtemos 10 segundos.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_61",
    "text": "A norma ISO/IEC 27002 estabelece diretrizes para a gestão de registros de eventos. De acordo com as boas práticas dessa norma e o conteúdo técnico sobre logs, é correto afirmar que:",
    "options": [
      "A) Apenas eventos de erro devem ser registrados, visando economizar espaço de armazenamento em disco.",
      "B) As atividades de usuários comuns devem ser registradas, mas as ações de administradores de sistema são isentas de log para preservar a privacidade.",
      "C) Os logs de privilégios elevados (administradores e operadores) devem ser registrados e protegidos com rigor adicional.",
      "D) A integridade dos logs é garantida automaticamente pelo sistema operacional, dispensando o uso de servidores remotos.",
      "E) O timestamp (marca temporal) é um elemento opcional nos logs, sendo necessário apenas em sistemas financeiros."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Devem ser registrados diversos níveis de severidade (Informação, Aviso, Crítico), não apenas erros.",
      "Incorreta. As ações de administradores são as mais críticas e devem obrigatoriamente ser registradas.",
      "Correta. Devido ao alto risco associado a contas privilegiadas, seus logs são essenciais para a segurança e auditoria.",
      "Incorreta. O sistema operacional local pode ser comprometido; por isso, a norma sugere proteção contra adulteração, muitas vezes via servidores remotos.",
      "Incorreta. O timestamp é um elemento obrigatório e essencial para a cronologia e validade técnica de qualquer log."
    ],
    "generalExplanation": "A ISO/IEC 27002 destaca que as atividades de quem possui maior poder no sistema (administradores e operadores) devem ser monitoradas de perto e protegidas com rigor adicional para evitar abusos de poder ou ocultação de falhas.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções de Conectividade: Wi-Fi, 4G e Operação online/offline",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_62",
    "text": "O padrão IEEE 802.11ax (Wi-Fi 6) introduziu a tecnologia OFDMA (Orthogonal Frequency Division Multiple Access). Qual é o principal benefício desta tecnologia em ambientes com alta densidade de usuários?",
    "options": [
      "A) Aumentar a distância máxima de transmissão para até 1 quilômetro.",
      "B) Permitir que um único canal seja subdividido para carregar dados de diferentes usuários simultaneamente, reduzindo a latência.",
      "C) Criptografar os dados em nível físico para impedir ataques de interceptação.",
      "D) Alternar automaticamente entre as frequências de 2.4 GHz e 5 GHz sem interrupção da conexão.",
      "E) Desativar o rádio de dispositivos inativos para economizar energia do roteador."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O OFDMA não foca em aumentar o alcance geográfico, mas sim a eficiência espectral.",
      "Correta. Esta é a definição técnica da vantagem do OFDMA no Wi-Fi 6, focando em eficiência e redução de latência.",
      "Incorreta. A criptografia é tratada por protocolos como WPA3, não pelo OFDMA.",
      "Incorreta. A alternância de bandas é uma função de gerenciamento de rede (Band Steering), não do OFDMA.",
      "Incorreta. A economia de energia é tratada por outra função do Wi-Fi 6 chamada Target Wake Time (TWT)."
    ],
    "generalExplanation": "O OFDMA divide o canal em subcanais (Resource Units), permitindo que o roteador envie pequenos pacotes para vários dispositivos em uma única transmissão, otimizando o uso do espectro.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções de Conectividade: Wi-Fi, 4G e Operação online/offline",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_63",
    "text": "Sobre a evolução dos padrões IEEE 802.11, analise as afirmações abaixo:\nI. O padrão 802.11n foi o primeiro a introduzir a tecnologia MIMO.\nII. O padrão 802.11ax opera tanto em 2.4 GHz quanto em 5 GHz.\nIII. O Beamforming é uma tecnologia que direciona o sinal para o dispositivo cliente, melhorando a recepção.\nEstá(ão) correta(s):",
    "options": [
      "A) Apenas I.",
      "B) Apenas II.",
      "C) Apenas I e III.",
      "D) Apenas II e III.",
      "E) I, II e III."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. As afirmações II e III também estão corretas.",
      "Incorreta. As afirmações I e III também estão corretas.",
      "Incorreta. A afirmação II também está correta.",
      "Incorreta. A afirmação I também está correta.",
      "Correta. I está correta (802.11n introduziu MIMO); II está correta (802.11ax é dual-band); III está correta (Beamforming foca o sinal no cliente)."
    ],
    "generalExplanation": "Todas as afirmações são verdadeiras de acordo com as especificações técnicas dos padrões Wi-Fi 4, 5 e 6.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções de Conectividade: Wi-Fi, 4G e Operação online/offline",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_64",
    "text": "Um analista de sistemas precisa planejar uma expedição em uma área remota e decide utilizar o Google Maps Offline. Ele precisa de acesso a imagens de satélite de alta resolução e ao Street View para identificar trilhas e fachadas de imóveis rurais. Considerando o funcionamento técnico do download de mapas offline, é correto afirmar que:",
    "options": [
      "A) O Street View é baixado automaticamente junto com o mapa offline, mas as imagens de satélite exigem um download separado.",
      "B) Tanto o Street View quanto as imagens de satélite estão disponíveis offline, desde que o usuário selecione a opção 'Alta Qualidade' no download.",
      "C) As imagens de satélite e o Street View não estão disponíveis no modo offline devido ao grande volume de dados que essas mídias representam.",
      "D) Apenas as imagens de satélite são baixadas, pois são essenciais para a navegação GPS em áreas rurais sem estradas pavimentadas.",
      "E) O Street View funciona offline apenas se o usuário tiver navegado previamente pela rua desejada no modo online (cache de visualização)."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O Street View não é incluído em downloads de mapas offline.",
      "Incorreta. Não há opção de incluir essas camadas visuais pesadas no recurso de mapas offline padrão.",
      "Correta. O modo offline restringe-se à malha viária e dados básicos de POIs, excluindo camadas de imagem pesadas como Satélite e Street View.",
      "Incorreta. Imagens de satélite não são baixadas no recurso de mapas offline.",
      "Incorreta. Embora o cache do navegador possa guardar fragmentos, isso não faz parte da funcionalidade oficial de 'Mapas Offline' e não é confiável para navegação planejada."
    ],
    "generalExplanation": "O download offline foca em dados vetoriais (linhas, pontos e textos) que são leves. Imagens (satélite e 360º do Street View) são pesadas demais para o armazenamento móvel padrão em larga escala.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções de Conectividade: Wi-Fi, 4G e Operação online/offline",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_65",
    "text": "No contexto de busca e recuperação de informações (Information Retrieval) dentro do Google Maps Offline, se um usuário pesquisar por um novo restaurante que foi inaugurado e cadastrado na plataforma Google dois dias após o usuário ter realizado o download da área offline, qual será o resultado da busca sem internet?",
    "options": [
      "A) O restaurante aparecerá normalmente, pois o Google Maps utiliza uma rede mesh entre celulares próximos para atualizar o banco de dados.",
      "B) O restaurante não será encontrado, pois a busca offline é limitada ao banco de dados local baixado no momento do download.",
      "C) O restaurante aparecerá apenas como um ponto genérico, sem nome ou telefone, devido à falta de sincronização.",
      "D) O aplicativo forçará uma conexão de dados mínima apenas para validar a existência do novo estabelecimento.",
      "E) O restaurante será encontrado se o usuário souber o endereço exato, pois o sistema de numeração de prédios é atualizado via satélite."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O Google Maps não utiliza rede mesh (rede em malha entre dispositivos) para atualização de POIs offline.",
      "Correta. A base de dados offline é uma 'fotografia' do momento do download. Estabelecimentos novos só aparecem após uma nova atualização/sincronização online.",
      "Incorreta. Se o registro não está no banco de dados local, o sistema sequer reconhece a existência do ponto.",
      "Incorreta. O modo offline pressupõe a ausência de conexão; o app não 'força' conexão para buscas simples se o usuário estiver em modo offline.",
      "Incorreta. O sistema de numeração é parte da malha viária baixada; satélites GPS não transmitem dados de endereçamento ou novos estabelecimentos."
    ],
    "generalExplanation": "A busca offline é estritamente local. Se o dado não existia no pacote no momento do download (ou da última atualização), ele é invisível para o sistema offline.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções de Conectividade: Wi-Fi, 4G e Operação online/offline",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_66",
    "text": "No que tange à infraestrutura e capacidade das redes móveis de quinta geração (5G), analise as afirmações abaixo e selecione a alternativa que descreve corretamente uma de suas características técnicas avançadas:",
    "options": [
      "A) O 5G utiliza exclusivamente frequências baixas (abaixo de 700MHz) para garantir a latência zero em longas distâncias.",
      "B) A densidade de conexão do 5G é projetada para suportar até 100 mil dispositivos por quilômetro quadrado, o mesmo patamar do 4G LTE.",
      "C) O Massive MIMO permite que as antenas 5G utilizem múltiplos elementos de transmissão para atender diversos usuários simultaneamente com maior eficiência.",
      "D) Diferente do 4G, o 5G abandona o uso de ondas de rádio, passando a utilizar exclusivamente sinais infravermelhos para transmissão de dados.",
      "E) A tecnologia 5G NR (New Radio) é retrocompatível com antenas 1G analógicas, dispensando a troca de infraestrutura de torres."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O 5G utiliza também ondas milimétricas (altas frequências) para atingir altas velocidades, embora estas tenham menor alcance.",
      "Incorreta. O 5G suporta até 1 milhão de dispositivos por km², superando em muito a capacidade do 4G.",
      "Correta. O Massive MIMO utiliza grandes arranjos de antenas para direcionar o sinal e aumentar a capacidade de usuários simultâneos.",
      "Incorreta. O 5G continua sendo uma tecnologia baseada em ondas de rádio (espectro radioelétrico).",
      "Incorreta. O 5G exige nova infraestrutura (5G NR) e não possui qualquer compatibilidade com o sistema analógico 1G, que já está desativado."
    ],
    "generalExplanation": "O Massive MIMO (Multiple Input Multiple Output) é uma tecnologia chave do 5G para aumentar a capacidade e a eficiência espectral.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções de Conectividade: Wi-Fi, 4G e Operação online/offline",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_67",
    "text": "Determinada banca examinadora apresenta a seguinte afirmação: 'O 5G é uma evolução incremental do 4G LTE, utilizando os mesmos protocolos de acesso ao meio e as mesmas faixas de frequência, sem necessidade de novas tecnologias de antena'. Esta afirmação está:",
    "options": [
      "A) Correta, pois o 5G é apenas um nome comercial para o LTE Advanced Pro.",
      "B) Incorreta, pois o 5G introduz o 5G NR (New Radio) e utiliza novas tecnologias como Beamforming e Massive MIMO.",
      "C) Correta, visto que a única mudança real do 5G é o aumento da potência das torres de transmissão existentes.",
      "D) Incorreta, pois o 5G abandona o uso de torres de transmissão, utilizando apenas satélites de baixa órbita.",
      "E) Incorreta, pois o 5G é uma tecnologia analógica que visa reduzir a interferência digital das redes 4G."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O 5G NR é um novo padrão, diferente do LTE Advanced Pro (que ainda é 4G).",
      "Correta. Esta é a descrição técnica precisa da genealogia do 5G, que introduz inovações disruptivas como o Beamforming e o Massive MIMO.",
      "Incorreta. O 5G envolve mudanças profundas na arquitetura de rede e no processamento de sinais, não apenas potência.",
      "Incorreta. O 5G ainda depende fortemente de infraestrutura terrestre (estações rádio-base).",
      "Incorreta. O 5G é puramente digital."
    ],
    "generalExplanation": "O 5G não é apenas incremental; ele exige novos padrões de rádio (NR) e tecnologias avançadas de antena para gerenciar o sinal de forma eficiente.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções de Conectividade: Wi-Fi, 4G e Operação online/offline",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_68",
    "text": "No Microsoft Excel, a utilização de operadores de referência é fundamental para a construção de fórmulas eficazes. Ao redigir a função =SOMA(B2:B5), o usuário está solicitando que o sistema realize:",
    "options": [
      "A) A soma exclusiva das células B2 e B5, ignorando as células intermediárias.",
      "B) A soma de todas as células compreendidas no intervalo entre B2 e B5, inclusive.",
      "C) A soma da célula B2 multiplicada pelo valor constante 5.",
      "D) A contagem de quantas células no intervalo B2 até B5 possuem valores numéricos.",
      "E) A média aritmética dos valores contidos nas células B2, B3, B4 e B5."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Esta seria a função do ponto e vírgula (;), que é o operador de união.",
      "Correta. O operador ':' define um intervalo contínuo da primeira à última célula mencionada.",
      "Incorreta. Não há operador de multiplicação (*) ou lógica que suporte essa interpretação.",
      "Incorreta. Essa seria a função CONT.NÚM, não a SOMA.",
      "Incorreta. A função SOMA totaliza os valores; a média aritmética é realizada pela função MÉDIA."
    ],
    "generalExplanation": "O operador de dois pontos (:) é o operador de intervalo, que significa 'até'. Portanto, B2:B5 abrange B2, B3, B4 e B5.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Planilhas Eletrônicas: Fórmulas Básicas (Soma, Média, Cont.se) e Gráficos Simples",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_69",
    "text": "Um usuário deseja contar quantas vezes a palavra 'Aprovado' aparece no intervalo de células C1 até C50 de uma planilha. Assinale a alternativa que apresenta a sintaxe correta da função a ser utilizada:",
    "options": [
      "A) =CONTAR(C1:C50; Aprovado)",
      "B) =CONT.SE(C1:C50; Aprovado)",
      "C) =CONT.SE(C1:C50; \"Aprovado\")",
      "D) =SOMA.SE(C1:C50; \"Aprovado\")",
      "E) =CONTAR.SE(C1-C50; \"Aprovado\")"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. A função CONTAR (ou CONT.NÚM) conta números, e falta o uso de aspas.",
      "Incorreta. Faltam as aspas duplas no critério de texto 'Aprovado'.",
      "Correta. Segue a sintaxe oficial: =CONT.SE(intervalo; \"critério\").",
      "Incorreta. SOMA.SE somaria valores baseados em um critério, não contaria as ocorrências.",
      "Incorreta. O nome da função está incorreto e o separador de intervalo deve ser ':' e não '-'."
    ],
    "generalExplanation": "A função CONT.SE exige dois argumentos: o intervalo e o critério. Quando o critério é um texto, ele deve obrigatoriamente estar entre aspas duplas.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Planilhas Eletrônicas: Fórmulas Básicas (Soma, Média, Cont.se) e Gráficos Simples",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_70",
    "text": "No Microsoft Excel, um usuário deseja criar uma representação visual que demonstre a evolução das vendas de uma empresa ao longo dos doze meses do ano anterior. De acordo com as boas práticas de visualização de dados, o tipo de gráfico mais adequado para evidenciar tendências e alterações cronológicas é o de:",
    "options": [
      "A) Pizza",
      "B) Barras",
      "C) Linhas",
      "D) Dispersão",
      "E) Radar"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O gráfico de pizza é usado para mostrar proporções de um todo, não evolução temporal.",
      "Incorreta. Embora possa ser usado para comparação, o gráfico de barras não é o ideal para enfatizar a continuidade cronológica.",
      "Correta. Conforme as diretrizes de visualização, para demonstrar tempo, evolução contínua ou tendência, o gráfico de linhas é o mais indicado.",
      "Incorreta. O gráfico de dispersão é usado para mostrar a relação/correlação entre duas variáveis numéricas.",
      "Incorreta. O gráfico de radar compara valores agregados de várias séries de dados, não sendo o padrão para evolução temporal simples."
    ],
    "generalExplanation": "O gráfico de linhas é o mais indicado para representar dados contínuos ao longo do tempo, permitindo identificar facilmente tendências de alta, queda ou estabilidade.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Planilhas Eletrônicas: Fórmulas Básicas (Soma, Média, Cont.se) e Gráficos Simples",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_71",
    "text": "Durante a edição de uma planilha no Excel, um assistente administrativo seleciona um intervalo de dados e pressiona a tecla de atalho F11. O resultado dessa ação será:",
    "options": [
      "A) A exclusão imediata dos dados selecionados.",
      "B) A criação automática de um gráfico em uma nova folha de gráfico.",
      "C) A inserção de um gráfico de colunas como objeto na planilha ativa.",
      "D) A abertura da caixa de diálogo 'Formatar Células'.",
      "E) O salvamento automático do arquivo com um nome padrão."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. F11 não possui função de exclusão.",
      "Correta. F11 cria o gráfico em uma nova folha (aba separada), enquanto ALT + F1 cria na mesma planilha ativa.",
      "Incorreta. Esta é a função do atalho ALT + F1.",
      "Incorreta. O atalho para formatar células é CTRL + 1.",
      "Incorreta. O atalho para salvar é CTRL + B (em português) ou CTRL + S (em inglês)."
    ],
    "generalExplanation": "No Excel, a tecla F11 é o atalho padrão para gerar um gráfico instantâneo em uma aba (folha de gráfico) separada.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Planilhas Eletrônicas: Fórmulas Básicas (Soma, Média, Cont.se) e Gráficos Simples",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_72",
    "text": "No Microsoft Excel, o uso do símbolo de cifrão ($) em uma fórmula tem uma função específica no endereçamento de células. Assinale a alternativa que descreve corretamente essa função.",
    "options": [
      "A) Indicar que o valor contido na célula deve ser formatado obrigatoriamente como moeda (Real).",
      "B) Atuar como um operador aritmético de multiplicação para cálculos financeiros complexos.",
      "C) Fixar uma parte ou a totalidade da referência de uma célula, impedindo sua alteração durante a cópia da fórmula.",
      "D) Permitir que a fórmula seja executada apenas se a célula referenciada contiver valores numéricos.",
      "E) Indicar ao Excel que a célula referenciada pertence a uma planilha externa ao arquivo atual."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. A formatação de moeda é uma característica visual da célula, não controlada pelo cifrão dentro da fórmula.",
      "Incorreta. O operador de multiplicação no Excel é o asterisco (*).",
      "Correta. O cifrão trava a coluna, a linha ou ambas, dependendo de sua posição (referência absoluta ou mista).",
      "Incorreta. O cifrão não possui função de validação de dados ou condicional de tipo de conteúdo.",
      "Incorreta. Referências externas usam colchetes e pontos de exclamação, não o cifrão para essa finalidade específica."
    ],
    "generalExplanation": "O cifrão ($) funciona como uma 'âncora', criando referências absolutas ou mistas que não se alteram quando a fórmula é movida ou copiada.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Planilhas Eletrônicas: Fórmulas Básicas (Soma, Média, Cont.se) e Gráficos Simples",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_73",
    "text": "Durante a edição de uma fórmula no Excel, o usuário deseja alternar rapidamente entre referências relativas, absolutas e mistas (ex: de A1 para $A$1). Qual tecla de atalho deve ser utilizada para realizar esse ciclo de forma automática?",
    "options": [
      "A) F2",
      "B) F4",
      "C) F9",
      "D) Ctrl + $",
      "E) Alt + Enter"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. F2 é utilizado para entrar no modo de edição da célula.",
      "Correta. F4 é o atalho cíclico para alternar entre referências relativas, absolutas e mistas.",
      "Incorreta. F9 é utilizado para calcular fórmulas manualmente ou avaliar partes de uma fórmula no modo de edição.",
      "Incorreta. Não existe essa combinação padrão para alternar referências.",
      "Incorreta. Alt + Enter é utilizado para inserir uma quebra de linha dentro de uma mesma célula."
    ],
    "generalExplanation": "A tecla F4 é o atalho padrão no Excel para alternar entre os quatro estados de referência: relativa (A1), absoluta ($A$1), mista com linha travada (A$1) e mista com coluna travada ($A1).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Planilhas Eletrônicas: Fórmulas Básicas (Soma, Média, Cont.se) e Gráficos Simples",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_74",
    "text": "No Microsoft Excel, para que um conteúdo inserido em uma célula seja interpretado pelo software como uma fórmula ou função, e não como um texto simples, é obrigatória a utilização de um caractere específico no início da digitação. Assinale a alternativa que apresenta esse caractere.",
    "options": [
      "A) # (Cerquilha)",
      "B) @ (arroba)",
      "C) = (igual)",
      "D) + (mais)",
      "E) : (dois pontos)"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O caractere # é geralmente associado a mensagens de erro ou identificadores de tabelas, não iniciando fórmulas.",
      "Incorreta. Embora o @ fosse usado em softwares antigos (como o Lotus 1-2-3), no Excel moderno o padrão oficial de início é o sinal de igual.",
      "Correta. O sinal de igual (=) é o operador que avisa ao Excel que o conteúdo a seguir deve ser processado como um cálculo ou instrução lógica.",
      "Incorreta. Embora o Excel aceite o sinal de + para iniciar cálculos por compatibilidade histórica, o padrão técnico cobrado em concursos é o sinal de igual.",
      "Incorreta. O caractere : (dois pontos) é um operador de intervalo, utilizado para indicar 'até'."
    ],
    "generalExplanation": "De acordo com a 'Regra de Ouro' do Excel, toda e qualquer fórmula ou função deve começar obrigatoriamente com o sinal de igual (=).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Planilhas Eletrônicas: Fórmulas Básicas (Soma, Média, Cont.se) e Gráficos Simples",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_75",
    "text": "Um usuário deseja contar quantas células em um determinado intervalo possuem qualquer tipo de conteúdo preenchido, incluindo textos, números e mensagens de erro, ignorando apenas as células que estão completamente vazias. A função adequada para essa finalidade é:",
    "options": [
      "A) =CONT.NÚM()",
      "B) =CONT.VALORES()",
      "C) =SOMA()",
      "D) =CONTAR.VAZIO()",
      "E) =MÉDIA()"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A função CONT.NÚM conta apenas células que contêm números, datas ou horas.",
      "Correta. A função CONT.VALORES realiza uma contagem de preenchimento, incluindo absolutamente tudo o que não estiver vazio (textos, números, erros, lógicos).",
      "Incorreta. A função SOMA realiza a adição aritmética de valores numéricos, não a contagem de células preenchidas.",
      "Incorreta. A função CONTAR.VAZIO faz o oposto: conta apenas as células que não possuem conteúdo.",
      "Incorreta. A função MÉDIA calcula a média aritmética dos valores numéricos."
    ],
    "generalExplanation": "A função CONT.VALORES conta todas as células que não estão vazias, independentemente do tipo de dado (texto, número, erro, etc.).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Planilhas Eletrônicas: Fórmulas Básicas (Soma, Média, Cont.se) e Gráficos Simples",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_76",
    "text": "Considere uma planilha com os seguintes valores: A1=10, A2=0, A3=(vazio) e A4=20. Caso o usuário insira a fórmula =MÉDIA(A1:A4) na célula B1, o resultado obtido será:",
    "options": [
      "A) 7,5",
      "B) 10",
      "C) 15",
      "D) 30",
      "E) #DIV/0!"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Este resultado ocorreria se a célula vazia (A3) fosse computada como zero no divisor (30/4 = 7,5), mas o Excel desconsidera células vazias.",
      "Correta. A função MÉDIA calcula a soma dos valores numéricos (10 + 0 + 20 = 30) dividida pela contagem de células numéricas válidas (3 células: A1, A2 e A4). O valor zero conta normalmente no denominador: 30 / 3 = 10.",
      "Incorreta. Este resultado ocorreria se o valor zero (A2) também fosse ignorado (30/2 = 15), mas zeros são valores numéricos válidos e entram na contagem.",
      "Incorreta. Este é o valor da SOMA acumulada dos elementos, não da média aritmética.",
      "Incorreta. O erro #DIV/0! só ocorreria se todas as células do intervalo estivessem vazias ou sem nenhum valor numérico."
    ],
    "generalExplanation": "A função MÉDIA ignora células vazias, mas inclui o valor zero no cálculo do denominador. Assim, a soma é 10+0+20=30. O divisor será 3 (A1, A2 e A4). 30/3 = 10.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Planilhas Eletrônicas: Fórmulas Básicas (Soma, Média, Cont.se) e Gráficos Simples",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_77",
    "text": "Sobre as funções MÁXIMO e MÍNIMO no Microsoft Excel, analise as afirmativas abaixo:\nI. A função =MÁXIMO(A1:A10) retorna o maior valor numérico do intervalo.\nII. Se o intervalo contiver apenas textos, a função =MÍNIMO(A1:A10) retornará o erro #VALOR!.\nIII. Ambas as funções ignoram células vazias e valores lógicos dentro de um intervalo de referência.\nEstá(ão) correta(s):",
    "options": [
      "A) Apenas I.",
      "B) Apenas II.",
      "C) Apenas I e III.",
      "D) Apenas II e III.",
      "E) I, II e III."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. A afirmativa III também está correta.",
      "Incorreta. A afirmativa II é falsa; funções de agregação em intervalos ignoram textos.",
      "Correta. I define a função corretamente e III descreve o tratamento de dados não numéricos em intervalos.",
      "Incorreta. A afirmativa II está incorreta.",
      "Incorreta. A afirmativa II invalida esta opção."
    ],
    "generalExplanation": "As afirmativas I e III estão corretas conforme o comportamento padrão das funções de agregação. A II está incorreta porque, se não houver números, o resultado costuma ser 0, não necessariamente um erro #VALOR! em referências de intervalo.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Planilhas Eletrônicas: Fórmulas Básicas (Soma, Média, Cont.se) e Gráficos Simples",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_78",
    "text": "Uma instituição pública precisa elaborar um gráfico comparativo para apresentar o desempenho de 15 diferentes departamentos. Sabe-se que os nomes desses departamentos (rótulos de categoria) são extensos, o que dificulta a leitura no eixo horizontal. Nesse cenário, qual tipo de gráfico é tecnicamente preferível para garantir a legibilidade dos rótulos?",
    "options": [
      "A) Gráfico de Colunas Agrupadas",
      "B) Gráfico de Pizza 3D",
      "C) Gráfico de Áreas",
      "D) Gráfico de Barras",
      "E) Gráfico de Rosca"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. No gráfico de colunas, rótulos longos tendem a ficar inclinados ou sobrepostos no eixo horizontal.",
      "Incorreta. Gráficos de pizza não são adequados para comparar 15 categorias e não resolvem o problema de rótulos longos.",
      "Incorreta. O gráfico de áreas foca na magnitude da mudança no tempo, não na comparação de categorias com nomes extensos.",
      "Correta. O gráfico de barras (horizontal) é a escolha técnica para rótulos extensos, pois oferece mais espaço no eixo vertical.",
      "Incorreta. O gráfico de rosca foca em proporções, não em comparação direta de múltiplas categorias com nomes longos."
    ],
    "generalExplanation": "O gráfico de barras (horizontal) é preferível quando os rótulos das categorias são longos, pois oferece mais espaço linear para o texto no eixo vertical.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Planilhas Eletrônicas: Fórmulas Básicas (Soma, Média, Cont.se) e Gráficos Simples",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_79",
    "text": "Sobre as características técnicas dos gráficos de Pizza e Rosca no Microsoft Excel, assinale a alternativa correta:",
    "options": [
      "A) O gráfico de Pizza permite a visualização de até cinco séries de dados simultâneas.",
      "B) O gráfico de Rosca é limitado a apenas uma série de dados, assim como o de Pizza.",
      "C) Diferente do gráfico de Pizza, o gráfico de Rosca suporta múltiplas séries de dados, representadas por anéis concêntricos.",
      "D) Ambos os gráficos são ideais para representar valores negativos e nulos em uma série temporal.",
      "E) O gráfico de Pizza possui eixos X (horizontal) e Y (vertical) claramente definidos para a plotagem dos dados."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O gráfico de pizza suporta apenas UMA única série de dados.",
      "Incorreta. A vantagem da rosca é justamente suportar mais de uma série.",
      "Correta. Esta é a definição técnica que diferencia os dois tipos no Excel: a rosca comporta anéis concêntricos com múltiplas séries.",
      "Incorreta. Gráficos de proporção (pizza/rosca) não devem ser usados para valores negativos ou zero.",
      "Incorreta. Gráficos de pizza e rosca não possuem eixos cartesianos; eles utilizam fatias ou segmentos circulares."
    ],
    "generalExplanation": "A principal diferença técnica entre os dois é que a Rosca permite múltiplas séries (anéis), enquanto a Pizza é restrita a uma única série.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Planilhas Eletrônicas: Fórmulas Básicas (Soma, Média, Cont.se) e Gráficos Simples",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_80",
    "text": "Ao inserir um gráfico no Excel, o software disponibiliza guias contextuais específicas na Faixa de Opções para a personalização do objeto. Quais são essas guias?",
    "options": [
      "A) Desenhar e Revisão",
      "B) Design do Gráfico e Formatar",
      "C) Layout da Página e Dados",
      "D) Inserir e Exibir",
      "E) Análise de Dados e Estilo"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. São guias padrão permanentes, não contextuais de gráfico.",
      "Correta. Estas são as guias contextuais que aparecem na Faixa de Opções especificamente quando um gráfico está selecionado.",
      "Incorreta. São guias permanentes do Excel.",
      "Incorreta. 'Inserir' é onde se cria o gráfico, mas não é a guia contextual de edição.",
      "Incorreta. Esses nomes não correspondem às guias contextuais padrão do Excel para gráficos."
    ],
    "generalExplanation": "Quando um gráfico é selecionado, o Excel exibe as guias contextuais 'Design do Gráfico' e 'Formatar' para ajustes de layout, dados e estética.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Planilhas Eletrônicas: Fórmulas Básicas (Soma, Média, Cont.se) e Gráficos Simples",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_81",
    "text": "Considere que a célula C1 de uma planilha Excel contém a fórmula =A1+B1. Se o usuário copiar a célula C1 e colá-la na célula D2, qual será a fórmula resultante na célula de destino?",
    "options": [
      "A) =A1+B1",
      "B) =B1+C1",
      "C) =A2+B2",
      "D) =B2+C2",
      "E) =A1+B1"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Isso ocorreria apenas se a referência fosse absoluta ($A$1+$B$1).",
      "Incorreta. Apenas a coluna foi deslocada, ignorando o deslocamento de linha.",
      "Incorreta. Apenas a linha foi deslocada, ignorando o deslocamento de coluna.",
      "Correta. Reflete o deslocamento proporcional de uma coluna e uma linha (A1 vira B2 e B1 vira C2 -> =B2+C2).",
      "Incorreta. A fórmula original não possuía cifrões para se tornar absoluta."
    ],
    "generalExplanation": "A fórmula original utiliza referências relativas. Ao mover de C1 para D2, houve um deslocamento de +1 coluna (C para D) e +1 linha (1 para 2). Aplicando esse deslocamento: A vira B, 1 vira 2; B vira C, 1 vira 2. Resultado: =B2+C2.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Planilhas Eletrônicas: Fórmulas Básicas (Soma, Média, Cont.se) e Gráficos Simples",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_82",
    "text": "Um analista inseriu a fórmula =$A1+B$1 na célula C1. Ao arrastar essa fórmula pela alça de preenchimento para a célula D2, o resultado esperado na nova célula será:",
    "options": [
      "A) =$A1+B$1",
      "B) =$A2+C$1",
      "C) =B2+C2",
      "D) =$A2+$B2",
      "E) =B1+B$1"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Ignora os deslocamentos das partes relativas.",
      "Correta. Aplica corretamente o travamento de coluna na primeira parte ($A permanece A; linha 1 vira 2 -> $A2) e de linha na segunda (coluna B vira C; $1 permanece 1 -> C$1).",
      "Incorreta. Alterou a coluna A, que estava travada pelo cifrão ($A).",
      "Incorreta. Alterou a linha 1 da segunda referência, que estava travada pelo cifrão ($1).",
      "Incorreta. Inverteu a lógica de travamento e deslocamento."
    ],
    "generalExplanation": "Origem C1 -> Destino D2 (+1 coluna, +1 linha). Na referência $A1, a coluna está travada ($A), então permanece A; a linha está solta, então 1 vira 2 (=$A2). Na referência B$1, a coluna está solta, então B vira C; a linha está travada ($1), então permanece 1 (=C$1). Resultado: =$A2+C$1.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Planilhas Eletrônicas: Fórmulas Básicas (Soma, Média, Cont.se) e Gráficos Simples",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_83",
    "text": "No contexto de referências mistas, qual das alternativas abaixo descreve o comportamento da referência A$10 ao ser copiada da célula B1 para a célula C11?",
    "options": [
      "A) A coluna permanece A e a linha permanece 10.",
      "B) A coluna muda para B e a linha muda para 20.",
      "C) A coluna muda para B e a linha permanece 10.",
      "D) A coluna permanece A e a linha muda para 20.",
      "E) A referência torna-se inválida (#REF!) devido ao deslocamento excessivo."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. A coluna A não está travada por cifrão, portanto deve mudar.",
      "Incorreta. A linha 10 está travada pelo cifrão ($10), portanto não pode mudar.",
      "Correta. Apenas a parte solta (coluna) sofreu o deslocamento (+1 coluna -> B), enquanto a linha travada ($10) se mantém.",
      "Incorreta. Inverteu o que está travado e o que está solto.",
      "Incorreta. O deslocamento é perfeitamente possível dentro dos limites do Excel."
    ],
    "generalExplanation": "Na referência A$10, a coluna A é relativa e a linha 10 é absoluta (travada). De B1 para C11, há um deslocamento de +1 coluna e +10 linhas. A coluna A (solta) vira B. A linha 10 (travada) permanece 10. Resultado: B$10.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Planilhas Eletrônicas: Fórmulas Básicas (Soma, Média, Cont.se) e Gráficos Simples",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_84",
    "text": "Considere uma planilha do Excel com os seguintes valores: A1= 10; A2= (vazia); A3= 0; A4= 20. Caso o usuário insira a fórmula =MÉDIA(A1:A4) na célula B1, o resultado obtido será:",
    "options": [
      "A) 7,5",
      "B) 10",
      "C) 15",
      "D) 30",
      "E) #DIV/0!"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Este resultado ocorreria se a célula A2 fosse contada como zero (30/4= 7,5), mas células vazias são ignoradas pela função MÉDIA.",
      "Correta. Soma (30) dividida por 3 elementos válidos (A1, A3, A4) = 10.",
      "Incorreta. Este resultado ocorreria se tanto a célula vazia quanto o zero fossem ignorados (30/2= 15), mas o zero é um valor numérico válido e entra no cálculo.",
      "Incorreta. Este é o valor da soma dos elementos, não a média aritmética.",
      "Incorreta. O erro #DIV/0! ocorreria apenas se não houvesse nenhum número no intervalo para realizar a divisão."
    ],
    "generalExplanation": "A função MÉDIA ignora células vazias, mas inclui o valor zero no cálculo. Portanto, a soma é 10+0+20=30, e o divisor será 3 (A1, A3 e A4). 30/3 = 10.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Planilhas Eletrônicas: Fórmulas Básicas (Soma, Média, Cont.se) e Gráficos Simples",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_85",
    "text": "Em uma planilha Excel, as células possuem os seguintes conteúdos: B1= 50; B2= 'PROVA'; B3= 150. Ao aplicar a fórmula =SOMA(B1:B3), o Excel retornará o seguinte valor:",
    "options": [
      "A) #VALOR!",
      "B) 50",
      "C) 150",
      "D) 200",
      "E) 200PROVA"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. O erro #VALOR! ocorreria se tentássemos somar diretamente usando o operador matemático (ex: =B1+B2+B3), mas a função SOMA ignora textos em intervalos.",
      "Incorreta. Este valor ignora a célula B3.",
      "Incorreta. Este valor ignora a célula B1.",
      "Correta. A função ignora o texto 'PROVA' em B2 e soma 50 + 150 = 200.",
      "Incorreta. O Excel não realiza concatenação de texto com números dentro da função SOMA."
    ],
    "generalExplanation": "Quando um intervalo é passado como argumento para a função SOMA, qualquer célula contendo texto é simplesmente ignorada, e o cálculo prossegue com os valores numéricos restantes (50 + 150 = 200).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Planilhas Eletrônicas: Fórmulas Básicas (Soma, Média, Cont.se) e Gráficos Simples",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_86",
    "text": "Analise as duas fórmulas a seguir inseridas em uma planilha Excel:\n1. =SOMA(A1:A3)\n2. =SOMA(A1;A3)\nConsiderando que A1=10, A2=20 e A3=30, os resultados das fórmulas 1 e 2 são, respectivamente:",
    "options": [
      "A) 60 e 40",
      "B) 60 e 60",
      "C) 30 e 40",
      "D) 60 e 30",
      "E) 40 e 60"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A primeira soma o intervalo completo (60) e a segunda apenas as duas células isoladas (40).",
      "Incorreta. A segunda fórmula não soma o intervalo, apenas as células citadas.",
      "Incorreta. A primeira soma resulta em 60, não 30.",
      "Incorreta. A segunda soma resulta em 40, não 30.",
      "Incorreta. Os valores estão invertidos em relação à lógica dos operadores."
    ],
    "generalExplanation": "O operador ':' (dois pontos) indica um intervalo (de... até), somando A1, A2 e A3 (10+20+30=60). O operador ';' (ponto e vírgula) é um separador de argumentos (e), somando apenas A1 e A3 (10+30=40).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Planilhas Eletrônicas: Fórmulas Básicas (Soma, Média, Cont.se) e Gráficos Simples",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_87",
    "text": "Sobre a ordem de precedência dos operadores matemáticos e a execução de funções no Excel, assinale a afirmação correta:",
    "options": [
      "A) A adição e a subtração são executadas antes da multiplicação e divisão.",
      "B) O Excel resolve primeiro o que está fora dos parênteses para depois resolver o conteúdo interno das funções.",
      "C) A exponenciação possui precedência inferior à multiplicação.",
      "D) Os parênteses podem ser utilizados para alterar a ordem natural de precedência dos cálculos.",
      "E) As funções como SOMA e MÉDIA são sempre as últimas a serem calculadas em uma fórmula complexa."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Multiplicação e divisão são executadas antes da adição e subtração.",
      "Incorreta. O Excel resolve primeiro o que está dentro dos parênteses (argumentos das funções).",
      "Incorreta. A exponenciação (^) possui precedência superior à multiplicação.",
      "Correta. Esta é a função primordial dos parênteses em expressões matemáticas no Excel.",
      "Incorreta. As funções são processadas conforme sua posição na fórmula e os parênteses que as cercam, não havendo uma regra de serem 'as últimas'."
    ],
    "generalExplanation": "Assim como na matemática clássica (PEMDAS), os parênteses são o nível mais alto de precedência e servem para forçar o Excel a calcular primeiro o que está dentro deles.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Planilhas Eletrônicas: Fórmulas Básicas (Soma, Média, Cont.se) e Gráficos Simples",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_88",
    "text": "No Microsoft Excel, o comportamento das funções pode variar dependendo de como os argumentos são passados (referência de intervalo vs. argumentos diretos). Considere que a célula A1 contém o número 10 e a célula A2 contém o texto \"20\". Assinale a alternativa que apresenta o resultado correto para as fórmulas I e II, respectivamente:\nI. =SOMA(A1:A2)\nII. =SOMA(A1; \"20\")",
    "options": [
      "A) 30 e 30",
      "B) 10 e 30",
      "C) 10 e #VALOR!",
      "D) #VALOR! e 30",
      "E) 30 e #VALOR!"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Na fórmula I, o texto dentro do intervalo é ignorado.",
      "Correta. I ignora o texto no intervalo (10); II converte o texto literal em número (10+20=30).",
      "Incorreta. O Excel consegue converter o texto \"20\" em número quando passado diretamente.",
      "Incorreta. A fórmula I não gera erro, apenas ignora a célula A2.",
      "Incorreta. Inverte a lógica do comportamento de intervalos e argumentos diretos."
    ],
    "generalExplanation": "Em intervalos (A1:A2), o Excel ignora textos, resultando em 10. Em argumentos diretos (separados por ponto e vírgula), se o texto puder ser convertido em número, o Excel o faz. Assim, 10 + 20 = 30.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Planilhas Eletrônicas: Fórmulas Básicas (Soma, Média, Cont.se) e Gráficos Simples",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_89",
    "text": "Analise a seguinte fórmula inserida em uma célula de uma planilha Excel: =SOMA(A1;A3:A5;10;VERDADEIRO). Sabendo que A1=5, A3=2, A4=3 e A5=4, qual será o valor retornado?",
    "options": [
      "A) 14",
      "B) 24",
      "C) 25",
      "D) 15",
      "E) #VALOR!"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Este valor ignora a constante 10 e o valor lógico.",
      "Incorreta. Este valor ignora o valor lógico VERDADEIRO como sendo 1.",
      "Correta. O Excel soma referências, intervalos, números diretos e converte VERDADEIRO para 1 quando inserido diretamente.",
      "Incorreta. Cálculo aritmético equivocado.",
      "Incorreta. A função SOMA processa esses argumentos sem gerar erro de valor."
    ],
    "generalExplanation": "A soma será: A1 (5) + Intervalo A3:A5 (2+3+4=9) + Constante (10) + Valor Lógico direto (VERDADEIRO=1). Total: 5 + 9 + 10 + 1 = 25.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Planilhas Eletrônicas: Fórmulas Básicas (Soma, Média, Cont.se) e Gráficos Simples",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_90",
    "text": "Um analista de dados precisa verificar se existe uma correlação entre o investimento em propaganda (em Reais) e o volume de vendas (em unidades) de diversos produtos. Para identificar se há uma relação estatística entre essas duas variáveis numéricas independentes, o gráfico mais recomendado é o de:",
    "options": [
      "A) Colunas Empilhadas",
      "B) Área 100% Empilhada",
      "C) Dispersão (XY)",
      "D) Linhas com Marcadores",
      "E) Cascata"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Colunas empilhadas mostram a composição de categorias, não correlação entre variáveis numéricas.",
      "Incorreta. Foca na porcentagem da contribuição de cada valor ao longo do tempo.",
      "Correta. O gráfico de dispersão (XY) é usado para mostrar a relação entre dois conjuntos de valores numéricos em análises estatísticas.",
      "Incorreta. Embora mostre pontos, o gráfico de linhas pressupõe uma ordem (geralmente temporal) no eixo X, o que não é o caso de uma análise de correlação pura.",
      "Incorreta. O gráfico de cascata é usado para mostrar ganhos e perdas cumulativos."
    ],
    "generalExplanation": "O gráfico de dispersão (XY) é o único projetado especificamente para mostrar a relação entre dois conjuntos de valores numéricos, sendo fundamental para análises de correlação.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Planilhas Eletrônicas: Fórmulas Básicas (Soma, Média, Cont.se) e Gráficos Simples",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_91",
    "text": "Em uma planilha, a coluna A contém o faturamento mensal (variando entre R$ 100.000 e R$ 500.000) e a coluna B contém o índice de satisfação do cliente (variando entre 0 e 1). Ao tentar plotar ambos no mesmo gráfico de colunas, o índice de satisfação torna-se imperceptível devido à diferença de escala. Para resolver esse problema técnico no Excel, deve-se utilizar um:",
    "options": [
      "A) Gráfico de Pizza com subgráfico de barras.",
      "B) Gráfico Combinado com a utilização de um Eixo Secundário.",
      "C) Gráfico de Dispersão com linhas de grade logarítmicas.",
      "D) Gráfico de Barras com rótulos de dados centralizados.",
      "E) Gráfico de Áreas com preenchimento gradiente."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Gráficos de pizza não são adequados para comparar séries com escalas drasticamente diferentes.",
      "Correta. O eixo secundário resolve a disparidade de escalas, permitindo que ambas as séries sejam visualizadas com clareza em suas respectivas escalas.",
      "Incorreta. Gráficos de dispersão são voltados para correlação entre variáveis numéricas contínuas, não para este tipo de comparação sequencial.",
      "Incorreta. Rótulos centralizados não resolvem a imperceptibilidade gráfica causada pela escala do eixo.",
      "Incorreta. Gráficos de áreas também sofreriam com o achatamento da série de menor magnitude."
    ],
    "generalExplanation": "Quando há grande disparidade de escala entre duas séries de dados (ex: faturamento em centenas de milhares e índice de 0 a 1), o uso de um Gráfico Combinado associado a um Eixo Secundário permite plotar cada série em sua própria escala vertical.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Planilhas Eletrônicas: Fórmulas Básicas (Soma, Média, Cont.se) e Gráficos Simples",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_92",
    "text": "Considere os componentes de um gráfico no Excel. A área delimitada pelos eixos horizontal e vertical, que contém especificamente a representação visual dos dados (como as barras ou linhas), excluindo a legenda e o título do gráfico, é tecnicamente denominada:",
    "options": [
      "A) Área do Gráfico",
      "B) Área de Plotagem",
      "C) Parede do Gráfico",
      "D) Quadro de Dados",
      "E) Plano de Fundo da Série"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A Área do Gráfico engloba todo o objeto (incluindo títulos, legendas e plano de fundo geral).",
      "Correta. Define precisamente a região interna delimitada pelos eixos onde os dados são plotados.",
      "Incorreta. 'Parede' é um termo restrito a gráficos tridimensionais (3D).",
      "Incorreta. Nomenclatura inexistente na terminologia oficial de elementos de gráfico do Excel.",
      "Incorreta. Não é a denominação técnica do elemento delimitado pelos eixos."
    ],
    "generalExplanation": "A Área de Plotagem é a região interna do gráfico onde os dados são desenhados (barras, linhas, colunas), limitada pelos eixos. A Área do Gráfico engloba tudo, inclusive título e legenda.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Planilhas Eletrônicas: Fórmulas Básicas (Soma, Média, Cont.se) e Gráficos Simples",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_93",
    "text": "A célula B2 do Microsoft Excel contém a fórmula =$A1+B$2. Se essa fórmula for copiada para a célula D5, qual será a nova fórmula?",
    "options": [
      "A) =$A4+D$2",
      "B) =$A4+C$2",
      "C) =$C4+D$2",
      "D) =$A1+D$2",
      "E) =$A4+D$5"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Deslocamento de B2 para D5 (+2 colunas, +3 linhas): =$A1 vira =$A4 (coluna A fixa, linha 1+3=4) e B$2 vira D$2 (coluna B+2=D, linha 2 fixa).",
      "Incorreta. Na segunda referência, a coluna B deslocada em +2 colunas vira D, não C.",
      "Incorreta. Na primeira referência, a coluna A está travada com cifrão ($A), não mudando para C.",
      "Incorreta. Na primeira referência, a linha 1 é livre e deve acompanhar o deslocamento vertical de +3 linhas (virando 4).",
      "Incorreta. Na segunda referência, a linha 2 está travada com cifrão ($2) e não pode mudar para 5."
    ],
    "generalExplanation": "Deslocamento de B2 para D5 (+2 colunas, +3 linhas): =$A1 tem coluna fixa ($A) e linha livre (1+3=4) -> =$A4. B$2 tem coluna livre (B+2=D) e linha fixa ($2) -> D$2. Resultado final: =$A4+D$2.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Planilhas Eletrônicas: Fórmulas Básicas (Soma, Média, Cont.se) e Gráficos Simples",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_94",
    "text": "Para calcular o valor acumulado de vendas ao longo de um ano, um usuário deseja inserir uma fórmula na célula B2 e arrastá-la até a célula B13. A coluna A contém os valores mensais. Qual das fórmulas abaixo, se inserida em B2 e arrastada para baixo, realizará corretamente a soma acumulada (ex: em B3 a soma de A2:A3, em B4 a soma de A2:A4)?",
    "options": [
      "A) =SOMA(A2:A2)",
      "B) =SOMA(A2:A13)",
      "C) =SOMA(A$2:A2)",
      "D) =SOMA(A$2:$A$2)",
      "E) =SOMA(A2:$A$13)"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Ao arrastar para baixo, viraria =SOMA(A3:A3), somando apenas a célula da respectiva linha em vez do acumulado.",
      "Incorreta. Somaria sempre o intervalo estático de A2 a A13 em todas as linhas.",
      "Correta. O início do intervalo é fixado na linha 2 (A$2) e o final é relativo (A2). Ao arrastar para baixo, expande-se para A$2:A3, A$2:A4, etc.",
      "Incorreta. Com ambos os pontos totalmente fixos ($A$2:$A$2), a fórmula somaria apenas a célula A2 em todas as posições.",
      "Incorreta. Inverte a lógica de expansão do intervalo acumulado."
    ],
    "generalExplanation": "Para construir um intervalo expansível (soma acumulada), fixa-se a linha do ponto de partida com cifrão (A$2) e mantém-se o ponto final relativo (A2). Assim, =SOMA(A$2:A2) expande-se linha a linha.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Planilhas Eletrônicas: Fórmulas Básicas (Soma, Média, Cont.se) e Gráficos Simples",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_95",
    "text": "Considere uma planilha onde a célula E10 contém a fórmula =MÉDIA(A1:C5). Se o usuário mover a célula E10 para a célula G12 através do comando 'Recortar' (Ctrl+X) e 'Colar' (Ctrl+V), qual será a fórmula na célula G12?",
    "options": [
      "A) =MÉDIA(C3:E7)",
      "B) =MÉDIA(A1:C5)",
      "C) =MÉDIA(A3:E5)",
      "D) =MÉDIA(A1:E7)",
      "E) =MÉDIA(B1:D5)"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Este seria o resultado se a célula fosse COPIADA (Ctrl+C), com deslocamento de +2 colunas e +2 linhas.",
      "Correta. No comando Recortar (Ctrl+X) e Colar (Ctrl+V), as referências internas da fórmula permanecem inalteradas, pois trata-se de mover a fórmula.",
      "Incorreta. Aplica deslocamento incorreto inexistente em operações de recorte.",
      "Incorreta. Aplica expansão de intervalo indevida.",
      "Incorreta. Aplica deslocamento parcial incompatível com a operação de recorte."
    ],
    "generalExplanation": "Diferente de Copiar/Colar (que recalcula referências relativas com base no deslocamento), o comando Recortar/Colar (Ctrl+X / Ctrl+V) apenas move a célula de local, preservando as referências e a fórmula idênticas: =MÉDIA(A1:C5).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Planilhas Eletrônicas: Fórmulas Básicas (Soma, Média, Cont.se) e Gráficos Simples",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_96",
    "text": "Considere o seguinte cenário em uma planilha Excel:\n- Célula A1: 10\n- Célula A2: 5\n- Célula A3: 2\n- Célula A4: =MÁXIMO(A1:A3) * MÍNIMO(A1:A3) / 2\nO valor resultante na célula A4 será:",
    "options": [
      "A) 5",
      "B) 10",
      "C) 20",
      "D) 25",
      "E) 50"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Resultado de equívoco no cálculo ou seleção incorreta dos valores.",
      "Correta. MÁXIMO(10, 5, 2) = 10; MÍNIMO(10, 5, 2) = 2. A fórmula executa (10 * 2) / 2 = 10.",
      "Incorreta. Corresponde ao produto 10 * 2 antes da divisão por 2.",
      "Incorreta. Ocorreria se o valor mínimo fosse confundido com a célula A2 (5).",
      "Incorreta. Valor incompatível com a operação aritmética."
    ],
    "generalExplanation": "MÁXIMO(A1:A3) retorna o maior valor (10) e MÍNIMO(A1:A3) retorna o menor valor (2). Pela ordem de precedência da esquerda para a direita na multiplicação e divisão: 10 * 2 = 20; 20 / 2 = 10.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Planilhas Eletrônicas: Fórmulas Básicas (Soma, Média, Cont.se) e Gráficos Simples",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_97",
    "text": "Um analista administrativo preencheu um intervalo de células no Excel da seguinte forma:\n- A1: 100\n- A2: Texto Informativo\n- A3: (vazia)\n- A4: #N/D (erro de valor não disponível)\n- A5: 0\nAo utilizar a função =CONT.VALORES(A1:A5), qual será o resultado exibido?",
    "options": [
      "A) 2",
      "B) 3",
      "C) 4",
      "D) 5",
      "E) #VALOR!"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Este seria o resultado da função CONT.NÚM, que contaria apenas os valores numéricos 100 (A1) e 0 (A5).",
      "Incorreta. Ocorreria ao desconsiderar indevidamente o zero ou a célula com erro.",
      "Correta. A função CONT.VALORES conta todas as células não vazias (números, textos, valores de erro e zero). No intervalo, apenas A3 é vazia, totalizando 4.",
      "Incorreta. A célula A3 está vazia e não é contabilizada.",
      "Incorreta. A função CONT.VALORES não propaga erro ao encontrar células com erro; ela simplesmente as conta como preenchidas."
    ],
    "generalExplanation": "A função CONT.VALORES conta qualquer célula preenchida, independentemente de conter número, texto, valor lógico ou código de erro (#N/D). Como apenas A3 está vazia no intervalo de 5 células, o resultado é 4.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Planilhas Eletrônicas: Fórmulas Básicas (Soma, Média, Cont.se) e Gráficos Simples",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_98",
    "text": "No Microsoft Excel, a estrutura organizacional dos arquivos segue uma hierarquia técnica específica. Sobre essa hierarquia, assinale a alternativa que descreve corretamente a relação entre Pasta de Trabalho e Planilha.",
    "options": [
      "A) Uma Planilha é o arquivo físico salvo no disco rígido, que pode conter diversas Pastas de Trabalho.",
      "B) Uma Pasta de Trabalho é o arquivo propriamente dito, que pode conter uma ou mais Planilhas (abas).",
      "C) Pasta de Trabalho e Planilha são termos sinônimos e podem ser usados indistintamente para designar o arquivo .xlsx.",
      "D) Uma Planilha é composta por várias Pastas de Trabalho, organizadas por meio de colunas e linhas.",
      "E) A Pasta de Trabalho é a menor unidade de informação, enquanto a Planilha é o conjunto de células."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A relação está invertida; o arquivo físico global é a Pasta de Trabalho.",
      "Correta. A Pasta de Trabalho (Workbook) é o arquivo (.xlsx), e cada aba interna contida nele é uma Planilha (Worksheet).",
      "Incorreta. São termos com significados estruturais distintos no Excel.",
      "Incorreta. Planilhas não contêm pastas de trabalho.",
      "Incorreta. A menor unidade de informação da planilha é a célula."
    ],
    "generalExplanation": "A Pasta de Trabalho (Workbook) é o arquivo propriamente dito salvo no computador (ex.: .xlsx), o qual funciona como contêiner para uma ou mais Planilhas (Worksheets/abas).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Planilhas Eletrônicas: Organização de Dados, Filtros e Classificação",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_99",
    "text": "As células são a base de qualquer trabalho no Excel. Sobre o endereçamento e a estrutura das células, é correto afirmar que:",
    "options": [
      "A) Uma célula é identificada primeiro pelo número da linha e depois pela letra da coluna (ex: 5A).",
      "B) As colunas são identificadas por números que variam de 1 a 16.384.",
      "C) As linhas são identificadas por letras que variam de A até XFD.",
      "D) Uma célula é a interseção de uma coluna, identificada por letras, com uma linha, identificada por números.",
      "E) O endereço de uma célula é fixo e não pode ser referenciado em outras planilhas."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. O endereçamento padrão do Excel segue a ordem Letra da Coluna + Número da Linha (ex.: A5).",
      "Incorreta. As colunas são identificadas por letras (de A até XFD).",
      "Incorreta. As linhas são identificadas por números (de 1 a 1.048.576).",
      "Correta. Uma célula é formada pela interseção de uma coluna (letras) com uma linha (números).",
      "Incorreta. Células podem ser referenciadas livremente entre diferentes planilhas e arquivos."
    ],
    "generalExplanation": "No Excel, cada célula é a interseção de uma coluna vertical (identificada por letras de A a XFD) com uma linha horizontal (identificada por números de 1 a 1.048.576), com endereço na forma ColunaLinha (ex.: B10).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Planilhas Eletrônicas: Organização de Dados, Filtros e Classificação",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_100",
    "text": "No Microsoft Excel, a operação de classificação de dados distingue-se fundamentalmente da operação de filtragem por qual motivo?",
    "options": [
      "A) A classificação remove permanentemente os dados que não atendem aos critérios definidos pelo usuário.",
      "B) A classificação reorganiza a posição física das linhas na planilha, mantendo todos os dados visíveis.",
      "C) A classificação serve apenas para dados numéricos, enquanto o filtro é exclusivo para dados textuais.",
      "D) O filtro altera a ordem das células, enquanto a classificação apenas oculta as linhas indesejadas.",
      "E) A classificação exige o uso de fórmulas complexas, enquanto o filtro é uma ferramenta de interface direta."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A classificação não remove dados; ela apenas altera a sua ordem.",
      "Correta. A classificação reordena a posição das linhas mantendo todos os dados visíveis, enquanto a filtragem oculta temporariamente linhas que não atendem ao critério.",
      "Incorreta. Ambos os recursos são aplicáveis a textos, números, datas e cores.",
      "Incorreta. Os papéis estão invertidos na assertiva.",
      "Incorreta. A classificação é um recurso nativo acessível diretamente pela interface (guia Dados)."
    ],
    "generalExplanation": "Classificar reorganiza a ordem física das linhas com base em critérios definidos (alfabéticos, numéricos, cronológicos), mantendo tudo visível. Filtrar oculta temporariamente as linhas que não atendem aos critérios.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Planilhas Eletrônicas: Organização de Dados, Filtros e Classificação",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_101",
    "text": "Ao aplicar uma classificação em 'Ordem Crescente' em uma coluna que contém exclusivamente datas, o Microsoft Excel organizará os registros da seguinte forma:",
    "options": [
      "A) Da data mais recente para a data mais antiga.",
      "B) Em ordem alfabética pelo nome do mês por extenso.",
      "C) Da data mais antiga para a data mais recente.",
      "D) Agrupando primeiro os dias, depois os meses e por fim os anos.",
      "E) Priorizando as datas que possuem formatação condicional ativa."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Esta é a ordem decrescente (do mais novo para o mais antigo).",
      "Incorreta. A ordenação respeita o valor serial da data, e não o texto do mês por extenso.",
      "Correta. Para dados cronológicos, ordem crescente equivale a ordenar da data mais antiga para a mais recente.",
      "Incorreta. O Excel avalia a data completa (ano-mês-dia) como número serial contínuo.",
      "Incorreta. A formatação condicional não define a ordem padrão crescente de datas."
    ],
    "generalExplanation": "No Excel, datas são armazenadas internamente como números seriais sequenciais. Portanto, a ordem crescente organiza as datas em ordem cronológica ascendente: da mais antiga para a mais recente.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Planilhas Eletrônicas: Organização de Dados, Filtros e Classificação",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_102",
    "text": "No Microsoft Excel, ao aplicar um Filtro Automático em uma planilha de dados, o usuário observa que algumas linhas deixaram de ser exibidas. Sobre esse procedimento, é correto afirmar que:",
    "options": [
      "A) Os dados que não atendem aos critérios são movidos automaticamente para uma nova planilha de backup.",
      "B) As linhas que não satisfazem os critérios são excluídas permanentemente do arquivo, reduzindo seu tamanho.",
      "C) O filtro oculta temporariamente as linhas, e estas podem ser identificadas pelos números das linhas na cor azul.",
      "D) A filtragem altera o conteúdo das células para valores nulos até que o filtro seja devidamente removido.",
      "E) O recurso de filtro impede a edição das células visíveis para garantir a integridade dos dados filtrados."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O filtro comum não move dados para novas planilhas.",
      "Incorreta. Os dados não são excluídos, permanecendo preservados no arquivo.",
      "Correta. A filtragem oculta temporariamente as linhas não correspondentes; os números das linhas visíveis passam a ser exibidos na cor azul.",
      "Incorreta. O conteúdo das células não é alterado nem anulado.",
      "Incorreta. As células visíveis permanecem plenamente editáveis."
    ],
    "generalExplanation": "O Filtro Automático oculta visualmente e temporariamente as linhas que não correspondem aos critérios. Como indicador visual clássico do Excel, os números das linhas filtradas/visíveis ficam destacados na cor azul.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Planilhas Eletrônicas: Organização de Dados, Filtros e Classificação",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_103",
    "text": "Para ativar ou desativar rapidamente o recurso de Filtro Automático em uma tabela selecionada no Excel, o usuário deve utilizar o seguinte atalho de teclado:",
    "options": [
      "A) CTRL + F",
      "B) CTRL + SHIFT + L",
      "C) ALT + F4",
      "D) CTRL + SHIFT + F",
      "E) CTRL + ALT + V"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. CTRL + F abre a caixa de diálogo Localizar.",
      "Correta. CTRL + SHIFT + L é o atalho de teclado padrão para ativar ou desativar os filtros automáticos no Excel.",
      "Incorreta. ALT + F4 é o atalho para fechar a janela ativa no Windows.",
      "Incorreta. CTRL + SHIFT + F geralmente abre a caixa de diálogo Formatar Células na guia Fonte.",
      "Incorreta. CTRL + ALT + V abre a janela de Colar Especial."
    ],
    "generalExplanation": "O atalho oficial no Microsoft Excel para ativar e desativar os botões de Filtro Automático na linha de cabeçalho é Ctrl + Shift + L.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Planilhas Eletrônicas: Organização de Dados, Filtros e Classificação",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_104",
    "text": "Ao inserir dados em uma planilha do Microsoft Excel em sua configuração padrão, o software realiza o reconhecimento automático do tipo de dado para aplicar o alinhamento horizontal inicial. Caso um usuário digite o nome de um município em uma célula e, na célula imediatamente abaixo, digite uma data válida, o alinhamento padrão desses dados será, respectivamente:",
    "options": [
      "A) À esquerda e à direita.",
      "B) À direita e à esquerda.",
      "C) Ambos centralizados.",
      "D) Ambos à esquerda.",
      "E) Ambos à direita."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. No Excel, dados do tipo texto (município) são alinhados por padrão à esquerda, enquanto datas (valores numéricos seriais) são alinhadas à direita.",
      "Incorreta. Inverte a regra padrão de alinhamento.",
      "Incorreta. O alinhamento centralizado padrão ocorre apenas para valores lógicos (VERDADEIRO/FALSO) e erros.",
      "Incorreta. Datas são alinhadas à direita.",
      "Incorreta. Textos não são alinhados à direita por padrão."
    ],
    "generalExplanation": "Por padrão no Excel: Textos alinham-se à esquerda; Números, Moedas, Datas e Horas alinham-se à direita; Valores lógicos e Códigos de Erro são centralizados.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Planilhas Eletrônicas: Organização de Dados, Filtros e Classificação",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_105",
    "text": "Um usuário deseja alterar o conteúdo de uma célula específica que já possui dados, sem sobrescrever integralmente o que já foi digitado, mas sim posicionando o cursor no final do texto existente para realizar uma pequena correção. Para realizar essa tarefa utilizando exclusivamente o teclado, o atalho correto é:",
    "options": [
      "A) F1",
      "B) F2",
      "C) F4",
      "D) Ctrl + E",
      "E) Alt + Enter"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. F1 abre a Ajuda do Excel.",
      "Correta. F2 ativa o modo de edição direta na célula ativa, posicionando o cursor de inserção ao final do conteúdo existente.",
      "Incorreta. F4 alterna entre tipos de referências (relativas/absolutas) durante edição de fórmulas ou repete a última ação.",
      "Incorreta. Ctrl + E aciona o Preenchimento Relâmpago.",
      "Incorreta. Alt + Enter insere uma quebra de linha manual dentro da célula durante a edição."
    ],
    "generalExplanation": "A tecla F2 coloca o Excel em modo de edição da célula selecionada, posicionando o ponto de inserção no final do texto para que o usuário possa fazer ajustes sem apagar o conteúdo prévio.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Planilhas Eletrônicas: Organização de Dados, Filtros e Classificação",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_106",
    "text": "Considere que um usuário deseja realizar uma operação de soma no Microsoft Excel envolvendo as células A1, A2, A3, A4 e a célula C10. Assinale a alternativa que apresenta a sintaxe correta para referenciar esse conjunto de células utilizando o menor número de caracteres possível.",
    "options": [
      "A) =SOMA(A1;A4;C10)",
      "B) =SOMA(A1:A4:C10)",
      "C) =SOMA(A1:A4;C10)",
      "D) =SOMA(A1-A4;C10)",
      "E) =SOMA(A1.A4;C10)"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Somaria apenas A1 e A4, ignorando A2 e A3.",
      "Incorreta. O operador de dois pontos não deve ser encadeado desta forma.",
      "Correta. A1:A4 define o intervalo contínuo e ;C10 une a célula isolada à função.",
      "Incorreta. O hífen não é operador de intervalo.",
      "Incorreta. O ponto não é operador de intervalo."
    ],
    "generalExplanation": "A1:A4 define o intervalo contínuo e ;C10 une a célula isolada. A sintaxe mais compacta e correta é =SOMA(A1:A4;C10).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_107",
    "text": "Em relação aos limites técnicos e navegação no Microsoft Excel (versões recentes em formato .xlsx), assinale a alternativa correta:",
    "options": [
      "A) O número total de linhas disponíveis em uma planilha é de 65.536.",
      "B) A última coluna de uma planilha é identificada pela sequência de letras ZZZ.",
      "C) A 'Caixa de Nome', localizada ao lado da Barra de Fórmulas, exibe o endereço da célula ativa no momento.",
      "D) Para selecionar a planilha inteira, o usuário deve obrigatoriamente utilizar o mouse, não existindo atalhos de teclado para tal função.",
      "E) O Excel permite no máximo 255 planilhas dentro de uma única Pasta de Trabalho."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O limite é de 1.048.576 linhas.",
      "Incorreta. A última coluna é XFD.",
      "Correta. A Caixa de Nome exibe o endereço da célula ativa no momento.",
      "Incorreta. Existem atalhos como CTRL+T ou CTRL+A.",
      "Incorreta. O número de planilhas é limitado apenas pela memória disponível."
    ],
    "generalExplanation": "A Caixa de Nome exibe o endereço da célula ativa ou nome do intervalo selecionado ao lado da Barra de Fórmulas.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_108",
    "text": "Durante a edição de uma planilha, um usuário deseja selecionar as células A1, B5, C10 e D12 simultaneamente para aplicar uma formatação. Para realizar essa seleção de células não adjacentes, o procedimento correto é:",
    "options": [
      "A) Clicar em A1, segurar a tecla SHIFT e clicar nas demais células.",
      "B) Clicar em A1, segurar a tecla ALT e clicar nas demais células.",
      "C) Clicar em A1, segurar a tecla CTRL e clicar nas demais células.",
      "D) Clicar em A1, segurar a tecla TAB e clicar nas demais células.",
      "E) Clicar em A1 e arrastar o mouse até a célula D12."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. SHIFT seleciona intervalos contínuos.",
      "Incorreta. ALT é para atalhos de menu.",
      "Correta. A tecla CTRL permite selecionar células ou intervalos não adjacentes.",
      "Incorreta. TAB navega entre células.",
      "Incorreta. Arrastar o mouse seleciona um bloco contínuo."
    ],
    "generalExplanation": "A tecla CTRL permite selecionar células não adjacentes no Excel.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_109",
    "text": "Um analista precisa organizar uma planilha de vendas de modo que os dados apareçam agrupados por 'Região' (em ordem alfabética) e, dentro de cada região, os 'Valores de Venda' apareçam do maior para o menor. Para realizar essa tarefa no Excel, o procedimento correto é:",
    "options": [
      "A) Utilizar o botão de classificação rápida A-Z na coluna Região e depois o botão Z-A na coluna Valores.",
      "B) Aplicar um filtro na coluna Região e, em seguida, classificar a coluna Valores manualmente.",
      "C) Acessar a guia Dados, clicar em Classificar e adicionar um nível de classificação.",
      "D) Selecionar a tabela e utilizar a função 'Agrupar' na guia Revisão para organizar os níveis.",
      "E) Classificar a coluna Valores e, em seguida, utilizar a ferramenta 'Subtotal' para organizar as regiões."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Classificações sucessivas simples podem desorganizar o critério anterior.",
      "Incorreta. O filtro oculta dados, não resolve ordenação hierárquica.",
      "Correta. A janela 'Classificar' permite adicionar múltiplos níveis de classificação.",
      "Incorreta. Agrupar não ordena dados por critérios.",
      "Incorreta. Subtotal exige classificação prévia."
    ],
    "generalExplanation": "Na guia Dados, a ferramenta 'Classificar' permite adicionar múltiplos níveis de classificação para organizar dados por mais de um critério.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_110",
    "text": "Durante a edição de uma planilha com diversas colunas correlacionadas (como Nome, CPF e Endereço), o usuário seleciona apenas a coluna 'Nome' e clica no botão de classificar. O Excel exibe um aviso de 'Aviso de Classificação'. Sobre as opções apresentadas nesse aviso, assinale a alternativa correta.",
    "options": [
      "A) A opção 'Expandir a seleção' deve ser evitada, pois ela duplica os dados nas colunas adjacentes.",
      "B) A opção 'Continuar com a seleção atual' é a recomendada para manter a integridade entre nomes e CPFs.",
      "C) A opção 'Expandir a seleção' garante que a linha inteira seja movida, preservando a relação entre os dados.",
      "D) O Excel classifica automaticamente toda a tabela, independentemente da escolha do usuário no aviso.",
      "E) O aviso indica que o Excel encontrou células vazias e não poderá realizar a classificação solicitada."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Não duplica dados.",
      "Incorreta. Quebraria a relação entre as colunas da tabela.",
      "Correta. 'Expandir a seleção' move as linhas completas, mantendo a integridade dos dados adjacentes.",
      "Incorreta. O Excel aguarda a escolha do usuário.",
      "Incorreta. Refere-se a dados adjacentes não selecionados."
    ],
    "generalExplanation": "A opção 'Expandir a seleção' reordena a tabela inteira com base na coluna escolhida, preservando a relação dos registros das linhas.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_111",
    "text": "Ao tentar classificar uma coluna que contém os meses do ano (Janeiro, Fevereiro, Março...), um usuário percebe que a ordem alfabética (A-Z) coloca 'Abril' antes de 'Janeiro'. Para que a ordem siga o calendário, o usuário deve configurar o critério de classificação para:",
    "options": [
      "A) Ordem Cronológica Automática, disponível apenas na guia Página Inicial.",
      "B) Lista Personalizada, selecionando a sequência correta dos meses.",
      "C) Classificação por Cor da Fonte, definindo uma cor para cada mês.",
      "D) Classificação por Ícone, utilizando a formatação condicional de conjuntos de ícones.",
      "E) Orientação da Esquerda para a Direita, para que o Excel reconheça a sequência temporal."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Esse botão específico não existe.",
      "Correta. O Excel possui Listas Personalizadas para ordenar sequências lógicas não alfabéticas (meses, dias da semana).",
      "Incorreta. Cor não define sequência lógica de calendário.",
      "Incorreta. Ícones medem valores comparativos.",
      "Incorreta. Orientação altera a direção da classificação."
    ],
    "generalExplanation": "Listas Personalizadas permitem ordenar dados por sequências específicas do calendário que não seguem a ordem alfabética.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_112",
    "text": "Um analista financeiro aplicou um filtro na coluna 'Departamento' para exibir apenas 'Vendas' e, em seguida, aplicou um filtro na coluna 'Salário' para exibir valores 'Maiores que 5000'. Considerando o comportamento padrão do Filtro Automático do Excel, o resultado exibirá:",
    "options": [
      "A) Todos os funcionários de Vendas, independentemente do salário, somados aos que ganham mais de 5000.",
      "B) Apenas os funcionários que pertencem ao departamento de Vendas E que possuem salário superior a 5000.",
      "C) Funcionários que pertencem ao departamento de Vendas OU que possuem salário superior a 5000.",
      "D) Uma mensagem de erro, pois o Excel não permite aplicar filtros em mais de uma coluna simultaneamente.",
      "E) Apenas os funcionários de Vendas, pois o segundo filtro anula automaticamente o primeiro filtro aplicado."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Descreve a lógica OU.",
      "Correta. Múltiplos filtros em colunas diferentes operam sob a lógica cumulativa E (interseção).",
      "Incorreta. Lógica OU requer Filtro Avançado.",
      "Incorreta. É possível filtrar várias colunas.",
      "Incorreta. Os filtros se acumulam."
    ],
    "generalExplanation": "Filtros aplicados em colunas diferentes no Filtro Automático do Excel funcionam em conjunto (lógica E).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_113",
    "text": "Sobre as funcionalidades do 'Filtro Avançado' no Microsoft Excel, assinale a alternativa que apresenta uma capacidade que NÃO está disponível no Filtro Automático comum:",
    "options": [
      "A) Filtrar dados com base em uma cor de preenchimento específica.",
      "B) Utilizar critérios numéricos como 'É maior que' ou 'Está entre'.",
      "C) Copiar os resultados filtrados automaticamente para outro local da planilha.",
      "D) Limpar todos os filtros aplicados para exibir novamente todos os dados.",
      "E) Filtrar uma lista de nomes para encontrar aqueles que começam com uma letra específica."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Disponível no Filtro Automático.",
      "Incorreta. Disponível no Filtro Automático.",
      "Correta. O Filtro Avançado permite a opção 'Copiar para outro local', indisponível no Filtro Automático comum.",
      "Incorreta. Disponível em ambos.",
      "Incorreta. Disponível em ambos."
    ],
    "generalExplanation": "Copiar os resultados filtrados diretamente para outro local da planilha é uma exclusividade do Filtro Avançado.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_114",
    "text": "No Microsoft Excel, a formatação de células permite modificar a exibição visual dos dados sem alterar seu valor real. Sobre a diferença entre os formatos 'Moeda' e 'Contábil', assinale a alternativa que descreve corretamente o comportamento do formato Contábil.",
    "options": [
      "A) O símbolo da moeda (R$) é exibido imediatamente ao lado do primeiro dígito numérico.",
      "B) Valores iguais a zero são exibidos como 'R$ 0,00'.",
      "C) O símbolo da moeda (R$) é alinhado à esquerda da célula, enquanto o valor numérico é alinhado à direita.",
      "D) Não permite a definição de casas decimais, sendo sempre um número inteiro.",
      "E) Diferente do formato Moeda, o formato Contábil não permite valores negativos."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Esta é a característica do formato Moeda.",
      "Incorreta. No formato Contábil o zero é exibido como um hífen (-).",
      "Correta. O formato Contábil alinha o símbolo R$ à esquerda da célula e os números à direita.",
      "Incorreta. Permite casas decimais.",
      "Incorreta. Ambos aceitam valores negativos."
    ],
    "generalExplanation": "No formato Contábil, o símbolo da moeda fica alinhado à esquerda e o número à direita, enquanto no Moeda o símbolo fica junto ao número.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_115",
    "text": "Considere que a célula A1 de uma planilha Excel contenha a data '01/01/2023'. Se um usuário inserir na célula B1 a fórmula '=A1+10' e formatar o resultado como 'Data', o valor exibido será '11/01/2023'. Esse comportamento ocorre porque:",
    "options": [
      "A) O Excel converte automaticamente o texto em uma sequência lógica de calendário.",
      "B) As datas no Excel são armazenadas como números inteiros sequenciais, onde o número 1 corresponde a 01/01/1900.",
      "C) O operador '+' em datas funciona como um comando de 'pular registros' no banco de dados do software.",
      "D) O Excel utiliza o sistema de data 1904 por padrão em todas as versões de Windows.",
      "E) A função de soma identifica o formato da célula vizinha e replica a unidade de tempo 'dia'."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Datas são números de série, não texto.",
      "Correta. As datas são números de série inteiros acumulados a partir de 01/01/1900.",
      "Incorreta. Não tem relação com pular registros.",
      "Incorreta. O sistema padrão no Windows é o de 1900.",
      "Incorreta. É uma operação aritmética direta sobre o número serial."
    ],
    "generalExplanation": "No Excel, datas são armazenadas como números de série (1 = 01/01/1900). Somar 10 a uma data equivale a somar 10 dias ao seu número serial.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_116",
    "text": "Ao trabalhar em uma planilha, um técnico administrativo percebe que uma célula que deveria exibir o faturamento mensal passou a apresentar apenas o símbolo de sustenido repetido (#######). Sobre essa ocorrência, analise as afirmações abaixo:\nI. Pode indicar que a coluna não é larga o suficiente para exibir o conteúdo.\nII. Pode indicar que a célula contém uma data ou hora negativa.\nIII. Indica, obrigatoriamente, que houve um erro de divisão por zero (#DIV/0!).\nEstá correto o que se afirma em:",
    "options": [
      "A) I, apenas.",
      "B) III, apenas.",
      "C) I e II, apenas.",
      "D) II e III, apenas.",
      "E) I, II e III."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. II também é verdadeira.",
      "Incorreta. III é falsa.",
      "Correta. I e II estão corretas; a III é falsa pois divisão por zero gera #DIV/0!.",
      "Incorreta. III é falsa.",
      "Incorreta. III é falsa."
    ],
    "generalExplanation": "Sustenidos (#####) surgem por falta de largura na coluna ou por datas/horas negativas.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_117",
    "text": "Um analista precisa consolidar dados de diferentes abas em uma fórmula única. A primeira aba chama-se 'Resumo Mensal' e a célula desejada é a B5. A segunda aba chama-se 'Dados' e o intervalo desejado é de A1 até A10. Assinale a alternativa que apresenta a fórmula de soma correta seguindo os padrões de referência 3D do Excel.",
    "options": [
      "A) =SOMA(Resumo Mensal!B5;Dados!A1:A10)",
      "B) =SOMA('Resumo Mensal'!B5;Dados!A1:A10)",
      "C) =SOMA(Resumo Mensal:B5+Dados:A1:A10)",
      "D) =SOMA('Resumo Mensal'!B5+'Dados'!A1:A10)",
      "E) =SOMA(Resumo Mensal!B5:Dados!A1:A10)"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Nomes de planilha com espaço exigem aspas simples.",
      "Correta. Nomes de abas com espaço ficam entre aspas simples 'Resumo Mensal'! e o ponto de exclamação separa a aba da célula.",
      "Incorreta. Sintaxe inválida.",
      "Incorreta. O separador de argumentos deve ser ponto e vírgula (;).",
      "Incorreta. Sintaxe de intervalo inválida."
    ],
    "generalExplanation": "Nomes de planilhas com espaços devem ser envolvidos por aspas simples ('Resumo Mensal'!). A exclamação (!) faz a ligação com a célula/intervalo.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_118",
    "text": "No Microsoft Excel, os operadores de referência permitem manipular como os intervalos são interpretados pelas funções. Sobre o operador de 'Espaço' (caractere de espaço simples), assinale a alternativa que descreve sua função correta.",
    "options": [
      "A) Atua como um operador de concatenação de textos entre duas células.",
      "B) Serve para indicar que uma célula deve ser tratada como valor vazio.",
      "C) É o operador de interseção, que resulta nas células comuns a dois intervalos mencionados.",
      "D) É um operador de união, equivalente ao ponto e vírgula (;).",
      "E) Não possui função técnica em fórmulas, sendo ignorado pelo motor de cálculo do Excel."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O operador de concatenação é &.",
      "Incorreta. Aspas duplas \"\" indicam valor vazio.",
      "Correta. O caractere espaço simples entre dois intervalos é o operador de interseção no Excel.",
      "Incorreta. O operador de união é ;.",
      "Incorreta. Possui função técnica definida."
    ],
    "generalExplanation": "O operador de espaço simples indica a interseção entre dois intervalos de células.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_119",
    "text": "Considere uma tabela no Microsoft Excel onde algumas células da coluna de classificação estão vazias. Ao realizar uma classificação, seja ela em ordem crescente ou decrescente, qual é o comportamento padrão do software em relação a essas células vazias?",
    "options": [
      "A) Células vazias são posicionadas no início da lista na ordem crescente e no final na ordem decrescente.",
      "B) Células vazias são sempre posicionadas no início da lista, independentemente da ordem escolhida.",
      "C) Células vazias são ignoradas e permanecem em suas posições originais, enquanto o restante é reordenado.",
      "D) Células vazias são sempre posicionadas ao final da lista, independentemente da ordem escolhida.",
      "E) O Excel emite um erro de 'Dados Incompletos' e impede a conclusão da operação de classificação."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Elas são colocadas no final em ambos os casos.",
      "Incorreta. São colocadas ao final.",
      "Incorreta. Elas são reordenadas junto com os registros.",
      "Correta. No Excel, células vazias são sempre colocadas ao final da tabela classificada, tanto em ordem crescente quanto decrescente.",
      "Incorreta. A operação é concluída normalmente."
    ],
    "generalExplanation": "Em classificações do Excel (crescente ou decrescente), células vazias são sempre posicionadas ao final da lista.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_120",
    "text": "Na janela de 'Classificação Personalizada' do Microsoft Excel, o botão 'Opções' permite realizar uma configuração raramente utilizada, mas prevista nos recursos avançados da ferramenta. Essa configuração permite:",
    "options": [
      "A) Diferenciar letras maiúsculas de minúsculas (fazer distinção de maiúsculas/minúsculas).",
      "B) Classificar dados com base em fórmulas ocultas dentro das células.",
      "C) Ignorar automaticamente todas as linhas que contenham erros de valor (#N/D, #VALOR!).",
      "D) Habilitar a classificação por ordem aleatória para fins de amostragem estatística.",
      "E) Impedir que células com formatação de negrito sejam movidas durante a ordenação."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Em Opções na janela Classificar, é possível ativar a distinção entre maiúsculas e minúsculas (case sensitive) e alterar a orientação (da esquerda para a direita).",
      "Incorreta. Não classifica por estrutura de fórmulas.",
      "Incorreta. Erros são classificados como valores normais.",
      "Incorreta. Não existe ordenação aleatória nativa.",
      "Incorreta. Formatação não bloqueia a movimentação."
    ],
    "generalExplanation": "No botão Opções da Janela de Classificação, é possível habilitar a distinção entre maiúsculas e minúsculas.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_158",
    "text": "No sistema operacional Windows 10/11, as contas de usuário são fundamentais para a segurança lógica. Sobre a distinção entre os tipos de contas, assinale a alternativa que descreve corretamente uma característica da conta de Usuário Padrão.",
    "options": [
      "A) Possui controle total sobre o computador, podendo desativar o Firewall do Windows a qualquer momento.",
      "B) Pode instalar drivers de dispositivos e softwares que alterem arquivos vitais do sistema operacional.",
      "C) Permite a alteração de configurações que não afetam outros usuários ou a segurança global do sistema.",
      "D) Tem permissão nativa para gerenciar e excluir outras contas de usuários administradores.",
      "E) É a única categoria de conta que permite a utilização do recurso Windows Hello para autenticação biométrica."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Alterações de segurança exigem privilégios de Administrador.",
      "Incorreta. Instalar drivers exige privilégios de Administrador.",
      "Correta. Usuários padrão podem alterar configurações pessoais que não afetam a segurança ou outros perfis.",
      "Incorreta. Gerenciamento de contas exige privilégios de Administrador.",
      "Incorreta. Administradores também usam Windows Hello."
    ],
    "generalExplanation": "Contas de Usuário Padrão permitem utilizar o sistema para tarefas cotidianas e alterar configurações pessoais sem comprometer a segurança global do computador.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_159",
    "text": "O Controle de Conta de Usuário (UAC - User Account Control) é um componente essencial da arquitetura de segurança do Windows. Qual é a função primordial desse recurso?",
    "options": [
      "A) Atuar como um antivírus em tempo real, bloqueando a execução de malwares conhecidos.",
      "B) Notificar o usuário antes que alterações que exijam permissão de nível administrativo sejam realizadas.",
      "C) Criptografar os arquivos da pasta do usuário para impedir o acesso físico por terceiros.",
      "D) Sincronizar as senhas do usuário com os servidores da Microsoft na nuvem.",
      "E) Limpar automaticamente arquivos temporários e registros corrompidos do sistema."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O UAC não é um antivírus.",
      "Correta. O UAC notifica e solicita confirmação/credenciais antes de permitir alterações administrativas no sistema.",
      "Incorreta. Criptografia de disco é feita por BitLocker/EFS.",
      "Incorreta. Sincronização é recurso de conta Microsoft.",
      "Incorreta. Limpeza é feita por utilitários do sistema."
    ],
    "generalExplanation": "O UAC ajuda a evitar que alterações não autorizadas no computador sejam feitas solicitando permissão antes que ações de nível administrativo sejam executadas.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_160",
    "text": "No âmbito da Segurança da Informação, a tríade fundamental, conhecida como CID, estabelece os objetivos básicos para a proteção de ativos. O pilar que garante que a informação seja acessível exclusivamente por pessoas ou sistemas devidamente autorizados, prevenindo o acesso não autorizado, é denominado:",
    "options": [
      "A) Integridade.",
      "B) Disponibilidade.",
      "C) Autenticidade.",
      "D) Confidencialidade.",
      "E) Não Repúdio."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Integridade protege contra alterações não autorizadas.",
      "Incorreta. Disponibilidade garante o acesso quando necessário.",
      "Incorreta. Autenticidade confirma a autoria/origem.",
      "Correta. Confidencialidade assegura o sigilo, garantindo que só pessoas autorizadas tenham acesso.",
      "Incorreta. Não Repúdio impede negar a autoria."
    ],
    "generalExplanation": "A Confidencialidade garante o sigilo das informações, permitindo o acesso somente a pessoas ou processos autorizados.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_161",
    "text": "Ataques do tipo DoS (Denial of Service) e DDoS (Distributed Denial of Service) visam sobrecarregar os recursos de um servidor para que ele pare de responder às solicitações legítimas. Esse tipo de ameaça compromete diretamente qual pilar da segurança da informação?",
    "options": [
      "A) Confidencialidade.",
      "B) Integridade.",
      "C) Disponibilidade.",
      "D) Conformidade.",
      "E) Irretratabilidade."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Não visa ler dados sigilosos.",
      "Incorreta. Não visa alterar o conteúdo das informações.",
      "Correta. DoS/DDoS visa indisponibilizar um serviço para seus usuários, afetando a Disponibilidade.",
      "Incorreta. Não é um pilar primário atacado pelo DoS.",
      "Incorreta. Não diz respeito à disponibilidade do serviço."
    ],
    "generalExplanation": "Ataques de Negação de Serviço (DoS/DDoS) afetam a Disponibilidade, tornando o sistema ou serviço inacessível aos usuários legítimos.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_162",
    "text": "No âmbito da Administração Pública, a classificação da informação em nível 'Público' é a materialização do princípio constitucional da publicidade. Sobre o tratamento dispensado a esse nível de informação, assinale a alternativa correta.",
    "options": [
      "A) A informação pública dispensa controles de integridade, uma vez que seu acesso é irrestrito a qualquer cidadão.",
      "B) O foco principal do tratamento da informação pública é a garantia da confidencialidade e do sigilo da fonte.",
      "C) A divulgação da informação pública deve ocorrer prioritariamente por meio de transparência passiva, evitando-se a transparência ativa.",
      "D) Embora o acesso seja livre, o tratamento deve focar na integridade para garantir que a informação não seja alterada indevidamente.",
      "E) Informações de nível público exigem a utilização de envelopes duplos e lacrados para o seu transporte físico entre órgãos."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Mesmo sendo pública, a integridade é fundamental para evitar adulterações.",
      "Incorreta. Informação pública não foca em confidencialidade.",
      "Incorreta. Deve-se priorizar a transparência ativa.",
      "Correta. A informação pública tem livre acesso, mas exige rigor na integridade para garantir que não seja modificada.",
      "Incorreta. Envelopes lacrados são para informações sigilosas."
    ],
    "generalExplanation": "Informações públicas não exigem confidencialidade, mas seu tratamento deve garantir a Integridade (não sofrer alterações indevidas) e a Disponibilidade.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_163",
    "text": "O conjunto de permissões atribuídas a usuários ou sistemas para consultar, criar, alterar ou excluir informações, definido com base na classificação e no perfil de competência, é denominado:",
    "options": [
      "A) Transparência Passiva.",
      "B) Nível de Acesso.",
      "C) Criptografia Simétrica.",
      "D) Protocolo de Descarte.",
      "E) Custódia de Documentos."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Transparência passiva é atendimento a pedidos de informação.",
      "Correta. Nível de Acesso define quais ações o usuário pode realizar sobre a informação.",
      "Incorreta. Criptografia é método de codificação.",
      "Incorreta. Refere-se ao descarte documental.",
      "Incorreta. Custódia refere-se à guarda do documento."
    ],
    "generalExplanation": "Nível de Acesso é a definição do conjunto de autorizações de um perfil para consultar, alterar ou excluir dados.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_164",
    "text": "No âmbito da Segurança da Informação, a Política de Uso Aceitável (PUA) desempenha um papel fundamental na governança corporativa. Assinale a alternativa que descreve corretamente a finalidade primordial desse documento.",
    "options": [
      "A) Definir os requisitos técnicos de hardware para o funcionamento dos servidores da instituição.",
      "B) Estabelecer os limites éticos e legais para o uso dos recursos tecnológicos pelos colaboradores.",
      "C) Garantir que todos os usuários tenham acesso irrestrito a todas as pastas do servidor de arquivos.",
      "D) Substituir a Política de Segurança da Informação (PSI) em organizações de pequeno porte.",
      "E) Listar exclusivamente as punições penais aplicáveis a crimes cibernéticos externos."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Requisitos de hardware são especificações técnicas.",
      "Correta. A PUA estabelece regras de conduta, direitos e deveres no uso dos recursos tecnológicos da organização.",
      "Incorreta. PUA prevê restrições, não acesso irrestrito.",
      "Incorreta. A PUA complementa a PSI, não a substitui.",
      "Incorreta. Foca na conduta interna dos colaboradores."
    ],
    "generalExplanation": "A Política de Uso Aceitável (PUA) especifica o uso adequado e permitido dos recursos de TI e comunicação pelos colaboradores.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_165",
    "text": "Para que uma senha seja considerada forte em um ambiente corporativo, ela deve possuir características que aumentem sua entropia e dificultem ataques de força bruta. Segundo as boas práticas de segurança, uma senha forte deve:",
    "options": [
      "A) Ser composta preferencialmente por nomes de familiares para facilitar a memorização.",
      "B) Utilizar apenas letras maiúsculas e ter no máximo 6 caracteres de comprimento.",
      "C) Combinar diferentes tipos de caracteres, como maiúsculas, minúsculas, números e símbolos.",
      "D) Ser anotada em local físico discreto, como a parte inferior do teclado, para evitar esquecimentos.",
      "E) Basear-se em palavras reais encontradas em dicionários para garantir a validade linguística."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Nomes familiares são vulneráveis.",
      "Incorreta. Poucos caracteres e uma única classe deixam a senha fraca.",
      "Correta. Senhas fortes combinam maiúsculas, minúsculas, números e caracteres especiais.",
      "Incorreta. Nunca se deve anotar senhas perto do computador.",
      "Incorreta. Palavras de dicionário facilitam ataques de dicionário."
    ],
    "generalExplanation": "Senhas fortes devem mesclar diferentes tipos de caracteres (maiúsculas, minúsculas, números, símbolos) e possuir tamanho adequado.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_166",
    "text": "Ao configurar um novo computador com Windows 11, um técnico deve escolher entre utilizar uma 'Conta Local' ou uma 'Conta Microsoft'. Assinale a alternativa que apresenta uma vantagem exclusiva da Conta Microsoft.",
    "options": [
      "A) Permite o acesso ao sistema sem a necessidade de qualquer tipo de senha ou PIN.",
      "B) Garante que os arquivos e configurações existam apenas naquele hardware específico, aumentando a privacidade local.",
      "C) Possibilita a sincronização de configurações, histórico do navegador e integração nativa com o OneDrive entre múltiplos dispositivos.",
      "D) É o único tipo de conta que permite a execução do comando 'netplwiz' para gerenciamento de usuários.",
      "E) Dispensa a necessidade de conexão com a internet para a criação inicial do perfil de usuário no Windows."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Ambas as contas exigem métodos de autenticação por segurança.",
      "Incorreta. Esta é uma característica da Conta Local.",
      "Correta. A integração com serviços em nuvem e a sincronização de preferências são os principais diferenciais da Conta Microsoft.",
      "Incorreta. O comando 'netplwiz' pode ser utilizado independentemente do tipo de conta.",
      "Incorreta. A Conta Microsoft exige conexão com a internet para criação/configuração inicial."
    ],
    "generalExplanation": "A Conta Microsoft possibilita a sincronização de configurações e integração nativa com o OneDrive entre múltiplos dispositivos.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_167",
    "text": "No que se refere aos métodos de autenticação do Windows Hello, o uso de um PIN (Personal Identification Number) é frequentemente incentivado em detrimento de senhas tradicionais. Qual a justificativa técnica para essa recomendação de segurança?",
    "options": [
      "A) O PIN é mais complexo que uma senha, exigindo obrigatoriamente 12 caracteres alfanuméricos.",
      "B) O PIN fica vinculado exclusivamente ao dispositivo físico onde foi criado, não trafegando pela rede.",
      "C) Diferente da senha, o PIN não pode ser alterado após ser configurado pela primeira vez.",
      "D) O PIN substitui a necessidade de biometria, tornando o reconhecimento facial obsoleto.",
      "E) O uso de PIN desativa automaticamente o Controle de Conta de Usuário (UAC), agilizando o uso do sistema."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O PIN pode ter apenas 4 números.",
      "Correta. Por estar atrelado ao dispositivo físico (TPM), o PIN não trafega pela rede, dificultando ataques remotos.",
      "Incorreta. O PIN pode ser alterado a qualquer momento.",
      "Incorreta. O PIN é um complemento ou alternativa de backup à biometria.",
      "Incorreta. O método de login não desativa o UAC."
    ],
    "generalExplanation": "O PIN fica vinculado exclusivamente ao dispositivo físico em que foi criado, não sendo transmitido pela rede.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_168",
    "text": "Um administrador de sistemas deseja configurar o Controle de Conta de Usuário (UAC) para que o sistema notifique apenas quando programas tentarem fazer alterações, mas sem escurecer a tela (Desktop Seguro). Sobre essa configuração, é correto afirmar que:",
    "options": [
      "A) É o nível de segurança máximo recomendado pela Microsoft para ambientes corporativos.",
      "B) Esta configuração impede que o usuário padrão execute qualquer aplicativo instalado.",
      "C) Torna o sistema menos seguro, pois outros programas poderiam, em tese, interferir na janela de confirmação.",
      "D) Equivale a desativar completamente o UAC, permitindo alterações silenciosas.",
      "E) Exige que o usuário digite a senha de administrador toda vez que abrir o Navegador Web."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O nível máximo é 'Sempre Notificar' com Desktop Seguro.",
      "Incorreta. O UAC não impede a execução de aplicativos comuns.",
      "Correta. Sem o Desktop Seguro, o ambiente de confirmação não é isolado, tornando o sistema vulnerável a interferências de outros programas.",
      "Incorreta. O alerta ainda é emitido, apenas o isolamento visual da tela é removido.",
      "Incorreta. Abrir navegador não é ação administrativa."
    ],
    "generalExplanation": "Desativar o Desktop Seguro remove o isolamento da janela do UAC, permitindo que programas maliciosos em tese interfiram na confirmação.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_169",
    "text": "Para garantir que um arquivo não tenha sido modificado de forma indevida durante o seu armazenamento ou transmissão, o administrador de segurança deve utilizar mecanismos que assegurem a fidedignidade e a exatidão dos dados. O principal mecanismo técnico utilizado para validar esse pilar é:",
    "options": [
      "A) A criptografia simétrica para cifrar o conteúdo.",
      "B) O uso de funções de Hash (resumo criptográfico).",
      "C) A implementação de redundância de hardware e links.",
      "D) A utilização de firewalls de borda e sistemas de IPS.",
      "E) O emprego de biometria para controle de acesso físico."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Criptografia simétrica foca na Confidencialidade.",
      "Correta. O Hash é o mecanismo clássico para validação de integridade de dados.",
      "Incorreta. Redundância garante a Disponibilidade.",
      "Incorreta. Firewalls e IPS são proteção de perímetro.",
      "Incorreta. Biometria foca em Autenticação/Acesso."
    ],
    "generalExplanation": "Funções de Hash (resumo criptográfico) geram um código único que permite verificar se o arquivo sofreu alterações (Integridade).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_170",
    "text": "Determinada instituição financeira implementou o uso de Assinatura Digital em suas transações eletrônicas. De acordo com os conceitos de Segurança da Informação, a Assinatura Digital provê, simultaneamente, os seguintes requisitos de segurança:",
    "options": [
      "A) Confidencialidade, Integridade e Disponibilidade.",
      "B) Confidencialidade, Autenticidade e Não Repúdio.",
      "C) Integridade, Autenticidade e Não Repúdio.",
      "D) Integridade, Disponibilidade e Conformidade.",
      "E) Confidencialidade, Integridade e Autenticidade."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Assinatura digital padrão não provê Confidencialidade nem Disponibilidade.",
      "Incorreta. Não provê Confidencialidade por si só.",
      "Correta. A assinatura digital garante Integridade, Autenticidade e Não Repúdio (Irretratabilidade).",
      "Incorreta. Não provê Disponibilidade.",
      "Incorreta. Não provê Confidencialidade."
    ],
    "generalExplanation": "A Assinatura Digital assegura Integridade, Autenticidade e Não Repúdio.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_171",
    "text": "Um analista de segurança percebeu que um atacante utilizou uma técnica de 'Sniffing' para interceptar o tráfego de dados em uma rede local sem fio. Ao analisar o incidente, o analista concluiu corretamente que o pilar da segurança da informação que foi violado foi a:",
    "options": [
      "A) Integridade, pois os pacotes foram capturados no meio do caminho.",
      "B) Disponibilidade, pois o tráfego de rede tornou-se mais lento.",
      "C) Confidencialidade, pois houve acesso não autorizado à informação.",
      "D) Autenticidade, pois o atacante se passou por um usuário legítimo.",
      "E) Conformidade, pois as normas de segurança da rede foram ignoradas."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Interceptação não significa alteração dos pacotes.",
      "Incorreta. Sniffing é passivo e não indisponibiliza o serviço.",
      "Correta. O Sniffing permite a leitura não autorizada de dados, violando a Confidencialidade.",
      "Incorreta. Não se trata de falsificação de identidade (Spoofing).",
      "Incorreta. O pilar técnico primário afetado é a Confidencialidade."
    ],
    "generalExplanation": "O Sniffing intercepta pacotes de dados para leitura, ferindo o pilar da Confidencialidade.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_172",
    "text": "O princípio do 'Need-to-Know' (Necessidade de Conhecer) é um pilar fundamental na gestão de segurança da informação. Segundo esse princípio, o acesso a uma informação classificada como confidencial é condicionado:",
    "options": [
      "A) Exclusivamente ao nível hierárquico ou cargo ocupado pelo servidor dentro da estrutura organizacional.",
      "B) À posse de uma credencial de segurança, independentemente da função exercida no momento do acesso.",
      "C) À necessidade efetiva de acesso para o exercício das atribuições específicas do cargo ou função.",
      "D) Ao tempo de serviço do servidor público, garantindo acesso pleno aos veteranos da instituição.",
      "E) À autorização expressa do cidadão interessado, em observância ao princípio da soberania popular."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O cargo isolado não basta se não houver necessidade funcional.",
      "Incorreta. Ter a credencial não autoriza o acesso se não houver necessidade efetiva para a tarefa.",
      "Correta. O princípio exige a necessidade estrita de acesso para a execução do trabalho.",
      "Incorreta. Tempo de serviço não confere privilégios de acesso a segredos.",
      "Incorreta. Não depende de autorização do cidadão."
    ],
    "generalExplanation": "O princípio 'Need-to-Know' exige que o acesso seja concedido apenas a quem efetivamente necessita da informação para realizar suas atribuições.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_173",
    "text": "Determinada organização pública utiliza o nível de acesso 'Interno' para gerenciar seus fluxos de trabalho. Sobre as características e o tratamento desse nível de informação, assinale a alternativa correta.",
    "options": [
      "A) O nível interno é equiparado ao sigilo ultrassecreto, exigindo custódia em cofres com biometria.",
      "B) Refere-se a informações que, se vazadas, podem causar danos graves e irreparáveis à segurança do Estado.",
      "C) Compreende documentos como manuais de procedimentos e listas de ramais, cujo acesso é restrito aos colaboradores.",
      "D) Exige obrigatoriamente a aplicação de criptografia de nível militar para qualquer trâmite em rede local.",
      "E) Sua divulgação externa é incentivada para promover a integração entre o setor público e a iniciativa privada."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Nível interno possui baixa sensibilidade comparado ao sigilo ultrassecreto.",
      "Incorreta. Danos graves referem-se a informações classificadas (Secreta/Ultrassecreta).",
      "Correta. O nível interno abrange documentos operacionais (manuais, rotinas) restritos ao público interno.",
      "Incorreta. Não exige criptografia de nível militar.",
      "Incorreta. A circulação deve permanecer restrita ao ambiente interno."
    ],
    "generalExplanation": "O nível interno é destinado ao uso rotineiro dos colaboradores da organização (como manuais e ramais) sem exibição externa.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_174",
    "text": "Considere a 'Regra de Ouro do Tratamento' da informação. Ao lidar com informações de nível 'Confidencial', o foco primordial da proteção deve recair sobre:",
    "options": [
      "A) A fonte da informação, para garantir que ela não seja alterada por terceiros.",
      "B) O perímetro da organização, para evitar que a informação circule entre os departamentos.",
      "C) O conteúdo da informação, para garantir que ele não seja lido ou compreendido por pessoas não autorizadas.",
      "D) A disponibilidade da informação, garantindo que ela esteja acessível em portais de transparência.",
      "E) A publicidade da informação, visando o cumprimento do princípio da transparência ativa."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Proteção da fonte/integridade é foco principal da informação pública.",
      "Incorreta. Perímetro é foco da informação de nível interno.",
      "Correta. Em informações confidenciais, a prioridade máxima é proteger o conteúdo contra leitura não autorizada.",
      "Incorreta. Não se aplica a portais de transparência.",
      "Incorreta. Confidencialidade é exceção à publicidade."
    ],
    "generalExplanation": "O foco do nível confidencial é resguardar o conteúdo da informação contra visualização ou vazamento.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_175",
    "text": "Sobre a relação entre a classificação da informação e o perfil de competência do agente público, assinale a afirmativa correta.",
    "options": [
      "A) O nível de acesso é definido exclusivamente pela vontade do gestor da unidade, sem critérios legais.",
      "B) Informações pessoais possuem o mesmo rito de tratamento e prazos de sigilo que as informações de nível interno.",
      "C) A classificação de uma informação como 'Confidencial' impede que ela seja acessada até mesmo pelo próprio indivíduo a quem ela se refere.",
      "D) O nível de acesso é inversamente proporcional à quantidade de pessoas autorizadas: quanto mais sensível, menor o grupo de acesso.",
      "E) O tratamento de informações públicas exige autenticação multifator e registro de log de consulta para todos os cidadãos."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Baseia-se em normativas e perfis de competência.",
      "Incorreta. Informações pessoais têm regime de proteção próprio.",
      "Incorreta. O próprio indivíduo tem direito de acesso às suas informações pessoais.",
      "Correta. Quanto maior a sensibilidade/classificação da informação, mais restrito é o grupo de pessoas autorizadas a acessá-la.",
      "Incorreta. Informações públicas não exigem MFA do cidadão."
    ],
    "generalExplanation": "Quanto mais sensível a classificação de uma informação, menor o número de pessoas com autorização de acesso.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_176",
    "text": "Um analista de sistemas precisa configurar as permissões de acesso a uma pasta compartilhada que contém dados sensíveis de RH. Ele decide que apenas os funcionários do departamento de RH poderão visualizar os arquivos, e que nenhum deles poderá excluir documentos, exceto o gerente da área. Essa configuração aplica, respectivamente, quais conceitos de segurança?",
    "options": [
      "A) Necessidade de Conhecer e Menor Privilégio.",
      "B) Autenticação Multifator e Irretratabilidade.",
      "C) Disponibilidade e Confidencialidade.",
      "D) Engenharia Social e Auditoria.",
      "E) Segregação de Funções e Criptografia Assimétrica."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Restringir o acesso ao departamento competente é 'Necessidade de Conhecer'; conceder apenas o nível mínimo de permissão necessário (sem exclusão) é o 'Menor Privilégio'.",
      "Incorreta. MFA é autenticação; Irretratabilidade é autoria incontestável.",
      "Incorreta. São pilares genéricos, não os princípios específicos de permissões.",
      "Incorreta. Engenharia social é ataque.",
      "Incorreta. Criptografia assimétrica usa pares de chaves."
    ],
    "generalExplanation": "Conceder acesso apenas a quem precisa é 'Necessidade de Conhecer' e dar apenas os direitos estritamente necessários é 'Menor Privilégio'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_177",
    "text": "A Autenticação Multifator (MFA) é uma camada adicional de segurança que exige que o usuário apresente provas de diferentes categorias para validar sua identidade. Se um sistema exige uma senha alfanumérica e a leitura da impressão digital do usuário, ele está utilizando quais fatores de autenticação?",
    "options": [
      "A) Algo que você sabe e algo que você tem.",
      "B) Algo que você é e algo que você tem.",
      "C) Algo que você sabe e algo que você é.",
      "D) Algo que você sabe e onde você está.",
      "E) Algo que você tem e onde você está."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. 'Algo que você tem' é um token ou celular.",
      "Incorreta. A senha não é 'algo que você tem'.",
      "Correta. Senha = Algo que você sabe; Impressão digital = Algo que você é (biometria).",
      "Incorreta. Não envolve localização.",
      "Incorreta. Não envolve token nem localização."
    ],
    "generalExplanation": "Senha é 'algo que você sabe' e impressão digital é 'algo que você é'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_178",
    "text": "O compartilhamento de credenciais de acesso (login e senha) entre colegas de trabalho é uma prática condenada por quase todas as Políticas de Uso Aceitável. Do ponto de vista técnico da segurança da informação, essa proibição visa garantir, principalmente, o princípio da:",
    "options": [
      "A) Disponibilidade, pois o uso simultâneo pode travar o sistema.",
      "B) Irretratabilidade (ou Não-Repúdio), permitindo identificar o autor real de uma ação.",
      "C) Interoperabilidade, facilitando a comunicação entre diferentes sistemas.",
      "D) Escalabilidade, permitindo que o sistema suporte mais usuários.",
      "E) Conformidade técnica, garantindo que o hardware não sofra sobrecarga."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Não é o motivo principal.",
      "Correta. A credencial individual garante que as ações sejam atribuídas univocamente a um indivíduo, mantendo a Irretratabilidade (Não-Repúdio).",
      "Incorreta. Interoperabilidade é integração entre sistemas.",
      "Incorreta. Escalabilidade é capacidade de expansão.",
      "Incorreta. Não visa sobrecarga de hardware."
    ],
    "generalExplanation": "Credenciais individuais garantem a Irretratabilidade (Não-Repúdio), impedindo que o usuário negue a autoria de ações praticadas no sistema.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_179",
    "text": "Considere um computador rodando a versão Windows 11 Home. Um técnico precisa realizar o gerenciamento granular de usuários, como definir uma data de expiração para uma senha específica. Ao tentar utilizar o console 'Usuários e Grupos Locais' através do comando 'lusrmgr.msc', o técnico encontrará qual situação?",
    "options": [
      "A) O console abrirá normalmente, pois é uma ferramenta padrão de todas as edições do Windows.",
      "B) O console abrirá, mas com todas as opções de edição bloqueadas por ser uma conta local.",
      "C) O Windows informará que este snap-in não pode ser utilizado nesta edição do sistema operacional.",
      "D) O sistema solicitará a conversão imediata da Conta Local em Conta Microsoft para liberar o recurso.",
      "E) O comando redirecionará o usuário automaticamente para o Painel de Controle clássico."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Não está disponível na versão Home.",
      "Incorreta. O snap-in nem abre.",
      "Correta. O snap-in 'lusrmgr.msc' não está disponível em edições Home do Windows 10/11.",
      "Incorreta. Mudar o tipo de conta não altera a edição do SO.",
      "Incorreta. Não faz redirecionamento automático."
    ],
    "generalExplanation": "O snap-in 'lusrmgr.msc' (Usuários e Grupos Locais) é um recurso indisponível nas edições Home do Windows.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_180",
    "text": "Um usuário logado com uma conta do tipo 'Usuário Padrão' tenta instalar um novo driver de impressora que modifica arquivos na pasta 'C:\\Windows\\System32'. De acordo com o funcionamento do Controle de Conta de Usuário (UAC), o que ocorrerá em seguida?",
    "options": [
      "A) A instalação será bloqueada imediatamente, exibindo uma mensagem de erro de 'Acesso Negado' sem possibilidade de prosseguir.",
      "B) O Windows executará a instalação silenciosamente, mas reverterá as alterações após o logoff do usuário.",
      "C) Será exibida uma janela do UAC solicitando que o usuário apenas clique em 'Sim' para confirmar a operação.",
      "D) Será exibida uma janela do UAC solicitando as credenciais (nome de usuário e senha) de uma conta de administrador.",
      "E) O sistema entrará em modo de segurança automaticamente para permitir a alteração do driver."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. O UAC permite prosseguir se forem fornecidas credenciais de administrador.",
      "Incorreta. Não faz instalação silenciosa nem reversão.",
      "Incorreta. Clicar apenas em 'Sim' ocorre quando o usuário já é Administrador.",
      "Correta. Para contas de Usuário Padrão, o UAC exige o nome de usuário e a senha de um Administrador para autorizar a elevação de privilégios.",
      "Incorreta. Não reinicia em modo de segurança."
    ],
    "generalExplanation": "Para Usuários Padrão, o UAC solicita credenciais administrativas (usuário e senha) para autorizar ações que alterem o sistema.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_181",
    "text": "No Windows, o 'Princípio do Privilégio Mínimo' é uma diretriz de segurança que visa limitar o potencial de danos causados por erros ou softwares maliciosos. Qual das alternativas abaixo descreve corretamente a aplicação técnica desse princípio no gerenciamento de contas?",
    "options": [
      "A) Configurar todos os funcionários de uma empresa como Administradores para evitar chamados de suporte técnico.",
      "B) Utilizar contas de Usuário Padrão para atividades rotineiras, recorrendo à elevação de privilégio apenas quando estritamente necessário.",
      "C) Desativar o Gerenciador de Credenciais para que o sistema não armazene nenhuma senha localmente.",
      "D) Permitir que qualquer usuário altere as permissões de leitura e escrita na raiz da unidade C:.",
      "E) Excluir a conta de Administrador nativa do sistema para que ninguém possa fazer alterações críticas."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Isso viola o princípio do menor privilégio.",
      "Correta. Garantir o uso de conta padrão reduz o impacto de infecções por malware.",
      "Incorreta. Desativar o gerenciador de credenciais não é a base do privilégio mínimo.",
      "Incorreta. Permitir acesso total na raiz da unidade C: compromete a segurança.",
      "Incorreta. O sistema exige ao menos uma conta administrativa."
    ],
    "generalExplanation": "O princípio do menor privilégio estabelece que o usuário deve operar com o menor nível de acesso possível para realizar suas funções cotidianas.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_182",
    "text": "Considere a seguinte situação hipotética: Um servidor de banco de dados de uma repartição pública sofreu uma pane de hardware, resultando em uma lentidão extrema que impede o processamento de consultas em tempo hábil para o atendimento ao público, embora o sistema ainda esteja tecnicamente 'no ar'. De acordo com as sutilezas doutrinárias da Segurança da Informação, assinale a alternativa correta:",
    "options": [
      "A) A Disponibilidade foi quebrada, pois o sistema não atende mais ao fim a que se destina.",
      "B) A Disponibilidade permanece preservada, uma vez que o sistema não está totalmente inacessível.",
      "C) Houve uma quebra de Integridade, pois os dados não podem ser recuperados com precisão.",
      "D) O incidente afetou a Confidencialidade, pois a lentidão expõe vulnerabilidades do sistema.",
      "E) Trata-se de uma falha de Não Repúdio, pois o sistema não pode confirmar quem realizou as consultas."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A disponibilidade envolve a prontidão e utilidade do sistema; se torna inutilizável, a disponibilidade foi afetada.",
      "Incorreta. Se a lentidão impede o uso para o fim a que se destina, a disponibilidade está comprometida.",
      "Incorreta. Não houve alteração de dados (Integridade).",
      "Incorreta. Lentidão não afeta o sigilo dos dados (Confidencialidade).",
      "Incorreta. Não Repúdio refere-se à autoria de ações."
    ],
    "generalExplanation": "A Disponibilidade exige que o sistema esteja pronto e funcional para o fim a que se destina.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_183",
    "text": "A norma ISO/IEC 27001 e a legislação brasileira (Decreto nº 9.637/2018) expandem a visão clássica da segurança da informação. Sobre esses conceitos avançados, analise as assertivas abaixo:\nI. A Autenticidade garante que a mensagem não foi alterada desde sua origem.\nII. O Não Repúdio garante que o emissor não possa negar a autoria da mensagem.\nIII. A Integridade garante a identidade fidedigna do autor da informação.\nEstá(ão) correta(s) apenas:",
    "options": [
      "A) I.",
      "B) II.",
      "C) III.",
      "D) I e II.",
      "E) II e III."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A assertiva I descreve a Integridade.",
      "Correta. O Não Repúdio é a impossibilidade de negar a autoria da mensagem.",
      "Incorreta. A assertiva III descreve a Autenticidade.",
      "Incorreta. A assertiva I está incorreta.",
      "Incorreta. A assertiva III está incorreta."
    ],
    "generalExplanation": "Apenas a assertiva II está correta; I trata de Integridade e III trata de Autenticidade.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_184",
    "text": "No processo de Assinatura Digital, o remetente utiliza sua chave privada para cifrar o resumo (hash) de uma mensagem. Ao receber a mensagem, o destinatário utiliza a chave pública do remetente para decifrar o resumo e compará-lo com um novo hash gerado localmente. Sobre esse processo, é correto afirmar que:",
    "options": [
      "A) A confidencialidade da mensagem é garantida, pois o hash está cifrado.",
      "B) A integridade é verificada através da comparação dos resumos (hashes).",
      "C) O não repúdio é garantido pelo uso da chave pública do destinatário.",
      "D) A autenticidade é garantida pela função de hash aplicada ao documento.",
      "E) A disponibilidade é assegurada pelo uso de chaves assimétricas."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A assinatura digital não garante a confidencialidade do conteúdo da mensagem.",
      "Correta. A comparação dos resumos (hashes) confirma que o documento não sofreu alterações (integridade).",
      "Incorreta. O não repúdio é garantido pela chave privada do remetente.",
      "Incorreta. A autenticidade vem da cifra do hash com a chave privada.",
      "Incorreta. Criptografia assimétrica não garante disponibilidade."
    ],
    "generalExplanation": "A comparação entre os hashes (calculado e decifrado) verifica a integridade do documento.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_185",
    "text": "O 'Princípio do Menor Privilégio' (Least Privilege) é frequentemente explorado em provas de gestão e segurança. No contexto da concessão de níveis de acesso, esse princípio determina que:",
    "options": [
      "A) O administrador deve conceder o maior nível de acesso possível para evitar interrupções no fluxo de trabalho.",
      "B) Cada usuário deve possuir apenas as permissões estritamente necessárias para a execução de suas tarefas.",
      "C) As informações devem ser classificadas no maior grau de sigilo disponível para garantir a proteção máxima.",
      "D) O acesso deve ser concedido de forma vitalícia, evitando a reavaliação periódica de perfis de competência.",
      "E) Apenas os ocupantes de cargos de direção e assessoramento superior podem ter acesso a informações de nível interno."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Conceder privilégios excessivos aumenta os riscos de segurança.",
      "Correta. Cada usuário deve ter somente as permissões indispensáveis para suas atribuições.",
      "Incorreta. Deve-se adotar a menor restrição necessária.",
      "Incorreta. O acesso deve ser revisado periodicamente.",
      "Incorreta. Outros cargos também podem ter acesso ao nível interno se necessário."
    ],
    "generalExplanation": "O Princípio do Menor Privilégio exige que os usuários tenham somente as permissões necessárias para desempenhar suas funções.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_186",
    "text": "Quanto aos protocolos de manuseio seguro e descarte de informações, a doutrina de segurança estabelece ritos específicos para garantir a proteção do dado. Analise as afirmações abaixo e selecione a opção que descreve corretamente um procedimento de tratamento para informações confidenciais.",
    "options": [
      "A) O transporte de documentos confidenciais em meio digital deve prescindir de criptografia para facilitar a auditoria.",
      "B) O descarte de mídias contendo dados confidenciais pode ser realizado em lixo comum, desde que o disco esteja formatado.",
      "C) A reprodução de documentos sigilosos é livre para todos os servidores que possuem a credencial de acesso correspondente.",
      "D) O transporte físico de informações confidenciais deve utilizar envelopes duplos, sendo o envelope externo isento de marcas de sigilo.",
      "E) A custódia da informação confidencial é de responsabilidade exclusiva do setor de TI, eximindo o agente que a manuseia."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Meio digital exige criptografia.",
      "Incorreta. Exige destruição física ou desmagnetização.",
      "Incorreta. A reprodução é controlada.",
      "Correta. Envelopes duplos são usados no transporte físico: o interno indica o sigilo e o externo é omisso quanto à classificação.",
      "Incorreta. A responsabilidade é do custodiante/agente que manuseia."
    ],
    "generalExplanation": "O transporte de documentos confidenciais utiliza envelope duplo, sendo o externo isento de marcações de sigilo para evitar atração indevida.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_187",
    "text": "O processo de acesso a recursos computacionais em uma rede corporativa segue uma sequência lógica de etapas. Considere a situação em que um usuário digita seu nome de usuário, fornece sua biometria, recebe permissão para editar um arquivo específico e tem sua ação registrada em um log do sistema. Essas etapas correspondem, respectivamente, a:",
    "options": [
      "A) Autenticação, Identificação, Autorização e Auditoria.",
      "B) Identificação, Autorização, Autenticação e Auditoria.",
      "C) Identificação, Autenticação, Autorização e Auditoria.",
      "D) Autorização, Identificação, Autenticação e Auditoria.",
      "E) Autenticação, Autorização, Identificação e Auditoria."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Inverte identificação e autenticação.",
      "Incorreta. A autorização ocorre depois da autenticação.",
      "Correta. A sequência é: Identificação (login) -> Autenticação (biometria) -> Autorização (permissão de edição) -> Auditoria (log).",
      "Incorreta. Autorização não é a primeira etapa.",
      "Incorreta. Identificação é o primeiro passo."
    ],
    "generalExplanation": "A sequência do controle de acesso é Identificação, Autenticação, Autorização e Auditoria.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_188",
    "text": "Determinada instituição pública estabelece em sua PUA que o acesso a sistemas internos por meio de redes Wi-Fi públicas só é permitido mediante o uso de uma Virtual Private Network (VPN). Além disso, proíbe a conexão de dispositivos USB não homologados. Essas medidas visam mitigar, respectivamente, quais riscos?",
    "options": [
      "A) Interceptação de dados em trânsito e infecção por códigos maliciosos (malware).",
      "B) Ataques de negação de serviço (DoS) e perda física de equipamentos.",
      "C) Engenharia social por telefone e vazamento de dados por e-mail institucional.",
      "D) Acesso não autorizado por força bruta e obsolescência programada de hardware.",
      "E) Quebra de criptografia de disco e uso indevido de impressoras térmicas."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A VPN previne a interceptação de tráfego em Wi-Fi público; a proibição de USB previne infecções por malwares.",
      "Incorreta. Não são os focos principais dessas medidas.",
      "Incorreta. Não se relacionam a engenharia social por telefone.",
      "Incorreta. VPN não evita força bruta de login; USB não se relaciona a obsolescência.",
      "Incorreta. VPN protege dados em trânsito, não em disco."
    ],
    "generalExplanation": "A VPN evita a interceptação de tráfego em redes abertas (sniffing) e a restrição de USB bloqueia a entrada de malwares.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_189",
    "text": "No sistema operacional Windows 10, a Área de Trabalho (Desktop) é o ambiente principal de interação após o logon do usuário. Do ponto de vista técnico e de organização de arquivos, a Área de Trabalho é considerada:",
    "options": [
      "A) Um arquivo de sistema oculto e protegido contra escrita, localizado na raiz do disco C:.",
      "B) Uma partição lógica do disco rígido dedicada exclusivamente ao armazenamento de ícones.",
      "C) Uma pasta especial localizada dentro do perfil do usuário, geralmente no caminho C:\\Users\\NomeDoUsuario\\Desktop.",
      "D) Um componente de hardware da memória RAM que armazena temporariamente os atalhos ativos.",
      "E) Uma extensão do Kernel do Windows que não possui representação física no sistema de arquivos."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Não é um arquivo, mas um diretório.",
      "Incorreta. Não é uma partição de disco.",
      "Correta. A Área de Trabalho é uma pasta física dentro da pasta do perfil do usuário.",
      "Incorreta. É um diretório no sistema de arquivos, não um hardware.",
      "Incorreta. Possui representação física clara no sistema de arquivos."
    ],
    "generalExplanation": "A Área de Trabalho (Desktop) é uma pasta dentro do diretório do perfil do usuário no Windows.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_190",
    "text": "Ao utilizar o Windows 10, um usuário decide clicar no botão 'Mostrar Área de Trabalho', localizado no canto extremo direito da Barra de Tarefas (após o relógio). Assinale a alternativa que descreve corretamente a ação executada pelo sistema:",
    "options": [
      "A) O sistema encerra todos os processos em primeiro plano para liberar memória RAM.",
      "B) Todas as janelas abertas são minimizadas simultaneamente, revelando a Área de Trabalho.",
      "C) O computador é bloqueado e o usuário é redirecionado para a tela de logon.",
      "D) O Menu Iniciar é aberto automaticamente em modo de tela cheia.",
      "E) As janelas ativas são organizadas em cascata para facilitar a visualização."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Não encerra processos.",
      "Correta. Clicar no botão 'Mostrar Área de Trabalho' minimiza todas as janelas abertas.",
      "Incorreta. O bloqueio do computador é feito por Win+L.",
      "Incorreta. O Menu Iniciar abre pela tecla Windows ou botão Iniciar.",
      "Incorreta. Organização em cascata é opção do menu de contexto da barra de tarefas."
    ],
    "generalExplanation": "O botão 'Mostrar Área de Trabalho' minimiza todas as janelas abertas de uma só vez.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_191",
    "text": "No sistema operacional Windows, o Menu Iniciar é considerado o ponto central de interação com o usuário. Sobre as formas de acessar esse menu utilizando exclusivamente o teclado, assinale a alternativa que apresenta uma combinação de teclas válida, especialmente útil em teclados que não possuem a tecla dedicada 'Windows' (Win):",
    "options": [
      "A) Alt + Tab",
      "B) Ctrl + Esc",
      "C) Shift + F10",
      "D) Ctrl + Alt + Del",
      "E) Win + X"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Alt+Tab alterna entre janelas abertas.",
      "Correta. Ctrl+Esc é o atalho clássico para abrir o Menu Iniciar sem a tecla Windows.",
      "Incorreta. Shift+F10 abre o menu de contexto (botão direito).",
      "Incorreta. Ctrl+Alt+Del exibe a tela de opções de segurança.",
      "Incorreta. Win+X exige a tecla Windows e abre o Menu Link Rápido."
    ],
    "generalExplanation": "Ctrl+Esc abre o Menu Iniciar e substitui a tecla Windows.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_192",
    "text": "Ao gerenciar o ciclo de energia no Windows, o usuário pode optar por diferentes estados. Qual opção permite que o computador entre em um estado de baixo consumo, salvando o estado atual das janelas e aplicativos abertos na memória RAM, permitindo uma retomada quase instantânea?",
    "options": [
      "A) Hibernar",
      "B) Bloquear",
      "C) Sair (Logoff)",
      "D) Suspender",
      "E) Reiniciar"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Hibernar salva os dados no disco rígido e desliga o PC.",
      "Incorreta. Bloquear mantém o consumo de energia normal e só protege a sessão.",
      "Incorreta. Sair encerra a sessão e fecha os programas.",
      "Correta. Suspender salva o estado na memória RAM com baixo consumo de energia e retorno rápido.",
      "Incorreta. Reiniciar encerra tudo e recarrega o SO."
    ],
    "generalExplanation": "A suspensão mantém o estado do sistema na memória RAM em modo de baixo consumo de energia.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_193",
    "text": "No estudo da organização de arquivos, a identificação das unidades de disco e a sintaxe dos caminhos (paths) no Windows são fundamentais. Sobre esse tema, assinale a alternativa correta:",
    "options": [
      "A) As letras A: e B: são comumente atribuídas aos discos rígidos principais (HD/SSD) por padrão de fábrica.",
      "B) O caractere utilizado para separar os diretórios e subdiretórios em um caminho no Windows é a barra inclinada para a direita (/).",
      "C) A unidade C: é geralmente reconhecida como a unidade de sistema, onde o Windows e os arquivos de programa são instalados.",
      "D) Um caminho de arquivo (path) serve apenas para identificar o nome do arquivo, não incluindo a sua extensão.",
      "E) As unidades de rede são obrigatoriamente identificadas pelas letras A: ou B: para diferenciá-las dos discos locais."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. As letras A: e B: eram reservadas para disquetes.",
      "Incorreta. O Windows usa a barra invertida (\\) como separador de diretórios.",
      "Correta. A unidade C: é a unidade padrão de sistema no Windows.",
      "Incorreta. O caminho completo inclui a extensão.",
      "Incorreta. Unidades de rede não usam A: ou B: obrigatoriamente."
    ],
    "generalExplanation": "A unidade C: é a partição padrão onde o sistema operacional Windows e os programas ficam instalados.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_194",
    "text": "Um assistente administrativo foi encarregado de renomear diversos arquivos em uma pasta do Windows. Para renomear um arquivo selecionado utilizando apenas o teclado, qual tecla de atalho deve ser pressionada?",
    "options": [
      "A) F1",
      "B) F2",
      "C) F5",
      "D) F10",
      "E) Alt + R"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. F1 abre a Ajuda.",
      "Correta. F2 é o atalho padrão para renomear um item selecionado no Windows.",
      "Incorreta. F5 atualiza a janela.",
      "Incorreta. F10 ativa a barra de menus.",
      "Incorreta. Alt+R não é atalho de renomear."
    ],
    "generalExplanation": "A tecla F2 ativa a edição do nome do arquivo ou pasta selecionado no Explorador de Arquivos.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_195",
    "text": "Ao tentar organizar seus documentos, um usuário decide renomear uma pasta. No entanto, o Windows impede a operação devido ao uso de um caractere inválido. Assinale a alternativa que contém apenas caracteres proibidos para a nomenclatura de arquivos e pastas no Windows.",
    "options": [
      "A) @, #, $",
      "B) &, %, _",
      "C) [, ], (",
      "D) <, /, ?",
      "E) !, ., -"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. @, # e $ são permitidos.",
      "Incorreta. &, % e _ são permitidos.",
      "Incorreta. [, ] e ( são permitidos.",
      "Correta. Os caracteres <, / e ? são proibidos em nomes de arquivos/pastas no Windows (junto com \\ : * \" > |).",
      "Incorreta. !, . e - são permitidos."
    ],
    "generalExplanation": "Os caracteres proibidos no Windows para nomear arquivos e pastas são: \\ / : * ? \" < > |",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_196",
    "text": "No Windows 10/11, o Gerenciador de Tarefas é uma ferramenta essencial para o monitoramento e controle dos processos do sistema. Qual atalho de teclado abre DIRETAMENTE o Gerenciador de Tarefas, sem telas intermediárias?",
    "options": [
      "A) Ctrl + Alt + Del",
      "B) Ctrl + Shift + Esc",
      "C) Alt + F4",
      "D) Ctrl + Shift + N",
      "E) Win + Tab"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Ctrl+Alt+Del exibe a tela de segurança intermediária do Windows.",
      "Correta. Ctrl+Shift+Esc abre o Gerenciador de Tarefas diretamente.",
      "Incorreta. Alt+F4 fecha a janela ativa ou abre o menu de desligar.",
      "Incorreta. Ctrl+Shift+N cria uma nova pasta no Explorador de Arquivos.",
      "Incorreta. Win+Tab abre a Visão de Tarefas (Task View)."
    ],
    "generalExplanation": "O atalho Ctrl+Shift+Esc abre diretamente o Gerenciador de Tarefas, sem redirecionar para a tela de segurança intermediária do sistema.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_197",
    "text": "Sobre o Painel de Navegação do Explorador de Arquivos do Windows, assinale a alternativa correta:",
    "options": [
      "A) O Painel de Navegação exibe apenas as pastas do usuário, sem incluir unidades de disco ou dispositivos de rede.",
      "B) O Acesso Rápido, dentro do Painel de Navegação, mostra apenas arquivos abertos na última sessão.",
      "C) O Painel de Navegação permite navegar por unidades, pastas e dispositivos, incluindo itens fixados pelo usuário.",
      "D) O Painel de Navegação é exclusivo do Windows 11 e não está presente no Windows 10.",
      "E) O Painel de Navegação só pode ser acessado através do Painel de Controle clássico."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O painel exibe também unidades de disco, dispositivos removíveis e rede.",
      "Incorreta. O Acesso Rápido mostra pastas frequentes e arquivos recentes, além de itens fixados.",
      "Correta. O Painel de Navegação exibe unidades, pastas, dispositivos de rede e itens fixados.",
      "Incorreta. Está presente tanto no Windows 10 quanto no Windows 11.",
      "Incorreta. Faz parte do Explorador de Arquivos."
    ],
    "generalExplanation": "O Painel de Navegação é a estrutura lateral do Explorador de Arquivos que permite navegar em unidades, pastas, dispositivos e atalhos fixados.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_198",
    "text": "Ao clicar com o botão direito em um arquivo e selecionar 'Propriedades' no Windows, o usuário acessa uma janela com diversas informações. Assinale a alternativa que apresenta um atributo que pode ser CONFIGURADO diretamente nessa janela:",
    "options": [
      "A) O tamanho do arquivo em bytes.",
      "B) A data de criação do arquivo.",
      "C) O atributo 'Somente Leitura'.",
      "D) O nome do usuário que criou o arquivo.",
      "E) O caminho completo do arquivo no sistema de arquivos."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O tamanho do arquivo é apenas exibido.",
      "Incorreta. A data de criação é apenas informada.",
      "Correta. 'Somente Leitura' e 'Oculto' são atributos modificáveis pelo usuário na guia Geral.",
      "Incorreta. O criador é apenas uma informação exibida.",
      "Incorreta. O caminho é exibido como informação."
    ],
    "generalExplanation": "Na janela de Propriedades de um arquivo, o usuário pode alterar diretamente atributos como 'Somente Leitura' e 'Oculto'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_199",
    "text": "As Áreas de Trabalho Virtuais do Windows 10/11 permitem organizar o trabalho em múltiplos espaços. Sobre esse recurso, assinale a alternativa correta:",
    "options": [
      "A) As Áreas de Trabalho Virtuais são compartilhadas entre todos os usuários do computador.",
      "B) As Áreas de Trabalho Virtuais permitem separar janelas e aplicativos em espaços distintos, facilitando a organização do trabalho.",
      "C) As Áreas de Trabalho Virtuais só podem ser acessadas através do Prompt de Comando.",
      "D) As Áreas de Trabalho Virtuais são exclusivas do Windows 11, não estando disponíveis no Windows 10.",
      "E) As Áreas de Trabalho Virtuais substituem a Barra de Tarefas."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Cada usuário em sua sessão possui suas próprias áreas virtuais.",
      "Correta. Permitem agrupar e separar janelas e aplicativos em múltiplos ambientes de trabalho.",
      "Incorreta. São acessadas visualmente pela Visão de Tarefas (Win+Tab).",
      "Incorreta. Estão presentes tanto no Windows 10 quanto no Windows 11.",
      "Incorreta. Funcionam junto com a Barra de Tarefas."
    ],
    "generalExplanation": "As Áreas de Trabalho Virtuais permitem criar múltiplos ambientes de trabalho independentes para organizar janelas e aplicativos.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_200",
    "text": "Sobre a compactação de arquivos e pastas no Windows, assinale a alternativa correta:",
    "options": [
      "A) A compactação nativa do Windows reduz o tamanho dos arquivos permanentemente, sendo irreversível.",
      "B) A compactação nativa do Windows cria arquivos com extensão .zip e permite compactar e descompactar sem software adicional.",
      "C) A compactação nativa do Windows só funciona para arquivos de texto.",
      "D) A compactação nativa do Windows é exclusiva para arquivos de mídia.",
      "E) A compactação nativa do Windows só funciona em unidades de rede."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A compactação é totalmente reversível ao extrair os arquivos.",
      "Correta. O Windows suporta nativamente a criação e extração de pastas compactadas (.zip).",
      "Incorreta. Funciona com qualquer formato de arquivo.",
      "Incorreta. Aplica-se a todo tipo de arquivo e pasta.",
      "Incorreta. Funciona tanto em unidades locais quanto de rede."
    ],
    "generalExplanation": "O Windows possui suporte nativo ao formato .zip, permitindo compactar e extrair arquivos sem necessidade de programas de terceiros.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_201",
    "text": "Sobre a funcionalidade de busca do Windows 10/11, assinale a alternativa correta:",
    "options": [
      "A) A busca do Windows só pode localizar arquivos por nome, não permitindo busca por conteúdo.",
      "B) A busca do Windows permite localizar arquivos por nome, conteúdo, tipo, data e outros critérios.",
      "C) A busca do Windows funciona apenas para arquivos armazenados na Área de Trabalho.",
      "D) A busca do Windows é limitada a arquivos criados pelo próprio Windows.",
      "E) A busca do Windows só funciona quando o computador está conectado à internet."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. É possível buscar pelo conteúdo interno de documentos indexados.",
      "Correta. O mecanismo de busca aceita filtros por nome, extensão, data de modificação, conteúdo e tipo.",
      "Incorreta. Indexa e pesquisa em diversas pastas e unidades do sistema.",
      "Incorreta. Funciona para arquivos de qualquer aplicativo.",
      "Incorreta. As pesquisas de arquivos locais não exigem internet."
    ],
    "generalExplanation": "A ferramenta de pesquisa do Windows permite filtrar e encontrar arquivos por nome, conteúdo, tipo, data de modificação e outros atributos.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_202",
    "text": "O recurso 'Snap' do Windows permite organizar janelas na tela de forma rápida. Sobre esse recurso, assinale a alternativa correta:",
    "options": [
      "A) O recurso Snap permite fixar uma janela em metade da tela ao arrastá-la para o lado esquerdo ou direito.",
      "B) O recurso Snap só funciona com aplicativos da Microsoft Store.",
      "C) O recurso Snap é exclusivo do Windows 11.",
      "D) O recurso Snap permite apenas minimizar janelas.",
      "E) O recurso Snap funciona apenas em monitores ultrawide."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Arrastar a janela para a borda esquerda ou direita ajusta automaticamente a janela para metade da tela.",
      "Incorreta. Funciona com a imensa maioria dos softwares desktop.",
      "Incorreta. Já existia no Windows 7, 8 e 10.",
      "Incorreta. O objetivo do Snap é dimensionar e posicionar janelas na tela.",
      "Incorreta. Funciona em qualquer resolução e tipo de monitor."
    ],
    "generalExplanation": "O Snap permite reorganizar janelas rapidamente arrastando-as para as extremidades da tela (como esquerda ou direita para ocupar metade da tela).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_203",
    "text": "Sobre a associação de arquivos a programas no Windows, assinale a alternativa correta:",
    "options": [
      "A) A associação de arquivos a programas é fixa e não pode ser alterada pelo usuário.",
      "B) A extensão de um arquivo determina automaticamente qual programa o abrirá por padrão, mas o usuário pode alterar essa associação.",
      "C) A associação de arquivos só funciona para arquivos de texto.",
      "D) A associação de arquivos é exclusiva para arquivos do Microsoft Office.",
      "E) A associação de arquivos é exclusiva do Windows 11."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O usuário pode redefinir o programa padrão a qualquer momento.",
      "Correta. A extensão indica o aplicativo padrão, mas a associação pode ser alterada nas configurações do sistema.",
      "Incorreta. Funciona para imagens, vídeos, PDFs e quaisquer outros formatos.",
      "Incorreta. Vale para qualquer software instalado no Windows.",
      "Incorreta. Presente em praticamente todas as edições do Windows."
    ],
    "generalExplanation": "A associação entre a extensão do arquivo e o programa padrão é configurável pelo usuário no Windows.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_204",
    "text": "Sobre o recurso de backup nativo do Windows (Histórico de Arquivos), assinale a alternativa correta:",
    "options": [
      "A) O Histórico de Arquivos faz backup apenas de arquivos do sistema operacional.",
      "B) O Histórico de Arquivos permite fazer backup automático de bibliotecas, contatos e outras pastas selecionadas em uma unidade externa ou de rede.",
      "C) O Histórico de Arquivos é exclusivo para arquivos de mídia.",
      "D) O Histórico de Arquivos só funciona em unidades de rede.",
      "E) O Histórico de Arquivos faz backup apenas de arquivos criados no Microsoft Office."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O foco do Histórico de Arquivos são os dados pessoais do usuário, não o SO.",
      "Correta. Realiza cópias contínuas de bibliotecas, documentos e pastas do usuário em drives externos ou compartilhamentos de rede.",
      "Incorreta. Abrange qualquer arquivo de dados contido nas pastas selecionadas.",
      "Incorreta. Aceita pendrives, HDs externos e unidades de rede.",
      "Incorreta. Não se limita a arquivos do Office."
    ],
    "generalExplanation": "O Histórico de Arquivos é a ferramenta nativa do Windows para backup pessoal automático de pastas e bibliotecas em unidades externas ou de rede.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_205",
    "text": "Sobre o Windows Defender, assinale a alternativa correta:",
    "options": [
      "A) O Windows Defender é um antivírus pago que precisa ser instalado separadamente.",
      "B) O Windows Defender oferece proteção antivírus em tempo real integrada ao sistema operacional.",
      "C) O Windows Defender funciona apenas no Windows 11.",
      "D) O Windows Defender protege apenas contra vírus, não contra outros tipos de malware.",
      "E) O Windows Defender é exclusivo para usuários com conta Microsoft."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. É gratuito e nativo do Windows.",
      "Correta. Fornece proteção integrada e em tempo real contra diversos tipos de malware.",
      "Incorreta. Está presente em diversas edições do Windows (Windows 8, 10, 11).",
      "Incorreta. Protege contra vírus, spyware, ransomware, trojans, etc.",
      "Incorreta. Funciona também com contas locais."
    ],
    "generalExplanation": "O Windows Defender (ou Segurança do Windows) é a solução antivírus gratuita e nativa do sistema operacional com proteção em tempo real.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_206",
    "text": "Sobre o Windows Update, assinale a alternativa correta:",
    "options": [
      "A) O Windows Update instala apenas atualizações de segurança, ignorando atualizações de recursos.",
      "B) O Windows Update permite que o usuário escolha quando e quais atualizações instalar, incluindo atualizações de segurança e de recursos.",
      "C) O Windows Update funciona apenas em empresas com domínio Active Directory.",
      "D) O Windows Update é exclusivo para o Windows 11.",
      "E) O Windows Update instala apenas drivers de dispositivos."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Atualiza recursos, correções de segurança e drivers.",
      "Correta. Gerencia o download e instalação de atualizações de segurança, melhorias de recursos e correções.",
      "Incorreta. Funciona para qualquer computador pessoal ou corporativo.",
      "Incorreta. Presente em todas as edições modernas do Windows.",
      "Incorreta. Abrange todo o ecossistema do Windows, não apenas drivers."
    ],
    "generalExplanation": "O Windows Update é o serviço responsável pela entrega de atualizações de segurança, correções do sistema, drivers e novas funcionalidades.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_207",
    "text": "Sobre o Registro do Windows (Registry), assinale a alternativa correta:",
    "options": [
      "A) O Registro do Windows é um banco de dados que armazena configurações do sistema e dos aplicativos instalados.",
      "B) O Registro do Windows é um arquivo de texto simples que pode ser editado com o Bloco de Notas.",
      "C) O Registro do Windows armazena apenas configurações de aplicativos da Microsoft.",
      "D) O Registro do Windows é exclusivo do Windows 11.",
      "E) O Registro do Windows armazena apenas configurações de rede."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. O Registro é o banco de dados hierárquico central que guarda configurações do SO, hardware e softwares.",
      "Incorreta. É um banco de dados binário editado pela ferramenta regedit.",
      "Incorreta. Armazena preferências e dados de configuração de diversos softwares de terceiros.",
      "Incorreta. Existe desde versões clássicas do Windows (Windows 95/NT em diante).",
      "Incorreta. Guarda configurações de todo o sistema operacional e preferências do usuário."
    ],
    "generalExplanation": "O Registro do Windows é o banco de dados hierárquico central que armazena definições de sistema, perfis de usuários, hardware e aplicativos.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_208",
    "text": "Sobre o Gerenciamento de Disco do Windows, assinale a alternativa correta:",
    "options": [
      "A) O Gerenciamento de Disco permite criar, excluir e formatar partições de disco.",
      "B) O Gerenciamento de Disco só funciona para discos rígidos internos.",
      "C) O Gerenciamento de Disco é exclusivo para o Windows 11.",
      "D) O Gerenciamento de Disco permite apenas formatar discos.",
      "E) O Gerenciamento de Disco só pode ser acessado através do Prompt de Comando."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. O Gerenciamento de Disco administra partições (criar, excluir, formatar, diminuir/estender volumes, atribuir letras).",
      "Incorreta. Suporta discos rígidos internos, externos, SSDs, pendrives, etc.",
      "Incorreta. É um utilitário presente há muitas gerações do Windows.",
      "Incorreta. Faz criação, exclusão, redimensionamento, atribuição de letras e alteração de sistema de arquivos.",
      "Incorreta. Possui utilitário gráfico (diskmgmt.msc)."
    ],
    "generalExplanation": "O Gerenciamento de Disco é a ferramenta gráfica administrativa do Windows utilizada para particionar, formatar e gerenciar unidades de armazenamento.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_209",
    "text": "Sobre o Prompt de Comando (cmd) do Windows, assinale a alternativa que apresenta o comando correto para listar o conteúdo de um diretório:",
    "options": [
      "A) ls",
      "B) dir",
      "C) list",
      "D) show",
      "E) display"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. 'ls' é o comando utilizado no terminal Linux/Unix.",
      "Correta. 'dir' exibe a lista de arquivos e subdiretórios de uma pasta no Prompt de Comando do Windows.",
      "Incorreta. 'list' não é o comando de listagem de diretório padrão no CMD.",
      "Incorreta. 'show' não lista diretórios no CMD.",
      "Incorreta. 'display' não é o comando de listagem."
    ],
    "generalExplanation": "No Prompt de Comando (cmd) do Windows, o comando 'dir' é utilizado para listar os arquivos e subdiretórios presentes na pasta atual.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_210",
    "text": "Sobre o recurso de Criptografia BitLocker do Windows, assinale a alternativa correta:",
    "options": [
      "A) O BitLocker criptografa apenas arquivos de texto.",
      "B) O BitLocker criptografa unidades de disco inteiras, protegendo os dados contra acesso não autorizado.",
      "C) O BitLocker funciona apenas em unidades de rede.",
      "D) O BitLocker é exclusivo para o Windows 11.",
      "E) O BitLocker protege apenas arquivos criados pelo Microsoft Office."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Criptografa o volume/disco por inteiro, independente do tipo de arquivo.",
      "Correta. O BitLocker realiza criptografia de unidade completa (Full Disk Encryption).",
      "Incorreta. Atua em drives internos e unidades removíveis (BitLocker To Go).",
      "Incorreta. Disponível em edições Pro/Enterprise do Windows 7, 8, 10 e 11.",
      "Incorreta. Protege todos os arquivos e dados gravados na unidade."
    ],
    "generalExplanation": "O BitLocker é o recurso de criptografia total de disco do Windows que protege a unidade de armazenamento inteira contra acessos não autorizados.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções Básicas de Informática",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_211",
    "text": "Em um computador com Windows 10, um técnico precisa criar uma nova partição em um disco rígido que já possui uma partição de sistema. Ele abre o Gerenciamento de Disco e verifica que não há espaço não alocado. Para criar a nova partição, ele precisará primeiro:",
    "options": [
      "A) Formatar a partição de sistema para liberar espaço.",
      "B) Reduzir o volume de uma partição existente para criar espaço não alocado.",
      "C) Excluir todas as partições existentes e recriá-las do zero.",
      "D) Converter o disco de básico para dinâmico obrigatoriamente.",
      "E) Desfragmentar o disco para criar espaço contíguo."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Formatar a partição de sistema apagaria todo o sistema operacional e os dados.",
      "Correta. A ação 'Reduzir Volume' cria espaço não alocado sem apagar dados, permitindo a criação de uma nova partição.",
      "Incorreta. Excluir todas as partições resultaria na perda total dos dados.",
      "Incorreta. A conversão para disco dinâmico não é necessária para criar uma nova partição simples.",
      "Incorreta. A desfragmentação reorganiza os dados no disco, mas não cria espaço não alocado para novas partições."
    ],
    "generalExplanation": "A ação 'Reduzir Volume' (Shrink Volume) no Gerenciamento de Disco permite criar espaço não alocado a partir de uma partição existente sem apagar os dados.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Sistema Operacional Windows: Desktop, Menu Iniciar, Pastas e Arquivos",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_212",
    "text": "No Windows 10/11, as Áreas de Trabalho Virtuais permitem organizar diferentes contextos de trabalho. Sobre o gerenciamento dessas áreas, é correto afirmar que:",
    "options": [
      "A) Uma janela aberta em uma Área de Trabalho Virtual não pode ser movida para outra Área de Trabalho.",
      "B) As Áreas de Trabalho Virtuais são preservadas após o computador ser desligado e religado.",
      "C) Uma janela pode ser fixada em todas as Áreas de Trabalho Virtuais simultaneamente.",
      "D) O número máximo de Áreas de Trabalho Virtuais é de 5.",
      "E) As Áreas de Trabalho Virtuais só podem ser acessadas pelo atalho Alt+Tab."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Janelas podem ser movidas entre Áreas de Trabalho Virtuais pela Visão de Tarefas.",
      "Incorreta. As Áreas de Trabalho Virtuais não são preservadas após o desligamento.",
      "Correta. Uma janela pode ser fixada em todas as Áreas de Trabalho Virtuais simultaneamente.",
      "Incorreta. Não há limite de 5 Áreas de Trabalho Virtuais.",
      "Incorreta. As Áreas de Trabalho Virtuais são acessadas pela Visão de Tarefas (Win+Tab)."
    ],
    "generalExplanation": "No Windows 10/11, uma janela pode ser fixada em todas as Áreas de Trabalho Virtuais, tornando-a visível em todas elas simultaneamente.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Sistema Operacional Windows: Desktop, Menu Iniciar, Pastas e Arquivos",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_213",
    "text": "No Windows 10/11, o recurso de Backup e Restauração permite criar cópias de segurança dos dados do usuário. Sobre esse recurso, é correto afirmar que:",
    "options": [
      "A) O backup é realizado apenas em unidades de rede, não sendo possível usar unidades locais.",
      "B) O backup é realizado apenas em unidades locais, não sendo possível usar unidades de rede.",
      "C) O backup pode ser realizado em unidades locais ou de rede, e pode ser agendado.",
      "D) O backup é realizado apenas em unidades de DVD, não sendo possível usar outras mídias.",
      "E) O backup é realizado apenas em unidades de nuvem, não sendo possível usar outras mídias."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O backup pode ser realizado em unidades locais ou de rede.",
      "Incorreta. O backup pode ser realizado em unidades de rede também.",
      "Correta. O backup pode ser realizado em unidades locais ou de rede, e pode ser agendado.",
      "Incorreta. O backup pode ser realizado em diversas mídias, não apenas DVD.",
      "Incorreta. O backup pode ser realizado em diversas mídias, não apenas nuvem."
    ],
    "generalExplanation": "O recurso de Backup e Restauração do Windows permite criar cópias de segurança em unidades locais ou de rede, e pode ser agendado.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Sistema Operacional Windows: Desktop, Menu Iniciar, Pastas e Arquivos",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_214",
    "text": "No Windows 10/11, o recurso de Restauração do Sistema permite reverter o sistema a um ponto anterior. Sobre esse recurso, é correto afirmar que:",
    "options": [
      "A) A restauração apaga todos os arquivos pessoais do usuário.",
      "B) A restauração não afeta os arquivos pessoais, apenas configurações e programas instalados.",
      "C) A restauração apaga todos os programas instalados, mas não afeta os arquivos pessoais.",
      "D) A restauração não afeta os arquivos pessoais nem os programas instalados.",
      "E) A restauração só pode ser realizada em modo de segurança."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A restauração não apaga os arquivos pessoais.",
      "Correta. A restauração não afeta os arquivos pessoais, apenas configurações e programas instalados.",
      "Incorreta. A restauração pode afetar programas instalados, mas não apaga arquivos pessoais.",
      "Incorreta. A restauração pode afetar programas instalados.",
      "Incorreta. A restauração pode ser realizada em modo normal ou de segurança."
    ],
    "generalExplanation": "A Restauração do Sistema não afeta os arquivos pessoais do usuário, apenas configurações do sistema e programas instalados.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Sistema Operacional Windows: Desktop, Menu Iniciar, Pastas e Arquivos",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_215",
    "text": "No Windows 10/11, o Gerenciador de Dispositivos permite gerenciar os dispositivos de hardware do computador. Sobre esse recurso, é correto afirmar que:",
    "options": [
      "A) O Gerenciador de Dispositivos só pode ser acessado pelo Painel de Controle.",
      "B) O Gerenciador de Dispositivos permite atualizar drivers, mas não desativar dispositivos.",
      "C) O Gerenciador de Dispositivos permite atualizar drivers, desativar e desinstalar dispositivos.",
      "D) O Gerenciador de Dispositivos só pode ser acessado em modo de segurança.",
      "E) O Gerenciador de Dispositivos só pode ser acessado pelo Prompt de Comando."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O Gerenciador de Dispositivos pode ser acessado de diversas formas (Win+X, Painel de Controle, etc.).",
      "Incorreta. O Gerenciador de Dispositivos permite desativar e desinstalar dispositivos também.",
      "Correta. O Gerenciador de Dispositivos permite atualizar drivers, desativar e desinstalar dispositivos.",
      "Incorreta. O Gerenciador de Dispositivos pode ser acessado em modo normal.",
      "Incorreta. O Gerenciador de Dispositivos pode ser acessado de diversas formas, não apenas pelo Prompt de Comando."
    ],
    "generalExplanation": "O Gerenciador de Dispositivos permite atualizar drivers, desativar e desinstalar dispositivos.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Sistema Operacional Windows: Desktop, Menu Iniciar, Pastas e Arquivos",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_216",
    "text": "No Windows 10/11, o recurso de Configuração do Sistema (msconfig) permite gerenciar diversas configurações do sistema. Sobre esse recurso, é correto afirmar que:",
    "options": [
      "A) O msconfig só pode ser acessado pelo Painel de Controle.",
      "B) O msconfig permite gerenciar serviços, inicialização e inicialização segura.",
      "C) O msconfig só pode ser acessado em modo de segurança.",
      "D) O msconfig permite apenas gerenciar serviços, não inicialização.",
      "E) O msconfig só pode ser acessado pelo Prompt de Comando."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O msconfig pode ser acessado de diversas formas (Win+R, Prompt de Comando, etc.).",
      "Correta. O msconfig permite gerenciar serviços, inicialização e inicialização segura.",
      "Incorreta. O msconfig pode ser acessado em modo normal.",
      "Incorreta. O msconfig permite gerenciar serviços e inicialização.",
      "Incorreta. O msconfig pode ser acessado de diversas formas, não apenas pelo Prompt de Comando."
    ],
    "generalExplanation": "O msconfig permite gerenciar serviços, inicialização e inicialização segura.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Sistema Operacional Windows: Desktop, Menu Iniciar, Pastas e Arquivos",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_217",
    "text": "No sistema operacional Android, a tela inicial é composta por diversos elementos. O elemento que permite ao usuário acessar rapidamente os aplicativos instalados é denominado:",
    "options": [
      "A) Barra de Status.",
      "B) Gaveta de Aplicativos (App Drawer).",
      "C) Barra de Navegação.",
      "D) Área de Notificações.",
      "E) Barra de Ferramentas."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A Barra de Status exibe informações como hora, sinal de rede e bateria.",
      "Correta. A Gaveta de Aplicativos é o elemento que permite acessar rapidamente os aplicativos instalados.",
      "Incorreta. A Barra de Navegação permite navegar entre as telas do dispositivo.",
      "Incorreta. A Área de Notificações exibe notificações de aplicativos.",
      "Incorreta. A Barra de Ferramentas é um elemento de aplicativos específicos, não da tela inicial."
    ],
    "generalExplanation": "A Gaveta de Aplicativos (App Drawer) é o elemento que permite ao usuário acessar rapidamente os aplicativos instalados no dispositivo.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Sistemas Móveis (Android): Operações Básicas, Configuração e Atualização",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_218",
    "text": "No sistema operacional Android, o recurso de atualizações de sistema é fundamental para manter o dispositivo seguro e com as últimas funcionalidades. Sobre esse recurso, é correto afirmar que:",
    "options": [
      "A) As atualizações de sistema só podem ser realizadas manualmente, não sendo possível agendá-las.",
      "B) As atualizações de sistema só podem ser realizadas em modo de segurança.",
      "C) As atualizações de sistema podem ser realizadas manualmente ou automaticamente, e podem ser agendadas.",
      "D) As atualizações de sistema só podem ser realizadas em modo de recuperação.",
      "E) As atualizações de sistema só podem ser realizadas pelo Prompt de Comando."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. As atualizações de sistema podem ser realizadas automaticamente também.",
      "Incorreta. As atualizações de sistema podem ser realizadas em modo normal.",
      "Correta. As atualizações de sistema podem ser realizadas manualmente ou automaticamente, e podem ser agendadas.",
      "Incorreta. As atualizações de sistema podem ser realizadas em modo normal.",
      "Incorreta. As atualizações de sistema podem ser realizadas de diversas formas, não apenas pelo Prompt de Comando."
    ],
    "generalExplanation": "As atualizações de sistema podem ser realizadas manualmente ou automaticamente, e podem ser agendadas.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Sistemas Móveis (Android): Operações Básicas, Configuração e Atualização",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_219",
    "text": "No sistema operacional Android, o recurso de armazenamento permite ao usuário gerenciar os dados armazenados no dispositivo. Sobre esse recurso, é correto afirmar que:",
    "options": [
      "A) O armazenamento só pode ser gerenciado pelo Painel de Controle.",
      "B) O armazenamento pode ser gerenciado pelas Configurações do dispositivo.",
      "C) O armazenamento só pode ser gerenciado em modo de segurança.",
      "D) O armazenamento só pode ser gerenciado pelo Prompt de Comando.",
      "E) O armazenamento só pode ser gerenciado pela loja de aplicativos."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O armazenamento pode ser gerenciado pelas Configurações do dispositivo.",
      "Correta. O armazenamento pode ser gerenciado pelas Configurações do dispositivo.",
      "Incorreta. O armazenamento pode ser gerenciado em modo normal.",
      "Incorreta. O armazenamento pode ser gerenciado de diversas formas, não apenas pelo Prompt de Comando.",
      "Incorreta. O armazenamento pode ser gerenciado de diversas formas, não apenas pela loja de aplicativos."
    ],
    "generalExplanation": "O armazenamento pode ser gerenciado pelas Configurações do dispositivo.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Sistemas Móveis (Android): Operações Básicas, Configuração e Atualização",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_220",
    "text": "No sistema operacional Android, o recurso de notificações permite ao usuário receber alertas de aplicativos. Sobre esse recurso, é correto afirmar que:",
    "options": [
      "A) As notificações só podem ser recebidas de aplicativos instalados na loja oficial.",
      "B) As notificações podem ser recebidas de qualquer aplicativo instalado no dispositivo.",
      "C) As notificações só podem ser recebidas em modo de segurança.",
      "D) As notificações só podem ser recebidas pelo Prompt de Comando.",
      "E) As notificações só podem ser recebidas pelo Painel de Controle."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. As notificações podem ser recebidas de qualquer aplicativo instalado.",
      "Correta. As notificações podem ser recebidas de qualquer aplicativo instalado no dispositivo.",
      "Incorreta. As notificações podem ser recebidas em modo normal.",
      "Incorreta. As notificações podem ser recebidas de diversas formas, não apenas pelo Prompt de Comando.",
      "Incorreta. As notificações podem ser recebidas de diversas formas, não apenas pelo Painel de Controle."
    ],
    "generalExplanation": "As notificações podem ser recebidas de qualquer aplicativo instalado no dispositivo.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Sistemas Móveis (Android): Operações Básicas, Configuração e Atualização",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_221",
    "text": "No sistema operacional Android, o recurso de conectividade permite ao usuário conectar o dispositivo a redes Wi-Fi e redes móveis. Sobre esse recurso, é correto afirmar que:",
    "options": [
      "A) O dispositivo só pode ser conectado a redes Wi-Fi, não sendo possível conectar a redes móveis.",
      "B) O dispositivo pode ser conectado a redes Wi-Fi e redes móveis simultaneamente.",
      "C) O dispositivo só pode ser conectado a redes móveis, não sendo possível conectar a redes Wi-Fi.",
      "D) O dispositivo só pode ser conectado a redes Wi-Fi em modo de segurança.",
      "E) O dispositivo só pode ser conectado a redes móveis pelo Prompt de Comando."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O dispositivo pode ser conectado a redes Wi-Fi e redes móveis.",
      "Correta. O dispositivo pode ser conectado a redes Wi-Fi e redes móveis simultaneamente.",
      "Incorreta. O dispositivo pode ser conectado a redes Wi-Fi também.",
      "Incorreta. O dispositivo pode ser conectado a redes Wi-Fi em modo normal.",
      "Incorreta. O dispositivo pode ser conectado a redes móveis de diversas formas, não apenas pelo Prompt de Comando."
    ],
    "generalExplanation": "O dispositivo pode ser conectado a redes Wi-Fi e redes móveis simultaneamente.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Sistemas Móveis (Android): Operações Básicas, Configuração e Atualização",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_222",
    "text": "No sistema operacional Android, o recurso de segurança permite ao usuário proteger o dispositivo com senha, PIN ou biometria. Sobre esse recurso, é correto afirmar que:",
    "options": [
      "A) O dispositivo só pode ser protegido com senha, não sendo possível usar PIN ou biometria.",
      "B) O dispositivo pode ser protegido com senha, PIN ou biometria.",
      "C) O dispositivo só pode ser protegido com biometria, não sendo possível usar senha ou PIN.",
      "D) O dispositivo só pode ser protegido em modo de segurança.",
      "E) O dispositivo só pode ser protegido pelo Prompt de Comando."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O dispositivo pode ser protegido com senha, PIN ou biometria.",
      "Correta. O dispositivo pode ser protegido com senha, PIN ou biometria.",
      "Incorreta. O dispositivo pode ser protegido com senha ou PIN também.",
      "Incorreta. O dispositivo pode ser protegido em modo normal.",
      "Incorreta. O dispositivo pode ser protegido de diversas formas, não apenas pelo Prompt de Comando."
    ],
    "generalExplanation": "O dispositivo pode ser protegido com senha, PIN ou biometria.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Sistemas Móveis (Android): Operações Básicas, Configuração e Atualização",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_223",
    "text": "No sistema operacional Android, o recurso de backup permite ao usuário criar cópias de segurança dos dados do dispositivo. Sobre esse recurso, é correto afirmar que:",
    "options": [
      "A) O backup só pode ser realizado em unidades de rede, não sendo possível usar unidades locais.",
      "B) O backup pode ser realizado em unidades locais ou de nuvem.",
      "C) O backup só pode ser realizado em unidades de nuvem, não sendo possível usar unidades locais.",
      "D) O backup só pode ser realizado em modo de segurança.",
      "E) O backup só pode ser realizado pelo Prompt de Comando."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O backup pode ser realizado em unidades locais ou de nuvem.",
      "Correta. O backup pode ser realizado em unidades locais ou de nuvem.",
      "Incorreta. O backup pode ser realizado em unidades locais também.",
      "Incorreta. O backup pode ser realizado em modo normal.",
      "Incorreta. O backup pode ser realizado de diversas formas, não apenas pelo Prompt de Comando."
    ],
    "generalExplanation": "O backup pode ser realizado em unidades locais ou de nuvem.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Sistemas Móveis (Android): Operações Básicas, Configuração e Atualização",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_224",
    "text": "No sistema operacional Android, o recurso de aplicativos permite ao usuário instalar e gerenciar aplicativos. Sobre esse recurso, é correto afirmar que:",
    "options": [
      "A) Os aplicativos só podem ser instalados pela loja oficial, não sendo possível instalar de outras fontes.",
      "B) Os aplicativos podem ser instalados pela loja oficial ou de outras fontes (sideloading).",
      "C) Os aplicativos só podem ser instalados de outras fontes, não sendo possível usar a loja oficial.",
      "D) Os aplicativos só podem ser instalados em modo de segurança.",
      "E) Os aplicativos só podem ser instalados pelo Prompt de Comando."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Os aplicativos podem ser instalados de outras fontes também.",
      "Correta. Os aplicativos podem ser instalados pela loja oficial ou de outras fontes (sideloading).",
      "Incorreta. Os aplicativos podem ser instalados pela loja oficial ou de outras fontes (sideloading).",
      "Incorreta. Os aplicativos podem ser instalados em modo normal.",
      "Incorreta. Os aplicativos podem ser instalados de diversas formas, não apenas pelo Prompt de Comando."
    ],
    "generalExplanation": "Os aplicativos podem ser instalados pela loja oficial ou de outras fontes (sideloading).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Sistemas Móveis (Android): Operações Básicas, Configuração e Atualização",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_225",
    "text": "No sistema operacional Android, o recurso de permissões de aplicativos permite ao usuário controlar quais recursos do dispositivo cada aplicativo pode acessar. Sobre esse recurso, é correto afirmar que:",
    "options": [
      "A) As permissões de aplicativos são concedidas automaticamente na instalação, não sendo possível alterá-las.",
      "B) As permissões de aplicativos podem ser concedidas na instalação e alteradas nas Configurações.",
      "C) As permissões de aplicativos só podem ser concedidas na instalação, não sendo possível alterá-las.",
      "D) As permissões de aplicativos só podem ser concedidas em modo de segurança.",
      "E) As permissões de aplicativos só podem ser concedidas pelo Prompt de Comando."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. As permissões de aplicativos podem ser alteradas nas Configurações.",
      "Correta. As permissões de aplicativos podem ser concedidas na instalação e alteradas nas Configurações.",
      "Incorreta. As permissões de aplicativos podem ser alteradas nas Configurações.",
      "Incorreta. As permissões de aplicativos podem ser concedidas em modo normal.",
      "Incorreta. As permissões de aplicativos podem ser concedidas de diversas formas, não apenas pelo Prompt de Comando."
    ],
    "generalExplanation": "As permissões de aplicativos podem ser concedidas na instalação e alteradas nas Configurações.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Sistemas Móveis (Android): Operações Básicas, Configuração e Atualização",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_226",
    "text": "Sobre o Android Runtime (ART), utilizado nas versões modernas do sistema Android, é correto afirmar que:",
    "options": [
      "A) Compila os aplicativos apenas no momento da execução (Just-in-Time), resultando em maior consumo de bateria.",
      "B) Compila os aplicativos antecipadamente (Ahead-of-Time) no momento da instalação, melhorando o desempenho na execução.",
      "C) É responsável exclusivamente pela interface gráfica do sistema operacional.",
      "D) Substituiu completamente o kernel Linux nas versões mais recentes do Android.",
      "E) Funciona apenas com aplicativos desenvolvidos em linguagem Java, sem suporte a Kotlin."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A compilação Just-in-Time (JIT) era característica do antigo Dalvik. O ART utiliza compilação Ahead-of-Time (AOT).",
      "Correta. O ART compila antecipadamente o código, melhorando o desempenho na execução.",
      "Incorreta. O ART é responsável pela execução dos aplicativos, não pela interface gráfica.",
      "Incorreta. O ART não substitui o kernel Linux, que permanece como base do sistema.",
      "Incorreta. O ART suporta aplicativos em diversas linguagens, incluindo Java e Kotlin."
    ],
    "generalExplanation": "O ART (Android Runtime) utiliza a compilação Ahead-of-Time (AOT), que converte o código do aplicativo em código de máquina durante a instalação, resultando em execução mais rápida e menor consumo de bateria durante o uso.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Sistemas Móveis (Android): Operações Básicas, Configuração e Atualização",
    "nivelSuperior": true
  },
  {
    "id": "info_sim_227",
    "text": "Sobre os componentes da tela inicial do Android, assinale a alternativa que descreve corretamente a função da barra de navegação:",
    "options": [
      "A) Exibe notificações de aplicativos e do sistema em tempo real.",
      "B) Apresenta os botões de Voltar, Início e Visão Geral, permitindo a navegação entre aplicativos.",
      "C) Mostra o nível de bateria, hora e sinal de rede na parte superior da tela.",
      "D) Permite o acesso direto à loja de aplicativos para download de novos softwares.",
      "E) Exibe a lista completa de aplicativos instalados no dispositivo em ordem alfabética."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. As notificações são exibidas na barra de status ou na área de notificações, não na barra de navegação.",
      "Correta. A barra de navegação contém os botões Voltar, Início e Visão Geral.",
      "Incorreta. Essas informações são exibidas na barra de status, localizada na parte superior da tela.",
      "Incorreta. O acesso à loja de aplicativos é feito por ícone específico, não pela barra de navegação.",
      "Incorreta. A lista de aplicativos é acessada pela gaveta de aplicativos, não pela barra de navegação."
    ],
    "generalExplanation": "A barra de navegação é composta pelos botões Voltar, Início (Home) e Visão Geral (Recentes), permitindo que o usuário navegue entre aplicativos e retorne à tela inicial.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Sistemas Móveis (Android): Operações Básicas, Configuração e Atualização",
    "nivelSuperior": true
  },
  {
    "id": "info_sim_228",
    "text": "Sobre a gaveta de aplicativos (App Drawer) no sistema Android, é correto afirmar que:",
    "options": [
      "A) Exibe apenas os aplicativos mais recentemente utilizados pelo usuário.",
      "B) Apresenta todos os aplicativos instalados no dispositivo, podendo ser acessada por gesto de deslizar para cima.",
      "C) Funciona exclusivamente como atalho para a loja de aplicativos do sistema.",
      "D) Exibe apenas os aplicativos que possuem permissões de administrador.",
      "E) Substitui completamente a tela inicial, não permitindo a fixação de atalhos."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A gaveta exibe todos os aplicativos instalados, não apenas os recentes.",
      "Correta. A gaveta apresenta todos os aplicativos instalados no dispositivo.",
      "Incorreta. A gaveta exibe os aplicativos instalados, não sendo um atalho para a loja.",
      "Incorreta. Todos os aplicativos instalados aparecem na gaveta, independentemente das permissões.",
      "Incorreta. A gaveta não substitui a tela inicial, e o usuário pode fixar atalhos na tela principal."
    ],
    "generalExplanation": "A gaveta de aplicativos (App Drawer) é o local onde todos os aplicativos instalados no dispositivo ficam disponíveis, geralmente acessada por gesto de deslizar para cima na tela inicial.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Sistemas Móveis (Android): Operações Básicas, Configuração e Atualização",
    "nivelSuperior": true
  },
  {
    "id": "info_sim_229",
    "text": "Sobre as notificações push no sistema Android, assinale a alternativa correta:",
    "options": [
      "A) São enviadas apenas por aplicativos nativos do sistema operacional.",
      "B) Permitem que aplicativos enviem informações diretamente ao usuário, mesmo sem estarem abertos.",
      "C) Funcionam exclusivamente com conexão Wi-Fi, não operando em redes móveis.",
      "D) São utilizadas apenas para exibir propagandas na barra de notificações.",
      "E) Substituem completamente as notificações de e-mail do dispositivo."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Qualquer aplicativo instalado pode enviar notificações push, não apenas os nativos.",
      "Correta. As notificações push funcionam mesmo com o aplicativo fechado.",
      "Incorreta. As notificações push funcionam tanto em Wi-Fi quanto em redes móveis.",
      "Incorreta. As notificações push são utilizadas para diversos fins, não apenas propagandas.",
      "Incorreta. As notificações push não substituem o e-mail, podendo inclusive notificar sobre novas mensagens."
    ],
    "generalExplanation": "As notificações push permitem que aplicativos enviem informações ao usuário mesmo sem estarem abertos em primeiro plano, aparecendo na barra de notificações.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Sistemas Móveis (Android): Operações Básicas, Configuração e Atualização",
    "nivelSuperior": true
  },
  {
    "id": "info_sim_230",
    "text": "Sobre o modo avião no sistema Android, é correto afirmar que:",
    "options": [
      "A) Desativa permanentemente todas as conexões do dispositivo, sem possibilidade de reativação individual.",
      "B) Desativa todas as conexões sem fio, mas permite a reativação individual de Wi-Fi e Bluetooth.",
      "C) Desativa apenas o sinal de telefone celular, mantendo Wi-Fi e Bluetooth ativos.",
      "D) Funciona exclusivamente em dispositivos que possuem chip SIM.",
      "E) Desativa apenas as notificações de aplicativos, mantendo as conexões ativas."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. As conexões podem ser reativadas individualmente sem desativar o modo avião.",
      "Correta. O modo avião desativa todas as conexões, mas permite reativação individual de Wi-Fi e Bluetooth.",
      "Incorreta. Todas as conexões sem fio são desativadas, não apenas o sinal de telefone.",
      "Incorreta. O modo avião funciona em qualquer dispositivo, independentemente da presença de chip SIM.",
      "Incorreta. O modo avião desativa conexões sem fio, não apenas notificações."
    ],
    "generalExplanation": "O modo avião desativa todas as conexões sem fio (Wi-Fi, Bluetooth, dados móveis e telefone), mas permite que o usuário reative individualmente Wi-Fi e Bluetooth, mantendo o modo avião ativo.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Sistemas Móveis (Android): Operações Básicas, Configuração e Atualização",
    "nivelSuperior": true
  },
  {
    "id": "info_sim_231",
    "text": "Sobre a sincronização de contas no sistema Android, é correto afirmar que:",
    "options": [
      "A) A sincronização funciona apenas com contas Google, não suportando contas de terceiros.",
      "B) Permite manter dados como contatos, e-mails e eventos de calendário atualizados entre o dispositivo e a nuvem.",
      "C) Funciona exclusivamente com conexão Wi-Fi, não operando em redes móveis.",
      "D) Substitui completamente a necessidade de backup do dispositivo.",
      "E) Desativa todas as notificações de aplicativos enquanto a sincronização estiver ativa."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O Android suporta sincronização com contas Google e de diversos outros provedores.",
      "Correta. A sincronização mantém dados atualizados entre o dispositivo e a nuvem.",
      "Incorreta. A sincronização funciona tanto em Wi-Fi quanto em redes móveis.",
      "Incorreta. A sincronização não substitui o backup, que é um processo distinto.",
      "Incorreta. A sincronização não desativa notificações de aplicativos."
    ],
    "generalExplanation": "A sincronização de contas mantém dados como contatos, e-mails, eventos de calendário e configurações atualizados entre o dispositivo e os serviços de nuvem.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Sistemas Móveis (Android): Operações Básicas, Configuração e Atualização",
    "nivelSuperior": true
  },
  {
    "id": "info_sim_232",
    "text": "Sobre o backup no sistema Android, é correto afirmar que:",
    "options": [
      "A) O backup automático é realizado exclusivamente para a nuvem do Google, sem outras opções.",
      "B) Permite salvar dados como aplicativos, configurações e histórico de chamadas na nuvem ou em armazenamento local.",
      "C) Funciona apenas com dispositivos que possuem mais de 128 GB de armazenamento.",
      "D) Substitui completamente a sincronização de contas do dispositivo.",
      "E) Desativa todas as conexões sem fio enquanto o backup estiver em andamento."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O backup pode ser feito para a nuvem do Google ou para armazenamento local.",
      "Correta. O backup salva diversos tipos de dados na nuvem ou localmente.",
      "Incorreta. O backup funciona independentemente da capacidade de armazenamento.",
      "Incorreta. Backup e sincronização são processos distintos e complementares.",
      "Incorreta. O backup não desativa conexões sem fio."
    ],
    "generalExplanation": "O backup no Android permite salvar dados como aplicativos, configurações, histórico de chamadas e outros dados na nuvem ou em armazenamento local, garantindo a recuperação em caso de perda ou troca de dispositivo.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Sistemas Móveis (Android): Operações Básicas, Configuração e Atualização",
    "nivelSuperior": true
  },
  {
    "id": "info_sim_233",
    "text": "Sobre o processo de atualização do sistema operacional Android, é correto afirmar que:",
    "options": [
      "A) As atualizações são sempre instaladas automaticamente, sem qualquer confirmação do usuário.",
      "B) As atualizações podem ser baixadas via OTA (Over The Air) e geralmente requerem confirmação do usuário para instalação.",
      "C) As atualizações funcionam exclusivamente com conexão Wi-Fi, não sendo possível por redes móveis.",
      "D) As atualizações substituem completamente o kernel Linux do dispositivo.",
      "E) As atualizações são disponibilizadas simultaneamente para todos os dispositivos Android."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. As atualizações geralmente requerem confirmação do usuário.",
      "Correta. As atualizações OTA requerem confirmação e podem ser baixadas por diferentes conexões.",
      "Incorreta. As atualizações podem ser baixadas tanto por Wi-Fi quanto por redes móveis.",
      "Incorreta. As atualizações não substituem completamente o kernel Linux.",
      "Incorreta. Devido à fragmentação, as atualizações não chegam simultaneamente a todos os dispositivos."
    ],
    "generalExplanation": "As atualizações do Android são distribuídas via OTA (Over The Air) e geralmente requerem confirmação do usuário para serem instaladas, podendo ser baixadas por Wi-Fi ou redes móveis.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Sistemas Móveis (Android): Operações Básicas, Configuração e Atualização",
    "nivelSuperior": true
  },
  {
    "id": "info_sim_234",
    "text": "Sobre as permissões de aplicativos no sistema Android, é correto afirmar que:",
    "options": [
      "A) As permissões são concedidas automaticamente na instalação, sem qualquer confirmação do usuário.",
      "B) O usuário pode conceder ou negar permissões individualmente, tanto na instalação quanto posteriormente nas configurações.",
      "C) As permissões são irrevogáveis após a instalação do aplicativo.",
      "D) As permissões funcionam apenas com aplicativos nativos do sistema operacional.",
      "E) As permissões substituem completamente a necessidade de senha de desbloqueio do dispositivo."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O usuário pode negar permissões durante ou após a instalação.",
      "Correta. As permissões podem ser gerenciadas individualmente pelo usuário.",
      "Incorreta. As permissões podem ser revogadas a qualquer momento nas configurações.",
      "Incorreta. As permissões se aplicam a todos os aplicativos instalados.",
      "Incorreta. As permissões não substituem a senha de desbloqueio do dispositivo."
    ],
    "generalExplanation": "No Android, o usuário pode conceder ou negar permissões individualmente, tanto durante a instalação quanto posteriormente nas configurações do aplicativo, garantindo maior controle sobre a privacidade.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Sistemas Móveis (Android): Operações Básicas, Configuração e Atualização",
    "nivelSuperior": true
  },
  {
    "id": "info_sim_235",
    "text": "Sobre o modo de economia de bateria no sistema Android, é correto afirmar que:",
    "options": [
      "A) Desativa permanentemente todas as conexões sem fio do dispositivo.",
      "B) Reduz o consumo de energia limitando atividades em segundo plano, sincronização e desempenho do processador.",
      "C) Funciona apenas com dispositivos que possuem bateria de mais de 5000 mAh.",
      "D) Desativa completamente o sistema operacional, colocando o dispositivo em modo de espera.",
      "E) Substitui completamente a necessidade de recarga da bateria do dispositivo."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O modo de economia não desativa permanentemente as conexões.",
      "Correta. O modo de economia reduz atividades em segundo plano e o desempenho para economizar energia.",
      "Incorreta. O modo de economia funciona independentemente da capacidade da bateria.",
      "Incorreta. O modo de economia não desativa o sistema operacional.",
      "Incorreta. O modo de economia apenas reduz o consumo, não elimina a necessidade de recarga."
    ],
    "generalExplanation": "O modo de economia de bateria reduz o consumo de energia limitando atividades em segundo plano, sincronização automática, brilho da tela e desempenho do processador.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Sistemas Móveis (Android): Operações Básicas, Configuração e Atualização",
    "nivelSuperior": true
  },
  {
    "id": "info_sim_236",
    "text": "Sobre a desinstalação de aplicativos no sistema Android, é correto afirmar que:",
    "options": [
      "A) A desinstalação remove permanentemente todos os dados do dispositivo, incluindo contatos e fotos.",
      "B) A desinstalação remove o aplicativo e seus dados, mas pode manter dados na nuvem se a sincronização estiver ativa.",
      "C) A desinstalação funciona apenas com aplicativos nativos do sistema operacional.",
      "D) A desinstalação desativa completamente o sistema operacional do dispositivo.",
      "E) A desinstalação substitui completamente a necessidade de backup do dispositivo."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A desinstalação remove apenas o aplicativo e seus dados, não todos os dados do dispositivo.",
      "Correta. A desinstalação remove o aplicativo, mas dados na nuvem podem ser preservados.",
      "Incorreta. A desinstalação funciona com qualquer aplicativo instalado.",
      "Incorreta. A desinstalação não desativa o sistema operacional.",
      "Incorreta. A desinstalação não substitui o backup do dispositivo."
    ],
    "generalExplanation": "A desinstalação remove o aplicativo e seus dados locais, mas dados sincronizados com a nuvem (como contatos e fotos) podem ser preservados se a sincronização estiver ativa.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Sistemas Móveis (Android): Operações Básicas, Configuração e Atualização",
    "nivelSuperior": true
  },
  {
    "id": "info_sim_237",
    "text": "Sobre o processo de atualização OTA (Over The Air) no sistema Android e suas implicações técnicas, é correto afirmar que:",
    "options": [
      "A) As atualizações OTA substituem completamente o sistema operacional, incluindo o kernel Linux, a cada nova versão.",
      "B) As atualizações OTA são pacotes incrementais ou completos que modificam partições específicas do sistema, podendo exigir reinicialização do dispositivo.",
      "C) As atualizações OTA funcionam exclusivamente com conexão Wi-Fi, não sendo possível por redes móveis.",
      "D) As atualizações OTA são disponibilizadas simultaneamente para todos os dispositivos Android, independentemente do fabricante.",
      "E) As atualizações OTA desativam permanentemente todas as conexões sem fio durante o processo de instalação."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. As atualizações não substituem completamente o kernel Linux a cada versão.",
      "Correta. As atualizações OTA são pacotes que modificam partições específicas e exigem reinicialização.",
      "Incorreta. As atualizações podem ser baixadas tanto por Wi-Fi quanto por redes móveis.",
      "Incorreta. Devido à fragmentação, as atualizações chegam em momentos diferentes conforme o fabricante.",
      "Incorreta. As atualizações não desativam permanentemente as conexões."
    ],
    "generalExplanation": "As atualizações OTA são pacotes que podem ser incrementais (apenas alterações) ou completos (imagem completa), modificando partições específicas do sistema e geralmente exigindo reinicialização.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Sistemas Móveis (Android): Operações Básicas, Configuração e Atualização",
    "nivelSuperior": true
  },
  {
    "id": "info_sim_238",
    "text": "Sobre a segurança no sistema Android, considerando os mecanismos de proteção integrados ao sistema operacional, é correto afirmar que:",
    "options": [
      "A) O Android utiliza apenas senha alfanumérica como mecanismo de segurança, sem suporte a biometria.",
      "B) O Android utiliza sandboxing, permissões granulares, criptografia e autenticação biométrica como mecanismos de segurança integrados.",
      "C) A segurança do Android depende exclusivamente de antivírus de terceiros, sem mecanismos nativos.",
      "D) O Android não possui mecanismos de criptografia de dados, dependendo exclusivamente de aplicativos externos.",
      "E) A segurança do Android funciona apenas com dispositivos que possuem chip de segurança dedicado."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O Android suporta diversos mecanismos, incluindo biometria.",
      "Correta. O Android integra sandboxing, permissões granulares, criptografia e biometria.",
      "Incorreta. O Android possui mecanismos de segurança nativos, incluindo o Google Play Protect.",
      "Incorreta. O Android possui criptografia integrada ao sistema operacional.",
      "Incorreta. Os mecanismos de segurança funcionam em dispositivos com e sem chip dedicado."
    ],
    "generalExplanation": "O Android integra múltiplos mecanismos de segurança, incluindo sandboxing (isolamento de aplicativos), permissões granulares, criptografia de armazenamento e autenticação biométrica (digital, facial).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Sistemas Móveis (Android): Operações Básicas, Configuração e Atualização",
    "nivelSuperior": true
  },
  {
    "id": "info_sim_239",
    "text": "Sobre a fragmentação do sistema Android e suas implicações para usuários e administradores, é correto afirmar que:",
    "options": [
      "A) A fragmentação garante que todos os dispositivos Android recebam atualizações simultaneamente.",
      "B) A fragmentação refere-se à existência de múltiplas versões do sistema em diferentes dispositivos, impactando a disponibilidade de atualizações e compatibilidade de aplicativos.",
      "C) A fragmentação funciona apenas com dispositivos que possuem mais de 64 GB de armazenamento.",
      "D) A fragmentação substitui completamente a necessidade de atualização do sistema operacional.",
      "E) A fragmentação desativa permanentemente todas as conexões sem fio do dispositivo."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A fragmentação é justamente o oposto: as atualizações chegam em momentos diferentes.",
      "Correta. A fragmentação refere-se à coexistência de múltiplas versões do sistema.",
      "Incorreta. A fragmentação independe da capacidade de armazenamento.",
      "Incorreta. A fragmentação não substitui a necessidade de atualização.",
      "Incorreta. A fragmentação não desativa conexões sem fio."
    ],
    "generalExplanation": "A fragmentação do Android refere-se à coexistência de múltiplas versões do sistema em diferentes dispositivos, impactando a velocidade de distribuição de atualizações e a compatibilidade de aplicativos.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Sistemas Móveis (Android): Operações Básicas, Configuração e Atualização",
    "nivelSuperior": true
  },
  {
    "id": "info_sim_240",
    "text": "Sobre a desinstalação de aplicativos no sistema Android e a preservação de dados, considerando os mecanismos de sincronização e backup integrados ao sistema, é correto afirmar que:",
    "options": [
      "A) A desinstalação remove permanentemente todos os dados do dispositivo, incluindo contatos, fotos e configurações do sistema.",
      "B) A desinstalação remove o aplicativo e seus dados locais, mas dados sincronizados com a nuvem podem ser preservados, permitindo recuperação futura.",
      "C) A desinstalação funciona apenas com aplicativos nativos do sistema operacional, não sendo possível remover aplicativos de terceiros.",
      "D) A desinstalação desativa completamente o sistema operacional, exigindo reinstalação completa do Android.",
      "E) A desinstalação substitui completamente a necessidade de backup e sincronização do dispositivo."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A desinstalação remove apenas o aplicativo e seus dados, não todos os dados do dispositivo.",
      "Correta. A desinstalação remove o aplicativo, mas dados na nuvem podem ser preservados.",
      "Incorreta. A desinstalação funciona com qualquer aplicativo instalado, incluindo aplicativos de terceiros.",
      "Incorreta. A desinstalação não desativa o sistema operacional.",
      "Incorreta. A desinstalação não substitui o backup e a sincronização."
    ],
    "generalExplanation": "A desinstalação remove o aplicativo e seus dados locais, mas dados sincronizados com a nuvem (como contatos, fotos e configurações) podem ser preservados, permitindo recuperação futura.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Sistemas Móveis (Android): Operações Básicas, Configuração e Atualização",
    "nivelSuperior": true
  },
  {
    "id": "info_sim_241",
    "text": "Considere a imagem abaixo, que mostra um menu obtido por meio de um procedimento realizado no explorador de arquivos do Windows 7, em português.\nEste menu foi obtido por meio de um clique com o botão",
    "options": [
      "A) direito do mouse sobre uma pasta em uma unidade de disco.",
      "B) esquerdo do mouse sobre uma unidade não expandida de armazenamento, como um HD ou pen drive.",
      "C) direito do mouse sobre uma unidade não expandida de pen drive.",
      "D) esquerdo do mouse sobre uma pasta ou arquivo de um pen drive.",
      "E) direito do mouse sobre um arquivo em uma unidade de disco."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O clique sobre uma pasta gera um menu de contexto diferente, focado em ações de pasta (Abrir, Explorar, etc.).",
      "Incorreta. O clique esquerdo sobre uma unidade não expandida apenas a seleciona ou a expande, não abre o menu de contexto.",
      "Correta. Corresponde ao procedimento para exibir o menu de contexto de uma unidade de armazenamento na árvore de diretórios.",
      "Incorreta. O clique esquerdo seleciona o item, não abre menu de contexto.",
      "Incorreta. O menu de contexto de um arquivo possui opções específicas como Abrir, Editar, Enviar para, etc."
    ],
    "generalExplanation": "O menu de contexto específico descrito na questão original corresponde ao clique com o botão direito sobre o ícone de uma unidade removível (como um pen drive) não expandida na árvore de diretórios do Windows Explorer.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Gerenciamento de Arquivos e Pastas (Windows 7)",
    "nivelSuperior": true
  },
  {
    "id": "info_sim_242",
    "text": "No Windows, é permitido renomear um arquivo que esteja sendo usado por um programa.",
    "options": [
      "A) Certo - O item está certo.",
      "B) Errado - O item está errado."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O sistema operacional impõe um bloqueio (lock) no arquivo enquanto ele está em uso.",
      "Correta. Não é permitido renomear arquivos em uso no Windows."
    ],
    "generalExplanation": "O Windows bloqueia a renomeação, exclusão ou movimentação de arquivos que estão atualmente em uso (abertos) por algum programa, para evitar corrupção de dados e falhas no sistema.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Gerenciamento de Arquivos e Pastas (Windows)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_243",
    "text": "No Windows, a criação de arquivos usando alguns caracteres especiais não é permitida. Um arquivo com o nome de cress*go.pdf, por exemplo, não pode ser criado.",
    "options": [
      "A) Certo - O item está certo.",
      "B) Errado - O item está errado."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. O caractere * é reservado pelo sistema para funções de busca (wildcard) e não pode ser usado em nomes de arquivos.",
      "Incorreta. A afirmação do enunciado está correta."
    ],
    "generalExplanation": "O Windows proíbe o uso de certos caracteres especiais nos nomes de arquivos e pastas, são eles: \\ / : * ? \" < > |. O asterisco (*) está na lista de caracteres proibidos.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Gerenciamento de Arquivos e Pastas (Windows)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_244",
    "text": "No Explorador de Arquivos do Windows 8, o tamanho de um arquivo, em bytes, pode ser obtido por meio da opção Propriedades, disponível no menu exibido ao se clicar o botão direito do mouse sobre o arquivo.",
    "options": [
      "A) Certo - O item está certo.",
      "B) Errado - O item está errado."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A opção Propriedades é o caminho padrão para verificar atributos e o tamanho em bytes.",
      "Incorreta. A afirmação está tecnicamente correta."
    ],
    "generalExplanation": "A janela de Propriedades de um arquivo no Windows exibe metadados detalhados, incluindo o tamanho exato do arquivo em bytes, KB, MB, etc., na guia 'Geral'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Gerenciamento de Arquivos e Pastas (Windows 8)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_245",
    "text": "Os arquivos gravados em disco pelo Windows contêm alguns atributos, como, por exemplo, data de criação e tamanho.",
    "options": [
      "A) Certo - O item está certo.",
      "B) Errado - O item está errado."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Atributos e metadados são partes fundamentais da estrutura de arquivos do SO.",
      "Incorreta. A afirmação está correta."
    ],
    "generalExplanation": "O sistema de arquivos do Windows (NTFS, FAT32, exFAT) armazena metadados (atributos) para cada arquivo, incluindo data de criação, modificação, acesso, tamanho, permissões e atributos de sistema/oculto.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Gerenciamento de Arquivos e Pastas (Windows)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_246",
    "text": "Suponha que na pasta “Downloads” de um computador com sistema operacional Windows 10 há diversos arquivos, que ocupam 2 gigabytes no disco rígido, e que você não irá mais precisar deles. Assinale a alternativa que descreve uma forma correta de remover todos esses arquivos permanentemente, liberando espaço no disco rígido do computador.",
    "options": [
      "A) Abrir o “Explorador de arquivos”, clicar com o botão da direita do mouse na pasta “Downloads” e clicar na opção “Enviar para> Lixeira”.",
      "B) Abrir a pasta “Downloads” no “Explorador de arquivos”, pressionar as teclas Ctrl+ A para selecionar todos os arquivos e pressionar as teclas Shift+ Delete para removê-los.",
      "C) Abrir a pasta “Downloads” no “Explorador de arquivos”, clicar no botão “Selecionar tudo” e, em seguida, clicar no botão “Excluir”.",
      "D) Abrir a pasta “Downloads” no “Explorador de arquivos”, pressionar as teclas Shift+ A para selecionar todos os arquivos e pressionar Ctrl+ Delete para removê-los.",
      "E) Abrir o “Explorador de arquivos”, clicar com o botão da direita do mouse na pasta “Downloads” e clicar na opção “Esvaziar pasta”."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Enviar para a Lixeira não libera espaço permanentemente até que a Lixeira seja esvaziada.",
      "Correta. Ctrl+A seleciona tudo e Shift+Delete força a exclusão permanente, bypassando a Lixeira.",
      "Incorreta. O botão 'Excluir' (ou tecla Delete sozinha) envia os arquivos para a Lixeira.",
      "Incorreta. Shift+A não é o atalho para selecionar tudo (o correto é Ctrl+A).",
      "Incorreta. Não existe a opção nativa 'Esvaziar pasta' no menu de contexto padrão de pastas do Windows Explorer."
    ],
    "generalExplanation": "Para excluir arquivos permanentemente (sem enviar para a Lixeira), deve-se usar a combinação Shift + Delete. O Ctrl + A é o atalho para selecionar todos os itens da pasta.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Gerenciamento de Arquivos e Pastas (Windows 10)",
    "nivelSuperior": true
  },
  {
    "id": "info_sim_247",
    "text": "Biblioteca de Documentos a seguir foi extraída do Windows Explorer do MS-Windows 7, em sua configuração padrão.\nConsiderando que os ícones não foram personalizados, ou seja, mantém a sua imagem padrão, aquele que se refere a um atalho para um documento de texto é o",
    "options": [
      "A) Arquivo 1.",
      "B) Arquivo 2.",
      "C) Arquivo 3.",
      "D) Arquivo 4.",
      "E) Arquivo 5."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. O Arquivo 1 (conforme imagem original da prova) possui a seta indicativa de atalho.",
      "Incorreta. Ícone de arquivo padrão, sem seta de atalho.",
      "Incorreta. Ícone de arquivo padrão, sem seta de atalho.",
      "Incorreta. Ícone de arquivo padrão, sem seta de atalho.",
      "Incorreta. Ícone de arquivo padrão, sem seta de atalho."
    ],
    "generalExplanation": "No Windows, os atalhos são identificados visualmente por uma pequena seta curvada no canto inferior esquerdo do ícone do arquivo ou pasta.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Gerenciamento de Arquivos e Pastas (Windows 7)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_248",
    "text": "No Explorador de arquivos do Windows 10, em português, Ana clicou com o botão direito do mouse sobre a identificação de unidade de pen drive conectada no computador e selecionou as opções Novo> Pasta, para criar uma nova pasta onde pretende guardar seus documentos. O nome desta pasta poderá ser:",
    "options": [
      "A) 08-12-2018",
      "B) 08/12/2018",
      "C) Dia8_12:20",
      "D) <08_12_2018>",
      "E) 08\\12\\2018"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. O hífen (-) é um caractere válido para nomes de pastas no Windows.",
      "Incorreta. Contém a barra (/), que é proibida.",
      "Incorreta. Contém dois pontos (:), que são proibidos.",
      "Incorreta. Contém os sinais de menor e maior (< >), que são proibidos.",
      "Incorreta. Contém a barra invertida (\\), que é proibida."
    ],
    "generalExplanation": "O Windows não permite o uso dos seguintes caracteres em nomes de arquivos e pastas: \\ / : * ? \" < > |. A única alternativa que não contém nenhum desses caracteres proibidos é a A, que usa apenas hifens.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Gerenciamento de Arquivos e Pastas (Windows 10)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_249",
    "text": "Maria estava ensinando a Nina, a nova colega de trabalho, o procedimento adotado pelo departamento para tratar arquivos e pastas no Explorador de Arquivos do Windows 10, versão em português. Maria explicou a Nina que o ícone apresentado equivale à ação de",
    "options": [
      "A) colar itens em uma pasta.",
      "B) recortar arquivos",
      "C) colar apenas arquivos.",
      "D) copiar os itens selecionados para a área de transferência.",
      "E) transferir itens para uma pasta diferente."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Colar possui um ícone diferente (prancheta com folha).",
      "Incorreta. Recortar é representado por uma tesoura.",
      "Incorreta. A ação de colar não se restringe apenas a arquivos.",
      "Correta. O ícone em questão na prova original representa a função 'Copiar'.",
      "Incorreta. Transferir (mover) envolve recortar e colar ou arrastar, não é uma ação de ícone único padrão na barra superior."
    ],
    "generalExplanation": "O ícone padrão da barra de ferramentas do Windows Explorer que representa duas folhas sobrepostas refere-se à ação de Copiar para a Área de Transferência.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Gerenciamento de Arquivos e Pastas (Windows 10)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_250",
    "text": "Em uma pasta do Windows há três arquivos, assim nomeados: notafiscal.doc, pedido.doc, venda.doc. Um usuário precisa renomear o arquivo notafiscal.doc. A forma de realizar essa tarefa é:",
    "options": [
      "A) pressionar F1 e atribuir o nome recibo.doc.",
      "B) pressionar F2 e atribuir o nome recibo.doc.",
      "C) pressionar F2 e atribuir o nome venda.doc.",
      "D) pressionar F1 e atribuir o nome venda.doc."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. F1 é o atalho universal para abrir a Ajuda do Windows.",
      "Correta. F2 ativa o modo de renomeação e 'recibo.doc' é um nome válido e não conflitante.",
      "Incorreta. Já existe um arquivo chamado 'venda.doc' na pasta, o que geraria um erro de duplicidade.",
      "Incorreta. F1 abre a Ajuda e o nome 'venda.doc' já existe na pasta."
    ],
    "generalExplanation": "A tecla de atalho F2 no Windows Explorer é utilizada para renomear o arquivo ou pasta selecionado. Além disso, não podem existir dois arquivos com o mesmo nome na mesma pasta, o que invalida a tentativa de nomear como 'venda.doc'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Gerenciamento de Arquivos e Pastas (Windows)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_251",
    "text": "Windows Explorer é uma ferramenta do Windows para",
    "options": [
      "A) gerenciar arquivos.",
      "B) explorar sites na internet.",
      "C) explorar o sistema de ajuda e suporte.",
      "D) configurar os recursos de janela."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. É a definição exata da função do Windows Explorer.",
      "Incorreta. Navegadores de internet (como Edge, Chrome) fazem essa função.",
      "Incorreta. A Ajuda e Suporte é um aplicativo à parte.",
      "Incorreta. Configurações de janela e sistema ficam no Painel de Controle ou Configurações."
    ],
    "generalExplanation": "O Windows Explorer (atualmente chamado de Explorador de Arquivos) é o gerenciador de arquivos e pastas nativo do sistema operacional Windows, permitindo copiar, mover, excluir e organizar dados.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Gerenciamento de Arquivos e Pastas (Windows)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_252",
    "text": "É possível renomear uma pasta, mesmo que possua subpastas e diversos arquivos.",
    "options": [
      "A) Certo - O item está certo.",
      "B) Errado - O item está errado."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A estrutura interna não impede a renomeação do diretório pai.",
      "Incorreta. A afirmação está correta."
    ],
    "generalExplanation": "O Windows permite a renomeação de pastas independentemente do seu conteúdo (arquivos ou subpastas), desde que nenhum arquivo dentro dela esteja bloqueado por estar em uso no momento da operação.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Gerenciamento de Arquivos e Pastas (Windows)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_253",
    "text": "Em uma empresa, com rede interna ambiente Windows, os modelos de documentos oficiais estão centralizados na pasta Modelos compartilhada em modo Leitura aos usuários do domínio, no servidor de arquivos SERVDOC. Qual é o endereço para acessar o modelo oficio.dotx, no Windows Explorer, num computador com Windows 7?",
    "options": [
      "A) SERVDOC/modelos/oficio.dotx",
      "B) \\\\SERVDOC\\Modelos\\oficio.dotx",
      "C) SERVDOC.Modelos@oficio.dotx",
      "D) oficio.dotx@SERVDOC",
      "E) oficio.dotx@Modelos"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Utiliza barras normais e falta a indicação de caminho de rede (\\\\).",
      "Correta. Segue a sintaxe UNC correta para acessar recursos de rede no Windows.",
      "Incorreta. Sintaxe inexistente para caminhos de arquivos no Windows (lembra formato de e-mail).",
      "Incorreta. Sintaxe inválida para caminhos de rede.",
      "Incorreta. Sintaxe inválida para caminhos de rede."
    ],
    "generalExplanation": "O formato padrão para endereçamento de caminhos de rede no Windows (UNC - Universal Naming Convention) utiliza duas barras invertidas no início, seguidas do nome do servidor, barra invertida, nome do compartilhamento/pasta e o arquivo: \\\\servidor\\pasta\\arquivo.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Gerenciamento de Arquivos e Pastas (Redes Windows)",
    "nivelSuperior": true
  },
  {
    "id": "info_sim_254",
    "text": "C:\\Downloads\nC:\\Downloads\\Aulas\nC:\\Downloads\\Projetos\nC:\\Downloads\\Projetos\\Casa Nova\nCom relação à estrutura das pastas e subpastas apresentada, e considerando que todas as pastas estão configuradas para permitir a escrita e a leitura para todos os usuários, bem como guardar arquivos, assinale a alternativa correta.",
    "options": [
      "A) O arquivo de imagem Casa Nova está dentro da pasta Projetos.",
      "B) A pasta Downloads só poderá ser apagada se as respectivas subpastas forem anteriormente excluídas.",
      "C) A exclusão de Projetos excluirá Casa Nova.",
      "D) O arquivo Projetos pode ser recortado e colado na pasta Aulas.",
      "E) Aulas e Projetos são arquivos com a extensão oculta."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. 'Casa Nova' é listado como um subdiretório de 'Projetos' (C:\\Downloads\\Projetos\\Casa Nova), não necessariamente um arquivo de imagem.",
      "Incorreta. O Windows permite excluir pastas que contenham subpastas e arquivos; o sistema apaga tudo recursivamente.",
      "Correta. Sendo 'Casa Nova' um item dentro de 'Projetos', a exclusão da pasta 'Projetos' resultará na exclusão de 'Casa Nova'.",
      "Incorreta. 'Projetos' é uma pasta, não um arquivo. Além disso, mover uma pasta para dentro de outra de mesmo nível é possível, mas a alternativa C é a conceitualmente mais precisa sobre a hierarquia.",
      "Incorreta. A notação indica que são pastas (diretórios) devido à estrutura de caminho (path)."
    ],
    "generalExplanation": "A estrutura mostra que 'Casa Nova' é uma subpasta (ou arquivo) dentro de 'Projetos'. No Windows, ao excluir um diretório pai, todo o seu conteúdo (subpastas e arquivos) é excluído em cascata.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Gerenciamento de Arquivos e Pastas (Windows)",
    "nivelSuperior": true
  },
  {
    "id": "info_sim_255",
    "text": "A opção Criar atalho, disponível ao se clicar o botão direito do mouse sobre um arquivo no Explorador de Arquivos do Windows 8.1, tem a função de criar um atalho para este arquivo e enviá-lo automaticamente para a Área de Trabalho.",
    "options": [
      "A) Certo - O item está certo.",
      "B) Errado - O item está errado."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O atalho não é enviado automaticamente para a Área de Trabalho.",
      "Correta. A afirmação é falsa, pois o atalho é criado no diretório atual."
    ],
    "generalExplanation": "A opção 'Criar atalho' no menu de contexto gera o atalho na mesma pasta onde o arquivo original está localizado. Para criar um atalho diretamente na Área de Trabalho, deve-se usar a opção 'Enviar para' > 'Área de trabalho (criar atalho)'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Gerenciamento de Arquivos e Pastas (Windows 8.1)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_256",
    "text": "Em editores de planilhas, assinale a alternativa que apresenta o significado de referência absoluta de célula e como ela é indicada no Excel.",
    "options": [
      "A) Uma célula que não muda ao copiar a fórmula; indicada por cifrão($) antes da coluna e linha, como $A$1",
      "B) Uma célula que muda apenas a coluna; indicada por $ antes da coluna, como $A1",
      "C) Uma célula que muda apenas a linha; indicada por $ antes da linha, como A$1",
      "D) Não existe referência absoluta; todas as referências são relativas",
      "E) Não se aplica"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. O cifrão antes da coluna e da linha ($) trava ambas as coordenadas, caracterizando a referência absoluta.",
      "Incorreta. O cifrão apenas antes da coluna ($A1) cria uma referência mista, onde a coluna é fixa, mas a linha é relativa.",
      "Incorreta. O cifrão apenas antes da linha (A$1) cria uma referência mista, onde a linha é fixa, mas a coluna é relativa.",
      "Incorreta. A referência absoluta existe e é um dos conceitos fundamentais de manipulação de fórmulas no Excel.",
      "Incorreta. Alternativa inexistente ou inválida para o contexto."
    ],
    "generalExplanation": "A referência absoluta fixa tanto a coluna quanto a linha, impedindo que a referência seja alterada quando a fórmula é copiada ou arrastada para outras células. No Excel, isso é feito utilizando o símbolo de cifrão ($) antes da letra da coluna e do número da linha (ex: $A$1).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Microsoft Excel - Referências de Célula",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_257",
    "text": "No Microsoft Excel 2016, qual fórmula você usaria para somar todos os valores em uma célula de uma coluna específica?",
    "options": [
      "A) =MÁXIMO()",
      "B) =MÍNIMO()",
      "C) =SOMA()",
      "D) =PROCV()",
      "E) Não se aplica"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. A função =MÁXIMO() retorna apenas o maior valor de um intervalo, não a soma.",
      "Incorreta. A função =MÍNIMO() retorna apenas o menor valor de um intervalo.",
      "Correta. A função =SOMA() é destinada a calcular o total da adição dos valores especificados.",
      "Incorreta. A função =PROCV() é usada para pesquisa vertical em tabelas, não para operações matemáticas de adição.",
      "Incorreta. Alternativa inexistente ou inválida para o contexto."
    ],
    "generalExplanation": "A função =SOMA() é a ferramenta padrão e específica no Excel para realizar a adição de um intervalo de células, números ou combinações de ambos.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Microsoft Excel - Funções Matemáticas",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_258",
    "text": "A tabela a seguir foi criada em um texto elaborado no Microsoft Excel 0365 em português.\nA fórmula \"=MAIOR(B4:D4;2)\" foi digitada na célula A5 (que está formatada no padrão contábil Real Brasileiro). Qual valor a célula irá apresentar?",
    "options": [
      "A) R$ 189,00.",
      "B) R$ 85,00.",
      "C) R$ 275,00.",
      "D) R$ 480,00.",
      "E) R$ 510,00."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A função =MAIOR(matriz; k) retorna o k-ésimo maior valor do conjunto de dados. O valor R$ 189,00 corresponde ao segundo maior valor.",
      "Incorreta. Representaria outro valor da tabela.",
      "Incorreta. Representaria outro valor da tabela.",
      "Incorreta. Representaria outro valor da tabela.",
      "Incorreta. Representaria outro valor da tabela."
    ],
    "generalExplanation": "A função =MAIOR(matriz; k) retorna o k-ésimo maior valor de um conjunto de dados. O argumento '2' indica que a função retornará o segundo maior valor presente no intervalo B4:D4.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Microsoft Excel - Funções Estatísticas",
    "nivelSuperior": true
  },
  {
    "id": "info_sim_259",
    "text": "Em uma empresa de contabilidade, um funcionário precisa analisar um conjunto de dados referente aos salários dos outros funcionários. Para isso, ele utiliza a planilha eletrônica Excel 2016.\nSuponha que os salários dos funcionários estejam listados na coluna A, da célula A1 até A100. Ele deseja aplicar um aumento de 8% para todos os funcionários que recebem um salário igual ou inferior a R$ 3.000,00.\nQual fórmula ele deve inserir na célula B1 e arrastar até a célula B100 para calcular os novos salários, considerando o aumento de 8% para os funcionários que se enquadram na condição mencionada?",
    "options": [
      "A) =SE(A1<= 10000; A1= ou- 1,08;+ A1)",
      "B) =SE+(A2<= 30000; A1= 1,08;- A1)",
      "C) =SE(A1<= 3000; A1* 1,08; A1)",
      "D) =SE+(A1<= 300; A1* 1,08;- A1)",
      "E) Não se aplica"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Apresenta erros graves de sintaxe ('ou-', '+ A1') e testa o valor errado (10000).",
      "Incorreta. A função não aceita '+' após o nome (=SE+), e a lógica matemática está incorreta.",
      "Correta. A sintaxe está correta para o Excel em português: =SE(teste_lógico; valor_se_verdadeiro; valor_se_falso). Multiplicar por 1,08 aplica o aumento de 8%.",
      "Incorreta. Erro de sintaxe ('=SE+') e valor de teste incorreto (300).",
      "Incorreta. Alternativa inexistente."
    ],
    "generalExplanation": "A função SE testa uma condição. Se A1 for menor ou igual a 3000, multiplica-se o valor por 1,08 (o que equivale a adicionar 8%). Caso contrário, mantém o valor original de A1.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Microsoft Excel - Função SE",
    "nivelSuperior": true
  },
  {
    "id": "info_sim_260",
    "text": "Leia o trecho abaixo.\n“Use esta função para selecionar um valor entre 254 valores, com base no número de índice.”\nQual função do MS-Excel 2016 deve ser utilizada para desempenhar a ação descrita acima?",
    "options": [
      "A) CORRESP.",
      "B) PROCV",
      "C) PROCURAR.",
      "D) ESCOLHER.",
      "E) Não se aplica"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. A função CORRESP (MATCH) retorna a posição relativa de um item em um intervalo.",
      "Incorreta. PROCV (VLOOKUP) pesquisa um valor na primeira coluna de uma tabela e retorna um valor na mesma linha de outra coluna.",
      "Incorreta. PROCURAR (SEARCH) localiza uma string de texto dentro de outra.",
      "Correta. A função ESCOLHER seleciona um valor de uma lista de argumentos com base em um número de índice.",
      "Incorreta. Alternativa inexistente."
    ],
    "generalExplanation": "A função ESCOLHER (CHOOSE em inglês) usa um índice para retornar um valor de uma lista de valores (até 254 argumentos).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Microsoft Excel - Função ESCOLHER",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_261",
    "text": "No Excel, a função SE permite realizar análises condicionais em seus dados, executando diferentes ações com base no resultado de um teste lógico. Essa função é essencial para automatizar tarefas e tomar decisões de forma eficiente em suas planilhas.\nUm funcionário precisa analisar o desempenho de vendas de uma equipe, classificando cada vendedor como \"Atingiu a meta\" ou \"Não atingiu a meta\", considerando que a meta de vendas é R$ 10.000,00.\nQual fórmula ele deve utilizar na célula C2 para exibir a classificação correta do vendedor, com base no valor de vendas presente na célula B2?",
    "options": [
      "A) =SE(B2<=10000;\"Não atingiu a meta\";+\"Atingiu a meta\")",
      "B) =SE(B2>=10000;\"Atingiu a meta\";\"Não atingiu a meta\")",
      "C) =SE(B2<10000=;\"Não atingiu a meta\";=\"Atingiu a meta\")",
      "D) =SE(B2>10000;=\"Atingiu a meta\";\"Não atingiu a meta\")",
      "E) Não se aplica"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Apresenta erro de sintaxe com o sinal de '+' antes do texto na terceira condição.",
      "Correta. A lógica e a sintaxe estão perfeitas para o Excel em português.",
      "Incorreta. Contém erros de sintaxe ('<10000=' e '=\"Atingiu...').",
      "Incorreta. Contém erro de sintaxe (='\"Atingiu...'). Além disso, se for exatamente 10000, a meta foi atingida, mas a fórmula a classificaria como não atingida.",
      "Incorreta. Alternativa inexistente."
    ],
    "generalExplanation": "A função avalia se B2 é maior ou igual a 10000. Se verdadeiro, retorna o texto 'Atingiu a meta'. Se falso, retorna 'Não atingiu a meta'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Microsoft Excel - Função SE",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_262",
    "text": "Um usuário criou uma planilha utilizando o Microsoft Excel 2019, em sua versão em Português do Brasil e nas configurações padrão, como mostrado no print abaixo: Sabe-se que fórmulas foram digitadas nas células A7 e B7, de forma a obter os valores exibidos. Assinale a opção que apresenta as fórmulas corretas que foram digitadas, respectivamente, nas células A7 e B7:",
    "options": [
      "A) =MÍNIMO(A1;A6)/=MÁXIMO(B1:B6)",
      "B) =MÍNIMO(A1:A6)/=MÁXIMO(B1:B6)",
      "C) =MÍNIMO(A1:A6)/=MÁXIMO(B1;B6)",
      "D) =MÍNIMO(A1;A6)/=MÁXIMO(B1;B6)",
      "E) Não se aplica"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O uso de ';' em A1;A6 avalia apenas as duas células, ignorando o intervalo entre elas.",
      "Correta. Ambas as fórmulas utilizam a sintaxe correta de intervalo contínuo (dois pontos).",
      "Incorreta. A fórmula MÁXIMO usa ';' incorretamente para o intervalo.",
      "Incorreta. Ambas as fórmulas usam ';' incorretamente para definir os intervalos.",
      "Incorreta. Alternativa inexistente."
    ],
    "generalExplanation": "Para definir um intervalo contínuo de células no Excel, utiliza-se o sinal de dois pontos (:). O ponto e vírgula (;) é usado para separar argumentos ou células não contíguas.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Microsoft Excel - Funções MÍNIMO e MÁXIMO",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_263",
    "text": "Utilizando o Microsoft Excel 2019, em sua versão em Português do Brasil e nas configurações padrão, um usuário digitou funções nas células A6, B6 e C6 de uma planilha, como é possível observar na imagem abaixo: Considerando as funções digitadas, os valores corretos obtidos nas células A6, B6 e C6 são, respectivamente:",
    "options": [
      "A) 4, 3 e 4.",
      "B) 5, 4 e 4.",
      "C) 5, 3 e 4.",
      "D) 4, 4 e 3.",
      "E) Não se aplica"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Os valores obtidos correspondem aos resultados das funções aplicadas na planilha.",
      "Incorreta.",
      "Incorreta.",
      "Incorreta.",
      "Incorreta."
    ],
    "generalExplanation": "Avaliação dos resultados retornados pelas funções configuradas nas células A6, B6 e C6 no Excel 2019.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Microsoft Excel - Funções Diversas",
    "nivelSuperior": true
  },
  {
    "id": "info_sim_264",
    "text": "No Microsoft Excel 2019, em português e com as configurações padrão, um usuário deseja calcular a média aritmética dos valores contidos nas células A1, A2 e A3. Para isso, ele testou as seguintes fórmulas:\nI. =MÉDIA(A1:A3)\nII. =MÉDIA(A1,A2,A3)\nIII. =SOMA(A1:A3)/3\nCom base no funcionamento das funções no Excel 2019, qual(is) dessas fórmulas retornará(ão) o valor correto da média dos números contidos nas células mencionadas?",
    "options": [
      "A) Apenas III.",
      "B) Apenas I e III.",
      "C) I, II e III.",
      "D) Apenas I.",
      "E) Não se aplica"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Ignora que a fórmula I também está correta.",
      "Correta. A fórmula I usa o intervalo corretamente e a III faz a soma dividida pela quantidade. A II falha na sintaxe regional (vírgula em vez de ponto e vírgula).",
      "Incorreta. Assume que a fórmula II funcionaria, o que não ocorre nas configurações padrão em PT-BR.",
      "Incorreta. Ignora que a fórmula III (matemática básica) também retorna a média corretamente.",
      "Incorreta. Alternativa inexistente."
    ],
    "generalExplanation": "No Excel em Português do Brasil, o separador de argumentos padrão é o ponto e vírgula (;), pois a vírgula (,) é o separador decimal. Portanto, a fórmula II geraria erro de sintaxe. As fórmulas I e III estão corretas.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Microsoft Excel - Função MÉDIA",
    "nivelSuperior": true
  },
  {
    "id": "info_sim_265",
    "text": "Na utilização do Microsoft Excel/2016, o ícone abaixo é utilizado para:",
    "options": [
      "A) Inserir",
      "B) Mesclar e Centralizar",
      "C) Alinhar à Esquerda",
      "D) Excluir",
      "E) Não se aplica"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. 'Inserir' é uma guia, não um ícone isolado de formatação.",
      "Correta. O ícone em questão representa o recurso Mesclar e Centralizar.",
      "Incorreta. O alinhamento à esquerda possui um ícone com linhas alinhadas à esquerda.",
      "Incorreta. 'Excluir' encontra-se no grupo 'Células'.",
      "Incorreta. Alternativa inexistente."
    ],
    "generalExplanation": "O botão Mesclar e Centralizar na guia Página Inicial é utilizado para combinar e centralizar o conteúdo de várias células selecionadas.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Microsoft Excel - Interface e Formatação",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_266",
    "text": "Para que serve a fórmula PROCV no Excel?",
    "options": [
      "A) Para somar uma série de números em uma célula.",
      "B) Para criar gráficos automáticos com base em dados de uma planilha.",
      "C) Para calcular a média de um intervalo de valores.",
      "D) Para buscar um valor em uma coluna e retornar um correspondente em outra coluna na mesma linha.",
      "E) Não se aplica"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Soma é realizada pela função =SOMA().",
      "Incorreta. Gráficos são criados pela guia 'Inserir', não por fórmulas.",
      "Incorreta. Média é calculada pela função =MÉDIA().",
      "Correta. Esta é a definição exata do PROCV.",
      "Incorreta. Alternativa inexistente."
    ],
    "generalExplanation": "O PROCV (Procura Vertical) pesquisa um valor na primeira coluna à esquerda de um intervalo e retorna um valor na mesma linha de uma coluna especificada pelo usuário.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Microsoft Excel - Função PROCV",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_267",
    "text": "Analise a imagem abaixo extraída de uma planilha elaborada no Microsoft Excel.\nÉ correto afirmar que a fórmula aplicada para definir a situação do aluno Felipe como “Aprovado” foi:",
    "options": [
      "A) =SE(B6> 7;\"Reprovado\";\"Aprovado\").",
      "B) =SE(\"Aprovado\"; B6> 7;\"Reprovado\").",
      "C) =SE(B6>= 7;\"Aprovado\";\"Reprovado\")",
      "D) =SE(\"Reprovado\"; B6>= 7;\"Aprovado\").",
      "E) Não se aplica"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. A lógica está invertida: se for maior que 7, reprovaria o aluno.",
      "Incorreta. O primeiro argumento da função SE deve ser um teste lógico, não um texto estático.",
      "Correta. Estrutura lógica e sintática corretas.",
      "Incorreta. O primeiro argumento é um texto, o que gera erro na função.",
      "Incorreta. Alternativa inexistente."
    ],
    "generalExplanation": "A fórmula testa se o valor em B6 (nota) é maior ou igual a 7. Em caso afirmativo, retorna 'Aprovado'; caso contrário, 'Reprovado'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Microsoft Excel - Função SE",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_268",
    "text": "Qual recurso do Excel permite fixar colunas ou linhas para que elas permaneçam visíveis ao rolar a planilha?",
    "options": [
      "A) Classificar e Filtrar.",
      "B) Tabela Dinâmica.",
      "C) Dividir Tela.",
      "D) Congelar Painéis.",
      "E) Não se aplica"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Serve para organizar ou ocultar dados, não para fixar painéis na tela.",
      "Incorreta. Tabela Dinâmica é usada para resumir e analisar grandes volumes de dados.",
      "Incorreta. Dividir Tela cria janelas separadas que podem ser roladas independentemente.",
      "Correta. É a nomenclatura exata do recurso para fixação.",
      "Incorreta. Alternativa inexistente."
    ],
    "generalExplanation": "A ferramenta 'Congelar Painéis', localizada na guia 'Exibir', é usada para travar linhas de cabeçalho ou colunas específicas durante a rolagem.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Microsoft Excel - Exibição e Navegação",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_269",
    "text": "Durante a instrução de um Inquérito Civil Público, a Promotoria de Justiça iniciou uma investigação sobre a qualidade dos serviços prestados pelas operadoras de serviços de telefonia móvel. Assim, foi requisitado a uma agência reguladora o número de reclamações registradas para cada uma das operadoras durante um certo período de tempo. Em resposta, foi apresentada a seguinte planilha elaborada no Microsoft Excel 2013.\nAssinale a alternativa que contém o resultado correto da função =CONT.VALORES(B2:E3) a ser inserida na célula B5.",
    "options": [
      "A) 12",
      "B) 8",
      "C) 43",
      "D) 64",
      "E) Não se aplica"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A função CONT.VALORES retorna a contagem de células não vazias no intervalo especificado.",
      "Incorreta.",
      "Incorreta.",
      "Incorreta.",
      "Incorreta."
    ],
    "generalExplanation": "A função CONT.VALORES conta o número de células que não estão vazias em um intervalo especificado.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Microsoft Excel - Função CONT.VALORES",
    "nivelSuperior": true
  },
  {
    "id": "info_sim_270",
    "text": "João é estudante da Universidade Federal de Roraima (UFRR) e está trabalhando em uma planilha no Microsoft Excel para organizar os dados de um projeto acadêmico. Ele precisa criar um gráfico para apresentar os resultados de suas análises de forma visual. No entanto, João ainda não está familiarizado com todos os recursos do Excel e deseja utilizar os menus para criar o gráfico.\nPara auxiliar João na criação de um gráfico a partir dos dados de sua planilha no Microsoft Excel do Microsoft 365 na versão “Desktop”, indique o caminho correto, utilizando os menus, para que ele possa inserir um gráfico no documento.",
    "options": [
      "A) Selecionar os dados — Menu \"Arquivo\" — Opção \"Criar gráfico\".",
      "B) Selecionar os dados — Menu \"Fórmulas\" — Grupo \"Inserir Gráfico\".",
      "C) Selecionar os dados — Menu \"Revisão\" — Opção \"Gráfico de Análise\".",
      "D) Selecionar os dados — Menu \"Inserir\" — Grupo \"Gráficos\" — Escolher o tipo de gráfico.",
      "E) Selecionar os dados — Menu \"Dados\" — Grupo \"Visualização Gráfica\"."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. O menu 'Arquivo' é usado para operações de nível de aplicação (Salvar, Imprimir, Exportar).",
      "Incorreta. O menu 'Fórmulas' contém apenas funções e bibliotecas.",
      "Incorreta. O menu 'Revisão' é para verificação ortográfica e proteção.",
      "Correta. O grupo 'Gráficos' está localizado dentro da guia 'Inserir'.",
      "Incorreta. O menu 'Dados' lida com importação e filtragem de dados."
    ],
    "generalExplanation": "No Excel, a inserção de elementos visuais e objetos externos, incluindo gráficos, é centralizada na guia 'Inserir'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Microsoft Excel - Criação de Gráficos",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_271",
    "text": "No setor de planejamento estratégico da Câmara Municipal de Araraquara, um funcionário recebeu uma planilha no Excel M365 com dados de frequência de comparecimento de vereadores em sessões plenárias, organizados por nome, data e presença(indicado com “Presente” ou “Ausente”). O objetivo é destacar, em cada linha da planilha, as datas em que os vereadores estiveram ausentes. Para isso, foi solicitado o uso do recurso de formatação condicional no Excel M365. Assinale a afirmativa, a seguir, que descreve corretamente como configurar a formatação condicional para destacar as datas cujo valor da célula na coluna de presença seja igual a “Ausente”.",
    "options": [
      "A) Inserir um filtro na coluna de Presença pelo menu “Dados”; filtrar pela palavra “Ausente”; e aplicar manualmente a cor desejada nas células.",
      "B) Selecionar toda a tabela; acessar o menu “Fórmulas”; criar uma nova regra condicional personalizada baseada no texto “Ausente”; e configurar as opções de preenchimento.",
      "C) Selecionar toda a coluna da tabela; acessar o menu “Página Inicial”; clicar em “Classificar e Filtrar”; e configurar uma nova regra para destacar células onde o texto seja “Ausente”.",
      "D) Acessar o menu “Exibir”; ativar o modo de Visualização de Fórmulas; selecionar a coluna Data; e aplicar uma formatação condicional baseada na fórmula=B2=\"Ausente\", ajustando a formatação de acordo com a necessidade.",
      "E) Selecionar as células da coluna de presença; acessar o menu “Página Inicial”; clicar em “Formatação Condicional”; escolher “Realçar Regras das Células”;selecionar a opção “É Igual a”; digitar “Ausente” no campo de texto; e definir a formatação desejada."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. Aplicar cor manualmente após filtrar não constitui formatação condicional dinâmica.",
      "Incorreta. O recurso de Formatação Condicional não está localizado no menu 'Fórmulas'.",
      "Incorreta. O botão 'Classificar e Filtrar' não é utilizado para configurar regras de formatação condicional.",
      "Incorreta. O modo 'Visualização de Fórmulas' na guia 'Exibir' serve para inspecionar fórmulas, não para aplicar formatação condicional.",
      "Correta. Descreve com precisão o caminho e as opções corretas no Excel M365."
    ],
    "generalExplanation": "Para aplicar formatação condicional baseada em um valor de texto específico no Excel, deve-se utilizar o menu 'Página Inicial' > 'Formatação Condicional' > 'Realçar Regras das Células' > 'É Igual a'.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Microsoft Excel - Formatação Condicional",
    "nivelSuperior": true
  },
  {
    "id": "info_sim_272",
    "text": "As células de uma planilha que está sendo elaborada com o auxílio do programa MS-Excel 2016, em sua configuração padrão, foram preenchidas como mostrado a seguir:\nCaso a expressão matemática=SOMASE(B1:E5;\">=4\") seja inserida na célula E6, o valor numérico obtido será",
    "options": [
      "A) 11.",
      "B) 16.",
      "C) 28.",
      "D) 33.",
      "E) 42."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta.",
      "Incorreta.",
      "Correta. A soma dos valores no intervalo B1:E5 que atendem ao critério >=4 resulta em 28.",
      "Incorreta.",
      "Incorreta."
    ],
    "generalExplanation": "A função =SOMASE(intervalo; critério) soma os valores do intervalo que atendem ao critério especificado (neste caso, valores maiores ou iguais a 4).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Microsoft Excel - Função SOMASE",
    "nivelSuperior": true
  },
  {
    "id": "info_sim_273",
    "text": "No Microsoft Excel 365, o botão Mesclar e Centralizar, disponível na guia Página Inicial, possibilita",
    "options": [
      "A) Quebrar Texto automaticamente",
      "B) Mesclar e centralizar",
      "C) Girar o texto na diagonal ou vertical",
      "D) Aumentar o tamanho da fonte",
      "E) Classificar e filtrar"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta.",
      "Correta. O ícone em questão do grupo Alinhamento possibilita mesclar e centralizar o conteúdo de células selecionadas.",
      "Incorreta.",
      "Incorreta.",
      "Incorreta."
    ],
    "generalExplanation": "O recurso Mesclar e Centralizar da guia Página Inicial combina e centraliza o conteúdo das células selecionadas em uma célula maior.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Microsoft Excel - Interface e Formatação",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_274",
    "text": "A planilha a seguir foi elaborada por meio do MS-Excel 2016, em sua configuração padrão, a fim de que um agente pudesse anotar 3 cotações distintas para cada um de 5 itens que precisam ser comprados.\nO agente digitou o cabeçalho na linha 1 e digitou todos os dados das colunas A a D. Em seguida, preencheu uma fórmula na célula E2 e, usando a alça de preenchimento de E2, preencheu as demais células de E3 a E6.\nAssinale a alternativa que apresenta a fórmula em E2 que corresponde ao enunciado e aos dados exibidos na planilha.",
    "options": [
      "A) =MENOR(16;18;15)",
      "B) =MENOR(B2:D2;D2)",
      "C) =MENOR(B2:D2;1)",
      "D) =MENOR(B2:D2)",
      "E) =MENOR(B2;D2)"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. A função MENOR não aceita múltiplos argumentos numéricos dessa forma e o enunciado exige uso de referências às células.",
      "Incorreta. O segundo argumento (k) deve ser uma posição numérica (ex: 1), não uma célula.",
      "Correta. =MENOR(B2:D2;1) retorna o menor valor (k=1) dentro do intervalo contínuo de B2 a D2.",
      "Incorreta. A função MENOR exige obrigatoriamente o segundo argumento k.",
      "Incorreta. O ponto e vírgula considera apenas células individuais e o argumento k está ausente."
    ],
    "generalExplanation": "Para obter a menor cotação entre os valores em B2, C2 e D2, utiliza-se a função MENOR(matriz; k), onde k=1 indica o menor valor do intervalo contínuo B2:D2.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Microsoft Excel - Função MENOR",
    "nivelSuperior": true
  },
  {
    "id": "info_sim_275",
    "text": "Em muitas instituições públicas, é fundamental organizar dados em planilhas de modo que seja simples recuperar informações relevantes, gerar relatórios de desempenho e otimizar a tomada de decisões. Funções de pesquisa e de soma condicional, como o PROCV, PROCH e SOMASE são especialmente úteis para automatizar processos de consulta de dados, evitando possíveis erros manuais e otimizando o tempo da equipe. Em uma empresa, o responsável pelo acompanhamento da quantidade de atendimentos mensais de cada colaborador utiliza a tabela a seguir, que mostra o colaborador na coluna A e a quantidade de atendimentos na coluna B. A intenção é criar uma fórmula que, ao informar o nome do colaborador em uma célula específica (B8), retorne a quantidade de atendimentos correspondente: Na célula B9, torna-se necessário inserir uma função de pesquisa para retornar a quantidade de atendimentos associada ao nome digitado em B8, considerando o Excel do Microsoft 365.\nAssinale, a seguir, a fórmula correta a ser inserida em B9, tendo em vista que a pesquisa deverá ser exata e, ainda, que a planilha está organizada verticalmente(colunas).",
    "options": [
      "A) =SOMASE(A2:A5;B8;B2:B5)",
      "B) =PROCV(A2;B2:B5;2;FALSO)",
      "C) =PROCV($B$8;$A$2:$B$5;2;FALSO)",
      "D) =PROCH($B$8;$A$2:$B$5;2;FALSO)",
      "E) Não se aplica"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. A função SOMASE realiza soma condicional, não consulta/retorno de texto de uma tabela de pesquisa.",
      "Incorreta. O valor procurado é B8 e o intervalo de busca deve conter a coluna A.",
      "Correta. Procura o valor exato contido em B8 na primeira coluna da matriz A2:B5 e retorna o resultado da segunda coluna.",
      "Incorreta. PROCH é utilizado para pesquisas horizontais (em linhas), enquanto a tabela é disposta verticalmente em colunas.",
      "Incorreta. Alternativa inexistente."
    ],
    "generalExplanation": "A função PROCV(Valor_Procurado; Matriz_Tabela; Núm_Índice_Coluna; [Correspondência_Exata]) pesquisa um valor na primeira coluna de uma tabela organizada verticalmente e retorna o valor correspondente na coluna indicada.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Microsoft Excel - Função PROCV",
    "nivelSuperior": true
  },
  {
    "id": "info_sim_276",
    "text": "Na célula “A10” da planilha abaixo(Excel) contém uma fórmula que é bastante utilizada em qualquer organização. Assinale a alternativa que indique corretamente o resultado a ser revelado na célula “A10”.",
    "options": [
      "A) 2",
      "B) 3",
      "C) 4",
      "D) 1"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. O resultado da fórmula na célula A10 da planilha é 2.",
      "Incorreta.",
      "Incorreta.",
      "Incorreta."
    ],
    "generalExplanation": "Resolução do cálculo da fórmula configurada na célula A10 da planilha informada na questão.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Microsoft Excel - Fórmulas",
    "nivelSuperior": true
  },
  {
    "id": "info_sim_277",
    "text": "A figura a seguir apresenta a imagem de uma planilha do Microsoft Excel: Suponha que, na posição B6 da planilha, escrevemos o comando: =MÉDIASE(B2:B4;\">=5\") e, em seguida, clicamos no canto inferior direito de B6 e arrastamos até a célula D6. O número que aparecerá em D6 será",
    "options": [
      "A) 7,0",
      "B) 6,5",
      "C) 5,5",
      "D) 5,0",
      "E) 6,0"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta.",
      "Correta. Ao arrastar a fórmula para D6, a referência ajusta-se para =MÉDIASE(D2:D4;\">=5\"), resultando em 6,5.",
      "Incorreta.",
      "Incorreta.",
      "Incorreta."
    ],
    "generalExplanation": "Ao copiar/arrastar uma fórmula com referências relativas duas colunas para a direita, a fórmula em D6 torna-se =MÉDIASE(D2:D4;\">=5\"), calculando a média dos valores >=5 da coluna D.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Microsoft Excel - Função MÉDIASE e Referências Relativas",
    "nivelSuperior": true
  },
  {
    "id": "info_sim_278",
    "text": "Sobre o dispositivo SSD(Solid-State Drive ou Unidade de Estado Sólido) é CORRETO afirmar:\nI- É uma tecnologia de armazenamento.\nII- Armazenamento não volátil de dados digitais.\nIII- Utiliza memória flash\nIV- Armazenamento volátil de dados digitais.",
    "options": [
      "A) Somente I e II estão corretos",
      "B) Somente I, II e IV estão corretos",
      "C) Somente I e IV estão corretos",
      "D) Somente I e III estão corretos",
      "E) Somente I, II e III estão corretos"
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. O item III também está correto.",
      "Incorreta. O item IV está incorreto (SSD não é volátil).",
      "Incorreta. O item IV está incorreto.",
      "Incorreta. O item II também está correto.",
      "Correta. As afirmativas I, II e III caracterizam perfeitamente o SSD."
    ],
    "generalExplanation": "O SSD é um dispositivo de armazenamento não volátil (mantém dados sem energia) baseado em semicondutores / memória flash.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Hardware - Armazenamento SSD",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_279",
    "text": "Durante a organização de um laboratório de informática, um técnico classificou corretamente os dispositivos conforme suas funções no sistema computacional.\nAssinale a alternativa em que a classificação dos periféricos está correta:",
    "options": [
      "A) Teclado(entrada), monitor(saída) e HD externo (armazenamento).",
      "B) Monitor(entrada), mouse(saída) e pen drive (processamento).",
      "C) Impressora(entrada), teclado(saída) e CD(memória principal).",
      "D) Mouse(armazenamento), scanner(saída) e HD (entrada)."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. O teclado envia informações para o sistema (entrada), o monitor exibe resultados (saída) e o HD externo guarda arquivos (armazenamento).",
      "Incorreta. Monitor é saída, mouse é entrada, pen drive é armazenamento.",
      "Incorreta. Impressora é saída, teclado é entrada, CD é mídia secundária.",
      "Incorreta. Mouse é entrada, scanner é entrada, HD é armazenamento."
    ],
    "generalExplanation": "A classificação básica dos periféricos divide-se em entrada (enviam dados à CPU), saída (recebem dados da CPU) e armazenamento (mantêm dados gravados).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Hardware - Periféricos",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_280",
    "text": "Um técnico em informática foi solicitado a avaliar o desempenho de um computador que apresenta lentidão durante a execução de múltiplos programas. Após análise, verificou-se que o problema está relacionado ao tipo de memória utilizada para armazenamento temporário de dados durante o processamento.\nConsiderando os conceitos de hardware, assinale a alternativa que identifica corretamente essa memória:",
    "options": [
      "A) HD, pois é responsável pelo armazenamento permanente de arquivos do sistema e do usuário.",
      "B) RAM, pois armazena temporariamente dados e instruções em uso pelo processador.",
      "C) Memória Permanente, pois permite leitura e gravação de dados utilizados durante a execução de programas.",
      "D) CD, pois é utilizado como memória principal para execução de aplicações"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. HD é memória secundária permanente.",
      "Correta. A memória RAM é a memória principal volátil de trabalho usada pelo processador.",
      "Incorreta. Memória permanente não serve como memória volátil de execução de programas.",
      "Incorreta. CD é mídia óptica de armazenamento."
    ],
    "generalExplanation": "A memória RAM (Random Access Memory) armazena temporariamente dados e instruções dos programas que estão sendo executados no momento pelo processador.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Hardware - Memória RAM",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_281",
    "text": "No que se refere aos conceitos de informática em geral, qual é a função principal da Memória RAM em um computador?",
    "options": [
      "A) Armazenar permanentemente todos os arquivos do usuário.",
      "B) Processar as instruções lógicas do sistema operacional.",
      "C) Armazenar temporariamente os dados que estão em uso pelo processador.",
      "D) Realizar a leitura de discos ópticos e mídias externas.",
      "E) Gerar as imagens que são enviadas para o monitor de vídeo."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Armazenamento permanente é função de discos rígidos/SSDs.",
      "Incorreta. O processamento de instruções é função da CPU.",
      "Correta. A RAM funciona como espaço de trabalho volátil para dados em processamento.",
      "Incorreta. Leitura de mídias ópticas é feita por drives de leitura.",
      "Incorreta. Gerar imagens é função do adaptador gráfico (GPU)."
    ],
    "generalExplanation": "A principal função da memória RAM é fornecer armazenamento volátil de alta velocidade para dados e instruções que o processador precisa acessar imediatamente.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Hardware - Memória RAM",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_282",
    "text": "Qual dos itens abaixo é um exemplo de periférico de saída de dados?",
    "options": [
      "A) Teclado numérico.",
      "B) Mouse óptico.",
      "C) Scanner de mesa.",
      "D) Impressora térmica.",
      "E) Microfone de lapela."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Teclado é periférico de entrada.",
      "Incorreta. Mouse é periférico de entrada.",
      "Incorreta. Scanner é periférico de entrada.",
      "Correta. A impressora é um periférico de saída pois transmite a informação processada ao usuário em meio físico.",
      "Incorreta. Microfone é periférico de entrada."
    ],
    "generalExplanation": "Periféricos de saída exibem ou reproduzem dados resultantes do processamento do computador para o usuário (ex: impressoras, monitores, caixas de som).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Hardware - Periféricos de Saída",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_283",
    "text": "Qual é a principal diferença de uso entre uma porta USB tipo A e uma entrada HDMI em um computador ou notebook?",
    "options": [
      "A) A porta USB é usada para conectar dispositivos e transferir dados, enquanto a HDMI transmite áudio e vídeo",
      "B) A porta HDMI é usada para carregar dispositivos móveis e a USB para transmitir dados",
      "C) A porta USB serve apenas para vídeo e a HDMI apenas áudio",
      "D) Ambas possuem a mesma função"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. USB é um barramento de propósito geral para periféricos e dados; HDMI é uma interface dedicada de áudio/vídeo digital.",
      "Incorreta. HDMI não serve para carregamento de dispositivos móveis.",
      "Incorreta. USB transmite dados diversos e HDMI transmite vídeo e áudio combinados.",
      "Incorreta. Têm finalidades completamente distintas."
    ],
    "generalExplanation": "A porta USB (Universal Serial Bus) é utilizada para conectar periféricos variados e transferir dados gerais, enquanto a porta HDMI (High-Definition Multimedia Interface) é dedicada à transmissão de sinais digitais de áudio e vídeo.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Hardware - Portas de Conexão",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_284",
    "text": "Um computador apresenta lentidão excessiva mesmo com boa quantidade de memória RAM instalada. Ao verificar o uso do disco, observa-se que ele opera constantemente próximo de 100% de utilização.\nQual das alternativas apresenta a causa mais provável e uma solução adequada?",
    "options": [
      "A) Processador com baixo clock; substituir a placa-mãe.",
      "B) Disco rígido (HDD) com baixa taxa de leitura/escrita; substituir por um SSD.",
      "C) Placa de vídeo integrada; instalar um driver genérico.",
      "D) Monitor com baixa taxa de atualização; alterar a resolução do sistema."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O gargalo reportado é no disco, não na CPU.",
      "Correta. HDDs mecânicos de baixa taxa de leitura/escrita provocam gargalo de 100% de uso de disco, sendo resolvido pela substituição por um SSD.",
      "Incorreta. A placa de vídeo não afeta o uso de disco.",
      "Incorreta. A taxa de atualização do monitor é irrelevante para o uso do disco."
    ],
    "generalExplanation": "Gargalos de 100% de uso de disco são comuns em HDDs mecânicos devido às suas baixas velocidades de leitura/escrita. A substituição por um SSD resolve o problema com taxas de acesso significativamente mais altas.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Hardware - Armazenamento e Desempenho",
    "nivelSuperior": true
  },
  {
    "id": "info_sim_285",
    "text": "A placa mãe é uma parte vital para qualquer computador. Referente as suas funcionalidades, identifique qual a alternativa que está INCORRETA.",
    "options": [
      "A) Não viabiliza as conexões elétricas de todos os dispositivos de um computador.",
      "B) Possuem determinadas controladoras integradas que chamamos de controladoras on-board.",
      "C) Elas funcionam em sincronia com a capacidade do processador e da memória RAM.",
      "D) Também denominada mainboard ou motherboard.",
      "E) Tem como função permitir que o processador se comunique com todos os periféricos instalados."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta (afirmação FALSA solicitada pela questão). A placa-mãe VIABILIZA sim todas as conexões elétricas e barramentos de comunicação entre os dispositivos.",
      "Incorreta (afirmação verdadeira). É comum possuir áudio, rede e vídeo on-board.",
      "Incorreta (afirmação verdadeira). Opera em sincronia de barramento com CPU e memória.",
      "Incorreta (afirmação verdadeira). Mainboard e motherboard são sinônimos de placa-mãe.",
      "Incorreta (afirmação verdadeira). É a principal ponte de comunicação da CPU com periféricos."
    ],
    "generalExplanation": "A questão solicita a alternativa INCORRETA. A alternativa A nega a função essencial da placa-mãe, que é viabilizar as interconexões elétricas e lógicas entre todos os componentes do computador.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Hardware - Placa-mãe",
    "nivelSuperior": true
  },
  {
    "id": "info_sim_286",
    "text": "Qual a estrutura usada para organizar arquivos e demais informações no meio digital, no ambiente dos sistemas operacionais?",
    "options": [
      "A) Diretórios.",
      "B) Assessórios.",
      "C) Painel de Controle.",
      "D) Propriedades do Sistema."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Diretórios são a estrutura fundamental de organização de arquivos em sistemas operacionais.",
      "Incorreta. 'Assessórios' não é um termo técnico de organização de arquivos.",
      "Incorreta. Painel de Controle é uma ferramenta de configuração do sistema, não estrutura de organização de arquivos.",
      "Incorreta. Propriedades do Sistema é uma ferramenta de informações e configuração do sistema."
    ],
    "generalExplanation": "Diretórios (ou pastas) são a estrutura hierárquica utilizada pelos sistemas operacionais para organizar e armazenar arquivos e informações.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Gerenciamento de Arquivos e Pastas",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_287",
    "text": "Julgue o item seguinte quanto aos conceitos básicos de redes de computadores, aos conceitos de organização e de gerenciamento de arquivos e aos procedimentos de segurança da informação.\nOs arquivos ecoturismo.docx e ecoturismo.pdf não podem fazer parte de uma mesma pasta, pois apresentam nomes idênticos.",
    "options": [
      "A) Certo",
      "B) Errado"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A afirmação é falsa porque os nomes completos (nome + extensão) são diferentes.",
      "Correta. Os arquivos têm extensões diferentes (.docx e .pdf), sendo considerados nomes distintos pelo sistema."
    ],
    "generalExplanation": "Os nomes dos arquivos são diferentes: 'ecoturismo.docx' e 'ecoturismo.pdf'. A extensão faz parte do nome do arquivo no sistema operacional, portanto são arquivos distintos e podem coexistir na mesma pasta.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Gerenciamento de Arquivos e Pastas",
    "nivelSuperior": true
  },
  {
    "id": "info_sim_288",
    "text": "No sistema Windows, a nomeação de arquivos e pastas obedece a algumas regras para tornar um nome válido. Nesse sentido, os nomes de",
    "options": [
      "A) arquivos limitam extensões de até dois caracteres.",
      "B) pastas podem conter letras minúsculas e números.",
      "C) pastas podem ter extensões, mas seu tamanho é limitado em dois caracteres.",
      "D) arquivos podem conter qualquer caractere especial disponível a partir do teclado."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Não há limitação de extensão a dois caracteres; extensões podem ter mais caracteres (ex: .docx, .xlsx).",
      "Correta. Pastas podem conter letras minúsculas, números e outros caracteres válidos.",
      "Incorreta. Pastas não possuem 'extensões' no mesmo sentido de arquivos, e não há tal limitação.",
      "Incorreta. Existem caracteres especiais proibidos em nomes de arquivos (\\ / : * ? \" < > |)."
    ],
    "generalExplanation": "No Windows, nomes de arquivos e pastas podem conter letras (maiúsculas ou minúsculas), números, espaços e alguns caracteres especiais, exceto os caracteres proibidos: \\ / : * ? \" < > |.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Gerenciamento de Arquivos e Pastas",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_289",
    "text": "Disponível na maioria dos programas do Windows, é uma área de armazenamento temporário de informações (arquivos ou pastas) que você copiou ou moveu de um lugar e planeja usar em algum outro lugar. Tal área recebe o nome de:",
    "options": [
      "A) Painel de Controle.",
      "B) Área de Transferência.",
      "C) Acesso Remoto.",
      "D) Facilidades de Acesso.",
      "E) Área de Restauração."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Painel de Controle é ferramenta de configuração do sistema.",
      "Correta. Área de Transferência é exatamente a definição de armazenamento temporário de dados copiados/recortados.",
      "Incorreta. Acesso Remoto refere-se a conexão e controle de computadores à distância.",
      "Incorreta. Facilidades de Acesso são recursos de acessibilidade do Windows.",
      "Incorreta. Área de Restauração refere-se a pontos de restauração do sistema."
    ],
    "generalExplanation": "A Área de Transferência (Clipboard) é o local de armazenamento temporário onde o Windows mantém dados copiados ou recortados até que sejam colados em outro destino.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Gerenciamento de Arquivos e Pastas",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_290",
    "text": "Obs.: considere que o usuário possui todas as permissões necessárias para completar a tarefa.\nUtilizando o Windows Explorer, um usuário realiza a operação de arrastar, com o botão esquerdo do mouse, um arquivo que está dentro de uma pasta do disco local C: para outra pasta do disco local D.\nAssinale a opção que indica o resultado dessa operação.",
    "options": [
      "A) Nada irá acontecer.",
      "B) O arquivo será copiado.",
      "C) O arquivo será movido.",
      "D) O Windows irá perguntar ao usuário o que ele deseja que seja feito.",
      "E) Um atalho será criado no disco local D."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A operação ocorrerá normalmente, pois o usuário possui permissões.",
      "Correta. Arrastar entre unidades diferentes resulta em cópia por padrão.",
      "Incorreta. Mover é o comportamento padrão apenas na mesma unidade. Entre unidades diferentes, o padrão é copiar.",
      "Incorreta. O Windows não pergunta por padrão; ele aplica a regra de cópia entre unidades diferentes.",
      "Incorreta. Criar atalho requer pressionar ALT ou CTRL+SHIFT durante o arraste."
    ],
    "generalExplanation": "No Windows, ao arrastar um arquivo entre unidades diferentes (C: para D:), a operação padrão é COPIAR. Para mover entre unidades diferentes, é necessário pressionar SHIFT durante o arraste.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Gerenciamento de Arquivos e Pastas",
    "nivelSuperior": true
  },
  {
    "id": "info_sim_291",
    "text": "O Windows é:",
    "options": [
      "A) um gerenciador de arquivos e pastas.",
      "B) um navegador.",
      "C) um sistema operacional.",
      "D) um banco de dados."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O gerenciador de arquivos e pastas é uma funcionalidade dentro do Windows, não a definição do próprio Windows.",
      "Incorreta. Navegador é um software para acessar a internet (ex: Edge, Chrome).",
      "Correta. Windows é um sistema operacional.",
      "Incorreta. Banco de dados é uma estrutura de armazenamento organizado de dados, não a definição do Windows."
    ],
    "generalExplanation": "O Windows é um sistema operacional desenvolvido pela Microsoft, responsável por gerenciar hardware e software do computador.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows 11 - Conceitos Básicos",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_292",
    "text": "São funcionalidades de um Sistema Operacional:\n1. Gerência do processador.\n2. Gerência de memória.\n3. Gerência de dispositivos.\n4. Gerência de arquivos.\nEstão corretos os itens:",
    "options": [
      "A) 1, 2, 3 e 4.",
      "B) 2, 3 e 4 apenas.",
      "C) 2 e 3 apenas.",
      "D) 1 e 4 apenas."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Todos os itens listados são funcionalidades fundamentais de um sistema operacional.",
      "Incorreta. Exclui erroneamente a gerência do processador.",
      "Incorreta. Exclui erroneamente a gerência do processador e de arquivos.",
      "Incorreta. Exclui erroneamente a gerência de memória e de dispositivos."
    ],
    "generalExplanation": "Um sistema operacional possui como funções principais: gerenciamento de processos (processador), memória, dispositivos de entrada/saída e arquivos.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows 11 - Conceitos Básicos",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_293",
    "text": "O recurso do Windows 11 que, quando acionado, mantém o computador ligado com baixo consumo de energia e com o monitor desligado é chamado:",
    "options": [
      "A) Suspender.",
      "B) Repousar.",
      "C) Desligar.",
      "D) Reiniciar.",
      "E) Desconectar."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Suspender é o recurso que mantém o PC em baixo consumo com o monitor desligado.",
      "Incorreta. 'Repousar' não é o nome oficial do recurso no Windows 11 em português.",
      "Incorreta. Desligar encerra completamente o sistema, não mantém o computador ligado.",
      "Incorreta. Reiniciar desliga e liga o computador novamente.",
      "Incorreta. Desconectar refere-se a encerrar sessão de usuário, não a modo de economia de energia."
    ],
    "generalExplanation": "O modo Suspender mantém o computador ligado com baixo consumo de energia, salvando o estado atual na memória RAM e desligando o monitor e outros componentes não essenciais.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows 11 - Interface e Funcionalidades",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_294",
    "text": "Para abrir o Menu Iniciar, do sistema operacional Windows 11, qual atalho deve ser utilizado?",
    "options": [
      "A) Ctrl + Alt + Del.",
      "B) Tecla Windows + I.",
      "C) Alt + Tab.",
      "D) Ctrl + Esc.",
      "E) Tecla Windows + Shift + M."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Ctrl + Alt + Del abre a tela de segurança com opções como Bloquear, Trocar usuário e Gerenciador de Tarefas.",
      "Incorreta. Windows + I abre as Configurações do Windows.",
      "Incorreta. Alt + Tab alterna entre janelas abertas.",
      "Correta. Ctrl + Esc é o atalho de teclado para abrir o Menu Iniciar.",
      "Incorreta. Windows + Shift + M maximiza janelas minimizadas."
    ],
    "generalExplanation": "O atalho Ctrl + Esc abre o Menu Iniciar no Windows. A tecla Windows também abre diretamente, mas entre as alternativas fornecidas, Ctrl + Esc é a correta.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows 11 - Interface e Funcionalidades",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_295",
    "text": "O Paint e o Bloco de Notas foram descontinuados no Windows 11 em favor de ferramentas de edição online integradas.",
    "options": [
      "A) Certo",
      "B) Errado"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Ambos os aplicativos permanecem no Windows 11.",
      "Correta. A afirmação é falsa; Paint e Bloco de Notas continuam disponíveis no Windows 11."
    ],
    "generalExplanation": "O Paint e o Bloco de Notas continuam presentes no Windows 11 como aplicativos instalados automaticamente. Eles não foram descontinuados.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows 11 - Aplicativos e Ferramentas",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_296",
    "text": "No Windows 10, o atalho Ctrl + Shift + Esc abre diretamente qual ferramenta?",
    "options": [
      "A) Gerenciador de Tarefas.",
      "B) Prompt de Comando.",
      "C) Painel de Controle.",
      "D) Configurações do Sistema."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Ctrl + Shift + Esc é o atalho direto para o Gerenciador de Tarefas.",
      "Incorreta. Prompt de Comando é aberto via Executar (cmd) ou Menu Iniciar.",
      "Incorreta. Painel de Controle pode ser aberto via busca ou Executar (control).",
      "Incorreta. Configurações do Sistema é aberto via Windows + I."
    ],
    "generalExplanation": "O atalho Ctrl + Shift + Esc abre diretamente o Gerenciador de Tarefas do Windows, sem passar pela tela de segurança do Ctrl + Alt + Del.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows 11 - Aplicativos e Ferramentas",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_297",
    "text": "O Bloco de Notas é um Software do sistema operacional Windows desde suas primeiras versões. Ele é amplamente utilizado para rotinas simples.\nConsiderando as funcionalidades desse software, assinale a alternativa correta.",
    "options": [
      "A) O Bloco de Notas permite salvar arquivos em formatos como .docx e .pdf diretamente.",
      "B) Ele oferece recursos avançados de formatação, como inserção de tabelas e gráficos.",
      "C) O software é capaz de criar e editar arquivos com extensões como .txt.",
      "D) Ele está disponível apenas nas edições profissionais do Windows.",
      "E) O Bloco de Notas possui integração com programas externos para edição colaborativa."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O Bloco de Notas não salva diretamente em .docx ou .pdf.",
      "Incorreta. Não possui recursos avançados de formatação como tabelas e gráficos.",
      "Correta. O Bloco de Notas cria e edita arquivos de texto simples com extensão .txt.",
      "Incorreta. Está disponível em todas as edições do Windows.",
      "Incorreta. Não possui integração nativa para edição colaborativa."
    ],
    "generalExplanation": "O Bloco de Notas é um editor de texto simples que salva arquivos com extensão .txt por padrão. Não possui formatação avançada como tabelas, gráficos ou exportação direta para .docx/.pdf.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows 11 - Aplicativos e Ferramentas",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_298",
    "text": "No Windows 10, para mitigar o acesso não autorizado a dados, tornando os dados inacessíveis por meio de criptografia, é correto utilizar o recurso denominado BitLocker.",
    "options": [
      "A) Certo",
      "B) Errado"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. BitLocker é o recurso de criptografia de disco do Windows para proteção de dados.",
      "Incorreta. A afirmação está correta."
    ],
    "generalExplanation": "O BitLocker é a ferramenta de criptografia de unidades de disco do Windows, projetada para proteger dados contra acesso não autorizado em caso de roubo ou perda do dispositivo.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows 11 - Segurança (BitLocker)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_299",
    "text": "No contexto do sistema operacional Windows 11, como se denomina o recurso disponível nas opções de Segurança do Windows, representado na figura abaixo?",
    "options": [
      "A) Proteção contra vírus e ameaças.",
      "B) Proteção de contas.",
      "C) Segurança do dispositivo.",
      "D) Desempenho e integridade do dispositivo."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Embora seja uma seção da Segurança do Windows, não corresponde ao recurso indicado.",
      "Incorreta. Não corresponde ao gabarito oficial da questão.",
      "Incorreta. Não corresponde ao gabarito oficial da questão.",
      "Correta. Conforme gabarito oficial, corresponde ao recurso de Desempenho e integridade do dispositivo."
    ],
    "generalExplanation": "Na central de Segurança do Windows 11, a seção 'Desempenho e integridade do dispositivo' exibe relatórios e status de funcionamento do hardware, armazenamento e atualizações do sistema.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows 11 - Segurança e Configurações",
    "nivelSuperior": true
  },
  {
    "id": "info_sim_300",
    "text": "No Windows 11, uma das novidades introduzidas para aprimorar a experiência multitarefa é a remoção total do Painel de Controle, a ser substituído pelas Configurações.",
    "options": [
      "A) Certo",
      "B) Errado"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O Painel de Controle não foi removido totalmente do Windows 11.",
      "Correta. A afirmação é falsa; o Painel de Controle ainda existe no Windows 11."
    ],
    "generalExplanation": "O Painel de Controle não foi removido no Windows 11. Embora a Microsoft venha migrando diversas configurações para o aplicativo Configurações, o Painel de Controle continua disponível no sistema.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows 11 - Segurança e Configurações",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_301",
    "text": "Um usuário de computador deseja adquirir um processador que tenha uma memória temporária eficiente. Essa memória costuma ser localizada na CPU ou próxima a ela, sendo uma memória ultrarrápida, que serve para armazenar os dados e instruções frequentemente acessados pelos processos do sistema e, com isso, acelerar o desempenho do computador.\n\nEsse tipo de memória da CPU é chamado de memória:",
    "options": [
      "A) DDR",
      "B) ROM",
      "C) SRAM",
      "D) CACHE"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. DDR refere-se a uma tecnologia de memória RAM dinâmica (DRAM), não à memória ultrarrápida interna do processador.",
      "Incorreta. A memória ROM é de somente leitura e não volátil, utilizada tipicamente para armazenar firmware (como BIOS/UEFI).",
      "Incorreta. Embora a cache possa ser construída com circuitos SRAM (RAM estática), o nome funcional do tipo de memória descrito é memória Cache.",
      "Correta. A memória Cache é uma memória de alta velocidade integrada ao processador para armazenar instruções e dados frequentemente requisitados pela CPU."
    ],
    "generalExplanation": "A memória Cache é uma memória ultrarrápida (normalmente SRAM) integrada ao processador ou próxima a ele, projetada para reduzir o tempo de acesso da CPU à memória principal (RAM).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Hardware - Memória Cache",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_302",
    "text": "Um Secretário de Educação precisa consolidar dados de três escolas diferentes. Ele recebe três planilhas do Microsoft Excel, cada uma com milhares de linhas. Para otimizar seu trabalho e evitar o travamento do sistema operacional Windows durante a manipulação simultânea desses grandes volumes de dados, qual componente de hardware atua como a memória de trabalho principal e volátil, sendo o responsável direto por armazenar temporariamente os dados abertos para acesso imediato pelo processador enquanto o Excel está em execução?",
    "options": [
      "A) O Disco Rígido (HD) ou SSD.",
      "B) A Placa-mãe.",
      "C) A Memória RAM.",
      "D) A Memória ROM.",
      "E) O Processador (CPU)."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. HD e SSD são memórias secundárias de armazenamento permanente, não a memória principal de execução rápida.",
      "Incorreta. A placa-mãe é o circuito que interconecta todos os componentes, não sendo a memória volátil de trabalho.",
      "Correta. A memória RAM (Random Access Memory) é a memória principal, volátil, responsável por manter dados e programas em execução para processamento imediato.",
      "Incorreta. A memória ROM é não volátil e serve para inicialização do hardware (firmware).",
      "Incorreta. A CPU realiza os cálculos e execuções lógicas, mas a memória de trabalho que armazena os arquivos abertos é a RAM."
    ],
    "generalExplanation": "A memória RAM é a memória principal do computador: volátil e de acesso randômico rápido, onde ficam carregados o sistema operacional e os aplicativos/arquivos em execução no momento.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Hardware - Memória RAM",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_303",
    "text": "No ambiente de trabalho, o uso correto de equipamentos de informática contribui para a organização e o registro das atividades. Considerando as noções básicas de funcionamento do computador, da impressora e do scanner, assinale a alternativa CORRETA:",
    "options": [
      "A) O scanner tem como função principal converter documentos físicos em arquivos digitais, permitindo seu armazenamento e envio eletrônico.",
      "B) A impressora é um dispositivo de entrada de dados, pois recebe informações do computador para transformá-las em documentos digitais.",
      "C) O computador processa dados e informações, enquanto a impressora e o scanner atuam como dispositivos de entrada e saída de dados, respectivamente.",
      "D) O computador funciona apenas como equipamento de armazenamento, sendo o processamento realizado exclusivamente pela impressora.",
      "E) A impressora e o scanner executam as mesmas funções, diferenciando-se apenas pelo tipo de conexão utilizada."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. O scanner é um periférico de entrada que digitaliza documentos físicos, transformando-os em imagens ou documentos digitais.",
      "Incorreta. A impressora é um periférico de saída (output), gerando cópias físicas a partir de dados digitais.",
      "Incorreta. A impressora é de saída e o scanner é de entrada (a ordem na afirmativa foi invertida).",
      "Incorreta. O computador é a unidade de processamento central, e impressoras não realizam processamento geral.",
      "Incorreta. Impressoras (saída) e scanners (entrada) exercem funções opostas e complementares."
    ],
    "generalExplanation": "O scanner digitaliza documentos (dispositivo de entrada/input), enquanto a impressora converte dados eletrônicos em papel impresso (dispositivo de saída/output).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Hardware - Scanner, Impressora e Computador",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_304",
    "text": "Um usuário de uma prefeitura relata que seu computador está muito lento para abrir documentos e navegar na internet. Como um assistente de TI, marque a alternativa CORRETA que é a mais apropriada de ações para diagnosticar o problema.",
    "options": [
      "A) Verificar o espaço disponível em disco, a quantidade de RAM disponível, os processos em execução no Gerenciador de Tarefas e a velocidade da conexão de rede.",
      "B) Imediatamente formatar o disco rígido e reinstalar o sistema operacional.",
      "C) Solicitar ao usuário para reinstalar todos os seus programas.",
      "D) Desabilitar todos os programas de inicialização sem investigar qual deles está causando o problema.",
      "E) Aconselhar o usuário a comprar um computador novo, pois o atual provavelmente está obsoleto."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. O procedimento técnico adequado de diagnóstico investiga consumo de memória RAM, processos ativos, integridade/espaço de disco e conexão de rede.",
      "Incorreta. A formatação é uma medida extrema e desnecessária sem prévio diagnóstico.",
      "Incorreta. Reinstalar todos os programas sem saber a causa raiz é ineficiente e invasivo.",
      "Incorreta. Desativar inicializações sem critério pode interromper serviços vitais como antivírus ou drivers.",
      "Incorreta. Descartar o equipamento sem análise técnica prévia é incorreto."
    ],
    "generalExplanation": "O diagnóstico correto de lentidão inicia-se pela coleta de métricas de hardware e software: uso de CPU/RAM/Disco no Gerenciador de Tarefas, espaço em disco e qualidade de rede.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Hardware - Diagnóstico de Desempenho",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_305",
    "text": "Sobre os componentes básicos de um computador, analise os itens a seguir:\n\nI. Um computador pode funcionar sem sistema operacional, desde que possua hardware adequado.\nII. O software atua como intermediário entre o usuário e os componentes físicos do computador.\nIII. O mau funcionamento de um software pode comprometer o uso do hardware, mesmo que este esteja em perfeitas condições físicas.\nIV. A memória RAM tem acesso mais rápido do que os dispositivos de armazenamento secundário.\n\nPode-se afirmar que:",
    "options": [
      "A) Apenas os itens I e III estão corretos.",
      "B) Apenas os itens II e IV estão corretos.",
      "C) Apenas os itens I, III e IV estão corretos.",
      "D) Apenas os itens II, III e IV estão corretos.",
      "E) Todos os itens estão corretos."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. O item I está incorreto para uso convencional do computador, pois o sistema operacional é o software básico indispensável para que o usuário possa utilizá-lo.",
      "Incorreta. O item III também está correto.",
      "Incorreta. O item I está incorreto.",
      "Correta. Os itens II, III e IV estão estritamente corretos segundo os conceitos fundamentais de hardware e software.",
      "Incorreta. O item I está incorreto."
    ],
    "generalExplanation": "O sistema operacional é essencial para intermediar a interação usuário/hardware (tornando I incorreto no contexto). O software faz a intermediação (II), falhas de software geram travamentos mesmo com hardware íntegro (III), e a RAM possui barramento e velocidade muito superiores aos discos rígidos e SSDs (IV).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Hardware e Software - Componentes Básicos",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_306",
    "text": "No sistema operacional Windows 11, o Gerenciador de Tarefas é uma ferramenta essencial para monitorar o desempenho do computador e gerenciar processos.\n\nQual das funções abaixo NÃO é atribuída ao Gerenciador de Tarefas?",
    "options": [
      "A) Visualizar o uso de CPU, memória e rede em tempo real.",
      "B) Gerenciar aplicativos iniciados automaticamente com o sistema.",
      "C) Alterar permissões de usuários em pastas do sistema.",
      "D) Finalizar aplicativos que não estão respondendo."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta (função válida). O Gerenciador de Tarefas apresenta gráficos em tempo real de uso de CPU, RAM, Disco, GPU e Rede.",
      "Incorreta (função válida). Na guia 'Aplicativos de Inicialização', pode-se habilitar/desabilitar programas que iniciam com o Windows.",
      "Correta (NÃO é função do Gerenciador de Tarefas). Permissões de usuários em pastas (ACLs NTFS) são gerenciadas nas Propriedades da pasta (guia Segurança) ou via prompt (icacls), e não no Gerenciador de Tarefas.",
      "Incorreta (função válida). O botão 'Finalizar Tarefa' encerra processos travados."
    ],
    "generalExplanation": "O Gerenciador de Tarefas gerencia processos, serviços, desempenho e inicialização. A alteração de permissões de segurança em pastas é realizada nas Propriedades da pasta (aba Segurança) do Explorador de Arquivos.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows 11 - Gerenciador de Tarefas",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_307",
    "text": "Qual ação deve ser realizada para organizar a área de trabalho do Windows 11 e agrupar os ícones por tipo?",
    "options": [
      "A) Clicar no menu Iniciar e selecionar “Exibir” e depois “Ajustar ícones à grade”.",
      "B) Clicar com o botão direito do mouse na área de trabalho e selecionar \"Classificar por\" e depois “Tipo”.",
      "C) Pressionar Ctrl+ A no teclado e depois pressionar Enter.",
      "D) Pressionar Ctrl+ T no teclado e depois pressionar “Alt Gr”+ 1.",
      "E) Clicar com o botão direito do mouse na área de trabalho e selecionar “Organizar ícones automaticamente”."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O menu Iniciar não possui esse menu contextual da Área de Trabalho.",
      "Correta. Ao clicar com botão direito na Área de Trabalho -> 'Classificar por' -> 'Tipo de item' (ou 'Tipo'), os ícones são agrupados por extensão/natureza.",
      "Incorreta. Ctrl+A seleciona todos os itens e Enter abre todos simultaneamente.",
      "Incorreta. Esse atalho não tem relação com classificação de ícones.",
      "Incorreta. 'Organizar ícones automaticamente' apenas impede o reposicionamento livre, sem classificar por tipo."
    ],
    "generalExplanation": "No Windows 11, para classificar ícones da Área de Trabalho, clica-se com o botão direito em uma área vazia -> 'Classificar por' -> 'Tipo' (ou Nome, Tamanho, Data de modificação).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows 11 - Área de Trabalho",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_308",
    "text": "Sobre as características gerais do Sistema Operacional Windows 11, assinale a alternativa CORRETA:",
    "options": [
      "A) As alterações feitas no perfil de um usuário afetam outros usuários ou os perfis de outros usuários.",
      "B) A barra de tarefas permite acesso rápido a aplicativos e notificações do sistema, mas não permite multitarefa.",
      "C) Os aplicativos fixados no menu Iniciar não podem ser desinstalados.",
      "D) Configurações é o aplicativo principal para personalizar e gerir as definições do sistema.",
      "E) Microsoft Store permite instalar apenas aplicativos gratuitos."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Perfis de usuário no Windows são isolados (área de trabalho, documentos e preferências próprias).",
      "Incorreta. O Windows é multitarefa preemptivo e a Barra de Tarefas apoia a alternância entre tarefas.",
      "Incorreta. Aplicativos fixados no menu Iniciar podem ser desafixados e desinstalados diretamente pelo clique com botão direito.",
      "Correta. O aplicativo 'Configurações' (Win+I) é a interface primária e moderna para ajustes de sistema, contas, rede, personalização e privacidade no Windows 11.",
      "Incorreta. A Microsoft Store disponibiliza tanto aplicativos gratuitos quanto pagos."
    ],
    "generalExplanation": "O aplicativo Configurações (Settings) é o centro de controle principal do Windows 11 para personalização e ajustes do sistema operacional.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows 11 - Características Gerais",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_309",
    "text": "Um usuário utiliza o sistema operacional Windows 11 em seu computador e precisa organizar as janelas abertas, de forma que consiga visualizar, simultaneamente, duas delas, lado a lado, sem que se sobreponham.\n\nCom base nessa situação hipotética, assinale a opção que apresenta o recurso do Windows 11 o qual possibilitará ao usuário organizar as janelas lado a lado, sem que seja necessário arrastá-las até as bordas da tela.",
    "options": [
      "A) snap layouts",
      "B) modo tablet",
      "C) configurações de tarefas",
      "D) exibição de pastas",
      "E) minimizar todas as janelas"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. O Snap Layouts (Layouts de Encaixe) permite ao usuário posicionar o cursor sobre o botão Maximizar (ou usar Win+Z) e escolher um grid predefinido (ex.: lado a lado 50/50).",
      "Incorreta. Modo tablet adapta a interface para telas sensíveis ao toque.",
      "Incorreta. Configurações de tarefas refere-se aos ajustes da barra ou tarefas agendadas.",
      "Incorreta. Exibição de pastas é recurso de visualização de arquivos.",
      "Incorreta. Minimizar todas oculta todas as janelas (Win+D ou Win+M)."
    ],
    "generalExplanation": "Snap Layouts (Layouts de Encaixe) é o recurso introduzido no Windows 11 que exibe menus visuais com modelos de divisão de tela (lado a lado, 3 colunas, 4 quadrantes) ao passar o mouse sobre o botão maximizar.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows 11 - Snap Layouts",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_310",
    "text": "No Windows 11, há várias opções para gerenciar o estado de energia do computador. Entre elas, existe a opção “Hibernação”. No que diz respeito à hibernação, é CORRETO afirmar que:",
    "options": [
      "A) Demora menos tempo para retomar o sistema do que o modo suspensão.",
      "B) Fecha todos os programas abertos e o sistema operacional.",
      "C) Salva o estado atual do computador no disco rígido.",
      "D) Usa muita quantidade de energia da bateria."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. A suspensão (Sleep) retoma instantaneamente (em segundos), pois mantém a RAM energizada, enquanto a hibernação lê os dados do disco rígido/SSD ao ligar.",
      "Incorreta. A hibernação não fecha as aplicações; ela congela o estado exato das aplicações abertas.",
      "Correta. A hibernação salva todo o conteúdo da memória RAM no arquivo `hiberfil.sys` no disco rígido/SSD e desliga totalmente a energia.",
      "Incorreta. Como o computador é desligado após a gravação em disco, o consumo de energia na hibernação é nulo ou próximo de zero."
    ],
    "generalExplanation": "Na hibernação, o Windows grava o estado da sessão (conteúdo da RAM) no arquivo hiberfil.sys no disco rígido/SSD e desliga o computador sem consumir energia, restaurando tudo na próxima inicialização.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows 11 - Hibernação",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_311",
    "text": "O sistema operacional Microsoft Windows possui um conjunto de teclas de atalho que permitem ao usuário executar ações de forma rápida e eficiente, aumentando a produtividade durante o uso do computador. Assinale a alternativa que descreve corretamente uma função realizada por uma tecla de atalho no Windows.",
    "options": [
      "A) A tecla de atalho \"Windows + L\" bloqueia a tela do computador, exigindo que o usuário faça login novamente para acessar o sistema, o que aumenta a segurança das informações.",
      "B) A tecla de atalho \"Windows + D\" minimiza todas as janelas abertas, exibindo a área de trabalho, e pressioná-la novamente não restaura as janelas minimizadas.",
      "C) A tecla de atalho \"Ctrl + Alt + Del\" abre o Gerenciador de Tarefas diretamente, que exibe a lista de programas em execução.",
      "D) A tecla de atalho \"Windows + E\" abre o navegador de internet padrão do sistema, permitindo que o usuário acesse sites e páginas da web."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. O atalho Win+L (Lock) bloqueia a sessão atual do Windows imediatamente.",
      "Incorreta. Pressionar Win+D uma segunda vez restaura as janelas que haviam sido ocultadas.",
      "Incorreta. Ctrl+Alt+Del abre a tela de segurança do Windows (GSR); o atalho direto para o Gerenciador de Tarefas é Ctrl+Shift+Esc.",
      "Incorreta. Win+E abre o Explorador de Arquivos (Explorer), não o navegador web."
    ],
    "generalExplanation": "Windows + L (Lock) bloqueia a estação de trabalho; Windows + D alterna exibição da Área de Trabalho; Ctrl + Shift + Esc abre diretamente o Gerenciador de Tarefas; Windows + E abre o Explorador de Arquivos.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows - Teclas de Atalho",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_312",
    "text": "O Windows é amplamente utilizado como sistema operacional e oferece diversas funcionalidades que integram hardware e software. Considere a seguinte situação: um usuário está enfrentando problemas de desempenho ao executar aplicativos de edição gráfica intensiva. Ele acessa o Gerenciador de Dispositivos e percebe um alerta no driver da placa gráfica. Sobre o funcionamento do Windows e o Gerenciador de Dispositivos, assinale a alternativa correta:",
    "options": [
      "A) O Gerenciador de Dispositivos permite atualizar, desativar ou reinstalar drivers para solucionar problemas relacionados ao hardware, mas não identifica conflitos de hardware.",
      "B) Problemas de desempenho sempre estão relacionados à falta de memória RAM, independentemente de outros fatores como drivers ou configuração de hardware.",
      "C) O alerta no driver pode indicar incompatibilidade de software ou necessidade de atualização do driver para suportar os aplicativos utilizados.",
      "D) O Gerenciador de Dispositivos também pode ser utilizado para configurar endereços de IP e gerenciar conexões de rede."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O Gerenciador de Dispositivos identifica e sinaliza conflitos de recursos de hardware (ex.: IRQ, porta de E/S).",
      "Incorreta. Gargalos podem advir de drivers corrompidos/antigos, superaquecimento, GPU, CPU ou disco, não apenas RAM.",
      "Correta. Um ícone de alerta (triângulo amarelo com ponto de exclamação) no Gerenciador de Dispositivos indica driver incorreto, desatualizado, incompatível ou falha no dispositivo.",
      "Incorreta. Configurações de endereço IP e rede são definidas na Central de Rede / Configurações de Rede, e não no Gerenciador de Dispositivos."
    ],
    "generalExplanation": "No Gerenciador de Dispositivos, símbolos de alerta indicam que o hardware não está operando adequadamente por falta de driver correto, desatualização ou incompatibilidade.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows - Gerenciador de Dispositivos",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_313",
    "text": "No ambiente Windows, o gerenciamento eficiente de arquivos e pastas é essencial para a produtividade.\n\nSobre as práticas recomendadas e regras para a organização de informações no Windows, assinale a alternativa INCORRETA:",
    "options": [
      "A) É possível compactar pastas e arquivos diretamente no Windows, sem a necessidade de software de terceiros.",
      "B) Os arquivos excluídos são movidos para a Lixeira, permitindo recuperação posterior, exceto quando deletados permanentemente.",
      "C) A pesquisa por arquivos pode ser realizada diretamente na barra de busca do explorador, utilizando palavras-chave ou extensões.",
      "D) Pastas podem ser criadas e nomeadas com caracteres especiais, como \"/ : * ? < > | \\\" sem nenhum problema de compatibilidade."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta para o gabarito (afirmação verdadeira). O Windows compacta nativamente em formato ZIP.",
      "Incorreta para o gabarito (afirmação verdadeira). Arquivos no disco local vão para a Lixeira, salvo uso de Shift+Delete.",
      "Incorreta para o gabarito (afirmação verdadeira). O Explorador permite pesquisa avançada por nome, extensão (`*.xlsx`) e filtros.",
      "Correta para o gabarito (afirmação FALSA/INCORRETA). O Windows proíbe expressamente os seguintes 9 caracteres em nomes de arquivos e pastas: `\\ / : * ? \" < > |`."
    ],
    "generalExplanation": "No Windows, não é permitido utilizar os caracteres reservados: barras (/ \\), dois-pontos (:), asterisco (*), ponto de interrogação (?), aspas duplas (\"), menor/maior (< >) e barra vertical (|).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows - Gerenciamento de Arquivos e Pastas",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_314",
    "text": "O sistema de arquivos NTFS é amplamente utilizado em sistemas operacionais Windows. Uma de suas características importantes é o suporte a journaling.\n\nAssinale a alternativa que descreve corretamente o que é journaling em sistemas de arquivos:",
    "options": [
      "A) Journaling é um sistema de indexação que acelera a busca por arquivos no disco rígido, melhorando o desempenho do sistema.",
      "B) Journaling é uma técnica de criptografia que protege os arquivos contra acesso não autorizado, garantindo a segurança dos dados.",
      "C) Journaling é um mecanismo que registra as alterações nos arquivos antes que elas sejam efetivamente gravadas no disco, garantindo a integridade dos dados em caso de falhas ou interrupções.",
      "D) Journaling é um recurso que permite compactar arquivos para economizar espaço em disco, otimizando o armazenamento de dados."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Indexação e busca é função de serviços como o Windows Search Indexer, não de journaling.",
      "Incorreta. Criptografia no NTFS é provida pelo EFS (Encrypting File System) ou BitLocker.",
      "Correta. O Journaling (registro em diário) mantém um log contínuo das alterações no sistema de arquivos antes de serem consolidadas, permitindo recuperação rápida e prevenção de corrupção em caso de queda de energia ou travamento.",
      "Incorreta. A compactação nativa NTFS é outro recurso independente."
    ],
    "generalExplanation": "Journaling (diário de transações) é o recurso de integridade do sistema de arquivos (como NTFS e ext4) que registra as modificações pendentes em um log antes de gravá-las, evitando corrupção de metadados.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows - Sistema de Arquivos NTFS",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_315",
    "text": "No Sistema Operacional Windows, qual ação deve ser tomada para remover arquivos, permitindo sua recuperação futura em um curto período, se necessário?",
    "options": [
      "A) Formatar o disco rígido.",
      "B) Arrastar os arquivos para a Lixeira.",
      "C) Pressionar Shift+ Delete para apagar os arquivos diretamente.",
      "D) Usar o Gerenciador de Tarefas para finalizar processos desnecessários.",
      "E) Pressionar as teclas Ctrl+ Delete para apagar os arquivos diretamente."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Formatar apaga todos os dados da partição.",
      "Correta. Enviar o arquivo para a Lixeira (pressionando Delete ou arrastando) permite restaurá-lo com facilidade a qualquer momento antes do esvaziamento.",
      "Incorreta. Shift+Delete exclui o arquivo permanentemente, ignorando a Lixeira.",
      "Incorreta. O Gerenciador de Tarefas atua em processos em memória, não na exclusão de arquivos com reciclagem.",
      "Incorreta. Ctrl+Delete é atalho de edição de texto para apagar a próxima palavra."
    ],
    "generalExplanation": "O envio de arquivos para a Lixeira (Recycle Bin) preserva os itens para posterior restauração ao seu local de origem.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows - Lixeira",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_316",
    "text": "No Windows 11, ao acessar as “Configurações” e selecionar “Sistema”, qual das opções é especificamente dedicada ao gerenciamento do espaço disponível em unidades de disco e à configuração de opções relacionadas ao uso de disco?",
    "options": [
      "A) Backup e Restauração.",
      "B) Central de Segurança.",
      "C) Armazenamento.",
      "D) Firewall do Windows."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Backup e Restauração é uma ferramenta clássica do Painel de Controle, não uma opção direta dentro da aba Sistema nas Configurações modernas.",
      "Incorreta. A Central de Segurança (Segurança do Windows) foca em proteção contra ameaças, firewall e integridade do dispositivo.",
      "Correta. A categoria 'Armazenamento' dentro de 'Sistema' nas Configurações do Windows 11 é dedicada a gerenciar o espaço em disco, configurar o Sensor de Armazenamento (Storage Sense) e gerenciar volumes.",
      "Incorreta. O Firewall está localizado dentro da Segurança do Windows ou no Painel de Controle."
    ],
    "generalExplanation": "A categoria 'Armazenamento' dentro de 'Sistema' nas Configurações do Windows 11 é dedicada a gerenciar o espaço em disco, configurar o Sensor de Armazenamento (Storage Sense) e gerenciar unidades.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows 11 - Configurações (Sistema)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_317",
    "text": "O sistema operacional Windows é amplamente utilizado em instituições educacionais. Um problema comumente relatado é a lentidão do sistema. Indique umas das ações que podem ser realizadas para melhorar o desempenho do Windows.\n\nI. Desinstale programas desnecessários para liberar espaço no disco e reduzir o consumo de recursos do sistema.\nII. Alterar os dados e a hora do sistema para otimizar o desempenho do processador.\nIII. Instalar vários softwares antivírus simultaneamente para garantir maior proteção contra ameaças.\nIV. Ativar todos os serviços disponíveis no Windows para garantir maior desempenho e funcionalidade.\n\nEstá(ão) correta(s) a(s) proposição(ões):",
    "options": [
      "A) II e III, apenas.",
      "B) I apenas.",
      "C) I e II, apenas.",
      "D) III e IV, apenas."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. As afirmativas II e III são incorretas.",
      "Correta. Desinstalar programas desnecessários libera espaço em disco e reduz processos em segundo plano, melhorando o desempenho geral do sistema.",
      "Incorreta. A afirmativa II é falsa; alterar data e hora não otimiza o processador.",
      "Incorreta. Ter múltiplos antivírus causa conflitos e lentidão severa; habilitar todos os serviços sobrecarrega o consumo de memória RAM e CPU."
    ],
    "generalExplanation": "Apenas a afirmativa I é válida para otimização de desempenho. Desinstalar programas inúteis reduz consumo de disco, memória RAM e ciclos de CPU.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows 11 - Desempenho e Manutenção",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_318",
    "text": "No Windows 11, ao acessar o \"Painel de Controle\" e seguir o caminho \"Sistema e Segurança\", qual opção está disponível nessa seção?",
    "options": [
      "A) Opções de Energia.",
      "B) Gerenciador de Dispositivos.",
      "C) Configurações de Rede.",
      "D) Configurações de Acessibilidade."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. No Painel de Controle na visualização por categoria, a seção 'Sistema e Segurança' dá acesso a 'Opções de Energia' (além de Ferramentas do Windows, Firewall, etc.).",
      "Incorreta. O Gerenciador de Dispositivos fica na categoria 'Hardware e Sons'.",
      "Incorreta. Configurações de Rede situam-se em 'Rede e Internet'.",
      "Incorreta. Configurações de Acessibilidade situam-se em 'Facilidade de Acesso'."
    ],
    "generalExplanation": "No Painel de Controle clássico do Windows (exibição por Categorias), a categoria 'Sistema e Segurança' abriga itens como Segurança e Manutenção, Firewall do Windows Defender, Sistema, Opções de Energia e Histórico de Arquivos.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows 11 - Painel de Controle",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_319",
    "text": "Um usuário acaba de adquirir uma nova impressora a laser (marca X e modelo Y) e pretende conectá-la ao seu microcomputador de mesa no qual está instalado o sistema operacional Windows 10 (64-bits). Ele sabe que esta impressora é suportada nativamente pelo Windows 10. Assim, para instalá-la por meio de cabeamento (impressora local), ele deve, depois de conectá-la fisicamente ao microcomputador e ligá-la, realizar a seguinte sequência de ações:",
    "options": [
      "A) acessar as Configurações do Windows; em seguida, Dispositivos – Impressoras e Scanners, por fim, escolher a opção Adicionar uma impressora ou scanner.",
      "B) acessar o Painel de controle do Windows; em seguida, o item Programas e, por fim, a opção Adicionar dispositivo.",
      "C) acessar as Configurações do Windows; em seguida, o Sistemas & segurança e, por fim, escolher a opção Adicionar uma impressora ou scanner.",
      "D) acessar a opção Hardware do Windows; em seguida, Dispositivos e, por fim, escolher a opção Adicionar uma impressora."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. O caminho correto e nativo nas Configurações é: Iniciar > Configurações > Dispositivos > Impressoras e scanners > Adicionar uma impressora ou scanner.",
      "Incorreta. 'Programas' serve para desinstalar e gerenciar softwares instalados, não para adicionar periféricos de impressão.",
      "Incorreta. Não existe a opção 'Sistemas & segurança' nas Configurações para adicionar periféricos.",
      "Incorreta. Não existe categoria 'Hardware do Windows' no menu principal de Configurações."
    ],
    "generalExplanation": "O procedimento padrão no Windows para adicionar e configurar impressoras locais ou em rede é através de: Configurações > Dispositivos > Impressoras e scanners > Adicionar uma impressora ou scanner.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows 10/11 - Impressoras e Dispositivos",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_320",
    "text": "Engenharia social é manipulação psicológica para obter informações confidenciais ou acesso não autorizado. É importante bloquear o acesso à máquina ao se ausentar.\n\nNo Windows 11, o atalho para bloqueio, sendo necessário que o usuário digite sua senha para acessar a máquina novamente é:",
    "options": [
      "A) Windows + L.",
      "B) Windows + E.",
      "C) Windows + P.",
      "D) Windows + D."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A combinação de teclas Tecla Windows + L (Lock) bloqueia a sessão imediatamente, exigindo autenticação para desbloquear.",
      "Incorreta. Windows + E abre o Explorador de Arquivos.",
      "Incorreta. Windows + P abre o menu de projeção de telas (segunda tela / projetor).",
      "Incorreta. Windows + D minimiza todas as janelas e exibe a Área de Trabalho."
    ],
    "generalExplanation": "O atalho de teclado Tecla Windows + L (Lock) bloqueia a sessão do usuário no Windows, impedindo acessos indevidos quando a pessoa se afasta de sua estação de trabalho.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows 11 - Segurança e Atalhos",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_321",
    "text": "Dentre as seguintes opções do Painel de Controle do sistema operacional Windows 11 em português, assinale aquela que consiste em uma ferramenta capaz de realizar backups de determinados arquivos periodicamente.",
    "options": [
      "A) Histórico de Arquivos.",
      "B) Centro de Mobilidade do Windows.",
      "C) Opções de Indexação.",
      "D) Opções do Explorador de Arquivos.",
      "E) Reprodução Automática."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. O Histórico de Arquivos (File History) faz backups periódicos e automáticos das bibliotecas (Documentos, Imagens, etc.) para uma unidade externa ou local na rede.",
      "Incorreta. O Centro de Mobilidade reúne controles de brilho, volume e bateria em notebooks.",
      "Incorreta. Opções de Indexação ajustam a velocidade e escopo da pesquisa do Windows.",
      "Incorreta. Opções do Explorador de Arquivos configuram a exibição e comportamento de pastas.",
      "Incorreta. A Reprodução Automática configura ações ao conectar mídias removíveis (pendrives, cartões SD)."
    ],
    "generalExplanation": "O 'Histórico de Arquivos' é a ferramenta nativa do Windows criada para salvar automaticamente cópias de versões anteriores e backups periódicos de arquivos das pastas do usuário.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows 11 - Painel de Controle e Backup",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_322",
    "text": "Para fixar uma pasta no acesso rápido do painel de navegação do Windows, basta que o usuário a clique com o botão direito do mouse e selecione a opção Fixar em Acesso Rápido.",
    "options": [
      "A) Certo",
      "B) Errado"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Clicar com o botão direito sobre qualquer pasta exibe no menu de contexto a opção 'Fixar no Acesso Rápido' (ou 'Fixar em Acesso Rápido'), fixando o atalho no painel lateral.",
      "Incorreta. A afirmação é verdadeira."
    ],
    "generalExplanation": "No Explorador de Arquivos, a opção 'Fixar no Acesso Rápido' fica disponível no menu de contexto (botão direito) de qualquer diretório.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows 11 - Explorador de Arquivos (Acesso Rápido)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_323",
    "text": "O gerenciamento de arquivos é um procedimento que envolve a organização, o armazenamento e a manutenção de arquivos e de pastas no computador.",
    "options": [
      "A) Certo",
      "B) Errado"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A definição está conceitualmente exata: o gerenciamento de arquivos abrange a estruturação hierárquica, criação, movimentação, armazenamento, cópia e exclusão de diretórios e arquivos.",
      "Incorreta. A afirmação é verdadeira."
    ],
    "generalExplanation": "O gerenciamento de arquivos compreende as rotinas e funções do sistema operacional e do usuário para estruturar, organizar, armazenar, preservar e manipular arquivos e pastas.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows 11 - Gerenciamento de Arquivos",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_324",
    "text": "Sobre a visualização do Explorador de Arquivos, analise as afirmativas:\n\nI. O layout de exibição selecionado para a pasta Finalizados é detalhes.\nII. Arquivo3 e Arquivo5 juntos possuem mais de 19 GB (gigabytes).\nIII. Arquivo2 é do tipo documento do Microsoft Word.\nIV. A pasta Sinop é conteúdo (subpasta) da pasta Campi.\n\nEstão corretas as afirmativas:",
    "options": [
      "A) II e III, apenas.",
      "B) I e IV, apenas.",
      "C) I, II e IV, apenas.",
      "D) I, II, III e IV."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. As afirmativas II e III são falsas.",
      "Correta. As afirmativas I (modo de exibição Detalhes com colunas Nome, Data, Tipo e Tamanho) e IV (hierarquia de diretórios onde Sinop é subpasta de Campi) estão corretas.",
      "Incorreta. A afirmativa II é falsa.",
      "Incorreta. As afirmativas II e III são falsas."
    ],
    "generalExplanation": "A análise dos elementos estruturais da interface do Explorador de Arquivos evidencia o modo de visualização 'Detalhes' (com colunas organizadas) e a relação hierárquica de pastas onde Sinop é subpasta de Campi.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows 11 - Explorador de Arquivos (Interface)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_325",
    "text": "Qual o atalho de teclado no Windows 10/11 que permite fixar ou soltar uma janela ativa na metade da tela, utilizando o recurso de Ajuste de Tela (Snap Assist)?",
    "options": [
      "A) Ctrl + Shift + Seta para a direita/esquerda.",
      "B) Alt + Seta para cima/baixo.",
      "C) Windows + Seta para a direita/esquerda.",
      "D) Ctrl + Alt + Tab."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Essa combinação não executa o encaixe de janelas no Windows.",
      "Incorreta. Alt + Setas é utilizado para navegação histórica em navegadores e no explorador.",
      "Correta. A Tecla Windows + Seta Esquerda ou Seta Direita ancora a janela ativa na respectiva metade lateral da tela através do Snap Assist.",
      "Incorreta. Ctrl + Alt + Tab exibe o seletor persistente de alternância de janelas abertas."
    ],
    "generalExplanation": "Tecla Windows + Seta para a Esquerda ou Direita posiciona a janela na metade da tela (Snap Assist). Combinada com Seta para Cima ou Baixo, pode maximizar, restaurar ou posicionar a janela em quadrantes (2x2).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows 11 - Atalhos e Snap Assist",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_326",
    "text": "O Windows 10 introduziu o recurso “Snap Assist”, que foi aprimorado no Windows 11 com novos layouts de ajuste de janelas. Sobre as funcionalidades e os aprimoramentos dessa ferramenta, assinale a afirmativa correta.",
    "options": [
      "A) No Windows 11, o “Snap Assist” é ativado de forma imediata ao abrir mais de quatro aplicativos simultaneamente.",
      "B) O Windows 11 inclui layouts predefinidos para organizar janelas na tela, acessados ao passar o cursor sobre o botão “Maximizar”.",
      "C) A funcionalidade “Snap Assist”, no Windows 11, oferece opções de divisão de tela em até seis partes diferentes em monitores “ultrawide”.",
      "D) No Windows 10, o “Snap Assist” permite ajustar até quatro janelas na tela, enquanto no Windows 11 esse recurso é limitado a duas janelas."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O recurso não é acionado automaticamente pelo número de aplicativos abertos.",
      "Correta. No Windows 11, ao passar o cursor do mouse sobre o botão Maximizar (ou pressionar Win+Z), surge o menu visual de Snap Layouts com esquemas predefinidos de organização de janelas.",
      "Incorreta. Os layouts padrão dividem a tela em 2, 3 ou 4 zonas.",
      "Incorreta. O Windows 11 ampliou a versatilidade dos layouts com novas disposições em 3 colunas e quadrantes."
    ],
    "generalExplanation": "No Windows 11, o Snap Layouts permite escolher modelos de disposição na tela (lado a lado, terços, 4 quadrantes) diretamente ao passar o ponteiro do mouse sobre o botão Maximizar de qualquer janela.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows 11 - Snap Layouts",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_327",
    "text": "No sistema operacional Windows, há restrições específicas quanto ao uso de certos caracteres ao nomear pastas. Com base nisso, assinale a alternativa que indica o caractere que não pode ser utilizado para nomear uma pasta:",
    "options": [
      "A) Hífen (-).",
      "B) Aspas (\").",
      "C) Espaço em branco.",
      "D) Porcentagem (%).",
      "E) Sinal de mais (+)."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O caractere hífen (-) é totalmente permitido.",
      "Correta. As aspas duplas (\") fazem parte do grupo de 9 caracteres proibidos pelo sistema de arquivos do Windows: \\ / : * ? \" < > |.",
      "Incorreta. Espaços em branco são permitidos.",
      "Incorreta. O símbolo de porcentagem (%) é permitido.",
      "Incorreta. O sinal de adição (+) é permitido."
    ],
    "generalExplanation": "O Windows proíbe estritamente o uso dos caracteres reservados: barra invertida (\\), barra (/), dois-pontos (:), asterisco (*), ponto de interrogação (?), aspas duplas (\"), menor (<), maior (>) e barra vertical (|).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows 11 - Nomenclatura de Arquivos e Pastas",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_328",
    "text": "O Windows 11 inclui diversas ferramentas que aprimoram a experiência do usuário, especialmente no gerenciamento de janelas. Um desses recursos permite organizar de forma eficiente várias janelas na tela, facilitando a visualização simultânea de conteúdos. Qual das opções abaixo corresponde a essa funcionalidade?",
    "options": [
      "A) Scrum.",
      "B) Snap Layouts.",
      "C) Virtual Desktop.",
      "D) Task Manager.",
      "E) Quick Assist."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Scrum é um framework ágil de gestão de projetos.",
      "Correta. O Snap Layouts (Layouts de Encaixe) é a ferramenta do Windows 11 desenvolvida para posicionar e organizar várias janelas simultaneamente na tela.",
      "Incorreta. Áreas de Trabalho Virtuais criam múltiplos desktops alternáveis, não divisão de janelas na mesma tela.",
      "Incorreta. O Gerenciador de Tarefas monitora recursos de hardware e processos em execução.",
      "Incorreta. Assistência Rápida é uma ferramenta de suporte e conexão remota entre usuários."
    ],
    "generalExplanation": "O recurso 'Snap Layouts' é a ferramenta do Windows 11 que fornece esquemas visuais predeterminados para dispor múltiplas janelas abertas simultaneamente na tela.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows 11 - Gerenciamento de Janelas",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_329",
    "text": "Considere a seguinte situação: Um técnico de TI precisa configurar um dispositivo Android em modo de desenvolvedor para testar um aplicativo corporativo. Para ativar as 'Opções do desenvolvedor' no Android, o procedimento correto é:",
    "options": [
      "A) Acessar Configurações > Sistema > Opções do desenvolvedor, que já vem habilitado por padrão.",
      "B) Acessar Configurações > Sobre o telefone e tocar 7 vezes seguidas em 'Número da versão'.",
      "C) Acessar Configurações > Segurança e desativar o bloqueio de tela.",
      "D) Acessar Configurações > Aplicativos e forçar a parada do sistema operacional.",
      "E) Acessar Configurações > Rede e Internet e ativar o modo avião."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. As Opções do desenvolvedor não vêm habilitadas por padrão; é necessário desbloqueá-las manualmente.",
      "Correta. O procedimento padrão é tocar 7 vezes em 'Número da versão' em 'Sobre o telefone' para desbloquear as opções de desenvolvedor.",
      "Incorreta. Desativar o bloqueio de tela não tem relação com a ativação das opções de desenvolvedor.",
      "Incorreta. Forçar a parada do sistema operacional não ativa opções de desenvolvedor e pode causar instabilidade.",
      "Incorreta. O modo avião desativa conexões sem fio e não tem relação com opções de desenvolvedor."
    ],
    "generalExplanation": "Para ativar as Opções do desenvolvedor no Android, o usuário deve acessar Configurações > Sobre o telefone e tocar repetidamente (geralmente 7 vezes) em 'Número da versão' ou 'Número da compilação'. Isso desbloqueia as opções de desenvolvedor no menu de configurações.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Sistemas Móveis (Android): Operações Básicas, Configuração e Atualização",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_330",
    "text": "Sobre o processo de atualização do sistema operacional Android via OTA (Over The Air), é correto afirmar que:",
    "options": [
      "A) A atualização OTA substitui completamente o sistema operacional, apagando todos os dados do usuário sem possibilidade de backup.",
      "B) A atualização OTA é distribuída simultaneamente para todos os dispositivos de um mesmo fabricante, sem variação de prazo.",
      "C) A atualização OTA pode ser distribuída em fases, e a disponibilidade varia conforme fabricante, operadora e modelo do dispositivo.",
      "D) A atualização OTA só pode ser realizada via conexão Wi-Fi, sendo impossível via dados móveis em qualquer situação.",
      "E) A atualização OTA é exclusiva para dispositivos da linha Pixel do Google, não se aplicando a outros fabricantes."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. A atualização OTA geralmente preserva os dados do usuário, embora o backup seja sempre recomendado.",
      "Incorreta. A distribuição não é simultânea; varia conforme fabricante, operadora e modelo.",
      "Correta. A distribuição em fases e a variação por fabricante/operadora/modelo são características fundamentais da atualização OTA no Android.",
      "Incorreta. Embora o Wi-Fi seja recomendado, em muitos casos é possível atualizar via dados móveis, dependendo da configuração.",
      "Incorreta. A atualização OTA se aplica a todos os dispositivos Android, não apenas aos dispositivos Pixel."
    ],
    "generalExplanation": "A atualização OTA no Android é distribuída em fases e sua disponibilidade varia conforme o fabricante do dispositivo, a operadora de telefonia e o modelo específico. Isso explica por que nem todos os dispositivos recebem a atualização ao mesmo tempo.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Sistemas Móveis (Android): Operações Básicas, Configuração e Atualização",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_331",
    "text": "Sobre as permissões de aplicativos no Android a partir da versão 6.0 (Marshmallow), que introduziu o modelo de permissões em tempo de execução, é correto afirmar que:",
    "options": [
      "A) Todas as permissões são concedidas automaticamente no momento da instalação, sem possibilidade de revogação posterior.",
      "B) As permissões são solicitadas ao usuário no momento em que o aplicativo precisa acessá-las, e podem ser revogadas a qualquer momento nas configurações.",
      "C) As permissões só podem ser gerenciadas pelo desenvolvedor do aplicativo, não sendo acessíveis ao usuário final.",
      "D) Uma vez concedida, uma permissão não pode ser revogada sem desinstalar e reinstalar o aplicativo.",
      "E) As permissões de localização são as únicas que podem ser gerenciadas pelo usuário; todas as demais são fixas."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A partir do Android 6.0, as permissões são solicitadas em tempo de execução e podem ser revogadas.",
      "Correta. O modelo de permissões em tempo de execução permite solicitar, conceder e revogar permissões individualmente.",
      "Incorreta. O usuário final tem controle total sobre as permissões através das configurações do dispositivo.",
      "Incorreta. As permissões podem ser revogadas a qualquer momento sem necessidade de desinstalar o aplicativo.",
      "Incorreta. Todas as permissões sensíveis (localização, câmera, microfone, contatos, etc.) podem ser gerenciadas pelo usuário."
    ],
    "generalExplanation": "A partir do Android 6.0 (Marshmallow), o modelo de permissões em tempo de execução permite que o usuário conceda ou revogue permissões individualmente no momento em que o aplicativo as solicita, podendo revogá-las a qualquer momento nas configurações do dispositivo.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Sistemas Móveis (Android): Operações Básicas, Configuração e Atualização",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_332",
    "text": "Sobre o conceito de 'fragmentação' no ecossistema Android e suas implicações para a segurança dos dispositivos, é correto afirmar que:",
    "options": [
      "A) A fragmentação garante que todos os dispositivos Android recebam atualizações de segurança simultaneamente, eliminando vulnerabilidades.",
      "B) A fragmentação refere-se à existência de múltiplas versões do Android em uso simultâneo, o que pode deixar dispositivos mais antigos sem atualizações de segurança.",
      "C) A fragmentação é um recurso de segurança que divide o sistema operacional em partições isoladas para proteger os dados.",
      "D) A fragmentação é um problema exclusivo dos dispositivos iOS, não afetando o ecossistema Android.",
      "E) A fragmentação refere-se à divisão de aplicativos em módulos menores para economizar espaço de armazenamento."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A fragmentação faz exatamente o oposto: dificulta a distribuição simultânea de atualizações.",
      "Correta. A fragmentação é a coexistência de múltiplas versões do Android, podendo deixar dispositivos antigos sem atualizações de segurança.",
      "Incorreta. A fragmentação não é um recurso de segurança, mas sim um desafio do ecossistema Android.",
      "Incorreta. A fragmentação é um problema característico do Android, não do iOS.",
      "Incorreta. A fragmentação refere-se às versões do sistema operacional, não à divisão de aplicativos."
    ],
    "generalExplanation": "A fragmentação no Android refere-se à coexistência de múltiplas versões do sistema operacional em uso simultâneo, resultado da diversidade de fabricantes, modelos e operadoras. Isso pode deixar dispositivos mais antigos sem receber atualizações de segurança, criando vulnerabilidades.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Sistemas Móveis (Android): Operações Básicas, Configuração e Atualização",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_333",
    "text": "Sobre o recurso de 'Backup' no Android e suas opções de armazenamento, é correto afirmar que:",
    "options": [
      "A) O backup no Android só pode ser realizado manualmente, não havendo opção de backup automático.",
      "B) O backup no Android pode ser armazenado na conta Google do usuário, permitindo a restauração em um novo dispositivo.",
      "C) O backup no Android inclui obrigatoriamente todas as senhas e dados bancários do usuário, sem possibilidade de exclusão.",
      "D) O backup no Android só pode ser restaurado no mesmo dispositivo em que foi criado, não sendo possível transferir para outro aparelho.",
      "E) O backup no Android é exclusivo para aplicativos, não incluindo configurações, contatos ou fotos."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O Android permite backup automático quando configurado, além do backup manual.",
      "Correta. O backup na conta Google permite a restauração em um novo dispositivo, sendo uma das principais funcionalidades.",
      "Incorreta. Dados sensíveis como senhas e dados bancários geralmente não são incluídos no backup padrão por razões de segurança.",
      "Incorreta. O backup na conta Google permite a restauração em qualquer dispositivo Android com a mesma conta.",
      "Incorreta. O backup pode incluir configurações, contatos, fotos e outros dados, não apenas aplicativos."
    ],
    "generalExplanation": "O backup no Android pode ser armazenado na conta Google do usuário, permitindo a restauração dos dados em um novo dispositivo. O backup pode incluir aplicativos, configurações, contatos e outros dados, sendo realizado automaticamente quando configurado.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Sistemas Móveis (Android): Operações Básicas, Configuração e Atualização",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_334",
    "text": "Sobre o conceito de 'sideloading' no Android e suas implicações para a segurança do dispositivo, é correto afirmar que:",
    "options": [
      "A) O sideloading é o processo de instalar aplicativos exclusivamente pela Google Play Store, garantindo a segurança do dispositivo.",
      "B) O sideloading refere-se à instalação de aplicativos de fontes externas à loja oficial, o que pode representar riscos de segurança se a fonte não for confiável.",
      "C) O sideloading é um recurso exclusivo do iOS, não estando disponível em dispositivos Android.",
      "D) O sideloading é um processo automático que ocorre durante a atualização do sistema operacional.",
      "E) O sideloading refere-se à remoção de aplicativos pré-instalados pelo fabricante do dispositivo."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O sideloading é exatamente o oposto: instalar aplicativos FORA da loja oficial.",
      "Correta. O sideloading é a instalação de fontes externas, podendo representar riscos se a fonte não for confiável.",
      "Incorreta. O sideloading é mais comum e acessível no Android do que no iOS.",
      "Incorreta. O sideloading é um processo manual e intencional, não automático.",
      "Incorreta. O sideloading refere-se à instalação de novos aplicativos, não à remoção de aplicativos existentes."
    ],
    "generalExplanation": "O sideloading no Android refere-se à instalação de aplicativos de fontes externas à loja oficial (Google Play Store), geralmente através de arquivos APK. Embora seja um recurso legítimo, pode representar riscos de segurança se a fonte não for confiável, pois os aplicativos não passam pela verificação da loja oficial.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Sistemas Móveis (Android): Operações Básicas, Configuração e Atualização",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_335",
    "text": "Sobre a arquitetura do sistema operacional Android e suas camadas, é correto afirmar que:",
    "options": [
      "A) O Android é baseado no kernel Windows NT, adaptado para dispositivos móveis.",
      "B) O Android é baseado no kernel Linux, com camadas adicionais incluindo o Android Runtime (ART) e o framework de aplicações.",
      "C) O Android não possui kernel próprio, utilizando diretamente o sistema operacional do fabricante do dispositivo.",
      "D) O Android é baseado no kernel Darwin, o mesmo utilizado pelo iOS da Apple.",
      "E) O Android não possui camadas de software, sendo um sistema monolítico sem separação de componentes."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O Android é baseado no kernel Linux, não no Windows NT.",
      "Correta. O Android é baseado no kernel Linux com camadas adicionais incluindo ART e framework de aplicações.",
      "Incorreta. O Android possui seu próprio kernel baseado em Linux.",
      "Incorreta. O kernel Darwin é utilizado pelo iOS/macOS da Apple, não pelo Android.",
      "Incorreta. O Android possui uma arquitetura em camadas bem definida, não sendo um sistema monolítico."
    ],
    "generalExplanation": "O Android é baseado no kernel Linux, com camadas adicionais que incluem o Android Runtime (ART), bibliotecas nativas, o framework de aplicações e a camada de aplicativos. Essa arquitetura em camadas permite a separação de responsabilidades e a modularidade do sistema.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Sistemas Móveis (Android): Operações Básicas, Configuração e Atualização",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_336",
    "text": "No Windows 11, ao acessar o \"Painel de Controle\" e seguir o caminho \"Sistema e Segurança\", qual opção está disponível nessa seção?",
    "options": [
      "A) Opções de Energia.",
      "B) Gerenciador de Dispositivos.",
      "C) Configurações de Rede.",
      "D) Configurações de Acessibilidade.",
      "E) Não se aplica."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Opções de Energia podem ser acessadas na categoria Sistema e Segurança do Painel de Controle.",
      "Incorreta. O Gerenciador de Dispositivos está associado à categoria Hardware e Sons.",
      "Incorreta. Configurações de Rede estão associadas à categoria Rede e Internet.",
      "Incorreta. Configurações de Acessibilidade possuem categoria própria (Facilidade de Acesso) no Painel de Controle.",
      "Incorreta. Alternativa de preenchimento estrutural."
    ],
    "generalExplanation": "No Painel de Controle do Windows, a categoria Sistema e Segurança reúne itens relacionados à segurança, manutenção e gerenciamento de energia (Opções de Energia).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows 11 - Painel de Controle",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_337",
    "text": "As pastas e os arquivos são componentes fundamentais do sistema de arquivos de um computador. Os arquivos são unidades individuais de armazenamento de dados, enquanto as pastas são contêineres que organizam e armazenam arquivos e outras pastas. Sobre a organização de pastas e arquivos em um computador, analise as afirmativas a seguir:\n\nI. Pastas (ou diretórios) são usadas para organizar arquivos de forma hierárquica.\nII. O nome de um arquivo geralmente consiste em duas partes: o nome principal e a extensão.\nIII. A extensão de um arquivo (como .txt, .doc, .jpg) indica o tipo de conteúdo do arquivo.\nIV. É possível ter dois arquivos com o mesmo nome na mesma pasta.\n\nEstá correto o que se afirma em:",
    "options": [
      "A) I, II, III e IV.",
      "B) I e II, apenas.",
      "C) II e III, apenas.",
      "D) I, II e III, apenas.",
      "E) II, III e IV, apenas."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. O item IV está incorreto, pois o sistema de arquivos não permite dois arquivos com exatamente o mesmo nome e extensão dentro do mesmo diretório.",
      "Incorreta. Além de I e II, o item III também está correto.",
      "Incorreta. Além de II e III, o item I também está correto.",
      "Correta. Os itens I, II e III estão tecnicamente corretos.",
      "Incorreta. O item IV é falso e o item I é verdadeiro."
    ],
    "generalExplanation": "Pastas organizam arquivos hierarquicamente em diretórios e subdiretórios (I); o nome do arquivo é composto pelo identificador principal e pela extensão separada por ponto (II); a extensão indica ao sistema operacional o tipo de formato e programa padrão (III). Não é possível ter dois arquivos com o mesmo nome e extensão na mesma pasta (IV falso).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows - Gerenciamento de Arquivos e Pastas",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_338",
    "text": "No Menu Iniciar do Windows 11, uma professora pode fixar atalhos para facilitar o acesso a programas e arquivos. Como ela pode remover um aplicativo fixado no Menu Iniciar?",
    "options": [
      "A) Arrastando o aplicativo para fora do Menu Iniciar.",
      "B) Clicando com o botão direito do mouse sobre o aplicativo e selecionando \"Desafixar de Iniciar\".",
      "C) Pressionando \"Ctrl + Delete\" enquanto o aplicativo estiver selecionado.",
      "D) Utilizando o Gerenciador de Tarefas para encerrar o processo do aplicativo.",
      "E) Não se aplica."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Arrastar o aplicativo para fora do Menu Iniciar não é o procedimento padrão para desafixar.",
      "Correta. O botão direito sobre o aplicativo fixado exibe o menu contextual com a opção \"Desafixar de Iniciar\".",
      "Incorreta. Ctrl+Delete não é o atalho padrão para remover aplicativos fixados do Menu Iniciar.",
      "Incorreta. Encerrar o processo no Gerenciador de Tarefas apenas fecha a execução em tempo real, sem alterar a fixação no Menu Iniciar.",
      "Incorreta. Alternativa de preenchimento estrutural."
    ],
    "generalExplanation": "Para remover um aplicativo fixado do Menu Iniciar no Windows 11, basta clicar com o botão direito do mouse sobre ele e selecionar a opção \"Desafixar de Iniciar\".",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows 11 - Menu Iniciar",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_339",
    "text": "No Windows, a ferramenta que permite ao usuário voltar o sistema para um estado anterior é:",
    "options": [
      "A) Restauração do Sistema",
      "B) Gerenciador de Tarefas",
      "C) Painel de Controle",
      "D) Prompt de Comando",
      "E) Não se aplica"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A Restauração do Sistema permite reverter configurações e arquivos de sistema para um ponto de restauração anterior sem afetar arquivos pessoais.",
      "Incorreta. O Gerenciador de Tarefas monitora processos, desempenho e aplicativos em execução.",
      "Incorreta. O Painel de Controle concentra ferramentas administrativas e de configuração geral.",
      "Incorreta. O Prompt de Comando é o interpretador de linha de comando (CLI) do Windows.",
      "Incorreta. Alternativa de preenchimento estrutural."
    ],
    "generalExplanation": "A ferramenta \"Restauração do Sistema\" (System Restore) possibilita retornar o Windows a um ponto de restauração gravado previamente, desfazendo alterações prejudiciais de drivers ou atualizações.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows - Restauração do Sistema",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_340",
    "text": "São recursos da Lixeira do Microsoft Windows 10, EXCETO:",
    "options": [
      "A) Restaurar um arquivo.",
      "B) Eliminar definitivamente um arquivo apagado.",
      "C) Abrir um documento de texto.",
      "D) Esvaziar completamente a Lixeira.",
      "E) Configurar o espaço máximo que ela poderá ter para guardar os arquivos apagados."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta para o gabarito. Restaurar arquivos ao local de origem é a função primária da Lixeira.",
      "Incorreta para o gabarito. É possível eliminar itens individualmente de forma definitiva de dentro da Lixeira.",
      "Correta para o gabarito (EXCETO). Arquivos contidos na Lixeira não podem ser abertos ou executados diretamente; eles precisam ser restaurados antes para que seu conteúdo seja acessado.",
      "Incorreta para o gabarito. Esvaziar a Lixeira é uma ação nativa disponível.",
      "Incorreta para o gabarito. Nas Propriedades da Lixeira é possível definir o tamanho personalizado máximo de armazenamento em cada partição."
    ],
    "generalExplanation": "Por motivos de segurança e consistência de dados, o Windows bloqueia a execução ou abertura direta de documentos enquanto eles residem na Lixeira; para abrir, o usuário precisa primeiro restaurá-los.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows - Lixeira",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_341",
    "text": "O comando de teclado “Windows + R” tem a funcionalidade de:",
    "options": [
      "A) Abrir o Explorador de Arquivos.",
      "B) Abrir Configurações.",
      "C) Abrir Pesquisa.",
      "D) Bloquear Computador.",
      "E) Abrir Executar."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. Abrir o Explorador de Arquivos é associado ao atalho Windows + E.",
      "Incorreta. Abrir Configurações é associado ao atalho Windows + I.",
      "Incorreta. Abrir Pesquisa é associado ao atalho Windows + S.",
      "Incorreta. Bloquear o Computador é associado ao atalho Windows + L.",
      "Correta. Windows + R (Run) abre a caixa de diálogo \"Executar\"."
    ],
    "generalExplanation": "O atalho de teclado Tecla do Windows + R abre a janela \"Executar\", permitindo rodar comandos diretos, executáveis (como notepad, calc, regedit) e caminhos de sistema.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows - Teclas de Atalho",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_342",
    "text": "Um usuário utilizando o Windows 11 deseja desinstalar um aplicativo presente em sua máquina. Assinale a alternativa que contém o caminho correto para que este usuário execute esta tarefa: (Adaptada)",
    "options": [
      "A) Iniciar/Botão do Windows -> Configurações -> Sistemas.",
      "B) Iniciar/Botão do Windows -> Configurações -> Aplicativos.",
      "C) Iniciar/Botão do Windows -> Configurações -> Dispositivos.",
      "D) Iniciar/Botão do Windows -> Ferramentas Administrativas -> Aplicativos.",
      "E) Iniciar/Botão do Windows -> Ferramentas Administrativas -> Sistemas e Dispositivos."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A seção Sistema gerencia tela, som, notificações, armazenamento e energia.",
      "Correta. Em Configurações > Aplicativos (ou Aplicativos Instalados) o usuário gerencia e desinstala softwares no Windows 11.",
      "Incorreta. Dispositivos (Bluetooth e dispositivos) gerencia periféricos como impressoras, mouses e teclados.",
      "Incorreta. Ferramentas Administrativas (Ferramentas do Windows) contém utilitários avançados de diagnóstico e monitoramento.",
      "Incorreta. Caminho inexistente na estrutura de configurações do Windows 11."
    ],
    "generalExplanation": "No Windows 11, o gerenciamento e desinstalação de aplicativos é centralizado no menu Iniciar > Configurações > Aplicativos > Aplicativos instalados.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows 11 - Aplicativos e Ferramentas",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_343",
    "text": "O Desfragmentador de discos é um aplicativo do sistema operacional Windows bastante útil.\nAssinale a alternativa que indica corretamente sua finalidade.",
    "options": [
      "A) Elimina arquivos duplicados e inúteis ao sistema operacional.",
      "B) Unifica discos lógicos particionados pelo Fragmentador de discos.",
      "C) Reorganiza os arquivos fragmentados, melhorando a velocidade de leitura dos arquivos.",
      "D) É o programa gerenciador de arquivos e pastas do sistema Windows.",
      "E) Organiza os arquivos de forma fragmentada em discos diferentes, melhorando a velocidade de leitura dos arquivos a partir da utilização de dois discos."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Eliminar arquivos temporários ou desnecessários é função da Limpeza de Disco.",
      "Incorreta. O desfragmentador não manipula tabelas de partição de discos lógicos.",
      "Correta. O Desfragmentador reorganiza os clusters/setores dos arquivos para que fiquem alocados de forma contígua, acelerando o acesso aos dados em HDDs.",
      "Incorreta. O gerenciador de arquivos e pastas é o Explorador de Arquivos (Windows Explorer).",
      "Incorreta. O objetivo é diminuir a fragmentação unindo pedaços de um mesmo arquivo em setores contínuos."
    ],
    "generalExplanation": "Com o uso contínuo do disco rígido, arquivos são divididos em partes não contíguas (fragmentos). O Desfragmentador de Disco reúne esses blocos em setores sequenciais, otimizando o movimento da cabeça de leitura física e acelerando o desempenho.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows - Desempenho e Manutenção",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_344",
    "text": "A Barra de Endereço do Explorador de Arquivos do Windows 10 contém botões de navegação. A seta para cima (⬆), localizada à esquerda da barra de endereço, destina-se a:",
    "options": [
      "A) Desfazer a última ação realizada.",
      "B) Abrir a pasta atual em nova janela.",
      "C) Abrir a lista de locais recentes.",
      "D) Subir um nível na hierarquia de pastas (levar à pasta pai).",
      "E) Não se aplica."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Desfazer ação é a função do atalho Ctrl + Z.",
      "Incorreta. Abrir em nova janela é feito pelo menu contextual ou Ctrl + N.",
      "Incorreta. A lista de locais recentes é acessada pela seta suspensa do histórico.",
      "Correta. A seta para cima (atalho Alt + Seta para Cima) sobe um nível hierárquico na árvore de diretórios em direção à pasta-mãe.",
      "Incorreta. Alternativa de preenchimento estrutural."
    ],
    "generalExplanation": "No Explorador de Arquivos do Windows, a seta para cima (botão \"Subir\") navega para o diretório pai (nível hierárquico imediatamente superior) da pasta atualmente aberta.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows 11 - Explorador de Arquivos (Interface)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_345",
    "text": "No ambiente Windows, ao observar as propriedades visuais de um ícone que apresenta uma pequena seta curva no canto inferior esquerdo sobreposta à sua imagem, é CORRETO afirmar que se trata de:",
    "options": [
      "A) Um atalho.",
      "B) Uma pasta vazia.",
      "C) Um arquivo sincronizado.",
      "D) Um arquivo do Windows.",
      "E) Não se aplica."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A seta curva no canto inferior do ícone é a convenção visual universal do Windows que identifica um atalho (arquivo .lnk que aponta para outro arquivo/programa).",
      "Incorreta. Pastas vazias possuem o ícone padrão de pasta sem seta.",
      "Incorreta. Arquivos sincronizados (como OneDrive) apresentam ícones de status de sincronização (nuvem, círculo verde com visto), não a seta de atalho.",
      "Incorreta. Arquivos de sistema não apresentam setas de atalho por padrão.",
      "Incorreta. Alternativa de preenchimento estrutural."
    ],
    "generalExplanation": "O símbolo da seta curva sobreposto no canto inferior esquerdo de um ícone no Windows é a representação gráfica de um Atalho (link simbólico/ponteiro para um arquivo ou executável original).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Windows 11 - Área de Trabalho",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_346",
    "text": "Em um computador com o sistema operacional Windows instalado, um usuário realiza as seguintes ações: gerencia arquivos, executa programas e utiliza ferramentas para manutenção do sistema. Com base nas categorias e tipos de software, assinale a alternativa correta:",
    "options": [
      "A) O sistema operacional é um software aplicativo, responsável por tarefas específicas do usuário.",
      "B) Um editor de texto é um software utilitário, pois auxilia na manutenção do sistema.",
      "C) O sistema operacional é um software de base (sistema), responsável por gerenciar recursos do hardware e executar aplicativos.",
      "D) Um antivírus é um software aplicativo, pois realiza tarefas comuns como edição de documentos.",
      "E) Não se aplica."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O sistema operacional é classificado como software básico (ou de sistema), não aplicativo.",
      "Incorreta. O editor de texto é um software aplicativo (voltado às tarefas do usuário), não utilitário de sistema.",
      "Correta. O sistema operacional é um software de base (software de sistema), servindo de interface entre o hardware e os programas do usuário.",
      "Incorreta. O antivírus é classificado como software utilitário, pois serve para manutenção, segurança e otimização do sistema.",
      "Incorreta. Alternativa de preenchimento estrutural."
    ],
    "generalExplanation": "Softwares dividem-se classicamente em: Básicos/Sistema (S.O., drivers, firmware), Aplicativos (editores de texto, planilhas, navegadores) e Utilitários (antivírus, compactadores, desfragmentadores).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Hardware e Software - Componentes Básicos",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_347",
    "text": "Um usuário precisa reduzir o tamanho de um arquivo para enviá-lo por e-mail, sem perder o conteúdo original. Para isso, utiliza um programa específico que realiza a compressão dos dados.\n\nCom base nos conceitos de software, o programa utilizado é classificado como:",
    "options": [
      "A) Cliente de e-mail, pois permite o envio e recebimento de mensagens eletrônicas.",
      "B) Gerenciador de processos, pois controla a execução de programas no sistema operacional.",
      "C) Compactador de arquivos, pois reduz o tamanho dos arquivos mantendo sua integridade.",
      "D) Agregador de arquivos, pois possibilita unir em tempo real vários tipos diferentes arquivos em um só.",
      "E) Não se aplica."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O cliente de e-mail gerencia envio e recebimento de mensagens, mas não executa a compressão de arquivos em si.",
      "Incorreta. Gerenciadores de processos monitoram threads e execuções no SO.",
      "Correta. Compactadores de arquivos (como WinRAR, 7-Zip, WinZip) aplicam algoritmos de compressão sem perda de dados (lossless), reduzindo o tamanho em bytes.",
      "Incorreta. Não existe a categoria técnica de agregador de arquivos com a função descrita.",
      "Incorreta. Alternativa de preenchimento estrutural."
    ],
    "generalExplanation": "Programas de compactação/compressão de arquivos aplicam algoritmos matemáticos que eliminam redundâncias no arquivo para diminuir o tamanho ocupado em disco, preservando a integridade original após a extração.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Hardware e Software - Componentes Básicos",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_348",
    "text": "A versão de um software que ainda se encontra em fase de desenvolvimento e testes e que é disponibilizada para que os usuários possam avaliar e, eventualmente, reportar bugs para os desenvolvedores é chamada de:",
    "options": [
      "A) Beta",
      "B) Freeware",
      "C) Shareware",
      "D) Copyright",
      "E) Não se aplica"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. A versão \"Beta\" é a fase de pré-lançamento aberta para testes externos com o objetivo de identificar falhas e coletar feedback.",
      "Incorreta. Freeware é a modalidade de licença em que o software é gratuito para uso por tempo indeterminado.",
      "Incorreta. Shareware é o software disponibilizado gratuitamente apenas por período de teste ou com funcionalidades limitadas.",
      "Incorreta. Copyright refere-se aos direitos autorais e de propriedade intelectual.",
      "Incorreta. Alternativa de preenchimento estrutural."
    ],
    "generalExplanation": "No ciclo de vida do desenvolvimento de software, a versão Beta sucede a versão Alpha e é distribuída a um grupo de usuários para testes práticos e localização de bugs antes da versão final (Release / Stable).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Hardware e Software - Componentes Básicos",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_349",
    "text": "Assinale a alternativa que apresenta, respectivamente, dois softwares cuja função principal seja antivírus e visualizador de imagem.",
    "options": [
      "A) WinRAR e VLC (VideoLAN Client).",
      "B) Norton e Chrome.",
      "C) Thunderbird e Media Player.",
      "D) Avast e XnView.",
      "E) 7-Zip e Telegram."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. WinRAR é compactador de arquivos e VLC é reprodutor de mídia/vídeo.",
      "Incorreta. Norton é antivírus, mas Chrome é navegador web (browser).",
      "Incorreta. Thunderbird é cliente de e-mail e Media Player é reprodutor de mídia.",
      "Correta. Avast é um antivírus (software de segurança) e XnView é um visualizador e organizador de imagens.",
      "Incorreta. 7-Zip é compactador e Telegram é mensageiro instantâneo."
    ],
    "generalExplanation": "Na ordem solicitada: Avast atua como antivírus/segurança e XnView é um software consagrado para visualização e conversão gráfica de imagens.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Hardware e Software - Componentes Básicos",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_350",
    "text": "O software é um conjunto de instruções que o computador executa para realizar tarefas. Um assistente de tecnologia frequentemente instala, atualiza e soluciona problemas de software.\n\nJulgue os itens a seguir como Verdadeiro (V) ou Falso (F) sobre os tipos de software:\n\n(__) Software básico (ou de sistema) é aquele que gerencia o funcionamento do hardware, como o sistema operacional.\n(__) Software aplicativo é projetado para executar tarefas específicas para o usuário, como editores de texto e planilhas.\n(__) Um driver de dispositivo é um exemplo de software aplicativo, pois ajuda o usuário a interagir com um periférico.\n(__) Softwares livres, como o Linux, não podem ser modificados ou distribuídos.\n\nAssinale a alternativa que apresenta a sequência CORRETA, de cima para baixo:",
    "options": [
      "A) V, V, F, V.",
      "B) F, V, V, F.",
      "C) V, F, F, V.",
      "D) V, V, F, F.",
      "E) Não se aplica."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. O quarto item é Falso, pois softwares livres podem ser livremente modificados e redistribuídos.",
      "Incorreta. O primeiro item é Verdadeiro e o terceiro é Falso.",
      "Incorreta. O segundo item é Verdadeiro.",
      "Correta. A sequência correta é V, V, F, F.",
      "Incorreta. Alternativa de preenchimento estrutural."
    ],
    "generalExplanation": "Análise das afirmativas:\n1. (V) Software básico gerencia o hardware (ex: sistema operacional).\n2. (V) Software aplicativo atende às necessidades finais do usuário (ex: Word, Excel).\n3. (F) Drivers de dispositivos são softwares de sistema/básicos que comunicam o SO ao hardware, não aplicativos.\n4. (F) As 4 liberdades do software livre garantem a execução, estudo, modificação e redistribuição.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Hardware e Software - Componentes Básicos",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_351",
    "text": "No que se refere às tecnologias de acesso à internet de banda larga, a tecnologia ADSL (Asymmetric Digital Subscriber Line) é amplamente conhecida por uma característica específica em relação ao tráfego de dados. Assinale a alternativa que descreve corretamente essa característica.",
    "options": [
      "A) A velocidade de download é obrigatoriamente igual à velocidade de upload, garantindo simetria total.",
      "B) A transmissão de dados ocorre por meio de pulsos de luz em filamentos de vidro, eliminando interferências.",
      "C) A velocidade de recebimento de dados (download) é superior à velocidade de envio de dados (upload).",
      "D) O acesso à internet impede o uso simultâneo da linha telefônica para chamadas de voz.",
      "E) A tecnologia utiliza cabos coaxiais compartilhados entre diversos usuários de uma mesma região."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O ADSL é assimétrico; conexões simétricas utilizam tecnologias como SDSL (Symmetric DSL), raras em acessos residenciais comuns.",
      "Incorreta. A transmissão via pulsos de luz em vidro é característica exclusiva da Fibra Óptica (FTTH/FTTB), enquanto o ADSL utiliza o par de fios de cobre da rede telefônica tradicional.",
      "Correta. A assimetria (Asymmetric) do ADSL consiste na alocação de maior largura de banda para o fluxo descendente (download) do que para o ascendente (upload), alinhando-se ao perfil de consumo dos usuários.",
      "Incorreta. O ADSL utiliza filtros de linha (microfiltros/splitters) que separam as frequências de voz (0 a 4 kHz) das frequências de dados (25 kHz a 1.1 MHz), permitindo uso simultâneo sem interferência.",
      "Incorreta. Cabos coaxiais com meio compartilhado caracterizam as redes HFC (Hybrid Fiber-Coaxial / Cable Modem), e não a tecnologia ADSL."
    ],
    "generalExplanation": "A tecnologia ADSL (Linha Digital Assimétrica de Assinante) opera sobre a rede de telefonia fixa de par trançado de cobre. O termo 'Assimétrico' decorre do fato de que a taxa de download é intencionalmente superior à taxa de upload, otimizando a experiência comum de navegação e consumo de conteúdo.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Noções de Conectividade: Wi-Fi, 4G e Operação online/offline",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_352",
    "text": "Ao configurar uma rede sem fio (Wi-Fi) doméstica ou corporativa, o administrador deve escolher um protocolo de segurança para proteger os dados contra acessos não autorizados. Considerando os padrões atuais, qual é o protocolo que oferece o maior nível de segurança contra ataques de força bruta?",
    "options": [
      "A) WEP (Wired Equivalent Privacy)",
      "B) WPA (Wi-Fi Protected Access)",
      "C) WPA2 (utilizando criptografia AES)",
      "D) WPA3",
      "E) WPS (Wi-Fi Protected Setup)"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. O WEP é um protocolo obsoleto (1997) que utiliza o algoritmo RC4 com chave estática vulnerável, podendo ser quebrado em poucos minutos.",
      "Incorreta. O WPA foi uma medida emergencial temporária que utilizava TKIP para corrigir falhas do WEP, sendo posteriormente substituído pelo WPA2.",
      "Incorreta. O WPA2 (com AES-CCMP) foi o padrão por muitos anos, mas é suscetível a ataques de dicionário offline caso o handshake de 4 vias (4-way handshake) seja capturado (ex: vulnerabilidade KRACK).",
      "Correta. O WPA3 introduziu o protocolo SAE (Simultaneous Authentication of Equals / Dragonfly Handshake), que impede ataques de força bruta/dicionário offline e garante sigilo estrito para a frente (Forward Secrecy).",
      "Incorreta. O WPS não é um protocolo de criptografia, mas sim um método simplificado de pareamento (via PIN ou botão) com graves falhas históricas de segurança."
    ],
    "generalExplanation": "O WPA3 é o padrão de segurança mais moderno da Wi-Fi Alliance. Ele substituiu a chave pré-compartilhada (PSK) pelo protocolo SAE (Simultaneous Authentication of Equals), que inviabiliza ataques de força bruta offline mesmo que senhas simples sejam interceptadas no ar.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Noções de Conectividade: Wi-Fi, 4G e Operação online/offline",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_353",
    "text": "No âmbito das redes locais sem fio (WLAN), o padrão IEEE 802.11 utiliza um método específico para o controle de acesso ao meio compartilhado, visando minimizar problemas de transmissão. Esse método é conhecido como:",
    "options": [
      "A) CSMA/CD (Carrier Sense Multiple Access with Collision Detection).",
      "B) CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance).",
      "C) Token Passing (Passagem de Testemunho).",
      "D) ALOHA Puro.",
      "E) TDMA (Time Division Multiple Access)."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O CSMA/CD (com Detecção de Colisão) é utilizado em redes cabeadas Ethernet (IEEE 802.3).",
      "Correta. O IEEE 802.11 (Wi-Fi) utiliza o CSMA/CA (com Prevenção/Evitação de Colisão), pois transmissores de rádio não conseguem detectar colisões de sinal enquanto estão transmitindo em sua própria antena.",
      "Incorreta. Token Passing é a técnica base de arquiteturas em anel como Token Ring (IEEE 802.5) e FDDI.",
      "Incorreta. ALOHA é um dos primeiros protocolos de canal aleatório (década de 1970), com alta taxa de colisões e sem sensoriamento de portadora.",
      "Incorreta. O TDMA divide o canal em slots temporais (usado em redes 2G GSM), não sendo o método padrão do 802.11."
    ],
    "generalExplanation": "Em redes sem fio, uma estação não consegue ouvir o canal enquanto transmite com sua própria potência de antena (problema do nó escondido/exposto). Por isso, o padrão IEEE 802.11 emprega o CSMA/CA (Prevenção de Colisão), ouvindo o canal antes de enviar e aplicando temporizadores aleatórios (backoff) e confirmações explícitas (ACK / RTS-CTS).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Noções de Conectividade: Wi-Fi, 4G e Operação online/offline",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_354",
    "text": "A Wi-Fi Alliance introduziu uma nomenclatura simplificada para identificar as gerações de tecnologias sem fio. Assinale a alternativa que apresenta a correlação correta entre o padrão técnico e seu nome comercial:",
    "options": [
      "A) 802.11n é o Wi-Fi 5.",
      "B) 802.11ac é o Wi-Fi 4.",
      "C) 802.11ax é o Wi-Fi 6.",
      "D) 802.11b é o Wi-Fi 3.",
      "E) 802.11g é o Wi-Fi 2."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O padrão IEEE 802.11n corresponde comercialmente ao Wi-Fi 4.",
      "Incorreta. O padrão IEEE 802.11ac corresponde comercialmente ao Wi-Fi 5.",
      "Correta. O padrão IEEE 802.11ax corresponde ao Wi-Fi 6 (e Wi-Fi 6E quando inclui a faixa de 6 GHz).",
      "Incorreta. O 802.11b é um padrão legado (1999, 11 Mbps) e a nomenclatura numérica formal começou a partir do Wi-Fi 4.",
      "Incorreta. O 802.11g é um padrão legado (2003, 54 Mbps) sem a designação numérica comercial simplificada."
    ],
    "generalExplanation": "A Wi-Fi Alliance padronizou os nomes geracionais para facilitar a compreensão dos consumidores:\n• 802.11n $\\rightarrow$ Wi-Fi 4\n• 802.11ac $\\rightarrow$ Wi-Fi 5\n• 802.11ax $\\rightarrow$ Wi-Fi 6 / 6E\n• 802.11be $\\rightarrow$ Wi-Fi 7",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Noções de Conectividade: Wi-Fi, 4G e Operação online/offline",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_355",
    "text": "Ao utilizar a funcionalidade de 'Mapas Offline' no Google Maps, o usuário consegue realizar determinadas ações mesmo sem uma conexão ativa com a internet. De acordo com as características técnicas dessa ferramenta, qual modal de transporte é plenamente suportado para navegação curva a curva no modo offline?",
    "options": [
      "A) Transporte Público (ônibus e metrô).",
      "B) Bicicleta.",
      "C) Carro.",
      "D) Caminhada (pedestre) com rotas detalhadas.",
      "E) Transporte por aplicativos de carona integrada."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O transporte público necessita de conexão online contínua para consultar tabelas horárias dinâmicas, itinerários e status de linhas.",
      "Incorreta. O modal bicicleta não possui suporte a rotas curva a curva completas no modo offline do Google Maps.",
      "Correta. O modal de condução automotiva (Carro) é o único suportado nativamente com navegação passo a passo (curva a curva) nas áreas baixadas em modo offline.",
      "Incorreta. As rotas a pé detalhadas com instruções curva a curva completas não são garantidas offline no aplicativo oficial.",
      "Incorreta. Aplicativos e integrações de transporte por aplicativo exigem conexão em tempo real com servidores para despacho e tarifação."
    ],
    "generalExplanation": "No Google Maps, o pacote de mapas offline armazena a geometria viária e pontos de interesse para permitir busca e navegação curva a curva especificamente para rotas de carro (condução). Informações de trânsito em tempo real, transporte coletivo e ciclovias exigem conexão com a internet.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Noções de Conectividade: Wi-Fi, 4G e Operação online/offline",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_356",
    "text": "Sobre o armazenamento de mapas offline no dispositivo móvel, assinale a alternativa que descreve corretamente uma característica técnica desse recurso.",
    "options": [
      "A) O Google Maps baixa automaticamente o mapa de todo o país do usuário para garantir a segurança.",
      "B) Os mapas baixados ocupam espaço apenas na memória RAM, sendo apagados ao fechar o aplicativo.",
      "C) O usuário pode optar por salvar os mapas tanto no armazenamento interno quanto em um cartão SD.",
      "D) Uma vez baixado, o mapa offline tem validade vitalícia e nunca precisa de atualização.",
      "E) O download de mapas offline só pode ser realizado através de conexões de dados móveis (4G/5G)."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O usuário seleciona retângulos ou regiões geográficas específicas para download, e não o país inteiro automaticamente.",
      "Incorreta. Os dados vetoriais e tiles dos mapas são gravados em memória secundária persistente (Flash/ROM ou SD), e não na RAM volátil.",
      "Correta. Nas configurações de mapas offline, o usuário pode configurar as preferências de armazenamento escolhendo entre o armazenamento interno do aparelho ou o cartão de memória SD.",
      "Incorreta. Os mapas offline expiram automaticamente após determinado período (geralmente 1 ano) para garantir que alterações viárias sejam atualizadas.",
      "Incorreta. O download pode (e preferencialmente deve) ser feito via conexão Wi-Fi para economizar franquia de dados móveis."
    ],
    "generalExplanation": "O Google Maps permite gerenciar a memória persistente utilizada pelos mapas offline nas configurações do app, possibilitando alternar o destino dos arquivos baixados entre o armazenamento interno do smartphone e o cartão microSD externo.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Noções de Conectividade: Wi-Fi, 4G e Operação online/offline",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_357",
    "text": "No contexto da evolução das redes de telefonia móvel, a tecnologia que se tornou o padrão global para a quarta geração (4G), permitindo altas taxas de transferência de dados e baseando-se inteiramente no Protocolo IP, é conhecida como:",
    "options": [
      "A) UMTS (Universal Mobile Telecommunications System).",
      "B) HSPA+ (High Speed Packet Access Plus).",
      "C) LTE (Long Term Evolution).",
      "D) 5G NR (New Radio).",
      "E) GSM (Global System for Mobile Communications)."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O UMTS é o padrão que definiu a base da 3ª Geração (3G).",
      "Incorreta. O HSPA+ é uma evolução do 3G (chamada comercialmente de 3.5G ou 3G+).",
      "Correta. O LTE (Long Term Evolution) e sua evolução LTE-Advanced definiram o padrão mundial de 4G, adotando uma arquitetura All-IP comutada exclusivamente por pacotes (EPC).",
      "Incorreta. O 5G NR (New Radio) é a tecnologia que define a 5ª Geração (5G).",
      "Incorreta. O GSM é o padrão celular clássico da 2ª Geração (2G), focado em comutação de circuitos para chamadas de voz e SMS."
    ],
    "generalExplanation": "O 4G baseia-se na tecnologia LTE (Long Term Evolution), desenvolvida pelo 3GPP. A principal ruptura arquitetural do LTE foi a eliminação da comutação por circuitos tradicional em favor de uma rede totalmente baseada em pacotes IP (All-IP Network).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Noções de Conectividade: Wi-Fi, 4G e Operação online/offline",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_358",
    "text": "Qual geração de telefonia móvel é historicamente reconhecida por ter viabilizado a transição definitiva do foco em voz para o foco em dados, popularizando o uso de smartphones e redes sociais?",
    "options": [
      "A) 1G.",
      "B) 2G.",
      "C) 3G.",
      "D) 4G.",
      "E) 5G."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O 1G era analógico (ex: AMPS) e exclusivamente dedicado à transmissão de voz.",
      "Incorreta. O 2G digitalizou a voz e trouxe o SMS e conexões muito lentas de dados (GPRS/EDGE), sem suporte satisfatório para smartphones modernos.",
      "Correta. O 3G (UMTS/WCDMA/HSPA) entregou velocidades na casa dos megabits por segundo, impulsionando a navegação na web móvel, o surgimento das lojas de aplicativos e o uso massivo de redes sociais no celular.",
      "Incorreta. O 4G consolidou a alta velocidade para streaming de vídeo em alta definição, mas a transição primária e o surgimento do ecossistema moderno de smartphones ocorreram no 3G.",
      "Incorreta. O 5G foca em latência ultrabaixa (URLLC) e conexões massivas para Internet das Coisas (mMTC)."
    ],
    "generalExplanation": "A tecnologia 3G representou o divisor de águas histórico na telefonia móvel ao transformar o celular de um dispositivo primariamente voltado para ligações telefônicas em um terminal multifuncional de acesso à internet e consumo de dados.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Noções de Conectividade: Wi-Fi, 4G e Operação online/offline",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_359",
    "text": "As redes Wi-Fi operam principalmente em duas frequências: 2.4 GHz e 5 GHz. Sobre as diferenças técnicas entre essas frequências, assinale a alternativa correta.",
    "options": [
      "A) A frequência de 5 GHz possui maior alcance físico e atravessa paredes com mais facilidade que a de 2.4 GHz.",
      "B) A frequência de 2.4 GHz é menos suscetível a interferências de dispositivos como micro-ondas e Bluetooth.",
      "C) A frequência de 5 GHz oferece maiores taxas de transmissão de dados, porém possui menor alcance de sinal.",
      "D) O padrão IEEE 802.11ac opera exclusivamente na frequência de 2.4 GHz para garantir compatibilidade.",
      "E) A frequência de 2.4 GHz é recomendada para ambientes com alta densidade de redes vizinhas por possuir mais canais disponíveis."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Sinais de maior frequência (5 GHz) têm menor comprimento de onda e sofrem maior atenuação por absorção física ao transpor obstáculos como paredes e lajes.",
      "Incorreta. A faixa de 2.4 GHz (banda ISM) é altamente congestionada e sofre interferência direta de fornos micro-ondas, telefones sem fio e dispositivos Bluetooth.",
      "Correta. A banda de 5 GHz dispõe de maior espectro de canais não sobrepostos e largura de canal superior (80/160 MHz), garantindo maior velocidade, porém com menor alcance e poder de penetração em obstáculos.",
      "Incorreta. O padrão 802.11ac (Wi-Fi 5) opera exclusivamente na faixa de 5 GHz.",
      "Incorreta. A faixa de 2.4 GHz possui apenas 3 canais sem sobreposição (canais 1, 6 e 11 no Brasil), sendo muito propensa a interferência em locais densos."
    ],
    "generalExplanation": "Pelas leis do eletromagnetismo, ondas de maior frequência (5 GHz) atenuam-se mais rapidamente na propagação e em obstáculos físicos (menor alcance), mas disponibilizam maior largura de banda para tráfego veloz. A faixa de 2.4 GHz tem maior alcance e penetração em paredes, mas menor velocidade e maior suscetibilidade a ruídos.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Noções de Conectividade: Wi-Fi, 4G e Operação online/offline",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_360",
    "text": "Para realizar a instalação do LibreOffice, é necessário verificar os requisitos mínimos de hardware e software para seu funcionamento. Os requisitos podem especificar sistema operacional, processador, quantidade de memória RAM, espaço em disco e resolução de tela. Sobre a finalidade e a natureza desses requisitos, é CORRETO afirmar que:",
    "options": [
      "A) O software pode ser utilizado perfeitamente, desde que respeite pelo menos um dos pontos de requisitos.",
      "B) Os requisitos de hardware são exigências exatas e imutáveis para o funcionamento do software; a configuração não pode ser superior nem inferior à informada.",
      "C) Para que o LibreOffice funcione corretamente, é preciso que todos os requisitos mínimos de hardware e sistema sejam atendidos ou superem a configuração solicitada.",
      "D) A lista de requisitos mínimos é apenas uma recomendação estética e pode ser totalmente ignorada pelo usuário.",
      "E) A atualização do software LibreOffice pode realizar um aumento físico da configuração do computador para que se adeque aos pontos de requisitos mínimos."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Atender a apenas um dos requisitos (por exemplo, ter espaço em disco mas não ter memória RAM suficiente ou sistema operacional compatível) impede a instalação ou execução estável do programa. Todos os requisitos mínimos devem ser cumpridos cumulativamente.",
      "Incorreta. Os requisitos mínimos estabelecem o patamar inferior (piso); uma configuração superior (mais RAM, processador mais potente, mais disco) é plenamente suportada e altamente recomendada para melhor desempenho.",
      "Correta. Para que uma aplicação opere adequadamente e com estabilidade, a máquina hospedeira deve satisfazer integralmente (ou ultrapassar) todos os requisitos mínimos de hardware e software estabelecidos pelo desenvolvedor.",
      "Incorreta. Requisitos mínimos são especificações técnicas operacionais indispensáveis, e não meras sugestões que possam ser desconsideradas.",
      "Incorreta. Atualizações de software modificam apenas o código e recursos lógicos; não têm o poder de alterar ou aumentar os componentes físicos (hardware) do computador."
    ],
    "generalExplanation": "Os requisitos mínimos de instalação definem o conjunto indispensável de recursos computacionais (processador, memória RAM, armazenamento, sistema operacional) que o hardware do computador deve disponibilizar para que o software execute sem falhas graves. Ter hardware superior aos requisitos mínimos melhora o desempenho.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Software - Requisitos de Instalação",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_361",
    "text": "No âmbito do serviço público e administrativo, o uso adequado dos recursos de informática é essencial para a organização de documentos, tramitação de processos e comunicação institucional. Considerando as noções fundamentais de informática, assinale a alternativa correta:",
    "options": [
      "A) O hardware corresponde aos programas e aplicativos utilizados para edição de textos, planilhas e navegação na internet.",
      "B) O sistema operacional é o software básico responsável por gerenciar os recursos de hardware e permitir a execução de outros softwares no computador.",
      "C) A memória RAM é utilizada para armazenamento permanente e não volátil de arquivos e documentos oficiais.",
      "D) O navegador de internet é um dispositivo físico periférico responsável pela conexão cabeada do computador à rede mundial.",
      "E) O software compreende apenas os componentes mecânicos e eletrônicos tangíveis presentes no gabinete do computador."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Editores de texto, planilhas e navegadores são programas (softwares de aplicação), e não hardware.",
      "Correta. O sistema operacional (como Windows ou Linux) é o software de base que atua como intermediário, gerenciando a CPU, memória, dispositivos de E/S e fornecendo a infraestrutura para a execução dos aplicativos do usuário.",
      "Incorreta. A memória RAM (Random Access Memory) é uma memória volátil de trabalho temporário; os dados nela armazenados são perdidos ao desligar o equipamento.",
      "Incorreta. O navegador web (Google Chrome, Edge, Firefox) é um programa/software aplicativo, não um periférico físico.",
      "Incorreta. Os componentes mecânicos e eletrônicos tangíveis constituem o hardware."
    ],
    "generalExplanation": "O sistema operacional é a camada de software fundamental que controla os recursos físicos (hardware) do computador, gerencia arquivos, processos e memórias, e provê uma interface para que o usuário e os softwares aplicativos possam operar.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Hardware e Software - Componentes Básicos",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_362",
    "text": "Um sistema informatizado corporativo depende tanto dos equipamentos físicos quanto dos programas instalados para funcionar corretamente e garantir a segurança das informações. Assinale a alternativa que corretamente define hardware e software, respectivamente:",
    "options": [
      "A) Dispositivos periféricos de entrada e dispositivos periféricos de saída de dados.",
      "B) Componentes físicos tangíveis e programas/instruções lógicas utilizados pelo computador.",
      "C) Parte lógica do sistema computacional e estrutura física dos circuitos eletrônicos.",
      "D) Programas instalados no computador e dispositivos externos de armazenamento.",
      "E) Sistema operacional de rede e aplicativos utilitários de segurança."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Dispositivos de entrada e de saída são apenas subclasses de hardware.",
      "Correta. Hardware representa a parte física e tangível (circuitos, placas, periféricos, memórias), enquanto Software representa a parte lógica intangível (programas, rotinas, algoritmos e dados).",
      "Incorreta. A ordem dos conceitos está invertida (atribuiu lógica ao hardware e física ao software).",
      "Incorreta. A ordem está invertida e reduz o hardware unicamente a dispositivos externos.",
      "Incorreta. Ambos os itens citados (sistema operacional e aplicativos) pertencem à categoria de software."
    ],
    "generalExplanation": "A clássica distinção em computação define Hardware como a infraestrutura física, mecânica e eletrônica ('tudo aquilo em que se pode tocar') e Software como o conjunto de instruções, dados e programas lógicos que orientam o funcionamento do hardware ('a parte lógica').",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Hardware e Software - Componentes Básicos",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_363",
    "text": "Hardware e software são elementos essenciais e interdependentes de um sistema computacional. A respeito desses elementos, assinale a opção correta:",
    "options": [
      "A) O software de um sistema computacional restringe-se obrigatoriamente aos programas fornecidos de fábrica pelo fabricante do computador.",
      "B) O sistema operacional, que é um dos principais tipos de hardware, é responsável por auxiliar o desenvolvimento e a manutenção física de circuitos.",
      "C) O hardware constitui-se unicamente de CPU e memória, enquanto o software é formado pelos periféricos de entrada e saída e pelos programas que os controlam.",
      "D) O hardware de um sistema computacional corresponde ao conjunto de rotinas lógicas responsáveis por controlar os dispositivos físicos do computador.",
      "E) O software de um sistema computacional é constituído pelo conjunto de programas, instruções e dados que permitem executar tarefas e atender às necessidades dos usuários."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. O software abrange uma infinidade de programas desenvolvidos por terceiros, sob licenças livres ou comerciais, e não apenas programas pré-instalados pelo fabricante.",
      "Incorreta. O sistema operacional é um software de base, e não um componente de hardware.",
      "Incorreta. Periféricos de entrada e saída (teclado, monitor, mouse) são componentes de hardware.",
      "Incorreta. A definição de rotinas lógicas e instruções aplica-se ao software.",
      "Correta. Software é o componente lógico composto por programas, instruções e dados que processam informações para cumprir os objetivos operacionais dos usuários."
    ],
    "generalExplanation": "O software constitui o conjunto de programas de computador, procedimentos e documentação associada que desempenham alguma tarefa em um sistema de computador, viabilizando o atendimento das necessidades práticas do usuário final.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Hardware e Software - Componentes Básicos",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_364",
    "text": "Os sistemas computacionais modernos são compostos por diferentes categorias de software, cada qual com funções específicas (controle de hardware, suporte ao sistema ou execução de tarefas do usuário). Considerando essa classificação, assinale a opção CORRETA:",
    "options": [
      "A) Drivers são softwares aplicativos voltados exclusivamente para a edição de textos e navegação em páginas web.",
      "B) Softwares utilitários têm como função primordial substituir o sistema operacional no gerenciamento direto de processador e memória.",
      "C) Sistemas operacionais gerenciam os recursos de hardware, coordenam processos e fornecem uma plataforma de suporte para a execução de softwares aplicativos.",
      "D) Softwares aplicativos são programas encarregados da comunicação de baixo nível entre o barramento físico e o chipset da placa-mãe.",
      "E) Firmwares são pacotes de produtividade de escritório utilizados para confecção de relatórios e mala direta."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Drivers são programas de sistema/suporte que ensinam o sistema operacional a se comunicar com periféricos de hardware específicos.",
      "Incorreta. Softwares utilitários (antivírus, compactadores, desfragmentadores) prestam suporte e manutenção ao sistema, sem substituir o núcleo do sistema operacional.",
      "Correta. O sistema operacional é o software de base que gerencia os recursos de hardware (processador, memória, dispositivos de E/S) e viabiliza a interface e o ambiente de execução para os programas aplicativos.",
      "Incorreta. Programas aplicativos atendem diretamente às tarefas do usuário final; a comunicação de baixo nível com hardware cabe a drivers e firmware.",
      "Incorreta. Firmware é software de baixo nível gravado em chips de memória não volátil (ROM/Flash) para inicialização de hardware (como a BIOS/UEFI)."
    ],
    "generalExplanation": "Na taxonomia de softwares: Softwares de Base (como Sistemas Operacionais) administram os recursos do hardware e provêm serviços aos programas; Softwares de Aplicação (editores, navegadores) atendem a finalidades práticas dos usuários; e Utilitários auxiliam na manutenção e otimização do sistema.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Software - Classificação",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_365",
    "text": "Analise as afirmativas a seguir sobre os modelos e tipos de licenciamento de software e classifique-as com (V) para VERDADEIRO ou (F) para FALSO:\n(__) Softwares do tipo freeware são disponibilizados gratuitamente para uso, porém não necessariamente possuem código-fonte aberto aos usuários.\n(__) Softwares do tipo shareware são distribuídos gratuitamente para teste por tempo limitado ou com funcionalidades restritas, visando incentivar a aquisição da versão completa.\n(__) Softwares comerciais são sempre gratuitos para utilização pessoal em ambiente doméstico, sendo cobrados exclusivamente em pessoas jurídicas e órgãos públicos.\n(__) Softwares categorizados como freeware concedem, de forma mandatória e obrigatória, a liberdade de modificação do código-fonte por qualquer pessoa.\nAssinale a sequência CORRETA de preenchimento dos parênteses, de cima para baixo:",
    "options": [
      "A) F – V – V – F.",
      "B) V – V – F – F.",
      "C) F – V – F – F.",
      "D) V – F – V – F.",
      "E) V – V – F – V."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A primeira afirmativa é verdadeira, pois freeware é gratuito para uso mas com código proprietário/fechado.",
      "Correta. A sequência é V – V – F – F. (1) V: Freeware é gratuito quanto ao custo de uso, mas o código-fonte costuma permanecer fechado e protegido; (2) V: Shareware funciona como modalidade de experimentação (trial/demo); (3) F: Software comercial pode cobrar licença para uso doméstico ou corporativo; (4) F: Freeware não obriga a abertura de código (quem garante modificação é o Software Livre / Open Source).",
      "Incorreta. A primeira afirmativa é verdadeira.",
      "Incorreta. A segunda afirmativa é verdadeira e a terceira é falsa.",
      "Incorreta. A quarta afirmativa é falsa (freeware não exige abertura nem permissão de alteração do código)."
    ],
    "generalExplanation": "Freeware refere-se à gratuidade de uso (preço zero), sem implicar código aberto (open source). Shareware é o software de avaliação ('experimente antes de comprar'). Softwares comerciais podem exigir licença paga para qualquer usuário. A liberdade de modificar o código-fonte é prerrogativa exclusiva do Software Livre e Open Source.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Software - Licenciamento",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_366",
    "text": "Em relação aos conceitos, características e modelos de Software Open Source (Código Aberto) e Software Livre, assinale a opção CORRETA:",
    "options": [
      "A) Software open source é aquele distribuído obrigatoriamente sem custo financeiro, porém com cláusula que impede qualquer tipo de acesso ou leitura do código-fonte.",
      "B) Softwares open source possuem proibição legal de utilização para fins comerciais e corporativos, restringindo-se estritamente ao ambiente acadêmico.",
      "C) O sistema operacional Linux e a suíte LibreOffice são exemplos de softwares de código aberto, permitindo que usuários estudem, modifiquem e redistribuam suas alterações.",
      "D) O LibreOffice é classificado como software proprietário de código fechado, razão pela qual suas rotinas não podem ser adaptadas pela comunidade.",
      "E) Todo software de distribuição gratuita (freeware) enquadra-se automaticamente na categoria de software open source."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. A principal premissa do open source é justamente o fornecimento e transparência do código-fonte.",
      "Incorreta. Licenças de código aberto e software livre (como GPL, MIT, Apache) permitem expressamente o uso comercial.",
      "Correta. O Linux (kernel e distribuições) e o LibreOffice são exemplos consolidados de software livre e de código aberto, assegurando a liberdade de executar, estudar, modificar e redistribuir o código.",
      "Incorreta. O LibreOffice é um software livre/open source sob licenças públicas (MPL/LGPL), não proprietário.",
      "Incorreta. Freeware é gratuito mas quase sempre proprietário/fechado; gratuidade não se confunde com código aberto."
    ],
    "generalExplanation": "Softwares Open Source e Softwares Livres garantem aos usuários acesso integral ao código-fonte, permitindo execução para qualquer finalidade (inclusive comercial), estudo de funcionamento, adaptação/modificação e redistribuição das cópias.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Software - Open Source e Software Livre",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_367",
    "text": "Ao planejar a padronização de programas no parque computacional de um órgão público, a equipe de TI decide manter conformidade legal e auditorável, identificando licenças que concedem a liberdade de executar, estudar, modificar e redistribuir o código-fonte, diferenciando-as daquelas que apenas oferecem uso gratuito sob código fechado. Indique a licença ou modelo que caracteriza genuinamente o Software Livre:",
    "options": [
      "A) Licença Proprietária com termo de cessão temporária.",
      "B) Licença Freeware com cláusula de proibição de descompilação.",
      "C) Licença Trial / Demo com validade por prazo determinado.",
      "D) GNU GPL (General Public License).",
      "E) EULA (End User License Agreement) de software comercial restritivo."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Licenças proprietárias retêm os direitos autorais e vedam o acesso e a modificação do código-fonte.",
      "Incorreta. O modelo freeware concede apenas gratuidade de uso, mantendo o software fechado e sem as liberdades do software livre.",
      "Incorreta. Trial é uma versão demonstrativa para avaliação por período de tempo limitado.",
      "Correta. A GNU General Public License (GPL) é o modelo emblemático de licença de Software Livre (com copyleft), garantindo as 4 liberdades essenciais: executar, estudar o código, modificar e redistribuir cópias e versões modificadas.",
      "Incorreta. EULAs de softwares proprietários comerciais restringem direitos do usuário."
    ],
    "generalExplanation": "A GNU GPL (General Public License), criada por Richard Stallman no projeto GNU, assegura juridicamente as quatro liberdades fundamentais do Software Livre: liberdade 0 (executar o programa), liberdade 1 (estudar o código e adaptá-lo), liberdade 2 (redistribuir cópias) e liberdade 3 (melhorar o programa e liberar melhorias ao público).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Software - Licenciamento",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_368",
    "text": "No contexto dos conceitos básicos de informática, o domínio sobre a arquitetura de sistemas e a distinção clara entre hardware e software é indispensável para a operação eficiente dos recursos tecnológicos. Com base nesse tema, assinale a definição CORRETA:",
    "options": [
      "A) Hardware é o conjunto de programas, linguagens de programação e sistemas operacionais instalados em computadores e servidores.",
      "B) Software designa as placas de circuitos, memórias e componentes físicos tangíveis integrados à placa-mãe.",
      "C) Rede de computadores é uma estrutura de comunicação restrita exclusivamente à transmissão de dados por meio da rede elétrica predial.",
      "D) Software é o conjunto de instruções lógicas, códigos, programas e rotinas eletronicamente processadas que instruem o hardware a executar determinadas tarefas.",
      "E) Hardware é a camada lógica e virtual responsável por estabelecer os protocolos de navegação web e criptografia de senhas."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Programas e sistemas operacionais são softwares.",
      "Incorreta. Componentes físicos e placas constituem o hardware.",
      "Incorreta. Redes utilizam múltiplos meios físicos e não físicos (par trançado, fibra óptica, Wi-Fi, satélite, rádio), não se limitando a cabos elétricos.",
      "Correta. Software é o componente lógico de um sistema computacional, formado por linhas de código, algoritmos e dados que determinam o comportamento e a operação dos circuitos de hardware.",
      "Incorreta. Protocolos e rotinas lógicas são elementos de software."
    ],
    "generalExplanation": "Software é a parte imaterial e lógica do computador constituída por algoritmos, programas e instruções de máquina que comandam o funcionamento dos circuitos físicos de hardware para o processamento de dados.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Hardware e Software - Componentes Básicos",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_369",
    "text": "A licença de software é o instrumento jurídico que define os limites e direitos de uso de um programa de computador. Assinale o tipo de software e licença em que o programa é fornecido sob controle estrito do detentor dos direitos autorais, que geralmente proíbe cópias não autorizadas, redistribuição e engenharia reversa ou modificação do código-fonte fechado:",
    "options": [
      "A) Adware.",
      "B) Open Source (Código Aberto).",
      "C) Software Proprietário.",
      "D) Software Livre (GPL).",
      "E) Versão Beta de domínio público."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Adware é uma categoria de software que tem como modelo de negócio a exibição de propagandas e anúncios, podendo ter diversas formas de licença.",
      "Incorreta. Open Source incentiva a auditoria, redistribuição e alteração do código-fonte público.",
      "Correta. O Software Proprietário (ou comercial fechado) possui código-fonte restrito e protegido por direitos autorais; sua licença de uso veda redistribuição, cópia e modificação sem a devida autorização formal do titular.",
      "Incorreta. Software Livre garante expressamente a liberdade de cópia, redistribuição e modificação do código.",
      "Incorreta. Versão Beta é uma fase de teste e homologação técnica de pré-lançamento, não um modelo de licenciamento de direitos autorais."
    ],
    "generalExplanation": "No modelo de Software Proprietário (código fechado), o usuário adquire apenas uma licença limitada de uso do programa binário compilado. Os direitos autorais, o código-fonte e o controle sobre cópias, redistribuição e engenharia reversa permanecem sob domínio exclusivo do desenvolvedor/empresa proprietária.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Software - Licenciamento Proprietário",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_370",
    "text": "A tecnologia de quinta geração de redes móveis (5G) não se limita ao aumento da taxa de transmissão de dados (velocidade de download), tendo sido estruturada sobre três pilares de aplicação fundamentais. O pilar projetado especificamente para prover latência ultrabaixa (inferior a 1 milissegundo) e altíssima confiabilidade, viabilizando cirurgias remotas, telemedicina e controle de carros autônomos em tempo real, denomina-se:",
    "options": [
      "A) eMBB (Enhanced Mobile Broadband).",
      "B) URLLC (Ultra-Reliable Low Latency Communications).",
      "C) mMTC (Massive Machine Type Communications).",
      "D) HSPA+ (High Speed Packet Access Plus).",
      "E) LTE-A (Long Term Evolution Advanced)."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O eMBB (Banda Larga Móvel Aprimorada) é o pilar voltado para altíssimas taxas de transferência (downloads ultrarrápidos de gigabits por segundo) e streaming em 4K/8K.",
      "Correta. O URLLC (Comunicações Ultra-Confiáveis e de Baixa Latência) é o pilar do 5G desenvolvido para missões críticas em que o atraso de transmissão não pode exceder 1 ms e a confiabilidade deve ser de 99,999%, essencial para carros autônomos, telecirurgia e automação industrial crítica.",
      "Incorreta. O mMTC (Comunicação Massiva do Tipo Máquina) foca na conexão simultânea de milhões de sensores e dispositivos IoT por quilômetro quadrado com baixo consumo energético.",
      "Incorreta. O HSPA+ é uma tecnologia evolutiva da terceira geração (3G+).",
      "Incorreta. O LTE-Advanced é uma evolução da quarta geração (4G)."
    ],
    "generalExplanation": "Os três pilares do 5G são: 1) eMBB (altas velocidades de dados para o usuário comum); 2) URLLC (baixíssima latência e máxima confiabilidade para aplicações críticas em tempo real); 3) mMTC (densidade massiva de dispositivos conectados para Internet das Coisas - IoT).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções de Conectividade - Tecnologia 5G e Pilares (URLLC, eMBB, mMTC)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_371",
    "text": "No contexto de redes de computadores, tráfego de dados e qualidade de conexão (QoS), a métrica técnica denominada “Latência” (comumente aferida por utilitários como o comando 'ping') corresponde a:",
    "options": [
      "A) À largura de banda máxima teórica de transmissão de dados suportada pelo meio físico de comunicação.",
      "B) À discrepância percentual entre a velocidade nominal contratada no plano e a taxa real de transferência entregue.",
      "C) Ao tempo de atraso (geralmente mensurado em milissegundos) decorrido entre o envio de um pacote de dados pela origem e a recepção da confirmação/resposta pelo destino.",
      "D) À quantidade máxima de dispositivos simultâneos que um roteador sem fio suporta associar sem perda de sinal.",
      "E) Ao processo físico de modulação e demodulação de sinais eletromagnéticos operado pelo modem."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. A quantidade total de dados transmitidos por unidade de tempo refere-se à largura de banda (bandwidth) ou throughput.",
      "Incorreta. A discrepância entre contratado e entregue é métrica de conformidade do SLA de banda larga.",
      "Correta. Latência é o tempo de atraso que um pacote leva para viajar de um ponto a outro (ida e volta - RTT / Round Trip Time), sendo expressa em milissegundos (ms). Latências baixas são cruciais para chamadas de voz, videoconferências e controle em tempo real.",
      "Incorreta. A capacidade de conexões simultâneas diz respeito à tabela de associação e hardware do Access Point / MIMO.",
      "Incorreta. Modulação e demodulação de sinais é a função conversora do modem."
    ],
    "generalExplanation": "Latência mede o tempo de resposta (atraso/delay) da rede. Enquanto a largura de banda mede o 'volume' de dados transportados por segundo, a latência mede a 'rapidez' com que cada pacote trafega e retorna.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções de Conectividade - Métricas de Rede e Latência (Ping / RTT)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_372",
    "text": "Ao configurar uma rede sem fio utilizando um roteador Wi-Fi dual-band (frequências de 2,4 GHz e 5 GHz), um técnico de suporte deve orientar os usuários quanto às características físicas de propagação de cada banda. A respeito dessas frequências, é correto afirmar que:",
    "options": [
      "A) A banda de 5 GHz possui maior alcance de cobertura e atravessa paredes e obstáculos sólidos com maior facilidade do que a de 2,4 GHz.",
      "B) A banda de 2,4 GHz é imune a ruídos e interferências eletromagnéticas de fornos micro-ondas, telefones sem fio e dispositivos Bluetooth.",
      "C) A banda de 5 GHz proporciona taxas de transmissão e largura de banda significativamente superiores, porém apresenta menor alcance de propagação e maior atenuação diante de barreiras físicas.",
      "D) A banda de 2,4 GHz dispõe de um número muito maior de canais não sobrepostos em comparação à banda de 5 GHz.",
      "E) Ambas as frequências exibem exatamente a mesma taxa de absorção de sinal por alvenaria, diferenciando-se apenas pelo tipo de antena receptora."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Frequências mais elevadas (5 GHz) possuem menor comprimento de onda e sofrem maior absorção/atenuação ao transpor barreiras físicas sólidas (paredes, lajes).",
      "Incorreta. A faixa de 2,4 GHz é altamente suscetível a interferências de múltiplos aparelhos domésticos (Bluetooth, micro-ondas, babás eletrônicas).",
      "Correta. A banda de 5 GHz oferece canais mais largos e velocidades de transferência muito mais altas com menos congestionamento, mas seu alcance espacial é menor e sua penetração em paredes é inferior à de 2,4 GHz.",
      "Incorreta. A faixa de 2,4 GHz possui apenas 3 canais que não se sobrepõem (canais 1, 6 e 11), enquanto a faixa de 5 GHz dispõe de dezenas de canais desobstruídos.",
      "Incorreta. O comportamento de atenuação e reflexão varia substancialmente em função da frequência da onda eletromagnética."
    ],
    "generalExplanation": "Princípio do Wi-Fi Dual-Band: 2,4 GHz possui maior alcance e melhor capacidade de transpor paredes (mas menor velocidade e mais interferência); 5 GHz possui velocidades muito superiores e menor interferência (mas menor alcance e maior dificuldade para atravessar obstáculos).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções de Conectividade - Redes Sem Fio Wi-Fi (Bandas 2.4 GHz vs 5 GHz)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_373",
    "text": "O padrão de rede sem fio IEEE 802.11ac, comercialmente conhecido como Wi-Fi 5, representou um salto de desempenho para as redes locais sem fio. Uma característica técnica essencial e exclusiva da especificação desse padrão é que ele opera:",
    "options": [
      "A) Exclusivamente na frequência de 2,4 GHz.",
      "B) Exclusivamente na frequência de 5 GHz.",
      "C) Simultaneamente e de forma nativa nas frequências de 2,4 GHz e 5 GHz.",
      "D) Exclusivamente na frequência de 6 GHz.",
      "E) Em frequências sub-gigahertz abaixo de 900 MHz."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O padrão 802.11ac não possui especificação para operar na faixa de 2,4 GHz.",
      "Correta. A norma IEEE 802.11ac (Wi-Fi 5) foi concebida para operar única e exclusivamente na faixa de 5 GHz. Em roteadores comercializados como dual-band que suportam 802.11ac, a transmissão em 2,4 GHz é realizada pelo padrão legado 802.11n (Wi-Fi 4).",
      "Incorreta. A operação nativa mista em 2,4 GHz e 5 GHz ocorre no 802.11n (Wi-Fi 4) e no 802.11ax (Wi-Fi 6), mas não no 802.11ac.",
      "Incorreta. A frequência de 6 GHz foi introduzida no padrão Wi-Fi 6E (802.11ax estendido) e no Wi-Fi 7 (802.11be).",
      "Incorreta. Frequências abaixo de 1 GHz correspondem a especificações como 802.11ah (HaLow)."
    ],
    "generalExplanation": "O padrão IEEE 802.11ac (Wi-Fi 5) é estritamente exclusivo da faixa de 5 GHz, utilizando canais de 80 MHz e 160 MHz para atingir taxas gigabit sem fio.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções de Conectividade - Padrões Wi-Fi (IEEE 802.11ac / Wi-Fi 5)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_374",
    "text": "As tecnologias MIMO (Multiple Input Multiple Output) e MU-MIMO (Multi-User MIMO) são inovações fundamentais para elevar a eficiência e a capacidade de tráfego nas redes sem fio modernas. O diferencial técnico essencial introduzido pelo MU-MIMO consiste em:",
    "options": [
      "A) Utilizar uma única antena omnidirecional para transmitir e receber todos os dados de forma alternada.",
      "B) Permitir que o Ponto de Acesso (Access Point) transmita fluxos de dados simultaneamente para múltiplos dispositivos clientes no mesmo intervalo de tempo.",
      "C) Reduzir a frequência de operação do sinal de rádio para aumentar o alcance geográfico da antena.",
      "D) Suprimir a necessidade de qualquer protocolo de controle de acesso ao meio como o CSMA/CA.",
      "E) Aumentar a potência máxima de transmissão do rádio para romper blindagens industriais."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Tecnologias MIMO pressupõem o uso coordenado de múltiplas antenas transmissoras e receptoras.",
      "Correta. No MIMO tradicional (SU-MIMO - Single User), o roteador só consegue se comunicar com um dispositivo por vez (atendendo os demais por alternância rápida no tempo). O MU-MIMO (Multi-User MIMO) divide os fluxos espaciais de múltiplas antenas para transmitir dados simultaneamente a diversos dispositivos clientes, eliminando gargalos e filas de espera na rede.",
      "Incorreta. O MU-MIMO não modifica a frequência de rádio da rede.",
      "Incorreta. O controle de meio e coordenação de tráfego continua ativo.",
      "Incorreta. Trata-se de multiplexação espacial e modulação eficiente, não de aumento de potência bruta de emissão."
    ],
    "generalExplanation": "MU-MIMO (Multi-User Multiple Input Multiple Output) permite que o roteador envie e receba dados para vários dispositivos clientes ao mesmo tempo, reduzindo o tempo de espera e multiplicando a capacidade da rede Wi-Fi.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções de Conectividade - Tecnologias de Antena e Transmissão (MIMO e MU-MIMO)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_375",
    "text": "Considere uma agência do IBGE instalada em um prédio antigo com diversas divisórias espessas de alvenaria e gesso, na qual os agentes administrativos precisam de conexão estável em salas localizadas em extremidades distantes do roteador central. Para assegurar maior alcance de sinal e melhor capacidade de transpor tais barreiras físicas, a configuração recomendada deve priorizar:",
    "options": [
      "A) A banda de 5 GHz, em virtude de sua velocidade teórica nominal superior.",
      "B) O padrão 802.11ac, por ser focado unicamente na faixa de 5 GHz.",
      "C) A banda de 2,4 GHz, em razão de seu maior comprimento de onda, que confere maior capacidade de propagação e penetração em obstáculos sólidos.",
      "D) A desativação compulsória do mecanismo CSMA/CA no roteador.",
      "E) A alocação de canais adjacentes fortemente sobrepostos para expandir a área de cobertura."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O sinal de 5 GHz atenua rapidamente com a distância e sofre grande bloqueio ao bater em paredes e divisórias.",
      "Incorreta. O 802.11ac opera apenas em 5 GHz, enfrentando as mesmas limitações de alcance e penetração.",
      "Correta. Ondas eletromagnéticas na faixa de 2,4 GHz possuem comprimento de onda maior (~12,5 cm) em relação a 5 GHz (~6 cm), sofrendo menor atenuação ao atravessar materiais sólidos (paredes, portas de madeira, divisórias), garantindo melhor alcance e estabilidade em pontos distantes.",
      "Incorreta. O CSMA/CA é essencial para evitar colisões no meio sem fio compartilhado.",
      "Incorreta. Canais sobrepostos geram interferência destrutiva (CCI) e degradam o desempenho da rede."
    ],
    "generalExplanation": "Em física de propagação de rádio: frequências menores (2,4 GHz) possuem maior comprimento de onda e penetram melhor obstáculos sólidos, atingindo distâncias maiores que frequências elevadas (5 GHz).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções de Conectividade - Propagação de Sinal e Atenuação por Barreiras Físicas",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_376",
    "text": "Um recenseador do IBGE em trabalho de campo no setor rural desloca-se por uma área isolada sem qualquer cobertura de telefonia celular (sem sinal de 3G/4G/5G) e sem redes Wi-Fi disponíveis. Como havia efetuado previamente o download do mapa offline do município em seu Dispositivo Móvel de Coleta (DMC), ele observa que o aplicativo continua indicando com exatidão sua posição geográfica em tempo real e a rota percorrida. Isso ocorre tecnicamente porque:",
    "options": [
      "A) O aplicativo utiliza transmissões de rádio FM comercial para triangular as coordenadas do usuário.",
      "B) O receptor de hardware GPS/GNSS do dispositivo capta diretamente os sinais de rádio emitidos pela constelação de satélites orbitais, funcionando de forma autônoma e independente de conexão à internet.",
      "C) O mapa offline armazena um modelo determinístico de inteligência artificial que calcula a posição estimada do veículo com base na última velocidade média registrada.",
      "D) O dispositivo utiliza transmissões de Bluetooth de baixa energia emitidas pela vegetação local para inferir o posicionamento.",
      "E) A localização geográfica é simulada por um algoritmo local de interpolação virtual sem qualquer recepção de sinal físico externo."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Smartphones não utilizam radiodifusão FM para cálculo de posicionamento geodésico.",
      "Correta. O sistema de posicionamento por satélite (GPS, Glonass, Galileo) é um receptor de rádio passivo integrado ao hardware do smartphone/DMC. Ele recebe os sinais de tempo e efemérides diretamente dos satélites em órbita terrestre, calculando latitude e longitude sem depender de sinal de operadora móvel ou dados de internet. O mapa offline fornece a base cartográfica para renderizar a posição na tela.",
      "Incorreta. O GPS fornece posicionamento real por trilateração de satélites em tempo real, e não estimativa por inércia.",
      "Incorreta. Não existe emissão Bluetooth em vegetação.",
      "Incorreta. A localização é real e baseada em recepção de sinais de rádio do GNSS/GPS."
    ],
    "generalExplanation": "O chip GPS do aparelho recebe sinais de satélite de forma totalmente independente da rede de internet ou telefonia celular. O mapa offline fornece a camada visual e viária necessária para que as coordenadas obtidas pelo GPS sejam exibidas ao usuário.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções de Conectividade - Operação Online/Offline e Funcionamento do GPS/GNSS",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_377",
    "text": "No que se refere aos recursos e às restrições de operação em modo offline de aplicativos de mapas e navegação (como o Google Maps ou softwares de georreferenciamento), assinale a funcionalidade que fica INDISPONÍVEL quando o dispositivo não possui conexão ativa à internet:",
    "options": [
      "A) A visualização de nomes de logradouros, bairros e avenidas contidos na área previamente baixada.",
      "B) A pesquisa por pontos de interesse e estabelecimentos cadastrados (ex: postos de saúde, escolas e comércios locais) no pacote baixado.",
      "C) A exibição em tempo real da densidade do tráfego de veículos, congestionamentos, acidentes e rotas alternativas dinâmicas.",
      "D) A emissão de instruções de navegação curva a curva guiadas por voz para trajetos de automóvel na malha viária baixada.",
      "E) O traçado e cálculo do itinerário entre dois endereços localizados dentro do polígono do mapa salvo localmente."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. A malha viária e os nomes de ruas estão gravados no arquivo de mapa offline baixado.",
      "Incorreta. A base de dados básica de pontos de interesse (POIs) é incluída no pacote baixado e permite busca offline.",
      "Correta. As condições de tráfego em tempo real, lentidões, radares móveis e acidentes são informações dinâmicas que exigem fluxo constante de dados sincronizados com servidores em nuvem. No modo offline, o recurso de tráfego em tempo real fica integralmente desativado.",
      "Incorreta. A navegação curva a curva para automóveis funciona perfeitamente offline na área baixada.",
      "Incorreta. O algoritmo de cálculo de rotas roda localmente no dispositivo utilizando a malha vetorial armazenada."
    ],
    "generalExplanation": "Em mapas offline, dados estáticos (ruas, rotas pré-calculadas, navegação GPS básica e pontos de interesse baixados) funcionam sem internet. Dados dinâmicos (trânsito em tempo real, transporte público ao vivo, visualização de satélite e fotos de locais) exigem conexão online.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções de Conectividade - Recursos e Limitações da Navegação em Modo Offline",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_378",
    "text": "Ao utilizar mapas offline em dispositivos móveis, arquivos locais de malhas viárias e pontos de interesse podem sofrer obsolescência ao longo do tempo (como alterações de sentido de vias, inauguração de novos loteamentos ou fechamento de estabelecimentos). Para mitigar esse problema e manter os dados fidedignos, os aplicativos modernos de navegação adotam o seguinte procedimento:",
    "options": [
      "A) Realizam atualizações e sincronizações automáticas em segundo plano, preferencialmente quando o dispositivo se conecta a uma rede Wi-Fi estável.",
      "B) Efetuam o download contínuo de micro-arquivos de metadados transmitidos por mensagens SMS silenciosas das operadoras.",
      "C) Dispensam qualquer processo de atualização, pois os traçados urbanos e limites censitários municipais são imutáveis após a publicação inicial.",
      "D) Bloqueiam o acesso ao aplicativo e exigem obrigatoriamente que o usuário exclua e baixe tudo de forma manual a cada 24 horas.",
      "E) Utilizam redes neurais locais para inferir e adivinhar modificações de zoneamento urbano sem qualquer contato com os servidores centrais."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. Aplicativos de mapas (como o Google Maps) possuem rotinas automáticas que atualizam o cache de mapas offline periodicamente (evitando que expirem), priorizando momentos em que o dispositivo está conectado ao Wi-Fi e conectado à tomada.",
      "Incorreta. Atualizações cartográficas demandam pacotes de megabytes incompatíveis com o protocolo SMS.",
      "Incorreta. Cidades passam por constantes modificações urbanísticas e viárias.",
      "Incorreta. O processo é transparente e gerenciado automaticamente pelo app sem necessidade de exclusão manual diária.",
      "Incorreta. As atualizações cadastrais oficiais dependem de sincronização com o banco de dados do provedor."
    ],
    "generalExplanation": "Os mapas offline possuem prazo de validade (frequentemente de 30 a 365 dias) e são atualizados automaticamente pelo aplicativo sempre que uma conexão Wi-Fi de alta capacidade é detectada, garantindo conformidade com a base de dados central.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções de Conectividade - Sincronização e Manutenção de Mapas Offline",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_379",
    "text": "A quinta geração de redes móveis (5G) representa uma revolução arquitetural em relação às gerações anteriores. Entre as especificações técnicas inovadoras que tornam o 5G apto a sustentar aplicações críticas, como telecirurgias e sistemas anticolisão de frotas autônomas, destaca-se:",
    "options": [
      "A) O abandono da transmissão digital e o retorno à modulação analógica de rádio para diminuir o jitter.",
      "B) A redução extrema da latência da rede de transporte e rádio para patamares inferiores a 1 milissegundo.",
      "C) O aumento da cobertura em áreas rurais através do uso exclusivo de ondas curtas de rádio amador.",
      "D) A limitação forçada de conexões simultâneas a no máximo 100 aparelhos por antena transmissora.",
      "E) O emprego exclusivo de frequências inferiores a 700 MHz, vedando o uso de fatiamento de rede."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O 5G é uma rede 100% digital baseada em pacotes IP avançados.",
      "Correta. A latência ultrabaixa (menor que 1 ms no padrão 5G NR / URLLC) permite tempo de resposta quase instantâneo, viabilizando operações cirúrgicas à distância, frenagem autônoma de emergência e automação de robôs industriais.",
      "Incorreta. O 5G opera em múltiplas faixas (faixa baixa <1GHz, faixa média 3,5GHz e ondas milimétricas mmWave 24-100GHz).",
      "Incorreta. O 5G amplia a capacidade para até 1 milhão de dispositivos por km² (mMTC).",
      "Incorreta. O 5G utiliza frequências altas e o fatiamento de rede (Network Slicing) é um dos seus recursos mais nobres."
    ],
    "generalExplanation": "A latência abaixo de 1 milissegundo no 5G viabiliza a 'internet tátil' e a teleoperação em tempo real com segurança crítica.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções de Conectividade - Especificações Técnicas do 5G e Baixa Latência",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_380",
    "text": "A tecnologia de “Network Slicing” (Fatiamento de Rede), um dos principais diferenciais arquiteturais nativos do 5G Standalone (5G SA), consiste em:",
    "options": [
      "A) Um procedimento físico de corte e seccionamento de cabos de fibra óptica para duplicar a taxa de transmissão.",
      "B) A capacidade de particionar uma única infraestrutura física de rede em múltiplas redes lógicas e virtuais dedicadas, cada qual customizada com parâmetros específicos de latência, velocidade e confiabilidade.",
      "C) Uma técnica de fragmentação de pacotes de dados para torná-los compatíveis exclusivamente com redes 2G/3G obsoletas.",
      "D) Um protocolo de bloqueio de segurança que impede que dispositivos de Internet das Coisas (IoT) acessem a rede celular.",
      "E) A separação física obrigatória entre as antenas de telefonia celular e as centrais de processamento de dados."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Trata-se de um conceito de virtualização e gerência lógica, não corte físico.",
      "Correta. O Network Slicing emprega SDN (Software-Defined Networking) e NFV (Network Functions Virtualization) para criar fatias virtuais independentes sobre a mesma infraestrutura física: por exemplo, uma fatia com latência ultrabaixa para veículos autônomos, outra fatia com altíssima banda para streaming 8K e outra fatia para milhões de sensores IoT.",
      "Incorreta. Não se relaciona a compatibilidade com redes 2G legadas.",
      "Incorreta. O fatiamento viabiliza e otimiza a integração de dispositivos IoT.",
      "Incorreta. Não é mera separação de voz e SMS, mas criação completa de redes lógicas ponta a ponta com perfis de SLA diferenciados."
    ],
    "generalExplanation": "Network Slicing (Fatiamento de Rede) permite que operadoras criem redes virtuais personalizadas para diferentes tipos de clientes e aplicações críticas sobre uma mesma rede física 5G.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções de Conectividade - Tecnologia 5G e Network Slicing (Fatiamento de Rede)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_381",
    "text": "Ao comparar as gerações de redes móveis 4G (LTE) e 5G (NR), um especialista em infraestrutura de telecomunicações deve levar em conta que:",
    "options": [
      "A) O 4G LTE não opera sobre o protocolo IP, enquanto o 5G é a primeira tecnologia de telefonia a utilizar pacotes TCP/IP.",
      "B) A latência média típica no 4G situa-se na faixa de 30 a 50 milissegundos, ao passo que no 5G essa latência pode ser reduzida para patamares inferiores a 1 milissegundo.",
      "C) O 4G foi concebido com foco prioritário na conexão massiva de sensores de Internet das Coisas (IoT), enquanto o 5G destina-se unicamente a smartphones de usuários finais.",
      "D) A velocidade média teórica de transferência de dados no 4G supera a do 5G em ambientes metropolitanos congestionados.",
      "E) O 5G adota o protocolo HSPA+ como padrão oficial de sua interface aérea de rádio."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O 4G LTE já é uma arquitetura totalmente baseada em pacotes IP (All-IP Network).",
      "Correta. Enquanto o 4G apresenta tempos de resposta típicos de 30 a 50 ms, o 5G foi projetado para atingir latências abaixo de 1 ms no modo URLLC, permitindo respostas em tempo real.",
      "Incorreta. O 4G foi desenhado para banda larga móvel em smartphones; o 5G expandiu o escopo para conectar massivamente cidades inteligentes, veículos e sensores industriais (IoT).",
      "Incorreta. O 5G alcança taxas de dados de até 10 a 20 Gbps (10 a 100 vezes superiores ao 4G).",
      "Incorreta. A interface de rádio do 5G é o 5G NR (New Radio); HSPA+ pertence ao 3G."
    ],
    "generalExplanation": "Comparativo 4G vs 5G: O 5G entrega velocidades até 100x maiores, capacidade de conexão 10x superior (1 milhão de disp./km²) e latência até 50x menor (<1 ms no 5G vs ~50 ms no 4G).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções de Conectividade - Comparativo 4G (LTE) vs 5G (NR)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_382",
    "text": "No pilar de Comunicação Massiva do Tipo Máquina (mMTC), qual é a meta técnica de suporte de densidade de dispositivos conectados simultaneamente estabelecida para a tecnologia 5G por quilômetro quadrado ($km^2$)?",
    "options": [
      "A) Até 1.000 dispositivos por $km^2$.",
      "B) Até 10.000 dispositivos por $km^2$.",
      "C) Até 100.000 dispositivos por $km^2$.",
      "D) Até 1.000.000 (1 milhão) de dispositivos por $km^2$.",
      "E) Até 10.000.000 (10 milhões) de dispositivos por $km^2$."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. 1.000 dispositivos/km² é uma densidade muito baixa, atendida mesmo por tecnologias legadas.",
      "Incorreta. Capacidade típica de redes 4G sob tráfego comum.",
      "Incorreta. O 4G avançado suporta cerca de 60.000 a 100.000 dispositivos por km².",
      "Correta. A especificação padrão da ITU (International Telecommunication Union) para o 5G (pilar mMTC) determina a capacidade de conectar até 1.000.000 (1 milhão) de dispositivos por quilômetro quadrado, viabilizando redes massivas de sensores de cidades inteligentes e IoT.",
      "Incorreta. Valor que extrapola os requisitos formais da norma IMT-2020 para o 5G."
    ],
    "generalExplanation": "A especificação IMT-2020 do 5G estabelece a capacidade de suportar até 1 milhão de conexões ativas de dispositivos por quilômetro quadrado no pilar mMTC (Massive Machine-Type Communications).",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções de Conectividade - Tecnologia 5G e Densidade Massiva para IoT (mMTC)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_383",
    "text": "A respeito dos padrões para redes locais sem fio (WLAN) normatizados pelo grupo de trabalho IEEE 802.11, analise as afirmativas a seguir:\nI. O padrão IEEE 802.11n (Wi-Fi 4) introduziu formalmente o uso da tecnologia MIMO, possibilitando a utilização de múltiplas antenas simultâneas para elevação das taxas de transmissão.\nII. O padrão IEEE 802.11ac (Wi-Fi 5) opera de forma nativa e simultânea em ambas as frequências de 2,4 GHz e 5 GHz.\nIII. O padrão IEEE 802.11ax (Wi-Fi 6) foi projetado com ênfase primordial na eficiência energética e na gestão de tráfego em ambientes de altíssima densidade de dispositivos conectados (OFDMA e MU-MIMO bidirecional).\nEstá(ão) CORRETA(S) a(s) afirmativa(s):",
    "options": [
      "A) Apenas I.",
      "B) Apenas II.",
      "C) Apenas I e III.",
      "D) Apenas II e III.",
      "E) I, II e III."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. A afirmativa III também está tecnicamente perfeita.",
      "Incorreta. A afirmativa II é incorreta, pois o 802.11ac é exclusivo de 5 GHz.",
      "Correta. A afirmativa I é verdadeira (o 802.11n foi o pioneiro no MIMO). A afirmativa II é falsa (o 802.11ac opera exclusivamente na faixa de 5 GHz). A afirmativa III é verdadeira (o 802.11ax/Wi-Fi 6 foca na eficiência em redes congestionadas com OFDMA e Target Wake Time). Portanto, I e III estão corretas.",
      "Incorreta. A afirmativa II está errada.",
      "Incorreta. A inclusão da afirmativa II invalida a alternativa."
    ],
    "generalExplanation": "Análise das normas IEEE 802.11: 802.11n (Wi-Fi 4) trouxe MIMO em 2.4/5 GHz; 802.11ac (Wi-Fi 5) é exclusivo de 5 GHz; 802.11ax (Wi-Fi 6) opera em 2.4 e 5 GHz com foco em alta eficiência e densidade.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções de Conectividade - Evolução dos Padrões Wi-Fi (802.11n, 802.11ac, 802.11ax)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_384",
    "text": "Um Agente Administrativo contratou um link corporativo de internet com velocidade nominal de 400 Mbps (Megabits por segundo). Necessitando realizar o download de uma base de dados estatísticos com tamanho de 500 MB (MegaBytes), sob condições ideais (conexão sem perdas de pacotes e operando na capacidade máxima teórica), o tempo aproximado para a conclusão do download será de:",
    "options": [
      "A) 1,25 segundo.",
      "B) 8 segundos.",
      "C) 10 segundos.",
      "D) 40 segundos.",
      "E) 80 segundos."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Decorreria do erro de dividir 500 por 400 sem converter Bytes em bits (1 Byte = 8 bits).",
      "Incorreta. Cálculo incorreto de conversão.",
      "Correta. Cálculo detalhado:\n1) Tamanho do arquivo em bits: $500\\text{ MB} \\times 8 = 4.000\\text{ Megabits (Mb)}$.\n2) Tempo de download: $\\text{Tempo} = \\frac{\\text{Tamanho (Mb)}}{\\text{Velocidade (Mbps)}} = \\frac{4.000\\text{ Mb}}{400\\text{ Mbps}} = 10\\text{ segundos}$.",
      "Incorreta. Resultado obtido por erro de escala decimal.",
      "Incorreta. Erro decorrente de multiplicação indevida."
    ],
    "generalExplanation": "Conversão entre Byte (B maiúsculo) e bit (b minúsculo): 1 Byte = 8 bits. Arquivo de 500 MB = 4.000 Mb. Em uma rede de 400 Mbps: 4.000 / 400 = 10 segundos.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Noções de Conectividade - Taxa de Transmissão, Unidades (Bits vs Bytes) e Cálculo de Download",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_385",
    "text": "No que tange à infraestrutura de rede para acesso à internet, as arquiteturas de fibra óptica podem variar conforme o ponto onde o sinal óptico é convertido. Sobre as siglas FTTH e FTTB, assinale a alternativa correta:",
    "options": [
      "A) No FTTH (Fiber to the Home), a fibra chega até o armário da rua, e o restante do trajeto é feito por rádio.",
      "B) No FTTB (Fiber to the Building), a fibra óptica chega até o edifício, mas a distribuição interna para os apartamentos ocorre por cabos metálicos.",
      "C) O FTTH possui maior latência que o FTTB devido à necessidade de modems ópticos individuais.",
      "D) Ambas as tecnologias são imunes a interferências eletromagnéticas em todo o seu trajeto, inclusive dentro da residência do usuário.",
      "E) O FTTB é a tecnologia que leva a fibra diretamente para dentro da sala do usuário final."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O FTTH leva a fibra óptica diretamente até o interior da residência do cliente.",
      "Correta. No FTTB (Fiber to the Building / Basement), a fibra óptica termina no ponto de entrada/edifício (geralmente no subsolo ou quadro de distribuição predial), e a distribuição interna até os apartamentos ou salas é realizada via cabos metálicos (par trançado ou coaxial).",
      "Incorreta. O FTTH apresenta menor latência e maior estabilidade por utilizar fibra de ponta a ponta.",
      "Incorreta. No FTTB, a distribuição final em cabos metálicos é suscetível a interferências eletromagnéticas e atenuação.",
      "Incorreta. A tecnologia que leva a fibra para dentro do cômodo/residência do usuário é o FTTH."
    ],
    "generalExplanation": "FTTB (Fiber to the Building) leva a fibra até o prédio/condomínio, utilizando cabeamento metálico para distribuição aos apartamentos. Já o FTTH (Fiber to the Home) leva a fibra até dentro da residência. Gabarito B.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Noções de Conectividade: Fibra Óptica (FTTH vs. FTTB)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_386",
    "text": "O padrão IEEE 802.11ax (Wi-Fi 6) introduziu a tecnologia OFDMA (Orthogonal Frequency Division Multiple Access). Qual é o principal benefício desta tecnologia em ambientes com alta densidade de usuários?",
    "options": [
      "A) Aumentar a distância máxima de transmissão para até 1 quilômetro.",
      "B) Permitir que um único canal seja subdividido para carregar dados de diferentes usuários simultaneamente, reduzindo a latência.",
      "C) Criptografar os dados em nível físico para impedir ataques de interceptação.",
      "D) Alternar automaticamente entre as frequências de 2.4 GHz e 5 GHz sem interrupção da conexão.",
      "E) Desativar o rádio de dispositivos inativos para economizar energia do roteador."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O foco do OFDMA é eficiência de canal e redução de latência em alta densidade, não aumento de raio geográfico.",
      "Correta. O OFDMA divide um canal de transmissão em múltiplos subcanais menores chamados Unidades de Recurso (Resource Units - RU), permitindo que o roteador transmita e receba dados de vários dispositivos em paralelo em uma única rajada, reduzindo drasticamente a fila e a latência.",
      "Incorreta. A criptografia física/lógica é provida por protocolos de segurança como WPA3.",
      "Incorreta. O gerenciamento inteligente entre bandas é conhecido como Band Steering.",
      "Incorreta. A economia de bateria/energia em dispositivos Wi-Fi 6 é gerenciada pelo Target Wake Time (TWT)."
    ],
    "generalExplanation": "No Wi-Fi 6, o OFDMA divide o canal em subportadoras alocadas dinamicamente para múltiplos clientes simultâneos, otimizando o uso do espectro e diminuindo a latência. Gabarito B.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Noções de Conectividade: Wi-Fi 6 (802.11ax e OFDMA)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_387",
    "text": "Sobre a evolução dos padrões IEEE 802.11 para redes sem fio, analise as afirmações abaixo:\n\nI. O padrão 802.11n foi o primeiro a introduzir a tecnologia MIMO (Multiple Input, Multiple Output).\nII. O padrão 802.11ax opera tanto em frequências de 2.4 GHz quanto de 5 GHz.\nIII. O Beamforming é uma tecnologia que direciona o sinal eletromagnético diretamente para o dispositivo cliente, melhorando a recepção.\n\nEstá(ão) correta(s):",
    "options": [
      "A) Apenas I.",
      "B) Apenas II.",
      "C) Apenas I e III.",
      "D) Apenas II e III.",
      "E) I, II e III."
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorreta. Os itens II e III também são verdadeiros.",
      "Incorreta. Os itens I e III também são verdadeiros.",
      "Incorreta. O item II também é verdadeiro (802.11ax é dual-band nativo).",
      "Incorreta. O item I também é verdadeiro (o Wi-Fi 4 / 802.11n estreou o MIMO).",
      "Correta. I é verdadeira (802.11n introduziu MIMO usando múltiplas antenas); II é verdadeira (802.11ax opera em 2.4 GHz e 5 GHz, além de 6 GHz no Wi-Fi 6E); III é verdadeira (Beamforming faz a modelagem e direcionamento de feixe de rádio diretamente para o receptor)."
    ],
    "generalExplanation": "Todos os itens I, II e III estão corretos em relação aos padrões Wi-Fi (802.11n/Wi-Fi 4, 802.11ax/Wi-Fi 6 e Beamforming). Gabarito E.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Noções de Conectividade: Padrões IEEE 802.11 (MIMO, Beamforming e Wi-Fi 6)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_388",
    "text": "Um analista precisa planejar uma expedição em uma área remota e decide utilizar o recurso de Mapas Offline do Google Maps. Ele precisa de acesso a imagens de satélite de alta resolução e ao Street View para identificar trilhas e fachadas de imóveis rurais. Considerando o funcionamento técnico do download de mapas offline, é correto afirmar que:",
    "options": [
      "A) O Street View é baixado automaticamente junto com o mapa offline, mas as imagens de satélite exigem um download separado.",
      "B) Tanto o Street View quanto as imagens de satélite estão disponíveis offline, desde que o usuário selecione a opção 'Alta Qualidade' no download.",
      "C) As imagens de satélite e o Street View não estão disponíveis no modo offline devido ao grande volume de dados que essas mídias representam.",
      "D) Apenas as imagens de satélite são baixadas, pois são essenciais para a navegação GPS em áreas rurais sem estradas pavimentadas.",
      "E) O Street View funciona offline apenas se o usuário tiver navegado previamente pela rua desejada no modo online (cache de visualização)."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O Street View e fotos panorâmicas não são suportados no modo de download offline.",
      "Incorreta. Não existe opção para baixar a camada fotográfica de satélite e Street View nos pacotes offline do Google Maps.",
      "Correta. O download de áreas offline no Google Maps restringe-se a dados vetoriais leves (malha viária, nomes de vias, limites e dados essenciais de POIs para cálculo de rota e busca). Imagens de satélite em alta resolução e o Street View (fotos 360°) são excluídos devido ao tamanho gigantesco de armazenamento que exigiriam.",
      "Incorreta. Imagens de satélite não são baixadas nos mapas offline.",
      "Incorreta. O cache temporário não substitui a funcionalidade de mapas offline e não garante disponibilidade estruturada."
    ],
    "generalExplanation": "No Google Maps Offline, apenas a malha vetorial e informações essenciais de pontos de interesse são baixadas. Camadas de Satélite, Street View e trânsito em tempo real não estão disponíveis offline. Gabarito C.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Operação Online e Offline: Google Maps e Navegação Móvel",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_389",
    "text": "No contexto de busca e recuperação de informações dentro do Google Maps Offline, se um usuário pesquisar por um novo restaurante que foi inaugurado e cadastrado na plataforma Google dois dias após o usuário ter realizado o download da área offline, qual será o resultado da busca sem conexão à internet?",
    "options": [
      "A) O restaurante aparecerá normalmente, pois o Google Maps utiliza uma rede mesh entre celulares próximos para atualizar o banco de dados.",
      "B) O restaurante não será encontrado, pois a busca offline é limitada ao banco de dados local baixado no momento do download.",
      "C) O restaurante aparecerá apenas como um ponto genérico, sem nome ou telefone, devido à falta de sincronização.",
      "D) O aplicativo forçará uma conexão de dados mínima apenas para validar a existência do novo estabelecimento.",
      "E) O restaurante será encontrado se o usuário souber o endereço exato, pois o sistema de numeração de prédios é atualizado via satélite."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O Google Maps não utiliza rede mesh ponto a ponto entre smartphones para sincronizar banco de dados de POIs.",
      "Correta. A busca no modo offline é executada exclusivamente contra o banco de dados vetorial armazenado localmente no dispositivo no instante do download. Informações adicionadas posteriormente nos servidores em nuvem só estarão acessíveis após uma nova conexão e atualização do mapa.",
      "Incorreta. Se o registro não existe no banco de dados local, ele não é renderizado nem localizado.",
      "Incorreta. Em modo offline, o aplicativo não estabelece tráfego de dados.",
      "Incorreta. Os satélites de GPS transmitem apenas sinais de posicionamento e tempo (efemérides/almanaque), e não dados de mapeamento urbano ou endereços."
    ],
    "generalExplanation": "A base de dados offline é um instantâneo (snapshot) local. Cadastros criados após o download só aparecem mediante sincronização online. Gabarito B.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Operação Online e Offline: Banco de Dados Local vs. Sincronização em Nuvem",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_390",
    "text": "No que tange à infraestrutura e capacidade das redes móveis de quinta geração (5G), analise as afirmações abaixo e selecione a alternativa que descreve corretamente uma de suas características técnicas avançadas:",
    "options": [
      "A) O 5G utiliza exclusivamente frequências baixas (abaixo de 700MHz) para garantir a latência zero em longas distâncias.",
      "B) A densidade de conexão do 5G é projetada para suportar até 100 mil dispositivos por quilômetro quadrado, o mesmo patamar do 4G LTE.",
      "C) O Massive MIMO permite que as antenas 5G utilizem múltiplos elementos de transmissão para atender diversos usuários simultaneamente com maior eficiência.",
      "D) Diferente do 4G, o 5G abandona o uso de ondas de rádio, passando a utilizar exclusivamente sinais infravermelhos para transmissão de dados.",
      "E) A tecnologia 5G NR (New Radio) é retrocompatível com antenas 1G analógicas, dispensando a troca de infraestrutura de torres."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O 5G opera em faixas baixas, médias (sub-6 GHz) e altas (ondas milimétricas / mmWave acima de 24 GHz).",
      "Incorreta. O 5G suporta até 1 milhão de dispositivos por km² (mMTC), dez vezes mais que o 4G.",
      "Correta. O Massive MIMO (Multiple Input, Multiple Output massivo) emprega matrizes com dezenas ou centenas de elementos de antena nas Estações Rádio-Base, viabilizando feixes direcionais (beamforming) e transmissão simultânea para múltiplos usuários no mesmo recurso espectral com alta eficiência.",
      "Incorreta. O 5G continua utilizando o espectro eletromagnético de radiofrequência (ondas de rádio).",
      "Incorreta. A tecnologia 1G analógica foi descontinuada há décadas e não possui compatibilidade com 5G NR."
    ],
    "generalExplanation": "O Massive MIMO é pilar essencial do 5G para aumentar a capacidade espectral e atender múltiplos terminais simultaneamente por meio de antenas com múltiplos elementos. Gabarito C.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Noções de Conectividade: Telefonia Móvel 5G (Massive MIMO e 5G NR)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_391",
    "text": "Determinada banca examinadora apresenta a seguinte afirmação:\n\n“O 5G é uma evolução incremental do 4G LTE, utilizando os mesmos protocolos de acesso ao meio e as mesmas faixas de frequência, sem necessidade de novas tecnologias de antena.”\n\nEsta afirmação está:",
    "options": [
      "A) Correta, pois o 5G é apenas um nome comercial para o LTE Advanced Pro.",
      "B) Incorreta, pois o 5G introduz o 5G NR (New Radio) e utiliza novas tecnologias como Beamforming e Massive MIMO.",
      "C) Correta, visto que a única mudança real do 5G é o aumento da potência das torres de transmissão existentes.",
      "D) Incorreta, pois o 5G abandona o uso de torres de transmissão, utilizando apenas satélites de baixa órbita.",
      "E) Incorreta, pois o 5G é uma tecnologia analógica que visa reduzir a interferência digital das redes 4G."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. LTE Advanced Pro é a última evolução do 4G (4.5G), enquanto o 5G constitui uma nova geração tecnológica (5G NR).",
      "Correta. A afirmação do enunciado é falsa porque o 5G introduziu uma nova interface de rádio (5G NR - New Radio), novas faixas de frequência (incluindo ondas milimétricas / mmWave), Network Slicing, Beamforming dinâmico e arranjos Massive MIMO.",
      "Incorreta. O 5G envolve transformações profundas no núcleo de rede (5G Core) e no processamento de rádio.",
      "Incorreta. O 5G baseia-se prioritariamente em infraestrutura terrestre de estações rádio-base (small cells e macro cells).",
      "Incorreta. O 5G é estritamente digital."
    ],
    "generalExplanation": "A afirmação é incorreta porque o 5G não é uma mera atualização do 4G, mas uma nova arquitetura (5G NR) que emprega Massive MIMO, Beamforming e novas frequências. Gabarito B.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Noções de Conectividade: Arquitetura e Diferenciais do 5G",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_392",
    "text": "No Microsoft Excel, a utilização de operadores de referência é fundamental para a construção de fórmulas eficazes. Ao redigir a função =SOMA(B2:B5), o usuário está solicitando que o sistema realize:",
    "options": [
      "A) A soma exclusiva das células B2 e B5, ignorando as células intermediárias.",
      "B) A soma de todas as células compreendidas no intervalo entre B2 e B5, inclusive.",
      "C) A soma da célula B2 multiplicada pelo valor constante 5.",
      "D) A contagem de quantas células no intervalo B2 até B5 possuem valores numéricos.",
      "E) A média aritmética dos valores contidos nas células B2, B3, B4 e B5."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A soma exclusiva de células pontuais utiliza o operador ponto e vírgula: =SOMA(B2; B5).",
      "Correta. O caractere dois pontos (:) é o operador de intervalo (que expressa 'até'). Logo, B2:B5 abrange as células B2, B3, B4 e B5 de forma contínua e inclusiva.",
      "Incorreta. Não se trata de multiplicação.",
      "Incorreta. A contagem de células numéricas é realizada pela função CONT.NÚM.",
      "Incorreta. O cálculo de média aritmética é feito pela função MÉDIA."
    ],
    "generalExplanation": "No Excel, o operador ':' indica intervalo ('até'). A fórmula =SOMA(B2:B5) calcula a soma de B2 até B5 (B2+B3+B4+B5). Gabarito B.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Planilhas Eletrônicas: Fórmulas Básicas e Operadores de Intervalo (Excel)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_393",
    "text": "Um usuário deseja contar quantas vezes a palavra 'Aprovado' aparece no intervalo de células C1 até C50 de uma planilha no Microsoft Excel. Assinale a alternativa que apresenta a sintaxe correta da função a ser utilizada:",
    "options": [
      "A) =CONTAR(C1:C50; Aprovado)",
      "B) =CONT.SE(C1:C50; Aprovado)",
      "C) =CONT.SE(C1:C50; \"Aprovado\")",
      "D) =SOMA.SE(C1:C50; \"Aprovado\")",
      "E) =CONTAR.SE(C1-C50; \"Aprovado\")"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. A função CONTAR conta apenas células com números, e a palavra exigiria aspas.",
      "Incorreta. Quando o critério de comparação é uma string de texto em CONT.SE, ele deve obrigatoriamente estar delimitado por aspas duplas.",
      "Correta. A função =CONT.SE(intervalo; critério) requer que critérios textuais sejam passados entre aspas duplas: =CONT.SE(C1:C50; \"Aprovado\").",
      "Incorreta. SOMA.SE realiza adição de valores condicionada a um critério, e não a contagem de ocorrências.",
      "Incorreta. A sintaxe oficial em português é CONT.SE e o separador de intervalo é ':'."
    ],
    "generalExplanation": "A sintaxe de CONT.SE para critérios em texto exige aspas duplas: =CONT.SE(C1:C50; \"Aprovado\"). Gabarito C.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Planilhas Eletrônicas: Função CONT.SE (Excel)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_394",
    "text": "No Microsoft Excel, um usuário deseja criar uma representação visual que demonstre a evolução das vendas de uma empresa ao longo dos doze meses do ano anterior. De acordo com as boas práticas de visualização de dados e gráficos em planilhas, o tipo de gráfico mais adequado para evidenciar tendências e alterações cronológicas contínuas é o de:",
    "options": [
      "A) Pizza",
      "B) Barras",
      "C) Linhas",
      "D) Dispersão",
      "E) Radar"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O gráfico de pizza é indicado para ilustrar a proporção das partes em relação a um todo (percentuais), não sendo recomendado para séries temporais longas.",
      "Incorreta. Gráficos de barras/colunas servem para comparação entre categorias discretas.",
      "Correta. O gráfico de linhas é o formato padrão ideal para representar dados contínuos ao longo de intervalos cronológicos regulares (tempo, meses, anos), evidenciando com clareza tendências de crescimento, declínio e sazonalidade.",
      "Incorreta. O gráfico de dispersão (XY) é voltado para correlacionar duas variáveis numéricas.",
      "Incorreta. O gráfico de radar é utilizado para comparar valores agregados de múltiplas séries em torno de um ponto central."
    ],
    "generalExplanation": "Para representar séries temporais, tendências e evolução cronológica, o gráfico recomendado é o de Linhas. Gabarito C.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Planilhas Eletrônicas: Tipos de Gráficos (Linhas, Pizza, Barras e Dispersão)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_395",
    "text": "Durante a edição de uma planilha no Microsoft Excel, um assistente administrativo seleciona um intervalo de dados e pressiona a tecla de atalho F11. O resultado dessa ação será:",
    "options": [
      "A) A exclusão imediata dos dados selecionados.",
      "B) A criação automática de um gráfico em uma nova folha de gráfico.",
      "C) A inserção de um gráfico de colunas como objeto na planilha ativa.",
      "D) A abertura da caixa de diálogo 'Formatar Células'.",
      "E) O salvamento automático do arquivo com um nome padrão."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A tecla F11 não executa exclusão de dados.",
      "Correta. No Excel, pressionar a tecla F11 com dados selecionados cria instantaneamente um gráfico padrão em uma folha de gráfico separada (guia dedicada). Para inserir o gráfico embutido na própria planilha ativa, o atalho equivalente é ALT + F1.",
      "Incorreta. A inserção de gráfico embutido na planilha ativa é acionada por ALT + F1.",
      "Incorreta. O atalho para formatar células é Ctrl + 1.",
      "Incorreta. O atalho para salvar é Ctrl + B (versão PT-BR) ou Ctrl + S."
    ],
    "generalExplanation": "No Excel: F11 cria gráfico em nova folha de gráfico; ALT + F1 cria gráfico embutido na planilha atual. Gabarito B.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Planilhas Eletrônicas: Teclas de Atalho para Gráficos no Excel (F11 e Alt+F1)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_396",
    "text": "No Microsoft Excel, o uso do símbolo de cifrão ($) em uma fórmula tem uma função específica no endereçamento de células. Assinale a alternativa que descreve corretamente essa função:",
    "options": [
      "A) Indicar que o valor contido na célula deve ser formatado obrigatoriamente como moeda (Real).",
      "B) Atuar como um operador aritmético de multiplicação para cálculos financeiros complexos.",
      "C) Fixar uma parte ou a totalidade da referência de uma célula, impedindo sua alteração durante a cópia da fórmula.",
      "D) Permitir que a fórmula seja executada apenas se a célula referenciada contiver valores numéricos.",
      "E) Indicar ao Excel que a célula referenciada pertence a uma planilha externa ao arquivo atual."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. A formatação de moeda é definida no grupo Número da guia Página Inicial, não pelo uso do cifrão dentro da fórmula.",
      "Incorreta. O operador de multiplicação é o asterisco (*).",
      "Correta. O cifrão ($) é o operador de fixação/travamento de referências no Excel. Colocado antes da coluna ($A1) trava a coluna; colocado antes da linha (A$1) trava a linha; e colocado antes de ambos ($A$1) cria uma referência absoluta imutável ao arrastar a alça de preenchimento ou copiar a fórmula.",
      "Incorreta. Não possui função condicional de validação de tipo de dados.",
      "Incorreta. Referências externas utilizam o nome do arquivo entre colchetes e exclamação."
    ],
    "generalExplanation": "O símbolo '$' fixa linhas e/ou colunas ao criar referências absolutas ou mistas ($A$1, $A1, A$1). Gabarito C.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Planilhas Eletrônicas: Referências Relativas, Absolutas e Mistas ($)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_397",
    "text": "Durante a edição de uma fórmula no Microsoft Excel, o usuário deseja alternar rapidamente entre referências relativas, absolutas e mistas (por exemplo: de A1 para $A$1, depois para A$1, $A1 e retornando a A1). Qual tecla de atalho deve ser utilizada para realizar esse ciclo de alternância de forma automática?",
    "options": [
      "A) F2",
      "B) F4",
      "C) F9",
      "D) Ctrl + $",
      "E) Alt + Enter"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A tecla F2 entra no modo de edição direta na célula ativa.",
      "Correta. No modo de edição de fórmulas do Excel, posicionar o cursor sobre a referência e pressionar repetidamente F4 alterna sequencialmente entre os 4 modos: Relativo (A1) → Absoluto ($A$1) → Misto com linha fixa (A$1) → Misto com coluna fixa ($A1) → Relativo (A1).",
      "Incorreta. A tecla F9 calcula todas as planilhas ou avalia uma expressão selecionada na barra de fórmulas.",
      "Incorreta. Não é o atalho para alternar tipos de referência.",
      "Incorreta. Alt + Enter insere uma quebra de linha manual dentro da mesma célula."
    ],
    "generalExplanation": "A tecla de atalho F4 no Excel alterna ciclicamente o tipo de referência (relativa, absoluta e mistas). Gabarito B.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Planilhas Eletrônicas: Teclas de Atalho no Excel (F4 e Edição de Fórmulas)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_398",
    "text": "No Microsoft Excel, para que um conteúdo inserido em uma célula seja interpretado pelo software como uma fórmula ou função a ser calculada, e não como um texto simples literal, é obrigatória a utilização de um caractere específico no início da digitação. Assinale a alternativa que apresenta esse caractere:",
    "options": [
      "A) # (cerquilha)",
      "B) @ (arroba)",
      "C) = (igual)",
      "D) + (mais)",
      "E) : (dois pontos)"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O caractere # é utilizado no início de nomes de erros (#N/D, #VALOR!, #REF!) ou referências estruturadas.",
      "Incorreta. O caractere @ é o operador de interseção implícita no Excel moderno.",
      "Correta. Toda fórmula ou função no Excel deve começar obrigatoriamente pelo sinal de igual (=) para que o mecanismo de cálculo interprete os termos subsequentes como instruções matemáticas/lógicas.",
      "Incorreta. Embora o Excel aceite o sinal de '+' por compatibilidade com programas legados como o Lotus 1-2-3 (convertendo automaticamente para '='), o padrão canônico oficial exigido nas provas de concurso é o sinal de igual (=).",
      "Incorreta. O operador de dois pontos (:) é utilizado para indicar intervalos contínuos de células."
    ],
    "generalExplanation": "Toda fórmula ou função no Excel inicia obrigatoriamente com o caractere de igual (=). Gabarito C.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Planilhas Eletrônicas: Estrutura e Início de Fórmulas no Excel",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_399",
    "text": "Um usuário deseja contar quantas células em um determinado intervalo possuem qualquer tipo de conteúdo preenchido, incluindo textos, números, valores lógicos e mensagens de erro, ignorando apenas as células que estão completamente vazias. A função adequada para essa finalidade no Microsoft Excel é:",
    "options": [
      "A) =CONT.NÚM()",
      "B) =CONT.VALORES()",
      "C) =SOMA()",
      "D) =CONTAR.VAZIO()",
      "E) =MÉDIA()"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A função CONT.NÚM conta apenas as células que contêm valores puramente numéricos (incluindo datas e horas), ignorando textos e erros.",
      "Correta. A função CONT.VALORES conta o número de células não vazias em um intervalo, independentemente de o conteúdo ser texto, número, fórmula ou valor de erro.",
      "Incorreta. A função SOMA calcula o total aritmético dos valores numéricos.",
      "Incorreta. A função CONTAR.VAZIO faz exatamente o inverso, contando apenas as células que não possuem nenhum dado.",
      "Incorreta. A função MÉDIA calcula a média aritmética dos valores numéricos."
    ],
    "generalExplanation": "A função =CONT.VALORES(intervalo) conta todas as células que não estão vazias (números, textos, erros, etc.). Para apenas números usa-se CONT.NÚM, e para vazias usa-se CONTAR.VAZIO. Gabarito B.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Planilhas Eletrônicas: Funções de Contagem (CONT.VALORES vs. CONT.NÚM e CONTAR.VAZIO)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_400",
    "text": "No sistema operacional Windows 10, a organização de arquivos e pastas segue uma estrutura hierárquica. Ao tentar renomear um arquivo no Explorador de Arquivos, o usuário deve observar certas restrições de caracteres. Assinale a alternativa que apresenta um nome de arquivo VÁLIDO, ou seja, que não contém caracteres proibidos pelo sistema:",
    "options": [
      "A) relatorio:final.docx",
      "B) projeto/versao1.pdf",
      "C) duvidas?frequentes.txt",
      "D) lista_de_compras(2023).xlsx",
      "E) vendas\\*mensais.csv"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. O caractere 'dois pontos' (:) é proibido em nomes de arquivos no Windows (usado para unidades e streams).",
      "Incorreta. A 'barra' (/) é reservada para sintaxe de caminhos e proibida em nomes de arquivos.",
      "Incorreta. O ponto de 'interrogação' (?) é caractere proibido (curinga de busca).",
      "Correta. O Windows permite parênteses (), sublinhados (_) e pontos adicionais. 'lista_de_compras(2023).xlsx' não contém nenhum dos 9 caracteres proibidos (\\ / : * ? \" < > |).",
      "Incorreta. A 'barra invertida' (\\) e o 'asterisco' (*) são caracteres proibidos."
    ],
    "generalExplanation": "Caracteres proibidos no Windows: \\ / : * ? \" < > |. O nome 'lista_de_compras(2023).xlsx' utiliza apenas caracteres permitidos. Gabarito D.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Gerenciamento de Arquivos e Pastas: Caracteres Permitidos e Proibidos no Windows",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_401",
    "text": "Sobre a sensibilidade a maiúsculas e minúsculas (case sensitivity) na nomenclatura de arquivos e pastas no Windows 10/11 sob o sistema de arquivos NTFS/FAT32, assinale a afirmativa correta:",
    "options": [
      "A) O Windows diferencia maiúsculas de minúsculas, permitindo que 'Documento.txt' e 'documento.txt' coexistam na mesma pasta.",
      "B) O Windows não diferencia maiúsculas de minúsculas, tratando 'PROVA.PDF' e 'prova.pdf' como o mesmo arquivo no mesmo diretório.",
      "C) A diferenciação entre maiúsculas e minúsculas depende apenas da extensão do arquivo (ex.: .EXE diferencia, .TXT não).",
      "D) O Windows 10 passou a ser case sensitive por padrão para se equiparar aos sistemas baseados em Linux.",
      "E) Apenas a primeira letra do nome do arquivo é sensível ao caso, enquanto as demais são ignoradas pelo sistema."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A diferenciação estrita de caso (case-sensitive) é o comportamento padrão de sistemas Unix/Linux, mas não do Windows Explorer.",
      "Correta. Por padrão, o subsistema Win32 e o Explorador de Arquivos do Windows preservam a grafia digitada (case-preserving), mas não diferenciam maiúsculas de minúsculas na busca e armazenamento (são *case-insensitive*). Assim, 'PROVA.PDF' e 'prova.pdf' colidem como o mesmo nome na mesma pasta.",
      "Incorreta. A insensibilidade ao caso aplica-se igualmente a todo o nome e extensão.",
      "Incorreta. O comportamento padrão do Windows permanece insensível ao caso.",
      "Incorreta. O sistema avalia a cadeia de caracteres inteira de forma não sensível a maiúsculas/minúsculas."
    ],
    "generalExplanation": "O Windows é *case-insensitive* por padrão: ele não permite criar dois arquivos com o mesmo nome na mesma pasta apenas variando maiúsculas e minúsculas. Gabarito B.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Gerenciamento de Arquivos e Pastas: Insensibilidade a Maiúsculas e Minúsculas (Case-Insensitive)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_402",
    "text": "Ao organizar arquivos no Explorador de Arquivos do Windows 11, um usuário tenta renomear um documento técnico. De acordo com as regras de nomenclatura do sistema operacional, qual dos seguintes caracteres pode ser utilizado validamente no nome de um arquivo?",
    "options": [
      "A) Asterisco (*)",
      "B) Sinal de maior (>)",
      "C) Underline (_)",
      "D) Aspas duplas (\")",
      "E) Barra invertida (\\)"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O asterisco (*) é proibido (caractere curinga).",
      "Incorreta. O sinal de maior (>) é proibido (redirecionador de fluxo em prompt).",
      "Correta. O underline ou sublinhado (_) é um caractere plenamente válido e amplamente utilizado na separação de termos em nomes de arquivos.",
      "Incorreta. As aspas duplas (\") são proibidas (delimitadores de strings).",
      "Incorreta. A barra invertida (\\) é proibida (separador de diretórios)."
    ],
    "generalExplanation": "Dentre os listados, apenas o underline (_) é permitido. Os demais (* > \" \\) são caracteres reservados e proibidos pelo Windows. Gabarito C.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Gerenciamento de Arquivos e Pastas: Nomenclatura Válida de Arquivos no Windows",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_403",
    "text": "No Windows 11, um usuário seleciona um arquivo e deseja alterar seu nome rapidamente utilizando apenas o teclado. Qual tecla de função deve ser pressionada para abrir o modo de edição do nome do item selecionado?",
    "options": [
      "A) F1",
      "B) F2",
      "C) F5",
      "D) F10",
      "E) F12"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. F1 abre a Ajuda do sistema ou aplicativo.",
      "Correta. A tecla F2 é o atalho universal padrão do Windows para renomear arquivos e pastas selecionados.",
      "Incorreta. F5 atualiza (refresh) a pasta ou página.",
      "Incorreta. F10 ativa a barra de menus.",
      "Incorreta. F12 costuma acionar 'Salvar Como' em editores como MS Word."
    ],
    "generalExplanation": "O atalho de teclado para renomear um arquivo ou pasta selecionada no Windows é a tecla F2. Gabarito B.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Gerenciamento de Arquivos e Pastas: Teclas de Atalho (Renomear com F2)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_404",
    "text": "No sistema operacional Windows 10, em sua configuração padrão e idioma português, um usuário deseja renomear um arquivo selecionado no Explorador de Arquivos utilizando apenas o teclado. Para acionar o modo de edição do nome do arquivo, o comando correto é:",
    "options": [
      "A) F1",
      "B) F2",
      "C) F5",
      "D) Ctrl + R",
      "E) Alt + Enter"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. F1 aciona a Ajuda.",
      "Correta. A tecla F2 habilita a edição do nome do item selecionado no Explorador de Arquivos.",
      "Incorreta. F5 atualiza a exibição.",
      "Incorreta. Ctrl + R atualiza páginas em navegadores, não renomeia arquivos no Windows.",
      "Incorreta. Alt + Enter abre a janela de Propriedades do item selecionado."
    ],
    "generalExplanation": "A tecla de função F2 é o atalho direto para renomear arquivos no Windows. Gabarito B.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Gerenciamento de Arquivos e Pastas: Atalhos de Edição de Nomes (F2)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_405",
    "text": "Ao gerenciar arquivos no Explorador de Arquivos do Windows 10, um técnico precisa selecionar cinco arquivos específicos que não estão dispostos de forma sequencial (estão alternados e intercalados na lista). Para realizar essa seleção de itens não adjacentes, o técnico deve manter pressionada a tecla:",
    "options": [
      "A) Shift",
      "B) Alt",
      "C) Tab",
      "D) Ctrl",
      "E) Esc"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. A tecla Shift realiza seleção contínua (em bloco/sequencial), selecionando todos os itens entre o primeiro e o último clique.",
      "Incorreta. A tecla Alt ativa menus e atalhos de janelas.",
      "Incorreta. A tecla Tab alterna o foco entre seções da interface.",
      "Correta. A tecla Ctrl (Control), quando mantida pressionada durante o clique do mouse, permite selecionar ou desselecionar itens intercalados, não adjacentes e alternados de forma individual.",
      "Incorreta. A tecla Esc cancela seleções e fecha caixas de diálogo."
    ],
    "generalExplanation": "Seleção no Windows: Ctrl = itens intercalados/não adjacentes; Shift = seleção contínua em bloco. Gabarito D.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Gerenciamento de Arquivos e Pastas: Seleção Intercalada com Ctrl vs. Seleção Contínua com Shift",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_406",
    "text": "No sistema operacional Windows, a Área de Transferência (Clipboard) desempenha um papel fundamental na manipulação de dados. Sobre esse recurso, assinale a alternativa que descreve corretamente sua natureza técnica:",
    "options": [
      "A) Trata-se de um espaço físico no disco rígido (HD) destinado ao backup automático de arquivos deletados.",
      "B) É um espaço temporário na memória RAM destinado a armazenar informações movidas ou copiadas.",
      "C) Consiste em uma pasta oculta no diretório do sistema que armazena permanentemente todos os textos digitados.",
      "D) É um serviço de nuvem obrigatório que exige conexão com a internet para funcionar em qualquer versão do Windows.",
      "E) Representa um hardware específico instalado na placa-mãe para gerenciar o comando de copiar e colar."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A Área de Transferência não é área de backup em disco, mas sim um buffer em memória volátil.",
      "Correta. A Área de Transferência é uma estrutura lógica de armazenamento temporário gerenciada pelo sistema operacional e alocada na memória principal (RAM), servindo de ponte para comandos de Copiar (Ctrl+C), Recortar (Ctrl+X) e Colar (Ctrl+V).",
      "Incorreta. O armazenamento não é permanente em pasta de sistema.",
      "Incorreta. A Área de Transferência básica opera localmente sem necessidade de conexão à internet.",
      "Incorreta. É um recurso de software do sistema operacional, não um componente de hardware."
    ],
    "generalExplanation": "A Área de Transferência (Clipboard) é uma área temporária na memória RAM utilizada para armazenar dados copiados ou recortados. Gabarito B.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Arquitetura de Sistemas Operacionais: Área de Transferência (Clipboard) e Memória RAM",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_407",
    "text": "Um usuário está editando um documento de texto e, acidentalmente, apaga um parágrafo inteiro. Para reverter essa ação de forma imediata utilizando o atalho de teclado padrão do Windows, ele deve pressionar:",
    "options": [
      "A) Ctrl + C",
      "B) Ctrl + V",
      "C) Ctrl + X",
      "D) Ctrl + Z",
      "E) Ctrl + A"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Ctrl + C copia o conteúdo.",
      "Incorreta. Ctrl + V cola o conteúdo copiado/recortado.",
      "Incorreta. Ctrl + X recorta o conteúdo para mover.",
      "Correta. O atalho Ctrl + Z executa o comando Desfazer (Undo), revertendo a última ação realizada.",
      "Incorreta. Ctrl + A (no Windows/Office em inglês) ou Ctrl + T (no Word em português) seleciona todo o conteúdo."
    ],
    "generalExplanation": "Ctrl + Z é o atalho universal para Desfazer a última ação. Gabarito D.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Gerenciamento e Edição: Teclas de Atalho (Desfazer com Ctrl+Z)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_408",
    "text": "No sistema operacional Windows 10, um usuário deseja excluir um arquivo de forma que ele não seja enviado para a Lixeira, sendo removido permanentemente do sistema de arquivos de forma imediata. Para realizar essa operação por meio de um atalho de teclado, o usuário deve selecionar o arquivo e pressionar simultaneamente as teclas:",
    "options": [
      "A) Ctrl + Delete",
      "B) Alt + Delete",
      "C) Shift + Delete",
      "D) Ctrl + Shift + Esc",
      "E) Alt + F4"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Ctrl + Delete não realiza exclusão permanente no Explorador de Arquivos.",
      "Incorreta. Alt + Delete não é comando de exclusão.",
      "Correta. A combinação Shift + Delete (ou Shift + Del) exclui o arquivo ou pasta diretamente de forma definitiva, ignorando o envio para a Lixeira do Windows.",
      "Incorreta. Ctrl + Shift + Esc abre o Gerenciador de Tarefas do Windows.",
      "Incorreta. Alt + F4 fecha a janela ativa ou encerra o aplicativo."
    ],
    "generalExplanation": "Shift + Delete exclui permanentemente o arquivo/pasta sem passar pela Lixeira. Gabarito C.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Gerenciamento de Arquivos e Pastas: Exclusão Permanente com Shift+Delete",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_409",
    "text": "Ao utilizar a funcionalidade de “Restaurar” em um arquivo que se encontra na Lixeira do Windows 10, o sistema operacional executará a seguinte ação:",
    "options": [
      "A) Moverá o arquivo para a pasta 'Documentos' do usuário logado.",
      "B) Enviará o arquivo para a Área de Trabalho (Desktop) para fácil acesso.",
      "C) Criará uma cópia do arquivo na pasta de origem e manterá o original na lixeira.",
      "D) Devolverá o arquivo exatamente para o local original onde ele estava antes da exclusão.",
      "E) Solicitará ao usuário que escolha um novo diretório para salvar o arquivo recuperado."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. A Lixeira não padroniza a recuperação para a pasta Documentos.",
      "Incorreta. O Desktop só recebe o arquivo se ele tiver sido excluído da própria Área de Trabalho.",
      "Incorreta. O arquivo é movido da Lixeira de volta à origem, não duplicado.",
      "Correta. A Lixeira armazena os metadados do arquivo (incluindo seu caminho de origem absoluto). O comando Restaurar recoloca o item exatamente na pasta onde ele residia no momento da exclusão.",
      "Incorreta. O processo é automático para o caminho original; se o usuário quiser outro local, deve arrastar ou recortar o arquivo da lixeira."
    ],
    "generalExplanation": "A função Restaurar da Lixeira do Windows retorna o arquivo exatamente ao diretório de onde ele foi excluído. Gabarito D.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Gerenciamento de Arquivos e Pastas: Funcionamento e Restauração da Lixeira",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_410",
    "text": "No contexto da manipulação de arquivos e diretórios no Windows 10/11, um “Caminho Absoluto” (Absolute Path) é definido tecnicamente como:",
    "options": [
      "A) O endereço de um arquivo que leva em conta apenas a pasta onde o usuário está posicionado no momento.",
      "B) Um atalho criado na Área de Trabalho que aponta para um arquivo armazenado em uma unidade de rede.",
      "C) A localização completa de um arquivo ou pasta, iniciando obrigatoriamente a partir da unidade raiz (ex.: C:\\).",
      "D) O nome do arquivo seguido apenas pela sua extensão, sem menção às pastas superiores.",
      "E) Uma representação virtual de arquivos que pertencem a diferentes pastas, como ocorre nas Bibliotecas."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O caminho relativo depende da pasta de trabalho atual em que o usuário ou processo está posicionado.",
      "Incorreta. Atalhos (.lnk) são ponteiros lógicos, não o conceito estrutural de caminho de sistema de arquivos.",
      "Correta. O Caminho Absoluto especifica a rota completa e inequívoca desde o nível raiz da unidade (root drive, ex.: `C:\\` ou `D:\\`) até o arquivo ou pasta final (ex.: `C:\\Users\\Usuario\\Documentos\\relatorio.docx`), não dependendo do diretório atual.",
      "Incorreta. Apenas nome e extensão compõem o nome do arquivo.",
      "Incorreta. Trata-se do conceito de Biblioteca do Windows."
    ],
    "generalExplanation": "Caminho Absoluto: inicia na unidade raiz (ex.: C:\\) e descreve toda a hierarquia de pastas até o arquivo final. Gabarito C.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Sistemas de Arquivos: Caminho Absoluto vs. Caminho Relativo",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_411",
    "text": "As “Bibliotecas” do Windows 10/11 são recursos voltados à organização de dados. Sobre o funcionamento técnico e a estrutura das Bibliotecas, assinale a alternativa correta:",
    "options": [
      "A) Uma Biblioteca é uma pasta física real que armazena cópias de segurança de todos os arquivos nela contidos.",
      "B) Ao excluir uma Biblioteca, todos os arquivos e pastas originais vinculados a ela são permanentemente apagados do disco rígido.",
      "C) As Bibliotecas não permitem a inclusão de pastas que estejam localizadas em unidades externas ou dispositivos removíveis.",
      "D) Uma Biblioteca atua como um contêiner virtual que agrega conteúdos de diferentes locais físicos em uma única exibição.",
      "E) Arquivos movidos para dentro de uma Biblioteca deixam de ocupar espaço no disco rígido original."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Bibliotecas são coleções virtuais, não pastas físicas que duplicam arquivos.",
      "Incorreta. Excluir uma Biblioteca remove apenas o contêiner virtual agregador; as pastas e arquivos de origem permanecem intactos nos seus locais físicos no disco.",
      "Incorreta. Pastas de diversas origens e discos podem ser incluídas em uma Biblioteca.",
      "Correta. As Bibliotecas funcionam como agregadores/contêineres lógicos (virtuais) que reúnem arquivos de múltiplas pastas e locais físicos diferentes em uma visualização unificada, sem necessidade de movê-los ou duplicá-los.",
      "Incorreta. Os arquivos continuam gravados em seus locais de armazenamento físico originários."
    ],
    "generalExplanation": "As Bibliotecas do Windows são contêineres virtuais agregadores que exibem arquivos de diferentes pastas físicas em uma única interface. Gabarito D.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Recursos do Windows: Bibliotecas e Agregação Virtual de Pastas",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_412",
    "text": "Um usuário possui dois discos rígidos instalados em seu computador, identificados como Unidade C: e Unidade D:. Ao utilizar o mouse para clicar com o botão esquerdo em um arquivo localizado na Unidade C: e arrastá-lo diretamente para uma pasta na Unidade D:, sem pressionar nenhuma tecla adicional do teclado, a operação realizada pelo Windows por padrão será de:",
    "options": [
      "A) Mover o arquivo, removendo-o da Unidade C:.",
      "B) Criar um atalho do arquivo na Unidade D:.",
      "C) Copiar o arquivo, mantendo o original na Unidade C:.",
      "D) Excluir o arquivo da origem após a confirmação.",
      "E) Renomear o arquivo automaticamente no destino."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. A movimentação (mover) é a ação padrão quando o arraste ocorre dentro da MESMA unidade de disco (ex.: de C:\\Pasta1 para C:\\Pasta2).",
      "Incorreta. Criar atalho ao arrastar requer manter pressionadas as teclas Alt ou Ctrl+Shift.",
      "Correta. Regra fundamental do Windows Explorer: arrastar com o botão esquerdo entre UNIDADES DE DISCO DIFERENTES (ex.: de C: para D: ou de C: para pen drive E:) realiza automaticamente a operação de CÓPIA (duplicação).",
      "Incorreta. O arquivo original permanece inalterado na origem.",
      "Incorreta. O arquivo mantém seu nome original na cópia de destino."
    ],
    "generalExplanation": "Arraste no Windows com botão esquerdo: Mesma unidade = MOVER; Unidades diferentes = COPIAR. Gabarito C.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Manipulação de Arquivos: Comportamento Padrão de Arrastar e Soltar (Mesma Unidade vs. Unidades Diferentes)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_413",
    "text": "Considere que um usuário conectou um Pen Drive (Unidade removível E:) ao seu computador com Windows 11. Ele seleciona um arquivo importante armazenado nesse Pen Drive e pressiona a tecla “Delete” do teclado. Sobre essa ação, assinale a alternativa correta:",
    "options": [
      "A) O arquivo será movido para a Lixeira do Windows e poderá ser restaurado posteriormente.",
      "B) O arquivo será excluído permanentemente, sem passar pela Lixeira do Windows.",
      "C) O Windows solicitará que o usuário pressione Shift+Delete para concluir a exclusão.",
      "D) O arquivo será movido para uma pasta oculta chamada 'Recycle' dentro do próprio Pen Drive.",
      "E) A operação será cancelada, pois arquivos em unidades removíveis só podem ser excluídos via menu de contexto."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. A Lixeira do Windows atende por padrão apenas às unidades de disco rígido/SSD internas fixas locais.",
      "Correta. Arquivos excluídos de dispositivos de armazenamento removíveis (pen drives, cartões de memória SD e unidades de rede) são deletados diretamente de forma PERMANENTE pelo sistema operacional, sem passar pela Lixeira do Windows.",
      "Incorreta. A tecla Delete sozinha já executa a exclusão definitiva imediata.",
      "Incorreta. O arquivo não fica disponível para restauração pela interface da Lixeira.",
      "Incorreta. A tecla Delete funciona normalmente em qualquer mídia."
    ],
    "generalExplanation": "Exclusão em unidades removíveis (pen drives): o arquivo é excluído permanentemente de imediato, sem passar pela Lixeira. Gabarito B.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Gerenciamento de Arquivos: Exclusão em Unidades Removíveis (Pen Drive)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_414",
    "text": "No Windows 11, um usuário seleciona dez arquivos de fotos simultaneamente em uma pasta do Explorador de Arquivos e pressiona a tecla F2. Ele digita o novo nome “Ferias” e pressiona a tecla Enter. Qual será o resultado dessa operação de renomeação?",
    "options": [
      "A) Apenas o primeiro arquivo selecionado será renomeado para 'Ferias'.",
      "B) O Windows exibirá uma mensagem de erro informando que não podem existir arquivos com nomes iguais.",
      "C) Todos os arquivos serão renomeados como 'Ferias', mas com extensões diferentes.",
      "D) Os arquivos serão renomeados sequencialmente como 'Ferias (1)', 'Ferias (2)', e assim por diante.",
      "E) A operação será bloqueada, pois a renomeação em lote só é permitida via Prompt de Comando."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. A ação de renomear em lote aplica-se a todos os itens selecionados.",
      "Incorreta. O Windows não exibe erro de colisão; ele aplica um sufixo numérico automático.",
      "Incorreta. As extensões originais são mantidas e a numeração é aplicada a todos os itens do lote.",
      "Correta. No recurso nativo de renomeação em lote do Windows Explorer, ao renomear múltiplos itens selecionados, o sistema nomeia o primeiro com o nome base ('Ferias') e os subsequentes sequencialmente com indexação numérica entre parênteses: 'Ferias (1)', 'Ferias (2)', 'Ferias (3)', etc.",
      "Incorreta. A renomeação múltipla em lote é suportada nativamente na interface gráfica do Explorador de Arquivos."
    ],
    "generalExplanation": "Renomeação em lote no Windows: ao aplicar um nome com vários arquivos selecionados, o sistema cria a sequência 'Nome', 'Nome (1)', 'Nome (2)', etc. Gabarito D.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Explorador de Arquivos: Renomeação em Lote com Numeração Sequencial",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_415",
    "text": "Considere que um usuário possui um arquivo chamado “Relatorio.docx” localizado na pasta “Documentos” da unidade C: de seu computador. Se o usuário clicar com o botão esquerdo do mouse sobre esse arquivo e arrastá-lo para uma pasta aberta em um Pen Drive (identificado como unidade E:), qual será o resultado padrão dessa operação?",
    "options": [
      "A) O arquivo será movido para o Pen Drive, deixando de existir na unidade C:.",
      "B) O arquivo será excluído da unidade C: e enviado para a Lixeira do sistema.",
      "C) O arquivo será copiado para o Pen Drive, permanecendo também na unidade C:.",
      "D) Será criado apenas um atalho para o arquivo original no Pen Drive.",
      "E) O Windows solicitará uma senha de administrador para realizar a transferência entre unidades."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O arquivo só seria movido por padrão se a pasta de origem e a de destino estivessem situadas na mesma unidade de disco.",
      "Incorreta. A operação de arrastar entre unidades distintas não gera exclusão, mas sim cópia.",
      "Correta. A regra de ouro do Windows para arrastar e soltar (drag and drop) com o botão esquerdo do mouse define que, ao arrastar entre UNIDADES DE DISCO DIFERENTES (de C: para E:), o sistema realiza automaticamente a CÓPIA (duplicação) do item por segurança.",
      "Incorreta. Para criar um atalho via arraste, seria necessário manter a tecla Alt (ou Ctrl+Shift) pressionada.",
      "Incorreta. Transferências rotineiras de arquivos do usuário entre unidades não exigem privilégios de administrador por padrão."
    ],
    "generalExplanation": "Arraste no Windows entre unidades distintas (C: para E:) realiza automaticamente operação de CÓPIA. Gabarito C.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Manipulação de Arquivos e Pastas: Arrastar e Soltar entre Unidades Diferentes (Cópia)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_416",
    "text": "Um usuário deseja criar uma nova pasta dentro do diretório atual no Explorador de Arquivos do Windows 10/11. Para realizar essa tarefa de forma rápida utilizando um atalho de teclado, ele deve pressionar simultaneamente as teclas:",
    "options": [
      "A) Ctrl + N",
      "B) Ctrl + Shift + N",
      "C) Alt + N",
      "D) Shift + F10",
      "E) Ctrl + Alt + N"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Ctrl + N abre uma nova janela do Explorador de Arquivos (ou cria novo documento em outros programas).",
      "Correta. A combinação de teclas Ctrl + Shift + N é o atalho universal e padrão no Windows para a criação instantânea de uma Nova Pasta (New folder) no diretório em exibição.",
      "Incorreta. Alt + N não é o atalho de criação de pastas.",
      "Incorreta. Shift + F10 abre o menu de contexto (equivalente ao clique com o botão direito do mouse).",
      "Incorreta. Combinação inexistente para essa finalidade no Explorador de Arquivos."
    ],
    "generalExplanation": "O atalho de teclado padrão para criar uma nova pasta no Windows é Ctrl + Shift + N. Gabarito B.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Gerenciamento de Pastas: Atalho para Criação de Nova Pasta (Ctrl + Shift + N)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_417",
    "text": "Durante a organização de seus arquivos, um usuário decide renomear o arquivo “projeto_final.txt” para “projeto_final.pdf”. Ao confirmar a alteração no Windows 10/11, o sistema apresentará o seguinte comportamento:",
    "options": [
      "A) O Windows converterá automaticamente o conteúdo do arquivo de texto para o formato PDF.",
      "B) A operação será bloqueada, pois o Windows não permite a alteração manual de extensões de arquivos.",
      "C) O arquivo será renomeado normalmente, sem qualquer aviso, desde que o usuário tenha privilégios de administrador.",
      "D) O Windows exibirá um aviso informando que a alteração da extensão pode tornar o arquivo inutilizável, solicitando confirmação.",
      "E) O arquivo será duplicado, mantendo-se o original .txt e criando-se um novo .pdf vazio."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Alterar o nome ou a extensão não converte a estrutura binária/interna do arquivo.",
      "Incorreta. O Windows permite a alteração manual da extensão, apenas emitindo um diálogo de alerta preventivo.",
      "Incorreta. O aviso de segurança é exibido para qualquer usuário, independentemente de privilégios.",
      "Correta. A extensão indica ao sistema qual aplicativo associado abrirá o arquivo. Ao alterar manualmente a extensão, o Windows exibe a caixa de diálogo de segurança: “Se você alterar uma extensão de nome de arquivo, o arquivo poderá se tornar inutilizável. Tem certeza de que deseja alterá-la?”, solicitando confirmação explícita.",
      "Incorreta. A operação altera o arquivo existente no mesmo local, não criando duplicatas."
    ],
    "generalExplanation": "Ao alterar a extensão de um arquivo no Windows, o sistema exibe um aviso de segurança alertando sobre o risco de torná-lo inutilizável e pedindo confirmação. Gabarito D.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Tipos de Arquivos e Extensões: Alerta de Alteração de Extensão no Windows",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_418",
    "text": "Sobre a operação de “Desfazer” no Explorador de Arquivos do Windows 10, analise as afirmativas abaixo:\nI. O atalho Ctrl + Z pode ser utilizado para desfazer uma renomeação acidental de arquivo.\nII. Se um usuário mover um arquivo de uma pasta para outra, o Ctrl + Z pode retornar o arquivo à pasta de origem.\nIII. O comando Ctrl + Z não funciona para operações de cópia de arquivos, apenas para movimentação.\n\nEstá(ão) correta(s):",
    "options": [
      "A) Apenas I.",
      "B) Apenas II.",
      "C) Apenas I e II.",
      "D) Apenas II e III.",
      "E) I, II e III."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. A afirmativa II também está correta.",
      "Incorreta. A afirmativa I também está correta.",
      "Correta. I está correta (reverte o nome anterior do arquivo); II está correta (move o arquivo de volta à pasta original); III está incorreta porque o Ctrl + Z funciona perfeitamente para operações de cópia, excluindo a cópia recém-criada.",
      "Incorreta. A afirmativa III é falsa.",
      "Incorreta. A afirmativa III é falsa."
    ],
    "generalExplanation": "Ctrl + Z desfaz renomeações, movimentações e cópias no Explorador de Arquivos. Itens I e II estão corretos. Gabarito C.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Explorador de Arquivos: Funcionalidades do Comando Desfazer (Ctrl + Z)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_419",
    "text": "No que tange ao Histórico da Área de Transferência, recurso presente nas versões Windows 10 e 11, assinale a afirmativa correta:",
    "options": [
      "A) O histórico é ativado automaticamente por padrão em todas as instalações, sem necessidade de intervenção do usuário.",
      "B) O atalho Win + V permite acessar o painel do histórico, mas ele suporta exclusivamente o armazenamento de textos simples.",
      "C) Ao utilizar o atalho Win + V pela primeira vez, o sistema solicita que o usuário ative explicitamente o recurso de histórico.",
      "D) O histórico da área de transferência é limpo obrigatoriamente a cada 30 minutos para economizar memória RAM.",
      "E) Itens copiados através do comando Ctrl + C não aparecem no histórico acessado pelo Win + V, apenas itens recortados."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Por motivos de privacidade e desempenho, o recurso vem desativado por padrão.",
      "Incorreta. O painel do Win + V armazena tanto textos formatados quanto imagens (até 4 MB) e emojis/símbolos.",
      "Correta. Ao pressionar Win + V pela primeira vez, o Windows exibe uma janela informativa com o botão “Ativar”, exigindo o consentimento explícito do usuário para iniciar o registro do histórico de múltiplos recortes/cópias.",
      "Incorreta. O histórico não possui limpeza cronometrada a cada 30 minutos; ele é mantido durante a sessão e limpo na reinicialização (exceto itens fixados/pinned).",
      "Incorreta. Tanto itens copiados (Ctrl + C) quanto recortados (Ctrl + X) são registrados no histórico."
    ],
    "generalExplanation": "O Histórico da Área de Transferência (Win + V) armazena múltiplos textos e imagens e requer ativação explícita no primeiro uso. Gabarito C.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Recursos do Sistema: Histórico da Área de Transferência (Win + V)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_420",
    "text": "Ao manipular arquivos no Explorador de Arquivos do Windows, o comportamento do comando “Recortar” (Ctrl + X) apresenta uma particularidade em relação à edição de textos. Sobre esse comportamento, é correto afirmar que:",
    "options": [
      "A) O arquivo é excluído imediatamente da pasta de origem e enviado para a Lixeira até que o comando 'Colar' seja executado.",
      "B) O ícone do arquivo fica com aspecto transparente (esmaecido), mas o arquivo permanece no local de origem até ser colado no destino.",
      "C) O Windows cria uma cópia temporária do arquivo e deleta o original instantaneamente para liberar espaço em disco.",
      "D) O comando Ctrl + X é desabilitado para arquivos, funcionando apenas para pastas e subpastas no ambiente Windows.",
      "E) Se o usuário realizar um novo comando de cópia antes de colar o arquivo recortado, o arquivo original será movido para uma pasta temporária do sistema."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O arquivo não passa pela Lixeira durante o recorte; ele permanece na pasta de origem até a conclusão da movimentação.",
      "Correta. No Explorador de Arquivos, ao recortar (Ctrl + X), o Windows apenas marca o item visualmente (o ícone fica esmaecido/semitransparente). O arquivo não é removido da origem naquele instante; a transferência atômica só ocorre de fato quando o comando Colar (Ctrl + V) é executado na pasta de destino.",
      "Incorreta. O arquivo original não é apagado antes da confirmação do destino.",
      "Incorreta. Ctrl + X é perfeitamente funcional para arquivos individuais ou em lote.",
      "Incorreta. Se o usuário copiar outro item ou pressionar Esc, a operação de recorte pendente é simplesmente cancelada sem afetar o arquivo original."
    ],
    "generalExplanation": "No Explorador de Arquivos, o comando Recortar deixa o ícone esmaecido e mantém o arquivo na origem até que ele seja colado no destino. Gabarito B.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Manipulação de Arquivos: Comportamento do Comando Recortar (Ctrl + X)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_421",
    "text": "Considere que um usuário realizou a seguinte sequência de ações em um editor de texto no ambiente Windows:\n1. Digitou uma frase.\n2. Pressionou o atalho Ctrl + Z.\n3. Percebeu que não deveria ter desfeito a ação.\n\nQual atalho de teclado padrão deve ser utilizado para “Refazer” (Redo) a ação que acabou de ser desfeita?",
    "options": [
      "A) Ctrl + R",
      "B) Ctrl + Shift + Z",
      "C) Ctrl + Y",
      "D) Ctrl + W",
      "E) Ctrl + F"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. Ctrl + R é comumente associado a Recarregar/Atualizar páginas ou alinhar à direita.",
      "Incorreta. Embora utilizado em softwares específicos de design, o padrão nativo e consagrado do Windows/Office para Refazer é Ctrl + Y.",
      "Correta. A combinação Ctrl + Y é o atalho universal no Windows para a função Refazer (Redo), revertendo a ação do comando Desfazer (Ctrl + Z).",
      "Incorreta. Ctrl + W fecha a janela, aba ou documento ativo.",
      "Incorreta. Ctrl + F aciona a ferramenta de Localizar (Find)."
    ],
    "generalExplanation": "O atalho padrão para Refazer a última ação desfeita no Windows é Ctrl + Y. Gabarito C.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Teclas de Atalho: Comando Refazer (Ctrl + Y)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_422",
    "text": "Assinale a alternativa que apresenta a correlação correta entre o atalho de teclado e sua respectiva função no ambiente operacional Windows (em português):",
    "options": [
      "A) Ctrl + A: Abrir um novo arquivo de texto.",
      "B) Ctrl + X: Excluir definitivamente um item sem passar pela lixeira.",
      "C) Ctrl + V: Visualizar as propriedades de um arquivo selecionado.",
      "D) Ctrl + A: Selecionar todos os itens de uma pasta ou todo o conteúdo de um campo ativo.",
      "E) Ctrl + Z: Aplicar zoom na tela para facilitar a leitura."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. Abrir arquivo usa Ctrl + O (Open) ou Ctrl + A em certos editores específicos em português (como Bloco de Notas em versões antigas), mas no Windows Explorer Ctrl + A é Selecionar Tudo.",
      "Incorreta. Ctrl + X é Recortar. Exclusão definitiva é Shift + Delete.",
      "Incorreta. Ctrl + V é Colar. Propriedades é Alt + Enter.",
      "Correta. No Explorador de Arquivos e na maioria dos ambientes do sistema operacional, Ctrl + A (Select All) seleciona todos os arquivos da pasta ou todo o texto da caixa de entrada.",
      "Incorreta. Ctrl + Z é Desfazer."
    ],
    "generalExplanation": "No Windows Explorer, o comando Ctrl + A executa a seleção de todos os itens da pasta. Gabarito D.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Teclas de Atalho do Windows: Selecionar Tudo (Ctrl + A)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_423",
    "text": "Considere uma situação em que um usuário do Windows 10 exclui um arquivo importante que estava armazenado em um Pen Drive (unidade removível de memória flash). Sobre a possibilidade de recuperação desse arquivo através da Lixeira, assinale a afirmativa correta:",
    "options": [
      "A) O arquivo poderá ser restaurado normalmente, pois o Windows cria uma lixeira oculta em todos os dispositivos removíveis.",
      "B) O arquivo não poderá ser recuperado via Lixeira, pois arquivos excluídos de unidades removíveis como Pen Drives são apagados permanentemente de imediato.",
      "C) O arquivo irá para a Lixeira apenas se o seu tamanho for inferior a 10% da capacidade total do Pen Drive.",
      "D) O arquivo será movido para a Lixeira do disco local (C:), independentemente de onde foi excluído.",
      "E) A recuperação só será possível se o usuário tiver habilitado a 'Lixeira de Rede' nas configurações do sistema."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. O Windows não disponibiliza o mecanismo de Lixeira para unidades flash removíveis (pen drives).",
      "Correta. Por padrão de arquitetura do Windows, a Lixeira opera exclusivamente para discos rígidos/SSDs internos fixos locais. Arquivos deletados de unidades removíveis são excluídos permanentemente de imediato, sem trânsito pela Lixeira.",
      "Incorreta. Não existe essa regra percentual para pen drives.",
      "Incorreta. A lixeira do disco local não acolhe exclusões ocorridas em pen drives.",
      "Incorreta. Não existe esse conceito funcional para unidades USB removíveis."
    ],
    "generalExplanation": "Arquivos excluídos de pen drives são apagados de forma permanente pelo sistema operacional, sem passar pela Lixeira. Gabarito B.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Gerenciamento de Arquivos: Comportamento da Lixeira em Dispositivos Removíveis",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_424",
    "text": "No gerenciamento de espaço em disco do Windows 10, a Lixeira possui um comportamento específico quando atinge o limite máximo de armazenamento configurado pelo usuário. Esse descarte automático de itens antigos é regido tecnicamente pela lógica:",
    "options": [
      "A) LIFO (Last In, First Out), onde os arquivos excluídos mais recentemente são os primeiros a serem apagados permanentemente.",
      "B) Aleatória, onde o sistema escolhe qualquer arquivo arbitrário para apagar e liberar espaço.",
      "C) De bloqueio, impedindo que o usuário exclua novos arquivos até que a lixeira seja esvaziada manualmente.",
      "D) FIFO (First In, First Out), onde os arquivos que estão há mais tempo na lixeira são os primeiros a serem eliminados definitivamente para dar lugar aos novos.",
      "E) De compressão, onde o Windows compacta os arquivos antigos para evitar a exclusão permanente."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorreta. LIFO apagaria os arquivos que acabaram de ser excluídos, o que contraria a lógica de proteção ao usuário.",
      "Incorreta. O gerenciamento é estritamente determinístico baseado na data e hora da exclusão.",
      "Incorreta. O sistema não bloqueia novas exclusões; ele realiza a autolimpeza dos itens mais antigos.",
      "Correta. A Lixeira adota a política de fila FIFO (First In, First Out): o primeiro arquivo a entrar na lixeira (o mais antigo) é o primeiro a ser descartado definitivamente do disco rígido quando o espaço limite é ultrapassado para acomodar novas exclusões.",
      "Incorreta. A lixeira não realiza compactação automática de arquivos."
    ],
    "generalExplanation": "Ao atingir a capacidade máxima, a Lixeira do Windows descarta os arquivos mais antigos seguindo a lógica FIFO (First In, First Out). Gabarito D.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Arquitetura do Windows: Política FIFO de Descarte de Espaço na Lixeira",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_425",
    "text": "Um usuário excluiu acidentalmente um arquivo chamado “Relatorio.docx” que estava dentro de uma pasta denominada “Projetos_2023”. Logo em seguida, ele também excluiu a pasta “Projetos_2023”. Ao perceber o erro, ele abre a Lixeira e solicita a restauração apenas do arquivo “Relatorio.docx”. De acordo com o funcionamento padrão do Windows 10/11, qual será o resultado dessa ação?",
    "options": [
      "A) O Windows apresentará uma mensagem de erro informando que o local original não está disponível.",
      "B) O arquivo será restaurado para a Área de Trabalho (Desktop), pois sua pasta original não existe mais.",
      "C) O Windows recriará automaticamente a pasta “Projetos_2023” no local original para acomodar o arquivo restaurado.",
      "D) O arquivo será restaurado para a raiz da unidade C:, aguardando que o usuário o mova manualmente.",
      "E) A restauração será impossibilitada até que o usuário restaure primeiro a pasta “Projetos_2023”."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O Windows não falha nem exibe erro; ele é capaz de recriar a hierarquia necessária.",
      "Incorreta. A Área de Trabalho não é utilizada como destino substituto padrão.",
      "Correta. O Windows preserva os metadados com o caminho completo de origem (Caminho Original). Se a pasta mãe foi excluída ou renomeada, ao restaurar o arquivo isoladamente, o sistema recria automaticamente a estrutura de diretórios necessária para acomodá-lo em seu caminho exato.",
      "Incorreta. O arquivo não é direcionado para a raiz da unidade.",
      "Incorreta. O processo é autônomo e não impõe essa restrição de ordem."
    ],
    "generalExplanation": "Ao restaurar um arquivo cuja pasta de origem foi excluída, o Windows recria automaticamente a pasta para receber o arquivo. Gabarito C.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Gerenciamento de Arquivos: Restauração da Lixeira e Recriação Automática de Pastas",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_426",
    "text": "Considere o funcionamento da Lixeira no Windows 10 em sua configuração padrão. Um usuário realiza a exclusão com a tecla Delete de três itens distintos:\n1. Um arquivo localizado na pasta “Documentos” do disco rígido local (C:).\n2. Um arquivo localizado em um Pen Drive (unidade removível F:).\n3. Um arquivo localizado em uma pasta compartilhada na rede local.\n\nNessa situação, quais itens poderão ser restaurados a partir da Lixeira do Windows?",
    "options": [
      "A) Apenas os itens 1 e 2.",
      "B) Apenas o item 1.",
      "C) Apenas os itens 1 e 3.",
      "D) Todos os três itens (1, 2 e 3).",
      "E) Nenhum dos itens, pois a exclusão via interface gráfica é sempre permanente."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorreta. Arquivos excluídos de pen drives (unidades removíveis) não vão para a lixeira.",
      "Correta. Por padrão: Item 1 (disco rígido local) vai para a Lixeira e pode ser restaurado; Item 2 (pen drive/removível) é excluído permanentemente; Item 3 (compartilhamento de rede) é excluído permanentemente do servidor sem passar pela lixeira local do cliente. Logo, apenas o item 1 pode ser restaurado.",
      "Incorreta. Arquivos excluídos em pastas de rede não vão para a Lixeira local.",
      "Incorreta. O comportamento é restrito ao disco local fixo.",
      "Incorreta. A Lixeira permite a recuperação de arquivos de discos locais fixos."
    ],
    "generalExplanation": "Apenas arquivos de unidades de disco locais fixas (como o C:) vão para a Lixeira. Arquivos de pen drive e de pastas de rede são excluídos permanentemente. Gabarito B.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Lixeira do Windows: Destino de Arquivos em Disco Local, Pen Drive e Rede",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_427",
    "text": "Determinados atalhos de teclado facilitam a administração e a gestão avançada do sistema no Windows 10/11. O atalho “Win + X” é conhecido por abrir o “Menu de Link Rápido” (Menu Avançado do Usuário). Quais opções são tipicamente encontradas nesse menu?",
    "options": [
      "A) Gerenciador de Dispositivos, Gerenciamento de Disco e Windows PowerShell (ou Terminal).",
      "B) Configurações de Personalização de Cores e Temas da Área de Trabalho.",
      "C) Lista de todos os documentos abertos recentemente no Microsoft Word.",
      "D) Opções exclusivas para a formatação de unidades de disco externas.",
      "E) Atalhos para as redes sociais configuradas no perfil do usuário."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correta. O menu de atalho Win + X (acessível também clicando com o botão direito no botão Iniciar) reúne links diretos para ferramentas administrativas essenciais do sistema, tais como: Gerenciador de Dispositivos, Gerenciamento de Disco, Gerenciador de Tarefas, Windows PowerShell / Terminal, Conexões de Rede, Visualizador de Eventos e Opções de Energia.",
      "Incorreta. Personalização de cores e temas fica no aplicativo Configurações.",
      "Incorreta. Documentos recentes do Word aparecem no Acesso Rápido ou na Jump List do ícone do Word.",
      "Incorreta. Não é um menu exclusivo de formatação.",
      "Incorreta. O menu Win + X é restrito a utilitários de sistema e administração do SO."
    ],
    "generalExplanation": "O menu Win + X reúne utilitários administrativos como Gerenciador de Dispositivos, Gerenciamento de Disco e PowerShell/Terminal. Gabarito A.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Recursos do Sistema: Menu de Link Rápido / Menu Administrativo (Win + X)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_428",
    "text": "A “Visão de Tarefas” (Task View) é um recurso do Windows 10 e 11 que potencializa a produtividade e a organização multitarefa. Sobre esse recurso e o conceito de Áreas de Trabalho Virtuais, assinale a afirmativa correta:",
    "options": [
      "A) A Visão de Tarefas permite apenas visualizar as janelas abertas, mas não permite mover janelas entre diferentes áreas de trabalho.",
      "B) O atalho de teclado para acessar a Visão de Tarefas é Alt + F4.",
      "C) Através da Visão de Tarefas (acionada por Win + Tab), o usuário pode criar múltiplas áreas de trabalho virtuais para organizar diferentes grupos de aplicativos.",
      "D) As Áreas de Trabalho Virtuais consomem o dobro de memória RAM para cada nova mesa criada, independentemente dos aplicativos abertos.",
      "E) Ao desligar o computador, todas as Áreas de Trabalho Virtuais e seus respectivos aplicativos não salvos são preservados automaticamente para a próxima sessão."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. É possível arrastar e soltar janelas livremente entre diferentes áreas de trabalho virtuais.",
      "Incorreta. O atalho correto da Visão de Tarefas é Win + Tab (Alt + F4 fecha a janela ativa).",
      "Correta. A Visão de Tarefas (Win + Tab) permite ao usuário visualizar todas as janelas ativas e criar múltiplas Áreas de Trabalho Virtuais (Desktops Virtuais), permitindo isolar fluxos de trabalho (ex.: Trabalho, Estudos, Pessoal) no mesmo monitor.",
      "Incorreta. A criação de um desktop virtual consome quantidade ínfima de recursos; o gasto de memória decorre dos programas em execução.",
      "Incorreta. Ao desligar ou reiniciar o computador, as áreas de trabalho virtuais são encerradas."
    ],
    "generalExplanation": "A Visão de Tarefas (Win + Tab) permite gerenciar janelas abertas e criar múltiplas Áreas de Trabalho Virtuais no Windows. Gabarito C.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Recursos do Sistema: Visão de Tarefas (Win + Tab) e Áreas de Trabalho Virtuais",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_429",
    "text": "No contexto das opções de energia do Windows 10 e 11, existe o recurso chamado “Inicialização Rápida” (Fast Startup). Com base no funcionamento técnico desse recurso, assinale a afirmativa correta:",
    "options": [
      "A) O comando 'Reiniciar' utiliza a Inicialização Rápida para carregar o sistema em menos de 5 segundos.",
      "B) A Inicialização Rápida salva o estado de todos os aplicativos abertos pelo usuário no disco rígido antes de desligar.",
      "C) O comando 'Desligar', por padrão, realiza um encerramento híbrido, salvando o estado do núcleo (kernel) do sistema no disco rígido para acelerar o próximo boot.",
      "D) Para garantir que o sistema operacional seja recarregado do zero, limpando totalmente o kernel da memória, o usuário deve usar o comando 'Suspender'.",
      "E) A Inicialização Rápida é ativada automaticamente apenas quando o usuário escolhe a opção 'Hibernar'."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. O comando 'Reiniciar' ignora deliberadamente a Inicialização Rápida para forçar um ciclo de inicialização limpa (cold boot) do kernel.",
      "Incorreta. A Inicialização Rápida fecha a sessão do usuário e os aplicativos abertos; ela salva apenas a imagem do kernel e drivers do sistema (hibernação híbrida do kernel). Salvar aplicativos é característica da Hibernação completa.",
      "Correta. Com a Inicialização Rápida (Fast Startup) ativada por padrão, ao clicar em 'Desligar', o Windows fecha a sessão dos usuários, mas em vez de descarregar todo o sistema, grava uma imagem do estado do kernel e dos drivers de dispositivo no arquivo de hibernação (hiberfil.sys). No próximo boot, essa imagem é lida diretamente na memória RAM, acelerando significativamente a inicialização.",
      "Incorreta. Para forçar um boot do zero e limpar o kernel, o comando correto é 'Reiniciar'.",
      "Incorreta. O recurso atua especificamente quando o usuário seleciona 'Desligar'."
    ],
    "generalExplanation": "A Inicialização Rápida (Fast Startup) faz com que o comando Desligar execute um encerramento híbrido, salvando o estado do kernel no disco para acelerar o próximo boot. Gabarito C.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Arquitetura e Energia: Inicialização Rápida (Fast Startup) e Encerramento Híbrido",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_430",
    "text": "Um técnico de informática precisa organizar arquivos dentro da mesma partição (Unidade C:). Ele deseja que, ao arrastar um arquivo de uma pasta para outra dentro dessa mesma unidade, o arquivo seja COPIADO, e não movido (que é o comportamento padrão). Para forçar a CÓPIA na mesma unidade, ele deve arrastar o arquivo mantendo pressionada a tecla:",
    "options": [
      "A) Shift",
      "B) Alt",
      "C) Ctrl",
      "D) Tab",
      "E) Windows"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. A tecla Shift força a ação de MOVER, mesmo entre unidades de disco distintas.",
      "Incorreta. A tecla Alt (ou combinação Ctrl + Shift) força a criação de um ATALHO no destino.",
      "Correta. No Windows Explorer, o comportamento padrão ao arrastar na mesma unidade é mover. Para forçar a CÓPIA (duplicação) dentro da mesma unidade, o usuário deve manter pressionada a tecla Ctrl durante o arraste.",
      "Incorreta. A tecla Tab não possui função modificadora para operações de arrastar arquivos.",
      "Incorreta. A tecla Windows aciona atalhos do sistema operacional."
    ],
    "generalExplanation": "Pressionar a tecla Ctrl durante o arrastar e soltar (drag and drop) força a operação de CÓPIA em qualquer situação no Windows. Gabarito C.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Manipulação de Arquivos: Teclas Modificadoras no Arrastar e Soltar (Ctrl para Copiar)",
    "nivelSuperior": false
  },
  {
    "id": "info_sim_431",
    "text": "No que diz respeito aos atributos e propriedades de arquivos no Explorador de Arquivos do Windows, analise as afirmações abaixo:\nI. Um arquivo com o atributo 'Somente Leitura' ativado pode ser aberto e editado, mas suas alterações não podem ser salvas diretamente no arquivo original com o mesmo nome e local.\nII. Arquivos com o atributo 'Oculto' são automaticamente excluídos pelo sistema após 30 dias se não forem acessados.\nIII. A extensão de um arquivo (como .docx ou .pdf) define o programa padrão que o abrirá, mas o Windows pode ser configurado para ocultar essas extensões de tipos conhecidos.\n\nEstá(ão) correta(s):",
    "options": [
      "A) Apenas I.",
      "B) Apenas II.",
      "C) Apenas I e III.",
      "D) Apenas II e III.",
      "E) I, II e III."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorreta. A afirmação III também está correta.",
      "Incorreta. A afirmação II é falsa; arquivos ocultos permanecem gravados no disco indefinidamente.",
      "Correta. A afirmação I está correta (Somente Leitura protege o arquivo contra sobrescrita direta, exigindo 'Salvar Como'); a afirmação III está correta (as extensões associam programas e podem ser ocultadas/exibidas na guia Exibir do Windows Explorer). A afirmação II é incorreta pois não existe exclusão automática por atributo oculto.",
      "Incorreta. A afirmação II é falsa.",
      "Incorreta. A afirmação II é falsa."
    ],
    "generalExplanation": "Itens I e III estão corretos. O atributo 'Oculto' apenas oculta o arquivo na visualização padrão e não exclui arquivos automaticamente. Gabarito C.",
    "banca": "Simulado IBGE",
    "ano": 2026,
    "assunto": "Informática - Gerenciamento de Arquivos: Atributos de Arquivos (Somente Leitura, Oculto) e Extensões",
    "nivelSuperior": false
  }
];
