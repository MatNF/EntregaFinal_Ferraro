import React, { useEffect, useState } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus
} from "react-icons/ai";
import "./styles/hola.css";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));

  const decrease = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const increase = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  //COMIENZA RETURN
  return (
    <>
        <p className="quantity-desc">
          <button disabled={count <= 1} className="minus" onClick={decrease}>
            <AiOutlineMinus className="incdec_button" />
          </button>
          <span className="num">{count}</span>
          <button disabled={count >= stock} className="plus" onClick={increase}>
            <AiOutlinePlus className="incdec_button" />
          </button>
        </p>
        <div className="contStock">
          <span>Disponibles:</span>
          <span>{stock}</span>
        </div>
        <button
          disabled={stock <= 0}
          onClick={() => onAdd(count)}
          className="addCarrito"
        >
          Agregar al carrito
        </button>
    </>
  );
};

export default ItemCount;
