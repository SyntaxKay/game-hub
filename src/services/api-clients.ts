import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e3fce895bfe64d0391501d26d7befda8",
  },
});
