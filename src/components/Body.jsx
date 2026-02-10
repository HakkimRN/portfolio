import React from "react";
import About from "./About";
import Projects from "./Projects";
import { Route, Routes } from "react-router-dom";

const Body = () => {
  return (
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
  );
};

export default Body;
