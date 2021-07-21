import React from "react";
import Main from "./views/Main";
import Add from "./views/Add";
import Detail from "./views/Detail";
import Update from "./views/Update";
import { Router } from "@reach/router";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Add path="/song/add" />
        <Detail path="/song/:id" />
        <Update path="/song/:id/update" />
      </Router>
    </div>
  );
}
export default App;
