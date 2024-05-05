import "./style.css";
import Card from "../Card";
import Loader from "../Loader";

const CardList = ({ comicsData, comicsIsLoading, comicsIsError }) => {
  return (
    <>
      {comicsIsLoading && <Loader />}
      {comicsIsError && <div>Something went wrong...</div>}
      {comicsData && (
        <div className="layout__cards">
          <div className="layout__cards__items">
            {comicsData?.results?.map((comic, index) => (
              <Card key={index} comic={comic} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CardList;
