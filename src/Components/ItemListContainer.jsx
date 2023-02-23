import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import products from "./products.json"

const ItemListContainer = (props) => {

  const [items, setItems] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      // Emulate a 2 second delay for network latency
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Fetch data from a mock (static data object)
      const data = products;
      setItems(data);
    };
    fetchData();
  }, [categoriaId]);

  const catFilter = items.filter(
    (producto) => producto.category === categoriaId
  );

  return (
    <div className="itemlist-container">
      {categoriaId ? (
        <ItemList items={catFilter} />
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;

