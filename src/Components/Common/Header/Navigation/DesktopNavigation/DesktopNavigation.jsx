import React from "react";
import { Link } from "react-router-dom";
import "./DesktopNavigation.css";

const DesktopNavigation = () => {
  return (
    <div className="navigationDiv">
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
          <li className="navigationLi contactLi">
            <Link to="/contact">Contact</Link>
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
