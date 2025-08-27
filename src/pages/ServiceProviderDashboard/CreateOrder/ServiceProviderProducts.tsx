import { useState } from "react";
import YellowButton from "../../../components/YellowButton"
import {  SearchIcon } from "../../../components/Icons";
import ServiceProductCard from "../../../components/ServiceProductCard";


const ServiceProviderProducts = ({ nextStep }: { nextStep: () => void }) => {
    const [searchQuery, setSearchQuery] = useState<string>("");
  const [quantities, setQuantities] = useState<Record<string, number>>({
    airFilter: 2,
    brakePads: 1,
  });
  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>({
    airFilter: false,
    brakePads: true,
  });

  const parts = [
    {
      id: "airFilter",
      name: "Bosch Engine Air Filter - D50",
      price: "$37.00",
      image: "/api/placeholder/60/60",
      imageAlt: "Engine air filter",
    },
    {
      id: "brakePads",
      name: "ACDelco Brake Pads",
      price: "$54.00",
      image: "/api/placeholder/60/60",
      imageAlt: "Brake pads",
    },
  ];

  const updateQuantity = (itemId: string, change: number) => {
    setQuantities((prev) => ({
      ...prev,
      [itemId]: Math.max(0, (prev[itemId] ?? 0) + change),
    }));
  };

  const toggleSelection = (itemId: string) => {
    setSelectedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const filteredParts = parts.filter((part) =>
    part.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
      <>
        {/* Header */}
        <div className="rounded-t-lg bg-gray-100 p-2">
          <h3 className="text-lg font-semibold text-black mb-4">Select Products</h3>
        </div>

          <div className="my-6 ">
            {/* Search Header */}
            <div className="mb-4">
              <div className="relative flex items-center">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" >
                <SearchIcon />
                </div>
                <input
                  type="text"
                  placeholder="Search category, parts, brand or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-12 py-4 bg-gray-100 rounded-3xl text-sm focus:outline-none focus:ring focus:ring-primary focus:bg-white"
                />
                
              </div>
            </div>
  <div>
          {filteredParts.map((part) => (
            <ServiceProductCard
              key={part.id}
              part={part}
              isSelected={selectedItems[part.id]}
              quantity={quantities[part.id] ?? 0}
              toggleSelection={toggleSelection}
              updateQuantity={updateQuantity}
            />
          ))}
        </div>

            {/* Empty State */}
            {filteredParts.length === 0 && (
              <div className="p-8 text-center">
                <p className="text-gray-500">No parts found matching your search.</p>
              </div>
            )}
          </div>

        {/* Button */}
        <div className="my-20">
          <YellowButton text="Proceed to next step" wFull={true} handleClick={nextStep} />
        </div>
      </>
  )
}

export default ServiceProviderProducts
