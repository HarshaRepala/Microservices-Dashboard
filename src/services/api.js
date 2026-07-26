import axios from "axios";
import { getAccessToken } from "../utils/storage";

const api = axios.create({
  baseURL: "http://mymicroservices.duckdns.org",
  headers: {
    "Content-Type": "application/json",
  },
});

// Automatically attach JWT to every request
api.interceptors.request.use(
  (config) => {
    const token = getAccessToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;