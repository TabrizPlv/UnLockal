import axios from "axios";
import { NewUserDto } from "../../un-lockal-backend/dist/user/dtos/new-user.dto";
import {ip} from './index'

export async function handleSignUp(newUserDto : NewUserDto) {
  const url = "http://" + ip + ":3001/api/auth/register";
  return axios
    .post(url, newUserDto)
    .then((response) => {
      console.log('sign up successful!');
    })
    .catch((error) => {
      const err = error.response.request._response;
      console.log(err);
      alert(err);
    });
}
