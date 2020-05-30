import React, { Component } from "react";
import Joi from "joi-browser";

class ContactForm extends Component {
  state = {
    data: { userName: "", userEmail: "", userMessage: "" },
    errors: {},
  };

  schema = {
    userName: Joi.string()
      .regex(/^[A-Za-z ]+$/)
      .required()
      .error(() => {
        return {
          message: "Please enter a valid Full Name",
        };
      }),
    userEmail: Joi.string()
      .email()
      .regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      .required()
      .error(() => {
        return {
          message: "Please enter a valid Email",
        };
      }),
    userMessage: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please enter a valid Message",
        };
      }),
  };

  validate = () => {
    const { data } = this.state;
    const result = Joi.validate(data, this.schema, { abortEarly: false });

    if (!result.error) return null;
    const errors = {};

    for (let item of result.error.details) errors[item.path[0]] = item.message;

    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    //call the server
    // console.log("submitted");
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);

    return error ? error.details[0].message : null;
  };

  handleChange = (e) => {
    const errors = { ...this.state.errors };

    const errorMessage = this.validateProperty(e.currentTarget);
    if (errorMessage) errors[e.currentTarget.name] = errorMessage;
    else delete errors[e.currentTarget.name];

    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data, errors });
  };

  render() {
    const { data, errors } = this.state;

    return (
      <div className="contactFormMain">
        <h3
          className="title getInTouch"
          style={{ fontSize: "1.3em", color: "#10285d" }}
        >
          Get in Touch
        </h3>
        <div className="contactFormDiv">
          <form action="" onSubmit={this.handleSubmit}>
            <div className="formInputGroup">
              <input
                className="formInputs"
                type="text"
                name="userName"
                placeholder="*Full Name"
                value={data.userName}
                onChange={this.handleChange}
              />
              {errors.userName && (
                <span className="validationErrorMessage">
                  {errors.userName}
                </span>
              )}
            </div>

            <div className="formInputGroup">
              <input
                className="formInputs"
                type="text"
                name="userEmail"
                placeholder="*Email Address"
                value={data.userEmail}
                onChange={this.handleChange}
              />
              {errors.userEmail && (
                <span className="validationErrorMessage">
                  {errors.userEmail}
                </span>
              )}
            </div>
            <div className="formInputGroup">
              <textarea
                className="formInputs"
                name="userMessage"
                placeholder="*Your Message"
                value={data.userMessage}
                onChange={this.handleChange}
              ></textarea>
              {errors.userMessage && (
                <span className="validationErrorMessage">
                  {errors.userMessage}
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
  }
}

export default ContactForm;
