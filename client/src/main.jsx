import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home'

const router = createBrowserRouter(
  [
    { path: '/',
     element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: '/',
        element: <Home />,
      },
      {
        path: 'Portfolio',
        element: <Portfolio />,
      },
      {
        path: 'Contact',
        element: <Contact />,
      },
      {
        path: 'Resume',
        element: <Resume />,
      },
    ],
    },
  ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);