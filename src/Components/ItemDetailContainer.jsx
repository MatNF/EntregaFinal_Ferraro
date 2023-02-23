import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import productsData from "./productsData.json";
import products from "./products.json"

const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  const { detalleId } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });

    getData.then((res) =>
      setData(
        res.find((products) => products.id === parseInt(detalleId))
      )
    );
  }, []);

  return (
    <div className="cuerpo-item-detail-container">
      <ItemDetail data={data} />
    </div>
  );
};

export default ItemDetailContainer;
