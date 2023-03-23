import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './products-slice';
import uiSlice from './ui-slice';

const store = configureStore({
  reducer: { ui: uiSlice.reducer, products: productsSlice.reducer },
});

export default store;
