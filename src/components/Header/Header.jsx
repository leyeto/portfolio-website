import logoImg from "../../assets/logos/logo-full.svg";

import "./Header.scss";

const Header = () => {
  return (
    <>
      <header>
        <div className="header">
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
              <li className="header__list-item">
                <a href="/">About me</a>
              </li>
              <li className="header__list-item">
                <a href="/">Experience</a>
              </li>
              <li className="header__list-item">
                <a href="/">Work</a>
              </li>
              <li className="header__list-item">
                <a href="/">Contact me</a>
              </li>
              <li className="header__list-item">
                <button>Resume</button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
