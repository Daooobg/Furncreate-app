import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    filteredProducts: [],
    singleProduct: {},
    sort: 'empty',
    filters: {
      text: '',
      category: 'all',
      color: 'all',
      min_price: 0,
      max_price: 0,
      price: 0,
    },
  },
  reducers: {
    loadProducts(state, action) {
      let maxPrice = action.payload.products.map((product) => product.price);
      maxPrice = Math.max(...maxPrice);
      state.products = action.payload.products;
      state.filteredProducts = action.payload.products;
      state.filters.max_price = maxPrice;
      state.filters.price = maxPrice;
    },
    loadSingleProduct(state, action) {
      state.singleProduct = action.payload.singleProduct;
    },
    sortAllProducts(state, action) {
      state.sort = action.payload;
      let tempProducts = state.filteredProducts;
      if (action.payload === 'price-lowest') {
        tempProducts = tempProducts.sort((a, b) => a.price - b.price);
      }
      if (action.payload === 'price-highest') {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);
      }
      if (action.payload === 'name-a') {
        tempProducts = tempProducts.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }
      if (action.payload === 'name-z') {
        tempProducts = tempProducts.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }
      if (action.payload === 'new') {
        tempProducts = tempProducts.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      }
      state.filteredProducts = tempProducts;
    },
    filter(state, action) {
      let tempProducts = state.products;
      if (state.filters.text !== '') {
        tempProducts = tempProducts.filter((product) => {
          return product.name.toLowerCase().startsWith(state.filters.text);
        });
      }
      if (state.filters.category !== 'all') {
        tempProducts = tempProducts.filter(
          (product) => product.type === state.filters.category
        );
      }
      if (state.filters.color !== 'all') {
        tempProducts = tempProducts.filter(
          (product) => product.color === state.filters.color
        );
      }
      tempProducts = tempProducts.filter(
        (product) => product.price <= state.filters.price
      );
      state.filteredProducts = tempProducts;
    },
    updateFiltersValue(state, action) {
      console.log(action);
      state.filters[action.payload.name] = action.payload.value;
    },
  },
});

export const productsActions = productsSlice.actions;
export default productsSlice;
