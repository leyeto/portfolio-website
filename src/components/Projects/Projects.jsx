import "./Projects.scss";
import projects from "../../data/projects.js";

const Projects = () => {
  return (
    <section>
      <div className="projects">
        <h1 className="projects__heading">Projects</h1>
        {projects.map((project) => {
          return (
            <div className="projects__sub-project">
              <h2 className="projects__sub-header">{project.project}</h2>
              <div className="projects__sub-about">
                <p className="projects__about-text">{project.about}</p>
              </div>
              <div className="projects__sub-tech">
                <p className="projects__tech-text">{project.tech}</p>
              </div>
              <div className="projects__sub-image">
                <img
                  src={project.img.imgLink}
                  alt={project.img.alt}
                  className="projects__sub-image"
                />
              </div>
              <div className="projects__sub-links">
                <ul className="projects__links-list">
                  <li className="projects__git">
                    <a
                      href={project.links.github}
                      className="projects__git-link"
                    >
                      Git
                    </a>
                  </li>
                  <li className="projects__loom">
                    <a
                      href={project.links.loom}
                      className="projects__loom-link"
                    >
                      Loom
                    </a>
                  </li>
                  {project.links.exLink && (
                    <li className="projects__exlink">
                      <a
                        href={project.links.exlink}
                        className="projects__exlink-link"
                      >
                        External Link
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
