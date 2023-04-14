import { useState } from 'react';
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
          content="Comments"
          name="comments"
          action={actionHandler}
        />
        <NavigationButtons
          content="purchase history"
          name="purchases"
          action={actionHandler}
        />
      </div>
      <div>
        {text && (
          <h2>
            You can change your profile, add a delivery address, and check your
            comments and orders after pressing the buttons on the left.
          </h2>
        )}
        {!text && <DashboardData action={action} userData={props.userData} />}
      </div>
    </div>
  );
};

export default DashboardUser;
