import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <nav>
      <button><Link to="/">About</Link></button>
      <button><Link to="/projects">Projects</Link></button>
      <button><Link to="/resume">Resume</Link></button>
    </nav>
  );
};

export default Header;
