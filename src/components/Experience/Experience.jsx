import React from "react";
import "./Experience.css";
import { Fade } from "react-awesome-reveal";

const Experience = ({ experience }) => {
  return (
    <div>
      <div className="experience-div">
        {experience.map((item) => {
          return (
            <div className="exp-card" key={JSON.stringify(item)}>
              <Fade>
              <h3 className="name">{item.name}</h3>
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