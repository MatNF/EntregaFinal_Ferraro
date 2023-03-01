import React from "react";
import { useCartContext } from "../context/CartContext";

const CartWidget = () => {
  const { totalProducts } = useCartContext();

  return (
    <div>
      {/* <span className="material-symbols-outlined">shopping_cart</span> */}
      <span className="material-symbols-outlined">shopping_bag</span>
      <span>{totalProducts() || ""} </span>
    </div>
  );
};

export default CartWidget;
