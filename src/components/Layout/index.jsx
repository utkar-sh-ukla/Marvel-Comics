import React, { useState, useEffect } from "react";
import "./style.css";
import { useComics, useCharacters } from "../../service";
import Avatar from "../Avatar";
import Card from "../Card";
import Pagination from "../Pagination";

const COMICS_QUERY_PARAMS = {
  offset: 0,
  limit: 8,
};

const CHARACTERS_QUERY_PARAMS = {
  limit: 7,
};

const Layout = () => {
  const { offset } = COMICS_QUERY_PARAMS;
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError } = useComics(COMICS_QUERY_PARAMS);
  const { data: charactersData } = useCharacters(CHARACTERS_QUERY_PARAMS);
  const comics = data?.data?.results;
  const totalComics = data?.data?.total;

  const characters = charactersData?.data?.results;

  const itemsPerPage = COMICS_QUERY_PARAMS.limit;
  const totalPages = Math.ceil(totalComics / itemsPerPage);

  useEffect(() => {
    setCurrentPage(Math.ceil(offset / itemsPerPage) + 1);
  }, [offset, itemsPerPage]);

  const changePage = (newPage) => {
    if (newPage < 1 || newPage > totalPages || newPage === currentPage) return;
    COMICS_QUERY_PARAMS.offset = (newPage - 1) * itemsPerPage;
    setCurrentPage(newPage);
  };

  return (
    <main className="layout">
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong</p>}
      <div className="layout__avatars">
        <div className="layout__avatars__items">
          {characters &&
            characters.map((character, index) => (
              <Avatar key={index} character={character} />
            ))}
        </div>
      </div>
      <div className="layout__cards">
        <div className="layout__cards__items">
          {comics &&
            comics.map((comic, index) => <Card key={index} comic={comic} />)}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        changePage={changePage}
      />
    </main>
  );
};

export default Layout;
