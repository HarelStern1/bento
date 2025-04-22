import axios from "axios";

export const submitCakeOrder = async (orderDetails: any) => {
  return await axios.post("/api/hello", orderDetails);
};
