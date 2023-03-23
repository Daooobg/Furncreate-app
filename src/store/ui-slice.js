import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: { cartIsVisible: false, notification: {} },
    reducers: {
    //   toggle(state) {
    //     state.cartIsVisible = !state.cartIsVisible;
    //   },
      showNotification(state, action) {
        state.notification = {
          status: action.payload.status,
          title: action.payload.title,
          message: action.payload.message,
        };
      },
    },
  });
  
  export const uiActions = uiSlice.actions;
  export default uiSlice;