import axios from "axios";
import { ExistingUserDto } from "../../un-lockal-backend/dist/user/dtos/existing-user.dto";

export async function handleLogin(existingUserDto: ExistingUserDto) {
  const url = "http://192.168.86.235:3001/api/auth/login";
  const token = await axios
    .post(url, existingUserDto)
    .then((response) => {
      return response.data.token;
    })
    .catch((error) => {
      console.log("error with login!");
      console.log(error.response.request._response);
    });
  return token;
}
