import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { detalleId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const oneItem = doc(db, "products", detalleId);
    getDoc(oneItem).then((snapshot) => {
      if (snapshot.exists()) {
        setData({ id: snapshot.id, ...snapshot.data() });
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
