import React from "react";
import TextOnImage from "../TextOnImage/TextOnImage";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import "./ImageDiv.css";

const ImageDiv = (props) => {
  return (
    <React.Fragment>
      <div className="imgDiv">
        <ReactCSSTransitionGroup
          transitionName={"fade"}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          <img src={props.imagePath} alt="image" />
          {/* {props.imagePath} */}
        </ReactCSSTransitionGroup>
      </div>
      <TextOnImage
        Img1={props.Img1}
        Img2={props.Img2}
        imagePath={props.imagePath}
      />
    </React.Fragment>
  );
};

export default ImageDiv;
