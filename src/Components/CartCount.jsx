import React, { useEffect, useState } from "react";
import "./styles/hola.css";

const CartCount = ({ initial, stock }) => {
  const [count, setCount] = useState(parseInt(initial));

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  return (
    <div>
      <p className="quantity-desc">
        <span>{count}</span>
      </p>
    </div>
  );
};

export default CartCount;
