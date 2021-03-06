import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Headers from '../layout/Header'
import Home from '../components/pages/home/Home'
import { Products } from '../components/pages/products/Products'
import Basket from '../components/pages/basket/Basket'
import Checkout from '../components/pages/checkout/Checkout'
import Services from '../components/pages/service/Services'

const AppRouters = () => {
   return (
      <>
         <Headers />

         <Routes>
            <Route path="/" element={<Navigate replace to="/home/" />} />
            <Route path="/home/*" element={<Home />} />
            <Route path="product" element={<Products />} />
            <Route path="basket" element={<Basket />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="service" element={<Services />} />
         </Routes>
      </>
   )
}

export default AppRouters
