import { relatedProducts } from "../../components/data"
import ProductCarousel from "../../components/ProductCarousel"
import ServiceProviderProfile from "../../components/ServiceProviderProfile"
import HeaderFooterLayout from "../../layouts/HeaderFooterLayout"


const StoreOwnerProfile = () => {
  return (
    <div>
      <HeaderFooterLayout>
        <div className="bg-white max-w-screen-xl1 mx-auto p-4 md:px-8 lg:px-8 xl1:px-[80px]">
        <ServiceProviderProfile />
         <div className="space-y-4 my-16">
     <h1 className="text-xl lg:text-3xl font-bold text-gray-900">
                Services
              </h1>
    <ProductCarousel products={relatedProducts} type="services"  />
    </div>
    <div className="space-y-4 my-16">
     <h1 className="text-xl lg:text-3xl font-bold text-gray-900">
             Products
              </h1>
    <ProductCarousel products={relatedProducts} type="services"  />
    </div>
        </div>
      </HeaderFooterLayout>
    </div>
  )
}

export default StoreOwnerProfile
