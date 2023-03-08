import myHeadShot from "../../assets/pictures/headshot.jpg";
import { useState } from "react";
import "./AboutMeImage.scss";
const { Configuration, OpenAIApi } = require("openai");

const AboutMeImage = () => {
  const [prompt, setPrompt] = useState("");
  const [AiImageUrl, setAiImageUrl] = useState("");
  const [AiIsGenerated, setAiIsGenerated] = useState(false);

  const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

  let imageUrl = myHeadShot;

  const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    try {
      const response = await openai.createImage({
        prompt: prompt || "a white siamese cat",
        n: 1,
        size: "512x512",
      });

      setAiImageUrl(response.data.data[0].url);
      console.log("response Data: ", AiImageUrl);
      if (
        AiImageUrl.length > 0 ||
        AiImageUrl !== null ||
        AiImageUrl !== undefined
      ) {
        setAiIsGenerated(true);
      }

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    generateImage();
  };
  if (AiIsGenerated) {
    imageUrl = AiImageUrl;
  } else {
    imageUrl = myHeadShot;
  }

  return (
    <>
      <div className="about__picture">
        <img src={imageUrl} alt="headshot.jpg" className="about__picture-img" />
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
