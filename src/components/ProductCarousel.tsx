
import { useRef } from "react";
import { BackArrowIcon, NextArrowIcon, StarIcon } from "./Icons";
import YellowButton from "./YellowButton";
import { Link } from "react-router";
import VendorLogo from '../assets/ProductCarousel.svg';
export interface Product {
  id: string;
  name: string;
  vendor: string;
  vendorLogo: string;
  price?: number;
  rating: number;
  reviewCount: number;
  image: string;
  category:string;
}

interface ProductCarouselProps {
  type:string;
  products: Product[];
  onBuyNow?: (productId: string) => void;
  onViewDetails?: (productId: string) => void;
  onViewAll?: () => void;
}

const ProductCarousel = ({
  products,
  type,
  onBuyNow,
  onViewDetails}: ProductCarouselProps) => {
   const groupedProducts = products.reduce((acc: any, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});
  return (
       <div >
      {Object.keys(groupedProducts).map((category) => {
        const scrollRef = useRef<HTMLDivElement>(null);

        const scrollLeft = () => {
          if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
          }
        };

        const scrollRight = () => {
          if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
          }
        };

        return (
          <div key={category} className="mb-12 relative">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{category}</h2>
            <button
              onClick={scrollLeft}
              className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-gray-100"
            >
              <NextArrowIcon  />
            </button>
            <button
              onClick={scrollRight}
              className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-gray-100"
            >
              <BackArrowIcon />
            </button>

     <div
  ref={scrollRef}
  className="flex gap-6 overflow-x-auto overflow-y-visible scroll-smooth w-full"
  style={{
    scrollbarWidth: "none",        /* Firefox */
    msOverflowStyle: "none",       /* IE and Edge */
  }}
>
  <style>
    {`
      div::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera */
      }
    `}
  </style>

              {groupedProducts[category].map((product: any) => (
                <div
                  key={product.id}
                  className="min-w-[300px] max-w-[300px] flex-shrink-0"
                >
                  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                        loading="eager"
                      />

                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-3 transition-opacity duration-300">
                        {onBuyNow && (
                          <YellowButton text="Buy now" wFull={false}/>
                        )}
                        {onViewDetails && (
                          <Link
                            to={type==="product" ? '/product-detail/1' : '/service-detail/1'}
                            className="bg-transparent border border-white text-white px-4 py-2 rounded-md font-medium text-lg hover:bg-white hover:text-black"
                          >
                            View Details
                          </Link>
                        )}
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-black">
                          {product.name}
                        </h3>

                        <div className="flex items-center">
                          <span className="text-yellow-500">
                            <StarIcon  />
                          </span>
                          <span className="text-sm font-medium text-gray-900 ml-1">
                            {product.rating}
                          </span>
                          <span className="text-sm text-gray-500 ml-1">
                            ({product.reviewCount})
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center mb-3">
                        <span className="text-lg mr-2"><img className="w-5 h-5" src={VendorLogo}/></span>
                        <span className="text-sm font-medium text-black">
                          {product.vendor}
                        </span>
                      </div>

                      <hr className="text-gray-200 mb-4" />
                      <div className="text-xl font-bold text-primary">
                        ${product?.price?.toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>

  )
}

export default ProductCarousel
