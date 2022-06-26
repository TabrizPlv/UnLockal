import axios from "axios";

export async function handleEditStore(storeDetails) {
  const url = "http://192.168.86.235:3001/business/create-store";
  axios
    .post(url, 
        {
            storeTitle : storeDetails.storeTitle,
            storeDescription : storeDetails.storeDescription,
            storeImageURL : storeDetails.storeImageUrl
        })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log("error with editting store!");
      console.log(error.response.request._response)
    });
}
