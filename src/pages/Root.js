import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/Navigation/MainNavigation';
import Main from '../components/Navigation/Main';
import Footer from '../components/Navigation/Footer';

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default RootLayout;
