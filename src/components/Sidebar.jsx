import React from "react";
import { Link } from "react-router-dom";
import GITHUB_URL from "../assets/github-mark-white.png";
import LINKEDIN_URL from "../assets/linkedin-white.png";

const Sidebar = () => {
  return (
    <>
      <nav className="sidebar-nav">
        <div className="sidebar">
          <Link to="https://github.com/HakkimRN" data-label="Github">
            <img
              className="logo"
              src={GITHUB_URL}
              alt="Github Profile"
            />
          </Link>
          <Link
            to="https://www.linkedin.com/in/hakkim-rustom-naina-516051256"
            data-label="LinkedIn"
          >
            <img
              className="logo"
              src={LINKEDIN_URL}
              alt="Linkedin Profile"
            />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
