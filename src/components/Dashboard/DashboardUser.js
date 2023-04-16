import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavigationButtons } from '../../hooks/useButtons';
import DashboardData from './DashboardData';
import classes from './DashboardUser.module.css';

const DashboardUser = (props) => {
  const [text, setText] = useState(true);
  const [action, setAction] = useState();

  const actionHandler = (e) => {
    setText(false);
    if (e.target.name === 'profile') {
      setAction('profile');
    } else if (e.target.name === 'comments') {
      setAction('comments');
    } else if (e.target.name === 'purchases') {
      setAction('purchases');
    }
  };

  return (
    <div className={classes.container}>
      <div>
        <NavigationButtons
          content="Profile"
          name="profile"
          action={actionHandler}
        />
        <NavigationButtons
          content="purchase history"
          name="purchases"
          action={actionHandler}
        />
        <Link to="/">
          <NavigationButtons content="Back to homepage" />
        </Link>
      </div>
      <div>
        {text && (
          <h2>
            After pressing the buttons on the left, you can check your profile,
            change or add a delivery and billing address, and check all your
            purchase orders.
          </h2>
        )}
        {!text && <DashboardData action={action} userData={props.userData} />}
      </div>
    </div>
  );
};

export default DashboardUser;
