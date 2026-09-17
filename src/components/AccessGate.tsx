import React from "react";
import { LogOut, BookOpen, CheckCircle2, ShieldAlert } from "lucide-react";
import { User as FirebaseUser } from "firebase/auth";

interface AccessGateProps {
  currentUser: FirebaseUser | null;
  isLoadingAuth: boolean;
  onGoogleLogin: () => Promise<void>;
  onLogout: () => Promise<void>;
  authError: React.ReactNode;
  setAuthError: (err: React.ReactNode) => void;
}

export default function AccessGate({
  currentUser,
  isLoadingAuth,
  onGoogleLogin,
  onLogout,
  authError,
  setAuthError,
}: AccessGateProps) {
  if (isLoadingAuth) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-4">
        <div className="w-12 h-12 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin mb-4" />
        <p className="text-sm font-medium text-slate-400">Verificando autenticação...</p>
      </div>
    );
  }

  // If user is authenticated with Google but not authorized
  if (currentUser) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative z-10 space-y-6 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 mx-auto">
            <ShieldAlert className="w-7 h-7" />
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-bold text-white">Acesso Não Autorizado</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              A conta Google conectada não possui autorização para acessar esta plataforma.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-850 border border-slate-800 text-left flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-800 text-slate-300 flex items-center justify-center font-bold text-sm shrink-0">
              {currentUser.displayName ? currentUser.displayName[0].toUpperCase() : currentUser.email?.[0].toUpperCase() || "U"}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-slate-200 truncate">
                {currentUser.displayName || "Usuário Google"}
              </p>
              <p className="text-[11px] font-mono text-slate-400 truncate">
                {currentUser.email}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onLogout}
            className="w-full h-11 bg-slate-800 hover:bg-slate-750 text-slate-200 hover:text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            Entrar com outra conta Google
          </button>
        </div>
      </div>
    );
  }

  // Direct, clean Google Login Portal
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative z-10 space-y-6">
        {/* Brand Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-blue-400 mx-auto shadow-inner">
            <BookOpen className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center justify-center gap-2">
              <h1 className="text-2xl font-black tracking-tight text-white font-sans">
                AOR <span className="text-blue-500">Master</span>
              </h1>
              <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                IBGE
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Plataforma de Estudos & Simulados para Agente Operacional Regional
            </p>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="space-y-2.5 py-1">
          <div className="flex items-center gap-2.5 text-xs text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Mais de 1.300 questões comentadas do edital</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Simulados reais com cronômetro e critérios IBGE</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Estatísticas de desempenho e controle de erros</span>
          </div>
        </div>

        {/* Auth Error feedback */}
        {authError && (
          <div className="p-3 text-xs bg-rose-950/40 border border-rose-900/50 text-rose-300 rounded-xl font-medium">
            ⚠️ {authError}
          </div>
        )}

        {/* Direct Google Access Button */}
        <button
          type="button"
          onClick={async () => {
            setAuthError("");
            await onGoogleLogin();
          }}
          className="w-full h-12 px-4 bg-white hover:bg-slate-100 text-slate-900 rounded-xl text-sm font-bold transition flex items-center justify-center gap-3 shadow-lg active:scale-98 cursor-pointer"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              fill="#EA4335"
            />
          </svg>
          Entrar com o Google
        </button>
      </div>
    </div>
  );
}
