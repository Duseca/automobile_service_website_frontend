import { useState, type ChangeEvent } from 'react'
import BgImage from '../../assets/authBg.svg';
import YellowButton from '../../components/YellowButton';
import Modal from '../../components/Modal';
import { Link } from 'react-router';
import TextInput from '../../components/TextInput';
import Dropdown from '../../components/Dropdown';
interface VehicleFormData {
  make: string;
  model: string;
  year: string;
  engineSize: string;
  fuelType: string;
  transmissionType: string;
}
const AddVehicleDetails = () => {
    const [vehicleNumber, setVehicleNumber] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  const [formData, setFormData] = useState<VehicleFormData>({
    make: "",
    model: "",
    year: "",
    engineSize: "",
    fuelType: "",
    transmissionType: "",
  });

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Auto-generate years (last 30 years)
  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 30 }, (_, i) => (currentYear - i).toString());
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
              Add Your Vehicle Details
            </h1>
            <p className="text-[#83898F] text-base">
              Tell us a little about your vehicle so we can help you find the
              right services.
            </p>
          </div>
          <div className="flex items-end gap-2 w-full mb-6">
            <div className="flex-1">
              <TextInput
                label="Enter vehicle number"
                name="vehicleNumber"
                value={vehicleNumber}
                placeholder="1234AA"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setVehicleNumber(e.target.value)
                }
                required={false}
                type="text"
              />
            </div>
            <button className="px-4 py-2 bg-primary text-white rounded-lg transition">
              Search
            </button>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10'>
          <Dropdown
            label="Make"
            name="make"
            value={formData.make}
            options={["Toyota", "Honda", "Ford", "BMW", "Audi"]}
            onChange={handleChange}
          />
          <Dropdown
            label="Model"
            name="model"
            value={formData.model}
            options={["Corolla", "Civic", "Mustang", "X5", "A4"]}
            onChange={handleChange}
          />
          <Dropdown
            label="Manufacture Year"
            name="year"
            value={formData.year}
            options={yearOptions}
            onChange={handleChange}
          />
          <Dropdown
            label="Engine Size"
            name="engineSize"
            value={formData.engineSize}
            options={["1.0L", "1.6L", "2.0L", "3.0L", "4.0L"]}
            onChange={handleChange}
          />
          <Dropdown
            label="Fuel Type"
            name="fuelType"
            value={formData.fuelType}
            options={["Petrol", "Diesel", "Hybrid", "Electric"]}
            onChange={handleChange}
          />
          <Dropdown
            label="Transmission Type"
            name="transmissionType"
            value={formData.transmissionType}
            options={["Manual", "Automatic", "Semi-Automatic"]}
            onChange={handleChange}
          />
          </div>
          <div className='mt-10'>
            <YellowButton text="Continue" wFull={true} handleClick={()=>setShowModal(true)} />
          <Link to={"/"} className="flex items-center justify-center my-6">
            <span className="text-primary font-semibold text-lg text-center">
              Skip for now
            </span>
          </Link>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal 
      show={showModal} 
      title={"Resend SMS"} 
      bottomText='Close'
      modalTitle='Almost There!' 
      description='We’ve sent a verification link to your mobile. Please check your inbox and verify your email to publish your service or product.' 
      onClose={() => setShowModal(false)} />
    </div>
  )
}

export default AddVehicleDetails
