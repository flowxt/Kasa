import React from "react";
import Logo from "../components/Logo";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import HomeContent from "../components/HomeContent";
import ButtonHouse from "../components/ButtonHouse";

const House = () => {
  const { id } = useParams(); // Récupère l'ID de la carte depuis l'URL

  return (
    <>
      <div className="header">
        <Logo />
        <Navigation />
      </div>
      <div>
        <Carousel />
      </div>
      <div>
        <HomeContent />
      </div>
      <div>
        <ButtonHouse />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default House;
