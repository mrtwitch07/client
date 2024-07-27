import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';
import  restaurantySlice  from './slices/restaurantySlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    restauranty: restaurantySlice
  },
})