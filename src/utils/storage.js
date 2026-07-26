const ACCESS_TOKEN = "accessToken";
const REFRESH_TOKEN = "refreshToken";

export function saveTokens(accessToken, refreshToken) {
  localStorage.setItem(ACCESS_TOKEN, accessToken);
  localStorage.setItem(REFRESH_TOKEN, refreshToken);
}

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN);
}

export function getRefreshToken() {
  return localStorage.getItem(REFRESH_TOKEN);
}

export function clearTokens() {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
}

export function updateAccessToken(accessToken) {
  localStorage.setItem("accessToken", accessToken);
}