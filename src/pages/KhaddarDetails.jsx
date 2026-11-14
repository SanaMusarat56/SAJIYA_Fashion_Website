import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Khaddar } from "../data/Khaddar";
import ProductGallery from "../components/common/ProductGallery";
import JinanInfo from "../components/common/JinanInfo";
import sizechart from "../assets/images/sizechart.png";
import ProductRecommendations from "../components/common/ProductRecommendations";

function KhaddarDetails() {
  const { id } = useParams();
  const [showSizeChart, setShowSizeChart] = useState(false);
  const product = Khaddar.find((item) => item.id === Number(id));
  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold">Product Not Find</h2>
      </div>
    );
  }
  return (
    <div className="w-full">
      <div className="bg-gray-100 mx-6 my-4 px-4 py-3 text-sm text-gray-600">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <span>&gt;</span>
        <Link to="/Festive" className="hover:underline">
          Khaddar
        </Link>
        <span>&gt;</span>
        <span className="text-gray-900">{product.name}</span>
      </div>
      <div className="max-w-[1550px] mx-auto px-8 lg:px-16 py-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        <ProductGallery images={product.images} alt={product.name} />
        <JinanInfo
          product={product}
          onOpenSizeChart={() => setShowSizeChart(true)}
        />
      </div>
      <ProductRecommendations
        products={Khaddar}
        currentProductId={product.id}
        basePath="/Khaddar"
      />
      {showSizeChart && (
        <div
          onClick={() => setShowSizeChart(false)}
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
        >
          <div
            className="relative max-w-[90%] max-h-[90%]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowSizeChart(false)}
              className="absolute -top-10 right-0 text-white text-2xl"
            >
              ✕
            </button>
            <img
              src={sizechart}
              alt="Size Chart"
              className="max-w-full max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
export default KhaddarDetails;
