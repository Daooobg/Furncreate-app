import { redirect } from 'react-router-dom';
import { productsActions } from './products-slice';
import { uiActions } from './ui-slice';

export const fetchProductsData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch('http://127.0.0.1:5000/api/v1/furniture/');
      if (!response.ok) {
        throw new Error('Could not fetch data');
      }

      const data = await response.json();

      return data;
    };
    try {
      dispatch(
        uiActions.showNotification({
          status: 'loading',
          title: 'Loading!',
          message: 'Fetching data!',
        })
      );
      const products = await fetchData();

      dispatch(
        productsActions.loadProducts({
          products: products || [],
        })
      );
      dispatch(productsActions.filter());

      dispatch(
        uiActions.showNotification({
          status: '',
          title: '',
          message: '',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching cart data failed!',
        })
      );
    }
  };
};

export const fetchSingleProductData = (id) => {
  return async (dispatch) => {
    const fetchSingleData = async (id) => {
      const response = await fetch(
        `http://127.0.0.1:5000/api/v1/furniture/${id}`
      );
      if (!response.ok) {
        throw new Error('Could not fetch data');
      }
      const data = await response.json();
      return data;
    };
    try {
      const product = await fetchSingleData(id);
      // console.log(product);
      dispatch(
        productsActions.loadSingleProduct({
          singleProduct: { ...product } || {},
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching cart data failed!',
        })
      );
    }
  };
};

export const fetchEditSingleProductData = (id, authData) => {
  return async (dispatch) => {
    const fetchEditSingleData = async (id) => {
      const token = localStorage.getItem('auth');
      const response = await fetch(
        `http://127.0.0.1:5000/api/v1/furniture/${id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
          },
          body: JSON.stringify(authData),
        }
      );
      console.log('response', response);
      if (!response.ok) {
        throw new Error('Could not fetch data');
      }
      const data = await response.json();
      console.log('data', data);
      return data;
    };
    try {
      const product = await fetchEditSingleData(id, authData);
      console.log('productfetch', product);
      dispatch(productsActions.updateProducts(product));
      // dispatch(
      //   productsActions.loadSingleProduct({
      //     singleProduct: { ...product } || {},
      //   })
      // );
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Error!',
          message: 'Fetching cart data failed!',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching cart data failed!',
        })
      );
    }
  };
};
