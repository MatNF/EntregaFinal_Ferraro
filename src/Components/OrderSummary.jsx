import React from "react";
import { Button } from "@chakra-ui/react";
import "./styles/hola.css";
import { Link } from "react-router-dom";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const OrderSummary = ({ price }) => {
  return (
    <div className="order-summary-container">
      <h1 className="ache1">Order Summary</h1>
      <div className="price-div">
        <p style={{fontWeight:600}}>Importe Total</p>
        <p>$ {price}</p>
      </div>
      <div className="button-checkout">
        <Link to={"/order-data"}>
          <Button colorScheme="teal" w="100%" size="md">
            <p>Checkout</p>
            <ArrowForwardIcon boxSize={6} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;
