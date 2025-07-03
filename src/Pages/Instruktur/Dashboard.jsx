import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { BookCheck, Clock, Award, Users, AlertTriangle } from "lucide-react";

import { classPerformance, strugglingStudents, classStats } from "@/Data/Dummy";
import CustomTooltip from "@/Components/CustomTooltip";
function InstructorDashboard() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    setUser(userData || { name: "Instruktur" });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <div className="mx-auto space-y-8">
        {/* Header Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Dashboard Instruktur
              </h1>
              <p className="text-gray-600 mt-2 text-lg">
                Selamat datang, {user.name}! Pantau performa kelas Anda di sini.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">
                  {user.name?.[0] || "I"}
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
          s
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
      </div>
    </div>
  );
}

export default InstructorDashboard;
