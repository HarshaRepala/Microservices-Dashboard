import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { RefreshCw } from "lucide-react";

import PageHeader from "../../components/ui/PageHeader";
import ProductCard from "../../components/features/products/ProductCard";
import BuyDialog from "../../components/features/products/BuyDialog";

import { getProducts } from "../../services/inventoryService";
import { createOrder } from "../../services/orderService";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    try {
      setLoading(true);

      const data = await getProducts();

      setProducts(data);
    } catch (err) {
      console.error(err);
      if (err.response?.status !== 401) {
        toast.error("Failed to load products");
      }
    } finally {
      setLoading(false);
    }
  }

  function handleBuy(product) {
    setSelectedProduct(product);
    setDialogOpen(true);
  }

  async function confirmPurchase(productId, quantity) {
    try {
      await createOrder(productId, quantity);

      toast.success("Order placed successfully!");

      setDialogOpen(false);
      setSelectedProduct(null);

      // Refresh inventory after purchase
      await loadProducts();
    } catch (error) {
      console.error(error);
      toast.error("Failed to place order.");
    }
  }

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <PageHeader
          title="Products"
          subtitle="Browse available inventory"
        />

        <button
          onClick={loadProducts}
          className="flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 transition hover:bg-slate-800"
          disabled={loading}
        >
          <RefreshCw
            size={18}
            className={loading ? "animate-spin" : ""}
          />
          {loading ? "Refreshing..." : "Refresh"}
        </button>
      </div>

      {loading ? (
        <div className="text-center py-10 text-slate-400">
          Loading products...
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-10 text-slate-400">
          No products available.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.productId}
              product={product}
              onBuy={handleBuy}
            />
          ))}
        </div>
      )}

      <BuyDialog
        open={dialogOpen}
        product={selectedProduct}
        onClose={() => {
          setDialogOpen(false);
          setSelectedProduct(null);
        }}
        onConfirm={confirmPurchase}
      />
    </>
  );
}