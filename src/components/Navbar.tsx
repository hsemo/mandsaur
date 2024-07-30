import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import {Link} from 'react-router-dom';

interface link {
  id: number,
  text: string,
  to: string
};

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // active nav item
  const [activeNavItem, setActiveNavItem] = useState(1);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems: Array<link> = [
    { id: 1, text: 'Home', to: '/' },
    { id: 2, text: 'Places', to: '/places' },
    { id: 3, text: 'Links', to: '/links' },
    { id: 4, text: 'Contact', to: '/contact' },
  ];

  /*
   * TODO:
   * put the li's className into a div inside the Link element
   * so the nav click works smoothly
  */

  return (
    <div className='backdrop-blur-md backdrop-brightness-50 flex justify-end md:justify-center items-center h-14 max-w-full mx-auto px-4 text-white sticky top-0 z-10'>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className={
              'p-2 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
                + (item.id === activeNavItem
                  ? ' text-[#00df9a]'
                  : '')
            }
          >
            <Link
              to={item.to}
              onClick={() => setActiveNavItem(item.id)}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'backdrop-blur-md backdrop-brightness-50 fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            <Link
              to={item.to}
              onClick={() => setActiveNavItem(item.id)}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
