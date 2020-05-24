import React from "react";
import Bg1 from "./Images/1.jpg";
import "./Discuss.css";

const Discuss = () => {
  return (
    <div className="discussMainDiv">
      <div className="discussBgDiv">
        <img src={Bg1} alt="discussBackgroundImage" />
      </div>
      <div className="discussContentDiv"></div>
    </div>
  );
};

export default Discuss;
