import React from "react";
import NavBarCopy from "./Components/NavBar copy";
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import Cart from "./Components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import CartProvider from "./context/CartContext";
import SendOrder from "./Components/SendOrder";
import { getStorage, ref, getDownloadURL } from 'firebase/storage'
import CargaDeItems from "./Components/CargaDeItems";
import TrueCart from "./Components/TrueCart";



function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBarCopy />
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route
              path="/categoria/:categoriaId"
              element={<ItemListContainer />}
            />
            <Route path="/cart" element={<TrueCart />} />
            <Route path="/order-data" element={<SendOrder/>}/>
            <Route
              path="/detalle/:detalleId"
              element={<ItemDetailContainer />}
            />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
} 

export default App;
