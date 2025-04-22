import { submitCakeOrder } from "@bento/services/submit-cake-order";
import { useMutation } from "@tanstack/react-query";

export const useSubmitCakeOrder = () => {
  return useMutation({
    mutationKey: ["submit-cake-order"],
    mutationFn: (orderDetails: any) => submitCakeOrder(orderDetails),
  });
};
