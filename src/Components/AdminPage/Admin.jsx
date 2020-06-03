import React, { Component } from "react";
import axios from "axios";
import TotalViews from "./TotalViews";
import UserMessage from "./UserMessge";

import "./Admin.css";
class Admin extends Component {
  state = {
    views: 0,
  };
  async componentDidMount() {
    // "http://localhost:5000/api/count"
    const result = await axios.get(
      "https://nisargpatel-portfolio.herokuapp.com/api/count"
    );

    this.setState({ views: result.data[0].totViews });
  }

  render() {
    return (
      <div className="adminPageMain">
        <TotalViews views={this.state.views} />
        <UserMessage />
      </div>
    );
  }
}

export default Admin;
