import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const timer = [
      setTimeout(() => setStep(1), 100),
      setTimeout(() => setStep(2), 300),
      setTimeout(() => setStep(3), 600),
      setTimeout(() => setStep(4), 900),
    ];
    return () => timer.forEach(clearTimeout);
  }, []);

  return (
    <>
      <div className="body">
        <h3 className={step >= 1 ? "show" : ""}>Hakkim Naina</h3>
        <h4 className={step >= 2 ? "show" : ""}>Frontend Developer</h4>
        <p className={step >= 3 ? "show" : ""}>
          I develop modern frontend experiences with clean structure, smooth
          transitions, and attention to real-world use. I focus on clarity,
          accessibility, and details that make interfaces easier to work with.
        </p>
        <Link className={`about-button ${step >= 4 ? "show" : ""}`} to="/projects" draggable="false">
          <span className="btn-text">Check Out My Projects </span>➜
        </Link>
      </div>
    </>
  );
};

export default About;
