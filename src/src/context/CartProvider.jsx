import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cartItems, setCartItems] = useState([])

  const addItem = () => {
      console.log('hola')
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        actions: {
          addItem
        }
      }}
    >
      {children}
    </CartContext.Provider>
  )
}