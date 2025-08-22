import HorizontalStepper from "../../components/HorizontalStepper";
import { useStepper } from "../../hooks/useStepper";
import HeaderFooterLayout from "../../layouts/HeaderFooterLayout";
import ConfirmPayment from "./ConfirmPayment";
import DeliveryInfo from "./DeliveryInfo";
import OrderSummary from "./OrderSummary";
import PaymentInfo from "./PaymentInfo";

const OrderHome = () => {
 const { currentStep, nextStep, 
   goToStep } = useStepper(4);

  const steps = [
    { title: "Order Summary", component: <OrderSummary nextStep={nextStep} /> },
    { title: "Delivery Information", component: <DeliveryInfo  nextStep={nextStep} /> },
    { title: "Payment", component: <PaymentInfo nextStep={nextStep}  /> },
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

export default OrderHome
