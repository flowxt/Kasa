import React from "react";
import accueilImage from "../assets/images/accueil.jpg"; // Importez l'image

const Background = () => {
  return (
    <div className="bg">
      <img src={accueilImage} alt="accueil-fond" />

      <h2>Chez vous, partout et ailleurs</h2>
    </div>
  );
};

export default Background;
