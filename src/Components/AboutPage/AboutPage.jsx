import React from "react";
import PageTitleBg from "../Common/PageTitleBg/PageTitleBg";
import AboutMeIntro from "./AboutMeIntro";
import MoreAboutMe from "./MoreAboutMe";
import TotalProjects from "./TotalProjects";

import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="aboutPageMain">
      <PageTitleBg pageTitle="About Me" />
      <AboutMeIntro />
      <MoreAboutMe />
      <TotalProjects />
    </div>
  );
};

export default AboutPage;
