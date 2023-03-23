import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import AuthenticationPage, {
  action as authAction,
} from './pages/Authentication';
import { tokenLoader } from './UI/auth';
import ErrorPage from './pages/Error';

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
    ],
  },
]);
function App() {
  return (
    <RouterProvider router={router}>
      <p>Hello World!</p>
    </RouterProvider>
  );
}

export default App;
