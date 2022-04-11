import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("merchant_creds")) {
    req.headers.authorization = `Bearer ${localStorage.getItem(
      "merchant_creds"
    )}`;
  } else if (localStorage.getItem("creds")) {
    req.headers.authorization = `Bearer ${localStorage.getItem("creds")}`;
  }
  return req;
});

export const signIn = (email, password) =>
  API.post("/api/auth/login", { email, password });
export const signUp = (email, password, name) =>
  API.post("/api/auth/signup", { email, password, name });
export const findMerchants = (obj) =>
  API.post("/api/placeOrder/findMerchants", obj);
export const placeOrder = (obj) => API.post("/api/placeOrder", obj);
export const findService = (serviceType) =>
  API.get(`/api/services/${serviceType}`);
export const findRepairs = (serviceType) =>
  API.get(`/api/services/repairs/${serviceType}`);
export const addCustAdress = (obj) => API.post("/api/addAddress", obj);
