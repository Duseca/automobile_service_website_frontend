
import { useStepper } from '../../hooks/useStepper';
import HeaderFooterLayout from '../../layouts/HeaderFooterLayout';
import HorizontalStepper from '../../components/HorizontalStepper';
import ServiceVehicle from './ServiceVehicle';
import DateAndTime from './DateAndTime';
import PaymentInfo from '../Order/PaymentInfo';
import ConfirmPayment from './ConfirmPayment';

const ServiceOrder = () => {
     const { currentStep,nextStep,
   goToStep } = useStepper(4);

  const steps = [
    { title: "Vehicle", component: <ServiceVehicle nextStep={nextStep} /> },
    { title: "Date & Time", component:<DateAndTime nextStep={nextStep} />}, 
    { title: "Payment", component: <PaymentInfo nextStep={nextStep} />},
    { title: "Confirm", component: <ConfirmPayment /> },
  ];
  return (
       <HeaderFooterLayout>
          <div className="bg-white max-w-screen-xl1 mx-auto p-4 md:px-8 lg:px-8 xl1:px-[80px]">
      <div>
      <HorizontalStepper steps={steps} currentStep={currentStep} goToStep={goToStep} />
    </div>
    </div>
    </HeaderFooterLayout>
  )
}

export default ServiceOrder
