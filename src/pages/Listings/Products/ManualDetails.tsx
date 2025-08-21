import React, { useState } from 'react'

const ManualDetails = () => {
     const [registrationNumber, setRegistrationNumber] = useState('OPM 9862');
    
      const handleSearch = () => {
        console.log('Searching for vehicle:', registrationNumber);
      };
    
    
      const handleRegistrationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegistrationNumber(e.target.value.toUpperCase());
      };
  return (
   <div className="max-w-screen-xl1 mx-auto p-4 md:px-8 lg:px-8 xl1:px-[80px]">
      <div className="text-center mb-8">
        <h2 className="text-lg font-medium text-gray-900 leading-relaxed">
          Tell Us More About Your Vehicle So We Can Help You Find The Right Products Or Services
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-10">

  <div className="w-full">
    <label
      htmlFor="registration"
      className="block text-sm font-medium text-gray-900 mb-2"
    >
      Vehicle Registration Number
    </label>
    <input
      type="text"
      id="registration"
      value={registrationNumber}
      onChange={handleRegistrationChange}
      className="w-full px-4 py-3 text-base md:text-lg font-medium text-gray-900 bg-[#FFD633] rounded-lg"
      placeholder="Enter registration number"
    />
  </div>

  <div className="w-full lg:w-1/2 flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-4 relative">
    <div className="flex items-center w-full sm:w-auto justify-center">
      <div className="hidden lg:block w-px h-12 bg-gray-300 mx-4"></div>
      <div className="lg:hidden w-full h-px bg-gray-300 my-4"></div>
      <span className="bg-white px-3 text-gray-500 font-medium text-sm absolute lg:relative -mt-6 sm:mt-0">
        OR
      </span>
    </div>
    <span className="text-gray-800 font-semibold text-base md:text-lg text-center">
      Enter details manually
    </span>

    <button
      onClick={handleSearch}
      className="px-6 md:px-8 py-2.5 md:py-3 bg-[#FFD633]  text-gray-900 font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-1"
    >
      Search
    </button>
  </div>
</div>

    </div>
  )
}

export default ManualDetails
