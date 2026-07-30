import { createContext, useContext, useEffect, useState } from "react";
import { checkBackendHealth } from "../services/healthService";

const HealthContext = createContext();

export function HealthProvider({ children }) {

    const [loading, setLoading] = useState(true);
    const [backendAvailable, setBackendAvailable] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {

        async function checkHealth() {

            const totalDuration = 40000;
            const interval = 100;

            const startTime = Date.now();

            const timer = setInterval(() => {

                const elapsed = Date.now() - startTime;

                const value = Math.min(
                    (elapsed / totalDuration) * 100,
                    100
                );

                setProgress(value);

                if (value >= 100) {
                    clearInterval(timer);
                }

            }, interval);

            const healthy = await checkBackendHealth();

            clearInterval(timer);

            setProgress(100);
            setBackendAvailable(healthy);
            setLoading(false);
        }

        checkHealth();

    }, []);

    return (
        <HealthContext.Provider
            value={{
                loading,
                backendAvailable,
                progress,
            }}
        >
            {children}
        </HealthContext.Provider>
    );
}

export function useHealth() {
    return useContext(HealthContext);
}