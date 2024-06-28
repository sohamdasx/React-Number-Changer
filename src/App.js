import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import ButtonComponent from "./Components/ButtonComponent";
import FooterComponent from "./Components/FooterComponent";
function App() {
  return (
    <div className="App">
      <ButtonComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
