import React from "react";
import "./NavButton.css";

const NavButton = () => {
  return (
    <div className="navButtonDiv">
      <ul>
        <li>
          <a href="#">
            <i className="fa fa-bars" aria-hidden="true" />
            Menu
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavButton;
