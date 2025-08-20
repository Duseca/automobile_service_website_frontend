import { useState, } from 'react'
import BgImage from '../../assets/authBg.svg';
import YellowButton from '../../components/YellowButton';
import { Link } from 'react-router';
import TextInput from '../../components/TextInput';
interface VehicleFormData {
  busniessName: string;
  busniessEmail:string;
  busniessLocation:string,
   busniessPhoneNumber:string,
}

const AddBusniessDetails = () => {
      const [formData, setFormData] = useState<VehicleFormData>({
        busniessName: "",
        busniessEmail: "",
        busniessLocation:"",
        busniessPhoneNumber:""
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
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

      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-16 bg-[#FBFEFF]">
        <div className="w-full">
          {/* Heading */}
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-black mb-6">
             Business Details
            </h1>
            <p className="text-[#83898F] text-base">
             We need a few basic details to get your business set up on the website.
            </p>
          </div>
          <div className='grid grid-cols-1 gap-6'>
          <TextInput
            label="Busniess name"
            placeholder='e.g., Micheal Auto Garage'
            name="busniessName"
            value={formData.busniessName}
            onChange={handleChange}
          />
          <TextInput
            label="Busniess Email"
            placeholder='e.g., Micheal Auto Garage'
            name="busniessName"
            value={formData.busniessEmail}
            onChange={handleChange}
          />
          <div>
              <label className="block text-sm font-semibold text-black  mb-1">
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
                  value={formData.busniessPhoneNumber}
                  onChange={handleChange}
                  placeholder="(416) 000 234"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
         <TextInput
            label="Busniess Location"
            placeholder='123 Main Street, Southwale, Los Angelos, 22118'
            name="busniessName"
            value={formData.busniessEmail}
            onChange={handleChange}
          />
          </div>
          <div className='mt-10'>
            <Link to={"/"}>
            <YellowButton text="Continue" wFull={true}  />
            </Link>
          <Link to={"/"} className="flex items-center justify-center my-6">
            <span className="text-primary font-semibold text-lg text-center">
              Skip for now
            </span>
          </Link>
          </div>
        </div>
      </div>

    
    </div>
  )
}

export default AddBusniessDetails
