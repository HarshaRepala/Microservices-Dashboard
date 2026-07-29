import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  Package,
  ShoppingCart,
  Boxes,
} from "lucide-react";

import PageHeader from "../../components/ui/PageHeader";
import StatCard from "../../components/dashboard/StatCard";
import Card from "../../components/ui/Card";

import { getProducts } from "../../services/inventoryService";
import { getOrders } from "../../services/orderService";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      const [productData, orderData] =
        await Promise.all([
          getProducts(),
          getOrders(),
        ]);

      setProducts(productData);
      setOrders(orderData);
    } catch (err) {
      console.error(err);
      if (err.response?.status !== 401) {
        toast.error("Failed to load dashboard.");
      }
    }
  }

  const totalProducts = products.length;

  const totalOrders = orders.length;

  const totalStock = products.reduce(
    (sum, p) => sum + p.availableQuantity,
    0
  );

  return (
    <>
      <PageHeader
        title="Dashboard"
        subtitle="Overview of your system"
      />

      <Card className="mb-8 bg-gradient-to-r from-indigo-700/30 to-slate-900">

        <h1 className="text-2xl font-bold sm:text-3xl">

          Welcome Back 👋

        </h1>

        <p className="mt-2 text-sm text-slate-300 sm:text-base">

          Your inventory and orders are updating live from the backend.

        </p>

      </Card>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

        <StatCard
          title="Products"
          value={totalProducts}
          icon={<Package size={42} />}
        />

        <StatCard
          title="Orders"
          value={totalOrders}
          icon={<ShoppingCart size={42} />}
        />

        <StatCard
          title="Available Stock"
          value={totalStock}
          icon={<Boxes size={42} />}
        />

      </div>

      <Card className="mt-8">

        <h2 className="text-xl font-bold mb-5">
          Recent Products
        </h2>

        <div className="space-y-4">

          {products.slice(0, 5).map((product) => (

            <div
              key={product.productId}
              className="flex flex-col gap-2 border-b border-slate-800 pb-3 sm:flex-row sm:items-center sm:justify-between"
            >

              <span>{product.name}</span>

              <span className="text-sm text-slate-400 sm:text-base">
                Stock {product.availableQuantity}
              </span>

            </div>

          ))}

        </div>

      </Card>
    </>
  );
}