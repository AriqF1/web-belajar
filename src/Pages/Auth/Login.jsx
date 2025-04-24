// Login.jsx
import React, { useState } from "react";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import toast from "react-hot-toast";

function Login() {
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
    } else {
      toast.error("Email atau password salah!");
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input
            id="email"
            name="email"
            label="Email address"
            type="email"
            autoComplete="email"
            required
            placeholder="Masukkan email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <Input
            id="password"
            name="password"
            label="Password"
            type="password"
            required
            placeholder="Masukkan password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-700"
            >
              Remember me
            </label>
          </div>
          <div className="text-sm">
            <a href="#" className="text-indigo-600 hover:text-indigo-500">
              Forgot password?
            </a>
          </div>
        </div>

        <div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
