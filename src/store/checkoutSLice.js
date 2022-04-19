import { createSlice } from '@reduxjs/toolkit'

const initialLogoutState = { isCheckout: false }
const checkoutSlice = createSlice({
   name: 'check',
   initialState: initialLogoutState,
   reducers: {
      checkout(state) {
         state.isCheckout = true
      },
   },
})
export const checkouttActions = checkoutSlice.actions
export default checkoutSlice
