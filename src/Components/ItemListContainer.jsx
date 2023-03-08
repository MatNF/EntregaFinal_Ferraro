import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "products");
    if (categoriaId) {
      const queryFilter = query(queryCollection, where('category', '==', categoriaId));
      getDocs(queryFilter).then((snapshot) => {
        setItems(snapshot.docs.map((product) => ({ id: product.id, ...product.data() })));
      });
    } else {
      getDocs(queryCollection).then((snapshot) => {
        setItems(snapshot.docs.map((product) => ({ id: product.id, ...product.data() })));
      });
    }
  }, [categoriaId]);

  return (
    <div className="itemlist-container">
      <ItemList items={items}/>
    </div>
  );
};

export default ItemListContainer;
