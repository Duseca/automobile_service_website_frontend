import React, { useState } from 'react'
import BgImage from '../../assets/authBg.svg';
import YellowButton from '../../components/YellowButton';
import Modal from '../../components/Modal';
import { AppleIcon,  FacebookIconAuth, GoogleIcon } from '../../components/Icons';
import { Link } from 'react-router';
import TextInput from '../../components/TextInput';
const SignIn = () => {
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
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
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
          {/* Heading */}
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-black mb-6">Welcome Back!</h1>
            <p className="text-[#83898F] text-base">
              Log in to access your dashboard and manage your services.
            </p>
          </div>
          <form className="space-y-4" >
            
           <TextInput   label={"Email"}
  name="email"
  value={formData.email}
  placeholder={"johndoe@person.com"}
  onChange={handleInputChange}
  required ={false}
  type = {'email'} />

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
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
<Link to={"/"}>
            <YellowButton text="Login" wFull={true}  /></Link>
          </form>

          {/* Or continue with */}
          <div className="flex items-center text-gray-500 my-10">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-sm">Or continue with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Social Login Buttons */}
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

          {/* Sign up Link */}
          <div className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-primary cursor-pointer font-medium">
              Create an account
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
  );
};
export default SignIn
