import React, { useState } from 'react'
import BgImage from '../../assets/authBg.svg';
import YellowButton from '../../components/YellowButton';
import Modal from '../../components/Modal';
import { AppleIcon,  FacebookIconAuth, GoogleIcon } from '../../components/Icons';
import { Link } from 'react-router';
import TextInput from '../../components/TextInput';
const Signup = () => {
const [formData, setFormData] = useState({
    userType: 'Personal Account',
    fullName: '',
    email: '',
    mobile: '',
    password: '',
    acceptTerms: false,
    getUpdates: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleUserTypeChange = (type: string) => {
    setFormData((prev) => ({ ...prev, userType: type }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true); 
  };


  return (
     <div className="min-h-screen flex">
      {/* Left Side */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="w-full h-full bg-cover bg-center relative"
          style={{ backgroundImage: `url(${BgImage})` }}
        ></div>
      </div>

      {/* Right Side Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-16 bg-[#FBFEFF]">
        <div className="w-full">
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-black mb-6">Create Your Account</h1>
            <p className="text-[#83898F] text-base">
              Sign up to book vehicle services or offer them — it only takes a minute.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* User Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">User Type</label>
              <div className="grid grid-cols-2 gap-2">
                {['Personal Account', 'Business Account'].map((type) => (
                  <button
                    type="button"
                    key={type}
                    onClick={() => handleUserTypeChange(type)}
                    className={`px-4 py-2 text-sm font-medium rounded-lg border ${
                      formData.userType === type
                        ? 'bg-primary text-white border-primary'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <TextInput
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              placeholder="John Doe"
              onChange={handleInputChange}
              required={false}
              type="text"
            />
            <TextInput
              label="Email"
              name="email"
              value={formData.email}
              placeholder="johndoe@person.com"
              onChange={handleInputChange}
              required={false}
              type="email"
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
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
                  value={formData.mobile}
                  onChange={handleInputChange}
                  placeholder="(416) 000 234"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Must have at least 8 characters"
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  minLength={8}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 cursor-pointer top-1/2 transform -translate-y-1/2 text-primary text-sm"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </span>
              </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-3">
              <label className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 mt-0.5"
                  required
                />
                <span className="text-sm text-gray-600">Accept Terms & Conditions</span>
              </label>

              <label className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  name="getUpdates"
                  checked={formData.getUpdates}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 mt-0.5"
                />
                <span className="text-sm text-gray-600">Get updates on promotions</span>
              </label>
            </div>

            <YellowButton text="Create Account" wFull={true} handleClick={handleSubmit} />
          </form>

          {/* Divider */}
          <div className="flex items-center text-gray-500 my-10">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-sm">Or continue with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-3 gap-3">
            <button
              type="button"
              className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200"
            >
              <GoogleIcon />
            </button>
            <button
              type="button"
              className="flex items-center justify-center py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
            >
              <FacebookIconAuth />
            </button>
            <button
              type="button"
              className="flex items-center justify-center py-2 px-4 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-200"
            >
              <AppleIcon />
            </button>
          </div>

          <div className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-primary cursor-pointer font-medium">
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        show={showModal}
        title={formData.userType === 'Personal Account' ? 'Add Vehicle' : 'Add Business details'}
        onClose={() => setShowModal(false)}
      />
    </div>
  )
}

export default Signup
