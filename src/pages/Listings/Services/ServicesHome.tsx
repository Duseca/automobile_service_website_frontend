import { useEffect } from "react";
import ProductService from "../../../components/ProductService"


const ServicesHome = () => {
   useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
     <ProductService type="service" /> 
    </div>
  )
}

export default ServicesHome
