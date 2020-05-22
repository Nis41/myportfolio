import React from "react";
import Hr from "../../Common/Hr/Hr";
import SkillsBoxes from "./SkillsBoxes";
import "./Skills.css";
const Skills = () => {
  return (
    <div className="skillsDiv">
      <h3 className="title">My Skills</h3>
      <Hr />
      <SkillsBoxes />
    </div>
  );
};

export default Skills;
