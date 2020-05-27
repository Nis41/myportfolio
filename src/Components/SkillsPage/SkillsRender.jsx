import React, { Component } from "react";

class SkillsRender extends Component {
  state = {
    isFullActive: true,
    isFrontActive: false,
    isBackActive: false,
  };

  toggleFullClass = () => {
    this.setState({
      isFullActive: true,
      isFrontActive: false,
      isBackActive: false,
    });
  };

  toggleFrontClass = () => {
    this.setState({
      isFullActive: false,
      isFrontActive: true,
      isBackActive: false,
    });
  };

  toggleBackClass = () => {
    this.setState({
      isFullActive: false,
      isFrontActive: false,
      isBackActive: true,
    });
  };

  render() {
    const fullClassName = this.state.isFullActive
      ? "categoryNames active"
      : "categoryNames";

    const frontClassName = this.state.isFrontActive
      ? "categoryNames active"
      : "categoryNames";

    const backClassName = this.state.isBackActive
      ? "categoryNames active"
      : "categoryNames";

    return (
      <React.Fragment>
        <div className="filteringDiv">
          <h6 className={fullClassName} onClick={this.toggleFullClass}>
            All
          </h6>
          <h6 className={frontClassName} onClick={this.toggleFrontClass}>
            Full Stack
          </h6>
          <h6 className={backClassName} onClick={this.toggleBackClass}>
            Database
          </h6>
          <h6 className={backClassName} onClick={this.toggleBackClass}>
            Programming
          </h6>
        </div>
        <div className="filterSkillsDiv"></div>
      </React.Fragment>
    );
  }
}

export default SkillsRender;
