import {
  FaFacebookF,
  FaXTwitter,
  FaPinterestP,
  FaWhatsapp,
} from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

const WHATSAPP_NUMBER = "923490614538";
function NargisInfo({ product,collectionName, collectionPath,nextProductPath}) {
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
      <h3 className="text-2xl font-medium mb-2">{product.name}</h3>
      <p className="text-lg">Rs.{product.price}</p>
      <div className="border-b border-gray-300 my-6"></div>
      <button className="bg-gray-300 flex items-center gap-3 px-5 py-3 mb-6 text-sm">
        <FiHeart size={18} className="text-red-500" />
        Please Login First
      </button>
      <button
        onClick={handleWhatsappClick}
        className="w-full bg-[#25D366] hover:bg-[#1fb955] text-white py-3 text-sm flex items-center justify-center gap-2 mb-8"
      >
        <FaWhatsapp size={18} />
        Chat with fashion consultant
      </button>
      <div className="mb-6">
        <p className="text-sm font-bold tracking-wide mb-3">
          Product Description:{" "}
        </p>
        <p className="text-sm text-gray-700 leading-relaxed">
          {product.productDescription}
        </p>
        {product.color && (
          <p className="text-sm mb-6">
            <span className="font-bold tracking-wide">Color: </span>
            {product.color}
          </p>
        )}
        {product.fabricDetails?.length > 0 && (
          <div className="mb-6">
            <p className="font-bold text-sm my-2">Fabric Details: </p>
            <ul className="list-disc list-inside text-sm text-gray-800 space-y-2">
              {product.fabricDetails.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        )}
        {product.size && (
          <p className="text-sm mb-6">
            <span className="font-bold tracking-wider">Size: </span>
            {product.size}
          </p>
        )}
        {product.Note && (
          <p className="text-sm mb-6">
            <span className="font-bold">Note: </span>
            {product.Note}
          </p>
        )}
        {product.shippingTime && (
          <p className="text-sm mb-8 font-bold">
          Shipping Time : {product.shippingTime}.
          </p>
        )}
        <div className="border-b border-gray-300 mb-6">
          <div className="flex items-center gap-3 text-sm">
            {collectionPath && (
              <Link to={collectionPath}
              className="italic hover:opacity-60 transition">
                Back to {collectionName}
              </Link>
            )}
            {collectionPath && nextProductPath && (
              <span className="text-gray-400">|</span>
            )}
            {nextProductPath && (
              <Link to={nextProductPath}
              className="italic hover:opacity-60 transition">Next Product</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default NargisInfo;
