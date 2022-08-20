import { useEffect, useState } from "react";
import "./Hero.scss";

const axios = require("axios").default;

const Hero = () => {
  const [programmingQuote, setProgrammingQuote] = useState();
  const [programmingQuoteAuthor, setProgrammingQuoteAuthor] = useState();

  const API = "https://programming-quotes-api.herokuapp.com/quotes/random";

  const getProgrammingQuote = () => {
    axios.get(API).then((response) => {
      console.log(response.data);
      setProgrammingQuote(response.data.en);
      setProgrammingQuoteAuthor(response.data.author);
    });
  };

  useEffect(() => {
    getProgrammingQuote();
  }, []);

  return (
    <>
      <div className="hero">
        <p className="hero__sub">Hello, my name is </p>
        <h1 className="hero__main-name">Adeleye Ifaturoti.</h1>
        <h1 className="hero__main-mission">
          I bring dreams to life on the web.
        </h1>
        <p className="hero__statement">
          I am a software engineer that specializes in designing and building
          websites. I am currently focused on expanding my skills and
          technologies to be a better developer. I am open to new opportunites
          and projects
        </p>
        <div className="hero__quote">
          <h3 className="hero__quote-heading">Programming Quote</h3>
          <h4 className="hero__quote-is">
            {programmingQuote} <br />
            by {programmingQuoteAuthor}
          </h4>
        </div>
      </div>
    </>
  );
};

export default Hero;
