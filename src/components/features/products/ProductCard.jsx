import Card from "../../ui/Card";
import Button from "../../ui/Button";

export default function ProductCard({product, onBuy}) {
    const inStock = product.availableQuantity > 0;

    return (
        <Card className="flex flex-col justify-between">
            <div>
                <h2 className="text-xl font-semibold">
                    {product.name}
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                    Product ID: <span className="font-semibold text-slate-300">{product.productId}</span>
                </p>

                <p className="mt-2 text-slate-400">
                    Available Stock: {product.availableQuantity}
                </p>

                <span
                    className={`inline-block mt-4 rounded-full px-3 py-1 text-sm font-medium ${product.availableQuantity === 0
                        ? "bg-red-500/20 text-red-400"
                        : product.availableQuantity <= 10
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-green-500/20 text-green-400"
                    }`}
                >
          {
              product.availableQuantity === 0
                  ? "Out of Stock"
                  : product.availableQuantity <= 10
                      ? "Low Stock"
                      : "In Stock"
          }
        </span>
            </div>

            <Button
                className="mt-6"
                disabled={!inStock}
                onClick={() => onBuy(product)}
            >
                {inStock ? "Buy Now" : "Unavailable"}
            </Button>
        </Card>
    );
}