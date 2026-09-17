import React, { useState } from "react";
import {
  Award,
  CheckCircle,
  Lock,
  Trophy,
  Zap,
  Star,
  Target,
  Crown,
  Flame,
  BookOpen,
  Medal,
  Sparkles,
  Shield,
  ChevronRight,
  Compass,
  CheckSquare,
  BarChart2,
} from "lucide-react";
import { Achievement } from "../types";

export interface LevelTier {
  level: number;
  title: string;
  minXp: number;
  description: string;
  badgeLabel: string;
  accentColor: {
    bg: string;
    border: string;
    text: string;
    badge: string;
  };
}

export const LEVEL_TIERS: LevelTier[] = [
  {
    level: 1,
    title: "Aspirante a AOR",
    minXp: 0,
    description: "Início da preparação: ambientação com o edital do IBGE e resolução dos primeiros blocos de questões.",
    badgeLabel: "Fase de Iniciação",
    accentColor: {
      bg: "bg-slate-50 dark:bg-slate-850",
      border: "border-slate-200 dark:border-slate-700",
      text: "text-slate-700 dark:text-slate-200",
      badge: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
    },
  },
  {
    level: 2,
    title: "Estudante Focado",
    minXp: 200,
    description: "Criação de rotina: batendo metas diárias de planejamento e fixando conceitos fundamentais.",
    badgeLabel: "Fase de Planejamento",
    accentColor: {
      bg: "bg-blue-50/50 dark:bg-blue-950/20",
      border: "border-blue-200/80 dark:border-blue-900/40",
      text: "text-blue-700 dark:text-blue-300",
      badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-200",
    },
  },
  {
    level: 3,
    title: "Pesquisador & Autor",
    minXp: 400,
    description: "Autoria e persistência: cadastrando questões próprias e sustentando sequências de estudo ininterruptas.",
    badgeLabel: "Fase de Autoria & Prática",
    accentColor: {
      bg: "bg-indigo-50/50 dark:bg-indigo-950/20",
      border: "border-indigo-200/80 dark:border-indigo-900/40",
      text: "text-indigo-700 dark:text-indigo-300",
      badge: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-200",
    },
  },
  {
    level: 4,
    title: "Competidor Avançado",
    minXp: 600,
    description: "Alto rendimento: foco direto nas disciplinas-chave do concurso e aceleração de volume de questões.",
    badgeLabel: "Fase de Edital",
    accentColor: {
      bg: "bg-amber-50/50 dark:bg-amber-950/20",
      border: "border-amber-200/80 dark:border-amber-900/40",
      text: "text-amber-800 dark:text-amber-300",
      badge: "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200",
    },
  },
  {
    level: 5,
    title: "Mestre das Bancas",
    minXp: 800,
    description: "Domínio pleno: precisão cirúrgica de 100% de acerto em simulados e volume superior a 60 questões.",
    badgeLabel: "Fase de Consolidação",
    accentColor: {
      bg: "bg-emerald-50/50 dark:bg-emerald-950/20",
      border: "border-emerald-200/80 dark:border-emerald-900/40",
      text: "text-emerald-800 dark:text-emerald-300",
      badge: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200",
    },
  },
  {
    level: 6,
    title: "Estrategista de Prova",
    minXp: 1000,
    description: "Velocidade e foco tático: resolução ágil de questões com precisão analítica e 100 questões superadas.",
    badgeLabel: "Fase Tática",
    accentColor: {
      bg: "bg-cyan-50/50 dark:bg-cyan-950/20",
      border: "border-cyan-200/80 dark:border-cyan-900/40",
      text: "text-cyan-800 dark:text-cyan-300",
      badge: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-200",
    },
  },
  {
    level: 7,
    title: "Especialista Multidisciplinar",
    minXp: 1200,
    description: "Intersecção de disciplinas: domínio de Português, RLM, Informática e Administração.",
    badgeLabel: "Fase de Aprofundamento",
    accentColor: {
      bg: "bg-purple-50/50 dark:bg-purple-950/20",
      border: "border-purple-200/80 dark:border-purple-900/40",
      text: "text-purple-800 dark:text-purple-300",
      badge: "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200",
    },
  },
  {
    level: 8,
    title: "Gabaritador de Simulados",
    minXp: 1400,
    description: "Condições reais de concurso: superação de simulados oficiais e mais de 220 questões resolvidas no padrão IBGE AOR.",
    badgeLabel: "Fase de Simulação Real",
    accentColor: {
      bg: "bg-rose-50/50 dark:bg-rose-950/20",
      border: "border-rose-200/80 dark:border-rose-900/40",
      text: "text-rose-800 dark:text-rose-300",
      badge: "bg-rose-100 text-rose-800 dark:bg-rose-900/50 dark:text-rose-200",
    },
  },
  {
    level: 9,
    title: "Elite dos Concursos",
    minXp: 1600,
    description: "Acurácia de elite: mais de 300 questões no histórico e índice de acerto cirúrgico superior a 75%.",
    badgeLabel: "Fase de Lapidação",
    accentColor: {
      bg: "bg-orange-50/50 dark:bg-orange-950/20",
      border: "border-orange-200/80 dark:border-orange-900/40",
      text: "text-orange-800 dark:text-orange-300",
      badge: "bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200",
    },
  },
  {
    level: 10,
    title: "Nomeado & Convocado",
    minXp: 1800,
    description: "Patamar de topo da lista: mais de 400 questões resolvidas e consistência inabalável de estudos.",
    badgeLabel: "Fase de Nomeação",
    accentColor: {
      bg: "bg-teal-50/50 dark:bg-teal-950/20",
      border: "border-teal-200/80 dark:border-teal-900/40",
      text: "text-teal-800 dark:text-teal-300",
      badge: "bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-200",
    },
  },
  {
    level: 11,
    title: "Mestre do Edital AOR",
    minXp: 2000,
    description: "Varredura do conteúdo programático: mais de 500 questões superadas sem deixar brechas.",
    badgeLabel: "Fase de Domínio Total",
    accentColor: {
      bg: "bg-sky-50/50 dark:bg-sky-950/20",
      border: "border-sky-200/80 dark:border-sky-900/40",
      text: "text-sky-800 dark:text-sky-300",
      badge: "bg-sky-100 text-sky-800 dark:bg-sky-900/50 dark:text-sky-200",
    },
  },
  {
    level: 12,
    title: "Centurião do Conhecimento",
    minXp: 2200,
    description: "Mais de 650 questões resolvidas! Velocidade de leitura, interpretação apurada e retenção máxima.",
    badgeLabel: "Fase de Alta Performance",
    accentColor: {
      bg: "bg-violet-50/50 dark:bg-violet-950/20",
      border: "border-violet-200/80 dark:border-violet-900/40",
      text: "text-violet-800 dark:text-violet-300",
      badge: "bg-violet-100 text-violet-800 dark:bg-violet-900/50 dark:text-violet-200",
    },
  },
  {
    level: 13,
    title: "Titã da Constância",
    minXp: 2400,
    description: "Disciplina inquebrável: maratona contínua com mais de 800 questões e sequências longas de estudos.",
    badgeLabel: "Fase de Resistência",
    accentColor: {
      bg: "bg-fuchsia-50/50 dark:bg-fuchsia-950/20",
      border: "border-fuchsia-200/80 dark:border-fuchsia-900/40",
      text: "text-fuchsia-800 dark:text-fuchsia-300",
      badge: "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900/50 dark:text-fuchsia-200",
    },
  },
  {
    level: 14,
    title: "Oráculo do IBGE",
    minXp: 2600,
    description: "Conhece cada pegadinha e estilo de banca de olhos fechados. Mais de 950 questões resolvidas.",
    badgeLabel: "Fase de Especialista Sênior",
    accentColor: {
      bg: "bg-lime-50/50 dark:bg-lime-950/20",
      border: "border-lime-200/80 dark:border-lime-900/40",
      text: "text-lime-800 dark:text-lime-300",
      badge: "bg-lime-100 text-lime-800 dark:bg-lime-900/50 dark:text-lime-200",
    },
  },
  {
    level: 15,
    title: "Gabarito de Ouro",
    minXp: 2800,
    description: "Excelência estatística: mais de 1.050 questões resolvidas e índice de aproveitamento de alto padrão.",
    badgeLabel: "Fase de Excelência Áurea",
    accentColor: {
      bg: "bg-amber-100/40 dark:bg-amber-950/30",
      border: "border-amber-300 dark:border-amber-700",
      text: "text-amber-900 dark:text-amber-200",
      badge: "bg-amber-200/70 text-amber-900 dark:bg-amber-900/60 dark:text-amber-200",
    },
  },
  {
    level: 16,
    title: "Prodígio dos Gabaritos",
    minXp: 3000,
    description: "Mais de 1.150 questões! Nível de retenção mnemônica e raciocínio lógico em nível de instrutor.",
    badgeLabel: "Fase Magistral",
    accentColor: {
      bg: "bg-emerald-100/40 dark:bg-emerald-950/30",
      border: "border-emerald-300 dark:border-emerald-700",
      text: "text-emerald-900 dark:text-emerald-200",
      badge: "bg-emerald-200/70 text-emerald-900 dark:bg-emerald-900/60 dark:text-emerald-200",
    },
  },
  {
    level: 17,
    title: "Soberano das Bancas",
    minXp: 3200,
    description: "Mais de 1.220 questões resolvidas. Domínio absoluto de enunciados complexos e casos práticos.",
    badgeLabel: "Fase Suprema",
    accentColor: {
      bg: "bg-blue-100/40 dark:bg-blue-950/30",
      border: "border-blue-300 dark:border-blue-700",
      text: "text-blue-900 dark:text-blue-200",
      badge: "bg-blue-200/70 text-blue-900 dark:bg-blue-900/60 dark:text-blue-200",
    },
  },
  {
    level: 18,
    title: "Primeiro Lugar Geral",
    minXp: 3400,
    description: "Mais de 1.280 questões! Desempenho comparável aos primeiros colocados em certames nacionais.",
    badgeLabel: "Fase de Campeão",
    accentColor: {
      bg: "bg-purple-100/40 dark:bg-purple-950/30",
      border: "border-purple-300 dark:border-purple-700",
      text: "text-purple-900 dark:text-purple-200",
      badge: "bg-purple-200/70 text-purple-900 dark:bg-purple-900/60 dark:text-purple-200",
    },
  },
  {
    level: 19,
    title: "Mítico Servidor Aprovado",
    minXp: 3600,
    description: "Mais de 1.320 questões! Ritmo de treinamento lendário, simulados gabaritados e bagagem enciclopédica.",
    badgeLabel: "Fase Mítica",
    accentColor: {
      bg: "bg-rose-100/40 dark:bg-rose-950/30",
      border: "border-rose-300 dark:border-rose-700",
      text: "text-rose-900 dark:text-rose-200",
      badge: "bg-rose-200/70 text-rose-900 dark:bg-rose-900/60 dark:text-rose-200",
    },
  },
  {
    level: 20,
    title: "Lenda Imortal dos Concursos",
    minXp: 3800,
    description: "Patamar máximo absoluto: mais de 1.350 questões resolvidas (quase a totalidade do banco de dados), dedicação exemplar e posse garantida com louvor!",
    badgeLabel: "Fase Hall da Fama",
    accentColor: {
      bg: "bg-yellow-100/60 dark:bg-yellow-950/40",
      border: "border-yellow-400 dark:border-yellow-600",
      text: "text-yellow-950 dark:text-yellow-200",
      badge: "bg-yellow-300 text-yellow-950 dark:bg-yellow-900/80 dark:text-yellow-200 shadow-xs",
    },
  },
];

export const ALL_ACHIEVEMENTS: Achievement[] = [
  // --- NÍVEL 1: ASPIRANTE A AOR ---
  {
    id: "ach_welcome",
    title: "Primeiro Passo",
    description: "Respondeu sua primeira questão no caderno de estudos.",
    xpReward: 50,
    icon: "Star",
    levelRequired: 1,
    levelTitle: "Nível 1 — Aspirante a AOR",
    category: "Iniciação",
  },
  {
    id: "ach_q_5",
    title: "Meta Inicial (5 Questões)",
    description: "Resolveu 5 questões no sistema, firmando o ritmo de estudos.",
    xpReward: 50,
    icon: "CheckCircle",
    levelRequired: 1,
    levelTitle: "Nível 1 — Aspirante a AOR",
    category: "Volume de Questões",
  },

  // --- NÍVEL 2: ESTUDANTE FOCADO ---
  {
    id: "ach_daily_goal",
    title: "Meta Diária Batida",
    description: "Cumpriu o planejamento da meta diária de questões definida no seu perfil de estudos.",
    xpReward: 80,
    icon: "Target",
    levelRequired: 2,
    levelTitle: "Nível 2 — Estudante Focado",
    category: "Planejamento Diário",
  },
  {
    id: "ach_q_15",
    title: "Ritmo Firme (15 Questões)",
    description: "Acumulou 15 questões resolvidas (meta diária recomendada de planejamento).",
    xpReward: 100,
    icon: "Trophy",
    levelRequired: 2,
    levelTitle: "Nível 2 — Estudante Focado",
    category: "Volume de Questões",
  },

  // --- NÍVEL 3: PESQUISADOR & AUTOR ---
  {
    id: "ach_custom",
    title: "Expandindo Horizontes",
    description: "Cadastrou uma nova questão personalizada no sistema, enriquecendo o banco de dados.",
    xpReward: 70,
    icon: "BookOpen",
    levelRequired: 3,
    levelTitle: "Nível 3 — Pesquisador & Autor",
    category: "Autoria & Prática",
  },
  {
    id: "ach_streak",
    title: "Disciplina de Ferro",
    description: "Atingiu uma sequência ininterrupta de 3 dias seguidos de estudo.",
    xpReward: 100,
    icon: "Flame",
    levelRequired: 3,
    levelTitle: "Nível 3 — Pesquisador & Autor",
    category: "Constância",
  },

  // --- NÍVEL 4: COMPETIDOR AVANÇADO ---
  {
    id: "ach_ibge",
    title: "Foco no IBGE (AOR)",
    description: "Resolveu questões voltadas para as disciplinas essenciais do concurso AOR IBGE.",
    xpReward: 80,
    icon: "Award",
    levelRequired: 4,
    levelTitle: "Nível 4 — Competidor Avançado",
    category: "Edital IBGE",
  },
  {
    id: "ach_q_30",
    title: "Avanço Consistente (30 Questões)",
    description: "Alcançou a marca expressiva de 30 questões resolvidas na plataforma.",
    xpReward: 150,
    icon: "Zap",
    levelRequired: 4,
    levelTitle: "Nível 4 — Competidor Avançado",
    category: "Volume de Questões",
  },

  // --- NÍVEL 5: MESTRE DAS BANCAS ---
  {
    id: "ach_perfect",
    title: "Gabarito Perfeito",
    description: "Acertou 100% das questões em uma sessão de estudos ou simulado.",
    xpReward: 150,
    icon: "Medal",
    levelRequired: 5,
    levelTitle: "Nível 5 — Mestre das Bancas",
    category: "Excelência",
  },
  {
    id: "ach_q_60",
    title: "Mestre da Prática (60 Questões)",
    description: "Superou a marca de 60 questões resolvidas no total, consolidando alta maratona de preparação.",
    xpReward: 200,
    icon: "Crown",
    levelRequired: 5,
    levelTitle: "Nível 5 — Mestre das Bancas",
    category: "Volume de Questões",
  },

  // --- NÍVEL 6: ESTRATEGISTA DE PROVA ---
  {
    id: "ach_q_100",
    title: "Centurião dos Estudos (100 Qs)",
    description: "Superou o marco de 100 questões resolvidas no histórico de treinamento.",
    xpReward: 200,
    icon: "CheckSquare",
    levelRequired: 6,
    levelTitle: "Nível 6 — Estrategista de Prova",
    category: "Volume de Questões",
  },
  {
    id: "ach_streak_7",
    title: "Hábito Inabalável (7 Dias)",
    description: "Manteve 7 dias consecutivos resolvendo questões sem falhar nenhum dia.",
    xpReward: 180,
    icon: "Flame",
    levelRequired: 6,
    levelTitle: "Nível 6 — Estrategista de Prova",
    category: "Constância",
  },

  // --- NÍVEL 7: ESPECIALISTA MULTIDISCIPLINAR ---
  {
    id: "ach_q_150",
    title: "Rumo ao Topo (150 Qs)",
    description: "Ultrapassou a marca de 150 questões de concurso resolvidas com precisão.",
    xpReward: 220,
    icon: "Trophy",
    levelRequired: 7,
    levelTitle: "Nível 7 — Especialista Multidisciplinar",
    category: "Volume de Questões",
  },
  {
    id: "ach_multi_disc",
    title: "Visão Holística",
    description: "Praticou e pontuou em todas as disciplinas essenciais do edital do concurso.",
    xpReward: 180,
    icon: "Compass",
    levelRequired: 7,
    levelTitle: "Nível 7 — Especialista Multidisciplinar",
    category: "Domínio Global",
  },

  // --- NÍVEL 8: GABARITADOR DE SIMULADOS ---
  {
    id: "ach_q_250",
    title: "Maratona 220 (220 Qs)",
    description: "Alcançou a marca expressiva de 220 questões respondidas no banco de estudos.",
    xpReward: 250,
    icon: "Shield",
    levelRequired: 8,
    levelTitle: "Nível 8 — Gabaritador de Simulados",
    category: "Volume de Questões",
  },
  {
    id: "ach_simulado_ibge",
    title: "Simulado Oficial IBGE",
    description: "Concluiu um simulado completo ou sessão de 20+ questões focado no edital do IBGE AOR.",
    xpReward: 250,
    icon: "Award",
    levelRequired: 8,
    levelTitle: "Nível 8 — Gabaritador de Simulados",
    category: "Simulação Real",
  },

  // --- NÍVEL 9: ELITE DOS CONCURSOS ---
  {
    id: "ach_q_400",
    title: "Trezentas Batalhas (300 Qs)",
    description: "Ultrapassou a marca de 300 questões resolvidas, adquirindo intuição de prova apurada.",
    xpReward: 280,
    icon: "BarChart2",
    levelRequired: 9,
    levelTitle: "Nível 9 — Elite dos Concursos",
    category: "Volume de Questões",
  },
  {
    id: "ach_sniper",
    title: "Sniper das Bancas",
    description: "Manteve taxa de aproveitamento superior a 75% de acertos com expressiva bagagem de questões.",
    xpReward: 300,
    icon: "Sparkles",
    levelRequired: 9,
    levelTitle: "Nível 9 — Elite dos Concursos",
    category: "Alta Acurácia",
  },

  // --- NÍVEL 10: NOMEADO & CONVOCADO ---
  {
    id: "ach_q_500",
    title: "Quatrocentos Desafios (400 Qs)",
    description: "Concluiu 400 questões resolvidas. Preparação digna de classificação direta no concurso!",
    xpReward: 350,
    icon: "Crown",
    levelRequired: 10,
    levelTitle: "Nível 10 — Nomeado & Convocado",
    category: "Patamar de Elite",
  },
  {
    id: "ach_streak_14",
    title: "Quinzena Implacável (14 Dias)",
    description: "Manteve 14 dias seguidos de estudo diário sem falhar nenhum dia consecutivo.",
    xpReward: 300,
    icon: "Flame",
    levelRequired: 10,
    levelTitle: "Nível 10 — Nomeado & Convocado",
    category: "Constância",
  },

  // --- NÍVEL 11: MESTRE DO EDITAL AOR ---
  {
    id: "ach_q_750",
    title: "Meio Milhar (500 Qs)",
    description: "Superou 500 questões de treino, dominando a lógica de cobrança das bancas examinadoras.",
    xpReward: 380,
    icon: "Shield",
    levelRequired: 11,
    levelTitle: "Nível 11 — Mestre do Edital AOR",
    category: "Volume de Questões",
  },
  {
    id: "ach_speed_master",
    title: "Maratona Diária (30 Qs/dia)",
    description: "Resolveu 30 ou mais questões em um único dia de ritmo intenso de estudos.",
    xpReward: 250,
    icon: "Zap",
    levelRequired: 11,
    levelTitle: "Nível 11 — Mestre do Edital AOR",
    category: "Intensidade Diária",
  },

  // --- NÍVEL 12: CENTURIÃO DO CONHECIMENTO ---
  {
    id: "ach_q_1000",
    title: "Grande Escalada (650 Qs)",
    description: "Alcançou a respeitadíssima marca de 650 questões resolvidas no sistema!",
    xpReward: 500,
    icon: "Crown",
    levelRequired: 12,
    levelTitle: "Nível 12 — Centurião do Conhecimento",
    category: "Marco Lendário",
  },
  {
    id: "ach_author_pro",
    title: "Autor Colaborador",
    description: "Cadastrou 3 ou mais questões personalizadas no banco de questões do sistema.",
    xpReward: 300,
    icon: "BookOpen",
    levelRequired: 12,
    levelTitle: "Nível 12 — Centurião do Conhecimento",
    category: "Colaboração",
  },

  // --- NÍVEL 13: TITÃ DA CONSTÂNCIA ---
  {
    id: "ach_q_1300",
    title: "Titã dos Estudos (800 Qs)",
    description: "Superou 800 questões resolvidas com resiliência incomparável.",
    xpReward: 450,
    icon: "Trophy",
    levelRequired: 13,
    levelTitle: "Nível 13 — Titã da Constância",
    category: "Volume de Questões",
  },
  {
    id: "ach_streak_21",
    title: "Três Semanas de Aço (21 Dias)",
    description: "Atingiu 21 dias contínuos de estudo, consolidando um hábito definitivo de aprovação.",
    xpReward: 350,
    icon: "Flame",
    levelRequired: 13,
    levelTitle: "Nível 13 — Titã da Constância",
    category: "Constância",
  },

  // --- NÍVEL 14: ORÁCULO DO IBGE ---
  {
    id: "ach_q_1600",
    title: "Oráculo do Acervo (950 Qs)",
    description: "Ultrapassou 950 questões resolvidas com interpretação apurada de pegadinhas.",
    xpReward: 500,
    icon: "Compass",
    levelRequired: 14,
    levelTitle: "Nível 14 — Oráculo do IBGE",
    category: "Volume de Questões",
  },
  {
    id: "ach_accuracy_elite",
    title: "Acurácia Cirúrgica (80%)",
    description: "Sustentou taxa geral de acerto igual ou superior a 80% com mais de 200 questões resolvidas.",
    xpReward: 400,
    icon: "Sparkles",
    levelRequired: 14,
    levelTitle: "Nível 14 — Oráculo do IBGE",
    category: "Alta Acurácia",
  },

  // --- NÍVEL 15: GABARITO DE OURO ---
  {
    id: "ach_q_2000",
    title: "Milhar Superado (1.050 Qs)",
    description: "Incríveis 1.050 questões resolvidas! Mais de um milhar de exercícios práticos dominados.",
    xpReward: 600,
    icon: "Medal",
    levelRequired: 15,
    levelTitle: "Nível 15 — Gabarito de Ouro",
    category: "Marco Lendário",
  },
  {
    id: "ach_streak_30",
    title: "Trinta Dias de Glória (30 Dias)",
    description: "Sustentou 30 dias ininterruptos de dedicação diária rumo à posse no IBGE.",
    xpReward: 450,
    icon: "Flame",
    levelRequired: 15,
    levelTitle: "Nível 15 — Gabarito de Ouro",
    category: "Disciplina Lendária",
  },

  // --- NÍVEL 16: PRODÍGIO DOS GABARITOS ---
  {
    id: "ach_q_2400",
    title: "Força Imparável (1.150 Qs)",
    description: "Mais de 1.150 questões! Ritmo acelerado de acertos com retenção mnemônica de alto nível.",
    xpReward: 550,
    icon: "Zap",
    levelRequired: 16,
    levelTitle: "Nível 16 — Prodígio dos Gabaritos",
    category: "Volume de Questões",
  },
  {
    id: "ach_day_50",
    title: "Centurião Diário (50 Qs/dia)",
    description: "Superou 50 questões resolvidas em um único dia épico de maratona!",
    xpReward: 350,
    icon: "Target",
    levelRequired: 16,
    levelTitle: "Nível 16 — Prodígio dos Gabaritos",
    category: "Intensidade Diária",
  },

  // --- NÍVEL 17: SOBERANO DAS BANCAS ---
  {
    id: "ach_q_2800",
    title: "Soberano do Banco (1.220 Qs)",
    description: "1.220 questões superadas. Visão panorâmica profunda de todos os tópicos do concurso.",
    xpReward: 600,
    icon: "BarChart2",
    levelRequired: 17,
    levelTitle: "Nível 17 — Soberano das Bancas",
    category: "Volume de Questões",
  },
  {
    id: "ach_all_subjects_master",
    title: "Polímata do Concurso",
    description: "Acertou dezenas de questões em todas as 4 disciplinas oficiais cadastradas no certame.",
    xpReward: 400,
    icon: "CheckSquare",
    levelRequired: 17,
    levelTitle: "Nível 17 — Soberano das Bancas",
    category: "Domínio Global",
  },

  // --- NÍVEL 18: PRIMEIRO LUGAR GERAL ---
  {
    id: "ach_q_3200",
    title: "Vanguarda de Elite (1.280 Qs)",
    description: "1.280 questões de concurso! Nível de prontidão digno dos primeiros lugares do país.",
    xpReward: 650,
    icon: "Crown",
    levelRequired: 18,
    levelTitle: "Nível 18 — Primeiro Lugar Geral",
    category: "Volume de Questões",
  },
  {
    id: "ach_streak_60",
    title: "Dois Meses de Titã (60 Dias)",
    description: "60 dias seguidos de estudo ininterrupto. Resiliência psicológica e cognitiva de aço.",
    xpReward: 500,
    icon: "Flame",
    levelRequired: 18,
    levelTitle: "Nível 18 — Primeiro Lugar Geral",
    category: "Constância Suprema",
  },

  // --- NÍVEL 19: MÍTICO SERVIDOR APROVADO ---
  {
    id: "ach_q_3600",
    title: "Domínio Enciclopédico (1.320 Qs)",
    description: "1.320 questões superadas! Nível de treino lendário e domínio de praticamente todas as bancas.",
    xpReward: 700,
    icon: "Shield",
    levelRequired: 19,
    levelTitle: "Nível 19 — Mítico Servidor Aprovado",
    category: "Volume de Questões",
  },
  {
    id: "ach_super_sniper",
    title: "Sniper Lendário (85%)",
    description: "Taxa de acertos cirúrgica superior a 85% com histórico massivo de questões resolvidas.",
    xpReward: 500,
    icon: "Sparkles",
    levelRequired: 19,
    levelTitle: "Nível 19 — Mítico Servidor Aprovado",
    category: "Alta Acurácia",
  },

  // --- NÍVEL 20: LENDA IMORTAL DOS CONCURSOS ---
  {
    id: "ach_q_4000",
    title: "Monumento Vivo do Acervo (1.350 Qs)",
    description: "Alcançou o patamar mítico de mais de 1.350 questões resolvidas, dominando a quase totalidade do banco de dados! Preparação irretocável para o IBGE.",
    xpReward: 1000,
    icon: "Crown",
    levelRequired: 20,
    levelTitle: "Nível 20 — Lenda Imortal dos Concursos",
    category: "Patamar Lendário",
  },
  {
    id: "ach_legend_hall",
    title: "Lenda Imortal do IBGE",
    description: "Atingiu o Nível 20 máximo da Trilha de Carreira! O candidato mais bem preparado do concurso.",
    xpReward: 800,
    icon: "Trophy",
    levelRequired: 20,
    levelTitle: "Nível 20 — Lenda Imortal dos Concursos",
    category: "Hall da Fama",
  },
];

interface AchievementsProps {
  unlockedIds: string[];
  xp: number;
  level: number;
}

export default function Achievements({ unlockedIds, xp, level }: AchievementsProps) {
  const [selectedLevelFilter, setSelectedLevelFilter] = useState<number | null>(null);
  const [statusFilter, setStatusFilter] = useState<"all" | "unlocked" | "locked">("all");

  const getIcon = (iconName: string, unlocked: boolean) => {
    const className = `w-5 h-5 sm:w-6 sm:h-6 ${unlocked ? "text-amber-500 dark:text-amber-400" : "text-gray-400 dark:text-gray-500"}`;
    switch (iconName) {
      case "Star":
        return <Star className={className} />;
      case "Award":
        return <Award className={className} />;
      case "Flame":
        return <Flame className={className} />;
      case "Trophy":
        return <Trophy className={className} />;
      case "Zap":
        return <Zap className={className} />;
      case "Target":
        return <Target className={className} />;
      case "BookOpen":
        return <BookOpen className={className} />;
      case "Crown":
        return <Crown className={className} />;
      case "Medal":
        return <Medal className={className} />;
      case "CheckCircle":
        return <CheckCircle className={className} />;
      case "Shield":
        return <Shield className={className} />;
      case "Sparkles":
        return <Sparkles className={className} />;
      case "Compass":
        return <Compass className={className} />;
      case "CheckSquare":
        return <CheckSquare className={className} />;
      case "BarChart2":
        return <BarChart2 className={className} />;
      default:
        return <Award className={className} />;
    }
  };

  const currentLevelXpNeeded = level * 200;
  const progressPercent = Math.min((xp / currentLevelXpNeeded) * 100, 100);

  const currentTier = LEVEL_TIERS.find((t) => t.level === level) || LEVEL_TIERS[LEVEL_TIERS.length - 1];

  const filteredTiers = selectedLevelFilter
    ? LEVEL_TIERS.filter((t) => t.level === selectedLevelFilter)
    : LEVEL_TIERS;

  const totalBadgesCount = ALL_ACHIEVEMENTS.length;
  const unlockedBadgesCount = unlockedIds.length;
  const globalCompletionPercent = Math.round((unlockedBadgesCount / totalBadgesCount) * 100);

  return (
    <div id="achievements-section" className="space-y-6 animate-fade-in">
      {/* Level Card - Unified with Title, Progression & Career Metrics */}
      <div
        id="ach-level-card"
        className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-white via-amber-50/20 to-orange-50/30 border border-amber-200/70 shadow-xs dark:from-gray-850 dark:via-gray-900 dark:to-gray-900 dark:border-gray-800"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-amber-600 to-amber-400 text-white font-black text-2xl sm:text-3xl shadow-md shadow-amber-500/25">
              {level}
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white dark:border-gray-900 flex items-center justify-center text-[10px] text-white">
                ✓
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 font-mono border border-amber-200/60 dark:border-amber-900/40">
                  {currentTier.badgeLabel}
                </span>
                <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">• Nível {level} de 20</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-1">
                {currentTier.title}
              </h2>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-0.5 leading-relaxed max-w-xl">
                {currentTier.description}
              </p>
            </div>
          </div>

          <div className="flex sm:flex-col items-center sm:items-end justify-between border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-100 dark:border-gray-800">
            <span className="text-xs font-mono text-amber-700 dark:text-amber-300 font-bold bg-amber-100/70 dark:bg-amber-950/40 px-3 py-1.5 rounded-xl border border-amber-200/50 dark:border-amber-900/40 shadow-2xs">
              {xp} / {currentLevelXpNeeded} XP
            </span>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Faltam <span className="font-bold text-amber-600 dark:text-amber-400 font-mono">{Math.max(currentLevelXpNeeded - xp, 0)} XP</span> para o Nível {Math.min(level + 1, 20)}
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-1.5">
          <div className="relative w-full h-3.5 bg-gray-100 rounded-full dark:bg-gray-800 overflow-hidden shadow-inner">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-amber-500 via-orange-400 to-amber-400 rounded-full transition-all duration-700 ease-out shadow-xs"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-[11px] text-gray-500 dark:text-gray-400 font-mono flex-wrap gap-2 pt-0.5">
            <span>Progresso do Nível Atual: {Math.round(progressPercent)}%</span>
            <span>Medalhas Conquistadas: <strong className="text-gray-800 dark:text-gray-200 font-bold">{unlockedBadgesCount}</strong> / {totalBadgesCount} ({globalCompletionPercent}%)</span>
          </div>
        </div>

        {/* Career Stats Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-5 pt-4 border-t border-amber-200/40 dark:border-gray-800">
          <div className="bg-white/80 dark:bg-gray-800/80 p-2.5 rounded-xl border border-gray-100 dark:border-gray-700/60 text-center">
            <span className="text-[10px] uppercase font-bold text-gray-400 dark:text-gray-400 block font-mono">Trilha Geral</span>
            <span className="text-xs font-black text-gray-800 dark:text-gray-100">20 Níveis Oficiais</span>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 p-2.5 rounded-xl border border-gray-100 dark:border-gray-700/60 text-center">
            <span className="text-[10px] uppercase font-bold text-gray-400 dark:text-gray-400 block font-mono">Desafios Ativos</span>
            <span className="text-xs font-black text-amber-600 dark:text-amber-400">40 Conquistas</span>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 p-2.5 rounded-xl border border-gray-100 dark:border-gray-700/60 text-center">
            <span className="text-[10px] uppercase font-bold text-gray-400 dark:text-gray-400 block font-mono">Nível Atual</span>
            <span className="text-xs font-black text-emerald-600 dark:text-emerald-400">Nível {level} ✓</span>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 p-2.5 rounded-xl border border-gray-100 dark:border-gray-700/60 text-center">
            <span className="text-[10px] uppercase font-bold text-gray-400 dark:text-gray-400 block font-mono">Meta Suprema</span>
            <span className="text-xs font-black text-indigo-600 dark:text-indigo-400">N20 • Lenda IBGE</span>
          </div>
        </div>
      </div>

      {/* Filter and Roadmap Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-white dark:bg-gray-850 p-3.5 rounded-2xl border border-gray-200 dark:border-gray-700/80 shadow-2xs">
        <div className="flex items-center gap-1.5 flex-wrap">
          <button
            onClick={() => setStatusFilter("all")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
              statusFilter === "all"
                ? "bg-indigo-600 text-white shadow-xs"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"
            }`}
          >
            Todas ({totalBadgesCount})
          </button>
          <button
            onClick={() => setStatusFilter("unlocked")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
              statusFilter === "unlocked"
                ? "bg-emerald-600 text-white shadow-xs"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"
            }`}
          >
            Conquistadas ({unlockedBadgesCount})
          </button>
          <button
            onClick={() => setStatusFilter("locked")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
              statusFilter === "locked"
                ? "bg-amber-600 text-white shadow-xs"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"
            }`}
          >
            A Conquistar ({totalBadgesCount - unlockedBadgesCount})
          </button>
        </div>

        {selectedLevelFilter !== null && (
          <button
            onClick={() => setSelectedLevelFilter(null)}
            className="text-xs text-indigo-600 dark:text-indigo-400 font-bold hover:underline self-start md:self-auto cursor-pointer"
          >
            Limpar Filtro de Nível (Ver todos os 20 níveis)
          </button>
        )}
      </div>

      {/* Level Navigation / 20 Filter Pills */}
      <div id="ach-level-filter-track" className="flex items-center gap-2 overflow-x-auto pb-2.5 pt-0.5 scrollbar-thin">
        <button
          onClick={() => setSelectedLevelFilter(null)}
          className={`px-3.5 h-9 rounded-xl text-xs font-bold transition-colors whitespace-nowrap cursor-pointer shrink-0 ${
            selectedLevelFilter === null
              ? "bg-amber-500 text-white shadow-xs"
              : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          }`}
        >
          Trilha Completa (20 Níveis)
        </button>
        {LEVEL_TIERS.map((tier) => {
          const isSelected = selectedLevelFilter === tier.level;
          const isCurrentOrPassed = level >= tier.level;
          return (
            <button
              key={tier.level}
              onClick={() => setSelectedLevelFilter(tier.level)}
              className={`flex items-center gap-1.5 px-3 h-9 rounded-xl text-xs font-bold transition-colors whitespace-nowrap cursor-pointer shrink-0 ${
                isSelected
                  ? "bg-amber-500 text-white shadow-xs"
                  : isCurrentOrPassed
                  ? "bg-white dark:bg-gray-800 text-amber-700 dark:text-amber-300 border border-amber-300/80 dark:border-amber-800/60 hover:bg-amber-50 dark:hover:bg-amber-950/50 dark:hover:text-amber-200"
                  : "bg-white dark:bg-gray-800 text-gray-400 dark:text-gray-400 border border-gray-200 dark:border-gray-700 opacity-80 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-200"
              }`}
            >
              <span>Nível {tier.level}</span>
              {isCurrentOrPassed && <span className="text-[10px] text-emerald-500 font-bold">✓</span>}
            </button>
          );
        })}
      </div>

      {/* Tiers Roadmap & Badges List */}
      <div className="space-y-6">
        {filteredTiers.map((tier) => {
          const allTierAchievements = ALL_ACHIEVEMENTS.filter((a) => a.levelRequired === tier.level);
          const isTierReached = level >= tier.level;
          const tierUnlockedCount = allTierAchievements.filter((a) => unlockedIds.includes(a.id)).length;
          const isTierCompleted = tierUnlockedCount === allTierAchievements.length && allTierAchievements.length > 0;

          const tierAchievements = allTierAchievements.filter((a) => {
            const isUnlocked = unlockedIds.includes(a.id);
            if (statusFilter === "unlocked") return isUnlocked;
            if (statusFilter === "locked") return !isUnlocked;
            return true;
          });

          if (statusFilter !== "all" && tierAchievements.length === 0) {
            return null;
          }

          return (
            <div
              key={tier.level}
              id={`tier-block-level-${tier.level}`}
              className={`p-5 sm:p-6 rounded-3xl border transition-all duration-300 ${
                isTierReached
                  ? `${tier.accentColor.bg} ${tier.accentColor.border} shadow-2xs`
                  : "bg-gray-50/40 border-gray-200/60 dark:bg-gray-850/40 dark:border-gray-800 opacity-85"
              }`}
            >
              {/* Tier Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-gray-200/60 dark:border-gray-700/60">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm ${
                      isTierReached
                        ? "bg-amber-500 text-white shadow-xs"
                        : "bg-gray-200 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
                    }`}
                  >
                    N{tier.level}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-extrabold text-base text-gray-900 dark:text-white">
                        {tier.title}
                      </h3>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${tier.accentColor.badge}`}>
                        {tier.badgeLabel}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {tier.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto">
                  {isTierCompleted ? (
                    <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-xl border border-emerald-200/60 dark:border-emerald-900/40">
                      <CheckCircle className="w-3.5 h-3.5" /> Nível 100% Concluído
                    </span>
                  ) : isTierReached ? (
                    <span className="flex items-center gap-1 text-xs font-bold text-amber-700 dark:text-amber-300 bg-amber-100/70 dark:bg-amber-950/40 px-3 py-1 rounded-xl">
                      <Sparkles className="w-3.5 h-3.5" /> Nível Ativo ({tierUnlockedCount}/{tierAchievements.length} medalhas)
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs font-bold text-gray-500 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-xl">
                      <Lock className="w-3 h-3" /> Requer Nível {tier.level}
                    </span>
                  )}
                </div>
              </div>

              {/* Badges in this Level */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tierAchievements.map((ach) => {
                  const isUnlocked = unlockedIds.includes(ach.id);

                  return (
                    <div
                      key={ach.id}
                      id={`badge-${ach.id}`}
                      className={`flex gap-3.5 sm:gap-4 p-4 sm:p-5 rounded-2xl border transition-all duration-300 ${
                        isUnlocked
                          ? "bg-white dark:bg-gray-800 border-amber-300/80 dark:border-amber-700/60 shadow-2xs"
                          : isTierReached
                          ? "bg-white/80 dark:bg-gray-800/60 border-gray-200 dark:border-gray-700/80"
                          : "bg-gray-100/60 dark:bg-gray-850/60 border-dashed border-gray-200 dark:border-gray-800 opacity-70"
                      }`}
                    >
                      {/* Icon */}
                      <div
                        className={`shrink-0 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl transition-all ${
                          isUnlocked
                            ? "bg-amber-100 text-amber-600 dark:bg-amber-950/60 dark:text-amber-300 ring-2 ring-amber-400/40"
                            : isTierReached
                            ? "bg-indigo-50 text-indigo-500 dark:bg-indigo-950/30 dark:text-indigo-400"
                            : "bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500"
                        }`}
                      >
                        {getIcon(ach.icon, isUnlocked)}
                      </div>

                      {/* Content */}
                      <div className="flex-grow flex flex-col justify-between min-w-0">
                        <div>
                          <div className="flex items-center justify-between gap-1.5 mb-1">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 font-mono">
                              {ach.category}
                            </span>
                            {isUnlocked ? (
                              <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded-md">
                                <CheckCircle className="w-3 h-3" /> Desbloqueada
                              </span>
                            ) : isTierReached ? (
                              <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/30 px-2 py-0.5 rounded-md">
                                Em andamento
                              </span>
                            ) : (
                              <span className="flex items-center gap-1 text-[10px] font-semibold text-gray-400 dark:text-gray-500">
                                <Lock className="w-3 h-3" /> Nível {ach.levelRequired}
                              </span>
                            )}
                          </div>

                          <h4
                            className={`font-bold text-sm truncate ${
                              isUnlocked
                                ? "text-gray-900 dark:text-amber-200"
                                : "text-gray-700 dark:text-gray-300"
                            }`}
                          >
                            {ach.title}
                          </h4>

                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                            {ach.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100 dark:border-gray-800">
                          <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 font-mono bg-amber-50 dark:bg-amber-950/30 px-2 py-0.5 rounded border border-amber-100 dark:border-amber-900/40">
                            +{ach.xpReward} XP para o Nível
                          </span>

                          <span className="text-[10px] font-semibold text-gray-400 dark:text-gray-500">
                            {ach.levelTitle}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
