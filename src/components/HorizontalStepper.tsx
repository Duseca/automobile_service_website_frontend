import { useState } from 'react'
interface Step {
  title: string;
  component: React.ReactNode;
}

interface StepperProps {
  steps: Step[];
}
const HorizontalStepper = ({ steps }:StepperProps) => {
   const [currentStep, setCurrentStep] = useState(0);

  const goToStep = (index: number) => {
    setCurrentStep(index);
  };

  return (
  <div className="w-full space-y-4">
  {/* Stepper */}
  <div className="flex flex-col sm:flex-row items-center sm:justify-between bg-light-blue rounded-md p-5">
    {steps.map((step, index) => (
      <div
        key={index}
        className="flex items-center w-full sm:flex-1 cursor-pointer mb-4 sm:mb-0"
        onClick={() => goToStep(index)}
      >
        {/* Step Circle */}
        <div
          className={`w-8 h-8 flex items-center justify-center rounded-full text-white z-10 ${
            index <= currentStep ? "bg-primary" : "bg-primary/50"
          }`}
        >
          {index + 1}
        </div>

        {/* Step Label */}
        <span
          className={`ml-2 text-sm font-medium ${
            index <= currentStep ? "text-primary" : "text-primary/50"
          } truncate`}
        >
          {step.title}
        </span>

        {/* Connector Line */}
        {index !== steps.length - 1 && (
          <div
            className={`hidden sm:block flex-1 h-[2px] mx-2 ${
              index < currentStep ? "bg-primary" : "bg-gray-300"
            }`}
          ></div>
        )}
      </div>
    ))}
  </div>

  {/* Step Content */}
  <div className=''>{steps[currentStep].component}</div>
</div>

  )
}

export default HorizontalStepper
