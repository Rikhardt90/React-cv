import React from "react";
import "./Experience.css";
import { Fade } from "react-awesome-reveal";

const Experience = ({ experience }) => {
  return (
    <div>
      <div className="experience-div">
        {experience.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <Fade>
              <p className="name">📕 {item.name}</p>
              <p>{item.where}</p>
              <p>{item.date}</p>
              <p>{item.description}</p>
              </Fade>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;