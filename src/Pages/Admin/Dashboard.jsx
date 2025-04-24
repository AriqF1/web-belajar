import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import ProgressBar from "../../Components/ProgressBar";

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    setUser(userData || {});
    const total = 5;
    const read = 3;
    setProgress((read / total) * 100);
  }, []);

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-2">
        Halo, {user.name || "Mahasiswa"} 👋
      </h1>
      <p className="text-gray-600 mb-4">
        Selamat datang di Dashboard Belajar Pintar.
      </p>

      <div className="mb-6">
        <h2 className="font-medium mb-2">Progress Belajar</h2>
        <ProgressBar progress={progress} />
        <p className="text-sm text-gray-500 mt-1">
          {progress.toFixed(0)}% dari materi dibaca
        </p>
      </div>

      <Button
        type="button"
        className="bg-indigo-300 hover:bg-indigo-600"
        onClick={() => navigate("/kelas")}
      >
        Lanjutkan Belajar
      </Button>
    </div>
  );
}

export default Dashboard;
