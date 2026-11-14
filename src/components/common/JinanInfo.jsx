import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../cart/CartContext";
import {
  FaFacebookF,
  FaXTwitter,
  FaPinterestP,
  FaWhatsapp,
} from "react-icons/fa6";
import { FiHeart, FiMaximize } from "react-icons/fi";

function JinanInfo({ product, onOpenSizeChart }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "");
  const [quantity, setQuantity] = useState(1);
  const {addToCart} = useCart();
  const navigate = useNavigate();
   const buildCartItem = () => ({
      id: product.id,
      title: product.name,
      image: product.images?.[0],
      size: selectedSize,
      price: Number(String(product.price).replace(/,/g, "")),
      quantity,
    });
    const handleAddToCart = () => {
      addToCart(buildCartItem());
    };
    const handleBuyNow = () => {
      navigate("/checkout", { state: { buyNowItem: buildCartItem() } });
    };    
  const handleWhatsappClick = () => {
    const phoneNumber = "923490614538";
    const message = encodeURIComponent(
      `Hello, I am interested in ${product.name} (${product.price}).`,
    );
    window.open(
      `https://api.whatsapp.com/send/?phone=%2B${phoneNumber}&text=${message}`,
      "_blank",
    );
  };
  return (
    <div className="w-full">
      <div className="flex justify-end items-center gap-3 mb-6 text-black">
        <FaFacebookF
          size={14}
          className="cursor-pointer hover:opacity-60 transition"
        />
        <FaXTwitter
          size={14}
          className="cursor-pointer hover:opacity-60 transition"
        />
        <FaPinterestP
          size={14}
          className="cursor-pointer hover:opacity-60 transition"
        />
      </div>
      <h3 className="text-2xl font-md mb-2">{product.name}</h3>
      <p className="text-lg">Rs.{product.price}</p>
      <div className="border-b border-gray-300 my-6"></div>
      <button className="bg-gray-300 flex items-center gap-3 px-5 py-3 mb-6 text-sm">
        <FiHeart size={18} className="text-red-500" />
        Please Login First
      </button>
      <button
        onClick={onOpenSizeChart}
        className="flex items-center gap-2 text-sm underline my-12 ml-7"
      >
        <FiMaximize size={16} /> Size Chart
      </button>
      <p className="text-sm mb-3">
        <span className="font-md tracking-wider">Size: </span>
        {selectedSize}
      </p>
      <div className="flex flex-wrap gap-2.5">
        {product.sizes?.map((size) => {
          const isDisabled = size !== "Unstitched";
          const isSelected = selectedSize === size;

          return (
            <button
              key={size}
              onClick={() => !isDisabled && setSelectedSize(size)}
              disabled={isDisabled}
              className={`relative h-11 min-w-11 px-2 flex items-center justify-center border text-xs tracking-wider uppercase transition-all overflow-hidden ${
                isDisabled
                  ? "border-gray-300 text-gray-400 cursor-not-allowed"
                  : isSelected
                    ? "bg-black text-white border-black font-semibold"
                    : "border-gray-300 text-black hover:border-black"
              }`}
            >
              <span className="z-10">{size}</span>
              {isDisabled && (
                <div className="absolute inset-0 pointer-events-none">
                  <span
                    className="absolute top-1/2 left-1/2 w-[140%] h-px bg-gray-300"
                    style={{ transform: "translate(-50%, -50%) rotate(45deg)" }}
                  />
                  <span
                    className="absolute top-1/2 left-1/2 w-[140%] h-px bg-gray-300"
                    style={{
                      transform: "translate(-50%, -50%) rotate(-45deg)",
                    }}
                  />
                </div>
              )}
            </button>
          );
        })}
      </div>
      <div className="bg-gray-100 font-md px-4 py-3 mt-6 mb-6 text-sm text-red-600 font-md">
        Unstitched Dispatch Date :{" "}
        {product.shippingUnstitched || "Next Working Days"}
      </div>
      <p className="font-md text-sm mb-3">Quantity: </p>
      <div className="flex items-center border border-gray-300 w-36 h-11 mt-6">
        <button
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="w-10 h-full flex items-center justify-center hover:bg-gray-50"
        >
          −
        </button>
        <span className="flex-1 text-center text-sm">{quantity}</span>
        <button
          onClick={() => setQuantity((q) => q + 1)}
          className="w-10 h-full flex items-center justify-center hover:bg-gray-50"
        >
          +
        </button>
      </div>
      <div className="flex flex-col gap-3 mb-6">
        <button
          onClick={handleAddToCart}
          className="w-70 bg-gray-400 hover:bg-gray-500 text-white py-3.5 text-sm uppercase tracking-wide mt-5"
        >
          Add to Cart
        </button>
        <button
          onClick={handleBuyNow}
          className="w-70 bg-gray-500 hover:bg-gray-400 text-white py-3.5 text-sm uppercase tracking-wide"
        >
          Buy it Now
        </button>
      </div>
      <div className="border-b border-gray-300 mt-6"></div>
      <div className="my-5">
        <p className="font-md text-sm">Shipping Time:</p>
        <p className="text-sm text-red-600 text-bold">
          Unstitched : {product.shippingUnstitched || "Next Working Day"}
        </p>
        <p className="text-sm text-red-600 text-bold">
          Pret / Stitched : {product.shippingPretStitched || "Next Working Day"}
        </p>
      </div>
      <p className="text-sm mb-6">
        <span className="font-md tracking-wide">Color: </span> {product.color}
      </p>
      <div className="mb-6">
        <p className="text-sm font-md tracking-wide mb-3 ">
          Product Description:{" "}
        </p>
        <p className="text-sm text-gray-700">{product.description}</p>
      </div>
      {product.fabricDetails && (
        <div className="mb-6">
          <p className="font-md text-sm my-2">Fabric Details :</p>
          <ul className="list-disc list-inside text-sm text-gray-800 space-y-2">
            {product.fabricDetails.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="mb-5">
        <p className="font-md text-sm mb-4">Fabric Details in Meters: </p>
        <ul className="list-disc list-inside text-sm text-gray-800 space-y-2">
          {product.fabricDetailsInMeters?.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </div>
      {product.colorNote && (
        <p className="text-sm mt-5 font-md">
          <span className="text-sm">Note: </span> {product.colorNote}
        </p>
      )}
      <button
        onClick={handleWhatsappClick}
        className="w-full bg-[#25D366] hover:bg-[#1fb955] text-white py-3 text-sm flex items-center justify-center gap-2 mt-5"
      >
        <FaWhatsapp size={20} />
        Chat with fashion consultant
      </button>
    </div>
  );
}
export default JinanInfo;
