import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="links">
          <Link to="/about">About</Link>
        </li>
        <li className="links">
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
