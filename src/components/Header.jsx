import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav">
      <NavLink className="button" to="/" draggable="false">
        About
      </NavLink>
      <NavLink className="button" to="/projects" draggable="false">
        Projects
      </NavLink>
    </nav>
  );
};

export default Header;
