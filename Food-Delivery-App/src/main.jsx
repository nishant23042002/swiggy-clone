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

// Define your routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Body /> },
      { path: 'offers', element: <Offers /> },
      { path: 'search', element: <Search /> },
      { path: 'signin', element: <SignIn /> },
      { path: 'help', element: <Help /> },
      { path: 'cart', element: <Cart /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
