import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

function ProjectCarousel({
  title,
  description,
  repoUrl,
  liveUrl,
  images,
  altTexts,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1.1, spacing: 10 },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  return (
    <section
      className="project-section"
      aria-label={`${title} project carousel`}
    >
      <header>
        <h1>{title}</h1>
        {description && <p className="project-description">{description}</p>}
        <div className="project-links">
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <span className="sr-only">
                {title} GitHub repository, opens in new tab
              </span>
              <span aria-hidden="true">GitHub ↗</span>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <span className="sr-only">
                {title} live site, opens in new tab
              </span>
              <span aria-hidden="true">Live Site ↗</span>
            </a>
          )}
        </div>
      </header>
      <div ref={sliderRef} className="keen-slider">
        {images.map((src, index) => (
          <div
            key={index}
            className={`keen-slider__slide${index === currentSlide ? " active" : ""}`}
            tabIndex="0"
            onDoubleClick={(e) => {
              const el = e.currentTarget.querySelector("img");
              if (el?.requestFullscreen) el.requestFullscreen();
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") instanceRef.current?.next();
              if (e.key === "ArrowLeft") instanceRef.current?.prev();
              if (e.key === "Enter" || e.key === "f") {
                const el = e.currentTarget.querySelector("img");
                if (el?.requestFullscreen) el.requestFullscreen();
              }
            }}
          >
            <img src={src} alt={altTexts[index]} loading="lazy" />
          </div>
        ))}
      </div>
      <div className="carousel-btn-holder">
        <button onClick={() => instanceRef.current?.prev()} className="button">
          Prev
        </button>
        <div aria-live="polite" className="carousel-announcer">
          Slide {currentSlide + 1} of {images.length}
        </div>
        <button onClick={() => instanceRef.current?.next()} className="button">
          Next
        </button>
      </div>
    </section>
  );
}

export default ProjectCarousel;
