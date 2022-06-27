import axios from "axios";

export function getStore(storeId) {
  const url = "http://192.168.50.75:3001/business/";
  axios
    .get()
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log("error!");
      console.log(error.response.request._response)
    });
}
