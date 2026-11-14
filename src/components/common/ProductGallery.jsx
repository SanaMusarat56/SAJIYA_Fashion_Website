import { useState, useRef, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
function ProductGallery({ images, name }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const thumbnailRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkThumbnailsScroll = () => {
    const container = thumbnailRef.current;
    if (!container) return;
    setCanScrollLeft(container.scrollLeft > 5);
    setCanScrollRight(
      container.scrollLeft + container.clientWidth < container.scrollWidth - 5,
    );
  };
  useEffect(() => {
    checkThumbnailsScroll();
  }, [images]);
  const moveThumbnailsRight = () => {
    thumbnailRef.current?.scrollBy({ left: 145, behaviour: "smooth" });
  };
  const moveThumbnailsLeft = () => {
    thumbnailRef.current?.scrollBy({
      left: -145,
      behaviour: "smooth",
    });
  };
  return (
    <div className="w-full">
      <div className="relative mb-4 group">
        <img
          src={images[selectedImage]}
          alt={name}
          className="w-full h-auto object-cover"
        />
        <button
          onClick={() =>
            setSelectedImage((prev) =>
              prev === 0 ? images.length - 1 : prev - 1,
            )
          }
          className="absolute left-3 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm text-gray-700 transition-all-duration-200"
        >
          <FiChevronLeft size={18} strokeWidth={1.5} />
        </button>
        <button
          onClick={() =>
            setSelectedImage((prev) =>
              prev === images.length - 1 ? 0 : prev + 1,
            )
          }
          className="
            absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white
            flex items-center justify-center shadow-sm text-gray-700 transition-all duration-200"
        >
          <FiChevronRight size={18} strokeWidth={1.5} />
        </button>
      </div>
      <div className="relative">
        {canScrollLeft && (
          <button
            onClick={moveThumbnailsLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700"
          >
            <FiChevronLeft size={18} />
          </button>
        )}
        <div
          ref={thumbnailRef}
          onScroll={checkThumbnailsScroll}
          className="flex gap-1.5 overflow-x-auto scroll-smooth pb-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`flex shrink-0 w-26 h-24 overflow-hidden border transition-all duration-200 ${
                selectedImage === index
                  ? "border-gray-800"
                  : "border-transparent"
              }`}
            >
              <img
                src={img}
                alt={`${name} ${index + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </button>
          ))}
        </div>
        {canScrollRight && (
          <button
            onClick={moveThumbnailsRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700"
          >
            <FiChevronRight size={18} />
          </button>
        )}
      </div>
    </div>
  );
}
export default ProductGallery;
