import React from "react";

function AnswerOptions({ question, selectedAnswer, onAnswerChange }) {
  const { type, options } = question;

  switch (type) {
    case "multiple-choice":
      return (
        <div className="space-y-3">
          {options.map((option, index) => (
            <label
              key={index}
              className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                selectedAnswer === option
                  ? "bg-indigo-100 border-indigo-500 shadow-md"
                  : "bg-white hover:bg-gray-100 border-gray-200"
              }`}
            >
              <input
                type="radio"
                name={`question-${question.id}`}
                value={option}
                checked={selectedAnswer === option}
                onChange={() => onAnswerChange(option)}
                className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300"
              />
              <span className="ml-4 text-gray-800 font-medium">{option}</span>
            </label>
          ))}
        </div>
      );

    case "true-false":
      return (
        <div className="space-y-3">
          {["true", "false"].map((value, index) => (
            <label
              key={index}
              className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                selectedAnswer === value
                  ? "bg-indigo-100 border-indigo-500 shadow-md"
                  : "bg-white hover:bg-gray-100 border-gray-200"
              }`}
            >
              <input
                type="radio"
                name={`question-${question.id}`}
                value={value}
                checked={selectedAnswer === value}
                onChange={() => onAnswerChange(value)}
                className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300"
              />
              <span className="ml-4 text-gray-800 font-medium">
                {value === "true" ? "Benar" : "Salah"}
              </span>
            </label>
          ))}
        </div>
      );

    case "essay":
      return (
        <div>
          <textarea
            placeholder="Tulis jawaban Anda di sini..."
            value={selectedAnswer || ""}
            onChange={(e) => onAnswerChange(e.target.value)}
            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            rows="5"
          ></textarea>
          <p className="text-xs italic text-gray-500 mt-2">
            Jawaban esai akan dinilai secara manual oleh instruktur.
          </p>
        </div>
      );

    default:
      return <p>Tipe soal tidak didukung.</p>;
  }
}

export default AnswerOptions;
