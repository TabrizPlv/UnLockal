import axios from "axios";
import { getUserId } from "../User-Info-Functions";

export async function handleAddListing(listingDetails) {
  const userId = await getUserId("userToken");
  const url = "http://192.168.86.235:3001/api/user/" + userId + "/add-listing";
  axios
    .post(url, 
        {
          productName : listingDetails.productName,
          productDescription : listingDetails.productDescription,
          productPrice : listingDetails.productPrice,
          productImages : listingDetails.productImages
        })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log("error with adding listing!");
      console.log(error.response.request._response)
    });
}
