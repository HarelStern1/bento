import axios from "axios";

export const submitCakeOrder = async (orderDetails: unknown) => {
  return await axios.post("/api/hello", orderDetails);
};
