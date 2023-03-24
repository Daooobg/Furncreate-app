import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import AuthenticationPage, {
  action as authAction,
} from './pages/Authentication';
import { tokenLoader } from './UI/auth';
import ErrorPage from './pages/Error';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProductsData } from './store/products-actions';
import CatalogPage from './pages/Catalog';

const router = createBrowserRouter([
  {
    path: '/',
    id: 'root',
    loader: tokenLoader,
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'auth', element: <AuthenticationPage />, action: authAction },
      { path: 'catalog', element: <CatalogPage /> },
    ],
  },
]);
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
