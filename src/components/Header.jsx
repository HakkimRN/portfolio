import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <nav className="nav">
      <h1>H</h1>
      <Link className="button" to="/" draggable="false">About</Link>
      <Link className="button" to="/projects" draggable="false">Projects</Link>
      <Link className="button" to="/resume" draggable="false">Resume</Link>
    </nav>
  );
};

export default Header;
