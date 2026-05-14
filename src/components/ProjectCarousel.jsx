import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";

function ProjectCarousel({ title, images, altTexts }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 10 },
    breakpoints: {
      "(min-width: 768px)": { slides: { perView: 2, spacing: 15 } },
      "(min-width: 1200px)": { slides: { perView: 3, spacing: 20 } },
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  return (
    <section className="project-section" aria-label={`${title} project carousel`}>
      <header>
        <h1>{title}</h1>
      </header>

      <div ref={sliderRef} className="keen-slider">
        {images.map((src, index) => (
          <div
            key={index}
            className="keen-slider__slide"
            tabIndex="0"
            onDoubleClick={(e) => {
              const el = e.currentTarget.querySelector("img");
              if (el.requestFullscreen) {
                el.requestFullscreen();
              }
            }}
          >
            <img src={src} alt={altTexts[index]} />
          </div>
        ))}
      </div>

      <div className="carousel-btn-holder">
        <button
          onClick={() => slider.current?.prev()}
          aria-label="Previous Slide"
          className="button"
        >
          Prev
        </button>
        <div aria-live="polite" className="carousel-announcer">
          Slide {currentSlide + 1} of {images.length}
        </div>
        <button
          onClick={() => slider.current?.next()}
          aria-label="Next Slide"
          className="button"
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default ProjectCarousel;
