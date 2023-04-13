import { useState } from 'react';
import { NavigationButtons } from '../../hooks/useButtons';
import classes from './DashboardAdmin.module.css';
import DashboardData from './DashboardData';

const DashboardAdmin = () => {
  const [text, setText] = useState(true);
  const [action, setAction] = useState();

  const actionHandler = (e) => {
    setAction({ products: false, users: false });
    setText(false);
    if (e.target.name === 'products') {
      setAction('products');
    } else if (e.target.name === 'users') {
      setAction('users');
    }
  };

  return (
    <>
      <div className={classes['buttons-container']}>
        <NavigationButtons
          name="products"
          content="products"
          action={actionHandler}
        />
        <NavigationButtons
          name="users"
          content="users"
          action={actionHandler}
        />
      </div>
      {text && (
        <div>
          <h2 className={classes['button-introduction']}>
            {`<---You are admin and you can check create edit and delete products when you
            pres Product button`}
          </h2>

          <h2 className={classes['button-introduction']}>
            {`<---You are admin and you can see all users and change  users role when you
            pres Users button`}
          </h2>
        </div>
      )}
      {!text && <DashboardData action={action} />}
    </>
  );
};

export default DashboardAdmin;
