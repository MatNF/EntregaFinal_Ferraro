import React from "react";
import CartWidget from "./Components/CartWidget";
import ItemListContainer from "./Components/ItemListContainer";
import NavBarCopy from "./Components/NavBar copy";
import SeachBar from "./Components/SeachBar";

function App() {
  return (
    <>
      <NavBarCopy />
      <ItemListContainer greeting="Bienvenido a mi sitio web" />
    </>
  );
}

export default App;
