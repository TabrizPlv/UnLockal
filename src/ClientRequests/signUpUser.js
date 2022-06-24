import axios from 'axios';

export function handleSignUp(signUpDetails) {
    const url = "http://192.168.86.235:3001/users/";
    axios
        .post(url, 
            {
                email : users.email,
                password: users.password
            })
        .then((response) => {
        console.log(response);
        })
        .catch((error) => {
        console.log("error with sign up!");
        console.log(error.response.request._response)
        });
}