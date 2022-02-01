import React from "react";
import "./Education.css";
import { Fade } from "react-awesome-reveal";

const Education = ({ education }) => {
  return (
    <div>
      <div className="education-div">
        {education.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
                <Fade>
              <p className="name">📕 {item.name}</p>
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