import React from "react";
import { Flame, Trophy, Play, CheckCircle2, TrendingUp, Calendar, BookOpen, AlertCircle } from "lucide-react";
import { Question, UserHistory } from "../types";

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
  const totalQuestions = questions.length;
  const totalAnswered = history.length;
  const correctCount = history.filter((h) => h.isCorrect).length;
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

  return (
    <div id="home-dashboard-widgets-container" className="space-y-6">
      {/* Motivational Banner */}
      <div id="dashboard-banner" className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-sm relative overflow-hidden flex flex-col md:flex-row md:items-center md:justify-between gap-4 animate-fade-in">
        <div className="space-y-1 z-10">
          <h2 className="text-xl md:text-2xl font-black tracking-tight font-sans">Aprovação AOR Master IBGE</h2>
          <p className="text-xs text-blue-100 max-w-lg leading-relaxed">
            Prepare-se para o cargo de Agente Operacional Regional (AOR) com questões comentadas das 4 disciplinas oficiais do edital!
          </p>
        </div>
        <div className="flex gap-3 z-10">
          <button
            onClick={() => onSetTab("quiz")}
            className="flex items-center gap-1.5 px-5 py-3 bg-white text-blue-700 font-extrabold rounded-xl text-xs hover:bg-blue-50 shadow-md hover:shadow-lg transition-all"
          >
            <Play className="w-3.5 h-3.5 fill-blue-700 text-blue-700" /> Praticar Agora
          </button>
        </div>
        <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-white/5 rounded-full"></div>
        <div className="absolute right-20 -top-10 w-32 h-32 bg-white/5 rounded-full"></div>
      </div>

      {/* Grid of Main Dashboard Widgets */}
      <div id="dashboard-widgets-grid" className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Widget 1: Streak / Calendar (Col 1-5) */}
        <div id="widget-streak" className="md:col-span-5 p-6 rounded-3xl bg-white border border-slate-200 shadow-sm dark:bg-slate-900 dark:border-slate-800 flex flex-col justify-between space-y-4">
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
        <div id="widget-level-meter" className="md:col-span-7 p-6 rounded-3xl bg-white border border-slate-200 shadow-sm dark:bg-slate-900 dark:border-slate-800 flex flex-col justify-between space-y-4">
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
        <div id="metric-widget-rate" className="p-6 rounded-3xl bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-sm flex items-center gap-4 hover:shadow-md transition">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/25 flex items-center justify-center text-emerald-600">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 font-sans">Aproveitamento Regular</h4>
            <p className="text-2xl font-black font-mono mt-1 text-slate-800 dark:text-slate-100">{accuracy}% <span className="text-xs font-normal text-slate-400">corretas</span></p>
          </div>
        </div>

        {/* Total Questions Covered */}
        <div id="metric-widget-questions" className="p-6 rounded-3xl bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-sm flex items-center gap-4 hover:shadow-md transition">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/20 flex items-center justify-center text-blue-600">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 font-sans">Filtro Sem Repetições</h4>
            <p className="text-2xl font-black font-mono mt-1 text-slate-800 dark:text-slate-100">{correctCount} <span className="text-xs font-normal text-slate-400">de {totalQuestions} dominadas</span></p>
          </div>
        </div>

        {/* Medalhas widget */}
        <div id="metric-widget-achievements" className="p-6 rounded-3xl bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-sm flex items-center gap-4 hover:shadow-md transition">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-955/20 flex items-center justify-center text-amber-500">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 font-sans">Medalhas Desbloqueadas</h4>
            <p className="text-2xl font-black font-mono mt-1 text-slate-800 dark:text-slate-100">{unlockedBadges.length} <span className="text-xs font-normal text-gray-400">conquistas</span></p>
          </div>
        </div>
      </div>
      {/* Quick Launch Card */}
      <div id="quick-simulados-row" className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm dark:bg-slate-900 dark:border-slate-800">
        <h3 className="text-sm font-bold text-slate-700 dark:text-slate-350 mb-4 pb-2 border-b border-slate-150 dark:border-slate-800 font-sans">Acesso Rápido a Tópicos de Concursos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {(() => {
            const uniqueAssuntos = Array.from(new Set(questions.map((q) => q.assunto).filter(Boolean))).sort();
            
            const getTopicMetadata = (assunto: string) => {
              const nameLower = assunto.toLowerCase();
              if (nameLower.includes("português") || nameLower.includes("portuguesa")) {
                return {
                  emoji: "📚",
                  title: assunto,
                  color: "hover:border-blue-400 hover:bg-blue-50/5 dark:hover:border-blue-900/40 dark:hover:bg-blue-950/10",
                  description: "Foco em compreensão de texto, regência, crase, concordância, ortografia oficial e acentuação gráfica."
                };
              }
              if (nameLower.includes("administra") || nameLower.includes("gestão")) {
                return {
                  emoji: "💼",
                  title: assunto,
                  color: "hover:border-amber-400 hover:bg-amber-50/5 dark:hover:border-amber-900/40 dark:hover:bg-amber-955/10",
                  description: "Estude funções administrativas, PDCA, processos decisórios, liderança democrática, logística e ética pública."
                };
              }
              if (nameLower.includes("informát") || nameLower.includes("computa") || nameLower.includes("tecnolog") || nameLower.includes("exata")) {
                return {
                  emoji: "⚡",
                  title: assunto,
                  color: "hover:border-emerald-400 hover:bg-emerald-50/5 dark:hover:border-emerald-900/40 dark:hover:bg-emerald-950/10",
                  description: "Estruturas lógicas de argumentação mais recursos móveis Android e fórmulas de planilhas eletrônicas."
                };
              }
              if (nameLower.includes("lógic") || nameLower.includes("matemát") || nameLower.includes("quantitativo")) {
                return {
                  emoji: "🧠",
                  title: assunto,
                  color: "hover:border-purple-400 hover:bg-purple-50/5 dark:hover:border-purple-900/40 dark:hover:bg-purple-950/10",
                  description: "Lógica proposicional, estruturas de argumentação, diagramas lógicos, sequências e raciocínio lógico-matemático."
                };
              }
              return {
                emoji: "📝",
                title: assunto,
                color: "hover:border-indigo-400 hover:bg-indigo-50/5 dark:hover:border-indigo-900/40 dark:hover:bg-indigo-950/10",
                description: `Pratique questões e teste seus conhecimentos em "${assunto}" com o caderno dinâmico.`
              };
            };

            return uniqueAssuntos.map((assunto) => {
              const meta = getTopicMetadata(assunto);
              return (
                <button
                  key={assunto}
                  onClick={() => onSelectQuickTopic ? onSelectQuickTopic("Todos", assunto) : onSetTab("quiz")}
                  className={`p-6 rounded-3xl border border-slate-200 text-left transition-all duration-300 cursor-pointer flex flex-col justify-between h-full dark:border-slate-800 ${meta.color}`}
                >
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm flex items-center gap-1.5 mb-1.5 font-sans">
                      {meta.emoji} {meta.title}
                    </h4>
                    <p className="text-xs text-slate-400 dark:text-slate-500 leading-normal line-clamp-3">{meta.description}</p>
                  </div>
                  <div className="mt-4 text-[10px] font-bold text-indigo-500 dark:text-indigo-400 flex items-center gap-1">
                    Estudar agora ➜
                  </div>
                </button>
              );
            });
          })()}
        </div>
      </div>
    </div>
  );
}
