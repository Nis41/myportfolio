import React from "react";
import Main from "./Main/Main";
import About from "./About/About";
import Skills from "./Skills/Skills";
import "./HomePage.css";

const HomePage = () => {
  return (
    <React.Fragment>
      <Main />
      <About />
      <Skills />
    </React.Fragment>
  );
};

export default HomePage;
