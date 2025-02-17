import { Link } from "react-router-dom";
import img1 from "../assets/img/30509948-b594-4cba-957b-4b62425dacfb.jpg";
import { FaPhone } from "react-icons/fa6";

const Navbar = () => {
  const NavbarLink = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>About Us</Link>
      </li>

      <li>
        <Link>FeedBack</Link>
      </li>

      <li>
        <Link>Contact Us</Link>
      </li>
    </>
  );

  return (
    <div
      className="  bg-center "
      style={{
        backgroundImage: `url(${img1})`,
      }}
    >
      <div className="navbar  container mx-auto px-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {NavbarLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">NABO NIR</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavbarLink}</ul>
        </div>
        <div className="navbar-end ">
        
          <div className="flex gap-3">
            {" "}
            <FaPhone className="text-2xl blue mx-auto mb-3 " />
            <p>01971347880</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
