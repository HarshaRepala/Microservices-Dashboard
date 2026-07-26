import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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

    try {
      setLoading(true);

      await login(email, password);

      navigate("/dashboard");
    } catch (err) {
      alert("Invalid email or password.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#050816] flex items-center justify-center p-6">

      <Card className="w-full max-w-md">

        <div className="mb-8">

          <h1 className="text-3xl font-bold">

            🚀 Microservices Dashboard

          </h1>

          <p className="text-slate-400 mt-2">

            Welcome back

          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <Input
            label="Email"
            placeholder="hello@example.com"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <Input
            label="Password"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <Button
            type="submit"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Login"}
          </Button>

        </form>

        <p className="text-center mt-6 text-slate-400">

          Don't have an account?{" "}

          <Link
            className="text-indigo-400"
            to="/register"
          >
            Register
          </Link>

        </p>

      </Card>

    </div>
  );
}