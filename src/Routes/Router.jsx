import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "@/Pages/Auth/Login";
import Dashboard from "@/Pages/Admin/Dashboard";
import Kelas from "@/Pages/Admin/Kelas";
import AuthLayout from "@/Layouts/AuthLayout";
import AdminLayout from "@/Layouts/AdminLayout";

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
          <AdminLayout>
            <Dashboard />
          </AdminLayout>
        }
      />
      <Route
        path="/kelas"
        element={
          <AdminLayout>
            <Kelas />
          </AdminLayout>
        }
      />
    </Routes>
  );
}

export default AppRouter;
