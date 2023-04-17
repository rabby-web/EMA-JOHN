import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './layout/Main';
import Login from './components/Login/Login';
import Shop from './components/Shop/Shop';
import Order from './components/Order/Order';
import Inventory from './components/Inventory/Inventory';
import { productsAndCartLoader } from './components/loader/productsAndCartLoader';
import SignUp from './components/SignUp/SignUp';
import Shipping from './components/Shipping/Shipping';

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
          path: '/shipping',
          element: <Shipping></Shipping>,
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
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
