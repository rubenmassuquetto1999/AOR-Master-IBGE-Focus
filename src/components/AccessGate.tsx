import React, { useState, useEffect } from "react";
import {
  ShieldAlert,
  Lock,
  Mail,
  Eye,
  EyeOff,
  Send,
  CheckCircle2,
  Clock,
  LogOut,
  RefreshCw,
  Sparkles,
  HelpCircle,
  BookOpen,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { User as FirebaseUser } from "firebase/auth";
import {
  submitAccessRequest,
  checkExistingAccessRequest,
  ADMIN_EMAIL,
} from "../lib/firestoreUtils";
import { AccessRequest } from "../types";

interface AccessGateProps {
  currentUser: FirebaseUser | null;
  isLoadingAuth: boolean;
  onGoogleLogin: () => Promise<void>;
  onEmailLogin: (email: string, pass: string, isSignUp: boolean) => Promise<void>;
  onForgotPassword: (email: string) => Promise<void>;
  onLogout: () => Promise<void>;
  onRecheckAuth: () => Promise<void>;
  authError: React.ReactNode;
  setAuthError: (err: React.ReactNode) => void;
}

export default function AccessGate({
  currentUser,
  isLoadingAuth,
  onGoogleLogin,
  onEmailLogin,
  onForgotPassword,
  onLogout,
  onRecheckAuth,
  authError,
  setAuthError,
}: AccessGateProps) {
  // Login / Register Form State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Request Access State
  const [existingRequest, setExistingRequest] = useState<AccessRequest | null>(null);
  const [requestName, setRequestName] = useState("");
  const [requestMessage, setRequestMessage] = useState("");
  const [isSendingRequest, setIsSendingRequest] = useState(false);
  const [requestSentSuccess, setRequestSentSuccess] = useState(false);
  const [isCheckingRequest, setIsCheckingRequest] = useState(false);
  const [isEditingRequest, setIsEditingRequest] = useState(false);

  useEffect(() => {
    if (currentUser?.email) {
      setRequestName(currentUser.displayName || currentUser.email.split("@")[0]);
      checkRequestStatus(currentUser.email);
    }
  }, [currentUser]);

  const checkRequestStatus = async (userEmail: string) => {
    setIsCheckingRequest(true);
    try {
      const req = await checkExistingAccessRequest(userEmail);
      setExistingRequest(req);
      if (req?.name) setRequestName(req.name);
      if (req?.message) setRequestMessage(req.message);
    } catch {
      // Ignore
    } finally {
      setIsCheckingRequest(false);
    }
  };

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    setIsSubmitting(true);
    try {
      await onEmailLogin(email, password, isSignUp);
    } catch {
      // Error handled by parent
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser?.email) return;

    setIsSendingRequest(true);
    try {
      await submitAccessRequest(requestName, requestMessage);
      setRequestSentSuccess(true);
      setIsEditingRequest(false);
      await checkRequestStatus(currentUser.email);
    } catch (err: any) {
      alert(err.message || "Erro ao enviar solicitação.");
    } finally {
      setIsSendingRequest(false);
    }
  };

  if (isLoadingAuth) {
    return (
      <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-4">
        <div className="w-12 h-12 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin mb-4" />
        <p className="text-sm font-medium text-slate-400">Verificando credenciais e autorização...</p>
      </div>
    );
  }

  // 1. Authenticated User BUT NOT Authorized (No Invite in whitelist)
  if (currentUser) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-3 sm:p-4 relative overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-lg bg-slate-900/90 border border-slate-800/90 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl backdrop-blur-md relative z-10 space-y-4 sm:space-y-6">
          {/* Header Icon */}
          <div className="text-center space-y-2 sm:space-y-3">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shadow-inner">
              <ShieldAlert className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Acesso Restrito por Convite
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-100 mt-2">
                Conta Aguardando Autorização
              </h2>
              <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
                Esta plataforma preparatória é privada e requer autorização prévia por e-mail realizada pelo administrador.
              </p>
            </div>
          </div>

          {/* User Email Card */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-850/80 border border-slate-800 flex items-center justify-between gap-2.5">
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-800 text-slate-300 flex items-center justify-center font-bold text-sm shrink-0">
                {currentUser.displayName ? currentUser.displayName[0].toUpperCase() : currentUser.email?.[0].toUpperCase() || "U"}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-semibold text-slate-200 truncate">
                  {currentUser.displayName || "Usuário Conectado"}
                </div>
                <div className="text-[11px] text-slate-400 break-all sm:truncate flex items-center gap-1 font-mono">
                  <Mail className="w-3 h-3 text-slate-500 shrink-0" />
                  {currentUser.email}
                </div>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="px-3 py-2 min-h-[38px] text-xs font-bold text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded-xl transition flex items-center gap-1 shrink-0 cursor-pointer"
              title="Trocar de conta"
            >
              <LogOut className="w-3.5 h-3.5" />
              Sair
            </button>
          </div>

          {/* Request Status or Request Form */}
          {existingRequest && !isEditingRequest ? (
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-850/60 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold">
                {existingRequest.status === "rejected" ? (
                  <span className="text-rose-400 flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    Solicitação Não Aprovada
                  </span>
                ) : existingRequest.status === "approved" ? (
                  <span className="text-amber-400 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 shrink-0" />
                    Autorização Necessita de Atualização
                  </span>
                ) : (
                  <span className="text-amber-400 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 shrink-0" />
                    Solicitação de Acesso em Análise
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {existingRequest.status === "rejected" ? (
                  <>
                    Sua solicitação de acesso não pôde ser aprovada pelo administrador. Caso deseje tentar novamente ou enviar informações complementares, utilize o botão abaixo.
                  </>
                ) : existingRequest.status === "approved" ? (
                  <>
                    Seu e-mail teve uma solicitação anterior registrada, mas seu acesso não está ativo na lista de alunos no momento. Você pode verificar novamente ou enviar uma nova solicitação.
                  </>
                ) : (
                  <>
                    Você enviou uma solicitação de autorização em{" "}
                    <span className="text-slate-100 font-semibold">
                      {new Date(existingRequest.requestedAt).toLocaleString("pt-BR")}
                    </span>
                    . Assim que o administrador aprovar seu e-mail, seu acesso será liberado instantaneamente.
                  </>
                )}
              </p>

              {existingRequest.message && (
                <div className="text-xs text-slate-400 italic bg-slate-900/80 p-2.5 rounded-xl border border-slate-800 break-words">
                  "{existingRequest.message}"
                </div>
              )}

              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <button
                  type="button"
                  onClick={onRecheckAuth}
                  className="w-full sm:flex-1 h-11 px-4 bg-indigo-600 hover:bg-indigo-700 active:scale-98 text-white rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20 cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4" />
                  Verificar Liberação
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditingRequest(true)}
                  className="w-full sm:w-auto h-11 px-4 bg-slate-800 hover:bg-slate-750 text-slate-300 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-1.5 border border-slate-700 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-indigo-400" />
                  {existingRequest.status === "pending" ? "Reenviar Pedido" : "Nova Solicitação"}
                </button>
              </div>
            </div>
          ) : requestSentSuccess && !isEditingRequest ? (
            <div className="p-5 rounded-2xl bg-emerald-950/30 border border-emerald-800/40 text-emerald-300 space-y-2 text-center">
              <CheckCircle2 className="w-8 h-8 mx-auto text-emerald-400" />
              <div className="text-sm font-bold">Solicitação Enviada com Sucesso!</div>
              <p className="text-xs text-slate-400">
                O administrador foi notificado sobre seu pedido de acesso. Clique abaixo para verificar quando for liberado.
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={onRecheckAuth}
                  className="w-full h-11 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-emerald-600/20"
                >
                  <RefreshCw className="w-4 h-4" />
                  Checar se já foi aprovado
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSendRequest} className="space-y-3 bg-slate-850/60 p-4 sm:p-5 rounded-2xl border border-slate-800">
              <div className="flex items-center justify-between">
                <div className="text-xs font-bold text-slate-200 flex items-center gap-2">
                  <Send className="w-4 h-4 text-indigo-400" />
                  Pedir Convite ao Administrador
                </div>
                {existingRequest && (
                  <button
                    type="button"
                    onClick={() => setIsEditingRequest(false)}
                    className="text-[11px] text-slate-400 hover:text-slate-200 cursor-pointer py-1"
                  >
                    Voltar ao status
                  </button>
                )}
              </div>
              <p className="text-[11px] text-slate-400">
                Deseja estudar conosco para o concurso IBGE? Envie uma solicitação para o professor liberar o seu e-mail:
              </p>

              <div>
                <input
                  type="text"
                  required
                  placeholder="Seu Nome Completo"
                  value={requestName}
                  onChange={(e) => setRequestName(e.target.value)}
                  className="w-full px-3.5 h-11 text-sm border border-slate-750 rounded-xl bg-slate-900 text-slate-100 focus:outline-indigo-500"
                />
              </div>

              <div>
                <textarea
                  rows={2}
                  placeholder="Mensagem opcional (ex: Aluno da turma de informática / IBGE AOR)"
                  value={requestMessage}
                  onChange={(e) => setRequestMessage(e.target.value)}
                  className="w-full p-3 text-sm border border-slate-750 rounded-xl bg-slate-900 text-slate-100 focus:outline-indigo-500 resize-none"
                />
              </div>

              <div className="flex gap-2">
                <button
                  type="submit"
                  disabled={isSendingRequest}
                  className="flex-1 h-11 bg-indigo-600 hover:bg-indigo-700 active:scale-98 text-white rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20 disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  {isSendingRequest ? "Enviando Pedido..." : "Enviar Solicitação de Convite"}
                </button>
              </div>
            </form>
          )}

          {/* Footer recheck */}
          <div className="text-center pt-1">
            <button
              onClick={onRecheckAuth}
              className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold underline p-2 inline-block cursor-pointer"
            >
              Já recebeu o convite? Clique aqui para atualizar
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 2. Unauthenticated Visitor — Clean, Professional Access Portal
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-3 sm:p-4 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md bg-slate-900/90 border border-slate-850 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl backdrop-blur-md relative z-10 space-y-5 sm:space-y-6">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-indigo-600/15 border border-indigo-500/30 text-indigo-400 shadow-inner">
            <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <div>
            <div className="flex items-center justify-center gap-2">
              <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                AOR <span className="text-indigo-400">Master</span>
              </h1>
              <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                IBGE
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Plataforma Preparatória Exclusiva por Convite
            </p>
          </div>
        </div>

        {/* Security Notice Banner */}
        <div className="p-3 rounded-2xl bg-indigo-950/40 border border-indigo-800/40 text-indigo-200 text-xs flex items-start gap-2.5">
          <Lock className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
          <p className="leading-relaxed text-[11px]">
            O acesso a esta plataforma é <strong>privado</strong>. Apenas alunos convidados pelo professor têm acesso ao banco de questões e simulados.
          </p>
        </div>

        {/* Social Login Button (Google) */}
        <button
          type="button"
          onClick={onGoogleLogin}
          className="w-full h-11 sm:h-12 px-4 bg-white hover:bg-slate-100 text-slate-900 rounded-2xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2.5 shadow-md active:scale-98 cursor-pointer"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
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
          Entrar com Conta Google
        </button>

        {/* Divider */}
        <div className="relative flex items-center justify-center">
          <div className="border-t border-slate-800 w-full" />
          <span className="bg-slate-900 px-3 text-[10px] uppercase font-bold text-slate-500 tracking-wider absolute">
            ou com e-mail
          </span>
        </div>

        {/* Auth Error */}
        {authError && (
          <div className="p-3 text-xs bg-rose-950/40 border border-rose-900/50 text-rose-300 rounded-xl font-medium">
            ⚠️ {authError}
          </div>
        )}

        {/* Email & Password Form */}
        <form onSubmit={handleAuthSubmit} className="space-y-3.5">
          <div>
            <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1.5 tracking-wider">
              E-mail Autorizado
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="email"
                required
                placeholder="seu_email@exemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3 h-11 text-sm border border-slate-750 rounded-xl bg-slate-850 text-slate-100 focus:outline-indigo-500 transition"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Senha
              </label>
              {!isSignUp && (
                <button
                  type="button"
                  onClick={() => onForgotPassword(email)}
                  className="text-[11px] font-semibold text-indigo-400 hover:underline cursor-pointer"
                >
                  Esqueceu a senha?
                </button>
              )}
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder={isSignUp ? "Mínimo 6 caracteres" : "Sua senha"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 h-11 text-sm border border-slate-750 rounded-xl bg-slate-850 text-slate-100 focus:outline-indigo-500 transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 cursor-pointer p-1"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-11 bg-indigo-600 hover:bg-indigo-700 active:scale-98 text-white rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/25 disabled:opacity-50 cursor-pointer"
          >
            {isSignUp ? "Criar Conta e Solicitar Acesso" : "Entrar na Plataforma"}
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Toggle Sign Up / Sign In */}
        <div className="text-center pt-1 border-t border-slate-800/80">
          <button
            type="button"
            onClick={() => {
              setIsSignUp(!isSignUp);
              setAuthError("");
            }}
            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition py-1 cursor-pointer"
          >
            {isSignUp
              ? "Já possui conta autorizada? Fazer Login"
              : "Primeiro acesso? Crie sua conta para solicitar o convite"}
          </button>
        </div>
      </div>
    </div>
  );
}
