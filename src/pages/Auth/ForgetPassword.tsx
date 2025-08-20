import React, { useState } from 'react'
import BgImage from '../../assets/authBg.svg';
import YellowButton from '../../components/YellowButton';
import { Link } from 'react-router';
import TextInput from '../../components/TextInput';

const ForgetPassword = () => {
   const [formData, setFormData] = useState({
      email: '',
    });

  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value, type, checked } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }));
    };
  return (
     <div className="min-h-screen flex">
  <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700">
    <div className="absolute inset-0 bg-black/20"></div>
    <div
      className="w-full h-full bg-cover bg-center relative"
      style={{ backgroundImage: `url(${BgImage})` }}
    ></div>
  </div>
  <div className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-16 bg-[#FBFEFF]">
    <div className="w-full">
      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-black mb-6">Forgot Password</h1>
        <p className="text-[#83898F] text-base">
       Please enter your email to receive a verification code for password reset.
        </p>
      </div>
      <form className="space-y-4">
        <TextInput
          label={"Email"}
          name="email"
          value={formData.email}
          placeholder={"johndoe@person.com"}
          onChange={handleInputChange}
          required={false}
          type="email"
        />
        <div className='mt-10'>
        <Link to={"/otp-verification"}>
          <YellowButton text="Send password Reset link" wFull={true} />
        </Link>
        </div>
      </form>
      
      <div className="text-center text-sm text-gray-600 mt-6">
         Back to {' '}
        <Link to="/login" className="text-primary cursor-pointer font-medium">
        Login
        </Link>
      </div>
    </div>
  </div>

</div>
  )
}

export default ForgetPassword
