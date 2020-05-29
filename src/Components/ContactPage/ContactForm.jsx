import React from "react";

const ContactForm = () => {
  const isValidationError = false;
  return (
    <div className="contactFormMain">
      <h3
        className="title getInTouch"
        style={{ fontSize: "1.3em", color: "#10285d" }}
      >
        Get in Touch
      </h3>
      <div className="contactFormDiv">
        <form action="">
          <div className="formInputGroup">
            <input
              className="formInputs"
              type="text"
              name="userName"
              placeholder="*Full Name"
            />
            {isValidationError && (
              <span className="validationErrorMessage">
                Please enter your name...!!!
              </span>
            )}
          </div>

          <div className="formInputGroup">
            <input
              className="formInputs"
              type="text"
              name="userEmail"
              placeholder="*Email Address"
            />
            {isValidationError && (
              <span className="validationErrorMessage">
                Please enter your valid email...!!!
              </span>
            )}
          </div>
          <div className="formInputGroup">
            <textarea
              className="formInputs"
              name="userMessage"
              placeholder="*Your Message"
            ></textarea>
            {isValidationError && (
              <span className="validationErrorMessage">
                Please enter message...!!!
              </span>
            )}
          </div>
          {/* <div className="formInputGroup"> */}
          <input
            type="submit"
            className="formInputs submitBtn"
            value="Send Message"
          />
          {/* </div> */}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
