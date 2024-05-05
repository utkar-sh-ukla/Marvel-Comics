import Avatar from "../Avatar";
import "./style.css";

const AvatarList = ({ characters, handleCharacterClick, handleArrowClick }) => {
  return (
    <div className="layout__avatars">
      <div className="layout__avatars__items">
        <button
          className="layout__avatars__arrow-button"
          onClick={() => handleArrowClick("left")}
        >
          &lt;
        </button>
        {characters &&
          characters.map((character, index) => (
            <Avatar
              key={index}
              character={character}
              handleCharacterClick={handleCharacterClick}
            />
          ))}
        <button
          className="layout__avatars__arrow-button"
          onClick={() => handleArrowClick("right")}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default AvatarList;
