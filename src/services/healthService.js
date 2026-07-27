import axios from "axios";

const healthApi = axios.create({
    baseURL: "https://mymicroservices.duckdns.org",
    timeout: 2500,
});

export async function checkBackendHealth() {
    const endpoints = [
        "/auth/actuator/health",
        "/order/actuator/health",
        "/inventory/actuator/health",
    ];

    try {
        const responses = await Promise.all(
            endpoints.map((endpoint) => healthApi.get(endpoint))
        );

        return responses.every((response) => response.status === 200);
    } catch (error) {
        return false;
    }
}