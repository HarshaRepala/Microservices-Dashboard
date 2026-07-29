import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);

      await login(email, password);

      toast.success("Welcome back!");

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      toast.error("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050816] p-4 sm:p-6">
      <Card className="w-full max-w-xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold sm:text-4xl">
            🚀 Microservices Dashboard
          </h1>

          <p className="text-slate-400 mt-2">
            Welcome back! Sign in to continue.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            label="Email"
            type="email"
            placeholder="hello@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Password"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit" disabled={loading}>
            {loading ? "Signing In..." : "Login"}
          </Button>
        </form>

        <p className="mt-6 text-center text-slate-400">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-indigo-400 hover:text-indigo-300 transition"
          >
            Register
          </Link>
        </p>
      </Card>
    </div>
  );
}