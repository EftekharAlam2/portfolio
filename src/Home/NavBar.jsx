import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";

const NavBar = () => {
  const navItems = (
    <>
      <li className="text-base">
        <Link to="/">Home</Link>
      </li>
      <li className="text-base">
        <HashLink to="/#about">About</HashLink>
      </li>
      <li className="text-base">
        <HashLink to="/#skills">Skills</HashLink>
      </li>
      <li className="text-base">
        <HashLink to="/#projecct">Project</HashLink>
      </li>
      <li className="text-base">
        <HashLink to="/#contact">Contact</HashLink>
      </li>
    </>
  );
  return (
    <div className="navbar h-28 mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl pb-1">
          Md Eftekharul Alam
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
    </div>
  );
};

export default NavBar;
