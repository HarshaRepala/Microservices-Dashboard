import {useEffect, useState} from "react";
import Card from "../../ui/Card";
import Button from "../../ui/Button";

export default function BuyDialog({
                                      product,
                                      open,
                                      onClose,
                                      onConfirm,
                                  }) {
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        setQuantity(1);
    }, [product]);

    if (!open || !product) return null;

    function increase() {
        if (quantity < product.availableQuantity) {
            setQuantity(quantity + 1);
        }
    }

    function decrease() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
            <Card className="w-full max-w-md">
                <h2 className="mb-2 text-2xl font-bold">
                    🛒 Purchase Product
                </h2>

                <p className="text-lg font-semibold">
                    {product.name}
                </p>

                <p className="mb-6 text-slate-400">
                    Available Stock: {product.availableQuantity}
                </p>

                <div className="mb-8 flex items-center justify-center gap-5">
                    <Button
                        className="w-14"
                        onClick={decrease}
                    >
                        -
                    </Button>

                    <span className="text-3xl font-bold">
                        {quantity}
                    </span>

                    <Button
                        className="w-14"
                        onClick={increase}
                    >
                        +
                    </Button>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                    <Button
                        className="bg-slate-700 hover:bg-slate-600"
                        onClick={onClose}
                    >
                        Cancel
                    </Button>

                    <Button
                        onClick={() => onConfirm(product.productId, quantity)}
                    >
                        Buy Now
                    </Button>
                </div>
            </Card>
        </div>
    );
}