import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Background from "../components/Background";

const Accueil = () => {
  return (
    <>
      <div className="header">
        <Logo />
        <Navigation />
      </div>
      <div className="background">
        <Background />
      </div>
    </>
  );
};

export default Accueil;
