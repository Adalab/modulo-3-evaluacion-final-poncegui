import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <Link className="card_Container" to={`character/${props.character.id}`}>
      <img
        className="card__image"
        src={
          props.character.image
            ? props.character.image
            : "https://via.placeholder.com/210x295/ffffff/666666/?text=gyr"
        }
        alt={`Foto de ${props.character.name}`}
        title={`Foto de ${props.character.name}`}
      />
      <div className="card__text">
        <h4 className="card__tex--title">{props.character.name}</h4>
        <p className="card__text--specie">{props.character.species}</p>
        <p className="card__text--house">{props.character.house}</p>
      </div>
    </Link>
  );
};

export default CharacterCard;
