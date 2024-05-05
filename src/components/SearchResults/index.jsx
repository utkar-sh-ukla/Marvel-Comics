import "./style.css";

const SearchResults = ({
  characters,
  comicsQueryParams,
  comicsCharacters,
  setComicsQueryParams,
}) => {
  return (
    <>
      {comicsQueryParams?.titleStartsWith?.length > 0 && (
        <div className="layout__search-results">
          <h2 className="layout__search-results__title">
            Search Results - {comicsQueryParams.titleStartsWith}
          </h2>
        </div>
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
    </>
  );
};

export default SearchResults;
