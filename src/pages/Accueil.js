import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Background from "../components/Background";
import Cards from "../components/Cards"; // Importez le composant Cards

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
      <div>
        <Cards />
      </div>
    </>
  );
};

export default Accueil;
