import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { appFetch } from '../api/appFetch'

export const getAsyncProducts = createAsyncThunk(
   'product/getAsyncProducts',
   async () => {
      try {
         return await appFetch({
            path: 'products',
            method: 'GET',
            params: { limit: 20 },
         })
      } catch (error) {
         return error.message
      }
   }
)

const initState = {
   products: [],
   status: null,
   error: null,
   isLoading: false,
}
const productSlice = createSlice({
   name: 'product',
   initialState: initState,
   reducers: {},
   extraReducers: {
      [getAsyncProducts.pending]: (state) => {
         state.isLoading = true
      },

      // -----------------------------------------------------------------
      [getAsyncProducts.fulfilled]: (state, { payload }) => {
         state.status = 'Success'
         state.products = payload
         state.isLoading = false
      },

      // -----------------------------------------------------------------
      [getAsyncProducts.rejected]: (state) => {
         state.error = 'Error'
      },
   },
})
export const productActions = productSlice.actions
export default productSlice
