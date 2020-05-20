import React, { Component } from "react";
import ImageDiv from "./ImageDiv/ImageDiv";
import Img1 from "./Images/n1.jpg";
import Img2 from "./Images/image.jpg";
import "./Main.css";

class Main extends Component {
  state = {
    images: { imgPath: Img1 },
  };

  imageChangeHandler = () => {
    const newImages = this.state.images;

    if (newImages.imgPath === Img1) {
      newImages.imgPath = Img2;
    } else {
      newImages.imgPath = Img1;
    }

    this.setState({ images: newImages });
  };

  variable = setInterval(this.imageChangeHandler, 5000);

  render() {
    const imagePath = this.state.images.imgPath;

    return (
      <div className="mainDiv">
        <div className="blueDiv"></div>
        <ImageDiv imagePath={imagePath} Img1={Img1} Img2={Img2} />
      </div>
    );
  }
}

export default Main;
