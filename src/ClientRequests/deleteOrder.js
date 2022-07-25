import axios from "axios";
import { ip } from "./index";

export async function handleDeleteOrder(orderId) {
  const url = "http://" + ip + ":3001/api/order/" + orderId + "/delete-order";
  axios
    .delete(url)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log("error with deleting order!");
      console.log(error.response.request._response);
    });
}
