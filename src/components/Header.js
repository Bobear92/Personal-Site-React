import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-main-container">
      <h1 className="header-h1">Robert Woolbright's Coding Portfolio</h1>
      <div className="button-container">
        <NavLink className="nav-button" to="/Home">
          Home
        </NavLink>
        <NavLink className="nav-button" to="/About">
          About Me
        </NavLink>
        <NavLink className="nav-button" to="/Portfolio">
          Coding Portfolio
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
