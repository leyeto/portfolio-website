import myHeadShot from "../../assets/pictures/headshot.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import "./AboutMeImage.scss";

const AboutMeImage = () => {
  const [pictures, setPictures] = useState("");
  const [selectedPicUrl, setSelectedPicUrl] = useState(myHeadShot);
  const [prompt, setPrompt] = useState("");

  const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
  const BASE_URL = "https://api.unsplash.com";

  const fetchPhotosByQuery = (query) => {
    axios
      .get(`${BASE_URL}/search/photos?client_id=${ACCESS_KEY}&query=${query}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.results.length > 0) {
          setPictures(data.results);
          return data.results;
        } else {
          throw Error("data.result.length < 1. No data recieved");
        }
      })
      .then((arrayOfPictures) =>
        arrayOfPictures.sort((a, b) => b.likes - a.likes)
      )
      .then((sortedArray) => setPictures(sortedArray))
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  };

  useEffect(() => {
    if (pictures) {
      setSelectedPicUrl(pictures[0].urls.small);
    }
  }, [pictures]);

  const submitHandler = (e) => {
    e.preventDefault();
    fetchPhotosByQuery(prompt);
    setPrompt("");
  };

  const resetPicture = () => {
    console.log("Reset clicked");
    setSelectedPicUrl(myHeadShot);
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
      {/* <form className="about__form" onSubmit={submitHandler}>
        <label className="about__change-pic">
          See something else (Unsplash API)?
          <input
            className="about__change-textbox"
            placeholder="Enter Text here"
            value={prompt}
            type="text"
            onChange={(e) => setPrompt(e.target.value)}
          />
        </label>
        <button className="about__submit" type="submit">
          Submit
        </button>
        <input
          type="button"
          className="about__reset"
          value="Reset"
          onClick={() => resetPicture()}
        />
      </form> */}
    </>
  );
};

export default AboutMeImage;
