import { Link } from "react-router-dom";

function ProductCard({ item, to }) {
  return (
    <Link to={to || `/product/${item.id}`}>
      <div className="relative cursor-pointer group">
        <div className="w-full bg-gray-50 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-80 md:h-90 lg:h-95 object-cover object-top transition-transform duration-700 group-hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={item.id * 100}
          />
        </div>
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white w-[82%] py-4 px-3 text-center shadow-md transition-all duration-300">
          <h3 className="text-xs md:text-sm font-medium tracking-widest uppercase transition-colors duration-300">
            {item.name}
          </h3>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;