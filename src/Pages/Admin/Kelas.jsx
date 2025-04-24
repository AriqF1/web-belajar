import { useState } from "react";
import { modulList } from "@/Data/Dummy";
import Modul from "@/Pages/Admin/Modul/Modul";

function Kelas() {
  const [openId, setOpenId] = useState(null);
  const [completed, setCompleted] = useState([]);
  const progress =
    modulList.length > 0 ? (completed.length / modulList.length) * 100 : 0;

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const markAsComplete = (id) => {
    if (!completed.includes(id)) {
      setCompleted([...completed, id]);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4">Modul</h1>
      <Modul
        progress={progress}
        modulList={modulList}
        openId={openId}
        toggleAccordion={toggleAccordion}
        markAsComplete={markAsComplete}
      />
    </div>
  );
}
export default Kelas;
