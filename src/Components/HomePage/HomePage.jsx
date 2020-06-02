import React, { Component } from "react";
import Main from "./Main/Main";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Testimonials from "./Testimonials/Testimonials";
import Discuss from "./Discuss/Discuss";
import axios from "axios";
import "./HomePage.css";

class HomePage extends Component {
  state = {};
  //  CONTACT_API_URL = "http://localhost:5000/api/contact";
  CONTACT_API_URL = "https://nisargpatel-portfolio.herokuapp.com/api/count";
  componentDidMount() {
    fetch(this.CONTACT_API_URL, {
      method: "PUT",
    })
      .then(() => {
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <React.Fragment>
        <Main />
        <About />
        <Skills />
        <Testimonials />
        <Discuss />
      </React.Fragment>
    );
  }
}

export default HomePage;
