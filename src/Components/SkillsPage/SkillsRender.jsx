import React from "react";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import Programming from "./Programming";
import Database from "./Database";

import "./SkillsRender.css";

const SkillsRender = ({ categoryValue }) => {
  if (categoryValue === "all") {
    return (
      <React.Fragment>
        <div className="skillsRenderMain">
          <FrontEnd />
          <BackEnd />
          <Programming />
          <Database />
        </div>
      </React.Fragment>
    );
  } else if (categoryValue === "full") {
    return (
      <React.Fragment>
        <div className="skillsRenderMain">
          <FrontEnd />
          <BackEnd />
        </div>
      </React.Fragment>
    );
  } else if (categoryValue === "pro") {
    return (
      <React.Fragment>
        <div className="skillsRenderMain">
          <Programming />
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className="skillsRenderMain">
          <Database />
        </div>
      </React.Fragment>
    );
  }
};

export default SkillsRender;
