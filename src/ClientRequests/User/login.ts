import axios from "axios";
import { ExistingUserDto } from "../../../un-lockal-backend/dist/user/dtos/existing-user.dto";
import {ip} from '../index'

//Logs in the user. Returns a JWT token on successful login
export async function handleLogin(existingUserDto: ExistingUserDto) {
  const url = "http://" + ip + ":3001/api/auth/login";
  const token = await axios
    .post(url, existingUserDto)
    .then((response) => {
      if(response) {
        return response.data.token;
      } else {
        return null;
      }
    })
    .catch((error) => {
      console.log("error with login!");
    });
  return token;
}
