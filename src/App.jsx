import React from "react";
import NavBarCopy from "./Components/NavBar copy";
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import Cart from "./Components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroBanner from "./Components/HeroBanner";
import NewCard from "./Components/NewCard";
import FooterBanner from "./Components/FooterBanner";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarCopy />
        <Routes>
        <Route path="/" element={
            <>
              <HeroBanner />
              <ItemListContainer />
              <FooterBanner/>
              <Footer/>
            </>
          } exact />
          <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
          <Route path="/cart" element={<NewCard/>} />
          <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
