import React from "react";
import QuickLinks from "./QuickLinks";
import HaveQuestions from "./HaveQuestion";
import SocialLinks from "./SocialLinks";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footerMainDiv">
      <div className="footerContentMain">
        <QuickLinks />
        <HaveQuestions />
        <SocialLinks />
      </div>
      <div className="footerBorder"></div>
      <div className="tarif">
        Designed &#38; Developed By <span>Nisarg H Patel</span>
      </div>
    </div>
  );
};

export default Footer;
