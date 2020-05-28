import React from "react";
import Hr from "../Common/Hr/Hr";
import SkillBox from "../Common/SkillBox/SkillBox";
import nodeImg from "../Common/SkillsImages/node.png";
import codeIgniterImg from "../Common/SkillsImages/codeigniter.png";

const BackEnd = () => {
  return (
    <div className="backEndMain SkillsFilterMain">
      <div className="skillsFilterTitleDiv">
        <h3 className="title">Back End</h3>
        <Hr />
      </div>
      <div className="filteredSkillsDiv">
        <SkillBox imgSource={nodeImg} skillName="Node.js" />
        <SkillBox imgSource={codeIgniterImg} skillName="CodeIgniter" />
      </div>
    </div>
  );
};

export default BackEnd;
