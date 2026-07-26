import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import PageHeader from "../../components/ui/PageHeader";
import Card from "../../components/ui/Card";

import { getOrders } from "../../services/orderService";
import { getProducts } from "../../services/inventoryService";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadOrders();
  }, []);

  async function loadOrders() {
    try {
      setLoading(true);

      const [orderData, productData] =
        await Promise.all([
          getOrders(),
          getProducts(),
        ]);

      setOrders(orderData);
      setProducts(productData);

    } catch (error) {
      console.error(error);
      toast.error("Failed to load orders.");
    } finally {
      setLoading(false);
    }
  }


  function getProductName(productId) {
    const product = products.find(
      (p) => p.productId === productId
    );

    return product
      ? product.name
      : `Product #${productId}`;
  }


  return (
    <>
      <PageHeader
        title="Orders"
        subtitle="Your purchase history"
      />


      {loading ? (
        <p className="text-slate-400">
          Loading orders...
        </p>
      ) : orders.length === 0 ? (

        <p className="text-slate-400">
          No orders yet.
        </p>

      ) : (

        <div className="space-y-5">

          {orders.map((order) => (

            <Card key={order.id}>

              <div className="flex justify-between">

                <div>

                  <h2 className="text-xl font-bold">
                    📦 {getProductName(order.productId)}
                  </h2>


                  <p className="text-slate-400 mt-2">
                    Order ID: {order.id}
                  </p>


                  <p className="text-slate-400">
                    Quantity: {order.quantity}
                  </p>

                </div>


                <div className="text-right">

                  <span className="
                    inline-block
                    rounded-full
                    px-3
                    py-1
                    text-sm
                    bg-green-500/20
                    text-green-400
                  ">
                    {order.status}
                  </span>


                  <p className="text-slate-500 text-sm mt-3">
                    {new Date(
                      order.createdAt
                    ).toLocaleString()}
                  </p>

                </div>

              </div>

            </Card>

          ))}

        </div>

      )}

    </>
  );
}