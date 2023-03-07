import React, { useEffect, useState } from "react";
import { IconButton } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
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
        {/* <button disabled={count <= 1} onClick={decrease}>
        <IconButton size='sm' icon={<MinusIcon color='rgb(43, 201, 170)' />} />
        </button> */}
        <span>{count}</span>
        {/* <button disabled={count >= stock} onClick={increase}>
        <IconButton size='sm' icon={<AddIcon color='rgb(43, 201, 170)' />} />
        </button> */}
      </p>
    </div>
  );
};

export default CartCount;
