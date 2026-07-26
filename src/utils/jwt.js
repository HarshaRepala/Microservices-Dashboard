import { jwtDecode } from "jwt-decode";
import { getAccessToken } from "./storage";

export function getUserInfo() {
  const token = getAccessToken();

  if (!token) return null;

  try {
    return jwtDecode(token);
  } catch (error) {
    return null;
  }
}