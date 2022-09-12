import "./Project.scss";

const Project = ({ project }) => {
  return (
    <div className="project">
      <div className="project__project">
        <h2 className="project__header">{project.project}</h2>
        <div className="project__about">
          <p className="project__about-text">{project.about}</p>
        </div>
        <div className="project__tech">
          <ul>
            {project.techs.map((tech) => {
              return <li>{tech}</li>;
            })}
          </ul>
          <p className="project__tech-text">{project.tech}</p>
        </div>
        <div className="project__image">
          <img
            src={project.img.imgLink}
            alt={project.img.alt}
            className="project__image"
          />
        </div>
        <div className="project__links">
          <ul className="project__links-list">
            <li className="project__git">
              <a href={project.links.github} className="project__git-link">
                Git
              </a>
            </li>
            <li className="project__loom">
              <a href={project.links.loom} className="project__loom-link">
                Loom
              </a>
            </li>
            {project.links.exLink && (
              <li className="project__exlink">
                <a href={project.links.exlink} className="project__exlink-link">
                  External Link
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;