import axios from "axios";

const RAWG_API_KEY = import.meta.env.VITE_RAWG_API_KEY;

if (!RAWG_API_KEY) {
    throw new Error("RAWG API key is not defined in environment variables");
}

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: RAWG_API_KEY,
    },
});