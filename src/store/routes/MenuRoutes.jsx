import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui/components/Navbar'
import { FooterInfo } from '../../ui/components/FooterInfo'
import { AboutPage } from '../pages/AboutPage'
import { ContactPage } from '../pages/ContactPage'
import { SearchPage } from '../pages/SearchPage'
import ProductsPage from '../pages/ProductsPage'
import { CartPage } from '../pages/CartPage'


export const MenuRoutes = () => {
  return (
    <>
        <Navbar />
        <div className='container'>
            <Routes>
                <Route path="Products" element={<ProductsPage />} />
                <Route path="Contact" element={<ContactPage />} />
                <Route path="About" element={<AboutPage />} />

                <Route path="search" element={<SearchPage />} />
                <Route path="Cart" element={<CartPage />} />

                <Route path="/" element={<Navigate to="Products" />} />
            </Routes>
        </div>
        <FooterInfo />
    </>
  )
}
