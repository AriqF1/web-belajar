import { useState } from "react";
import { modulList } from "@/Data/Dummy";
import Modul from "@/Pages/Admin/Modul/Modul";
import ReactIntro from "@/Data/Text";

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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="md:col-span-2 bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Pengenalan React JS
          </h2>
        </div>
        <div className="space-y-4 text-gray-700">{ReactIntro}</div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 h-fit">
        <h1 className="text-2xl font-bold mb-4">Modul</h1>
        <Modul
          progress={progress}
          modulList={modulList}
          openId={openId}
          toggleAccordion={toggleAccordion}
          markAsComplete={markAsComplete}
        />
      </div>
    </div>
  );
}
export default Kelas;
