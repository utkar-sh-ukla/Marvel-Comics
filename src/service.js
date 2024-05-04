//gateway.marvel.com:443/v1/public/comics?apikey=8b1548fc34de5c1f42f5243d90b9a888

// api.js
import { useQuery } from "react-query";

const API_URL = "https://gateway.marvel.com/v1/public/comics";
const API_KEY = "527284a6dd4d1a93d6de938c1b9b9337";

const fetchComics = async (offset = 0) => {
  const response = await fetch(`${API_URL}?apikey=${API_KEY}&offset=${offset}`);
  if (!response.ok) {
    throw new Error("Failed to fetch comics");
  }
  return response.json();
};

export const useComics = (offset) => {
  return useQuery(["comics", offset], () => fetchComics(offset));
};
