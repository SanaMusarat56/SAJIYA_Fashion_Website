import { Link, useParams } from "react-router-dom";
import { PretSS26 } from "../data/PretSS26";
import ProductGallery from "../components/common/ProductGallery";
import ProductInfo from "../components/common/ProductInfo";
import ProductRecommendations from "../components/common/ProductRecommendations";

function PretSS26Details() {
  const { id } = useParams();
  const product = PretSS26.find((item) => item.id === Number(id));
  if (!product) {
    return <h2>Product Not Found</h2>;
  }
  const index = PretSS26.findIndex((item) => item.id === Number(id));
  const nextProduct = PretSS26[(index + 1) % PretSS26.length];
  return (
    <div className="w-full">
      <div className="bg-gray-100 mx-6 mt-4 px-4 py-2 text-sm text-gray-600">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <span> &gt; </span>
        <span>PretSS26</span>
        <span> &gt; </span>
        <span>{product.name}</span>
      </div>
      <div className="max-w-375 mx-auto px-8 lg:px-16 py-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        <ProductGallery images={product.images} name={product.name} />
        <ProductInfo
          product={product}
          collectionName="PretSS26"
          collectionPath="/PretSS26Collections"
          nextProductPath={`/PretSS26Details/${nextProduct.id}`}
        />
      </div>
      <ProductRecommendations
        products={PretSS26}
        currentProductId={product.id}
        basePath="/PretSS26Details"
      />
    </div>
  );
}
export default PretSS26Details;
