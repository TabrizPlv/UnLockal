import axios from "axios";
import {ip} from '../index'

//Retrieves all users that have at least 1 listing
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
