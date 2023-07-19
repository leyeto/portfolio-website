import skills from "../../data/skills";
import "./AboutMe.scss";
import AboutMeImage from "../AboutMeImage/AboutMeImage";

const AboutMe = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="about__main">
          <div className="about__text">
            <h1 className="about__heading">About Me</h1>
            <div className="about__first-p">
              <p>
                Friends call me, Leye. I have a diverse background in IT
                Support, NHS, customer service, Computer Engineering degree and
                Information Technology degree; this enriched my journey into
                software development.
              </p>
              <p>
                My expertise lies in crafting remarkable digital solutions. With
                a deep understanding of modern web development technologies like
                React, ExpressJs, Node and others, I consistently deliver
                exceptional results.
              </p>
              <p>
                Whether you need a customized website, an intuitive mobile
                application, or a sophisticated web application, I have the
                skills to bring your ideas to life. I provide unparalleled
                service and outstanding outcomes for all your web development
                needs.
              </p>
            </div>
          </div>
          <AboutMeImage />
        </div>

        <div id="skills" className="about__skills">
          <h2 className="about__skills-heading">Skills</h2>
          <ul className="about__skills-list">
            {skills.map((skill, i) => {
              return (
                <li key={i} className="about__skill-item">
                  <img
                    className="about__skill-img"
                    src={skill.url}
                    alt={`${skill.skill} expected`}
                  />
                  <p className="about__skill-name">{skill.skill}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
