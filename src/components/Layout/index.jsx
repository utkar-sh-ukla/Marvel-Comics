import React, { useState, useEffect, useMemo } from "react";
import "./style.css";
import AvatarList from "../AvatarList";
import Pagination from "../Pagination";
import CardList from "../CardList";
import SearchResults from "../SearchResults";

const Layout = ({
  comicsData,
  comicsIsLoading,
  comicsIsError,
  charactersData,
  charactersIsLoading,
  charactersIsError,
  comicsQueryParams,
  setComicsQueryParams,
  charactersQueryParams,
  setCharactersQueryParams,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalComics = comicsData?.total;
  const totalCharacters = charactersData?.total;
  const itemsPerPageComics = comicsQueryParams.limit;
  const itemsPerPageCharacters = charactersQueryParams.limit;
  const comicsOffset = comicsQueryParams.offset;
  const charactersOffset = charactersQueryParams.offset;
  const comicsCharacters = comicsQueryParams.characters;
  const searchComics = comicsQueryParams.titleStartsWith;

  useEffect(() => {
    setCurrentPage(Math.ceil(comicsOffset / itemsPerPageComics) + 1);
  }, [comicsOffset, itemsPerPageComics]);

  const totalPages = useMemo(
    () => Math.ceil(totalComics / itemsPerPageComics),
    [totalComics, itemsPerPageComics]
  );

  const totalPagesCharacters = useMemo(
    () => Math.ceil(totalCharacters / itemsPerPageCharacters),
    [totalCharacters, itemsPerPageCharacters]
  );

  const characters = useMemo(() => {
    if (charactersData) {
      return charactersData.results.map((character) => ({
        ...character,
        isSelected: comicsCharacters.includes(character.id),
      }));
    }
    return [];
  }, [charactersData, comicsCharacters]);

  const changePage = (newPage) => {
    if (newPage < 1 || newPage > totalPages || newPage === currentPage) return;
    const newOffset = (newPage - 1) * itemsPerPageComics;
    setComicsQueryParams((prev) => ({ ...prev, offset: newOffset }));
    setCurrentPage(newPage);
  };

  const handleCharacterClick = (characterId) => {
    const updatedCharacters = comicsCharacters.includes(characterId)
      ? comicsCharacters.filter((id) => id !== characterId)
      : [...comicsCharacters, characterId];
    setComicsQueryParams((prev) => ({
      ...prev,
      characters: updatedCharacters,
    }));
  };

  const handleArrowClick = (direction) => {
    const newOffset =
      direction === "left"
        ? Math.max(0, charactersOffset - 1)
        : Math.min(totalPagesCharacters - 1, charactersOffset + 1);
    setCharactersQueryParams((prev) => ({ ...prev, offset: newOffset }));
  };

  return (
    <main className="layout">
      {!charactersIsLoading && !charactersIsError && (
        <AvatarList
          disabled={searchComics}
          characters={characters}
          handleCharacterClick={handleCharacterClick}
          handleArrowClick={handleArrowClick}
        />
      )}

      <SearchResults
        characters={characters}
        comicsQueryParams={comicsQueryParams}
        comicsCharacters={comicsCharacters}
        setComicsQueryParams={setComicsQueryParams}
      />

      <CardList
        comicsData={comicsData}
        comicsIsLoading={comicsIsLoading}
        comicsIsError={comicsIsError}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        changePage={changePage}
      />
    </main>
  );
};

export default Layout;
