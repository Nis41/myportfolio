import React from "react";
import PageTitleBg from "../Common/PageTitleBg/PageTitleBg";
import ContactText from "./ContactText";
import ContactForm from "./ContactForm";

import "./ContactPage.css";
const ContactPage = () => {
  return (
    <div className="contactPageMain">
      <PageTitleBg pageTitle="Contact Me" />
      <div className="contactPageContent">
        <ContactText />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
