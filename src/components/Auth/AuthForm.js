import { useEffect, useState } from 'react';
import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useSearchParams,
} from 'react-router-dom';
import validator from 'validator';
import Modal from '../../UI/ModalAuth';
import { label } from '../../UI/splitLabel';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const data = useActionData();
  const navigation = useNavigation();
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'register';
  const isSubmitting = navigation.state === 'submitting';

  const [formIsValid, setFormIsValid] = useState(false);

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    password: false,
    repeatPassword: false,
    passwordsMatch: false,
  });

  const [isTouched, setIsTouched] = useState({
    name: false,
    email: false,
    password: false,
    repeatPassword: false,
    passwordsMatch: false,
  });

  useEffect(() => {
    if (isLogin) {
      if (errors.name && errors.email && errors.passwordsMatch) {
        setFormIsValid(true);
      } else {
        setFormIsValid(false);
      }
    } else {
      if (errors.email && errors.password) {
        setFormIsValid(true);
      } else {
        setFormIsValid(false);
      }
    }
  }, [isLogin, errors]);

  const onChangeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
    if (e.target.name === 'email') {
      setErrors((state) => ({
        ...state,
        [e.target.name]: validator.isEmail(e.target.value),
      }));
    } else if (e.target.name === 'name') {
      setErrors((state) => ({
        ...state,
        [e.target.name]: e.target.value.trim().length > 2,
      }));
    } else if (e.target.name === 'password') {
      setErrors((state) => ({
        ...state,
        [e.target.name]: e.target.value.trim().length > 5,
        passwordsMatch: e.target.value.trim() === values.repeatPassword,
      }));
    } else if (e.target.name === 'repeatPassword') {
      setErrors((state) => ({
        ...state,
        [e.target.name]: e.target.value.trim().length > 5,
        passwordsMatch: e.target.value.trim() === values.password,
      }));
    }
  };

  const onBlurHandler = (e) => {
    setIsTouched((state) => ({ ...state, [e.target.name]: true }));
  };

  return (
    <Modal>
      <Link className={classes.cancel} to={-1}>
        X
      </Link>
      <h1>{isLogin ? 'Register' : 'Log in'}</h1>
      {data && data.error && <li>{data.error}</li>}
      <Form method="post">
        {isLogin && (
          <div className={classes['form-control']}>
            <input
              className={values.name ? classes['span-move--up'] : ''}
              id="name"
              type="text"
              name="name"
              required
              value={values.name}
              onChange={onChangeHandler}
              onBlur={onBlurHandler}
            />
            <label htmlFor="name">{label('Name')}</label>
            {isTouched.name && !errors.name && (
              <p className={classes.error}>
                Name should be at least 3 characters long!
              </p>
            )}
          </div>
        )}
        <div className={classes['form-control']}>
          <input
            className={values.email ? classes['span-move--up'] : ''}
            id="email"
            type="email"
            name="email"
            required
            value={values.email}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
          />
          <label htmlFor="email">{label('Email')}</label>
          {isTouched.email && !errors.email && (
            <p className={classes.error}>Please provide a valid email</p>
          )}
        </div>
        <div className={classes['form-control']}>
          <input
            className={values.password ? classes['span-move--up'] : ''}
            id="password"
            type="password"
            name="password"
            required
            value={values.password}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
          />
          <label htmlFor="password">{label('Password')}</label>
          {isTouched.password && !errors.password && (
            <p className={classes.error}>
              Password should be at least 6 characters long!
            </p>
          )}
        </div>
        {isLogin && (
          <div className={classes['form-control']}>
            <input
              className={values.repeatPassword ? classes['span-move--up'] : ''}
              id="repeatPassword"
              type="password"
              name="repeatPassword"
              required
              value={values.repeatPassword}
              onChange={onChangeHandler}
              onBlur={onBlurHandler}
            />
            <label htmlFor="repeatPassword">{label('Repeat Password')}</label>
            {isTouched.repeatPassword && !errors.repeatPassword && (
              <p className={classes.error}>
                Password should be at least 6 characters long!
              </p>
            )}
            {errors.repeatPassword && !errors.passwordsMatch && (
              <p className={classes.error}>Password not match</p>
            )}
          </div>
        )}

        <button disabled={!formIsValid} className={classes.btn}>
          {isSubmitting ? 'Submitting...' : isLogin ? 'Register' : 'Log in'}
        </button>

        <p className={classes.text}>
          {isLogin ? 'You have an account' : "Don't have an account"}

          <Link
            to={`?mode=${isLogin ? 'login' : 'register'}`}
            className={classes.forward}
          >
            {isLogin ? 'Login' : 'Register'}
          </Link>
        </p>
      </Form>
    </Modal>
  );
};

export default AuthForm;
