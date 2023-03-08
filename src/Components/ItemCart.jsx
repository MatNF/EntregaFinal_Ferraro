import React from "react";
import { useCartContext } from "../context/CartContext";

const ItemCart = ({ product }) => {
  const { removeItem } = useCartContext();

  return (
    <div
      className="item-cart-container"
      style={{ color: "black", marginTop: "100px" }}
    >
      <div className="item-cart-imagen">
        <img src={product.pictureUrl} alt={product.title} />
      </div>
      <div className="item-cart-info-gral">
        <p>Título: {product.title}</p>
        <p>Precio unitario: {product.price}</p>
        <p>Cantidad: {product.quantity}</p>
        <p>Subtotal: ${product.quantity * product.price}</p>
        <button onClick={() => removeItem(product.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default ItemCart;