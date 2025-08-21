
interface RelatedProductsProps{
    relatedProducts: any
}
const RelatedProducts = ({ relatedProducts }: RelatedProductsProps) => {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {relatedProducts.map((product:any) => (
          <div
            key={product.id}
            className={`relative p-4 rounded-xl border transition-all cursor-pointer border-gray-200`}
          >
          
            <div className="flex gap-4">
              <div className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 truncate">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                  {product.description}
                </p>
                <hr className="text-gray-100 mb-3"/>
                <p className="font-bold text-primary">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts
