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
      setTimeout(() => setStep(5), 1100),
    ];
    return () => timer.forEach(clearTimeout);
  }, []);

  return (
    <nav>
      <div className="body">
        <span className={step >= 1 ? "show" : ""}>Hey,</span>
        <h3 className={step >= 2 ? "show" : ""}>I'm Hakkim Naina</h3>
        <p className={step >= 3 ? "show" : ""}>
          A React-based frontend developer passionate about building accessible,
          user-friendly websites and web applications, with a focus on the small
          details that make interfaces easier to use.
        </p>
        <div
          className={`tech-stack ${step >= 4 ? "show" : ""}`}
          aria-label="Tech stack"
          role="list"
        >
          {["React", "Redux", "JavaScript", "HTML", "CSS", "REST APIs", "Responsive Design", "Accessible Design"].map((tech) => (
            <span key={tech} className="tech-badge" role="listitem">{tech}</span>
          ))}
        </div>
        <Link
          className={`about-button ${step >= 5 ? "show" : ""}`}
          to="/projects"
          draggable="false"
        >
          <i className="btn-text">Check Out My Projects </i>➜
        </Link>
      </div>
    </nav>
  );
};

export default About;
