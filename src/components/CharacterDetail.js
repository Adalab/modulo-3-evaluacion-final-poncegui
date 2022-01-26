import { Link } from "react-router-dom";

const alive = (
  <li>
    Vive <i className="fa fa-heartbeat heart "></i>
  </li>
);

const ghost = (
  <li>
    Sin vida <i className="fas fa-skull skull"></i>
  </li>
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
        <div className="cardDetail__container">
          <button className="cardDetail__container--btn">
            <i className="fas fa-quidditch"></i>
          </button>
          <div>
            <article className="card__detail">
              <div className="card__detail--photo">
                <img className="cardDetail__img" src={dataDetail.image}></img>
              </div>
              <ul className="card__detail--description">
                <li>{dataDetail.name}</li>
                <li>Estatus: {getStatus()}</li>
                <li>Especie: {getSpecies()}</li>
                <li>Género: {getGender()}</li>
                <li>Casa: {dataDetail.house}</li>
              </ul>
            </article>
          </div>
        </div>
      </>
    </Link>
  );
};

export default CharacterDetail;
