import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, role }) {
  const userString = localStorage.getItem("user");
  let user = null;

  if (userString) {
    user = JSON.parse(userString);
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (role && user.role !== role) {
    const redirectTo =
      user.role === "instructor" ? "/admin/instruktur" : "/dashboard";
    return <Navigate to={redirectTo} replace />;
  }
  return children;
}

export default ProtectedRoute;
