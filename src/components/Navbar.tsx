import { useEffect, useMemo, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

interface link {
  id: number;
  text: string;
  to: string;
}

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  const location = useLocation();

  // Array containing navigation items
  const navItems: Array<link> = useMemo(() => ([
    { id: 1, text: "Home", to: "/" },
    { id: 2, text: "Places", to: "/places" },
    { id: 3, text: "Links", to: "/links" },
    { id: 4, text: "Contact", to: "/contact" },
  ]), []);

  // active nav item
  const [activeNavItem, setActiveNavItem] = useState(1);

  useEffect(function setNavLocationOnMount() {
    var id = navItems.filter(({to}) => to === location.pathname)[0]?.id;
    setActiveNavItem(id);
  }, []);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  /*
   * TODO:
   * put the li's className into a div inside the Link element
   * so the nav click works smoothly
   */

  return (
    <div className="backdrop-blur-md backdrop-brightness-50 flex justify-between md:justify-between items-center h-14 max-w-full mx-auto px-4 text-white sticky top-0 z-10">
      <Link
        to="/"
        className="text-left uppercase text-[#00df9a] text-2xl tracking-wider z-50"
      >Mandsaur</Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li key={item.id}>
            <Link
              className={
                "p-2 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black" +
                (item.id === activeNavItem ? " text-[#00df9a]" : "")
              }
              to={item.to}
              onClick={() => setActiveNavItem(item.id)}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden z-10">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          "fixed md:hidden text-left flex flex-col gap-2 flex-wrap justify-start pt-14 items-center w-[60%] h-screen bg-transparent backdrop-blur-md ease-in-out duration-500"
            + (
              nav
                ? " left-0 top-0"
                : " top-0 bottom-0 left-[-100%]"
              )
        }
      >
        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li key={item.id} className="w-full">
            <Link
              className={
                "inline-block w-[calc(100%-1rem)] max-w-full ml-4 border-b-2 duration-300 text-[#00df9a] cursor-pointer border-[#00df9a] hover:text-white hover:border-white focus:text-white focus:border-white" +
                (item.id === activeNavItem ? " text-white" : "")
              }
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
