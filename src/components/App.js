import React, { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import "../styles/main.scss";

import Header from "./Header";
import getDataFromApi from "../services/DataApi";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import Filters from "./Filters";
import Footer from "./Footer";

//Services

function App() {
  //Estados
  const [dataHouse, setDataHouse] = useState("Gryffindor");
  const [inputSearch, setInputSearch] = useState("");
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    getDataFromApi(dataHouse).then((response) => {
      setDataList(response);
    });
  }, [dataHouse]);

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

  const dataUser = useRouteMatch(`/character/:id`);

  const characterDetail = () => {
    if (dataUser) {
      const routeIdcharacter = dataUser.params.id;
      const findIdcharacter = dataList.find((character) => {
        return character.id === routeIdcharacter;
      });
      return findIdcharacter || {};
    }
  };

  return (
    <div>
      <Header className="logo" />
      <main className="main">
        <Switch>
          <Route exact path="/">
            <Filters
              handleFilter={handleFilter}
              inputSearch={inputSearch}
              selectHouse={dataHouse}
            />
            <CharacterList characters={characterFiltered} />
          </Route>
          <Route path="/character/:id">
            <CharacterDetail characterDetail={characterDetail()} />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
