import axios from "axios";
import { getUserId } from "../../User-Info-Functions";
import {ip} from '../index'

//Creates a Listing for the user
export async function handleAddListing(listingDetails) {
  const userId = await getUserId("userToken");
  const url = "http://" + ip + ":3001/api/user/" + userId + "/add-listing";
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
