import { Link } from 'react-router-dom';

import classes from './ProductForm.module.css';
import { label } from '../../UI/splitLabel';
import { useEffect, useState } from 'react';
import { ShoppingButtons } from '../../hooks/useButtons';

const ProductForm = ({ submitHandler, product, setProduct }) => {
  const startUrl = /^(https?:\/)?\/.*/i;

  const [errors, setErrors] = useState({
    color: false,
    img: false,
    name: false,
    partNumber: false,
    price: false,
    quantity: false,
    shortDescription: false,
    warranty: false,
    description: false,
  });

  const [isTouched, setIsTouched] = useState({
    color: false,
    img: false,
    name: false,
    partNumber: false,
    price: false,
    quantity: false,
    shortDescription: false,
    type: false,
    warranty: false,
    description: false,
  });

  const [formIsValid, setFormIsValid] = useState(false);
  useEffect(() => {
    if (
      errors.color &&
      errors.img &&
      errors.name &&
      errors.partNumber &&
      errors.price &&
      errors.quantity &&
      errors.shortDescription &&
      errors.warranty &&
      errors.description
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [errors]);

  const onChangeHandler = (e) => {
    setProduct((state) => ({ ...state, [e.target.name]: e.target.value }));

    if (e.target.name === 'name') {
      setErrors((state) => ({
        ...state,
        [e.target.name]: e.target.value.trim().length >= 2,
      }));
    } else if (e.target.name === 'partNumber') {
      setErrors((state) => ({
        ...state,
        [e.target.name]: e.target.value.trim().length >= 2,
      }));
    } else if (e.target.name === 'img') {
      setErrors((state) => ({
        ...state,
        [e.target.name]: startUrl.test(e.target.value.trim()),
      }));
    } else if (e.target.name === 'color') {
      setErrors((state) => ({
        ...state,
        [e.target.name]: e.target.value.trim().length >= 1,
      }));
    } else if (e.target.name === 'shortDescription') {
      setErrors((state) => ({
        ...state,
        [e.target.name]: e.target.value.trim().length >= 5,
      }));
    } else if (e.target.name === 'price' || e.target.name === 'warranty') {
      setErrors((state) => ({
        ...state,
        [e.target.name]: e.target.value > 0,
      }));
    } else if (e.target.name === 'quantity') {
      setErrors((state) => ({
        ...state,
        [e.target.name]: e.target.value >= 0,
      }));
    } else if (e.target.name === 'description') {
      setErrors((state) => ({
        ...state,
        [e.target.name]: e.target.value.trim().length >= 5,
      }));
    }
  };

  const onBlurHandler = (e) => {
    setIsTouched((state) => ({ ...state, [e.target.name]: true }));
  };

  return (
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
              onBlur={onBlurHandler}
            />
            <label htmlFor="name">{label('Name')}</label>
            {isTouched.name && !errors.name && (
              <p className={classes.error}>Name must be at lease 2</p>
            )}
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
              onBlur={onBlurHandler}
            />
            <label htmlFor="partNumber">{label('Part Number')}</label>
            {isTouched.partNumber && !errors.partNumber && (
              <p className={classes.error}>
                Part number must be at least 2 characters
              </p>
            )}
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
              onBlur={onBlurHandler}
            />
            <label htmlFor="type">{label('Type')}</label>
            {isTouched.email && !errors.email && (
              <p className={classes.error}>Please provide a valid email</p>
            )}
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
              onBlur={onBlurHandler}
            />
            <label htmlFor="img">{label('Image')}</label>
            {isTouched.img && !errors.img && (
              <p className={classes.error}>Please add valid image URL</p>
            )}
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
              onBlur={onBlurHandler}
            />
            <label htmlFor="color">{label('Color')}</label>
            {isTouched.color && !errors.color && (
              <p className={classes.error}>Please provide a color</p>
            )}
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
              onBlur={onBlurHandler}
            />
            <label htmlFor="shortDescription">
              {label('Short Description')}
            </label>
            {isTouched.shortDescription && !errors.shortDescription && (
              <p className={classes.error}>
                Short Description must be at least 5 characters
              </p>
            )}
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
              onBlur={onBlurHandler}
            />
            <label htmlFor="price">{label('Price')}</label>
            {isTouched.price && !errors.price && (
              <p className={classes.error}>Price must be positive number</p>
            )}
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
              onBlur={onBlurHandler}
            />
            <label htmlFor="quantity">{label('Quantity')}</label>
            {isTouched.quantity && !errors.quantity && (
              <p className={classes.error}>Quantity must be positive number</p>
            )}
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
              onBlur={onBlurHandler}
            />
            <label htmlFor="warranty">{label('Warranty')}</label>
            {isTouched.warranty && !errors.warranty && (
              <p className={classes.error}>Warranty must be positive number</p>
            )}
          </div>
          <div className={classes['form-control']}>
            <textarea
              className={product.description ? classes['span-move--up'] : ''}
              id="description"
              type="text"
              name="description"
              required
              value={product.description}
              onChange={onChangeHandler}
              onBlur={onBlurHandler}
            />
            <label htmlFor="description">{label('Description')}</label>
            {isTouched.description && !errors.description && (
              <p className={classes.error}>
                Description must have at least5 characters
              </p>
            )}
          </div>
          <div>
            <ShoppingButtons content="Submit" disabled={!formIsValid} />
            <Link to={`/catalog/${product.slug ? product.slug : ''}`}>
              <ShoppingButtons content="Go Back" />
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
