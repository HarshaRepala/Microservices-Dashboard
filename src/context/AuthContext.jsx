import { createContext, useContext, useEffect, useState } from "react";
import {
  saveTokens,
  clearTokens,
  getAccessToken,
  getRefreshToken,
} from "../utils/storage";
import * as authService from "../services/authService";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = getAccessToken();

    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  async function login(email, password) {
    const data = await authService.login({
      email,
      password,
    });

    saveTokens(data.accessToken, data.refreshToken);

    setIsAuthenticated(true);

    return data;
  }

  async function register(email, password) {
    const data = await authService.register({
      email,
      password,
    });

    saveTokens(data.accessToken, data.refreshToken);

    setIsAuthenticated(true);

    return data;
  }

  async function logout() {
    try {
      const refreshToken = getRefreshToken();

      if (refreshToken) {
        await authService.logout(refreshToken);
      }
    } catch (error) {
      console.error(error);
    }

    clearTokens();
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}