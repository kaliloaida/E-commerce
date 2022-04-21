import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import logo from '../assets/logo/logo.png'
import search from '../assets/search/search.gif'
import shoppingCart from '../assets/basket/shoppingCart.gif'

const Section = styled.section`
   width: 100%;
   height: 70px;
   position: fixed;
   display: flex;
   justify-content: space-between;
   align-items: center;

   background-color: #baf46e;
`
const Logos = styled.div`
   display: flex;
   justify-content: space-between;
   && h3 {
      padding-top: 10px;
      font-family: 'Playfair Display', serif;
      color: #e40045;
   }
`
const Logo = styled.img`
   width: 50px;
   height: 50px;
   margin-left: 20px;
`
const Sidebar = styled.div`
   align-items: center;
   display: flex;
   justify-content: space-between;
   && img {
      width: 40px;
      height: 40px;
      margin: 10px 30px 10px 10px;
   }
`

const StyledLink = styled(Link)`
   font-family: 'Josefin Sans', sans-serif;
   font-family: 'Lobster', cursive;
   font-family: 'Playfair Display', serif;
   width: 100px;
   font-size: 20px;
   color: #268600;
`
const Div = styled.div`
   align-items: center;
   display: flex;
   justify-content: space-around;
   && span {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 25px;
      width: 25px;
      border-radius: 50%;
      background: yellow;
      font-size: 14px;
      font-weight: 700;
      color: black;
      margin-right: 20px;
   }
`
function Header() {
   const { cartTotalQuantity } = useSelector((state) => state.cart)

   return (
      <nav>
         <Section>
            <Logos>
               <Logo src={logo} alt="" />
               <h3>Flower.Shop</h3>
            </Logos>

            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="product">Products</StyledLink>
            <StyledLink to="service">Services</StyledLink>

            <Sidebar>
               <span>
                  <input type={search} />
                  <img src={search} alt="" />
               </span>

               <Link to="basket">
                  <Div>
                     <img src={shoppingCart} alt="" />
                     <span>{cartTotalQuantity}</span>
                  </Div>
               </Link>
            </Sidebar>
         </Section>
      </nav>
   )
}

export default Header
