import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Background from "../components/Background";
import Cards from "../components/Cards"; // Importez le composant Cards
import Footer from "../components/Footer";

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
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Accueil;
