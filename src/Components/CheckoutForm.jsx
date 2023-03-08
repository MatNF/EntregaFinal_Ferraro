import React, { useState } from "react";
import "./styles/hola.css";
import { Input, Button } from "@chakra-ui/react";
import {
  collection,
  getFirestore,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useCartContext } from "../context/CartContext";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CheckoutForm = () => {
  const { cart, totalPrice, totalProducts, clearCart, setearId, idOrden } = useCartContext();

  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
//   const[ordenEnviada,setOrdenEnviada] = (false);

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
    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
    };

    
    console.log(idOrden)
  const db = getFirestore();
  const ordersCollection = collection(db, "orden");

  return (

    <div className="checkout-container">
      <h1 className="ache1">Checkout Information</h1>

      <h2 className="ache2">Resumen de la orden</h2>
      <p>
        - Productos seleccionados: <strong>{totalProducts()}</strong>{" "}
      </p>
      <p>
        - Importe final a pagar: <strong>${totalPrice()}</strong>
      </p>
      <p style={{ marginTop: "15px", marginBottom: "10px", fontWeight: "500" }}>
        Por favor, complete la información a continuación y presione el botón
        para finalizar la compra.
      </p>

      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel m="10px 10px 0px 10px">Nombre</FormLabel>
          <Input
            w="100%"
            m="10px"
            type="text"
            placeholder="Nombre"
            onChange={(e) => setName(e.target.value)}
          />
          <FormLabel m="10px 10px 0px 10px">Email</FormLabel>
          <Input
            w="100%"
            m="10px"
            type="email"
            placeholder="Ejemplo: juancarlos@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormLabel m="10px 10px 0px 10px">Teléfono</FormLabel>
          <Input
            w="100%"
            m="10px"
            type="tel"
            placeholder="teléfono"
            onChange={(e) => setPhone(e.target.value)}
          />
        </FormControl>

        {/* <Link to="/order-confirmation"> */}
        <Button type="submit" onClick={() => clearCart()}>
            Finalizar Compra
          </Button>
        {/* </Link> */}

        <p style={{ marginTop: "10px" }}>
          <strong>Tu número de orden es:</strong> {orderId}
        </p>
      </form>
    </div>
  );
};

export default CheckoutForm;
