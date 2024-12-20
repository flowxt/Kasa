import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import cardData from "../data/data.json";
import "../styles/components/_homeContent.scss"; // Assurez-vous d'importer le fichier de styles

const HomeContent = () => {
  const { id } = useParams(); // Récupère l'ID de la maison depuis l'URL
  const house = cardData.find((item) => item.id === id); // Trouve la maison correspondante

  if (!house) {
    return <Navigate to="/404" />;
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className="star-icon"
          style={{ color: i < rating ? "#FF6060" : "gray" }} // J'utilise les valeurs hexadécimales directement
        />
      );
    }
    return stars;
  };

  return (
    <div className="home-content">
      <div className="left-column">
        <h2>{house.title}</h2>
        <p>{house.location}</p>
        <div className="tags">
          {house.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="right-column">
        <div className="host-info">
          <div className="host-name">
            <p>{house.host.name.split(" ")[0]}</p>
            <p>{house.host.name.split(" ")[1]}</p>
          </div>
          <img
            src={house.host.picture}
            alt={house.host.name}
            className="host-picture"
          />
        </div>
        <div className="rating">{renderStars(house.rating)}</div>
      </div>
    </div>
  );
};

export default HomeContent;
