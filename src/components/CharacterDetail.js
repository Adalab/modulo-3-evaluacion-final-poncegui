import { Link } from "react-router-dom";

const alive = (
  <p>
    Vive <i className="fa fa-heartbeat heart "></i>
  </p>
);

const ghost = (
  <p>
    Sin vida <i className="fas fa-skull skull"></i>
  </p>
);

const CharacterDetail = (props) => {
  const dataDetail = props.characterDetail;
  console.log("characterDetail", dataDetail);

  const getGender = () => {
    return dataDetail.gender === "male" ? "Hombre" : "Mujer";
  };

  const getStatus = () => {
    if (dataDetail.status === false) {
      return ghost;
    } else if (dataDetail.status === true) {
      return alive;
    } else {
      return "unknown";
    }
  };

  const getSpecies = () => {
    if (dataDetail.species === "human") {
      return "Humano";
    } else if (dataDetail.species === "werewolf") {
      return "Hombre lobo";
    } else if (dataDetail.species === "ghost") {
      return "Fantasma";
    } else if (dataDetail.species === "half-giant") {
      return "Medio gigante";
    }
  };

  return (
    <Link to="/">
      <>
        <button>Volver</button>
        <div>
          <article className="card__detail">
            <p>{dataDetail.name}</p>
            <img src={dataDetail.image}></img>
            <p>Estatus: {getStatus()}</p>
            <p>Especie: {getSpecies()}</p>
            <p>Género: {getGender()}</p>
            <p>Casa: {dataDetail.house}</p>
          </article>
        </div>
      </>
    </Link>
  );
};

export default CharacterDetail;
