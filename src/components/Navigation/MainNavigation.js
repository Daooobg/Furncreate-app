import { useState, useEffect } from 'react';
import { Link, useRouteLoaderData } from 'react-router-dom';
import { GiShoppingCart } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';

import classes from './MainNavigation.module.css';
import Cart from '../Cart/Cart';
import { cartActions } from '../../store/cart';

function MainNavigation() {
  const result = useRouteLoaderData('root');
  const [token, setToken] = useState('');
  const shoppingBag = useSelector((state) => state.cart.totalProducts);

  useEffect(() => {
    setToken(result);
  }, [result]);
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const onChangeHandler = () => {
    setHamburgerMenu((prevHamburgerMenu) => !prevHamburgerMenu);
  };

  const logoutHandler = () => {
    localStorage.removeItem('auth');
    setHamburgerMenu((prevHamburgerMenu) => !prevHamburgerMenu);
  };

  const dispatch = useDispatch();
  const showShoppingBagHandler = () => {
    dispatch(cartActions.toggle());
  };

  return (
    <>
      {shoppingBag > 0 && (
        <>
          <Cart />
          <span className={classes['shopping-cart-quantity']}>
            {shoppingBag}
          </span>
          <GiShoppingCart
            onClick={showShoppingBagHandler}
            className={classes['shopping-cart']}
          />
        </>
      )}
      <nav
        className={`${classes.navbar} ${
          hamburgerMenu && classes['changed-navbar']
        }`}
      >
        <div onClick={onChangeHandler} className={classes['hamburger-menu']}>
          <div
            className={`${classes.line}  ${hamburgerMenu && classes['line-1']}`}
          ></div>
          <div
            className={`${classes.line}  ${hamburgerMenu && classes['line-2']}`}
          ></div>
          <div
            className={`${classes.line}  ${hamburgerMenu && classes['line-3']}`}
          ></div>
        </div>
        <ul className={classes['nav-list']}>
          <li className={classes['nav-item']}>
            <Link
              to="/"
              onClick={onChangeHandler}
              className={classes['nav-link']}
            >
              Home
            </Link>
          </li>
          <li className={classes['nav-item']}>
            <Link
              to="/catalog"
              onClick={onChangeHandler}
              className={classes['nav-link']}
            >
              Catalog
            </Link>
          </li>
          <li className={classes['nav-item']}>
            <Link
              to="/"
              onClick={onChangeHandler}
              className={classes['nav-link']}
            >
              About Us
            </Link>
          </li>
          {!token && (
            <li className={classes['nav-item']}>
              <Link
                to="/auth?mode=login"
                onClick={onChangeHandler}
                className={classes['nav-link']}
              >
                Login
              </Link>
            </li>
          )}
          {!token && (
            <li className={classes['nav-item']}>
              <Link
                to="/auth?mode=register"
                onClick={onChangeHandler}
                className={classes['nav-link']}
              >
                Register
              </Link>
            </li>
          )}

          {token && (
            <li className={classes['nav-item']}>
              <Link
                to="/"
                onClick={logoutHandler}
                className={classes['nav-link']}
              >
                Logout
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}

export default MainNavigation;
