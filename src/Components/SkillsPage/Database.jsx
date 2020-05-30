import React from "react";
import Hr from "../Common/Hr/Hr";
import SkillBox from "../Common/SkillBox/SkillBox";
import mysqlImg from "../Common/SkillsImages/mysql.png";
import mongoImg from "../Common/SkillsImages/mongo.png";
import msAccessImg from "../Common/SkillsImages/msaccess.png";
import oracleImg from "../Common/SkillsImages/oracle.png";
const Database = () => {
  return (
    <div className="databaseMain SkillsFilterMain">
      <div className="skillsFilterTitleDiv">
        <h3 className="title">Database</h3>
        <Hr />
      </div>
      <div className="filteredSkillsDiv">
        <SkillBox imgSource={mysqlImg} skillName="MySQL" />
        <SkillBox imgSource={mongoImg} skillName="MongoDB" />
        <SkillBox imgSource={oracleImg} skillName="Oracle" />
        <SkillBox imgSource={msAccessImg} skillName="MS Access" />
      </div>
    </div>
  );
};

export default Database;
