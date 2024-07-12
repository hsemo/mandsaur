// import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './pages/Layout.tsx';
import Home from './pages/Home.tsx';
import Blogs from './pages/Blogs.tsx';
import Contact from './pages/Contact.tsx';
import NoPage from './pages/NoPage.tsx';
import './App.css';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="blogs" element={<Blogs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

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
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
