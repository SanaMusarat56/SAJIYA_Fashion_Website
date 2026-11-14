import { Link, useParams } from "react-router-dom";
import { NargisFormal } from "../data/NargisFormal";
import ProductGallery from "../components/common/ProductGallery";
import NargisInfo from "../components/common/NargisProductInfo";
import ProductRecommendations from "../components/common/ProductRecommendations";

function NargisFormalDetail() {
  const { id } = useParams();
  const product = NargisFormal.find((item) => item.id === Number(id));
  if (!product) {
    return <h2>Product Not Found</h2>;
  }
  const index = NargisFormal.findIndex((item) => item.id === Number(id));
  const nextProduct = NargisFormal[(index + 1) % NargisFormal.length];
  return (
    <div className="w-full">
      <div className="bg-gray-100 mx-6 mt-4 px-4 py-2 text-sm text-gray-600">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <span> &gt; </span>
        <span>Nargis Formal SS 26</span>
        <span> &gt; </span>
        <span>{product.name}</span>
      </div>
      <div className="max-w-375px mx-auto px-8 lg:px-16 py-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        <ProductGallery images={product.images} name={product.name} />
        <NargisInfo
          product={product}
          collectionName="Bridal - Bridal Couture SS 26"
          collectionPath="/NargisFormal"
          nextProductPath={`/NargisFormal/${nextProduct.id}`}
        />
      </div>
      <ProductRecommendations
        products={NargisFormal}
        currentProductId={product.id}
        basePath="/NargisFormal"
      />
    </div>
  );
}
export default NargisFormalDetail;
