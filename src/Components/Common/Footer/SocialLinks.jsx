import React from "react";

const SocialLinks = () => {
  return (
    <div className="footerSocialLinks">
      <h4 className="footerTitle connect">Connect</h4>
      <ul className="footerSocialUl">
        <li className="footerSocialLi">
          <a
            href="https://wa.me/917069766147"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp"
          >
            <i className="fa fa-whatsapp"></i>
          </a>
        </li>
        <li className="footerSocialLi">
          <a
            href="https://www.linkedin.com/in/nisarg-patel-259003154/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
        <li className="footerSocialLi">
          <a
            href="https://github.com/Nis41"
            target="_blank"
            rel="noopener noreferrer"
            className="github"
          >
            <i className="fa fa-github"></i>
          </a>
        </li>
        <li className="footerSocialLi">
          <a
            href="https://www.instagram.com/n__i__s__u/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            <i className="fa fa-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
