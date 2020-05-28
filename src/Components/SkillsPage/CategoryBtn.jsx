import React from "react";
import "./CategoryBtn.css";

const CategoryBtn = (props) => {
  const handleChange = (e) => {
    props.updateCategory(e.target.value);
  };
  return (
    <React.Fragment>
      <div className="categoryBtnMain">
        <p>Category :</p>
        <form action="">
          <select class="formSelect" onChange={handleChange}>
            <option value="all">All</option>
            <option value="full">Full Stack</option>
            <option value="db">Database</option>
            <option value="pro">Programming Languages</option>
          </select>
        </form>
      </div>
    </React.Fragment>
  );
};

export default CategoryBtn;
