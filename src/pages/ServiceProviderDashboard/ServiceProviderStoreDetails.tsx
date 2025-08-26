import { useState } from "react";
import { DownloadIcon} from "../../components/Icons";
import { BsTrash } from "react-icons/bs";
import TextInput from "../../components/TextInput";
import YellowButton from "../../components/YellowButton";
import ServiceProviderBusniessHours from "./ServiceProviderBusniessOwner";
import ServiceProviderFAQ from "./ServiceProviderFAQ";
import ServiceProviderTermsAndConditions from "./ServiceProviderTermsAndConditions";
import ServiceProviderCompanyPolicy from "./ServiceProviderCompanyPolicy";

const ServiceProviderStoreDetails = () => {
     const [formData, setFormData] = useState({
    storeName: 'TomAck Autos',
    bio: 'Welcome to TomAck Autos, your one-stop destination for all automobile services. Our skilled technicians are dedicated to providing top-notch maintenance and repair solutions to keep your vehicle running smoothly. From oil changes to complex engine repairs, we ensure quality service with a smile. Trust us to get you back on the road safely and efficiently!',
    location: '123 Main Street, Southvale, Los Angeles, 22118',
    email: 'example@domain.com',
    contactNumber: '576 889 324'
  });

  const [storeLogo, setStoreLogo] = useState({
    name: 'TomAckLogo.jpg',
    size: '4.5 MB'
  });

  const handleInputChange = (field:any, value:any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLogoDelete = () => {
    if (window.confirm('Are you sure you want to delete the store logo?')) {

    }
  };

  const handleLogoUpload = (event:React.ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0];
    if (file) {
      setStoreLogo({
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`
      });
    }
  };

  return (
    <>
<div className="bg-white p-6 m-4 border rounded-xl border-gray-100">
  {/* Header */}
  <div>
    <h1 className="text-2xl font-semibold text-black mb-2">Store Details</h1>
    <p className="text-[#83898F] mb-8">
      Manage your business identity—add a store banner, logo, and contact info to stand out.
    </p>
  </div>

  <div className="space-y-6">
    {/* Store Image or Logo */}
    <div>
      <label className="block text-sm font-medium text-black mb-3">
        Store Image or Logo
      </label>
      {storeLogo ? (
        <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <div className="flex items-center space-x-3">
            {/* Logo Icon */}
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 
                     1 0 01-1 1H4a1 1 0 01-1-1V4zm0 
                     4a1 1 0 011-1h12a1 1 0 011 1v2a1 
                     1 0 01-1 1H4a1 1 0 01-1-1V8zm0 
                     4a1 1 0 011-1h12a1 1 0 011 1v2a1 
                     1 0 01-1 1H4a1 1 0 01-1-1v-2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{storeLogo.name}</p>
              <p className="text-sm text-gray-500">{storeLogo.size}</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={handleLogoDelete}
              className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              title="Delete logo"
            >
              <BsTrash size={16} />
            </button>
            <button
              className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
              title="Download logo"
            >
              <DownloadIcon />
            </button>
          </div>
        </div>
      ) : (
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleLogoUpload}
            className="hidden"
            id="logo-upload"
          />
          <label
            htmlFor="logo-upload"
            className="cursor-pointer text-blue-500 hover:text-blue-600"
          >
            Click to upload store logo
          </label>
        </div>
      )}
    </div>

    {/* Store Name */}
    <div>
      <TextInput
        name="storeName"
        label="Store Name"
        type="text"
        value={formData.storeName}
        onChange={(e) => handleInputChange("storeName", e.target.value)}
      />
    </div>

    {/* Bio */}
    <div>
      <label className="block text-sm font-semibold text-black mb-1">Bio</label>
      <textarea
        value={formData.bio}
        onChange={(e) => handleInputChange("bio", e.target.value)}
        rows={5}
        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg resize-none 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 
                   focus:border-transparent text-sm leading-relaxed"
      />
    </div>

    {/* Location */}
    <div>
      <TextInput
        label="Location"
        name="location"
        type="text"
        value={formData.location}
        onChange={(e) => handleInputChange("location", e.target.value)}
      />
    </div>

    {/* Email */}
    <div>
      <TextInput
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={(e) => handleInputChange("email", e.target.value)}
      />
    </div>

    {/* Contact Number */}
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
          value={formData.contactNumber}
          onChange={(e) => handleInputChange("contactNumber", e.target.value)}
          placeholder="(416) 000 234"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-r-lg 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 
                     focus:border-transparent"
          required
        />
      </div>
    </div>
    <div className="flex justify-end space-x-3">
      <YellowButton wFull={false} text="Save changes" />
      <button className="px-6 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
        Cancel
      </button>
    </div>
  </div>
  <ServiceProviderBusniessHours />

</div>

  <ServiceProviderFAQ />
  <ServiceProviderCompanyPolicy />
  <ServiceProviderTermsAndConditions />
  </>
  )
}

export default ServiceProviderStoreDetails
