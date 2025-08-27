import HorizontalStepper from "../../../components/HorizontalStepper";
import { useStepper } from "../../../hooks/useStepper";
import ServiceProviderConfirmPayment from "./ServiceProviderConfirmPayment";
import ServiceProviderCustomerDetail from "./ServiceProviderCustomerDetail";
import ServiceProviderPayment from "./ServiceProviderPayment";
import ServiceProviderProducts from "./ServiceProviderProducts";

const ServiceProviderCreateOrder = () => {
     const { currentStep, nextStep, 
       goToStep } = useStepper(4);
    
      const steps = [
        { title: "Customer details", component: <ServiceProviderCustomerDetail nextStep={nextStep} /> },
        { title: "Products", component: <ServiceProviderProducts nextStep={nextStep} /> },
        { title: "Payment", component: <ServiceProviderPayment nextStep={nextStep}></ServiceProviderPayment> },
        { title: "Confirm", component:<ServiceProviderConfirmPayment></ServiceProviderConfirmPayment>},
      ];
  return (
          <div className="bg-white p-6 m-4 border rounded-xl border-gray-100 ">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-black mb-2">Create New Order</h1>
          <p className="text-[#83898F]">
            Quickly create an order for walk-in customers — all in one place.
          </p>
    
   
    </div>
        </div>
           <div>
      <HorizontalStepper steps={steps} currentStep={currentStep} goToStep={goToStep} />
    </div>
            </div>
  )
}

export default ServiceProviderCreateOrder
