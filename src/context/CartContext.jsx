import React, { Children } from 'react'
export const CartContext = React.createContext([]);

const CartProvider = () => {
  return (
 <CartContext.Provider>
    {Children}
 </CartContext.Provider>
  )
}

export default CartProvider