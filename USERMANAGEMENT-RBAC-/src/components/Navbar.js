import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 bg-white z-[1000] w-full h-[70px] flex justify-between items-center px-4 border-b border-gray-300">
      <img
        onClick={() => navigate("/")}
        src="main.png.png"
        alt="logo"
        className="h-full aspect-auto p-2 cursor-pointer"
      />

      {/* Desktop navigation */}
      <div className="hidden md:flex w-[50%] justify-evenly items-center">
        <NavLink
          className="font-semibold text-sm leading-[1.6rem] p-2 hover:text-blue-500 transition duration-300"
          to="/users"
        >
          User List
        </NavLink>
        <NavLink
          className="font-semibold text-sm leading-[1.6rem] p-2 hover:text-blue-500 transition duration-300"
          to="/roles"
        >
          Roles
        </NavLink>
      </div>

      {/* Mobile menu toggle */}
      <button
        className="md:hidden p-2 text-gray-600 focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile menu */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } absolute top-0 left-0 w-full bg-white shadow-lg md:hidden flex flex-col items-center py-4`}
      >
        <NavLink
          className="font-semibold text-lg py-2"
          to="/users"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          User List
        </NavLink>
        <NavLink
          className="font-semibold text-lg py-2"
          to="/roles"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Roles
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
