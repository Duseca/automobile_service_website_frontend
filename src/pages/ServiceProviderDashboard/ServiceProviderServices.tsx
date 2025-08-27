import { BsTrash } from "react-icons/bs";
import { EditIcon } from "../../components/Icons";
import YellowButton from "../../components/YellowButton";
import { useState } from "react";
import ServiceProviderAddService from "./modals/ServiceProviderAddService";

const ServiceProviderServices = () => {
  const [showAddModal, setShowModal] = useState(false)
  return (
    <>
  <div className="bg-white p-6 m-4 border rounded-xl border-gray-100">
  {/* Edit Profile Section */}
  <div className="flex justify-between items-start mb-6">
    <div>
      <h1 className="text-2xl font-semibold text-black mb-2">My Services</h1>
      <p className="text-[#83898F] mb-8">
        List the services you provide and make edits anytime to keep your
        offerings up-to-date.
      </p>
    </div>

    
      <YellowButton text="Add new" wFull={false} handleClick={()=>setShowModal(true)}/>

  </div>

  {/* Services Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
    {[1, 2, 3, 4, 5, 6].map((_, index) => (
      <ServiceCard key={index} />
    ))}
  </div>
</div>
<ServiceProviderAddService showModal={showAddModal} onClose={()=>setShowModal(false)} />
</>
    )
  }
const ServiceCard = () => {
  return (
    <div className="max-w-xl bg-white rounded-xl  border border-gray-100 flex items-center gap-4 p-4">
      {/* Image */}
      <img
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400"
        alt="Engine Overhaul"
        className="w-32 h-32 rounded-lg object-cover"
      />

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900">Engine Overhaul</h3>
        <p className="text-primary font-medium mb-3">$23.00</p>

        {/* Actions */}
        <div className="flex gap-3">
          <button className="p-2 bg-[#FFCC00] rounded-lg transition">
            <EditIcon />
          </button>
          <button className="p-2 bg-[#FF3B30] rounded-lg  transition">
            <BsTrash />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ServiceProviderServices
