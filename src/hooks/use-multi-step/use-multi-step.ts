import React, { useState } from "react";

export const useMultiStep = (steps: number) => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  return {
    step,
    nextStep,
    prevStep,
    isFirstStep: step === 0,
    isLastStep: step === steps - 1,
  };
};
