import { useEffect, useState } from 'react';

import classes from './Dashboard.module.css';
import { getLoginUserData } from '../../services/userServices';
import DashboardActions from './DashboardActions';

const Dashboard = () => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    getLoginUserData().then((data) => setUserData(data));
  }, []);

  return (
    <div className={classes.container}>
      <h1>Hello {userData.name}</h1>
      <div className={classes.actions}>
        <DashboardActions userData={userData} />
      </div>
    </div>
  );
};

export default Dashboard;
