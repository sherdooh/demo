import React, { useState } from "react";
import { images } from "../constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className="text-primary font-roboto bg-white shadow-md">
      <header className="container mx-auto py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img className="w-16" src={images.Logo} alt="logo" />
          <span className="text-primary font-semibold hover:text-dark-hard">HEALTH AND WELLNESS</span>
        </div>
        <nav className="hidden lg:flex space-x-4 font-semibold text-primary">
          {/* Navigation links */}
          <Link to="/" className="hover:text-dark-hard">
            Home
          </Link>
          <Link to="/about" className="hover:text-dark-hard">
            About
          </Link>
          <Link to="####" className="hover:text-dark-hard">
            Login
          </Link>
          <Link to="####" className="hover:text-dark-hard">
            Register
          </Link>
        </nav>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-900 transition duration-300"
          >
            ☰
          </button>
          {menuOpen && (
            <div className="absolute top-16 right-6 text-primary bg-white border rounded-lg shadow-md p-4">
              {/* Mobile app drawer content */}
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="block hover:text-gray-900 transition duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="block hover:text-gray-900 transition duration-300">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-dark border-none rounded-md px-3 py-1">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-dark border-none rounded-md px-3 py-1">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
    </section>
  );
};

export default Header;
