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

const WHATSAPP_NUMBER = "923490614538";
function ProductInfo({ product, onOpenSizeChart }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "");
  const [quantity, setQuantity] = useState(1);
  const {addToCart} =useCart();
  const navigate = useNavigate();
  const buildCartItem = ()=> ({
    id:product.id,
    title:product.name,
    image:product.images?.[0],
    size:selectedSize,
    price:Number(String(product.price).replace(/,/g,"")),
    quantity,
  });
  const handleAddToCart = () => {
    addToCart(buildCartItem());
  };
  const handleBuyNow = () =>{
    navigate("/checkout",{state: {buyNowItem: buildCartItem()}});
  };
  const handleWhatsappClick = () => {
    const message = encodeURIComponent(
      `Hello, I am interested in ${product.name} (Rs.${product.price}).`,
    );
    window.open(
      `https://api.whatsapp.com/send/?phone=%2B${WHATSAPP_NUMBER}&text=${message}`,
      "_blank",
    );
  };

  return (
    <div className="w-full">
      <div className="flex justify-end items-center gap-5 mb-6 text-black">
        <FaFacebookF
          size={16}
          className="cursor-pointer hover:opacity-60 transition"
        />
        <FaXTwitter
          size={16}
          className="cursor-pointer hover:opacity-60 transition"
        />
        <FaPinterestP
          size={16}
          className="cursor-pointer hover:opacity-60 transition"
        />
      </div>
      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-xl font-medium tracking-wide">{product.name}</h3>
        {product.isSoldOut && (
          <span className="bg-yellow-400 text-black text-xs font-semibold py-1 px-1.5">
            Sold Out
          </span>
        )}
      </div>
      <p className="text-lg mb-2">
        {product.isSale ? (
          <>
            <span className="flex items-center gap-3">
              <span className="text-reg-600 font-semibold">
                Rs.{product.price}
              </span>
              {""}
              <span className="line-through text-gray-500">
                Rs.{product.oldPrice}
              </span>
              {""}
              <span className="border border-red-400 text-red-600 text-xs p-2 py-0.5 ml-1 align-middle">
                SALE
              </span>
            </span>
          </>
        ) : (
          <>Rs.{product.price}</>
        )}
      </p>
      <div className="border-b border-gray-300 my-6"></div>
      <button className="flex items-center gap-4 bg-gray-300 hover:bg-gray-400 px-5 py-3 text-sm transition tracking-wide mb-12">
        <FiHeart size={16} className="text-red-500" />
        Please Login First
      </button>
      <div className="mt-8 mb-8">
        <button
          onClick={onOpenSizeChart}
          className="flex items-center gap-2 text-sm underline underline-offset-4 mb-12  hover:opacity-60 transition ml-5"
        >
          <FiMaximize size={16} />
          Size Chart
        </button>
        <p className="text-sm mb-3">
          <span className="font-bold">Size: </span>
          {selectedSize}
        </p>
        <div className="flex gap-2">
          {product.sizes?.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-10 h-11 border text-sm transition-colors ${
                selectedSize === size
                  ? "bg-black text-white border-black"
                  : "border-gray-400 hover:border-black"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <h3 className="font-bold text-sm mb-3">Quantity</h3>

        <div className="flex items-center border border-gray-300 w-36 h-13">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="w-1/3 text-lg"
          >
            -
          </button>

          <span className="w-1/3 text-center">{quantity}</span>

          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="w-1/3 text-lg"
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3 mb-8">
        <button 
        onClick={handleAddToCart}
        className="w-80 bg-gray-400 hover:bg-gray-500 text-white py-3.5 text-sm uppercase tracking-wide transition">
          Add to Cart
        </button>
        <button 
        onClick={handleBuyNow}
        className="w-80 bg-[#50535a] hover:bg-[#3f4247] text-white py-3.5 text-sm uppercase tracking-wide transition">
          Buy it Now
        </button>
      </div>
      <div className="border-b border-gray-300 mb-6" />
      {product.color && (
        <p className="text-sm mb-5">
          <span className="font-bold">Color: </span> {product.color}
        </p>
      )}
      <div className="mb-6">
        <p className="font-bold text-sm mb-3">Fabric Details:</p>
        <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
          {product.fabricDetails?.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </div>
      <div className="mb-6">
        <p className="font-bold text-sm mb-3">Product Description:</p>
        <p className="text-sm text-gray-700 leading-relaxed">
          {product.description}
        </p>
      </div>
      <button
        onClick={handleWhatsappClick}
        className="w-full bg-[#25D366] hover:bg-[#1fb955] text-white py-3 text-sm flex items-center justify-center gap-2 transition"
      >
        <FaWhatsapp size={20} />
        Chat with Fashion Consultant
      </button>
    </div>
  );
}
export default ProductInfo;
