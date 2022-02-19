import React from "react";
import "../../styles/Experience.scss";
import { Fade } from "react-awesome-reveal";

const Experience = ({ experience }) => {
  return (
    <div>
      <div className="experience-div">
        {experience.map((item) => {
          return (
            <Fade>
            <div className="exp-card">

              <h3 className="name">{item.name}</h3>
              <p>{item.where}</p>
              <p>{item.date}</p>
              <p>{item.description}</p>

            </div>
            </Fade>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;