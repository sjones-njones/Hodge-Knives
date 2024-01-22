import React from 'react'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import './index.css'
import Home from './Pages/Home.jsx';
import Signup from './Pages/Signup.jsx';
import Admin from './Pages/Admin.jsx';
import Detail from './Pages/Detail.jsx';
import AdminProductList from './Components/AdminProductList';
// import AddProducts from './Pages/AddProducts.jsx';
import AdminArchive from './Components/AdminArchive';
import Login from './Pages/Login.jsx';
// import ErrorPage from './pages/Error';
import About from './Pages/About.jsx';
import Shop from './Pages/Shop.jsx';

import Trial from './Pages/Trial/Trial.jsx';
import Care from './Pages/Care.jsx';
import AdminAddProducts from './Components/AdminAddProducts';
import AdminUpdateProduct from './Pages/AdminUpdateProduct.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/About',
        element: <About />
      },
      {
        path: '/Admin',
        element: <Admin />
      },
      {
        path: '/Admin/Inventory',
        element: <AdminProductList />
      },
           {
        path: '/Admin/Inventory/Update/:id',
        element: <AdminUpdateProduct />
      },
      {
        path: '/Admin/Archive',
        element: <AdminArchive />
      },
      {
        path: '/Admin/AddProducts',
        element: <AdminAddProducts />
      },
      {
        path: '/Care',
        element: <Care />
      },
      {
        path: '/Shop',
        element: <Shop />
      },
      {
        path: '/Trial',
        element: <Trial />
      }, {
        path: '/products/:id',
        element: <Detail />
      },
      // {
      //   path: '/profiles/:profileId',
      //   element: <Profile />
      // }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)