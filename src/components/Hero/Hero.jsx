import { useEffect, useState } from "react";
import "./Hero.scss";

const axios = require("axios").default;

const Hero = () => {
  const [quotableQuote, setQuotableQuote] = useState();
  const [quotableQuoteAuthor, setQuotableQuoteAuthor] = useState();

  const API = process.env.REACT_APP_QUOTABLE_API;

  console.log("process.env", process.env.REACT_APP_TITLE);

  const getQuotableQuote = () => {
    axios.get("https://api.quotable.io/random").then((response) => {
      setQuotableQuote(response.data.content);
      setQuotableQuoteAuthor(response.data.author);
    });
  };

  useEffect(() => {
    getQuotableQuote();
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
          websites. I am currently focused on expanding my skills and working
          with new technologies to become a better developer. I am open to new
          opportunites and projects.
        </p>
        {quotableQuote && (
          <div className="hero__quote">
            <h3 className="hero__quote-heading">Quote from Quotable API</h3>
            <p className="hero__quote-is">
              {quotableQuote} <br />
              by "{quotableQuoteAuthor}"
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Hero;
