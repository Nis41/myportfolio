import React from "react";
import Hr from "../Common/Hr/Hr";
import SkillBox from "../Common/SkillBox/SkillBox";
import nodeImg from "../Common/SkillsImages/node.png";
import codeIgniterImg from "../Common/SkillsImages/codeigniter.png";
import mongooseImg from "../Common/SkillsImages/mongoose.png";
import expressImg from "../Common/SkillsImages/express.png";

const BackEnd = () => {
  return (
    <div className="backEndMain SkillsFilterMain">
      <div className="skillsFilterTitleDiv">
        <h3 className="title">Back End</h3>
        <Hr />
      </div>
      <div className="filteredSkillsDiv">
        <SkillBox imgSource={nodeImg} skillName="Node.js" />
        <SkillBox imgSource={expressImg} skillName="Express.js" />
        <SkillBox imgSource={mongooseImg} skillName="Mongoose" />
        <SkillBox imgSource={codeIgniterImg} skillName="CodeIgniter" />
      </div>
    </div>
  );
};

export default BackEnd;
