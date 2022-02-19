import React from "react";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import { useState } from "react";
import "../../styles/About.scss";

const About = ({ education, experience }) => {

  const [showEducation, setShowEducation] = useState(true);

  return (
  
      <div className="about-div">
        <div className="buttons-div">
          <button
            onClick={() => setShowEducation(true)}
          >
            Education
          </button>
          <button
            onClick={() => setShowEducation(false)}
          >
            Experience
          </button>
        </div>

        console.log(showEducation);

        <div className="exp-edu-div">
          {showEducation ? (
            <Education education={education} />
          ) : (
            <Experience experience={experience} />
          )}
        </div>
      </div>
  );
};

export default About;
