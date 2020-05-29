import React from "react";
import "./CategoryDropdown.css";

const CategoryDropdown = (props) => {
  const handleChange = (e) => {
    props.updateCategory(e.target.value);
    props.categoryDropdownToggler();
  };

  const myClass = props.categoryModalOpen
    ? "categoryDropdownMain"
    : "categoryDropdownMain none";
  return (
    <div className={myClass}>
      <ul className="cdUl">
        <li className="cdLi">
          <button onClick={handleChange} value="all">
            All
          </button>
        </li>
        <li className="cdLi">
          <button onClick={handleChange} value="full">
            Full Stack
          </button>
        </li>
        <li className="cdLi">
          <button onClick={handleChange} value="db">
            Database
          </button>
        </li>
        <li className="cdLi">
          <button onClick={handleChange} value="pro">
            Programming Languages
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CategoryDropdown;
