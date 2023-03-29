import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Link,
  useNavigate,
  useParams,
} from 'react-router-dom';
import {
  fetchEditSingleProductData,
  fetchSingleProductData,
} from '../../store/products-actions';

import { label } from '../../UI/splitLabel';
import classes from './EditProductForm.module.css';
import LoadProductImage from './LoadProductImage';
import { productsActions } from '../../store/products-slice';
import Loading from '../LoadingSpinner/Loading';

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
    return <Loading />
  }
 
  if (notification.status === 'error') {
    return <h1>{notification.message}</h1>;
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
    dispatch(fetchEditSingleProductData(product._id, data));
    return navigate(`/catalog/${data.slug}`);
  };

  return (
    <div className={classes.container}>
      <div>
        <LoadProductImage value={product.img} />
      </div>
      <div>
        <form onSubmit={submitHandler}>
          <div className={classes['form-container']}>
            <div className={classes['form-control']}>
              <input
                className={product.name ? classes['span-move--up'] : ''}
                id="name"
                type="text"
                name="name"
                required
                value={product.name}
                onChange={onChangeHandler}
                //   onBlur={onBlurHandler}
              />
              <label htmlFor="name">{label('Name')}</label>
              {/* {isTouched.email && !errors.email && (
              <p className={classes.error}>Please provide a valid email</p>
            )} */}
            </div>
            <div className={classes['form-control']}>
              <input
                className={product.partNumber ? classes['span-move--up'] : ''}
                id="partNumber"
                type="text"
                name="partNumber"
                required
                value={product.partNumber}
                onChange={onChangeHandler}
                //   onBlur={onBlurHandler}
              />
              <label htmlFor="partNumber">{label('Part Number')}</label>
              {/* {isTouched.email && !errors.email && (
              <p className={classes.error}>Please provide a valid email</p>
            )} */}
            </div>
            <div className={classes['form-control']}>
              <input
                className={product.type ? classes['span-move--up'] : ''}
                id="type"
                type="text"
                name="type"
                required
                value={product.type}
                onChange={onChangeHandler}
                //   onBlur={onBlurHandler}
              />
              <label htmlFor="type">{label('Type')}</label>
              {/* {isTouched.email && !errors.email && (
              <p className={classes.error}>Please provide a valid email</p>
            )} */}
            </div>
            <div className={classes['form-control']}>
              <input
                className={product.img ? classes['span-move--up'] : ''}
                id="img"
                type="text"
                name="img"
                required
                value={product.img}
                onChange={onChangeHandler}
                //   onBlur={onBlurHandler}
              />
              <label htmlFor="img">{label('Image')}</label>
              {/* {isTouched.email && !errors.email && (
              <p className={classes.error}>Please provide a valid email</p>
            )} */}
            </div>
            <div className={classes['form-control']}>
              <input
                className={product.color ? classes['span-move--up'] : ''}
                id="color"
                type="text"
                name="color"
                required
                value={product.color}
                onChange={onChangeHandler}
                //   onBlur={onBlurHandler}
              />
              <label htmlFor="color">{label('Color')}</label>
              {/* {isTouched.email && !errors.email && (
              <p className={classes.error}>Please provide a valid email</p>
            )} */}
            </div>
            <div className={classes['form-control']}>
              <input
                className={
                  product.shortDescription ? classes['span-move--up'] : ''
                }
                id="shortDescription"
                type="text"
                name="shortDescription"
                required
                value={product.shortDescription}
                onChange={onChangeHandler}
                //   onBlur={onBlurHandler}
              />
              <label htmlFor="shortDescription">
                {label('Short Description')}
              </label>
              {/* {isTouched.email && !errors.email && (
              <p className={classes.error}>Please provide a valid email</p>
            )} */}
            </div>
            <div className={classes['form-control']}>
              <input
                className={product.price ? classes['span-move--up'] : ''}
                id="price"
                type="number"
                name="price"
                required
                value={product.price}
                onChange={onChangeHandler}
                //   onBlur={onBlurHandler}
              />
              <label htmlFor="price">{label('Price')}</label>
              {/* {isTouched.email && !errors.email && (
              <p className={classes.error}>Please provide a valid email</p>
            )} */}
            </div>
            <div className={classes['form-control']}>
              <input
                className={product.quantity ? classes['span-move--up'] : ''}
                id="quantity"
                type="number"
                name="quantity"
                required
                value={product.quantity}
                onChange={onChangeHandler}
                //   onBlur={onBlurHandler}
              />
              <label htmlFor="quantity">{label('Quantity')}</label>
              {/* {isTouched.email && !errors.email && (
              <p className={classes.error}>Please provide a valid email</p>
            )} */}
            </div>
            <div className={classes['form-control']}>
              <input
                className={product.warranty ? classes['span-move--up'] : ''}
                id="warranty"
                type="number"
                name="warranty"
                required
                value={product.warranty}
                onChange={onChangeHandler}
                //   onBlur={onBlurHandler}
              />
              <label htmlFor="warranty">{label('Warranty')}</label>
              {/* {isTouched.email && !errors.email && (
              <p className={classes.error}>Please provide a valid email</p>
            )} */}
            </div>
            {/* <button disabled={!formIsValid} className={classes.btn}>
            {isSubmitting ? 'Submitting...' : isLogin ? 'Register' : 'Log in'}
          </button> */}
            <div></div>
            <button className={classes.btn}>submit</button>
            <Link to={`/catalog/${product.slug}`}>Back</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductForm;
