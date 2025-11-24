import React from "react";
import { useDispatch } from "react-redux";
import { setPage } from "../utils/uiSlice";

const Header = () => {
  const dispatch = useDispatch()

  return (
    <>
      <button onClick={()=> dispatch(setPage("about"))}>About</button>
      <button onClick={()=> dispatch(setPage("projects"))}>Projects</button>
      <button>Resume</button>
    </>
  );
};

export default Header;
