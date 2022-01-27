import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";
import CharacterNotFound from "./CharacterNotFound";

const CharacterList = (props) => {
  const characterElements = props.characters.map((character, index) => {
    return (
      <li className="list__container--card" key={index}>
        <CharacterCard character={character} />
      </li>
    );
  });
  return (
    <Link className="list" to="/">
      <section className="list">
        <ul className="list__container">
          {props.characters.length === 0 ? (
            <CharacterNotFound />
          ) : (
            characterElements
          )}
        </ul>
      </section>
    </Link>
  );
};
export default CharacterList;
