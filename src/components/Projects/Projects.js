import "./Projects.scss";
import misely from "../../assets/images/thumbnail.png";
import instock from "../../assets/images/instock.png";
import brainflix from "../../assets/images/brainflix.png";
import bandsite from "../../assets/images/bandsite.png";
import clchat from "../../assets/images/clchat.png";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Projects() {
  return (
    <div id="projects" className="projects">
      <h2 className="projects__title">Projects</h2>
      <p className="projects__subtitle">Scroll through my projects!</p>
      <div className="projects__tablet-aligner">
        <AnimationOnScroll
          animateIn="animate__fadeInRightBig"
          animateOut="animate__fadeOutLeftBig"
          duration={0.5}
        >
          <div className="projects__card">
            <img className="projects__card-top" src={clchat} alt="" />
            <div className="projects__card-bottom">
              <h3 className="projects__card-title">CL Chat</h3>
              <p className="projects__card-text">
                CL Chat is a fully responsive real-time chat app. Once
                registered and logged in, users can add friends, check their
                online status and start chatting. Check out the demo video and
                visit the project si te!
              </p>
              <a
                href="https://clchat.chanholee.com"
                className="projects__card-button"
              >
                Visit Project
              </a>
              <ul className="projects__card-tech-stack">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Node</li>
                <li>Express</li>
                <li>Sass</li>
                <li>Socket.io</li>
                <li>PostgreSQL</li>
                <li>Redis</li>
                <li>AWS (EC2)</li>
                <li>Docker</li>
              </ul>
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInLeftBig"
          animateOut="animate__fadeOutRightBig"
          duration={0.5}
        >
          <div className="projects__card">
            <img className="projects__card-top" src={misely} alt="" />
            <div className="projects__card-bottom">
              <h3 className="projects__card-title">Misely</h3>
              <p className="projects__card-text">
                Misely is a mobile app that connects new mothers with
                interviewed, background-checked and top-rated professionals to
                make postpartum period enjoyable. The deployed website is a
                proof-of-concept prototype.
              </p>
              <a
                href="https://misely.chanholee.com"
                className="projects__card-button"
              >
                Visit Project
              </a>
              <ul className="projects__card-tech-stack">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Node</li>
                <li>Express</li>
                <li>Sass</li>
                <li>AWS</li>
              </ul>
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInRightBig"
          animateOut="animate__fadeOutLeftBig"
          duration={0.5}
        >
          <div className="projects__card">
            <img className="projects__card-top" src={instock} alt="" />
            <div className="projects__card-bottom">
              <h3 className="projects__card-title">Instock</h3>
              <p className="projects__card-text">
                Instock is a full stack responsive website built for inventory
                management. Users can add, delete, edit, search and view
                warehouses and their inventories. Using SCRUM and KANBAN method,
                a team of 4 developers delivered this project in a week.
              </p>
              <a
                href="https://instock-frontend.onrender.com/warehouse"
                className="projects__card-button"
              >
                Visit Project
              </a>
              <ul className="projects__card-tech-stack">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Node</li>
                <li>Express</li>
                <li>Sass</li>
              </ul>
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInLeftBig"
          animateOut="animate__fadeOutRightBig"
          duration={0.5}
        >
          <div className="projects__card">
            <img className="projects__card-top" src={brainflix} alt="" />
            <div className="projects__card-bottom">
              <h3 className="projects__card-title">Brainflix</h3>
              <p className="projects__card-text">
                Brainflix is a full stack responsive website. It is a video
                streaming platform such as Youtube and Netflix. Users can browse
                videos, comment on them, and even upload their own videos.
              </p>
              <a
                href="https://brainflix.chanholee.com"
                className="projects__card-button"
              >
                Visit Project
              </a>
              <ul className="projects__card-tech-stack">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Node</li>
                <li>Express</li>
                <li>Sass</li>
                <li>AWS</li>
              </ul>
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInRightBig"
          animateOut="animate__fadeOutLeftBig"
          duration={0.5}
        >
          <div className="projects__card">
            <img className="projects__card-top" src={bandsite} alt="" />
            <div className="projects__card-bottom">
              <h3 className="projects__card-title">Bandsite</h3>
              <p className="projects__card-text">
                Bandsite is a fully responsive webpage, showcasing a fictional
                band group 'The Bees Knees'. Viewers are able to learn about the
                band's biography, comment on the page, and view the show
                schedule.
              </p>
              <a
                href="https://bandsite.chanholee.com"
                className="projects__card-button"
              >
                Visit Project
              </a>
              <ul className="projects__card-tech-stack">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Sass</li>
                <li>AWS</li>
              </ul>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
}

export default Projects;
