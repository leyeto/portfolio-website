import { useEffect, useState } from "react";
import "./Hero.scss";

const axios = require("axios").default;

const Hero = () => {
  const [quotableQuote, setQuotableQuote] = useState();
  const [quotableQuoteAuthor, setQuotableQuoteAuthor] = useState();
  const [quoteIsSet, setQuoteIsSet] = useState(false);

  useEffect(() => {
    const API =
      "https://api.quotable.io/random" || process.env.REACT_APP_QUOTABLE_API;

    const getQuotableQuote = () => {
      axios.get(API).then((response) => {
        if (response.data.content) {
          setQuoteIsSet(true);
        } else {
          setQuoteIsSet(false);
        }
        setQuotableQuote(response.data.content);
        setQuotableQuoteAuthor(response.data.author);
      });
    };

    getQuotableQuote();
  }, []);

  return (
    <>
      <div className="hero">
        <p className="hero__statement">
          As a{" "}
          <span className="hero__highlight">Full Stack Software Developer</span>
          , I specialize in crafting and developing digital products. I am
          currently available for new opportunities and freelancing work. If you
          have a project that needs a skilled developer, feel free to reach out
          to me via the{" "}
          <a href="#contact-me" className="hero__contact-link">
            contact
          </a>{" "}
          button.
        </p>
        {quoteIsSet && (
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
