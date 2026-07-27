import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "./index.css";

import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { HealthProvider } from "./context/HealthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HealthProvider>
            <AuthProvider>
                <App />
                <Toaster
                    position="top-right"
                    toastOptions={{
                        duration: 3000,
                        style: {
                            background: "#111827",
                            color: "#fff",
                            border: "1px solid #374151",
                        },
                    }}
                />
            </AuthProvider>
        </HealthProvider>
    </React.StrictMode>
);