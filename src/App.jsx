import React from "react";
import AppNavbar from "./components/Navbar";
import Orchids from "./components/Orchids";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <h1>Orchids Gallery</h1>
      <Orchids />
    </div>
  );
}

export default App;
