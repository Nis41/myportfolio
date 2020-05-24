import React from "react";
import Main from "./Main/Main";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Testimonials from "./Testimonials/Testimonials";
import Discuss from "./Discuss/Discuss";
import "./HomePage.css";

const HomePage = () => {
  return (
    <React.Fragment>
      <Main />
      <About />
      <Skills />
      <Testimonials />
      <Discuss />
    </React.Fragment>
  );
};

export default HomePage;
