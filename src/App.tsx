import React, { useState, useEffect } from "react";
import {
  BookOpen,
  Flame,
  Trophy,
  Target,
  Award,
  LogOut,
  LogIn,
  UserPlus,
  Moon,
  Sun,
  Laptop,
  Wifi,
  WifiOff,
  Database,
  User,
  Medal,
  Dribbble,
  Menu,
  X,
  Sparkles,
  Mail,
  Lock,
  Eye,
  EyeOff,
  AlertTriangle,
  AlertCircle,
  CheckCircle,
  Shuffle,
  ChevronRight,
  Shield,
  Users,
} from "lucide-react";

import { motion, AnimatePresence } from "motion/react";

import { Question, UserHistory, UserProgress } from "./types";
import { initialQuestions } from "./questionsData";
import { deduplicateAndMergeQuestions, normalizeQuestionText, isQuestionEquivalent } from "./utils/questionDeduplication";
import { db, auth } from "./firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  User as FirebaseUser,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  OAuthProvider,
  sendPasswordResetEmail,
} from "firebase/auth";
import { doc, getDoc, setDoc, collection, getDocs, updateDoc, writeBatch, query, where, deleteDoc } from "firebase/firestore";

import Dashboard from "./components/Dashboard";
import Quiz from "./components/Quiz";
import QuestionBank from "./components/QuestionBank";
import ProgressReport from "./components/ProgressReport";
import Achievements, { ALL_ACHIEVEMENTS } from "./components/Achievements";
import UserProfile from "./components/UserProfile";
import AccessGate from "./components/AccessGate";
import { checkUserInviteStatus, isUserAdmin, ADMIN_EMAIL } from "./lib/firestoreUtils";

export const STUDY_TIPS = [
  {
    title: "Acentuação de Paroxítonas",
    text: "Pelo Acordo Ortográfico vigente, os ditongos abertos -ei e -oi em palavras paroxítonas perderam o acento (ex: ideia, assembleia, plateia, jiboia). Mas atenção: em oxítonas eles continuam acentuados normalmente (ex: herói, papéis, troféu!)."
  },
  {
    title: "Uso dos 'Porquês'",
    text: "Por que: perguntas diretas ou indiretas, ou equivalendo a 'pelo qual'/'por qual razão'. Porque: para respostas e justificativas. Por quê: fim de frase ou isolado. O porquê: substantivo que exige determinante (ex: 'Não entendo o porquê')."
  },
  {
    title: "Crases Proibidas",
    text: "Nunca use crase antes de: 1. Palavras masculinas. 2. Verbos no infinitivo (ex: 'a partir de'). 3. Pronomes pessoais e de tratamento (ex: 'a ela'). 4. Expressões com palavras repetidas (ex: 'dia a dia')."
  },
  {
    title: "Regência do Verbo 'Assistir'",
    text: "No sentido de presenciar/ver, exige preposição 'a' (ex: 'Assisti ao filme', 'Assisti à aula'). No sentido de prestar assistência/socorrer, é direto ou indireto (ex: 'O médico assistiu o doente')."
  },
  {
    title: "Conjunções Concessivas",
    text: "Cai muito em provas! Conjunções como 'embora', 'ainda que', 'mesmo que', 'conquanto' e 'posto que' introduzem oposição concessiva, mantendo a coerência lógica e exigindo o verbo no subjuntivo."
  },
  {
    title: "Mas vs. Mais",
    text: "Mas é uma conjunção adversativa (indica contrariedade, equivale a 'porém', 'contudo'). Mais é advérbio de intensidade ou pronome (indica soma/quantidade, oposto de 'menos')."
  },
  {
    title: "Mal com 'L' vs. Mau com 'U'",
    text: "Mal é advérbio ou substantivo, antônimo de 'bem' (ex: 'Ele dormiu mal', 'O mal da humanidade'). Mau é adjetivo, antônimo de 'bom' (ex: 'Ele é um mau profissional', 'O lobo mau')."
  }
];

const DEFAULT_USER_PROGRESS: UserProgress = {
  userId: "guest",
  streak: 0,
  lastAnsweredDate: "",
  xp: 0,
  level: 1,
  dailyGoal: 15,
  completedAchievements: [],
};

export default function App() {
  const [questionOverrides, setQuestionOverrides] = useState<Record<string, Partial<Question>>>(() => {
    try {
      const saved = localStorage.getItem("question_overrides");
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });
  const [deletedQuestionIds, setDeletedQuestionIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("deleted_question_ids");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });
  const [questions, setQuestions] = useState<Question[]>(() => {
    try {
      const savedDel = localStorage.getItem("deleted_question_ids");
      const delIds: string[] = savedDel ? JSON.parse(savedDel) : [];
      const savedOvr = localStorage.getItem("question_overrides");
      const ovrs: Record<string, Partial<Question>> = savedOvr ? JSON.parse(savedOvr) : {};
      const savedCustom = localStorage.getItem("custom_questions");
      const customQs: Question[] = savedCustom ? JSON.parse(savedCustom) : [];
      return deduplicateAndMergeQuestions(initialQuestions, customQs, delIds, ovrs);
    } catch (e) {
      return initialQuestions;
    }
  });
  const [history, setHistory] = useState<UserHistory[]>([]);
  const [progress, setProgress] = useState<UserProgress>(DEFAULT_USER_PROGRESS);

  // UI state
  const [activeTab, setActiveTab] = useState<string>("home");
  const [preselectedBanca, setPreselectedBanca] = useState<string>("Todos");
  const [preselectedDisciplina, setPreselectedDisciplina] = useState<string>("Todas");
  const [preselectedAssunto, setPreselectedAssunto] = useState<string>("Todos");

  const handleSelectQuickTopic = (banca: string, assunto: string, disciplina?: string) => {
    setPreselectedBanca(banca);
    setPreselectedAssunto(assunto);
    setPreselectedDisciplina(disciplina || "Todas");
    setActiveTab("quiz");
  };

  // Sync active tab with URL hash for seamless new tab opening
  useEffect(() => {
    // Clear URL hash on fresh entry / mount to ensure user always starts on the Dashboard
    window.location.hash = "home";
    setActiveTab("home");

    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (["home", "quiz", "bank", "progress", "badges", "profile"].includes(hash)) {
        setActiveTab(hash);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    if (activeTab) {
      window.location.hash = activeTab;
    }
  }, [activeTab]);

  // Reset scroll to top on tab change for all pages
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [activeTab]);
  const [themeMode, setThemeMode] = useState<"light" | "dark" | "system">(() => {
    return (localStorage.getItem("themeMode") as "light" | "dark" | "system") || "system";
  });
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isOnline, setIsOnLine] = useState<boolean>(window.navigator.onLine);
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const [isLoadingAuth, setIsLoadingAuth] = useState<boolean>(true);
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  
  // Auth Form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState<React.ReactNode>("");
  const [showPassword, setShowPassword] = useState(false);
  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  // Mobile menu toggle
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Custom Dialog State and Handlers
  interface DialogConfig {
    isOpen: boolean;
    type: "alert" | "confirm";
    title: string;
    message: string;
    resolve: (value: boolean) => void;
    confirmText?: string;
    cancelText?: string;
    isDanger?: boolean;
  }

  const [dialog, setDialog] = useState<DialogConfig | null>(null);

  const triggerSystemNotification = (title: string, body: string) => {
    if (typeof window !== "undefined" && "Notification" in window && Notification.permission === "granted") {
      try {
        new Notification(title, {
          body,
          tag: "aor-master-app-alert",
        });
      } catch (err) {
        console.warn("Erro ao emitir notificação de sistema:", err);
      }
    }
  };

  const customAlert = (message: string, title: string = "Mensagem"): Promise<boolean> => {
    triggerSystemNotification(title, message);
    return new Promise((resolve) => {
      setDialog({
        isOpen: true,
        type: "alert",
        title,
        message,
        resolve,
        confirmText: "Ok",
      });
    });
  };

  const customConfirm = (
    message: string,
    title: string = "Confirmação",
    isDanger: boolean = false,
    confirmText: string = "Confirmar",
    cancelText: string = "Cancelar"
  ): Promise<boolean> => {
    return new Promise((resolve) => {
      setDialog({
        isOpen: true,
        type: "confirm",
        title,
        message,
        resolve,
        confirmText,
        cancelText,
        isDanger,
      });
    });
  };

  const handleDialogClose = (result: boolean) => {
    if (dialog) {
      dialog.resolve(result);
      setDialog(null);
    }
  };

  // Monitor network connection
  useEffect(() => {
    const handleOnline = () => {
      setIsOnLine(true);
      syncOfflineData();
    };
    const handleOffline = () => setIsOnLine(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [history, progress]);

  // Handle Dark mode & System theme synchronization
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = () => {
      if (themeMode === "system") {
        if (mediaQuery.matches) {
          document.documentElement.classList.add("dark");
          setIsDarkMode(true);
        } else {
          document.documentElement.classList.remove("dark");
          setIsDarkMode(false);
        }
      } else if (themeMode === "dark") {
        document.documentElement.classList.add("dark");
        setIsDarkMode(true);
      } else {
        document.documentElement.classList.remove("dark");
        setIsDarkMode(false);
      }
    };

    applyTheme();

    const handleSystemChange = () => {
      if (themeMode === "system") {
        applyTheme();
      }
    };

    mediaQuery.addEventListener("change", handleSystemChange);
    return () => {
      mediaQuery.removeEventListener("change", handleSystemChange);
    };
  }, [themeMode]);

  const toggleThemeMode = (mode: "light" | "dark" | "system") => {
    setThemeMode(mode);
    localStorage.setItem("themeMode", mode);
  };

  // Verify user authorization: strictly exclusive to rubenmassuquetto1999@gmail.com
  const handleVerifyUserAuth = async (user: FirebaseUser) => {
    if (!user.email) {
      setIsAuthorized(false);
      setIsAdmin(false);
      return;
    }
    const isExclusive = user.email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase();
    setIsAuthorized(isExclusive);
    setIsAdmin(isExclusive);
    if (isExclusive) {
      await loadUserData(user.uid);
    }
  };

  // Listen to Firebase Auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setIsLoadingAuth(true);
      try {
        if (user) {
          setCurrentUser(user);
          await handleVerifyUserAuth(user);
        } else {
          setCurrentUser(null);
          setIsAuthorized(false);
          setIsAdmin(false);
          loadGuestData();
        }
      } catch (err) {
        console.error("Auth state loading error:", err);
      } finally {
        setIsLoadingAuth(false);
      }
    });

    return () => unsubscribe();
  }, []);

  // Load guest local data
  const loadGuestData = () => {
    const localHistory = localStorage.getItem("guest_history");
    const localProgress = localStorage.getItem("guest_progress");
    const localQuestions = localStorage.getItem("custom_questions");
    const localDeleted = localStorage.getItem("deleted_question_ids");
    
    const deletedIds: string[] = localDeleted ? JSON.parse(localDeleted) : [];
    setDeletedQuestionIds(deletedIds);

    if (localHistory) setHistory(JSON.parse(localHistory));
    
    let loadedProgress: UserProgress = localProgress ? JSON.parse(localProgress) : { ...DEFAULT_USER_PROGRESS };
    const customLocal = localStorage.getItem("custom_questions");
    const guestList: Question[] = customLocal ? JSON.parse(customLocal) : [];
    const guestHistList: UserHistory[] = localHistory ? JSON.parse(localHistory) : [];

    // Auto-sync achievements for guest
    const curBadges = new Set(loadedProgress.completedAchievements || []);
    let guestBadgesChanged = false;
    if (curBadges.has("ach_collector")) {
      curBadges.add("ach_q_5");
      curBadges.add("ach_q_15");
      guestBadgesChanged = true;
    }
    if (guestList.length > 0 && !curBadges.has("ach_custom")) {
      curBadges.add("ach_custom");
      guestBadgesChanged = true;
    }
    if (guestHistList.length >= 1 && !curBadges.has("ach_welcome")) {
      curBadges.add("ach_welcome");
      guestBadgesChanged = true;
    }
    if (guestHistList.length >= 5 && !curBadges.has("ach_q_5")) {
      curBadges.add("ach_q_5");
      guestBadgesChanged = true;
    }
    if (guestHistList.length >= 15 && !curBadges.has("ach_q_15")) {
      curBadges.add("ach_q_15");
      guestBadgesChanged = true;
    }
    if (guestHistList.length >= 30 && !curBadges.has("ach_q_30")) {
      curBadges.add("ach_q_30");
      guestBadgesChanged = true;
    }
    if (guestHistList.length >= 60 && !curBadges.has("ach_q_60")) {
      curBadges.add("ach_q_60");
      guestBadgesChanged = true;
    }
    if (guestBadgesChanged) {
      loadedProgress.completedAchievements = Array.from(curBadges);
      localStorage.setItem("guest_progress", JSON.stringify(loadedProgress));
    }
    setProgress(loadedProgress);

    const localOverridesStr = localStorage.getItem("question_overrides");
    const localOverrides: Record<string, Partial<Question>> = localOverridesStr ? JSON.parse(localOverridesStr) : {};
    setQuestionOverrides(localOverrides);

    try {
      const allQs = deduplicateAndMergeQuestions(initialQuestions, guestList, deletedIds, localOverrides);
      setQuestions(allQs);
    } catch (e) {
      setQuestions(deduplicateAndMergeQuestions(initialQuestions, [], deletedIds, localOverrides));
    }
  };

  // Load authenticated user data
  const loadUserData = async (uid: string) => {
    if (!isOnline) {
      loadGuestData();
      return;
    }

    try {
      // 1. Get Progress
      const progressRef = doc(db, "usersProgress", uid);
      const progressSnap = await getDoc(progressRef);
      let cloudProgress: UserProgress;
      let deletedIds: string[] = [];
      let cloudOverrides: Record<string, Partial<Question>> = {};

      // Check if there is guest progress locally to bind with the account
      const localProgressStr = localStorage.getItem("guest_progress");
      let guestProgress: UserProgress | null = null;
      if (localProgressStr) {
        try {
          guestProgress = JSON.parse(localProgressStr);
        } catch (e) {
          console.error("Erro ao ler progresso local do Convidado:", e);
        }
      }

      if (progressSnap.exists()) {
        cloudProgress = progressSnap.data() as UserProgress;
        deletedIds = (progressSnap.data() as any).deletedQuestionIds || [];
        cloudOverrides = (progressSnap.data() as any).questionOverrides || {};

        // Amarre/vincule os dados de perfil locais se não existirem na nuvem
        if (guestProgress) {
          let hasChanges = false;
          const profileFields: Array<keyof UserProgress> = [
            "displayName",
            "lastName",
            "address",
            "cep",
            "phone",
            "photoURL",
            "bio",
            "courseInterest",
          ];
          for (const field of profileFields) {
            if (!cloudProgress[field] && guestProgress[field]) {
              (cloudProgress as any)[field] = guestProgress[field];
              hasChanges = true;
            }
          }
          // Se o convidado local tiver mais XP/conquistas, sincronize também
          if (guestProgress.xp > (cloudProgress.xp || 0)) {
            cloudProgress.xp = guestProgress.xp;
            cloudProgress.level = guestProgress.level;
            cloudProgress.streak = Math.max(cloudProgress.streak || 0, guestProgress.streak || 0);
            cloudProgress.completedAchievements = Array.from(new Set([
              ...(cloudProgress.completedAchievements || []),
              ...(guestProgress.completedAchievements || [])
            ]));
            hasChanges = true;
          }

          if (hasChanges) {
            await setDoc(progressRef, cloudProgress);
          }
        }
      } else {
        // Criar progresso inicial na nuvem amarrado aos dados locais do aluno
        cloudProgress = {
          userId: uid,
          streak: guestProgress?.streak || 0,
          lastAnsweredDate: guestProgress?.lastAnsweredDate || "",
          xp: guestProgress?.xp || 0,
          level: guestProgress?.level || 1,
          dailyGoal: guestProgress?.dailyGoal || 5,
          completedAchievements: guestProgress?.completedAchievements || [],
          displayName: guestProgress?.displayName || "",
          lastName: guestProgress?.lastName || "",
          address: guestProgress?.address || "",
          cep: guestProgress?.cep || "",
          phone: guestProgress?.phone || "",
          photoURL: guestProgress?.photoURL || "",
          bio: guestProgress?.bio || "",
          courseInterest: guestProgress?.courseInterest || "",
        };
        await setDoc(progressRef, cloudProgress);
      }
      setProgress(cloudProgress);

      // Merge with local deleted ids and overrides
      const localDeletedStr = localStorage.getItem("deleted_question_ids");
      const localDeletedIds: string[] = localDeletedStr ? JSON.parse(localDeletedStr) : [];
      const mergedDeletedIds = Array.from(new Set([...deletedIds, ...localDeletedIds]));
      deletedIds = mergedDeletedIds;
      setDeletedQuestionIds(mergedDeletedIds);
      localStorage.setItem("deleted_question_ids", JSON.stringify(mergedDeletedIds));

      const localOverridesStr = localStorage.getItem("question_overrides");
      const localOverrides: Record<string, Partial<Question>> = localOverridesStr ? JSON.parse(localOverridesStr) : {};
      const mergedOverrides = { ...cloudOverrides, ...localOverrides };
      setQuestionOverrides(mergedOverrides);
      localStorage.setItem("question_overrides", JSON.stringify(mergedOverrides));

      // Sync back to cloud if local had more deleted IDs or overrides
      if (mergedDeletedIds.length > (progressSnap.data()?.deletedQuestionIds?.length || 0) ||
          Object.keys(mergedOverrides).length > Object.keys(cloudOverrides).length) {
        setDoc(progressRef, { deletedQuestionIds: mergedDeletedIds, questionOverrides: mergedOverrides }, { merge: true }).catch(console.error);
      }

      // 2. Get history list
      const historyCol = collection(db, "usersHistory");
      const q = query(historyCol, where("userId", "==", uid));
      const snap = await getDocs(q);
      const uHistory: UserHistory[] = [];
      snap.forEach((d) => {
        const hData = d.data();
        uHistory.push({
          id: d.id,
          questionId: hData.questionId,
          selectedOption: hData.selectedOption,
          isCorrect: hData.isCorrect,
          answeredAt: hData.answeredAt,
        });
      });

      // Migrar histórico de convidado local para a nuvem em lotes de 400
      const localHistoryStr = localStorage.getItem("guest_history");
      if (localHistoryStr) {
        try {
          const localHistory: UserHistory[] = JSON.parse(localHistoryStr);
          const itemsToMigrate = localHistory.filter(
            (item) => !uHistory.some((h) => h.questionId === item.questionId)
          );

          const chunkSize = 400;
          for (let i = 0; i < itemsToMigrate.length; i += chunkSize) {
            const chunk = itemsToMigrate.slice(i, i + chunkSize);
            const batch = writeBatch(db);
            for (const item of chunk) {
              const newHistRef = doc(collection(db, "usersHistory"));
              batch.set(newHistRef, {
                userId: uid,
                questionId: item.questionId,
                selectedOption: item.selectedOption,
                isCorrect: item.isCorrect,
                answeredAt: item.answeredAt,
              });
              uHistory.push({
                id: newHistRef.id,
                questionId: item.questionId,
                selectedOption: item.selectedOption,
                isCorrect: item.isCorrect,
                answeredAt: item.answeredAt,
              });
            }
            await batch.commit();
          }
          localStorage.removeItem("guest_history");
        } catch (e) {
          console.error("Erro ao migrar histórico local para a nuvem:", e);
        }
      }

      setHistory(uHistory.sort((a, b) => a.answeredAt - b.answeredAt));

      // 3. Get custom questions
      const customCol = collection(db, "customQuestions");
      const qSnap = await getDocs(customCol);
      const userQuestions: Question[] = [];

      // Pre-index initialQuestions for instant O(1) checks
      const baseIdSet = new Set(initialQuestions.map((bq) => bq.id));
      const baseNormSet = new Set<string>();
      const basePrefixSet = new Set<string>();
      for (const bq of initialQuestions) {
        const norm = normalizeQuestionText(bq.text);
        if (norm) {
          baseNormSet.add(norm);
          if (norm.length >= 35) {
            basePrefixSet.add(norm.slice(0, 35));
          }
        }
      }

      qSnap.forEach((docQ) => {
        const qData = docQ.data();
        if (qData.userId === "system") {
          return; // Ignore any system-seeded questions in Firestore
        }
        const q: Question = {
          id: docQ.id,
          text: qData.text,
          options: qData.options,
          correctIndex: qData.correctIndex,
          explanations: qData.explanations,
          banca: qData.banca,
          ano: qData.ano,
          assunto: qData.assunto,
          disciplina: qData.disciplina,
          nivelSuperior: qData.nivelSuperior,
          image: qData.image || null,
          generalExplanation: qData.generalExplanation || undefined,
        };

        userQuestions.push(q);
      });

      // Also merge any offline cached custom questions
      const localCustom = localStorage.getItem("custom_questions");
      if (localCustom) {
        try {
          const localList: Question[] = JSON.parse(localCustom);
          for (const lq of localList) {
            const idx = userQuestions.findIndex((uq) => uq.id === lq.id);
            if (idx === -1) {
              userQuestions.push(lq);
            }
          }
        } catch (e) {
          console.error("Erro ao ler cache local de questões:", e);
        }
      }

      // Deduplicate questions to guarantee pristine count and prioritize user modifications
      const allQs = deduplicateAndMergeQuestions(initialQuestions, userQuestions, deletedIds, mergedOverrides);
      setQuestions(allQs);

      // Auto-verify and sync achievements based on cloud data
      const hasCustom = userQuestions.length > 0 || (localStorage.getItem("custom_questions") && JSON.parse(localStorage.getItem("custom_questions") || "[]").length > 0);
      const curBadges = new Set(cloudProgress.completedAchievements || []);
      let cloudBadgesChanged = false;

      if (curBadges.has("ach_collector")) {
        curBadges.add("ach_q_5");
        curBadges.add("ach_q_15");
        cloudBadgesChanged = true;
      }
      if (hasCustom && !curBadges.has("ach_custom")) {
        curBadges.add("ach_custom");
        cloudBadgesChanged = true;
      }
      if (uHistory.length >= 1 && !curBadges.has("ach_welcome")) {
        curBadges.add("ach_welcome");
        cloudBadgesChanged = true;
      }
      if (uHistory.length >= 5 && !curBadges.has("ach_q_5")) {
        curBadges.add("ach_q_5");
        cloudBadgesChanged = true;
      }
      if (uHistory.length >= 15 && !curBadges.has("ach_q_15")) {
        curBadges.add("ach_q_15");
        cloudBadgesChanged = true;
      }
      if (uHistory.length >= 30 && !curBadges.has("ach_q_30")) {
        curBadges.add("ach_q_30");
        cloudBadgesChanged = true;
      }
      if (uHistory.length >= 60 && !curBadges.has("ach_q_60")) {
        curBadges.add("ach_q_60");
        cloudBadgesChanged = true;
      }

      if (cloudBadgesChanged) {
        cloudProgress.completedAchievements = Array.from(curBadges);
        setProgress({ ...cloudProgress });
        if (isOnline) {
          setDoc(progressRef, cloudProgress).catch(() => {});
        }
      }
    } catch (e) {
      console.warn("Could not load full user data from cloud (using local cache fallback):", e);
      loadGuestData();
    }
  };

  // Offline sync queue triggers when online returns
  const syncOfflineData = async () => {
    if (!currentUser || !isOnline) return;

    try {
      const guestHistory = localStorage.getItem("guest_history");
      const guestCustomQuestions = localStorage.getItem("custom_questions");

      // Sync offline histories if any exists
      if (guestHistory) {
        const queue: UserHistory[] = JSON.parse(guestHistory);
        for (const h of queue) {
          const docRef = doc(db, "usersHistory", `${currentUser.uid}_${h.questionId}`);
          await setDoc(docRef, {
            ...h,
            userId: currentUser.uid,
          });
        }
        localStorage.removeItem("guest_history");
      }

      // Sync custom questions offline if any exists
      if (guestCustomQuestions) {
        const queue: Question[] = JSON.parse(guestCustomQuestions);
        for (const q of queue) {
          const docRef = doc(db, "customQuestions", q.id);
          await setDoc(docRef, {
            ...q,
            userId: currentUser.uid,
          });
        }
        localStorage.removeItem("custom_questions");
      }

      // Refresh data
      await loadUserData(currentUser.uid);
      console.log("Offline state synchronized with Cloud database successfully!");
    } catch (e) {
      console.error(e);
    }
  };

  const handleAddHistory = async (qId: string, selectedIdx: number, isCorrect: boolean) => {
    const now = Date.now();
    const histId = `${currentUser ? currentUser.uid : "guest"}_${qId}_${now}`;
    const newHistItem: UserHistory = {
      id: histId,
      questionId: qId,
      selectedOption: selectedIdx,
      isCorrect,
      answeredAt: now,
    };

    // 1. Update local state history
    const updatedHistory = [...history, newHistItem];
    setHistory(updatedHistory);

    // 2. Perform streak calculation
    const todayStr = new Date().toISOString().slice(0, 10);
    let newStreak = progress.streak;
    
    if (progress.lastAnsweredDate !== todayStr) {
      if (progress.lastAnsweredDate === getYesterdayString()) {
        newStreak += 1;
      } else if (progress.lastAnsweredDate !== "") {
        newStreak = 1; // Streak broken, resets to 1
      }
    }

    // Level up calculation logic (200 XP per level ceiling, up to level 20)
    const baseNewXp = progress.xp + (isCorrect ? 15 : 5); // +15 XP if correct, +5 XP if wrong
    let currentLvl = progress.level;
    let nextLvlThreshold = currentLvl * 200;
    let finalXp = baseNewXp;
    
    while (finalXp >= nextLvlThreshold && currentLvl < 20) {
      finalXp = finalXp - nextLvlThreshold;
      currentLvl += 1;
      const leveledTo = currentLvl;
      setTimeout(() => {
        customAlert(`🌟 PARABÉNS! Você subiu de nível! Agora você é Nível ${leveledTo}! Continue estudando.`, "Subiu de Nível! 🎉");
      }, 800);
      nextLvlThreshold = currentLvl * 200;
    }

    const updatedProgress: UserProgress = {
      ...progress,
      streak: newStreak,
      lastAnsweredDate: todayStr,
      xp: finalXp,
      level: currentLvl,
    };
    setProgress(updatedProgress);

    // Save locally
    if (!currentUser) {
      localStorage.setItem("guest_history", JSON.stringify(updatedHistory));
      localStorage.setItem("guest_progress", JSON.stringify(updatedProgress));
    } else {
      // Save globally Firebase
      if (isOnline) {
        try {
          await setDoc(doc(db, "usersHistory", histId), {
            ...newHistItem,
            userId: currentUser.uid,
          });
          await setDoc(doc(db, "usersProgress", currentUser.uid), updatedProgress);
        } catch (e) {
          // Failure fallbacks to local caching queue
          localStorage.setItem("guest_history", JSON.stringify(updatedHistory));
          localStorage.setItem("guest_progress", JSON.stringify(updatedProgress));
        }
      } else {
        localStorage.setItem("guest_history", JSON.stringify(updatedHistory));
        localStorage.setItem("guest_progress", JSON.stringify(updatedProgress));
      }
    }

    // Trigger progressive achievements checks across all 40 challenges
    const todayAnswersCount = updatedHistory.filter(
      (h) => new Date(h.answeredAt).toISOString().slice(0, 10) === todayStr
    ).length;
    const totalAnswered = updatedHistory.length;
    const correctAnswers = updatedHistory.filter((h) => h.isCorrect).length;
    const accuracy = totalAnswered > 0 ? correctAnswers / totalAnswered : 0;

    // Volume progression (calibrated to actual question bank of ~1,400 questions)
    handleUnlockBadge("ach_welcome");
    if (totalAnswered >= 5) handleUnlockBadge("ach_q_5");
    if (totalAnswered >= 15) handleUnlockBadge("ach_q_15");
    if (totalAnswered >= 30) handleUnlockBadge("ach_q_30");
    if (totalAnswered >= 60) handleUnlockBadge("ach_q_60");
    if (totalAnswered >= 100) handleUnlockBadge("ach_q_100");
    if (totalAnswered >= 150) handleUnlockBadge("ach_q_150");
    if (totalAnswered >= 220) handleUnlockBadge("ach_q_250");
    if (totalAnswered >= 300) handleUnlockBadge("ach_q_400");
    if (totalAnswered >= 400) handleUnlockBadge("ach_q_500");
    if (totalAnswered >= 500) handleUnlockBadge("ach_q_750");
    if (totalAnswered >= 650) handleUnlockBadge("ach_q_1000");
    if (totalAnswered >= 800) handleUnlockBadge("ach_q_1300");
    if (totalAnswered >= 950) handleUnlockBadge("ach_q_1600");
    if (totalAnswered >= 1050) handleUnlockBadge("ach_q_2000");
    if (totalAnswered >= 1150) handleUnlockBadge("ach_q_2400");
    if (totalAnswered >= 1220) handleUnlockBadge("ach_q_2800");
    if (totalAnswered >= 1280) handleUnlockBadge("ach_q_3200");
    if (totalAnswered >= 1320) handleUnlockBadge("ach_q_3600");
    if (totalAnswered >= 1350) handleUnlockBadge("ach_q_4000");

    // Streak progression
    if (newStreak >= 3) handleUnlockBadge("ach_streak");
    if (newStreak >= 7) handleUnlockBadge("ach_streak_7");
    if (newStreak >= 14) handleUnlockBadge("ach_streak_14");
    if (newStreak >= 21) handleUnlockBadge("ach_streak_21");
    if (newStreak >= 30) handleUnlockBadge("ach_streak_30");
    if (newStreak >= 60) handleUnlockBadge("ach_streak_60");

    // Daily & Intensity goals
    if (todayAnswersCount >= (progress.dailyGoal || 15)) handleUnlockBadge("ach_daily_goal");
    if (todayAnswersCount >= 30) handleUnlockBadge("ach_speed_master");
    if (todayAnswersCount >= 50) {
      handleUnlockBadge("ach_marathon_master");
      handleUnlockBadge("ach_day_50");
    }

    // High accuracy milestones
    if (totalAnswered >= 20 && accuracy >= 0.75) handleUnlockBadge("ach_sniper");
    if (totalAnswered >= 100 && accuracy >= 0.80) handleUnlockBadge("ach_accuracy_elite");
    if (totalAnswered >= 200 && accuracy >= 0.85) handleUnlockBadge("ach_super_sniper");

    // Subject diversity (calibrated to the 4 disciplines registered in the database)
    const distinctDisciplines = new Set(
      updatedHistory
        .map((h) => questions.find((q) => q.id === h.questionId)?.disciplina)
        .filter(Boolean)
    );
    if (distinctDisciplines.size >= 3) handleUnlockBadge("ach_multi_disc");
    if (distinctDisciplines.size >= 4) handleUnlockBadge("ach_all_subjects_master");

    // Level 20 Legend
    if (currentLvl >= 20) handleUnlockBadge("ach_legend_hall");

    const answeredQ = questions.find((q) => q.id === qId);
    if (
      answeredQ &&
      (answeredQ.banca?.toLowerCase().includes("ibge") ||
        answeredQ.disciplina?.toLowerCase().includes("ibge") ||
        answeredQ.assunto?.toLowerCase().includes("ibge"))
    ) {
      handleUnlockBadge("ach_ibge");
    }
  };

  const handleRegisterCustomQuestion = async (newQ: Question): Promise<"added" | "updated" | "duplicate"> => {
    const existingQ = questions.find(
      (q) => q.text.trim().toLowerCase() === newQ.text.trim().toLowerCase()
    );

    if (existingQ) {
      const hasNewImage = !!newQ.image && newQ.image.trim() !== "";
      const existingHasNoImage = !existingQ.image || existingQ.image.trim() === "";

      if (hasNewImage && existingHasNoImage) {
        // Update local state
        const updatedQuestions = questions.map((q) =>
          q.id === existingQ.id ? { ...q, image: newQ.image } : q
        );
        setQuestions(updatedQuestions);

        // Update database or local queue
        if (!currentUser) {
          const customLocal = localStorage.getItem("custom_questions") || "[]";
          const queueList: Question[] = JSON.parse(customLocal);
          const index = queueList.findIndex((q) => q.id === existingQ.id);
          if (index !== -1) {
            queueList[index].image = newQ.image;
          } else {
            queueList.push({ ...existingQ, image: newQ.image });
          }
          localStorage.setItem("custom_questions", JSON.stringify(queueList));
        } else {
          if (isOnline) {
            try {
              await setDoc(doc(db, "customQuestions", existingQ.id), {
                ...existingQ,
                image: newQ.image,
                userId: currentUser.uid,
              });
            } catch (e) {
              const customLocal = localStorage.getItem("custom_questions") || "[]";
              const queueList: Question[] = JSON.parse(customLocal);
              const index = queueList.findIndex((q) => q.id === existingQ.id);
              if (index !== -1) {
                queueList[index].image = newQ.image;
              } else {
                queueList.push({ ...existingQ, image: newQ.image });
              }
              localStorage.setItem("custom_questions", JSON.stringify(queueList));
            }
          } else {
            const customLocal = localStorage.getItem("custom_questions") || "[]";
            const queueList: Question[] = JSON.parse(customLocal);
            const index = queueList.findIndex((q) => q.id === existingQ.id);
            if (index !== -1) {
              queueList[index].image = newQ.image;
            } else {
              queueList.push({ ...existingQ, image: newQ.image });
            }
            localStorage.setItem("custom_questions", JSON.stringify(queueList));
          }
        }
        return "updated";
      } else {
        return "duplicate";
      }
    }

    const updatedQuestions = [...questions, newQ];
    setQuestions(updatedQuestions);

    if (!currentUser) {
      const customLocal = localStorage.getItem("custom_questions") || "[]";
      const queueList = JSON.parse(customLocal);
      queueList.push(newQ);
      localStorage.setItem("custom_questions", JSON.stringify(queueList));
    } else {
      if (isOnline) {
        try {
          await setDoc(doc(db, "customQuestions", newQ.id), {
            ...newQ,
            userId: currentUser.uid,
          });
        } catch (e) {
          saveQuestionLocally(newQ);
        }
      } else {
        saveQuestionLocally(newQ);
      }
    }

    // Unlock achievement for custom question
    handleUnlockBadge("ach_custom");
    const customCount = updatedQuestions.filter((q) => q.id.startsWith("q_custom_")).length;
    if (customCount >= 3) {
      handleUnlockBadge("ach_author_pro");
    }
    return "added";
  };

  const saveQuestionLocally = (newQ: Question) => {
    const customLocal = localStorage.getItem("custom_questions") || "[]";
    const queueList = JSON.parse(customLocal);
    queueList.push(newQ);
    localStorage.setItem("custom_questions", JSON.stringify(queueList));
  };

  const handleUpdateQuestion = async (updatedQ: Question): Promise<boolean> => {
    try {
      // 1. Update questions state locally
      setQuestions((prevQuestions) =>
        prevQuestions.map((q) => (q.id === updatedQ.id ? updatedQ : q))
      );

      // 2. Persist in overrides state and localStorage
      const newOverrides = {
        ...questionOverrides,
        [updatedQ.id]: updatedQ,
      };
      setQuestionOverrides(newOverrides);
      localStorage.setItem("question_overrides", JSON.stringify(newOverrides));

      // 3. Persist locally as fast cache
      updateQuestionLocally(updatedQ);

      // 4. Persist in cloud if user is logged in
      if (currentUser && isOnline) {
        try {
          const progressRef = doc(db, "usersProgress", currentUser.uid);
          await setDoc(progressRef, { questionOverrides: newOverrides }, { merge: true });

          if (updatedQ.id.startsWith("q_custom_")) {
            await setDoc(doc(db, "customQuestions", updatedQ.id), {
              ...updatedQ,
              userId: currentUser.uid,
              updatedAt: Date.now(),
            }, { merge: true });
          }
        } catch (e) {
          console.error("Failed to update cloud question, kept local cache:", e);
        }
      }
      return true;
    } catch (err) {
      console.error("Error updating question:", err);
      return false;
    }
  };

  const handleBatchUpdateQuestions = async (
    updates: { id: string; changes: Partial<Question> }[]
  ): Promise<boolean> => {
    if (updates.length === 0) return true;

    try {
      const updateMap = new Map<string, Partial<Question>>();
      updates.forEach((u) => updateMap.set(u.id, u.changes));

      const updatedList: Question[] = [];

      // 1. Update questions state locally
      setQuestions((prevQuestions) => {
        return prevQuestions.map((q) => {
          if (updateMap.has(q.id)) {
            const updated: Question = { ...q, ...updateMap.get(q.id)! };
            updatedList.push(updated);
            return updated;
          }
          return q;
        });
      });

      // 2. Update questionOverrides state and localStorage
      const newOverrides = { ...questionOverrides };
      updates.forEach((u) => {
        newOverrides[u.id] = {
          ...(newOverrides[u.id] || {}),
          ...u.changes,
        };
      });
      setQuestionOverrides(newOverrides);
      localStorage.setItem("question_overrides", JSON.stringify(newOverrides));

      // 3. Persist locally in custom questions if applicable
      const customLocal = localStorage.getItem("custom_questions") || "[]";
      let queueList: Question[] = JSON.parse(customLocal);
      const queueMap = new Map<string, Question>();
      queueList.forEach((q) => queueMap.set(q.id, q));
      updatedList.forEach((q) => {
        if (queueMap.has(q.id) || q.id.startsWith("q_custom_")) {
          queueMap.set(q.id, q);
        }
      });
      localStorage.setItem("custom_questions", JSON.stringify(Array.from(queueMap.values())));

      // 4. Persist to Firestore in batch if logged in & online
      if (currentUser && isOnline) {
        try {
          const progressRef = doc(db, "usersProgress", currentUser.uid);
          await setDoc(progressRef, { questionOverrides: newOverrides }, { merge: true });

          const customUpdates = updatedList.filter((q) => q.id.startsWith("q_custom_"));
          if (customUpdates.length > 0) {
            const chunkSize = 400;
            for (let i = 0; i < customUpdates.length; i += chunkSize) {
              const chunk = customUpdates.slice(i, i + chunkSize);
              const batch = writeBatch(db);
              for (const q of chunk) {
                const docRef = doc(db, "customQuestions", q.id);
                batch.set(docRef, {
                  ...q,
                  userId: currentUser.uid,
                  updatedAt: Date.now(),
                }, { merge: true });
              }
              await batch.commit();
            }
          }
        } catch (e) {
          console.error("Erro ao salvar lote no Firestore:", e);
        }
      }

      return true;
    } catch (err) {
      console.error("Erro em handleBatchUpdateQuestions:", err);
      return false;
    }
  };

  const updateQuestionLocally = (updatedQ: Question) => {
    const customLocal = localStorage.getItem("custom_questions") || "[]";
    let queueList: Question[] = JSON.parse(customLocal);
    const index = queueList.findIndex((q) => q.id === updatedQ.id);
    if (index !== -1) {
      queueList[index] = updatedQ;
    } else if (updatedQ.id.startsWith("q_custom_")) {
      queueList.push(updatedQ);
    }
    localStorage.setItem("custom_questions", JSON.stringify(queueList));
  };

  const handleDeleteMultipleQuestions = async (questionIdsToDelete: string[]): Promise<boolean> => {
    if (questionIdsToDelete.length === 0) return true;

    try {
      // 1. Update local deletedQuestionIds state and localStorage ALWAYS
      const updatedDeletedIds = Array.from(new Set([...deletedQuestionIds, ...questionIdsToDelete]));
      setDeletedQuestionIds(updatedDeletedIds);
      localStorage.setItem("deleted_question_ids", JSON.stringify(updatedDeletedIds));

      // 2. Clean up questionOverrides
      const newOverrides = { ...questionOverrides };
      for (const qId of questionIdsToDelete) {
        delete newOverrides[qId];
      }
      setQuestionOverrides(newOverrides);
      localStorage.setItem("question_overrides", JSON.stringify(newOverrides));

      // 3. Clean up custom questions in localStorage
      const customLocal = localStorage.getItem("custom_questions") || "[]";
      let queueList: Question[] = JSON.parse(customLocal);
      queueList = queueList.filter((q) => !questionIdsToDelete.includes(q.id));
      localStorage.setItem("custom_questions", JSON.stringify(queueList));

      // 4. Filter questions state immediately
      setQuestions((prevQuestions) => prevQuestions.filter((q) => !questionIdsToDelete.includes(q.id)));

      // 5. Persist in Firestore if user is logged in
      if (currentUser && isOnline) {
        try {
          const progressRef = doc(db, "usersProgress", currentUser.uid);
          await setDoc(progressRef, {
            deletedQuestionIds: updatedDeletedIds,
            questionOverrides: newOverrides,
          }, { merge: true });

          // Fast batch delete custom questions only
          const customIds = questionIdsToDelete.filter((id) => id.startsWith("q_custom_"));
          if (customIds.length > 0) {
            const chunkSize = 400;
            for (let i = 0; i < customIds.length; i += chunkSize) {
              const chunk = customIds.slice(i, i + chunkSize);
              const batch = writeBatch(db);
              for (const qId of chunk) {
                batch.delete(doc(db, "customQuestions", qId));
              }
              await batch.commit();
            }
          }
        } catch (e) {
          console.error("Failed to sync deleted questions to cloud, saved locally:", e);
        }
      }
      return true;
    } catch (err) {
      console.error("Error deleting multiple questions:", err);
      return false;
    }
  };

  const handleUnlockBadge = async (badgeId: string) => {
    const item = ALL_ACHIEVEMENTS.find((b) => b.id === badgeId);
    let didUnlock = false;
    let reward = item?.xpReward || 50;

    setProgress((prevProgress) => {
      const currentBadges = prevProgress.completedAchievements || [];
      if (currentBadges.includes(badgeId)) {
        return prevProgress;
      }

      didUnlock = true;
      const updatedCompleted = [...currentBadges, badgeId];

      // Give XP reward
      const baseNewXp = (prevProgress.xp || 0) + reward;
      let currentLvl = prevProgress.level || 1;
      let nextLvlThreshold = currentLvl * 200;
      let finalXp = baseNewXp;

      while (finalXp >= nextLvlThreshold && currentLvl < 20) {
        finalXp = finalXp - nextLvlThreshold;
        currentLvl += 1;
        nextLvlThreshold = currentLvl * 200;
      }

      if (currentLvl >= 20 && !updatedCompleted.includes("ach_legend_hall")) {
        updatedCompleted.push("ach_legend_hall");
      }

      const updatedProgress: UserProgress = {
        ...prevProgress,
        completedAchievements: updatedCompleted,
        xp: finalXp,
        level: currentLvl,
      };

      // Persist in storage or cloud
      if (!currentUser) {
        localStorage.setItem("guest_progress", JSON.stringify(updatedProgress));
      } else {
        if (isOnline) {
          setDoc(doc(db, "usersProgress", currentUser.uid), updatedProgress).catch((e) => {
            console.error("Erro ao salvar progresso:", e);
            localStorage.setItem("guest_progress", JSON.stringify(updatedProgress));
          });
        } else {
          localStorage.setItem("guest_progress", JSON.stringify(updatedProgress));
        }
      }

      return updatedProgress;
    });

    if (didUnlock && item) {
      setTimeout(() => {
        customAlert(
          `🏆 CONQUISTA DESBLOQUEADA: "${item.title}"!\n${item.description}\nGanhou +${reward} de XP para o seu nível!`,
          "Conquista Desbloqueada! 🏆"
        );
      }, 600);
    }
  };

  const handleManualReceiveXp = async (amount: number) => {
    const baseNewXp = progress.xp + amount;
    let currentLvl = progress.level;
    let nextLvlThreshold = currentLvl * 200;
    let finalXp = baseNewXp;
    
    if (finalXp >= nextLvlThreshold) {
      finalXp = finalXp - nextLvlThreshold;
      currentLvl += 1;
    }

    const updatedProgress = {
      ...progress,
      xp: finalXp,
      level: currentLvl,
    };
    setProgress(updatedProgress);

    if (!currentUser) {
      localStorage.setItem("guest_progress", JSON.stringify(updatedProgress));
    } else {
      if (isOnline) {
        try {
          await setDoc(doc(db, "usersProgress", currentUser.uid), updatedProgress);
        } catch (e) {
          localStorage.setItem("guest_progress", JSON.stringify(updatedProgress));
        }
      } else {
        localStorage.setItem("guest_progress", JSON.stringify(updatedProgress));
      }
    }
  };

  const handleUpdateProfile = async (updatedFields: Partial<UserProgress>) => {
    const updatedProgress = {
      ...progress,
      ...updatedFields,
    };
    setProgress(updatedProgress);

    if (!currentUser) {
      localStorage.setItem("guest_progress", JSON.stringify(updatedProgress));
    } else {
      if (isOnline) {
        try {
          await setDoc(doc(db, "usersProgress", currentUser.uid), updatedProgress);
        } catch (e) {
          localStorage.setItem("guest_progress", JSON.stringify(updatedProgress));
        }
      } else {
        localStorage.setItem("guest_progress", JSON.stringify(updatedProgress));
      }
    }
  };

  const getYesterdayString = () => {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return d.toISOString().slice(0, 10);
  };

  // Auth Functions
  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    
    if (!email || !password) {
      setAuthError("Por favor, preencha todos os campos.");
      return;
    }

    try {
      if (isSignUp) {
        // Sign Up
        await createUserWithEmailAndPassword(auth, email, password);
        customAlert("Sua conta foi criada com sucesso! Seus dados já estão sincronizados.", "Conta Criada! 🎉");
      } else {
        // Sign In
        await signInWithEmailAndPassword(auth, email, password);
      }
      setShowAuthModal(false);
      setEmail("");
      setPassword("");
      setActiveTab("home");
      window.location.hash = "home";
    } catch (err: any) {
      let friendlyMessage: React.ReactNode = err.message;
      if (err.code === "auth/invalid-credential" || err.code === "auth/wrong-password") {
        friendlyMessage = "E-mail ou senha incorretos. Por favor, tente novamente.";
      } else if (err.code === "auth/operation-not-allowed") {
        friendlyMessage = (
          <span>
            O provedor de login com <strong>E-mail e Senha</strong> não está ativado no seu projeto Firebase. <br />
            Para resolver, acesse as configurações de provedores no{" "}
            <a
              href="https://console.firebase.google.com/project/gen-lang-client-0108161733/authentication/providers"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 font-extrabold"
            >
              Console do Firebase
            </a>
            , ative o método de login por <strong>E-mail/Senha</strong> e salve. Se preferir, você também pode entrar utilizando o botão do Google abaixo.
          </span>
        );
      } else if (err.code === "auth/user-not-found") {
        friendlyMessage = "Usuário não encontrado. Verifique se digitou o e-mail correto.";
      } else if (err.code === "auth/email-already-in-use") {
        friendlyMessage = "Este endereço de e-mail já está sendo usado por outra conta.";
      } else if (err.code === "auth/weak-password") {
        friendlyMessage = "A senha é muito fraca. Escolha uma senha com no mínimo 6 caracteres.";
      } else if (err.code === "auth/invalid-email") {
        friendlyMessage = "O formato do e-mail inserido é inválido.";
      }
      setAuthError(friendlyMessage || "Erro de autenticação com o servidor.");
    }
  };

  const handleGoogleLogin = async () => {
    setAuthError("");
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setShowAuthModal(false);
      setEmail("");
      setPassword("");
      setActiveTab("home");
      window.location.hash = "home";
    } catch (err: any) {
      console.error("Google Auth error:", err);
      if (err.code !== "auth/popup-closed-by-user") {
        setAuthError(err.message || "Erro ao fazer login com o Google.");
      }
    }
  };

  const handleFacebookLogin = async () => {
    setAuthError("");
    const provider = new FacebookAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setShowAuthModal(false);
      setEmail("");
      setPassword("");
      setActiveTab("home");
      window.location.hash = "home";
    } catch (err: any) {
      console.error("Facebook Auth error:", err);
      if (err.code !== "auth/popup-closed-by-user") {
        setAuthError(err.message || "Erro ao fazer login com o Facebook.");
      }
    }
  };

  const handleAppleLogin = async () => {
    setAuthError("");
    const provider = new OAuthProvider("apple.com");
    try {
      await signInWithPopup(auth, provider);
      setShowAuthModal(false);
      setEmail("");
      setPassword("");
      setActiveTab("home");
      window.location.hash = "home";
    } catch (err: any) {
      console.error("Apple Auth error:", err);
      if (err.code !== "auth/popup-closed-by-user") {
        setAuthError(err.message || "Erro ao fazer login com a Apple.");
      }
    }
  };

  const handleForgotPassword = async () => {
    setAuthError("");
    if (!email) {
      customAlert("Por favor, digite seu e-mail no campo correspondente primeiro para podermos enviar o link de recuperação.", "Campo Necessário");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      customAlert(`Um e-mail de recuperação de senha foi enviado com sucesso para ${email}. Verifique sua caixa de entrada.`, "E-mail Enviado! ✉️");
    } catch (err: any) {
      console.error("Forgot password error:", err);
      let friendlyMessage = err.message;
      if (err.code === "auth/invalid-email") {
        friendlyMessage = "O formato do e-mail inserido é inválido.";
      } else if (err.code === "auth/user-not-found") {
        friendlyMessage = "Nenhum usuário correspondente ao e-mail informado.";
      }
      setAuthError(friendlyMessage || "Erro ao enviar e-mail de recuperação.");
    }
  };

  const handleLogout = async () => {
    const confirmed = await customConfirm("Deseja realmente sair?", "Sair da Conta");
    if (confirmed) {
      await signOut(auth);
      setHistory([]);
      setProgress({
        userId: "guest",
        streak: 0,
        lastAnsweredDate: "",
        xp: 0,
        level: 1,
        dailyGoal: 5,
        completedAchievements: [],
      });
      loadGuestData();
      setActiveTab("home");
      window.location.hash = "home";
    }
  };

  const handleResetAllData = async () => {
    const confirmed = await customConfirm(
      "⚠️ Tem certeza que deseja zerar o seu desempenho, incluindo estatísticas de questões respondidas, acertos e XP? (Suas informações de perfil serão preservadas)",
      "Zerar Desempenho",
      true, // isDanger
      "Zerar Desempenho",
      "Cancelar"
    );
    if (confirmed) {
      setHistory([]);
      
      // Update state preserving existing registration fields
      setProgress((prev) => ({
        ...prev,
        streak: 0,
        lastAnsweredDate: "",
        xp: 0,
        level: 1,
        completedAchievements: [],
      }));

      // As questões cadastradas, seus tópicos/assuntos e bancas são preservados intactos!
      // Apenas o histórico de respostas e métricas de desempenho do usuário são zerados.

      localStorage.removeItem("guest_history");
      
      // Update guest progress in localStorage
      const localProgressStr = localStorage.getItem("guest_progress");
      if (localProgressStr) {
        try {
          const localProgress = JSON.parse(localProgressStr);
          const clearedLocal = {
            ...localProgress,
            streak: 0,
            lastAnsweredDate: "",
            xp: 0,
            level: 1,
            completedAchievements: [],
          };
          localStorage.setItem("guest_progress", JSON.stringify(clearedLocal));
        } catch (e) {
          localStorage.setItem("guest_progress", JSON.stringify({
            userId: "guest",
            streak: 0,
            lastAnsweredDate: "",
            xp: 0,
            level: 1,
            dailyGoal: 5,
            completedAchievements: [],
          }));
        }
      }

      if (currentUser && isOnline) {
        try {
          // 1. Reset progress in usersProgress safely using updateDoc so profile/registration fields are never touched or deleted!
          const progressRef = doc(db, "usersProgress", currentUser.uid);
          await updateDoc(progressRef, {
            streak: 0,
            lastAnsweredDate: "",
            xp: 0,
            level: 1,
            completedAchievements: [],
          });

          // 2. Delete all user history docs from usersHistory in Firestore in chunks of 400
          const historyCol = collection(db, "usersHistory");
          const q = query(historyCol, where("userId", "==", currentUser.uid));
          const snap = await getDocs(q);
          
          const docsToDelete = snap.docs;
          const chunkSize = 400;
          for (let i = 0; i < docsToDelete.length; i += chunkSize) {
            const chunk = docsToDelete.slice(i, i + chunkSize);
            const batch = writeBatch(db);
            chunk.forEach((d) => batch.delete(d.ref));
            await batch.commit();
          }

          customAlert("Estatísticas de questões, acertos e XP zerados com sucesso! Seus dados cadastrais foram preservados.", "Desempenho Zerado");
        } catch (error) {
          console.error("Erro ao zerar dados na nuvem:", error);
          customAlert("Estatísticas locais zeradas, mas ocorreu um erro de conexão ao sincronizar com a nuvem.", "Erro de Sincronização");
        }
      } else {
        customAlert("Estatísticas locais de Convidado de questões e XP zeradas com sucesso!", "Desempenho Zerado");
      }
    }
  };

  // Daily completing metric today count
  const todayStr = new Date().toISOString().slice(0, 10);
  const startOfDayTimestamp = new Date(todayStr).getTime();
  const dayCompletedQuestions = history.filter((h) => h.answeredAt >= startOfDayTimestamp).length;

  if (isLoadingAuth) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center font-sans text-slate-100">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin"></div>
          <p className="text-sm font-semibold text-slate-400">Verificando autorização de acesso...</p>
        </div>
      </div>
    );
  }

  // 🔒 Master Security Gate: Direct Google Login exclusive to admin
  if (!currentUser || !isAuthorized) {
    return (
      <AccessGate
        currentUser={currentUser}
        isLoadingAuth={isLoadingAuth}
        onGoogleLogin={handleGoogleLogin}
        onLogout={async () => {
          await signOut(auth);
          setCurrentUser(null);
          setIsAuthorized(false);
          setIsAdmin(false);
          loadGuestData();
        }}
        authError={authError}
        setAuthError={setAuthError}
      />
    );
  }

  return (
    <div id="full-page-application-wrapper" className="min-h-screen bg-slate-50 flex flex-col transition-colors duration-300 dark:bg-slate-950 pb-16 md:pb-0 font-sans text-slate-900 dark:text-slate-100">
      
      {/* 🚀 Fixed Upper Header Navigation (Locked) */}
      <header id="app-main-header" className="fixed top-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm print:hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 h-16 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Logo Brand info */}
          <div 
            className="flex items-center gap-2.5 cursor-pointer shrink-0" 
            onClick={() => setActiveTab("home")}
          >
            <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-sm tracking-wide shadow-sm shadow-blue-500/20">
              A
            </div>
            <div className="flex flex-col">
              <h1 className="text-sm sm:text-base font-extrabold text-slate-800 dark:text-slate-100 tracking-tight leading-none flex items-center gap-1">
                AOR <span className="text-blue-600 dark:text-blue-400">Master</span>
              </h1>
              <p className="text-[9px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider font-mono">IBGE Focus</p>
            </div>
          </div>

          {/* Desktop Tab Selector */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {[
              { id: "home", label: "Dashboard" },
              { id: "quiz", label: "Caderno" },
              { id: "bank", label: "Questões" },
              { id: "progress", label: "Desempenho" },
              { id: "badges", label: "Níveis & Medalhas" },
              { id: "profile", label: "Área do Aluno" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setShowMobileMenu(false);
                }}
                className={`text-xs font-semibold px-2.5 xl:px-3 py-1.5 rounded-xl whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white font-bold shadow-xs shadow-blue-600/20"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Controls actions header */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">

            {/* Segmented Theme Switcher Control */}
            <div className="flex items-center gap-0.5 bg-slate-100 border border-slate-200/80 p-0.5 rounded-xl dark:bg-slate-850 dark:border-slate-800 shrink-0">
              <button
                onClick={() => toggleThemeMode("light")}
                className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                  themeMode === "light"
                    ? "bg-white text-amber-500 shadow-xs dark:bg-slate-800 dark:text-amber-400 font-bold"
                    : "text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
                }`}
                title="Modo Claro"
              >
                <Sun className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => toggleThemeMode("dark")}
                className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                  themeMode === "dark"
                    ? "bg-white text-indigo-500 shadow-xs dark:bg-slate-800 dark:text-indigo-400 font-bold"
                    : "text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
                }`}
                title="Modo Escuro"
              >
                <Moon className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => toggleThemeMode("system")}
                className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                  themeMode === "system"
                    ? "bg-white text-blue-500 shadow-xs dark:bg-slate-800 dark:text-blue-400 font-bold"
                    : "text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
                }`}
                title="Sincronizar com o Dispositivo (Computador, Celular, etc.)"
              >
                <Laptop className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Offline sync badge */}
            <div
              className={`hidden md:flex items-center gap-1 px-2 py-1 rounded-xl text-[11px] font-mono font-bold tracking-tight border shrink-0 ${
                isOnline
                  ? "bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-950/25 dark:text-emerald-400 dark:border-emerald-900/30"
                  : "bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-950/25 dark:text-amber-400 dark:border-amber-900/30"
              }`}
              title={isOnline ? "Conexão de rede ativa na nuvem" : "Suporte offline ativo. Dados salvos localmente e sincronizados ao retornar online!"}
            >
              {isOnline ? <Wifi className="w-3.5 h-3.5" /> : <WifiOff className="w-3.5 h-3.5" />}
              <span>{isOnline ? "Online" : "Offline"}</span>
            </div>



            {/* Profile Avatar button */}
            <button
              onClick={() => setActiveTab("profile")}
              className="w-8 h-8 rounded-full overflow-hidden border border-slate-200 dark:border-slate-750 hover:border-blue-500 dark:hover:border-blue-400 transition focus:outline-none focus:ring-2 focus:ring-blue-500/40 flex items-center justify-center bg-slate-100 dark:bg-slate-800 cursor-pointer shadow-2xs shrink-0"
              title="Ir para Área do Aluno"
            >
              {progress.photoURL ? (
                progress.photoURL.startsWith("http") || progress.photoURL.startsWith("data:image") ? (
                  <img 
                    src={progress.photoURL} 
                    alt="Foto de Perfil" 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer" 
                  />
                ) : (
                  <span className="text-sm leading-none select-none">{progress.photoURL}</span>
                )
              ) : (
                <User className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              )}
            </button>

            {/* Logout / Login */}
            {currentUser ? (
              <button
                onClick={handleLogout}
                className="p-1.5 sm:p-2 bg-rose-50 border border-rose-100 text-rose-500 rounded-xl hover:bg-rose-100 transition dark:bg-rose-950/30 dark:border-rose-900/30 dark:text-rose-400 cursor-pointer shrink-0"
                title="Sair da Conta (Logout)"
              >
                <LogOut className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsSignUp(false);
                  setShowAuthModal(true);
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition shadow-xs cursor-pointer shrink-0"
              >
                <LogIn className="w-3.5 h-3.5" /> <span className="hidden sm:inline">Entrar</span>
              </button>
            )}

            {/* Mobile menu trigger */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="p-1.5 sm:p-2 lg:hidden bg-slate-100 border border-slate-200 text-slate-600 rounded-xl dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 shrink-0 cursor-pointer"
              aria-label="Abrir menu"
            >
              {showMobileMenu ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown panel */}
        {showMobileMenu && (
          <div className="lg:hidden block bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-4 py-3 space-y-1.5 shadow-md">
            {[
              { id: "home", label: "Dashboard" },
              { id: "quiz", label: "Caderno Estudantil" },
              { id: "bank", label: "Banco de Questões" },
              { id: "progress", label: "Desempenho" },
              { id: "badges", label: "Níveis & Medalhas" },
              { id: "profile", label: "Área do Aluno" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setShowMobileMenu(false);
                }}
                className={`w-full text-left font-bold py-2 px-3 rounded-xl text-xs transition ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                }`}
              >
                {tab.label}
              </button>
            ))}


          </div>
        )}
      </header>
      {/* Spacer to prevent content underlap for fixed header */}
      <div className="h-16 shrink-0 print:hidden" aria-hidden="true" />

      {/* 🚀 Main Core Dashboard Layout */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-3.5 sm:px-4 md:px-6 py-4 sm:py-6 pb-24 lg:pb-8 font-sans">
        
        <div className={activeTab === "home" ? "grid grid-cols-1 xl:grid-cols-4 gap-6" : "block space-y-6"}>
          {/* Main workspace section based on tabs (Left Column, col-span-3 or full) */}
          <div className={activeTab === "home" ? "xl:col-span-3 space-y-6" : "w-full space-y-6"}>
            
            {activeTab === "home" && (
              <Dashboard
                history={history}
                questions={questions}
                streak={progress.streak}
                level={progress.level}
                xp={progress.xp}
                unlockedBadges={progress.completedAchievements}
                dayCompletedQuestionsCount={dayCompletedQuestions}
                dailyGoal={progress.dailyGoal}
                onSetTab={setActiveTab}
                onSelectQuickTopic={handleSelectQuickTopic}
              />
            )}

            {activeTab === "quiz" && (
              <Quiz
                questions={questions}
                history={history}
                onAddHistory={handleAddHistory}
                onReceiveXp={handleManualReceiveXp}
                onUnlockBadge={handleUnlockBadge}
                onAlert={customAlert}
                onConfirm={customConfirm}
                initialBanca={preselectedBanca}
                initialDisciplina={preselectedDisciplina}
                initialAssunto={preselectedAssunto}
                onUpdateQuestion={handleUpdateQuestion}
              />
            )}

            {activeTab === "bank" && (
              <QuestionBank
                questions={questions}
                onAddQuestion={handleRegisterCustomQuestion}
                onUpdateQuestion={handleUpdateQuestion}
                onBatchUpdateQuestions={handleBatchUpdateQuestions}
                onReceiveXp={handleManualReceiveXp}
                onAlert={customAlert}
                onConfirm={customConfirm}
                onDeleteMultipleQuestions={handleDeleteMultipleQuestions}
              />
            )}

            {activeTab === "progress" && (
              <ProgressReport history={history} questions={questions} onResetData={handleResetAllData} onAlert={customAlert} />
            )}

            {activeTab === "badges" && (
              <Achievements unlockedIds={progress.completedAchievements} xp={progress.xp} level={progress.level} />
            )}

            {activeTab === "profile" && (
              <UserProfile
                progress={progress}
                onUpdateProgress={handleUpdateProfile}
                currentUserEmail={currentUser ? currentUser.email : null}
                onAlert={customAlert}
                isAdmin={isAdmin}
              />
            )}
          </div>

          {/* Right Sidebar Widgets Panel (Col-span-1) - Hidden on mobile screens */}
          {activeTab === "home" && (
            <aside className="xl:col-span-1 space-y-6 print:hidden">
              
              {/* Quick Profile / Streak Status Tracker */}
              <div id="sidebar-streak-tracker" className="p-6 rounded-3xl bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-sm text-center space-y-3">
                <div className="mx-auto w-10 h-10 rounded-2xl bg-orange-100 dark:bg-orange-950/20 flex items-center justify-center font-bold text-lg text-orange-500 animate-bounce">
                  🔥
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest leading-none">Ofensiva</span>
                  <span className="block font-semibold text-orange-500 text-lg">
                    {progress.streak} {progress.streak === 1 ? "Dia" : "Dias"} 🔥
                  </span>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">Mantenha sua regularidade de estudos</p>
                </div>
                <div className="pt-2 flex justify-center items-center gap-1.5 font-mono text-[10px] font-bold text-orange-600 bg-orange-50 dark:bg-orange-950/20 px-3.5 py-1.5 rounded-xl uppercase">
                  Sequência de Estudos
                </div>
              </div>



              {/* Useful study resources tips links */}
              <div id="sidebar-tips-card" className="p-6 rounded-3xl bg-slate-950 border border-slate-900 text-white space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-900 pb-3">
                  <h3 className="font-bold text-[11px] text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" /> Destaque de Fixação
                  </h3>
                  <button
                    onClick={() => {
                      setCurrentTipIndex((prev) => (prev + 1) % STUDY_TIPS.length);
                    }}
                    className="p-1.5 hover:bg-slate-900 rounded-lg text-slate-400 hover:text-white transition flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider cursor-pointer"
                    title="Ver próxima dica"
                  >
                    <Shuffle className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Outra</span>
                  </button>
                </div>

                {/* Dynamic Tip Content */}
                <div className="min-h-[110px] flex flex-col justify-between bg-slate-900/50 p-3.5 rounded-2xl border border-slate-900">
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold text-indigo-400 uppercase tracking-widest block">
                      {STUDY_TIPS[currentTipIndex].title}
                    </span>
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={currentTipIndex}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="text-xs text-slate-200 leading-relaxed font-normal"
                      >
                        {STUDY_TIPS[currentTipIndex].text}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Dynamic XP Progress Center */}
                <div className="p-4 bg-slate-900 rounded-2xl border border-slate-900/60 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[9px] text-slate-400 uppercase tracking-wider font-semibold">Nível Atual</p>
                      <p className="text-sm font-black text-white flex items-center gap-1 font-mono">
                        Lvl {progress.level}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] text-slate-400 uppercase tracking-wider font-semibold">XP Alvo</p>
                      <p className="text-sm font-black text-indigo-400 font-mono">
                        {progress.level * 200} XP
                      </p>
                    </div>
                  </div>

                  {/* Progress bar */}
                  {(() => {
                    const targetXp = progress.level * 200;
                    const currentXp = progress.xp;
                    const progressPercent = Math.min(100, Math.max(0, (currentXp / targetXp) * 100));
                    const missingXp = targetXp - currentXp;

                    return (
                      <div className="space-y-1.5">
                        <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden p-[2px]">
                          <motion.div 
                            className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 h-full rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${progressPercent}%` }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                          />
                        </div>
                        <div className="flex justify-between items-center text-[10px]">
                          <span className="text-slate-400 font-medium font-mono">{currentXp} XP acumulado</span>
                          <span className="text-slate-300 font-semibold font-mono">{Math.round(progressPercent)}%</span>
                        </div>
                        <p className="text-[10px] text-slate-400 pt-1 text-center border-t border-slate-800/45">
                          Faltam <span className="text-indigo-400 font-bold font-mono">{missingXp} XP</span> para subir para o <span className="text-emerald-400 font-bold">Lvl {progress.level + 1}</span>!
                        </p>
                      </div>
                    );
                  })()}
                </div>
              </div>
            </aside>
          )}
        </div>
      </main>

      {/* 🚀 Interactive Firebase Authentication Modal overlay */}
      {showAuthModal && (
        <div id="auth-modal-overlay" className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-3 sm:p-4 animate-fade-in print:hidden">
          <div className="bg-white dark:bg-slate-900 p-5 sm:p-7 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-sm w-full space-y-4 sm:space-y-5 relative">
            
            {/* Fechar modal */}
            <button
              onClick={() => {
                setShowAuthModal(false);
                setAuthError("");
                setEmail("");
                setPassword("");
              }}
              className="absolute right-4.5 top-4.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              title="Fechar"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Cabeçalho */}
            <div className="text-center space-y-1">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                {isSignUp ? "Criar sua conta" : "Entrar na sua conta"}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isSignUp 
                  ? "Cadastre-se gratuitamente para salvar seu progresso perpétuo."
                  : "Estude com inteligência, simule e conquiste a sua vaga!"}
              </p>
            </div>

            {/* Erro de autenticação */}
            {authError && (
              <p className="p-3 text-xs bg-rose-50 border border-rose-150 text-rose-600 dark:bg-rose-950/20 dark:border-rose-900/40 rounded-xl font-bold">
                ⚠️ {authError}
              </p>
            )}

            {/* Form de E-mail & Senha */}
            <form onSubmit={handleAuth} className="space-y-3.5 sm:space-y-4">
              <div>
                <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 mb-1.5 tracking-wider">Endereço de E-mail</label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
                    <Mail className="w-4 h-4" />
                  </span>
                  <input
                    type="email"
                    required
                    placeholder="seu_email@exemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 h-11 text-sm border border-slate-200 dark:border-slate-750 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-slate-100 dark:focus:ring-blue-400 transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">Senha Privada</label>
                  {!isSignUp && (
                    <button
                      type="button"
                      onClick={handleForgotPassword}
                      className="text-[11px] font-bold text-blue-600 hover:underline dark:text-blue-400 cursor-pointer"
                    >
                      Esqueceu sua senha?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
                    <Lock className="w-4 h-4" />
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder={isSignUp ? "Mínimo de 6 caracteres" : "Digite sua senha"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-10 h-11 text-sm border border-slate-200 dark:border-slate-750 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-slate-100 dark:focus:ring-blue-400 transition-all duration-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full h-11 bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/10 active:scale-[0.98] text-white rounded-xl text-sm font-bold shadow-md transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {isSignUp ? "Criar Minha Conta" : "Entrar"}
              </button>
            </form>

            {/* Divisória elegante */}
            <div className="relative flex py-1 items-center">
              <div className="flex-grow border-t border-slate-150 dark:border-slate-800"></div>
              <span className="flex-shrink mx-4 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">ou continue com</span>
              <div className="flex-grow border-t border-slate-150 dark:border-slate-800"></div>
            </div>

            {/* Botões de Login Social */}
            <div className="grid grid-cols-3 gap-2.5">
              {/* Google */}
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="flex items-center justify-center h-11 border border-slate-200 dark:border-slate-750 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-350 dark:hover:border-slate-600 transition duration-150 active:scale-95 group cursor-pointer"
                title="Entrar com o Google"
              >
                <svg className="w-5 h-5 group-hover:scale-105 transition-transform" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                </svg>
              </button>
              
              {/* Facebook */}
              <button
                type="button"
                onClick={handleFacebookLogin}
                className="flex items-center justify-center h-11 border border-slate-200 dark:border-slate-750 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-350 dark:hover:border-slate-600 transition duration-150 active:scale-95 group cursor-pointer"
                title="Entrar com o Facebook"
              >
                <svg className="w-5 h-5 group-hover:scale-105 transition-transform" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
              
              {/* Apple */}
              <button
                type="button"
                onClick={handleAppleLogin}
                className="flex items-center justify-center h-11 border border-slate-200 dark:border-slate-750 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-350 dark:hover:border-slate-600 transition duration-150 active:scale-95 group cursor-pointer"
                title="Entrar com a Apple"
              >
                <svg className="w-5 h-5 fill-current text-slate-800 dark:text-slate-100 group-hover:scale-105 transition-transform" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.51-.64.73-1.2 1.88-1.05 2.99 1.12.09 2.27-.58 3-1.44z" />
                </svg>
              </button>
            </div>

            {/* Rodapé do Modal */}
            <div className="text-center pt-1.5">
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setAuthError("");
                }}
                className="text-xs font-semibold text-blue-600 hover:underline dark:text-blue-400"
              >
                {isSignUp ? "Já possui uma conta? Faça Login" : "Não tem uma conta? Cadastre-se"}
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 🚀 Mobile Sticky Bottom navigation actions header */}
      <footer id="mobile-sticky-bottom-nav" className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 dark:bg-slate-900 dark:border-slate-800 flex justify-around items-center h-16 px-2 print:hidden shadow-lg shadow-black">
        {[
          { id: "home", label: "Dashboard", icon: "🏠" },
          { id: "quiz", label: "Caderno", icon: "📚" },
          { id: "bank", label: "Banco", icon: "➕" },
          { id: "progress", label: "Progresso", icon: "📈" },
          { id: "profile", label: "Perfil", icon: "👤" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className="flex flex-col items-center justify-center p-2 flex-grow transition"
          >
            <span className="text-xl leading-none">{item.icon}</span>
            <span className={`text-[10px] font-bold mt-1 ${activeTab === item.id ? "text-blue-600 dark:text-blue-400" : "text-slate-400"}`}>
              {item.label}
            </span>
          </button>
        ))}
      </footer>

      {/* Custom Popup/Modal Alert & Confirm Dialog System */}
      <AnimatePresence>
        {dialog && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => handleDialogClose(false)}
              className="absolute inset-0 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm"
            />

            {/* Modal Body Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-sm p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl space-y-4 text-center overflow-hidden"
            >
              {/* Top Decorative Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

              {/* Icon Container */}
              <div className="flex justify-center pt-2">
                {(() => {
                  const msg = dialog.message.toLowerCase();
                  if (dialog.isDanger || msg.includes("zerar") || msg.includes("irreversível") || msg.includes("apagar")) {
                    return (
                      <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-500 dark:bg-rose-950/20 dark:text-rose-400 flex items-center justify-center shadow-inner">
                        <AlertTriangle className="w-7 h-7" />
                      </div>
                    );
                  }
                  if (msg.includes("parabéns") || msg.includes("conquista") || msg.includes("desbloqueada") || msg.includes("🏆") || msg.includes("🌟")) {
                    return (
                      <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-500 dark:bg-amber-955/20 dark:text-amber-400 flex items-center justify-center animate-bounce shadow-inner">
                        <Trophy className="w-7 h-7 text-amber-500" />
                      </div>
                    );
                  }
                  if (msg.includes("sucesso") || msg.includes("confirmar") || msg.includes("excelente") || msg.includes("cadastrada")) {
                    return (
                      <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-500 dark:bg-emerald-955/20 dark:text-emerald-400 flex items-center justify-center shadow-inner">
                        <CheckCircle className="w-7 h-7" />
                      </div>
                    );
                  }
                  if (dialog.type === "confirm" || msg.includes("sair") || msg.includes("logout") || msg.includes("certeza")) {
                    return (
                      <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-500 dark:bg-indigo-955/20 dark:text-indigo-400 flex items-center justify-center shadow-inner">
                        <LogOut className="w-6 h-6" />
                      </div>
                    );
                  }
                  return (
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-500 dark:bg-blue-955/20 dark:text-blue-400 flex items-center justify-center shadow-inner">
                      <AlertCircle className="w-7 h-7" />
                    </div>
                  );
                })()}
              </div>

              {/* Title & Message */}
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 tracking-tight leading-none">
                  {dialog.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold whitespace-pre-line leading-relaxed px-2">
                  {dialog.message}
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex gap-2.5 pt-2">
                {dialog.type === "confirm" && (
                  <button
                    type="button"
                    onClick={() => handleDialogClose(false)}
                    className="flex-1 py-2.5 bg-slate-105 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-600 dark:text-slate-300 font-bold rounded-2xl text-xs transition duration-150 active:scale-95"
                  >
                    {dialog.cancelText || "Cancelar"}
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => handleDialogClose(true)}
                  className={`flex-1 py-2.5 font-bold rounded-2xl text-xs transition duration-150 active:scale-95 text-white ${
                    dialog.isDanger
                      ? "bg-rose-600 hover:bg-rose-700 shadow-lg shadow-rose-600/10"
                      : "bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/10"
                  }`}
                >
                  {dialog.confirmText || "Ok"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


    </div>
  );
}
