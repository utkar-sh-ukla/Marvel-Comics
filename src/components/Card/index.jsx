import "./style.css";

const Card = ({ comic }) => {
  return (
    <div className="card">
      <img
        className="card__image"
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        alt={comic.title}
      />
      <div className="card__title-container">
        <h2 className="card__title" title={comic.title}>
          {comic.title}
        </h2>
      </div>
    </div>
  );
};

export default Card;
