import { useEffect, useState } from "react";
import axios from "axios";
import { getUserId } from "../User-Info-Functions";

export async function handleGetListing() {
  const userId = await getUserId("userToken");
  const [haveStore, sethaveStore] = useState(false);
  const url = "http://192.168.86.235:3001/api/user/" + userId + "/have-store";

  useEffect(() => {
    const fetchAndSetHaveStore = async () => {
      await axios
        .get(url)
        .then((response) => {
          const data = response.data;
          sethaveStore(data);
        })
        .catch((error) => console.log(error));
    };
    fetchAndSetHaveStore();
  }, []);
  return haveStore;
}
