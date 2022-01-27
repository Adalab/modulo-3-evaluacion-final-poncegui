import { Link } from "react-router-dom";

// houses
import Gryffindor from "../images/gryffindor.jpg";
import Ravenclaw from "../images/ravenclaw.jpg";
import Slytherin from "../images/slytherin.jpg";
import Hufflepuff from "../images/hufflepuff.jpg";

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

  const getShield = () => {
    if (dataDetail.house === "Gryffindor") {
      return Gryffindor;
    } else if (dataDetail.house === "Hufflepuff") {
      return Hufflepuff;
    } else if (dataDetail.house === "Slytherin") {
      return Slytherin;
    } else if (dataDetail.house === "Ravenclaw") {
      return Ravenclaw;
    }
  };

  return (
    <Link className="cardDetail" to="/">
      <>
        <div className="cardDetail__container">
          <div>
            <article className="cardDetail__article">
              <div className="cardDetail__article--photo">
                <img
                  src={dataDetail.image}
                  alt="character image"
                  title="character image"
                ></img>
                <img
                  className="shield"
                  src={getShield()}
                  alt="House shield"
                  title="House shield"
                />
              </div>
              <ul className="cardDetail__article--description">
                <li>{dataDetail.name}</li>
                <li>Especie: {getSpecies()}</li>
                <li>Género: {getGender()}</li>
                <li>Estatus: {getStatus()}</li>
                <li>Casa: {dataDetail.house}</li>
              </ul>
            </article>
            <button className="cardDetail__container--btn">
              <i className="fas fa-quidditch"></i> back
            </button>
          </div>
        </div>
      </>
    </Link>
  );
};

export default CharacterDetail;
