import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <Link className="cardList" to={`character/${props.character.id}`}>
      <img
        className="card__preview"
        src={
          props.character.image
            ? props.character.image
            : "https://via.placeholder.com/210x295/ffffff/666666/?text=gyr"
        }
        alt={`Foto de ${props.character.name}`}
        title={`Foto de ${props.character.name}`}
      />
      <div className="card__text">
        <h4>{props.character.name}</h4>
        <p>{props.character.species}</p>
        <p>{props.character.house}</p>
      </div>
    </Link>
  );
};

export default CharacterCard;
