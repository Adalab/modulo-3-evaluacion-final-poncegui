import React, { useEffect, useState } from "react";
// import { Route, Switch, useRouteMatch } from "react-router-dom";
import "../styles/App.css";
import Header from "./Header";
import getDataFromApi from "../services/DataApi";
import CharacterList from "./CharacterList";

//Services

function App() {
  //Estados
  const [dataDefault, setDataDefault] = useState(["gryffindor"]);
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    getDataFromApi().then((characterData) => {
      setDataList(characterData);
      console.log(characterData);
    });
  }, []);

  return (
    <div>
      <Header className="logo" />

      <main className="main">
        <CharacterList characters={dataList} />
      </main>
    </div>
  );
}

export default App;
