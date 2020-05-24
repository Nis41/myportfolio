import React from "react";
import { NavLink } from "react-router-dom";
import "./DesktopNavigation.css";

const DesktopNavigation = () => {
  return (
    <div className="navigationDiv">
      <nav className="navigation">
        <ul className="navigationUl">
          <li className="navigationLi">
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li className="navigationLi">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="navigationLi">
            <NavLink to="/skills">Skills</NavLink>
          </li>
          <li className="navigationLi contactLi">
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className="CV">
            <button className="cvBtn">Download CV</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DesktopNavigation;
