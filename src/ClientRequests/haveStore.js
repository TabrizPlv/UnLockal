import { useEffect, useState } from "react";
import axios from "axios";
import { getUserId } from "../User-Info-Functions";
import {ip} from './index'

export async function handleGetListing() {
  const userId = await getUserId("userToken");
  const [haveStore, sethaveStore] = useState(false);
  const url = "http://" + ip + ":3001/api/user/" + userId + "/have-store";

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
