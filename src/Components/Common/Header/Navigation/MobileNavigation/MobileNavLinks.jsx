import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./MobileNavLinks.css";

const MobileNavLinks = (props) => {
  const bgClass = props.isSliderOpen ? "mobileSliderBg" : "";
  const divClass = props.isSliderOpen ? "mobileSlider open" : "mobileSlider";
  return (
    <div
      className={bgClass}
      onClick={() => {
        props.sliderCloser();
      }}
    >
      <div className={divClass}>
        <div className="closeBtnDiv">
          <i
            className={`fa fa-times-circle`}
            onClick={() => {
              props.sliderCloser();
            }}
          ></i>
        </div>
        <nav className="navigationMob">
          <ul className="navigationUlMob">
            <li className="navigationLiMob">
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li className="navigationLiMob">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="navigationLiMob">
              <NavLink to="/skills">Skills</NavLink>
            </li>
            <li className="navigationLiMob">
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li className="navigationLiMob">
              <Link
                to=""
                onClick={() => {
                  props.downloadCV();
                }}
              >
                Download CV
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavLinks;
