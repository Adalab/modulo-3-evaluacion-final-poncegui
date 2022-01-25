const getDataFromApi = () => {
  return fetch("http://hp-api.herokuapp.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((character) => {
        console.log(character);
        return {
          image: character.image,
          name: character.name,
          species: character.species,
          house: character.house,
        };
      });
      return cleanData;
    });
};

export default getDataFromApi;
