import React, { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./styles/hola.css";

const CartCount = ({ initial, stock }) => {
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

  return (
    <div>
      <p className="quantity-desc">
        <button disabled={count <= 1} onClick={decrease}>
          <AiOutlineMinus className="incdec_button" />
        </button>
        <span>{count}</span>
        <button disabled={count >= stock} onClick={increase}>
          <AiOutlinePlus className="incdec_button" />
        </button>
      </p>
    </div>
  );
};

export default CartCount;
