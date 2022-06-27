import axios from "axios";
import {ip} from './index'

export async function handleGetAllUsersWithListings() {
  const url =
  "http://" + ip + ":3001/api/user/getAllUsersWithListings";
  const users = await axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
  return users;
}
