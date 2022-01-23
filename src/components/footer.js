import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-main-container">
      <div className="footer-links-container">
        <a
          href="https://www.facebook.com/Bobear1992/"
          title="Facebook"
          target="_blank"
        >
          <img
            src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"
            width="100"
            height="100"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/woolbright-robert/"
          title="Linkedin"
          target="_blank"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"
            width="100"
            height="100"
          />
        </a>
        <a
          href="https://www.instagram.com/bobear_robbot/"
          title="Instagram"
          target="_blank"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png"
            width="100"
            height="100"
          />
        </a>
        <a href="https://github.com/Bobear92" title="Git Hub" target="_blank">
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            width="100"
            height="100"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
