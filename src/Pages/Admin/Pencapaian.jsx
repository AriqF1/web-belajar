import React from "react";
import { usePencapaian } from "@/Context/PencapaianContext";
import { modules } from "@/Data/Dummy";
import { Award, Star, Zap, Map, Trophy, GitBranch } from "lucide-react";
import RarityBadge from "@/Components/RarityBadge";

function PencapaianPage() {
  const { achievements } = usePencapaian();

  const achievedBadges = achievements.filter((ach) => ach.achieved);
  const inProgressAchievements = achievements.filter((ach) => !ach.achieved);

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

        <div className="bg-white/80 backdrop-blur-sm p-6 shadow-lg rounded-2xl border border-white/20">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Map size={24} className="mr-3 text-blue-600" />
            Learning Path
          </h2>
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {modules.map((module, index) => (
              <div key={module.id} className="flex-shrink-0 flex items-center">
                <div
                  className={`flex flex-col items-center p-4 border rounded-xl w-40 text-center ${
                    module.status === "Selesai"
                      ? "bg-green-50 border-green-300"
                      : "bg-white"
                  }`}
                >
                  <div
                    className={`h-12 w-12 flex items-center justify-center rounded-full mb-2 ${
                      module.status === "Selesai"
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    <Zap size={24} />
                  </div>
                  <p className="text-sm font-semibold text-gray-800">
                    {module.title}
                  </p>
                  <p className="text-xs text-gray-500">{module.category}</p>
                </div>
                {index < modules.length - 1 && (
                  <div className="w-16 border-t-2 border-dashed mx-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/80 backdrop-blur-sm p-6 shadow-lg rounded-2xl border border-white/20">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Trophy size={24} className="mr-3 text-yellow-500" />
              Koleksi Lencana
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {achievedBadges.map((badge) => (
                <div
                  key={badge.id}
                  className="text-center p-4 bg-yellow-50 border border-yellow-200 rounded-xl"
                >
                  <Award size={40} className="mx-auto text-yellow-500" />
                  <p className="font-bold mt-2 text-gray-800">{badge.title}</p>
                  <RarityBadge rarity={badge.rarity} />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 shadow-lg rounded-2xl border border-white/20">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <GitBranch size={24} className="mr-3 text-purple-600" />
              Pencapaian Berikutnya
            </h2>
            <div className="space-y-5">
              {inProgressAchievements.map((ach) => (
                <div key={ach.id}>
                  <div className="flex justify-between items-center mb-1">
                    <p className="font-semibold text-gray-800">{ach.title}</p>
                    <RarityBadge rarity={ach.rarity} />
                  </div>
                  <p className="text-sm text-gray-500 mb-2">
                    {ach.description}
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2.5 rounded-full"
                      style={{ width: `${ach.progress || 0}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PencapaianPage;
