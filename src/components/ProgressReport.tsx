import React, { useState } from "react";
import { ResponsiveContainer, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { Download, Printer, TrendingUp, BarChart2, History, Award, AlertCircle, Trash2, ExternalLink, AlertTriangle, X } from "lucide-react";
import { Question, UserHistory } from "../types";

interface ProgressReportProps {
  history: UserHistory[];
  questions: Question[];
  onResetData?: () => void;
  onAlert?: (msg: string, title?: string) => void;
}

export default function ProgressReport({ history, questions, onResetData, onAlert }: ProgressReportProps) {
  // 1. Calculate Metrics
  const totalAnswered = history.length;
  const correctHistory = history.filter((h) => h.isCorrect);
  const totalCorrect = correctHistory.length;
  const totalIncorrect = totalAnswered - totalCorrect;
  const accuracyRate = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  // 2. Performance by Subject / Topic (Assunto)
  const subjectMetrics: { [key: string]: { correct: number; total: number } } = {};
  history.forEach((hist) => {
    const question = questions.find((q) => q.id === hist.questionId);
    if (question) {
      const s = question.assunto;
      if (!subjectMetrics[s]) {
        subjectMetrics[s] = { correct: 0, total: 0 };
      }
      subjectMetrics[s].total += 1;
      if (hist.isCorrect) {
        subjectMetrics[s].correct += 1;
      }
    }
  });

  const subjectChartData = Object.keys(subjectMetrics).map((subj) => ({
    name: subj,
    "Acertos (%)": Math.round((subjectMetrics[subj].correct / subjectMetrics[subj].total) * 100),
    Total: subjectMetrics[subj].total,
  }));

  // 3. Performance by Banca
  const bancaMetrics: { [key: string]: { correct: number; total: number } } = {};
  history.forEach((hist) => {
    const question = questions.find((q) => q.id === hist.questionId);
    if (question) {
      const b = question.banca;
      if (!bancaMetrics[b]) {
        bancaMetrics[b] = { correct: 0, total: 0 };
      }
      bancaMetrics[b].total += 1;
      if (hist.isCorrect) {
        bancaMetrics[b].correct += 1;
      }
    }
  });

  const bancaChartData = Object.keys(bancaMetrics).map((b) => ({
    name: b,
    Acertos: bancaMetrics[b].correct,
    Erros: bancaMetrics[b].total - bancaMetrics[b].correct,
    Total: bancaMetrics[b].total,
  }));

  // 4. Over Time Progress Line (Last 7 Sessions/Answers)
  const lastAnswersData = history
    .slice(-10)
    .map((hist, index) => {
      const correctSoFar = history.slice(0, history.indexOf(hist) + 1).filter((h) => h.isCorrect).length;
      const totalSoFar = history.indexOf(hist) + 1;
      return {
        name: `Q.${index + 1}`,
        "Taxa (%)": Math.round((correctSoFar / totalSoFar) * 100),
      };
    });

  // 5. CSV Export function
  const exportToCSV = () => {
    if (history.length === 0) {
      if (onAlert) {
        onAlert("Ainda não há dados disponíveis para exportar!", "Sem Dados");
      } else {
        alert("Ainda não há dados disponíveis para exportar!");
      }
      return;
    }

    const csvRows = [
      ["Questao ID", "Banca", "Assunto", "Alternativa Selecionada", "Acertou", "Respondida Em"],
    ];

    history.forEach((hist) => {
      const q = questions.find((item) => item.id === hist.questionId);
      const row = [
        hist.questionId,
        q?.banca || "Customizada",
        q?.assunto || "Geral",
        `Alternativa ${hist.selectedOption + 1}`,
        hist.isCorrect ? "Sim" : "Não",
        new Date(hist.answeredAt).toLocaleString("pt-BR"),
      ];
      csvRows.push(row);
    });

    const csvContent = "data:text/csv;charset=utf-8,\uFEFF" + csvRows.map((e) => e.join(";")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `progresso_ortografia_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [showPrintModal, setShowPrintModal] = useState(false);

  // 6. PDF print function targeting cleanly
  const triggerPrintPDF = () => {
    try {
      window.print();
    } catch (e) {
      console.error("Print failed:", e);
    }
    // Check if inside an iframe to show friendly modal instructions
    const isIframe = window.self !== window.top;
    if (isIframe) {
      setShowPrintModal(true);
    }
  };

  return (
    <div id="progress-report-tabs" className="space-y-6">
      {/* Action buttons */}
      <div className="flex justify-end gap-3 print:hidden flex-wrap">
        {onResetData && (
          <button
            onClick={onResetData}
            className="flex items-center gap-1.5 px-4 py-2 border border-rose-200 dark:border-rose-900/30 text-sm font-semibold rounded-xl text-rose-600 hover:bg-rose-50 bg-white dark:bg-rose-950/10 dark:text-rose-400 dark:hover:bg-rose-955/20 shadow-sm transition"
            title="Apagar todo o histórico de respostas e começar do zero"
          >
            <Trash2 className="w-4 h-4 text-rose-500" /> Zerar Progresso
          </button>
        )}
        <button
          onClick={exportToCSV}
          className="flex items-center gap-1.5 px-4 py-2 border border-gray-200 text-sm font-semibold rounded-xl text-gray-700 hover:bg-gray-50 bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 transition"
        >
          <Download className="w-4 h-4 text-emerald-500" /> Exportar CSV
        </button>
        <button
          onClick={triggerPrintPDF}
          className="flex items-center gap-1.5 px-4 py-2 bg-indigo-500 text-sm font-bold rounded-xl text-white hover:bg-indigo-600 shadow-sm transition"
        >
          <Printer className="w-4 h-4" /> Gerar Relatório PDF
        </button>
      </div>

      {/* Grid of Key Metrics */}
      <div id="metrics-overview" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-gray-100 dark:bg-gray-800 dark:border-gray-700 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400 font-semibold dark:text-gray-500">Respostas Totais</p>
            <p className="text-2xl font-black font-mono text-gray-800 dark:text-gray-100 mt-1">{totalAnswered}</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center dark:bg-gray-750">
            <History className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-gray-100 dark:bg-gray-800 dark:border-gray-700 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400 font-semibold dark:text-gray-500">Aproveitamento Médio</p>
            <p className={`text-2xl font-black font-mono mt-1 ${accuracyRate >= 70 ? "text-emerald-500" : accuracyRate >= 45 ? "text-amber-500" : "text-rose-500"}`}>
              {accuracyRate}%
            </p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center dark:bg-emerald-950/20">
            <TrendingUp className="w-5 h-5 text-emerald-500" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-gray-100 dark:bg-gray-800 dark:border-gray-700 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400 font-semibold dark:text-gray-500">Questões Corretas</p>
            <p className="text-2xl font-black font-mono text-emerald-600 dark:text-emerald-400 mt-1">{totalCorrect}</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center dark:bg-emerald-950/20">
            <span className="text-emerald-500 text-lg font-bold">✓</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-gray-100 dark:bg-gray-800 dark:border-gray-700 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400 font-semibold dark:text-gray-500">Questões Erradas</p>
            <p className="text-2xl font-black font-mono text-rose-500 mt-1">{totalIncorrect}</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center dark:bg-rose-950/20">
            <span className="text-rose-500 text-lg font-bold">✗</span>
          </div>
        </div>
      </div>

      {totalAnswered === 0 ? (
        <div className="p-12 text-center rounded-2xl bg-white border border-gray-100 dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center">
          <AlertCircle className="w-12 h-12 text-gray-300 dark:text-gray-600 mb-3" />
          <h3 className="font-semibold text-gray-700 dark:text-gray-300">Sem Informações de Desempenho</h3>
          <p className="text-xs text-gray-400 dark:text-gray-500 max-w-sm mt-1 mb-4">
            Responda às questões no caderno para ver lindos gráficos de desempenho divididos por Banca e Assuntos!
          </p>
        </div>
      ) : (
        <div id="printed-report-contents" className="space-y-6">
          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Subject accuracy chart */}
            <div className="p-5 rounded-2xl bg-white border border-gray-100 dark:bg-gray-800 dark:border-gray-700 shadow-sm">
              <h3 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
                <BarChart2 className="w-4 h-4 text-indigo-500" /> Rendimento por Assunto de Estudo
              </h3>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={subjectChartData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                    <XAxis dataKey="name" stroke="#9CA3AF" fontSize={10} tickLine={false} />
                    <YAxis stroke="#9CA3AF" fontSize={10} tickLine={false} unit="%" />
                    <Tooltip contentStyle={{ fontSize: "11px", borderRadius: "12px", border: "1px solid #E5E7EB" }} />
                    <Bar dataKey="Acertos (%)" fill="#6366F1" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Over time accuracy curve */}
            <div className="p-5 rounded-2xl bg-white border border-gray-100 dark:bg-gray-800 dark:border-gray-700 shadow-sm">
              <h3 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-500" /> Evolução Recente da Taxa de Acertos
              </h3>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lastAnswersData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                    <XAxis dataKey="name" stroke="#9CA3AF" fontSize={10} tickLine={false} />
                    <YAxis stroke="#9CA3AF" fontSize={10} tickLine={false} unit="%" />
                    <Tooltip contentStyle={{ fontSize: "11px", borderRadius: "12px", border: "1px solid #E5E7EB" }} />
                    <Line type="monotone" dataKey="Taxa (%)" stroke="#10B981" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Performance breakdown by Banca */}
          <div className="p-6 rounded-2xl bg-white border border-gray-100 dark:bg-gray-800 dark:border-gray-700 shadow-sm">
            <h3 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-500" /> Divisão de Desempenho por Instituição / Banca de Concurso
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-gray-700 text-gray-400 text-xs uppercase font-serif">
                    <th className="py-3 px-4">Banca Organizadora</th>
                    <th className="py-3 px-4">Total Respondidas</th>
                    <th className="py-3 px-4 text-emerald-600">Acertos</th>
                    <th className="py-3 px-4 text-rose-500">Erros</th>
                    <th className="py-3 px-4">Aproveitamento</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 dark:divide-gray-750">
                  {bancaChartData.map((d, index) => {
                    const pct = Math.round((d.Acertos / d.Total) * 100);
                    return (
                      <tr key={index} className="hover:bg-gray-50/50 dark:hover:bg-gray-750/30">
                        <td className="py-3.5 px-4 font-semibold text-gray-700 dark:text-gray-200">{d.name}</td>
                        <td className="py-3.5 px-4 font-mono font-medium">{d.Total}</td>
                        <td className="py-3.5 px-4 font-mono text-emerald-600 dark:text-emerald-400 font-semibold">+{d.Acertos}</td>
                        <td className="py-3.5 px-4 font-mono text-rose-500 font-semibold">-{d.Erros}</td>
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-3">
                            <span className="font-semibold text-xs font-mono">{pct}%</span>
                            <div className="w-24 h-2 bg-gray-100 dark:bg-gray-750 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full ${
                                  pct >= 75 ? "bg-emerald-500" : pct >= 45 ? "bg-amber-500" : "bg-rose-500"
                                }`}
                                style={{ width: `${pct}%` }}
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Print PDF helper modal for iframe environment */}
      {showPrintModal && (
        <div id="print-helper-modal-overlay" className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 animate-fade-in print:hidden">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-md w-full space-y-4 text-left">
            <div className="flex justify-between items-center border-b border-slate-100 pb-2 dark:border-slate-850">
              <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
                <Printer className="w-5 h-5 text-indigo-500" /> Relatório PDF & Impressão
              </h3>
              <button
                onClick={() => setShowPrintModal(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-amber-50 text-amber-800 border border-amber-200 dark:bg-amber-950/20 dark:text-amber-300 dark:border-amber-900/30">
                <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-500" />
                <div>
                  <p className="font-bold">Janela Embutida / iFrame Detectada</p>
                  <p className="mt-1">
                    Por segurança do navegador, funções de impressão direta são bloqueadas ou não funcionam perfeitamente quando executadas dentro de um frame incorporado (iframe).
                  </p>
                </div>
              </div>

              <p className="font-medium text-slate-700 dark:text-slate-300">
                Para salvar seu relatório em PDF com sucesso, siga estes passos rápidos:
              </p>

              <ol className="list-decimal pl-4 space-y-2 font-medium">
                <li>
                  Abra o aplicativo em uma aba externa cheia usando o botão abaixo.
                </li>
                <li>
                  Sua página já carregará automaticamente na aba de <span className="font-bold text-indigo-600 dark:text-indigo-400">Desempenho</span>.
                </li>
                <li>
                  Clique no botão <span className="font-bold">Gerar Relatório PDF</span>.
                </li>
                <li>
                  No painel de impressão que se abrir, altere o destino de impressão para <span className="font-bold text-indigo-600 dark:text-indigo-400">"Salvar como PDF"</span> e clique em salvar!
                </li>
              </ol>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
              <a
                href={window.location.origin + window.location.pathname + "#progress"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-grow flex items-center justify-center gap-1.5 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl text-xs font-bold shadow-md transition text-center"
              >
                <ExternalLink className="w-3.5 h-3.5" /> Abrir em Nova Aba
              </a>
              <button
                type="button"
                onClick={() => {
                  setShowPrintModal(false);
                  try {
                    window.print();
                  } catch (err) {}
                }}
                className="px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-750 dark:text-slate-300 rounded-xl text-xs font-bold transition"
              >
                Tentar Mesmo Assim
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
