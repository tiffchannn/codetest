import React from "react";
import Main from "./views/Main";
import Add from "./views/Add";
import Detail from "./views/Detail";
import { Router } from "@reach/router";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Add path="/song/add" />
        <Detail path="/song/:id" />
      </Router>
    </div>
  );
}
export default App;
