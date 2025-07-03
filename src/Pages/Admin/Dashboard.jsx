import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import {
  weeklyProgress,
  studyTimeByCategory,
  moduleStatusDistribution,
  abilityRadar,
  modules,
  learningTimeAccumulation,
} from "@/Data/Dummy";
import CustomTooltip from "@/Components/CustomTooltip";

const COLORS = ["#6366F1", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"];
const GRADIENT_COLORS = {
  primary: ["#667eea", "#764ba2"],
  secondary: ["#f093fb", "#f5576c"],
  success: ["#4facfe", "#00f2fe"],
  warning: ["#43e97b", "#38f9d7"],
};

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    setUser(userData || {});
  }, []);

  const lastModule = modules.find((m) => m.status === "Sedang Berjalan");
  const bookmarkedModule = modules.find((m) => m.bookmarked);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-6">
      <div className="mx-auto space-y-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Halo, {user.name || "Sobat Belajar"}! 👋
              </h1>
              <p className="text-gray-600 mt-2 text-lg">
                Selamat datang kembali! Ini adalah ringkasan progres dan
                aktivitas belajarmu.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">
                  {user.name?.[0] || "S"}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group bg-white/80 backdrop-blur-sm p-6 shadow-lg rounded-2xl border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl">📚</span>
              </div>
              <span className="text-xs font-medium text-indigo-600 bg-indigo-100 px-2 py-1 rounded-full">
                Aktif
              </span>
            </div>
            <h3 className="font-bold text-lg text-gray-800 mb-2">
              Lanjutkan Modul
            </h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {lastModule?.title || "Tidak ada modul aktif"}
            </p>
            <button
              onClick={() => navigate("/kelas")}
              className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-4 py-2 rounded-xl text-sm font-medium hover:from-indigo-700 hover:to-indigo-800 transition-all duration-200"
            >
              Lanjutkan
            </button>
          </div>

          <div className="group bg-white/80 backdrop-blur-sm p-6 shadow-lg rounded-2xl border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl">✨</span>
              </div>
              <span className="text-xs font-medium text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">
                Rekomendasi
              </span>
            </div>
            <h3 className="font-bold text-lg text-gray-800 mb-2">
              Rekomendasi Modul
            </h3>
            <p className="text-gray-600 text-sm mb-4">Dasar-dasar UI/UX</p>
            <button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-4 py-2 rounded-xl text-sm font-medium hover:from-emerald-700 hover:to-emerald-800 transition-all duration-200">
              Mulai
            </button>
          </div>

          <div className="group bg-white/80 backdrop-blur-sm p-6 shadow-lg rounded-2xl border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl">🎯</span>
              </div>
              <span className="text-xs font-medium text-amber-600 bg-amber-100 px-2 py-1 rounded-full">
                33%
              </span>
            </div>
            <h3 className="font-bold text-lg text-gray-800 mb-2">
              Target Harian
            </h3>
            <p className="text-gray-600 text-sm mb-4">1/3 Modul Selesai</p>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-amber-500 to-amber-600 h-3 rounded-full transition-all duration-500"
                style={{ width: "33%" }}
              ></div>
            </div>
          </div>

          <div className="group bg-white/80 backdrop-blur-sm p-6 shadow-lg rounded-2xl border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl">🔖</span>
              </div>
              <span className="text-xs font-medium text-rose-600 bg-rose-100 px-2 py-1 rounded-full">
                Saved
              </span>
            </div>
            <h3 className="font-bold text-lg text-gray-800 mb-2">
              Materi di-Bookmark
            </h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {bookmarkedModule?.title || "Tidak ada"}
            </p>
            <button className="w-full bg-gradient-to-r from-rose-600 to-rose-700 text-white px-4 py-2 rounded-xl text-sm font-medium hover:from-rose-700 hover:to-rose-800 transition-all duration-200">
              Lihat
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white/80 backdrop-blur-sm p-6 shadow-lg rounded-2xl border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800">
                  Progress Belajar per Minggu (Modul)
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Progress</span>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={weeklyProgress}
                  margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
                >
                  <defs>
                    <linearGradient
                      id="progressGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#6366F1" stopOpacity={0.8} />
                      <stop
                        offset="95%"
                        stopColor="#6366F1"
                        stopOpacity={0.1}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis
                    dataKey="week"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#6B7280", fontSize: 12 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#6B7280", fontSize: 12 }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="progress"
                    stroke="#6366F1"
                    strokeWidth={3}
                    dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
                    activeDot={{ r: 8, fill: "#6366F1" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 shadow-lg rounded-2xl border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800">
                  Waktu Belajar per Kategori (Jam)
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Jam</span>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={studyTimeByCategory}
                  margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
                >
                  <defs>
                    <linearGradient
                      id="barGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                      <stop
                        offset="95%"
                        stopColor="#10B981"
                        stopOpacity={0.6}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis
                    dataKey="category"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#6B7280", fontSize: 12 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#6B7280", fontSize: 12 }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar
                    dataKey="time"
                    fill="url(#barGradient)"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/80 backdrop-blur-sm p-6 shadow-lg rounded-2xl border border-white/20">
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                Distribusi Status Modul
              </h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend
                    wrapperStyle={{ fontSize: "12px" }}
                    iconType="circle"
                  />
                  <Pie
                    data={moduleStatusDistribution}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    innerRadius={30}
                    paddingAngle={2}
                    label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                  >
                    {moduleStatusDistribution.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 shadow-lg rounded-2xl border border-white/20">
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                Penilaian Kemampuan
              </h3>
              <ResponsiveContainer width="100%" height={250}>
                <RadarChart
                  cx="50%"
                  cy="50%"
                  outerRadius="70%"
                  data={abilityRadar}
                >
                  <PolarGrid stroke="#E5E7EB" />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fill: "#6B7280", fontSize: 11 }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Radar
                    name="Kemampuan"
                    dataKey="A"
                    stroke="#8B5CF6"
                    fill="#8B5CF6"
                    fillOpacity={0.3}
                    strokeWidth={2}
                    dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 4 }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 shadow-lg rounded-2xl border border-white/20">
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                Akumulasi Jam Belajar
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={learningTimeAccumulation}>
                  <defs>
                    <linearGradient
                      id="areaGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.8} />
                      <stop
                        offset="95%"
                        stopColor="#F59E0B"
                        stopOpacity={0.1}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#6B7280", fontSize: 12 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#6B7280", fontSize: 12 }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="jam"
                    stroke="#F59E0B"
                    fillOpacity={1}
                    fill="url(#areaGradient)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
