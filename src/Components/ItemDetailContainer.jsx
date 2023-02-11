import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const product = {
  id: 1,
  title: "iPhone 13 256GB -Starlight",
  description: "Stunning Starlight iPhone 13 with 256GB storage.",
  price: 20,
  pictureUrl:
    "https://cdn-ipoint.waugi.com.ar/23766-large_default/iphone-13-128gb-starlight.jpg",
};

const ItemDetailContainer = () => {
  const [detailData, setDetailData] = useState([]);

  useEffect(() => {
    const getItem = new Promise((resolve) => {
      setTimeout(() => {
        resolve(product);
      }, 3000);
    });

    getItem.then((res) => setDetailData(res));
  }, []);

  return (
    <div>
      <ItemDetail data={detailData} />
    </div>
  );
};

export default ItemDetailContainer;
