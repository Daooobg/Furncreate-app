import { useState } from 'react';
import { Link, useRouteLoaderData } from 'react-router-dom';
// import img from '../../images/ralph-ravi-kayden-zSG-kd-L6vw-unsplash.jpg';

import classes from './MainNavigation.module.css';
// import NewsletterSignup from './NewsletterSignup';

function MainNavigation() {
  
  const result = useRouteLoaderData('root');
  const [token, setToken] = useState(result)
  

  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const onChangeHandler = () => {
    setHamburgerMenu((prevHamburgerMenu) => !prevHamburgerMenu);
  };

  const logoutHandler = () => {
    localStorage.removeItem('auth');
    setHamburgerMenu((prevHamburgerMenu) => !prevHamburgerMenu);
    
  };

  return (
    <>
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
              to="/"
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
                to="/"
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
                to="/"
                onClick={onChangeHandler}
                className={classes['nav-link']}
              >
                Register
              </Link>
            </li>
          )}

          {token && <li className={classes['nav-item']}>
            <Link
              to="/"
              onClick={logoutHandler}
              className={classes['nav-link']}
            >
              Logout
            </Link>
          </li>}
        </ul>
      </nav>
    </>
  );
}

export default MainNavigation;
