
import { useState } from 'react';
import BgImage from '../../assets/authBg.svg';
import YellowButton from '../../components/YellowButton';
import { Link } from 'react-router';
import Modal from '../../components/Modal';
const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false);
  return (
     <div className="min-h-screen flex">
  {/* Left Side Background */}
  <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700">
    <div className="absolute inset-0 bg-black/20"></div>
    <div
      className="w-full h-full bg-cover bg-center relative"
      style={{ backgroundImage: `url(${BgImage})` }}
    ></div>
  </div>

  {/* Right Side Content */}
  <div className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-16 bg-[#FBFEFF]">
    <div className="w-full">
      
      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-black mb-6">Reset Password</h1>
        <p className="text-[#83898F] text-base">
         Create a secure, memorable password for your account.
        </p>
      </div>

      {/* OTP Form */}
      <form className="space-y-4">
        <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
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
  <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
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
        {/* Submit Button */}
        <div className="mt-10">
         
            <YellowButton text="Reset password" wFull={true} handleClick={()=>setShowModal(true)} />
        </div>
      </form>

      {/* Back to Login */}
      <div className="text-center text-sm text-gray-600 mt-6">
        Didn’t got the code? {" "}
        <Link to="/otp-verification" className="text-primary cursor-pointer font-medium">
          Resend
        </Link>
      </div>
    </div>
  </div>
   <Modal
        show={showModal}
        link={'/login'}
        modalTitle='Password Updated!'
        description='Supporting text'
        title={'Back to Login'}
        onClose={() => setShowModal(false)}
      />
</div>
  )
}

export default ResetPassword
