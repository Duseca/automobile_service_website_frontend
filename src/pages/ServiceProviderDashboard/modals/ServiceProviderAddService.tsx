import  { useState, type ChangeEvent, type FormEvent } from 'react'
import { CrossIcon } from '../../../components/Icons';
import TextInput from '../../../components/TextInput';
import Dropdown from '../../../components/Dropdown';
import YellowButton from '../../../components/YellowButton';
import MoreSettingsModal from './MoreSettingsModal';
import BundleModal from './BundleModal';

interface FormData {
  serviceTitle: string;
  price: string;
  category: string;
  subcategory: string;
  duration: string;
  staff: string;
  make: string;
  model: string;
  year: string;
  toYear: string;
  engineType: string;
  bodyStyle: string;
  variantType: string;
  variantOptions: string;
  variantPrice: string;
  description: string;
  fittment:string;
  gallery: File | null;
}
interface ServiceProviderAddServiceProps{
    onClose: (val:any) =>void;
    showModal: boolean
}
const ServiceProviderAddService = ({showModal , onClose}:ServiceProviderAddServiceProps) => {
    const [showMoreSettingsModal, setShowMoreSettingsModal] = useState(false);
    const [showBundleModal, setShowBundleModal] = useState(false);
    const [formData, setFormData] = useState<FormData>({
    serviceTitle: "",
    price: "",
    category: "",
    subcategory: "",
    duration: "",
    staff: "",
    make: "",
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
    fittment:''
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
    console.log("Form Data Submitted:", formData);
    // TODO: API call here
  };
  if(!showModal) return;
  return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl max-h-[90vh] overflow-auto p-6 relative">
       
        <button
        onClick={onClose}
        className="absolute top-4 right-4 text-black cursor-pointer"
        >
        <CrossIcon />
        </button>

        <div className="w-full">
            {/* Header */}
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Add Service</h2>
            <p className="text-sm text-gray-500 mb-6">
            Add a service you offer so customers can view, book, and connect with you easily.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
            {/* Service Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInput
                label="Service Title"
                type="text"
                name="serviceTitle"
                value={formData.serviceTitle}
                onChange={handleChange}
                placeholder="Service Title"
                />

                <TextInput
                label="Price"
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Price (e.g. $25.00)"
                />

                <Dropdown
                label="Category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                options={["carWash", "repair"]}
                />

                <Dropdown
                label="Sub-Category"
                name="subcategory"
                value={formData.subcategory}
                onChange={handleChange}
                options={["Exterior Cleaning", "Interior Cleaning"]}
                />

                <Dropdown
                label="Estimated Duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                options={["1", "2", "3"]}
                />

                <Dropdown
                label="Staff"
                name="staff"
                value={formData.staff}
                onChange={handleChange}
                options={["John Doe", "John Doe", "John Doe"]}
                />
            </div>

            <TextInput
                label="Vehicle Fitment"
                type="text"
                name="fittment"
                value={formData.fittment}
                onChange={handleChange}
                placeholder="e.g fits specific model"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Dropdown
                label="Make"
                name="make"
                value={formData.make || ""}
                options={["Toyota", "Honda", "Ford", "BMW", "Audi"]}
                onChange={handleChange}
                />

                <Dropdown
                label="Model"
                name="model"
                value={formData.model || ""}
                options={["Corolla", "Civic", "Mustang", "X5", "A4"]}
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
                options={[""]}
                />

                <Dropdown
                label="Variant Options"
                name="variantOptions"
                value={formData.variantOptions}
                onChange={handleChange}
                options={[""]}
                />

                <Dropdown
                label="Variant Price"
                name="variantPrice"
                value={formData.variantPrice}
                onChange={handleChange}
                options={[""]}
                />
            </div>

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
                Gallery
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
 <div className="flex flex-col space-y-4 mt-6">
          <YellowButton text="Submit Request" wFull={true}   />
          <button
            onClick={onClose}
              className="text-primary text-lg font-semibold cursor-pointer "
          >
            Cancel
          </button>
        </div>
            {/* Buttons */}
            <div className="flex justify-between items-center">
                <div className="flex gap-4 text-sm text-primary underline ">
                <button className='cursor-pointer' onClick={()=>{
                    
                    setShowMoreSettingsModal(true)}} type="button">+ More settings</button>
                <button className='cursor-pointer' onClick={()=>setShowBundleModal(true)} type="button">Create Bundle</button>
                </div>

              
            </div>
            
            </form>
        </div>
        </div>
    {showMoreSettingsModal && (
        <MoreSettingsModal onClose={() => setShowMoreSettingsModal(false)} />
      )}

      {/* Bundle Modal */}
      {showBundleModal && (
        <BundleModal onClose={() => setShowBundleModal(false)} />
      )}
    </div>

  )
}

export default ServiceProviderAddService
