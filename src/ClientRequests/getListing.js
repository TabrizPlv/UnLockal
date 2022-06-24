import { useEffect, useState } from "react";
import axios from "axios";

export async function handleGetListing() {
  const [listings, setListings] = useState([]);
  const url = "http://192.168.86.235:3001/business/all-listings";

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
