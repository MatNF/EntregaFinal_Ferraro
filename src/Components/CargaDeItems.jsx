import React, { useState } from "react";
import "./styles/hola.css";
import {
  collection,
  getFirestore,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
const CargaDeItems = () => {
  const itemsCargar = [
    {
      title: "iPhone 13 128GB Starlight",
      description: "Increíble iPhone 13 Starlight con 128GB de almacenamiento.",
      price: 799,
      pictureUrl:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-coder-23fb3.appspot.com/o/Iphones%2Fiphone-13-128gb-starlight.png?alt=media&token=ce3360f8-0ab0-4670-9cf0-b362ce3c6d6a",
      category: "iPhone",
      stock: 5,
    },
    {
      title: "iPhone 13 Pro 256GB Gold",
      description:
        "Impresionante iPhone 13 Pro en color oro con 256GB de almacenamiento.",
      price: 1199,
      pictureUrl:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-coder-23fb3.appspot.com/o/Iphones%2Fiphone-13-pro-256gb-gold.png?alt=media&token=2dec50b0-6ef9-4584-953f-67fe83332764",
      category: "iPhone",
      stock: 3,
    },
    {
      title: "iPhone 13 Pro 128GB Silver",
      description:
        "Elegante iPhone 13 Pro en color plata con 128GB de almacenamiento.",
      price: 1099,
      pictureUrl:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-coder-23fb3.appspot.com/o/Iphones%2Fiphone-13-pro-128gb-silver.png?alt=media&token=1973a450-ea70-4035-90d7-891836949c7b",
      category: "iPhone",
      stock: 2,
    },
    {
      title: "iPhone 13 Pro Max 256GB Graphite",
      description:
        "Poderoso iPhone 13 Pro Max en color grafito con 256GB de almacenamiento.",
      price: 1299,
      pictureUrl:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-coder-23fb3.appspot.com/o/Iphones%2Fiphone-13-pro-max-256gb-graphite.png?alt=media&token=c1bf6ae6-c746-4dfe-aa86-edba6c765e38",
      category: "iPhone",
      stock: 4,
    },
    {
      title: "Apple Watch Nike SE GPS + Cellular 40mm Silver",
      description:
        "Innovador Apple Watch Nike SE con GPS y celular en un elegante color plata con banda deportiva Nike en platino puro y negro.",
      price: 429,
      pictureUrl:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-coder-23fb3.appspot.com/o/iWatches%2Fapple-watch-nike-se-gps-cellular-40mm-silver-aluminium-casepure-platinumblack-nike-sport-band.png?alt=media&token=dbaf29df-1c86-404f-87d8-8365a5ec4e0a",
      category: "Watch",
      stock: 6,
    },
    {
      title: "Apple Watch SE GPS 40mm Gold Aluminium",
      description:
        "Increíble Apple Watch SE con GPS en color oro con banda deportiva en color Starlight.",
      price: 329,
      pictureUrl:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-coder-23fb3.appspot.com/o/iWatches%2Fapple-watch-se-gps-40mm-gold-aluminium-casestarlight-sport-band.png?alt=media&token=ae2a067c-bed5-4100-b0ed-c47cd1eb076e",
      category: "Watch",
      stock: 4,
    },
    {
      title: "Apple Watch Series 7 GPS 41mm Midnight Aluminium",
      description:
        "El nuevo Apple Watch Series 7 con GPS en color medianoche con banda deportiva a juego.",
      price: 449,
      pictureUrl:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-coder-23fb3.appspot.com/o/iWatches%2Fapple-watch-series-7-gps-41mm-midnight-aluminium-casemidnight-sport-band.png?alt=media&token=f1db3039-8ee3-4dd6-acfe-5e90dc2c38fc",
      category: "Watch",
      stock: 7,
    },
    {
      title: "MacBook Air 13 M2 Chip 8 Core CPU 8 Core GPU 256GB Space Grey",
      description:
        "Increíble MacBook Air 13 con chip M2, CPU de 8 núcleos, GPU de 8 núcleos y 256GB de almacenamiento en un elegante color gris espacial.",
      price: 1199,
      pictureUrl:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-coder-23fb3.appspot.com/o/Macbooks%2Fmacbook-air-13-m2-chip-8-core-cpu-8-core-gpu-256gb-space-grey.png?alt=media&token=66954c88-c80d-4b43-9c81-690cb0290f4f",
      category: "MacBook",
      stock: 3,
    },
    {
      title: "MacBook Air 13 M2 Chip 8 Core CPU 8 Core GPU 256GB Silver",
      description:
        "Increíble MacBook Air 13 con chip M2, CPU de 8 núcleos, GPU de 8 núcleos y 256GB de almacenamiento en un elegante color gris espacial.",
      price: 1199,
      pictureUrl:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-coder-23fb3.appspot.com/o/Macbooks%2FMacBook%20Air%2013%20M2%20chip%208-core%20CPU%208-core%20GPU%20256GB%20-%20Silver..png?alt=media&token=ed8a7a5b-09c5-4aea-a870-aa7946100648",
      category: "MacBook",
      stock: 3,
    },
    {
      title:
        "MacBook Pro 16 Apple M1 Pro Chip 10Core CPU 16Core GPU 1TB SSD Silver",
      description:
        "Poderoso MacBook Pro 16 con chip Apple M1 Pro, CPU de 10 núcleos, GPU de 16 núcleos, 1TB de almacenamiento SSD en un elegante color plateado.",
      price: 2599,
      pictureUrl:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-coder-23fb3.appspot.com/o/Macbooks%2Fmacbook-pro-16-apple-m1-pro-chip-10core-cpu-16core-gpu-1tb-ssd-silver.png?alt=media&token=5f2d42c0-20b7-4a22-9235-2d1831961fab",
      category: "MacBook",
      stock: 2,
    },
    {
      title:
        "MacBook Pro 16 Apple M1 Pro Chip 10Core CPU 16Core GPU 512GB SSD Space Grey",
      description:
        "Poderoso MacBook Pro 16 con chip Apple M1 Pro, CPU de 10 núcleos, GPU de 16 núcleos, 512GB de almacenamiento SSD en un elegante color gris espacial.",
      price: 2399,
      pictureUrl:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-coder-23fb3.appspot.com/o/Macbooks%2Fmacbook-pro-16-apple-m1-pro-chip-10core-cpu-16core-gpu-512gb-ssd-space-grey.png?alt=media&token=cb844ab3-59da-4f57-9951-da8bc1b4dcab",
      category: "MacBook",
      stock: 5,
    },
    {
      title: "11-inch iPad Pro Wi-Fi 128GB Silver",
      description:
        "Increíble iPad Pro de 11 pulgadas con conectividad Wi-Fi, 128GB de almacenamiento y elegante color plateado.",
      price: 799,
      pictureUrl:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-coder-23fb3.appspot.com/o/Ipads%2F11-inch-ipad-pro-wi-fi-128gb-silver.png?alt=media&token=970d923e-19b0-460c-b9d2-8c6ad9246f7d",
      category: "iPad",
      stock: 4,
    },
    {
      title: "11-inch iPad Pro Wi-Fi + Cellular 128GB Space Grey",
      description:
        "Increíble iPad Pro de 11 pulgadas con conectividad Wi-Fi y celular, 128GB de almacenamiento y elegante color gris espacial.",
      price: 999,
      pictureUrl:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-coder-23fb3.appspot.com/o/Ipads%2F11-inch-ipad-pro-wi-fi-cellular-128gb-space-grey.png?alt=media&token=4d288516-fc4e-4232-bca6-f703a134537f",
      category: "iPad",
      stock: 3,
    },
    {
      title: "10.9-inch iPad Air Wi-Fi + Cellular 64GB Space Grey",
      description:
        "Fantástico iPad Air de 10.9 pulgadas con conectividad Wi-Fi y celular, 64GB de almacenamiento y elegante color gris espacial.",
      price: 749,
      pictureUrl:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-coder-23fb3.appspot.com/o/Ipads%2F109-inch-ipad-air-wi-fi-cellular-64gb-space-grey.png?alt=media&token=d4b9ca6b-2341-4b40-963d-70f1467882e5",
      category: "iPad",
      stock: 6,
    },
    {
      title: "iPad 10.2 Wi-Fi 64GB 9na Gen Space Gray",
      description:
        "Increíble iPad de 10.2 pulgadas de 9na generación con conectividad Wi-Fi, 64GB de almacenamiento y elegante color gris espacial.",
      price: 329,
      pictureUrl:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-coder-23fb3.appspot.com/o/Ipads%2Fipad-102-wi-fi-64gb-9na-gen-space-gray.png?alt=media&token=016a3374-65de-4c33-a1cb-d568976a978c",
      category: "iPad",
      stock: 8,
    },
  ];

  const handleClick = (e) => {
    itemsCargar.map((producto) => addDoc(ordersCollection, producto));
  };

  const db = getFirestore();
  const ordersCollection = collection(db, "products");

  return (
    <div>
      <button style={{marginTop:'100px'}} onClick={handleClick}>carga de items</button>
    </div>
  );
};

export default CargaDeItems;
