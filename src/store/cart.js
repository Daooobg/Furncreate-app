import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartIsVisible: false,
    shoppingBag: [],
    totalAmount: 0,
    totalProducts: 0,
  },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    removeProduct(state, action) {
      const products = state.shoppingBag;
      let totalAmount = state.totalAmount;
      let totalProducts = state.totalProducts;
      const temp = products.filter((product) => {
        if (product.id === action.payload) {
          totalAmount = totalAmount - product.total;
          totalProducts = totalProducts - product.quantity;
          return;
        }
        return product;
      });
      state.totalAmount = totalAmount;
      state.shoppingBag = temp;
      state.totalProducts = totalProducts;
    },
    increaseAmount(state, action) {
      const products = state.shoppingBag;
      let totalAmount = state.totalAmount;
      let totalProducts = state.totalProducts;
      products.map((product) => {
        if (product.id === action.payload) {
          if (product.quantity < product.inStock) {
            product.quantity++;
            product.total = product.quantity * product.price;
            totalAmount = totalAmount + product.price;
            totalProducts = totalProducts + 1;
          }
        }
        return product;
      });
      state.shoppingBag = products;
      state.totalAmount = totalAmount;
      state.totalProducts = totalProducts;
    },
    decreaseAmount(state, action) {
      const products = state.shoppingBag;
      let totalAmount = state.totalAmount;
      let totalProducts = state.totalProducts;
      products.map((product) => {
        if (product.id === action.payload) {
          product.quantity--;
          product.total = product.quantity * product.price;
          totalAmount = totalAmount - product.price;
          totalProducts = totalProducts - 1;
          return product;
        }
        return product;
      });
      state.shoppingBag = products;
      state.totalAmount = totalAmount;
      state.totalProducts = totalProducts;
    },

    addProduct(state, action) {
      const product = action.payload;
      const tempCart = state.shoppingBag;
      let tempAmount = state.totalAmount;
      let totalProducts = state.totalProducts;
      const tempItems = state.shoppingBag.find(
        (item) => item.id === product.id
      );
      if (tempItems) {
        tempCart.map((item) => {
          if (item.id === product.id) {
            item.quantity = item.quantity + product.quantity;
            item.total = item.total + product.quantity * product.price;
            tempAmount = tempAmount + product.quantity * product.price;
            totalProducts = totalProducts + product.quantity;
          }
        });
      } else {
        product.total = product.quantity * product.price;
        tempCart.push(product);
        tempAmount = tempAmount + product.quantity * product.price;
        totalProducts = totalProducts + product.quantity;
      }
      state.shoppingBag = tempCart;
      state.totalAmount = tempAmount;
      state.totalProducts = totalProducts;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
