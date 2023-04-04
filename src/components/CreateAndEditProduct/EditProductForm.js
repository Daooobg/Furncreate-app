import { useEffect } from 'react';
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

  const product = useSelector((state) => state.products.singleProduct);
  const notification = useSelector((state) => state.ui.notification);

  if (notification.status === 'loading') {
    return <Loading />;
  }

  const onChangeHandler = (e) => {
    const payload = { name: e.target.name, value: e.target.value };
    dispatch(productsActions.changeSingleProduct(payload));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      color: product.color,
      img: product.img,
      name: product.name,
      partNumber: product.partNumber,
      price: product.price,
      quantity: product.quantity,
      shortDescription: product.shortDescription,
      slug: `${product.type}-${product.name}-${product.partNumber}`,
      type: product.type,
      warranty: product.warranty,
    };
    dispatch(fetchEditSingleProductData(product._id, data))
      .then((res) => {
        if (res) {
          return navigate(`/catalog/${data.slug}`);
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

export default EditProductForm;
