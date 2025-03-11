import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">EventConnect</h1>

        <div className="flex gap-6 text-lg">
          <Link
            to="/"
            className="hover:text-yellow-300 transition-transform transform hover:scale-105"
          >
            Home
          </Link>
          <Link
            to="/events"
            className="hover:text-yellow-300 transition-transform transform hover:scale-105"
          >
            Events
          </Link>
          <Link
            to="/about"
            className="hover:text-yellow-300 transition-transform transform hover:scale-105"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
