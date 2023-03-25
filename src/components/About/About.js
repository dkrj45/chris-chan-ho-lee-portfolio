import "./About.scss";
import resume from "../../assets/files/Chris Lee - Resume.pdf";

function About() {
  return (
    <div id="about" className="about">
      <h2 className="about__title">About Me</h2>
      <p className="about__subtitle">
        Ex-public employee with background in engineering
      </p>
      <div className="about__tablet-aligner">
        <div className="about__tablet-divider">
          <div className="about__skills-container">
            <h3 className="about__skills-title">Skills</h3>
            {/* <h4 className="about__skills-subtitle">Languages</h4> */}
            <ul className="about__skills-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>Sass</li>
              <li>Javascript</li>
              <li>TypeScript</li>
              <li>SQL</li>
              {/* </ul>
            <h4 className="about__skills-subtitle">Libraries</h4>
            <ul className="about__skills-list"> */}
              <li>React</li>
              <li>Node</li>
              <li>Express</li>
              <li>Socket.IO</li>
              <li>Knex.js</li>
              {/* </ul>
            <h4 className="about__skills-subtitle">Tools</h4>
            <ul className="about__skills-list"> */}
              <li>Git</li>
              <li>Redis</li>
              <li>PostgreSQL</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>Postman</li>
              <li>Auth0</li>
            </ul>
          </div>
          <div>
            <p className="about__text">
              A technology and engineering enthusiast making a career transition
              into Web Development. I enjoy bringing ideas to life with
              creativity, aesthetics and functionality in mind.
            </p>
            <p className="about__text">
              With previous background in mechanical engineering and
              investigative services comes a proven record of thinking like a
              machine and problem solving.
            </p>
            <p className="about__text">
              Check out the 'Projects' section below to see my latest deployed
              websites!
            </p>
            <div className="about__resume-container">
              <a
                href={resume}
                download="chris-lee-resume.pdf"
                className="about__resume"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
