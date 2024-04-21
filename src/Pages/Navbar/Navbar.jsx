
import { IoLogoWhatsapp } from "react-icons/io";
import ReactWhatsapp from "react-whatsapp";
import { NavLink } from "react-router-dom";
import ActiveLink from "../../Components/ActiveLink";

const Navbar = () => {


  const navBtn = (
    <ul className="lg:flex gap-10 text-xl font-bold uppercase">
      <ActiveLink spy="true" smooth="true" href="#top">
        <li>Home </li>
      </ActiveLink>

      <ActiveLink spy="true" smooth="true" href="#about">
        <li>About Me</li>
      </ActiveLink>

      <ActiveLink spy="true" smooth="true" href="#skills">
        <li>Skills</li>
      </ActiveLink>

      <ActiveLink spy="true" smooth="true" href="#email">
        <li>Contact Me</li>
      </ActiveLink>
    </ul>
  );

  return (
    <div className="flex justify-center">
      <div className="navbar fixed z-30 glass w-full px-4">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow glass gradient-background text-black rounded-box w-52"
            >
              {navBtn}
            </ul>
          </div>
          <NavLink to="/">
            <h1 className="hidden md:flex md:text-3xl font-bold gradient-text">
              Nazmul Islam
            </h1>
          </NavLink>
          <NavLink to="/">
            <h1 className="text-xl md:hidden font-bold gradient-text">
              Nazmul I.
            </h1>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex transition">
          <ul className="menu menu-horizontal px-4">{navBtn}</ul>
        </div>
        <div className="navbar-end gap-2">
          <button className="flex items-center">
            <div className="chat chat-start hidden md:flex">
              <ReactWhatsapp
                className="rounded-lg px-4 py-2 border-2 border-blue-500 text-blue-500 text-xl font-bold w-44 flex items-center justify-between neno-button shadow-xl hover:shadow-blue-800/50"
                number="+8801580845746"
                message="As-salamu alaykum. I'm interested in learning more about your services."
              >
                WhatsApp
                <IoLogoWhatsapp size={30} className="text-green-500" />
              </ReactWhatsapp>
            </div>
            <div className=" md:hidden">
              <ReactWhatsapp
                className=" text-4xl text-blue-700  rounded-full p-1 hover:shadow-xl hover:shadow-blue-800/50"
                number="+8801580845746"
                message="As-salamu alaykum. I'm interested in learning more about your services."
              >
                <IoLogoWhatsapp className="text-green-500"/>
              </ReactWhatsapp>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
