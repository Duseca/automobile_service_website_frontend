import { useState } from "react"
import ServicesCard from "../../components/ServicesCard"
import YellowButton from "../../components/YellowButton"
import ServiceProviderAddProduct from "./modals/ServiceProviderAddProduct"

const ServiceProviderProducts = () => {
      const [showAddModal, setShowModal] = useState(false)
  return (
        <>
<div className="bg-white p-6 m-4 border rounded-xl border-gray-100">
   <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
  <div>
    <h1 className="text-2xl font-semibold text-black mb-2">My Products</h1>
    <p className="text-[#83898F] ">
     Effortlessly manage your products, keeping prices, and listings updated in real-time.
    </p>
    </div>
     <YellowButton text="Add new" wFull={false} handleClick={()=>setShowModal(true)}/>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
    {[1, 2, 3, 4, 5, 6].map((_, index) => (
      <ServicesCard key={index} />
    ))}
  </div>
      </div>
      <ServiceProviderAddProduct showModal={showAddModal} onClose={()=>setShowModal(false)} />
    </>
  )
}

export default ServiceProviderProducts
