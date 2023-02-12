import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "@chakra-ui/react";

const Item = ({ item }) => {
  return (
    <div className="counter">
      <div className="imagenProducto">
        <img src={item.pictureUrl} alt={item.title} />
      </div>
      <div className="infoProducto">
        <div className="titleProd">
          <h3>{item.title}</h3>
        </div>
        <div className="moreInfo">
          <p>{item.description}</p>
          <div className="itemDetailPrice">
            <p>${item.price}</p>
          </div>
        </div>
        <div className="buttonFrame">
          <Menu>
            <Link to={`/detalle/${item.id}`}>
              <button className="buttonDetails btn-4">Details</button>
            </Link>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Item;
