import React, { useRef } from "react";
import GITHUB_URL from "../assets/github-mark-white.png";
import ds_tube1 from "../assets/ds_tube1.png";
import ds_tube2 from "../assets/ds_tube2.png";
import ds_tube3 from "../assets/ds_tube3.png";
import ds_tube4 from "../assets/ds_tube4.png";
import ds_tube5 from "../assets/ds_tube5.png";
import ds_tube6 from "../assets/ds_tube6.png";
import ds_tube7 from "../assets/ds_tube7.png";
import Notflix_1 from "../assets/Notflix_1.png";
import Notflix_2 from "../assets/Notflix_2.png";
import Notflix_3 from "../assets/Notflix_3.png";
import Notflix_4 from "../assets/Notflix_4.png";
import Notflix_5 from "../assets/Notflix_5.png";
import Notflix_6 from "../assets/Notflix_6.png";
import { Link } from "react-router-dom";

const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const slide = container.querySelector(".carousel li");
      const slideWidth = slide ? slide.offsetWidth + 16 : 400;
      const scrollAmount = direction == "left" ? -slideWidth : slideWidth;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  return (
    <nav className="carousel" aria-label="Project carousal">
      <Link to="https://github.com/HakkimRN/ds_tube" data-label="Github">
        <h1>
          DS-TUBE(YOUTUBE CLONE)
          <img
            className="logo"
            src={GITHUB_URL}
            alt="Github repo of the project"
          />
        </h1>
      </Link>

      <ul ref={scrollRef}>
        <button
          className="carousel-button prev"
          onClick={() => scroll("left")}
          aria-label="Previous slide"
        >
          Previous slide
        </button>
        <button
          className="carousel-button next"
          onClick={() => scroll("right")}
          aria-label="Previous slide"
        >
          Next slide
        </button>
        <li>
          <img src={ds_tube1}></img>
        </li>
        <li>
          <img src={ds_tube2}></img>
        </li>
        <li>
          <img src={ds_tube3}></img>
        </li>
        <li>
          <img src={ds_tube4}></img>
        </li>
        <li>
          <img src={ds_tube5}></img>
        </li>
        <li>
          <img src={ds_tube6}></img>
        </li>
        <li>
          <img src={ds_tube7}></img>
        </li>
      </ul>
      <h1>Notflix(Netflix Clone with AI movie suggestions)</h1>
      <ul ref={scrollRef}>
        <button
          className="carousel-button prev"
          onClick={() => scroll("left")}
          aria-label="Previous slide"
        >
          Previous slide
        </button>
        <button
          className="carousel-button next"
          onClick={() => scroll("right")}
          aria-label="Previous slide"
        >
          Next slide
        </button>
        <li>
          <img src={Notflix_1}></img>
        </li>
        <li>
          <img src={Notflix_2}></img>
        </li>
        <li>
          <img src={Notflix_3}></img>
        </li>
        <li>
          <img src={Notflix_4}></img>
        </li>
        <li>
          <img src={Notflix_5}></img>
        </li>
        <li>
          <img src={Notflix_6}></img>
        </li>
      </ul>
    </nav>
  );
};

export default Projects;
