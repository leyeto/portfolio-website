import myHeadShot from "../../assets/pictures/headshot.jpg";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import skills from "../../data/skills";
import "./AboutMe.scss";
import { useState, useEffect } from "react";

const axios = require("axios").default;

const AboutMe = () => {
  const [animeQuote, setAnimeQuote] = useState();
  const [animeQuoteAnime, setAnimeQuoteAnime] = useState();
  const [animeQuoteCharacter, setAnimeQuoteCharacter] = useState();

  const Anime_API = "https://animechan.vercel.app/api/random";

  const getAnime = () => {
    axios.get(Anime_API).then((response) => {
      console.log(response.data);
      setAnimeQuote(response.data.quote);
      setAnimeQuoteAnime(response.data.anime);
      setAnimeQuoteCharacter(response.data.character);
    });
  };

  useEffect(() => {
    getAnime();
  }, []);

  return (
    <>
      <div className="about" id="about">
        <div className="about__main">
          <div className="about__text">
            <h1 className="about__heading">About Me</h1>
            <div className="about__first-p">
              <p>
                Hi! My name is Adeleye, would prefer to be called Leye but most
                people pronounce it wrongly as Leigh. I have degrees in Computer
                Engineering and Information Technology, I previously worked in
                the NHS in an administrative capacity. I change careers to
                Software Engineering due to my passion for programming and
                building solutions.
              </p>
              <p>
                I attended and graduated from BrainStation bootcamp in London
                2022 to help achieve this goal. I worked on a number of
                technologies and worked on various projects while at
                BrainStation. My team also won the Industry project challenge, a
                24 hour challenge with Data Scientist and UX Designer. The goal
                is to produce a solution and product within the time.
              </p>
            </div>
          </div>
          <div className="about__picture">
            <img
              src={myHeadShot}
              alt="headshot.jpg"
              className="about__picture-img"
            />
          </div>
        </div>

        <div className="about__graph">
          <BarChart
            width={750}
            height={300}
            data={skills}
            // margin={{
            //   top: 5,
            //   right: 30,
            //   left: 20,
            //   bottom: 5,
            // }}
          >
            <XAxis dataKey="skill" tick={{ fill: "white" }} fontSize={12} />
            <YAxis
              domain={[0, 100]}
              tick={{ fill: "white" }}
              tickSize={6}
              label={{ value: "Percentage", angle: -90 }}
            />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="percentage"
              fill="#508991"
              barSize={40}
              background={{ fill: "#eee" }}
            />
          </BarChart>
        </div>
        <div className="about__anime-quote">
          <h3 className="about__anime-heading">Anime Quote</h3>
          <h4 className="about__anime-quotation">{animeQuote}</h4>
          <p>Character: {animeQuoteCharacter}</p>
          <p>Anime: {animeQuoteAnime}</p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
