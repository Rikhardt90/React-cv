import React from "react";
import "../../styles/Hero.scss";
import { Fade } from "react-awesome-reveal";

const Hero = ({ hero }) => {

  return (
    <div className="primary-div">
          
      <div className="hero-div">
      <Fade delay={500} triggerOnce="true">
        <div className="hero-left">
            <img
              src="https://res.cloudinary.com/dbamkolrf/image/upload/v1643323646/Profile/perfil_et92wr.png"
              alt="Profile"
            />
        </div>
        </Fade>
        <Fade delay={500} triggerOnce="true">
        <div className="hero-right">
          <div className="hero-right--top">
              <h2>
                {hero.name} {hero.surname}
              </h2>
              <h3>{hero.city}</h3>
              <p>{hero.heroDescription}</p> 
          </div>
          <div className="hero-right--bottom">
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
          </div>
        </div>
        </Fade>
      </div>
      
      
    </div>
  );
};

export default Hero;
