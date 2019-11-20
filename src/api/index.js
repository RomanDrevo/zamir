import axios from "axios"

axios.defaults.baseURL = 'http://localhost:10211';

export const registerUserApi = (data) => {
  console.log("--api data: ", data)
  return axios.post("/users" , data);
}
