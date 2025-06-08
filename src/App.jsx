import React from "react";
import AppNavbar from "./components/Navbar";
import GalleryHeader from "./components/GalleryHeader";
import Orchids from "./components/Orchids";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <GalleryHeader />
      <Orchids />
    </div>
  );
}

export default App;
