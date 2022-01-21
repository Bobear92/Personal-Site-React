import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="portfolio-main-container">
      <div className="current-project-container">
        <h3>Current Coding Project</h3>
      </div>

      <div className="completed-project-container">
        <h3>Completed Coding Projects</h3>
      </div>
    </div>
  );
};

export default Portfolio;
