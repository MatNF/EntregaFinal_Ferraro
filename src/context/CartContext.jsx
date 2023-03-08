import React, { useState, useContext } from "react";
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

// Funcion para vaciar el carrito
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [idOrden, setIdOrden] = useState("");

  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  };

  const totalProducts = () =>
    cart.reduce((prev, act) => prev + act.quantity, 0);

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

  // Funcion para vaciar el carrito
  const clearCart = () => setCart([]);

  // Funcion para chequear si el producto esta en el carrito o no
  const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

  // Funcion para remover el item seleccionado a remover del carrito
  const removeItem = (id) =>
    setCart(cart.filter((product) => product.id !== id));


  const setearId = (id) => setIdOrden(id);
  return (
    <CartContext.Provider
      value={{
        addItem,
        clearCart,
        isInCart,
        removeItem,
        totalPrice,
        totalProducts,
        cart,
        idOrden,
        setearId
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
