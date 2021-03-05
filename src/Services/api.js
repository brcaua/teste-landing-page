import axios from "axios";

const api = axios.create({
  baseURL: "http://73a2f37ca657.ngrok.io",
  headers: ("Allow", "GET, POST, PUT, DELETE, OPTIONS, HEAD"),
});

export default api;
