import React, { useState, useEffect } from "react";
import "./style.css";
import { useComics, useCharacters } from "../../service";
import Avatar from "../Avatar";
import Card from "../Card";
import Pagination from "../Pagination";

const COMICS_QUERY_PARAMS = {
  offset: 0,
  limit: 8,
  characters: [],
};

const CHARACTERS_QUERY_PARAMS = {
  limit: 7,
};

const Layout = () => {
  const { offset } = COMICS_QUERY_PARAMS;
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError } = useComics(COMICS_QUERY_PARAMS);
  const { data: charactersData } = useCharacters(CHARACTERS_QUERY_PARAMS);
  const [characters, setCharacters] = useState([]); // State for characters
  const comics = data?.data?.results;
  const totalComics = data?.data?.total;

  const itemsPerPage = COMICS_QUERY_PARAMS.limit;
  const totalPages = Math.ceil(totalComics / itemsPerPage);

  useEffect(() => {
    setCurrentPage(Math.ceil(offset / itemsPerPage) + 1);
  }, [offset, itemsPerPage]);

  useEffect(() => {
    if (charactersData) {
      const updatedCharacters = charactersData.data.results.map(
        (character) => ({
          ...character,
          isSelected: COMICS_QUERY_PARAMS.characters.includes(character.id),
        })
      );
      setCharacters(updatedCharacters);
    }
  }, [charactersData]);

  const changePage = (newPage) => {
    if (newPage < 1 || newPage > totalPages || newPage === currentPage) return;
    COMICS_QUERY_PARAMS.offset = (newPage - 1) * itemsPerPage;
    setCurrentPage(newPage);
  };

  const handleCharacterClick = (characterId) => {
    const characterIndex = COMICS_QUERY_PARAMS.characters.indexOf(characterId);
    if (characterIndex === -1) {
      COMICS_QUERY_PARAMS.characters.push(characterId);
    } else {
      COMICS_QUERY_PARAMS.characters.splice(characterIndex, 1);
    }
    const updatedCharacters = characters.map((character) => ({
      ...character,
      isSelected: COMICS_QUERY_PARAMS.characters.includes(character.id),
    }));
    setCharacters(updatedCharacters);
  };

  return (
    <main className="layout">
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong</p>}

      <div className="layout__avatars">
        <div className="layout__avatars__items">
          {characters &&
            characters.map((character, index) => (
              <Avatar
                key={index}
                character={character}
                handleCharacterClick={handleCharacterClick}
              />
            ))}
        </div>
      </div>

      {COMICS_QUERY_PARAMS.characters.length > 0 && (
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
              onClick={() => {
                COMICS_QUERY_PARAMS.characters = [];
                setCharacters(
                  characters.map((character) => ({
                    ...character,
                    isSelected: false,
                  }))
                );
              }}
            >
              Clear All Filters
            </button>
          </div>
        </div>
      )}

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
