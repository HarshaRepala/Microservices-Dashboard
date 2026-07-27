import { createContext, useContext, useEffect, useState } from "react";
import { checkBackendHealth } from "../services/healthService";

const HealthContext = createContext();

export function HealthProvider({ children }) {

    const [loading, setLoading] = useState(true);
    const [backendAvailable, setBackendAvailable] = useState(false);

    useEffect(() => {

        async function checkHealth() {

            const healthy = await checkBackendHealth();

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
            }}
        >
            {children}
        </HealthContext.Provider>
    );
}

export function useHealth() {
    return useContext(HealthContext);
}