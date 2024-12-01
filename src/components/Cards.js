import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import cardData from "../data/data.json";

const Cards = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setData(cardData);
  }, []);

  const handleCardClick = (id) => {
    navigate(`/house/${id}`);
  };

  return (
    <div className="cards-container">
      {data.map((item, index) => (
        <div
          className="card"
          key={index}
          onClick={() => handleCardClick(item.id)}
        >
          <img src={item.cover} alt={item.title} />
          <div className="card-title">
            <h2>{item.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
