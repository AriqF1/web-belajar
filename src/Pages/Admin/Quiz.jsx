import React, { useState } from "react";
import {
  quizzes,
  quizScoresHistory,
  questionAccuracy,
  timePerQuestion,
} from "@/Data/Dummy";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { PlayCircle, Clock, Check, BarChart2 } from "lucide-react";
import CustomTooltip from "@/Components/CustomTooltip";
import Button from "@/Components/Button";
import QuizTaking from "@/Components/QuizTaking";

function StudentQuizPage() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  if (selectedQuiz) {
    return (
      <QuizTaking quiz={selectedQuiz} onFinish={() => setSelectedQuiz(null)} />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <div className="mx-auto space-y-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            Halaman Kuis
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Uji pemahaman Anda dan lihat progres Anda di sini.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm p-6 shadow-lg rounded-2xl border border-white/20">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Kuis yang Tersedia
          </h2>
          <div className="space-y-4">
            {quizzes.map((quiz) => (
              <div
                key={quiz.id}
                className="flex justify-between items-center p-4 border rounded-xl shadow-sm"
              >
                <div>
                  <p className="font-semibold text-gray-900">{quiz.title}</p>
                  <p className="text-sm text-gray-500">
                    {quiz.questions.length} Soal • {quiz.timeLimit / 60} Menit
                  </p>
                </div>
                <Button
                  onClick={() => setSelectedQuiz(quiz)}
                  className="w-40 flex items-center justify-center bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:from-indigo-700 hover:to-indigo-800 transition-all duration-200 cursor-pointer"
                >
                  <PlayCircle size={18} className="mr-2" />
                  Kerjakan
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm p-6 shadow-lg rounded-2xl border border-white/20">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Dashboard Performa Kuis
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-gray-700 flex items-center">
                <Check className="mr-2 text-indigo-500" />
                Riwayat Nilai
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={quizScoresHistory}
                  margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
                >
                  <defs>
                    <linearGradient
                      id="scoreGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#6366F1" stopOpacity={0.8} />
                      <stop
                        offset="95%"
                        stopColor="#8B5CF6"
                        stopOpacity={0.4}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis
                    dataKey="quizName"
                    fontSize={11}
                    tick={{ fill: "#6B7280" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "#6B7280", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ fontSize: "14px" }} />
                  <Line
                    type="monotone"
                    dataKey="score"
                    name="Nilai"
                    stroke="url(#scoreGradient)"
                    strokeWidth={3}
                    dot={{ r: 5, strokeWidth: 2, fill: "#fff" }}
                    activeDot={{
                      r: 8,
                      stroke: "#6366F1",
                      fill: "#fff",
                      strokeWidth: 2,
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-700 flex items-center">
                <BarChart2 className="mr-2 text-green-500" />
                Akurasi per Soal
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={questionAccuracy}>
                  <defs>
                    <linearGradient
                      id="accuracyGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.9} />
                      <stop
                        offset="95%"
                        stopColor="#34D399"
                        stopOpacity={0.7}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis
                    dataKey="question"
                    fontSize={11}
                    tick={{ fill: "#6B7280" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    unit="%"
                    tick={{ fill: "#6B7280", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    content={<CustomTooltip />}
                    cursor={{ fill: "rgba(239, 246, 255, 0.5)" }}
                  />
                  <Legend wrapperStyle={{ fontSize: "14px" }} />
                  <Bar
                    dataKey="accuracy"
                    name="Akurasi"
                    fill="url(#accuracyGradient)"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="font-semibold mb-4 text-gray-700 flex items-center">
              <Clock className="mr-2 text-orange-500" />
              Analisis Waktu per Soal (Rata-rata)
            </h3>
            <div className="space-y-3">
              {timePerQuestion.map((item) => (
                <div
                  key={item.question}
                  className="flex justify-between items-center text-sm p-3 bg-gray-50 rounded-lg"
                >
                  <span className="font-medium text-gray-800">
                    {item.question}
                  </span>
                  <span className="font-bold text-gray-600">
                    {item.time} detik
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentQuizPage;
