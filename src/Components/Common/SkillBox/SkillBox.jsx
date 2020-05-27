import React from "react";
import "./SkillBox.css";
const SkillBox = ({ imgSource, skillName, classContain }) => {
  const boxClassName = classContain ? "wholeBox" : "box";
  return (
    <div className={boxClassName}>
      <div className="text-center">
        <img src={imgSource} className="skillImage" alt="skillImage" />
        <h3 className="skillTitle">{skillName}</h3>
        <p className="skillDesc"></p>
      </div>
    </div>
  );
};

export default SkillBox;
