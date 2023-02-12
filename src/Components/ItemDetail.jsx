import React, { useState } from "react";
import ItemCountCopy from "./ItemCountCopy";
import "./styles/hola.css";

const ItemDetail = ({ data }) => {
  const onAdd = (quantity) => {
    console.log(`agregaste ${quantity} unidades al carrito`);
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
          <ItemCountCopy initial={1} stock={data.stock} onAdd={onAdd} />
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
