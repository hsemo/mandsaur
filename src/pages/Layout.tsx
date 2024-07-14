import {Link, Outlet} from 'react-router-dom';
import Navbar from '../components/Navbar.tsx';

import background from '../assets/background2.jpg';

export default function Layout(){
  return (
    <div
      className="w-screen h-screen bg-cover"
      style={{backgroundImage: `url(${background})`}}
    >
      <Navbar />
      <Outlet />
    </div>
  );
}
