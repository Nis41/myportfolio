import React from "react";
import Hr from "../Common/Hr/Hr";
import colorGridImage from "../HomePage/About/Images/color_grid.png";
import myImage from "./Images/nisarg1-min.jpg";
const MoreAboutMe = () => {
  return (
    <div className="moreAboutMe">
      <h3 className="title">More About me</h3>
      <Hr />
      <p className="moreAboutMeText">
        <div className="textGridImage">
          <img src={colorGridImage} alt="gridImage" />
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quasi
        vero perferendis, labore eaque dolor saepe possimus quod tempore
        cupiditate iusto facere accusantium debitis sunt deleniti beatae
        quisquam, nihil ea.
        <button className="downloadBtn">Download CV</button>
      </p>

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
