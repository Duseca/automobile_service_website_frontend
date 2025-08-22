// hooks/useStepper.ts
import { useState } from "react";

export const useStepper = (totalSteps: number) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => (prev < totalSteps - 1 ? prev + 1 : prev));
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const goToStep = (index: number) => {
    if (index >= 0 && index < totalSteps) {
      setCurrentStep(index);
    }
  };

  return {
    currentStep,
    setCurrentStep,
    nextStep,
    prevStep,
    goToStep,
  };
};
