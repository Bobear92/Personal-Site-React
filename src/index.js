import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Header } from "./components";
import { Footer } from "./components";
import { About } from "./components ./pages"; // not sure how to find this
import { Home } from "./components ./pages";
import { Portfolio } from "./components ./pages";

const App = () => {
  return (
    <Router>
      <div id="App">
        <Header />
        <Footer />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
