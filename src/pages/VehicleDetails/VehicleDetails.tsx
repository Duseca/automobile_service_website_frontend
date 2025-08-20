import { useState } from 'react'
import BgImage from '../../assets/authBg.svg';
import YellowButton from '../../components/YellowButton';
import Modal from '../../components/Modal';
import { Link } from 'react-router';
import TextInput from '../../components/TextInput';
const VehicleDetails = () => {
     const [vehicleNumber, setVehicleNumber] = useState('');
      const [showModal, setShowModal] = useState(false);
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
            <h1 className="text-4xl font-bold text-black mb-6">Add Your Vehicle Details</h1>
            <p className="text-[#83898F] text-base">
              Tell us a little about your vehicle so we can help you find the right services.
            </p>
          </div>
<div className="flex items-end gap-2 w-full">
  <div className="flex-1">
    <TextInput  
      label="Enter vehicle number"
      name="email"
      value={vehicleNumber}
      placeholder="1234AA"
      onChange={(e)=> setVehicleNumber(e.target.value)}
      required={false}
      type="text" 
    />
  </div>
  <button 
    className="px-4 py-2 bg-primary text-white rounded-lg transition"
  >
    Search
  </button>
</div>

           <div className="flex items-center text-gray-500 my-10">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-sm">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div> 
          <Link to={"/add-vehicle-detail"} className='flex items-center justify-center my-6'>
            <span className='text-primary font-semibold text-lg text-center'>Enter details manually</span></Link>
          <Link to={"/add-vehicle-detail"}>
            <YellowButton text="Continue" wFull={true}  /></Link>
            <Link to={"/"} className='flex items-center justify-center my-6'>
            <span className='text-primary font-semibold text-lg text-center'>Skip for now</span></Link>
        </div>
        
      </div>

      <Modal
        show={showModal}
        title={''}
        onClose={() => setShowModal(false)}
      />
    </div>
  )
}

export default VehicleDetails
