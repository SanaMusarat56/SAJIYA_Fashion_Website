import { Link, useParams } from "react-router-dom";
import { Parisa } from "../data/Parisa";
import ProductGallery from "../components/common/ProductGallery";
import Nargis from "../components/common/NargisProductInfo";
import ProductRecommendations from "../components/common/ProductRecommendations";

function ParisaDetails() {
  const { id } = useParams();
  const product = Parisa.find((item) => item.id === Number(id));
  if (!product) {
    return <h2>Product Not Found</h2>;
  }
  const index = Parisa.findIndex((item) => item.id === Number(id));
  const nextProduct = Parisa[(index + 1) % Parisa.length];
  return (
    <div className="w-full">
      <div className="bg-gray-100 mx-6 mt-4 px-4 py-2 text-sm text-gray-600">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <span> &gt; </span>
        <span>Parisa - Bridal Couture SS 26</span>
        <span> &gt; </span>
        <span>{product.name}</span>
      </div>
      <div className="max-w-375px mx-auto px-8 lg:px-16 py-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        <ProductGallery images={product.images} name={product.name} />
        <Nargis
          product={product}
          collectionName="Parisa - Bridal Couture SS 26"
          collectionPath="/Parisa"
          nextProductPath={`/Parisa/${nextProduct.id}`}
        />
      </div>
      <ProductRecommendations
        products={Parisa}
        currentProductId={product.id}
        basePath="/Parisa"
      />
    </div>
  );
}
export default ParisaDetails;
