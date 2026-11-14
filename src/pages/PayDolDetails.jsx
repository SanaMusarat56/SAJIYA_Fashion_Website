import { Link, useParams } from "react-router-dom";
import { PayDol } from "../data/PayDol";
import ProductGallery from "../components/common/ProductGallery";
import ProductInfo from "../components/common/ProductInfo";
import ProductRecommendations from "../components/common/ProductRecommendations";
function PayDolDetails() {
  const { id } = useParams();
  const product = PayDol.find((item) => item.id === Number(id));
  if (!product) {
    return <h2>Product Not Found</h2>;
  }
  const index = PayDol.findIndex((item) => item.id === Number(id));
  const nextProduct = PayDol[(index + 1) % PayDol.length];
  return (
    <div className="w-full">
      <div className="bg-gray-100 mx-6 mt-4 px-4 py-2 text-sm text-gray-600">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <span> &gt; </span>
        <span>Pay Day Vol VI Menswear</span>
        <span> &gt; </span>
        <span>{product.name}</span>
      </div>
      <div className="max-w-375 mx-auto px-8 lg:px-16 py-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        <ProductGallery images={product.images} name={product.name} />
        <ProductInfo
          product={product}
          collectionName="PayDol"
          collectionPath="/PayDolCollections"
          nextProductPath={`/PayDolDetails/${nextProduct.id}`}
        />
      </div>
      <ProductRecommendations
        products={PayDol}
        currentProductId={product.id}
        basePath="/PayDolDetails"
      />
    </div>
  );
}
export default PayDolDetails;
