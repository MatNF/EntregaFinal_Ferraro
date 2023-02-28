import React, { useState, useContext } from "react";
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ Children }) => {
  const [cart, setCart] = useState([]);

  //Funcion para agregar items al carrito.
  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((product) => {
          return product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product;
        })
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  console.log("carrito: ", cart);

  // Funcion para vaciar el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Funcion para chequear si el producto esta en el carrito o no
  const isInCart = (id) => {
    cart.find((product) => product.id === id) ? true : false;
  };

  // Funcion para remover el item seleccionado a remover del carrito
  const removeItem = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  return (
    <CartContext.Provider value={{ addItem, clearCart, isInCart, removeItem }}>
      {Children}
    </CartContext.Provider>
  );
};

export default CartProvider;
