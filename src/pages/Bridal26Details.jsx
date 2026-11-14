import {Link, useParams} from "react-router-dom";
import {Bridal26} from "../data/Bridal26";
import ProductGallery from "../components/common/ProductGallery";
import NargisInfo from "../components/common/NargisProductInfo";
import ProductRecommendations from "../components/common/ProductRecommendations";
function Bridal26Details(){
    const {id} = useParams();
    const product = Bridal26.find((item)=>item.id === Number(id));
    if(!product){
        return <h2>Product Not Found</h2>
    }
    const index = Bridal26.findIndex((item) => item.id === Number(id));
    const nextProduct = Bridal26[(index + 1) % Bridal26.length];
    return(
        <div className="w-full">
            <div className="bg-gray-100 mx-6 mt-4 px-4 py-2 text-sm text-gray-600">
                <Link to="/" className="hover:underline">Home</Link>
                <span> &gt; </span>
                <span>Nargis - Bridal Couture SS 26</span>
                <span> &gt; </span>
                <span>{product.name}</span>
            </div>
            <div className="max-w-[1500px] mx-auto px-8 lg:px-16 py-10 grid grid-cols-1 md:grid-cols-2 gap-12">
                <ProductGallery images={product.images} name={product.name} />
                <NargisInfo product = {product}
                collectionName="Bridal - Bridal Couture SS 26"
                collectionPath="/Bridal26"
                nextProductPath={`/Bridal26/${nextProduct.id}`}
                />
            </div>
            <ProductRecommendations
            products={Bridal26}
            currentProductId={product.id}
            basePath="/Bridal26"
            />
        </div>
    )
}
export default Bridal26Details;