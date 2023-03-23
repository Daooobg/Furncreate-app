import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import RootLayout from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    id: 'root',
    element: <RootLayout />,
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
