import axios from "axios";

const instance = axios.create({
  // baseURL: "https://api.afyajobs.com/"
  baseURL: "http://localhost:8000/graphql"
});
instance.CancelToken = axios.CancelToken;
instance.isCancel = axios.isCancel;

export default instance;
