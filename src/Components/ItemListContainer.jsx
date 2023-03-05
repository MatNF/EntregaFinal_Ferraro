import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import products from "./products.json";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "productos-apple");
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
