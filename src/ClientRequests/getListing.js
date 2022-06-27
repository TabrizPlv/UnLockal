import { useEffect, useState } from "react";
import axios from "axios";
import { getUserId } from "../User-Info-Functions";

export async function handleGetListing() {
  const userId = await getUserId("userToken");
  const [listings, setListings] = useState([]);
  const url = "http://192.168.50.75:3001/api/user/" + userId + "/get-listings";

  useEffect(() => {
    const fetchAndSetListings = async () => {
      await axios
        .get(url)
        .then((response) => {
          const data = response.data;
          setListings(data);
        })
        .catch((error) => console.log(error));
    };
    fetchAndSetListings();
  }, []);
  return listings;
}
