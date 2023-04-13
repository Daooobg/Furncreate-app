import ActionProducts from './ActionProducts';
import ActionUsers from './ActionUsers';
import classes from './DashboardData.module.css';


const DashboardData = (props) => {
  return (
    <>
      {props.action === 'products' && <div className={classes["product-container"]}><ActionProducts /> </div>}
      {props.action === 'users' && <div className={classes["user-container"]}><ActionUsers /> </div>}
    </>
  );
};

export default DashboardData;
