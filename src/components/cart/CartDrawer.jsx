import { useNavigate } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { useCart } from "./CartContext";

function CartDrawer() {
  const navigate = useNavigate();
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    itemCount,
    subTotal,
    isCartOpen,
    setIsCartOpen,
  } = useCart();
  if (!isCartOpen) return null;
  const handleViewCart = () => {
    setIsCartOpen(false);
    navigate("/Cart");
  };
  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate("/checkout");
  };
  return (
    <div
      className="fixed inset-0 bg-black/40 z-100"
      onClick={() => setIsCartOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="fixed top-0 right-0 w-full h-full max-w-120 bg-white shadow-xl flex flex-col"
      >
        <div className="flex items-center justify-between px-8 py-10 border border-gray-100">
          <button
            onClick={() => setIsCartOpen(false)}
            aria-label="Close Cart"
            className="text-gray-700 hover:text-black"
          >
            <FiX size={22} />
          </button>
          <h2 className="text-xl font-semibold">Cart</h2>
          <span className="text-sm text-gray-500">{itemCount} Item(s)</span>
        </div>
        <div className="flex-1 overflow-y-auto px-8 py-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex items-center justify-center">
              <p className="text-gray-500 text-center mb-15">
                Your cart is currently empty
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {cartItems.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="flex gap-4 pb-6 border-b border-gray-100"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-24 object-cover shrink-0 bg-gray-100"
                  />
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-medium text-sm">{item.title}</p>
                        {item.size && (
                          <p className="text-xs text-gray-500 mt-1">
                            Size: {item.size}
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.size)}
                        aria-label="Remove Item"
                        className="text-gray-400 hover:text-black"
                      >
                        <FiX size={16} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-gray-300">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.size,
                              item.quantity - 1,
                            )
                          }
                          className="px-3 py-1 text-sm hover:bg-gray-50"
                        >
                          {" "}
                          -{" "}
                        </button>
                        <span className="text-sm px-3">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.size,
                              item.quantity + 1,
                            )
                          }
                          className="px-3 py-1 text-sm hover:bg-gray-50"
                        >
                          {" "}
                          +{" "}
                        </button>
                      </div>
                      <span className="text-sm font-medium">
                        Rs.{(item.price * item.quantity).toLocaleString()}.00
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="px-8 py-6 border-t border-gray-100">
            <div className="flex justify-between text-sm mb-2">
              <span>Subtotal</span>
              <span>Rs.{subTotal.toLocaleString()}.00</span>
            </div>
            <div className="flex justify-between text-sm mb-4 text-gray-500">
              <span>Shipping</span>
              <span>Checkout</span>
            </div>
            <div className="flex justify-between text-base font-semibold mb-5">
              <span>Total</span>
              <span>Rs.{subTotal.toLocaleString()}.00</span>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleViewCart}
                className="flex-1 border border-gray-gray-800 text-gray-800 text-sm font-semibold py-3 hover:bg-gray-50 transition-colors"
              >
                {" "}
                View Cart
              </button>
              <button
                onClick={handleCheckout}
                className="flex-1 bg-gray-800 text-white text-sm font-semibold py-3 hover:bg-black transition-colors"
              >Checkout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default CartDrawer;
