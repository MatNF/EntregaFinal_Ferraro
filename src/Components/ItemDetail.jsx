import React, { useState } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import "./styles/hola.css";
import headset from "../assets/headset.png";

const ItemDetail = ({ data }) => {
  var initialCount = 1;
  var stockInicial = 5;

  const [count, setCount] = useState(initialCount);
  const [stock, setStock] = useState(stockInicial);

  const decrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const increment = () => {
    if (count < stock) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  //COMIENZA LA FUNCION
  return (
    <>
      <div className="container">
        <h1>{data.title}</h1>

        <div className="quantity">
          <div className="divImagen">
            <img className="imagen-card" src={data.pictureUrl} />
          </div>
          <h3>Cantidad</h3>

          <p className="quantity-desc">
            <span className="minus" onClick={decrement}>
              <AiOutlineMinus className="incdec_button" />
            </span>
            <span className="num">{count}</span>
            <span className="plus" onClick={increment}>
              <AiOutlinePlus className="incdec_button" />
            </span>
          </p>
          <div className="contStock">
            <span>Disponibles:</span>
            <span>{stock}</span>
          </div>
          <button className="addCarrito">Agregar al carrito</button>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
