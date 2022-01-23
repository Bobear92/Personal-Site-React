import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio-main-container">
      <div className="current-project-container">
        <h3 className="portfolio-title">Current Coding Project</h3>
        <div className="current-project-box">
          <p className="project-title">RPG App</p>
          <p className="project-description">
            A comprehensive table top rpg app based in Dungeons and Dragons 5E.
            Game masters will be able to upload and create content about the
            world their game takes place in along with add, edit, and delete
            items, spells, classes, subclasses and more.
          </p>
          <p className="project-description">
            Players will be able to create characters with a comprehensive
            character sheet that includes the mechanical aspects of the
            character along with being able to upload photos, add narrative
            descriptions, and save information about the game world they find
            important.
          </p>
          <p className="project-description">
            The app uses an official Dungeons and Dragons 5E api that grabs data
            then clones it into its own postgresql database so that the Game
            master has complete creative control.
          </p>
          <div className="project-links">
            <a
              href="https://github.com/Bobear92/RPG-Campaign-App"
              title="Git Hub"
              target="_blank"
            >
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                width="75"
                height="75"
              />
            </a>
            <a
              href="https://rpg-campaign-app.herokuapp.com/"
              title="page link"
              target="_blank"
            >
              <img
                src="https://www.pngkit.com/png/detail/205-2055556_free-icons-png-web-icon-round-png.png"
                width="75"
                height="75"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="completed-project-container">
        <h3 className="portfolio-title">Completed Coding Projects</h3>
        <div className="each-project">
          <div className="project-box">
            <p className="project-title">Sleepy Time Earplugs</p>
            <p className="project-description">
              Full CRUD app that imitates a typlical shopping site. A fullstack
              app using Postgresql to create the backend and React to create the
              front end.
            </p>
            <div className="project-links">
              <a
                href="https://github.com/Bobear92/Graceshopper"
                title="Git Hub"
                target="_blank"
              >
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  width="75"
                  height="75"
                />
              </a>
              <a
                href="https://sleepytime-earplugs.herokuapp.com/"
                title="page link"
                target="_blank"
              >
                <img
                  src="https://www.pngkit.com/png/detail/205-2055556_free-icons-png-web-icon-round-png.png"
                  width="75"
                  height="75"
                />
              </a>
            </div>
          </div>
          <div className="project-box">
            <p className="project-title">Globules</p>
            <p className="project-description">
              Remake of a retro arcade game, Ataxx. The game heavily utilizes
              Javascript. This was the first major project I built myself and I
              am very proud of it.
            </p>
            <div className="project-links">
              <a
                href="https://github.com/Bobear92/Globules"
                title="Git Hub"
                target="_blank"
              >
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  width="75"
                  height="75"
                />
              </a>
              <a
                href="https://globules.netlify.app/"
                title="page link"
                target="_blank"
              >
                <img
                  src="https://www.pngkit.com/png/detail/205-2055556_free-icons-png-web-icon-round-png.png"
                  width="75"
                  height="75"
                />
              </a>
            </div>
          </div>
          <div className="project-box">
            <p className="project-title">Art Collector</p>
            <p className="project-description">
              A complex search system to search through an api from a harvard
              art museum. Can search for pieces of art and historical items
              based on many different qualities.
            </p>
            <div className="project-links">
              <a
                href="https://github.com/Bobear92/Art-Collector-using-React"
                title="Git Hub"
                target="_blank"
              >
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  width="75"
                  height="75"
                />
              </a>
              <a
                href="https://havardartcollection.netlify.app/"
                title="page link"
                target="_blank"
              >
                <img
                  src="https://www.pngkit.com/png/detail/205-2055556_free-icons-png-web-icon-round-png.png"
                  width="75"
                  height="75"
                />
              </a>
            </div>
          </div>
          <div className="project-box">
            <p className="project-title">Calculator</p>
            <p className="project-description">
              A functioning calculator utilizing JQuery and Grid.
            </p>
            <div className="project-links">
              <a
                href="https://github.com/Bobear92/Calculator"
                title="Git Hub"
                target="_blank"
              >
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  width="75"
                  height="75"
                />
              </a>
              <a
                href="https://calculator-woolbright.netlify.app/"
                title="page link"
                target="_blank"
              >
                <img
                  src="https://www.pngkit.com/png/detail/205-2055556_free-icons-png-web-icon-round-png.png"
                  width="75"
                  height="75"
                />
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
                  width="75"
                  height="75"
                />
              </a>
              <a
                href="https://purple-retrodraw.netlify.app/"
                title="page link"
                target="_blank"
              >
                <img
                  src="https://www.pngkit.com/png/detail/205-2055556_free-icons-png-web-icon-round-png.png"
                  width="75"
                  height="75"
                />
              </a>
            </div>
          </div>
          <div className="project-box">
            <p className="project-title">Stranger's Things</p>
            <p className="project-description">
              A crud app with user capabilities and search functionality. This
              is the first fullstack CRUD app that I built.
            </p>
            <div className="project-links">
              <a
                href="https://github.com/Bobear92/Strangers-Things"
                title="Git Hub"
                target="_blank"
              >
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  width="75"
                  height="75"
                />
              </a>
              <a
                href="https://caseynroberts-strangersthings.netlify.app/"
                title="page link"
                target="_blank"
              >
                <img
                  src="https://www.pngkit.com/png/detail/205-2055556_free-icons-png-web-icon-round-png.png"
                  width="75"
                  height="75"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
