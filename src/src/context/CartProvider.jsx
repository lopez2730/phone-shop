import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cartItems, setCartItems] = useState([])

  const addItem = (data) => {
    let cellphonesCart = [...cartItems]
    const foundItem = cellphonesCart.find((item) => item.id === data.id)
    const quantity = foundItem ? foundItem.quantity + 1 : 1
    const phoneData = {
      ...data,
      quantity
    }
    if (foundItem) {
      cellphonesCart = cellphonesCart.filter((item) => item.id !== foundItem.id)
    }
    setCartItems([phoneData, ...cellphonesCart])
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}