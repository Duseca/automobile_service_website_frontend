import { useEffect } from "react";
import ProductService from "../../../components/ProductService"


const ProductHome = () => {
 useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
    <ProductService type="product" />
    </div>
  )
}

export default ProductHome
