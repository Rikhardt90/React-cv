import React from "react";
import "./Contact.scss";
import { Fade, Slide } from "react-awesome-reveal";

const Contact = ({ contact }) => {
  return (
    <div className="contact-div">
      <Fade delay={500} triggerOnce="true">
        <div className="contact-div--left">
          <h3>Contact:</h3>

          <div className="contact-card">
            <p>Email:</p>{" "}
            <a href="mailto:ricardo.meraciudad@gmail.com">{contact.email}</a>
          </div>

          <div className="contact-card">
            <p>LinkedIn:</p>{" "}
            <a href="https://www.linkedin.com/in/ricardo-mera-ciudad-26b58a159/">
              LinkedIn
            </a>
          </div>

          <div className="contact-card">
            <p>Phone:</p> <a href="mailto:ricardo.meraciudad@gmail.com">asdf</a>
          </div>
        </div>
      </Fade>
      <Fade delay={500} triggerOnce="true">
        <div className="contact-div--right">
          <img src={contact.contactImage} alt="" />
        </div>
      </Fade>
    </div>
  );
};

export default Contact;
