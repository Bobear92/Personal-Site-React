import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div className="about-main-container">
      <h1 className="about-name-text">Robert Woolbright</h1>
      <div className="about-text-container">
        <p className="about-text">
          <b className="about-underline">Coding Skills</b>
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
        <p className="about-text">
          <b className="about-underline">Education</b>
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
        <p className="about-text">
          <b className="about-underline">Interest</b>
          <br />
          <ul>
            <li>Rescue Certified Diver</li>
            <li>International Travel</li>
            <li>Table Top RPGs</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default About;
