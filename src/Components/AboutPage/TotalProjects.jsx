import React, { Component } from "react";

class TotalProjects extends Component {
  state = {
    totalProjects: 0,
    currentProjects: 0,
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      // console.log(window.scrollY);
      if (window.screen.availWidth >= 1025) {
        if (window.scrollY >= 1850) {
          setInterval(this.renderNumbers, 100);
        }
      } else {
        if (window.scrollY >= 650) {
          setInterval(this.renderNumbers, 100);
        }
      }
    });
  }

  renderNumbers = () => {
    let totProjects = this.state.totalProjects;
    let currProjects = this.state.currentProjects;

    totProjects += 1;
    currProjects += 1;
    if (totProjects <= 4) {
      this.setState({
        totalProjects: totProjects,
      });
    }

    if (currProjects <= 2) {
      this.setState({
        currentProjects: currProjects,
      });
    }
  };

  render() {
    return (
      <div className="threeBoxes">
        <div className="boxDiv firstBoxDiv">
          <span>{this.state.totalProjects}</span>
          <h5>Total Projects</h5>
        </div>
        <div className="boxDiv">
          <span>{this.state.currentProjects}</span>
          <h5>Ongoing Projects</h5>
        </div>
      </div>
    );
  }
}

export default TotalProjects;
