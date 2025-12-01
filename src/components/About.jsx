import React from "react";
import Sidebar from "./SideBar";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="body">
        <h3>?My name</h3>
        <h4>Frontend Developer</h4>
        <Link className="button" to="/projects" draggable="false">
          Check Out My Projects!
        </Link>
      </div>
      <div>
        <Sidebar />
      </div>
    </>
  );
};

export default About;
