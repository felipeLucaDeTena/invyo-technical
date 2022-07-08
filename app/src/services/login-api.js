import axios from "axios";

const LOGIN_URL = "http://localhost:3001/login/";

export function set(user) {
  return axios.post(LOGIN_URL, user);
}
