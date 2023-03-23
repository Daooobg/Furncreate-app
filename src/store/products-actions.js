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
      dispatch(productsActions.filter())

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
      const response = await fetch(`http://127.0.0.1:5000/api/v1/furniture/${id}`);
      if (!response.ok) {
        throw new Error('Could not fetch data');
      }
      const data = await response.json();
      return data;
    };
    try {
      const product = await fetchSingleData(id);
      console.log(product);
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

