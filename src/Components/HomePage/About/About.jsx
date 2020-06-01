import React from "react";
import { NavLink } from "react-router-dom";
import Hr from "../../Common/Hr/Hr";
import aboutImage from "./Images/n2.jpg";
import colorGridImage from "./Images/color_grid.png";
import "./About.css";

const About = () => {
  return (
    <div className="aboutMeDiv">
      <h3 className="title">About Me</h3>
      <Hr />
      <p className="aboutMeText">
        <div className="gridImageOne">
          <img src={colorGridImage} alt="gridImage" />
        </div>
        I am Nisarg Hiteshkumar Patel, A freelance full stack web developer, I
        have completed my bachlors degree and Pursuing my masters degree in
        computer science at Department of Computer Science , Hngu.
        <NavLink to="/about" className="moreBtn">
          More
        </NavLink>
      </p>

      <div className="imageDiv">
        <img src={aboutImage} alt="AboutImage" />
        <div className="gridImageTwo">
          <img src={colorGridImage} alt="gridImage" />
        </div>
      </div>
    </div>
  );
};

export default About;
