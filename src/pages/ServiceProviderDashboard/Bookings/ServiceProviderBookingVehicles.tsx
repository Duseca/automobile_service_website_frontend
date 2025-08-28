import { useState } from "react";
import YellowButton from "../../../components/YellowButton"
type Vehicle = {
  make: string;
  model: string;
  year:number;
  type: string;
};

const ServiceProviderBookingVehicles = ({ nextStep }: { nextStep: () => void }) => {
    const [selected, setSelected] = useState<Vehicle | null>(null);

 const vehicleOptions: Vehicle[] = [
  { make: "Toyota", model: "Corolla", type: "Sedan", year: 2022 },
  { make: "Honda", model: "Civic", type: "Sedan", year: 2021 },
  { make: "Suzuki", model: "Swift", type: "Hatchback", year: 2020 },
  { make: "Ford", model: "Ranger", type: "Truck", year: 2019 },
  { make: "BMW", model: "X5", type: "SUV", year: 2023 },
  { make: "Mercedes", model: "E-Class", type: "Sedan", year: 2022 },
  { make: "Kia", model: "Sportage", type: "SUV", year: 2021 },
  { make: "Hyundai", model: "Elantra", type: "Sedan", year: 2020 },
  { make: "Tesla", model: "Model 3", type: "Electric", year: 2023 },
  { make: "Jeep", model: "Wrangler", type: "SUV", year: 2019 },
];

  return (
   <div>
      <div className="rounded-t-lg bg-gray-100 p-2">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Select Vehicle
        </h3>

       
      </div>

      <div className="w-full my-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {vehicleOptions.map((vehicle, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSelected(vehicle)}
              className={`flex w-full px-4 py-3 border rounded-lg transition text-left
                ${
                  selected?.model === vehicle.model
                    ? "bg-light-blue border-primary"
                    : "bg-white border-gray-300 hover:border-primary"
                }`}
            >
              {/* Custom radio */}
              <span
                className={`w-4 h-4 mt-1 rounded-full border flex items-center justify-center mr-3
                  ${
                    selected?.model === vehicle.model
                      ? "border-primary bg-light-blue"
                      : "border-gray-400 bg-white"
                  }`}
              >
                {selected?.model === vehicle.model && (
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                )}
              </span>

              {/* Vehicle Info */}
              <div>
                <div
                  className={`text-base font-bold ${
                    selected?.model === vehicle.model
                      ? "text-primary"
                      : "text-black"
                  }`}
                >
                  {vehicle.year} {vehicle.model}
                </div>
                <div className="text-sm text-gray-500">
                  {vehicle.type} • Automatic
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
       <div className="my-20">
          <YellowButton
            text="Proceed to next step"
            wFull={true}
            handleClick={nextStep}
          />
        </div>
    </div>
  )
}

export default ServiceProviderBookingVehicles
