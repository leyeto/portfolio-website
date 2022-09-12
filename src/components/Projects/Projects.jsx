import projects from "../../data/projects.js";
import Project from "../Project/Project";
import "./Projects.scss";

const Projects = () => {
  return (
    <section>
      <div className="projects">
        <h1 className="projects__heading">Projects</h1>
        {projects.map((project) => {
          return <Project project={project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
