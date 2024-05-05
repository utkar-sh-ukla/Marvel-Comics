import { useQuery } from "react-query";
import { validQueryParams } from "../utils/helper";

const API_URL = "https://gateway.marvel.com/v1/public";
const API_KEY = "527284a6dd4d1a93d6de938c1b9b9337";

const fetchData = async (endpoint, params) => {
  const queryParams = new URLSearchParams({
    apikey: API_KEY,
    ...params,
  });

  const response = await fetch(`${API_URL}/${endpoint}?${queryParams}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${endpoint}`);
  }
  return response.json();
};

export const useData = (endpoint, params) => {
  const validParams = validQueryParams(params);
  return useQuery([endpoint, validParams], () =>
    fetchData(endpoint, validParams)
  );
};

export const useComics = (params) => useData("comics", params);

export const useCharacters = (params) => useData("characters", params);
