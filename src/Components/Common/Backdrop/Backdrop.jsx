import React from "react";
import "./Backdrop.css";
const Backdrop = (props) => {
  const myClass = props.categoryModalOpen ? "backdrop" : "backdrop none";

  return (
    <div
      className={myClass}
      onClick={() => {
        props.categoryDropdownToggler();
      }}
    ></div>
  );
};

export default Backdrop;
