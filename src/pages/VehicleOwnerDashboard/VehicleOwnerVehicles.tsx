import { VehicleOwnerVehiclesData } from "../../components/data"
import YellowButton from "../../components/YellowButton"
import { DeleteIcon, EditIcon } from "../../components/Icons"
import { useState, type ChangeEvent } from "react"
import AddVehicleModal from "./AddVehicleModal"
export interface VehicleFormData {
  make: string;
  model: string;
  year: string;
  engineSize: string;
  fuelType: string;
  transmissionType: string;
}

const VehicleOwnerVehicles = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
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
  return (
 <div className="bg-white p-6 m-4 border rounded-xl border-gray-100">
  {/* Header */}
  <div className="flex justify-between items-start mb-6">
    <div>
      <h1 className="text-2xl font-semibold text-black mb-2">Manage Vehicles</h1>
      <p className="text-[#83898F]">
        Easily add, edit, or view your cars to get the right services and products every time.
      </p>
    </div>

    <YellowButton 
      text="Add New" 
      wFull={false} 
      handleClick={() => setIsModalOpen(true)} 
    />
  </div>

  {/* Table */}
  <div className="bg-gray-50 rounded-lg overflow-hidden">
    <table className="w-full text-left text-sm text-gray-600">
      <thead className="bg-gray-100 text-black font-medium">
        <tr>
          <th className="px-6 py-4">Vehicle</th>
          <th className="px-6 py-4">Engine Size</th>
          <th className="px-6 py-4">Fuel Type</th>
          <th className="px-6 py-4">Transmission</th>
          <th className="px-6 py-4">Actions</th>
          <th className="px-6 py-4"></th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200">
        {VehicleOwnerVehiclesData?.map((vehicle) => (
          <tr 
            key={vehicle.id} 
            className="bg-white hover:bg-gray-50 transition-colors"
          >
            {/* Vehicle */}
            <td className="px-6 py-4">
              <div className="font-medium text-gray-900">{vehicle.brand}</div>
              <div className="text-sm text-gray-500">
                {vehicle.model} • {vehicle.year}
              </div>
            </td>

            {/* Engine Size */}
            <td className="px-6 py-4 text-gray-900">{vehicle.engineSize}</td>

            {/* Fuel Type */}
            <td className="px-6 py-4 text-gray-900">{vehicle.fuelType}</td>

            {/* Transmission */}
            <td className="px-6 py-4 text-gray-900">{vehicle.transmission}</td>

            {/* Actions */}
            <td className="px-6 py-4">
              <div className="flex space-x-2">
                <button
                  className="p-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
                  title="Edit vehicle"
                >
                  <EditIcon />
                </button>
                <button
                  className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  title="Delete vehicle"
                >
                  <DeleteIcon />
                </button>
              </div>
            </td>

            {/* Empty column */}
            <td className="px-6 py-4"></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Empty state */}
  {VehicleOwnerVehiclesData?.length === 0 && (
    <div className="text-center py-12 bg-gray-50 rounded-lg">
      <div className="text-gray-400 mb-4">
        <svg
          className="w-16 h-16 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 
               0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </div>

      <h3 className="text-lg font-medium text-gray-900 mb-2">No vehicles found</h3>
      <p className="text-gray-500 mb-4">
        Get started by adding your first vehicle.
      </p>

      <button
        className="px-4 py-2 bg-[#FFCC00] text-white font-medium rounded-lg "
      >
        Add Your First Vehicle
      </button>
    </div>
  )}

  <AddVehicleModal
    isOpen={isModalOpen}
    onClose={() => setIsModalOpen(false)}
    formData={formData}
    handleChange={handleChange}
  />
</div>

  )
}

export default VehicleOwnerVehicles
