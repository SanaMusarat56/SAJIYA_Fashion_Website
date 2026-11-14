import { Link, useParams } from "react-router-dom";
import { Sitaray } from "../data/Sitaray";
import ProductGallery from "../components/common/ProductGallery";
import NargisInfo from "../components/common/NargisProductInfo";
import ProductRecommendations from "../components/common/ProductRecommendations";

function SitarayDetails() {
  const { id } = useParams();
  const product = Sitaray.find((item) => item.id === Number(id));
  if (!product) {
    return <h2>Product Not Found</h2>;
  }
  const index = Sitaray.findIndex((item) => item.id === Number(id));
  const nextProduct = Sitaray[(index + 1) % Sitaray.length];
  return (
    <div className="w-full">
      <div className="bg-gray-100 mx-6 mt-4 px-4 py-2 text-sm text-gray-600">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <span> &gt; </span>
        <span>Sitaray</span>
        <span> &gt; </span>
        <span>{product.name}</span>
      </div>
      <div className="max-w-375px mx-auto px-8 lg:px-16 py-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        <ProductGallery images={product.images} name={product.name} />
        <NargisInfo
          product={product}
          collectionName="Sitaray"
          collectionPath="/SitarayCollections"
          nextProductPath={`/SitarayDetails/${nextProduct.id}`}
        />
      </div>
      <ProductRecommendations
        products={Sitaray}
        currentProductId={product.id}
        basePath="/SitarayDetails"
      />
    </div>
  );
}
export default SitarayDetails;
