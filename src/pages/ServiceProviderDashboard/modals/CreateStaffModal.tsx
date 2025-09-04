import { useState } from "react";
import { CrossIcon } from "../../../components/Icons";
import TextInput from "../../../components/TextInput";
import Dropdown from "../../../components/Dropdown";
import YellowButton from "../../../components/YellowButton";
import AvailabilityModal from "./AvailabilityModal";

type FormData = {
  name: string;
  email: string;
  mobile: string;
  countryCode: string;
  category: string;
  availability: string;
};

interface CreateStaffModalProps{
    onClose: () =>void;
    showModal: boolean;
}
const CreateStaffModal = ({ onClose, showModal }: CreateStaffModalProps) => {
  const [showAvailabilityModal, setShowAvailabilityModal] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
    countryCode: "+41",
    category: "",
    availability: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

 if (!showModal && !showAvailabilityModal) return null;

  return (
   <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
  <div className="bg-white rounded-xl shadow-lg w-full sm:max-w-2xl md:max-w-4xl max-h-[90vh] overflow-auto p-4 sm:p-6 relative">
    {/* Close Button */}
    <button
      onClick={onClose}
      className="absolute top-4 right-4 text-black cursor-pointer"
    >
      <CrossIcon />
    </button>

    {/* Title */}
    <h2 className="text-lg sm:text-xl font-semibold text-black mb-2">
      Add Staff member
    </h2>

    <p className="text-xs sm:text-sm text-gray-500 mb-6">
      Enter your team member’s details, set their role, and define their working hours.
    </p>

    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Staff Member Name */}
      <div className="col-span-1 md:col-span-2">
        <TextInput
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          label="Staff Member Name"
        />
      </div>

      {/* Email */}
      <div>
        <TextInput
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="e.g. example@domain.com"
          label="Staff Member Email"
        />
      </div>

      {/* Mobile */}
      <div>
        <label className="block text-sm font-semibold text-black mb-1">
          Mobile Number <span className="text-red-500">*</span>
        </label>
        <div className="flex">
          <div className="flex items-center px-3 py-2 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50">
            <span className="text-red-500 font-bold text-lg">🇨🇦</span>
            <span className="ml-2 text-sm text-gray-600">+1</span>
          </div>
          <input
            type="tel"
            name="mobile"
            value={formData.countryCode}
            onChange={handleChange}
            placeholder="(416) 000 234"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
      </div>

      {/* Category */}
      <Dropdown
        name="category"
        value={formData.category}
        onChange={handleChange}
        options={["", "Car Detailing", "Customer Support", "Management"]}
        label="Category"
      />

      {/* Availability */}
      <div>
        <label className="block text-sm font-semibold text-black mb-1">
          Availability
        </label>
        <div
          onClick={() => {
            setShowAvailabilityModal(true);
          }}
          className="w-full px-3 py-2 border cursor-pointer border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          {formData.availability || "Select Availability"}
        </div>
      </div>

      {/* Buttons */}
      <div className="col-span-1 md:col-span-2 flex flex-col sm:flex-row justify-end gap-3 mt-4">
        <YellowButton wFull={false} text="Save changes" />
        <button
          type="button"
          className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>

  {showAvailabilityModal && (
    <AvailabilityModal
      showModal={showAvailabilityModal}
      onClose={() => setShowAvailabilityModal(false)}
    />
  )}
</div>

  );
};


export default CreateStaffModal
