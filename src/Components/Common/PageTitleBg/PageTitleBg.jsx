import React from "react";
import "./PageTitleBg.css";

const PageTitleBg = (props) => {
  return (
    <div className="pageTitleDiv">
      <div className="pageTitleDivBg">
        <h3>{props.pageTitle}</h3>
      </div>
    </div>
  );
};

export default PageTitleBg;
