import  { useState } from 'react'
import { DecrementIcon, HeartIcon, IncrementIcon, StarIcon, TickIcon } from './Icons';
import RelatedProducts from './RelatedProducts';
import { suggestedProducts } from './data';
import { Link } from 'react-router';
 
const ProductCard = ({type} : {type : String}) => {
 const productImages = [
    "https://images.unsplash.com/photo-1608259243654-70c070e0f6ed?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1708805283017-c662be2c7a44?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1570274419188-e5bb8e902d35?q=80&w=677&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1612766995016-3638f877af2f?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1694678505383-676d78ea3b96?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleQuantityChange = (increment: number) => {
    setQuantity((prev) => Math.max(1, prev + increment));
  };
  return (
<>
  <div className="mt-10 md:mt-20 overflow-hidden">
    <div className="grid grid-cols-1 lg:grid-cols-2">
      
      {/* Product Images Section */}
      <div>
        <div className="relative flex">
          <div className="relative bg-gray-100 rounded-xl overflow-hidden aspect-square flex-1 max-h-[400px]">
            <img
              src={productImages[selectedImage]}
              alt="Bosch Engine Air Filter"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="ml-3 flex flex-col gap-2 overflow-y-auto max-h-[600px]">
            {productImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-14 h-14 lg:w-16 lg:h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === index
                    ? "border-blue-500"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <img
                  src={image}
                  alt={`Product view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="px-4 lg:px-6 flex flex-col h-full">
        <div className="flex-1">
          
          {/* Product Title & Like */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h1 className="text-xl lg:text-4xl font-bold text-gray-900">
                Bosch Engine Air Filter - D50
              </h1>
              <button
                onClick={() => setIsLiked(!isLiked)}
                className="p-2 rounded-md bg-gray-200"
              >
                <HeartIcon />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">$18.50</span>
              <div className="flex items-center gap-1 ml-3">
                <StarIcon />
                <span className="font-semibold text-gray-900">4.8</span>
                <span className="text-gray-500">(184)</span>
              </div>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              Keep your engine breathing clean with the Bosch Engine Air
              Filter - D50. Designed for high performance and durability,
              it traps dust and particles to ensure smoother airflow and
              better fuel efficiency.
            </p>
          </div>
{type==='product' ? <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center my-4">
            <div className="flex items-center border border-gray-200 rounded-lg bg-gray-100">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="p-2 border-r border-gray-200"
              >
                <DecrementIcon />
              </button>
              <span className="px-3 py-2 font-semibold min-w-[40px] text-center">
                {quantity}
              </span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="p-2 border-l border-gray-200"
              >
                <IncrementIcon />
              </button>
            </div>

            <Link 
            to={type=='product' ? '/order' : '/service-order'}
            className="flex-1 sm:flex-none bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-lg">
              Add to cart
            </Link>

            <button className="bg-blue-100 text-blue-600 font-semibold py-2 px-5 rounded-lg">
              Find an installer
            </button>
          </div> : <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center my-4">
            <Link 
            to={type=='product' ? '/order' : '/service-order'}
            className="flex-1 sm:flex-none bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-lg">
              Book Now
            </Link>
            <Link to={'/profile'}>
            <button className="bg-blue-100 cursor-pointer text-blue-600 font-semibold py-2 px-5 rounded-lg">
             Contact Store
            </button>
            </Link>
          </div>}
          
        </div>

        {/* Extra Options */}
        <div>
          <hr className="text-gray-200 mb-4" />
          <div className="space-y-1 text-xs text-[#83898F]">
            <div>SKU: 9349211</div>
            <div className="flex items-center gap-1">
              <span>Store Owner:</span>
              <span className="text-primary font-medium">TomAck Autos</span>
              <TickIcon />
            </div>
          </div>
        </div>
      </div>

    </div>
    <RelatedProducts relatedProducts={suggestedProducts} />
  </div>
</>


  )
}

export default ProductCard
