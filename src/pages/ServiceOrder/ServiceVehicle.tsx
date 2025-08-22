import { useState } from "react";
import YellowButton from "../../components/YellowButton";

interface Vehicle {
  id: number;
  year: number;
  make: string;
  model: string;
  engine: string;
  transmission: string;
}

const ServiceVehicle = ({nextStep} : {nextStep : ()=>void}) => {
    const vehicles = [
    { id: 1, year: 2021, make: "Toyota", model: "Corolla", engine: "1.8L Petrol", transmission: "Automatic" },
    { id: 2, year: 2020, make: "Honda", model: "Civic", engine: "2.0L Petrol", transmission: "Manual" },
    { id: 3, year: 2022, make: "Mazda", model: "3", engine: "2.5L Petrol", transmission: "Automatic" },
    { id: 4, year: 2019, make: "Ford", model: "Focus", engine: "1.5L Diesel", transmission: "Automatic" },
    { id: 5, year: 2022, make: "Mazda", model: "3", engine: "2.5L Petrol", transmission: "Automatic" },
    { id: 6, year: 2019, make: "Ford", model: "Focus", engine: "1.5L Diesel", transmission: "Automatic" },
    { id: 7, year: 2020, make: "Honda", model: "Civic", engine: "2.0L Petrol", transmission: "Manual" },
    { id: 8, year: 2020, make: "Honda", model: "Civic", engine: "2.0L Petrol", transmission: "Manual" }
  ]

     const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(vehicles[0] || null);

  const handleVehicleSelect = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    
  };
  return (
   <div className="w-full bg-white">
       <div className="rounded-t-lg bg-gray-100 p-3 w-full flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Select Vehicle
          </h3>
          <button className="text-primary  font-medium">
          View all
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className={`border rounded-lg p-4 cursor-pointer transition-all ${
              selectedVehicle?.id === vehicle.id
                ? 'border-primary bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => handleVehicleSelect(vehicle)}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-gray-900">
                {vehicle.year} {vehicle.make} {vehicle.model}
              </h3>
              {selectedVehicle?.id === vehicle.id && (
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              )}
            </div>
            <div className="text-sm text-gray-600 space-y-0.5">
              <div>{vehicle.engine} • {vehicle.transmission}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="my-20">
      <YellowButton wFull={true} text="Proceed to next step" handleClick={nextStep} />
      </div>
    </div>
  )
}

export default ServiceVehicle
