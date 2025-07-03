// src/Components/QuizTaking.jsx

import React, { useEffect, useReducer } from "react";
import { initialQuizState, quizReducer } from "@/reducers/quizReducer";
import Button from "@/Components/Button";
import { ArrowLeft, ArrowRight, Clock, Flag } from "lucide-react";
import Swal from "sweetalert2";

function QuizTaking({ quiz, onFinish }) {
  const [state, dispatch] = useReducer(quizReducer, initialQuizState);

  useEffect(() => {
    dispatch({
      type: "START_QUIZ",
      payload: { questions: quiz.questions, timeLimit: quiz.timeLimit },
    });
  }, [quiz]);

  useEffect(() => {
    if (state.status === "active" && state.timeLeft > 0) {
      const timerId = setInterval(() => dispatch({ type: "TICK_TIMER" }), 1000);
      return () => clearInterval(timerId);
    }
  }, [state.status, state.timeLeft]);

  useEffect(() => {
    if (state.status === "finished") {
      Swal.fire({
        title: "Kuis Selesai!",
        text: "Jawaban Anda telah berhasil disimpan.",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
        allowOutsideClick: false,
      }).then(() => onFinish());
    }
  }, [state.status, onFinish]);

  if (state.questions.length === 0 || state.status !== "active") {
    return (
      <div
        className="flex items-center justify-center p-6"
        style={{ minHeight: "calc(100vh - 120px)" }}
      >
        <p>Memuat kuis...</p>
      </div>
    );
  }

  const { questions, currentQuestionIndex, answers, markedForReview } = state;
  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3 bg-white/80 backdrop-blur-sm p-8 shadow-lg rounded-2xl border border-white/20">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">{quiz.title}</h2>
          <div className="flex items-center font-bold text-red-500 bg-red-100 px-3 py-1 rounded-full">
            <Clock size={18} className="mr-2" />
            {new Date(state.timeLeft * 1000).toISOString().substr(14, 5)}
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg min-h-[200px]">
          <div className="flex justify-between items-start">
            <p className="text-sm text-gray-500 mb-2">
              Pertanyaan {currentQuestionIndex + 1} dari {totalQuestions}
            </p>
            <Button
              onClick={() => dispatch({ type: "TOGGLE_MARK_FOR_REVIEW" })}
              className={`flex items-center text-sm px-3 py-1 rounded-full border ${
                markedForReview.includes(currentQuestionIndex)
                  ? "bg-orange-500 text-white border-orange-600"
                  : "bg-white hover:bg-orange-50"
              }`}
            >
              <Flag size={14} className="mr-2" />
              {markedForReview.includes(currentQuestionIndex)
                ? "Hapus Tanda"
                : "Tandai"}
            </Button>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mt-2">
            {currentQuestion.text}
          </h3>
        </div>

        <div className="flex justify-between items-center mt-8 pt-6 border-t">
          <Button
            onClick={() => dispatch({ type: "PREV_QUESTION" })}
            disabled={currentQuestionIndex === 0}
            className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:from-indigo-700 hover:to-indigo-800 transition-all duration-200 cursor-pointer"
          >
            <ArrowLeft size={16} className="mr-2" /> Sebelumnya
          </Button>
          <Button
            onClick={() => dispatch({ type: "NEXT_QUESTION" })}
            className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:from-indigo-700 hover:to-indigo-800 transition-all duration-200 cursor-pointer"
          >
            {currentQuestionIndex === totalQuestions - 1
              ? "Selesai"
              : "Berikutnya"}
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>

      <div className="lg:col-span-1 bg-white/80 backdrop-blur-sm p-6 shadow-lg rounded-2xl border border-white/20 h-fit">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Navigasi Soal</h3>
        <div className="grid grid-cols-5 gap-2">
          {questions.map((_, index) => {
            const isCurrent = index === currentQuestionIndex;
            const isAnswered = answers[index] !== undefined;
            const isMarked = markedForReview.includes(index);

            let buttonClass = "border-gray-300 bg-white hover:bg-gray-100";
            if (isAnswered)
              buttonClass = "border-green-400 bg-green-100 text-green-800";
            if (isMarked)
              buttonClass = "border-orange-400 bg-orange-100 text-orange-800";
            if (isCurrent)
              buttonClass =
                "border-indigo-500 bg-indigo-600 text-white ring-2 ring-offset-1 ring-indigo-500";

            return (
              <Button
                key={index}
                onClick={() =>
                  dispatch({ type: "JUMP_TO_QUESTION", payload: { index } })
                }
                className={`flex items-center justify-center w-12 h-12 rounded-lg font-bold border transition-all duration-200 ${buttonClass}`}
              >
                {index + 1}
              </Button>
            );
          })}
        </div>
        <div className="mt-6 pt-4 border-t space-y-2 text-xs text-gray-600">
          <p className="flex items-center">
            <span className="w-4 h-4 rounded-full bg-indigo-600 mr-2 border"></span>{" "}
            Posisi Saat Ini
          </p>
          <p className="flex items-center">
            <span className="w-4 h-4 rounded-full bg-green-100 mr-2 border"></span>{" "}
            Sudah Dijawab
          </p>
          <p className="flex items-center">
            <span className="w-4 h-4 rounded-full bg-orange-100 mr-2 border"></span>{" "}
            Ditandai
          </p>
          <p className="flex items-center">
            <span className="w-4 h-4 rounded-full bg-white mr-2 border"></span>{" "}
            Belum Dijawab
          </p>
        </div>
      </div>
    </div>
  );
}

export default QuizTaking;
