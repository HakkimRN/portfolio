import React from "react";
import { useSelector } from "react-redux";
import About from "./About"
import Projects from "./Projects"


const Body = () => {
  const currentPage = useSelector((store)=>store.ui.currentPage);

  return (
    <>
    {currentPage == "about" && <About/>}
    {currentPage == "projects" && <Projects/>}
    </>
  );
};

export default Body;
