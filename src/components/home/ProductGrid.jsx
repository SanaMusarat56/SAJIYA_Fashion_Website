import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

import { FiChevronLeft, FiSearch, FiChevronRight } from "react-icons/fi";
import { products } from "../../data/products";

function ProductGrid() {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  return (
    <section className="max-w-[1550px] mx-auto px-8 lg:px-16 py-10 relative">
      <div className="text-center mb-5">
        <h3 className="text-md uppercase tracking-[1px] font-semibold text-black inline-block pb-3 border-b-2 border-black">
          PRET SS26 VOL II
        </h3>
      </div>
      <div className="relative group">
        <button
          ref={(node) => setPrevEl(node)}
          className="absolute left-3 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-800 hover:bg-black hover:text-white transition-all duration-300 disabled:opacity-0 cursor-pointer"
          aria-label="Previous Slide"
        >
          <FiChevronLeft className="text-xl md:text-2xl" />
        </button>

        <button
          ref={(node) => setNextEl(node)}
          className="absolute right-3 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-800 hover:bg-black hover:text-white transition-all duration-300 disabled:opacity-0 cursor-pointer"
          aria-label="Next Slide"
        >
          <FiChevronRight className="text-xl md:text-2xl" />
        </button>

        <Swiper
          modules={[Navigation]}
          navigation={{ prevEl, nextEl }}
          loop={true}
          speed={600}
          spaceBetween={24}
          slidesPerView={4}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 15 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 24 },
            1400: { slidesPerView: 4, spaceBetween: 24 },
          }}
          className="w-full"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <Link to ={`/product/${product.id}`} className="flex flex-col items-center group cursor-pointer">
                <div className="w-full overflow-hidden bg-gray-50 mb-0 group/card">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[320px] md:h-[360px] lg:h-[380px] object-cover object-top transition-transform duration-700 ease-out group-hover/card:scale-105"
                  />
                  <div className="absolute top-4 right-4 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 z-10">
                    <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors duration-300">
                      <FiSearch size={18} />
                    </button>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-sm font-normal text-gray-1000 m-0 p-0">
                    {product.name}
                  </h3>
                  <p className="text-sm md:text-base font-bold text-black mt-1.5">
                    Rs.{product.price?.toLocaleString()}.00
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ProductGrid;
