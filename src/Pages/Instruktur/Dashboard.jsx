import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  BookCheck,
  Clock,
  Award,
  Users,
  AlertTriangle,
  Upload,
  BarChart3,
  MessageSquare,
} from "lucide-react";

import { classPerformance, strugglingStudents, classStats } from "@/Data/Dummy";
import CustomTooltip from "@/Components/CustomTooltip";
import Button from "@/Components/Button";
import { useUser } from "@/Hooks/useUser";

function InstructorDashboard() {
  const user = useUser();
  const [activeTab, setActiveTab] = useState("upload");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <div className="mx-auto space-y-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Dashboard Instruktur
              </h1>
              <p className="text-gray-600 mt-2 text-lg">
                Selamat datang, {user?.name}! Pantau performa kelas Anda di
                sini.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">
                  {user?.name?.[0] || "I"}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group bg-white/80 backdrop-blur-sm p-6 shadow-lg rounded-2xl border border-white/20">
            <Award className="text-blue-500 w-8 h-8 mb-4" />
            <h3 className="font-bold text-lg text-gray-800">Rata-rata Nilai</h3>
            <p className="text-3xl font-bold text-blue-600">
              {classStats.averageScore}
            </p>
          </div>
          <div className="group bg-white/80 backdrop-blur-sm p-6 shadow-lg rounded-2xl border border-white/20">
            <BookCheck className="text-green-500 w-8 h-8 mb-4" />
            <h3 className="font-bold text-lg text-gray-800">
              Penyelesaian Modul
            </h3>
            <p className="text-3xl font-bold text-green-600">
              {classStats.completionRate}%
            </p>
          </div>
          <div className="group bg-white/80 backdrop-blur-sm p-6 shadow-lg rounded-2xl border border-white/20">
            <Clock className="text-orange-500 w-8 h-8 mb-4" />
            <h3 className="font-bold text-lg text-gray-800">
              Total Jam Belajar
            </h3>
            <p className="text-3xl font-bold text-orange-600">
              {classStats.totalHours}
            </p>
          </div>
          <div className="group bg-white/80 backdrop-blur-sm p-6 shadow-lg rounded-2xl border border-white/20">
            <Users className="text-indigo-500 w-8 h-8 mb-4" />
            <h3 className="font-bold text-lg text-gray-800">Mahasiswa Aktif</h3>
            <p className="text-3xl font-bold text-indigo-600">
              {classStats.activeStudents}
            </p>
          </div>
        </div>

        {/* Analytics and Student Watchlist */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm p-6 shadow-lg rounded-2xl border border-white/20">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Overview Performa Mahasiswa
            </h3>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart
                data={classPerformance}
                margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis
                  dataKey="name"
                  tick={{ fill: "#6B7280", fontSize: 12 }}
                />
                <YAxis tick={{ fill: "#6B7280", fontSize: 12 }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar
                  dataKey="score"
                  name="Rata-rata Nilai"
                  fill="#6366F1"
                  radius={[8, 8, 0, 0]}
                />
                <Bar
                  dataKey="completion"
                  name="Penyelesaian (%)"
                  fill="#10B981"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="lg:col-span-1 bg-white/80 backdrop-blur-sm p-6 shadow-lg rounded-2xl border border-white/20">
            <div className="flex items-center mb-4">
              <AlertTriangle className="text-red-500 w-6 h-6 mr-3" />
              <h3 className="text-xl font-bold text-gray-800">
                Mahasiswa Perlu Perhatian
              </h3>
            </div>
            <div className="space-y-4">
              {strugglingStudents.map((student) => (
                <div
                  key={student.id}
                  className="bg-red-50 border border-red-200 p-3 rounded-lg"
                >
                  <p className="font-semibold text-red-800">{student.name}</p>
                  <p className="text-sm text-red-700">{student.reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm p-6 shadow-lg rounded-2xl border border-white/20">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Manajemen Konten
          </h2>
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-6" aria-label="Tabs">
              <button
                onClick={() => setActiveTab("upload")}
                className={`flex items-center py-3 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "upload"
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <Upload size={16} className="mr-2" />
                Upload Media
              </button>
              <button
                onClick={() => setActiveTab("analytics")}
                className={`flex items-center py-3 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "analytics"
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <BarChart3 size={16} className="mr-2" />
                Analitik Konten
              </button>
              <button
                onClick={() => setActiveTab("feedback")}
                className={`flex items-center py-3 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "feedback"
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <MessageSquare size={16} className="mr-2" />
                Koleksi Feedback
              </button>
            </nav>
          </div>

          <div className="py-6">
            {activeTab === "upload" && (
              <div>
                <h3 className="font-semibold text-lg text-gray-700 mb-4">
                  Upload Media Baru
                </h3>
                <div className="p-8 border-2 border-dashed border-gray-300 rounded-xl text-center">
                  <p className="text-gray-500 mb-4">
                    Seret & lepas file Anda di sini atau pilih dari tombol di
                    bawah.
                  </p>
                  <div className="flex justify-center gap-4">
                    <Button className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 cursor-pointer">
                      Upload Video
                    </Button>
                    <Button className="flex items-center justify-center bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:from-red-700 hover:to-red-800 transition-all duration-200 cursor-pointer">
                      Upload PDF
                    </Button>
                    <Button className="flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:from-green-700 hover:to-green-800 transition-all duration-200 cursor-pointer">
                      Upload Gambar
                    </Button>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "analytics" && (
              <div>
                <h3 className="font-semibold text-lg text-gray-700 mb-4">
                  Analitik Keterlibatan Konten
                </h3>
                <div className="space-y-3">
                  <p className="p-3 bg-green-50 border-l-4 border-green-400 rounded">
                    <strong>Paling Populer:</strong> Modul "Pengenalan React"
                  </p>
                  <p className="p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                    <strong>Perlu Perbaikan:</strong> Modul "Dasar-dasar
                    Jaringan"
                  </p>
                </div>
              </div>
            )}
            {activeTab === "feedback" && (
              <div>
                <h3 className="font-semibold text-lg text-gray-700 mb-4">
                  Feedback dari Mahasiswa
                </h3>
                <div className="space-y-3">
                  <p className="p-3 bg-gray-100 rounded-lg">
                    "Materi tentang hooks sangat membantu, terima kasih Pak!" -{" "}
                    <strong>Andi</strong>
                  </p>
                  <p className="p-3 bg-gray-100 rounded-lg">
                    "Penjelasan tentang normalisasi database agak sulit
                    dipahami." - <strong>Budi</strong>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructorDashboard;
