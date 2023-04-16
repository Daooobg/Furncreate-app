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
      const token =JSON.parse(localStorage.getItem('auth'));
      const response = await fetch(
        `http://127.0.0.1:5000/api/v1/furniture/${id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            "Authorization": token.AccessToken,
          },
          body: JSON.stringify(authData),
        }
      );
      if (!response.ok) {
        throw new Error('Could not send data');
      }
      const data = await response.json();
      return data;
    };
    try {
      dispatch(
        uiActions.showNotification({
          status: 'loading',
          title: 'loading!',
          message: 'loading cart data failed!',
        })
      );
      const product = await fetchEditSingleData(id, authData);
      dispatch(productsActions.updateProducts(product));
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Fetching cart data failed!',
        })
      );
      dispatch(productsActions.filter());
      return product;
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: error.message,
        })
      );
      throw new Error(error.message);
    }
  };
};

export const fetchCreateSingleProductData = (data) => {
  return async (dispatch) => {
    const fetchCreateSingleData = async (product) => {
      const token =JSON.parse(localStorage.getItem('auth'));
      const response = await fetch(`http://127.0.0.1:5000/api/v1/furniture/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token.AccessToken,
        },
        body: JSON.stringify(product),
      });
      if (!response.ok) {
        throw new Error('Could not send data');
      }
      const data = await response.json();
      dispatch(productsActions.addProduct(data));
      dispatch(productsActions.filter());
      return data;
    };
    try {
      const product = await fetchCreateSingleData(data);
      return product;
    } catch (error) {
      throw new Error(error.message);
    }
  };
};

export const fetchCreateCommentData = (slug, data) => {
  return async (dispatch) => {
    const fetchCreateCommentData = async (product) => {
      const token =JSON.parse(localStorage.getItem('auth'));
      const response = await fetch(`http://127.0.0.1:5000/api/v1/furniture/${slug}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token.AccessToken,
        },
        body: JSON.stringify(product),
      });
      if (!response.ok) {
        throw new Error('Could not send data');
      }
      const data = await response.json();
      // dispatch(productsActions.addProduct(data));
      // dispatch(productsActions.filter());
      return data;
    };
    try {
      const product = await fetchCreateCommentData(data);
      return product;
    } catch (error) {
      throw new Error(error.message);
    }
  };
};

export const deleteProductData = (id) => {
  return async (dispatch) => {
    const deleteProduct = async (id) => {
      const token =JSON.parse(localStorage.getItem('auth'));
      const response = await fetch(
        `http://127.0.0.1:5000/api/v1/furniture/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token.AccessToken,
          },
        }
      );
      if (!response.ok) {
        throw new Error('Could not send data');
      }

      // dispatch(productsActions.addProduct(data));
      dispatch(productsActions.removeProduct(id))
      dispatch(productsActions.filter());
    };
    try {
      const product = await deleteProduct(id);
      return product;
    } catch (error) {
      throw new Error(error.message);
    }
  };
};
