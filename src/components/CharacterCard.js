// import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <>
      <img
        className="img"
        src={props.character.image}
        alt={`Foto de ${props.character.name}`}
        title={`Foto de ${props.character.name}`}
      />
      <h4>{props.character.name}</h4>
      <p>{props.character.species}</p>
    </>
  );
};

export default CharacterCard;
