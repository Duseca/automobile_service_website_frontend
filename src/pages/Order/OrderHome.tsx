import HorizontalStepper from "../../components/HorizontalStepper";
import HeaderFooterLayout from "../../layouts/HeaderFooterLayout";
import DeliveryInfo from "./DeliveryInfo";
import OrderSummary from "./OrderSummary";
import PaymentInfo from "./PaymentInfo";

const OrderHome = () => {
  const StepOne = () => <OrderSummary />
const StepTwo = () => <DeliveryInfo />
const StepThree = () => <PaymentInfo />
const StepFour = () => <div>Step 4 Content: Review Page</div>;

    const steps = [
    { title: "Order Summary", component: <StepOne /> },
    { title: "Delivery Information", component: <StepTwo /> },
    { title: "Payment", component: <StepThree /> },
    { title: "Confirm", component: <StepFour /> },
  ];

  return (
    <HeaderFooterLayout>
          <div className="bg-white max-w-screen-xl1 mx-auto p-4 md:px-8 lg:px-8 xl1:px-[80px]">
      <div>
      <HorizontalStepper steps={steps} />
    </div>
    </div>
    </HeaderFooterLayout>
  )
}

export default OrderHome
