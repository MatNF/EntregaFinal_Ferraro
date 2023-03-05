import React, { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const Document = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const oneItem = doc(db, "productos-apple", "iPad");

    getDoc(oneItem).then((snapshot) => {
      if (snapshot.exists()) {
        const docs = snapshot.data();
        setProduct(docs);
      }
    });
  }, []);

  return (
  <div>hola</div>
  )
};

export default Document;
