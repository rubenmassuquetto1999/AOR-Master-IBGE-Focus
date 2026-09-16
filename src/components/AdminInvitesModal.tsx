import React, { useState, useEffect } from "react";
import {
  Shield,
  UserPlus,
  Mail,
  CheckCircle2,
  XCircle,
  Clock,
  Trash2,
  Search,
  Copy,
  Check,
  RefreshCw,
  X,
  AlertCircle,
  Users,
  Send,
  UserCheck,
} from "lucide-react";
import { AuthorizedInvite, AccessRequest } from "../types";
import {
  fetchAllInvites,
  saveAuthorizedInvite,
  updateInviteStatus,
  deleteInvite,
  fetchAccessRequests,
  approveAccessRequest,
  rejectAccessRequest,
  deleteAccessRequest,
} from "../lib/firestoreUtils";

interface AdminInvitesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAlert: (message: string, title?: string) => void;
}

export default function AdminInvitesModal({
  isOpen,
  onClose,
  onAlert,
}: AdminInvitesModalProps) {
  const [activeTab, setActiveTab] = useState<"invites" | "requests">("invites");
  const [invites, setInvites] = useState<AuthorizedInvite[]>([]);
  const [requests, setRequests] = useState<AccessRequest[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Form states for new invite
  const [newEmail, setNewEmail] = useState("");
  const [newName, setNewName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [confirmDeleteEmail, setConfirmDeleteEmail] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const [invList, reqList] = await Promise.all([
        fetchAllInvites(),
        fetchAccessRequests(),
      ]);
      setInvites(invList);
      setRequests(reqList);
    } catch (err: any) {
      console.error("Error loading admin data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadData();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleAddInvite = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmail.trim() || !newEmail.includes("@")) {
      onAlert("Por favor, insira um endereço de e-mail válido.", "E-mail Inválido");
      return;
    }

    setIsSubmitting(true);
    try {
      await saveAuthorizedInvite(newEmail.trim(), newName.trim(), "student");
      onAlert(
        `O e-mail ${newEmail.trim().toLowerCase()} foi autorizado com sucesso! O aluno já pode entrar na plataforma.`,
        "Convite Autorizado! 🎉"
      );
      setNewEmail("");
      setNewName("");
      await loadData();
    } catch (err: any) {
      onAlert(err.message || "Erro ao salvar convite.", "Erro");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleToggleStatus = async (invite: AuthorizedInvite) => {
    const nextStatus = invite.status === "active" ? "revoked" : "active";
    try {
      await updateInviteStatus(invite.email, nextStatus);
      setInvites((prev) =>
        prev.map((item) =>
          item.email.toLowerCase() === invite.email.toLowerCase()
            ? { ...item, status: nextStatus }
            : item
        )
      );
    } catch (err: any) {
      onAlert("Erro ao alterar status do convite.", "Erro");
    }
  };

  const handleDeleteInvite = async (email: string) => {
    setIsDeleting(true);
    try {
      await deleteInvite(email);
      setInvites((prev) => prev.filter((item) => item.email.toLowerCase() !== email.toLowerCase()));
      setConfirmDeleteEmail(null);
      onAlert(`O acesso de ${email} foi removido com sucesso.`, "Acesso Excluído");
    } catch (err: any) {
      console.error("Delete invite error:", err);
      onAlert(err.message || "Erro ao excluir convite.", "Erro");
    } finally {
      setIsDeleting(false);
    }
  };

  const handleApproveRequest = async (req: AccessRequest) => {
    try {
      await approveAccessRequest(req);
      onAlert(
        `Acesso aprovado para ${req.email}! O usuário já pode acessar todas as funcionalidades da plataforma.`,
        "Solicitação Aprovada! ✅"
      );
      await loadData();
    } catch (err: any) {
      onAlert("Erro ao aprovar solicitação.", "Erro");
    }
  };

  const handleRejectRequest = async (email: string) => {
    try {
      await rejectAccessRequest(email);
      onAlert(`A solicitação de ${email} foi marcada como recusada.`, "Solicitação Recusada");
      await loadData();
    } catch (err: any) {
      onAlert("Erro ao recusar solicitação.", "Erro");
    }
  };

  const handleDeleteRequest = async (email: string) => {
    try {
      await deleteAccessRequest(email);
      setRequests((prev) => prev.filter((r) => r.email.toLowerCase() !== email.toLowerCase()));
      onAlert(`A solicitação de ${email} foi removida da lista.`, "Solicitação Excluída");
    } catch (err: any) {
      onAlert("Erro ao excluir solicitação.", "Erro");
    }
  };

  const handleCopyInviteLink = () => {
    const url = window.location.origin;
    navigator.clipboard.writeText(
      `Olá! Seu acesso à plataforma AOR Master (Preparatório IBGE) foi liberado pelo professor Ruben Massuquetto. Acesse pelo link: ${url} utilizando o mesmo e-mail autorizado.`
    );
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  const filteredInvites = invites.filter(
    (inv) =>
      inv.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (inv.name && inv.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const pendingRequests = requests.filter((r) => r.status === "pending");

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 animate-fade-in print:hidden">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-3xl max-h-[92dvh] flex flex-col overflow-hidden relative">
        {/* Header */}
        <div className="p-3.5 sm:p-6 border-b border-slate-150 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-850 gap-2">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-indigo-600/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <h3 className="text-sm sm:text-lg font-bold text-slate-900 dark:text-slate-100 truncate">
                  Painel de Convites & Acesso Restrito
                </h3>
                <span className="text-[9px] sm:text-[10px] font-extrabold uppercase px-1.5 sm:px-2 py-0.5 rounded-md bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 shrink-0">
                  Admin
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 truncate sm:whitespace-normal">
                Apenas usuários autorizados por você nesta lista conseguem entrar na plataforma.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <button
              onClick={loadData}
              disabled={isLoading}
              className="p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 rounded-xl hover:bg-slate-200/50 dark:hover:bg-slate-800 transition cursor-pointer"
              title="Atualizar lista"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-xl hover:bg-slate-200/50 dark:hover:bg-slate-800 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Action Bar / Tabs */}
        <div className="px-3.5 sm:px-6 pt-3 sm:pt-4 border-b border-slate-150 dark:border-slate-800 flex items-center justify-between flex-wrap gap-2.5">
          <div className="flex items-center gap-2 overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab("invites")}
              className={`pb-2.5 sm:pb-3 px-2.5 sm:px-3 text-xs font-bold border-b-2 flex items-center gap-1.5 transition whitespace-nowrap cursor-pointer ${
                activeTab === "invites"
                  ? "border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400"
                  : "border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            >
              <Users className="w-4 h-4" />
              Alunos Autorizados ({invites.length})
            </button>
            <button
              onClick={() => setActiveTab("requests")}
              className={`pb-2.5 sm:pb-3 px-2.5 sm:px-3 text-xs font-bold border-b-2 flex items-center gap-1.5 transition relative whitespace-nowrap cursor-pointer ${
                activeTab === "requests"
                  ? "border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400"
                  : "border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            >
              <Clock className="w-4 h-4" />
              Solicitações de Acesso
              {pendingRequests.length > 0 && (
                <span className="px-1.5 py-0.2 text-[10px] font-bold bg-amber-500 text-white rounded-full">
                  {pendingRequests.length}
                </span>
              )}
            </button>
          </div>

          <button
            onClick={handleCopyInviteLink}
            className="mb-2 text-xs font-bold text-slate-600 dark:text-slate-300 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition cursor-pointer"
          >
            {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedLink ? "Texto do Convite Copiado!" : "Copiar Texto de Convite"}
          </button>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto p-3.5 sm:p-6 space-y-4 sm:space-y-6">
          {activeTab === "invites" ? (
            <>
              {/* Form: Add new invite */}
              <div className="bg-slate-50 dark:bg-slate-800/60 p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-200">
                  <UserPlus className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  Autorizar Novo E-mail de Aluno
                </div>
                <form onSubmit={handleAddInvite} className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-2.5">
                  <div className="sm:col-span-6">
                    <input
                      type="email"
                      required
                      placeholder="E-mail do aluno (ex: aluno@gmail.com)"
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                      className="w-full px-3 py-2.5 sm:py-2 min-h-[42px] text-sm sm:text-xs border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900 focus:outline-indigo-500 text-slate-800 dark:text-slate-100"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <input
                      type="text"
                      placeholder="Nome do aluno (opcional)"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      className="w-full px-3 py-2.5 sm:py-2 min-h-[42px] text-sm sm:text-xs border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900 focus:outline-indigo-500 text-slate-800 dark:text-slate-100"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-2.5 sm:py-2 min-h-[42px] bg-indigo-600 hover:bg-indigo-700 text-white text-sm sm:text-xs font-bold rounded-xl shadow-xs transition flex items-center justify-center gap-1.5 disabled:opacity-50 cursor-pointer"
                    >
                      <UserCheck className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
                      {isSubmitting ? "Autorizando..." : "Autorizar Acesso"}
                    </button>
                  </div>
                </form>
              </div>

              {/* Search & Filter */}
              <div className="flex items-center justify-between gap-3">
                <div className="relative flex-1 max-w-sm">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Buscar por e-mail ou nome..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-8 pr-3 py-2 sm:py-1.5 min-h-[40px] text-sm sm:text-xs border border-slate-200 dark:border-slate-750 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100"
                  />
                </div>
                <span className="text-xs text-slate-400 shrink-0">
                  {filteredInvites.length} de {invites.length} alunos
                </span>
              </div>

              {/* List of Whitelisted Users */}
              <div className="space-y-2">
                {isLoading && invites.length === 0 ? (
                  <div className="py-12 text-center text-xs text-slate-400">Carregando lista de convidados...</div>
                ) : filteredInvites.length === 0 ? (
                  <div className="py-12 text-center text-xs text-slate-400 bg-slate-50 dark:bg-slate-850/50 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
                    Nenhum aluno encontrado para a busca informada.
                  </div>
                ) : (
                  filteredInvites.map((invite) => {
                    const isSuperAdmin = invite.email.toLowerCase() === "rubenmassuquetto1999@gmail.com";
                    const isActive = invite.status === "active";

                    return (
                      <div
                        key={invite.email}
                        className={`p-3 sm:p-3.5 rounded-2xl border transition flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 ${
                          isActive
                            ? "bg-white dark:bg-slate-850/80 border-slate-200 dark:border-slate-800"
                            : "bg-slate-50 dark:bg-slate-900/50 border-rose-200 dark:border-rose-950/40 opacity-70"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                          <div
                            className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 ${
                              isSuperAdmin
                                ? "bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300"
                                : isActive
                                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300"
                                : "bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300"
                            }`}
                          >
                            {isSuperAdmin ? "👑" : invite.name ? invite.name[0].toUpperCase() : "👤"}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className="text-xs font-bold text-slate-900 dark:text-slate-100 break-all sm:truncate">
                                {invite.email}
                              </span>
                              {isSuperAdmin && (
                                <span className="text-[10px] font-extrabold px-1.5 py-0.2 bg-amber-100 text-amber-800 dark:bg-amber-950/50 dark:text-amber-300 rounded-md shrink-0">
                                  Super Admin
                                </span>
                              )}
                              {!isActive && (
                                <span className="text-[10px] font-extrabold px-1.5 py-0.2 bg-rose-100 text-rose-800 dark:bg-rose-950/50 dark:text-rose-300 rounded-md shrink-0">
                                  Acesso Revogado
                                </span>
                              )}
                            </div>
                            <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-2 flex-wrap">
                              {invite.name && <span className="truncate">{invite.name}</span>}
                              {invite.createdAt && (
                                <span className="text-[10px] text-slate-400">
                                  Adicionado em {new Date(invite.createdAt).toLocaleDateString("pt-BR")}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {!isSuperAdmin && (
                          <div className="flex items-center gap-1.5 flex-shrink-0 self-end sm:self-auto pt-1 sm:pt-0">
                            {confirmDeleteEmail === invite.email ? (
                              <div className="flex items-center gap-1 bg-rose-50 dark:bg-rose-950/60 p-1 rounded-xl border border-rose-200 dark:border-rose-900/50 animate-fade-in">
                                <span className="text-[10px] font-bold text-rose-700 dark:text-rose-300 px-1">
                                  Excluir?
                                </span>
                                <button
                                  type="button"
                                  onClick={() => handleDeleteInvite(invite.email)}
                                  disabled={isDeleting}
                                  className="px-2.5 py-1.5 min-h-[32px] bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-[10px] font-extrabold transition cursor-pointer shadow-2xs disabled:opacity-50"
                                >
                                  {isDeleting ? "..." : "Sim"}
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setConfirmDeleteEmail(null)}
                                  className="px-2 py-1.5 min-h-[32px] bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg text-[10px] font-bold transition cursor-pointer"
                                >
                                  Não
                                </button>
                              </div>
                            ) : (
                              <>
                                <button
                                  type="button"
                                  onClick={() => handleToggleStatus(invite)}
                                  className={`px-3 py-1.5 min-h-[34px] text-xs font-bold rounded-xl transition cursor-pointer ${
                                    isActive
                                      ? "bg-rose-50 text-rose-700 hover:bg-rose-100 dark:bg-rose-950/40 dark:text-rose-300 border border-rose-200/60 dark:border-rose-900/40"
                                      : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-900/40"
                                  }`}
                                  title={isActive ? "Bloquear acesso temporariamente" : "Reativar acesso"}
                                >
                                  {isActive ? "Revogar" : "Reativar"}
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setConfirmDeleteEmail(invite.email)}
                                  className="p-2 min-h-[34px] min-w-[34px] flex items-center justify-center text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 rounded-xl hover:bg-rose-50 dark:hover:bg-rose-950/30 transition cursor-pointer"
                                  title="Excluir permanentemente da lista"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </>
          ) : (
            /* Requests Tab */
            <div className="space-y-3">
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Usuários que tentaram entrar na plataforma e enviaram uma solicitação de acesso para você aprovar:
              </div>

              {requests.length === 0 ? (
                <div className="py-12 text-center text-xs text-slate-400 bg-slate-50 dark:bg-slate-850/50 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
                  Nenhuma solicitação de acesso registrada no momento.
                </div>
              ) : (
                requests.map((req) => {
                  const isAuthorizedInList = invites.some(
                    (inv) => inv.email.toLowerCase() === req.email.toLowerCase() && inv.status === "active"
                  );
                  const isRevokedInList = invites.some(
                    (inv) => inv.email.toLowerCase() === req.email.toLowerCase() && inv.status === "revoked"
                  );

                  return (
                    <div
                      key={req.email}
                      className={`p-4 rounded-2xl border transition flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                        isAuthorizedInList
                          ? "bg-white dark:bg-slate-850/80 border-slate-200 dark:border-slate-800"
                          : "bg-amber-50/40 dark:bg-amber-950/20 border-amber-200/70 dark:border-amber-900/40"
                      }`}
                    >
                      <div className="space-y-1 min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs font-bold text-slate-900 dark:text-slate-100 break-all sm:truncate">
                            {req.email}
                          </span>
                          <span
                            className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full shrink-0 ${
                              isAuthorizedInList
                                ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300"
                                : isRevokedInList
                                ? "bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300"
                                : req.status === "rejected"
                                ? "bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300"
                                : "bg-amber-100 text-amber-900 dark:bg-amber-950/60 dark:text-amber-300"
                            }`}
                          >
                            {isAuthorizedInList
                              ? "Acesso Liberado & Ativo"
                              : isRevokedInList
                              ? "Acesso Revogado na Lista"
                              : req.status === "rejected"
                              ? "Recusado"
                              : "Aguardando Liberação"}
                          </span>
                        </div>
                        {req.name && (
                          <div className="text-xs text-slate-600 dark:text-slate-300 font-medium truncate">
                            {req.name}
                          </div>
                        )}
                        {req.message && (
                          <div className="text-xs text-slate-600 dark:text-slate-300 italic bg-white/70 dark:bg-slate-900/60 p-2 rounded-xl border border-slate-200/60 dark:border-slate-800 mt-1 max-w-xl break-words">
                            "{req.message}"
                          </div>
                        )}
                        <div className="text-[10px] text-slate-400">
                          Solicitado em {new Date(req.requestedAt).toLocaleString("pt-BR")}
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center gap-1.5 flex-wrap sm:flex-nowrap shrink-0 self-end sm:self-auto pt-1 sm:pt-0">
                        {!isAuthorizedInList ? (
                          <>
                            <button
                              type="button"
                              onClick={() => handleApproveRequest(req)}
                              className="px-3 py-1.5 min-h-[36px] bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-xs transition flex items-center gap-1 cursor-pointer"
                              title="Liberar acesso deste aluno"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              {isRevokedInList ? "Reativar Acesso" : "Aprovar Acesso"}
                            </button>
                            {req.status !== "rejected" && (
                              <button
                                type="button"
                                onClick={() => handleRejectRequest(req.email)}
                                className="px-2.5 py-1.5 min-h-[36px] bg-slate-100 hover:bg-rose-50 text-slate-600 hover:text-rose-700 dark:bg-slate-800 dark:hover:bg-rose-950/40 dark:text-slate-300 text-xs font-bold rounded-xl transition flex items-center gap-1 cursor-pointer"
                                title="Recusar solicitação"
                              >
                                <XCircle className="w-3.5 h-3.5" />
                                Recusar
                              </button>
                            )}
                          </>
                        ) : (
                          <button
                            type="button"
                            onClick={() => {
                              setActiveTab("invites");
                              setSearchTerm(req.email);
                            }}
                            className="px-2.5 py-1.5 min-h-[36px] bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-750 dark:text-slate-300 text-xs font-bold rounded-xl transition cursor-pointer"
                          >
                            Ver na Lista
                          </button>
                        )}

                        <button
                          type="button"
                          onClick={() => handleDeleteRequest(req.email)}
                          className="p-2 min-h-[36px] min-w-[36px] flex items-center justify-center text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-xl transition cursor-pointer"
                          title="Excluir este registro de solicitação"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
