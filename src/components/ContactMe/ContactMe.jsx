import linkedInImg from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";

import "./ContactMe.scss";

const ContactMe = () => {
  return (
    <>
      <div className="contact" id="contact-me">
        <h2 className="contact__heading">Contact Me</h2>
        <p className="contact__statement">
          Thanks for visiting my website, I am currently open to new
          opportunites and working on projects.
        </p>
        <p className="contact__statement2">
          Feel free to contact me by clicking the link below.
        </p>

        <a
          className="contact__email"
          href="mailto:ioaleye@gmail.com?subject=Mail from portfolio website"
          target="blank"
        >
          Contact Me
        </a>

        <ul className="contact__links">
          <li className="contact__list-item">
            <a
              className="contact__linkedIn-link"
              href="https://www.linkedin.com/in/adeleye-ifaturoti/"
              target="blank"
            >
              <img
                className="contact__linkedIn-icon"
                src={linkedInImg}
                alt="linkedIn icon"
              />
            </a>
          </li>
          <li className="contact__list-item">
            <a
              className="contact__github-link"
              href="https://www.github.com/leyeto/"
              target="blank"
            >
              <img
                className="contact__github-icon"
                src={github}
                alt="github icon"
              />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactMe;
