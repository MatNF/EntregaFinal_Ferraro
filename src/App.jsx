import React from "react";
import NavBarCopy from "./Components/NavBar copy";
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import Cart from "./Components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import CartProvider from "./context/CartContext";
import CheckoutForm from "./Components/CheckoutForm";

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
            <Route path="/cart" element={<Cart />} />
            <Route path="/order-data" element={<CheckoutForm />} />
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
