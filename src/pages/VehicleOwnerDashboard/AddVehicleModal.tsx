import VehicleForm from "../../components/VehicleForm";
import YellowButton from "../../components/YellowButton";
import type { VehicleFormData } from "./VehicleOwnerVehicles";

interface AddVehicleModalProps {
isOpen:boolean;
onClose:(val:any)=>void;
onSave?:(val:any) =>void;
formData:VehicleFormData;
handleChange: (val:any) =>void;
}
const AddVehicleModal = ({ isOpen, formData, handleChange, onClose, onSave }:AddVehicleModalProps) => {
    if (!isOpen) return null;
  return (
     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Add Vehicle</h2>
        <p className="text-[#83898F] text-sm mb-5">To add your vehicle, simply fill in the details below to help us provide you with tailored services.</p>
        <VehicleForm formData={formData} handleChange={handleChange} />
        <div className="flex flex-col space-y-4 mt-6">
           
           <YellowButton text="Save changes" wFull={false} handleClick={onSave} />
            <button
              type="button"
              onClick={onClose}
              className="text-primary text-lg font-semibold "
            >
              Cancel
            </button>
          </div>
        </div>
        
        
    </div>
  )
}

export default AddVehicleModal
