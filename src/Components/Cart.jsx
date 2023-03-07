import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";

const Cart = () => {
  const { cart, totalPrice, totalProducts } = useCartContext();

  if (cart.length === 0) {
    return (
      <div style={{ marginTop: "100px", textAlign: "center" }}>
        <p>No hay elementos en el carrito</p>
        <Link to={"/"}>
          <p>Continuar comprando</p>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1 className="ache1">Shopping Cart - ({totalProducts()} items)</h1>
      <div className="dispo-cart-container">
        <div className="datos-carrito">
          {cart.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </div>
        <div className="datos-summary">
          <OrderSummary price={totalPrice()} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
