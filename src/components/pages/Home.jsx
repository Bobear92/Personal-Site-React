import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

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
        <p className="home-text">
          <b className="home-underline">Coding Skills</b>
          <br />
          <br />
          <em>Proficient: </em>
          Javascript | HTML 5 | CSS | Node.js| React.js | Postgresql
          <br />
          <em>Knowledgeable: </em>
          Git | Bootstrap | Express| jQuery
          <br />
          <em>Basic: </em>
          Heroku
        </p>
        <p className="home-text">
          <b className="home-underline">Education</b>
          <br />
          <br />
          University of North Florida
          <br />
          Web Development Immersive Program, Powered by
          <b> Fullstack Academy.</b>
          <br />
          <b>Certificate in Web Development </b>- December 2020
          <br />
          <em>
            26-week coding bootcamp focused on fullstack development. Emphasis
            on paired programming in an agile environment.
          </em>
          <br />
          <br />
          University of North Florida
          <br />
          <b>Bachelor of Arts, International Studies </b> - August 2015
          <br />
          Minors - <em>Spanish and Mandarin Chinese</em>
        </p>
        <p className="home-text">
          <b className="home-underline">Interest</b>
          <br />
          <ul>
            <li>Rescue Certified Diver</li>
            <li>International Travel</li>
            <li>Table Top RPGs</li>
          </ul>
        </p>
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
