import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Search from './component/Search.jsx';
import Offers from './component/Offers.jsx';
import SignIn from './component/SignIn.jsx';
import Help from './component/Help.jsx';
import Cart from './component/Cart.jsx';
import Body from './component/Body.jsx';
import Error from './component/Error.jsx';
import RestaurantDetails from './component/RestaurantDetails.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Body /> },
      { path: 'offers', element: <Offers /> },
      { path: 'search', element: <Search /> },
      { path: 'signin', element: <SignIn /> },
      { path: 'help', element: <Help /> },
      { path: 'cart', element: <Cart /> },
      { path: 'restaurant/:id', element: <RestaurantDetails /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}></RouterProvider>
);
