import axios from "axios";
import { NewUserDto } from "../../un-lockal-backend/dist/user/dtos/new-user.dto";

export async function handleSignUp(newUserDto : NewUserDto) {
  const url = "http://192.168.86.235:3001/api/auth/register";
  return axios
    .post(url, newUserDto)
    .then((response) => {
      //console.log(response);
      console.log('sign up successful!');
    })
    .catch((error) => {
      console.log("error with sign up!");
      //console.log(error.response.request._response)
    });
}
