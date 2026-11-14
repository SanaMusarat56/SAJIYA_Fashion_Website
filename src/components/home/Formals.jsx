import { formals } from "../../data/formal";
import { Link } from "react-router-dom";
const routeMap = {
  1: "/NargisFormal",
  2: "/DilrubaFormalCollection",
  3: "/MehrabFormal",
  4: "/SitarayCollections",
};
function Formals() {
  return (
    <section className="max-w-[1550px] mx-auto px-8 lg:px-12 py-16">
      <div className="text-center mb-12" data-aos="fade-up">
        <h3 className="text-[18px] md:text-[20px] font-normal uppercase tracking-[3px] text-black ">
          Formals
        </h3>
        <div className="w-24 h-[1.5px] bg-black mx-auto mt-1"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {formals.map((item) => {
          const path = routeMap[item.id];
          const card = (
            <div key={item.id} className="relative cursor-pointer group">
              <div className="w-full bg-gray-50 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-80 md:h-90 lg:h-95 object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  data-aos="fade-up"
                  data-aos-delay={item.id * 100}
                />
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white w-[82%] py-4 px-3 text-center shadow-md transition-all duration-300 ">
                <h3 className="text-xs md:text-sm font-medium tracking-widest uppercase transition-colors duration-300">
                  {item.name}
                </h3>
              </div>
            </div>
          );
          return path ? (
            <Link key={item.id} to={path}>
              {card}
            </Link>
          ) : (
            <div key={item.id}>{card}</div>
          );
        })}
      </div>
    </section>
  );
}
export default Formals;
