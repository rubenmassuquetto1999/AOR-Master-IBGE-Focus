import React, { useState } from "react";
import { Flame, Trophy, Play, CheckCircle2, TrendingUp, BookOpen, Layers, Sparkles, ChevronRight, Search, ArrowRight } from "lucide-react";
import { Question, UserHistory } from "../types";
import { DISCIPLINE_TOPICS, getDisciplineForTopic } from "../data/disciplinesData";

interface DashboardProps {
  history: UserHistory[];
  questions: Question[];
  streak: number;
  level: number;
  xp: number;
  unlockedBadges: string[];
  dayCompletedQuestionsCount: number;
  dailyGoal: number;
  onSetTab: (tab: string) => void;
  onSelectQuickTopic?: (banca: string, assunto: string) => void;
}

interface DisciplineCardData {
  id: string;
  name: string;
  emoji: string;
  colorBorder: string;
  badgeBg: string;
  textColor: string;
  desc: string;
  filterKey: string;
  matches: (q: Question) => boolean;
}

const DISCIPLINES: DisciplineCardData[] = [
  {
    id: "portugues",
    name: "Língua Portuguesa",
    emoji: "📚",
    colorBorder: "hover:border-blue-500 hover:shadow-blue-500/10",
    badgeBg: "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300",
    textColor: "text-blue-600 dark:text-blue-400",
    desc: "Ortografia, classes de palavras, verbos, termos da oração, concordância, crase, pontuação e interpretação.",
    filterKey: "Língua Portuguesa",
    matches: (q) => getDisciplineForTopic(q.assunto) === "Língua Portuguesa",
  },
  {
    id: "adm",
    name: "Noções de Administração",
    emoji: "💼",
    colorBorder: "hover:border-amber-500 hover:shadow-amber-500/10",
    badgeBg: "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300",
    textColor: "text-amber-600 dark:text-amber-400",
    desc: "Papéis do administrador, processo organizacional, liderança, motivação, equipes, comunicação e qualidade.",
    filterKey: "Noções de Administração",
    matches: (q) => getDisciplineForTopic(q.assunto) === "Noções de Administração",
  },
  {
    id: "info",
    name: "Noções Básicas de Informática",
    emoji: "⚡",
    colorBorder: "hover:border-emerald-500 hover:shadow-emerald-500/10",
    badgeBg: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300",
    textColor: "text-emerald-600 dark:text-emerald-400",
    desc: "Hardware, software, Windows 11, gerenciamento de arquivos e pastas, Android e Microsoft Excel 365.",
    filterKey: "Noções Básicas de Informática",
    matches: (q) => getDisciplineForTopic(q.assunto) === "Noções Básicas de Informática",
  },
  {
    id: "rlm",
    name: "Raciocínio Lógico Quantitativo",
    emoji: "🧠",
    colorBorder: "hover:border-purple-500 hover:shadow-purple-500/10",
    badgeBg: "bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300",
    textColor: "text-purple-600 dark:text-purple-400",
    desc: "Conjuntos, equações, porcentagem, geometria, progressões, proposições, tabela verdade, equivalências e argumentos.",
    filterKey: "Raciocínio Lógico Quantitativo",
    matches: (q) => getDisciplineForTopic(q.assunto) === "Raciocínio Lógico Quantitativo",
  },
];

// Highlighted study topics strictly from the official lists
const FEATURED_TOPICS = [
  { name: "Questões de Ortografia", emoji: "📝", category: "Língua Portuguesa" },
  { name: "Questões de Regência e Crase", emoji: "📝", category: "Língua Portuguesa" },
  { name: "Questões de Classes de Palavras", emoji: "📝", category: "Língua Portuguesa" },
  { name: "Administração| Gestão de Qualidade - Parte XII", emoji: "💼", category: "Noções de Administração" },
  { name: "Administração| Liderança - Parte V", emoji: "💼", category: "Noções de Administração" },
  { name: "Questões de Excel Microsoft 365", emoji: "⚡", category: "Noções Básicas de Informática" },
  { name: "Questões de Sistema Operacional Windows 11", emoji: "⚡", category: "Noções Básicas de Informática" },
  { name: "Tabela Verdade | Parte I", emoji: "🧠", category: "Raciocínio Lógico Quantitativo" },
  { name: "Equivalência e Negação | Parte I", emoji: "🧠", category: "Raciocínio Lógico Quantitativo" },
  { name: "Questões de Associação Lógica | Parte I", emoji: "🧠", category: "Raciocínio Lógico Quantitativo" },
];

export default function Dashboard({
  history,
  questions,
  streak,
  level,
  xp,
  unlockedBadges,
  dayCompletedQuestionsCount,
  dailyGoal,
  onSetTab,
  onSelectQuickTopic,
}: DashboardProps) {
  const [topicSearch, setTopicSearch] = useState("");
  const totalQuestions = questions.length;
  const totalAnswered = history.length;
  const correctCount = history.filter((h) => h.isCorrect).length;
  const masteredQuestionsCount = new Set(history.filter((h) => h.isCorrect).map((h) => h.questionId)).size;
  const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

  // Streak days calculation
  const getDayLetter = (offset: number) => {
    const days = ["D", "S", "T", "Q", "Q", "S", "S"];
    const d = new Date();
    d.setDate(d.getDate() + offset);
    return days[d.getDay()];
  };

  const getWeekDays = () => {
    return [-3, -2, -1, 0, 1, 2, 3].map((os) => {
      const active = os === 0;

      let completed = false;
      if (os === 0) {
        completed = dayCompletedQuestionsCount >= dailyGoal;
      } else if (os < 0) {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + os);
        const targetStr = targetDate.toISOString().slice(0, 10);

        const countForDay = history.filter((h) => {
          const histDateStr = new Date(h.answeredAt).toISOString().slice(0, 10);
          return histDateStr === targetStr;
        }).length;

        completed = countForDay >= dailyGoal && countForDay > 0;
      }

      return {
        letter: getDayLetter(os),
        active,
        completed,
      };
    });
  };

  const handleDisciplineClick = (disc: DisciplineCardData) => {
    if (onSelectQuickTopic) {
      onSelectQuickTopic("Todos", disc.filterKey);
    } else {
      onSetTab("quiz");
    }
  };

  const handleTopicClick = (topicName: string) => {
    if (onSelectQuickTopic) {
      onSelectQuickTopic("Todos", topicName);
    } else {
      onSetTab("quiz");
    }
  };

  // Distinct cleaned subtopics for dynamic selection
  const allSubtopics = Array.from(new Set(questions.map((q) => q.assunto).filter(Boolean))).sort();
  const filteredSubtopics = topicSearch.trim()
    ? allSubtopics.filter((t) => t.toLowerCase().includes(topicSearch.toLowerCase().trim()))
    : [];

  return (
    <div id="home-dashboard-widgets-container" className="space-y-6">
      {/* Motivational Banner */}
      <div
        id="dashboard-banner"
        className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-sm relative overflow-hidden flex flex-col md:flex-row md:items-center md:justify-between gap-4 animate-fade-in"
      >
        <div className="space-y-1 z-10">
          <h2 className="text-xl md:text-2xl font-black tracking-tight font-sans">Aprovação AOR Master IBGE</h2>
          <p className="text-xs text-blue-100 max-w-lg leading-relaxed">
            Prepare-se para o cargo de Agente Operacional Regional (AOR) com {totalQuestions.toLocaleString("pt-BR")} questões comentadas das 4 disciplinas oficiais do edital!
          </p>
        </div>
        <div className="flex gap-3 z-10">
          <button
            onClick={() => onSetTab("quiz")}
            className="flex items-center gap-1.5 px-5 py-3 bg-white text-blue-700 font-extrabold rounded-xl text-xs hover:bg-blue-50 shadow-md hover:shadow-lg transition-all"
          >
            <Play className="w-3.5 h-3.5 fill-blue-700 text-blue-700" /> Iniciar Simulado Completo
          </button>
        </div>
        <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-white/5 rounded-full"></div>
        <div className="absolute right-20 -top-10 w-32 h-32 bg-white/5 rounded-full"></div>
      </div>

      {/* Grid of Main Dashboard Widgets */}
      <div id="dashboard-widgets-grid" className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Widget 1: Streak / Calendar (Col 1-5) */}
        <div
          id="widget-streak"
          className="md:col-span-5 p-6 rounded-3xl bg-white border border-slate-200 shadow-sm dark:bg-slate-900 dark:border-slate-800 flex flex-col justify-between space-y-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-orange-500 fill-orange-500 animate-pulse" />
              <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm font-sans">Ofensiva de Estudos</h3>
            </div>
            <span className="text-xs font-mono font-bold text-orange-500 bg-orange-50 dark:bg-orange-950/20 px-2.5 py-0.5 rounded-full">
              {streak} {streak === 1 ? "Dia" : "Dias"} Seguidos
            </span>
          </div>

          <div className="flex justify-between items-center text-center px-1">
            {getWeekDays().map((day, idx) => (
              <div key={idx} className="space-y-1.5 flex flex-col items-center font-sans">
                <span className={`text-[10px] font-bold ${day.active ? "text-blue-600 dark:text-blue-400" : "text-slate-400"}`}>
                  {day.letter}
                </span>
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold font-mono transition-all ${
                    day.completed
                      ? "bg-orange-500 text-white shadow-sm"
                      : "bg-slate-50 text-slate-400 border border-slate-100 dark:bg-slate-850 dark:text-slate-500 dark:border-slate-800"
                  } ${day.active && !day.completed ? "ring-2 ring-blue-500" : ""}`}
                >
                  {day.completed ? "🔥" : "✓"}
                </div>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-slate-400 dark:text-slate-500 leading-normal">
            {dayCompletedQuestionsCount >= dailyGoal
              ? "🎉 Meta diária concluída! Continue amanhã para manter seu progresso."
              : `🎯 Resolva mais ${dailyGoal - dayCompletedQuestionsCount} questões hoje para garantir sua ofensiva diária.`}
          </p>
        </div>

        {/* Widget 2: Level Progress (Col 6-12) */}
        <div
          id="widget-level-meter"
          className="md:col-span-7 p-6 rounded-3xl bg-white border border-slate-200 shadow-sm dark:bg-slate-900 dark:border-slate-800 flex flex-col justify-between space-y-4"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-400 dark:text-slate-500 text-xs uppercase tracking-wider font-sans">Progresso Geral</h3>
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 font-mono">Nível {level}</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-500 dark:bg-amber-955/20 flex items-center justify-center flex-shrink-0 font-extrabold text-2xl">
              🏆
            </div>
            <div className="flex-grow space-y-1">
              <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300 font-sans">
                <span>Total Ganhos: {xp} XP</span>
                <span>Alvo: {level * 200} XP</span>
              </div>
              <div className="relative w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-blue-600 rounded-full transition-all duration-300 shadow-[0_0_8px_rgba(37,99,235,0.3)]"
                  style={{ width: `${Math.min((xp / (level * 200)) * 100, 100)}%` }}
                />
              </div>
            </div>
          </div>

          <p className="text-[11px] text-slate-400 dark:text-slate-550 leading-normal">
            Cada resposta certa rende +15 de XP. Gabaritar sessões garante bônus adicionais de 50 de XP e desbloqueia medalhas raras!
          </p>
        </div>
      </div>

      {/* Secondary Metrics row */}
      <div id="secondary-metrics-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Metric Quick Stats */}
        <div
          id="metric-widget-rate"
          className="p-6 rounded-3xl bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-sm flex items-center gap-4 hover:shadow-md transition"
        >
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/25 flex items-center justify-center text-emerald-600">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 font-sans">Aproveitamento Regular</h4>
            <p className="text-2xl font-black font-mono mt-1 text-slate-800 dark:text-slate-100">
              {accuracy}% <span className="text-xs font-normal text-slate-400">corretas</span>
            </p>
          </div>
        </div>

        {/* Total Questions Covered */}
        <div
          id="metric-widget-questions"
          className="p-6 rounded-3xl bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-sm flex items-center gap-4 hover:shadow-md transition"
        >
          <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/20 flex items-center justify-center text-blue-600">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 font-sans">Filtro Sem Repetições</h4>
            <p className="text-2xl font-black font-mono mt-1 text-slate-800 dark:text-slate-100">
              {masteredQuestionsCount} <span className="text-xs font-normal text-slate-400">de {totalQuestions} dominadas</span>
            </p>
          </div>
        </div>

        {/* Medalhas widget */}
        <div
          id="metric-widget-achievements"
          className="p-6 rounded-3xl bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-sm flex items-center gap-4 hover:shadow-md transition"
        >
          <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-955/20 flex items-center justify-center text-amber-500">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 font-sans">Medalhas Desbloqueadas</h4>
            <p className="text-2xl font-black font-mono mt-1 text-slate-800 dark:text-slate-100">
              {unlockedBadges.length} <span className="text-xs font-normal text-gray-400">conquistas</span>
            </p>
          </div>
        </div>
      </div>

      {/* Disciplines of the Official Edital */}
      <div id="quick-disciplines-section" className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm dark:bg-slate-900 dark:border-slate-800 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 font-sans flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" /> Acesso Rápido por Disciplina do Edital
            </h3>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
              Escolha uma disciplina para treinar com foco total ou selecione tópicos específicos abaixo.
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full self-start sm:self-auto">
            {totalQuestions} Questões Disponíveis
          </span>
        </div>

        {/* 5 Discipline Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DISCIPLINES.map((disc) => {
            const discQuestions = questions.filter(disc.matches);
            const discMastered = new Set(
              history
                .filter((h) => h.isCorrect)
                .map((h) => h.questionId)
                .filter((id) => discQuestions.some((dq) => dq.id === id))
            ).size;
            const pct = discQuestions.length > 0 ? Math.round((discMastered / discQuestions.length) * 100) : 0;

            return (
              <div
                key={disc.id}
                onClick={() => handleDisciplineClick(disc)}
                className={`p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/40 hover:bg-white dark:hover:bg-slate-800/80 transition-all duration-200 cursor-pointer flex flex-col justify-between shadow-xs hover:shadow-md ${disc.colorBorder}`}
              >
                <div className="space-y-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-2xl">{disc.emoji}</span>
                    <span className={`text-[10px] font-bold font-mono px-2 py-0.5 rounded-full ${disc.badgeBg}`}>
                      {discQuestions.length} questões
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm font-sans">{disc.name}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed line-clamp-2">{disc.desc}</p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <span className="font-bold text-slate-700 dark:text-slate-300 font-mono">{discMastered}</span>
                    <span>/ {discQuestions.length} ({pct}%)</span>
                  </div>
                  <button className={`text-xs font-bold flex items-center gap-1 ${disc.textColor} hover:underline`}>
                    Praticar <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured High-Yield Study Topics */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Tópicos e Assuntos em Destaque
          </h4>
          <div className="flex flex-wrap gap-2">
            {FEATURED_TOPICS.map((topic) => (
              <button
                key={topic.name}
                onClick={() => handleTopicClick(topic.name)}
                className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-750 bg-white dark:bg-slate-800 hover:border-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 text-xs text-slate-700 dark:text-slate-200 transition-all flex items-center gap-1.5 font-medium shadow-2xs"
              >
                <span>{topic.emoji}</span>
                <span>{topic.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Topic Search Filter */}
        <div className="pt-2">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={topicSearch}
              onChange={(e) => setTopicSearch(e.target.value)}
              placeholder="Buscar tópico específico do edital (ex: Crase, Excel, PDCA, Silogismos, 8.112...)"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-750 bg-slate-50 dark:bg-slate-850 text-xs text-slate-800 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {filteredSubtopics.length > 0 && (
            <div className="mt-2 p-2 max-h-48 overflow-y-auto rounded-xl border border-slate-200 dark:border-slate-750 bg-white dark:bg-slate-850 shadow-md space-y-1">
              {filteredSubtopics.slice(0, 15).map((subtopic) => (
                <button
                  key={subtopic}
                  onClick={() => {
                    handleTopicClick(subtopic);
                    setTopicSearch("");
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-600 transition flex items-center justify-between"
                >
                  <span className="truncate">{subtopic}</span>
                  <span className="text-[10px] text-blue-500 font-bold shrink-0 ml-2">Estudar ➜</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
