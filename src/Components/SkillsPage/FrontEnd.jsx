import React from "react";
import Hr from "../Common/Hr/Hr";
import SkillBox from "../Common/SkillBox/SkillBox";
import htmlImg from "../Common/SkillsImages/html.png";
import cssImg from "../Common/SkillsImages/css.png";
import bootsImg from "../Common/SkillsImages/bootstrap.png";
import jsImg from "../Common/SkillsImages/js.png";
import jqueryImg from "../Common/SkillsImages/jquery.png";
import reactImg from "../Common/SkillsImages/react.png";

const FrontEnd = () => {
  return (
    <div className="frontEndMain SkillsFilterMain">
      <div className="skillsFilterTitleDiv">
        <h3 className="title">Front End</h3>
        <Hr />
      </div>
      <div className="filteredSkillsDiv">
        <SkillBox imgSource={htmlImg} skillName="HTML5" />
        <SkillBox imgSource={cssImg} skillName="CSS3" />
        <SkillBox imgSource={bootsImg} skillName="Bootstrap" />
        <SkillBox imgSource={jsImg} skillName="JavaScript" />
        <SkillBox imgSource={jqueryImg} skillName="jQuery" />
        <SkillBox imgSource={reactImg} skillName="React.js" />
      </div>
    </div>
  );
};

export default FrontEnd;
