import { useState } from "react";
import { modulList } from "../../Data/Dummy";
import AccordionItem from "./Modul/AccordionItem";
import ProgressBar from "../../Components/ProgressBar";

function Kelas() {
  const [openId, setOpenId] = useState(null);
  const [completed, setCompleted] = useState([]);
  const progress = (completed.length / modulList.length) * 100;

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
      <h1 className="text-2xl font-bold mb-4">Modul / Kelas</h1>
      <div className="mb-6">
        <h2 className="font-medium mb-2">Progress Belajar</h2>
        <ProgressBar progress={progress} />
        {modulList.map((materi) => (
          <AccordionItem
            key={materi.id}
            materi={materi}
            isOpen={openId === materi.id}
            onToggle={() => toggleAccordion(materi.id)}
            onMarkComplete={markAsComplete}
          />
        ))}
      </div>
    </div>
  );
}
export default Kelas;
