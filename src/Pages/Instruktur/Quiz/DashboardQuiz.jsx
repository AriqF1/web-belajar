import React, { useState } from "react";
import { Plus, Eye, Edit, Trash2, FileText, XCircle } from "lucide-react";
import { quizzes as initialQuizzes, modules } from "@/Data/Dummy";
import Input from "@/Components/Input";
import Button from "@/Components/Button";
import toast from "react-hot-toast";

function DashboardQuiz() {
  const [quizzes, setQuizzes] = useState(initialQuizzes);
  const [quizDetails, setQuizDetails] = useState({
    title: "",
    moduleId: "",
    timeLimit: "",
    passingGrade: "",
    questions: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuizDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleAddQuestion = () => {
    setQuizDetails((prev) => ({
      ...prev,
      questions: [
        ...prev.questions,
        {
          id: Date.now(),
          type: "multiple-choice",
          text: "",
          options: [{ text: "", isCorrect: false }],
        },
      ],
    }));
  };

  const handleRemoveQuestion = (questionId) => {
    setQuizDetails((prev) => ({
      ...prev,
      questions: prev.questions.filter((q) => q.id !== questionId),
    }));
  };

  const handleQuestionChange = (questionId, field, value) => {
    setQuizDetails((prev) => ({
      ...prev,
      questions: prev.questions.map((q) =>
        q.id === questionId ? { ...q, [field]: value } : q
      ),
    }));
  };

  const handleSaveQuiz = () => {
    if (!quizDetails.title || quizDetails.questions.length === 0) {
      toast.error("Judul dan minimal satu pertanyaan harus diisi!");
      return;
    }

    const newQuiz = {
      id: `quiz-${Date.now()}`,
      ...quizDetails,
    };

    setQuizzes((prevQuizzes) => [newQuiz, ...prevQuizzes]);
    toast.success("Kuis berhasil ditambahkan!");

    setQuizDetails({
      title: "",
      moduleId: "",
      timeLimit: "",
      passingGrade: "",
      questions: [],
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <div className="mx-auto space-y-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            Manajemen Kuis
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Buatlah dan kelola kuis untuk modul Anda dengan mudah.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 bg-white/80 backdrop-blur-sm p-6 shadow-lg rounded-2xl border border-white/20">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FileText className="mr-3 text-blue-600" />
              Pembuat Kuis
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
              <Input
                id="title"
                name="title"
                label="Judul Kuis"
                type="text"
                placeholder="Kuis Dasar React"
                value={quizDetails.title}
                onChange={handleChange}
              />
            </div>
            <div className="mt-6 border-t border-gray-200 pt-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-700">
                  Daftar Pertanyaan
                </h3>
                <Button
                  onClick={handleAddQuestion}
                  className="flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-200"
                >
                  <Plus size={16} className="mr-2" />
                  Tambah Pertanyaan
                </Button>
              </div>
              <div className="space-y-6">
                {quizDetails.questions.map((q, index) => (
                  <div
                    key={q.id}
                    className="bg-gray-50 p-4 rounded-lg border border-gray-200 relative"
                  >
                    <Button
                      onClick={() => handleRemoveQuestion(q.id)}
                      className="absolute top-2 right-2 text-gray-400 hover:text-red-500 p-1 bg-transparent border-none"
                    >
                      <XCircle size={20} />
                    </Button>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="font-bold text-lg text-gray-600">
                        {index + 1}
                      </span>
                      <select
                        value={q.type}
                        onChange={(e) =>
                          handleQuestionChange(q.id, "type", e.target.value)
                        }
                        className="p-2 border rounded-md"
                      >
                        <option value="multiple-choice">Pilihan Ganda</option>
                        <option value="true-false">Benar/Salah</option>
                        <option value="essay">Esai</option>
                      </select>
                    </div>
                    <textarea
                      placeholder="Tulis teks pertanyaan di sini..."
                      value={q.text}
                      onChange={(e) =>
                        handleQuestionChange(q.id, "text", e.target.value)
                      }
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                      rows="2"
                    ></textarea>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end space-x-4 mt-8 border-t pt-6">
              <Button className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600">
                Preview
              </Button>
              <Button
                onClick={handleSaveQuiz}
                className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg"
              >
                Simpan Kuis
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm p-6 shadow-lg rounded-2xl border border-white/20">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Daftar Kuis
            </h2>
            <div className="space-y-4">
              {quizzes.map((quiz) => (
                <div
                  key={quiz.id}
                  className="flex justify-between items-center p-4 border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all duration-300"
                >
                  <div>
                    <p className="font-semibold text-gray-900">{quiz.title}</p>
                    <p className="text-sm text-gray-500">
                      Modul:{" "}
                      {modules.find((m) => m.id === quiz.moduleId)?.title ||
                        "Umum"}
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Button
                      className="text-blue-500 hover:text-blue-700 bg-transparent p-2"
                      title="Preview"
                    >
                      <Eye size={18} />
                    </Button>
                    <Button
                      className="text-yellow-500 hover:text-yellow-700 bg-transparent p-2"
                      title="Edit"
                    >
                      <Edit size={18} />
                    </Button>
                    <Button
                      className="text-red-500 hover:text-red-700 bg-transparent p-2"
                      title="Hapus"
                    >
                      <Trash2 size={18} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardQuiz;
