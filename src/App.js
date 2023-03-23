import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    id: 'root',
    element: <RootLayout />,
    children: [{ index: true, element: <HomePage /> }],
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
