import ProductRecommendations from "../components/common/ProductRecommendations";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ProductDetails as productDetailsData } from "../data/ProductDetails";
import ProductGallery from "../components/common/ProductGallery";
import ProductInfo from "../components/common/ProductInfo";
import sizeChartImg from "../assets/images/sizechart.png";

function ProductDetails() {
  const { id } = useParams();
  const [showSizeChart, setShowSizeChart] = useState(false);
  const product = productDetailsData.find((item) => item.id === Number(id));
  if (!product) {
    return <h2>Product Not Found</h2>;
  }
  return (
    <div className="w-full">
      <div className="bg-gray-100 mx-6 mt-4 px-4 py-2 text-sm text-gray-600">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <span>&gt;</span>
        <span>Pret SS26 Vol-ll</span>
        <span>&gt;</span>
        <span>{product.name}</span>
      </div>
      <div className="max-w-1500px mx-auto px-8 lg:px-16 py-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        <ProductGallery images={product.images} name={product.name} />
        <ProductInfo
          product={product}
          onOpenSizeChart={() => setShowSizeChart(true)}
        />
      </div>
      <ProductRecommendations
        products={productDetailsData}
        currentProductId={product.id}
        basePath="/product"
      />
      {showSizeChart && (
        <div
          onClick={() => setShowSizeChart(false)}
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
        >
          <div className="relative max-w-[90%] max-h-[90%]">
            <button
              onClick={() => setShowSizeChart(false)}
              className="absolute -top-10 right-0 text-white text-2xl"
            >
              ✕
            </button>
            <img
              src={sizeChartImg}
              alt="sizechart"
              className="max-w-full max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
export default ProductDetails;
