import { v4 as uuid } from "uuid";

const getDataFromApi = (dataHouse) => {
  return fetch(`http://hp-api.herokuapp.com/api/characters/house/${dataHouse}`)
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((character) => {
        return {
          id: uuid(),
          image: character.image,
          name: character.name,
          species: character.species,
          house: character.house,
          gender: character.gender,
          status: character.alive,
          actor: character.actor,
        };
      });
      return cleanData;
    });
};


export default getDataFromApi;
