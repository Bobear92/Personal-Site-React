import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import camel from "../../pictures/Camel.JPG";
import himalayas from "../../pictures/Himalayas.JPG";
import diving from "../../pictures/Scuba.JPG";
import teach from "../../pictures/Teacher.JPG";

const fadeImages = [
  {
    url: camel,
    caption: "Camel riding in Puskar",
  },
  {
    url: himalayas,
    caption: "Himalayas",
  },
  {
    url: diving,
    caption: "Scuba Diving",
  },
  {
    url: teach,
    caption: "Teaching English Abroad",
  },
];

const Home = () => {
  return (
    <div className="home-main-container">
      <div className="home-intro-container">
        <p className="home-extra-large">
          Welcome to my website where I will demonstrate some of the technical
          skills I am capable of. <br />
          You can find more information about my self in the About link and
          examples of some of my work in the Portfolio link.
        </p>

        <div className="slide-container">
          <Fade>
            {fadeImages.map((fadeImage, index) => {
              return (
                <div className="each-fade" key={index}>
                  <div className="image-container">
                    <img src={fadeImage.url} width="500" height="450" />
                  </div>
                  <h2>{fadeImage.caption}</h2>
                </div>
              );
            })}
          </Fade>
        </div>
      </div>
      <div className="home-quote-container">
        <p className="home-quote">
          <b className="home-extra-large">Favorite Quotes</b>
        </p>
        <p className="home-quote">
          Space is a swarming in the eyes; and time, <br />
          A singing in the ears. In this hive I'm <br />
          Locked up. Yet, <em>if</em> prior to life we had <br />
          Been able to imagine life, what mad, <br />
          Impossible, unutterably weird, <br />
          Wonderful nonsense it might have appeared!
          <br />
          <br />
          <b>Vladimir Nabokov</b>, <em>Pale Fire</em>
        </p>
        <p className="home-quote">
          <br />
          <br />
          And now that you don't have to be perfect, you can be good.
          <br />
          <br />
          <b>John Steinbeck</b>, <em>East of Eden</em>
        </p>
      </div>
    </div>
  );
};

export default Home;
