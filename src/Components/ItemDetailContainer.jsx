import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import productsData from "./productsData.json";

const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  const { detalleId } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productsData);
      }, 2000);
    });

    getData.then((res) =>
      setData(
        res.find((productsData) => productsData.id === parseInt(detalleId))
      )
    );
  }, []);

  return (
    <>
      <ItemDetail data={data} />
    </>
  );
};

export default ItemDetailContainer;
