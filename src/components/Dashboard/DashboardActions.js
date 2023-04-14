import DashboardAdmin from './DashboardAdmin';
import DashboardUser from './DashboardUser';

const DashboardActions = (props) => {
  const Action = () => {
    if (props.userData.role === 'admin') {
      return <DashboardAdmin />;
    } else if (props.userData.role === 'user') {
      return <DashboardUser userData={props.userData} />;
    } else {
      return <h1>Something went wrong!</h1>;
    }
  };

  return <Action />;
};

export default DashboardActions;
