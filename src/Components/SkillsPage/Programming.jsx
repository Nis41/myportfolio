import React from "react";
import Hr from "../Common/Hr/Hr";
import SkillBox from "../Common/SkillBox/SkillBox";
import pythonImg from "../Common/SkillsImages/python.png";
import phpImg from "../Common/SkillsImages/php.png";
import javaImg from "../Common/SkillsImages/java.png";
import cImg from "../Common/SkillsImages/c.png";
import cppImg from "../Common/SkillsImages/cpp.png";

const Programming = () => {
  return (
    <div className="programmingMain SkillsFilterMain">
      <div className="skillsFilterTitleDiv">
        <h3 className="title" style={{ padding: "0 2%" }}>
          Programming Languages
        </h3>
        <Hr />
      </div>
      <div className="filteredSkillsDiv">
        <SkillBox imgSource={pythonImg} skillName="Python" />
        <SkillBox imgSource={phpImg} skillName="PHP" />
        <SkillBox imgSource={javaImg} skillName="Java" />
        <SkillBox imgSource={cImg} skillName="C" />
        <SkillBox imgSource={cppImg} skillName="C++" />
      </div>
    </div>
  );
};

export default Programming;
