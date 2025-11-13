import React from "react";
import Sidebar from "./SideBar";

const Body = () => {
  return (
    <>
      <div className="body">
        <h3>Hakkim Rustom Naina</h3>
        <h4>Frontend Developer</h4>
        <button>Check Out My Projects!</button>
      </div>
      <div>
        <button>
          <Sidebar />
        </button>
      </div>
    </>
  );
};

export default Body;
