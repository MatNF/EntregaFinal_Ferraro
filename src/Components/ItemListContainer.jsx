import React from "react";
import "./ItemListContainer.css"; // Importa el archivo de estilos

const ItemListContainer = (props) => {
  return (
    <div className="container">
      <p className="greeting">{props.greeting}</p>
    </div>
  );
};

export default ItemListContainer;
