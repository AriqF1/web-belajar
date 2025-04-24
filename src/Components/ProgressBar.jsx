import React from "react";

function ProgressBar({ progress }) {
  return (
    <div className="relative pt-1 mb-6">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-indigo-100 text-indigo-800">
            Progress Belajar
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-indigo-600">
            {progress}% Selesai
          </span>
        </div>
      </div>
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-indigo-100">
        <div
          style={{ width: `${progress}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600 transition-all duration-500"
        ></div>
      </div>
    </div>
  );
}
export default ProgressBar;
