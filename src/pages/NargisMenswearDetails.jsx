import { Link, useParams } from "react-router-dom";
import { NargisMenswear } from "../data/NargisMenswear";
import ProductGallery from "../components/common/ProductGallery";
import NargisInfo from "../components/common/NargisProductInfo";
import ProductRecommendations from "../components/common/ProductRecommendations";

function NargisMenswearDetails() {
  const { id } = useParams();
  const product = NargisMenswear.find((item) => item.id === Number(id));
  if (!product) {
    return <h2>Product Not Found</h2>;
  }
  const index = NargisMenswear.findIndex((item) => item.id === Number(id));
  const nextProduct = NargisMenswear[(index + 1) % NargisMenswear.length];
  return (
    <div className="w-full">
      <div className="bg-gray-100 mx-6 mt-4 px-4 py-2 text-sm text-gray-600">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <span> &gt; </span>
        <span>Nargis - Menswear 26</span>
        <span> &gt; </span>
        <span>{product.name}</span>
      </div>
      <div className="max-w-375 mx-auto px-8 lg:px-16 py-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        <ProductGallery images={product.images} name={product.name} />
        <NargisInfo
          product={product}
          collectionName="Nargis - Menswear 26"
          collectionPath="/Nargis"
          nextProductPath={`/NargisMenswear/${nextProduct.id}`}
        />
      </div>
      <ProductRecommendations
        products={NargisMenswear}
        currentProductId={product.id}
        basePath="/NargisMenswear"
      />
    </div>
  );
}
export default NargisMenswearDetails;
