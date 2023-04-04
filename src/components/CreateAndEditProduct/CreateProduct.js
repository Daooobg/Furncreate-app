import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useNavigation } from 'react-router-dom';
import {
  fetchCreateSingleProductData,

} from '../../store/products-actions';
import classes from './EditProductForm.module.css';
import LoadProductImage from './LoadProductImage';
import ProductForm from './ProductForm';

const CreateProduct = () => {
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
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setProduct((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchCreateSingleProductData(product))
      .then((res) => {
        if (res) {
          return navigate(`/catalog/`);
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
        onChangeHandler={onChangeHandler}
        submitHandler={submitHandler}
        product={product}
      />
    </div>
  );
};

export default CreateProduct;
