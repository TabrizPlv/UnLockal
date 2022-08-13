import axios from "axios";
import { getUserEmail } from "../../User-Info-Functions";
import { ip } from "../index";

//Get Orders that have not been completed yet
export async function handleGetPendingOrders() {
  const userEmail = await getUserEmail("userToken");
  const url =
    "http://" + ip + ":3001/api/order/" + userEmail + "/get-pending-orders";
  const allOrders = await axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
  return allOrders;
}
