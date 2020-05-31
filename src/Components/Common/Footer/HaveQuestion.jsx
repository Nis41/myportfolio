import React from "react";

const HaveQuestion = () => {
  return (
    <div className="footerContact">
      <h4 className="footerTitle questions">Have Questions?</h4>
      <div className="footerContactContent">
        <i className="fa fa-map-marker"></i>
        <p>
          Patel Vadi, Chindiya Darwaja <br />
          Patan, Gujarat
        </p>
      </div>
      <div className="footerPhone">
        <div className="footerContactContent">
          <i className="fa fa-phone"></i>
          <p>+91 7069766147</p>
        </div>
      </div>
      <div className="footerMail">
        <div className="footerContactContent">
          <i className="fa fa-envelope"></i>
          <p>nhp0640@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default HaveQuestion;
