import React, { useState, useEffect } from "react";
import "./styles/ItemListContainer.css"; // Importa el archivo de estilos
import ItemList from "./ItemList";
import productsData from "./productsData.json"

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Emulate a 2 second delay for network latency
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Fetch data from a mock (static data object)
      const data = productsData.products
      setItems(data);
    };
    fetchData();
  }, []);

  return <ItemList items={items} />;
};

export default ItemListContainer;
