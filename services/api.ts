import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.simplyrets.com",
  timeout: 5000,
  headers: { Authorization: `Basic ${btoa("simplyrets:simplyrets")}` },
});

export default instance;
