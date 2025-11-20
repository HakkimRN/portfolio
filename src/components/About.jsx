import React from "react";
import Sidebar from "./SideBar";

const About = () => {
  return (
    <>
      <div className="body">
        <h3>?My name</h3>
        <h4>Frontend Developer</h4>
        <button>Check Out My Projects!</button>
      </div>
      <div>
        <Sidebar/>
      </div>
    </>
  );
};

export default About;
