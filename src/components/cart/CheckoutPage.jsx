import { useState } from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { cartItems = [], subTotal = 0 } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("card");
  if (cartItems.length === 0) {
    return (
      <div className="min-h[60vh] flex flex-col items-center justify-center py-4">
        <p className="text-gray-500 mb-4">Your cart is currently empty.</p>
        <button
          onClick={() => navigate("/")}
          className="bg-black text-white text-sm font-semibold px-6 py-3"
        >
          Continue Shopping
        </button>
      </div>
    );
  }
  return (
    <div className="fixed inset-0 z-50 bg-white text-gray-800 font-sans overflow-y-auto">
      <header className="border-b bg-white py-6 text-center">
        <h1
          onClick={() => navigate("/")}
          className="text-2xl font-light tracking-wide uppercase cursor-pointer"
        >
          SAJIYA
        </h1>
      </header>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center">
        <div className="lg:col-span-7 p-6 lg:p-12 border-r border-gray-200">
          <section className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-medium text-gray-900">Contact</h2>
              <button className="text-xs text-gray-500 underline">
                Sign in
              </button>
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md text-sm hover:border-gray-500 hover:shadow-md hover:shadow-gray-300 mb-3 transition-all focus:outline-none "
            />
            <label className="flex items-center text-sm text-black gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-black" />
              Email me with news and offers
            </label>
          </section>
          <section className="mb-8">
            <h2 className="text-lg font-medium text-gray-900 mb-3">Delivery</h2>
            <div className="space-y-3">
              <div>
                <label className="block text-[11px] text-gray-500 mb-1">
                  Country/Region
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-md text-sm bg-white hover:border-gray-500 hover:shadow-md hover:shadow-gray-300 focus:outline-none">
                  <option>Pakistan</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-3 border border-gray-300 rounded-md text-sm focus:outline-none hover:border-gray-500 hover:shadow-md hover:shadow-gray-300"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-3 border border-gray-300 rounded-md text-sm focus:outline-none hover:border-gray-500 hover:shadow-md hover:shadow-gray-300"
                />
              </div>
              <input
                type="text"
                placeholder="Address"
                className="w-full p-3 border border-gray-300 rounded-md text-sm focus:outline-none hover:border-gray-500 hover:shadow-md hover:shadow-gray-300"
              />
              <input
                type="text"
                placeholder="Apartment, suite, etc. (optional)"
                className="w-full p-3 border border-gray-300 rounded-md text-sm focus:outline-none hover:border-gray-500 hover:shadow-md hover:shadow-gray-300"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="City"
                  className="p-3 border border-gray-300 rounded-md text-sm focus:outline-none hover:border-gray-500 hover:shadow-md hover:shadow-gray-300"
                />
                <input
                  type="text"
                  placeholder="Postal Code(Optional)"
                  className="p-3 border border-gray-300 rounded-md text-sm focus:outline-none hover:border-gray-500 hover:shadow-md hover:shadow-gray-300"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone no"
                className="w-full p-3 border border-gray-300 rounded-md text-sm focus:outline-none hover:border-gray-500 hover:shadow-md hover:shadow-gray-300"
              />
              <label className="flex items-center text-xs text-gray-600 gap-2 cursor-pointer mt-2">
                <input type="checkbox" className="rounded boder-gray-300" />
                save this information for next time
              </label>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-lg font-medium text-gray-900 mb-3">
              Shipping Method
            </h2>
            <div className="p-4 border border-gray-200 rounded-md bg-gray-50 flex justify-between items-center text-sm">
              <span className="text-gray-700">Free Shipping</span>
              <span className="font-semibold text-black">Free</span>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-lg font-medium text-gray-900 mb-3">Payment</h2>
            <p className="text-sm text-gray-500 mb-3">
              All transcations are secure and encrypted
            </p>
            <div className="border border-gray-300 rounded-md overflow-hidden">
              <div
                className={`p-4 border-b border-gray-200 ${paymentMethod === "card" ? "bg-gray=50" : "bg-white"}`}
              >
                <label className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "card"}
                      onChange={() => setPaymentMethod("card")}
                      className="accent-black"
                    />
                    <span className="text-sm font-medium">
                      Debit / Credit Card
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <span className="text-[10px] bg-blue-600 text-white font-bold px-1.5 py-0.5 rounded">
                      VISA
                    </span>
                    <span className="text-[10px] bg-red-500 text-white font-bold px-1.5 py-0.5">
                      MC
                    </span>
                  </div>
                </label>
                {paymentMethod === "card" && (
                  <div className="mt-4 space-y-3">
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="w-full p-3 border border-gray-300 bg-white rounded-md text-sm focus:outline-none"
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Expiration date (MM / YY)"
                        className="p-3 border border-gray-300 rounded-md text-sm focus:outline-none hover:border-gray-500 hover:shadow-md hover:shadow-gray-300"
                      />
                      <input
                        type="text"
                        placeholder="Security Code"
                        className="p-3 border border-gray-300 rounded-md text-sm focus:outline-none hover:border-gray-500 hover:shadow-md hover:shadow-gray-300"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Name on Card"
                      className="w-full p-3 border border-gray-300 bg-white rounded-md text-sm focus:outline-none"
                    />
                  </div>
                )}
              </div>
              <div
                className={`p-4${paymentMethod === "card" ? "bg-gray-50" : "bg-white"}`}
              >
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    className="accent-black"
                  />
                  <span className="text-sm font-medium mb-3">
                    Cash on Delivery COD
                  </span>
                </label>
              </div>
            </div>
          </section>
          <button className="w-full bg-black text-white py-4 rounded-md text-sm font-semibold hover:bg-gray-800 transition-all">
            Pay Now
          </button>
        </div>
        <div className="lg:col-span-5 p-6 lg:p-12 bg-gray-50 sticky top-6 self-start">
          <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
            {cartItems.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-18 h-22 bg-gray-100 rounded-md border border-gray-200 shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-md"
                    />
                    <span className="absolute -top-2 -right-2 bg-gray-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                      {item.quantity}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      {item.title}
                    </h3>
                    {item.size && (
                      <p className="text-xs text-gray-600">{item.size}</p>
                    )}
                  </div>
                </div>
                <span className="text-sm font-medium">
                  Rs {(item.price* item.quantity).toLocaleString()}.00
                </span>
              </div>
            ))}
          </div>
          <div className="flex gap-2 mb-6">
            <input
            type="text"
            placeholder="Discount code or gift card"
            className="grow p-3 border border-gray-300 rounded-md text-sm bg-white focus:outline-none"
            />
            <button className="bg-gray-200 text-gray-600 px-4 py-3 rounded-md text-sm font-medium hover:bg-gray-300 transition-colors">Apply</button>
          </div>
          <div className="space-y-3 text-sm border-b border-gray-200 pb-4">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span className="font-medium text-gray-900">Rs {subTotal.toLocaleString()}.00</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span className="font-semibold text-black">FREE</span>
            </div>
            <div className="flex justify-between items-center pt-4">
              <div className="text-base font-semibold text-gray-900">Total</div>
              <div className="text-right">
                <span className="text-xs text-gray-500 mr-2">PKR</span>
                <span className="text-lg font-semibold text-gray-900">Rs. {subTotal. toLocaleString()}.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
