import React from "react";
import "./Discuss.css";

const Discuss = () => {
  return (
    <div className="discussMainDiv">
      <div className="discussContentDiv">
        <div className="discussText">
          <h1>Want to Create Your Own Business Website ?</h1>
          <h3> Let's Discuss !</h3>
        </div>
        <div className="discussBtn">
          <a
            href="https://wa.me/917069766147"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsappBtn hvr-bounce-to-right"
          >
            Discuss &nbsp;
            <i class="fa fa-whatsapp" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Discuss;
