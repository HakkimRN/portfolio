import React from "react";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import { Route, Routes } from "react-router-dom";

const Body = () => {
  return (
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
  );
};

export default Body;
