import { useState } from "react";
import Swal from "sweetalert2";

function AccordionItem({ materi, isOpen, onToggle, onMarkComplete }) {
  const handleAsk = async () => {
    const { value: question } = await Swal.fire({
      title: "Tanya Dosen",
      input: "textarea",
      inputLabel: "Pertanyaan",
      inputPlaceholder: "Tulis pertanyaanmu di sini...",
      showCancelButton: true,
    });

    if (question) {
      Swal.fire("Berhasil!", "Pertanyaan berhasil dikirim.", "success");
    }
  };

  return (
    <div className="border border-gray-300 rounded-lg mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <button
        className="w-full text-left p-4 bg-indigo-600 text-white font-semibold rounded-t-lg hover:bg-indigo-700 focus:outline-none"
        onClick={onToggle}
      >
        {materi.judul}
      </button>
      {isOpen && (
        <div className="p-4 bg-white rounded-b-lg space-y-4">
          <p className="text-gray-700">{materi.deskripsi}</p>
          <div className="flex gap-4">
            <button
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none transition duration-200"
              onClick={() => onMarkComplete(materi.id)}
            >
              Tandai Selesai
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none transition duration-200"
              onClick={handleAsk}
            >
              Tanya Dosen
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default AccordionItem;
