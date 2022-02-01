import React from "react";
import { useState } from "react";
import Education from "../Education/Education";
import Experience from "../Experience/Experience"
import "./Hero.css";
import { Fade, Slide } from "react-awesome-reveal";

const Hero = ({ hero, education }) => {

  const [showEducation, setShowEducation] = useState(true);

  return (
    <div className="primary-div">
      <div className="hero-div">
        <div className="hero-left">
          <Fade duration={1500}>
            <img
              src="https://res.cloudinary.com/dbamkolrf/image/upload/v1643323646/Profile/perfil_et92wr.png"
              alt="Profile"
            />
          </Fade>
        </div>

        <div className="hero-right">
          <div className="hero-right--top">
            <Slide direction="right" cascade damping={0.1}>
              <h2>
                {hero.name} {hero.surname}
              </h2>

              <h3>{hero.city}</h3>

              <p>{hero.heroDescription}</p>
            </Slide>
          </div>
          <div className="hero-right--bottom">
            <Fade delay={1200}>
              <div className="logo-div">
                <img
                  className="logo"
                  src="./icons/Github.png"
                  alt="github logo"
                />
                <a href={hero.gitHub}>GitHub</a>
              </div>
              <div className="logo-div">
                <img
                  className="logo"
                  src="./icons/face.png"
                  alt="github logo"
                />
                <a href={hero.faceBook}>Facebook</a>
              </div>
              <div className="logo-div">
                <img
                  className="logo"
                  src="./icons/insta.png"
                  alt="github logo"
                />
                <a href={hero.instaGram}>Instagram</a>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className="second-div">
        <div className="buttons-div">
        <button className="custom-btn btn-4" onClick={() => setShowEducation(true)}>
          Education
        </button>
        <button className="custom-btn btn-4" onClick={() => setShowEducation(false)}>
          Experience
        </button>
        </div>
        
        <div className="exp-edu-div">
          {showEducation ? (
            <Education/>
          ) : (
            <Experience/>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
