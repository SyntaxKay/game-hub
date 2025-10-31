import axios from "axios";
const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
if (!API_KEY)
  throw new Error("RAWG API key is missing in environment variables");
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: API_KEY,
  },
});
