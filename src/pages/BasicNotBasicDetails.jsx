import {Link, useParams} from "react-router-dom";
import {BasicNotBasic} from "../data/BasicNotBasic";
import ProductGallery from "../components/common/ProductGallery";
import NargisInfo from "../components/common/ProductInfo";
import ProductRecommendations from "../components/common/ProductRecommendations";
function BasicNotBasicDetails(){
    const {id} = useParams();
    const product = BasicNotBasic.find((item)=>item.id === Number(id));
    if(!product){
        return <h2>Product Not Found</h2>
    }
    const index = BasicNotBasic.findIndex((item) => item.id === Number(id));
    const nextProduct = BasicNotBasic[(index + 1) % BasicNotBasic.length];
    return(
        <div className="w-full">
            <div className="bg-gray-100 mx-6 mt-4 px-4 py-2 text-sm text-gray-600">
                <Link to="/" className="hover:underline">Home</Link>
                <span> &gt; </span>
                <span>Basic Not Basic V (Menswear)</span>
                <span> &gt; </span>
                <span>{product.name}</span>
            </div>
            <div className="max-w-375 mx-auto px-8 lg:px-16 py-10 grid grid-cols-1 md:grid-cols-2 gap-12">
                <ProductGallery images={product.images} name={product.name} />
                <NargisInfo product = {product}
                collectionName="BasicNotBasic"
                collectionPath="/BasicNotBasicCollections"
                nextProductPath={`/BasicNotBasicDetails/${nextProduct.id}`}
                />
            </div>
            <ProductRecommendations
            products={BasicNotBasic}
            currentProductId={product.id}
            basePath="/BasicNotBasicDetails"
            />
        </div>
    )
}
export default BasicNotBasicDetails;