import { Link } from "react-router-dom";

const CharacterNotFound = () => {
  return (
    <>
      <Link to="/" className="Not_found">
        Volver al inicio
      </Link>

      <h2 className="not_found_message">
        Oh oh! no existe. Tendremos que proponerselo a J.K. Rowling
      </h2>
    </>
  );
};

export default CharacterNotFound;
