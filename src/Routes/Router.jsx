import { Routes, Route } from "react-router-dom";
import AuthLayout from "@/Layouts/AuthLayout";
import AdminLayout from "@/Layouts/AdminLayout";
import Login from "@/Pages/Auth/Login";
import Kelas from "@/Pages/Admin/Kelas";

import UserDashboard from "@/Pages/Admin/Dashboard";
import UserQuiz from "@/Pages/Admin/Quiz";
import UserForum from "@/Pages/Admin/Forum";
import UserPencapaian from "@/Pages/Admin/Pencapaian";

import InstructorDashboard from "@/Pages/Instruktur/Dashboard";
import InstructorQuiz from "@/Pages/Instruktur/Quiz/DashboardQuiz";

import ProtectedRoute from "./ProtectedRoute";

function AppRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthLayout title="Login">
            <Login />
          </AuthLayout>
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute role="user">
            <AdminLayout>
              <UserDashboard />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/kelas"
        element={
          <ProtectedRoute role="user">
            <AdminLayout>
              <Kelas />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/quiz"
        element={
          <ProtectedRoute role="user">
            <AdminLayout>
              <UserQuiz />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/forum"
        element={
          <ProtectedRoute role="user">
            <AdminLayout>
              <UserForum />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/pencapaian"
        element={
          <ProtectedRoute role="user">
            <AdminLayout>
              <UserPencapaian />
            </AdminLayout>
          </ProtectedRoute>
        }
      />

      {/* Rute Khusus Instruktur */}
      <Route
        path="/admin/instruktur"
        element={
          <ProtectedRoute role="instructor">
            <AdminLayout>
              <InstructorDashboard />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/quiz"
        element={
          <ProtectedRoute role="instructor">
            <AdminLayout>
              <InstructorQuiz />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AppRouter;
