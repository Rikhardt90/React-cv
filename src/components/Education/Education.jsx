import React from "react";
import "./Education.css";
import { Fade } from "react-awesome-reveal";

const Education = ({ education }) => {
  return (
    <div>
      <div className="education-div">
        {education.map((item) => {
          return (
            <div className ="edu-card" key={JSON.stringify(item)}>
                <Fade>
              <h3 className="name">{item.name}</h3>
              <p>{item.where}</p>
              <p>{item.date}</p>
              </Fade>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;