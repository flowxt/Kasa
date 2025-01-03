import React, { useState } from "react";
import { useParams } from "react-router-dom";
import cardData from "../data/data.json";

const Carousel = () => {
  const { id } = useParams(); // Récupère l'ID de la maison depuis l'URL
  const house = cardData.find((item) => item.id === id); // Trouve la maison correspondante
  const [currentIndex, setCurrentIndex] = useState(0); // État pour suivre l'image actuelle

  if (!house) {
    return <div>Maison non trouvée</div>;
    // Essayer d'afficher plutot la page d'erreur
  }

  const pictures = house.pictures;

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={handlePrevClick}>
        &#10094; {/* Flèche gauche */}
      </button>
      <img
        src={pictures[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="carousel-image"
      />
      <button className="carousel-button next" onClick={handleNextClick}>
        &#10095; {/* Flèche droite */}
      </button>
    </div>
  );
};

export default Carousel;
