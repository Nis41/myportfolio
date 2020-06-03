import React from "react";
import Hr from "../Common/Hr/Hr";
import colorGridImage from "../HomePage/About/Images/color_grid.png";
// import myImage from "./Images/nisarg1-min.jpg";
import myImage from "./Images/why_hire.png";
const MoreAboutMe = () => {
  return (
    <div className="moreAboutMe">
      <h3 className="title">Why Work With Me?</h3>
      <Hr />
      <div className="moreAboutMeText">
        <div className="textGridImage">
          <img src={colorGridImage} alt="gridImage" />
        </div>
        <p>
          Honestly, I possess all the skills and experience for building
          user-friendly websites. I'm pretty confident that I am the best
          candidate you're looking for. I'm very dedicated towards my work and i
          am very competent and unique as well in the relevance of my work. I've
          attached a copy of my resume detailing my experience, along with
          description of websites created by me.
        </p>
        <button
          onClick={() => {
            window.open("https://nisargpatel-portfolio.herokuapp.com/api/cv");
            // window.open("http://localhost:5000/api/cv");
          }}
          className="downloadBtn"
        >
          Download CV
        </button>
      </div>

      <div className="myImageDiv">
        <img className="myImg" src={myImage} alt="myImage" />
        <div className="imgGridImage">
          <img src={colorGridImage} alt="gridImage" />
        </div>
      </div>
    </div>
  );
};

export default MoreAboutMe;
