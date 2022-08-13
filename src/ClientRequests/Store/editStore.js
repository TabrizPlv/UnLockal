import axios from "axios";
import { getUserId } from "../../User-Info-Functions";
import {ip} from '../index'

//Updates the store of the user
export async function handleEditStore(storeDetails) {
  const userId = await getUserId("userToken");
  const url = "http://" + ip + ":3001/api/user/" + userId + "/create-store";

  axios
    .put(url, {
      storeTitle: storeDetails.storeTitle,
      storeDescription: storeDetails.storeDescription,
      storeImageURL: storeDetails.imageurl,
    })
    .then((response) => {
      console.log("Edit store successful!");
    })
    .catch((error) => {
      console.log("error with editting store!");
      console.log(error.response.request._response);
    });
}
