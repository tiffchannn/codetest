import React from "react";
import Main from "./views/Main";
import Add from "./views/Add";
import { Router } from "@reach/router";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Add path="/song/add" />
      </Router>
    </div>
  );
}
export default App;
