import React from "react";
import CartWidget from "./Components/CartWidget";
import ItemCount from "./Components/ItemCount";
import ItemListContainer from "./Components/ItemListContainer";
import NavBarCopy from "./Components/NavBar copy";
import SeachBar from "./Components/SeachBar";

function App() {
  return (
    <>
    {/* <ItemCount/> */}
      <ItemListContainer />
      {/* <NavBarCopy />
      <ItemListContainer greeting="Bienvenido a mi sitio web" /> */}
    </>
  );
}

export default App;
