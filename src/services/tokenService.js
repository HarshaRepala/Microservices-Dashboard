import axios from "axios";

const tokenApi = axios.create({
  baseURL: "http://mymicroservices.duckdns.org",
});

export async function refreshToken(refreshToken) {
  const response = await tokenApi.post(
    "/auth/v1/refresh",
    {
      refreshToken,
    }
  );

  return response.data;
}