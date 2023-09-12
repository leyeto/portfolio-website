import projects from "../../data/projects.js";
import Project from "../Project/Project";
import { useState, useEffect } from "react";
import LoomPlayer from "../LoomPlayer/LoomPlayer";
import "./Projects.scss";

const axios = require("axios").default;

const Projects = () => {
  const [animeQuote, setAnimeQuote] = useState();
  const [animeQuoteAnime, setAnimeQuoteAnime] = useState();
  const [animeQuoteCharacter, setAnimeQuoteCharacter] = useState();

  useEffect(() => {
    const Anime_API = process.env.REACT_APP_ANIME_API;

    const getAnime = () => {
      axios.get(Anime_API).then((response) => {
        setAnimeQuote(response.data.quote);
        setAnimeQuoteAnime(response.data.anime);
        setAnimeQuoteCharacter(response.data.character);
      });
    };
    getAnime();
  }, []);
  return (
    <section>
      <div id="projects" className="projects">
        <h1 className="projects__heading">Projects</h1>
        <LoomPlayer />
        {projects.map((project, i) => {
          return <Project key={i} project={project} />;
        })}

        {animeQuote && (
          <div className="projects__anime-quote">
            <h3 className="projects__anime-heading">Anime Quote</h3>
            <h4 className="projects__anime-quotation">{animeQuote}</h4>
            <p>Character: {animeQuoteCharacter}</p>
            <p>Anime: {animeQuoteAnime}</p>
            <br />
            <p>
              Disclaimer: The quotes are gotten from external APIs/servers I do
              not control.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
