import gitImg from "../../assets/icons/github-link.svg";
import videoImg from "../../assets/icons/video.svg";
import linkImg from "../../assets/icons/link.svg";
import "./Project.scss";

const Project = ({ project }) => {
  return (
    <div className="project">
      <div className="project__project">
        <h3 className="project__header">{project.project}</h3>
        <div className="project__about">
          <p className="project__about-text">{project.about}</p>
        </div>
        <div className="project__tech">
          <ul className="project__tech-list">
            {project.techs.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
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
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project__git-link"
              >
                git
                <img
                  className="project__githubImg"
                  src={gitImg}
                  alt="github-link"
                />
              </a>
            </li>
            {project.links.loom && (
              <li className="project__loom">
                <a
                  href={project.links.loom}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project__loom-link"
                >
                  video
                  <img
                    className="project__videoImg"
                    src={videoImg}
                    alt="video-link"
                  />
                </a>
              </li>
            )}
            {project.links.exLink && (
              <li className="project__exlink">
                <a
                  href={project.links.exLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project__exlink-link"
                >
                  link
                  <img
                    className="project__externalImg"
                    src={linkImg}
                    alt="link to external website"
                  />
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
