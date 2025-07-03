export const modules = [
  {
    id: 1,
    title: "Pengenalan React",
    category: "Programming",
    status: "Selesai",
    bookmarked: true,
  },
  {
    id: 2,
    title: "State & Props Lanjutan",
    category: "Programming",
    status: "Sedang Berjalan",
  },
  {
    id: 3,
    title: "React Router DOM",
    category: "Programming",
    status: "Belum Dimulai",
  },
  {
    id: 4,
    title: "Dasar-dasar Jaringan",
    category: "Network",
    status: "Selesai",
  },
  {
    id: 5,
    title: "Normalisasi Database",
    category: "Database",
    status: "Selesai",
  },
  {
    id: 6,
    title: "Pengenalan UI/UX",
    category: "UI/UX",
    status: "Belum Dimulai",
  },
  {
    id: 7,
    title: "Advanced Hooks",
    category: "Programming",
    status: "Sedang Berjalan",
  },
  {
    id: 8,
    title: "Manajemen State dengan Context",
    category: "Programming",
    status: "Belum Dimulai",
  },
  {
    id: 9,
    title: "Query & Mutation dengan React Query",
    category: "Programming",
    status: "Belum Dimulai",
  },
  {
    id: 10,
    title: "Desain Relasional",
    category: "Database",
    status: "Selesai",
  },
];

export const quizzes = [
  {
    id: 1,
    moduleId: 1,
    title: "Kuis Pengenalan React",
    timeLimit: 600,
    passingGrade: 80,
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question:
          "Apa fungsi utama dari `render()` dalam komponen class React?",
        options: [
          "Memperbarui state",
          "Menampilkan elemen ke DOM",
          "Menangani event",
        ],
        answer: "Menampilkan elemen ke DOM",
      },
      {
        id: 2,
        type: "true-false",
        question: "Props di React bersifat immutable (tidak bisa diubah).",
        answer: "true",
      },
      {
        id: 3,
        type: "essay",
        question: "Props di React bersifat immutable (tidak bisa diubah).",
        answer: "true",
      },
    ],
  },
  {
    id: 2,
    moduleId: 2,
    title: "Kuis State & Props",
    timeLimit: 900,
    passingGrade: 75,
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "Bagaimana cara memperbarui state di komponen class?",
        options: ["this.state = {}", "this.updateState()", "this.setState()"],
        answer: "this.setState()",
      },
    ],
  },
];
export const quizScoresHistory = [
  { quizName: "Kuis 1: Dasar", score: 80 },
  { quizName: "Kuis 2: State", score: 75 },
  { quizName: "Kuis 3: Props", score: 90 },
  { quizName: "Kuis 4: Hooks", score: 85 },
  { quizName: "Kuis 5: Router", score: 95 },
];

export const questionAccuracy = [
  { question: "Soal 1", accuracy: 100 },
  { question: "Soal 2", accuracy: 75 },
  { question: "Soal 3", accuracy: 50 },
  { question: "Soal 4", accuracy: 90 },
  { question: "Soal 5", accuracy: 100 },
];

export const timePerQuestion = [
  { question: "Soal 1", time: 35 },
  { question: "Soal 2", time: 55 },
  { question: "Soal 3", time: 70 },
  { question: "Soal 4", time: 40 },
  { question: "Soal 5", time: 30 },
];

export const achievements = [
  {
    id: 1,
    title: "Langkah Pertama",
    description: "Selesaikan modul pertamamu.",
    achieved: true,
    rarity: "Common",
  },
  {
    id: 2,
    title: "Maraton Belajar",
    description: "Belajar selama 3 hari berturut-turut.",
    achieved: true,
    progress: 100,
    rarity: "Rare",
  },
  {
    id: 3,
    title: "Ahli Kuis",
    description: "Dapatkan nilai 100 di 3 kuis.",
    achieved: false,
    progress: 33,
    rarity: "Epic",
  },
  {
    id: 4,
    title: "Kolektor Pengetahuan",
    description: "Selesaikan 5 modul.",
    achieved: true,
    rarity: "Rare",
  },
  {
    id: 5,
    title: "Programmer Andal",
    description: "Selesaikan semua modul kategori Programming.",
    achieved: false,
    progress: 50,
    rarity: "Epic",
  },
];

export const weeklyProgress = [
  { week: "Minggu 1", progress: 2 },
  { week: "Minggu 2", progress: 5 },
  { week: "Minggu 3", progress: 8 },
  { week: "Minggu 4", progress: 12 },
];

export const studyTimeByCategory = [
  { category: "Programming", time: 45 },
  { category: "Database", time: 20 },
  { category: "Network", time: 15 },
  { category: "UI/UX", time: 10 },
];

export const moduleStatusDistribution = [
  {
    name: "Selesai",
    value: modules.filter((m) => m.status === "Selesai").length,
  },
  {
    name: "Sedang Berjalan",
    value: modules.filter((m) => m.status === "Sedang Berjalan").length,
  },
  {
    name: "Belum Dimulai",
    value: modules.filter((m) => m.status === "Belum Dimulai").length,
  },
];

export const learningTimeAccumulation = [
  { name: "Jan", jam: 10 },
  { name: "Feb", jam: 25 },
  { name: "Mar", jam: 45 },
  { name: "Apr", jam: 70 },
];

export const abilityRadar = [
  { subject: "Programming", A: 90, fullMark: 100 },
  { subject: "Database", A: 75, fullMark: 100 },
  { subject: "Network", A: 60, fullMark: 100 },
  { subject: "UI/UX", A: 85, fullMark: 100 },
];

export const classPerformance = [
  { name: "Andi", score: 88, completion: 90 },
  { name: "Budi", score: 72, completion: 60 },
  { name: "Citra", score: 95, completion: 100 },
  { name: "Doni", score: 65, completion: 50 },
  { name: "Eka", score: 81, completion: 75 },
  { name: "Fitri", score: 78, completion: 80 },
];

export const strugglingStudents = [
  { id: 1, name: "Doni", reason: "Nilai rata-rata rendah (65)" },
  { id: 2, name: "Budi", reason: "Penyelesaian modul lambat" },
];

export const classStats = {
  averageScore: 79.8,
  completionRate: 75,
  totalHours: 450,
  activeStudents: 25,
};

export const forumThreads = [
  {
    id: 1,
    title: "Bagaimana cara state management terbaik di React?",
    author: "Budi Sanjaya",
    authorLevel: "Master",
    date: "2025-07-02T10:00:00Z",
    votes: 25,
    replies: 8,
    tags: ["react", "state-management", "pemula"],
    solved: true,
    isPinned: true,
  },
  {
    id: 2,
    title: "Perbedaan `useEffect` dan `useLayoutEffect`",
    author: "Ani Lestari",
    authorLevel: "Master",
    date: "2025-07-03T11:30:00Z",
    votes: 18,
    replies: 5,
    tags: ["react", "hooks", "lanjutan"],
    solved: false,
    isPinned: true,
  },
  {
    id: 3,
    title: "Error: Target container is not a DOM element",
    author: "Citra Dewi",
    authorLevel: "Master",
    date: "2025-07-01T15:00:00Z",
    votes: 12,
    replies: 4,
    tags: ["error", "debug", "react-dom"],
    solved: true,
    isPinned: true,
  },
  {
    id: 4,
    title: "Kapan sebaiknya menggunakan Context API vs Redux?",
    author: "Doni Prasetyo",
    authorLevel: "Contributor",
    date: "2025-06-30T09:00:00Z",
    votes: 35,
    replies: 15,
    tags: ["arsitektur", "state-management", "redux"],
    solved: false,
    isPinned: false,
  },
];
