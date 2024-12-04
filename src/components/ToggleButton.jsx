import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/components/_toggleButton.scss"; // Assurez-vous d'importer le fichier de styles

const ToggleButton = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="toggle-button">
      <button className={`btn ${isActive ? "active" : ""}`} onClick={toggle}>
        {title}
        <FontAwesomeIcon
          icon={isActive ? faChevronUp : faChevronDown}
          className={`icon ${isActive ? "rotate-up" : "rotate-down"}`}
        />
      </button>
      {isActive && <div className="content-active">{content}</div>}
    </div>
  );
};
export default ToggleButton;