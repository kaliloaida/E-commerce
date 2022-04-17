import React from 'react'
import { Route,Routes  } from 'react-router-dom'
import Headers from '../components/Layout/Header'
import { Navigate } from 'react-router-dom'
import Home from '../components/pages/home/Home'
import { Products } from '../components/pages/products/Products'
import Basket from '../components/pages/basket/Basket'
const AppRouters = () => {
  return (
    <>
       <Headers/>
      
       <Routes>
        <Route path="/" element={<Navigate replace to="/home/" />} />
        <Route path="/home/*" element={<Home />} />
        <Route path="/product" element={<Products />} />
        {/* <Route path='basket' element={<Basket/>} /> */}
        {/* <Route path="/product/:productId" element={<ProductDetails />} /> */}
      </Routes>
    </>
  )
}

export default AppRouters
