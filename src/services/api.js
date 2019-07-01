import axios from "axios";

const api = axios.create({
  baseURL: "http://zemopay.alphacode.mobi/zemoApi"
});

export default api;
