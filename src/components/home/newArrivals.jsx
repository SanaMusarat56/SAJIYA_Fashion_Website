import { newArrivals } from "../../data/newArrivals";
import ProductCard from "./ProductCard";


const routeMap={
  10: "/jinan",
  11: "/eidPret",
  12: "/Zan",
  13: "/Nargis",
}
function NewArrivals() {
  return (
    <section className="max-w-[1550px] mx-auto px-8 lg:px-12 py-16">
      <div className="text-center mb-12" data-aos="fade-up">
        <h3 className="text-[18px] md:text-[20px] font-normal uppercase tracking-[3px] text-black">
          New Arrivsls
        </h3>
        <div className="w-24 h-[1.5px] bg-black mx-auto mt-1"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {newArrivals.map((item) => (
          <ProductCard key={item.id} item={item} to={routeMap[item.id]} />
        ))}
      </div>
    </section>
  );
}

export default NewArrivals;