import { useState } from "react";
import { Link } from "react-router-dom";
import { ReharNagar } from "../data/ReharNagar";

function ReharNagarCollections() {
  const [sortBy, setSortBy] = useState("featured");
  const sortedProducts = [...ReharNagar].sort((a, b) => {
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
          Home
        </Link>
        <span>&gt;</span>
        <span>Rehar Nagar - Bridal 26</span>
      </div>
      <div className="text-center py-5">
        <h1 className="text-2xl font-medium">Rehar Nagar- Bridal 26</h1>
      </div>
      <div className="flex items-center gap-4 px-8 lg:px-12 max-w-[1550px] mx-auto mb-6">
        <p className="text-sm text-black">{ReharNagar.length} products</p>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-300 px-4 py-3 text-sm"
        >
          <option value="featured">Sort By</option>
          <option value="nameAZ">Alphabetically, A-Z</option>
          <option value="nameZA">Alphabetically, Z-A</option>
          <option value="priceLowHigh">Price, low to high</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 py-10 max-w-[1550px] mx-auto px-8 lg:px-12 pb-16">
        {sortedProducts.map((item) => (
          <Link key={item.id} to={`/ReharNagar/${item.id}`}>
            <div className="w-full overflow-hidden">
              <img
                src={item.images[0]}
                alt={item.name}
                className="w-full h-[380px] object-cover object-top"
              />
              <p className=" text-sm font-normal text-center">{item.name}</p>
              <p className="text-sm text-center mt-3 mb-7 font-bold">
                from {item.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <p className="text-center text-sm text-gray-800 pb-16">
        Showing items 1-{ReharNagar.length} of {ReharNagar.length}
      </p>
    </div>
  );
}
export default ReharNagarCollections;
