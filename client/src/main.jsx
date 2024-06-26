import React from 'react'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import './index.css'
import Home from './Pages/Home.jsx';
import Signup from './Pages/Signup.jsx';
import Forge from './Pages/Forge.jsx'
import BallBearing from './Pages/BallBearing.jsx'

import Admin from './Pages/Admin.jsx';
import Process from './Pages/Process.jsx';
import Detail from './Pages/Detail.jsx';
import ArchiveDetail from './Pages/ArchiveDetail.jsx';

import Past from './Pages/Past.jsx';
// import Forgot from './Pages/Forgot.jsx';
import UpdateProduct from './Pages/UpdateProduct.jsx';
import AdminCurrent from './Components/AdminCurrent';
import AdminArchive from './Components/AdminArchive';
import Login from './Pages/Login.jsx';
// import Contact from './Pages/Contact.jsx';
// import ErrorPage from './pages/Error';
import About from './Pages/About.jsx';
import Shop from './Pages/Shop.jsx';
import Order from './Pages/Order.jsx';

import ProductAdded from './Pages/ProductAdded.jsx'
import ProductDeleted from './Pages/ProductDeleted.jsx'
import Care from './Pages/Care.jsx';
import AdminAddProducts from './Components/AdminAddProducts';
import AdminUpdateProduct from './Pages/UpdateProduct.jsx';
import Contact from './Pages/Contact.jsx';

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
      },
      {
        path: '/process',
        element: <Process />
      },
      {
        path: '/ballBearing',
        element: <BallBearing />
      },
            {
        path: '/Signup',
        element: <Signup />
      },
      // {
      //   path: '/Forgot',
      //   element: <Forgot />
      // },
      {
        path: '/About',
        element: <About />
      },
      {
        path: '/Forge',
        element: <Forge />
      },
      {
        path: '/a',
        element: <Admin />
      },
      {
        path: '/Admin/AdminCurrentInventory',
        element: <AdminCurrent />
      },
      {
        path: '/Admin/AdminArchiveInventory',
        element: <AdminArchive />
      },
      {
        path: '/Admin/Inventory/Update/:id',
        element: <AdminUpdateProduct />
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
        path: '/Order/:id',
        element: <Order />
      },
      {
        path: '/Past',
        element: <Past />
      },
     {
        path: '/products/:id',
        element: <Detail />
      },
      {
        path: '/archiveProducts/:id',
        element: <ArchiveDetail />
      },
      {
        path: '/productAdded',
        element: <ProductAdded />
      },
      {
        path: '/productDeleted',
        element: <ProductDeleted />
      },
      {
        path: '/updateProduct/:id',
        element: <UpdateProduct />
      },
      // {
      //   path: '/profiles/:profileId',
      //   element: <Profile />
      // }
      {
        path:'/contact',
        element: <Contact />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)