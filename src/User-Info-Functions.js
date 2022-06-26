import * as SecureStore from "expo-secure-store";
import jwt_decode from "jwt-decode";

export async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

export async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    return result;
  } else {
    alert("No values stored under that key.");
  }
}

export async function deleteToken(key) {
  await SecureStore.deleteItemAsync(key);
}

async function decodeJwtToken(key) {
    let token = await getValueFor(key);
    const decoded = jwt_decode(token);
    return decoded.user;
}

export async function getUserId(key) {
    const user = await decodeJwtToken(key);
    return user.id;
}

export async function getUserEmail(key) {
    const user = await decodeJwtToken(key);
    return user.email;
}