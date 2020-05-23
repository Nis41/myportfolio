import React from "react";
import { NavLink } from "react-router-dom";

const TextOnImage = (props) => {
  // const imagePath = props.imagePath;
  // if (imagePath === props.Img1) {
  if (true) {
    return (
      <div className="textOnImage animated bounceInLeft">
        <div className="textBackground">
          <h4>Hello</h4>
          <h2>
            I'm
            <span> Nisarg H Patel</span>
          </h2>
          <h3>A Freelance Web Developer</h3>
          <NavLink to="/contact" className="hireMe hvr-rectangle-out">
            Hire Me
          </NavLink>
        </div>
      </div>
    );
  } else {
    return (
      <div className="textOnImage animated bounceInLeft">
        <div className="textBackground">
          <h4>I'm</h4>
          <h2>
            <span className="fullStack">Full Stack </span>
            Web Developer
          </h2>
          <h3>from Patan</h3>
          <NavLink to="/contact" className="hireMe hvr-rectangle-out">
            Hire Me
          </NavLink>
        </div>
      </div>
    );
  }
};

export default TextOnImage;
