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
      toast.error("Failed to load dashboard.");
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

        <h1 className="text-3xl font-bold">

          Welcome Back 👋

        </h1>

        <p className="text-slate-300 mt-2">

          Your inventory and orders are updating live from the backend.

        </p>

      </Card>

      <div className="grid gap-6 md:grid-cols-3">

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
              className="flex justify-between border-b border-slate-800 pb-3"
            >

              <span>{product.name}</span>

              <span className="text-slate-400">
                Stock {product.availableQuantity}
              </span>

            </div>

          ))}

        </div>

      </Card>
    </>
  );
}