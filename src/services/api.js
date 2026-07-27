import axios from "axios";

import {
  getAccessToken,
  getRefreshToken,
  updateAccessToken,
  clearTokens,
} from "../utils/storage";

import { refreshToken } from "./tokenService";

const api = axios.create({
  baseURL: "https://mymicroservices.duckdns.org",
});

api.interceptors.request.use((config) => {
  const token = getAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

let isRefreshing = false;

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return Promise.reject(error);
      }

      isRefreshing = true;

      try {
        const token = getRefreshToken();

        if (!token) {
          clearTokens();
          window.location.href = "/login";
          return Promise.reject(error);
        }

        const data = await refreshToken(token);

        updateAccessToken(data.accessToken);

        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;

        isRefreshing = false;

        return api(originalRequest);

      } catch (err) {

        isRefreshing = false;

        clearTokens();

        window.location.href = "/login";

        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default api;