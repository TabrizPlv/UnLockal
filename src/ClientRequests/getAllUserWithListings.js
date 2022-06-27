import axios from "axios";

export async function handleGetAllUsersWithListings() {
  const url =
    "http://192.168.86.235:3001/api/user/getAllUsersWithListings";
  const users = await axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
  return users;
}
