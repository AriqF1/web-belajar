import React, { useState } from "react";
import toast from "react-hot-toast";
import LoginForm from "@/Components/Form";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dummyUser = {
    email: "farhan@student.com",
    password: "password123",
    name: "Ariq Farhan",
    role: "user",
  };

  const dummyInstructor = {
    email: "instruktur@belajarpintar.com",
    password: "password456",
    name: "Rudi Santoso",
    role: "instructor",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === dummyUser.email && password === dummyUser.password) {
      const userData = {
        email: dummyUser.email,
        name: dummyUser.name,
        role: dummyUser.role,
      };

      localStorage.setItem("user", JSON.stringify(userData));
      toast.success(`Login berhasil! Selamat datang, ${dummyUser.name}`);
      navigate("/dashboard");
      return;
    }

    if (
      email === dummyInstructor.email &&
      password === dummyInstructor.password
    ) {
      const userData = {
        email: dummyInstructor.email,
        name: dummyInstructor.name,
        role: dummyInstructor.role,
      };

      localStorage.setItem("user", JSON.stringify(userData));
      toast.success(`Login berhasil! Selamat datang, ${dummyInstructor.name}`);
      navigate("/admin/instruktur");
      return;
    }
    toast.error("Email atau password salah!");
  };

  return (
    <div className="w-full">
      <LoginForm
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Login;
