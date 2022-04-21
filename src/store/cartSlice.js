/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
   cartTotalQuantity: localStorage.getItem('cartTotalQuantity')
      ? JSON.parse(localStorage.getItem('cartTotalQuantity'))
      : 0,
   cartTotalAmount: 0,
}

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addToCart(state, action) {
         const existingIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
         )
         if (existingIndex >= 0) {
            state.cartItems[existingIndex] = {
               ...state.cartItems[existingIndex],
               cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
            }
         } else {
            const tempProductItem = { ...action.payload, cartQuantity: 1 }
            state.cartItems.push(tempProductItem)
         }
         localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
         state.cartTotalQuantity += 1
         localStorage.setItem(
            'cartTotalQuantity',
            JSON.stringify(state.cartTotalQuantity)
         )
      },
      decreaseCart(state, action) {
         const itemIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
         )

         if (state.cartItems[itemIndex].cartQuantity > 1) {
            state.cartItems[itemIndex].cartQuantity -= 1
         }

         localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
      },
      removeFromCart(state, action) {
         state.cartItems.map((cartItem) => {
            if (cartItem.id === action.payload.id) {
               const nextCartItems = state.cartItems.filter(
                  (item) => item.id !== cartItem.id
               )

               state.cartItems = nextCartItems
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
            return state
         })
      },
      getTotals(state) {
         let { total, quantity } = state.cartItems.reduce(
            (cartTotal, cartItem) => {
               const { price, cartQuantity } = cartItem
               const itemTotal = price * cartQuantity

               cartTotal.total += itemTotal
               cartTotal.quantity += cartQuantity

               return cartTotal
            },
            {
               total: 0,
               quantity: 0,
            }
         )
         total = parseFloat(total)
         state.cartTotalQuantity = quantity
         if (total > 1000) {
            const discount = total - (total * 15) / 100
            state.discount = (total * 15) / 100
            state.cartTotalAmount = discount
         } else {
            state.cartTotalAmount = total
         }
      },
      clearCart(state) {
         state.cartItems = []
         localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
      },
   },
})

export const {
   addToCart,
   decreaseCart,
   removeFromCart,
   getTotals,
   clearCart,
   showDiscount,
} = cartSlice.actions

export default cartSlice.reducer
