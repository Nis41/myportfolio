import React, { Component } from "react";
import PageTitleBg from "../Common/PageTitleBg/PageTitleBg";
import FilterTitle from "./FilterTitle";
import CategoryBtn from "./CategoryBtn";
import CategoryDropdown from "./CategoryDropdown";
import SkillsRender from "./SkillsRender";
import Backdrop from "../Common/Backdrop/Backdrop";

import "./SkillsPage.css";

class SkillsPage extends Component {
  state = {
    categoryValue: "all",
    categoryModalOpen: false,
  };

  categoryDropdownToggler = () => {
    this.setState({ categoryModalOpen: !this.state.categoryModalOpen });
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
          <CategoryBtn
            categoryDropdownToggler={this.categoryDropdownToggler}
            categoryValue={this.state.categoryValue}
          />
          <CategoryDropdown
            categoryModalOpen={this.state.categoryModalOpen}
            updateCategory={this.updateCategory}
            categoryDropdownToggler={this.categoryDropdownToggler}
          />
          <SkillsRender categoryValue={this.state.categoryValue} />
        </div>
        <Backdrop
          categoryModalOpen={this.state.categoryModalOpen}
          categoryDropdownToggler={this.categoryDropdownToggler}
        />
      </div>
    );
  }
}

export default SkillsPage;
