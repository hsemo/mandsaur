import {Link, Outlet} from 'react-router-dom';
import Navbar from '../components/Navbar.tsx';

import noise from '../assets/nnnoise2.svg';

export default function Layout(){
  return (
    <>
      <div
        className="w-full h-full bg-cover fixed -z-50 bg-slate-900"
        style={{backgroundImage: `url(${noise})`}}
      >
      </div>
      <Navbar />
      <Outlet />
    </>
  );
}
