import axios from "axios";

const endpoints = [
    "/auth/actuator/health",
    "/order/actuator/health",
    "/inventory/actuator/health",
];

async function performHealthCheck(timeout) {
    const healthApi = axios.create({
        baseURL: "https://mymicroservices.duckdns.org",
        timeout,
    });

    const responses = await Promise.all(
        endpoints.map((endpoint) => healthApi.get(endpoint))
    );

    return responses.every((response) => response.status === 200);
}

export async function checkBackendHealth() {
    const timeouts = [25000, 5000];

    for (let i = 0; i < timeouts.length; i++) {
        try {
            const healthy = await performHealthCheck(timeouts[i]);

            if (healthy) {
                return true;
            }
        } catch (error) {
            console.warn(
                `Health check attempt ${i + 1} failed (timeout: ${timeouts[i]} ms)`
            );
        }
    }

    return false;
}