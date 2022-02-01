import React from "react";
import "./Navbar.css";
// import { AttentionSeeker } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      {/* <AttentionSeeker effect="heartBeat"> */}
        <Link to="/timeline">Timeline</Link>
        <Link to="/contact">Contact</Link>
      {/* </AttentionSeeker> */}
    </nav>
  );
};

export default Navbar;
