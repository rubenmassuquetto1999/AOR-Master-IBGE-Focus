# AOR Master — Preparatório Concurso IBGE (Agente Operacional Regional)

Plataforma interativa, moderna e completa de estudos e resolução de questões focada no edital oficial do concurso para **Agente Operacional Regional (AOR)** do Instituto Brasileiro de Geografia e Estatística (**IBGE**).

---

## 🎯 Visão Geral

O **AOR Master** foi desenvolvido para candidatos que buscam alta performance e precisão na preparação para o concurso do IBGE AOR. Combinando um acervo com mais de **1.350 questões** reais de bancas renomadas (IBFC, FGV, Cebraspe/CESPE, FCC e simulados no padrão oficial), a plataforma oferece simulados cronometrados, cadernos de revisão de erros, relatórios de evolução estatística, sistema de edição em lote de questões e uma gamificação com 20 níveis de carreira e 40 conquistas desbloqueáveis.

---

## ✨ Principais Funcionalidades

### 1. 📝 Modos de Treino e Simulado em Tempo Real
- **Simulado Oficial IBGE AOR**: 60 questões cronometradas (4 horas), com distribuição exata das 5 disciplinas do edital, critérios de pontuação mínima e feedback detalhado.
- **Simulado Express**: Sessão compacta de 15 questões balanceadas para treinos ágeis no dia a dia.
- **Treino Personalizado**: Filtros flexíveis por Banca Examinadora, Disciplina e Tópicos Canônicos da taxonomia do edital.
- **Modos de Resolução**:
  - **Modo Estudo**: Feedback imediato por alternativa com gabarito fundamentado e justificativas técnicas.
  - **Modo Prova Real**: Resolução contínua, com gabarito e diagnóstico revelados apenas ao finalizar a prova.

### 2. 🏆 Trilha de Carreira & Gamificação (20 Níveis & 40 Conquistas)
- **20 Níveis da Carreira Pública**: Progressão linear de Nível 1 (*Iniciante nos Estudos*) até o Nível 20 (*Lenda Imortal dos Concursos*), com cálculo dinâmico de XP baseado em acertos, erros e metas cumpridas.
- **40 Conquistas Estratégicas**:
  - **Volume de Questões**: Marcos graduais de 5 até 4.000 questões resolvidas.
  - **Constância & Streaks**: Sequências ininterruptas de 3 a 60 dias de estudos.
  - **Acurácia de Elite**: Insígnias de precisão cirúrgica (*Sniper*) mantendo 75%, 80% e 85% de acertos com alta amostragem.
  - **Intensidade Diária**: Reconhecimento de maratonas diárias de 30 e 50 questões resolvidas no mesmo dia.
  - **Polimatia**: Desafios de domínio abrangente de todas as disciplinas do concurso.
  - **Colaboração & Autoria**: Conquista para criadores de questões personalizadas no banco.
- **Painel Interativo de Conquistas**: Filtros por status (*Todas*, *Conquistadas*, *A Conquistar*), seletor de visualização rápida por nível e percentual global de conclusão da jornada.
- **Ranking Geral dos Alunos**: Placar competitivo em tempo real na nuvem (Firestore) com ranking ordenado por nível, XP acumulado e avatares personalizados.

### 3. 📚 Banco de Questões Avançado & Edição em Lote
- **Busca e Filtros Dinâmicos**: Pesquisa instantânea em enunciados e opções, filtros encadeados por Disciplina, Assunto/Tópico e Banca.
- **Criação e Gestão de Questões**: Modal dedicado para cadastro de questões autorais com suporte a justificativas, gabarito e taxonomia oficial.
- **Edição em Lote (`BatchEditModal`)**: Seleção múltipla de questões com atualização simultânea de campos estruturais.
- **Replicação Global em Cascata**: Opção nas telas de edição para propagar automaticamente alterações de **Banca**, **Disciplina** ou **Assunto/Tópico** para todas as questões correspondentes no acervo, sincronizando no estado local e na nuvem.
- **Importação e Exportação**: Backup e restauração de cadernos e bancos de questões em formato JSON.

### 4. 🔄 Caderno de Erros & Repetição Inteligente
- **Mapeamento Automático de Erros**: Identificação instantânea dos pontos de vulnerabilidade para reteste focado.
- **Caderno de Favoritas**: Marcação de questões com estrela para revisão estratégica pré-prova.
- **Filtro de Inéditas**: Treinos priorizando questões ainda não respondidas pelo aluno.

### 5. 📊 Painel Analítico & Relatório em PDF
- **Dashboard Estatístico**: Métricas de taxa de acerto global, gráfico de barras com aproveitamento por disciplina e curva de evolução diária.
- **Exportação em PDF (`ProgressReport`)**: Emissão instantânea de relatório analítico de progresso, pronto para arquivamento ou impressão.

### 6. 🔒 Acesso Restrito, Modo Convidado & Gestão de Convites
- **Modo Convidado (*Guest*)**: Permite começar os estudos imediatamente offline/local sem necessidade de login.
- **Migração Transparente**: Ao fazer login com Google, todo o histórico, XP, streak e conquistas locais são unificados com a conta na nuvem.
- **Portal de Acesso Restrito (`AccessGate`)**: Sistema de whitelist com verificação de e-mails autorizados via Firestore.
- **Painel Administrativo de Convites (`AdminInvitesModal`)**:
  - Geração de convites para alunos com prazo de validade configurável.
  - Gerenciamento de solicitações de acesso pendentes com aprovação ou recusa com um clique.
  - Atribuição de permissões de Administrador ou Aluno.

### 7. 🌓 Interface Moderna e Acessível
- Suporte a tema Claro (*Light*), Escuro (*Dark*) e Sincronização Automática com o Sistema.
- Indicador visual de status de sincronização (Nuvem / Offline / Convidado).
- Layout 100% responsivo para smartphones, tablets e computadores.

---

## 📖 Estrutura Curricular do Edital IBGE AOR

O conteúdo programático está integralmente mapeado conforme o edital oficial de **Agente Operacional Regional**:

| Disciplina | Questões no Acervo | Tópicos Canônicos Abrangidos |
| :--- | :---: | :--- |
| **Língua Portuguesa** | 274+ | Ortografia Oficial, Acentuação, Classes Gramaticais, Emprego dos Tempos e Modos Verbais, Regência e Crase, Concordância Verbal e Nominal, Pontuação, Período Composto por Coordenação e Subordinação, Coesão e Coerência Textual, Significação das Palavras e Interpretação de Textos. |
| **Noções de Administração** | 279+ | Processo Organizacional (Planejamento, Organização, Direção e Controle - PODC), Ciclo PDCA, Tomada de Decisão, Motivação e Liderança, Comunicação Organizacional, Gestão da Qualidade e Excelência nos Serviços Públicos, Clima e Cultura Organizacional. |
| **Raciocínio Lógico Quantitativo** | 296+ | Proposições Lógicas Simples e Compostas, Conectivos Lógicos, Tabela Verdade, Negação e Equivalência Lógica, Silogismos e Lógica de Argumentação, Diagramas Lógicos de Venn, Princípio da Contagem, Probabilidade e Problemas de Associação Lógica. |
| **Noções Básicas de Informática** | 331+ | Hardware e Componentes de Computadores, Sistemas Operacionais (Windows 10/11), Gerenciamento de Arquivos, Pastas e Atalhos, Microsoft Excel 365 (Fórmulas, Funções e Operações), Correio Eletrônico, Segurança da Informação e Sistema Operacional Android. |
| **Ética no Serviço Público e IBGE** | 170+ | Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal (Decreto nº 1.171/1994), Código de Ética do IBGE, Deveres e Vedações do Servidor, Regime Jurídico Único (Lei nº 8.112/1990) e Responsabilidades Administrativas. |

---

## 🛠️ Tecnologias Utilizadas

- **Linguagem**: TypeScript (Strict Mode)
- **Frontend**: React 19
- **Build Tool**: Vite
- **Estilização**: Tailwind CSS com suporte a Dark Mode nativo
- **Animações e Transições**: Lucide React, Motion
- **Visualização de Dados & Gráficos**: Recharts
- **Banco de Dados & Autenticação**: Firebase Firestore & Firebase Auth
- **Geração de Relatórios**: Exportação nativa em PDF / Janela de impressão

---

## 🚀 Instalação e Execução

### Pré-requisitos
- Node.js (versão 18 ou superior)
- Gerenciador de pacotes `npm`, `yarn` ou `pnpm`

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd aor-master
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   A aplicação estará disponível em `http://localhost:3000`.

4. **Verificação de tipos e lint:**
   ```bash
   npm run lint
   ```

5. **Gerar build para produção:**
   ```bash
   npm run build
   ```

---

## 📁 Estrutura de Pastas

```text
├── src/
│   ├── components/            # Componentes modulares e reutilizáveis
│   │   ├── AccessGate.tsx         # Portal de controle de acesso restrito (whitelist)
│   │   ├── Achievements.tsx       # Trilha de carreira (20 níveis) e 40 conquistas
│   │   ├── AdminInvitesModal.tsx  # Painel de gestão de convites e permissões
│   │   ├── BatchEditModal.tsx     # Modal de edição em lote de questões
│   │   ├── Dashboard.tsx          # Painel analítico de métricas e gráficos
│   │   ├── ProgressReport.tsx     # Emissão de relatório formatado em PDF
│   │   ├── QuestionBank.tsx       # Acervo de questões, busca e filtros
│   │   ├── QuestionModal.tsx      # Cadastro e edição detalhada de questão
│   │   ├── Quiz.tsx               # Interface de resolução de simulados e treinos
│   │   └── UserProfile.tsx        # Perfil do aluno, metas e sincronização
│   ├── data/                  # Banco de dados estático e taxonomia do edital
│   │   ├── taxonomy.ts            # Mapeamento canônico de disciplinas e tópicos
│   │   ├── questionsPt.ts         # Questões de Língua Portuguesa
│   │   ├── questionsAdm.ts        # Questões de Noções de Administração
│   │   ├── questionsInfo.ts       # Questões de Informática
│   │   ├── questionsRlm.ts        # Questões de Raciocínio Lógico
│   │   ├── questionsIbgeEtica.ts  # Questões de Ética e Legislação do IBGE
│   │   ├── questionsBatchRlmAssoc.ts
│   │   └── questionsNewBatch.ts
│   ├── lib/                   # Utilitários e configurações (Firebase Firestore)
│   ├── types.ts               # Tipagens e interfaces TypeScript
│   ├── App.tsx                # Gerenciamento de estado global e navegação
│   └── main.tsx               # Ponto de entrada da aplicação
├── index.html                 # Template HTML principal
├── metadata.json              # Metadados e permissões da aplicação
├── package.json               # Dependências e scripts do projeto
├── vite.config.ts             # Configuração do Vite
└── README.md                  # Documentação completa do projeto
```

---

## 📄 Licença

Este projeto é disponibilizado para fins educacionais e de preparação para concursos públicos.
