import YellowButton from "../../components/YellowButton";
import { useState } from "react";
import ServiceProviderAddService from "./modals/ServiceProviderAddService";
import ServicesCard from "../../components/ServicesCard";

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
      <ServicesCard key={index} />
    ))}
  </div>
</div>
<ServiceProviderAddService showModal={showAddModal} onClose={()=>setShowModal(false)} />
</>
    )
  }

export default ServiceProviderServices
