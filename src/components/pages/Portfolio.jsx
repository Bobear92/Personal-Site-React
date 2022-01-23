import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio-main-container">
      <div className="current-project-container">
        <h3>Current Coding Project</h3>
        <div className="project-box">
          <p className="project-title">RPG App</p>
          <p className="project-description">
            A comprehensive app where game masters .....
          </p>
          <div className="project-links">
            <a
              href="https://github.com/Bobear92/RPG-Campaign-App"
              title="Git Hub"
              target="_blank"
            >
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                width="100"
                height="100"
              />
            </a>
            <a
              href="https://rpg-campaign-app.herokuapp.com/"
              title="page link"
              target="_blank"
            >
              To Site
            </a>
          </div>
        </div>
      </div>

      <div className="completed-project-container">
        <h3>Completed Coding Projects</h3>
        <div className="each-project">
          <div className="project-box">
            <p className="project-title">Sleepy Time Earplugs</p>
            <p className="project-description">Full CRUD app site ...</p>
            <div className="project-links">
              <a
                href="https://github.com/Bobear92/Graceshopper"
                title="Git Hub"
                target="_blank"
              >
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  width="100"
                  height="100"
                />
              </a>
              <a
                href="https://sleepytime-earplugs.herokuapp.com/"
                title="page link"
                target="_blank"
              >
                To Site
              </a>
            </div>
          </div>
          <div className="project-box">
            <p className="project-title">Globules</p>
            <p className="project-description">
              Remake of a retro arcade game ....
            </p>
            <div className="project-links">
              <a
                href="https://github.com/Bobear92/Globules"
                title="Git Hub"
                target="_blank"
              >
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  width="100"
                  height="100"
                />
              </a>
              <a
                href="https://globules.netlify.app/"
                title="page link"
                target="_blank"
              >
                To Site
              </a>
            </div>
          </div>
          <div className="project-box">
            <p className="project-title">Art Collector</p>
            <p className="project-description">
              Utilizing a and searching through a database ...
            </p>
            <div className="project-links">
              <a
                href="https://github.com/Bobear92/Art-Collector-using-React"
                title="Git Hub"
                target="_blank"
              >
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  width="100"
                  height="100"
                />
              </a>
              <a
                href="https://havardartcollection.netlify.app/"
                title="page link"
                target="_blank"
              >
                To Site
              </a>
            </div>
          </div>
          <div className="project-box">
            <p className="project-title">Calculator</p>
            <p className="project-description">
              A functioning calculator utilizing JQuery.
            </p>
            <div className="project-links">
              <a
                href="https://github.com/Bobear92/Calculator"
                title="Git Hub"
                target="_blank"
              >
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  width="100"
                  height="100"
                />
              </a>
              <a
                href="https://calculator-woolbright.netlify.app/"
                title="page link"
                target="_blank"
              >
                To Site
              </a>
            </div>
          </div>
          <div className="project-box">
            <p className="project-title">Retro Draw</p>
            <p className="project-description">
              A painting app built with Javascript and jQuery.
            </p>
            <div className="project-links">
              <a
                href="https://github.com/Bobear92/Retro-Draw"
                title="Git Hub"
                target="_blank"
              >
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  width="100"
                  height="100"
                />
              </a>
              <a
                href="https://purple-retrodraw.netlify.app/"
                title="page link"
                target="_blank"
              >
                To Site
              </a>
            </div>
          </div>
          <div className="project-box">
            <p className="project-title">Stranger's Things</p>
            <p className="project-description">
              A crud app with user capabilities and search functionality.
            </p>
            <div className="project-links">
              <a
                href="https://github.com/Bobear92/Strangers-Things"
                title="Git Hub"
                target="_blank"
              >
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  width="100"
                  height="100"
                />
              </a>
              <a
                href="https://caseynroberts-strangersthings.netlify.app/"
                title="page link"
                target="_blank"
              >
                To Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
