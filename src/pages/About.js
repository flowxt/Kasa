import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Background from "../components/Background2";

const About = () => {
  return (
    <>
      <div className="header">
        <Logo />
        <Navigation />
      </div>
      <div className="background2">
        <Background />
      </div>
    </>
  );
};

export default About;
