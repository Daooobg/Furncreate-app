import DashboardAdmin from './DashboardAdmin';

const DashboardActions = (props) => {
  const Action = () => {
    if (props.userData.role === 'admin') {
      return <DashboardAdmin />;
    } else {
      return <h1>Something went wrong!</h1>;
    }
  };

  return <Action />;
};

export default DashboardActions;
