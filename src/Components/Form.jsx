import React from "react";
import Input from "@/Components/Input";
import Button from "@/Components/Button";

function LoginForm({ email, password, setEmail, setPassword, handleSubmit }) {
  return (
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
        <Button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Login
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
