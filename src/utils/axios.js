import axios from "axios";

export default axios.create({
  baseURL: "https://praveen-fserver.herokuapp.com",
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  //   },
});
