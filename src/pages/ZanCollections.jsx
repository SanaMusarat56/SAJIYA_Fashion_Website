import { useState } from "react";
import { Link } from "react-router-dom";
import { Zan } from "../data/Zan";
function ZanCollections() {
  const [sortBy, setSortBy] = useState("featured");
  const sortedProducts = [...Zan].sort((a, b) => {
    if (sortBy === "priceLowHigh") {
      return (
        parseFloat(a.price.replace(/[^0-9.]/g, "")) -
        parseFloat(b.price.replace(/[^0-9.]/g, ""))
      );
    }
    if (sortBy === "priceHighLow") {
      return (
        parseFloat(b.price.replace(/[^0-9.]/g, "")) -
        parseFloat(a.price.replace(/[^0-9.]/g, ""))
      );
    }
    if (sortBy === "nameAZ") {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === "nameZA") {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });
  return (
    <div className="w-full">
      <div className="bg-gray-100 mx-6 mt-4 px-4 py-2 text-sm text-gray-600">
        <Link to="/" className="hover:underline">
          <span>Home</span>
          <span>&gt;</span>
          <span>ZAN SS 26</span>
        </Link>
      </div>
      <div className="text-center py-5">
        <h1 className="text-xl font-medium tracking-wider">Zan SS 26</h1>
      </div>
      <div className="max-w-[1550px] mx-auto flex items-center gap-4 px-8 lg:px-12 mx-auto mb-6">
        <p className="text-sm text-black">{Zan.length} products</p>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-300 px-4 py-3 text-sm focus:outline-none"
        >
          <option value="featured">Sort By</option>
          <option value="nameAZ">Alphabetically, A-Z</option>
          <option value="nameZA">Alphabetically, Z-A</option>
          <option value="priceLowHigh">price, Low to High</option>
          <option value="priceHighLow">price, High to Low</option>
        </select>
      </div>
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8 py-10 lg:px-16 pb-16">
        {sortedProducts.map((item)=>(
          <Link key={item.id} to={`/Zan/${item.id}`}>
            <div className="w-full overflow-hidden">
              <div className="w-full relative">
                <img 
                src={item.images[0]}
                alt={item.name}
                className="w-full h-[380px] object-cover object-top"
                />
                {item.isSoldOut? (
                  <span className="bg-[#e0b252] absolute bottom-2 right-2 font-bold text-[11px] px-2 py-1 tracking-wide uppercase">
                    SOLD OUT
                  </span>
                ):item.isSale? (
                  <span className="bg-[#d9381e] absolute bottom-2 right-2 text-white text-[11px] font-bold px-2.5 py-1 tracking-wider uppercase">
                    SALE
                  </span>
                ):null}
              </div>
              <p className="text-center text-sm font-normal">{item.name}</p>
              <div className="text-center text-sm mt-1 mb-7 font-bold flex items-center justify-center gap-2">
                {item.oldPrice?(
                  <>
                  <span className="text-[#d9381e]">Rs.{item.price}</span>
                  <span className="line-through text-black font-medium">Rs.{item.oldPrice}</span>
                  </>
                ):(
                  <span className="text-black">Rs.{item.price}</span>
                )}
              </div>
            </div>
          </Link>
        ))}

      </div>
      <p className="text-sm text-center text-gray-800 pb-16">Showing items 1-{Zan.length} of {Zan.length}</p>
    </div>
  );
}
export default ZanCollections;
