import HeaderFooterLayout from "../layouts/HeaderFooterLayout";
import ManualDetails from "../pages/Listings/Products/ManualDetails";
import SearchAndSlider from "../pages/Listings/Products/SearchAndSlider";
import ProductCarousel from "./ProductCarousel";

interface Item {
  id: string;
  name: string;
  vendor: string;
  vendorLogo: string;
  price?: number; // price may not apply for services
  rating: number;
  reviewCount: number;
  image: string;
  category:string;
}
const ProductService = ({ type = "product" }: { type?: "product" | "service" }) => {
const products: Item[] = [
    {
      id: "1",
      category: "Air Filters",
      name: "EcoBoost Air Filter",
      vendor: "Speedy Wheels Garage",
      vendorLogo: "🚗",
      price: 23.0,
      rating: 4.8,
      reviewCount: 121,
      image: "https://images.unsplash.com/photo-1604492642440-063264f0b74e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "2",
      category: "Batteries",
      name: "Duracell Car Battery",
      vendor: "VoltAuto Supplies",
      vendorLogo: "🔋",
      price: 120.0,
      rating: 4.5,
      reviewCount: 95,
      image: "https://images.unsplash.com/photo-1604492642440-063264f0b74e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "3",
      category: "Air Filters",
      name: "Bosch Spark Plug",
      vendor: "AutoKing Supplies",
      vendorLogo: "⚡",
      price: 12.5,
      rating: 4.7,
      reviewCount: 200,
      image: "https://images.unsplash.com/photo-1604492642440-063264f0b74e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "4",
      category: "Air Filters",
      name: "Michelin Radial Tire",
      vendor: "TireMaxx",
      vendorLogo: "🛞",
      price: 185.0,
      rating: 4.9,
      reviewCount: 310,
      image: "https://images.unsplash.com/photo-1571520724377-6bdf46154677?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
     {
      id: "5",
      category: "Batteries",
      name: "Michelin Radial Tire",
      vendor: "TireMaxx",
      vendorLogo: "🛞",
      price: 185.0,
      rating: 4.9,
      reviewCount: 310,
      image: "https://images.unsplash.com/photo-1586801199339-3de994fcf442?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
     {
      id: "6",
      category: "Batteries",
      name: "Michelin Radial Tire",
      vendor: "TireMaxx",
      vendorLogo: "🛞",
      price: 185.0,
      rating: 4.9,
      reviewCount: 310,
      image: "https://images.unsplash.com/photo-1571520724377-6bdf46154677?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
{
      id: "7",
      category: "Batteries",
      name: "Michelin Radial Tire",
      vendor: "TireMaxx",
      vendorLogo: "🛞",
      price: 185.0,
      rating: 4.9,
      reviewCount: 310,
      image: "https://images.unsplash.com/photo-1586801199339-3de994fcf442?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "8",
      category: "Batteries",
      name: "Michelin Radial Tire",
      vendor: "TireMaxx",
      vendorLogo: "🛞",
      price: 185.0,
      rating: 4.9,
      reviewCount: 310,
      image: "https://images.unsplash.com/photo-1571520724377-6bdf46154677?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "9",
      category: "Batteries",
      name: "Michelin Radial Tire",
      vendor: "TireMaxx",
      vendorLogo: "🛞",
      price: 185.0,
      rating: 4.9,
      reviewCount: 310,
      image: "https://images.unsplash.com/photo-1571520724377-6bdf46154677?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const services: Item[] = [
    {
      id: "11",
      category: "Car Wash",
      name: "Basic Car Wash",
      vendor: "Shiny Motors",
      vendorLogo: "🚿",
      price: 30.0,
      rating: 4.6,
      reviewCount: 180,
      image: "https://images.unsplash.com/photo-1627828982773-42814bc7e22e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "12",
      category: "Car Wash",
      name: "Interior Detailing",
      vendor: "Crystal Auto Spa",
      vendorLogo: "✨",
      price: 75.0,
      rating: 4.9,
      reviewCount: 240,
      image: "https://images.unsplash.com/photo-1681356854285-17645401bf47?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "13",
      category: "Car Wash",
      name: "Full Engine Checkup",
      vendor: "Prime Auto Care",
      vendorLogo: "🔧",
      price: 150.0,
      rating: 4.8,
      reviewCount: 300,
      image: "https://images.unsplash.com/photo-1627828982773-42814bc7e22e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "14",
      category: "Car Wash",
      name: "Brake Pad Replacement",
      vendor: "SafeDrive Repairs",
      vendorLogo: "🛠️",
      price: 110.0,
      rating: 4.7,
      reviewCount: 170,
      image: "https://images.unsplash.com/photo-1681356854285-17645401bf47?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
     {
      id: "15",
      category: "Car Wash",
      name: "Brake Pad Replacement",
      vendor: "SafeDrive Repairs",
      vendorLogo: "🛠️",
      price: 110.0,
      rating: 4.7,
      reviewCount: 170,
      image: "https://plus.unsplash.com/premium_photo-1673214881634-75644d01f266?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const data = type === "product" ? products : services;
  return (
    
      <HeaderFooterLayout >
     <div>
      <SearchAndSlider />
      <ManualDetails />
      <div className="max-w-screen-xl1 mx-auto p-4 md:px-8 lg:px-8 xl1:px-[80px]">
      <ProductCarousel
      
        type={type}
        products={data}
        onBuyNow={(id) => console.log("Buy:", id)}
        onViewDetails={(id) => console.log("Details:", id)}
        onViewAll={() => console.log("View All clicked")}
      />
      </div>
    </div>
    </HeaderFooterLayout>
  )
}

export default ProductService
