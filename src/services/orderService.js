import api from "./api";

export async function getOrders() {
  const response = await api.get("/order/v1/orders");
  return response.data;
}

export async function createOrder(productId, quantity = 1) {
  const response = await api.post("/order/v1/orders", {
    productId,
    quantity,
  });

  return response.data;
}