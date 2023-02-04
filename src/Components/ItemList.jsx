import React from "react";
import Item from "./Item";
import "./styles/hola.css"

const ItemList = ({ items }) => {
  return (
    <div className="containerItemList">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
