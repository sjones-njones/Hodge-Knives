import React from 'react'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import './index.css'
import Home from './Pages/Home.jsx';
import Signup from './Pages/Signup.jsx';
import Login from './Pages/Login.jsx';
import ErrorPage from './pages/Error';
import About from './Pages/About.jsx';
import Care from './Pages/Care.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
        path: '/Care',
        element: <Care />
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
