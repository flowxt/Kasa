import React, { useEffect, useState } from "react";
import accueilImage from "../assets/images/accueil.jpg"; // Importez l'image

// Je mets pour les mobiles un saut à la ligne après la virgule
const Background = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 540);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 540);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg">
      <img src={accueilImage} alt="accueil-fond" />
      <h2 className="title-bg">
        Chez vous, {isSmallScreen && <br />} partout et ailleurs
      </h2>
    </div>
  );
};

export default Background;
