import axios from "axios";

export function handleEditStore(storeDetails) {
  const url = "http://192.168.86.235:3001/business/create-store";
  axios
    .post(url, 
        {
            storeTitle : storeDetails.StoreTitle,
            storeDescription : storeDetails.StoreDescription,
            storeImageURL : storeDetails.StoreImageURL
        })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log("error with editting store!");
      console.log(error.response.request._response)
    });
}
