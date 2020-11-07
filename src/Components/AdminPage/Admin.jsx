import React, { Component } from "react";
import axios from "axios";
import TotalViews from "./TotalViews";
import UserMessage from "./UserMessge";

import { Constant } from "../../lib/Constants";
import "./Admin.css";

class Admin extends Component {
  state = {
    views: 0,
  };
  async componentDidMount() {
    const result = await axios.get(`${Constant.BASE_URL}/count`);

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
