
import { useStepper } from '../../../hooks/useStepper';
import HorizontalStepper from '../../../components/HorizontalStepper';
import ServiceProviderBookingCustomerDetails from './ServiceProviderBookingCustomerDetails';
import ServiceProviderBookingVehicles from './ServiceProviderBookingVehicles';
import ServiceProviderBookingServices from './ServiceProviderBookingServices';
import ServiceProviderPayment from '../CreateOrder/ServiceProviderPayment';
import ServiceProviderBookingConfirm from './ServiceProviderBookingConfirm';

const ServiceProviderCreateBooking = () => {
    const { currentStep, nextStep, 
       goToStep } = useStepper(5);
    
      const steps = [
        { title: "Customer details", component: <ServiceProviderBookingCustomerDetails nextStep={nextStep}/> },
        { title: "Vehicle", component: <ServiceProviderBookingVehicles nextStep={nextStep} />},
         { title: "Services", component: <ServiceProviderBookingServices  nextStep={nextStep} /> },
        { title: "Payment", component: <ServiceProviderPayment  nextStep={nextStep} /> },
        { title: "Confirm", component:<ServiceProviderBookingConfirm />},
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

export default ServiceProviderCreateBooking
