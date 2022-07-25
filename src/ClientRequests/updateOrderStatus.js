import axios from "axios";
import { ip } from "./index";

export async function handleUpdateOrderStatus(orderId, newStatus) {
  const url =
  "http://" + ip + ":3001/api/order/" + orderId + "/update-order-status/" + newStatus;
  axios
    .patch(url)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log("error with updating order status!");
      console.log(error.response.request._response);
    });
}
