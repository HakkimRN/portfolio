import React from "react";
import { Link } from "react-router-dom";
import GITHUB_URL from "../assets/github-mark-white.png";
import LINKEDIN_URL from "../assets/inBug-White.png";
import FIVERR_URL from "../assets/FVRR_BIG.D.svg";

const Sidebar = () => {
  return (
    <>
      <nav className="sidebar-nav">
        <div className="sidebar">
          <Link  to="https://github.com/HakkimRN" data-label="Github">
            <img className="logo" src={GITHUB_URL} />
          </Link>
           <Link to="" data-label="Fiverr">
            <img className="logo" src={FIVERR_URL} />
          </Link>
          <Link to="www.linkedin.com/in/hakkim-rustom-naina-516051256" data-label="LinkedIn">
            <img className="logo" src={LINKEDIN_URL} />
          </Link>
         
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
