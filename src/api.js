import axios from "axios";

axios.defaults.baseURL = 'http://10.192.4.244:5000';
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
export const getUserDetails = () => axios.get("/userinfo")


export const getTags = (type) => axios.get(`/tags?type=${type}`);
export const getEvents = (tag_id) => {
  let params = {type: "EVENT"}
  if (tag_id) {
    params["tag"] = tag_id;
  }
  return axios.get(`/events`, {params})
}

export const getPetitions = (tag_id) => {
  let params = {type: "PETITION"}
  if (tag_id) {
    params["tag"] = tag_id;
  }
  return axios.get(`/events`, {params})
}

export const updateEventStatus = (eventId) => {
  return axios.patch(`/events/${eventId}`);
}