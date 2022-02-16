import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const slideIn = keyframes`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`;

const Boom = keyframes`
from {
  transform: scale3d(1, 1, 1);
}
50% {
  transform: scale3d(1.5, 1.5, 1.5);
}
to {
  transform: scale3d(1, 1, 1);
}
`;


const Navbar = () => {
  return (
    <nav>
      <div className="principal">
        <div className="container">
          <Reveal delay={100} keyframes={Boom} triggerOnce="true">
            <div className="circle__1"></div>
          </Reveal>
          <Reveal delay={0} keyframes={slideIn} triggerOnce="true">
            <div className="beam__1"></div>
          </Reveal>
        </div>
        <div className="container">
          <Reveal delay={200} keyframes={Boom} triggerOnce="true">
            <div className="circle__2"></div>
          </Reveal>
          <Reveal delay={200} keyframes={slideIn} triggerOnce="true">
            <div className="beam__2"></div>
          </Reveal>
        </div>
        <div className="container">
          <Reveal delay={300} keyframes={Boom} triggerOnce="true">
            <div className="circle__3"></div>
          </Reveal>
          <Reveal delay={300} keyframes={slideIn} triggerOnce="true">
            <div className="beam__3"></div>
          </Reveal>
        </div>
        <div className="container">
          <Reveal delay={400} keyframes={Boom} triggerOnce="false">
            <div className="circle__4"></div>
          </Reveal>
          <Reveal delay={400} keyframes={slideIn} triggerOnce="false">
            <div className="beam__4">
              <div className="nav-links">
                <Link to="/" className="nav-anchor">Home</Link>
                {/* <Link to="/timeline">Timeline</Link> */}
                <Link to="/contact" className="nav-anchor">Contact</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
