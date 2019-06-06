import axios from "axios";

const instance = axios.create({
  // baseURL: "https://api.afyajobs.com/"
  baseURL: "https://127.0.0.1:9336/graphql"
});
instance.CancelToken = axios.CancelToken;
instance.isCancel = axios.isCancel;

export default instance;
