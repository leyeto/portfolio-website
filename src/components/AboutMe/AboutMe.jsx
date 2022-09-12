import myHeadShot from "../../assets/pictures/headshot.jpg";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import skills from "../../data/skills";
import "./AboutMe.scss";

const AboutMe = () => {
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
                Engineering and Information Technology and previously worked in
                the NHS in an administrative capacity. I've changed careers to
                Software Engineering due to my passion for programming and
                building solutions.
              </p>
              <p>
                I attended and graduated from BrainStation's Software
                Engineering bootcamp in London in 2022 to help achieve this
                goal. I worked with a number of technologies and worked on
                various projects while at BrainStation.
              </p>
              <p>
                As part of the programme we were assigned a challenge and given
                24 hours challenge from start to finished product. The challenge
                was to find a solution to the Global Warming crisis. My team
                consisted of 2 Developers (including myself), 2 UX Designers and
                1 Data Scientist. Our solution was FixIT, a mobile application
                that connects people that have old, worn or out of fashion
                clothes or furniture to people that can restore or rejuvenate
                these items. We produced an awesome product and won the
                competition.
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
          <BarChart width={750} height={300} data={skills}>
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
        <div className="about__skills">
          <h2 className="about__skills-heading">Skills</h2>
          <ul className="about__skills-list">
            {skills.map((skill) => {
              return (
                <>
                  <li className="about__skill-item">
                    <img
                      className="about__skill-img"
                      src={skill.url}
                      alt={`${skill.skill} expected`}
                    />
                    <p className="about__skill-name">{skill.skill}</p>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
