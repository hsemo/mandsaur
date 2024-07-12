import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.tsx';
import './index.css';

// import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './pages/Layout.tsx';
import Home from './pages/Home.tsx';
import Blogs from './pages/Blogs.tsx';
import Contact from './pages/Contact.tsx';
import NoPage from './pages/NoPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NoPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'blogs',
        element: <Blogs />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: '*',
        element: <NoPage />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App />*/}
    <RouterProvider router={router} />
  </React.StrictMode>,
);
