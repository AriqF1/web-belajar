import React, { useState, useEffect } from "react";
import { CheckCircle, BookOpen, Clock, Zap } from "lucide-react";
import { kontenModul } from "@/Data/KontenModul";
import Button from "@/Components/Button";
import { useModules } from "@/Hooks/useModules";

function Kelas() {
  const { modules, isLoading, isError, markModuleAsComplete, isUpdating } =
    useModules();

  const [selectedModule, setSelectedModule] = useState(null);

  useEffect(() => {
    if (!isLoading && modules && modules.length > 0) {
      setSelectedModule(modules[0]);
    }
  }, [isLoading, modules]);

  const handleSelectModule = (module) => {
    setSelectedModule(module);
  };

  const completedCount = modules.filter((m) => m.status === "Selesai").length;
  const progress =
    modules.length > 0 ? (completedCount / modules.length) * 100 : 0;

  const getStatusIndicator = (status) => {
    switch (status) {
      case "Selesai":
        return <CheckCircle className="text-green-500" size={20} />;
      case "Sedang Berjalan":
        return <Clock className="text-yellow-500" size={20} />;
      default:
        return <BookOpen className="text-gray-400" size={20} />;
    }
  };

  if (isLoading) {
    return <div className="p-6 text-center">Memuat materi pembelajaran...</div>;
  }

  // Tampilkan status error
  if (isError) {
    return (
      <div className="p-6 text-center text-red-500">Gagal memuat modul.</div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <div className="mx-auto space-y-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            Materi Pembelajaran
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Pilih modul di sebelah kanan untuk memulai pembelajaran Anda.
          </p>
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-700 mb-1">
              Progress Keseluruhan:
            </p>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-blue-500 to-teal-400 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-right text-sm font-semibold text-gray-600 mt-1">
              {progress.toFixed(0)}% Selesai
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm p-8 shadow-lg rounded-2xl border border-white/20">
            {selectedModule ? (
              <div>
                <span
                  className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 ${
                    selectedModule.status === "Selesai"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {selectedModule.status}
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-2 italic">
                  {selectedModule.title}
                </h2>
                <div className="prose max-w-none text-gray-700 mb-6 text-justify">
                  {kontenModul[selectedModule.id] || (
                    <p>Konten untuk modul ini belum tersedia.</p>
                  )}
                </div>
                <div className="mt-8 border-t pt-6">
                  <Button
                    onClick={() => markModuleAsComplete(selectedModule.id)}
                    disabled={selectedModule.status === "Selesai" || isUpdating}
                    className="flex items-center justify-center w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <CheckCircle className="mr-2" size={20} />
                    {isUpdating
                      ? "Memperbarui..."
                      : selectedModule.status === "Selesai"
                      ? "Telah Selesai"
                      : "Tandai sebagai Selesai"}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-10">
                <p>Pilih sebuah modul dari daftar untuk melihat kontennya.</p>
              </div>
            )}
          </div>
          <div className="lg:col-span-1 bg-white/80 backdrop-blur-sm p-6 shadow-lg rounded-2xl border border-white/20 h-fit">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Daftar Modul
            </h3>
            <div className="space-y-2">
              {modules.map((module) => (
                <button
                  key={module.id}
                  onClick={() => handleSelectModule(module)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center justify-between ${
                    selectedModule?.id === module.id
                      ? "bg-indigo-100 border-indigo-400 shadow-md"
                      : "hover:bg-gray-100 hover:border-gray-300"
                  } border`}
                >
                  <div className="flex items-center">
                    <div className="mr-4">
                      {getStatusIndicator(module.status)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {module.title}
                      </p>
                      <p className="text-xs text-gray-500">{module.category}</p>
                    </div>
                  </div>
                  {selectedModule?.id === module.id && (
                    <Zap className="text-indigo-500" size={18} />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kelas;
