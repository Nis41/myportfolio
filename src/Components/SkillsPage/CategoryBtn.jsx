import React from "react";
import "./CategoryBtn.css";
const CategoryBtn = (props) => {
  const categoryValue = props.categoryValue;
  let categoryName;

  if (categoryValue === "all") {
    categoryName = "All";
  } else if (categoryValue === "full") {
    categoryName = "Full Stack";
  } else if (categoryValue === "db") {
    categoryName = "Database";
  } else {
    categoryName = "Program..";
  }

  return (
    <React.Fragment>
      <div className="categoryBtnMain">
        <div className="categoryBtn">
          <div className="categoryLabel">Category :</div>
          <div
            className="categoryValue"
            onClick={() => {
              props.categoryDropdownToggler();
            }}
          >
            {categoryName}
            <i className="fa fa-caret-down caretDown" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CategoryBtn;

// <div className="categoryBtnMain">
//         <p>Category :</p>
//         <form action="">
//           <select class="formSelect" onChange={handleChange}>
//             <option value="all">All</option>
//             <option value="full">Full Stack</option>
//             <option value="db">Database</option>
//             <option value="pro">Programming Languages</option>
//           </select>
//         </form>
//       </div>

// <button
//                 class="btn btn-secondary dropdown-toggle"
//                 type="button"
//                 id="dropdownMenuButton"
//                 data-toggle="dropdown"
//                 aria-haspopup="true"
//                 aria-expanded="false"
//               >
//                 Full Stack
//               </button>
//               <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
//                 <a class="dropdown-item" href="#">
//                   Action
//                 </a>
//                 <a class="dropdown-item" href="#">
//                   Another action
//                 </a>
//                 <a class="dropdown-item" href="#">
//                   Something else here
//                 </a>
//               </div>
