import { useQuery } from "react-query";
import { validQueryParams } from "./utils";

const API_URL = "https://gateway.marvel.com/v1/public";
const API_KEY = "527284a6dd4d1a93d6de938c1b9b9337";

// Service function to fetch comics
const fetchComics = async (params) => {
  const queryParamsString = new URLSearchParams({
    apikey: API_KEY,
    ...params, // Spread all additional params
  });

  const response = await fetch(`${API_URL}/comics?${queryParamsString}`);
  if (!response.ok) {
    throw new Error("Failed to fetch comics");
  }
  return response.json();
};

export const useComics = (params) => {
  const validParams = validQueryParams(params);
  return useQuery(["comics", validParams], () => fetchComics(validParams));
};

// Service function to fetch Characters
const fetchCharacters = async (params) => {
  const queryParamsString = new URLSearchParams({
    apikey: API_KEY,
    ...params, // Spread all additional params
  });

  const response = await fetch(`${API_URL}/characters?${queryParamsString}`);
  if (!response.ok) {
    throw new Error("Failed to fetch characters");
  }
  return response.json();
};

export const useCharacters = (params) => {
  const validParams = validQueryParams(params);
  return useQuery(["characters", validParams], () =>
    fetchCharacters(validParams)
  );
};
