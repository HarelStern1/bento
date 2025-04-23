import { ChooseCakeColor } from "@bento/components/choose-cake-color/choose-cake-color";
import { ChooseCakeQuantity } from "@bento/components/choose-cake-quantity/choose-cake-quantity";
import { useMultiStep } from "@bento/hooks/use-multi-step/use-multi-step";
import { useSubmitCakeOrder } from "@bento/query-hooks/use-submit-cake-order/use-submit-cake-order";
import { FormProvider, useForm } from "react-hook-form";

export const OrderCakeForm = () => {
  const methods = useForm();

  const { step, isFirstStep, isLastStep, nextStep, prevStep } = useMultiStep(2);
  const { mutate: submitCakeOrder } = useSubmitCakeOrder();

  const onSubmit = () => {
    submitCakeOrder({
      summary: "Test Event 🎉",
      description: "Created from my Next.js app",
      startTime: "2025-04-21T15:00:00",
      endTime: "2025-04-21T16:00:00",
    });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {step === 0 && <ChooseCakeColor />}
        {step === 1 && <ChooseCakeQuantity />}
        {!isFirstStep && <button onClick={prevStep}>prev</button>}
        {!isLastStep && <button onClick={nextStep}>next</button>}
        {isLastStep && <button type="submit">send</button>}
      </form>
    </FormProvider>
  );
};
