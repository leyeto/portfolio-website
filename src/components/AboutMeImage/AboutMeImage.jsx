import myHeadShot from "../../assets/pictures/headshot.jpg";
import "./AboutMeImage.scss";

const AboutMeImage = () => {
  return (
    <div className="about__picture">
      <img src={myHeadShot} alt="headshot.jpg" className="about__picture-img" />
    </div>
  );
};

export default AboutMeImage;
