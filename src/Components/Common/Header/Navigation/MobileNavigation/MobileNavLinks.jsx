import React from "react";
import { Link } from "react-router-dom";
import "./MobileNavLinks.css";

const MobileNavLinks = (props) => {
  const divClass = props.isSliderOpen ? "mobileSlider open" : "mobileSlider";
  return (
    <div className={divClass}>
      <div className="closeBtnDiv">
        <i
          className={`fa fa-times-circle`}
          onClick={() => {
            props.sliderCloser();
          }}
        ></i>
      </div>
      <nav className="navigation">
        <ul className="navigationUl">
          <li className="navigationLi">
            <Link to="/">Home</Link>
          </li>
          <li className="navigationLi">
            <Link to="/about">About</Link>
          </li>
          <li className="navigationLi">
            <Link to="/skills">Skills</Link>
          </li>
          <li className="navigationLi">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="navigationLi">
            <Link>Download CV</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNavLinks;
