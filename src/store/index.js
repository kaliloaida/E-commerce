import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    cart: cartReducer,
  },
});
export default store;
