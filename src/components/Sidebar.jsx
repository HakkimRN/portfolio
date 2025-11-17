import React from "react";
import { Link } from "react-router-dom";
import GITHUB_URL from "../assets/github-mark.png"
import LINKEDIN_URL from "../assets/inBug-Black.png"
import FIVERR_URL from "../assets/FVRR_BIG.D.svg"

const Sidebar = () => {
  return (
    <>
      <nav>
        <div className="sidebar">
          <Link to="https://github.com/HakkimRN"><img src={GITHUB_URL}/></Link>
          <Link to="https://www.linkedin.com/in/hakkim-rustom-naina-516051256"><img src={LINKEDIN_URL}/></Link>
          <Link to=""><img src={FIVERR_URL}/></Link>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
