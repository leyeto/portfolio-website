import projects from "../../data/projects.js";
import Project from "../Project/Project";
import { useState, useEffect } from "react";
import LoomPlayer from "../LoomPlayer/LoomPlayer";
import "./Projects.scss";
import axios from "axios";

// const axios = require("axios").default;

const Jclear_API = process.env.REACT_APP_JAMES_CLEAR;
const Projects = () => {
  const [jclearQuote, setJclearQuote] = useState();

  const getAnime = () => {
    axios.get(Jclear_API).then((response) => {
      setJclearQuote(response.data);
    });
  };
  useEffect(() => {
    getAnime();
  }, []);
  return (
    <section>
      <div id="projects" className="projects">
        <h1 className="projects__heading">Projects</h1>
        {/* Might want to add this in future */}
        {/* <LoomPlayer /> */}
        {projects.map((project, i) => {
          return <Project key={i} project={project} />;
        })}

        {jclearQuote && (
          <div className="projects__jclear-quote">
            <h3 className="projects__jclear-heading">James Clear Quote</h3>
            <h4 className="projects__jclear-quotation">{jclearQuote.text}</h4>
            <p className="projects__jclear-source">
              Link to source:{" "}
              <a href={jclearQuote.source} target="_blank" rel="noreferrer">
                {jclearQuote.source}
              </a>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
