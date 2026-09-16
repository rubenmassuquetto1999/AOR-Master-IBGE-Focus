import React, { useState, useRef } from "react";
import { User, Award, Flame, Star, Camera, Upload, Trash2, Check, BookOpen, Target, FileText, MapPin, Mail, Lock, Phone, Key, Shield, Users } from "lucide-react";
import { UserProgress } from "../types";
import { ALL_ACHIEVEMENTS } from "./Achievements";
import { auth } from "../firebase";
import { updateEmail, updatePassword } from "firebase/auth";

interface UserProfileProps {
  progress: UserProgress;
  onUpdateProgress: (updated: Partial<UserProgress>) => Promise<void>;
  currentUserEmail: string | null;
  onAlert?: (msg: string, title?: string) => void;
  isAdmin?: boolean;
  onOpenAdminInvites?: () => void;
}

const PRESET_AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
];

const PRESET_EMOJIS = ["👨‍🎓", "👩‍🎓", "🧠", "🦁", "⚡", "📚", "🎯", "🚀"];

export default function UserProfile({
  progress,
  onUpdateProgress,
  currentUserEmail,
  onAlert,
  isAdmin,
  onOpenAdminInvites,
}: UserProfileProps) {
  const [displayName, setDisplayName] = useState(progress.displayName || "");
  const [lastName, setLastName] = useState(progress.lastName || "");
  const [address, setAddress] = useState(progress.address || "");
  const [cep, setCep] = useState(progress.cep || "");
  const [phone, setPhone] = useState(progress.phone || "");
  const [bio, setBio] = useState(progress.bio || "");
  const [courseInterest, setCourseInterest] = useState(progress.courseInterest || "");
  const [dailyGoal, setDailyGoal] = useState(progress.dailyGoal || 5);
  const [photoURL, setPhotoURL] = useState(progress.photoURL || "");
  const [dragActive, setDragActive] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Auth/credentials states
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isUpdatingAuth, setIsUpdatingAuth] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Keep form fields synced with props when they change externally
  React.useEffect(() => {
    setDisplayName(progress.displayName || "");
    setLastName(progress.lastName || "");
    setAddress(progress.address || "");
    setCep(progress.cep || "");
    setPhone(progress.phone || "");
    setBio(progress.bio || "");
    setCourseInterest(progress.courseInterest || "");
    setDailyGoal(progress.dailyGoal || 5);
    setPhotoURL(progress.photoURL || "");
  }, [
    progress.displayName,
    progress.lastName,
    progress.address,
    progress.cep,
    progress.phone,
    progress.bio,
    progress.courseInterest,
    progress.dailyGoal,
    progress.photoURL
  ]);

  // Mask / formatter helpers
  const formatCEP = (value: string) => {
    const numeric = value.replace(/\D/g, "");
    if (numeric.length <= 5) return numeric;
    return `${numeric.slice(0, 5)}-${numeric.slice(5, 8)}`;
  };

  const formatPhone = (value: string) => {
    const numeric = value.replace(/\D/g, "");
    if (numeric.length <= 2) return numeric;
    if (numeric.length <= 7) return `(${numeric.slice(0, 2)}) ${numeric.slice(2)}`;
    return `(${numeric.slice(0, 2)}) ${numeric.slice(2, 7)}-${numeric.slice(7, 11)}`;
  };

  const handleCEPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCep(formatCEP(e.target.value));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
  };

  // Handle Drag events
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      if (onAlert) onAlert("Por favor, selecione um arquivo de imagem válido.", "Erro");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setPhotoURL(event.target.result as string);
        if (onAlert) onAlert("Foto carregada com sucesso!", "Avatar Carregado");
      }
    };
    reader.readAsDataURL(file);
  };

  // Handle Drop event
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  // Handle manual file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      await onUpdateProgress({
        displayName: displayName.trim(),
        lastName: lastName.trim(),
        address: address.trim(),
        cep: cep.trim(),
        phone: phone.trim(),
        bio: bio.trim(),
        courseInterest: courseInterest.trim(),
        dailyGoal: Number(dailyGoal)
      });
      
      // Separate or same updates for avatar url
      if (photoURL !== progress.photoURL) {
        await onUpdateProgress({ photoURL });
      }

      if (onAlert) {
        onAlert("Suas informações de perfil foram atualizadas com sucesso!", "Perfil Salvo 🎉");
      } else {
        alert("Perfil atualizado!");
      }
    } catch (error) {
      console.error(error);
      if (onAlert) onAlert("Não foi possível salvar o perfil. Tente novamente.", "Erro");
    } finally {
      setIsSaving(false);
    }
  };

  const handleUpdateAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth.currentUser) {
      if (onAlert) onAlert("Você precisa estar logado para alterar o e-mail ou a senha.", "Acesso Restrito 🔒");
      return;
    }

    if (!newEmail && !newPassword) {
      if (onAlert) onAlert("Preencha o novo e-mail ou a nova senha para atualizar.", "Campos Vazios ⚠️");
      return;
    }

    if (newPassword && newPassword !== confirmPassword) {
      if (onAlert) onAlert("A confirmação da nova senha não confere.", "Senhas Diferentes ❌");
      return;
    }

    setIsUpdatingAuth(true);
    let updatedEmailSuccess = false;
    let updatedPasswordSuccess = false;

    try {
      // 1. Update email if filled and different
      if (newEmail && newEmail.trim().toLowerCase() !== auth.currentUser.email?.toLowerCase()) {
        await updateEmail(auth.currentUser, newEmail.trim());
        updatedEmailSuccess = true;
      }

      // 2. Update password if filled
      if (newPassword) {
        await updatePassword(auth.currentUser, newPassword);
        updatedPasswordSuccess = true;
      }

      // Provide clear success message
      let msg = "Credenciais atualizadas com sucesso!";
      if (updatedEmailSuccess && updatedPasswordSuccess) {
        msg = "Seu e-mail de login e sua senha foram atualizados com sucesso! Use as novas credenciais no próximo acesso.";
      } else if (updatedEmailSuccess) {
        msg = `Seu e-mail de login foi alterado para: ${newEmail.trim()}. Use-o no seu próximo acesso.`;
      } else if (updatedPasswordSuccess) {
        msg = "Sua senha de login foi alterada com sucesso!";
      }

      if (onAlert) {
        onAlert(msg, "Credenciais Atualizadas 🔑");
      } else {
        alert(msg);
      }

      setNewEmail("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error: any) {
      console.error("Error updating credentials:", error);
      let errorMsg = "Não foi possível atualizar suas credenciais.";
      if (error.code === "auth/requires-recent-login") {
        errorMsg = "Por questões de segurança, esta ação requer que você tenha feito login recentemente. Faça logout e entre novamente para prosseguir.";
      } else if (error.code === "auth/operation-not-allowed") {
        errorMsg = "O provedor de login com 'E-mail e Senha' não está ativado no Console do Firebase para este projeto. Por favor, ative-o nas configurações do Firebase.";
      } else if (error.code === "auth/email-already-in-use") {
        errorMsg = "Este endereço de e-mail já está em uso por outro estudante.";
      } else if (error.code === "auth/weak-password") {
        errorMsg = "A nova senha deve ter pelo menos 6 caracteres.";
      } else if (error.code === "auth/invalid-email") {
        errorMsg = "O formato do e-mail digitado é inválido.";
      } else if (error.message) {
        errorMsg = `Erro: ${error.message}`;
      }
      if (onAlert) onAlert(errorMsg, "Erro ao Atualizar");
    } finally {
      setIsUpdatingAuth(false);
    }
  };

  const selectPresetAvatar = (url: string) => {
    setPhotoURL(url);
  };

  const selectPresetEmoji = (emoji: string) => {
    setPhotoURL(emoji);
  };

  const clearPhoto = () => {
    setPhotoURL("");
  };

  const getAvatarDisplay = () => {
    if (!photoURL) {
      return (
        <div className="w-24 h-24 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-700 shadow-inner">
          <User className="w-12 h-12" />
        </div>
      );
    }
    
    if (photoURL.startsWith("http") || photoURL.startsWith("data:image")) {
      return (
        <img
          src={photoURL}
          alt="Avatar do Aluno"
          referrerPolicy="no-referrer"
          className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-md"
        />
      );
    }

    // Otherwise it's a preset emoji
    return (
      <div className="w-24 h-24 rounded-full bg-indigo-50 dark:bg-indigo-950/30 flex items-center justify-center text-5xl border-4 border-white dark:border-slate-800 shadow-md">
        {photoURL}
      </div>
    );
  };

  return (
    <section className="space-y-6" id="area-aluno-container">
      
      {/* 🚀 Semantic Header */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-black text-slate-800 dark:text-slate-100 tracking-tight font-sans">
            Área do Aluno
          </h2>
          <p className="text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider font-mono">
            Gerencie seu perfil de estudos e dados pessoais
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* 📋 Col 1: Student Card Preview & Status Indicators */}
        <aside className="lg:col-span-1 space-y-6">
          
          {/* Card Virtual de Estudante */}
          <article className="relative overflow-hidden rounded-3xl bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 border border-indigo-950 text-white p-6 shadow-xl shadow-indigo-950/10 dark:shadow-black/40">
            {/* Background vector decoration */}
            <div className="absolute right-0 bottom-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute left-1/3 top-0 w-16 h-16 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
            
            {/* Brand Logo inside Student Card */}
            <div className="flex items-center justify-between border-b border-indigo-900/40 pb-4 mb-4">
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center text-white font-extrabold text-xs">
                  A
                </div>
                <span className="font-bold text-xs tracking-tight text-indigo-200">AOR MASTER STUDENT CARD</span>
              </div>
              <span className="text-[9px] font-mono font-bold tracking-widest text-indigo-400">ID: {progress.userId.substring(0, 8).toUpperCase()}</span>
            </div>

            {/* Student card main content */}
            <div className="flex items-center gap-4">
              <div className="relative">
                {getAvatarDisplay()}
                {photoURL && (
                  <button
                    type="button"
                    onClick={clearPhoto}
                    className="absolute -bottom-1 -right-1 p-1.5 bg-rose-500 text-white rounded-full hover:bg-rose-600 shadow transition active:scale-90"
                    title="Remover foto"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <div className="space-y-1 flex-1">
                <h3 className="font-bold text-sm leading-tight text-white tracking-tight truncate">
                  {displayName || lastName ? `${displayName} ${lastName}`.trim() : "Nome do Aluno"}
                </h3>
                <p className="text-[10px] text-indigo-200 font-mono flex items-center gap-1">
                  <Target className="w-3 h-3 text-emerald-400" />
                  {courseInterest || "Foco em Concursos"}
                </p>
                <div className="flex gap-2 pt-1">
                  <div className="px-2 py-0.5 bg-indigo-900/50 rounded-md text-[9px] font-mono font-bold text-indigo-300">
                    Lvl {progress.level}
                  </div>
                  <div className="px-2 py-0.5 bg-orange-900/30 rounded-md text-[9px] font-mono font-bold text-orange-400 flex items-center gap-0.5">
                    <Flame className="w-2.5 h-2.5 fill-current" /> {progress.streak} {progress.streak === 1 ? "dia" : "dias"}
                  </div>
                </div>
              </div>
            </div>

            {/* Extra details at bottom */}
            <div className="mt-5 grid grid-cols-2 gap-2 text-left pt-3 border-t border-indigo-900/30">
              <div>
                <span className="block text-[8px] text-indigo-300 uppercase tracking-widest font-bold">Email</span>
                <span className="text-[10px] text-white font-medium truncate block font-mono">{currentUserEmail || "Sem email (Convidado)"}</span>
              </div>
              <div>
                <span className="block text-[8px] text-indigo-300 uppercase tracking-widest font-bold">Meta Diária</span>
                <span className="text-[10px] text-white font-medium block font-mono">{dailyGoal} Questões/dia</span>
              </div>
            </div>

            {/* Address, Phone or CEP at bottom of card if present */}
            {(phone || cep) && (
              <div className="mt-3 pt-2 border-t border-indigo-900/25 text-left grid grid-cols-2 gap-2 text-[9px] text-indigo-200">
                {phone && (
                  <div className="flex items-center gap-1 truncate">
                    <Phone className="w-2.5 h-2.5 text-indigo-400 shrink-0" />
                    <span className="truncate">{phone}</span>
                  </div>
                )}
                {cep && (
                  <div className="flex items-center gap-1 truncate">
                    <MapPin className="w-2.5 h-2.5 text-indigo-400 shrink-0" />
                    <span className="truncate">CEP: {cep}</span>
                  </div>
                )}
              </div>
            )}

            {/* Card bio text preview */}
            {bio && (
              <p className="mt-3 text-[10px] text-indigo-200/80 bg-black/10 p-2 rounded-xl border border-indigo-900/20 italic leading-snug line-clamp-2">
                "{bio}"
              </p>
            )}
          </article>

          {/* Estatísticas Rápidas Adicionais */}
          <section className="p-6 rounded-3xl bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-sm space-y-4">
            <h4 className="text-xs font-bold text-slate-700 dark:text-slate-350 uppercase tracking-wider font-sans border-b border-slate-100 dark:border-slate-850 pb-2 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-500" /> Stats de Conquistas
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800">
                <span className="block text-[9px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">XP Total</span>
                <span className="text-base font-black text-slate-850 dark:text-slate-100 font-mono">{progress.xp} XP</span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800">
                <span className="block text-[9px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">Medalhas</span>
                <span className="text-base font-black text-slate-850 dark:text-slate-100 font-mono">{progress.completedAchievements?.length || 0} / {ALL_ACHIEVEMENTS.length}</span>
              </div>
            </div>
          </section>

          {/* 🛡️ Card de Gestão Administrativa de Convites */}
          {isAdmin && onOpenAdminInvites && (
            <section className="p-6 rounded-3xl bg-indigo-50/80 border border-indigo-200 dark:bg-indigo-950/30 dark:border-indigo-900/50 shadow-sm space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-indigo-900 dark:text-indigo-200 font-bold text-xs">
                  <Shield className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  Painel de Acessos & Convites
                </div>
                <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-indigo-600 text-white shadow-xs">
                  Admin
                </span>
              </div>
              <p className="text-xs text-indigo-950/80 dark:text-indigo-200/80 leading-relaxed">
                Você é o administrador da plataforma. Autorize novos e-mails de alunos e aprove solicitações pendentes.
              </p>
              <button
                type="button"
                onClick={onOpenAdminInvites}
                className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 active:scale-98 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-md shadow-indigo-600/20"
              >
                <Users className="w-4 h-4" />
                Gerenciar Convites de Alunos
              </button>
            </section>
          )}

        </aside>

        {/* 🖊️ Col 2-3: Form Editor */}
        <section className="lg:col-span-2 space-y-6">
          <form onSubmit={handleSave} className="p-6 rounded-3xl bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-sm space-y-6">
            
            {/* Foto / Upload section */}
            <div className="space-y-3 text-left">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-350 uppercase tracking-wider">
                Foto de Perfil / Avatar
              </label>

              {/* Drag and Drop Zone */}
              <div
                onDragEnter={handleDrag}
                onDragOver={handleDrag}
                onDragLeave={handleDrag}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-2xl p-6 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-200 text-center ${
                  dragActive
                    ? "border-blue-500 bg-blue-50/20 dark:bg-blue-950/10"
                    : "border-slate-200 dark:border-slate-800 hover:border-slate-350 dark:hover:border-slate-700 hover:bg-slate-50/50 dark:hover:bg-slate-850/30"
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-850 text-slate-500">
                  <Camera className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-750 dark:text-slate-300">Arraste uma foto aqui ou clique para selecionar</p>
                  <p className="text-[10px] text-slate-400 mt-1">Suporta imagens PNG, JPG ou JPEG (Máximo 5MB)</p>
                </div>
              </div>

              {/* Preset avatars selection */}
              <div className="space-y-2 pt-2">
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Ou escolha uma foto modelo:</span>
                <div className="flex flex-wrap gap-2.5">
                  {PRESET_AVATARS.map((url, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => selectPresetAvatar(url)}
                      className={`w-10 h-10 rounded-full overflow-hidden border-2 transition active:scale-95 hover:border-blue-500 ${
                        photoURL === url ? "border-blue-600 scale-105" : "border-transparent"
                      }`}
                    >
                      <img src={url} alt={`Avatar ${idx}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Preset emojis selection */}
              <div className="space-y-2 pt-1">
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Ou escolha um emoji:</span>
                <div className="flex flex-wrap gap-2.5">
                  {PRESET_EMOJIS.map((emoji) => (
                    <button
                      key={emoji}
                      type="button"
                      onClick={() => selectPresetEmoji(emoji)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-xl bg-slate-100 dark:bg-slate-850 border-2 transition active:scale-95 hover:border-blue-500 ${
                        photoURL === emoji ? "border-blue-600 scale-105" : "border-transparent"
                      }`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Text Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              
              {/* Nome */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-350 uppercase tracking-wider">
                  Nome
                </label>
                <input
                  type="text"
                  required
                  placeholder="Seu primeiro nome"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white dark:bg-slate-850 dark:border-slate-800 dark:text-gray-100 text-sm focus:outline-blue-500 font-medium placeholder-slate-400"
                />
              </div>

              {/* Sobrenome */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-350 uppercase tracking-wider">
                  Sobrenome
                </label>
                <input
                  type="text"
                  placeholder="Seu sobrenome"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white dark:bg-slate-850 dark:border-slate-800 dark:text-gray-100 text-sm focus:outline-blue-500 font-medium placeholder-slate-400"
                />
              </div>

              {/* CEP */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-350 uppercase tracking-wider">
                  CEP
                </label>
                <input
                  type="text"
                  placeholder="00000-000"
                  value={cep}
                  onChange={handleCEPChange}
                  maxLength={9}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white dark:bg-slate-850 dark:border-slate-800 dark:text-gray-100 text-sm focus:outline-blue-500 font-medium placeholder-slate-400"
                />
              </div>

              {/* Telefone celular */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-350 uppercase tracking-wider">
                  Telefone Celular
                </label>
                <input
                  type="text"
                  placeholder="(00) 00000-0000"
                  value={phone}
                  onChange={handlePhoneChange}
                  maxLength={15}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white dark:bg-slate-850 dark:border-slate-800 dark:text-gray-100 text-sm focus:outline-blue-500 font-medium placeholder-slate-400"
                />
              </div>

              {/* Endereço Completo */}
              <div className="space-y-1.5 md:col-span-2">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-350 uppercase tracking-wider">
                  Endereço Completo
                </label>
                <input
                  type="text"
                  placeholder="Rua, Número, Bairro, Cidade - UF"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white dark:bg-slate-850 dark:border-slate-800 dark:text-gray-100 text-sm focus:outline-blue-500 font-medium placeholder-slate-400"
                />
              </div>

              {/* Cargo / Concurso de Interesse */}
              <div className="space-y-1.5 md:col-span-2">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-350 uppercase tracking-wider">
                  Área de Interesse / Cargo Desejado
                </label>
                <input
                  type="text"
                  placeholder="Ex: Agente do IBGE, Polícia Civil, Receita Federal"
                  value={courseInterest}
                  onChange={(e) => setCourseInterest(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white dark:bg-slate-850 dark:border-slate-800 dark:text-gray-100 text-sm focus:outline-blue-500 font-medium placeholder-slate-400"
                />
              </div>

              {/* Meta Diária de Questões */}
              <div className="space-y-1.5 md:col-span-2">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-350 uppercase tracking-wider">
                  Meta Diária de Questões (Planejamento)
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="1"
                    max="50"
                    step="1"
                    value={dailyGoal}
                    onChange={(e) => setDailyGoal(Number(e.target.value))}
                    className="flex-grow accent-blue-600 h-2 bg-slate-100 dark:bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <span className="w-16 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 font-mono text-center text-sm font-bold text-slate-700 dark:text-slate-300">
                    {dailyGoal}
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 mt-1">
                  Defina o número ideal de questões que deseja resolver todos os dias para manter o foco e bater sua meta.
                </p>
              </div>

              {/* Biografia Rápida */}
              <div className="space-y-1.5 md:col-span-2">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-350 uppercase tracking-wider">
                  Biografia Rápida / Frase de Motivação
                </label>
                <textarea
                  rows={3}
                  placeholder="Escreva algo sobre você ou sua frase preferida para animar seus estudos!"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white dark:bg-slate-850 dark:border-slate-800 dark:text-gray-100 text-sm focus:outline-blue-500 font-medium placeholder-slate-400 leading-normal"
                />
              </div>

            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-3 border-t border-slate-100 dark:border-slate-850">
              <button
                type="submit"
                disabled={isSaving}
                className="flex-grow md:flex-none md:px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-xl text-sm font-bold transition flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-blue-500/10 active:scale-[0.98]"
              >
                {isSaving ? (
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Check className="w-4 h-4" />
                )}
                {isSaving ? "Salvando..." : "Salvar Alterações"}
              </button>
            </div>

          </form>

          {/* 🔐 Alteração de E-mail e Senha */}
          <form onSubmit={handleUpdateAuth} className="p-6 rounded-3xl bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-sm space-y-6">
            <div>
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 uppercase tracking-wider flex items-center gap-2">
                <Key className="w-4 h-4 text-indigo-500" /> Alterar Credenciais de Acesso
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Atualize seu e-mail de login ou sua senha para entrar na plataforma.
              </p>
            </div>

            {!auth.currentUser ? (
              <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/30 rounded-2xl text-xs text-amber-700 dark:text-amber-400 font-medium">
                Esta funcionalidade só está disponível para usuários cadastrados. Faça o cadastro gratuito ou faça login para alterar e-mail e senha.
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  
                  {/* Novo E-mail */}
                  <div className="space-y-1.5 md:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-350 uppercase tracking-wider">
                      Novo E-mail de Login
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                      <input
                        type="email"
                        placeholder="Deixe em branco se não quiser alterar"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                        className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white dark:bg-slate-850 dark:border-slate-800 dark:text-gray-100 text-sm focus:outline-blue-500 font-medium placeholder-slate-400"
                      />
                    </div>
                  </div>

                  {/* Nova Senha */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-350 uppercase tracking-wider">
                      Nova Senha de Acesso
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                      <input
                        type="password"
                        placeholder="Mínimo 6 caracteres"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white dark:bg-slate-850 dark:border-slate-800 dark:text-gray-100 text-sm focus:outline-blue-500 font-medium placeholder-slate-400"
                      />
                    </div>
                  </div>

                  {/* Confirmar Nova Senha */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-350 uppercase tracking-wider">
                      Confirmar Nova Senha
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                      <input
                        type="password"
                        placeholder="Confirme a nova senha"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white dark:bg-slate-850 dark:border-slate-800 dark:text-gray-100 text-sm focus:outline-blue-500 font-medium placeholder-slate-400"
                      />
                    </div>
                  </div>

                </div>

                {/* Submit button for credentials */}
                <div className="flex gap-3 pt-3 border-t border-slate-100 dark:border-slate-850">
                  <button
                    type="submit"
                    disabled={isUpdatingAuth}
                    className="flex-grow md:flex-none md:px-8 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white rounded-xl text-sm font-bold transition flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-indigo-500/10 active:scale-[0.98]"
                  >
                    {isUpdatingAuth ? (
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Check className="w-4 h-4" />
                    )}
                    {isUpdatingAuth ? "Atualizando..." : "Atualizar E-mail / Senha"}
                  </button>
                </div>
              </>
            )}
          </form>
        </section>

      </div>

    </section>
  );
}
