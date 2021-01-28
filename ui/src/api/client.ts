import { create } from "apisauce";

const baseURL = process.env.REACT_APP_API_URL;

export const api = create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=utf-8",
  },
});