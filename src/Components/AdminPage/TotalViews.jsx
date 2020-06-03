import React from "react";

const TotalViews = (props) => {
  return (
    <div className="card views">
      <div className="card-header">Total Views </div>
      <div className="card-body">
        <p className="card-text">{props.views}</p>
      </div>
    </div>
  );
};

export default TotalViews;
