import React from "react";
import "./styles/hola.css";
import { Button } from "@chakra-ui/react";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  const { idOrden } = useCartContext();
  console.log({ idOrden });

  return (
    <div className="order-confirmation-container">
      <h1>Tu Orden se ha completado correctamente!</h1>
      <h2>Tu pedido ha sido realizado con exito.</h2>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/ecommerce-coder-23fb3.appspot.com/o/image-removebg-preview.png?alt=media&token=8b88a3c8-6400-4195-955c-d81635da4cd1"
        alt="celebration image"
      />
      <Link to="/">
        <Button>Volver al inicio</Button>
      </Link>

      <p style={{ marginTop: "10px" }}>
        <strong>Tu número de orden es:</strong> {idOrden}
      </p>
    </div>
  );
};

export default OrderConfirmation;
