import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart';
import productsSlice from './products-slice';
import uiSlice from './ui-slice';

const store = configureStore({
  reducer: { ui: uiSlice.reducer, products: productsSlice.reducer, cart: cartSlice.reducer},
});

export default store;
