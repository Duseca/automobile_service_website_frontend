import BgImage from '../../assets/authBg.svg';
import YellowButton from '../../components/YellowButton';
import { Link } from 'react-router';

const OtpVerification = () => {

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
        <h1 className="text-4xl font-bold text-black mb-6">OTP Verification</h1>
        <p className="text-[#83898F] text-base">
          Check your email for a 6-digit code. Enter below to reset your password.
        </p>
      </div>

      {/* OTP Form */}
      <form className="space-y-4">
        <div className="flex justify-center gap-10">
          {Array.from({ length: 6 }).map((_, i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              className="w-16 h-16 text-center text-xl font-semibold border border-primary bg-light-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          ))}
        </div>

        {/* Submit Button */}
        <div className="mt-10">
          <Link to={"/reset-password"}>
            <YellowButton text="Verify code" wFull={true} />
          </Link>
        </div>
      </form>

      {/* Back to Login */}
      <div className="text-center text-sm text-gray-600 mt-6">
        Back to {" "}
        <Link to="/login" className="text-primary cursor-pointer font-medium">
          Login
        </Link>
      </div>
    </div>
  </div>
</div>

  )
}

export default OtpVerification
