import api from "./api";

export async function getProducts() {
  const response = await api.get("/inventory/v1/products");
  return response.data;
}