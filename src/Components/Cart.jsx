import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import ItemCart from "./ItemCart";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

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
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p>Total price: {totalPrice()}</p>
      <Link to={"/order-data"}>
        <button>Realizar Pedido</button>
      </Link>
    </div>
  );
};

export default Cart;
// {
//       "id": 1,
//       "title": "iPhone 13 256GB -Starlight",
//       "description": "Stunning Starlight iPhone 13 with 256GB storage.",
//       "price": 999,
//       "pictureUrl": "https://cdn-ipoint.waugi.com.ar/23766-large_default/iphone-13-128gb-starlight.jpg",
//       "category": "iPhone",
//       "stock": 4
//     },
