import React from "react";
import { Award, CheckCircle, Lock, Trophy, Zap, Star } from "lucide-react";
import { Achievement } from "../types";

export const ALL_ACHIEVEMENTS: Achievement[] = [
  {
    id: "ach_welcome",
    title: "Primeiro Passo",
    description: "Respondeu sua primeira questão no caderno.",
    xpReward: 50,
    icon: "Star",
  },
  {
    id: "ach_perfect",
    title: "Gênio da Ortografia",
    description: "Acertou 100% das questões em uma sessão ou simulado.",
    xpReward: 150,
    icon: "Award",
  },
  {
    id: "ach_streak",
    title: "Disciplina de Bronze",
    description: "Atingiu uma sequência de 3 dias seguidos de estudo.",
    xpReward: 100,
    icon: "Flame",
  },
  {
    id: "ach_collector",
    title: "Colecionador de Questões",
    description: "Respondeu mais de 10 questões no total.",
    xpReward: 120,
    icon: "Trophy",
  },
  {
    id: "ach_ibge",
    title: "Rumo ao Censo (IBGE)",
    description: "Respondeu com sucesso a uma prévia de questões para AOR do IBGE.",
    xpReward: 80,
    icon: "Zap",
  },
  {
    id: "ach_custom",
    title: "Expandindo Horizontes",
    description: "Cadastrou uma nova questão personalizada no sistema.",
    xpReward: 70,
    icon: "BookOpen",
  },
];

interface AchievementsProps {
  unlockedIds: string[];
  xp: number;
  level: number;
}

export default function Achievements({ unlockedIds, xp, level }: AchievementsProps) {
  const getIcon = (iconName: string, unlocked: boolean) => {
    const className = `w-6 h-6 ${unlocked ? "text-amber-500" : "text-gray-400"}`;
    switch (iconName) {
      case "Star":
        return <Star className={className} />;
      case "Award":
        return <Award className={className} />;
      case "Flame":
        return <span className="text-xl">🔥</span>;
      case "Trophy":
        return <Trophy className={className} />;
      case "Zap":
        return <Zap className={className} />;
      default:
        return <Award className={className} />;
    }
  };

  const currentLevelXpNeeded = level * 200;
  const progressPercent = Math.min((xp / currentLevelXpNeeded) * 100, 100);

  return (
    <div id="achievements-section" className="space-y-6">
      {/* Level Card */}
      <div id="ach-level-card" className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Progresso de Nível</h3>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-50 text-amber-500 dark:bg-amber-900/30 dark:text-amber-400 font-bold text-xl">
              {level}
            </div>
            <div>
              <p className="font-semibold text-gray-700 dark:text-gray-200">Estudante Nível {level}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Total de XP acumulado: {xp} XP</p>
            </div>
          </div>
          <span className="text-xs font-mono text-amber-500 font-semibold bg-amber-50 px-2.5 py-1 rounded-full dark:bg-amber-900/20 dark:text-amber-400">
            {xp} / {currentLevelXpNeeded} XP
          </span>
        </div>

        <div className="relative w-full h-3.5 bg-gray-100 rounded-full dark:bg-gray-700 overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <p className="text-right text-xs text-gray-400 mt-1 dark:text-gray-500">
          Faltam {Math.max(currentLevelXpNeeded - xp, 0)} XP para o nível {level + 1}
        </p>
      </div>

      {/* Grid of badges */}
      <div id="ach-badges-container">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Conquistas e Medalhas</h3>
          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
            Desbloqueadas: {unlockedIds.length} de {ALL_ACHIEVEMENTS.length}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ALL_ACHIEVEMENTS.map((ach) => {
            const isUnlocked = unlockedIds.includes(ach.id);
            return (
              <div
                key={ach.id}
                id={`badge-${ach.id}`}
                className={`flex gap-4 p-5 rounded-2xl border transition-all duration-300 ${
                  isUnlocked
                    ? "bg-amber-50/40 border-amber-200/60 dark:bg-amber-900/10 dark:border-amber-900/30"
                    : "bg-gray-50/50 border-gray-100 dark:bg-gray-850 dark:border-gray-800 opacity-70"
                }`}
              >
                <div
                  className={`flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
                    isUnlocked
                      ? "bg-amber-100 text-amber-600 dark:bg-amber-950/40 dark:text-amber-300"
                      : "bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500"
                  }`}
                >
                  {getIcon(ach.icon, isUnlocked)}
                </div>

                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className={`font-semibold text-sm ${isUnlocked ? "text-gray-800 dark:text-amber-300" : "text-gray-500 dark:text-gray-400"}`}>
                        {ach.title}
                      </h4>
                      {isUnlocked ? (
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <Lock className="w-3.5 h-3.5 text-gray-400" />
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-1 dark:text-gray-400 leading-relaxed">
                      {ach.description}
                    </p>
                  </div>

                  <span className="flex items-center gap-1 text-[10px] font-semibold text-amber-600 dark:text-amber-400/80 font-mono mt-2 self-start bg-white dark:bg-gray-800/50 px-2 py-0.5 rounded border border-amber-100 dark:border-amber-950/40">
                    +{ach.xpReward} XP
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
