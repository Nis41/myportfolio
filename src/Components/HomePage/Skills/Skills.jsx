import React from "react";
import { NavLink } from "react-router-dom";
import Hr from "../../Common/Hr/Hr";
import SkillBox from "../../Common/SkillBox/SkillBox";

import reactImg from "../../Common/SkillsImages/react.png";
import nodeImg from "../../Common/SkillsImages/node.png";
import pythonImg from "../../Common/SkillsImages/python.png";
import phpImg from "../../Common/SkillsImages/php.png";
import mysqlImg from "../../Common/SkillsImages/mysql.png";
import mongoImg from "../../Common/SkillsImages/mongo.png";

import "./Skills.css";
const Skills = () => {
  return (
    <div className="skillsDiv">
      <h3 className="title">My Skills</h3>
      <Hr />
      <div className="boxesDiv">
        <SkillBox imgSource={reactImg} skillName="React.js" />
        <SkillBox imgSource={nodeImg} skillName="Node.js" />
        {/* <SkillBox
          imgSource={pythonImg}
          skillName="Python"
          classContain="whole"
        /> */}
        <SkillBox imgSource={pythonImg} skillName="Python" />
        <SkillBox imgSource={phpImg} skillName="PHP" />
        <SkillBox imgSource={mysqlImg} skillName="MySQL" />
        <SkillBox imgSource={mongoImg} skillName="MongoDB" />
      </div>
      <div className="moreSkillsDiv">
        <NavLink to="/skills" className="moreSkillsBtn">
          More
        </NavLink>
      </div>
    </div>
  );
};

export default Skills;
