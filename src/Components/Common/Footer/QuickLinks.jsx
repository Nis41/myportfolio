import React from "react";
import { NavLink } from "react-router-dom";

const QuickLinks = () => {
  return (
    <div className="footerLinks">
      <h4 className="footerTitle quickLinks">Quick Links</h4>
      <ul className="footerUl">
        <li className="footerLi">
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li className="footerLi">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="footerLi">
          <NavLink to="/skills">Skills</NavLink>
        </li>
        <li className="footerLi">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;
