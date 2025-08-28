import { BsTrash } from "react-icons/bs"
import { EditIcon } from "./Icons"

const ServicesCard = () => {
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
  )
}

export default ServicesCard
