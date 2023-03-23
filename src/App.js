import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

const router = createBrowserRouter([]);
function App() {
  return (
    <RouterProvider router={router}>
      <p>Hello World!</p>
    </RouterProvider>
  );
}

export default App;
