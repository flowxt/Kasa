import React from "react";
import { useParams } from "react-router-dom";
import cardData from "../data/data.json";
import ToggleButton from "./ToggleButton";
import "../styles/components/_buttonHouse.scss"; // Assurez-vous d'importer le fichier de styles

const ButtonHouse = () => {
  const { id } = useParams(); // Récupère l'ID de la maison depuis l'URL
  const house = cardData.find((item) => item.id === id); // Trouve la maison correspondante

  if (!house) {
    return <div>Maison non trouvée</div>;
  }

  return (
    <div className="button-house">
      <div className="buttons">
        <div className="button-container">
          <ToggleButton
            title="Description"
            content={<p>{house.description}</p>}
          />
        </div>
        <div className="button-container">
          <ToggleButton
            title="Équipements"
            content={
              <ul>
                {house.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ButtonHouse;