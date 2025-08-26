import React, { useState } from "react";
import { BsTrash2 } from "react-icons/bs"
import TextInput from "../../components/TextInput";
import YellowButton from "../../components/YellowButton";
import {  DownloadIcon } from "../../components/Icons";


const VehicleOwnerEditProfile = () => {
    const [formData, setFormData] = useState({
    fullName: 'John Doe',
    email: 'example@domain.com',
    phoneNumber: '576 889 324',
    deleteConfirmation: ''
  });

  const [profileImage, setProfileImage] = useState({
    name: 'Image.jpg',
    size: '4.5 MB'
  });

  const handleInputChange = (field:any, value:any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDeleteAccount = () => {
    if (formData.deleteConfirmation.toUpperCase() === 'DELETE') {
      alert('Account deleted successfully');
      // Reset form
      setFormData({
        fullName: 'John Doe',
        email: 'example@domain.com',
        phoneNumber: '576 889 324',
        deleteConfirmation: ''
      });
    } else {
      alert('Please type DELETE to confirm account deletion');
    }
  };

  const handleImageDelete = () => {
  };

  const handleImageUpload = (event:React.ChangeEvent<HTMLInputElement>) => {
     const file = event.target.files?.[0]; // use optional chaining to avoid errors
    if (file) {
      setProfileImage({
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`
      });
    }
  };
  return (
   <div className="bg-white p-6 m-4 border rounded-xl border-gray-100">
  {/* Edit Profile Section */}
  <div className="mb-12">
    <h1 className="text-2xl font-semibold text-black mb-2">Edit Profile</h1>
    <p className="text-[#83898F] mb-8">
      Update core details like name, email, and phone.
    </p>

    {/* Profile Image */}
    <div className="mb-6">
      <label className="block text-sm font-medium text-black mb-3">
        Profile Image
      </label>

      {profileImage ? (
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border">
          <div className="flex items-center space-x-3">
            <img
              className="w-10 h-10 object-cover rounded-lg"
              src={
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="Profile"
            />
            <div>
              <p className="text-sm font-medium text-gray-900">
                {profileImage.name}
              </p>
              <p className="text-sm text-gray-500">{profileImage.size}</p>
            </div>
          </div>
          <div className="flex space-x-2 bg-red-400">
            <button
              onClick={handleImageDelete}
              className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
            >
              <BsTrash2 />
            </button>
            <button className="p-2 text-primary hover:bg-blue-50 rounded-lg transition-colors">
              <DownloadIcon />
            </button>
          </div>
        </div>
      ) : (
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            id="image-upload"
          />
          <label
            htmlFor="image-upload"
            className="cursor-pointer text-blue-500 hover:text-blue-600"
          >
            Click to upload image
          </label>
        </div>
      )}
    </div>


    <div className="space-y-6">
  {/* Full Name */}
  <TextInput
    type="text"
    label="Full Name"
    name="fullName"
    value={formData.fullName}
    onChange={(e) => handleInputChange("fullName", e.target.value)}
  />

  {/* Email */}
  <TextInput
    type="email"
    label="Email"
    name="email"
    value={formData.email}
    onChange={(e) => handleInputChange("email", e.target.value)}
  />

  {/* Mobile Number */}
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
        value={formData.phoneNumber}
        placeholder="(416) 000 234"
        className="flex-1 px-3 py-2 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        required
      />
    </div>
  </div>
</div>

{/* Save / Cancel Buttons */}
<div className="flex justify-end space-x-3 mt-6">
  <YellowButton
    wFull={false}
    handleClick={handleDeleteAccount}
    text="Save Changes"
  />
  <button className="px-6 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
    Cancel
  </button>
</div>

  </div>

  {/* Delete Account Section */}
  <div className="pt-8 border-t border-gray-200">
    <h2 className="text-2xl font-semibold text-gray-900 mb-2">
      Delete Account
    </h2>
    <p className="text-[#83898F] mb-6">
      All account information will be permanently deleted.
    </p>

    <div className="mb-6">
      <label className="block text-sm font-medium text-black mb-2">
        Please type the word <span className="font-semibold">DELETE</span> to
        confirm
      </label>
      <input
        type="text"
        value={formData.deleteConfirmation}
        onChange={(e) =>
          handleInputChange("deleteConfirmation", e.target.value)
        }
        placeholder="Type DELETE here..."
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
      />
    </div>

    {/* Delete / Cancel Buttons */}
    <div className="flex justify-end space-x-3">
      <YellowButton
        wFull={false}
        handleClick={handleDeleteAccount}
        text="Delete account"
      />
      <button className="px-6 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
        Cancel
      </button>
    </div>
  </div>
</div>

  )
}

export default VehicleOwnerEditProfile
