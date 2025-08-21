import { useState } from "react";
import TextInput from "../../components/TextInput";
import Dropdown from "../../components/Dropdown";

interface DeliveryInfoData {
  recipientName: string;
  recipientEmail: string;
  deliveryAddress: string;
  contactNumber: string;
  recipientCity:string;
  recipientCountry:string;
}

const DeliveryInfo = () => {
     const [formData, setFormData] = useState<DeliveryInfoData>({
    recipientName: "",
    recipientEmail: "",
     recipientCity:"",
    deliveryAddress: "",
    contactNumber: "",
    recipientCountry:""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
 <>
  <div className="rounded-t-lg bg-gray-100 p-2">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">
      Shipping Details
    </h3>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
    <TextInput
      label="Full Name"
      placeholder="e.g., John Doe"
      name="recipientName"
      value={formData.recipientName}
      onChange={handleChange}
    />

    <TextInput
      label="Email address"
      placeholder="e.g., john@example.com"
      name="recipientEmail"
      value={formData.recipientEmail}
      onChange={handleChange}
    />

    <Dropdown
      label="City"
      name="recipientCity"
      value={formData.recipientCity}
      options={["New York", "Los Angeles", "Chicago", "Houston", "Miami", "San Francisco"]}
      onChange={handleChange}
    />

    <Dropdown
      label="Country"
      name="recipientCountry"
      value={formData.recipientCountry}
      options={["USA", "Canada", "UK", "Germany", "France", "Australia"]}
      onChange={handleChange}
    />

    <TextInput
      label="Delivery Address"
      placeholder="123 Main Street, Southwale, Los Angeles, 22118"
      name="deliveryAddress"
      value={formData.deliveryAddress}
      onChange={handleChange}
    />

    <div>
      <label htmlFor="mobileNumber" className="block text-sm font-medium text-black mb-1">
        Mobile Number
      </label>
      <div className="flex">
        <div className="flex items-center p-2 bg-gray-50 border border-gray-300 border-r-0 rounded-l-lg">
          <span className="text-gray-700 text-sm font-medium">+41</span>
        </div>
        <input
          type="tel"
          id="mobileNumber"
          name="mobileNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          placeholder="576 889 324"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-r-lg focus:ring focus:ring-primary focus:border-primary outline-none transition-colors placeholder-gray-400"
        />
      </div>
    </div>
   <label htmlFor="mobileNumber" className="block text-sm font-semibold text-black ">
      Delivery instructions
      </label>
    <textarea
      className="col-span-1 md:col-span-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="123 Main Street, Southwale, Los Angeles, 22118"
      name="deliveryAddress"
      value={formData.deliveryAddress}
      onChange={(e) =>
        setFormData({ ...formData, deliveryAddress: e.target.value })
      }
    />
  </div>
</>

  )
}

export default DeliveryInfo
