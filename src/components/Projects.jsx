// import GITHUB_URL from "../assets/github-mark-white.png";
import { useState, useEffect } from "react";
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
import ProjectCarousel from "./ProjectCarousel";

const Projects = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={`page-content ${visible ? "show" : ""}`}>
      <ProjectCarousel
        title="NOTFLIX [Netflix Clone]"
        description="A Netflix-inspired app with Firebase authentication and real movie data from TMDB. Features trailers, categorized movie lists, and a Hugging Face-powered AI suggestion search — currently disabled pending a backend implementation to secure the API key."
        repoUrl="https://github.com/HakkimRN/netflix_clone_wAI"
        liveUrl="https://netflixclone-gpt-f707f.web.app/"
        images={[
          Notflix_1,
          Notflix_2,
          Notflix_3,
          Notflix_4,
          Notflix_5,
          Notflix_6,
        ]}
        altTexts={[
          "Screenshot of the Notflix project's sign in page",
          "Screenshot of the Notflix project's home page",
          "Screenshot of the Notflix project's movies catalog in the home page",
          "Screenshot of the Notflix project's AI movie suggestions search page",
          "Screenshot of the Notflix project's AI movie suggestions search box input 'Action Movies'",
          "Screenshot of the Notflix project's AI movie suggestions search result for 'Action Movies'",
        ]}
      />
      <ProjectCarousel
        title="DS Tube [YouTube Clone]"
        description="A YouTube-inspired SPA built with React and Redux for state management. Features live search with debouncing via the YouTube Data API, a video player page with comments, and a simulated live chat."
        repoUrl="https://github.com/HakkimRN/ds_tube"
        images={[
          ds_tube1,
          ds_tube2,
          ds_tube3,
          ds_tube4,
          ds_tube5,
          ds_tube6,
          ds_tube7,
        ]}
        altTexts={[
          "Screenshot of DS Tube project's browsing page",
          "Screenshot of DS Tube project's search bar input 'cat' and the suggestions from live data",
          "Screenshot of DS Tube project's search video results for 'cat videos'",
          "Screenshot of DS Tube project's video player page with comments and live chat using mock data",
          "Screenshot of DS Tube project's live chat user input box typing 'Cute!'",
          "Screenshot of DS Tube project's sidebar open with home button clicked which leads to browsing page",
          "Screenshot of DS Tube project returned to browsing page",
        ]}
      />
    </div>
  );
};

export default Projects;
