import React from "react";
// import Main from "./Router/Main";
// import Notes from "./Notes/Notes";
// import WebMain from "./WebApp/WebMain";
import Covid from "./CovidApi/Covid";
// import Pokemon from "./Pokemon/Pokemon";
import Pagging from "./pagination/Pagging";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="App">
        {/* <Notes /> */}
        {/* <WebMain /> */}
        <Pagging />
        <Covid />
        {/* <Pokemon /> */}
        {/* <Main /> */}
      </div>
    </>
  );
}

export default App;
