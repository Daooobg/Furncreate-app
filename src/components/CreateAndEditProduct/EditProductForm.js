import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  fetchEditSingleProductData,
  fetchSingleProductData,
} from '../../store/products-actions';

import classes from './EditProductForm.module.css';
import LoadProductImage from './LoadProductImage';
import Loading from '../LoadingSpinner/Loading';
import ProductForm from './ProductForm';
import Notification from '../Notification/Notification';

const EditProductForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [err, setErr] = useState(false);
  const [errors, setErrors] = useState({
    color: true,
    img: true,
    name: true,
    partNumber: true,
    price: true,
    quantity: true,
    shortDescription: true,
    warranty: true,
    description: true,
  });
  
  const changeNotificationHandler = () => {
    setErr(false);
  };

  useEffect(() => {
    dispatch(fetchSingleProductData(id));
  }, [dispatch, id]);

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
      .catch((error) => {
        changeNotificationHandler();
        setErr(error);
      });
  };

  return (
    <div className={classes.container}>
      {err && (
        <Notification closeNotification={changeNotificationHandler}>
          {err.message}
        </Notification>
      )}
      <div>
        <LoadProductImage value={product.img} />
      </div>
      <ProductForm
        submitHandler={submitHandler}
        product={product}
        setProduct={setProduct}
        errors={errors}
        setErrors={setErrors}
      />
    </div>
  );
};

export default EditProductForm;
