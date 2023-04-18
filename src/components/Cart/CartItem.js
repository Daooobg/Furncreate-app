import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';
import { MdOutlineRemoveShoppingCart } from 'react-icons/md';
import classes from './CartItem.module.css';
import { useState } from 'react';
import { formatPrice } from '../../UI/helpers';
import { ShoppingButtons } from '../../hooks/useButtons';

const CartItem = (props) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);

  const increaseHandler = () => {
    dispatch(cartActions.increaseAmount(props.id));
  };
  const decreaseHandler = () => {
    if (props.amount === 1) {
      setActive(true);
    } else {
      dispatch(cartActions.decreaseAmount(props.id));
    }
  };

  const removeProductHandler = () => {
    dispatch(cartActions.removeProduct(props.id));
  };
  const confirmHandler = () => {
    setActive(true);
  };
  const cancelHandler = () => {
    setActive(false);
  };

  const Confirm = (props) => {
    return (
      <>
        <div>
          <h4>Are you still want to remove {props.product}</h4>
          <ShoppingButtons action={removeProductHandler} content="Yes" />
          <ShoppingButtons action={cancelHandler} content="No" />
        </div>
      </>
    );
  };

  return (
    <>
      <li className={classes['cart-item']}>
        <img src={props.img} alt={props.product} className={classes.image} />
        {!active && (
          <div>
            <h2>{props.name}</h2>
            <div className={classes.actions}>
              <ShoppingButtons action={decreaseHandler} content="-" />
              <ShoppingButtons action={increaseHandler} content="+" />
            </div>
          </div>
        )}
        <div>
          <div className={classes["text-container"]}>
            <h5>Price</h5>
            <h5>Total</h5>
          </div>
          <div className={classes.summary}>
            <span className={classes.price}>{formatPrice(props.price)}</span>
            <span className={classes.amount}>x {props.amount}</span>
            <span className={classes.price}>{formatPrice(props.total)}</span>
          </div>
        </div>
        {!active && (
          <ShoppingButtons
            action={confirmHandler}
            content={<MdOutlineRemoveShoppingCart />}
          ></ShoppingButtons>
        )}
        {active && <Confirm product={props.name} />}
      </li>
    </>
  );
};

export default CartItem;
