import { useState, type ChangeEvent, type FormEvent } from "react";
import Dropdown from "../../../components/Dropdown";
import TextInput from "../../../components/TextInput";
import BundleModal from "./BundleModal";
import YellowButton from "../../../components/YellowButton";
import { CrossIcon } from "../../../components/Icons";
interface ProductFormData {
  productName: string;
  price: string;
  sku:string;
  category: string;
  subcategory: string;
  brand: string;
  model: string;
  year: string;
  toYear: string;
  engineType: string;
  bodyStyle: string;
  variantType: string;
  variantOptions: string;
  variantPrice: string;
  description: string;
  fitment: string;
  quantity:number | any;
  gallery: File | null;
  deliveryOption:string;
}

interface AddProductModalProps {
  onClose: (val: any) => void;
  showModal: boolean;
}
const ServiceProviderAddProduct = ({showModal , onClose}:AddProductModalProps) => {
  const [showBundleModal, setShowBundleModal] = useState(false);

  const [formData, setFormData] = useState<ProductFormData>({
    productName: "",
    sku:"",
    price: "",
    category: "",
    subcategory: "",
    brand: "",
    model: "",
    year: "",
    toYear: "",
    engineType: "",
    bodyStyle: "",
    variantType: "",
    variantOptions: "",
    variantPrice: "",
    description: "",
    gallery: null,
    fitment: "",
    quantity:0,
    deliveryOption:''
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, gallery: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Product Data Submitted:", formData);
    // TODO: API call here
  };

  if (!showModal) return null;
  return (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl max-h-[90vh] overflow-auto p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black cursor-pointer"
        >
          <CrossIcon />
        </button>

        <div className="w-full">
          {/* Header */}
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Add Product
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Add a product so customers can view and purchase it easily.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Product Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextInput
                label="Product Title"
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                placeholder="Product Title"
              />
                <TextInput
                label="SKU"
                type="text"
                name="sku"
                value={formData.sku}
                onChange={handleChange}
                placeholder="e.g USCC-2025-DET"
              />
             

              <Dropdown
                label="Category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                options={["Electronics", "Automotive", "Fashion"]}
              />

              <Dropdown
                label="Sub-Category"
                name="subcategory"
                value={formData.subcategory}
                onChange={handleChange}
                options={["Phones", "Car Accessories", "Clothing"]}
              />
               <TextInput
                label="Price"
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Price (e.g. $25.00)"
              />
               <TextInput
                label="Quantity"
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="e.g 20"
              />
            </div>

            <TextInput
              label="Vehicle fitment (if applicable)"
              type="text"
              name="fitment"
              value={formData.fitment}
              onChange={handleChange}
              placeholder="e.g. fits Toyota Corolla 2015-2020"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Dropdown
                label="Make"
                name="brand"
                value={formData.brand || ""}
                options={["Toyota", "Samsung", "Nike"]}
                onChange={handleChange}
              />

              <Dropdown
                label="Model"
                name="model"
                value={formData.model || ""}
                options={["Corolla", "Galaxy S23", "Air Max"]}
                onChange={handleChange}
              />
              <Dropdown
                label="From Year"
                name="year"
                value={formData.year || ""}
                options={["2010", "2015", "2025"]}
                onChange={handleChange}
              />
               <Dropdown
                label="To Year"
                name="toYear"
                value={formData.toYear || ""}
                options={["2010", "2015", "2025"]}
                onChange={handleChange}
              />
              <Dropdown
                label="Engine Type"
                name="engineType"
                value={formData.engineType || ""}
                options={["Petrol", "Diesel", "Hybrid", "Electric"]}
                onChange={handleChange}
              />

              <Dropdown
                label="Body Style"
                name="bodyStyle"
                value={formData.bodyStyle || ""}
                options={["Sedan", "SUV", "Hatchback", "Truck"]}
                onChange={handleChange}
              />
            </div>

            {/* Variant Section */}
            <h3 className="font-medium text-gray-800">Variants</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Dropdown
                label="Variant Type"
                name="variantType"
                value={formData.variantType}
                onChange={handleChange}
                options={["Size", "Color", "Material"]}
              />

              <Dropdown
                label="Variant Options"
                name="variantOptions"
                value={formData.variantOptions}
                onChange={handleChange}
                options={["Small", "Medium", "Large"]}
              />

              <TextInput
                label="Variant Price"
                type="number"
                name="variantPrice"
                value={formData.variantPrice}
                onChange={handleChange}
                placeholder="e.g. $5 extra"
              />
            </div>

            <Dropdown
                label="Delivery Option"
                name="deliveryOption"
                value={formData.deliveryOption}
                onChange={handleChange}
                options={[
                    "Standard Delivery",
                    "Express Delivery",
                    "Same Day Delivery",
                    "Next Day Delivery",
                    "Pickup in Store"
                ]}
              />
            <div>
              <label className="block text-sm font-semibold text-black mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Gallery */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Product Gallery
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                id="galleryUpload"
              />
              <label
                htmlFor="galleryUpload"
                className="flex flex-col items-center justify-center border border-gray-200 rounded-lg p-6 text-gray-500 cursor-pointer hover:bg-gray-50"
              >
                <span className="text-sm">
                  {formData?.gallery
                    ? formData?.gallery?.name
                    : "Drag and drop file or Browse"}
                </span>
              </label>
            </div>

            {/* Buttons */}
            <div className="flex flex-col space-y-4 mt-6">
              <YellowButton text="Submit Product" wFull={true} />
              <button
                onClick={onClose}
                className="text-primary text-lg font-semibold cursor-pointer "
              >
                Cancel
              </button>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex gap-4 text-sm text-primary underline ">
                
                <button
                  className="cursor-pointer"
                  onClick={() => setShowBundleModal(true)}
                  type="button"
                >
                  Create Bundle
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Bundle Modal */}
      {showBundleModal && <BundleModal onClose={() => setShowBundleModal(false)} />}
    </div>
  )
}

export default ServiceProviderAddProduct
