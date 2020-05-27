import React from "react";
import PageTitleBg from "../Common/PageTitleBg/PageTitleBg";
import FilterTitle from "./FilterTitle";
import SkillsRender from "./SkillsRender";
import "./SkillsPage.css";
const SkillsPage = () => {
  return (
    <div className="skillsPageMain">
      <PageTitleBg pageTitle="My Skills" />
      <div className="filterMainDiv">
        <FilterTitle />
        <SkillsRender />
      </div>
    </div>
  );
};

export default SkillsPage;
