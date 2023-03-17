import "./Header.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import user from "../../assets/icons/user.png";
import folder from "../../assets/icons/folder.png";
import send from "../../assets/icons/send.png";
import menu from "../../assets/icons/menu.png";
import x from "../../assets/icons/x.png";

function App() {
  let [toggler, setToggler] = useState(false);

  const toggleNav = () => {
    if (!toggler) {
      setToggler(true);
    } else {
      setToggler(false);
    }
  };

  return (
    <>
      {toggler ? <div onClick={toggleNav} className="not-header"></div> : ""}
      <div
        className="header"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <nav className="nav">
          <Link to="/Home" className="nav__logo">
            lee
          </Link>
          <div>
            <div className="nav__options">
              <a href="#about" className="nav__option-container">
                <img src={user} alt="user-icon" />
                <h2 href="about" className="nav__option">
                  About
                </h2>
              </a>
              <a href="#projects" className="nav__option-container">
                <img src={folder} alt="folder-icon" />
                <h2 href="#projects" className="nav__option">
                  Projects
                </h2>
              </a>
              <a href="#contact" className="nav__option-container">
                <img src={send} alt="send-icon" />
                <h2 href="#contact" className="nav__option">
                  Contact
                </h2>
              </a>
            </div>
          </div>
          <img
            onClick={toggleNav}
            className="nav__toggle"
            src={toggler ? x : menu}
            alt="menu-icon"
          />
        </nav>
        <div>
          {toggler ? (
            <div className="nav__options--toggled">
              <a
                href="#about"
                onClick={toggleNav}
                className="nav__option-container"
              >
                <img src={user} alt="user-icon" />
                <h2 href="about" className="nav__option">
                  About
                </h2>
              </a>
              <a
                href="#projects"
                onClick={toggleNav}
                className="nav__option-container"
              >
                <img src={folder} alt="folder-icon" />
                <h2 href="#projects" className="nav__option">
                  Projects
                </h2>
              </a>
              <a
                href="#contact"
                onClick={toggleNav}
                className="nav__option-container"
              >
                <img src={send} alt="send-icon" />
                <h2 href="#contact" className="nav__option">
                  Contact
                </h2>
              </a>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
