import myHeadShot from "../../assets/pictures/headshot.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import "./AboutMeImage.scss";

const AboutMeImage = () => {
  const [pictures, setPictures] = useState("");
  const [selectedPicUrl, setSelectedPicUrl] = useState(myHeadShot);
  const [prompt, setPrompt] = useState("");

  const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

  const fetchPhotosByQuery = (query) => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&query=${query}`
      )
      .then((response) => response.data)
      .then((data) => setPictures(data.results))
      .catch((error) => console.log("Error on fetchPhotosByQuery: ", error));
  };

  // useEffect(() => fetchPhotosByQuery("cat"), [pictures]);

  const submitHandler = (e) => {
    e.preventDefault();
    fetchPhotosByQuery(prompt);
    console.log("Reached");
    setSelectedPicUrl(pictures[0].urls.small);
  };

  return (
    <>
      <div className="about__picture">
        <img
          src={selectedPicUrl}
          alt="headshot.jpg"
          className="about__picture-img"
        />
      </div>
      <form className="about__form" onSubmit={submitHandler}>
        <label className="about__change-pic">
          Want to see something else?
          <input
            placeholder="Enter Text here"
            type="text"
            onChange={(e) => setPrompt(e.target.value)}
          />
        </label>
        <button className="about__submit" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default AboutMeImage;
