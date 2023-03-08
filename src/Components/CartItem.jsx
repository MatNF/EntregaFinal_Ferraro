import React from "react";
import "./styles/hola.css";
import { IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import CartCount from "./CartCount";
import { useCartContext } from "../context/CartContext";

const CartItem = ({ product }) => {
const { removeItem } = useCartContext();

  return (
    <div className="product-cart">
      <div className="product-cart-box img-cart">
        <img src={product.pictureUrl} alt="Ipad" />
      </div>
      <div className="product-cart-box p2">
        <div className="p-cart" >
          <p style={{ fontSize: "10pt", fontWeight: "bold"}}>
            {product.title}
          </p>
          <p style={{ fontSize: "10pt", fontWeight: "400" }}>
            {product.category}
          </p>
        </div>
        <div className="env-regalo">
          <span className="material-symbols-outlined">redeem</span>
          <p style={{ fontSize: "8pt" }}>Add gift wrapping</p>
        </div>
      </div>
      <div className="product-cart-box">
        <div className="counter-cart">
          <CartCount initial={product.quantity} stock={product.stock} />
        </div>
      </div>
      <div className="product-cart-box">
        <div className="cart-price">
        $ {product.price}</div>
      </div>

      <div className="product-cart-box">
        <div className="close-icon">
          <IconButton onClick={() => removeItem(product.id)}
            size="sm"
            icon={<CloseIcon color="rgb(43, 201, 170)" />}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
