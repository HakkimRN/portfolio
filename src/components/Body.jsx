import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";

const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
    </Routes>
  );
};

export default Body;

