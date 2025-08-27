import { useState } from "react";
import { CrossIcon, SearchIcon } from "../../../components/Icons";
import TextInput from "../../../components/TextInput";
import ServiceProductCard from "../../../components/ServiceProductCard";
import YellowButton from "../../../components/YellowButton";

interface FormData{
  bundleTitle: string,
  bundleDescription: string,
  bundlePrice: string,
}
const BundleModal = ({ onClose }: { onClose: () => void }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [quantities, setQuantities] = useState<Record<string, number>>({
    airFilter: 2,
    brakePads: 1,
  });
  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>({
    airFilter: false,
    brakePads: true,
  });
    const [formData, setFormData] = useState<FormData>({
    bundleTitle: "",
    bundleDescription: "",
    bundlePrice: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

    

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
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/50">
       <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl max-h-[90vh] overflow-auto p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black cursor-pointer"
        >
          <CrossIcon />
        </button>
        <h2 className="text-lg font-semibold mb-4">Create Bundle</h2>
        <p className="text-gray-600 mb-4">
          Group multiple services together into one package.
        </p>
          <TextInput
          type="text"
          placeholder="e.g., Car Wash + Interior Detailing Bundle"
          value={formData.bundleTitle}
          onChange={handleChange}
          label="Bundle title"
          name="bundleTitle"
          />
          <div className="mt-4">
          <label className="block text-sm font-semibold text-black mb-1">Bundle Description</label>
          <textarea
          placeholder="A brief explanation of the Bundle’s benefits"
          value={formData.bundleDescription}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
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
                    </div>
          {filteredParts?.map((part) => (
            <ServiceProductCard
              key={part.id}
              part={part}
              isSelected={selectedItems[part.id]}
              quantity={quantities[part.id] ?? 0}
              toggleSelection={toggleSelection}
              updateQuantity={updateQuantity}
            />
          ))}
        <TextInput
          type="text"
          placeholder="e.g., $250.00"
          value={formData.bundlePrice}
          onChange={handleChange}
          label="Bundle Price"
          name="bundlePrice"
          />
           <div className="flex flex-col space-y-4 mt-6">
          <YellowButton text="Submit Request" wFull={true}   />
          <button
            onClick={onClose}
              className="text-primary text-lg font-semibold cursor-pointer "
          >
            Cancel
          </button>
        </div>
      </div>
     
    </div>
  );
};

export default BundleModal;
