import logoImg from "../../assets/logos/logo-full.svg";
import fullStack from "../../assets/documents/Adeleye_Ifaturoti_Full_Stack_React_Developer.pdf";

import "./Header.scss";

const Header = () => {
  return (
    <>
      <header>
        <div className="header">
          <nav className="header__nav">
            <div className="header__logo-div">
              <a href="/">
                <img
                  className="header__logo"
                  src={logoImg}
                  alt="full-name-logo"
                />
              </a>
            </div>
            <div className="header__navbar">
              <ul className="header__list">
                <li className="header__list-item  header__about-me">
                  <a href="#about">About me</a>
                </li>
                <li className="header__list-item header__skills">
                  <a href="#skills">Skills</a>
                </li>
                <li className="header__list-item  header__projects">
                  <a href="#projects">Projects</a>
                </li>
                <li className="header__list-item  header__contact-me">
                  <a href="#contact-me">Contact me</a>
                </li>
                <li className="header__list-item">
                  <a
                    className="header__resume-button"
                    href={fullStack}
                    target="blank"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
