import React from "react";

const Item = ({ item }) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      <img src={item.pictureUrl} alt={item.title} />
    </div>
  );
};

export default Item;
