import { useEffect, useState } from "react";
import axios from "axios";
import { getUserId } from "../User-Info-Functions";

export async function handleGetUserDetails() {
  const userId = await getUserId("userToken");
  const [userDetails, setUserDetails] = useState('');
  const url = "http://192.168.86.235:3001/api/user/" + userId + "/get-userdetails";

  useEffect(() => {
    const fetchAndSetUserDetails = async () => {
      await axios
        .get(url)
        .then((response) => {
          const data = response.data;
          setUserDetails(data);
        })
        .catch((error) => console.log(error));
    };
    fetchAndSetUserDetails();
  }, []);
  return userDetails;
}
