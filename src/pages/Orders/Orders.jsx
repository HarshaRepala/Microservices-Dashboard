import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import PageHeader from "../../components/ui/PageHeader";
import Card from "../../components/ui/Card";

import { getOrders } from "../../services/orderService";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  async function loadOrders() {
    try {
      const data = await getOrders();
      setOrders(data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load orders.");
    }
  }

  return (
    <>
      <PageHeader
        title="Orders"
        subtitle="Your shopping history"
      />

      <div className="space-y-5">
        {orders.map((order) => (
          <Card key={order.id}>
            <div className="flex justify-between items-center">

              <div>

                <h2 className="font-bold">
                  Order #{order.id}
                </h2>

                <p className="text-slate-400">
                  Product ID: {order.productId}
                </p>

                <p className="text-slate-400">
                  Quantity: {order.quantity}
                </p>

              </div>

              <div className="text-right">

                <p className="text-green-400">

                  {order.status}

                </p>

                <p className="text-slate-500 text-sm">

                  {new Date(order.createdAt).toLocaleString()}

                </p>

              </div>

            </div>
          </Card>
        ))}
      </div>
    </>
  );
}