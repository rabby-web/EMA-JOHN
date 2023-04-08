import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './layout/Main';
import Login from './components/Login/Login';
import Shop from './components/Shop/Shop';
import Order from './components/Order/Order';
import Inventory from './components/Inventory/Inventory';
import { productsAndCartLoader } from './components/loader/productsAndCartLoader';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/order',
          loader: productsAndCartLoader,
          element: <Order></Order>
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>,
        },
        {
          path:'login',
          element:<Login></Login>
        }
      ]
    }
  ]);
  return (
    <div>
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
