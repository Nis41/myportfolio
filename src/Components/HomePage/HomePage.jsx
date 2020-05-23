import React from "react";
import Main from "./Main/Main";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Testimonials from "./Testimonials/Testimonials";
import "./HomePage.css";

const HomePage = () => {
  return (
    <React.Fragment>
      <Main />
      <About />
      <Skills />
      <Testimonials />
    </React.Fragment>
  );
};

export default HomePage;
