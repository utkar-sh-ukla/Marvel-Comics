import Navbar from "../../components/Navbar";
import Layout from "../../components/Layout";
import { useState } from "react";
import { CHARACTERS_QUERY_PARAMS, COMICS_QUERY_PARAMS } from "../../filters";
import { useComics, useCharacters } from "../../service";

const Home = () => {
  const [charactersQueryParams, setCharactersQueryParams] = useState({
    ...CHARACTERS_QUERY_PARAMS,
  });
  const [comicsQueryParams, setComicsQueryParams] = useState({
    ...COMICS_QUERY_PARAMS,
  });

  const {
    data: comicsData,
    isLoading: comicsIsLoading,
    isError: comicsIsError,
  } = useComics(comicsQueryParams);

  const {
    data: charactersData,
    isLoading: charactersIsLoading,
    isError: charactersIsError,
  } = useCharacters(charactersQueryParams);

  return (
    <>
      <Navbar setComicsQueryParams={setComicsQueryParams} />
      <Layout
        comicsData={comicsData?.data}
        comicsIsLoading={comicsIsLoading}
        comicsIsError={comicsIsError}
        charactersData={charactersData?.data}
        charactersIsLoading={charactersIsLoading}
        charactersIsError={charactersIsError}
        comicsQueryParams={comicsQueryParams}
        setComicsQueryParams={setComicsQueryParams}
        charactersQueryParams={charactersQueryParams}
        setCharactersQueryParams={setCharactersQueryParams}
      />
    </>
  );
};

export default Home;
