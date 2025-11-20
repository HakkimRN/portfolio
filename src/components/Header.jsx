import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleAboutPage } from "../utils/aboutSlice";
import About from "./About";

const Header = () => {
  const dispatch = useDispatch();
  const showAboutPage = useSelector((store) => store.about.showAboutPage);
  const handleAboutPage = () => {
    dispatch(toggleAboutPage());
  }

  return (
    <>
      <button onClick={handleAboutPage}>About</button>
      <button>Projects</button>
      <button>Resume</button>
      {showAboutPage && <About/>}
    </>
  );
};

export default Header;
