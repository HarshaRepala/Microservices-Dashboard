import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

import {useAuth} from "../../context/AuthContext";

export default function Register() {
    const navigate = useNavigate();

    const {register} = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        try {
            setLoading(true);

            await register(email, password);

            toast.success("Account created successfully!");

            navigate("/dashboard");
        } catch (err) {
            console.error(err);
            toast.error("Registration failed");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-[#050816] flex items-center justify-center p-6">
            <Card className="w-full max-w-md">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold">
                        🚀 Create Account
                    </h1>

                    <p className="text-slate-400 mt-2">
                        Register to continue
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <Input
                        label="Email"
                        value={email}
                        placeholder="hello@example.com"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input
                        label="Password"
                        type="password"
                        value={password}
                        placeholder="********"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Input
                        label="Confirm Password"
                        type="password"
                        value={confirmPassword}
                        placeholder="********"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <Button type="submit" disabled={loading}>
                        {loading ? "Creating Account..." : "Register"}
                    </Button>
                </form>

                <p className="text-center mt-6 text-slate-400">
                    Already have an account?{" "}
                    <Link to="/login" className="text-indigo-400">
                        Login
                    </Link>
                </p>
            </Card>
        </div>
    );
}