import axios from "axios";
import { ip } from "../index";

export async function handleCreateOrder(order) {
  const url = "http://" + ip + ":3001/api/order/create-order";
  axios
    .post(url, {
      product: order.product,
      quantity: order.quantity,
      buyer: order.buyer,
      seller: order.seller,
      status: order.status,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log("error with creating order!");
      console.log(error.response.request._response);
    });
}
