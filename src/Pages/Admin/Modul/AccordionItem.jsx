import Swal from "sweetalert2";
import {
  CheckCircle,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  BookOpen,
} from "lucide-react";

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

  const progressPercentage = materi.progress || 0;

  return (
    <div className="border border-gray-200 rounded-lg mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden">
      <button
        className="w-full text-left p-4 flex items-center justify-between bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-semibold focus:outline-none"
        onClick={onToggle}
      >
        <div className="flex items-center">
          <div className="bg-white/20 p-2 rounded-full mr-3">
            <BookOpen size={18} />
          </div>
          <div>
            <h3 className="font-semibold">{materi.judul}</h3>
            {materi.durasi && (
              <p className="text-xs text-indigo-100">Durasi: {materi.durasi}</p>
            )}
          </div>
        </div>
        <div className="flex items-center">
          {materi.completed && (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full mr-2 flex items-center">
              <CheckCircle size={12} className="mr-1" />
              Selesai
            </span>
          )}
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>

      {isOpen && (
        <div>
          {progressPercentage > 0 && progressPercentage < 100 && (
            <div className="w-full bg-gray-200 h-1">
              <div
                className="bg-green-500 h-1 transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          )}

          <div className="p-5 bg-white rounded-b-lg">
            <p className="text-gray-700 mb-4">{materi.deskripsi}</p>
            <div className="flex flex-wrap gap-3 mt-4">
              <button
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none transition duration-200 flex items-center"
                onClick={() => onMarkComplete(materi.id)}
              >
                <CheckCircle size={16} className="mr-2" />
                Tandai Selesai
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none transition duration-200 flex items-center"
                onClick={handleAsk}
              >
                <MessageSquare size={16} className="mr-2" />
                Tanya Dosen
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AccordionItem;
