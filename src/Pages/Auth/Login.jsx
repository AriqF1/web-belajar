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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === dummyUser.email && password === dummyUser.password) {
      const userData = {
        email: dummyUser.email,
        name: dummyUser.name,
      };

      localStorage.setItem("user", JSON.stringify(userData));
      toast.success("Login berhasil!");
      navigate("/dashboard");
    } else {
      toast.error("Email atau password salah!");
    }
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
