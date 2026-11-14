import { useCart } from "./CartContext";
import {useState} from "react";
import { FiChevronDown,  } from "react-icons/fi";
import { useNavigate, Link } from "react-router-dom";

export default function CartView() {
  const navigate = useNavigate();
  const [note, setNote] = useState("");
  const {
    cartItems = [],
    updateQuantity,
    removeFromCart,
    subTotal = 0,
  } = useCart();
  const totalItemCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans pb-16">
      <div className="w-full">
        <div className="bg-gray-100 mx-6 my-6 px-4 py-3 text-xs text-black">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          &gt; Your Shopping Cart
        </div>
        <div className="flex items-center justify-between border-b border-gray-200  mx-6 px-2 py-8 ">
          <button
            onClick={() => navigate("/")}
            className="text-sm text-gray-700 hover:text-black flex items-center gap-1 font-medium"
          >
            &lt; Continue Shopping
          </button>
          <h2 className="text-xl font-bold text-gray-900 ">Cart</h2>
          <span>{totalItemCount}item(s)</span>
        </div>
        {cartItems.length === 0 ? (
          <div className=" text-center py-16">
            <p className="text-gray-400 mb-4">Your shopping cart is empty</p>
            <button
              onClick={() => navigate("/")}
              className="bg-black text-white text-sm px-6 py-3 font-medium hover:bg-gray-800 transition"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="divide-y divide-gray-200 mx-6">
              {cartItems.map((item) => {
                const itemPrice = Number(item.price) || 0;
                const itemTotal = itemPrice * (item.quantity || 1);
                return (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4 relative"
                  >
                    <div className="flex gap-8 items-center w-full sm:w-1/2">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-37 h-55 object-cover rounded-sm shrink-0"
                      />
                      <div className="space-y-2">
                        <h3 className=" text-sm text-gray-900">{item.title}</h3>
                        {item.size && (
                          <p className="text-sm text-gray-800">
                            Size: {item.size}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="text-sm text-gray-800">
                      Rs.{itemPrice.toLocaleString()}.00
                    </div>
                    <div className="flex items-center border border-gray-300 bg-gray-50">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.size, item.quantity - 1)
                        }
                        className="px-3 py-1 text-gray-600 hover:bg-gray-200 text-sm"
                      >
                        -
                      </button>
                      <span className="px-3 py-2 text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.size, item.quantity + 1)
                        }
                        className="px-3 py-1 text-gray-600 hover:bg-gray-200 text-sm"
                      >
                        +
                      </button>
                    </div>
                    <div className="text-sm font-medium text-gray-900 pt-1">
                      Rs.{itemPrice.toLocaleString()}.00
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id, item.size)}
                      className="absolute top-2  right-0 text-gray-400 hover:text-black text-sm p-1"
                    >
                      ✕
                    </button>
                  </div>
                );
              })}
              <div className="mx-3 mt-1 space-y-1 text-xs">
                <p>
                  Deliveries to <strong>Quetta & Azad Kashmir</strong>may
                  experience delays due to the security situation.
                </p>
                <p className="text-red-500">
                  Do not make any payment to the courier service before
                  receiving the parcel. Additionally, do not accept the shipment
                  if the official <strong>Sajiya</strong> logo is not clearly
                  displayed on the packing flyer.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start pt-8 mx-6">
        <details className="group cursor-pointer">
          <summary className="text-sm font-normal text-gray-800 flex justify-between items-center list-none">
            <span>Leave a note with your order</span>
            <FiChevronDown className="transition-transform group-open:rotate-180" />
          </summary>
          <textarea
          value={note}
          onChange={(e)=> setNote(e.target.value)}
          rows={4}
          placeholder="Add a note for your order"
          className="mt-4 w-full border border-gray-300 p-3 text-sm resize-none focus:outline-none"
        />
        </details>
        <div className="text-sm">
          <div className="flex justify-between py-1">
            <span>SubTotal</span>
            <span>Rs.{subTotal.toLocaleString()}00</span>
          </div>
          <div className="flex justify-between py-1">
            <span>Shipping</span>
            <span className="text-gray-500">Calculated at checkout</span>
          </div>
          <div className="border-t border-gray-300 mt-3 pt-3 flex justify-between font-semibold text-base">
            <span>Total</span>
            <span>Rs. {subTotal.toLocaleString()}00</span>
          </div>
          <button
          onClick={()=> navigate("/checkout")}
          className="w-full bg-[#50535a] hover:bg-[#3f4247]  text-white py-4 text-sm uppercase  tracking-wide transition mt-6"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
