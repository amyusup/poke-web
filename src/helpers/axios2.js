import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:8000/api/v1",
  baseURL: "https://poke-api-clone.herokuapp.com/api/v1",
});
