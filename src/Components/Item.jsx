import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Menu } from "@chakra-ui/react";
import "./styles/hola.css";
import FavoriteHeart from "./FavoriteHeart";

const Item = ({ item }) => {
  return (
    <div className="counter">
      <FavoriteHeart />
      <div className="imagenProducto">
        <div className="imagen-producto-2">
          <img src={item.pictureUrl} alt={item.title} />
        </div>
      </div>
      <div className="infoProducto">
        <div className="titleProd">
          <h3>{item.title}</h3>
        </div>
        <div className="moreInfo">
          <p>{item.description}</p>
        </div>
      </div>
      <div className="pruebadiv">
        <Menu>
          <Link to={`/detalle/${item.id}`}>
            <button className="botoner bt4">Detalles</button>
          </Link>
        </Menu>
      </div>
    </div>
  );
};

export default Item;