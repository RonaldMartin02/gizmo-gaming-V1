import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Landing from './pages/Landing'
import Search from './pages/Search'
import Build from './pages/Build'
import Createbuild from './pages/Createbuild'
import Aboutus from './pages/Aboutus'
import ErrorPage from './pages/ErrorPage'
import LogIn from './pages/LogIn';
import Signup from './pages/SignUp';

const router = createBrowserRouter(
  [
    { path: '/',
     element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Landing/>,
      },
      {
        path: '/AboutUs',
        element: <Aboutus />,
      },
      {
        path: '/Search',
        element: <Search />,
      },
      {
        path: '/Build',
        element: <Build />,
      },
      {
        path: '/Build/Create',
        element: <Createbuild />,
      },
      {
        path: '/LogIn',
        element: <LogIn />,
      },
      {
        path: '/SignUp',
        element: <Signup />,
      }

    ],
    },
  ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);