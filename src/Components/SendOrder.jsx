import React, { useState } from "react";
import "./styles/hola.css";
import {
  collection,
  getFirestore,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useCartContext } from "../context/CartContext";

const SendOrder = () => {
  const { cart, totalPrice, clearCart } = useCartContext();

  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const order = {
    buyer: {
      name: name,
      email: email,
      phone: phone,
    },
    items: cart.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: product.quantity,
    })),
    total: totalPrice(),
    date: serverTimestamp(),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "id:",
      orderId,
      "\nname: ",
      name,
      "\nemail: ",
      email,
      "\nphone: ",
      phone,
      "\nproduct id: ",
      order.items.id
    );
    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
  };

  const db = getFirestore();
  const ordersCollection = collection(db, "orden");

  return (
    <div className="send-order-container">
      <h1 style={{ fontSize: "36px", fontWeight: "bold", color: "#333" }}>
        Sending Orders
      </h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre y Apellido"
          onChange={(e) => setName(e.target.value)}
          className="input-textos"
        />
        <input
          type="text"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          className="input-textos"
        />
        <input
          type="text"
          placeholder="Phone"
          onChange={(e) => setPhone(e.target.value)}
          className="input-textos"
        />
        <button
          type="submit"
          onClick={() => clearCart()}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            fontSize: "16px",
            backgroundColor: "#4CAF50",
            color: "white",
          }}
        >
          Send Information
        </button>
        <p style={{ marginTop: "10px" }}>
          <strong>Tu número de orden es:</strong> {orderId}
        </p>
      </form>
    </div>
  );
};

export default SendOrder;
