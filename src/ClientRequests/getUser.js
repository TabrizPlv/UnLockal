import { useEffect, useState } from "react";
import axios from "axios";
import { getUserId } from "../User-Info-Functions";

export async function handleGetUserListing() {
  const userId = await getUserId("userToken");
  const [userListing, setUserListing] = useState('');
  const url = "http://192.168.86.235:3001/api/user/" + userId + "/get-listings";

  useEffect(() => {
    const fetchAndSetUserListing = async () => {
      await axios
        .get(url)
        .then((response) => {
          const data = response.data;
          setUserListing(data);
        })
        .catch((error) => console.log(error));
    };
    fetchAndSetUserListing();
  }, []);
  return userListing;
}
