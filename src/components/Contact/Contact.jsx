import React from "react";
import "../../styles/Contact.scss";
import { Fade } from "react-awesome-reveal";

const Contact = ({ contact }) => {
  return (
    <div className="contact-div">
      <Fade delay={200} triggerOnce="true">
        <div className="contact-div--left">
        

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
            <p>Social:</p> <a href="https://www.facebook.com/ricardo.meraciudad">Facebook</a><a href="https://www.instagram.com/rikhardt90">Instagram</a>
          </div>
        </div>
      </Fade>
      <Fade delay={200} triggerOnce="true">
        <div className="contact-div--right">
          <img src={contact.contactImage} alt="" />
        </div>
      </Fade>
    </div>
  );
};

export default Contact;
