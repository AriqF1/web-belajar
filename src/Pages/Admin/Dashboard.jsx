import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/Components/Button";
import ProgressBar from "@/Components/ProgressBar";
import { stats } from "@/Data/Dummy";
import { BookOpen, Clock, Award } from "lucide-react";

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [progress, setProgress] = useState(0);
  const [lastActivity, setLastActivity] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    setUser(userData || {});
    const total = 5;
    const read = 3;
    setProgress((read / total) * 100);

    setLastActivity({
      title: "Pengenalan ReactJs",
      time: "Kemarin, 19:30",
      progress: 60,
    });
  }, []);

  const iconMap = {
    BookOpen: <BookOpen size={18} />,
    Clock: <Clock size={18} />,
    Award: <Award size={18} />,
  };
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2 bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Halo , {user.name || "Pengguna Anonim"}
            </h2>
          </div>
          <ProgressBar progress={progress} />
          <p className="text-sm text-gray-600 mt-2">
            {progress.toFixed(0)}% dari materi telah kamu baca nih. Teruskan
            pembelajaran untuk mendapatkan sertifikat kelulusan.
          </p>

          {lastActivity && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Aktivitas Terakhir
              </h3>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-indigo-700">
                      {lastActivity.title}
                    </h4>
                    <p className="text-xs text-gray-500">{lastActivity.time}</p>
                  </div>
                  <Button
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm py-1 px-3 rounded-lg flex items-center"
                    onClick={() => navigate("/kelas")}
                  >
                    Lanjutkan
                  </Button>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className="bg-indigo-600 h-1.5 rounded-full"
                    style={{ width: `${lastActivity.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Statistik Belajar
          </h2>
          <div className="space-y-4">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-3">
                  {iconMap[stat.icon]}
                </div>
                <div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="font-medium">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <button
          onClick={() => navigate("/kelas")}
          className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-center"
        >
          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
            <BookOpen size={18} />
          </div>
          <div className="text-left">
            <h3 className="font-medium">Daftar Kelas</h3>
            <p className="text-sm text-gray-500">Lihat semua kelas</p>
          </div>
        </button>

        <button
          onClick={() => navigate("/jadwal")}
          className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-center"
        >
          <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
            <Clock size={18} />
          </div>
          <div className="text-left">
            <h3 className="font-medium">Jadwal</h3>
            <p className="text-sm text-gray-500">Atur waktu belajar</p>
          </div>
        </button>

        <button
          onClick={() => navigate("/sertifikat")}
          className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-center"
        >
          <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 mr-3">
            <Award size={18} />
          </div>
          <div className="text-left">
            <h3 className="font-medium">Sertifikat</h3>
            <p className="text-sm text-gray-500">Lihat pencapaian</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
