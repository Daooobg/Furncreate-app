import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import { formatPrice } from '../../UI/helpers';

const Cart = () => {
  const {
    cartIsVisible,
    shoppingBag: shoppingProducts,
    totalAmount,
  } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const hideShoppingBagHandler = () => {
    dispatch(cartActions.toggle());
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {shoppingProducts.map((item) => (
        <CartItem
          key={item.id}
          name={item.product}
          amount={item.quantity}
          price={item.price}
          img={item.img}
          total={item.total}
          id={item.id}
        />
      ))}{' '}
    </ul>
  );
  return (
    <>
      {cartIsVisible && (
        <>
          <div
            className={classes.backdrop}
            onClick={hideShoppingBagHandler}
          ></div>
          <div className={classes.modal}>
            <div
              className={classes['close-shopping']}
              onClick={hideShoppingBagHandler}
            >
              x
            </div>
            <div className={classes.content}>
              {cartItems}
              <div className={classes.total}>
                <span>Total Amount:</span>
                <span>{formatPrice(totalAmount)}</span>
              </div>
              <div className={classes['shopping-actions']}>
                <button>Buy now</button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Cart;
