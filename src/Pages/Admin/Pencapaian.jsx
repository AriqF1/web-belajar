import React from "react";
import { usePencapaian } from "@/Context/PencapaianContext";
import { Award, Star, Zap } from "lucide-react";
import RarityBadge from "@/Components/RarityBadge";

function PencapaianPage() {
  const { achievements, unlockAchievement } = usePencapaian();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <div className="mx-auto space-y-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            Pencapaian & Lencana
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Lacak kemajuan Anda dan kumpulkan semua lencana untuk membuktikan
            keahlian Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((ach) => (
            <div
              key={ach.id}
              className={`bg-white/90 backdrop-blur-sm p-6 shadow-lg rounded-2xl border transition-all duration-300 ${
                ach.achieved ? "border-yellow-400" : "border-white/20"
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div
                  className={`flex items-center justify-center h-12 w-12 rounded-xl ${
                    ach.achieved ? "bg-yellow-400" : "bg-gray-200"
                  }`}
                >
                  <Award
                    size={28}
                    className={ach.achieved ? "text-white" : "text-gray-400"}
                  />
                </div>
                <RarityBadge rarity={ach.rarity} />
              </div>

              <h3
                className={`font-bold text-lg ${
                  ach.achieved ? "text-gray-900" : "text-gray-700"
                }`}
              >
                {ach.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1 h-10">
                {ach.description}
              </p>

              <div className="mt-4">
                {ach.achieved ? (
                  <div className="flex items-center justify-center text-center py-2 bg-green-100 text-green-700 font-bold rounded-lg text-sm">
                    <Star size={16} className="mr-2" /> Diraih
                  </div>
                ) : (
                  <div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-teal-400 h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${ach.progress || 0}%` }}
                      ></div>
                    </div>
                    <p className="text-right text-xs font-semibold text-gray-500 mt-1">
                      {ach.progress || 0}%
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PencapaianPage;
