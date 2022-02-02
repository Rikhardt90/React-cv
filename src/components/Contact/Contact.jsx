import React from "react";
import "./Contact.css";
import { Fade, Slide } from "react-awesome-reveal";

const Contact = ({ contact }) => {
  return (
    <div className="contact-div">
      <div className="contact-div--left">
        <Slide direction="left" cascade damping={0.1} triggerOnce>
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
        </Slide>
      </div>
      <div className="contact-div--right">
        <Fade duration={1500} triggerOnce>
          <img src={contact.contactImage} alt="" />
        </Fade>
      </div>
    </div>
  );
};

export default Contact;
