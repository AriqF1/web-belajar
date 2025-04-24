import React from "react";
import ProgressBar from "@/Components/ProgressBar";
import AccordionItem from "./AccordionItem";

function Modul({
  progress,
  modulList,
  openId,
  toggleAccordion,
  markAsComplete,
}) {
  if (!Array.isArray(modulList)) {
    return <div>Modul belajar tidak ditemukan nih...</div>;
  }
  return (
    <div className="mb-6">
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
  );
}
export default Modul;
