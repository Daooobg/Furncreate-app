import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  fetchEditSingleProductData,
  fetchSingleProductData,
} from '../../store/products-actions';

import classes from './EditProductForm.module.css';
import LoadProductImage from './LoadProductImage';
import { productsActions } from '../../store/products-slice';
import Loading from '../LoadingSpinner/Loading';
import ProductForm from './ProductForm';

const EditProductForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchSingleProductData(id));
  }, [dispatch]);

  const productData = useSelector((state) => state.products.singleProduct);
  const notification = useSelector((state) => state.ui.notification);

  const [product, setProduct] = useState(productData);
  useEffect(() => {
    setProduct(productData);
  }, [productData]);

  if (notification.status === 'loading') {
    return <Loading />;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const slug = `${product.type}-${product.name}-${product.partNumber}`;
    dispatch(fetchEditSingleProductData(product._id, product))
      .then((res) => {
        if (res) {
          return navigate(`/catalog/${slug}`);
        }
      })
      .catch((error) => console.log('error', error.message));
  };

  return (
    <div className={classes.container}>
      <div>
        <LoadProductImage value={product.img} />
      </div>
      <ProductForm
        submitHandler={submitHandler}
        product={product}
        setProduct={setProduct}
      />
    </div>
  );
};

export default EditProductForm;
