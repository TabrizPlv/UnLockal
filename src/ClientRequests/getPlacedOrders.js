import axios from "axios";
import { getUserEmail } from "../User-Info-Functions";
import { ip } from "./index";

export async function handleGetPlacedOrders() {
  const userEmail = await getUserEmail("userToken");
  const url =
    "http://" + ip + ":3001/api/order/" + userEmail + "/get-placed-orders";
  const allOrders = await axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
  return allOrders;
}
