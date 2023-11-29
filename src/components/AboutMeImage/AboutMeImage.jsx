import myHeadShot from "../../assets/pictures/headshot.jpg";
import { useState } from "react";
import "./AboutMeImage.scss";

const AboutMeImage = () => {
  const [selectedPicUrl, setSelectedPicUrl] = useState(myHeadShot);

  return (
    <>
      <div className="about__picture">
        <img
          src={selectedPicUrl}
          alt="headshot.jpg"
          className="about__picture-img"
        />
      </div>
    </>
  );
};

export default AboutMeImage;
