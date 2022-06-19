import axios from "axios";

export function handleAddListing(listingDetails) {
  const url = "http://192.168.86.235:3001/business/create-listing";
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
