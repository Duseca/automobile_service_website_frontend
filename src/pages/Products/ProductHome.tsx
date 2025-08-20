import Header from "../../components/Header"
import ProductCarousel from "../../components/ProductCarousel";
import ManualDetails from "./ManualDetails"
import SearchAndSlider from "./SearchAndSlider"

const ProductHome = () => {
    const products = [
  {
    id: "1",
    name: "EcoBoost Air Filter",
    vendor: "Speedy Wheels Garage",
    vendorLogo: "🚗",
    price: 23.0,
    rating: 4.8,
    reviewCount: 121,
    image: "https://images.pexels.com/photos/1054397/pexels-photo-1054397.jpeg",
  },
  {
    id: "2",
    name: "N&C Air Filter",
    vendor: "Precision Auto Works",
    vendorLogo: "🔧",
    price: 49.0,
    rating: 4.8,
    reviewCount: 121,
    image: "https://images.pexels.com/photos/1054397/pexels-photo-1054397.jpeg",
  },
];

  return (
    <div>
      <Header />
      <SearchAndSlider />
      <ManualDetails />
      <ProductCarousel
      title="Air Filters"
      products={products}
      onBuyNow={(id) => console.log("Buy:", id)}
      onViewDetails={(id) => console.log("Details:", id)}
      onViewAll={() => console.log("View All clicked")}
    />
    </div>
  )
}

export default ProductHome
