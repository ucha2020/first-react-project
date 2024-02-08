import { Outlet, Link } from "react-router-dom";

export default function Layout(){
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">FirstPage</Link>
          </li>
          <li>
            <Link to="/SecondPage">SecondPage</Link>
          </li>
          <li>
            <Link to="/FormPage">FormPage</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

