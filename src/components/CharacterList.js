import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const characterElements = props.characters.map((character, index) => {
    return (
      <li key={index}>
        <CharacterCard character={character} />
      </li>
    );
  });
  return (
    <section>
      <ul className="card__list">{characterElements}</ul>
    </section>
  );
};
export default CharacterList;
