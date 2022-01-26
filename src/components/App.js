import React, { useEffect, useState } from "react";
// import { Route, Switch, useRouteMatch } from "react-router-dom";
import "../styles/App.scss";
import Header from "./Header";
import getDataFromApi from "../services/DataApi";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import Footer from "./Footer";

//Services

function App() {
  //Estados
  const [dataHouse, setDataHouse] = useState("Gryffindor");
  const [inputSearch, setInputSearch] = useState("");
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    getDataFromApi().then((characterData) => {
      setDataList(characterData);
      console.log(characterData);
    });
  }, []);

  //Funcion manejadora para filtros
  const handleFilter = (data) => {
    if (data.key === "name") {
      setInputSearch(data.value);
    } else if (data.key === "house") {
      setDataHouse(data.value);
    }
  };

  //Filtros aplicados; character & house

  const characterFiltered = dataList
    .filter((character) => {
      return character.name.toLowerCase().includes(inputSearch.toLowerCase());
    })
    .filter((character) => {
      if (dataHouse === "Gryffindor") {
        return true;
      } else if (dataHouse === character.house) {
        return character.house;
      }
    });

  return (
    <div>
      <Header className="logo" />
      <main className="main">
        <Filters
          handleFilter={handleFilter}
          inputSearch={inputSearch}
          selectHouse={dataHouse}
        />
        <CharacterList characters={characterFiltered} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
