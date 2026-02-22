import axios from "axios";

const API = axios.create({
  baseURL: "https://quickshow-backend-kzqj.onrender.com",
});

export default API;