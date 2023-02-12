import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import productsData from "./productsData.json";

const ItemDetailContainer = () => {
  const [detailData, setDetailData] = useState([]);

  const { detalleId } = useParams();

  useEffect(() => {
    const getItem = () =>
      new Promise((resolve, reject) => {
        console.log(productsData.length);
        if (productsData.length === 0) {
          reject(new Error("No hay datos"));
        } else {
          setTimeout(() => {
            const productsFiltered = productsData.filter(
              (product) => product.id == detalleId
            );
            resolve(productsFiltered);
          }, 300);
        }
      });

    const fetchData = async () => {
      try {
        const datosFetched = await getItem();
        setDetailData(datosFetched);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {detailData.length > 0 ? (
        <ItemDetail data={detailData[0]} />
      ) : (
        <div>No se encontró ningún producto con ese ID</div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
