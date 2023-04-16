import ActionComments from './ActionComments';
import ActionProducts from './ActionProducts';
import ActionProfile from './ActionProfile';
import ActionPurchasesAdmin from './ActionPurchasesAdmin';
import ActionPurchasesUser from './ActionPurchasesUser';
import ActionUsers from './ActionUsers';
import classes from './DashboardData.module.css';

const DashboardData = (props) => {
  return (
    <>
      {props.action === 'products' && (
        <div className={classes['product-container']}>
          <ActionProducts />
        </div>
      )}
      {props.action === 'users' && (
        <div className={classes['user-container']}>
          <ActionUsers />
        </div>
      )}
      {props.action === 'profile' && (
        <div>
          <ActionProfile userData={props.userData} />
        </div>
      )}
      {props.action === 'comments' && (
        <div>
          <ActionComments />
        </div>
      )}
      {props.action === 'purchases' && (
        <div>
          <ActionPurchasesUser />
        </div>
      )}
      {props.action === 'allPurchases' && (
        <div>
          <ActionPurchasesAdmin />
        </div>
      )}
    </>
  );
};

export default DashboardData;
