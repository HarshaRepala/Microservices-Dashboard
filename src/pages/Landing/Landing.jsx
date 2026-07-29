import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Landing() {
    const { isAuthenticated } = useAuth();

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
            <section className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">

                <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                    Spring Boot • React • Docker • PostgreSQL • Redis • AWS EC2
                </span>

                <h1 className="mt-8 max-w-5xl text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">
                    Secure Distributed
                    <span className="text-blue-600"> Order Management </span>
                    System
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
                    A cloud-native microservices application built with Spring Boot,
                    React, Docker, PostgreSQL, Redis and NGINX. Designed to
                    demonstrate secure authentication, distributed services,
                    production-ready deployment and health monitoring.
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

                    {isAuthenticated ? (
                        <Link
                            to="/dashboard"
                            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow transition hover:bg-blue-700"
                        >
                            Go to Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-800 shadow-sm transition hover:bg-gray-100"
                            >
                                Login
                            </Link>

                            <Link
                                to="/register"
                                className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow transition hover:bg-blue-700"
                            >
                                Register
                            </Link>
                        </>
                    )}

                    <a
                        href="https://github.com/harsharepala/Microservices-Dashboard"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-800 shadow-sm transition hover:bg-gray-100"
                    >
                        View Source
                    </a>

                </div>

            </section>
        </div>
    );
}