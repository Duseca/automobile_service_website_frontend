import React, { useState } from 'react'
import BgImage from '../../assets/authBg.svg';
import YellowButton from '../../components/YellowButton';
const Signup = () => {
     const [formData, setFormData] = useState({
        userType: 'Personal Account',
        fullName: '',
        email: '',
        mobile: '',
        password: '',
        acceptTerms: false,
        getUpdates: false
      });
      
      const [showPassword, setShowPassword] = useState(false);
    
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: type === 'checkbox' ? checked : value
        }));
      };
    
      const handleUserTypeChange = (type: string) => {
        setFormData(prev => ({ ...prev, userType: type }));
      };
    
    //   const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     console.log('Form submitted:', formData);
    //   };
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Hero Image */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="w-full h-full bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${BgImage})`
          }}
        >
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#FBFEFF]">
        <div className="w-full max-w-md">
       

          <div className="mb-6">
            <h1 className="text-4xl font-bold text-black mb-6">Create Your Account</h1>
            <p className="text-[#83898F] text-base">
           Sign up to book vehicle services or offer them — it only takes a minute.
            </p>
          </div>

          <div className="space-y-4">
            {/* User Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                User Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => handleUserTypeChange('Personal Account')}
                  className={`px-4 py-2 text-sm font-medium rounded-lg border ${
                    formData.userType === 'Personal Account'
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  Personal Account
                </button>
                <button
                  type="button"
                  onClick={() => handleUserTypeChange('Business Account')}
                  className={`px-4 py-2 text-sm font-medium rounded-lg border ${
                    formData.userType === 'Business Account'
                      ? 'bg-primary  text-white border-primary'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  Business Account
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="John Doe"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@example.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Mobile Number */}
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
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
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
                  onClick={()=>setShowPassword(!showPassword)}
                  className="absolute right-4 cursor-pointer top-1/2 transform -translate-y-1/2 text-primary text-sm">
                   {showPassword? 'hide' : 'show'}
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
                <span className="text-sm text-black">
                  Accept Terms & Conditions
                </span>
              </label>
              
              <label className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  name="getUpdates"
                  checked={formData.getUpdates}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 mt-0.5"
                />
                <span className="text-sm text-black">
                  Get updates on promotions
                </span>
              </label>
            </div>
            <YellowButton text='Create Account' wFull={true} />

            <div className="text-center text-sm text-gray-500 my-4">
              Or continue with
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </button>
              
              <button
                type="button"
                className="flex items-center justify-center py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              
              <button
                type="button"
                className="flex items-center justify-center py-2 px-4 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.083.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 23.998 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </button>
            </div>

            {/* Login Link */}
            <div className="text-center text-sm text-gray-600 mt-6">
              Already have an account?{' '}
              <button
                type="button"
                className="text-primary cursor-pointer font-medium"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
