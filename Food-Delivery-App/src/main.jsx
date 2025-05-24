import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Error from './component/Error.jsx';
import { lazy, Suspense } from 'react';



const Cart = lazy(() => import("./component/Cart.jsx"));
const Search = lazy(() => import("./component/Search.jsx"));
const Offers = lazy(() => import("./component/Offers.jsx"));
const Help = lazy(() => import("./component/Help.jsx"));
const SignIn = lazy(() => import("./component/SignIn.jsx"));
const RestaurantDetails = lazy(()=> import("./component/RestaurantDetails.jsx"))
const Body = lazy(() => import("./component/Body.jsx"))


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
      {path: 'cart', element: <Cart /> },
      { path: 'restaurant/:id', element: <RestaurantDetails /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <Suspense fallback={<h1>Loading........</h1>}>
    <RouterProvider router={router}></RouterProvider>
  </Suspense>
);
