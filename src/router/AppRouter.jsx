import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { CartProvider } from '../src/context/CartProvider'
import { MenuRoutes } from '../store/routes/MenuRoutes'

export const AppRouter = () => {
  return (
    <>
      <CartProvider>
        <Routes>
          <Route path="Login" element={<LoginPage />} />
          <Route path="/*" element={<MenuRoutes />} />   
        </Routes>
      </CartProvider>
    </>
  )
}
