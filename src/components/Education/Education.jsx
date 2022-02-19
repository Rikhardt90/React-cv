import React from "react";
import "../../styles/Education.scss";
import { Fade } from "react-awesome-reveal";

const Education = ({ education }) => {
  return (

      <div className="education-div">
        {education.map((item) => {
          return (
            <div className ="edu-card">
                <Fade>
              <h3 className="name">{item.name}</h3>
              <span><p>{item.where}</p></span>
              <p>{item.date}</p>
              <p>{item.description}</p>
              </Fade>
            </div>
          );
        })}
      </div>

  );
};

export default Education;