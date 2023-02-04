import React from "react";

const Item = ({ item }) => {
  return (
    <div className="counter">
      <div className="infoProducto">
        <div className="titleProd">
          <h3>{item.title}</h3>
        </div>
        <div className="moreInfo">
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
        </div>
      </div>

      <div className="imagenProducto">
        <img src={item.pictureUrl} alt={item.title} />
      </div>
    </div>
  );
};

export default Item;
