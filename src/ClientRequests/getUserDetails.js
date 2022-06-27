import axios from "axios";
import { getUserId } from "../User-Info-Functions";

export async function handleGetUserDetails() {
  const userId = await getUserId("userToken");
  const url =
    "http://192.168.86.235:3001/api/user/" + userId + "/get-userdetails";
  const userDets = await axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
  return userDets;
}
