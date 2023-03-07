import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import "./styles/hola.css";
import { useCartContext } from "../context/CartContext";

const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addItem } = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addItem(data, quantity);
    console.log(data)
  };
  //COMIENZA LA FUNCION
  return (
    <>
      <div className="container">
        <div className="quantity">
          <div className="divImagen">
            <img className="imagen-card" src={data.pictureUrl} />
          </div>
          <h1>{data.title}</h1>
          <div className="moreInfo">
            <p>{data.description}</p>
          </div>
          <div className="itemDetailPrice">
            <p>${data.price}</p>
          </div>
          <h3>Cantidad</h3>
          {goToCart ? (
            <Link to="/cart">
              <button className="great-button">Terminar compra</button>
            </Link>
          ) : (
            <ItemCount initial={1} stock={data.stock} onAdd={onAdd} />
          )}
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
