import { relatedServices } from "../../../components/data"
import Header from "../../../components/Header"
import ProductCard from "../../../components/ProductCard"
import ProductCarousel from "../../../components/ProductCarousel"
import Footer from "../../LandingPage/Footer"


const ServiceDetail = () => {
  return (
    <>
    <Header />
    <div className="bg-white max-w-screen-xl1 mx-auto p-4 md:px-8 lg:px-8 xl1:px-[80px]">
    <ProductCard />
    <div className="space-y-4 my-16">
     <h1 className="text-xl lg:text-3xl font-bold text-gray-900">
               More from this store
              </h1>
    <ProductCarousel products={relatedServices} type="services"  />
    </div>
    
    </div>
    <Footer />
    </>
  )
}

export default ServiceDetail
