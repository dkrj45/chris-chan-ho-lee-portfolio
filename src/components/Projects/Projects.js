import "./Projects.scss";
import misely from "../../assets/images/thumbnail.png";
import instock from "../../assets/images/instock.png";
import brainflix from "../../assets/images/brainflix.png";
import bandsite from "../../assets/images/bandsite.png";
import clchat from "../../assets/images/clchat.png";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import html from "../../assets/logos/html.png";
import css from "../../assets/logos/css.png";
import javascript from "../../assets/logos/javascript.png";
import react from "../../assets/logos/react.png";
import node from "../../assets/logos/node.png";
import express from "../../assets/logos/express.png";
import sass from "../../assets/logos/sass.png";
import socket from "../../assets/logos/socket.png";
import postgresql from "../../assets/logos/postgresql.png";
import redis from "../../assets/logos/redis.png";
import aws from "../../assets/logos/aws.png";
import docker from "../../assets/logos/docker.png";

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
                visit the project site!
              </p>
              <div className="projects__card-button-container">
                <a
                  href="https://clchat.chanholee.com"
                  className="projects__card-button--first"
                >
                  Visit Project
                </a>
                <a
                  href="https://www.youtube.com/watch?v=fgyDKTkePIw&t=4s"
                  className="projects__card-button--second"
                >
                  Watch Demo
                </a>
              </div>

              <div className="projects__card-tech-stack">
                <img src={html} alt="html" />
                <img src={css} alt="css" />
                <img src={javascript} alt="javascript" />
                <img src={react} alt="react" />
                <img src={node} alt="node" />
                <img src={express} alt="express" />
                <img src={sass} alt="sass" />
                <img src={socket} alt="socket.IO" />
                <img src={postgresql} alt="postgreSQL" />
                <img src={redis} alt="redis" />
                <img src={aws} alt="aws" />
                <img src={docker} alt="docker" />
              </div>
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
              <div className="projects__card-button-container">
                <a
                  href="https://misely.chanholee.com"
                  className="projects__card-button--first"
                >
                  Visit Project
                </a>
                <a
                  href="https://www.youtube.com/watch?v=JXgPsyD4D24"
                  className="projects__card-button--second"
                >
                  Watch Demo
                </a>
              </div>
              <div className="projects__card-tech-stack">
                <img src={html} alt="html" />
                <img src={css} alt="css" />
                <img src={javascript} alt="javascript" />
                <img src={react} alt="react" />
                <img src={node} alt="node" />
                <img src={express} alt="express" />
                <img src={sass} alt="sass" />
                <img src={aws} alt="aws" />
              </div>
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
              <div className="projects__card-tech-stack">
                <img src={html} alt="html" />
                <img src={css} alt="css" />
                <img src={javascript} alt="javascript" />
                <img src={react} alt="react" />
                <img src={node} alt="node" />
                <img src={express} alt="express" />
                <img src={sass} alt="sass" />
              </div>
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
              <div className="projects__card-tech-stack">
                <img src={html} alt="html" />
                <img src={css} alt="css" />
                <img src={javascript} alt="javascript" />
                <img src={react} alt="react" />
                <img src={node} alt="node" />
                <img src={express} alt="express" />
                <img src={sass} alt="sass" />
                <img src={aws} alt="aws" />
              </div>
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
              <div className="projects__card-tech-stack">
                <img src={html} alt="html" />
                <img src={css} alt="css" />
                <img src={javascript} alt="javascript" />
                <img src={sass} alt="sass" />
                <img src={aws} alt="aws" />
              </div>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
}

export default Projects;
