import { useState } from "react";
import { BackArrowIcon } from "./Icons";

export interface Product {
  id: string;
  name: string;
  vendor: string;
  vendorLogo: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
}

interface ProductCarouselProps {
  title: string;
  products: Product[];
  onBuyNow?: (productId: string) => void;
  onViewDetails?: (productId: string) => void;
  onViewAll?: () => void;
}

const ProductCarousel = ({title,
  products,
  onBuyNow,
  onViewDetails,
  onViewAll}: ProductCarouselProps) => {
      const [currentIndex, setCurrentIndex] = useState(0);

  const scrollLeft = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const scrollRight = () => {
    setCurrentIndex((prev) => Math.min(products.length - 1, prev + 1));
  };
  return (
      <div className="max-w-screen-xl1 mx-auto p-4 md:px-8 lg:px-8 xl1:px-[80px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        {onViewAll && (
          <button
            onClick={onViewAll}
            className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
          >
            View all
          </button>
        )}
      </div>
      <div className="relative">
        <button
          onClick={scrollLeft}
          disabled={currentIndex === 0}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-lg border border-gray-200 p-2 transition-all ${
            currentIndex === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-50 hover:shadow-xl"
          }`}
          style={{ marginLeft: "-20px" }}
        >
      left
        </button>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />

                {/* Overlay Buttons - Example: only on 3rd card */}
                {index === 2 && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center gap-3">
                    {onBuyNow && (
                      <button
                        onClick={() => onBuyNow(product.id)}
                        className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-lg transition-colors"
                      >
                        Buy Now
                      </button>
                    )}
                    {onViewDetails && (
                      <button
                        onClick={() => onViewDetails(product.id)}
                        className="bg-transparent border-2 border-white text-white font-medium px-6 py-2 rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
                      >
                        View Details
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>

                <div className="flex items-center mb-3">
                  <span className="text-lg mr-2">{product.vendorLogo}</span>
                  <span className="text-sm text-gray-600">
                    {product.vendor}
                  </span>
                </div>

                <div className="flex items-center mb-3">
                star
                  <span className="text-sm font-medium text-gray-900 ml-1">
                    {product.rating}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">
                    ({product.reviewCount})
                  </span>
                </div>

                <div className="text-xl font-bold text-blue-600">
                  ${product.price.toFixed(2)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          disabled={currentIndex >= products.length - 4}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-lg border border-gray-200 p-2 transition-all ${
            currentIndex >= products.length - 4
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-50 hover:shadow-xl"
          }`}
          style={{ marginRight: "-20px" }}
        >
          <BackArrowIcon />
        </button>
      </div>
    </div>
  )
}

export default ProductCarousel
