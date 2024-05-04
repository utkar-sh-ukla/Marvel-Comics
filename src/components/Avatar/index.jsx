import "./style.css";

const Avatar = ({ character }) => {
  return (
    <div className="avatar">
      <img
        className="avatar__image"
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
      />
    </div>
  );
};

export default Avatar;
