import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import cardData from "../data/data.json";

const Cards = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Je charge mes données
    setData(cardData);
  }, []);

  // Gestion des clics sur mes cartes
  const handleCardClick = (id) => {
    // Route de ma carte avec l'id
    navigate(`/house/${id}`);
  };

  // Mon rendu JSX
  return (
    <div className="cards-container">
      {data.map((item, index) => (
        <div
          className="card"
          key={index} //Classe unique pour chaque carte
          onClick={() => handleCardClick(item.id)} // Gestion du clic
        >
          <img src={item.cover} alt={item.title} />
          <div className="card-title">
            <h2>{item.title}</h2> {/* Titre de la carte */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
