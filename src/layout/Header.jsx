import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import shoppingCart from '../assets/basket/shoppingCart.gif'
import {
   Nav,
   NavbarContainer,
   NavLogo,
   NavIcon,
   MobileIcon,
   NavMenu,
   NavItem,
   NavItemBtn,
   NavLink,
   NavBtnLink,
} from './styles/HeaderNavbarStyle'
import { Button } from './styles/GlobalStyles'

function Header() {
   const [click, setClick] = useState(false)
   const [button, setButton] = useState(true)

   const handleClick = () => setClick(!click)
   const closeMobileMenu = () => setClick(false)

   const showButton = () => {
      if (window.innerWidth <= 960) {
         setButton(false)
      } else {
         setButton(true)
      }
   }

   useEffect(() => {
      showButton()
   }, [])
   const { cartTotalQuantity } = useSelector((state) => state.cart)

   return (
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      <IconContext.Provider value={{ color: '#fff' }}>
         <Nav>
            <NavbarContainer>
               <NavLogo to="/" onClick={closeMobileMenu}>
                  <NavIcon />
                  YOUR LOGO
               </NavLogo>
               <MobileIcon onClick={handleClick}>
                  {click ? <FaTimes /> : <FaBars />}
               </MobileIcon>
               <NavMenu onClick={handleClick} click={click}>
                  <NavItem>
                     <NavLink to="/" onClick={closeMobileMenu}>
                        Home
                     </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink to="/product" onClick={closeMobileMenu}>
                        Products
                     </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink to="/service" onClick={closeMobileMenu}>
                        Services
                     </NavLink>
                  </NavItem>
                  <NavItemBtn>
                     {button ? (
                        <NavBtnLink to="basket">
                           <Button primary>
                              <img src={shoppingCart} alt="" />
                              <span>{cartTotalQuantity}</span>
                           </Button>
                        </NavBtnLink>
                     ) : (
                        <NavBtnLink to="basket">
                           <Button onClick={closeMobileMenu} fontBig primary>
                              <img src={shoppingCart} alt="" />
                              <span>{cartTotalQuantity}</span>
                           </Button>
                        </NavBtnLink>
                     )}
                  </NavItemBtn>
               </NavMenu>
            </NavbarContainer>
         </Nav>
      </IconContext.Provider>
   )
}

export default Header
