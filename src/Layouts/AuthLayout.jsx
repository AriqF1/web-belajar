import React from "react";
import { Link } from "react-router-dom";

function AuthLayout({ children, title }) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-red-50 to-indigo-100 p-4">
      <div className="flex flex-col items-center justify-center w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16  h-16 rounded-full bg-indigo-100 mb-4 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 
              32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192
               0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Belajar Pintar</h1>
          <p className="text-gray-500 mt-1">
            Platform Belajar Yang Tepat Untukmu..
          </p>
        </div>

        <div className="w-full bg-white rounded-xl shadow-xl overflow-hidden">
          {title && (
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-4 text-center">
              <h2 className="text-xl font-semibold text-white">{title}</h2>
            </div>
          )}

          <div className="p-8">{children}</div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600 w-full">
          <div className="flex space-x-4 justify-center">
            <Link
              to="/login"
              className="text-indigo-600 hover:text-indigo-800 hover:underline"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-indigo-600 hover:text-indigo-800 hover:underline"
            >
              Register
            </Link>
            <Link
              to="/forgot-password"
              className="text-indigo-600 hover:text-indigo-800 hover:underline"
            >
              Forgot Password
            </Link>
          </div>
          <p className="mt-4">
            &copy; {new Date().getFullYear()} Belajar Pintar. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
