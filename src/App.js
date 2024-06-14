import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import ButtonComponent from "./Components/ButtonComponent";
function App() {
  return (
    <div className="App">
      <ButtonComponent />
      <footer className="App-footer">
        <p>
          Made using React by{" "}
          <a href="https://github.com/sohamdasx">@sohamdasx</a>
        </p>
        <img src={logo} className="App-logo" alt="logo" />
      </footer>
    </div>
  );
}

export default App;
