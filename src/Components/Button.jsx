import React from "react";

function Button({ children, type = "button", className = "", onClick }) {
  const baseStyle =
    "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";

  return (
    <button
      type={type}
      className={`${baseStyle} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
