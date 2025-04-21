import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com", // Replace with your API base URL
});
