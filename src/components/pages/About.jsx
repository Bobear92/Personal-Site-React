import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// Camel =  "<img src="./public/pictures/Camel.JPG" alt="Camel riding" width="500" height="600"/>";
// Himalayas = {<img src="pictures/Himalayas.JPG" alt="Mountain Shot" width="500" height="600">};
// Scuba = {<img src="pictures/Scuba.JPG" alt="Scuba Okay" width="500" height="600">};
// Teacher = {<img src="pictures/Teacher.JPG" alt="Disney English" width="500" height="600">};

import camel from "./public/pictures/Camel.JPG";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <img
        src="./public/pictures/Camel.JPG"
        alt="Camel riding"
        width="500"
        height="600"
      />
    </div>
  );
};

export default About;
