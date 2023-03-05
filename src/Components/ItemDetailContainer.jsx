import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import products from "./products.json";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { detalleId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const oneItem = doc(db, "productos-apple", detalleId);
    getDoc(oneItem).then((snapshot) => {
      if (snapshot.exists()) {
        const docs = snapshot.data();
        setData(docs);
      }
    });
  }, [detalleId]);

  return (
    <div className="cuerpo-item-detail-container">
      <ItemDetail data={data} />
    </div>
  );
};

export default ItemDetailContainer;
