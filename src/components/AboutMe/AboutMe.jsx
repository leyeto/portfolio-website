import myHeadShot from "../../assets/pictures/headshot.jpg";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import skills from "../../data/skills";

const AboutMe = () => {
  return (
    <>
      <div className="about">
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
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="skill" />
            <YAxis
              domain={[0, 100]}
              tickSize={6}
              label={{ value: "Percentage", angle: -90 }}
            />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="percentage"
              fill="#8884d8"
              barSize={40}
              background={{ fill: "#eee" }}
            />
          </BarChart>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
