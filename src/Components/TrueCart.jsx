import React from "react";
import "./styles/hola.css";
import { IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import CartCount from "./CartCount";

const TrueCart = () => {
  return (
    <div className="cart-container">
      <h1 className="ache1">Shopping Cart</h1>
      <div className="product-cart">
        <div className="product-cart-box">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ecommerce-coder-23fb3.appspot.com/o/Ipads%2F11-inch-ipad-pro-wi-fi-128gb-silver.png?alt=media&token=970d923e-19b0-460c-b9d2-8c6ad9246f7d"
            alt="Ipad"
          />
        </div>
        <div className="product-cart-box p2">
          <div>
            <p style={{ fontSize: "11pt", fontWeight: "bold" }}>
              titulo del producto
            </p>
            <p style={{ fontSize: "10pt", fontWeight: "400" }}>category</p>
          </div>
          <div className="env-regalo">
            <span className="material-symbols-outlined">redeem</span>
            <p style={{ fontSize: "9pt" }}>Add gift wrapping</p>
          </div>
        </div>
        <div className="product-cart-box">
          <div className="counter-cart">
            <CartCount initial={1} stock={5} />
          </div>
        </div>
        <div className="product-cart-box">
            <div className="cart-price">
                US$154
            </div>
        </div>

        <div className="product-cart-box">
          <div className="close-icon">
            <IconButton aria-label="Search database" icon={<CloseIcon />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrueCart;
