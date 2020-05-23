import React from "react";
import reactImg from "../../Common/SkillsImages/react.png";
import nodeImg from "../../Common/SkillsImages/node.png";
import pythonImg from "../../Common/SkillsImages/python.png";
import mysqlImg from "../../Common/SkillsImages/mysql.png";
import mongoImg from "../../Common/SkillsImages/mongo.png";

const SkillsBoxes = () => {
  return (
    <div className="row boxesDiv">
      <div class="col-6 col-md-12 col-lg-2 box firstBox otherBoxes">
        <div className="service-29128 text-center">
          <img src={reactImg} className="skillImage" alt="skillImage" />
          <h3 className="skillTitle">React.js</h3>
          <p className="skillDesc">
            React.js is a JavaScript library for building user interfaces. React
            can be used in the development of single-page applications.
          </p>
        </div>
      </div>
      <div class="col-6 col-md-12 col-lg-2 box otherBoxes">
        <div className="service-29128 text-center">
          <img src={nodeImg} className="skillImage" alt="skillImage" />
          <h3 className="skillTitle">Node.js</h3>
          <p className="skillDesc">
            Node.js is an open-source, cross-platform, JavaScript runtime
            environment that executes JavaScript code outside of a web browser.
          </p>
        </div>
      </div>
      <div class="col-12 col-md-12 col-lg-2 box middleBox">
        <div className="service-29128 text-center">
          <img src={pythonImg} className="skillImage" alt="skillImage" />
          <h3 className="skillTitle">Python</h3>
          <p className="skillDesc">
            Python is an interpreted, high-level, general-purpose programming
            language.
            {/* It's design philosophy emphasizes code readability. */}
          </p>
        </div>
      </div>
      <div class="col-6 col-md-12 col-lg-2 box fourthBox">
        <div className="service-29128 text-center">
          <img src={mysqlImg} className="skillImage" alt="skillImage" />
          <h3 className="skillTitle">MySQL</h3>
          <p className="skillDesc">
            MySQL is an open-source relational database management system.
          </p>
        </div>
      </div>
      <div class="col-6 col-md-12 col-lg-2 box">
        <div className="service-29128 text-center">
          <img src={mongoImg} className="skillImage" alt="skillImage" />
          <h3 className="skillTitle">MongoDB</h3>
          <p className="skillDesc">
            MongoDB is a cross-platform document-oriented database and NOSQL
            database program.MongoDB uses JSON-like documents.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsBoxes;
