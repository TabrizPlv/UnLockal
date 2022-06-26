import axios from "axios";
import { getUserId } from "../User-Info-Functions";

export async function handleEditStore(storeDetails) {
  const userId = await getUserId("userToken");
  const url = "http://192.168.86.235:3001/api/user/" + userId + "/create-store";

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
