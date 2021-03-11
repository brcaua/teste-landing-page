import axios from "axios";

const api = axios.create({
  baseURL: `${window.location.protocol}//${window.location.host}`,
  headers: ("Allow", "GET, POST, PUT, DELETE, OPTIONS, HEAD"),
});

export default api;
