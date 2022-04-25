import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'
import {
   addToCart,
   clearCart,
   decreaseCart,
   getTotals,
   removeFromCart,
} from '../../../store/cartSlice'
import Card from '../../UI/card/Card'

export const GlobalStyle = createGlobalStyle`
  body{
   background-color:#FFFF5A;
  }
`
const Cart = () => {
   const cart = useSelector((state) => state.cart)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getTotals())
   }, [cart, dispatch])

   const handleAddToCart = (product) => {
      dispatch(addToCart(product))
   }
   const handleDecreaseCart = (product) => {
      dispatch(decreaseCart(product))
   }
   const handleRemoveFromCart = (product) => {
      dispatch(removeFromCart(product))
   }
   const handleClearCart = () => {
      dispatch(clearCart())
   }

   return (
      <>
         <GlobalStyle />
         <Card>
            <CartContainer>
               <h2>Shopping Cart</h2>
               {cart.cartItems.length === 0 ? (
                  <CartEmpty>
                     <p>Your cart is currently empty</p>
                     <div className="start-shopping">
                        <Link to="/">
                           <span>Start Shopping</span>
                        </Link>
                     </div>
                  </CartEmpty>
               ) : (
                  <div>
                     <Title>
                        <h3 className="product-title">Product</h3>
                        <h3 className="price">Price</h3>
                        <h3 className="quantity">Quantity</h3>
                        <h3 className="total">Total</h3>
                     </Title>
                     <div className="cart-items">
                        {cart.cartItems &&
                           cart.cartItems.map((cartItem) => (
                              <CartItem key={cartItem.id}>
                                 <div className="cart-product">
                                    <img
                                       src={cartItem.image}
                                       alt={cartItem.name}
                                    />
                                    <div>
                                       <h3>{cartItem.name}</h3>
                                       <p>{cartItem.desc}</p>
                                       <button
                                          type="button"
                                          onClick={() =>
                                             handleRemoveFromCart(cartItem)
                                          }
                                       >
                                          Remove
                                       </button>
                                    </div>
                                 </div>
                                 <div className="cart-product-price">
                                    ${cartItem.price}
                                 </div>
                                 <div className="cart-product-quantity">
                                    <button
                                       type="button"
                                       onClick={() =>
                                          handleDecreaseCart(cartItem)
                                       }
                                    >
                                       -
                                    </button>

                                    <div className="count">
                                       {cartItem.cartQuantity}
                                    </div>
                                    <button
                                       onClick={() => handleAddToCart(cartItem)}
                                       type="button"
                                    >
                                       +
                                    </button>
                                 </div>
                                 <div className="cart-product-total-price">
                                    ${cartItem.price * cartItem.cartQuantity}
                                 </div>
                              </CartItem>
                           ))}
                     </div>
                     <CartSummary>
                        <CartCheckout>
                           <div className="subtotal">
                              <span>Subtotal</span>
                              <span className="amount">
                                 ${cart.cartTotalAmount.toFixed(2)}
                              </span>
                              <br />

                              {cart.cartTotalAmount > 1000 && (
                                 <p className="discount">
                                    Discount: $
                                    {cart.discount && cart.discount.toFixed(2)}
                                 </p>
                              )}
                           </div>
                           <p>Taxes and shipping calculated at checkout</p>

                           <Link to="/checkout">
                              <button type="button">Check out</button>
                           </Link>

                           <ContinueShop>
                              <Link to="/product">
                                 <span>Continue Shopping</span>
                              </Link>
                              <span>OR</span>
                              <button
                                 type="button"
                                 className="clear-btn"
                                 onClick={() => handleClearCart()}
                              >
                                 Clear Cart
                              </button>
                           </ContinueShop>
                        </CartCheckout>
                     </CartSummary>
                  </div>
               )}
            </CartContainer>
         </Card>
      </>
   )
}

export default Cart

const CartContainer = styled.div`
   background-color: #070121;
   padding: 4rem 4rem;
   h2 {
      font-weight: 400;
      font-size: 30px;
      text-align: center;
      color: #64e279;
   }
`
const Title = styled.div`
   margin: 2rem 0 1rem 1rem;
   color: #64e279;
   display: flex;
   flex-direction: row;
   display: grid;
   grid-template-columns: 1fr 2.8fr 1fr 3fr;
   column-gap: 0.1rem;
   padding: 20px;
   && h3 {
      font-size: 14px;
      font-weight: 400;
      text-transform: uppercase;
      align-items: center;
   }
`

const CartItem = styled.div`
   display: grid;
   align-items: center;
   grid-template-columns: 1fr 3fr 1fr 3fr;
   column-gap: 0.1rem;
   border-top: 1px solid rgb(187, 187, 187);
   padding: 1rem 0;
   color: #64e279;
   .product-title {
      padding-left: 1rem;
   }
   .total {
      /* padding-right: 1rem; */
      /* justify-self:; */
   }
   .cart-product {
      display: flex;
   }
   .cart-product img {
      width: 100px;
      max-width: 100%;
      margin-right: 1rem;
   }
   .cart-product h3 {
      font-weight: 400;
   }
   .cart-product button {
      border: none;
      outline: none;
      margin-top: 0.8rem;
      cursor: pointer;
      background: none;
      color: #2ecf64;
   }
   .cart-product button:hover {
      color: #64e279;
   }
   .cart-product-quantity {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      width: 130px;
      max-width: 100%;
      border: 0.5px solid rgb(177, 177, 177);
      border-radius: 5px;
      color: #38e17a;
   }
   .cart-product-quantity button {
      border: none;
      outline: none;
      background: none;
      padding: 0.7rem 1.5rem;
      cursor: pointer;
      color: #38e17a;
   }
   .cart-product-quantity .count {
      padding: 0.7rem 0;
   }
   .cart-product-total-price {
      /* padding-right: 0.5rem; */
      /* justify-self: right; */
      font-weight: 700;
   }
`
const CartSummary = styled.div`
   background-color: red;
   flex-direction: columns;
   margin-bottom: 100px;
   margin: 0 auto;
   width: 500px;
   height: 200px;
   border-radius: 5px;
   font-weight: 400;
   letter-spacing: 1.15px;
   border: 0.5px solid rgb(177, 177, 177);
   color: #50053d;
   background: none;
   font-size: 20px;
   outline: none;
   cursor: pointer;
`
const CartCheckout = styled.div`
   margin-bottom: 100px;
   background-color: #c7ff00;
   width: 500px;
   && div {
      padding: 20px;
      font-size: 20px;
      grid-template-columns: 1fr 2.8fr 1fr 1fr;
      column-gap: 2rem;
      padding: 20px;
   }
   && p {
      font-size: 14px;
      font-weight: 200;
      margin: 0.5rem 0;
   }

   button {
      width: 50%;
      height: 40px;
      border-radius: 5px;
      font-weight: 400;
      letter-spacing: 1.15px;
      background-color: #4b70e2;
      color: #f9f9f9;
      border: none;
      outline: none;
      cursor: pointer;
   }
`
const ContinueShop = styled.div`
   padding: 20px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   .start-shopping {
      width: 100%;
      height: 40px;
      border-radius: 5px;
      font-weight: 400;
      letter-spacing: 1.15px;
      background-color: #4b70e2;

      cursor: pointer;
   }
   .clear-btn {
      width: 130px;
      height: 40px;
      border-radius: 5px;
      font-weight: 400;
      letter-spacing: 1.15px;
      border: 0.5px solid rgb(177, 177, 177);
      color: gray;
      background: none;
      outline: none;
      cursor: pointer;
   }
`
const CartEmpty = styled.div`
   font-size: 20px;
   margin-top: 2rem;
   color: rgb(84, 84, 84);
   display: flex;
   flex-direction: column;
   align-items: center;
`
