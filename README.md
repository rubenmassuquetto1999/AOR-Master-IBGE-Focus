# AOR Master — Preparatório Concurso IBGE (Agente Operacional Regional)

Plataforma interativa e completa de estudos e resolução de questões focada no edital oficial do concurso para **Agente Operacional Regional (AOR)** do Instituto Brasileiro de Geografia e Estatística (**IBGE**).

---

## 🎯 Visão Geral

O **AOR Master** foi desenvolvido para proporcionar aos candidatos uma experiência imersiva e analítica de preparação para concursos públicos. Com um acervo de mais de **1.380 questões** comentadas e classificadas conforme a taxonomia programática do edital, a plataforma combina simulados em tempo real, cadernos de revisão de erros, relatórios de evolução estatística e gamificação para maximizar a retenção do conteúdo.

---

## ✨ Principais Funcionalidades

### 1. 📝 Modos de Treino e Simulado
- **Simulado Oficial IBGE AOR**: 60 questões cronometradas distribuídas com pesos e quantidades exatas do edital.
- **Treino Personalizado**: Filtros dinâmicos por Banca Examinadora (IBFC, FGV, Cebraspe/CESPE, FCC, etc.), Disciplina e Tópico específico.
- **Modo Prova Real e Modo Estudo**: Escolha entre feedback imediato por alternativa com justificativa técnica ou resolução contínua com pontuação ao final.

### 2. 📚 Banco de Questões Avançado
- Busca textual dinâmica por palavras-chave em enunciados e opções.
- Filtros encadeados por Disciplina, Tópicos Canônicos e Bancas.
- Criação e gerenciamento de questões personalizadas com alternativas, gabarito e comentários detalhados.
- Importação e exportação de cadernos de questões.

### 3. 🔄 Caderno de Erros & Repetição Inteligente
- Registro automático de erros para fixação dirigida.
- Algoritmo que prioriza questões inéditas ou previamente erradas em novos treinos.
- Marcação de questões favoritas para revisão rápida.

### 4. 📊 Painel de Desempenho e Estatísticas
- Gráficos de precisão global e por disciplina (taxa de acertos, total respondido e evolução diária).
- Histórico detalhado de tentativas com data, tempo de resposta e resultado.
- Geração de relatório de desempenho em PDF formatado para impressão ou arquivamento.

### 5. 🏆 Gamificação e Metas Diárias
- Sistema de Pontos de Experiência (XP) e níveis de progressão.
- Contador de ofensiva diária (*Streak*) para manter o hábito constante de estudos.
- Metas diárias configuráveis com barra de progresso em tempo real.

### 6. 🌓 Interface Moderna e Acessível
- Suporte a tema Claro (*Light*) e Escuro (*Dark*).
- Design responsivo adaptado para computadores, tablets e smartphones.

---

## 📖 Estrutura Curricular e Disciplinas

O conteúdo programático está integralmente estruturado em **5 grandes disciplinas**:

| Disciplina | Tópicos Principais |
| :--- | :--- |
| **Língua Portuguesa** | Ortografia, Classes Gramaticais, Verbos, Regência e Crase, Concordância Verbal/Nominal, Pontuação, Período Composto, Coesão e Interpretação Textual |
| **Noções de Administração** | Processo Organizacional (PODC), Ciclo PDCA, Liderança, Motivação, Gestão da Qualidade, Comunicação e Gestão de Pessoas |
| **Raciocínio Lógico Quantitativo** | Proposições Lógicas, Conectivos, Tabela Verdade, Negação, Equivalência, Silogismos Categóricos, Diagramas de Venn e Associação Lógica |
| **Noções Básicas de Informática** | Hardware, Software, Sistema Operacional Windows 11, Gerenciamento de Arquivos/Pastas, Microsoft Excel 365 e Android |
| **Ética no Serviço Público e IBGE** | Código de Ética Profissional do Servidor do IBGE, Regime Jurídico Único e Lei nº 8.112/1990 |

---

## 🛠️ Tecnologias Utilizadas

- **Linguagem**: TypeScript
- **Frontend**: React 19
- **Build Tool**: Vite
- **Estilização**: Tailwind CSS
- **Componentes & Animações**: Lucide React, Motion
- **Visualização de Dados & Gráficos**: Recharts
- **Banco de Dados & Persistência**: Firebase Firestore & LocalStorage

---

## 🚀 Instalação e Execução

### Pré-requisitos
- Node.js (versão 18 ou superior)
- Gerenciador de pacotes npm, yarn ou pnpm

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_DIRETORIO>
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

4. **Gerar build para produção:**
   ```bash
   npm run build
   ```

5. **Verificação de tipos e lint:**
   ```bash
   npm run lint
   ```

---

## 📁 Estrutura de Pastas

```text
├── src/
│   ├── components/            # Componentes visuais modulares (Quiz, Dashboard, QuestionBank, etc.)
│   ├── data/                  # Base de dados de questões e taxonomia programática
│   │   ├── taxonomy.ts        # Mapeamento canônico de disciplinas e tópicos
│   │   ├── questionsPt.ts     # Questões de Língua Portuguesa
│   │   ├── questionsAdm.ts    # Questões de Noções de Administração
│   │   ├── questionsInfo.ts   # Questões de Informática
│   │   ├── questionsRlm.ts    # Questões de Raciocínio Lógico
│   │   └── ...
│   ├── lib/                   # Utilitários e integrações (Firebase, etc.)
│   ├── types.ts               # Definições de tipos e interfaces TypeScript
│   ├── App.tsx                # Componente principal e roteamento interno
│   └── main.tsx               # Ponto de entrada da aplicação React
├── index.html                 # Estrutura HTML principal
├── package.json               # Configurações e dependências do projeto
├── vite.config.ts             # Configuração do Vite
└── README.md                  # Documentação do projeto
```

---

## 📄 Licença

Este projeto é disponibilizado para fins educacionais e de preparação para concursos públicos.
