import React from "react";
import aboutImage from "../assets/images/about.jpg"; // Import de l'image

const Background = () => {
  return (
    <div className="bg">
      <img src={aboutImage} alt="about-fond" />
    </div>
  );
};

export default Background;
