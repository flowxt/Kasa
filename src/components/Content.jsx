import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Content = () => {
  const [activeSlides, setActiveSlides] = useState([]);

  const toggleSlide = (index) => {
    setActiveSlides((prevActiveSlides) =>
      prevActiveSlides.includes(index)
        ? prevActiveSlides.filter((i) => i !== index)
        : [...prevActiveSlides, index]
    );
  };

  const slides = [
    {
      title: "Fiabilité",
      content:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      title: "Respect",
      content:
        "La bienveillance fait partie des valeurs de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      content:
        "La qualité de service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.",
    },
    {
      title: "Sécurité",
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <>
      {slides.map((slide, index) => (
        <div className="slide" key={index}>
          <button className="btn" onClick={() => toggleSlide(index)}>
            {slide.title}
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`icon ${
                activeSlides.includes(index) ? "rotate-up" : "rotate-down"
              }`}
            />
          </button>
          <div
            className={`content ${
              activeSlides.includes(index) ? "content-active" : ""
            }`}
          >
            <p>{slide.content}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Content;
