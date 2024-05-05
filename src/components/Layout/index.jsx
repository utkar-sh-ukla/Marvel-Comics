import React, { useState, useEffect, useMemo } from "react";
import "./style.css";
import AvatarList from "../AvatarList";
import Card from "../Card";
import Pagination from "../Pagination";

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
      {comicsIsLoading && <p>Loading...</p>}
      {comicsIsError && <p>Something went wrong</p>}

      {!charactersIsLoading && !charactersIsError && (
        <AvatarList
          disabled={searchComics}
          characters={characters}
          handleCharacterClick={handleCharacterClick}
          handleArrowClick={handleArrowClick}
        />
      )}

      {comicsCharacters.length > 0 && (
        <div className="layout__selected-characters">
          <h2 className="layout__selected-characters__title">
            Selected Characters -{" "}
            {characters
              .filter((character) => character.isSelected)
              .map((character) => character.name)
              .join(", ")}
          </h2>
          <div className="layout__selected-characters__controls">
            <button
              className="layout__selected-characters__clear-button"
              onClick={() =>
                setComicsQueryParams((prev) => ({ ...prev, characters: [] }))
              }
            >
              Clear All Filters
            </button>
          </div>
        </div>
      )}

      <div className="layout__cards">
        <div className="layout__cards__items">
          {comicsData?.results?.map((comic, index) => (
            <Card key={index} comic={comic} />
          ))}
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
