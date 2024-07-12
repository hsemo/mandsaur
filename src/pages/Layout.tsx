import {Link, Outlet} from 'react-router-dom';

export default function Layout(){
  return (
    <>
    <nav>
      <div className="flex">
        <ul className="list-none">
          <li className="active">
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/history">Historical Places</Link>
          </li>

          <li>
            <Link to="/">Useful Links</Link>
          </li>

          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
        </ul>
      </div>
    </nav>

    <Outlet />
    </>
  );
}
