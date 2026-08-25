export interface Question {
  id: string;
  text: string;           // O enunciado da questão
  options: string[];      // Lista de alternativas (geralmente de A a E ou Certo/Errado)
  correctIndex: number;   // Índice da resposta correta (0 a 4)
  explanations: string[]; // Explicações detalhadas para cada opção (deve ter o mesmo tamanho de options)
  banca: string;          // CESPE, FGV, FCC, Cesgranrio, IBGE, etc.
  ano: number;
  assunto: string;        // Ortografia, Acentuação, Hífen, Noções de Administração, etc.
  nivelSuperior: boolean;
  image?: string | null;  // URL ou base64 da imagem correspondente
  generalExplanation?: string; // Comentário geral / Resolução da questão
}

export interface UserHistory {
  id: string;
  questionId: string;
  selectedOption: number;
  isCorrect: boolean;
  answeredAt: number;     // Timestamp
}

export interface UserProgress {
  userId: string;
  streak: number;
  lastAnsweredDate: string; // Formato YYYY-MM-DD
  xp: number;
  level: number;
  dailyGoal: number;        // Meta diária de questões (ex: 5, 10, 20)
  completedAchievements: string[]; // IDs das conquistas desbloqueadas
  displayName?: string;
  lastName?: string;
  address?: string;
  cep?: string;
  phone?: string;
  photoURL?: string;
  bio?: string;
  courseInterest?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  xpReward: number;
  icon: string;             // Nome do ícone do lucide-react ou emoji
}

export interface QuizSession {
  questions: Question[];
  currentIdx: number;
  answers: { [key: number]: number }; // questionIdx -> selectedOptionIdx
  startTime: number;
  sessionHistoryId?: string;
}
