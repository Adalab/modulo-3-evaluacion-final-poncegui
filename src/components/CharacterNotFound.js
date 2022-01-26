import { Link } from "react-router-dom";

const CharacterNotFound = () => {
  return (
    <>
      <Link to="/" className="Not_found">
        <p>
          <i className="fas fa-chevron-double-left">Volver al inicio</i>
        </p>
      </Link>

      <p>Oh oh! no existe. Tendremos que proponerselo a J.K. Rowling</p>
    </>
  );
};

export default CharacterNotFound;
