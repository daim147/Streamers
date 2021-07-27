import axios from "axios";

export const stream = axios.create({
  baseURL: "http://localhost:3001/",
});
