import { Link, useParams } from "react-router-dom";
import { ReharNagar } from "../data/ReharNagar";
import ProductGallery from "../components/common/ProductGallery";
import NargisInfo from "../components/common/NargisProductInfo";
import ProductRecommendations from "../components/common/ProductRecommendations";

function ReharNagarDetails() {
  const { id } = useParams();
  const product = ReharNagar.find((item) => item.id === Number(id));
  if (!product) {
    return <h2>Product Not Found</h2>;
  }
  const index = ReharNagar.findIndex((item) => item.id === Number(id));
  const nextProduct = ReharNagar[(index + 1) % ReharNagar.length];
  return (
    <div className="w-full">
      <div className="bg-gray-100 mx-6 mt-4 px-4 py-2 text-sm text-gray-600">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <span> &gt; </span>
        <span>Rehar Nagar- Bridal Couture SS 26</span>
        <span> &gt; </span>
        <span>{product.name}</span>
      </div>
      <div className="max-w-[1500px] mx-auto px-8 lg:px-16 py-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        <ProductGallery images={product.images} name={product.name} />
        <NargisInfo
          product={product}
          collectionName="Bridal - Bridal Couture SS 26"
          collectionPath="/Bridal"
          nextProductPath={`/ReharNagar/${nextProduct.id}`}
        />
      </div>
      <ProductRecommendations
        products={ReharNagar}
        currentProductId={product.id}
        basePath="/ReharNagar"
      />
    </div>
  );
}
export default ReharNagarDetails;
