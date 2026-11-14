import { Link } from "react-router-dom";

function ProductRecommendations({ products, currentProductId, basePath }) {
  if (!products || products.length === 0) return null;

  const related = products
    .filter((p) => p.id !== currentProductId)
    .slice(0, 4);

  if (related.length === 0) return null;

  return (
    <div className="max-w-[1500px] mx-auto px-8 lg:px-16 py-12 mt-8 cursor-pointer">
      <h2 className="text-xl md:text-2xl font-medium mb-6 tracking-wide text-center">
        You May Also Like
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {related.map((item) => (
          <Link
            key={item.id}
            to={`${basePath}/${item.id}`}
            className="group block"
          >
            <div className="aspect-[3/4] overflow-hidden bg-gray-100">
              <img
                src={item.images?.[0]}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="mt-3 text-sm">
              <p className="text-gray-800">{item.name}</p>
              <p className="text-gray-600">Rs. {item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductRecommendations;