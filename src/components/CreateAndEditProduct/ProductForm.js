import { Link } from 'react-router-dom';

import classes from './EditProductForm.module.css';
import { label } from '../../UI/splitLabel';
import { useState } from 'react';

const ProductForm = ({ submitHandler, product, onChangeHandler }) => {
 



  return (
    <div>
      <form  onSubmit={submitHandler}>
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
  );
};

export default ProductForm;
