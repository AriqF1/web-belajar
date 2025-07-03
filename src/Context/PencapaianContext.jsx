import React, { createContext, useState, useContext, useCallback } from "react";
import { achievements as initialAchievements } from "@/Data/Dummy";
import toast from "react-hot-toast";

const PencapaianContext = createContext();

export function PencapaianProvider({ children }) {
  const [achievements, setAchievements] = useState(initialAchievements);

  const unlockAchievement = useCallback(
    (achievementId) => {
      const targetAchievement = achievements.find(
        (ach) => ach.id === achievementId
      );
      if (targetAchievement && !targetAchievement.achieved) {
        setAchievements((prev) =>
          prev.map((ach) =>
            ach.id === achievementId
              ? { ...ach, achieved: true, progress: 100 }
              : ach
          )
        );
        toast.success(`Pencapaian Terbuka: ${targetAchievement.title}!`, {
          icon: "🏆",
        });
      }
    },
    [achievements]
  );

  const value = { achievements, unlockAchievement };

  return (
    <PencapaianContext.Provider value={value}>
      {children}
    </PencapaianContext.Provider>
  );
}

export function usePencapaian() {
  const context = useContext(PencapaianContext);
  if (context === undefined) {
    throw new Error(
      "usePencapaian harus digunakan di dalam PencapaianProvider"
    );
  }
  return context;
}
