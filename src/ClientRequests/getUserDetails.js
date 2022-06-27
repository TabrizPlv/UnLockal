import { useEffect, useState } from "react";
import axios from "axios";
import { getUserId } from "../User-Info-Functions";

export async function handleGetUserDetails() {
  const userId = await getUserId("userToken");
  const url = "http://192.168.50.75:3001/api/user/" + userId + "/get-userdetails";

  const userDetails = 
  await axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));

  return userDetails;
}
