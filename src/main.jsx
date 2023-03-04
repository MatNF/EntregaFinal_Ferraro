import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider } from '@chakra-ui/react'
import { initializeApp } from "firebase/app";git

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMMTkxFviGQpDe_J3Bm3RR7ZHIVfAaqVE",
  authDomain: "ecommerce-coder-23fb3.firebaseapp.com",
  projectId: "ecommerce-coder-23fb3",
  storageBucket: "ecommerce-coder-23fb3.appspot.com",
  messagingSenderId: "254001634122",
  appId: "1:254001634122:web:08b807f8f0337950913fb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
