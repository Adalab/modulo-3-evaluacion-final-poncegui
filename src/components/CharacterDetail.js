import { Link } from "react-router-dom/cjs/react-router-dom.min";

const CharacterDetail = (props) => {
  const data = props.getRoute;
  return (
    <Link to="/">
      <span>Volver</span>
      <div>
        <img src={data.image} alt={data.name} />

        <h2>{data.name}</h2>
        <ul>
          <li>Estatus: {data.alive ? "Viva/o" : "Muerta/o"}</li>
          <li>Especie: {data.species === "human" ? "Humana/o" : "Muerta"}</li>
          <li>Género: {data.gender === "female" ? "Mujer" : "Hombre"}</li>
          <li>Casa: {data.house}</li>
        </ul>
      </div>
    </Link>
  );
};

export default CharacterDetail;
