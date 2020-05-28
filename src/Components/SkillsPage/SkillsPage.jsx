import React, { Component } from "react";
import PageTitleBg from "../Common/PageTitleBg/PageTitleBg";
import FilterTitle from "./FilterTitle";
import CategoryBtn from "./CategoryBtn";
import SkillsRender from "./SkillsRender";
import "./SkillsPage.css";

class SkillsPage extends Component {
  state = {
    categoryValue: "all",
  };

  updateCategory = (cValue) => {
    this.setState({ categoryValue: cValue });
  };

  render() {
    return (
      <div className="skillsPageMain">
        <PageTitleBg pageTitle="My Skills" />
        <div className="filterMainDiv">
          <FilterTitle />
          <CategoryBtn updateCategory={this.updateCategory} />
          <SkillsRender categoryValue={this.state.categoryValue} />
        </div>
      </div>
    );
  }
}

export default SkillsPage;
