import React from "react";
import { NavLink } from "react-router-dom";
import "./404Page.css";

const PageNotFound = () => {
  return (
    <div className="notFoundMain">
      <div className="notFoundDiv">
        <h1 className="oops">oops!</h1>
        <h2 className="notFoundTitle">404-page not found</h2>
        <h4 className="notFoundText">
          the page you are looking for might have been removed or it's name
          changed or is temporarily unavailable.
        </h4>
        <NavLink to="/" className="gotoHome">
          Home Page
        </NavLink>
      </div>
    </div>
  );
};

export default PageNotFound;
