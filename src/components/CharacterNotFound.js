import { Link } from "react-router-dom";

const CharacterNotFound = () => {
  return (
    <>
      <Link to="/">Volver al inicio</Link>

      <p>Oh oh! no existe. Tendremos que proponerselo a J.K. Rowling</p>
    </>
  );
};

export default CharacterNotFound;
