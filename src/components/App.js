import React, { useEffect, useState } from "react";
import "../styles/App.css";
import Header from "./Header";
import getDataFromApi from "../services/DataApi";
// import LocalStorage from "./LocalStorage";

//Services

function App() {
  //Estados
  const [dataList, setDataList] = useState(["gryffindor"]);

  //useEffect Fetch
  useEffect(() => {
    getDataFromApi().then((characterData) => {
      setDataList(characterData);
      console.log(characterData);
    });
  }, []);

  //Funciones manejadoras de filtros

  return (
    <div>
      <Header className="logo" />

      <main className="main"></main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
