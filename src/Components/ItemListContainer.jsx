import React, { useState, useEffect } from "react";
import "./styles/ItemListContainer.css"; // Importa el archivo de estilos
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Emulate a 2 second delay for network latency
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Fetch data from a mock (static data object)
      const data = [
        {
          id: 1,
          title: "Product 1",
          description: "Description 1",
          price: 20,
          pictureUrl:
            "https://www.yieldify.com/wp-content/uploads/2020/06/product-detail-page-icon.svg",
        },
        {
          id: 2,
          title: "Product 2",
          description: "Description 2",
          price: 25,
          pictureUrl:
            "https://www.yieldify.com/wp-content/uploads/2020/06/product-detail-page-icon.svg",
        },
        {
          id: 3,
          title: "Product 3",
          description: "Description 3",
          price: 30,
          pictureUrl:
            "https://www.yieldify.com/wp-content/uploads/2020/06/product-detail-page-icon.svg",
        },
      ];
      setItems(data);
    };
    fetchData();
  }, []);

  return <ItemList items={items} />;
};

export default ItemListContainer;
