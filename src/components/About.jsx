import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  React.useEffect(() => {
  const timer = setTimeout(() => {
    document.querySelector(".body p").classList.add("show");
  }, 100);
  return () => clearTimeout(timer);
}, []);

  return (
    <>
      <div className="body">
        <h3>Hi, I'm Hakkim Naina</h3>
        <h4>Frontend Developer</h4>
        <p>
          I develop modern frontend experiences with clean structure, smooth
          transitions, and attention to real-world use. I focus on clarity,
          accessibility, and details that make interfaces easier to work with.
        </p>
        <Link className="button" to="/projects" draggable="false">
          Check Out My Projects ➜
        </Link>
      </div>
    </>
  );
};

export default About;
