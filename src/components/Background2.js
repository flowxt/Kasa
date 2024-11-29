import React from "react";
import aboutImage from "../assets/images/about.jpg"; // Importez l'image

const Background = () => {
  return (
    <div className="bg">
      <img src={aboutImage} alt="about-fond" />
    </div>
  );
};

export default Background;
