import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import Home from "./pages/Home.tsx";
import Links from "./pages/Links.tsx";
import Contact from "./pages/Contact.tsx";
import Places from "./pages/Places.tsx";
import NoPage from "./pages/NoPage.tsx";

import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NoPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/places",
        element: <Places />,
      },
      {
        path: "/links",
        element: <Links />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NoPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div id="App" className="text-white">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
