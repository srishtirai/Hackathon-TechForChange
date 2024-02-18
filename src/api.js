import axios from "axios";

axios.defaults.baseURL = 'http://127.0.0.1:5000';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*"
axios.defaults.headers.common['Content-Type'] = "application/json"
axios.defaults.withCredentials = true

export const loginUser = requestData => axios.post("/login", requestData);
export const signUpUser = requestData => axios(
  {
    method: "post",
    url: "/api/v1/auth/register",
    data: requestData,
    headers: { "Content-Type": "multipart/form-data" },
  }
);
