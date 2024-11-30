import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Background from "../components/Background2";
import Footer from "../components/Footer";

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
      <div>
        <Footer />
      </div>
    </>
  );
};

export default About;
