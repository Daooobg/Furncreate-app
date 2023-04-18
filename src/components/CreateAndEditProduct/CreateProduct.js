import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCreateSingleProductData } from '../../store/products-actions';
import Notification from '../Notification/Notification';
import classes from './CreateProduct.module.css';
import LoadProductImage from './LoadProductImage';
import ProductForm from './ProductForm';

const CreateProduct = () => {
  const [err, setErr] = useState(false);
  const changeNotificationHandler = () => {
    setErr(false);
  };
  const [product, setProduct] = useState({
    color: '',
    img: '',
    name: '',
    partNumber: '',
    price: '',
    quantity: '',
    shortDescription: '',
    type: '',
    warranty: '',
    description: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchCreateSingleProductData(product))
      .then((res) => {
        if (res) {
          return navigate(`/catalog/`);
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
        setProduct={setProduct}
        product={product}
      />
    </div>
  );
};

export default CreateProduct;
