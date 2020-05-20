import React from "react";
import "./NavButton.css";

const NavButton = (props) => {
  return (
    <div className="navButtonDiv">
      <ul>
        <li
          className="navButton"
          onClick={() => {
            props.sliderOpener();
          }}
        >
          <i className="fa fa-bars" aria-hidden="true" />
          Menu
        </li>
      </ul>
    </div>
  );
};

export default NavButton;
