import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axiosInstance from "@/Api/axiosInstance";
import toast from "react-hot-toast";
import LoginForm from "@/Components/Form";
import { Loader2 } from "lucide-react";

const loginUser = async ({ email, password }) => {
  const { data: users } = await axiosInstance.get(`/users?email=${email}`);

  if (users.length === 1 && users[0].password === password) {
    return users[0];
  } else {
    throw new Error("Email atau password yang Anda masukkan salah.");
  }
};

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: handleLogin, isLoading } = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      toast.success(`Login berhasil! Selamat datang, ${data.name}`);

      localStorage.setItem("user", JSON.stringify(data));
      if (data.role === "instructor") {
        navigate("/admin/instruktur");
      } else {
        navigate("/dashboard");
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Email dan password harus diisi!");
      return;
    }
    handleLogin({ email, password });
  };

  return (
    <div className="w-full">
      <LoginForm
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </div>
  );
}

export default Login;
