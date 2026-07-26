import api from "./api";

export async function login(credentials) {
  const response = await api.post("/auth/v1/login", credentials);
  return response.data;
}

export async function register(user) {
  const response = await api.post("/auth/v1/register", user);
  return response.data;
}

export async function refresh(refreshToken) {
  const response = await api.post("/auth/v1/refresh", {
    refreshToken,
  });

  return response.data;
}

export async function logout(refreshToken) {
  return api.post("/auth/v1/logout", {
    refreshToken,
  });
}