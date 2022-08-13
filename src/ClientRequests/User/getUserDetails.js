import axios from "axios";
import { getUserId } from "../../User-Info-Functions";
import { ip } from "../index";

//Returns an object containing all details of currently logged in user
export async function handleGetUserDetails() {
  const userId = await getUserId("userToken");
  const url = "http://" + ip + ":3001/api/user/" + userId + "/get-userdetails";
  const userDetails = await axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
  return userDetails;
}
