import { useState } from "react";
import YellowButton from "../../../components/YellowButton";

type PaymentType = "Paid" | "Unpaid";
const ServiceProviderBookingPayment = ({ nextStep }: { nextStep: () => void }) => {
     const [selected, setSelected] = useState<PaymentType>("Paid");
    
      const paymentOptions: PaymentType[] = ["Paid", "Unpaid"];
  return (
      <>
      <div className="rounded-t-lg bg-gray-100 p-2">
        <h3 className="text-lg font-semibold text-black mb-4">
          Payment Information
        </h3>
      </div>

      <div className="w-full my-4">
    

        <div className="flex flex-col md:flex-row gap-4">
          {paymentOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setSelected(option)}
              className={`flex items-center w-full px-4 py-3 border rounded-lg transition 
                ${
                  selected === option
                    ? "bg-light-blue border-primary"
                    : "bg-white border-gray-300 hover:border-primary"
                }`}
            >
              {/* Custom radio */}
              <span
                className={`w-4 h-4 rounded-full border flex items-center justify-center mr-2
                  ${
                    selected === option
                      ? "border-primary bg-light-blue"
                      : "border-gray-400 bg-white"
                  }`}
              >
                {selected === option && (
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                )}
              </span>

              {/* Label */}
              <span
                className={`text-sm font-medium ${
                  selected === option ? "text-primary" : "text-gray-600"
                }`}
              >
                {option}
              </span>
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
    </>
  )
}

export default ServiceProviderBookingPayment
