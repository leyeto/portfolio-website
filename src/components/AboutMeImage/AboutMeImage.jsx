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
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "512x512",
    });
    setAiImageUrl(response.data.data[0].url);
    if (
      AiImageUrl.length > 0 ||
      AiImageUrl !== null ||
      AiImageUrl !== undefined
    ) {
      setAiIsGenerated(true);
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
    <div className="about__picture">
      <img src={imageUrl} alt="headshot.jpg" className="about__picture-img" />
      <form onSubmit={submitHandler}>
        <label>
          Want to see something else?
          <input type="text" onChange={(e) => setPrompt(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AboutMeImage;
