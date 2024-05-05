import "./style.css";

const Avatar = ({ character, handleCharacterClick }) => {
  return (
    <div
      className={`avatar ${character.isSelected ? "avatar--selected" : ""}`}
      onClick={() => handleCharacterClick(character.id)}
    >
      <img
        className="avatar__image"
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
      />
      {character.isSelected && <div className="avatar__tick">&#10004;</div>}
    </div>
  );
};

export default Avatar;
