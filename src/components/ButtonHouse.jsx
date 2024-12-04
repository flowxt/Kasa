import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import cardData from "../data/data.json";
import "../styles/components/_buttonHouse.scss"; // Assurez-vous d'importer le fichier de styles

const ButtonHouse = () => {
  const { id } = useParams(); // Récupère l'ID de la maison depuis l'URL
  const house = cardData.find((item) => item.id === id); // Trouve la maison correspondante

  const [activeTabs, setActiveTabs] = useState([]);

  const toggleTab = (tab) => {
    setActiveTabs((prevTabs) =>
      prevTabs.includes(tab)
        ? prevTabs.filter((t) => t !== tab)
        : [...prevTabs, tab]
    );
  };

  if (!house) {
    return <div>Maison non trouvée</div>;
  }

  return (
    <div className="button-house">
      <div className="buttons">
        <div className="button-container">
          <button
            className={`btn ${
              activeTabs.includes("description") ? "active" : ""
            }`}
            onClick={() => toggleTab("description")}
          >
            Description
            <FontAwesomeIcon
              icon={
                activeTabs.includes("description") ? faChevronUp : faChevronDown
              }
              className={`icon ${
                activeTabs.includes("description") ? "rotate-up" : "rotate-down"
              }`}
            />
          </button>
          {activeTabs.includes("description") && (
            <div className="content-active">
              <p>{house.description}</p>
            </div>
          )}
        </div>
        <div className="button-container">
          <button
            className={`btn ${
              activeTabs.includes("equipments") ? "active" : ""
            }`}
            onClick={() => toggleTab("equipments")}
          >
            Équipements
            <FontAwesomeIcon
              icon={
                activeTabs.includes("equipments") ? faChevronUp : faChevronDown
              }
              className={`icon ${
                activeTabs.includes("equipments") ? "rotate-up" : "rotate-down"
              }`}
            />
          </button>
          {activeTabs.includes("equipments") && (
            <div className="content-active">
              <ul>
                {house.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ButtonHouse;
