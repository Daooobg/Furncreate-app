import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/Navigation/MainNavigation';
import Main from '../components/Navigation/Main';

const RootLayout = () => {

  return (
    <>
      <MainNavigation />
      <Main>
        <Outlet />
        </Main>
    </>
  );
};

export default RootLayout;
